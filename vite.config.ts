import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// No GitHub Pages (projeto): site fica em https://usuario.github.io/Landing-Page-Says/
const base = process.env.GITHUB_PAGES === 'true' ? '/Landing-Page-Says/' : '/';

export default defineConfig({
  base,
  plugins: [react()],
  server: {
    port: 5173,
  },
});

