import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import Button from '@/components/ui/Button';
import { aboutPageData } from '@/content/about';
import { seoData } from '@/content/seo';

export default function AboutPage() {
  const seo = seoData['/about'];
  const d = aboutPageData;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'О ЦБИ' }]} />
      <HeroSection data={d.hero} />

      <section className="page-section-lift">
        <Container>
          <div className="max-w-3xl">
            <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl md:text-[2.125rem]">
              {d.founder.title}
            </h2>
            <p className="mt-3 text-[11px] font-semibold uppercase tracking-[0.2em] text-brand-500">
              {d.founder.role}
            </p>
            <p className="mt-8 text-[15px] leading-[1.75] text-brand-700 sm:text-base">{d.founder.text}</p>
          </div>
        </Container>
      </section>

      <section className="page-section-depth">
        <Container>
          <SectionHeading title={d.model.title} />
          <p className="max-w-3xl text-[15px] leading-relaxed text-brand-700 sm:text-base">{d.model.text}</p>
          <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
            {d.model.pillars.map((p) => (
              <div
                key={p}
                className="card-surface card-surface--hover flex min-h-[5.5rem] items-center justify-center px-5 py-6 text-center text-sm font-semibold leading-snug text-brand-800"
              >
                {p}
              </div>
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section-lift">
        <Container>
          <SectionHeading title={d.comparison.title} />
          <div className="grid gap-8 md:grid-cols-2">
            <div className="card-surface p-7 sm:p-9">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-400">
                На рынке часто
              </p>
              <ul className="space-y-3.5">
                {d.comparison.market.map((item) => (
                  <li key={item} className="text-[14px] leading-relaxed text-brand-600">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
            <div className="card-surface border-warm-deep/20 bg-gradient-to-br from-brand-900/[0.03] via-brand-50 to-brand-100/70 p-7 sm:p-9">
              <p className="mb-5 text-[10px] font-semibold uppercase tracking-[0.22em] text-brand-600">
                В ЦБИ
              </p>
              <ul className="space-y-3.5">
                {d.comparison.cbi.map((item) => (
                  <li key={item} className="text-[14px] font-medium leading-relaxed text-brand-800">
                    {item}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </Container>
      </section>

      <section className="page-section-depth">
        <Container>
          <SectionHeading title={d.principles.title} />
          <ul className="max-w-2xl space-y-5">
            {d.principles.items.map((item) => (
              <li key={item} className="flex gap-4 text-[15px] leading-relaxed text-brand-700">
                <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-warm-deep/70" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-14">
            <Button href="/contacts">Обсудить задачу</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
