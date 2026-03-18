# Landing Page - Grit Run

Landing com variantes (A, B, C, D, Carrinho) em React + Vite.

## Desenvolvimento

```bash
npm install
npm run dev
```

Abre em http://localhost:5173

## Build

```bash
npm run build
```

## Deploy no GitHub Pages

1. No repositório, vá em **Settings** → **Pages**.
2. Em **Build and deployment** → **Source**, escolha **GitHub Actions**.
3. A cada push na branch `main`, o workflow `.github/workflows/deploy-pages.yml` faz o build e publica na Pages.

**URL do site:** `https://<seu-usuario>.github.io/Landing-Page-Says/`

Rotas (exemplos):
- `/` ou `/Landing-Page-Says/` → Variante D
- `/Landing-Page-Says/carrinho` → Carrinho
- `/Landing-Page-Says/varianteA` → Variante A
- etc.

Se usar **domínio próprio** (ex.: seusite.io), em Settings → Pages defina o custom domain e, se o site ficar na raiz do domínio, avise para ajustarmos o `base` do Vite.
