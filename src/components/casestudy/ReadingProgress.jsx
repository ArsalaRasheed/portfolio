import { motion, useScroll, useSpring } from 'framer-motion';

/** Thin reading-progress bar pinned to the very top of case study pages. */
export default function ReadingProgress() {
  const { scrollYProgress } = useScroll();
  const scaleX = useSpring(scrollYProgress, { stiffness: 160, damping: 30, restDelta: 0.001 });

  return (
    <motion.div
      aria-hidden="true"
      style={{ scaleX }}
      className="fixed inset-x-0 top-0 z-[60] h-[3px] origin-left bg-gradient-to-r from-accent-600 to-accent-400"
    />
  );
}
