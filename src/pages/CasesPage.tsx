import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import CasePreviewCard from '@/components/cards/CasePreviewCard';
import Button from '@/components/ui/Button';
import DisclaimerBanner from '@/components/common/DisclaimerBanner';
import { casesPageData, cases } from '@/content/cases';
import { seoData } from '@/content/seo';

export default function CasesPage() {
  const seo = seoData['/cases'];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Кейсы' }]} />
      <HeroSection data={casesPageData.hero} />

      <section className="page-section-lift">
        <Container>
          <p className="max-w-3xl text-[15px] leading-relaxed text-brand-700 sm:text-base">
            {casesPageData.intro}
          </p>
        </Container>
      </section>

      <section className="page-section-depth">
        <Container>
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {cases.map((c, i) => (
              <CasePreviewCard key={i} {...c} />
            ))}
          </div>
          <div className="mt-10">
            <DisclaimerBanner className="mb-6" />
            <Button href="/contacts">Обсудить похожую задачу</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
