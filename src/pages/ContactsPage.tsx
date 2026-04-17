import { Helmet } from 'react-helmet-async';
import Breadcrumbs from '@/components/common/Breadcrumbs';
import HeroSection from '@/components/sections/HeroSection';
import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import LeadForm from '@/components/form/LeadForm';
import { contactsPageData } from '@/content/contacts';
import { seoData } from '@/content/seo';

export default function ContactsPage() {
  const seo = seoData['/contacts'];
  const d = contactsPageData;

  return (
    <>
      <Helmet>
        <title>{seo.title}</title>
        <meta name="description" content={seo.description} />
        <meta property="og:title" content={seo.title} />
        <meta property="og:description" content={seo.description} />
      </Helmet>

      <Breadcrumbs items={[{ label: 'Главная', to: '/' }, { label: 'Контакты' }]} />
      <HeroSection data={d.hero} />

      <section className="page-section-lift">
        <Container>
          <div className="grid items-start gap-16 lg:grid-cols-2">
            <div>
              <SectionHeading title={d.startInfo.title} />
              <ul className="space-y-2">
                {d.startInfo.items.map((item) => (
                  <li key={item} className="flex gap-3 text-base text-brand-700">
                    <span className="mt-1.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand-400" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="card-surface mt-10 border-brand-200/80 bg-gradient-to-br from-brand-50 to-paper-50/80 p-6">
                <p className="text-sm font-medium text-brand-800">Прямой контакт</p>
                <div className="mt-4 space-y-3">
                  {d.directContacts.map((item) => (
                    <a
                      key={item.label}
                      href={item.href}
                      target={item.href.startsWith('http') ? '_blank' : undefined}
                      rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                      className="block text-sm text-brand-700 transition-colors hover:text-brand-900"
                    >
                      <span className="mr-2 text-brand-500">{item.label}:</span>
                      <span className="font-medium underline underline-offset-2">{item.value}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>

            <div>
              <LeadForm />
            </div>
          </div>
        </Container>
      </section>
    </>
  );
}
