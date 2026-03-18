import React, { Component, type ReactNode } from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import './index.css';

class ErrorBoundary extends Component<{ children: ReactNode }, { hasError: boolean; error: Error | null }> {
  state = { hasError: false, error: null as Error | null };

  static getDerivedStateFromError(error: Error) {
    return { hasError: true, error };
  }

  render() {
    if (this.state.hasError && this.state.error) {
      return (
        <div style={{ padding: 24, fontFamily: 'system-ui', maxWidth: 600, margin: '40px auto', background: '#fef2f2', border: '1px solid #fecaca', borderRadius: 8 }}>
          <h1 style={{ color: '#b91c1c', marginBottom: 8 }}>Algo deu errado</h1>
          <pre style={{ overflow: 'auto', fontSize: 12 }}>{this.state.error.message}</pre>
          <pre style={{ overflow: 'auto', fontSize: 11, marginTop: 8, color: '#666' }}>{this.state.error.stack}</pre>
        </div>
      );
    }
    return this.props.children;
  }
}

const rootElement = document.getElementById('root');

if (!rootElement) {
  throw new Error('Não foi possível encontrar o elemento root');
}

ReactDOM.createRoot(rootElement).render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>,
);

