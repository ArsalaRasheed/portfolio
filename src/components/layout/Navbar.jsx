import { useEffect, useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { site } from '../../data/site.js';
import { useTheme } from '../../context/ThemeContext.jsx';
import Button from '../ui/Button.jsx';
import Icon from '../ui/Icon.jsx';

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const { pathname, hash } = useLocation();
  const { isDark, toggleTheme } = useTheme();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  // Close the mobile menu whenever the route changes
  useEffect(() => setOpen(false), [pathname]);

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  // A nav item is active when its path matches and (if it has one) its hash does too
  const isActive = (to) => {
    const [path, anchor] = to.split('#');
    if (pathname !== (path || '/')) return false;
    return anchor ? hash === `#${anchor}` : true;
  };

  return (
    <header
      className={`fixed inset-x-0 top-0 z-50 transition-all duration-300 ${
        scrolled || open
          ? 'border-b border-border bg-bg/85 backdrop-blur-xl'
          : 'border-b border-transparent bg-transparent'
      }`}
    >
      <nav aria-label="Main" className="container-x flex h-16 items-center justify-between gap-4 md:h-[72px]">
        {/* Logo */}
        <Link to="/" className="group flex items-center gap-2.5" aria-label={`${site.name} — home`}>
          <span className="grid h-9 w-9 place-items-center rounded-lg bg-accent-700 font-display text-sm font-semibold italic text-accent-50 transition-transform duration-300 group-hover:-rotate-6">
            HR
          </span>
          <span className="hidden text-[15px] font-bold leading-tight tracking-tight sm:block">
            {site.name}
            <span className="block text-[11px] font-medium text-muted">UI/UX &amp; Web Developer</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <ul className="hidden items-center gap-1 lg:flex">
          {site.nav.map((item) => (
            <li key={item.label}>
              <Link
                to={item.to}
                className={`rounded-full px-4 py-2 text-sm font-semibold transition-colors duration-200 ${
                  isActive(item.to)
                    ? 'text-accent-700 dark:text-accent-300'
                    : 'text-muted hover:text-ink'
                }`}
              >
                {item.label}
              </Link>
            </li>
          ))}
        </ul>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={toggleTheme}
            aria-label={isDark ? 'Switch to light mode' : 'Switch to dark mode'}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-ink transition-colors duration-300 hover:border-accent-400 hover:text-accent-700 dark:hover:text-accent-300"
          >
            <Icon name={isDark ? 'sun' : 'moon'} className="h-[18px] w-[18px]" />
          </button>

          <Button to="/#contact" size="sm" className="hidden md:inline-flex">
            Let’s talk
          </Button>

          {/* Mobile menu button */}
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label={open ? 'Close menu' : 'Open menu'}
            className="grid h-10 w-10 place-items-center rounded-full border border-border bg-surface text-ink lg:hidden"
          >
            <Icon name={open ? 'x' : 'menu'} className="h-5 w-5" />
          </button>
        </div>
      </nav>

      {/* Mobile menu */}
      <AnimatePresence>
        {open && (
          <motion.div
            id="mobile-menu"
            initial={reduce ? false : { height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={reduce ? undefined : { height: 0, opacity: 0 }}
            transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
            className="overflow-hidden border-t border-border bg-bg lg:hidden"
          >
            <ul className="container-x flex flex-col gap-1 py-4">
              {site.nav.map((item, i) => (
                <motion.li
                  key={item.label}
                  initial={reduce ? false : { opacity: 0, x: -12 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.05 + i * 0.05, duration: 0.3 }}
                >
                  <Link
                    to={item.to}
                    className="flex items-center justify-between rounded-lg px-3 py-3 text-base font-semibold text-ink transition-colors hover:bg-surface-2"
                  >
                    {item.label}
                    <Icon name="chevron-right" className="h-4 w-4 text-muted" />
                  </Link>
                </motion.li>
              ))}
              <li className="mt-2">
                <Button to="/#contact" size="lg" className="w-full">
                  Let’s Work Together
                </Button>
              </li>
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
