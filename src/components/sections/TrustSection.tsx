import Container from '@/components/ui/Container';
import SectionHeading from '@/components/ui/SectionHeading';
import TrustItem from '@/components/cards/TrustItem';
import { trustData } from '@/content/home';

export default function TrustSection() {
  return (
    <section className="section-pad border-t border-edge/60 bg-gradient-to-b from-white/70 via-paper-50/50 to-transparent">
      <Container>
        <SectionHeading title={trustData.title} subtitle={trustData.subtitle} />
        <div className="grid gap-7 sm:grid-cols-2 sm:gap-8 lg:grid-cols-4">
          {trustData.items.map((item) => (
            <TrustItem key={item.title} {...item} />
          ))}
        </div>
      </Container>
    </section>
  );
}
