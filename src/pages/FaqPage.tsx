import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { FaqSection } from '../components/FaqSection';
import { HelpCircle, MessageSquare, Phone } from 'lucide-react';
import { COMPANY_INFO } from '../data/aecData';

interface FaqPageProps {
  onOpenQuote: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const FaqPage: React.FC<FaqPageProps> = ({ onOpenQuote, onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Preguntas Frecuentes" onNavigate={onNavigate} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>Resolución de Dudas Frecuentes</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Preguntas Frecuentes sobre Certificaciones
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Respuestas directas sobre plazos, costos, franquicia SENCE, metodología Hin Shitsu y procesos de auditoría oficial.
          </p>
        </div>

        {/* Faq Section Component */}
        <FaqSection onOpenQuote={onOpenQuote} />
      </div>
    </div>
  );
};
