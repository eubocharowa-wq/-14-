import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcessStep from '@/components/cards/ProcessStep';
import Button from '@/components/ui/Button';
import { processPageData, processSteps } from '@/content/process';
import { seoData } from '@/content/seo';

export default function ProcessPage() {
  const seo = seoData['/process'];
  const d = processPageData;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs
        items={[{ label: 'Главная', to: '/' }, { label: 'Протокол сопровождения' }]}
      />
      <HeroSection data={d.hero} />

      <section className="page-section-lift">
        <Container>
          <p className="max-w-3xl text-[15px] leading-relaxed text-brand-700 sm:text-base">
            {d.whyProcess}
          </p>
        </Container>
      </section>

      <section className="page-section-depth">
        <Container>
          <SectionHeading title="Этапы протокола сопровождения" />
          <div className="grid gap-8 sm:grid-cols-2 lg:gap-6">
            {processSteps.map((step) => (
              <ProcessStep key={step.number} {...step} />
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section-lift">
        <Container>
          <SectionHeading title={d.outcomes.title} />
          <ul className="max-w-2xl space-y-3">
            {d.outcomes.items.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      <section className="page-section-depth">
        <Container>
          <SectionHeading title={d.guardrail.title} />
          <p className="max-w-3xl text-base leading-relaxed text-brand-700">{d.guardrail.text}</p>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/contacts">Обсудить задачу</Button>
            <Button variant="secondary" href="/contacts">Отправить объект</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
