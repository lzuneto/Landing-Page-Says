import { useCallback, useState } from 'react';

// ============================================
// CONFIGURAÇÃO DE COPY - ESCOLHA A VARIANTE AQUI
// ============================================
const ACTIVE_VARIANT = 'variantD' as const;
type VariantKey = 'variantA' | 'variantB' | 'variantC' | 'variantD';

// ============================================
// TIPOS

// A variante A é o para o público B2b a B para B2C e a c é para o grupo de whats para usuários iniciais 

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
  paymentLink: string;
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
    intro: string;
    problems: string[];
    conclusion: string;
    conclusionBold: string;
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
  resultsProof: {
    badge: string;
    title: string;
    intro: string;
    dataTitle: string;
    dataPoints: string[];
    conclusion: string;
  };
  testimonials: {
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
    copyright: string;
    allRightsReserved: string;
    companyName: string;
    cnpj: string;
    address: string;
    supportTitle: string;
    email: string;
    whatsapp: string;
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
      badge: 'plataforma para treinadores de corrida',
      title: 'Entre no Grupo VIP, Receba Oferta Exclusiva do Clube de Embaixadores GritRun e Finalmente Alcance a Escala Com Assessoria de Corrida',
      subtitle: 'Mais de 13 milhões de brasileiros correm, mas um treinador que usa planilhas não consegue escalar. Você não precisa trabalhar mais horas para ganhar mais como treinador de corrida. O Grit Run organiza sua operação e cria uma comunidade engajada para que sua assessoria cresça sem depender exclusivamente do seu tempo.',
      subtitleItalic: '',
      ctaPrimary: 'Quero acessar a plataforma',
      ctaSecondary: 'Ver como funciona',
      stats: [
  //      { label: 'Treinos realizados', value: '2.400+' },
    //    { label: 'Km registrados', value: '40.000+' },
    //    { label: 'Satisfação média', value: '4.9/5' },
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
      title: 'Você se esforça, mas NUNCA consegue Evoluir sua renda na mesma proporção?',
      subtitle: 'Já percebeu que:',
      statements: [
        { emoji: '⏰', text: 'Não tem tempo para dar atenção e engajar cada um dos alunos'},
        { emoji: '💰', text: 'Trabalha até 12 horas por dia e mal consegue R$5.000 por mês' },
        { emoji: '👨‍👩‍👧‍👦', text: 'Se sente frustrado vendo "influencers" sem capacidade faturando 10x mais' },
        { emoji: '😤', text: 'Não tem tempo para família ou vida pessoal' },
        { emoji: '📈', text: 'Compete com preços muito baixos' },
      ],
      conclusion: 'Se esses pensamentos já passaram pela sua cabeça...',
      conclusionBold: 'Então nosso aplicativo é para você.',
    },
    experienceSection: {
      badge: '',
      titleLine1: 'O problema nunca foi você…',
      titleLine2: 'Na faculdade  ninguém te ensinou como criar um modelo de carreira escalável e rentável.',
      subtitle: '',
      intro: 'Isso acontece porque:',
      problems: [
        'Você monta treinos manualmente para cada aluno e vira refém da própria agenda.',
        'Você tenta aumentar o número de alunos, mas a operação não se sustenta ao passar das poucas dezenas.',
        'Você usa planilhas, WhatsApp e ferramentas improvisadas que não foram feitas para escalar uma assessoria.',
        'Você trabalha cada vez mais achando que vai ganhar mais, mas só se desgasta e perde o controle da operação.',
      ],
      conclusion: 'O que faltava era um caminho claro para te levar até lá.',
      conclusionBold: 'E é exatamente isso que você vai ter agora…',
      cta: 'Começar',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o sistema Grit Run™',
      subtitle: 'Em cinco passos, o Grit Run organiza sua operação, centraliza o acompanhamento dos alunos e cria a base para uma assessoria escalável.',
      steps: [
        {
          title: 'Você estrutura sua assessoria',
          description: 'Define metodologia, tipos de treino, perfis de alunos e critérios de evolução.',
        },
        {
          title: 'O sistema organiza e acelera a criação dos treinos',
          description: 'Modelos reutilizáveis e estrutura clara para montar planos personalizados em menos tempo.',
        },
        {
          title: 'Menos mensagens soltas, mais clareza para decidir',
          description: 'Os feedbacks dos alunos ficam organizados em um único lugar, facilitando o acompanhamento e reduzindo retrabalho.',
        },
        {
          title: 'Você acompanha a evolução da assessoria como um todo',
          description: 'Execução dos treinos, constância dos alunos, engajamento e visão geral da operação em um único painel.',
        },
        {
          title: 'Resultado',
          description: 'Uma assessoria mais organizada, alunos mais engajados e um negócio que cresce sem depender exclusivamente do seu tempo.',
        },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'O que estamos construindo',
      title: 'A forma moderna de gerir sua assessoria de corrida.',
      subtitle: 'Você lidera a metodologia. O Grit Run organiza a operação e fortalece o engajamento dos alunos.',
      features: [
        {
          title: 'Comunidade que aumenta a retenção',
          description: 'Desafios, rankings e dinâmicas internas fortalecem o senso de pertencimento e fazem os alunos se engajarem entre si.',
        },
        {
          title: 'Estrutura clara para criação de treinos',
          description: 'Crie treinos com base na sua metodologia, objetivos dos alunos, níveis e disponibilidade, sem começar do zero toda vez.',
        },
        {
          title: 'Menos retrabalho no dia a dia',
          description: 'Centralize planos, feedbacks e histórico dos alunos em um único lugar, reduzindo mensagens soltas e decisões no improviso.',
        },
        {
          title: 'Organização que respeita sua rotina',
          description: 'Tenha controle do cronograma de treinos e entregas sem depender exclusivamente da sua presença constante.',
        },
        {
          title: 'Visão completa da assessoria',
          description: 'Acompanhe execução dos treinos, constância, engajamento dos alunos e evolução geral da operação em um único painel.',
        },
        {
          title: 'Negócio preparado para escalar',
          description: 'Transforme uma operação limitada a poucas dezenas de alunos em uma assessoria organizada, valorizada e pronta para crescer.',
        },
      ],
    },
    resultsProof: {
      badge: 'Resultados reais',
      title: 'Se outros treinadores Conseguiram, Você Também Pode!',
      intro: 'Dados reais mostram que assessorias que utilizam tecnologia conseguem escalar e aumentar a satisfação dos alunos.',
      dataTitle: 'Dados que provam isso:',
      dataPoints: [
        '70% dos personal trainers gastam mais de 5 horas por semana em tarefas administrativas.',
        'A retenção de alunos aumenta em mais de 30% ao utilizar desafios, rankings e comunidades como estratégias de engajamento.',
        'A satisfação dos aunos atinge 30% a mais nas assessorias esportivas que utilizam soluções digitais, como aplicativos.',
      ],
      conclusion: 'Você pode ser o próximo! Basta usar o aplicativo e comprovar que a tecnologia funciona para escalar sua assessoria.',
    },
    testimonials: {
      badge: 'Depoimentos',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Veja o que quem usa o Grit Run tem a dizer sobre a experiência.',
      testimonials: [
        {
          content: 'O aplicativo se tornou minha maior aliado na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
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
      title: 'Escolha seu plano!',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
        {
          name: 'MENSAL',
          description: 'Para treinadores que querem organizar a assessoria e ganhar escala.',
          price: 'R$ 89,90 / mês',
          cta: 'Assinar Mensal',
          highlight: true,
          paymentLink: 'https://www.asaas.com/c/zts26bonzs3uwjef',
          features: [
            'Gestão estruturada de treinos e alunos',
            'Criação e organização de planos com base na sua metodologia',
            'Centralização de feedbacks e histórico dos alunos',
            'Visão geral da assessoria em um único painel',
            'Base para engajamento e retenção dos alunos',
          ],
        },
        {
          name: 'ANUAL',
          description: '(cobrado uma vez por ano)',
          price: 'R$ 69,90 / mês',
          cta: 'Assinar Anual',
          paymentLink: 'https://www.asaas.com/c/mvlqe3ca71dbpwli',
          features: [
            'Todos os recursos do plano Mensal',
            'Acesso contínuo a novas funcionalidades',
            'Prioridade em recursos de engajamento (desafios, rankings e comunidade)',
            'Economia de R$ 240 por ano',
            'Pagamento único, sem reajustes durante o período',
          ],
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas antes de estruturar sua assessoria com o Grit Run.',
      faqs: [
        {
          question: 'Preciso ter muita experiência como treinador para usar o Grit Run?',
          answer: 'Não. O Grit Run foi criado para atender treinadores em diferentes estágios — desde quem está estruturando a primeira assessoria até quem já gerencia dezenas ou centenas de alunos. A plataforma se adapta à sua metodologia e ao seu momento de crescimento.',
        },
        {
          question: 'O Grit Run substitui minha metodologia de treino?',
          answer: 'Não. O Grit Run não impõe uma metodologia. Ele organiza, centraliza e dá escala à forma como você já trabalha, respeitando seu modelo de treino, critérios e tomada de decisão.',
        },
        {
          question: 'Como funciona o cancelamento?',
          answer: 'Você pode cancelar a qualquer momento. Não há fidelidade nem multa por cancelamento. O acesso permanece ativo até o final do período já pago.',
        },
        {
          question: 'O pagamento é seguro?',
          answer: 'Sim. Trabalhamos com plataformas de pagamento confiáveis e amplamente utilizadas no Brasil. Todos os dados são protegidos com criptografia, garantindo uma transação segura.',
        },
        {
          question: 'Como vou acessar a plataforma?',
          answer: 'O acesso é imediato. Assim que o pagamento for aprovado, você recebe um e-mail com as instruções para acessar o painel do treinador e começar a estruturar sua assessoria.',
        },
        {
          question: 'Existe período de teste ou garantia?',
          answer: 'Sim. Você tem 7 dias para testar o plano pago sem risco. Se dentro desse período entender que o Grit Run não faz sentido para sua operação, basta solicitar o reembolso e devolvemos 100% do valor, sem burocracia.',
        },
        {
          question: 'O Grit Run é indicado para assessorias maiores?',
          answer: 'Sim. A plataforma foi pensada justamente para resolver os gargalos de crescimento, organização e retenção que surgem quando a assessoria começa a escalar.',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Grit Softwares`,
      allRightsReserved: 'Todos os Direitos Reservados',
      companyName: 'Grit Soluções em Tecnologia LTDA',
      cnpj: 'CNPJ: 55.952.316/0001-75',
      address: 'Endereço: Rua Santa Luzia, 100, Sala 604, Trindade, Florianópolis/SC – Brasil',
      supportTitle: 'Ficou com alguma dúvida?',
      email: 'contato@gritsoftwares.com.br',
      whatsapp: '+55 48 98817-7698',
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
      cta: 'Começar',
    },
    hero: {
      badge: 'EVOLUA SUA CORRIDA',
      title: 'Do zero aos 5KM em 8 semanas.',
      subtitle: 'Receba o suporte que você precisa como corredor com planos de corrida personalizados para atingir seus objetivos — desde treinar para seu 5K mais rápido até completar sua primeira maratona.',
      subtitleItalic: 'A forma moderna de treinar corrida.',
      ctaPrimary: 'Quero acessar a plataforma',
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
      title: 'Você tenta, mas NUNCA consegue EVOLUIR na CORRIDA?',
      subtitle: 'Já se pegou pensando:',
      statements: [
        { emoji: '🌧️', text: '"Será que estou correndo certo?"' },
        { emoji: '🌀', text: '"Por que todo mundo evolui e eu continuo no mesmo pace?"' },
        { emoji: '🩹', text: '"E se eu estiver me machucando sem perceber?"' },
        { emoji: '🏁', text: '"Eu queria correr 5 km, mas sempre paro antes…"' },
        { emoji: '⏳', text: '"Quero treinar, mas minha rotina não ajuda."' },
        { emoji: '🧭', text: '"Eu não sei por onde começar."' },
      ],
      conclusion: 'Se esses pensamentos já passaram pela sua cabeça...',
      conclusionBold: 'Então nosso aplicativo é para você.',
    },
    experienceSection: {
      badge: 'Experimente o Grit Run',
      titleLine1: 'O problema nunca foi você…',
      titleLine2: 'Você só não tinha um plano que realmente funcionasse!',
      subtitle: 'Você já tentou correr e desistiu? Já saiu empolgado para treinar, mas parou no meio porque cansou ou sentiu dor?',
      intro: 'Isso acontece porque:',
      problems: [
        'Você sai para correr sem um plano e acaba quebrando no meio do treino.',
        'Você tenta aumentar a distância do nada e sente que nunca consegue aguentar.',
        'Você baixa planilhas aleatórias que não foram feitas para o seu nível atual.',
        'Você treina todos os dias achando que vai melhorar, mas só se desgasta e perde a motivação.',
      ],
      conclusion: 'O que faltava era um caminho claro e testado para te levar até lá.',
      conclusionBold: 'E é exatamente isso que você vai ter agora…',
      cta: 'Começar',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o aplicativo Grit Run™',
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
      title: 'A forma moderna de treinar corrida.',
      subtitle: 'Você corre. A evolução acontece. O treino recalcula.',
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
    resultsProof: {
      badge: 'Resultados reais',
      title: 'Se Outras Pessoas Conseguiram, Você Também Pode!',
      intro: 'Mesmo que você nunca tenha conseguido correr sem parar, a ciência mostra que qualquer pessoa pode evoluir com um plano estruturado.',
      dataTitle: 'Dados que provam isso:',
      dataPoints: [
        'Segundo a Strava, 80% dos corredores que seguem um plano conseguem bater um recorde pessoal.',
        'Um estudo da Universidade de Stanford mostrou que um plano progressivo reduz em 62% o risco de lesões e aumenta a performance em até 40%.',
        'Quem segue treinos estruturados melhora o pace em até 30% nos primeiros 3 meses.',
      ],
      conclusion: 'Você pode ser o próximo! Basta seguir o aplicativo e comprovar que o método funciona para qualquer nível.',
    },
    testimonials: {
      badge: 'Depoimentos',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Veja o que quem usa o Grit Run tem a dizer sobre a experiência.',
      testimonials: [
        {
          content: 'O aplicativo se tornou minha maior aliado na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
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
      title: 'Escolha seu plano!',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
        {
          name: 'MENSAL',
          description: 'Ideal para conhecer o aplicativo',
          price: 'R$ 49,90/mês',
          cta: 'Assinar Mensal',
          highlight: true,
          paymentLink: 'https://www.asaas.com/c/zts26bonzs3uwjef',
          features: [
            'Treinos adaptativos ilimitados',
            'Estratégias completas para 5K, 10K e 21K',
            'Painel avançado de métricas (pace, distância, constância)',
            'Ajustes automáticos conforme performance',
          ],
        },
        {
          name: 'Anual',
          description: '(cobrado uma vez por ano)',
          price: 'R$ 35,00 / mês',
          cta: 'Assinar Anual',
          paymentLink: 'https://www.asaas.com/c/mvlqe3ca71dbpwli',
          features: [
            'Todos os recursos do plano Mensal',
            'Acesso garantido a novos modos de treino',
            'Prioridade em novas funcionalidades',
            'Economia de R$ 178 por ano',
            'Pagamento único',
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
          question: 'Como funciona o cancelamento?',
          answer: 'Você pode cancelar a qualquer momento. Não há fidelidade ou multa por cancelamento. O acesso permanece ativo até o final do período pago.',
        },
        {
          question: 'O pagamento é seguro?',
          answer: 'Sim! Trabalhamos com as maiores e mais confiáveis plataformas de pagamento do Brasil. Seus dados estão protegidos com criptografia avançada, garantindo uma compra 100% segura.',
        },
        {
          question: 'Como vou receber o produto?',
          answer: 'O acesso é IMEDIATO! Assim que o pagamento for aprovado, você receberá um e-mail com todas as instruções para acessar o aplicativo.',
        },
        {
          question: 'E se eu não gostar? Tem garantia?',
          answer: 'Sim! Você tem 7 dias para testar sem riscos o plano pago. Se dentro desse período achar que o aplicativo não é para você, basta solicitar o reembolso e devolvemos 100% do seu dinheiro, sem burocracia.',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Grit Softwares`,
      allRightsReserved: 'Todos os Direitos Reservados',
      companyName: 'Grit Soluções em Tecnologia LTDA',
      cnpj: 'CNPJ: 55.952.316/0001-75',
      address: 'Endereço: Rua Santa Luzia, 100, Sala 604, Trindade, Florianópolis/SC – Brasil',
      supportTitle: 'Ficou com alguma dúvida?',
      email: 'contato@gritsoftwares.com.br',
      whatsapp: '+55 48 98817-7698',
    },
  },
  
  variantC: {
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
      badge: 'Sistema para treinadores de corrida',
      title: 'Torne-se o dono de uma assessoria com centenas de alunos ativos, sem precisar trabalhar mais horas.',
      subtitle: 'Mais de 13 milhões de brasileiros correm, mas um treinador que usa planilhas não consegue escalar. Você não precisa trabalhar mais horas para ganhar mais como treinador de corrida. O Grit Run organiza sua operação e cria uma comunidade engajada para que sua assessoria cresça sem depender exclusivamente do seu tempo.',
      subtitleItalic: '',
      ctaPrimary: 'Quero acessar a plataforma',
      ctaSecondary: 'Ver como funciona',
      stats: [
  //      { label: 'Treinos realizados', value: '2.400+' },
    //    { label: 'Km registrados', value: '40.000+' },
    //    { label: 'Satisfação média', value: '4.9/5' },
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
      title: 'Você se esforça, mas NUNCA consegue Evoluir sua renda na mesma proporção?',
      subtitle: 'Já percebeu que:',
      statements: [
        { emoji: '⏰', text: 'Não tem tempo para dar atenção e engajar cada um dos alunos'},
        { emoji: '💰', text: 'Trabalha até 12 horas por dia e mal consegue R$5.000 por mês' },
        { emoji: '👨‍👩‍👧‍👦', text: 'Se sente frustrado vendo "influencers" sem capacidade faturando 10x mais' },
        { emoji: '😤', text: 'Não tem tempo para família ou vida pessoal' },
        { emoji: '📈', text: 'Compete com preços muito baixos' },
      ],
      conclusion: 'Se esses pensamentos já passaram pela sua cabeça...',
      conclusionBold: 'Então nosso aplicativo é para você.',
    },
    experienceSection: {
      badge: '',
      titleLine1: 'O problema nunca foi você…',
      titleLine2: 'Na faculdade  ninguém te ensinou como criar um modelo de carreira escalável e rentável.',
      subtitle: '',
      intro: 'Isso acontece porque:',
      problems: [
        'Você monta treinos manualmente para cada aluno e vira refém da própria agenda.',
        'Você tenta aumentar o número de alunos, mas a operação não se sustenta ao passar das poucas dezenas.',
        'Você usa planilhas, WhatsApp e ferramentas improvisadas que não foram feitas para escalar uma assessoria.',
        'Você trabalha cada vez mais achando que vai ganhar mais, mas só se desgasta e perde o controle da operação.',
      ],
      conclusion: 'O que faltava era um caminho claro para te levar até lá.',
      conclusionBold: 'E é exatamente isso que você vai ter agora…',
      cta: 'Começar',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o sistema Grit Run™',
      subtitle: 'Em cinco passos, o Grit Run organiza sua operação, centraliza o acompanhamento dos alunos e cria a base para uma assessoria escalável.',
      steps: [
        {
          title: 'Você estrutura sua assessoria',
          description: 'Define metodologia, tipos de treino, perfis de alunos e critérios de evolução.',
        },
        {
          title: 'O sistema organiza e acelera a criação dos treinos',
          description: 'Modelos reutilizáveis e estrutura clara para montar planos personalizados em menos tempo.',
        },
        {
          title: 'Menos mensagens soltas, mais clareza para decidir',
          description: 'Os feedbacks dos alunos ficam organizados em um único lugar, facilitando o acompanhamento e reduzindo retrabalho.',
        },
        {
          title: 'Você acompanha a evolução da assessoria como um todo',
          description: 'Execução dos treinos, constância dos alunos, engajamento e visão geral da operação em um único painel.',
        },
        {
          title: 'Resultado',
          description: 'Uma assessoria mais organizada, alunos mais engajados e um negócio que cresce sem depender exclusivamente do seu tempo.',
        },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'O que estamos construindo',
      title: 'A forma moderna de gerir sua assessoria de corrida.',
      subtitle: 'Você lidera a metodologia. O Grit Run organiza a operação e fortalece o engajamento dos alunos.',
      features: [
        {
          title: 'Comunidade que aumenta a retenção',
          description: 'Desafios, rankings e dinâmicas internas fortalecem o senso de pertencimento e fazem os alunos se engajarem entre si.',
        },
        {
          title: 'Estrutura clara para criação de treinos',
          description: 'Crie treinos com base na sua metodologia, objetivos dos alunos, níveis e disponibilidade, sem começar do zero toda vez.',
        },
        {
          title: 'Menos retrabalho no dia a dia',
          description: 'Centralize planos, feedbacks e histórico dos alunos em um único lugar, reduzindo mensagens soltas e decisões no improviso.',
        },
        {
          title: 'Organização que respeita sua rotina',
          description: 'Tenha controle do cronograma de treinos e entregas sem depender exclusivamente da sua presença constante.',
        },
        {
          title: 'Visão completa da assessoria',
          description: 'Acompanhe execução dos treinos, constância, engajamento dos alunos e evolução geral da operação em um único painel.',
        },
        {
          title: 'Negócio preparado para escalar',
          description: 'Transforme uma operação limitada a poucas dezenas de alunos em uma assessoria organizada, valorizada e pronta para crescer.',
        },
      ],
    },
    resultsProof: {
      badge: 'Resultados reais',
      title: 'Se outros treinadores Conseguiram, Você Também Pode!',
      intro: 'Dados reais mostram que assessorias que utilizam tecnologia conseguem escalar e aumentar a satisfação dos alunos.',
      dataTitle: 'Dados que provam isso:',
      dataPoints: [
        '70% dos personal trainers gastam mais de 5 horas por semana em tarefas administrativas.',
        'A retenção de alunos aumenta em mais de 30% ao utilizar desafios, rankings e comunidades como estratégias de engajamento.',
        'A satisfação dos aunos atinge 30% a mais nas assessorias esportivas que utilizam soluções digitais, como aplicativos.',
      ],
      conclusion: 'Você pode ser o próximo! Basta usar o aplicativo e comprovar que a tecnologia funciona para escalar sua assessoria.',
    },
    testimonials: {
      badge: 'Depoimentos',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Veja o que quem usa o Grit Run tem a dizer sobre a experiência.',
      testimonials: [
        {
          content: 'O aplicativo se tornou minha maior aliado na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.',
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
      title: 'Escolha seu plano!',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
        {
          name: 'MENSAL',
          description: 'Para treinadores que querem organizar a assessoria e ganhar escala.',
          price: 'R$ 89,90 / mês',
          cta: 'Assinar Mensal',
          highlight: true,
          paymentLink: 'https://www.asaas.com/c/zts26bonzs3uwjef',
          features: [
            'Gestão estruturada de treinos e alunos',
            'Criação e organização de planos com base na sua metodologia',
            'Centralização de feedbacks e histórico dos alunos',
            'Visão geral da assessoria em um único painel',
            'Base para engajamento e retenção dos alunos',
          ],
        },
        {
          name: 'ANUAL',
          description: '(cobrado uma vez por ano)',
          price: 'R$ 69,90 / mês',
          cta: 'Assinar Anual',
          paymentLink: 'https://www.asaas.com/c/mvlqe3ca71dbpwli',
          features: [
            'Todos os recursos do plano Mensal',
            'Acesso contínuo a novas funcionalidades',
            'Prioridade em recursos de engajamento (desafios, rankings e comunidade)',
            'Economia de R$ 240 por ano',
            'Pagamento único, sem reajustes durante o período',
          ],
        },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas antes de estruturar sua assessoria com o Grit Run.',
      faqs: [
        {
          question: 'Preciso ter muita experiência como treinador para usar o Grit Run?',
          answer: 'Não. O Grit Run foi criado para atender treinadores em diferentes estágios — desde quem está estruturando a primeira assessoria até quem já gerencia dezenas ou centenas de alunos. A plataforma se adapta à sua metodologia e ao seu momento de crescimento.',
        },
        {
          question: 'O Grit Run substitui minha metodologia de treino?',
          answer: 'Não. O Grit Run não impõe uma metodologia. Ele organiza, centraliza e dá escala à forma como você já trabalha, respeitando seu modelo de treino, critérios e tomada de decisão.',
        },
        {
          question: 'Como funciona o cancelamento?',
          answer: 'Você pode cancelar a qualquer momento. Não há fidelidade nem multa por cancelamento. O acesso permanece ativo até o final do período já pago.',
        },
        {
          question: 'O pagamento é seguro?',
          answer: 'Sim. Trabalhamos com plataformas de pagamento confiáveis e amplamente utilizadas no Brasil. Todos os dados são protegidos com criptografia, garantindo uma transação segura.',
        },
        {
          question: 'Como vou acessar a plataforma?',
          answer: 'O acesso é imediato. Assim que o pagamento for aprovado, você recebe um e-mail com as instruções para acessar o painel do treinador e começar a estruturar sua assessoria.',
        },
        {
          question: 'Existe período de teste ou garantia?',
          answer: 'Sim. Você tem 7 dias para testar o plano pago sem risco. Se dentro desse período entender que o Grit Run não faz sentido para sua operação, basta solicitar o reembolso e devolvemos 100% do valor, sem burocracia.',
        },
        {
          question: 'O Grit Run é indicado para assessorias maiores?',
          answer: 'Sim. A plataforma foi pensada justamente para resolver os gargalos de crescimento, organização e retenção que surgem quando a assessoria começa a escalar.',
        },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Grit Softwares`,
      allRightsReserved: 'Todos os Direitos Reservados',
      companyName: 'Grit Soluções em Tecnologia LTDA',
      cnpj: 'CNPJ: 55.952.316/0001-75',
      address: 'Endereço: Rua Santa Luzia, 100, Sala 604, Trindade, Florianópolis/SC – Brasil',
      supportTitle: 'Ficou com alguma dúvida?',
      email: 'contato@gritsoftwares.com.br',
      whatsapp: '+55 48 98817-7698',
    },
  },
  // variantD: cópia da variantA para edição independente
  variantD: {
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
      badge: 'plataforma para treinadores de corrida',
      title: 'Sua assessoria de corrida patina e não escala?',
      subtitle: 'Estamos selecionando assessores para testar a nova plataforma criada exclusivamente para treinadores de corrida.',
      subtitleItalic: '',
      ctaPrimary: 'Quero acessar a plataforma',
      ctaSecondary: 'Ver como funciona',
      stats: [],
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
      title: 'Se hoje você:',
      subtitle: '',
      statements: [
        { emoji: '📱', text: 'Envia treinos pelo WhatsApp' },
        { emoji: '📋', text: 'Usa planilhas para organizar alunos' },
        { emoji: '📈', text: 'Quer crescer mas sente falta de estrutura' },
        { emoji: '👋', text: 'Perde alunos por falta de acompanhamento mais profissional' },
      ],
      conclusion: '',
      conclusionBold: 'Nosso aplicativo foi criado para você.',
    },
    experienceSection: {
      badge: '',
      titleLine1: 'O problema nunca foi você…',
      titleLine2: 'Na faculdade  ninguém te ensinou como criar um modelo de carreira escalável e rentável.',
      subtitle: '',
      intro: 'Isso acontece porque:',
      problems: [
        'Você monta treinos manualmente para cada aluno e vira refém da própria agenda.',
        'Você tenta aumentar o número de alunos, mas a operação não se sustenta ao passar das poucas dezenas.',
        'Você usa planilhas, WhatsApp e ferramentas improvisadas que não foram feitas para escalar uma assessoria.',
        'Você trabalha cada vez mais achando que vai ganhar mais, mas só se desgasta e perde o controle da operação.',
      ],
      conclusion: 'O que faltava era um caminho claro para te levar até lá.',
      conclusionBold: 'E é exatamente isso que você vai ter agora…',
      cta: 'Começar',
    },
    howItWorks: {
      badge: 'Como funciona',
      title: 'Como funciona o sistema Grit Run™',
      subtitle: 'Em cinco passos, o Grit Run organiza sua operação, centraliza o acompanhamento dos alunos e cria a base para uma assessoria escalável.',
      steps: [
        { title: 'Você estrutura sua assessoria', description: 'Define metodologia, tipos de treino, perfis de alunos e critérios de evolução.' },
        { title: 'O sistema organiza e acelera a criação dos treinos', description: 'Modelos reutilizáveis e estrutura clara para montar planos personalizados em menos tempo.' },
        { title: 'Menos mensagens soltas, mais clareza para decidir', description: 'Os feedbacks dos alunos ficam organizados em um único lugar, facilitando o acompanhamento e reduzindo retrabalho.' },
        { title: 'Você acompanha a evolução da assessoria como um todo', description: 'Execução dos treinos, constância dos alunos, engajamento e visão geral da operação em um único painel.' },
        { title: 'Resultado', description: 'Uma assessoria mais organizada, alunos mais engajados e um negócio que cresce sem depender exclusivamente do seu tempo.' },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'O que estamos construindo',
      title: 'A forma moderna de gerir sua assessoria de corrida.',
      subtitle: 'Você lidera a metodologia. O Grit Run organiza a operação e fortalece o engajamento dos alunos.',
      features: [
        { title: 'Comunidade que aumenta a retenção', description: 'Desafios, rankings e dinâmicas internas fortalecem o senso de pertencimento e fazem os alunos se engajarem entre si.' },
        { title: 'Estrutura clara para criação de treinos', description: 'Crie treinos com base na sua metodologia, objetivos dos alunos, níveis e disponibilidade, sem começar do zero toda vez.' },
        { title: 'Menos retrabalho no dia a dia', description: 'Centralize planos, feedbacks e histórico dos alunos em um único lugar, reduzindo mensagens soltas e decisões no improviso.' },
        { title: 'Organização que respeita sua rotina', description: 'Tenha controle do cronograma de treinos e entregas sem depender exclusivamente da sua presença constante.' },
        { title: 'Visão completa da assessoria', description: 'Acompanhe execução dos treinos, constância, engajamento dos alunos e evolução geral da operação em um único painel.' },
        { title: 'Negócio preparado para escalar', description: 'Transforme uma operação limitada a poucas dezenas de alunos em uma assessoria organizada, valorizada e pronta para crescer.' },
      ],
    },
    resultsProof: {
      badge: 'Resultados reais',
      title: 'Se outros treinadores Conseguiram, Você Também Pode!',
      intro: 'Dados reais mostram que assessorias que utilizam tecnologia conseguem escalar e aumentar a satisfação dos alunos.',
      dataTitle: 'Dados que provam isso:',
      dataPoints: [
        '70% dos personal trainers gastam mais de 5 horas por semana em tarefas administrativas.',
        'A retenção de alunos aumenta em mais de 30% ao utilizar desafios, rankings e comunidades como estratégias de engajamento.',
        'A satisfação dos aunos atinge 30% a mais nas assessorias esportivas que utilizam soluções digitais, como aplicativos.',
      ],
      conclusion: 'Você pode ser o próximo! Basta usar o aplicativo e comprovar que a tecnologia funciona para escalar sua assessoria.',
    },
    testimonials: {
      badge: 'Depoimentos',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Veja o que quem usa o Grit Run tem a dizer sobre a experiência.',
      testimonials: [
        { content: 'O aplicativo se tornou minha maior aliado na corrida. A plataforma traduz meu desempenho em treinos realmente inteligentes — e os resultados aparecem. Para quem corre longas distâncias como eu, é uma vantagem enorme.', author: 'Inácio Nogueira', role: 'Maratonista' },
        { content: 'A plataforma é essencial para qualquer pessoa correr melhor. Ela orienta, ajusta e guia — desde iniciantes até quem já corre distâncias maiores. Facilita muito a evolução com segurança.', author: 'Rafael Soccol', role: 'Corredor de Meia Maratona – Florianópolis' },
        { content: 'Comecei a correr há pouco tempo e já vi meu ritmo melhorar rapidamente. A plataforma se adapta ao meu preparo e me dá confiança para continuar. Nunca imaginei evoluir tão rápido.', author: 'Elizeu Neto', role: 'Corredor Iniciante' },
      ],
    },
    pricingAnchor: {
      title: 'Treinar com uma assessoria de corrida pode custar R$ 150 a R$ 350 por mês.',
      subtitle: 'Um treinador particular pode custar R$ 1.000 a R$ 3.000 por mês.',
      intro: 'Mas você não precisa pagar esse valor para ter:',
      benefits: ['Personalização', 'Ajustes automáticos', 'Acompanhamento inteligente', 'Metodologia profissional'],
    },
    plans: {
      badge: 'Planos',
      title: 'Escolha seu plano!',
      subtitle: 'Todos incluem suporte, atualizações contínuas e acesso seguro.',
      plans: [
        { name: 'MENSAL', description: 'Para treinadores que querem organizar a assessoria e ganhar escala.', price: 'R$ 89,90 / mês', cta: 'Assinar Mensal', highlight: true, paymentLink: 'https://www.asaas.com/c/zts26bonzs3uwjef', features: ['Gestão estruturada de treinos e alunos', 'Criação e organização de planos com base na sua metodologia', 'Centralização de feedbacks e histórico dos alunos', 'Visão geral da assessoria em um único painel', 'Base para engajamento e retenção dos alunos'] },
        { name: 'ANUAL', description: '(cobrado uma vez por ano)', price: 'R$ 69,90 / mês', cta: 'Assinar Anual', paymentLink: 'https://www.asaas.com/c/mvlqe3ca71dbpwli', features: ['Todos os recursos do plano Mensal', 'Acesso contínuo a novas funcionalidades', 'Prioridade em recursos de engajamento (desafios, rankings e comunidade)', 'Economia de R$ 240 por ano', 'Pagamento único, sem reajustes durante o período'] },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas antes de estruturar sua assessoria com o Grit Run.',
      faqs: [
        { question: 'Preciso ter muita experiência como treinador para usar o Grit Run?', answer: 'Não. O Grit Run foi criado para atender treinadores em diferentes estágios — desde quem está estruturando a primeira assessoria até quem já gerencia dezenas ou centenas de alunos. A plataforma se adapta à sua metodologia e ao seu momento de crescimento.' },
        { question: 'O Grit Run substitui minha metodologia de treino?', answer: 'Não. O Grit Run não impõe uma metodologia. Ele organiza, centraliza e dá escala à forma como você já trabalha, respeitando seu modelo de treino, critérios e tomada de decisão.' },
        { question: 'Como funciona o cancelamento?', answer: 'Você pode cancelar a qualquer momento. Não há fidelidade nem multa por cancelamento. O acesso permanece ativo até o final do período já pago.' },
        { question: 'O pagamento é seguro?', answer: 'Sim. Trabalhamos com plataformas de pagamento confiáveis e amplamente utilizadas no Brasil. Todos os dados são protegidos com criptografia, garantindo uma transação segura.' },
        { question: 'Como vou acessar a plataforma?', answer: 'O acesso é imediato. Assim que o pagamento for aprovado, você recebe um e-mail com as instruções para acessar o painel do treinador e começar a estruturar sua assessoria.' },
        { question: 'Existe período de teste ou garantia?', answer: 'Sim. Você tem 7 dias para testar o plano pago sem risco. Se dentro desse período entender que o Grit Run não faz sentido para sua operação, basta solicitar o reembolso e devolvemos 100% do valor, sem burocracia.' },
        { question: 'O Grit Run é indicado para assessorias maiores?', answer: 'Sim. A plataforma foi pensada justamente para resolver os gargalos de crescimento, organização e retenção que surgem quando a assessoria começa a escalar.' },
      ],
    },
    footer: {
      copyright: `Copyright © ${new Date().getFullYear()} Grit Softwares`,
      allRightsReserved: 'Todos os Direitos Reservados',
      companyName: 'Grit Soluções em Tecnologia LTDA',
      cnpj: 'CNPJ: 55.952.316/0001-75',
      address: 'Endereço: Rua Santa Luzia, 100, Sala 604, Trindade, Florianópolis/SC – Brasil',
      supportTitle: 'Ficou com alguma dúvida?',
      email: 'contato@gritsoftwares.com.br',
      whatsapp: '+55 48 98817-7698',
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

/** Rolagem suave de uma viewport (mobile: incentiva continuar vendo a página) */
const scrollNextViewport = () => {
  window.scrollTo({ top: window.scrollY + window.innerHeight * 0.9, behavior: 'smooth' });
};

/** Indicador de scroll – incentiva o usuário a rolar (foco mobile / lançamento) */
const ScrollHint = ({ className = '' }: { className?: string }) => (
  <button
    type="button"
    onClick={scrollNextViewport}
    className={`flex flex-col items-center gap-2 min-h-[44px] min-w-[44px] justify-center text-sky-600/90 hover:text-sky-700 focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2 rounded-full p-3 md:p-2 transition-opacity hover:opacity-100 active:scale-95 touch-manipulation ${className}`}
    aria-label="Ver mais conteúdo abaixo"
  >
    <span className="text-xs font-semibold uppercase tracking-wider md:text-sm">Role para ver mais</span>
    <span className="animate-bounce text-sky-500" aria-hidden>
      <svg className="w-7 h-7 md:w-5 md:h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
      </svg>
    </span>
  </button>
);

const LandingPage = () => {
  const [veloImageError, setVeloImageError] = useState(false);
  const [carouselIndex, setCarouselIndex] = useState(0);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);
  const [imageErrors, setImageErrors] = useState<Record<number, boolean>>({});
  
  const handleAnchorClick = useCallback((sectionId: string) => {
    scrollToSection(sectionId);
  }, []);

  // Dados do carrossel "Quem somos" - ordem para mobile e desktop (3 imagens)
  const quemSomosData = [
    {
      image: '/quem-somos/escritorio.jpg',
      title: 'Cubo Itaú',
      description: 'Estivemos ao longo da jornada presentes nos maiores centros de inovação do Brasil',
    },
    {
      image: '/quem-somos/rafa-meia-maratona.jpg',
      title: 'Meia maratona SC21K',
    },
    {
      image: '/quem-somos/florianopolis.jpg',
      title: 'Florianópolis como inspiração',
      description: 'Criar tecnologia em um lugar que respira esporte (florianópolis) e vida saudável muda completamente o jeito de construir.',
    },
  ];

  const nextSlide = () => {
    setCarouselIndex((prev) => (prev + 1) % quemSomosData.length);
  };

  const prevSlide = () => {
    setCarouselIndex((prev) => (prev - 1 + quemSomosData.length) % quemSomosData.length);
  };

  const goToSlide = (index: number) => {
    setCarouselIndex(index);
  };

  // Touch handlers para swipe no mobile
  const [touchStart, setTouchStart] = useState(0);
  const [touchEnd, setTouchEnd] = useState(0);

  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(0);
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    setTouchEnd(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return;
    const distance = touchStart - touchEnd;
    const isLeftSwipe = distance > 50;
    const isRightSwipe = distance < -50;
    if (isLeftSwipe) nextSlide();
    if (isRightSwipe) prevSlide();
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Header - oculto na variantA */}
      {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantD' && (
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
            {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') ? (
              <>
                {[
                  { label: copy.header.nav.benefits, id: 'benefits' },
                  { label: 'Quem somos', id: 'quem-somos' },
                  { label: 'Faça parte', id: 'construcao' },
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
              </>
            ) : (
              <>
                {[
                  { label: copy.header.nav.benefits, id: 'benefits' },
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
              </>
            )}
          </nav>
          {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') ? (
            <a
              href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-green-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-green-200 transition hover:-translate-y-px hover:bg-green-500"
            >
              <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
              </svg>
              Entrar no grupo
            </a>
          ) : (
            <button
              type="button"
              className="rounded-full bg-sky-600 px-4 py-2 text-sm font-semibold text-white shadow-lg shadow-sky-200 transition hover:-translate-y-px hover:bg-sky-500"
              onClick={() => handleAnchorClick('plans')}
            >
              {copy.header.cta}
            </button>
          )}
        </div>
      </header>
      )}

      <main>
        {/* Hero */}
        <section
          id="hero"
          className={`relative overflow-hidden ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'bg-gradient-to-br from-sky-50 via-white to-sky-50' : (ACTIVE_VARIANT === 'variantC') ? 'bg-gradient-to-br from-sky-50 via-white to-green-50' : 'bg-gradient-to-b from-sky-50 via-white to-white'}`}
        >
          {/* Elementos decorativos visuais - variantA: apenas azul; variantC: sky + green */}
          {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') && (
            <>
              {/* Círculos decorativos grandes */}
              {(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? (
                <>
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-sky-300/20 rounded-full blur-3xl" />
                  <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gradient-to-br from-sky-300/25 to-sky-200/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-sky-400/15 rounded-full blur-2xl" />
                </>
              ) : (
                <>
                  <div className="absolute -top-32 -right-32 w-96 h-96 bg-gradient-to-br from-sky-200/30 to-green-200/20 rounded-full blur-3xl" />
                  <div className="absolute top-1/2 -left-24 w-72 h-72 bg-gradient-to-br from-green-200/30 to-sky-200/20 rounded-full blur-3xl" />
                  <div className="absolute bottom-0 right-1/4 w-64 h-64 bg-gradient-to-br from-sky-300/20 to-green-300/20 rounded-full blur-2xl" />
                </>
              )}
              {/* Linhas decorativas */}
              <div className="absolute top-20 left-1/4 w-px h-32 bg-gradient-to-b from-transparent via-sky-300/40 to-transparent" />
              <div className={`absolute bottom-32 right-1/3 w-px h-40 bg-gradient-to-b from-transparent ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'via-sky-300/40' : 'via-green-300/40'} to-transparent`} />
              {/* Formas geométricas pequenas */}
              <div className="absolute top-40 right-20 w-3 h-3 bg-sky-400/40 rounded-full animate-pulse" />
              <div className={`absolute top-60 right-40 w-2 h-2 ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'bg-sky-400/50' : 'bg-green-400/50'} rounded-full animate-pulse delay-300`} />
              <div className="absolute bottom-40 left-32 w-2.5 h-2.5 bg-sky-500/40 rounded-full animate-pulse delay-700" />
              {/* Padrão de grid sutil */}
              <div className="absolute inset-0 opacity-[0.02]" style={{
                backgroundImage: `linear-gradient(to right, #0ea5e9 1px, transparent 1px),
                                  linear-gradient(to bottom, #0ea5e9 1px, transparent 1px)`,
                backgroundSize: '40px 40px'
              }} />
            </>
          )}
          {/* Mascote Velo no Hero - Desktop: entre as colunas */}
          <div 
            className="hidden"
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
          
          <div className={`mx-auto grid max-w-6xl gap-16 px-6 py-20 lg:items-center lg:py-28 relative z-10 ${ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' ? 'lg:grid-cols-2' : ''}`}>
            <div className={(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'flex flex-col items-center justify-center text-center w-full max-w-4xl mx-auto space-y-10 md:space-y-12' : 'space-y-8'}>
              <div className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'rounded-xl bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 border border-sky-200/50 shadow-sm' : (ACTIVE_VARIANT === 'variantC') ? 'rounded-full bg-gradient-to-r from-sky-100 to-green-100 text-sky-700 border border-sky-200/50 shadow-sm' : 'rounded-full bg-sky-100 text-sky-700'} ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'justify-center' : ''}`}>
                {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') && (
                  <span className="text-base">🚀</span>
                )}
                {copy.hero.badge}
              </div>
              <div className={`space-y-6 ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'w-full' : ''}`}>
                <h1 className={`leading-tight ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'text-4xl font-normal md:text-5xl lg:text-6xl text-slate-700 drop-shadow-sm md:leading-[1.12] tracking-tight' : (ACTIVE_VARIANT === 'variantC') ? 'text-4xl font-semibold md:text-5xl bg-gradient-to-r from-slate-900 via-sky-800 to-slate-900 bg-clip-text text-transparent' : 'text-4xl font-semibold md:text-5xl text-slate-900'}`}>
                  {ACTIVE_VARIANT === 'variantD' ? (
                    <>
                      Sua assessoria de corrida{' '}
                      <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">patina</span>
                      {' '}e{' '}
                      <span className="font-semibold text-amber-600">não escala?</span>
                    </>
                  ) : (ACTIVE_VARIANT === 'variantA') ? (
                    <>
                      Entre no Grupo VIP,{' '}
                      <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Receba Oferta Exclusiva do </span>
                      <span className="font-semibold text-amber-600">Clube de Embaixadores Grit Run</span>
                      {' '}e Finalmente{' '}
                      <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Alcance a Escala</span>
                      {' '}Com{' '}
                      <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Assessoria de Corrida</span>
                    </>
                  ) : (
                    copy.hero.title
                  )}
                </h1>
                {ACTIVE_VARIANT === 'variantD' && (
                  <p className="text-base font-medium text-slate-700 md:text-lg leading-relaxed drop-shadow-sm">
                    {copy.hero.subtitle}
                  </p>
                )}
                {ACTIVE_VARIANT === 'variantA' && (
                  <p className="text-sm text-black md:text-base">
                    Tenha uma plataforma personalizada para sua assessoria
                  </p>
                )}
                {(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? null : (ACTIVE_VARIANT === 'variantC' ? (
                  <div className="space-y-6">
                    <p className="text-base text-slate-600 md:text-lg leading-relaxed">
                      Mais de 13 milhões de brasileiros correm, mas um treinador que usa planilhas não consegue escalar.
                    </p>
                    
                    <div className="relative group">
                      {/* Barra lateral animada */}
                      <div className="absolute -left-4 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-500 via-green-500 to-sky-500 rounded-full shadow-lg shadow-sky-500/50 group-hover:shadow-xl group-hover:shadow-green-500/50 transition-all duration-300" />
                      
                      {/* Background com gradiente mais vibrante */}
                      <div className="pl-8 py-5 rounded-2xl bg-gradient-to-r from-sky-50/80 via-green-50/60 to-sky-50/40 border-l-4 border-sky-400/60 shadow-md hover:shadow-xl transition-all duration-300 relative overflow-hidden">
                        {/* Efeito de brilho sutil */}
                        <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/20 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-1000" />
                        
                        {/* Ícone decorativo */}
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
                ) : (
                  <>
                    <p className="text-base text-slate-600 md:text-lg">
                      {copy.hero.subtitle}
                    </p>
                    {copy.hero.subtitleItalic && (
                      <p className="text-base text-slate-600 md:text-lg">
                        <em>{copy.hero.subtitleItalic}</em>
                      </p>
                    )}
                  </>
                ))}
              </div>
              {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') ? (
                <div className={`flex flex-col gap-4 sm:flex-row ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'w-full justify-center' : ''}`}>
                  <a
                    href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`bg-green-600 text-white shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2 font-semibold ${(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'rounded-xl flex-1 max-w-md mx-auto w-full px-8 py-4 text-lg min-h-[56px] active:scale-[0.98]' : 'rounded-full flex-1 px-6 py-3 text-center text-base'}`}
                  >
                    <svg className={(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? 'w-6 h-6 flex-shrink-0' : 'w-5 h-5'} fill="currentColor" viewBox="0 0 24 24">
                      <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                    </svg>
                    {(ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') ? copy.hero.ctaPrimary : 'Quero ter acesso'}
                  </a>
                </div>
              ) : (
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
              )}
              {ACTIVE_VARIANT === 'variantD' && (
                <div className="mt-12 w-full max-w-2xl mx-auto flex justify-center">
                  <img
                    src="/Computer.svg"
                    alt="Plataforma no computador para assessores de corrida"
                    className="w-full max-h-[320px] sm:max-h-[380px] md:max-h-[420px] object-contain object-center drop-shadow-2xl"
                  />
                </div>
              )}
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
            {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
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
            )}
          </div>

          {/* Variant D – Indicador de scroll (mobile: incentiva rolar e ver mais seções) */}
          {ACTIVE_VARIANT === 'variantD' && (
            <div className="flex justify-center pt-6 pb-2 md:pt-8 md:pb-4">
              <ScrollHint className="opacity-90" />
            </div>
          )}
        </section>

        {/* Variant D – Zona de identificação (acima dos depoimentos, paleta sky/amber) */}
        {ACTIVE_VARIANT === 'variantD' && (
          <section id="identificacao" className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-amber-50/40">
            <div className="absolute inset-0 overflow-hidden">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-amber-50/40 blur-3xl" />
              <div className="absolute right-1/2 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-100/20 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
              <div className="text-center">
                <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                  {copy.painSection.title}
                </h2>
                {copy.painSection.subtitle ? (
                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    {copy.painSection.subtitle}
                  </p>
                ) : null}
              </div>
              <div className="mt-20">
                <div className="mx-auto max-w-5xl">
                  <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                    {copy.painSection.statements.map((item) => (
                      <div
                        key={item.text}
                        className="group relative overflow-hidden rounded-3xl border border-sky-200/70 bg-white/90 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/30"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-sky-50/0 transition-all duration-300 group-hover:from-sky-50/40 group-hover:to-transparent" />
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-start gap-6">
                          <div className="flex shrink-0 items-center justify-center">
                            <div className="relative">
                              <div className="absolute inset-0 rounded-2xl bg-sky-100 blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:scale-110">
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
                  <div className="rounded-3xl border-2 border-sky-200/70 bg-gradient-to-br from-sky-50 via-white to-amber-50/20 p-10 text-center shadow-xl shadow-sky-200/20 backdrop-blur-sm">
                    <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/30">
                      <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    {copy.painSection.conclusion ? (
                      <p className="text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
                        {copy.painSection.conclusion}
                      </p>
                    ) : null}
                    <p className="mt-4 text-2xl font-bold leading-relaxed text-sky-700 md:text-3xl">
                      {copy.painSection.conclusionBold}
                    </p>
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-8 pb-4">
                <ScrollHint className="opacity-90" />
              </div>
            </div>
          </section>
        )}

        {/* Variant D – O que oferecemos (proporcional às demais seções) */}
        {ACTIVE_VARIANT === 'variantD' && (
          <section id="plataforma-para-quem-quer" className="relative overflow-hidden bg-gradient-to-b from-amber-50/40 via-white to-sky-50/60">
            <div className="absolute inset-0 overflow-hidden pointer-events-none">
              <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-amber-50/50 blur-3xl" />
              <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
              <div className="absolute right-1/2 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-100/20 blur-3xl" />
            </div>
            <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
              <div className="text-center">
                <h2 className="text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                  Uma plataforma pensada exclusivamente para assessores que querem:
                </h2>
              </div>
              <div className="mt-20">
                <div className="mx-auto max-w-5xl">
                  <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                    {[
                      'Organizar alunos em um só lugar',
                      'Profissionalizar a entrega',
                      'Aumentar retenção',
                      'Estruturar mensalidades recorrentes',
                      'Crescer com mais previsibilidade',
                    ].map((text) => (
                      <div
                        key={text}
                        className="group relative overflow-hidden rounded-3xl border border-sky-200/70 bg-white/90 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/30"
                      >
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-sky-50/0 transition-all duration-300 group-hover:from-sky-50/40 group-hover:to-transparent" />
                        <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                        <div className="relative flex items-start gap-6">
                          <div className="flex shrink-0 items-center justify-center">
                            <div className="relative">
                              <div className="absolute inset-0 rounded-2xl bg-sky-100 blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:scale-110">
                                <svg className="h-6 w-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg>
                              </div>
                            </div>
                          </div>
                          <div className="flex-1 pt-1">
                            <p className="text-base leading-relaxed text-slate-700 md:text-lg group-hover:text-slate-900">
                              {text}
                            </p>
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
              <div className="flex justify-center pt-8 pb-4">
                <ScrollHint className="opacity-90" />
              </div>
            </div>
          </section>
        )}

        {/* Depoimentos – oculto na variant D */}
        {ACTIVE_VARIANT !== 'variantD' && (
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

            {/* Galeria de fotos dos depoimentos - conteúdo completo visível (+25% maior) */}
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
        )}

        {/* Renderização condicional: variantC mostram dores comuns; variantA oculta */}
        {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') ? (
          <>
            {/* Bloco 03 – Dores comuns (variant B e C; variant D tem seção própria acima dos depoimentos) */}
            {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantD' && (
            <section id="dor-latente-cards" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-100/20 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-red-50/30 blur-3xl" />
                <div className="absolute right-1/2 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-100/15 blur-3xl" />
              </div>

              <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
                {/* Header */}
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

                {/* Lista de dores */}
                <div className="mt-20">
                  <div className="mx-auto max-w-5xl">
                    <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                      {copy.painSection.statements.map((item, idx) => (
                        <div
                          key={item.text}
                          className="group relative overflow-hidden rounded-3xl border border-red-200/60 bg-white/80 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl hover:shadow-red-200/40"
                        >
                          {/* Gradient overlay on hover with red accent */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 transition-all duration-300 group-hover:from-red-50/50 group-hover:to-transparent" />
                          
                          {/* Red accent line on the left */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="relative flex items-start gap-6">
                            {/* Icon container with red accent */}
                            <div className="flex shrink-0 items-center justify-center">
                              <div className="relative">
                                <div className="absolute inset-0 rounded-2xl bg-red-100 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30 transition-transform duration-300 group-hover:scale-110">
                                  <span className="text-2xl">{item.emoji}</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
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

                {/* Conclusão */}
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
            )}

            {/* Resultados Reais */}
            {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
            <section id="results-proof" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
          {/* Decorative background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-2 backdrop-blur-sm">
                <svg className="h-4 w-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                  {copy.resultsProof.badge}
                </p>
              </div>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                {copy.resultsProof.title}
              </h2>
              <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                {copy.resultsProof.intro}
              </p>
            </div>

            {/* Dados que Provam */}
            <div className="mt-20">
              <div className="mx-auto max-w-5xl">
                <div className="mb-12 text-center">
                  <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                    {copy.resultsProof.dataTitle}
                  </h3>
                  <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                </div>
                <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                  {copy.resultsProof.dataPoints.map((point, idx) => {
                    // Extract percentage numbers from the text (including + sign if present)
                    const percentageMatch = point.match(/(\+?\d+)%/);
                    const percentage = percentageMatch ? percentageMatch[1] : null;
                    const hasPercentage = percentage !== null;

                    return (
                      <div
                        key={idx}
                        className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/30"
                      >
                        {/* Gradient overlay on hover */}
                        <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 transition-all duration-300 group-hover:from-sky-50/40 group-hover:to-transparent" />
                        
                        <div className="relative flex items-start gap-6">
                          {/* Icon container */}
                          <div className="flex shrink-0 items-center justify-center">
                            <div className="relative">
                              <div className="absolute inset-0 rounded-2xl bg-sky-100 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                              <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-110">
                                <svg
                                  className="h-7 w-7 text-white"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    strokeWidth={3}
                                    d="M5 13l4 4L19 7"
                                  />
                                </svg>
                              </div>
                            </div>
                          </div>

                          {/* Content */}
                          <div className="flex-1 pt-1">
                            {hasPercentage && (
                              <div className="mb-3">
                                <span className="text-4xl font-bold text-sky-600">{percentage}%</span>
                              </div>
                            )}
                            <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                              {point}
                            </p>
                          </div>
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Conclusão */}
            <div className="mt-16">
              <div className="mx-auto max-w-4xl">
                <div className="rounded-3xl border-2 border-sky-200/60 bg-gradient-to-br from-sky-50 via-white to-blue-50/30 p-10 text-center shadow-xl shadow-sky-200/20 backdrop-blur-sm">
                  <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30">
                    <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                    </svg>
                  </div>
                  <p className="text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
                    {copy.resultsProof.conclusion}
                  </p>
                  <button
                    type="button"
                    className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/30 transition-all hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-500 hover:shadow-2xl hover:shadow-sky-500/40"
                    onClick={() => handleAnchorClick('plans')}
                  >
                    <span>Começar</span>
                    <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
            )}
          </>
        ) : (
          <>
            {/* Resultados Reais */}
            <section id="results-proof" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-blue-100/20 blur-3xl" />
              </div>

              <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
                {/* Header */}
                <div className="text-center">
                  <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/80 px-4 py-2 backdrop-blur-sm">
                    <svg className="h-4 w-4 text-sky-600" fill="currentColor" viewBox="0 0 20 20">
                      <path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                    </svg>
                    <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                      {copy.resultsProof.badge}
                    </p>
                  </div>
                  <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                    {copy.resultsProof.title}
                  </h2>
                  <p className="mx-auto mt-6 max-w-3xl text-lg leading-relaxed text-slate-600 md:text-xl">
                    {copy.resultsProof.intro}
                  </p>
                </div>

                {/* Dados que Provam */}
                <div className="mt-20">
                  <div className="mx-auto max-w-5xl">
                    <div className="mb-12 text-center">
                      <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        {copy.resultsProof.dataTitle}
                      </h3>
                      <div className="mx-auto mt-4 h-1 w-24 rounded-full bg-gradient-to-r from-sky-400 to-blue-500" />
                    </div>
                    <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                      {copy.resultsProof.dataPoints.map((point, idx) => {
                        // Extract percentage numbers from the text (including + sign if present)
                        const percentageMatch = point.match(/(\+?\d+)%/);
                        const percentage = percentageMatch ? percentageMatch[1] : null;
                        const hasPercentage = percentage !== null;

                        return (
                          <div
                            key={idx}
                            className="group relative overflow-hidden rounded-3xl border border-slate-200/80 bg-white/80 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/30"
                          >
                            {/* Gradient overlay on hover */}
                            <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-blue-50/0 transition-all duration-300 group-hover:from-sky-50/40 group-hover:to-transparent" />
                            
                            <div className="relative flex items-start gap-6">
                              {/* Icon container */}
                              <div className="flex shrink-0 items-center justify-center">
                                <div className="relative">
                                  <div className="absolute inset-0 rounded-2xl bg-sky-100 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                  <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-110">
                                    <svg
                                      className="h-7 w-7 text-white"
                                      fill="none"
                                      viewBox="0 0 24 24"
                                      stroke="currentColor"
                                    >
                                      <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth={3}
                                        d="M5 13l4 4L19 7"
                                      />
                                    </svg>
                                  </div>
                                </div>
                              </div>

                              {/* Content */}
                              <div className="flex-1 pt-1">
                                {hasPercentage && (
                                  <div className="mb-3">
                                    <span className="text-4xl font-bold text-sky-600">{percentage}%</span>
                                  </div>
                                )}
                                <p className="text-base leading-relaxed text-slate-700 md:text-lg">
                                  {point}
                                </p>
                              </div>
                            </div>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>

                {/* Conclusão */}
                <div className="mt-16">
                  <div className="mx-auto max-w-4xl">
                    <div className="rounded-3xl border-2 border-sky-200/60 bg-gradient-to-br from-sky-50 via-white to-blue-50/30 p-10 text-center shadow-xl shadow-sky-200/20 backdrop-blur-sm">
                      <div className="mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30">
                        <svg className="h-8 w-8 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                        </svg>
                      </div>
                      <p className="text-xl font-semibold leading-relaxed text-slate-900 md:text-2xl">
                        {copy.resultsProof.conclusion}
                      </p>
                      <button
                        type="button"
                        className="mx-auto mt-8 flex w-full max-w-md items-center justify-center gap-2 rounded-full bg-gradient-to-r from-sky-600 to-blue-600 px-8 py-4 text-base font-semibold text-white shadow-xl shadow-sky-500/30 transition-all hover:-translate-y-0.5 hover:from-sky-500 hover:to-blue-500 hover:shadow-2xl hover:shadow-sky-500/40"
                        onClick={() => handleAnchorClick('plans')}
                      >
                        <span>Começar</span>
                        <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 7l5 5m0 0l-5 5m5-5H6" />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Bloco 03 – Dores comuns */}
            <section id="dor-latente-cards" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
              {/* Decorative background elements */}
              <div className="absolute inset-0 overflow-hidden">
                <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-red-100/20 blur-3xl" />
                <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-red-50/30 blur-3xl" />
                <div className="absolute right-1/2 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-red-100/15 blur-3xl" />
              </div>

              <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
                {/* Header */}
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

                {/* Lista de dores */}
                <div className="mt-20">
                  <div className="mx-auto max-w-5xl">
                    <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                      {copy.painSection.statements.map((item, idx) => (
                        <div
                          key={item.text}
                          className="group relative overflow-hidden rounded-3xl border border-red-200/60 bg-white/80 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-red-300 hover:shadow-xl hover:shadow-red-200/40"
                        >
                          {/* Gradient overlay on hover with red accent */}
                          <div className="absolute inset-0 bg-gradient-to-br from-red-50/0 to-red-50/0 transition-all duration-300 group-hover:from-red-50/50 group-hover:to-transparent" />
                          
                          {/* Red accent line on the left */}
                          <div className="absolute left-0 top-0 bottom-0 w-1 bg-gradient-to-b from-red-400 to-red-500 opacity-60 group-hover:opacity-100 transition-opacity" />
                          
                          <div className="relative flex items-start gap-6">
                            {/* Icon container with red accent */}
                            <div className="flex shrink-0 items-center justify-center">
                              <div className="relative">
                                <div className="absolute inset-0 rounded-2xl bg-red-100 blur-md opacity-50 group-hover:opacity-75 transition-opacity" />
                                <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-red-500 to-red-600 shadow-lg shadow-red-500/30 transition-transform duration-300 group-hover:scale-110">
                                  <span className="text-2xl">{item.emoji}</span>
                                </div>
                              </div>
                            </div>

                            {/* Content */}
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

                {/* Conclusão */}
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
          </>
        )}

        {/* Bloco 04 – Texto focal */}
        {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
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
            <div className="mt-12 rounded-3xl border-2 border-red-500/30 bg-gradient-to-br from-slate-800/90 to-slate-900/90 p-8 shadow-2xl shadow-red-500/10 md:p-12">
              <p className="mb-8 text-center text-xl font-semibold leading-tight text-white md:text-2xl">
                {copy.experienceSection.intro}
              </p>
              <div className="mx-auto max-w-3xl space-y-6">
                {copy.experienceSection.problems.map((problem, idx) => (
                  <div key={idx} className="flex items-start gap-4">
                    <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-red-400/20 text-red-300 shadow-lg shadow-red-500/20">
                      <span className="text-base font-semibold">❌</span>
                    </div>
                    <div className="flex-1 pt-0.5">
                      <p className="text-lg font-semibold leading-relaxed text-white">
                        {problem}
                      </p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="mt-12 text-center">
              <p className="text-xl text-slate-200 md:text-2xl">
                {copy.experienceSection.conclusion}
              </p>
              <p className="mt-4 text-2xl font-semibold text-sky-200 md:text-3xl">
                {copy.experienceSection.conclusionBold}
              </p>
            </div>
            <button
              type="button"
              className="mx-auto mt-12 flex w-full max-w-md items-center justify-center rounded-full bg-sky-400 px-8 py-4 text-base font-semibold text-slate-900 shadow-2xl shadow-sky-500/30 transition hover:-translate-y-0.5 hover:bg-sky-300"
              onClick={() => handleAnchorClick('plans')}
            >
              {copy.experienceSection.cta}
            </button>
          </div>
        </section>
        )}

        {/* Como funciona */}
        {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
        <section id="steps" className="bg-slate-50">
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
        )}

        {/* Benefícios (oculto na variantA) */}
        {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantD' && (
        <section id="benefits" className="bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') ? (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                    {copy.benefits.badge}
                  </p>
                  <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl lg:text-5xl leading-tight">
                    Estamos construindo a forma moderna de gerir sua assessoria de corrida.
                  </h2>
                </>
              ) : (
                <>
                  <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                    {copy.benefits.badge}
                  </p>
                  <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                    {copy.benefits.title}
                  </h2>
                  <p className="text-base text-slate-600 md:text-lg">
                    {copy.benefits.subtitle}
                  </p>
                </>
              )}
            </div>
            
            {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') ? (
              <div className="mt-16 space-y-8 md:space-y-12">
                {/* Card 1: Comunidade que retém alunos automaticamente */}
                <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/30 p-8 md:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-sky-300">
                  <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-200/20 to-green-200/20 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="mb-6 inline-flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-green-500 text-white shadow-lg">
                        <span className="text-2xl">👥</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        Comunidade que retém alunos automaticamente
                      </h3>
                    </div>
                    <div className="space-y-4 text-base text-slate-700 leading-relaxed md:text-lg">
                      <p>
                        Criamos funcionalidades inspiradas em dinâmicas como o Gymrats, onde os alunos se motivam entre si por meio de desafios, rankings e interações contínuas.
                      </p>
                      <p>
                        O engajamento deixa de depender do treinador e passa a acontecer dentro do próprio ecossistema.
                      </p>
                      <p className="font-semibold text-sky-700 md:text-xl">
                        Mais engajamento → mais constância → mais retenção.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Card 2: Menos tempo gerindo, mais tempo crescendo */}
                <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white to-green-50/30 p-8 md:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-green-300">
                  <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-sky-200/20 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />
                  <div className="relative">
                    <div className="mb-6 inline-flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-green-500 to-sky-500 text-white shadow-lg">
                        <span className="text-2xl">⏱️</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        Menos tempo gerindo, mais tempo crescendo
                      </h3>
                    </div>
                    <div className="space-y-4 text-base text-slate-700 leading-relaxed md:text-lg">
                      <p>
                        Centralizando treinos, feedbacks e histórico dos alunos em um único lugar, você reduz mensagens soltas, retrabalho e decisões no improviso.
                      </p>
                      <p>
                        Com menos tempo gasto na gestão, sobra energia para adquirir novos alunos e acompanhar melhor os atuais.
                      </p>
                    </div>
                  </div>
                </article>

                {/* Card 3: Um negócio preparado para escalar */}
                <article className="group relative overflow-hidden rounded-3xl border border-slate-200 bg-gradient-to-br from-white via-sky-50/20 to-green-50/20 p-8 md:p-10 shadow-lg transition-all duration-300 hover:shadow-2xl hover:border-sky-300">
                  <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-200/20 to-green-200/20 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />
                  <div className="relative">
                    <div className="mb-6 inline-flex items-center gap-3">
                      <div className="flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-600 to-green-600 text-white shadow-lg">
                        <span className="text-2xl">📈</span>
                      </div>
                      <h3 className="text-2xl font-bold text-slate-900 md:text-3xl">
                        Um negócio preparado para escalar
                      </h3>
                    </div>
                    <div className="space-y-4 text-base text-slate-700 leading-relaxed md:text-lg">
                      <p>
                        Quando a operação deixa de depender exclusivamente de você, a assessoria deixa de ter teto.
                      </p>
                      <p>
                        O Grit Run transforma uma estrutura limitada a poucas dezenas de alunos em uma operação organizada, previsível e pronta para crescer, sem perder qualidade.
                      </p>
                    </div>
                  </div>
                </article>
              </div>
            ) : (
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
            )}
          </div>
        </section>
        )}

        {/* Cópia Acesso Antecipado – acima de Quem somos (proporcional às demais seções) */}
        {ACTIVE_VARIANT === 'variantD' && (
        <section id="acesso-antecipado-top" className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-amber-50/40">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-amber-50/40 blur-3xl" />
            <div className="absolute right-1/2 top-1/2 h-64 w-64 -translate-y-1/2 translate-x-1/2 rounded-full bg-sky-100/20 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-sky-100/90 px-4 py-2 backdrop-blur-sm border border-sky-200/60">
                <span className="text-base">🚀</span>
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-700">
                  Acesso Antecipado
                </p>
              </div>
              <h2 className="mt-6 text-4xl font-bold leading-tight text-slate-900 md:text-5xl lg:text-6xl">
                Os primeiros assessores terão:
              </h2>
            </div>
            <div className="mt-20">
              <div className="mx-auto max-w-5xl">
                <div className="grid gap-6 md:grid-cols-1 lg:gap-8">
                  {[
                    { emoji: '🚀', text: 'Condição especial de lançamento' },
                    { emoji: '📈', text: 'Participação na evolução da plataforma' },
                    { emoji: '👑', text: 'Benefícios exclusivos para embaixadores' },
                  ].map((item) => (
                    <div
                      key={item.text}
                      className="group relative overflow-hidden rounded-3xl border border-sky-200/70 bg-white/90 p-8 shadow-lg shadow-slate-200/50 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-sky-300 hover:shadow-xl hover:shadow-sky-200/30"
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-sky-50/0 to-sky-50/0 transition-all duration-300 group-hover:from-sky-50/40 group-hover:to-transparent" />
                      <div className="absolute left-0 top-0 bottom-0 w-1.5 bg-gradient-to-b from-sky-400 to-amber-400 opacity-80 group-hover:opacity-100 transition-opacity" />
                      <div className="relative flex items-start gap-6">
                        <div className="flex shrink-0 items-center justify-center">
                          <div className="relative">
                            <div className="absolute inset-0 rounded-2xl bg-sky-100 blur-md opacity-60 group-hover:opacity-80 transition-opacity" />
                            <div className="relative flex h-14 w-14 items-center justify-center rounded-2xl bg-gradient-to-br from-sky-500 to-sky-600 shadow-lg shadow-sky-500/25 transition-transform duration-300 group-hover:scale-110">
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
            <p className="mt-12 text-center text-slate-600 text-base md:text-lg leading-relaxed max-w-2xl mx-auto">
              Estamos formando um grupo fechado para apresentar os detalhes.
            </p>
            <div className="mt-10 flex justify-center">
              <a
                href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 text-white shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-4 text-lg min-h-[56px] active:scale-[0.98] w-full max-w-md"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quero acessar a plataforma
              </a>
            </div>
          </div>
        </section>
        )}

        {/* Quem somos - Grid - apenas variantC */}
        {((ACTIVE_VARIANT === 'variantA' || ACTIVE_VARIANT === 'variantD') || ACTIVE_VARIANT === 'variantC') && (
        <section id="quem-somos" className="relative overflow-hidden bg-gradient-to-b from-white via-slate-50 to-white">
          <div className="mx-auto max-w-6xl px-6 py-24 md:py-28">
            {/* Header */}
            <div className="mb-16">
              <div className="text-center mb-12">
                <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600 mb-4">
                  Quem somos
                </p>
                <h2 className="text-3xl font-bold text-slate-900 md:text-4xl lg:text-5xl leading-tight mb-6">
                  Sobre os criadores da plataforma
                </h2>
                <div className="mx-auto h-1 w-24 rounded-full bg-gradient-to-r from-sky-500 to-green-500" />
              </div>

              {/* Texto introdutório com layout destacado */}
              <div className="mx-auto max-w-5xl">
                <div className="space-y-6 md:space-y-8">
                  {/* Frase 1 */}
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-sky-50/30 p-6 md:p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:border-sky-300">
                    <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-200/20 to-green-200/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-sky-500 to-green-500 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                        1
                      </div>
                      <p className="text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-1">
                        Somos desenvolvedores que cansaram de ver o mercado de corrida mal atendido pelos sistemas e aplicativos atuais.
                      </p>
                    </div>
                  </div>

                  {/* Frase 2 */}
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white to-green-50/30 p-6 md:p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:border-green-300">
                    <div className="absolute top-0 left-0 w-32 h-32 bg-gradient-to-br from-green-200/20 to-sky-200/10 rounded-full blur-2xl -translate-y-1/2 -translate-x-1/2" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-green-500 to-sky-500 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                        2
                      </div>
                      <p className="text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-1">
                        Enquanto o setor evoluiu, as soluções ficaram para trás — então decidimos criar algo melhor.
                      </p>
                    </div>
                  </div>

                  {/* Frase 3 */}
                  <div className="group relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br from-white via-sky-50/20 to-green-50/20 p-6 md:p-8 shadow-md transition-all duration-300 hover:shadow-xl hover:border-sky-300">
                    <div className="absolute bottom-0 right-0 w-32 h-32 bg-gradient-to-br from-sky-200/20 to-green-200/10 rounded-full blur-2xl translate-y-1/2 translate-x-1/2" />
                    <div className="relative flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 md:w-14 md:h-14 rounded-xl bg-gradient-to-br from-sky-600 to-green-600 flex items-center justify-center text-white text-xl md:text-2xl font-bold shadow-lg">
                        3
                      </div>
                      <p className="text-lg md:text-xl text-slate-900 leading-relaxed font-medium pt-1">
                        Somos corredores que decidiram criar uma plataforma para treinadores que querem crescer com escala.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Grid 2x3 */}
            <div className="mt-16">
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 md:gap-6">
                {quemSomosData.map((item, index) => (
                  <div
                    key={index}
                    className="relative group aspect-[4/3] overflow-hidden rounded-2xl bg-slate-200 focus-within:ring-2 focus-within:ring-sky-500 focus-within:ring-offset-2"
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
                    {/* Overlay */}
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
        )}

        {/* Depoimentos */}
        <section id="testimonials" className="hidden bg-white">
          <div className="mx-auto max-w-6xl px-6 py-20">
            <div className="space-y-4 text-center">
              <p className="text-sm font-semibold uppercase tracking-[0.2em] text-sky-600">
                {copy.testimonials.badge}
              </p>
              <h2 className="text-3xl font-semibold text-slate-900 md:text-4xl">
                {copy.testimonials.title}
              </h2>
              <p className="text-base text-slate-600 md:text-lg">
                {copy.testimonials.subtitle}
              </p>
            </div>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              {copy.testimonials.testimonials.map((testimonial) => (
                <blockquote
                  key={testimonial.author}
                  className="flex h-full flex-col rounded-3xl border border-slate-100 bg-white p-6 shadow-lg shadow-slate-200/70 transition hover:-translate-y-1 hover:shadow-xl"
                >
                  <p className="flex-1 text-base leading-relaxed text-slate-700">
                    "{testimonial.content}"
                  </p>
                  <div className="mt-6 space-y-1 border-t border-slate-100 pt-4 text-sm text-slate-500">
                    <p className="font-semibold text-slate-900">{testimonial.author}</p>
                    <p>{testimonial.role}</p>
                  </div>
                </blockquote>
              ))}
            </div>
          </div>
        </section>

        {/* Ancoragem com Preço */}
        {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
        <section className="relative overflow-hidden bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 text-white">
          {/* Animated background elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute -right-40 -top-40 h-96 w-96 rounded-full bg-red-500/10 blur-3xl animate-pulse" />
            <div className="absolute -left-40 -bottom-40 h-96 w-96 rounded-full bg-orange-500/10 blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
          </div>

          <div className="relative mx-auto max-w-6xl px-6 py-24 md:py-28">
            {/* Header */}
            <div className="text-center">
              <div className="inline-flex items-center gap-2 rounded-full bg-red-500/20 px-4 py-2 backdrop-blur-sm border border-red-400/30">
                <svg className="h-4 w-4 text-red-300" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
                </svg>
                <p className="text-xs font-semibold uppercase tracking-[0.2em] text-red-300">
                  Compare os valores
                </p>
              </div>
            </div>

            {/* Price Comparison Cards */}
            <div className="mt-12 grid gap-8 md:grid-cols-2">
              {/* Assessoria Card */}
              <div className="group relative overflow-hidden rounded-3xl border-2 border-red-400/40 bg-gradient-to-br from-red-900/40 via-slate-800/60 to-slate-900/80 p-6 shadow-2xl shadow-red-500/20 backdrop-blur-sm transition-all duration-300 hover:border-red-400/60 hover:shadow-red-500/30 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-red-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-red-500/20 border border-red-400/30">
                      <svg className="h-6 w-6 text-red-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-slate-200 md:text-lg">Assessoria de Corrida</h3>
                  </div>
                  <div className="mb-6">
                    <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-3">
                      <span className="text-3xl font-bold text-red-300 md:text-5xl">R$ 150</span>
                      <span className="text-base text-slate-400 md:text-xl">a</span>
                      <span className="text-3xl font-bold text-red-300 md:text-5xl">R$ 350</span>
                    </div>
                    <p className="mt-3 text-center text-sm text-slate-400">por mês</p>
                  </div>
                </div>
              </div>

              {/* Treinador Particular Card */}
              <div className="group relative overflow-hidden rounded-3xl border-2 border-orange-400/40 bg-gradient-to-br from-orange-900/40 via-slate-800/60 to-slate-900/80 p-6 shadow-2xl shadow-orange-500/20 backdrop-blur-sm transition-all duration-300 hover:border-orange-400/60 hover:shadow-orange-500/30 md:p-8">
                <div className="absolute inset-0 bg-gradient-to-br from-orange-500/5 to-transparent opacity-0 transition-opacity duration-300 group-hover:opacity-100" />
                <div className="relative">
                  <div className="mb-6 flex items-center gap-3">
                    <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-orange-500/20 border border-orange-400/30">
                      <svg className="h-6 w-6 text-orange-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2zm7-5a2 2 0 11-4 0 2 2 0 014 0z" />
                      </svg>
                    </div>
                    <h3 className="text-base font-semibold text-slate-200 md:text-lg">Treinador Particular</h3>
                  </div>
                  <div className="mb-6">
                    <div className="flex flex-col items-center justify-center gap-2 md:flex-row md:items-baseline md:gap-3">
                      <span className="text-3xl font-bold text-orange-300 md:text-5xl">R$ 1.000</span>
                      <span className="text-base text-slate-400 md:text-xl">a</span>
                      <span className="text-3xl font-bold text-orange-300 md:text-5xl">R$ 3.000</span>
                    </div>
                    <p className="mt-3 text-center text-sm text-slate-400">por mês</p>
                  </div>
                </div>
              </div>
            </div>

            {/* Arrow pointing down */}
            <div className="mt-8 flex justify-center">
              <div className="flex flex-col items-center gap-2">
                <div className="h-12 w-px bg-gradient-to-b from-sky-400 to-transparent" />
                <div className="rounded-full bg-sky-500/20 p-3 border border-sky-400/30">
                  <svg className="h-6 w-6 text-sky-300 animate-bounce" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
                  </svg>
                </div>
              </div>
            </div>

            {/* Solution Box */}
            <div className="mt-12">
              <div className="mx-auto max-w-4xl rounded-3xl border-2 border-sky-400/50 bg-gradient-to-br from-sky-900/40 via-slate-800/80 to-slate-900/90 p-10 shadow-2xl shadow-sky-500/20 backdrop-blur-sm md:p-12">
                <div className="text-center">
                  <div className="mb-6 inline-flex items-center gap-2 rounded-full bg-sky-500/20 px-4 py-2 border border-sky-400/30">
                    <svg className="h-5 w-5 text-sky-300" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" />
                    </svg>
                    <p className="text-sm font-semibold text-sky-300">Solução Inteligente</p>
                  </div>
                  <p className="mb-8 text-2xl font-bold leading-tight text-white md:text-3xl">
                    {copy.pricingAnchor.intro}
                  </p>
                  <div className="mx-auto grid max-w-3xl gap-6 sm:grid-cols-2">
                    {copy.pricingAnchor.benefits.map((benefit, idx) => (
                      <div key={idx} className="group flex items-start gap-4 rounded-2xl bg-slate-800/50 p-5 backdrop-blur-sm border border-sky-500/20 transition-all hover:border-sky-400/40 hover:bg-slate-800/70">
                        <div className="mt-0.5 flex h-10 w-10 shrink-0 items-center justify-center rounded-xl bg-gradient-to-br from-sky-500 to-blue-600 shadow-lg shadow-sky-500/30 transition-transform duration-300 group-hover:scale-110">
                          <svg className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                          </svg>
                        </div>
                        <div className="flex-1 pt-1">
                          <p className="text-lg font-semibold leading-relaxed text-white">
                            {benefit}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        )}

        {/* Planos */}
        {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
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
            <div className="mt-12 grid gap-6 md:grid-cols-2 max-w-4xl mx-auto">
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
                  <a
                    href={plan.paymentLink}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`mt-10 w-full rounded-full px-6 py-3 text-sm font-semibold transition text-center block ${
                      plan.highlight
                        ? 'bg-sky-600 text-white hover:bg-sky-500'
                        : 'border border-slate-200 text-slate-800 hover:border-sky-300 hover:text-sky-600'
                    }`}
                  >
                    {plan.cta}
                  </a>
                </article>
              ))}
            </div>
          </div>
        </section>
        )}

        {/* CTA final – variant D: apenas texto + botão */}
        {ACTIVE_VARIANT === 'variantD' && (
        <section id="construcao" className="relative overflow-hidden bg-gradient-to-b from-sky-50/60 via-white to-amber-50/40">
          <div className="absolute inset-0 overflow-hidden pointer-events-none">
            <div className="absolute -right-20 -top-20 h-96 w-96 rounded-full bg-sky-100/30 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 h-96 w-96 rounded-full bg-amber-50/40 blur-3xl" />
          </div>
          <div className="relative mx-auto max-w-2xl px-6 py-20 md:py-24">
            <div className="flex flex-col items-center text-center space-y-8">
              <p className="text-slate-600 text-base md:text-lg leading-relaxed">
                Estamos formando um grupo fechado para apresentar os detalhes.
              </p>
              <a
                href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                target="_blank"
                rel="noopener noreferrer"
                className="rounded-xl bg-green-600 text-white shadow-xl shadow-green-500/30 transition hover:-translate-y-0.5 hover:bg-green-500 hover:shadow-2xl hover:shadow-green-500/40 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2 inline-flex items-center justify-center gap-2.5 font-semibold px-8 py-4 text-lg min-h-[56px] active:scale-[0.98] w-full max-w-md"
              >
                <svg className="w-6 h-6 flex-shrink-0" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                Quero acessar a plataforma
              </a>
            </div>
          </div>
        </section>
        )}
        {((ACTIVE_VARIANT === 'variantA') || ACTIVE_VARIANT === 'variantC') && (
        <section id="construcao" className="relative overflow-hidden bg-gradient-to-br from-sky-50 via-white to-sky-50">
          <div className="relative mx-auto max-w-4xl px-6 py-20 md:py-28">
            <div className="flex flex-col items-center justify-center text-center space-y-8 md:space-y-10">
              <div className={`inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-xl ${ACTIVE_VARIANT === 'variantA' ? 'bg-gradient-to-r from-sky-100 to-sky-200 text-sky-700 border border-sky-200/50 shadow-sm' : 'bg-gradient-to-r from-sky-100 to-green-100 text-sky-700 border border-sky-200/50 shadow-sm'}`}>
                <span className="text-base">🚀</span>
                {ACTIVE_VARIANT === 'variantA' ? 'plataforma para treinadores de corrida' : 'Grupo Exclusivo'}
              </div>
              <h2 className="text-3xl font-normal text-slate-700 md:text-4xl lg:text-5xl leading-tight tracking-tight">
                {ACTIVE_VARIANT === 'variantA' ? (
                  <>
                    <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Receba Oferta Exclusiva do </span>
                    <span className="font-semibold text-amber-600">Clube de Embaixadores Grit Run</span>
                    {' '}e{' '}
                    <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Alcance a Escala</span>
                    {' '}com{' '}
                    <span className="font-semibold bg-gradient-to-r from-sky-700 to-sky-800 bg-clip-text text-transparent">Assessoria de Corrida</span>
                  </>
                ) : (
                  'Faça parte do grupo exclusivo no WhatsApp'
                )}
              </h2>
              {ACTIVE_VARIANT === 'variantA' && (
                <p className="text-sm text-black md:text-base">
                  Tenha uma plataforma personalizada para sua assessoria
                </p>
              )}
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
        )}

        {/* FAQ */}
        {ACTIVE_VARIANT !== 'variantA' && ACTIVE_VARIANT !== 'variantC' && ACTIVE_VARIANT !== 'variantD' && (
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
        )}
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50/50">
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
};

export default LandingPage;

