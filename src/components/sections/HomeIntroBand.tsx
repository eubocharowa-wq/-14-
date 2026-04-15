import Container from '@/components/ui/Container';

interface HomeIntroBandProps {
  kicker: string;
  title: string;
  lead: string;
}

export default function HomeIntroBand({ kicker, title, lead }: HomeIntroBandProps) {
  return (
    <section className="relative overflow-hidden border-b border-edge/55 bg-gradient-to-b from-white/75 via-paper-50/50 to-transparent py-16 backdrop-blur-[8px] sm:py-20">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_60%_45%_at_50%_0%,rgba(196,184,168,0.12),transparent_58%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="mx-auto max-w-3xl text-center">
          <p className="text-[10px] font-semibold uppercase tracking-[0.26em] text-brand-500">
            {kicker}
          </p>
          <h2 className="mt-5 text-balance font-display text-2xl font-semibold leading-snug tracking-tight text-brand-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mt-6 text-[15px] leading-[1.75] text-brand-600 sm:text-base">{lead}</p>
        </div>
      </Container>
    </section>
  );
}
