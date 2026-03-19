import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import history from 'connect-history-api-fallback';

// Site na raiz do domínio (custom domain ou user site). Para projeto em usuario.github.io/Landing-Page-Says/ use base: '/Landing-Page-Says/' e GITHUB_PAGES=true no workflow.
export default defineConfig({
  base: '/',
  plugins: [
    react(),
    {
      name: 'spa-fallback',
      configureServer(server) {
        const fallback = history();
        const stack = server.middlewares.stack as Array<{ route: string; handle: (req: unknown, res: unknown, next: () => void) => void }>;
        stack.unshift({ route: '/', handle: fallback });
      },
    },
  ],
  server: {
    port: 5173,
  },
});

