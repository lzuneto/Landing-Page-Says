/**
 * Configuração das rotas por variante.
 * Para trocar o nome da URL (ex.: para o MKT), altere apenas os paths abaixo.
 */
export type VariantKey = 'variantA' | 'variantB' | 'variantC' | 'variantD';

export const VARIANT_PATHS: Record<VariantKey, string> = {
  variantA: '/varianteA',
  variantB: '/varianteB',
  variantC: '/varianteC',
  variantD: '/varianteD',
};

/** Path da variante principal (usado no redirect de "/") */
export const DEFAULT_VARIANT_PATH = VARIANT_PATHS.variantD;
