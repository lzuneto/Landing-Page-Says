/**
 * Página "Meu carrinho" – criada do zero, sem dependência de copy/outros módulos.
 * Rota: /meu-carrinho
 */

import { useState, useEffect } from 'react';

const WHATSAPP_LINK = 'https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t';

/** Links Asaas por plano e forma de pagamento */
const LINKS_ASAAS = {
  anual: {
    pix: 'https://www.asaas.com/c/bygtd9n04hdzxarr',
    credito: 'https://www.asaas.com/c/9wspna3km0zki40u',
  },
  trimestral: {
    pix: 'https://www.asaas.com/c/8bbxg5hikkd3xbuk',
    credito: 'https://www.asaas.com/c/3izpr61ffyoje6oh',
  },
  mensal: {
    pix: 'https://www.asaas.com/c/947siiveh11t14r8',
    credito: 'https://www.asaas.com/c/5i3mu0cvgs8t2yb7',
  },
} as const;

const PLANOS = [
  {
    id: 'anual',
    nome: 'Assinatura anual',
    badge: 'Maior Vantagem',
    preco: 'R$ 44,90/Mês',
    duracao: '12 meses de acesso',
    cobranca: 'Total R$ 538,80',
    destaque: true,
    itens: [
      { incluido: true, texto: 'Gestão de Treinos', descricao: 'Com o nosso aplicativo, você gerencia os treinos de alunos presenciais e online em poucos cliques.' },
      { incluido: true, texto: 'Alunos Ilimitados' },
      { incluido: true, texto: 'Grupo de Embaixadores' },
      { incluido: true, texto: 'Bônus inclusos' },
      { incluido: true, texto: 'Sem taxa de adesão' },
    ],
    cta: 'Assinar Agora',
  },
  {
    id: 'trimestral',
    nome: 'Assinatura trimestral',
    preco: 'R$ 51,90/Mês',
    duracao: '3 meses de acesso',
    cobranca: 'Total R$ 155,70',
    destaque: false,
    itens: [
      { incluido: true, texto: 'Gestão de Treinos', descricao: 'Com o nosso aplicativo, você gerencia os treinos de alunos presenciais e online em poucos cliques.' },
      { incluido: true, texto: 'Alunos Ilimitados' },
      { incluido: true, texto: 'Grupo de Embaixadores' },
      { incluido: true, texto: 'Bônus inclusos' },
      { incluido: true, texto: 'Sem taxa de adesão' },
    ],
    cta: 'Assinar Agora',
  },
  {
    id: 'mensal',
    nome: 'Assinatura mensal',
    preco: 'R$ 89,90/Mês',
    duracao: '1 mês de acesso',
    cobranca: 'Total R$ 89,90',
    destaque: false,
    itens: [
      { incluido: true, texto: 'Gestão de Treinos', descricao: 'Com o nosso aplicativo, você gerencia os treinos de alunos presenciais e online em poucos cliques.' },
      { incluido: true, texto: 'Alunos Ilimitados' },
      { incluido: true, texto: 'Grupo de Embaixadores' },
      { incluido: true, texto: 'Bônus inclusos' },
      { incluido: true, texto: 'Sem taxa de adesão' },
    ],
    cta: 'Assinar Agora',
  },
];

function CheckIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
    </svg>
  );
}

function XIcon() {
  return (
    <svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
    </svg>
  );
}

/** Retorna a próxima sexta-feira à meia-noite (00:00:00). */
function getSextaMeiaNoite() {
  const d = new Date();
  const dia = d.getDay(); // 0 dom, 5 sex, 6 sáb
  let diasParaSexta = 5 - dia;
  if (diasParaSexta <= 0) diasParaSexta += 7;
  d.setDate(d.getDate() + diasParaSexta);
  d.setHours(0, 0, 0, 0);
  return d;
}

function CronometroAteSexta() {
  const [restante, setRestante] = useState({ d: 0, h: 0, m: 0, s: 0 });

  useEffect(() => {
    const tick = () => {
      const agora = new Date();
      const alvo = getSextaMeiaNoite();
      const diff = Math.max(0, alvo.getTime() - agora.getTime());
      const totalSec = Math.floor(diff / 1000);
      const d = Math.floor(totalSec / 86400);
      const h = Math.floor((totalSec % 86400) / 3600);
      const m = Math.floor((totalSec % 3600) / 60);
      const s = totalSec % 60;
      setRestante({ d, h, m, s });
    };
    tick();
    const id = setInterval(tick, 1000);
    return () => clearInterval(id);
  }, []);

  return (
    <div className="mt-6 inline-flex flex-col items-center gap-2">
      <p className="text-sm font-medium text-slate-600">Oferta válida até o final do dia de quinta-feira</p>
      <div className="flex items-center gap-2 sm:gap-3 font-mono text-xl sm:text-2xl font-bold text-sky-600">
        {restante.d > 0 && (
          <>
            <span className="rounded-lg bg-slate-100 px-2 py-1 sm:px-3 sm:py-1.5">{restante.d}</span>
            <span className="text-slate-400 text-base font-normal">d</span>
            <span className="text-slate-400">:</span>
          </>
        )}
        <span className="rounded-lg bg-slate-100 px-2 py-1 sm:px-3 sm:py-1.5">{String(restante.h).padStart(2, '0')}</span>
        <span className="text-slate-400">:</span>
        <span className="rounded-lg bg-slate-100 px-2 py-1 sm:px-3 sm:py-1.5">{String(restante.m).padStart(2, '0')}</span>
        <span className="text-slate-400">:</span>
        <span className="rounded-lg bg-slate-100 px-2 py-1 sm:px-3 sm:py-1.5">{String(restante.s).padStart(2, '0')}</span>
      </div>
      <p className="text-xs text-slate-500">
        {restante.d > 0 ? 'dias : horas : minutos : segundos' : 'horas : minutos : segundos'}
      </p>
    </div>
  );
}

export default function MeuCarrinho() {
  const [planoSelecionado, setPlanoSelecionado] = useState<typeof PLANOS[0] | null>(null);

  const redirecionarPagamento = (formaPagamento: 'credito' | 'pix') => {
    if (!planoSelecionado) return;
    const url = LINKS_ASAAS[planoSelecionado.id][formaPagamento];
    window.open(url, '_blank', 'noopener,noreferrer');
    setPlanoSelecionado(null);
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-900">
      {/* Modal: escolher Crédito ou PIX */}
      {planoSelecionado && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-slate-900/60"
          onClick={() => setPlanoSelecionado(null)}
          role="dialog"
          aria-modal="true"
          aria-labelledby="modal-titulo"
        >
          <div
            className="relative w-full max-w-sm rounded-2xl bg-white p-6 shadow-xl"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              type="button"
              onClick={() => setPlanoSelecionado(null)}
              className="absolute top-4 right-4 p-1 rounded-lg text-slate-400 hover:text-slate-600 hover:bg-slate-100"
              aria-label="Fechar"
            >
              <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
              </svg>
            </button>
            <h3 id="modal-titulo" className="text-lg font-bold text-slate-900 pr-8">
              Como deseja pagar?
            </h3>
            <p className="mt-1 text-sm text-slate-600">
              Plano: <span className="font-semibold text-slate-800">{planoSelecionado.nome}</span>
            </p>
            <div className="mt-6 flex flex-col gap-3">
              <button
                type="button"
                onClick={() => redirecionarPagamento('credito')}
                className="w-full rounded-xl py-3.5 px-4 text-center text-sm font-semibold bg-sky-600 text-white hover:bg-sky-700 transition focus:outline-none focus:ring-2 focus:ring-sky-500 focus:ring-offset-2"
              >
                Cartão de crédito
              </button>
              <button
                type="button"
                onClick={() => redirecionarPagamento('pix')}
                className="w-full rounded-xl py-3.5 px-4 text-center text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
              >
                PIX
              </button>
            </div>
          </div>
        </div>
      )}

      <main>
        {/* Seção Planos – cores alinhadas às outras páginas (sky, slate, emerald) */}
        <section className="py-12 sm:py-16 lg:py-20">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <div className="text-center mb-10 sm:mb-12">
              <h2 className="text-2xl font-bold text-slate-900 sm:text-3xl md:text-4xl">
                Escolha o <span className="text-sky-600">seu</span> plano:
              </h2>
              <CronometroAteSexta />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-4">
              {PLANOS.map((plano) => (
                <article
                  key={plano.id}
                  className={`relative flex flex-col rounded-2xl border-2 bg-white p-5 sm:p-6 shadow-md transition hover:shadow-lg ${
                    plano.destaque ? 'border-sky-400 shadow-sky-100 ring-2 ring-sky-200/50' : 'border-slate-200'
                  }`}
                >
                  {plano.badge && (
                    <div className="absolute -top-3 left-4 px-3 py-1 rounded-md bg-sky-600 text-white text-xs font-semibold shadow">
                      {plano.badge}
                    </div>
                  )}
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1">{plano.nome}</p>
                  <p className="mt-3 text-xl sm:text-2xl font-bold text-sky-600">{plano.preco}</p>
                  <p className="mt-1 text-sm text-slate-600">{plano.duracao}</p>
                  <p className="text-xs text-slate-500">{plano.cobranca}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-left">
                    {plano.itens.map((item, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {item.incluido ? (
                          <span className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white" aria-hidden>
                            <CheckIcon />
                          </span>
                        ) : (
                          <span className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-600" aria-hidden>
                            <XIcon />
                          </span>
                        )}
                        <span className={item.incluido ? 'text-slate-700 text-sm' : 'text-slate-400 text-sm'}>
                          {item.texto}
                          {item.descricao && (
                            <span className="block text-slate-500 text-xs mt-0.5 font-normal">{item.descricao}</span>
                          )}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <button
                    type="button"
                    onClick={() => setPlanoSelecionado(plano)}
                    className="mt-6 w-full rounded-xl py-3 px-4 text-center text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                  >
                    {plano.cta}
                  </button>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t border-slate-200 bg-slate-50/50">
        <div className="mx-auto max-w-6xl px-6 py-8 md:py-10">
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="space-y-2 min-w-0 md:max-w-md">
              <p className="text-lg font-semibold tracking-tight text-slate-900">Grit Run</p>
              <p className="text-sm font-medium text-slate-700">
                Copyright © {new Date().getFullYear()} Grit Softwares
              </p>
              <p className="text-sm text-slate-600">Todos os Direitos Reservados</p>
            </div>
            <div className="space-y-3 shrink-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">
                Ficou com alguma dúvida?
              </h3>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a
                  href="mailto:contato@gritsoftwares.com.br"
                  className="text-sm text-slate-600 hover:text-sky-600 transition break-all"
                >
                  contato@gritsoftwares.com.br
                </a>
                <a
                  href={WHATSAPP_LINK}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-slate-600 hover:text-sky-600 transition"
                >
                  +55 48 98817-7698
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
