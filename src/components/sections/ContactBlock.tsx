import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import LeadForm from '@/components/form/LeadForm';
import { contactBlockData, trustData } from '@/content/home';

export default function ContactBlock() {
  const trustLabels = trustData.items.slice(0, 3).map((item) => item.title);

  return (
    <section className="section-pad relative border-t border-edge/80 bg-gradient-to-b from-paper-100/50 via-brand-50/20 to-brand-100/30">
      <div
        className="pointer-events-none absolute inset-x-0 bottom-0 h-32 bg-gradient-to-t from-brand-100/40 to-transparent"
        aria-hidden
      />
      <Container className="relative">
        <div className="grid items-start gap-16 lg:grid-cols-2 lg:gap-20 xl:gap-24">
          <div className="max-w-xl lg:pt-1">
            <SectionHeading title={contactBlockData.title} subtitle={contactBlockData.subtitle} />
          </div>
          <div className="lg:pt-1">
            <LeadForm compact embedded trustLabels={trustLabels} />
          </div>
        </div>
      </Container>
    </section>
  );
}
