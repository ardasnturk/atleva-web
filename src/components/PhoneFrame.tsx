/** A real App Store screenshot in a simple device-like frame. */
export function PhoneFrame({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] rounded-[2.6rem] bg-ink-deep p-2.5 shadow-2xl shadow-ink/30 ring-1 ring-black/10 dark:ring-white/10 ${className}`}>
      <img src={src} alt={alt} width={600} height={1304} loading={eager ? "eager" : "lazy"} decoding="async"
        className="block h-auto w-full rounded-[2.1rem]" />
    </div>
  );
}
