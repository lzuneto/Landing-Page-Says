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

**URL do site:**
- Com **domínio próprio** (Settings → Pages → Custom domain): `https://seusite.io/` — rotas: `/`, `/carrinho`, `/varianteA`, etc.
- Sem custom domain (projeto): `https://<usuario>.github.io/Landing-Page-Says/` — aí é preciso usar `base: '/Landing-Page-Says/'` no `vite.config.ts` e no workflow definir `env: GITHUB_PAGES: 'true'` no step de build.
