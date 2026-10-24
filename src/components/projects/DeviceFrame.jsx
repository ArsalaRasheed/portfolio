/**
 * DeviceFrame — browser / phone mockup wrappers for case-study results.
 * Children are rendered inside a realistic frame; no images required.
 */

export function BrowserFrame({ children, url = 'your-site.com', className = '' }) {
  return (
    <div className={`overflow-hidden rounded-lg border border-border bg-surface shadow-lift ${className}`}>
      <div className="flex items-center gap-2 border-b border-border bg-surface-2 px-4 py-2.5">
        <span className="h-2.5 w-2.5 rounded-full bg-[#FF5F57]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#FEBC2E]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#28C840]" />
        <span className="ml-3 hidden truncate rounded-md bg-surface px-3 py-1 text-xs font-medium text-muted sm:block">
          {url}
        </span>
      </div>
      <div className="aspect-[16/10] w-full">{children}</div>
    </div>
  );
}

export function PhoneFrame({ children, className = '' }) {
  return (
    <div
      className={`relative w-[190px] shrink-0 rounded-[2rem] border-[6px] border-slate-800 bg-slate-800 shadow-lift sm:w-[220px] ${className}`}
    >
      <div className="absolute left-1/2 top-2 z-10 h-4 w-20 -translate-x-1/2 rounded-full bg-slate-800" />
      <div className="overflow-hidden rounded-[1.5rem] bg-surface">
        <div className="aspect-[9/17] w-full">{children}</div>
      </div>
    </div>
  );
}
