interface SectionHeadingProps {
  eyebrow?: string;
  title: string;
  subtitle?: string;
  centered?: boolean;
}

export default function SectionHeading({
  eyebrow,
  title,
  subtitle,
  centered = false,
}: SectionHeadingProps) {
  const align = centered ? 'text-center' : '';
  const ruleAlign = centered ? 'mx-auto' : '';

  return (
    <div className={`mb-14 max-w-3xl sm:mb-16 ${centered ? 'mx-auto' : ''} ${align}`}>
      {eyebrow && (
        <p className="mb-4 text-[10px] font-semibold uppercase tracking-[0.28em] text-brand-500">
          {eyebrow}
        </p>
      )}
      <h2 className="text-balance font-display text-[1.75rem] font-semibold leading-[1.18] tracking-tight text-brand-900 sm:text-3xl md:text-[2.125rem] md:leading-[1.15]">
        {title}
      </h2>
      <div
        className={`mt-5 h-px w-12 max-w-full bg-gradient-to-r from-warm-deep/45 to-transparent ${ruleAlign}`}
        aria-hidden
      />
      {subtitle && (
        <p className="mt-6 text-base leading-relaxed text-brand-600 sm:text-[17px]">
          {subtitle}
        </p>
      )}
    </div>
  );
}
