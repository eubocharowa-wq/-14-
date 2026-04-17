import Container from '@/components/ui/Container';

interface HomeBoundariesProps {
  title: string;
  subtitle: string;
  items: string[];
}

export default function HomeBoundaries({ title, subtitle, items }: HomeBoundariesProps) {
  return (
    <section className="page-section-lift">
      <Container>
        <div className="card-surface mx-auto max-w-4xl px-8 py-10 sm:px-12 sm:py-12">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            Границы формата
          </p>
          <h2 className="mt-4 font-display text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-5 max-w-2xl text-[15px] leading-relaxed text-brand-600">{subtitle}</p>
          <ul className="mt-8 grid gap-4 sm:grid-cols-3">
            {items.map((item) => (
              <li key={item} className="rounded-xl border border-brand-200/85 bg-white/65 px-5 py-4 text-[13px] font-medium leading-relaxed text-brand-700 backdrop-blur-sm">
                {item}
              </li>
            ))}
          </ul>
        </div>
      </Container>
    </section>
  );
}
