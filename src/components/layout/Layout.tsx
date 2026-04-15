import { Outlet } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';
import { useScrollToTop } from '@/hooks/useScrollToTop';

export default function Layout() {
  useScrollToTop();

  return (
    <div className="flex min-h-screen flex-col">
      <Header />
      <main className="relative isolate flex-1 overflow-x-hidden bg-page-base">
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[min(72vh,42rem)] bg-[radial-gradient(ellipse_72%_56%_at_50%_-8%,rgba(196,184,168,0.2),transparent_58%)]"
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 h-[min(48vh,26rem)] bg-[radial-gradient(ellipse_80%_48%_at_50%_108%,rgba(138,125,109,0.09),transparent_55%)] opacity-90"
          aria-hidden
        />
        <div className="relative">
          <Outlet />
        </div>
      </main>
      <Footer />
    </div>
  );
}
