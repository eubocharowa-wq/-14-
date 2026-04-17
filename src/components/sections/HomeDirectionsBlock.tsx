import Container from '@/components/ui/Container';

interface HomeDirectionsBlockProps {
  title: string;
  items: string[];
}

export default function HomeDirectionsBlock({ title, items }: HomeDirectionsBlockProps) {
  return (
    <section className="page-section-lift">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            Направления
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-[2.1rem]">
            {title}
          </h2>
        </div>
        <ul className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {items.map((item) => (
            <li
              key={item}
              className="card-surface px-6 py-5 text-[14px] font-medium leading-relaxed text-brand-800"
            >
              {item}
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
