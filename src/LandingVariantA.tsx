import { useCallback, useState } from 'react';
import { copyVariants } from './landing/copy';
import { scrollToSection, quemSomosData } from './landing/landingUtils.tsx';

export default function LandingVariantA() {
  const copy = copyVariants.variantA;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleAnchorClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        {/* Hero A */}
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-sky-300/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gradient-to-br from-sky-300/25 to-sky-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-sky-400/15 rounded-full blur-2xl" />
            <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-sky-300/40 to-transparent" />
            <div className="absolute bottom-32 right-1/3 w-px h-40 bg-gradient-to-b from-transparent via-sky-300/40 to-transparent" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-sky-400/40 rounded-full animate-pulse" />
            <div className="absolute top-60 right-40 w-2 h-2 bg-sky-400/50 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-40 left-32 w-2.5 h-2.5 bg-sky-500/40 rounded-full animate-pulse delay-700" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                                linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 sm:gap-16 px-4 sm:px-6 py-16 sm:py-20 lg:items-center lg:py-28 relative z-10">
            <div className="flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-xl bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 border border-sky-200/50 shadow-sm justify-center">
                <span className="text-base">🚀</span>
                {copy.hero.badge}
              </div>
              <div className="space-y-6 w-full">
                <h1 className="text-3xl font-normal sm:text-4xl md:text-5xl lg:text-6xl text-slate-700 drop-shadow-sm md:leading-[1.12] tracking-tight leading-tight">
                  Entre no Grupo VIP,{' '}
                  <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Receba Oferta Exclusiva do </span>
                  <span className="font-semibold text-amber-600">Clube de Embaixadores Grit Run</span>
                  {' '}e Finalmente{' '}
                  <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Alcance a Escala</span>
                  {' '}Com{' '}
                  <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Assessoria de Corrida</span>
                </h1>
                <p className="text-sm text-black md:text-base">
                  Tenha uma plataforma personalizada para sua assessoria
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row w-full justify-center">
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2 font-semibold rounded-xl flex-1 max-w-md mx-auto w-full px-8 py-4 text-lg min-h-[56px] active:scale-[0.98]"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  {copy.hero.ctaPrimary}
                </a>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-slate-500">
                {copy.hero.stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-slate-900">{stat.value}</p>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Depoimentos */}
        <section id="depoimentos" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-16 md:py-20">
            <div className="space-y-4 text-center mb-12">
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
                Depoimento de clientes
              </h2>
              <p className="mx-auto max-w-2xl text-base text-slate-600 md:text-lg mt-4">
                O que dizem sobre nosso trabalho
              </p>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-2 gap-6 md:gap-8">
              {[
                'teles-assessoria-esportiva.png',
                '03FA79AF-C952-4E0F-8C4F-88CA643A9EDF-ff27c433-6f1b-4d27-8030-365273778113.png',
                '3D0161C2-9BFB-4A33-ADC2-574FD2F6A83E_4_5005_c-15d13f6b-8601-4aa5-89b7-ddcfb1c61d8e.png',
                '4F3B20B6-F8AE-4E10-B434-8A318687F5D0_4_5005_c-99734a75-8ecd-4851-a5ea-2e511ee537fb.png',
                'AE2C3DD0-375A-4DEC-B585-F0610A10C4F4_4_5005_c-7c480b24-583e-43b0-8064-c77fe245d7c5.png',
                '420B2D60-F9FF-49E6-9284-0BF22A88E12A_4_5005_c-a8120908-4783-4e3a-ba38-86c3df1a4b9c.png',
                '954230CE-7870-45EC-8D0A-E5B870F8418F_4_5005_c-9bcb7f62-596a-4051-84e9-453b32356df8.png',
                '0D3FE6E5-06E5-4BDD-AA1D-6AFEE75A5E21-a7b0817c-7df5-4f98-9b7d-8bfe69b2ffc6.png',
                '06E91393-A237-4956-ABA4-5119D2FA7239-6879b1b2-6d74-4f88-b009-919cfa01e5f5.png',
              ].map((filename) => (
                <div
                  key={filename}
                  className="group flex justify-center rounded-xl border border-slate-200 bg-slate-100 p-2 shadow-sm transition hover:shadow-lg hover:border-sky-200"
                >
                  <img
                    src={`/depoimentos/${filename}`}
                    alt="Depoimento de cliente"
                    className="w-full h-auto max-w-full object-contain transition group-hover:opacity-95"
                  />
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Quem somos – estilo A */}
        <section id="quem-somos" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="mx-auto max-w-6xl px-4 sm:px-6 py-16 sm:py-20 md:py-24 lg:py-28">
            <div className="mb-12 sm:mb-16">
              <div className="text-center mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 mb-3 sm:mb-4">
                  Quem somos
                </p>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6 px-2">
                  Sobre os criadores da plataforma
                </h2>
                <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-green-500" />
              </div>
              <div className="mx-auto max-w-5xl">
                <div className="space-y-4 sm:space-y-6 md:space-y-8">
                  <div className="group relative overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-sky-50/30 shadow-md transition-all duration-300 hover:shadow-xl hover:border-sky-300 sm:p-6 md:p-8">
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-sky-500 to-green-500 text-lg sm:text-xl md:text-2xl shadow-lg">1</div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-0.5 sm:pt-1 min-w-0">
                        Somos desenvolvedores que cansaram de ver o mercado de corrida mal atendido pelos sistemas e aplicativos atuais.
                      </p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white to-green-50/30 shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-300 sm:p-6 md:p-8">
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-green-500 to-sky-500 text-lg sm:text-xl md:text-2xl shadow-lg">2</div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-0.5 sm:pt-1 min-w-0">
                        Enquanto o setor evoluiu, as soluções ficaram para trás — então decidimos criar algo melhor.
                      </p>
                    </div>
                  </div>
                  <div className="group relative overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 rounded-xl sm:rounded-2xl bg-gradient-to-br from-white via-sky-50/20 to-green-50/20 shadow-md transition-all duration-300 hover:shadow-xl hover:border-sky-300 sm:p-6 md:p-8">
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-10 h-10 sm:w-12 sm:h-12 md:w-14 md:h-14 rounded-lg sm:rounded-xl bg-gradient-to-br from-sky-600 to-green-600 text-lg sm:text-xl md:text-2xl shadow-lg">3</div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-0.5 sm:pt-1 min-w-0">
                        Somos corredores que decidiram criar uma plataforma para treinadores que querem crescer com escala.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="mt-12 sm:mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-6">
                {quemSomosData.map((item, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 aspect-[4/3] rounded-2xl bg-slate-200"
                    tabIndex={0}
                    role="button"
                    aria-label={`${item.title}. ${item.description}`}
                    onMouseEnter={() => setHoveredCard(index + 10)}
                    onMouseLeave={() => setHoveredCard(null)}
                    onFocus={() => setHoveredCard(index + 10)}
                    onBlur={() => setHoveredCard(null)}
                    onKeyDown={(e) => {
                      if (e.key === 'Enter' || e.key === ' ') {
                        e.preventDefault();
                        setHoveredCard(hoveredCard === index + 10 ? null : index + 10);
                      }
                    }}
                  >
                    {!imageErrors[index] ? (
                      <img
                        src={item.image}
                        alt={item.title}
                        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                        loading="lazy"
                        onError={() => setImageErrors((prev) => ({ ...prev, [index]: true }))}
                      />
                    ) : (
                      <div className="w-full h-full flex flex-col items-center justify-center bg-gradient-to-br from-sky-100 to-blue-100 text-slate-600">
                        <svg className="w-12 h-12 mb-3 text-slate-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <p className="text-xs font-medium px-2 text-center">{item.title}</p>
                        <p className="text-[10px] text-slate-500 mt-1 px-2 text-center">Imagem não encontrada</p>
                      </div>
                    )}
                    <div
                      className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/70 to-transparent transition-all duration-300 ${
                        hoveredCard === index + 10 ? 'opacity-100' : 'opacity-0'
                      }`}
                      aria-hidden={hoveredCard !== index + 10}
                    >
                      <div className="absolute bottom-0 left-0 right-0 p-4 md:p-6 transform transition-transform duration-300 translate-y-0">
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">{item.title}</h3>
                        <p className="text-xs md:text-sm text-white/90 leading-relaxed">{item.description}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final A */}
        <section id="construcao" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
          <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
            <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-xl bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 border border-sky-200/50 shadow-sm">
                <span className="text-base">🚀</span>
                plataforma para treinadores de corrida
              </div>
              <h2 className="text-3xl font-normal text-slate-700 md:text-4xl lg:text-5xl leading-tight tracking-tight">
                <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Receba Oferta Exclusiva do </span>
                <span className="font-semibold text-amber-600">Clube de Embaixadores Grit Run</span>
                {' '}e{' '}
                <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Alcance a Escala</span>
                {' '}com{' '}
                <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Assessoria de Corrida</span>
              </h2>
              <p className="text-sm text-black md:text-base">
                Tenha uma plataforma personalizada para sua assessoria
              </p>
              <a
                href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 text-white shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2 font-semibold w-full max-w-md mx-auto px-8 py-4 text-lg min-h-[56px] active:scale-[0.98]"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quero acessar a plataforma
              </a>
            </div>
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
                  <svg className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-sky-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                  </svg>
                  <span className="break-all">{copy.footer.email}</span>
                </a>
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-slate-600 transition hover:text-sky-600"
                >
                  <svg className="h-5 w-5 shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  WhatsApp
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
