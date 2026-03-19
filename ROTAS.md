# Rotas no localhost

URLs **sem** hashtag. Base: **http://localhost:5173**

| URL | O que você vê |
|-----|----------------|
| http://localhost:5173/ | Página inicial (Landing Variant D) |
| **http://localhost:5173/meu-carrinho** | **Página Meu carrinho** (Escolha o seu plano, 4 cards) |
| http://localhost:5173/varianteA | Landing Variant A |
| http://localhost:5173/varianteB | Landing Variant B |
| http://localhost:5173/varianteC | Landing Variant C |
| http://localhost:5173/varianteD | Landing Variant D |
| Qualquer outra | Redireciona para a home (/) |

---

## Resumo

- **Home:** http://localhost:5173/
- **Meu carrinho:** http://localhost:5173/meu-carrinho

Reinicie o servidor (`npm run dev`) se precisar. O Vite está configurado para servir a SPA em rotas como /meu-carrinho.
