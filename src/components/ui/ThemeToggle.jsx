import { useTheme } from '../../context/ThemeContext.jsx';
import Icon from './Icon.jsx';

/** Light / dark mode toggle with an accessible label. */
export default function ThemeToggle({ className = '' }) {
  const { isDark, toggleTheme } = useTheme();

  return (
    <button
      type="button"
      onClick={toggleTheme}
      aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
      title={isDark ? 'Light mode' : 'Dark mode'}
      className={`grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-ink transition-colors duration-300 hover:border-accent-400 hover:text-accent-700 dark:hover:text-accent-300 ${className}`}
    >
      <Icon name={isDark ? 'sun' : 'moon'} className="h-[18px] w-[18px]" />
    </button>
  );
}
