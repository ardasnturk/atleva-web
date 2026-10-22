import { Fragment, useEffect, type ReactNode } from "react";
import { useLegal, type Block, type LegalKind } from "../content/legal";
import { useLanguage, useLocalizedHref } from "../i18n";

/** Turns URLs and email addresses in plain legal text into links. */
function linkify(text: string): ReactNode[] {
  return text.split(/(https:\/\/[^\s)]+[^\s).,]|[\w.+-]+@[\w-]+\.[\w.-]+\w)/g).map((part, index) => {
    if (part.startsWith("https://")) {
      return <a key={index} href={part} target="_blank" rel="noopener noreferrer" className="break-all text-brand-text underline dark:text-brand-light">{part}</a>;
    }
    if (/^[\w.+-]+@[\w-]+\.[\w.-]+\w$/.test(part)) {
      return <a key={index} href={`mailto:${part}`} className="text-brand-text underline dark:text-brand-light">{part}</a>;
    }
    return <Fragment key={index}>{part}</Fragment>;
  });
}

function Blocks({ blocks }: { blocks: Block[] }) {
  return (
    <>
      {blocks.map((block, index) =>
        "p" in block ? (
          <p key={index} className="mt-4 leading-relaxed opacity-85">{linkify(block.p)}</p>
        ) : (
          <ul key={index} className="mt-4 list-disc space-y-2 ps-6 leading-relaxed opacity-85">
            {block.ul.map((item) => <li key={item}>{linkify(item)}</li>)}
          </ul>
        )
      )}
    </>
  );
}

export function Legal({ kind }: { kind: LegalKind }) {
  const { language, t } = useLanguage();
  const href = useLocalizedHref();
  const doc = useLegal(language, kind);
  useEffect(() => {
    if (doc) document.title = `${doc.title} – Atleva`;
  }, [doc]);
  if (!doc) return <div className="min-h-[60vh]" aria-busy="true" />;
  return (
    <article className="mx-auto max-w-3xl px-4 py-14 sm:px-6 md:py-20">
      <a href={href("/")} className="text-sm opacity-70 hover:opacity-100">← {t.legal.back}</a>
      <h1 className="mt-6 text-4xl font-bold tracking-tight">{doc.title}</h1>
      <p className="mt-2 text-sm opacity-60">{t.legal.updated}: {doc.updated}</p>
      <Blocks blocks={doc.intro} />
      {doc.sections.map((section) => (
        <section key={section.title} className="mt-10">
          <h2 className="text-xl font-semibold">{section.title}</h2>
          <Blocks blocks={section.blocks} />
        </section>
      ))}
    </article>
  );
}
