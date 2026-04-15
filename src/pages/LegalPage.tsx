import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Container from '@/components/ui/Container';
import LegalRenderer from '@/components/common/LegalRenderer';
import { legalPages } from '@/content/legal';
import { seoData } from '@/content/seo';

interface LegalPageProps {
  slug: string;
}

export default function LegalPage({ slug }: LegalPageProps) {
  const page = legalPages.find((p) => p.slug === slug);

  if (!page) return null;

  const seo = seoData[`/${slug}`] || { title: page.title, description: '' };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: page.title }]} />

      <section className="page-section-depth">
        <Container>
          <div className="card-surface max-w-3xl px-8 py-10 sm:px-11 sm:py-12">
            <LegalRenderer content={page.content} />
          </div>
        </Container>
      </section>
    </>
  );
}
