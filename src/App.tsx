/**
 * ROTAS (sem #):
 *   http://localhost:5173/              → Home
 *   http://localhost:5173/meu-carrinho  → Meu carrinho (planos)
 *   http://localhost:5173/varianteA     → Variant A
 *   etc. Ver ROTAS.md
 */
import { lazy, Suspense } from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { VARIANT_PATHS, MEU_CARRINHO_PATH } from './routes';
import MeuCarrinho from './MeuCarrinho';

const LandingVariantA = lazy(() => import('./LandingVariantA'));
const LandingVariantB = lazy(() => import('./LandingVariantB'));
const LandingVariantC = lazy(() => import('./LandingVariantC'));
const LandingVariantD = lazy(() => import('./LandingVariantD'));

const Fallback = () => (
  <div style={{ minHeight: '100vh', background: '#e2e8f0', display: 'flex', alignItems: 'center', justifyContent: 'center', fontFamily: 'system-ui' }}>
    Carregando…
  </div>
);

const App = () => {
  const basename = (import.meta.env.BASE_URL || '/').replace(/\/$/, '') || '/';
  return (
    <BrowserRouter basename={basename}>
      <Suspense fallback={<Fallback />}>
        <Routes>
          <Route path={MEU_CARRINHO_PATH} element={<MeuCarrinho />} />
          <Route path="/" element={<LandingVariantD />} />
          <Route path={VARIANT_PATHS.variantA} element={<LandingVariantA />} />
          <Route path={VARIANT_PATHS.variantB} element={<LandingVariantB />} />
          <Route path={VARIANT_PATHS.variantC} element={<LandingVariantC />} />
          <Route path={VARIANT_PATHS.variantD} element={<LandingVariantD />} />
          <Route path="*" element={<Navigate to="/" replace />} />
        </Routes>
      </Suspense>
    </BrowserRouter>
  );
};

export default App;
