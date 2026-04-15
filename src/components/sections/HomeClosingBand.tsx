import Container from '@/components/ui/Container';
import Button from '@/components/ui/Button';

interface HomeClosingBandProps {
  title: string;
  subtitle: string;
}

export default function HomeClosingBand({ title, subtitle }: HomeClosingBandProps) {
  return (
    <section className="relative overflow-hidden border-t border-edge/55 bg-gradient-to-b from-brand-900/[0.035] via-paper-50/35 to-brand-100/35 py-20 sm:py-24">
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_100%,rgba(138,125,109,0.08),transparent_55%)]"
        aria-hidden
      />
      <Container className="relative">
        <div className="card-surface mx-auto max-w-3xl px-8 py-10 text-center sm:px-12 sm:py-12">
          <h2 className="font-display text-2xl font-semibold tracking-tight text-brand-900 sm:text-3xl">
            {title}
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-[15px] leading-relaxed text-brand-600">
            {subtitle}
          </p>
          <div className="mt-10 flex flex-col items-center justify-center gap-3 sm:flex-row sm:gap-4">
            <Button href="/contacts">Обсудить задачу</Button>
            <Button variant="secondary" href="/contacts">
              Отправить объект
            </Button>
          </div>
        </div>
      </Container>
    </section>
  );
}
