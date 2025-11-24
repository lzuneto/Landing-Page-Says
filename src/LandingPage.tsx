import { useCallback, useState } from 'react';

// ============================================
// CONFIGURAÇÃO DE COPY - ESCOLHA A VARIANTE AQUI
// ============================================
const ACTIVE_VARIANT = 'variantA' as const;
type VariantKey = 'variantA' | 'variantB' | 'variantC';

// ============================================
// TIPOS
// ============================================
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

type PainStatement = {
  emoji: string;
  text: string;
};

type CopyData = {
  header: {
    logo: string;
    nav: {
      benefits: string;
      testimonials: string;
      howItWorks: string;
      plans: string;
      faq: string;
    };
    cta: string;
  };
  hero: {
    badge: string;
    title: string;
    subtitle: string;
    subtitleItalic: string;
    ctaPrimary: string;
    ctaSecondary: string;
    stats: Stat[];
  };
  dashboard: {
    title: string;
    weekRange: string;
    levelLabel: string;
    weeklyProgressLabel: string;
    kmThisWeekLabel: string;
    todayWorkoutLabel: string;
    todayWorkoutType: string;
    todayWorkoutDetails: string;
    todayWorkoutCta: string;
    challengesLabel: string;
    upcomingDaysLabel: string;
  };
  painSection: {
    title: string;
    subtitle: string;
    statements: PainStatement[];
    conclusion: string;
    conclusionBold: string;
  };
  experienceSection: {
    badge: string;
    titleLine1: string;
    titleLine2: string;
    subtitle: string;
    cta: string;
  };
  howItWorks: {
    badge: string;
    title: string;
    subtitle: string;
    steps: Step[];
    swipeHint: string;
  };
  benefits: {
    badge: string;
    title: string;
    subtitle: string;
    features: Feature[];
  };
  socialProof: {
    badge: string;
    title: string;
    subtitle: string;
    testimonials: Testimonial[];
  };
  pricingAnchor: {
    title: string;
    subtitle: string;
    intro: string;
    benefits: string[];
  };
  plans: {
    badge: string;
    title: string;
    subtitle: string;
    plans: Plan[];
  };
  faq: {
    badge: string;
    title: string;
    subtitle: string;
    faqs: Faq[];
  };
  footer: {
    brand: string;
    description: string;
    links: {
      terms: string;
      privacy: string;
      contact: string;
    };
    copyright: string;
  };
};

// ============================================
// ESTRUTURA DE COPY COM 3 VARIANTES
// ============================================
const copyVariants: Record<VariantKey, CopyData> = {
  variantA: {
    header: {
      logo: 'Grit Run',
      nav: {
        benefits: 'Benefícios',
        testimonials: 'Depoimentos',
        howItWorks: 'Como funciona',
        plans: 'Planos',
        faq: 'FAQ',
      },
      cta: 'Começar grátis',
    },
    hero: {
      badge: 'PARA CORREDORES DA VIDA REAL',
      title: 'Correr bem é evoluir seu pace sem sofrer.',
      subtitle: 'Melhore seus tempos, corra sem dores e aproveite a vida. Com uma tecnologia que entende você, os treinos se adaptam a sua rotina.',
      subtitleItalic: 'Sem cartão. Sem pressão.',
      ctaPrimary: 'Começar teste gratuito',
      ctaSecondary: 'Ver como funciona',
      stats: [
        { label: 'Treinos realizados', value: '2.400+' },
        { label: 'Km registrados', value: '40.000+' },
        { label: 'Satisfação média', value: '4.9/5' },
      ],
    },
    dashboard: {
      title: 'Seu plano da semana',
      weekRange: 'Semana 17-23 Nov',
      levelLabel: 'Seu nível',
      weeklyProgressLabel: 'Progresso semanal',
      kmThisWeekLabel: 'Km esta semana',
      todayWorkoutLabel: 'Treino de hoje',
      todayWorkoutType: 'Corrida contínua',
      todayWorkoutDetails: '4 km • Intensidade leve',
      todayWorkoutCta: 'Começar',
      challengesLabel: 'Desafios da semana',
      upcomingDaysLabel: 'Próximos dias',
    },
    painSection: {
      title: 'Você corre sempre… e continua no mesmo pace.',
      subtitle: 'Você já se pegou tendo esses pensamentos?',
      statements: [
        { emoji: '🌧️', text: '"Será que estou correndo certo?"' },
        { emoji: '🌀', text: '"Por que todo mundo evolui e eu continuo no mesmo pace?"' },
        { emoji: '🩹', text: '"E se eu estiver me machucando sem perceber?"' },
        { emoji: '🏁', text: '"Eu queria correr 10 km, mas sempre paro antes…"' },
        { emoji: '⏳', text: '"Quero treinar, mas minha rotina não ajuda."' },
        { emoji: '🧭', text: '"Eu não sei por onde começar."' },
      ],
      conclusion: 'Esses pensamentos não significam que correr não é pra você.',
      conclusionBold: 'Significa que falta um método para organizar tudo isso.',
    },
    experienceSection: {
      badge: 'Experiência Grit Run',
      titleLine1: 'Você já tentou força de vontade.',
      titleLine2: 'Agora corra bem e viva leve.',
      subtitle: 'Seu treino recalcula. Seu pace melhora. Sua vida continua.',
      cta: 'Começar teste gratuito',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o Sistema Inteligente de Treinos Adaptativos™',
      subtitle: 'Em cinco passos o Grit Run entende quem você é, cria treinos sob medida e ajusta tudo em tempo real.',
      steps: [
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
          description: 'Correu mais forte? Ajusta. Sentiu cansaço? Reduz carga. Faltou treino? Remonta o cronograma.',
        },
        {
          title: 'Você vê sua evolução diariamente',
          description: 'Gráficos, progressão, pace, distância, constância.',
        },
        {
          title: 'Resultado',
          description: 'Um corredor mais confiante, consistente e preparado — em menos tempo e sem frustração.',
        },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'Benefícios',
      title: 'A forma moderna de treinar corrida — sem abrir mão da sua vida.',
      subtitle: 'Você corre. A vida acontece. O treino recalcula.',
      features: [
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
      ],
    },
    socialProof: {
      badge: 'Resultados reais',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Depoimentos que mostram como tecnologia + treino inteligente transformam a experiência de quem corre.',
      testimonials: [
        {
          content: 'A tecnologia se tornou minha maior aliada na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
          author: 'Inácio Nogueira',
          role: 'Maratonista',
        },
        {
          content: 'A plataforma é essencial para qualquer pessoa correr melhor. Ela orienta, ajusta e guia — desde iniciantes até quem já corre distâncias maiores. Facilita muito a evolução com segurança.',
          author: 'Rafael Soccol',
          role: 'Corredor de Meia Maratona – Florianópolis',
        },
        {
          content: 'Comecei a correr há pouco tempo e já vi meu ritmo melhorar rapidamente. A plataforma se adapta ao meu preparo e me dá confiança para continuar. Nunca imaginei evoluir tão rápido.',
          author: 'Elizeu Neto',
          role: 'Corredor Iniciante',
        },
      ],
    },
    pricingAnchor: {
      title: 'Treinar com uma assessoria de corrida pode custar R$ 150 a R$ 350 por mês.',
      subtitle: 'Um treinador particular pode custar R$ 1.000 a R$ 3.000 por mês.',
      intro: 'Mas você não precisa pagar esse valor para ter:',
      benefits: [
        'Personalização',
        'Ajustes automáticos',
        'Acompanhamento inteligente',
        'Metodologia profissional',
      ],
    },
    plans: {
      badge: 'Planos',
      title: 'Escolha o plano que acompanha sua evolução na corrida.',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
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
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas antes de começar seus treinos com a plataforma.',
      faqs: [
        {
          question: 'Preciso ter experiência para usar a plataforma?',
          answer: 'Não. A plataforma foi criada para iniciantes, intermediários e avançados. Os treinos se adaptam automaticamente ao seu nível atual.',
        },
        {
          question: 'Como os treinos são personalizados?',
          answer: 'O sistema analisa seu ritmo, disponibilidade, histórico e objetivo. A partir disso, monta e ajusta seu plano automaticamente conforme sua evolução.',
        },
        {
          question: 'E se eu não conseguir seguir o treino do dia?',
          answer: 'Sem problema. O sistema recalcula sua semana e adapta o plano ao seu ritmo real, evitando frustração e sobrecarga.',
        },
        {
          question: 'Preciso de relógio Garmin ou outro smartwatch?',
          answer: 'Não. Você pode começar usando apenas o celular.',
        },
      ],
    },
    footer: {
      brand: 'Grit Run',
      description: 'Plataforma completa para times de assessoria focados em crescimento.',
      links: {
        terms: 'Termos de uso',
        privacy: 'Privacidade',
        contact: 'Contato',
      },
      copyright: `© ${new Date().getFullYear()} Grit Run. Todos os direitos reservados.`,
    },
  },
  
  variantB: {
    header: {
      logo: 'Grit Run',
      nav: {
        benefits: 'Benefícios',
        testimonials: 'Depoimentos',
        howItWorks: 'Como funciona',
        plans: 'Planos',
        faq: 'FAQ',
      },
      cta: 'Começar grátis',
    },
    hero: {
      badge: 'PARA CORREDORES DA VIDA REAL',
      title: 'Correr bem é ver progresso real em cada treino.',
      subtitle: 'Melhore seus tempos, corra sem dores e aproveite a vida. Planeje desafios com planos validados para cada distância. (5K, 10K, 21K, 42K)',
      subtitleItalic: 'Sem cartão. Sem pressão.',
      ctaPrimary: 'Começar teste gratuito',
      ctaSecondary: 'Ver como funciona',
      stats: [
        { label: 'Treinos realizados', value: '2.400+' },
        { label: 'Km registrados', value: '40.000+' },
        { label: 'Satisfação média', value: '4.9/5' },
      ],
    },
    dashboard: {
      title: 'Seu plano da semana',
      weekRange: 'Semana 17-23 Nov',
      levelLabel: 'Seu nível',
      weeklyProgressLabel: 'Progresso semanal',
      kmThisWeekLabel: 'Km esta semana',
      todayWorkoutLabel: 'Treino de hoje',
      todayWorkoutType: 'Corrida contínua',
      todayWorkoutDetails: '4 km • Intensidade leve',
      todayWorkoutCta: 'Começar',
      challengesLabel: 'Desafios da semana',
      upcomingDaysLabel: 'Próximos dias',
    },
    painSection: {
      title: 'Você corre sempre… e continua no mesmo pace.',
      subtitle: 'Você já se pegou tendo esses pensamentos?',
      statements: [
        { emoji: '🌧️', text: '"Será que estou correndo certo?"' },
        { emoji: '🌀', text: '"Por que todo mundo evolui e eu continuo no mesmo pace?"' },
        { emoji: '🩹', text: '"E se eu estiver me machucando sem perceber?"' },
        { emoji: '🏁', text: '"Eu queria correr 10 km, mas sempre paro antes…"' },
        { emoji: '⏳', text: '"Quero treinar, mas minha rotina não ajuda."' },
        { emoji: '🧭', text: '"Eu não sei por onde começar."' },
      ],
      conclusion: 'Esses pensamentos não significam que correr não é pra você.',
      conclusionBold: 'Significa que falta um método para organizar tudo isso.',
    },
    experienceSection: {
      badge: 'Experiência Grit Run',
      titleLine1: 'Você já tentou força de vontade.',
      titleLine2: 'Agora corra bem e viva leve.',
      subtitle: 'Seu treino recalcula. Seu pace melhora. Sua vida continua.',
      cta: 'Começar teste gratuito',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o Sistema Inteligente de Treinos Adaptativos™',
      subtitle: 'Em cinco passos o Grit Run entende quem você é, cria treinos sob medida e ajusta tudo em tempo real.',
      steps: [
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
          description: 'Correu mais forte? Ajusta. Sentiu cansaço? Reduz carga. Faltou treino? Remonta o cronograma.',
        },
        {
          title: 'Você vê sua evolução diariamente',
          description: 'Gráficos, progressão, pace, distância, constância.',
        },
        {
          title: 'Resultado',
          description: 'Um corredor mais confiante, consistente e preparado — em menos tempo e sem frustração.',
        },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'Benefícios',
      title: 'A forma moderna de treinar corrida — sem abrir mão da sua vida.',
      subtitle: 'Você corre. A vida acontece. O treino recalcula.',
      features: [
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
      ],
    },
    socialProof: {
      badge: 'Resultados reais',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Depoimentos que mostram como tecnologia + treino inteligente transformam a experiência de quem corre.',
      testimonials: [
        {
          content: 'A tecnologia se tornou minha maior aliada na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
          author: 'Inácio Nogueira',
          role: 'Maratonista',
        },
        {
          content: 'A plataforma é essencial para qualquer pessoa correr melhor. Ela orienta, ajusta e guia — desde iniciantes até quem já corre distâncias maiores. Facilita muito a evolução com segurança.',
          author: 'Rafael Soccol',
          role: 'Corredor de Meia Maratona – Florianópolis',
        },
        {
          content: 'Comecei a correr há pouco tempo e já vi meu ritmo melhorar rapidamente. A plataforma se adapta ao meu preparo e me dá confiança para continuar. Nunca imaginei evoluir tão rápido.',
          author: 'Elizeu Neto',
          role: 'Corredor Iniciante',
        },
      ],
    },
    pricingAnchor: {
      title: 'Treinar com uma assessoria de corrida pode custar R$ 150 a R$ 350 por mês.',
      subtitle: 'Um treinador particular pode custar R$ 1.000 a R$ 3.000 por mês.',
      intro: 'Mas você não precisa pagar esse valor para ter:',
      benefits: [
        'Personalização',
        'Ajustes automáticos',
        'Acompanhamento inteligente',
        'Metodologia profissional',
      ],
    },
    plans: {
      badge: 'Planos',
      title: 'Escolha o plano que acompanha sua evolução na corrida.',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
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
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas antes de começar seus treinos com a plataforma.',
      faqs: [
        {
          question: 'Preciso ter experiência para usar a plataforma?',
          answer: 'Não. A plataforma foi criada para iniciantes, intermediários e avançados. Os treinos se adaptam automaticamente ao seu nível atual.',
        },
        {
          question: 'Como os treinos são personalizados?',
          answer: 'O sistema analisa seu ritmo, disponibilidade, histórico e objetivo. A partir disso, monta e ajusta seu plano automaticamente conforme sua evolução.',
        },
        {
          question: 'E se eu não conseguir seguir o treino do dia?',
          answer: 'Sem problema. O sistema recalcula sua semana e adapta o plano ao seu ritmo real, evitando frustração e sobrecarga.',
        },
        {
          question: 'Preciso de relógio Garmin ou outro smartwatch?',
          answer: 'Não. Você pode começar usando apenas o celular.',
        },
      ],
    },
    footer: {
      brand: 'Grit Run',
      description: 'Plataforma completa para times de assessoria focados em crescimento.',
      links: {
        terms: 'Termos de uso',
        privacy: 'Privacidade',
        contact: 'Contato',
      },
      copyright: `© ${new Date().getFullYear()} Grit Run. Todos os direitos reservados.`,
    },
  },
  
  variantC: {
    header: {
      logo: 'Grit Run',
      nav: {
        benefits: 'Benefícios',
        testimonials: 'Depoimentos',
        howItWorks: 'Como x',
        plans: 'Planos',
        faq: 'FAQ',
      },
      cta: 'Começar grátis',
    },
    hero: {
      badge: 'PARA CORREDORES DA VIDA REAL',
      title: 'Correr bem é a terapia mais barata que existe.',
      subtitle: 'Melhore seus tempos, corra sem dores e aproveite a vida. Com uma tecnologia que entende você, os treinos se adaptam a sua rotina.',
      subtitleItalic: 'Sem cartão. Sem pressão.',
      ctaPrimary: 'Começar teste gratuito',
      ctaSecondary: 'Ver como funciona',
      stats: [
        { label: 'Treinos realizados', value: '2.400+' },
        { label: 'Km registrados', value: '40.000+' },
        { label: 'Satisfação média', value: '4.9/5' },
      ],
    },
    dashboard: {
      title: 'Seu plano da semana',
      weekRange: 'Semana 17-23 Nov',
      levelLabel: 'Seu nível',
      weeklyProgressLabel: 'Progresso semanal',
      kmThisWeekLabel: 'Km esta semana',
      todayWorkoutLabel: 'Treino de hoje',
      todayWorkoutType: 'Corrida contínua',
      todayWorkoutDetails: '4 km • Intensidade leve',
      todayWorkoutCta: 'Começar',
      challengesLabel: 'Desafios da semana',
      upcomingDaysLabel: 'Próximos dias',
    },
    painSection: {
      title: 'Você corre sempre… e continua no mesmo pace.',
      subtitle: 'Você já se pegou tendo esses pensamentos?',
      statements: [
        { emoji: '🌧️', text: '"Será que estou correndo certo?"' },
        { emoji: '🌀', text: '"Por que todo mundo evolui e eu continuo no mesmo pace?"' },
        { emoji: '🩹', text: '"E se eu estiver me machucando sem perceber?"' },
        { emoji: '🏁', text: '"Eu queria correr 10 km, mas sempre paro antes…"' },
        { emoji: '⏳', text: '"Quero treinar, mas minha rotina não ajuda."' },
        { emoji: '🧭', text: '"Eu não sei por onde começar."' },
      ],
      conclusion: 'Esses pensamentos não significam que correr não é pra você.',
      conclusionBold: 'Significa que falta um método para organizar tudo isso.',
    },
    experienceSection: {
      badge: 'Experiência Grit Run',
      titleLine1: 'Você já tentou força de vontade.',
      titleLine2: 'Agora corra bem e viva leve.',
      subtitle: 'Seu treino recalcula. Seu pace melhora. Sua vida continua.',
      cta: 'Começar teste gratuito',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o Sistema Inteligente de Treinos Adaptativos™',
      subtitle: 'Em cinco passos o Grit Run entende quem você é, cria treinos sob medida e ajusta tudo em tempo real.',
      steps: [
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
          description: 'Correu mais forte? Ajusta. Sentiu cansaço? Reduz carga. Faltou treino? Remonta o cronograma.',
        },
        {
          title: 'Você vê sua evolução diariamente',
          description: 'Gráficos, progressão, pace, distância, constância.',
        },
        {
          title: 'Resultado',
          description: 'Um corredor mais confiante, consistente e preparado — em menos tempo e sem frustração.',
        },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'Benefícios',
      title: 'A forma moderna de treinar corrida — sem abrir mão da sua vida.',
      subtitle: 'Você corre. A vida acontece. O treino recalcula.',
      features: [
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
      ],
    },
    socialProof: {
      badge: 'Resultados reais',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Depoimentos que mostram como tecnologia + treino inteligente transformam a experiência de quem corre.',
      testimonials: [
        {
          content: 'A tecnologia se tornou minha maior aliada na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
          author: 'Inácio Nogueira',
          role: 'Maratonista',
        },
        {
          content: 'A plataforma é essencial para qualquer pessoa correr melhor. Ela orienta, ajusta e guia — desde iniciantes até quem já corre distâncias maiores. Facilita muito a evolução com segurança.',
          author: 'Rafael Soccol',
          role: 'Corredor de Meia Maratona – Florianópolis',
        },
        {
          content: 'Comecei a correr há pouco tempo e já vi meu ritmo melhorar rapidamente. A plataforma se adapta ao meu preparo e me dá confiança para continuar. Nunca imaginei evoluir tão rápido.',
          author: 'Elizeu Neto',
          role: 'Corredor Iniciante',
        },
      ],
    },
    pricingAnchor: {
      title: 'Treinar com uma assessoria de corrida pode custar R$ 150 a R$ 350 por mês.',
      subtitle: 'Um treinador particular pode custar R$ 1.000 a R$ 3.000 por mês.',
      intro: 'Mas você não precisa pagar esse valor para ter:',
      benefits: [
        'Personalização',
        'Ajustes automáticos',
        'Acompanhamento inteligente',
        'Metodologia profissional',
      ],
    },
    plans: {
      badge: 'Planos',
      title: 'Escolha o plano que acompanha sua evolução na corrida.',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
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
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas antes de começar seus treinos com a plataforma.',
      faqs: [
        {
          question: 'Preciso ter experiência para usar a plataforma?',
          answer: 'Não. A plataforma foi criada para iniciantes, intermediários e avançados. Os treinos se adaptam automaticamente ao seu nível atual.',
        },
        {
          question: 'Como os treinos são personalizados?',
          answer: 'O sistema analisa seu ritmo, disponibilidade, histórico e objetivo. A partir disso, monta e ajusta seu plano automaticamente conforme sua evolução.',
        },
        {
          question: 'E se eu não conseguir seguir o treino do dia?',
          answer: 'Sem problema. O sistema recalcula sua semana e adapta o plano ao seu ritmo real, evitando frustração e sobrecarga.',
        },
        {
          question: 'Preciso de relógio Garmin ou outro smartwatch?',
          answer: 'Não. Você pode começar usando apenas o celular.',
        },
      ],
    },
    footer: {
      brand: 'Grit Run',
      description: 'Plataforma completa para times de assessoria focados em crescimento.',
      links: {
        terms: 'Termos de uso',
        privacy: 'Privacidade',
        contact: 'Contato',
      },
      copyright: `© ${new Date().getFullYear()} Grit Run. Todos os direitos reservados.`,
    },
  },
};

// Seleciona a variante ativa
const copy = copyVariants[ACTIVE_VARIANT];

const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

const LandingPage = () => {
  const [veloImageError, setVeloImageError] = useState(false);
  
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
            {copy.header.logo}
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium text-slate-600 md:flex">
            {[
              { label: copy.header.nav.benefits, id: 'benefits' },
              { label: copy.header.nav.testimonials, id: 'social-proof' },
              { label: copy.header.nav.howItWorks, id: 'steps' },
              { label: copy.header.nav.plans, id: 'plans' },
              { label: copy.header.nav.faq, id: 'faq' },
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
            {copy.header.cta}
          </button>
        </div>
      </header>

      <main>
        {/* Hero */}
        <section
          id="hero"
          className="relative overflow-visible bg-gradient-to-b from-sky-50 via-white to-white"
        >
          {/* Mascote Velo no Hero - Desktop: entre as colunas */}
          <div 
            className="absolute top-[70%] hidden h-auto w-auto max-h-[260px] pointer-events-none transition-transform duration-300 hover:scale-105 lg:block"
            style={{ 
              left: 'calc(50% + 600px)',
              transform: 'translate(-50%, -50%)',
              zIndex: 10
            }}
          >
            {!veloImageError ? (
              <img
                src="/velo-intro-perfil.png"
                alt="Mascote Velo - Grit Run"
                className="h-full w-auto object-contain drop-shadow-lg"
                style={{ filter: 'drop-shadow(0 4px 6px rgba(0, 0, 0, 0.1))' }}
                onError={() => setVeloImageError(true)}
              />
            ) : (
              <div className="flex h-64 w-40 items-center justify-center rounded-lg bg-gradient-to-br from-blue-400/20 to-blue-600/20 border-2 border-dashed border-blue-300/50">
                <div className="text-center">
                  <div className="text-4xl mb-2">🦊</div>
                  <div className="text-xs font-semibold text-blue-600">Velo</div>
                </div>
              </div>
            )}
          </div>
          
          <div className="mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:grid-cols-2 lg:items-center lg:py-28">
            <div className="space-y-8">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-sky-700">
                {copy.hero.badge}
              </div>
              <div className="space-y-6">
                <h1 className="text-4xl font-semibold leading-tight text-slate-900 md:text-5xl">
                  {copy.hero.title}
                </h1>
                
                <p className="text-base text-slate-600 md:text-lg">
                  {copy.hero.subtitle}
                </p>
                <p className="text-base text-slate-600 md:text-lg">
                  <em>{copy.hero.subtitleItalic}</em>
                </p>
              </div>
              <div className="flex flex-col gap-4 sm:flex-row">
                <button
                  type="button"
                  className="flex-1 rounded-full bg-sky-600 px-6 py-3 text-center text-base font-semibold text-white shadow-xl shadow-sky-200 transition hover:-translate-y-0.5 hover:bg-sky-500"
                  onClick={() => handleAnchorClick('plans')}
                >
                  {copy.hero.ctaPrimary}
                </button>
                <button
                  type="button"
                  className="flex-1 rounded-full border border-slate-200 px-6 py-3 text-center text-base font-semibold text-slate-700 transition hover:-translate-y-0.5 hover:border-sky-300 hover:text-sky-600"
                  onClick={() => handleAnchorClick('steps')}
                >
                  {copy.hero.ctaSecondary}
                </button>
              </div>
              <div className="flex flex-wrap gap-8 text-sm text-slate-500">
                {copy.hero.stats.map((stat) => (
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
              <div className="relative rounded-3xl border border-slate-200 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 shadow-2xl shadow-sky-100 lg:p-8">
                {/* Dashboard Container - Layout Limpo e Focado */}
                <div className="space-y-6 text-white">
                  {/* Header Simplificado */}
                  <div className="space-y-1">
                    <h3 className="text-lg font-semibold text-white lg:text-xl">
                      {copy.dashboard.title}
                    </h3>
                    <p className="text-xs text-slate-400">{copy.dashboard.weekRange}</p>
                  </div>

                  {/* TOPO: Progresso e Nível - Foco Principal */}
                  <div className="space-y-4">
                    {/* Card de Progresso Principal */}
                    <div className="rounded-2xl bg-gradient-to-br from-sky-500/10 to-blue-500/10 p-5 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="space-y-1">
                          <p className="text-xs font-medium text-slate-300">{copy.dashboard.levelLabel}</p>
                          <div className="flex items-baseline gap-2">
                            <span className="text-2xl font-bold text-white">1</span>
                            <span className="text-sm text-slate-400">de 5</span>
                          </div>
                        </div>
                        <div className="relative">
                          <svg className="h-20 w-20 -rotate-90 transform lg:h-24 lg:w-24">
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="6"
                              className="text-slate-700/50"
                            />
                            <circle
                              cx="40"
                              cy="40"
                              r="36"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="6"
                              strokeDasharray={`${2 * Math.PI * 36}`}
                              strokeDashoffset={`${2 * Math.PI * 36 * 0.7}`}
                              className="text-sky-400"
                              strokeLinecap="round"
                            />
                          </svg>
                          <div className="absolute inset-0 flex items-center justify-center">
                            <span className="text-lg font-bold text-sky-400">30%</span>
                          </div>
                        </div>
                      </div>
                      <div className="mt-4 flex items-center gap-4 text-sm">
                        <div>
                          <p className="text-xs text-slate-400">{copy.dashboard.weeklyProgressLabel}</p>
                          <p className="font-semibold text-white">2 de 3 treinos</p>
                        </div>
                        <div className="h-8 w-px bg-slate-700" />
                        <div>
                          <p className="text-xs text-slate-400">{copy.dashboard.kmThisWeekLabel}</p>
                          <p className="font-semibold text-white">8 de 12 km</p>
                        </div>
                      </div>
                    </div>

                    {/* Card de Hoje - Destaque */}
                    <div className="rounded-2xl bg-gradient-to-r from-orange-500/20 to-amber-500/20 p-4 backdrop-blur-sm">
                      <div className="flex items-center justify-between">
                        <div className="flex-1">
                          <p className="mb-1 text-xs font-medium text-orange-300">{copy.dashboard.todayWorkoutLabel}</p>
                          <p className="text-base font-semibold text-white">{copy.dashboard.todayWorkoutType}</p>
                          <p className="mt-1 text-xs text-slate-300">{copy.dashboard.todayWorkoutDetails}</p>
                        </div>
                        <div className="ml-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-semibold text-white shadow-lg shadow-orange-500/30">
                          {copy.dashboard.todayWorkoutCta}
                        </div>
                      </div>
                    </div>
                  </div>

                  {/* MEIO: Desafios Simplificados */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {copy.dashboard.challengesLabel}
                    </p>
                    <div className="space-y-2">
                      {[
                        { title: '10K da semana', progress: 8, total: 10, unit: 'km' },
                        { title: '3 treinos', progress: 2, total: 3, unit: 'treinos' },
                      ].map((challenge, idx) => {
                        const percentage = (challenge.progress / challenge.total) * 100;
                        return (
                          <div
                            key={idx}
                            className="rounded-xl bg-slate-800/50 p-3 backdrop-blur-sm"
                          >
                            <div className="mb-2 flex items-center justify-between">
                              <span className="text-sm font-medium text-white">
                                {challenge.title}
                              </span>
                              <span className="text-xs font-semibold text-sky-400">
                                {challenge.progress}/{challenge.total} {challenge.unit}
                              </span>
                            </div>
                            <div className="h-2 overflow-hidden rounded-full bg-slate-700/50">
                              <div
                                className="h-full rounded-full bg-gradient-to-r from-sky-400 to-blue-500 transition-all"
                                style={{ width: `${percentage}%` }}
                              />
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>

                  {/* BAIXO: Calendário Semanal Simplificado */}
                  <div className="space-y-3">
                    <p className="text-xs font-semibold uppercase tracking-wider text-slate-400">
                      {copy.dashboard.upcomingDaysLabel}
                    </p>
                    <div className="grid grid-cols-7 gap-1.5">
                      {[
                        { day: 'S', date: '17', type: 'rest', isToday: false },
                        { day: 'T', date: '18', type: 'workout', km: '4km', intensity: 'leve', isToday: true },
                        { day: 'Q', date: '19', type: 'rest', isToday: false },
                        { day: 'Q', date: '20', type: 'workout', km: '4km', intensity: 'mod', isToday: false },
                        { day: 'S', date: '21', type: 'rest', isToday: false },
                        { day: 'S', date: '22', type: 'workout', km: '4km', intensity: 'leve', isToday: false },
                        { day: 'D', date: '23', type: 'rest', isToday: false },
                      ].map((item, idx) => (
                        <div
                          key={idx}
                          className={`rounded-lg p-2 text-center transition-all ${
                            item.isToday
                              ? 'bg-gradient-to-br from-orange-500/30 to-amber-500/30 ring-2 ring-orange-400/50'
                              : item.type === 'workout'
                                ? 'bg-slate-800/30'
                                : 'bg-slate-800/10'
                          }`}
                        >
                          <p
                            className={`mb-1 text-[10px] font-semibold ${
                              item.isToday ? 'text-orange-300' : 'text-slate-400'
                            }`}
                          >
                            {item.day}
                          </p>
                          <p
                            className={`mb-1 text-xs font-semibold ${
                              item.isToday ? 'text-white' : 'text-slate-300'
                            }`}
                          >
                            {item.date}
                          </p>
                          {item.type === 'workout' ? (
                            <div className="space-y-0.5">
                              <div
                                className={`mx-auto h-1.5 w-1.5 rounded-full ${
                                  item.intensity === 'leve'
                                    ? 'bg-green-400'
                                    : item.intensity === 'mod'
                                      ? 'bg-yellow-400'
                                      : 'bg-orange-400'
                                }`}
                              />
                              <p className="text-[9px] text-slate-400">{item.km}</p>
                            </div>
                          ) : (
                            <div className="h-1.5" />
                          )}
                        </div>
                      ))}
                    </div>
                  </div>
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
                {copy.painSection.title}
              </h2>
              <p className="text-base text-slate-600 md:text-lg">

              </p>
              <p className="mt-6 text-lg font-medium text-slate-700 md:text-xl">
                {copy.painSection.subtitle}
              </p>
            </div>
            <div className="mt-12 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {copy.painSection.statements.map((item) => (
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
              <p>{copy.painSection.conclusion}</p>
              <p className="mt-2 font-semibold text-slate-900">
                {copy.painSection.conclusionBold}
              </p>
            </div>
          </div>
        </section>

        {/* Bloco 04 – Texto focal */}
        <section className="bg-slate-900 text-white">
          <div className="mx-auto max-w-5xl px-6 py-20 text-center">
            <p className="text-xs font-semibold uppercase tracking-[0.4em] text-sky-300">
              {copy.experienceSection.badge}
            </p>
            <div className="mt-6 space-y-4">
              <p className="text-4xl font-semibold leading-tight md:text-5xl">
                {copy.experienceSection.titleLine1}
              </p>
              <p className="text-4xl font-semibold leading-tight text-sky-200 md:text-5xl">
                {copy.experienceSection.titleLine2}
              </p>
            </div>
            <p className="mt-8 text-lg text-slate-200">
              {copy.experienceSection.subtitle}
            </p>
            <button
              type="button"
              className="mx-auto mt-12 flex w-full max-w-md items-center justify-center rounded-full bg-sky-400 px-8 py-4 text-base font-semibold text-slate-900 shadow-2xl shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
              onClick={() => handleAnchorClick('plans')}
            >
              {copy.experienceSection.cta}
            </button>
          </div>
        </section>

        {/* Como funciona */}
        <section id="steps" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="md:flex md:items-end md:justify-between">
              <div className="space-y-4">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {copy.howItWorks.badge}
                </p>
                <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                  {copy.howItWorks.title}
                </h2>
                <p className="text-base text-slate-600 md:text-lg">
                  {copy.howItWorks.subtitle}
                </p>
              </div>
            </div>
            <div className="mt-16 overflow-x-auto">
              <div className="relative mx-auto flex min-w-[960px] items-stretch gap-6 md:gap-4">
                <div className="pointer-events-none absolute left-6 right-6 top-12 hidden h-px bg-sky-200 md:block" />
                {copy.howItWorks.steps.map((step, index) => {
                  const isLast = index === copy.howItWorks.steps.length - 1;
                  return (
                    <div key={step.title} className="relative flex items-stretch gap-6">
                      <article
                        className={`relative flex aspect-square w-64 min-w-[16rem] max-w-[16rem] flex-col rounded-3xl border bg-white/90 p-6 shadow-sm transition hover:-translate-y-1 hover:shadow-xl sm:w-60 sm:min-w-[15rem] md:w-56 md:min-w-[14rem] ${
                          isLast
                            ? 'border-amber-200/70 bg-gradient-to-br from-white to-amber-50 shadow-lg shadow-amber-100'
                            : 'border-slate-100'
                        }`}
                        style={{ zIndex: 1 }}
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
                      {index !== copy.howItWorks.steps.length - 1 && (
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
                {copy.howItWorks.swipeHint}
              </div>
            </div>
          </div>
        </section>

        {/* Benefícios */}
        <section id="benefits" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                {copy.benefits.badge}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                {copy.benefits.title}
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                {copy.benefits.subtitle}
              </p>
            </div>
            <div className="mt-16 grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {copy.benefits.features.map((feature) => (
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
                {copy.socialProof.badge}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                {copy.socialProof.title}
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                {copy.socialProof.subtitle}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.socialProof.testimonials.map((testimonial) => (
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
                {copy.pricingAnchor.title}
              </h2>
              <p className="text-2xl font-semibold text-slate-200">
                {copy.pricingAnchor.subtitle}
              </p>
            </div>
            <div className="mt-12 rounded-3xl border-2 border-sky-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 shadow-2xl shadow-sky-500/10 md:p-12">
              <p className="mb-8 text-center text-xl font-semibold leading-tight text-white md:text-2xl">
                {copy.pricingAnchor.intro}
              </p>
              <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                {copy.pricingAnchor.benefits.map((benefit, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-sky-400/20 text-sky-300 shadow-lg shadow-sky-500/20">
                      <span className="text-base font-semibold">✓</span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-base font-semibold leading-relaxed text-white">
                        {benefit}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Planos */}
        <section id="plans" className="bg-slate-50">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                {copy.plans.badge}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                {copy.plans.title}
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                {copy.plans.subtitle}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.plans.plans.map((plan) => (
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
                {copy.faq.badge}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                {copy.faq.title}
              </h2>
              <p className="text-base text-slate-600">
                {copy.faq.subtitle}
              </p>
            </div>
            <div className="mt-12 space-y-6">
              {copy.faq.faqs.map((faq) => (
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
            <p className="text-lg font-semibold text-slate-900">{copy.footer.brand}</p>
            <p className="text-sm text-slate-600">
              {copy.footer.description}
            </p>
          </div>
          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500">
            <a
              href="#"
              className="transition hover:text-slate-900"
              onClick={(event) => event.preventDefault()}
            >
              {copy.footer.links.terms}
            </a>
            <a
              href="#"
              className="transition hover:text-slate-900"
              onClick={(event) => event.preventDefault()}
            >
              {copy.footer.links.privacy}
            </a>
            <a
              href="#"
              className="transition hover:text-slate-900"
              onClick={(event) => event.preventDefault()}
            >
              {copy.footer.links.contact}
            </a>
          </div>
          <p className="text-sm text-slate-500">
            {copy.footer.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default LandingPage;

