import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { KnowledgeHub } from '../components/KnowledgeHub';
import { BookOpen, FileText, Download, ShieldCheck, Sparkles } from 'lucide-react';

interface KnowledgePageProps {
  onNavigate: (page: string) => void;
}

export const KnowledgePage: React.FC<KnowledgePageProps> = ({ onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Centro de Recursos & Descargas" onNavigate={onNavigate} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Biblioteca Técnica & Material Descargable</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Centro de Conocimiento & Guías Técnicas
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Acceda gratuitamente a nuestras guías metodológicas, checklists de auto-evaluación y manuales normativos preparados por auditores líderes.
          </p>
        </div>

        {/* Knowledge Hub Component */}
        <KnowledgeHub />
      </div>
    </div>
  );
};
