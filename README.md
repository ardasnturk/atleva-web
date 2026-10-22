# Atleva website

Landing page, privacy policy, terms of use and support page for **Atleva**, the no-equipment home workout app for
iPhone — in all 11 languages of the app: English, Turkish, German, French, Spanish (Spain/Mexico), Italian,
Portuguese (Brazil), Dutch, Japanese and Korean.

Live at **https://atleva.ardasnturk.com**

- `/` – landing page
- `/privacy/` – privacy policy (linked from the app and App Store Connect)
- `/terms/` – terms of use
- `/support/` – support page (App Store support URL)

Every page accepts `?lang=<code>` (`en`, `tr`, `de`, `fr`, `es`, `es-MX`, `it`, `pt-BR`, `nl`, `ja`, `ko`); without it
the saved choice, then the browser language is used.

## Development

```bash
npm install
npm run dev
```

- Landing texts: `src/i18n/<language>.ts` (typed by `src/i18n/types.ts`).
- Legal and support texts, screenshots and the icon come from the app repository — never edit them here:

  ```bash
  npm run sync        # expects the app at ../atleva, or ATLEVA_APP=/path/to/app
  ```

  It reads `legal/<language>/*.md` and `legal/config.json` (→ `src/content/legal/<language>.json`), the App Store
  screenshots in `marketing/screenshots/raw/69/<locale>/` (→ `public/screens/<language>/`) and the Icon Composer icon
  (→ `public/assets/icon.png`).
- When the app is live, set `APP_STORE_URL` in `src/config.ts`; until then the buttons read "Coming soon".

Privacy: the site has no analytics, cookies, external fonts or third-party scripts. The language choice is kept in
`localStorage` only.

## Deployment

Every push to `main` builds the site and deploys it to GitHub Pages (`.github/workflows/deploy.yml`). The custom
domain is set by `public/CNAME`; DNS is a `CNAME atleva → ardasnturk.github.io` record on Cloudflare.
