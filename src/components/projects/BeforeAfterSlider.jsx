import { useCallback, useEffect, useRef, useState } from 'react';

/**
 * BeforeAfterSlider — drag (or arrow-key) comparison of two panels.
 * Used in case studies to compare a wireframe with the final UI.
 * Fully keyboard accessible (role="slider").
 */
export default function BeforeAfterSlider({ before, after, labelBefore = 'Before', labelAfter = 'After', title, note }) {
  const [pos, setPos] = useState(50);
  const containerRef = useRef(null);
  const draggingRef = useRef(false);

  const setFromClientX = useCallback((clientX) => {
    const rect = containerRef.current?.getBoundingClientRect();
    if (!rect) return;
    const next = ((clientX - rect.left) / rect.width) * 100;
    setPos(Math.min(98, Math.max(2, next)));
  }, []);

  useEffect(() => {
    const move = (e) => {
      if (!draggingRef.current) return;
      setFromClientX(e.clientX ?? e.touches?.[0]?.clientX);
    };
    const up = () => {
      draggingRef.current = false;
      document.body.style.userSelect = '';
    };
    window.addEventListener('pointermove', move);
    window.addEventListener('pointerup', up);
    return () => {
      window.removeEventListener('pointermove', move);
      window.removeEventListener('pointerup', up);
    };
  }, [setFromClientX]);

  const onKeyDown = (e) => {
    const step = e.shiftKey ? 10 : 3;
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      setPos((p) => Math.max(2, p - step));
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      setPos((p) => Math.min(98, p + step));
    } else if (e.key === 'Home') {
      e.preventDefault();
      setPos(2);
    } else if (e.key === 'End') {
      e.preventDefault();
      setPos(98);
    }
  };

  return (
    <figure className="overflow-hidden rounded-lg border border-border bg-surface">
      {(title || note) && (
        <figcaption className="border-b border-border px-5 py-4 sm:px-6">
          {title && <p className="text-base font-bold">{title}</p>}
          {note && <p className="mt-1 text-sm text-muted">{note}</p>}
        </figcaption>
      )}

      <div
        ref={containerRef}
        className="relative aspect-[16/10] w-full touch-none select-none overflow-hidden"
        onPointerDown={(e) => {
          draggingRef.current = true;
          document.body.style.userSelect = 'none';
          setFromClientX(e.clientX);
        }}
      >
        {/* After (base layer) */}
        <div className="absolute inset-0">{after}</div>

        {/* Before (clipped layer) */}
        <div className="absolute inset-0" style={{ clipPath: `inset(0 ${100 - pos}% 0 0)` }}>
          {before}
        </div>

        {/* Labels */}
        <span className="pointer-events-none absolute left-3 top-3 rounded-full bg-bg/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur">
          {labelBefore}
        </span>
        <span className="pointer-events-none absolute right-3 top-3 rounded-full bg-bg/90 px-3 py-1 text-[11px] font-bold uppercase tracking-wider text-ink backdrop-blur">
          {labelAfter}
        </span>

        {/* Handle */}
        <div className="pointer-events-none absolute inset-y-0 w-0.5 bg-white shadow-[0_0_0_1px_rgba(0,0,0,0.15)]" style={{ left: `${pos}%` }}>
          <div
            role="slider"
            tabIndex={0}
            aria-label="Comparison slider"
            aria-valuemin={0}
            aria-valuemax={100}
            aria-valuenow={Math.round(pos)}
            aria-valuetext={`${Math.round(pos)}% ${labelBefore}, ${100 - Math.round(pos)}% ${labelAfter}`}
            onKeyDown={onKeyDown}
            className="pointer-events-auto absolute top-1/2 grid h-11 w-11 -translate-x-1/2 -translate-y-1/2 cursor-ew-resize place-items-center rounded-full border-2 border-white bg-accent-600 text-white shadow-lift"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
              <path d="m9 7-4 5 4 5M15 7l4 5-4 5" strokeLinecap="round" strokeLinejoin="round" />
            </svg>
          </div>
        </div>
      </div>
    </figure>
  );
}
