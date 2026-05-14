import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { LanguageProvider } from './context/LanguageContext';
import { MainLayout } from './components/layout/MainLayout';
import { HomePage } from './pages/HomePage';
import { CategoryPage } from './pages/CategoryPage';
import { BiovermaPage } from './pages/BiovermaPage';
import { AntiChutePage } from './pages/AntiChutePage';
import { RetinolePage } from './pages/RetinolePage';
import { ProteinesPage } from './pages/ProteinesPage';
import { OrderPage } from './pages/OrderPage';
import { NotFoundPage } from './pages/NotFoundPage';
import ScrollToTop from './components/common/ScrollToTop';
import { ROUTES } from './constants/routes';
import { WhatsAppLink } from './components/layout/whatsappLink';
import './assets/styles/global.css';

function App() {
  return (
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
            <Route path={ROUTES.ORDER} element={<OrderPage />} />
            <Route path="category/:slug" element={<CategoryPage />} />
            <Route path="*" element={<NotFoundPage />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </LanguageProvider>
  );
}

export default App;
