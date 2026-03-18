import { useCallback, useState } from 'react';
import { copyVariants } from './landing/copy';
import { scrollToSection, quemSomosData } from './landing/landingUtils.tsx';

export default function LandingVariantD() {
  const copy = copyVariants.variantD;
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});

  const handleAnchorClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      <main>
        {/* Hero D */}
        <section id="hero" className="relative overflow-hidden bg-gradient-to-b from-slate-100/70 via-white to-sky-50/40">
          <div className="absolute inset-0 overflow-hidden pointer-events-none" aria-hidden>
            <div className="absolute top-0 right-0 w-[400px] h-[400px] max-w-[70vw] rounded-full bg-sky-100/20 blur-3xl" />
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 w-[280px] h-[280px] rounded-full bg-slate-100/25 blur-3xl" />
            <div
              className="absolute inset-0 opacity-[0.04] mix-blend-overlay"
              style={{
                backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.8' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)'/%3E%3C/svg%3E")`,
                backgroundRepeat: 'repeat',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 80% 70% at 50% 50%, transparent 40%, rgba(15,23,42,0.03) 100%)',
              }}
            />
            <div
              className="absolute inset-0 pointer-events-none"
              style={{
                background: 'radial-gradient(ellipse 90% 50% at 50% 75%, rgba(148,163,184,0.06) 0%, transparent 55%)',
              }}
            />
          </div>

          <div className="relative z-10 mx-auto max-w-5xl px-4 sm:px-6 pt-6 sm:pt-7 lg:pt-10 pb-8 sm:pb-10 lg:pb-14">
            <div className="flex flex-col items-center text-center">
              <div className="w-full max-w-3xl space-y-3 sm:space-y-4">
                <h1 className="text-slate-700 drop-shadow-sm tracking-tight leading-tight md:leading-[1.12]">
                  <span className="block text-2xl font-normal sm:text-3xl md:text-4xl lg:text-4xl xl:text-5xl">Sua assessoria de corrida</span>
                  <span className="block font-bold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent text-2xl sm:text-3xl md:text-4xl lg:text-5xl">patina…</span>
                  <span className="block font-semibold text-amber-600 text-2xl sm:text-3xl md:text-4xl lg:text-5xl">Não escala?</span>
                </h1>
                <p className="text-slate-600 text-sm sm:text-base leading-relaxed max-w-lg mx-auto">
                  {copy.hero.subtitle}
                </p>
              </div>

              <div className="mt-4 sm:mt-5 flex justify-center">
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center justify-center gap-2 rounded-lg bg-emerald-700 hover:bg-emerald-800 text-white font-semibold py-3 px-5 text-[15px] shadow-md shadow-slate-300/25 hover:shadow-slate-300/30 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 transition-all duration-200 active:scale-[0.99] w-full max-w-[300px] sm:max-w-[320px]"
                >
                  <svg className="w-4 h-4 flex-shrink-0 opacity-85" fill="currentColor" viewBox="0 0 24 24" aria-hidden>
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                  </svg>
                  <span>{copy.hero.ctaPrimary}</span>
                </a>
              </div>

              <div className="mt-5 sm:mt-6 lg:mt-5 w-full max-w-2xl mx-auto">
                <div
                  className="relative rounded-2xl border border-slate-200/80 bg-white shadow-[0_16px_40px_-12px_rgba(0,0,0,0.08),0_0_0_1px_rgba(0,0,0,0.03)] lg:shadow-[0_20px_48px_-14px_rgba(0,0,0,0.1),0_0_0_1px_rgba(0,0,0,0.03)] pt-2 sm:pt-2.5 px-3 sm:px-4 md:px-4 pb-2.5 sm:pb-3 md:pb-4 overflow-hidden"
                  style={{ transform: 'perspective(1200px) rotateX(1.5deg)' }}
                >
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-b from-white/40 to-transparent pointer-events-none" aria-hidden />
                  <img
                    src="/Computer.svg"
                    alt="Dashboard da plataforma Grit Run no computador"
                    className="relative w-full h-auto max-h-[200px] sm:max-h-[240px] md:max-h-[260px] object-contain object-center object-top"
                  />
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Se hoje você" */}
        <section id="identificacao" className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-6xl px-4 sm:px-6 pt-8 sm:pt-10 md:pt-12 lg:pt-14 pb-6 sm:pb-8 md:pb-10 lg:pb-12">
            <div className="text-center">
              <h2 className="text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
                {copy.painSection.title}
              </h2>
              {copy.painSection.subtitle ? (
                <p className="mx-auto mt-3 sm:mt-5 max-w-3xl text-base leading-relaxed text-slate-600 sm:text-lg md:text-xl px-1">
                  {copy.painSection.subtitle}
                </p>
              ) : null}
            </div>
            <div className="mt-8 sm:mt-10 md:mt-12">
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-2.5 sm:gap-3 md:grid-cols-1 lg:gap-4">
                  {copy.painSection.statements.map((item) => (
                    <div
                      key={item.text}
                      className="group relative flex items-start gap-3 rounded-lg border border-slate-200/60 bg-white p-3 transition-colors duration-200 hover:border-slate-300 sm:p-4 md:p-4"
                    >
                      <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600 sm:h-10 sm:w-10">
                        <span className="text-base sm:text-lg" aria-hidden>{item.emoji}</span>
                      </div>
                      <div className="flex-1 pt-0.5 min-w-0">
                        <p className="text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg group-hover:text-slate-900">
                          {item.text}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Nosso aplicativo foi criado para você" */}
        <section id="criado-para-voce" className="relative overflow-hidden bg-white">
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 pt-8 sm:pt-10 lg:pt-12 pb-14 sm:pb-20 lg:pb-24">
            <div className="flex flex-col items-center text-center gap-6 sm:gap-8">
              <div className="flex h-12 w-12 sm:h-14 sm:w-14 shrink-0 items-center justify-center rounded-full bg-sky-100 text-sky-600" aria-hidden>
                <svg className="h-6 w-6 sm:h-7 sm:w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                  <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
              </div>
              {copy.painSection.conclusion ? (
                <p className="text-lg font-semibold leading-relaxed text-slate-900 sm:text-xl md:text-2xl">
                  {copy.painSection.conclusion}
                </p>
              ) : null}
              <p className="text-xl font-bold leading-relaxed text-sky-700 sm:text-2xl md:text-3xl">
                {copy.painSection.conclusionBold}
              </p>
            </div>
          </div>
        </section>

        {/* Seção "Uma plataforma pensada exclusivamente..." */}
        <section id="plataforma-para-quem-quer" className="relative overflow-hidden bg-slate-50/60">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 pt-12 sm:pt-16 lg:pt-20 pb-10 sm:pb-14 lg:pb-16">
            <div className="text-center">
              <h2 className="text-lg font-bold leading-tight tracking-tight text-slate-900 sm:text-xl md:text-2xl lg:text-3xl">
                Uma plataforma pensada exclusivamente para assessores que querem:
              </h2>
            </div>
            <div className="mt-6 sm:mt-8 md:mt-10">
              <div className="grid grid-cols-1 md:grid-cols-[1fr_1px_1fr] md:gap-x-6 lg:gap-x-8 md:items-stretch justify-items-center md:justify-items-stretch">
                <ul className="space-y-3 sm:space-y-4 w-full max-w-sm md:max-w-none">
                  {['Organizar alunos em um só lugar', 'Profissionalizar a entrega', 'Aumentar retenção'].map((text) => (
                    <li key={text} className="flex items-center gap-3 sm:gap-4">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-sky-600" aria-hidden>
                        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
                <div className="hidden md:block w-px bg-slate-300/60 self-stretch min-h-[100px]" aria-hidden />
                <ul className="space-y-3 sm:space-y-4 mt-4 md:mt-0 w-full max-w-sm md:max-w-none">
                  {['Estruturar mensalidades recorrentes', 'Crescer com mais previsibilidade'].map((text) => (
                    <li key={text} className="flex items-center gap-3 sm:gap-4">
                      <span className="flex h-5 w-5 shrink-0 items-center justify-center text-sky-600" aria-hidden>
                        <svg className="h-full w-full" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5} strokeLinecap="round" strokeLinejoin="round">
                          <path d="M5 13l4 4L19 7" />
                        </svg>
                      </span>
                      <span className="text-slate-800 text-base sm:text-lg md:text-xl leading-relaxed font-medium">
                        {text}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </section>

        {/* Seção "Acesso Antecipado" */}
        <section id="acesso-antecipado-top" className="relative overflow-hidden bg-slate-100/70">
          <div className="relative mx-auto max-w-3xl px-4 sm:px-6 py-12 sm:py-14 lg:py-16">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full border border-amber-300/80 bg-amber-200/90 px-3 py-1.5 sm:px-4 sm:py-2 shadow-sm">
                <span className="text-sm" aria-hidden>🚀</span>
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-amber-900">
                  Acesso Antecipado
                </p>
              </div>
              <h2 className="mt-3 sm:mt-4 text-2xl font-bold leading-tight text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl px-1">
                Os primeiros assessores terão:
              </h2>
            </div>
            <div className="mt-8 sm:mt-10">
              <div className="mx-auto max-w-xl space-y-2.5 sm:space-y-3">
                {[
                  { emoji: '🚀', text: 'Condição especial de lançamento' },
                  { emoji: '📈', text: 'Participação na evolução da plataforma' },
                  { emoji: '👑', text: 'Benefícios exclusivos para embaixadores' },
                ].map((item) => (
                  <div
                    key={item.text}
                    className="flex items-center gap-3 rounded-lg border border-slate-200/70 bg-white px-4 py-2.5 sm:gap-4 sm:px-5 sm:py-3"
                  >
                    <span className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full bg-amber-100 text-amber-700 text-lg sm:h-10 sm:w-10 sm:text-xl" aria-hidden>
                      {item.emoji}
                    </span>
                    <p className="text-sm leading-relaxed text-slate-700 sm:text-base md:text-lg">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
            <p className="mt-6 sm:mt-8 text-center text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed max-w-xl mx-auto px-2">
              Estamos formando um grupo fechado para apresentar os detalhes.
            </p>
            <div className="mt-6 sm:mt-8 flex justify-center">
              <a
                href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 text-base shadow-lg shadow-emerald-900/20 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2.5 active:scale-[0.99] w-full max-w-sm min-h-[52px]"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quero acessar a plataforma
              </a>
            </div>
          </div>
        </section>

        {/* Quem somos – D styling */}
        <section id="quem-somos" className="relative overflow-hidden bg-slate-50/60 pt-16 sm:pt-20 lg:pt-24 pb-10 sm:pb-12 lg:pb-14 mb-10">
          <div className="mx-auto max-w-4xl px-4 sm:px-6">
            <div className="mb-10 sm:mb-12">
              <div className="text-center mb-6 sm:mb-10">
                <p className="text-xs sm:text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 mb-3 sm:mb-4">
                  Quem somos
                </p>
                <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl lg:text-5xl leading-tight mb-4 sm:mb-6 px-2">
                  Sobre os criadores da plataforma
                </h2>
                <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-green-500" />
              </div>

              <div className="mx-auto max-w-4xl">
                <div className="space-y-4 sm:space-y-5 md:space-y-6">
                  <div className="group relative overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 rounded-lg p-4 sm:p-5 md:p-6">
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-sky-600 text-lg">
                        1
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-0.5 sm:pt-1 min-w-0">
                        Somos desenvolvedores que cansaram de ver o mercado de corrida mal atendido pelos sistemas e aplicativos atuais.
                      </p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 rounded-lg p-4 sm:p-5 md:p-6">
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-sky-600 text-lg">
                        2
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-0.5 sm:pt-1 min-w-0">
                        Enquanto o setor evoluiu, as soluções ficaram para trás — então decidimos criar algo melhor.
                      </p>
                    </div>
                  </div>

                  <div className="group relative overflow-hidden border border-slate-200 bg-white transition-colors duration-200 hover:border-slate-300 rounded-lg p-4 sm:p-5 md:p-6">
                    <div className="relative flex items-start gap-3 sm:gap-4">
                      <div className="flex-shrink-0 flex items-center justify-center text-white font-bold w-10 h-10 sm:w-11 sm:h-11 rounded-lg bg-sky-600 text-lg">
                        3
                      </div>
                      <p className="text-base sm:text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-0.5 sm:pt-1 min-w-0">
                        Somos corredores que decidiram criar uma plataforma para treinadores que querem crescer com escala.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="mt-10 sm:mt-12">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3 sm:gap-4 md:gap-5">
                {quemSomosData.map((item, index) => (
                  <div
                    key={index}
                    className="relative group overflow-hidden focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2 aspect-[3/2] rounded-lg bg-slate-200"
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
                        onError={() => {
                          setImageErrors((prev) => ({ ...prev, [index]: true }));
                        }}
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
                        <h3 className="text-lg md:text-xl font-semibold text-white mb-2">
                          {item.title}
                        </h3>
                        <p className="text-xs md:text-sm text-white/90 leading-relaxed">
                          {item.description}
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA final */}
        <section id="construcao" className="relative overflow-hidden bg-slate-50/50">
          <div className="relative mx-auto max-w-2xl px-4 sm:px-6 pt-10 sm:pt-12 md:pt-16 pb-20 sm:pb-24 md:pb-28">
            <div className="flex flex-col items-center text-center space-y-6 sm:space-y-8">
              <p className="text-slate-600 text-sm sm:text-base md:text-lg leading-relaxed px-1">
                Estamos formando um grupo fechado para apresentar os detalhes.
              </p>
              <a
                href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-emerald-700 hover:bg-emerald-800 text-white font-semibold px-8 py-4 text-base shadow-lg shadow-slate-300/25 focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2.5 active:scale-[0.99] w-full max-w-sm min-h-[56px]"
              >
                <svg className="w-5 h-5 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quero acessar a plataforma
              </a>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-slate-200 bg-slate-200/50">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="space-y-2 min-w-0 md:max-w-md">
              <p className="text-lg font-semibold tracking-tight text-slate-900">
                {copy.header.logo}
              </p>
              <p className="text-sm font-medium text-slate-700">
                {copy.footer.copyright}
              </p>
              <p className="text-sm text-slate-600">
                {copy.footer.allRightsReserved}
              </p>
            </div>
            <div className="space-y-3 shrink-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                {copy.footer.supportTitle}
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a
                  href={`mailto:${copy.footer.email}`}
                  className="group inline-flex items-center gap-2.5 text-sm text-slate-600 transition hover:text-sky-600"
                >
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
                  <svg className="h-5 w-5 shrink-0 text-slate-400 group-hover:text-sky-600" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" />
                  </svg>
                  <span>{copy.footer.whatsapp}</span>
                </a>
              </div>
            </div>
          </div>
          <div className="mt-6 pt-5 border-t border-slate-200">
            <div className="flex flex-col gap-1.5 text-sm text-slate-600 sm:flex-row sm:flex-wrap sm:items-center sm:gap-x-4 sm:gap-y-1">
              <span className="font-medium text-slate-700">{copy.footer.companyName}</span>
              <span className="hidden sm:inline">·</span>
              <span>{copy.footer.cnpj}</span>
              <span className="hidden sm:inline">·</span>
              <span className="leading-snug">{copy.footer.address}</span>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
