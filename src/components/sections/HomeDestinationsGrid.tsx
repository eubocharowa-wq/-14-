import { Link } from 'react-router-dom';
import Container from '@/components/ui/Container';
import type { SiteDestinationData } from '@/types';

interface HomeDestinationsGridProps {
  destinations: SiteDestinationData[];
  id?: string;
}

export default function HomeDestinationsGrid({ destinations, id }: HomeDestinationsGridProps) {
  return (
    <section
      id={id}
      className="section-pad relative overflow-hidden border-t border-edge/50 bg-gradient-to-b from-white/[0.15] via-paper-50/50 to-brand-100/35"
      aria-labelledby="home-destinations-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_55%_40%_at_100%_0%,rgba(196,184,168,0.14),transparent_55%)]"
        aria-hidden
      />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent via-warm-deep/25 to-transparent" aria-hidden />
      <Container className="relative">
        <div className="mb-14 max-w-2xl">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            Разделы
          </p>
          <h2
            id="home-destinations-heading"
            className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-[2.125rem]"
          >
            Карта сайта ЦБИ
          </h2>
          <p className="mt-4 text-[15px] leading-relaxed text-brand-600 sm:text-base">
            Выберите раздел — материалы открываются на отдельной странице, как в премиальном
            корпоративном ресурсе.
          </p>
        </div>

        <ul className="grid gap-5 sm:grid-cols-2 xl:grid-cols-3">
          {destinations.map((d) => (
            <li key={d.href}>
              <Link
                to={d.href}
                className="card-surface card-surface--hover group flex h-full flex-col p-7 sm:p-8"
              >
                <span className="font-display text-3xl font-semibold tabular-nums text-brand-300 transition-colors duration-300 group-hover:text-brand-500">
                  {d.index}
                </span>
                <span className="card-editorial-top" aria-hidden />
                <h3 className="font-display text-xl font-semibold tracking-tight text-brand-900">
                  {d.title}
                </h3>
                <p className="mt-4 flex-1 text-[14px] leading-relaxed text-brand-600 sm:text-[15px]">
                  {d.description}
                </p>
                <div className="card-editorial-actions">
                  <span className="text-[12px] font-semibold uppercase tracking-[0.14em] text-brand-700 transition-colors group-hover:text-brand-900">
                    {d.linkLabel}
                    <span className="ml-2 inline-block transition-transform group-hover:translate-x-0.5">
                      →
                    </span>
                  </span>
                </div>
              </Link>
            </li>
          ))}
        </ul>
      </Container>
    </section>
  );
}
