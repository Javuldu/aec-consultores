import React from 'react';
import { ChevronRight, Home } from 'lucide-react';

interface BreadcrumbsProps {
  currentPage: string;
  onNavigate: (page: string) => void;
  parentPage?: { name: string; id: string };
}

export const Breadcrumbs: React.FC<BreadcrumbsProps> = ({ currentPage, onNavigate, parentPage }) => {
  return (
    <nav className="flex flex-wrap items-center gap-1.5 sm:gap-2 text-xs text-slate-500 py-2 sm:py-3 mb-4 sm:mb-6" aria-label="Breadcrumb">
      <button 
        onClick={() => onNavigate('inicio')}
        className="flex items-center gap-1 hover:text-blue-700 font-medium transition-colors"
      >
        <Home className="w-3.5 h-3.5" />
        <span>Inicio</span>
      </button>

      {parentPage && (
        <>
          <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
          <button
            onClick={() => onNavigate(parentPage.id)}
            className="hover:text-blue-700 font-medium transition-colors"
          >
            {parentPage.name}
          </button>
        </>
      )}

      <ChevronRight className="w-3.5 h-3.5 text-slate-400" />
      <span className="text-slate-900 font-semibold">{currentPage}</span>
    </nav>
  );
};
