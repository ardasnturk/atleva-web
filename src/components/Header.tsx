import { useLanguage, useLocalizedHref } from "../i18n";
import { AppStoreButton } from "./AppStoreButton";
import { LanguageSelect } from "./LanguageSelect";
import { Logo } from "./Logo";

export function Header() {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  const links = [
    { href: href("/#features"), label: t.nav.features },
    { href: href("/#privacy"), label: t.nav.privacy },
    { href: href("/#pro"), label: t.nav.pro },
    { href: href("/#faq"), label: t.nav.faq },
  ];
  return (
    <header className="sticky top-0 z-50 border-b border-ink/5 bg-paper/80 backdrop-blur-lg dark:border-paper/10 dark:bg-ink-deep/80">
      <div className="mx-auto flex max-w-6xl items-center justify-between gap-4 px-4 py-3 sm:px-6">
        <a href={href("/")} className="flex items-center gap-2.5 font-semibold tracking-tight">
          <Logo />
          <span className="text-lg">Atleva</span>
        </a>
        <nav className="hidden items-center gap-6 text-sm md:flex">
          {links.map((link) => (
            <a key={link.href} href={link.href} className="opacity-75 transition hover:opacity-100">
              {link.label}
            </a>
          ))}
        </nav>
        <div className="flex items-center gap-3">
          <LanguageSelect />
          <span className="hidden sm:inline-flex">
            <AppStoreButton compact />
          </span>
        </div>
      </div>
    </header>
  );
}
