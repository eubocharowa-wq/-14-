import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SolutionCard from '@/components/cards/SolutionCard';
import Button from '@/components/ui/Button';
import { solutionsPageData, solutionCards } from '@/content/solutions';
import { seoData } from '@/content/seo';

export default function SolutionsPage() {
  const seo = seoData['/solutions'];
  const d = solutionsPageData;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Решения' }]} />
      <HeroSection data={d.hero} />

      <section className="page-section-lift">
        <Container>
          <p className="max-w-3xl text-[15px] leading-relaxed text-brand-700 sm:text-base">{d.intro}</p>
        </Container>
      </section>

      <section className="page-section-depth">
        <Container>
          <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {solutionCards.map((card) => (
              <SolutionCard key={card.slug} {...card} />
            ))}
          </div>
        </Container>
      </section>

      <section className="page-section-lift">
        <Container>
          <SectionHeading title={d.guide.title} />
          <ul className="max-w-2xl space-y-3">
            {d.guide.items.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                {item}
              </li>
            ))}
          </ul>
          <div className="mt-12 flex flex-col gap-3 sm:flex-row sm:gap-4">
            <Button href="/contacts">Обсудить задачу</Button>
            <Button variant="secondary" href="/contacts">Отправить объект</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
