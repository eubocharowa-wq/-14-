import Container from '@/components/ui/Container';

interface TestimonialItem {
  initials: string;
  name: string;
  role: string;
  quote: string;
}

interface HomeTestimonialsPreviewProps {
  title: string;
  subtitle: string;
  items: TestimonialItem[];
}

export default function HomeTestimonialsPreview({
  title,
  subtitle,
  items,
}: HomeTestimonialsPreviewProps) {
  return (
    <section className="page-section-depth">
      <Container>
        <div className="mb-12 max-w-3xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            Соцдоказательство
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-[2.1rem]">
            {title}
          </h2>
          <p className="mt-5 text-[15px] leading-relaxed text-brand-600">{subtitle}</p>
        </div>

        <div className="grid gap-5 lg:grid-cols-3">
          {items.map((item) => (
            <article key={item.name} className="card-surface p-7 sm:p-8">
              <div className="flex items-center gap-3">
                <span className="flex h-10 w-10 items-center justify-center rounded-full border border-brand-200 bg-white/80 text-[12px] font-semibold tracking-wide text-brand-700">
                  {item.initials}
                </span>
                <div>
                  <p className="text-sm font-semibold text-brand-900">{item.name}</p>
                  <p className="text-[12px] text-brand-500">{item.role}</p>
                </div>
              </div>
              <p className="mt-5 text-[14px] leading-relaxed text-brand-700">"{item.quote}"</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
