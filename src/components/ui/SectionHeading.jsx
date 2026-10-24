import Reveal from './Reveal.jsx';

/**
 * Editorial section header: numbered eyebrow rule + serif-inflected title.
 * Pass `number` ("01") for the running section index used on the home page.
 */
export default function SectionHeading({
  eyebrow,
  title,
  description,
  number,
  align = 'left',
  className = '',
  id,
  as: Heading = 'h2',
}) {
  const centered = align === 'center';
  return (
    <Reveal className={`${centered ? 'mx-auto max-w-2xl text-center' : 'max-w-2xl'} ${className}`}>
      {(eyebrow || number) && (
        <div className={`mb-5 flex items-center gap-3 ${centered ? 'justify-center' : ''}`}>
          {number && <span className="font-display text-sm font-semibold italic text-accent-700 dark:text-accent-300">{number}</span>}
          {eyebrow && <span className="label text-muted">{eyebrow}</span>}
          <span className={`h-px w-12 bg-border ${centered ? 'hidden' : ''}`} />
        </div>
      )}
      <Heading
        id={id}
        className="font-display text-[2rem] font-semibold leading-[1.12] tracking-[-0.015em] sm:text-[2.5rem] md:text-[3rem]"
      >
        {title}
      </Heading>
      {description && <p className="mt-5 text-[17px] leading-relaxed text-muted">{description}</p>}
    </Reveal>
  );
}
