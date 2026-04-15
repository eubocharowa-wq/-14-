import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import FormatCard from '@/components/cards/FormatCard';
import { formatCards } from '@/content/formats';

export default function FormatsSection() {
  return (
    <section className="section-pad border-t border-edge/60 bg-white/50">
      <Container>
        <SectionHeading
          title="Форматы сопровождения"
          subtitle="Формат зависит от стадии задачи. Не от желания «продать»."
        />
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {formatCards.map((card) => (
            <FormatCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
