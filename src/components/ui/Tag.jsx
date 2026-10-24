/** Editorial label chip — small, squared, quiet. */
export default function Tag({ children, className = '', tone = 'neutral' }) {
  const tones = {
    neutral: 'border-border bg-surface-2/60 text-muted',
    accent: 'border-accent-700/20 bg-accent-50 text-accent-800 dark:border-accent-300/20 dark:bg-accent-950/60 dark:text-accent-200',
    outline: 'border-border bg-transparent text-muted',
  };
  return (
    <span
      className={`inline-flex items-center gap-1.5 rounded-md border px-2 py-0.5 text-[11px] font-semibold uppercase tracking-[0.08em] ${tones[tone]} ${className}`}
    >
      {children}
    </span>
  );
}
