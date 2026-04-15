import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import Layout from '@/components/layout/Layout';

import HomePage from '@/pages/HomePage';
import AboutPage from '@/pages/AboutPage';
import ProcessPage from '@/pages/ProcessPage';
import SolutionsPage from '@/pages/SolutionsPage';
import SolutionDetailPage from '@/pages/SolutionDetailPage';
import FormatsPage from '@/pages/FormatsPage';
import CasesPage from '@/pages/CasesPage';
import FaqPage from '@/pages/FaqPage';
import ContactsPage from '@/pages/ContactsPage';
import LegalPage from '@/pages/LegalPage';
import ThanksPage from '@/pages/ThanksPage';
import NotFoundPage from '@/pages/NotFoundPage';

export default function App() {
  return (
    <HelmetProvider>
      <BrowserRouter>
        <Routes>
          <Route element={<Layout />}>
            <Route index element={<HomePage />} />
            <Route path="about" element={<AboutPage />} />
            <Route path="process" element={<ProcessPage />} />
            <Route path="solutions" element={<SolutionsPage />} />
            <Route path="solutions/:slug" element={<SolutionDetailPage />} />
            <Route path="formats" element={<FormatsPage />} />
            <Route path="cases" element={<CasesPage />} />
            <Route path="faq" element={<FaqPage />} />
            <Route path="contacts" element={<ContactsPage />} />
            <Route path="privacy" element={<LegalPage slug="privacy" />} />
            <Route path="consent" element={<LegalPage slug="consent" />} />
            <Route path="cookies" element={<LegalPage slug="cookies" />} />
            <Route path="terms" element={<LegalPage slug="terms" />} />
            <Route path="disclaimer" element={<LegalPage slug="disclaimer" />} />
            <Route path="thanks" element={<ThanksPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </HelmetProvider>
  );
}
