import { useEffect } from "react";
import { AppStoreButton } from "../components/AppStoreButton";
import { PhoneFrame } from "../components/PhoneFrame";
import { screenshot } from "../config";
import { useLanguage, useLocalizedHref } from "../i18n";

const FEATURE_SHOTS = ["01-goal", "02-bodymap", "04-workout", "05-quiet", "09-plan", "06-analysis"];
const FEATURE_TINTS = ["bg-brand-soft", "bg-mist", "bg-energy-soft", "bg-brand-soft", "bg-mist", "bg-energy-soft"];

function Check({ className = "text-brand-text dark:text-brand-light" }: { className?: string }) {
  return (
    <svg className={`mt-0.5 h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  );
}

/** Soft green and amber glows, purely decorative. */
function Glows() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden" aria-hidden="true">
      <div className="absolute -end-24 -top-24 h-80 w-80 rounded-full bg-mint/50 blur-2xl dark:bg-brand/15" />
      <div className="absolute -start-20 top-1/2 h-64 w-64 rounded-full bg-energy/20 blur-2xl dark:bg-energy/10" />
      <div className="absolute bottom-0 end-1/3 h-40 w-40 rounded-full bg-brand/15 blur-2xl" />
    </div>
  );
}

function Hero() {
  const { t, language } = useLanguage();
  return (
    <section className="relative overflow-hidden">
      <Glows />
      <div className="relative mx-auto grid max-w-6xl items-center gap-12 px-4 pb-16 pt-12 sm:px-6 md:grid-cols-[1.15fr_1fr] md:pb-24 md:pt-20">
        <div>
          <p className="text-sm font-semibold tracking-wide text-brand-text dark:text-brand-light">{t.hero.eyebrow}</p>
          <h1 className="mt-4 text-4xl font-bold leading-tight tracking-tight sm:text-5xl lg:text-6xl">
            {t.hero.title}
            <br />
            <span className="text-brand-text dark:text-brand-light">{t.hero.highlight}</span>
          </h1>
          <p className="mt-6 max-w-xl text-lg opacity-80">{t.hero.subtitle}</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <AppStoreButton />
          </div>
          <ul className="mt-8 flex flex-wrap gap-2">
            {t.hero.badges.map((badge) => (
              <li key={badge} className="rounded-full bg-ink/5 px-3 py-1 text-sm dark:bg-paper/10">
                {badge}
              </li>
            ))}
          </ul>
        </div>
        <PhoneFrame src={screenshot(language, "03-today")} alt={t.hero.screenshotAlt} eager className="md:max-w-[320px]" />
      </div>
    </section>
  );
}

function Trust() {
  const { t } = useLanguage();
  return (
    <section className="border-y border-ink/5 bg-white/60 dark:border-paper/10 dark:bg-ink/40">
      <ul className="mx-auto grid max-w-6xl gap-6 px-4 py-10 sm:grid-cols-2 sm:px-6 lg:grid-cols-4">
        {t.trust.map((item) => (
          <li key={item.title}>
            <p className="font-semibold">{item.title}</p>
            <p className="mt-1 text-sm opacity-70">{item.text}</p>
          </li>
        ))}
      </ul>
    </section>
  );
}

function Features() {
  const { t, language } = useLanguage();
  return (
    <section id="features" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl">{t.features.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.features.subtitle}</p>
        </div>
        <div className="mt-16 space-y-20 md:space-y-28">
          {t.features.items.map((item, index) => (
            <div key={item.title} className="grid items-center gap-10 md:grid-cols-2 md:gap-16">
              <div className={index % 2 === 1 ? "md:order-2" : ""}>
                <div className={`rounded-[2.5rem] p-6 sm:p-10 ${FEATURE_TINTS[index]} dark:bg-ink/60`}>
                  <PhoneFrame src={screenshot(language, FEATURE_SHOTS[index])} alt={item.alt} className="max-w-[260px]" />
                </div>
              </div>
              <div>
                <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{item.title}</h3>
                <p className="mt-4 text-lg opacity-80">{item.text}</p>
                <ul className="mt-6 space-y-3">
                  {item.points.map((point) => (
                    <li key={point} className="flex gap-3">
                      <Check />
                      <span>{point}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

function Privacy() {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  return (
    <section id="privacy" className="scroll-mt-20 bg-ink py-20 text-paper md:py-28 dark:bg-ink/70">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold tracking-wide text-brand-light">{t.privacy.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.privacy.title}</h2>
          <p className="mt-4 text-lg opacity-80">{t.privacy.text}</p>
        </div>
        <ul className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {t.privacy.points.map((point) => (
            <li key={point.title} className="rounded-2xl bg-paper/5 p-5 ring-1 ring-paper/10">
              <p className="font-semibold text-brand-light">{point.title}</p>
              <p className="mt-2 text-sm opacity-80">{point.text}</p>
            </li>
          ))}
        </ul>
        <a href={href("/privacy/")} className="mt-8 inline-block font-semibold text-brand-light underline-offset-4 hover:underline">
          {t.privacy.link} →
        </a>
      </div>
    </section>
  );
}

function Pro() {
  const { t, language } = useLanguage();
  return (
    <section id="pro" className="scroll-mt-20 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="mx-auto max-w-2xl text-center">
          <p className="text-sm font-semibold tracking-wide text-brand-text dark:text-brand-light">{t.pro.eyebrow}</p>
          <h2 className="mt-3 text-3xl font-bold tracking-tight sm:text-4xl">{t.pro.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.pro.subtitle}</p>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          <div className="rounded-3xl bg-white p-8 ring-1 ring-ink/10 dark:bg-ink/60 dark:ring-paper/10">
            <h3 className="text-xl font-bold">{t.pro.freeTitle}</h3>
            <ul className="mt-6 space-y-3">
              {t.pro.free.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-3xl bg-gradient-to-br from-brand-soft to-energy-soft p-8 ring-1 ring-ink/10 dark:from-brand/20 dark:to-energy/10 dark:ring-paper/10">
            <h3 className="flex items-center gap-2 text-xl font-bold">
              {t.pro.proTitle}
              <span className="rounded-full bg-ink px-2 py-0.5 text-xs font-bold text-energy">PRO</span>
            </h3>
            <ul className="mt-6 space-y-3">
              {t.pro.proItems.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check className="text-[#9a5600] dark:text-energy" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
            <div className="mt-8 grid grid-cols-2 gap-4">
              <PhoneFrame src={screenshot(language, "07-progress")} alt={t.pro.progressAlt} className="rounded-[1.8rem] p-1.5 [&>img]:rounded-[1.4rem]" />
              <PhoneFrame src={screenshot(language, "08-coach")} alt={t.pro.coachAlt} className="rounded-[1.8rem] p-1.5 [&>img]:rounded-[1.4rem]" />
            </div>
          </div>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm opacity-70">{t.pro.note}</p>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="scroll-mt-20 bg-white/60 py-20 md:py-28 dark:bg-ink/40">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <h2 className="text-center text-3xl font-bold tracking-tight sm:text-4xl">{t.faq.title}</h2>
        <div className="mt-12 divide-y divide-ink/10 dark:divide-paper/10">
          {t.faq.items.map((item) => (
            <details key={item.q} className="group py-5">
              <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold">
                {item.q}
                <span className="text-brand-text transition group-open:rotate-45 dark:text-brand-light" aria-hidden="true">+</span>
              </summary>
              <p className="mt-3 opacity-80">{item.a}</p>
            </details>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const { t } = useLanguage();
  return (
    <section className="px-4 py-20 sm:px-6">
      <div className="relative mx-auto max-w-5xl overflow-hidden rounded-[2.5rem] bg-ink px-6 py-16 text-center text-paper sm:px-12">
        <div className="pointer-events-none absolute -end-16 -top-16 h-56 w-56 rounded-full bg-brand/30 blur-2xl" aria-hidden="true" />
        <h2 className="relative text-3xl font-bold tracking-tight sm:text-4xl">{t.cta.title}</h2>
        <p className="relative mx-auto mt-4 max-w-xl text-lg opacity-80">{t.cta.text}</p>
        <div className="relative mt-8 flex justify-center">
          <AppStoreButton inverted />
        </div>
      </div>
    </section>
  );
}

export function Home() {
  // The page renders after load, so the browser can't jump to /#privacy by itself.
  useEffect(() => {
    if (window.location.hash) document.getElementById(window.location.hash.slice(1))?.scrollIntoView();
  }, []);
  return (
    <>
      <Hero />
      <Trust />
      <Features />
      <Privacy />
      <Pro />
      <Faq />
      <Cta />
    </>
  );
}
