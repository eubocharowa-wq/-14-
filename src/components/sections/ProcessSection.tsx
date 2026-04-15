import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import ProcessStep from '@/components/cards/ProcessStep';
import Button from '@/components/ui/Button';
import { processPreview } from '@/content/home';

export default function ProcessSection() {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeading title={processPreview.title} subtitle={processPreview.subtitle} />
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-2 lg:gap-7">
          {processPreview.steps.map((step) => (
            <ProcessStep key={step.number} {...step} />
          ))}
        </div>
        <div className="mt-14">
          <Button variant="secondary" href={processPreview.cta.href}>
            {processPreview.cta.label}
          </Button>
        </div>
      </Container>
    </section>
  );
}
