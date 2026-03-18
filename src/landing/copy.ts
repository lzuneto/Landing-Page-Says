export type VariantKey = 'variantA' | 'variantB' | 'variantC' | 'variantD' | 'carrinho';

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

export type CopyData = {
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
export const copyVariants: Record<VariantKey, CopyData> = {
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

  carrinho: {
    header: {
      logo: 'Grit Run',
      nav: {
        benefits: 'Benefícios',
        testimonials: 'Depoimentos',
        howItWorks: 'Como funciona',
        plans: 'Planos',
        faq: 'FAQ',
      },
      cta: 'Ver planos',
    },
    hero: {
      badge: 'Carrinho',
      title: 'Seu carrinho',
      subtitle: 'Revise seus itens e finalize sua compra.',
      subtitleItalic: '',
      ctaPrimary: 'Finalizar compra',
      ctaSecondary: 'Continuar comprando',
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
      titleLine2: 'Na faculdade ninguém te ensinou como criar um modelo de carreira escalável e rentável.',
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
      subtitle: 'Em cinco passos, o Grit Run organiza sua operação.',
      steps: [
        { title: 'Você estrutura sua assessoria', description: 'Define metodologia, tipos de treino, perfis de alunos.' },
        { title: 'O sistema organiza e acelera a criação dos treinos', description: 'Modelos reutilizáveis e estrutura clara.' },
        { title: 'Menos mensagens soltas, mais clareza', description: 'Feedbacks organizados em um único lugar.' },
        { title: 'Você acompanha a evolução da assessoria', description: 'Execução, constância e engajamento em um painel.' },
        { title: 'Resultado', description: 'Assessoria organizada e pronta para crescer.' },
      ],
      swipeHint: 'Arraste para o lado para ver todas as etapas →',
    },
    benefits: {
      badge: 'O que estamos construindo',
      title: 'A forma moderna de gerir sua assessoria de corrida.',
      subtitle: 'Você lidera a metodologia. O Grit Run organiza a operação.',
      features: [
        { title: 'Comunidade que aumenta a retenção', description: 'Desafios e rankings fortalecem o engajamento.' },
        { title: 'Estrutura clara para criação de treinos', description: 'Crie treinos com base na sua metodologia.' },
        { title: 'Menos retrabalho no dia a dia', description: 'Centralize planos e feedbacks.' },
        { title: 'Organização que respeita sua rotina', description: 'Controle do cronograma de treinos.' },
        { title: 'Visão completa da assessoria', description: 'Acompanhe execução e evolução em um painel.' },
        { title: 'Negócio preparado para escalar', description: 'Operação organizada e pronta para crescer.' },
      ],
    },
    resultsProof: {
      badge: 'Resultados reais',
      title: 'Se outros treinadores conseguiram, você também pode!',
      intro: 'Dados reais mostram que assessorias que utilizam tecnologia conseguem escalar.',
      dataTitle: 'Dados que provam isso:',
      dataPoints: [
        '70% dos personal trainers gastam mais de 5 horas por semana em tarefas administrativas.',
        'A retenção de alunos aumenta em mais de 30% com comunidades e desafios.',
        'A satisfação aumenta em assessorias que utilizam soluções digitais.',
      ],
      conclusion: 'Você pode ser o próximo!',
    },
    testimonials: {
      badge: 'Depoimentos',
      title: 'Corredores de todos os níveis já confiam na plataforma.',
      subtitle: 'Veja o que quem usa o Grit Run tem a dizer.',
      testimonials: [
        { content: 'O aplicativo se tornou minha maior aliado na corrida.', author: 'Inácio Nogueira', role: 'Maratonista' },
        { content: 'A plataforma é essencial para qualquer pessoa correr melhor.', author: 'Rafael Soccol', role: 'Corredor de Meia Maratona' },
        { content: 'Comecei a correr há pouco tempo e já vi meu ritmo melhorar.', author: 'Elizeu Neto', role: 'Corredor Iniciante' },
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
      subtitle: 'Todos incluem suporte e atualizações contínuas.',
      plans: [
        { name: 'MENSAL', description: 'Para treinadores que querem organizar a assessoria.', price: 'R$ 89,90 / mês', cta: 'Assinar Mensal', highlight: true, paymentLink: 'https://www.asaas.com/c/zts26bonzs3uwjef', features: ['Gestão de treinos e alunos', 'Criação de planos', 'Centralização de feedbacks', 'Visão geral da assessoria'] },
        { name: 'ANUAL', description: '(cobrado uma vez por ano)', price: 'R$ 69,90 / mês', cta: 'Assinar Anual', paymentLink: 'https://www.asaas.com/c/mvlqe3ca71dbpwli', features: ['Todos os recursos do Mensal', 'Economia de R$ 240 por ano', 'Pagamento único'] },
      ],
    },
    faq: {
      badge: 'FAQ',
      title: 'Perguntas frequentes',
      subtitle: 'Tire suas dúvidas sobre o Grit Run.',
      faqs: [
        { question: 'Preciso ter muita experiência para usar o Grit Run?', answer: 'Não. O Grit Run atende treinadores em diferentes estágios.' },
        { question: 'O Grit Run substitui minha metodologia?', answer: 'Não. Ele organiza e dá escala à forma como você já trabalha.' },
        { question: 'Como funciona o cancelamento?', answer: 'Você pode cancelar a qualquer momento, sem multa.' },
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
