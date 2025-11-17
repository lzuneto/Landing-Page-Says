import { useCallback } from 'react';

type Stat = {
  label: string;
  value: string;
};

type Feature = {
  title: string;
  description: string;
};

type Testimonial = {
  content: string;
  author: string;
  role: string;
};

type Step = {
  title: string;
  description: string;
};

type Plan = {
  name: string;
  description: string;
  price: string;
  cta: string;
  highlight?: boolean;
  features: string[];
};

type Faq = {
  question: string;
  answer: string;
};

const painStatements = [
  { emoji: '🌧️', text: '“Será que estou correndo certo?”' },
  {
    emoji: '🌀',
    text: '“Por que todo mundo evolui e eu continuo no mesmo pace?”',
  },
  { emoji: '🩹', text: '“E se eu estiver me machucando sem perceber?”' },
  { emoji: '🏁', text: '“Eu queria correr 5 km, mas sempre paro antes…”' },
  { emoji: '⏳', text: '“Quero treinar, mas minha rotina não ajuda.”' },
  { emoji: '🧭', text: '“Eu não sei por onde começar.”' },
];

const stats: Stat[] = [
  { label: 'Treinos realizados', value: '2.400+' },
  { label: 'Km registrados', value: '40.000+' },
  { label: 'Satisfação média', value: '4.9/5' },
];

const features: Feature[] = [
  {
    title: 'Treinos inteligentes e personalizados',
    description: 'Feitos com base em objetivos, ritmo, tempo e histórico real.',
  },
  {
    title: 'Ajustes automáticos conforme performance',
    description: 'Ritmo mudou? Corrida cansou? O plano se adapta pra você.',
  },
  {
    title: 'Semana otimizada para sua rotina',
    description: 'Calendário inteligente que respeita seus dias e horários.',
  },
  {
    title: 'Painel de evolução completo',
    description: 'Métricas claras: pace, distância, constância e progressão.',
  },
  {
    title: 'Estratégia para 5K, 10K, 21K, 42K',
    description: 'Planeje desafios com planos validados para cada distância.',
  },
  {
    title: 'Programas validados por especialistas',
    description: 'Baseados em métodos profissionais, com linguagem simples.',
  },
];

const testimonials: Testimonial[] = [
  {
    content:
      'A tecnologia se tornou minha maior aliada na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
    author: 'Inácio Nogueira',
    role: 'Maratonista',
  },
  {
    content:
      'A plataforma é essencial para qualquer pessoa correr melhor. Ela orienta, ajusta e guia — desde iniciantes até quem já corre distâncias maiores. Facilita muito a evolução com segurança.',
    author: 'Rafael Soccol',
    role: 'Corredor de Meia Maratona – Florianópolis',
  },
  {
    content:
      'Comecei a correr há pouco tempo e já vi meu ritmo melhorar rapidamente. A plataforma se adapta ao meu preparo e me dá confiança para continuar. Nunca imaginei evoluir tão rápido.',
    author: 'Elizeu Neto',
    role: 'Corredor Iniciante',
  },
];

const steps: Step[] = [
  {
    title: 'Você cria seu perfil de corrida',
    description: 'Objetivo, disponibilidade, ritmo atual, limitações, histórico.',
  },
  {
    title: 'O sistema monta seu plano automático',
    description: 'Feito sob medida para sua vida.',
  },
  {
    title: 'Cada treino se adapta ao seu desempenho real',
    description:
      'Correu mais forte? Ajusta. Sentiu cansaço? Reduz carga. Faltou treino? Remonta o cronograma.',
  },
  {
    title: 'Você vê sua evolução diariamente',
    description: 'Gráficos, progressão, pace, distância, constância.',
  },
  {
    title: 'Resultado',
    description:
      'Um corredor mais confiante, consistente e preparado — em menos tempo e sem frustração.',
  },
];

const plans: Plan[] = [
  {
    name: 'TESTE GRATUITO',
    description: 'Ideal para quem quer experimentar antes de se comprometer.',
    price: 'R$ 0/14 dias',
    cta: 'Testar por 14 dias',
    highlight: true,
    features: [
      'Acesso aos treinos básicos',
      'Primeiro plano personalizado liberado',
      'Recalculo automático da semana conforme performance',
      'Cancelamento automático sem cobrança',
    ],
  },
  {
    name: 'MENSAL',
    description: 'Para quem quer treinar com inteligência.',
    price: 'R$ 49,90/mês',
    cta: 'Assinar Mensal',
    features: [
      'Todos os recursos do Teste Gratuito',
      'Treinos adaptativos ilimitados',
      'Estratégias completas para 5K, 10K e 21K',
      'Painel avançado de métricas (pace, distância, constância)',
    ],
  },
  {
    name: 'Anual',
    description: '(cobrado uma vez por ano)',
    price: 'R$ 35,00 / mês',
    cta: 'Assinar Anual',
    features: [
      'Todos os recursos do plano Mensal',
      'Acesso garantido a novos modos de treino',
      'Prioridade em novas funcionalidades',
      'Economia de R$ 178 por ano',
      'Pagamento único, sem surpresas',
    ],
  },
];

const faqs: Faq[] = [
  {
    question: 'Preciso ter experiência para usar a plataforma?',
    answer:
      'Não. A plataforma foi criada para iniciantes, intermediários e avançados. Os treinos se adaptam automaticamente ao seu nível atual.',
  },
  {
    question: 'Como os treinos são personalizados?',
    answer:
      'O sistema analisa seu ritmo, disponibilidade, histórico e objetivo. A partir disso, monta e ajusta seu plano automaticamente conforme sua evolução.',
  },
  {
    question: 'E se eu não conseguir seguir o treino do dia?',
    answer:
      'Sem problema. O sistema recalcula sua semana e adapta o plano ao seu ritmo real, evitando frustração e sobrecarga.',
  },
  {
    question: 'Preciso de relógio Garmin ou outro smartwatch?',
    answer:
      'Não. Você pode começar usando apenas o celular.',
  },
];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LandingPage = () => {
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
            onClick={(event) => {
              event.preventDefault();
              handleAnchorClick('hero');
            }}
          >
            PaceON
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {[
              { label: 'Benefícios', id: 'benefits' },
              { label: 'Depoimentos', id: 'social-proof' },
              { label: 'Como funciona', id: 'steps' },
              { label: 'Planos', id: 'plans' },
              { label: 'FAQ', id: 'faq' },
            ].map((item) => (
              <a
                key={item.id}
                href={`#${item.id}`}
                className="transition hover:text-slate-900"
                onClick={(event) => {
                  event.preventDefault();
                  handleAnchorClick(item.id);
                }}
              >
                {item.label}
              </a>
            ))}
          </nav>
          <button
            type="button"
            className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-px hover:bg-sky-500"
            onClick={() => handleAnchorClick('plans')}
          >
            Começar grátis
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-hidden bg-gradient-to-b from-sky-50 via-white to-white"
        >
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700">
                Aplicativo para Corredores
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                  Leve sua corrida ao próximo nível, com treinos que se ajustam
                  ao seu corpo, seu tempo e sua vida.
                </h1>
                <p className="text-base text-slate-600 md:text-lg">
                  O único app com o Sistema Inteligente de Treinos Adaptativos™.
                </p>
                <p className="text-base text-slate-600 md:text-lg">
                  <em>Corra mais. Corra melhor. Corra do seu jeito.</em>
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="flex-1 rounded-full bg-sky-600 px-6 py-3 text-center text-base font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-500"
                  onClick={() => handleAnchorClick('plans')}
                >
                  Começar teste gratuito
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-full border border-slate-200 px-6 py-3 text-center text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
                  onClick={() => handleAnchorClick('steps')}
                >
                  Ver como funciona
                </button>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-slate-500">
                {stats.map((stat) => (
                  <div key={stat.label}>
                    <p className="text-2xl font-semibold text-slate-900">
                      {stat.value}
                    </p>
                    <p>{stat.label}</p>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="absolute -left-10 top-6 h-40 w-40 rounded-full bg-sky-200 blur-3xl" />
              <div className="absolute right-0 -bottom-10 h-40 w-40 rounded-full bg-slate-200 blur-3xl" />
              <div className="relative rounded-3xl border border-slate-200 bg-white p-4 shadow-2xl shadow-sky-100">
                <div className="rounded-2xl border border-slate-100 bg-slate-50 p-6">
                  <div className="flex items-center justify-between">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-sky-500 to-blue-500" />
                    <div className="h-2 w-16 rounded-full bg-slate-200" />
                  </div>
                  <div className="mt-8 space-y-6">
                    {[1, 2, 3, 4].map((item) => (
                      <div
                        key={item}
                        className="flex items-center gap-4 rounded-2xl border border-slate-100 bg-white p-4"
                      >
                        <div className="h-10 w-10 rounded-2xl bg-sky-100" />
                        <div className="flex-1 space-y-2">
                          <div className="h-2 rounded-full bg-slate-200" />
                          <div className="h-2 w-1/2 rounded-full bg-slate-200/70" />
                        </div>
                        <div className="text-xs text-slate-500">+12%</div>
                      </div>
                    ))}
                  </div>
                </div>
                <div className="mt-6 rounded-2xl bg-sky-50/80 p-4">
                  <p className="text-sm text-slate-600">
                    Visual do painel com cards, gráficos e alertas inspirado no layout original.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Bloco 03 – Cards empilhados */}
        <section id="dor-latente-cards" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-600">
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Essas dúvidas são mais comuns do que você imagina.
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
              Elas aparecem quando o treino não se adapta ao seu corpo, ao seu tempo e à sua vida.

              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {painStatements.map((item) => (
                <article
                  key={item.text}
                  className="flex h-full flex-col rounded-2xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/70 transition duration-300 hover:-translate-y-1 hover:shadow-xl"
                >
                  <div className="flex items-center gap-3">
                    <span className="text-2xl">{item.emoji}</span>
                    <div className="h-px flex-1 bg-slate-200" />
                  </div>
                  <p className="mt-4 text-base text-slate-700">{item.text}</p>
                </article>
              ))}
            </div>
            <div className="mt-10 rounded-2xl border border-dashed border-sky-200 bg-sky-50/70 p-6 text-center text-slate-700">
              <p>Esses pensamentos não significam que correr não é pra você.</p>
              <p className="mt-2 font-semibold text-slate-900">
                Significa que falta um método para organizar tudo isso.
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 04 – Texto focal */}
        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
              Experiência PaceON
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-4xl font-semibold leading-tight md:text-5xl">
                Você não precisa de força de vontade infinita.
              </p>
              <p className="text-4xl font-semibold leading-tight text-sky-200 md:text-5xl">
                Precisa de treinos que entendem você.
              </p>
            </div>
            <p className="mt-8 text-lg text-slate-200">
              O resto, a nossa tecnologia faz.
            </p>
            <button
              type="button"
              className="mx-auto mt-12 flex w-full max-w-md items-center justify-center rounded-full bg-sky-400 px-8 py-4 text-base font-semibold text-slate-900 shadow-2xl shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
              onClick={() => handleAnchorClick('plans')}
            >
              Começar teste gratuito
            </button>
          </div>
        </section>

        {/* Como funciona */}
        <section id="steps" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="md:flex md:items-end md:justify-between">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  Como funciona
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                  Como funciona o Sistema Inteligente de Treinos Adaptativos™
                </h2>
                <p className="text-base text-slate-600 md:text-lg">
                  Em cinco passos o PaceON entende quem você é, cria treinos sob medida e ajusta tudo em tempo real.
                </p>
              </div>
            </div>
            <div className="mt-16 overflow-x-auto">
              <div className="relative mx-auto flex min-w-[960px] items-stretch gap-6 md:gap-4">
                <div className="pointer-events-none absolute left-6 right-6 top-12 hidden h-px bg-sky-200 md:block" />
                {steps.map((step, index) => {
                  const isLast = index === steps.length - 1;
                  return (
                    <div key={step.title} className="flex items-stretch gap-6">
                      <article
                        className={`relative flex aspect-square w-64 min-w-[16rem] max-w-[16rem] flex-col rounded-3xl border bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-60 sm:min-w-[15rem] md:w-56 md:min-w-[14rem] ${
                          isLast
                            ? 'border-amber-200/70 bg-gradient-to-br from-white to-amber-50 shadow-lg shadow-amber-100'
                            : 'border-slate-100'
                        }`}
                      >
                        <div
                          className={`mb-6 inline-flex h-12 w-12 items-center justify-center rounded-full text-lg font-semibold shadow-sm ${
                            isLast
                              ? 'bg-amber-400/20 text-amber-600 shadow-amber-200'
                              : 'bg-white text-slate-900 shadow-slate-200'
                          }`}
                        >
                          {index + 1}
                        </div>
                        <h3 className="text-lg font-semibold text-slate-900">
                          {step.title}
                        </h3>
                        <p className="mt-4 text-sm text-slate-600">{step.description}</p>
                        {isLast && (
                          <span className="absolute right-6 top-6 text-amber-400">
                            ✨
                          </span>
                        )}
                      </article>
                      {index !== steps.length - 1 && (
                        <div className="hidden flex-1 items-center justify-center md:flex">
                          <span className="h-px w-10 bg-sky-300" />
                          <span className="h-2 w-2 rounded-full bg-sky-300" />
                        </div>
                      )}
                    </div>
                  );
                })}
              </div>
              <div className="mt-6 text-center text-xs text-slate-400 md:hidden">
                Arraste para o lado para ver todas as etapas →
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="benefits" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Benefícios
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                A forma moderna de treinar corrida — sem complicar sua vida.
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Um sistema que ajusta, planeja e acompanha você em cada passo.
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {features.map((feature) => (
                <article
                  key={feature.title}
                  className="group rounded-3xl border border-slate-100 bg-white p-6 shadow-[0_25px_60px_-40px_rgba(15,23,42,0.35)] transition hover:-translate-y-1 hover:border-sky-200"
                >
                  <div className="mb-6 inline-flex h-12 w-12 items-center justify-center rounded-2xl bg-sky-100 text-sky-600 transition group-hover:bg-sky-200">
                    <span className="text-lg font-semibold">★</span>
                  </div>
                  <h3 className="text-xl font-semibold text-slate-900">
                    {feature.title}
                  </h3>
                  <p className="mt-3 text-sm text-slate-600">{feature.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Prova Social */}
        <section id="social-proof" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="flex flex-col gap-6 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Resultados reais
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Corredores de todos os níveis já confiam na plataforma.
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                Depoimentos que mostram como tecnologia + treino inteligente transformam a experiência de quem corre.
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/70"
                >
                  <p className="flex-1 text-base text-slate-700">
                    “{testimonial.content}”
                  </p>
                  <div className="mt-6 space-y-1 text-sm text-slate-500">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Ancoragem com Preço */}
        <section className="bg-gradient-to-b from-slate-900 via-slate-800 to-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-xs font-semibold uppercase tracking-[0.3em] text-sky-300">
              </p>
              <h2 className="text-3xl font-semibold text-white md:text-4xl">
                Treinar com uma assessoria de corrida pode custar R$ 150 a R$ 350 por mês.
              </h2>
              <p className="text-2xl font-semibold text-slate-200">
                Um treinador particular pode custar R$ 1.000 a R$ 3.000 por mês.
              </p>
            </div>
            <div className="mt-12 rounded-3xl border-2 border-sky-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 shadow-2xl shadow-sky-500/10 md:p-12">
              <p className="mb-8 text-center text-xl font-semibold leading-tight text-white md:text-2xl">
                Mas você não precisa pagar esse valor para ter:
              </p>
              <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20">
                    <span className="text-base font-semibold">✓</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-base font-semibold leading-relaxed text-white">
                      Personalização
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20">
                    <span className="text-base font-semibold">✓</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-base font-semibold leading-relaxed text-white">
                      Ajustes automáticos
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20">
                    <span className="text-base font-semibold">✓</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-base font-semibold leading-relaxed text-white">
                      Acompanhamento inteligente
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-4">
                  <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20">
                    <span className="text-base font-semibold">✓</span>
                  </div>
                  <div className="flex-1 pt-0.5">
                    <p className="text-base font-semibold leading-relaxed text-white">
                      Metodologia profissional
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="plans" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                Planos
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
              Escolha o plano que acompanha sua evolução na corrida.
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
              Todos incluem suporte, atualizações contínuas e acesso seguro.              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {plans.map((plan) => (
                <article
                  key={plan.name}
                  className={`flex h-full flex-col rounded-3xl border p-6 text-center shadow-[0_30px_80px_-50px_rgba(12,74,110,0.6)] transition hover:-translate-y-1 ${
                    plan.highlight
                      ? 'border-sky-300 bg-white shadow-sky-200'
                      : 'border-slate-200 bg-white'
                  }`}
                >
                  <p className="text-sm font-semibold uppercase tracking-widest text-sky-600">
                    {plan.name}
                  </p>
                  <h3 className="mt-4 text-2xl font-semibold text-slate-900">
                    {plan.price}
                  </h3>
                  <p className="mt-4 text-sm text-slate-600">{plan.description}</p>
                  <ul className="mt-8 flex-1 space-y-3 text-left text-sm text-slate-600">
                    {plan.features.map((feature) => (
                      <li key={feature} className="flex items-start gap-2">
                        <span className="mt-0.5 shrink-0 text-sky-600">✔️</span>
                        <span>{feature}</span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    className={`mt-10 w-full rounded-full px-6 py-3 text-sm font-semibold transition ${
                      plan.highlight
                        ? 'bg-sky-600 text-white hover:bg-sky-500'
                        : 'border border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-600'
                    }`}
                    onClick={() => handleAnchorClick('faq')}
                  >
                    {plan.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ */}
        <section id="faq" className="bg-white">
          <div className="mx-auto max-w-4xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                FAQ
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                Perguntas frequentes
              </h2>
              <p className="text-base text-slate-600">
              Tire suas dúvidas antes de começar seus treinos com a plataforma.              </p>
            </div>
            <div className="mt-12 space-y-6">
              {faqs.map((faq) => (
                <details
                  key={faq.question}
                  className="group rounded-2xl border border-slate-200 bg-slate-50 p-6 transition"
                >
                  <summary className="flex cursor-pointer items-center justify-between text-left text-lg font-semibold text-slate-900">
                    {faq.question}
                    <span className="text-sky-500 transition group-open:rotate-45">
                      +
                    </span>
                  </summary>
                  <p className="mt-4 text-sm text-slate-600">{faq.answer}</p>
                </details>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-white/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-6 px-6 py-10 text-center md:flex-row md:items-center md:justify-between md:text-left">
          <div>
            <p className="text-lg font-semibold text-slate-900">PaceON</p>
            <p className="text-sm text-slate-600">
              Plataforma completa para times de assessoria focados em crescimento.
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="transition hover:text-slate-900"
              onClick={(event) => event.preventDefault()}
            >
              Termos de uso
            </a>
            <a
              href="#"
              className="transition hover:text-slate-900"
              onClick={(event) => event.preventDefault()}
            >
              Privacidade
            </a>
            <a
              href="#"
              className="transition hover:text-slate-900"
              onClick={(event) => event.preventDefault()}
            >
              Contato
            </a>
          </div>
          <p className="text-sm text-slate-500">
            © {new Date().getFullYear()} PaceON. Todos os direitos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

