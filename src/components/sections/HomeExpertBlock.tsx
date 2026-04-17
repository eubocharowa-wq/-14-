import Container from '@/components/ui/Container';

interface HomeExpertBlockProps {
  eyebrow: string;
  title: string;
  subtitle: string;
  bullets: string[];
}

export default function HomeExpertBlock({
  eyebrow,
  title,
  subtitle,
  bullets,
}: HomeExpertBlockProps) {
  return (
    <section className="page-section-lift">
      <Container>
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-14">
          <div className="lg:col-span-7">
            <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
              {eyebrow}
            </p>
            <h2 className="mt-4 font-display text-[2rem] font-semibold tracking-tight text-brand-900 sm:text-[2.35rem]">
              {title}
            </h2>
            <p className="mt-6 max-w-2xl text-[15px] leading-[1.75] text-brand-600 sm:text-base">
              {subtitle}
            </p>
          </div>
          <div className="lg:col-span-5">
            <ul className="card-surface space-y-4 px-7 py-7 sm:px-8 sm:py-8">
              {bullets.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-brand-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-deep/75" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Container>
    </section>
  );
}
