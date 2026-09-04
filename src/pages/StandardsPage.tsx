import React, { useState, useEffect } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { STANDARDS_DATA, COMPANY_INFO } from '../data/aecData';
import { StandardItem } from '../types';
import { 
  Award, 
  Search, 
  CheckCircle2, 
  Clock, 
  Users, 
  BookOpen, 
  ShieldCheck, 
  ArrowRight, 
  FileCheck2,
  Filter,
  MessageSquare
} from 'lucide-react';

interface StandardsPageProps {
  initialStandardCode?: string | null;
  onOpenQuote: (standardTitle?: string) => void;
  onOpenDiagnostic: () => void;
  onNavigate: (page: string) => void;
}

export const StandardsPage: React.FC<StandardsPageProps> = ({
  initialStandardCode,
  onOpenQuote,
  onOpenDiagnostic,
  onNavigate
}) => {
  const [selectedStandard, setSelectedStandard] = useState<StandardItem>(
    STANDARDS_DATA.find(s => s.code === initialStandardCode) || STANDARDS_DATA[0]
  );
  const [searchQuery, setSearchQuery] = useState<string>('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  useEffect(() => {
    if (initialStandardCode) {
      const found = STANDARDS_DATA.find(s => s.code === initialStandardCode);
      if (found) setSelectedStandard(found);
    }
  }, [initialStandardCode]);

  const categories = [
    { id: 'todos', label: 'Todas las Normas' },
    { id: 'calidad', label: 'Calidad (ISO 9001)' },
    { id: 'ambiente', label: 'Medio Ambiente (ISO 14001)' },
    { id: 'seguridad', label: 'Seguridad y Salud (ISO 45001)' },
    { id: 'ciberseguridad', label: 'Ciberseguridad (ISO 27001)' },
    { id: 'inocuidad', label: 'Alimentos (ISO 22000/HACCP)' },
    { id: 'nch', label: 'Normas Chilenas NCh' },
    { id: 'gobierno', label: 'Antisoborno (ISO 37001)' },
  ];

  const filteredStandards = STANDARDS_DATA.filter((std) => {
    const matchesCategory = selectedCategory === 'todos' || std.category === selectedCategory;
    const matchesSearch = 
      std.code.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.description.toLowerCase().includes(searchQuery.toLowerCase()) ||
      std.idealFor.some(ind => ind.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Catálogo de Normas ISO & NCh" onNavigate={onNavigate} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Directorio de Normas & Estándares Internacionales</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Catálogo de Certificaciones ISO & Normas Chilenas
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Consulte los requisitos clave, sectores prioritarios, cláusulas y plazos estimados para cada norma técnica internacional.
          </p>
        </div>

        {/* Search & Category Pills */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm mb-10 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por código (ej. ISO 9001, NCh 2728), rubro o beneficio..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-1.5 overflow-x-auto pb-1 md:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat.id}
                  onClick={() => setSelectedCategory(cat.id)}
                  className={`px-3 py-2 rounded-xl text-xs font-bold whitespace-nowrap transition-all ${
                    selectedCategory === cat.id
                      ? 'bg-blue-700 text-white shadow-sm'
                      : 'bg-slate-50 text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
                  }`}
                >
                  {cat.label}
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Two-Column Explorer Layout */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
          {/* Left Column: Standards Selector (5 Cols) */}
          <div className="lg:col-span-5 space-y-3">
            <span className="text-xs font-bold text-slate-500 uppercase tracking-wider block px-1">
              Estándares Disponibles ({filteredStandards.length})
            </span>

            <div className="space-y-2.5 max-h-[750px] overflow-y-auto pr-1">
              {filteredStandards.map((std) => {
                const isSelected = selectedStandard.code === std.code;
                return (
                  <button
                    key={std.code}
                    onClick={() => setSelectedStandard(std)}
                    className={`w-full text-left p-4 rounded-2xl border transition-all flex flex-col justify-between ${
                      isSelected
                        ? 'bg-white border-blue-600 shadow-md ring-1 ring-blue-600'
                        : 'bg-white border-slate-200 hover:border-slate-300 hover:bg-slate-50/50'
                    }`}
                  >
                    <div className="flex items-center justify-between gap-2 mb-1.5">
                      <span className={`font-mono font-bold text-sm ${isSelected ? 'text-blue-700' : 'text-slate-900'}`}>
                        {std.code}
                      </span>
                      <span className="text-[11px] font-semibold text-slate-500 bg-slate-100 px-2 py-0.5 rounded-full border border-slate-200">
                        {std.typicalTimeline}
                      </span>
                    </div>
                    <h3 className="text-xs font-semibold text-slate-700 mb-1 leading-snug">
                      {std.name}
                    </h3>
                    <p className="text-[11px] text-slate-500 line-clamp-2 leading-relaxed">
                      {std.subtitle}
                    </p>
                  </button>
                );
              })}
            </div>
          </div>

          {/* Right Column: Selected Standard Full Sheet (7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl space-y-6">
              {/* Header */}
              <div className="flex flex-col sm:flex-row sm:items-start justify-between gap-4 pb-6 border-b border-slate-100">
                <div className="space-y-2">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold font-mono">
                    <Award className="w-3.5 h-3.5" />
                    <span>{selectedStandard.code}</span>
                  </div>
                  <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 leading-tight">
                    {selectedStandard.name}
                  </h2>
                  <p className="text-xs sm:text-sm text-slate-500 font-medium">
                    {selectedStandard.subtitle}
                  </p>
                </div>

                <div className="p-3 rounded-2xl bg-slate-50 border border-slate-200 text-center shrink-0">
                  <span className="text-[10px] text-slate-400 font-bold uppercase block">Plazo Estimado</span>
                  <span className="text-sm font-extrabold text-blue-700 font-mono block mt-0.5">
                    {selectedStandard.typicalTimeline}
                  </span>
                </div>
              </div>

              {/* Description */}
              <div className="space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-slate-400">Descripción del Estándar</span>
                <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                  {selectedStandard.description}
                </p>
              </div>

              {/* Business Benefits */}
              <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-3">
                <h3 className="text-xs font-bold uppercase tracking-wider text-blue-900 flex items-center gap-2">
                  <CheckCircle2 className="w-4 h-4 text-blue-700" />
                  Beneficios Comerciales & Operacionales:
                </h3>
                <ul className="space-y-2 text-xs sm:text-sm text-slate-700">
                  {selectedStandard.benefits.map((benefit, bIdx) => (
                    <li key={bIdx} className="flex items-start gap-2.5">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                      <span>{benefit}</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Key Clauses & Industries */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-900 flex items-center gap-1.5">
                    <BookOpen className="w-3.5 h-3.5 text-indigo-700" />
                    Cláusulas & Focos Clave:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedStandard.keyClauses.map((clause, cIdx) => (
                      <span key={cIdx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-700">
                        {clause}
                      </span>
                    ))}
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-1.5">
                    <Users className="w-3.5 h-3.5 text-emerald-700" />
                    Sectores Recomendados:
                  </span>
                  <div className="flex flex-wrap gap-1.5 pt-1">
                    {selectedStandard.idealFor.map((ind, iIdx) => (
                      <span key={iIdx} className="px-2.5 py-1 rounded-lg bg-white border border-slate-200 text-[11px] font-medium text-slate-700">
                        {ind}
                      </span>
                    ))}
                  </div>
                </div>
              </div>

              {/* Action bar */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-center justify-between gap-3">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hola AEC Consultores, deseo cotizar la implementación de la norma ${selectedStandard.code} (${selectedStandard.name}).`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
                  <span>Consultar por WhatsApp</span>
                </a>

                <button
                  onClick={() => onOpenQuote(selectedStandard.code)}
                  className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all"
                >
                  <span>Solicitar Propuesta para {selectedStandard.code}</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
