/** A real App Store screenshot in a device-like frame. */
export function PhoneFrame({ src, alt, className = "", eager = false }: { src: string; alt: string; className?: string; eager?: boolean }) {
  return (
    <div className={`relative mx-auto w-full max-w-[300px] rounded-[2.6rem] bg-night p-2.5 shadow-2xl shadow-ink/40 ring-1 ring-white/10 ${className}`}>
      <img src={src} alt={alt} width={600} height={1304} loading={eager ? "eager" : "lazy"} decoding="async"
        className="block h-auto w-full rounded-[2.1rem]" />
    </div>
  );
}

/** iPhone held sideways: for the landscape camera coach screenshot. */
export function LandscapeFrame({ src, alt, className = "", children }: { src: string; alt: string; className?: string; children?: React.ReactNode }) {
  return (
    <div className={`relative w-full rounded-[2rem] bg-night p-2 shadow-2xl shadow-ink/40 ring-1 ring-white/10 sm:rounded-[2.4rem] sm:p-2.5 ${className}`}>
      <div className="relative overflow-hidden rounded-[1.6rem] sm:rounded-[2rem]">
        <img src={src} alt={alt} width={1000} height={460} loading="lazy" decoding="async" className="block h-auto w-full" />
        {children}
      </div>
    </div>
  );
}

/** Apple Watch case around a watch screenshot (416×496). */
export function WatchFrame({ children, className = "" }: { children: React.ReactNode; className?: string }) {
  return (
    <div className={`relative ${className}`}>
      {/* band */}
      <div className="absolute inset-x-[18%] -top-[22%] -bottom-[22%] -z-10 rounded-[2rem] bg-gradient-to-b from-ink via-ink-deep to-ink shadow-inner" aria-hidden="true" />
      <div className="relative rounded-[28%/24%] bg-gradient-to-br from-[#3a4743] to-[#111916] p-[5%] shadow-2xl shadow-black/50 ring-1 ring-white/15">
        <div className="relative aspect-[416/496] overflow-hidden rounded-[22%/18%] bg-black">{children}</div>
      </div>
      {/* digital crown */}
      <div className="absolute -end-[4%] top-[24%] h-[16%] w-[5%] rounded-e-md bg-gradient-to-r from-[#5b6763] to-[#2a3330]" aria-hidden="true" />
      <div className="absolute -end-[2.5%] top-[48%] h-[18%] w-[3%] rounded-e-sm bg-[#2a3330]" aria-hidden="true" />
    </div>
  );
}
