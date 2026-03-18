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

## Deploy no Digital Ocean (lancamento.gritrun.io)

Para **https://lancamento.gritrun.io/carrinho** (e todas as rotas) funcionarem, é obrigatório configurar o **Catchall** no App Platform:

1. Acesse [DigitalOcean Apps](https://cloud.digitalocean.com/apps) e abra o app desta landing.
2. Vá na aba **Settings**.
3. Clique no componente **Static Site** (a landing).
4. Na seção **Custom Pages**, clique em **Edit**.
5. Em **Catchall**, no campo **Page Name**, coloque: **`index.html`** (sem barra, só o nome do arquivo).
6. Salve e faça um **Redeploy** do app (ou aguarde o próximo deploy automático pelo GitHub).

Assim, qualquer URL que não exista como arquivo (ex.: `/carrinho`, `/varianteA`) passa a servir o `index.html` e o React Router mostra a página certa.

**Build no DO:** use comando `npm run build` e **Output Directory** = `dist`.
