import { useCallback, useState } from 'react';
import { copyVariants } from './landing/copy';
import { scrollToSection, quemSomosData } from './landing/landingUtils.tsx';

const WHATSAPP_URL = 'https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t';

const DEPOIMENTOS_FILES = [
  'teles-assessoria-esportiva.png',
  '03FA79AF-C952-4E0F-8C4F-88CA643A9EDF-ff27c433-6f1b-4d27-8030-365273778113.png',
  '3D0161C2-9BFB-4A33-ADC2-574FD2F6A83E_4_5005_c-15d13f6b-8601-4aa5-89b7-ddcfb1c61d8e.png',
  '4F3B20B6-F8AE-4E10-B434-8A318687F5D0_4_5005_c-99734a75-8ecd-4851-a5ea-2e511ee537fb.png',
  'AE2C3DD0-375A-4DEC-B585-F0610A10C4F4_4_5005_c-7c480b24-583e-43b0-8064-c77fe245d7c5.png',
  '420B2D60-F9FF-49E6-9284-0BF22A88E12A_4_5005_c-a8120908-4783-4e3a-ba38-86c3df1a4b9c.png',
  '954230CE-7870-45EC-8D0A-E5B870F8418F_4_5005_c-9bcb7f62-596a-4051-84e9-453b32356df8.png',
  '0D3FE6E5-06E5-4BDD-AA1D-6AFEE75A5E21-a7b0817c-7df5-4f98-9b7d-8bfe69b2ffc6.png',
  '06E91393-A237-4956-ABA4-5119D2FA7239-6879b1b2-6d74-4f88-b009-919cfa01e5f5.png',
];

export default function LandingVariantC() {
  const copy = copyVariants.variantC;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleAnchorClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header */}
      <header className="sticky top-0 z-50 border-b border-slate-200 bg-white/90 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-6 py-4">
          <a
            href="#hero"
            className="text-lg font-semibold tracking-tight text-slate-900"
            onClick={(e) => { e.preventDefault(); handleAnchorClick('hero'); }}
          >
            {copy.header.logo}
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            <a href="#benefits" className="transition hover:text-slate-900" onClick={(e) => { e.preventDefault(); handleAnchorClick('benefits'); }}>
              {copy.header.nav.benefits}
            </a>
            <a href="#quem-somos" className="transition hover:text-slate-900" onClick={(e) => { e.preventDefault(); handleAnchorClick('quem-somos'); }}>
              Quem somos
            </a>
            <a href="#construcao" className="transition hover:text-slate-900" onClick={(e) => { e.preventDefault(); handleAnchorClick('construcao'); }}>
              Faça parte
            </a>
          </nav>
          <a
            href={WHATSAPP_URL}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-px hover:bg-green-500"
          >
            <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
              <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
            </svg>
            Entrar no grupo
          </a>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section id="hero" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-green-50">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-green-200/20 rounded-full blur-3xl" />
            <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gradient-to-br from-green-200/30 to-sky-200/20 rounded-full blur-3xl" />
            <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-green-300/20 rounded-full blur-2xl" />
            <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-sky-300/40 to-transparent" />
            <div className="absolute bottom-32 right-1/3 w-px h-40 bg-gradient-to-b from-transparent via-green-300/40 to-transparent" />
            <div className="absolute top-40 right-20 w-3 h-3 bg-sky-400/40 rounded-full animate-pulse" />
            <div className="absolute top-60 right-40 w-2 h-2 bg-green-400/50 rounded-full animate-pulse delay-300" />
            <div className="absolute bottom-40 left-32 w-2.5 h-2.5 bg-sky-500/40 rounded-full animate-pulse delay-700" />
            <div className="absolute inset-0 opacity-[0.02]" style={{
              backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
              backgroundSize: '40px 40px'
            }} />
          </div>

          <div className="mx-auto grid max-w-6xl gap-12 sm:gap-16 px-4 sm:px-6 py-16 sm:py-20 lg:py-28 relative z-10">
            <div className="flex flex-col items-center text-center w-full max-w-4xl mx-auto space-y-8 sm:space-y-10 md:space-y-12">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-full bg-gradient-to-r from-sky-100 to-green-100 text-sky-700 border border-sky-200/50 shadow-sm justify-center">
                <span className="text-base">🚀</span>
                {copy.hero.badge}
              </div>
              <div className="space-y-6 w-full">
                <h1 className="text-4xl font-semibold md:text-5xl bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent leading-tight">
                  {copy.hero.title}
                </h1>
                <div className="space-y-6">
                  <p className="text-base text-slate-600 md:text-lg leading-relaxed">
                    Mais de 13 milhões de brasileiros correm, mas um treinador que usa planilhas não consegue escalar.
                  </p>
                  <div className="relative group">
                    <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-500 via-green-500 to-sky-500 rounded-full shadow-lg shadow-sky-500/50 group-hover:shadow-xl group-hover:shadow-green-500/50 transition-all duration-300" />
                    <div className="pl-8 py-5 rounded-2xl bg-gradient-to-r from-sky-50/80 via-green-50/60 to-sky-50/40 border-l-4 border-sky-400/60 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                      <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                      <div className="absolute top-4 right-4 text-2xl opacity-20 group-hover:opacity-30 transition-opacity">⚡</div>
                      <p className="text-lg md:text-xl font-bold text-slate-900 leading-relaxed relative z-10">
                        Você não precisa trabalhar mais horas para ganhar mais como treinador de corrida.
                      </p>
                    </div>
                  </div>
                  <p className="text-base text-slate-600 md:text-lg leading-relaxed">
                    O Grit Run organiza sua operação e cria uma comunidade engajada para que sua assessoria cresça sem depender exclusivamente do seu tempo.
                  </p>
                </div>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row w-full justify-center">
                <a
                  href={WHATSAPP_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-green-600 text-white shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2 font-semibold rounded-xl flex-1 max-w-md mx-auto w-full px-8 py-4 text-lg min-h-[56px] active:scale-[0.98]"
                >
                  <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  Quero ter acesso
                </a>
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
              {DEPOIMENTOS_FILES.map((filename) => (
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

        {/* Dores comuns */}
        <section id="dor-latente-cards" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-100/20 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-red-50/30 blur-3xl" />
            <div className="absolute right-1/2 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-100/15 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-100/80 px-4 py-2 backdrop-blur-sm border border-red-200/50">
                <svg className="h-4 w-4 text-red-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-red-600">
                  Dores comuns
                </p>
              </div>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                {copy.painSection.title}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {copy.painSection.subtitle}
              </p>
            </div>

            <div className="mt-20">
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                  {copy.painSection.statements.map((item) => (
                    <div
                      key={item.text}
                      className="group relative overflow-hidden rounded-3xl border border-red-200/60 bg-white/80 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl hover:shadow-red-200/40"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 transition-all duration-300 group-hover:from-red-50/50 group-hover:to-transparent" />
                      <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-start gap-6">
                        <div className="flex shrink-0 items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-red-100 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30 transition-transform duration-300 group-hover:scale-110">
                              <span className="text-2xl">{item.emoji}</span>
                            </div>
                          </div>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-base leading-relaxed text-slate-700 md:text-lg group-hover:text-slate-900">
                            {item.text}
                          </p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="mt-16">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-3xl border-2 border-sky-200/60 bg-gradient-to-br from-sky-50 via-white to-blue-50/30 p-10 text-center shadow-xl shadow-sky-200/20 backdrop-blur-sm">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.663 17h4.673M12 3v1m6.364 1.636l-.707.707M21 12h-1M4 12H3m3.343-5.657l-.707-.707m2.828 9.9a5 5 0 117.072 0l-.548.547A3.374 3.374 0 0014 18.469V19a2 2 0 11-4 0v-.531c0-.895-.356-1.754-.988-2.386l-.548-.547z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
                    {copy.painSection.conclusion}
                  </p>
                  <p className="mt-4 text-2xl font-bold leading-relaxed text-sky-600 md:text-3xl">
                    {copy.painSection.conclusionBold}
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Quem somos */}
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

        {/* CTA */}
        <section id="construcao" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
          <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
            <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-xl bg-gradient-to-r from-sky-100 to-green-100 text-sky-700 border border-sky-200/50 shadow-sm">
                <span className="text-base">🚀</span>
                Grupo Exclusivo
              </div>
              <h2 className="text-3xl font-normal text-slate-700 md:text-4xl lg:text-5xl leading-tight tracking-tight">
                Faça parte do grupo exclusivo no WhatsApp
              </h2>
              <a
                href={WHATSAPP_URL}
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
                  href={WHATSAPP_URL}
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
