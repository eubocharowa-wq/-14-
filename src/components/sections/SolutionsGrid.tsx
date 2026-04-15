import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import SolutionCard from '@/components/cards/SolutionCard';
import { solutionCards } from '@/content/solutions';

interface SolutionsGridProps {
  title?: string;
  subtitle?: string;
}

export default function SolutionsGrid({
  title = 'Инвестиционные решения',
  subtitle = 'ЦБИ рассматривает не «объекты вообще», а разные форматы входа в недвижимость — под задачу, горизонт и уровень риска.',
}: SolutionsGridProps) {
  return (
    <section className="section-pad">
      <Container>
        <SectionHeading title={title} subtitle={subtitle} />
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-3">
          {solutionCards.map((card) => (
            <SolutionCard key={card.slug} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
