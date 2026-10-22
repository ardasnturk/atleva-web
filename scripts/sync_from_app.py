#!/usr/bin/env python3
"""Pulls content from the Atleva app repository so the website never drifts from the app.

    npm run sync                      # expects the app repo at ../atleva (override with ATLEVA_APP=/path)

- legal/<lang>/{privacy,terms,support}.md + legal/config.json → src/content/legal/<lang>.json
- marketing/screenshots/raw/69/<App Store locale>/<slide>.png → public/screens/<lang>/<slide>.jpg (600 px wide)
- Resources/AppIcon.icon                                      → public/assets/icon.png (512 px, via ictool)
"""
import json
import os
import re
import subprocess
import sys
from pathlib import Path

WEB = Path(__file__).resolve().parent.parent
APP = Path(os.environ.get("ATLEVA_APP", WEB.parent / "atleva")).resolve()
if not (APP / "legal").exists():
    sys.exit(f"✗ App repository not found at {APP} (set ATLEVA_APP)")

# Website language → (App Store screenshot locale, legal folder). Matches src/i18n/types.ts.
LANGUAGES = {
    "en": ("en-US", "en"), "tr": ("tr", "tr"), "de": ("de-DE", "de"), "fr": ("fr-FR", "fr"), "es": ("es-ES", "es"),
    "es-MX": ("es-MX", "es-MX"), "it": ("it", "it"), "pt-BR": ("pt-BR", "pt-BR"), "nl": ("nl-NL", "nl"),
    "ja": ("ja", "ja"), "ko": ("ko", "ko"),
}
SLIDES = ["01-goal", "02-bodymap", "03-today", "04-workout", "05-quiet", "06-analysis", "07-progress", "08-coach",
          "09-plan"]

config = json.loads((APP / "legal/config.json").read_text(encoding="utf-8"))
values = {"DEVELOPER": config.get("developer", ""), "EMAIL": config.get("email", ""), "UPDATED": config.get("updated", ""),
          "BASE_URL": config.get("baseURL", "")}
missing = [k for k, v in values.items() if not v]
if missing:
    sys.exit(f"✗ {APP}/legal/config.json is missing {missing}")


def parse(markdown: str) -> dict:
    """Front matter + '# ', '## ', '- ' and paragraphs → {title, updated, intro, sections:[{title, blocks}]}."""
    markdown = re.sub(r"\{\{(\w+)\}\}", lambda m: values[m.group(1)], markdown)
    front, body = markdown.split("---\n", 2)[1:]
    meta = dict(re.findall(r"^(\w+):\s*(.+)$", front, re.M))
    sections, intro = [], []
    current = None
    paragraph, items = [], []

    def target() -> list:
        return current["blocks"] if current else intro

    def flush():
        if paragraph:
            target().append({"p": " ".join(paragraph)}); paragraph.clear()
        if items:
            target().append({"ul": list(items)}); items.clear()

    for line in body.splitlines():
        stripped = line.strip()
        if not stripped:
            flush()
        elif stripped.startswith("## "):
            flush(); current = {"title": stripped[3:], "blocks": []}; sections.append(current)
        elif stripped.startswith("# "):
            flush()
        elif stripped.startswith("- "):
            if paragraph: flush()
            items.append(stripped[2:])
        elif items and line.startswith("  "):
            items[-1] += " " + stripped
        else:
            paragraph.append(stripped)
    flush()
    return {"title": meta["title"], "updated": meta["updated"], "intro": intro, "sections": sections}


legal = {}
for lang, (_, folder) in LANGUAGES.items():
    legal[lang] = {name: parse((APP / "legal" / folder / f"{name}.md").read_text(encoding="utf-8"))
                   for name in ("privacy", "terms", "support")}
folder = WEB / "src/content/legal"
folder.mkdir(parents=True, exist_ok=True)
for lang, docs in legal.items():  # one file per language, loaded on demand by src/content/legal.ts
    (folder / f"{lang}.json").write_text(json.dumps(docs, ensure_ascii=False, indent=1) + "\n", encoding="utf-8")
print(f"✓ legal texts for {len(legal)} languages → src/content/legal/")

count = 0
for lang, (store_locale, _) in LANGUAGES.items():
    for slide in SLIDES:
        source = APP / "marketing/screenshots/raw/69" / store_locale / f"{slide}.png"
        if not source.exists():
            sys.exit(f"✗ missing screenshot {source} — run scripts/screenshots.sh in the app repo")
        target = WEB / "public/screens" / lang / f"{slide}.jpg"
        target.parent.mkdir(parents=True, exist_ok=True)
        subprocess.run(["sips", "-s", "format", "jpeg", "-s", "formatOptions", "82", "--resampleWidth", "600",
                        str(source), "--out", str(target)], check=True, capture_output=True)
        count += 1
print(f"✓ {count} screenshots → public/screens/")

icon = WEB / "public/assets/icon.png"
ICTOOL = "/Applications/Xcode.app/Contents/Applications/Icon Composer.app/Contents/Executables/ictool"
subprocess.run([ICTOOL, str(APP / "Resources/AppIcon.icon"), "--export-image", "--output-file",
                str(icon), "--platform", "iOS", "--rendition", "Default", "--width", "512", "--height", "512",
                "--scale", "1"], check=True, capture_output=True)
print("✓ icon → public/assets/icon.png")
