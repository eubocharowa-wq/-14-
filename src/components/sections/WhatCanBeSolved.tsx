import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import RouteCard from '@/components/cards/RouteCard';
import { whatCanBeSolved } from '@/content/home';

export default function WhatCanBeSolved() {
  return (
    <section className="section-pad border-t border-edge/60 bg-white/60 backdrop-blur-[1px]">
      <Container>
        <SectionHeading title={whatCanBeSolved.title} subtitle={whatCanBeSolved.subtitle} />
        <div className="grid gap-7 md:grid-cols-3 md:gap-8">
          {whatCanBeSolved.cards.map((card) => (
            <RouteCard key={card.title} {...card} />
          ))}
        </div>
      </Container>
    </section>
  );
}
