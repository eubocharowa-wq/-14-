import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FaqAccordion from '@/components/common/FaqAccordion';
import Button from '@/components/ui/Button';
import { faqPreviewTitle, faqPreviewCta } from '@/content/home';
import { faqPreviewItems } from '@/content/faq';

export default function FaqPreview() {
  return (
    <section className="section-pad border-t border-edge/60 bg-white/45">
      <Container>
        <SectionHeading title={faqPreviewTitle} />
        <div className="max-w-2xl rounded-[1.25rem] border border-edge-strong bg-white/90 px-2 py-2 shadow-card sm:px-6 sm:py-2">
          <FaqAccordion items={faqPreviewItems} />
        </div>
        <div className="mt-12">
          <Button variant="secondary" href={faqPreviewCta.href}>
            {faqPreviewCta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
