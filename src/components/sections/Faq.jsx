import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { faqs } from '../../data/content.js';
import SectionHeading from '../ui/SectionHeading.jsx';
import Reveal from '../ui/Reveal.jsx';
import Icon from '../ui/Icon.jsx';

export default function Faq() {
  const [open, setOpen] = useState(0);
  const reduce = useReducedMotion();

  return (
    <section id="faq" className="section scroll-mt-24">
      <div className="container-x">
        <div className="grid gap-12 lg:grid-cols-[0.8fr_1.2fr] lg:gap-16">
          <SectionHeading
            number="07"
            eyebrow="FAQ"
            title="Questions I get asked"
            description="Anything else? Just ask — I reply within 24 hours."
          />

          <div className="divide-y divide-border rounded-lg border border-border bg-surface">
            {faqs.map((item, i) => {
              const isOpen = open === i;
              return (
                <Reveal key={item.q} delay={i * 0.04}>
                  <h3>
                    <button
                      type="button"
                      onClick={() => setOpen(isOpen ? -1 : i)}
                      aria-expanded={isOpen}
                      aria-controls={`faq-panel-${i}`}
                      id={`faq-button-${i}`}
                      className="flex w-full items-center justify-between gap-4 px-5 py-5 text-left sm:px-7"
                    >
                      <span className="text-[15px] font-bold leading-snug sm:text-base">{item.q}</span>
                      <span
                        className={`grid h-8 w-8 shrink-0 place-items-center rounded-full border transition-all duration-300 ${
                          isOpen
                            ? 'rotate-180 border-accent-600 bg-accent-600 text-white'
                            : 'border-border text-muted'
                        }`}
                      >
                        <Icon name="chevron-down" className="h-4 w-4" />
                      </span>
                    </button>
                  </h3>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        id={`faq-panel-${i}`}
                        role="region"
                        aria-labelledby={`faq-button-${i}`}
                        initial={reduce ? false : { height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={reduce ? undefined : { height: 0, opacity: 0 }}
                        transition={{ duration: 0.32, ease: [0.22, 1, 0.36, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="px-5 pb-6 text-sm leading-relaxed text-muted sm:px-7">{item.a}</p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </Reveal>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
