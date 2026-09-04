import React, { useState } from 'react';
import { STANDARDS_DATA } from '../data/aecData';
import { StandardItem } from '../types';
import { 
  ShieldCheck, 
  Search, 
  CheckCircle2, 
  Clock, 
  ArrowRight, 
  Tag
} from 'lucide-react';

interface StandardsExplorerProps {
  selectedCode?: string | null;
  onOpenQuote: (standardCode: string) => void;
}

export const StandardsExplorer: React.FC<StandardsExplorerProps> = ({
  selectedCode,
  onOpenQuote
}) => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas las Normas' },
    { id: 'calidad', label: 'Calidad & Procesos' },
    { id: 'ambiente', label: 'Medio Ambiente' },
    { id: 'seguridad', label: 'Seguridad & Salud' },
    { id: 'ciberseguridad', label: 'Ciberseguridad' },
    { id: 'inocuidad', label: 'Alimentos & HACCP' },
    { id: 'nch', label: 'Normas Chilenas (NCh)' },
    { id: 'gobierno', label: 'Compliance & Ética' },
  ];

  const filteredStandards = STANDARDS_DATA.filter((std) => {
    const matchesSearch = 
      std.code.toLowerCase().includes(searchTerm.toLowerCase()) ||
      std.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      std.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
      std.idealFor.some(i => i.toLowerCase().includes(searchTerm.toLowerCase()));

    const matchesCat = selectedCategory === 'todos' || std.category === selectedCategory;

    return matchesSearch && matchesCat;
  });

  const getTagBadgeClass = (color: string) => {
    switch (color) {
      case 'blue': return 'bg-blue-50 text-blue-800 border-blue-200';
      case 'emerald': return 'bg-emerald-50 text-emerald-800 border-emerald-200';
      case 'amber': return 'bg-amber-50 text-amber-900 border-amber-200';
      case 'cyan': return 'bg-cyan-50 text-cyan-800 border-cyan-200';
      case 'rose': return 'bg-rose-50 text-rose-800 border-rose-200';
      case 'purple': return 'bg-purple-50 text-purple-800 border-purple-200';
      case 'teal': return 'bg-teal-50 text-teal-800 border-teal-200';
      case 'indigo': return 'bg-indigo-50 text-indigo-800 border-indigo-200';
      default: return 'bg-slate-100 text-slate-800 border-slate-200';
    }
  };

  return (
    <section id="normas" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Tag className="w-3.5 h-3.5 text-blue-700" />
            <span>Guía de Normas & Estándares</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Catálogo de Certificaciones Internacionales & Nacionales
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Consulte los requisitos, tiempos de implementación y beneficios estratégicos de cada norma para su organización.
          </p>
        </div>

        {/* Search & Filter Bar */}
        <div className="flex flex-col md:flex-row items-center justify-between gap-4 mb-8">
          {/* Search Input */}
          <div className="relative w-full md:w-80">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
            <input
              type="text"
              placeholder="Buscar norma, rubro o beneficio..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
            />
          </div>

          {/* Categories */}
          <div className="flex flex-wrap items-center gap-1.5 w-full md:w-auto overflow-x-auto pb-2 md:pb-0">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => setSelectedCategory(cat.id)}
                className={`px-3 py-1.5 rounded-lg text-xs font-bold whitespace-nowrap transition-all ${
                  selectedCategory === cat.id
                    ? 'bg-blue-700 text-white shadow-sm'
                    : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>

        {/* Standards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-2 gap-6">
          {filteredStandards.map((std) => (
            <div
              key={std.code}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                {/* Badge and Code Header */}
                <div className="flex items-center justify-between mb-3">
                  <span className={`px-3 py-1 rounded-md text-xs font-mono font-bold border ${getTagBadgeClass(std.tagColor)}`}>
                    {std.code}
                  </span>
                  <span className="text-[11px] text-slate-500 flex items-center gap-1 font-medium">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {std.typicalTimeline}
                  </span>
                </div>

                <h3 className="text-xl font-bold text-slate-900 mb-1 group-hover:text-blue-700 transition-colors">
                  {std.name}
                </h3>
                <p className="text-xs text-blue-700 font-semibold mb-3">
                  {std.subtitle}
                </p>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  {std.description}
                </p>

                {/* Key Benefits */}
                <div className="space-y-2 mb-5 p-3.5 rounded-xl bg-slate-50 border border-slate-200">
                  <span className="text-[11px] font-bold uppercase tracking-wider text-slate-700 block mb-1.5">
                    Beneficios Clave:
                  </span>
                  {std.benefits.slice(0, 3).map((ben, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{ben}</span>
                    </div>
                  ))}
                </div>

                {/* Ideal for Sectors */}
                <div className="flex flex-wrap items-center gap-1.5 mb-6">
                  <span className="text-[11px] text-slate-500 mr-1">Ideal para:</span>
                  {std.idealFor.map((sec, idx) => (
                    <span key={idx} className="px-2.5 py-0.5 rounded text-[10px] font-semibold bg-slate-100 text-slate-700 border border-slate-200">
                      {sec}
                    </span>
                  ))}
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-100 flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
                <span className="text-xs text-emerald-700 font-bold flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Aprobación 100% Garantizada</span>
                </span>

                <button
                  onClick={() => onOpenQuote(`Implementación ${std.code}`)}
                  className="w-full sm:w-auto inline-flex items-center justify-center min-h-[42px] gap-1.5 px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm"
                >
                  <span>Cotizar Norma</span>
                  <ArrowRight className="w-3.5 h-3.5" />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filteredStandards.length === 0 && (
          <div className="text-center py-12 text-slate-500 text-sm">
            No se encontraron normas con los términos buscados. Intente con otra palabra clave o categoría.
          </div>
        )}
      </div>
    </section>
  );
};
