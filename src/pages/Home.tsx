import { useEffect, useRef, useState } from "react";
import { AppStoreButton } from "../components/AppStoreButton";
import { CountUp, Reveal, Tilt, useCycle, useInView } from "../components/Motion";
import { LandscapeFrame, PhoneFrame, WatchFrame } from "../components/PhoneFrame";
import { screenshot } from "../config";
import { useLanguage, useLocalizedHref } from "../i18n";

const FEATURE_SHOTS = ["01-goal", "02-bodymap", "04-workout", "05-quiet", "09-plan", "06-analysis"];
const WATCH_SHOTS = ["watch-run", "watch-phone", "watch-today"];

// ─── Small pieces ───────────────────────────────────────────────────────────

function Check({ className = "text-brand-text dark:text-brand-light" }: { className?: string }) {
  return (
    <svg className={`mt-0.5 h-5 w-5 shrink-0 ${className}`} viewBox="0 0 20 20" fill="currentColor" aria-hidden="true">
      <path fillRule="evenodd" d="M16.7 5.3a1 1 0 0 1 0 1.4l-8 8a1 1 0 0 1-1.4 0l-4-4a1 1 0 1 1 1.4-1.4L8 12.6l7.3-7.3a1 1 0 0 1 1.4 0z" clipRule="evenodd" />
    </svg>
  );
}

function ProBadge({ className = "" }: { className?: string }) {
  return (
    <span className={`inline-flex items-center rounded-full bg-gradient-to-r from-energy to-[#ff7a59] px-2 py-0.5 text-[10px] font-black tracking-wider text-ink ${className}`}>
      PRO
    </span>
  );
}

function Eyebrow({ children, light = false }: { children: React.ReactNode; light?: boolean }) {
  return (
    <p className={`inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.14em] ${light ? "text-brand-light" : "text-brand-text dark:text-brand-light"}`}>
      <span className="h-px w-6 bg-current" aria-hidden="true" />
      {children}
    </p>
  );
}

function Icon({ name, className = "h-5 w-5" }: { name: "heart" | "flame" | "check" | "bell" | "spark" | "download" | "lock" | "chip" | "trash" | "eye"; className?: string }) {
  const paths: Record<string, React.ReactNode> = {
    heart: <path d="M12 21s-7.5-4.6-9.6-9.3C.9 8.3 3 4.5 6.7 4.5c2.1 0 3.6 1.1 4.3 2.4.7-1.3 2.2-2.4 4.3-2.4 3.7 0 5.8 3.8 4.3 7.2C19.5 16.4 12 21 12 21z" fill="currentColor" />,
    flame: <path d="M12 2c1 3.5 5 6 5 11a5 5 0 0 1-10 0c0-2.2 1.1-3.8 2.3-5 .2 1.6 1 2.8 2.2 3.3C11 8.6 11 5 12 2z" fill="currentColor" />,
    check: <path d="M5 12.5l4.2 4.2L19 7" fill="none" stroke="currentColor" strokeWidth="2.6" strokeLinecap="round" strokeLinejoin="round" />,
    bell: <path d="M6 16V11a6 6 0 1 1 12 0v5l1.5 2h-15L6 16zm4 4a2 2 0 0 0 4 0" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
    spark: <path d="M12 3l2 6 6 2-6 2-2 6-2-6-6-2 6-2 2-6z" fill="currentColor" />,
    download: <path d="M12 4v11m0 0l-4.5-4.5M12 15l4.5-4.5M5 19h14" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />,
    lock: <path d="M7 11V8a5 5 0 0 1 10 0v3M6 11h12v9H6z" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
    chip: <path d="M8 8h8v8H8zM4 10h2M4 14h2M18 10h2M18 14h2M10 4v2M14 4v2M10 18v2M14 18v2M6 6h12v12H6z" fill="none" stroke="currentColor" strokeWidth="1.6" />,
    trash: <path d="M5 7h14M10 7V5h4v2M7 7l1 13h8l1-13" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinejoin="round" />,
    eye: <path d="M2 12s3.6-7 10-7 10 7 10 7-3.6 7-10 7S2 12 2 12zm10 3a3 3 0 1 0 0-6 3 3 0 0 0 0 6zM4 20L20 4" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" />,
  };
  return (
    <svg viewBox="0 0 24 24" className={className} aria-hidden="true">
      {paths[name]}
    </svg>
  );
}

/** Slow drifting colour blobs, purely decorative. */
function Aurora({ className = "" }: { className?: string }) {
  return (
    <div className={`pointer-events-none absolute inset-0 overflow-hidden ${className}`} aria-hidden="true">
      <div className="absolute -start-[10%] -top-[20%] h-[60vmax] w-[60vmax] animate-aurora rounded-full bg-brand/35 blur-[90px]" />
      <div className="absolute -end-[15%] top-[10%] h-[45vmax] w-[45vmax] animate-aurora rounded-full bg-energy/20 blur-[100px] [animation-delay:-6s]" />
      <div className="absolute bottom-[-25%] start-[30%] h-[40vmax] w-[40vmax] animate-aurora rounded-full bg-[#ff7a59]/15 blur-[110px] [animation-delay:-12s]" />
      <div className="bg-grid absolute inset-0" />
    </div>
  );
}

function Chip({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`flex items-center gap-2 rounded-2xl bg-paper/90 px-3.5 py-2.5 text-sm font-semibold text-ink shadow-xl shadow-black/20 ring-1 ring-white/40 backdrop-blur-md ${className}`}>
      {children}
    </div>
  );
}

// ─── Hero ───────────────────────────────────────────────────────────────────

function Hero() {
  const { t, language } = useLanguage();
  const href = useLocalizedHref();
  return (
    <section className="relative isolate overflow-hidden bg-night text-paper">
      <Aurora />
      <div className="relative mx-auto grid min-h-[100svh] max-w-6xl items-center gap-14 px-4 pb-20 pt-28 sm:px-6 md:pt-32 lg:grid-cols-[1.1fr_1fr] lg:gap-8">
        <div className="text-center lg:text-start">
          <Reveal>
            <a href={href("/#new")} className="group inline-flex items-center gap-2 rounded-full bg-white/10 py-1.5 ps-2 pe-4 text-sm font-medium ring-1 ring-white/15 backdrop-blur transition hover:bg-white/15">
              <span className="relative flex h-2.5 w-2.5">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-brand-light opacity-75" />
                <span className="relative inline-flex h-2.5 w-2.5 rounded-full bg-brand-light" />
              </span>
              {t.hero.newBadge}
              <span className="transition-transform group-hover:translate-x-0.5 rtl:rotate-180" aria-hidden="true">→</span>
            </a>
          </Reveal>
          <Reveal delay={100}>
            <h1 className="mt-7 text-[2.6rem] font-black leading-[1.02] tracking-tight sm:text-6xl lg:text-7xl">
              {t.hero.title}
              <br />
              <span className="text-gradient">{t.hero.highlight}</span>
            </h1>
          </Reveal>
          <Reveal delay={200}>
            <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-paper/75 lg:mx-0">{t.hero.subtitle}</p>
          </Reveal>
          <Reveal delay={300}>
            <div className="mt-9 flex flex-wrap items-center justify-center gap-4 lg:justify-start">
              <AppStoreButton inverted />
            </div>
          </Reveal>
          <Reveal delay={400}>
            <ul className="mt-8 flex flex-wrap justify-center gap-2 lg:justify-start">
              {t.hero.badges.map((badge) => (
                <li key={badge} className="flex items-center gap-1.5 rounded-full bg-white/5 px-3 py-1 text-sm text-paper/85 ring-1 ring-white/10">
                  <Icon name="check" className="h-3.5 w-3.5 text-brand-light" />
                  {badge}
                </li>
              ))}
            </ul>
          </Reveal>
        </div>

        <Reveal variant="zoom" delay={150} className="relative mx-auto w-full max-w-[420px]">
          {/* pulse rings behind the phone */}
          <div className="absolute start-1/2 top-1/2 -z-10 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rtl:translate-x-1/2" aria-hidden="true">
            <span className="absolute inset-0 animate-ping-slow rounded-full border border-brand-light/40" />
            <span className="absolute inset-0 animate-ping-slow rounded-full border border-brand-light/30 [animation-delay:1.5s]" />
            <span className="absolute inset-6 rounded-full bg-brand/30 blur-3xl" />
          </div>
          <div className="animate-float">
            <Tilt>
              <PhoneFrame src={screenshot(language, "03-today")} alt={t.hero.screenshotAlt} eager className="max-w-[290px] shadow-black/60" />
            </Tilt>
          </div>
          <div className="absolute -start-2 bottom-6 w-[34%] min-w-[110px] animate-float-slow sm:-start-6 [animation-delay:-3s]">
            <WatchFrame>
              <img src={screenshot(language, "watch-run")} alt={t.hero.watchAlt} width={416} height={496} className="h-full w-full object-cover" />
            </WatchFrame>
          </div>
          <Chip className="absolute -end-1 top-[14%] animate-float [animation-delay:-2s] sm:-end-6">
            <Icon name="heart" className="h-5 w-5 animate-heartbeat text-coral" />
            {t.hero.chips.heartRate}
          </Chip>
          <Chip className="absolute -start-1 top-[30%] animate-float-slow sm:-start-10">
            <Icon name="flame" className="h-5 w-5 text-energy" />
            {t.hero.chips.streak}
          </Chip>
          <Chip className="absolute -end-1 bottom-[18%] animate-float [animation-delay:-4s] sm:-end-8">
            <span className="grid h-5 w-5 place-items-center rounded-full bg-brand text-paper">
              <Icon name="check" className="h-3.5 w-3.5" />
            </span>
            {t.hero.chips.form}
          </Chip>
        </Reveal>
      </div>
      {/* scroll cue */}
      <div className="pointer-events-none absolute inset-x-0 bottom-5 hidden justify-center md:flex" aria-hidden="true">
        <div className="flex h-10 w-6 justify-center rounded-full border-2 border-paper/30 pt-2">
          <span className="h-2 w-1 animate-bounce rounded-full bg-paper/70" />
        </div>
      </div>
    </section>
  );
}

function Marquee() {
  const { t } = useLanguage();
  const items = [...t.marquee, ...t.marquee];
  return (
    <div className="relative overflow-hidden border-y border-white/10 bg-gradient-to-r from-brand via-[#00b386] to-brand py-4 text-paper" aria-hidden="true">
      <div className="marquee-mask">
        <div className="flex w-max animate-marquee gap-8 rtl:[animation-direction:reverse]">
          {items.map((item, index) => (
            <span key={index} className="flex items-center gap-8 whitespace-nowrap text-lg font-bold tracking-tight sm:text-xl">
              {item}
              <Icon name="spark" className="h-4 w-4 text-energy" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}

function Stats() {
  const { t } = useLanguage();
  const stats = [
    { value: <CountUp to={119} />, label: t.stats.exercises },
    { value: <CountUp to={10} />, label: t.stats.minutes },
    { value: <span>2×2<span className="text-2xl sm:text-3xl"> m</span></span>, label: t.stats.space },
    { value: <CountUp to={0} />, label: t.stats.equipment },
  ];
  return (
    <section className="mx-auto max-w-6xl px-4 py-16 sm:px-6 md:py-20">
      <ul className="grid grid-cols-2 gap-x-6 gap-y-10 lg:grid-cols-4">
        {stats.map((stat, index) => (
          <Reveal as="li" key={stat.label} delay={index * 90} className="text-center">
            <p className="bg-gradient-to-br from-brand-text to-brand bg-clip-text text-5xl font-black tracking-tight text-transparent sm:text-6xl dark:from-brand-light dark:to-mint">
              {stat.value}
            </p>
            <p className="mx-auto mt-2 max-w-[14rem] text-sm font-medium opacity-70 sm:text-base">{stat.label}</p>
          </Reveal>
        ))}
      </ul>
    </section>
  );
}

// ─── What's new ─────────────────────────────────────────────────────────────

function CameraCard() {
  const { t, language } = useLanguage();
  const c = t.whatsNew.camera;
  return (
    <Reveal className="group relative overflow-hidden rounded-[2rem] bg-night p-6 text-paper sm:p-8 lg:col-span-2">
      <div className="pointer-events-none absolute -end-24 -top-24 h-72 w-72 rounded-full bg-brand/40 blur-3xl transition-transform duration-700 group-hover:scale-125" aria-hidden="true" />
      <div className="relative flex items-center gap-2">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{c.title}</h3>
        <ProBadge />
      </div>
      <p className="relative mt-3 max-w-xl text-paper/75">{c.text}</p>
      <div className="relative mt-6">
        <LandscapeFrame src={screenshot(language, "00-camera")} alt={c.alt}>
          {/* scanning line */}
          <span className="pointer-events-none absolute inset-x-0 h-16 -translate-y-1/2 animate-scan bg-gradient-to-b from-transparent via-brand-light/25 to-transparent" aria-hidden="true">
            <span className="absolute inset-x-0 top-1/2 h-px bg-brand-light/80 shadow-[0_0_12px_2px_rgba(79,227,178,0.7)]" />
          </span>
        </LandscapeFrame>
      </div>
      <ul className="relative mt-6 grid gap-3 sm:grid-cols-3">
        {c.points.map((point) => (
          <li key={point} className="flex gap-2.5 rounded-2xl bg-white/5 p-3 text-sm ring-1 ring-white/10">
            <Check className="text-brand-light" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function WatchCard() {
  const { t, language } = useLanguage();
  const w = t.whatsNew.watch;
  const { ref, inView } = useInView<HTMLDivElement>(0.3);
  const index = useCycle(WATCH_SHOTS.length, 2800, inView);
  return (
    <Reveal delay={120} className="relative flex flex-col overflow-hidden rounded-[2rem] bg-gradient-to-br from-brand to-[#007a5a] p-6 text-paper sm:p-8 lg:row-span-2">
      <div className="pointer-events-none absolute -bottom-20 -start-20 h-64 w-64 rounded-full bg-energy/30 blur-3xl" aria-hidden="true" />
      <div className="relative flex items-center gap-2">
        <h3 className="text-2xl font-bold tracking-tight sm:text-3xl">{w.title}</h3>
        <ProBadge />
      </div>
      <p className="relative mt-3 text-paper/85">{w.text}</p>
      <div className="flex flex-1 items-center justify-center py-12">
      <div ref={ref} className="relative w-[62%] max-w-[230px]">
        <WatchFrame>
          {WATCH_SHOTS.map((shot, i) => (
            <img key={shot} src={screenshot(language, shot)} alt={w.alts[i]} width={416} height={496} loading="lazy"
              className={`absolute inset-0 h-full w-full object-cover transition-all duration-700 ${i === index ? "scale-100 opacity-100" : "scale-105 opacity-0"}`}
              aria-hidden={i !== index} />
          ))}
        </WatchFrame>
        <div className="absolute -end-8 -top-6 flex items-center gap-1.5 rounded-full bg-paper px-3 py-1.5 text-sm font-bold text-ink shadow-xl">
          <Icon name="heart" className="h-4 w-4 animate-heartbeat text-coral" />
          {t.hero.chips.heartRate}
        </div>
        <div className="mt-8 flex justify-center gap-1.5" aria-hidden="true">
          {WATCH_SHOTS.map((shot, i) => (
            <span key={shot} className={`h-1.5 rounded-full bg-paper transition-all duration-500 ${i === index ? "w-6" : "w-1.5 opacity-40"}`} />
          ))}
        </div>
      </div>
      </div>
      <ul className="relative space-y-3">
        {w.points.map((point) => (
          <li key={point} className="flex gap-2.5 text-sm">
            <Check className="text-energy" />
            <span>{point}</span>
          </li>
        ))}
      </ul>
    </Reveal>
  );
}

function RemindersCard() {
  const { t } = useLanguage();
  const r = t.whatsNew.reminders;
  const { ref, inView } = useInView<HTMLDivElement>(0.4);
  const index = useCycle(r.samples.length, 3200, inView);
  // Newest notification on top, the other two stacked behind it.
  const order = r.samples.map((_, i) => (index - i + r.samples.length) % r.samples.length);
  return (
    <Reveal delay={60} className="relative overflow-hidden rounded-[2rem] bg-energy-soft p-6 sm:p-8 dark:bg-energy/10">
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold tracking-tight">{r.title}</h3>
        <ProBadge />
      </div>
      <p className="mt-3 opacity-80">{r.text}</p>
      <div ref={ref} className="relative mt-8 h-40">
        {order.map((sampleIndex, depth) => {
          const sample = r.samples[sampleIndex];
          return (
            <div key={sampleIndex}
              className="absolute inset-x-0 top-0 rounded-2xl bg-white p-3.5 shadow-lg ring-1 ring-ink/5 transition-all duration-700 dark:bg-[#1c2a25] dark:ring-paper/10"
              style={{ transform: `translateY(${depth * 14}px) scale(${1 - depth * 0.06})`, opacity: depth === 0 ? 1 : 0.7 - depth * 0.2, zIndex: 10 - depth }}
              aria-hidden={depth !== 0}>
              <div className={`flex gap-3 transition-opacity duration-500 ${depth === 0 ? "opacity-100" : "opacity-0"}`}>
              <img src="/assets/icon.png" alt="" className="h-9 w-9 shrink-0 rounded-[22%]" />
              <div className="min-w-0 flex-1">
                <div className="flex items-baseline justify-between gap-2">
                  <p className="truncate text-sm font-semibold">{sample.title}</p>
                  <span className="shrink-0 text-xs opacity-50">{r.now}</span>
                </div>
                <p className="mt-0.5 line-clamp-2 text-sm opacity-75">{sample.text}</p>
              </div>
              </div>
            </div>
          );
        })}
      </div>
    </Reveal>
  );
}

function VoiceCard() {
  const { t } = useLanguage();
  const v = t.whatsNew.voice;
  const bars = [0.5, 0.9, 0.6, 1, 0.7, 0.4, 0.85, 0.55, 0.95, 0.65, 0.45, 0.8, 0.6, 0.9, 0.5];
  return (
    <Reveal delay={180} className="relative overflow-hidden rounded-[2rem] bg-white p-6 ring-1 ring-ink/5 sm:p-8 dark:bg-ink dark:ring-paper/10">
      <div className="flex items-center gap-2">
        <h3 className="text-2xl font-bold tracking-tight">{v.title}</h3>
        <ProBadge />
      </div>
      <p className="mt-3 opacity-80">{v.text}</p>
      <div className="mt-7 flex items-center gap-4">
        <div className="grid h-12 w-12 shrink-0 place-items-center rounded-full bg-brand text-paper shadow-lg shadow-brand/30">
          <svg viewBox="0 0 24 24" className="h-6 w-6" fill="currentColor" aria-hidden="true">
            <path d="M12 15a3 3 0 0 0 3-3V6a3 3 0 1 0-6 0v6a3 3 0 0 0 3 3zm5-3a5 5 0 0 1-10 0H5a7 7 0 0 0 6 6.9V21h2v-2.1A7 7 0 0 0 19 12h-2z" />
          </svg>
        </div>
        <div className="flex h-12 flex-1 items-center gap-1" aria-hidden="true">
          {bars.map((height, i) => (
            <span key={i} className="w-full origin-center animate-eq rounded-full bg-gradient-to-t from-brand to-brand-light"
              style={{ height: `${height * 100}%`, animationDelay: `${(i % 5) * -0.22}s` }} />
          ))}
        </div>
      </div>
      <blockquote className="relative mt-6 rounded-2xl rounded-ss-sm bg-brand-soft px-4 py-3 font-semibold text-brand-text dark:bg-brand/20 dark:text-brand-light">
        “{v.quote}”
      </blockquote>
    </Reveal>
  );
}

function SmallerCard() {
  const { t } = useLanguage();
  const s = t.whatsNew.smaller;
  const { ref, inView } = useInView<HTMLDivElement>(0.5);
  return (
    <Reveal className="flex flex-col gap-5 rounded-[2rem] bg-mist p-6 sm:flex-row sm:items-center sm:p-8 lg:col-span-3 dark:bg-ink/70">
      <div className="grid h-14 w-14 shrink-0 place-items-center rounded-2xl bg-ink text-brand-light dark:bg-paper/10">
        <Icon name="download" className="h-7 w-7" />
      </div>
      <div className="flex-1">
        <h3 className="text-xl font-bold tracking-tight">{s.title}</h3>
        <p className="mt-1 opacity-75">{s.text}</p>
      </div>
      <div ref={ref} className="w-full sm:w-64" aria-hidden="true">
        <div className="h-2.5 overflow-hidden rounded-full bg-ink/10 dark:bg-paper/10">
          <div className="h-full rounded-full bg-gradient-to-r from-brand to-brand-light transition-[width] duration-[2200ms] ease-out" style={{ width: inView ? "100%" : "8%" }} />
        </div>
        <div className="mt-2 flex justify-between text-xs font-semibold tabular-nums opacity-60">
          <span>30 MB</span>
          <span className="text-brand-text dark:text-brand-light">→ 25 MB</span>
        </div>
      </div>
    </Reveal>
  );
}

function WhatsNew() {
  const { t } = useLanguage();
  return (
    <section id="new" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.whatsNew.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{t.whatsNew.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.whatsNew.subtitle}</p>
        </Reveal>
        <div className="mt-14 grid gap-5 lg:grid-cols-3">
          <CameraCard />
          <WatchCard />
          <div className="grid gap-5 sm:grid-cols-2 lg:col-span-2">
            <RemindersCard />
            <VoiceCard />
          </div>
          <SmallerCard />
        </div>
      </div>
    </section>
  );
}

// ─── Features: sticky phone that follows the story on large screens ────────

function Features() {
  const { t, language } = useLanguage();
  const [active, setActive] = useState(0);
  const items = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    if (!("IntersectionObserver" in window)) return;
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActive(Number((entry.target as HTMLElement).dataset.index));
        }
      },
      { rootMargin: "-45% 0px -45% 0px" }
    );
    items.current.forEach((element) => element && observer.observe(element));
    return () => observer.disconnect();
  }, []);

  return (
    <section id="features" className="relative scroll-mt-24 bg-white py-20 md:py-28 dark:bg-ink/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.features.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{t.features.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.features.subtitle}</p>
        </Reveal>
        <div className="mt-16 lg:grid lg:grid-cols-[1fr_1fr] lg:gap-16">
          <div>
            {t.features.items.map((item, index) => (
              <div key={item.title} ref={(element) => { items.current[index] = element; }} data-index={index}
                className="grid items-center gap-8 py-10 md:grid-cols-2 lg:flex lg:min-h-[78vh] lg:py-0">
                <div className={`lg:hidden ${index % 2 === 1 ? "md:order-2" : ""}`}>
                  <Reveal variant="zoom" className="rounded-[2.5rem] bg-gradient-to-br from-brand-soft to-mist p-6 dark:from-brand/15 dark:to-ink">
                    <PhoneFrame src={screenshot(language, FEATURE_SHOTS[index])} alt={item.alt} className="max-w-[240px]" />
                  </Reveal>
                </div>
                <Reveal variant="left">
                  <div className={`transition-opacity duration-500 ${active === index ? "lg:opacity-100" : "lg:opacity-30"}`}>
                  <span className="text-sm font-black tabular-nums text-brand-text dark:text-brand-light">0{index + 1}</span>
                  <h3 className="mt-2 text-3xl font-bold tracking-tight sm:text-4xl">{item.title}</h3>
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
                </Reveal>
              </div>
            ))}
          </div>
          <div className="hidden lg:block">
            <div className="sticky top-[12vh] flex h-[76vh] items-center justify-center">
              <div className="absolute inset-[8%] rounded-[3rem] bg-gradient-to-br from-brand-soft via-mist to-energy-soft dark:from-brand/20 dark:via-ink dark:to-energy/10" aria-hidden="true" />
              <div className="relative h-full max-h-[640px] w-full max-w-[300px]">
                {FEATURE_SHOTS.map((shot, index) => (
                  <div key={shot} aria-hidden={index !== active}
                    className={`absolute inset-0 flex items-center transition-all duration-700 ease-out ${
                      index === active ? "translate-y-0 scale-100 opacity-100" : index < active ? "-translate-y-8 scale-95 opacity-0" : "translate-y-8 scale-95 opacity-0"
                    }`}>
                    <PhoneFrame src={screenshot(language, shot)} alt={t.features.items[index].alt} className="max-w-[290px]" />
                  </div>
                ))}
              </div>
              <div className="absolute end-0 top-1/2 flex -translate-y-1/2 flex-col gap-2" aria-hidden="true">
                {FEATURE_SHOTS.map((shot, index) => (
                  <span key={shot} className={`w-1.5 rounded-full transition-all duration-500 ${index === active ? "h-8 bg-brand" : "h-1.5 bg-ink/20 dark:bg-paper/20"}`} />
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// ─── Motivation ─────────────────────────────────────────────────────────────

function Motivation() {
  const { t } = useLanguage();
  const m = t.motivation;
  const { ref, inView } = useInView<HTMLDivElement>(0.35);
  const radius = 84;
  const circumference = 2 * Math.PI * radius;
  const done = [true, false, true, true, false, true, false];
  return (
    <section className="relative isolate overflow-hidden bg-night py-20 text-paper md:py-28">
      <Aurora className="opacity-70" />
      <div className="relative mx-auto grid max-w-6xl items-center gap-14 px-4 sm:px-6 lg:grid-cols-2">
        <div>
          <Reveal>
            <Eyebrow light>{m.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-black leading-tight tracking-tight sm:text-6xl">{m.title}</h2>
            <p className="mt-5 max-w-xl text-lg text-paper/75">{m.text}</p>
          </Reveal>
          <ol className="mt-10 space-y-4">
            {m.steps.map((step, index) => (
              <Reveal as="li" key={step.title} delay={index * 120} variant="left"
                className="group flex gap-4 rounded-2xl bg-white/5 p-4 ring-1 ring-white/10 transition hover:bg-white/10">
                <span className="grid h-10 w-10 shrink-0 place-items-center rounded-xl bg-gradient-to-br from-brand-light to-brand text-lg font-black text-ink transition-transform group-hover:scale-110">
                  {index + 1}
                </span>
                <div>
                  <p className="font-bold">{step.title}</p>
                  <p className="mt-1 text-sm text-paper/70">{step.text}</p>
                </div>
              </Reveal>
            ))}
          </ol>
        </div>

        <Reveal variant="zoom" className="mx-auto w-full max-w-md">
          <div ref={ref} className="rounded-[2.5rem] bg-white/[0.06] p-8 ring-1 ring-white/10 backdrop-blur-sm">
            <div className="relative mx-auto aspect-square w-60">
              <svg viewBox="0 0 200 200" className="h-full w-full -rotate-90" aria-hidden="true">
                <defs>
                  <linearGradient id="ring" x1="0" y1="0" x2="1" y2="1">
                    <stop offset="0%" stopColor="#4fe3b2" />
                    <stop offset="60%" stopColor="#ffb020" />
                    <stop offset="100%" stopColor="#ff7a59" />
                  </linearGradient>
                </defs>
                <circle cx="100" cy="100" r={radius} fill="none" stroke="rgba(255,255,255,0.08)" strokeWidth="16" />
                <circle cx="100" cy="100" r={radius} fill="none" stroke="url(#ring)" strokeWidth="16" strokeLinecap="round"
                  strokeDasharray={circumference} strokeDashoffset={inView ? 0 : circumference}
                  style={{ transition: "stroke-dashoffset 2.4s cubic-bezier(0.22, 1, 0.36, 1)" }} />
              </svg>
              <div className="absolute inset-0 grid place-items-center text-center">
                <div>
                  <p className="text-7xl font-black tabular-nums"><CountUp to={10} duration={2400} /></p>
                  <p className="text-sm font-semibold uppercase tracking-widest text-paper/60">{m.ringLabel}</p>
                </div>
              </div>
            </div>
            <div className="mt-8">
              <div className="flex items-center justify-between text-sm">
                <span className="font-semibold">{m.weekLabel}</span>
                <span className="flex items-center gap-1 font-semibold text-energy">
                  <Icon name="flame" className="h-4 w-4" />
                  {t.hero.chips.streak}
                </span>
              </div>
              <ul className="mt-4 grid grid-cols-7 gap-2">
                {m.days.map((day, index) => (
                  <li key={index} className="flex flex-col items-center gap-2">
                    <span
                      className={`grid aspect-square w-full place-items-center rounded-xl transition-all duration-500 ${
                        done[index] && inView ? "scale-100 bg-gradient-to-br from-brand-light to-brand text-ink" : "scale-90 bg-white/10 text-transparent"
                      }`}
                      style={{ transitionDelay: `${600 + index * 140}ms` }}>
                      <Icon name="check" className="h-4 w-4" />
                    </span>
                    <span className="text-xs font-semibold text-paper/60">{day}</span>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}

// ─── Privacy, Pro, FAQ, CTA ─────────────────────────────────────────────────

function Privacy() {
  const { t } = useLanguage();
  const href = useLocalizedHref();
  const icons = ["eye", "heart", "chip", "trash"] as const;
  return (
    <section id="privacy" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:items-center">
          <Reveal>
            <div className="mb-6 grid h-16 w-16 place-items-center rounded-2xl bg-ink text-brand-light shadow-xl dark:bg-paper/10">
              <Icon name="lock" className="h-8 w-8" />
            </div>
            <Eyebrow>{t.privacy.eyebrow}</Eyebrow>
            <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{t.privacy.title}</h2>
            <p className="mt-4 text-lg opacity-80">{t.privacy.text}</p>
            <a href={href("/privacy/")} className="mt-6 inline-flex items-center gap-1 font-semibold text-brand-text underline-offset-4 hover:underline dark:text-brand-light">
              {t.privacy.link} <span className="rtl:rotate-180" aria-hidden="true">→</span>
            </a>
          </Reveal>
          <ul className="grid gap-4 sm:grid-cols-2">
            {t.privacy.points.map((point, index) => (
              <Reveal as="li" key={point.title} delay={index * 90}
                className="rounded-3xl bg-white p-6 ring-1 ring-ink/5 transition duration-300 hover:-translate-y-1 hover:shadow-xl hover:shadow-brand/10 dark:bg-ink dark:ring-paper/10">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-brand-soft text-brand-text dark:bg-brand/20 dark:text-brand-light">
                  <Icon name={icons[index] ?? "lock"} className="h-5 w-5" />
                </span>
                <p className="mt-4 font-bold">{point.title}</p>
                <p className="mt-1.5 text-sm opacity-75">{point.text}</p>
              </Reveal>
            ))}
          </ul>
        </div>
      </div>
    </section>
  );
}

function Pro() {
  const { t, language } = useLanguage();
  return (
    <section id="pro" className="scroll-mt-24 bg-white py-20 md:py-28 dark:bg-ink/50">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <Reveal className="mx-auto max-w-3xl text-center">
          <Eyebrow>{t.pro.eyebrow}</Eyebrow>
          <h2 className="mt-4 text-4xl font-black tracking-tight sm:text-5xl">{t.pro.title}</h2>
          <p className="mt-4 text-lg opacity-75">{t.pro.subtitle}</p>
        </Reveal>
        <div className="mt-14 grid gap-6 lg:grid-cols-[1fr_1.35fr]">
          <Reveal className="rounded-[2rem] bg-paper p-8 ring-1 ring-ink/10 dark:bg-ink-deep dark:ring-paper/10">
            <h3 className="text-2xl font-bold">{t.pro.freeTitle}</h3>
            <ul className="mt-6 space-y-3.5">
              {t.pro.free.map((item) => (
                <li key={item} className="flex gap-3">
                  <Check />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </Reveal>
          <Reveal delay={120} className="glow-border rounded-[2rem] p-[2px]">
            <div className="relative h-full overflow-hidden rounded-[calc(2rem-2px)] bg-night p-8 text-paper">
              <div className="pointer-events-none absolute -end-20 -top-20 h-64 w-64 rounded-full bg-energy/25 blur-3xl" aria-hidden="true" />
              <h3 className="relative flex items-center gap-2 text-2xl font-bold">
                {t.pro.proTitle}
                <ProBadge />
              </h3>
              <div className="relative mt-6 grid gap-8 md:grid-cols-[1.3fr_1fr]">
                <ul className="space-y-3.5">
                  {t.pro.proItems.map((item) => (
                    <li key={item} className="flex gap-3">
                      <Check className="text-energy" />
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>
                <div className="relative hidden md:block">
                  <PhoneFrame src={screenshot(language, "07-progress")} alt={t.pro.progressAlt}
                    className="absolute end-10 top-0 w-[70%] rotate-[-6deg] rounded-[1.8rem] p-1.5 [&>img]:rounded-[1.4rem]" />
                  <PhoneFrame src={screenshot(language, "08-coach")} alt={t.pro.coachAlt}
                    className="absolute end-0 top-16 w-[70%] rotate-[5deg] rounded-[1.8rem] p-1.5 [&>img]:rounded-[1.4rem]" />
                </div>
              </div>
            </div>
          </Reveal>
        </div>
        <p className="mx-auto mt-8 max-w-3xl text-center text-sm opacity-70">{t.pro.note}</p>
      </div>
    </section>
  );
}

function Faq() {
  const { t } = useLanguage();
  return (
    <section id="faq" className="scroll-mt-24 py-20 md:py-28">
      <div className="mx-auto max-w-3xl px-4 sm:px-6">
        <Reveal>
          <h2 className="text-center text-4xl font-black tracking-tight sm:text-5xl">{t.faq.title}</h2>
        </Reveal>
        <div className="mt-12 space-y-3">
          {t.faq.items.map((item, index) => (
            <Reveal key={item.q} delay={index * 60}>
              <details className="group rounded-2xl bg-white p-5 ring-1 ring-ink/5 transition open:shadow-lg open:shadow-brand/5 dark:bg-ink dark:ring-paper/10">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 text-lg font-semibold [&::-webkit-details-marker]:hidden">
                  {item.q}
                  <span className="grid h-8 w-8 shrink-0 place-items-center rounded-full bg-brand-soft text-brand-text transition-transform duration-300 group-open:rotate-45 dark:bg-brand/20 dark:text-brand-light" aria-hidden="true">
                    +
                  </span>
                </summary>
                <p className="mt-3 leading-relaxed opacity-80">{item.a}</p>
              </details>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function Cta() {
  const { t } = useLanguage();
  return (
    <section className="px-4 pb-20 sm:px-6">
      <Reveal variant="zoom" className="relative isolate mx-auto max-w-6xl overflow-hidden rounded-[2.5rem] bg-night px-6 py-20 text-center text-paper sm:px-12 md:py-24">
        <Aurora />
        <div className="relative mx-auto grid h-24 w-24 place-items-center">
          <span className="absolute inset-0 animate-ping-slow rounded-[28%] bg-brand-light/40" aria-hidden="true" />
          <span className="absolute inset-0 animate-ping-slow rounded-[28%] bg-brand-light/30 [animation-delay:1.5s]" aria-hidden="true" />
          <img src="/assets/icon.png" alt="" width={96} height={96} className="relative h-24 w-24 rounded-[22%] shadow-2xl" />
        </div>
        <h2 className="relative mx-auto mt-8 max-w-3xl text-4xl font-black tracking-tight sm:text-6xl">{t.cta.title}</h2>
        <p className="relative mx-auto mt-5 max-w-xl text-lg text-paper/75">{t.cta.text}</p>
        <div className="relative mt-9 flex justify-center">
          <AppStoreButton inverted />
        </div>
      </Reveal>
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
      <Marquee />
      <Stats />
      <WhatsNew />
      <Features />
      <Motivation />
      <Privacy />
      <Pro />
      <Faq />
      <Cta />
    </>
  );
}
