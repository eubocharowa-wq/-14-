import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import CasePreviewCard from '@/components/cards/CasePreviewCard';
import Button from '@/components/ui/Button';
import DisclaimerBanner from '@/components/common/DisclaimerBanner';
import { casesPreviewData } from '@/content/home';
import { cases } from '@/content/cases';

export default function CasesPreview() {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeading title={casesPreviewData.title} subtitle={casesPreviewData.subtitle} />
        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          {cases.slice(0, 3).map((c, i) => (
            <CasePreviewCard key={i} {...c} />
          ))}
        </div>
        <div className="mt-10">
          <DisclaimerBanner className="mb-8" />
          <Button variant="secondary" href={casesPreviewData.cta.href}>
            {casesPreviewData.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
