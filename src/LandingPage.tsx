import type { VariantKey } from './landing/copy';
import LandingVariantA from './LandingVariantA';
import LandingVariantB from './LandingVariantB';
import LandingVariantC from './LandingVariantC';
import LandingVariantD from './LandingVariantD';

export type { VariantKey } from './landing/copy';

const VARIANT_COMPONENTS = {
  variantA: LandingVariantA,
  variantB: LandingVariantB,
  variantC: LandingVariantC,
  variantD: LandingVariantD,
} as const;

/**
 * Página principal da landing. A variante é definida pela rota (App)
 * ou passada por prop. Cada variante tem seu próprio componente.
 */
export default function LandingPage({ variantKey }: { variantKey: VariantKey }) {
  const Component = VARIANT_COMPONENTS[variantKey];
  return <Component />;
}
