/**
 * Helpers e dados compartilhados entre as variantes da landing.
 */

import React from 'react';

export const scrollToSection = (sectionId: string) => {
  const element = document.getElementById(sectionId);
  if (element) {
    element.scrollIntoView({ behavior: 'smooth' });
  }
};

export const scrollNextViewport = () => {
  window.scrollTo({ top: window.scrollY + window.innerHeight * 0.9, behavior: 'smooth' });
};

export const ScrollHint = ({ className = '' }: { className?: string }) => (
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

export const ScrollHintMinimal = ({ className = '' }: { className?: string }) => (
  <button
    type="button"
    onClick={scrollNextViewport}
    className={`flex items-center justify-center w-10 h-10 rounded-full text-slate-400 hover:text-slate-600 focus:outline-none focus:ring-2 focus:ring-slate-300 focus:ring-offset-2 transition-colors ${className}`}
    aria-label="Ver mais conteúdo abaixo"
  >
    <svg className="w-5 h-5 animate-bounce" fill="none" stroke="currentColor" viewBox="0 0 24 24">
      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 14l-7 7m0 0l-7-7m7 7V3" />
    </svg>
  </button>
);

export const quemSomosData = [
  {
    image: '/quem-somos/escritorio.jpg',
    title: 'Cubo Itaú',
    description: 'Estivemos ao longo da jornada presentes nos maiores centros de inovação do Brasil',
  },
  {
    image: '/quem-somos/rafa-meia-maratona.jpg',
    title: 'Meia maratona SC21K',
    description: '',
  },
  {
    image: '/quem-somos/florianopolis.jpg',
    title: 'Florianópolis como inspiração',
    description: 'Criar tecnologia em um lugar que respira esporte (florianópolis) e vida saudável muda completamente o jeito de construir.',
  },
] as const;
