import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { HelmetProvider } from 'react-helmet-async';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { BiovermaPage } from './pages/BiovermaPage';
import { AntiChutePage } from './pages/AntiChutePage';
import { RetinolePage } from './pages/RetinolePage';
import { ProteinesPage } from './pages/ProteinesPage';
import { CremeSolairePage } from './pages/CremeSolairePage';
import { NiacinamidePage } from './pages/NiacinamidePage';
import { SerumCheveuxPage } from './pages/SerumCheveuxPage';
import { SerumRetinolPage } from './pages/SerumRetinolPage';
import { SoinEclatSensiblePage } from './pages/SoinEclatSensiblePage';
import { OrderPage } from './pages/OrderPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';
import { ROUTES } from './constants/routes';
import { WhatsAppLink } from './components/layout/whatsappLink';
import './assets/styles/global.css';

function App() {
  return (
    <HelmetProvider>
    <LanguageProvider>
      <BrowserRouter>
        <ScrollToTop />
        <WhatsAppLink />
        <Routes>
          <Route path={ROUTES.HOME} element={<MainLayout />}>
            <Route index element={<HomePage />} />
            <Route path={ROUTES.BIOVERMA} element={<BiovermaPage />} />
            <Route path={ROUTES.ANTICHUTE} element={<AntiChutePage />} />
            <Route path={ROUTES.RETINOLE} element={<RetinolePage />} />
            <Route path={ROUTES.PROTEINES} element={<ProteinesPage />} />
            <Route path={ROUTES.ECRANSOLAIRE} element={<CremeSolairePage />} />
            <Route path={ROUTES.NIACINAMIDE} element={<NiacinamidePage />} />
            <Route path={ROUTES.HYDRATANT} element={<SerumCheveuxPage />} />
            <Route path={ROUTES.SERUMRITANOL} element={<SerumRetinolPage />} />
            <Route path={ROUTES.INTIME} element={<SoinEclatSensiblePage />} />
            <Route path={ROUTES.ORDER} element={<OrderPage />} />
            <Route path="category/:slug" element={<CategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
    </HelmetProvider>
  );
}

export default App;
