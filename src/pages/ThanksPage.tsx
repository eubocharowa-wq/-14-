import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';
import { seoData } from '@/content/seo';

export default function ThanksPage() {
  const seo = seoData['/thanks'];

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Breadcrumbs
        items={[{ label: 'Главная', to: '/' }, { label: 'Запрос отправлен' }]}
      />

      <section className="relative border-y border-[rgba(28,25,23,0.07)] bg-section-lift py-24 backdrop-blur-[6px] sm:py-32">
        <Container>
          <div className="card-surface mx-auto max-w-xl px-8 py-12 text-center sm:px-12 sm:py-14">
            <h1 className="font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              Спасибо за обращение
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-600">
              Мы получили ваш запрос и свяжемся с вами в ближайшее время для обсуждения задачи.
            </p>
            <div className="mt-10">
              <Button href="/">Вернуться на главную</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
