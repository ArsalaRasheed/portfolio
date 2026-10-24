import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

/**
 * Handles two things on navigation:
 * 1. Scrolls to top when the path changes
 * 2. Scrolls smoothly to #hash targets (used by "/#work" style nav links)
 */
export default function ScrollManager() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      // Wait a frame so the target section exists after navigation
      const id = hash.replace('#', '');
      const timer = setTimeout(() => {
        const el = document.getElementById(id);
        if (el) {
          el.scrollIntoView({ behavior: 'smooth', block: 'start' });
        } else {
          window.scrollTo({ top: 0, behavior: 'auto' });
        }
      }, 60);
      return () => clearTimeout(timer);
    }
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname, hash]);

  return null;
}
