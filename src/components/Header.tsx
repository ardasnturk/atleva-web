import { useEffect, useState } from "react";
import { useLanguage, useLocalizedHref } from "../i18n";
import { AppStoreButton } from "./AppStoreButton";
import { LanguageSelect } from "./LanguageSelect";
import { Logo } from "./Logo";

/** Floating glass header with a scroll-progress bar; a menu sheet on small screens. */
export function Header({ overHero = false }: { overHero?: boolean }) {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  const [scrolled, setScrolled] = useState(false);
  const [progress, setProgress] = useState(0);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      const max = document.documentElement.scrollHeight - window.innerHeight;
      setScrolled(window.scrollY > 24);
      setProgress(max > 0 ? Math.min(1, window.scrollY / max) : 0);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const links = [
    { href: href("/#new"), label: t.nav.new },
    { href: href("/#features"), label: t.nav.features },
    { href: href("/#privacy"), label: t.nav.privacy },
    { href: href("/#pro"), label: t.nav.pro },
    { href: href("/#faq"), label: t.nav.faq },
  ];
  // Over the dark hero the header is light-on-dark until it turns into a solid bar.
  const onDark = overHero && !scrolled && !open;

  return (
    <header className="fixed inset-x-0 top-0 z-50 px-3 pt-3 sm:px-4">
      <div
        className={`relative mx-auto flex max-w-6xl items-center justify-between gap-3 rounded-2xl px-3 py-2 transition-all duration-500 sm:px-4 ${
          onDark
            ? "text-paper"
            : "bg-paper/80 text-ink shadow-lg shadow-ink/5 ring-1 ring-ink/5 backdrop-blur-xl dark:bg-ink/80 dark:text-paper dark:ring-paper/10"
        }`}
      >
        <a href={href("/")} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo className="h-8 w-8" />
          <span className="text-lg">Atleva</span>
        </a>
        <nav className="hidden items-center gap-1 text-sm lg:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="rounded-full px-3 py-1.5 opacity-80 transition hover:bg-current/10 hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-2">
          <LanguageSelect />
          <span className="hidden sm:inline-flex">
            <AppStoreButton compact inverted={onDark} />
          </span>
          <button type="button" onClick={() => setOpen((v) => !v)} aria-expanded={open} aria-controls="mobile-menu"
            className="grid h-9 w-9 place-items-center rounded-full transition hover:bg-current/10 lg:hidden">
            <span className="sr-only">{t.nav.menu}</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" aria-hidden="true">
              {open ? <path d="M6 6l12 12M18 6L6 18" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
            </svg>
          </button>
        </div>
        <span className="pointer-events-none absolute inset-x-4 bottom-0 h-0.5 origin-left rounded-full bg-gradient-to-r from-brand via-brand-light to-energy rtl:origin-right"
          style={{ transform: `scaleX(${progress})`, opacity: scrolled ? 1 : 0 }} aria-hidden="true" />
      </div>
      {open && (
        <nav id="mobile-menu" className="toast-in mx-auto mt-2 max-w-6xl rounded-2xl bg-paper/95 p-2 shadow-xl ring-1 ring-ink/5 backdrop-blur-xl lg:hidden dark:bg-ink/95 dark:ring-paper/10">
          {links.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}
              className="block rounded-xl px-4 py-3 font-medium transition hover:bg-brand-soft dark:hover:bg-paper/10">
              {link.label}
            </a>
          ))}
          <div className="p-2 sm:hidden">
            <AppStoreButton compact />
          </div>
        </nav>
      )}
    </header>
  );
}
