import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import FaqAccordion from '@/components/common/FaqAccordion';
import Button from '@/components/ui/Button';
import { faqPageData, faqCategories } from '@/content/faq';
import { seoData } from '@/content/seo';

export default function FaqPage() {
  const seo = seoData['/faq'];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'FAQ' }]} />
      <HeroSection data={faqPageData.hero} />

      <section className="page-section-lift">
        <Container>
          <div className="max-w-3xl space-y-12">
            {faqCategories.map((cat) => (
              <div key={cat.category}>
                <h2 className="mb-5 font-display text-xl font-semibold tracking-tight text-brand-900 sm:text-2xl">
                  {cat.category}
                </h2>
                <FaqAccordion items={cat.items} />
              </div>
            ))}
          </div>
          <div className="mt-16">
            <Button href="/contacts">Обсудить задачу</Button>
          </div>
        </Container>
      </section>
    </>
  );
}
