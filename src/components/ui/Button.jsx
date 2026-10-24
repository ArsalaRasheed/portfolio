import { Link } from 'react-router-dom';
import Icon from './Icon.jsx';

const base =
  'inline-flex items-center justify-center gap-2 rounded-lg font-semibold tracking-tight transition-all duration-300 ease-out disabled:cursor-not-allowed disabled:opacity-60';

const sizes = {
  sm: 'px-3.5 py-2 text-[13px]',
  md: 'px-5 py-2.5 text-sm',
  lg: 'px-6 py-3 text-[15px]',
};

const variants = {
  primary: 'bg-accent-700 text-accent-50 hover:bg-accent-800 hover:-translate-y-px active:translate-y-0',
  secondary:
    'border border-border bg-surface text-ink hover:border-ink/40 hover:-translate-y-px active:translate-y-0',
  ghost: 'text-ink hover:bg-surface-2',
  outline: 'border border-accent-700/30 text-accent-700 hover:bg-accent-700 hover:text-accent-50 dark:text-accent-300 dark:border-accent-300/30 dark:hover:bg-accent-700 dark:hover:text-accent-50',
};

/**
 * One button for the whole site.
 * - `to`  → internal route (React Router Link)
 * - `href` → external link (opens in a new tab if it leaves the site)
 * - otherwise renders a <button>
 */
export default function Button({
  children,
  to,
  href,
  variant = 'primary',
  size = 'md',
  icon,
  iconAfter,
  className = '',
  ...props
}) {
  const cls = `${base} ${sizes[size]} ${variants[variant]} ${className}`;

  const content = (
    <>
      {icon && <Icon name={icon} className="h-4 w-4 shrink-0" />}
      <span>{children}</span>
      {iconAfter && <Icon name={iconAfter} className="h-4 w-4 shrink-0" />}
    </>
  );

  if (to) {
    if (to.startsWith('#') || to.startsWith('mailto:') || to.startsWith('tel:')) {
      return (
        <a className={cls} href={to} {...props}>
          {content}
        </a>
      );
    }
    return (
      <Link className={cls} to={to} {...props}>
        {content}
      </Link>
    );
  }

  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        className={cls}
        href={href}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
        {...props}
      >
        {content}
      </a>
    );
  }

  return (
    <button className={cls} {...props}>
      {content}
    </button>
  );
}
