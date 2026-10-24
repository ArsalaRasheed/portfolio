import { useEffect, useState } from 'react';

/**
 * Scroll-spy hook: returns the id of the section currently in view.
 * @param {string[]} ids anchor ids to track
 */
export default function useScrollSpy(ids, offset = 140) {
  const [active, setActive] = useState(ids[0]);

  useEffect(() => {
    let raf = null;

    const evaluate = () => {
      raf = null;
      const scrollPos = window.scrollY + offset + 24;
      let current = ids[0];
      for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollPos) current = id;
      }
      // Bottom of page: force the last item active
      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 8) {
        current = ids[ids.length - 1];
      }
      setActive((prev) => (prev === current ? prev : current));
    };

    const onScroll = () => {
      if (raf == null) raf = requestAnimationFrame(evaluate);
    };

    evaluate();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
      if (raf) cancelAnimationFrame(raf);
    };
  }, [ids, offset]);

  return active;
}
