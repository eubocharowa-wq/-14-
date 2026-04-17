import Container from '@/components/ui/Container';

interface HomeFitBlockProps {
  title: string;
  fit: string[];
  notFit: string[];
}

export default function HomeFitBlock({ title, fit, notFit }: HomeFitBlockProps) {
  return (
    <section className="page-section-depth">
      <Container>
        <div className="mb-10 max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            Кому это подходит
          </p>
          <h2 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-[2.1rem]">
            {title}
          </h2>
        </div>
        <div className="grid gap-6 md:grid-cols-2">
          <div className="card-surface p-7 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500">
              Подходит
            </p>
            <ul className="mt-5 space-y-3.5">
              {fit.map((item) => (
                <li key={item} className="flex gap-3 text-[14px] leading-relaxed text-brand-700">
                  <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-brand-500" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div className="card-surface p-7 sm:p-8">
            <p className="text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-500">
              Может не подойти
            </p>
            <ul className="mt-5 space-y-3.5">
              {notFit.map((item) => (
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
