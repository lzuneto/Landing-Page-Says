import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// Site na raiz do domínio (custom domain ou user site). Para projeto em usuario.github.io/Landing-Page-Says/ use base: '/Landing-Page-Says/' e GITHUB_PAGES=true no workflow.
export default defineConfig({
  base: '/',
  plugins: [react()],
  server: {
    port: 5173,
  },
});

