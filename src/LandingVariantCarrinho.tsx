import { Component, type ErrorInfo, type ReactNode } from 'react';

const PLANS = [
  { id: 'diamante', name: 'Diamante', badge: 'Maior Vantagem', price: '12 x R$ 39,90', duration: '12 meses de acesso', billing: 'Cobrança única parcelada em 12x', highlight: true, features: [{ included: true, text: 'Gestão de Treinos', description: 'Com o nosso aplicativo, você gerencia os treinos de alunos presenciais e online em poucos cliques.' }, { included: true, text: 'Alunos Ilimitados' }, { included: true, text: '+ 1000 Vídeos de Exercícios' }, { included: true, text: 'Mentoria Mensal Ao Vivo' }, { included: true, text: 'Comunidade Arena' }, { included: true, text: 'R$ 943,00 em bônus' }, { included: true, text: 'I.A.GO' }, { included: true, text: 'OPD Academy' }], cta: 'Assinar Agora', paymentLink: 'https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t' },
  { id: 'anual', name: 'Anual', price: 'R$ 39,90/mês', duration: '12 meses de acesso', billing: 'Cobrança renovada mensalmente', highlight: false, features: [{ included: true, text: 'Gestão de Treinos', description: 'Gerencie treinos de alunos presenciais e online em poucos cliques.' }, { included: true, text: 'Alunos Ilimitados' }, { included: true, text: '+ 1000 Vídeos de Exercícios' }, { included: true, text: 'Mentoria Mensal Ao Vivo' }, { included: true, text: 'Comunidade Arena' }, { included: true, text: 'R$ 943,00 em bônus' }, { included: false, text: 'I.A.GO' }, { included: false, text: 'OPD Academy' }], cta: 'Assinar Agora', paymentLink: 'https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t' },
  { id: 'trimestral', name: 'Trimestral', price: 'R$ 49,90/mês', duration: '3 meses de acesso', billing: 'Cobrança renovada mensalmente', highlight: false, features: [{ included: true, text: 'Gestão de Treinos' }, { included: true, text: 'Até 50 alunos' }, { included: true, text: '+ 1000 Vídeos de Exercícios' }, { included: true, text: 'Mentoria Mensal Ao Vivo' }, { included: true, text: 'Comunidade Arena' }, { included: true, text: 'R$ 297,00 em bônus' }, { included: false, text: 'I.A.GO' }, { included: false, text: 'OPD Academy' }], cta: 'Assinar Agora', paymentLink: 'https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t' },
  { id: 'mensal', name: 'Mensal', price: 'R$ 69,90/mês', duration: '1 mês de acesso', billing: 'Cobrança renovada mensalmente', highlight: false, features: [{ included: true, text: 'Gestão de Treinos' }, { included: true, text: 'Até 20 alunos' }, { included: true, text: '+ 1000 Vídeos de Exercícios' }, { included: true, text: 'Mentoria Mensal Ao Vivo' }, { included: false, text: 'Comunidade Arena' }, { included: false, text: 'R$ 943,00 em bônus' }, { included: false, text: 'I.A.GO' }, { included: false, text: 'OPD Academy' }], cta: 'Assinar Agora', paymentLink: 'https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t' },
];

class CarrinhoErrorBoundary extends Component<{ children: ReactNode }, { error: Error | null }> {
  state = { error: null as Error | null };
  static getDerivedStateFromError(error: Error) {
    return { error };
  }
  componentDidCatch(error: Error, info: ErrorInfo) {
    console.error('LandingVariantCarrinho error:', error, info);
  }
  render() {
    if (this.state.error) {
      return (
        <div style={{ minHeight: '100vh', background: '#f1f5f9', padding: 24, display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', color: '#1e293b' }}>
          <h1 style={{ fontSize: 20, fontWeight: 600, color: '#dc2626', marginBottom: 8 }}>Erro na página do carrinho</h1>
          <pre style={{ fontSize: 12, background: '#fff', padding: 16, border: '1px solid #e2e8f0', overflow: 'auto', maxWidth: 560 }}>
            {this.state.error.message}
          </pre>
          <a href="/" style={{ marginTop: 16, color: '#0284c7', textDecoration: 'underline' }}>Voltar ao início</a>
        </div>
      );
    }
    return this.props.children;
  }
}

const pageWrap = { minHeight: '100vh', backgroundColor: '#e2e8f0', color: '#0f172a', fontFamily: 'system-ui, sans-serif' };
const bar = { backgroundColor: '#0284c7', color: 'white', textAlign: 'center' as const, padding: '8px 16px', fontSize: 14, fontWeight: 600 };
const mainWrap = { maxWidth: 1152, margin: '0 auto', padding: '24px 16px' };
const title = { fontSize: 28, fontWeight: 700, color: '#0f172a', marginBottom: 24 };

export default function LandingVariantCarrinho() {
  return (
    <CarrinhoErrorBoundary>
      <div style={pageWrap}>
        <div style={bar}>
          Página Carrinho – Escolha o seu plano abaixo
        </div>
        <main>
          <section id="planos" style={{ backgroundColor: '#fff', padding: '48px 0', borderBottom: '2px solid #bae6fd' }}>
            <div style={mainWrap}>
              <div style={{ textAlign: 'center', marginBottom: 40 }}>
                <h2 style={title}>
                  Escolha o <span style={{ color: '#0284c7' }}>seu</span> plano:
                </h2>
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center mt-6 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-8 py-3.5 text-base shadow-lg transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Testar por 7 dias grátis
                </a>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-4">
                {PLANS.map((plan) => (
                <article key={plan.id} className={`relative flex flex-col rounded-2xl border-2 bg-white p-5 sm:p-6 shadow-md transition hover:shadow-lg ${plan.highlight ? 'border-sky-400 shadow-sky-100 ring-2 ring-sky-200/50' : 'border-slate-200'}`}>
                  {'badge' in plan && plan.badge && <div className="absolute -top-3 left-4 px-3 py-1 rounded-md bg-sky-600 text-white text-xs font-semibold shadow">{plan.badge}</div>}
                  <p className="text-sm font-semibold uppercase tracking-wider text-slate-600 mt-1">{plan.name}</p>
                  <p className="mt-3 text-xl sm:text-2xl font-bold text-sky-600">{plan.price}</p>
                  <p className="mt-1 text-sm text-slate-600">{plan.duration}</p>
                  <p className="text-xs text-slate-500">{plan.billing}</p>
                  <ul className="mt-6 flex-1 space-y-3 text-left">
                    {plan.features.map((f, i) => (
                      <li key={i} className="flex items-start gap-2">
                        {f.included ? (
                          <span className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-emerald-500 text-white" aria-hidden><svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={3}><path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" /></svg></span>
                        ) : (
                          <span className="mt-0.5 shrink-0 flex h-5 w-5 items-center justify-center rounded-full bg-red-100 text-red-500" aria-hidden><svg className="h-3 w-3" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2.5}><path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" /></svg></span>
                        )}
                        <span className={f.included ? 'text-slate-700 text-sm' : 'text-slate-400 text-sm'}>
                          {f.text}
                          {'description' in f && f.description && <span className="block text-slate-500 text-xs mt-0.5 font-normal">{f.description}</span>}
                        </span>
                      </li>
                    ))}
                  </ul>
                  <a href={plan.paymentLink} target="_blank" rel="noopener noreferrer" className="mt-6 w-full rounded-xl py-3 px-4 text-center text-sm font-semibold bg-emerald-600 text-white hover:bg-emerald-700 transition">{plan.cta}</a>
                </article>
              ))}
            </div>
          </div>
        </section>

        {/* Hero Carrinho */}
        <section id="hero" style={{ backgroundColor: '#f0f9ff', padding: '64px 24px' }}>
          <div style={{ maxWidth: 896, margin: '0 auto', textAlign: 'center' }}>
            <div className="flex flex-col items-center text-center">
              <div className="inline-flex items-center gap-2 px-4 py-2 text-xs font-semibold uppercase tracking-wide rounded-xl bg-sky-100 text-sky-700 border border-sky-200/50 shadow-sm mb-6">
                🛒 Carrinho
              </div>
              <h1 className="text-3xl font-semibold text-slate-800 sm:text-4xl md:text-5xl tracking-tight">
                Seu carrinho
              </h1>
              <p className="mt-4 text-slate-600 text-base sm:text-lg max-w-xl mx-auto">
                Revise seus itens e finalize sua compra.
              </p>
              <div className="mt-8 flex flex-wrap gap-4 justify-center">
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-semibold px-6 py-3 text-base shadow-lg transition focus:outline-none focus:ring-2 focus:ring-emerald-500 focus:ring-offset-2"
                >
                  Finalizar compra
                </a>
                <a
                  href="/"
                  className="inline-flex items-center justify-center gap-2 rounded-xl border border-slate-300 bg-white text-slate-700 font-semibold px-6 py-3 text-base hover:bg-slate-50 transition focus:outline-none focus:ring-2 focus:ring-sky-400 focus:ring-offset-2"
                >
                  Continuar comprando
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer style={{ borderTop: '1px solid #e2e8f0', backgroundColor: '#f8fafc', padding: '32px 24px' }}>
        <div style={{ maxWidth: 1152, margin: '0 auto' }}>
          <div className="flex flex-col gap-6 md:flex-row md:items-start md:justify-between md:gap-6">
            <div className="space-y-2 min-w-0 md:max-w-md">
              <p className="text-lg font-semibold tracking-tight text-slate-900">Grit Run</p>
              <p className="text-sm font-medium text-slate-700">Copyright © {new Date().getFullYear()} Grit Softwares</p>
              <p className="text-sm text-slate-600">Todos os Direitos Reservados</p>
            </div>
            <div className="space-y-3 shrink-0">
              <h3 className="text-sm font-semibold uppercase tracking-wider text-slate-900">Ficou com alguma dúvida?</h3>
              <div className="flex flex-col gap-3 sm:flex-row sm:gap-6">
                <a href="mailto:contato@gritsoftwares.com.br" className="group inline-flex items-center gap-2.5 text-sm text-slate-600 transition hover:text-sky-600">
                  contato@gritsoftwares.com.br
                </a>
                <a
                  href="https://chat.whatsapp.com/GIq22hKLqL6LfDiWqzUn64?mode=gi_t"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group inline-flex items-center gap-2.5 text-sm text-slate-600 transition hover:text-sky-600"
                >
                  +55 48 98817-7698
                </a>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </div>
    </CarrinhoErrorBoundary>
  );
}
