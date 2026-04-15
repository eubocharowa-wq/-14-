import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

export default function NotFoundPage() {
  return (
    <>
      <Helmet>
        <title>Страница не найдена — ЦБИ</title>
        <meta name="robots" content="noindex, nofollow" />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Страница не найдена' }]} />

      <section className="relative border-y border-[rgba(28,25,23,0.07)] bg-section-depth py-24 sm:py-32">
        <Container>
          <div className="card-surface mx-auto max-w-xl px-8 py-12 text-center sm:px-12 sm:py-14">
            <p className="text-sm font-semibold uppercase tracking-widest text-brand-400">404</p>
            <h1 className="mt-4 font-display text-3xl font-semibold tracking-tight text-brand-900 sm:text-4xl">
              Страница не найдена
            </h1>
            <p className="mt-5 text-lg leading-relaxed text-brand-600">
              Такой страницы не существует или она была перемещена.
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
