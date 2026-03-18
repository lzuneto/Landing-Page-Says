import { useCallback } from 'react';
import { copyVariants } from './landing/copy';
import { scrollToSection } from './landing/landingUtils.tsx';

export default function LandingVariantCarrinho() {
  const copy = copyVariants.carrinho;

  const handleAnchorClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        {/* Hero Carrinho */}
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-slate-50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute top-0 right-0 w-96 h-96 bg-sky-100/30 rounded-full blur-3xl" />
            <div className="absolute bottom-0 left-0 w-72 h-72 bg-slate-100/40 rounded-full blur-3xl" />
          </div>
          <div className="relative z-10 mx-auto max-w-4xl px-4 sm:px-6 py-16 sm:py-20 lg:py-24">
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-xl bg-sky-100 text-sky-700 border border-sky-200/50 shadow-sm mb-6">
                🛒 {copy.hero.badge}
              </div>
              <h1 className="text-3xl font-semibold text-slate-800 sm:text-4xl md:text-5xl tracking-tight">
                {copy.hero.title}
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
                {copy.hero.subtitle}
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 text-base shadow-lg transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  <span>{copy.hero.ctaPrimary}</span>
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold px-6 py-3 text-base hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  {copy.hero.ctaSecondary}
                </a>
              </div>
            </div>
          </div>
        </section>

        {/* Área para conteúdo do carrinho (placeholder) */}
        <section className="relative bg-white border-t border-slate-200">
          <div className="mx-auto max-w-4xl px-4 sm:px-6 py-12 sm:py-16">
            <p className="text-center text-slate-500 text-sm">
              Aqui você pode adicionar a listagem de itens do carrinho, totais e formulário de checkout.
            </p>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="space-y-2 min-w-0 md:max-w-md">
              <p className="text-lg font-semibold tracking-tight text-slate-900">{copy.header.logo}</p>
              <p className="text-sm font-medium text-slate-700">{copy.footer.copyright}</p>
              <p className="text-sm text-slate-600">{copy.footer.allRightsReserved}</p>
            </div>
            <div className="space-y-3 shrink-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">{copy.footer.supportTitle}</h3>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a href={`mailto:${copy.footer.email}`} className="group inline-flex items-center gap-2.5 text-sm text-slate-600 transition hover:text-sky-600">
                  <span className="break-all">{copy.footer.email}</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-slate-600 transition hover:text-sky-600"
                >
                  {copy.footer.whatsapp}
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
