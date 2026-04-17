import Container from '@/components/ui/Container';

interface OutcomeItem {
  title: string;
  text: string;
}

interface HomeOutcomeCardsProps {
  items: OutcomeItem[];
}

export default function HomeOutcomeCards({ items }: HomeOutcomeCardsProps) {
  return (
    <section className="page-section-depth">
      <Container>
        <div className="mb-12 max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            Что вы получаете
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-[2.1rem]">
            Не поток информации, а понятный результат
          </h2>
        </div>

        <div className="grid gap-5 md:grid-cols-3">
          {items.map((item) => (
            <article key={item.title} className="card-surface p-7 sm:p-8">
              <p className="text-[10px] font-semibold uppercase tracking-[0.24em] text-brand-500">
                {item.title}
              </p>
              <p className="mt-5 text-[14px] leading-relaxed text-brand-700">{item.text}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  );
}
