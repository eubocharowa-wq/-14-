import { useParams, Navigate } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqAccordion from '@/components/common/FaqAccordion';
import Button from '@/components/ui/Button';
import { solutionDetails } from '@/content/solutions';
import { seoData } from '@/content/seo';

export default function SolutionDetailPage() {
  const { slug } = useParams<{ slug: string }>();
  const detail = slug ? solutionDetails[slug] : undefined;

  if (!detail) return <Navigate to="/solutions" replace />;

  const seo = seoData[`/solutions/${slug}`] || {
    title: `${detail.title} — ЦБИ`,
    description: detail.subtitle,
  };

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs
        items={[
          { label: 'Главная', to: '/' },
          { label: 'Решения', to: '/solutions' },
          { label: detail.title },
        ]}
      />
      <HeroSection
        data={{
          eyebrow: 'Инвестиционные решения',
          title: detail.title,
          subtitle: detail.subtitle,
          primaryCta: { label: 'Обсудить задачу', href: '/contacts' },
          secondaryCta: { label: 'Отправить объект', href: '/contacts' },
        }}
      />

      {/* Audience */}
      <section className="page-section-lift">
        <Container>
          <SectionHeading title="Кому подходит" />
          <ul className="max-w-2xl space-y-3">
            {detail.audience.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Not fit */}
      <section className="page-section-depth">
        <Container>
          <SectionHeading title="Когда не подходит" />
          <p className="max-w-3xl text-base leading-relaxed text-brand-700">{detail.notFit}</p>
        </Container>
      </section>

      {/* Checklist */}
      <section className="page-section-lift">
        <Container>
          <SectionHeading title="Что проверяем" />
          <ul className="max-w-2xl space-y-3">
            {detail.checklist.map((item) => (
              <li key={item} className="flex gap-3 text-base text-brand-700">
                <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                {item}
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Risks */}
      <section className="page-section-depth">
        <Container>
          <SectionHeading title="Типовые риски" />
          <p className="max-w-3xl text-base leading-relaxed text-brand-700">{detail.risks}</p>
        </Container>
      </section>

      {/* Approach */}
      <section className="page-section-lift">
        <Container>
          <SectionHeading title="Как работает ЦБИ в этом направлении" />
          <p className="max-w-3xl text-base leading-relaxed text-brand-700">{detail.approach}</p>
        </Container>
      </section>

      {/* FAQ */}
      {detail.faq.length > 0 && (
        <section className="page-section-depth">
          <Container>
            <SectionHeading title="Частые вопросы" />
            <div className="max-w-2xl">
              <FaqAccordion items={detail.faq} />
            </div>
          </Container>
        </section>
      )}

      {/* CTA */}
      <section className="page-section-lift">
        <Container>
          <div className="card-surface mx-auto max-w-2xl px-8 py-10 sm:px-10">
            <p className="text-center font-display text-lg font-semibold text-brand-900">
              Следующий шаг
            </p>
            <p className="mx-auto mt-3 max-w-md text-center text-[14px] leading-relaxed text-brand-600">
              Опишите задачу или приложите вводные — ответим с понятным маршрутом работы.
            </p>
            <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:justify-center sm:gap-4">
              <Button href="/contacts">Обсудить задачу</Button>
              <Button variant="secondary" href="/contacts">Отправить объект</Button>
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
