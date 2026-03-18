import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import { VARIANT_PATHS } from './routes';
import LandingVariantA from './LandingVariantA';
import LandingVariantB from './LandingVariantB';
import LandingVariantC from './LandingVariantC';
import LandingVariantD from './LandingVariantD';
import LandingVariantCarrinho from './LandingVariantCarrinho';

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LandingVariantD />} />
        <Route path={VARIANT_PATHS.variantA} element={<LandingVariantA />} />
        <Route path={VARIANT_PATHS.variantB} element={<LandingVariantB />} />
        <Route path={VARIANT_PATHS.variantC} element={<LandingVariantC />} />
        <Route path={VARIANT_PATHS.variantD} element={<LandingVariantD />} />
        <Route path={VARIANT_PATHS.carrinho} element={<LandingVariantCarrinho />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </BrowserRouter>
  );
};

export default App;
