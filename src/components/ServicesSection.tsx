import React, { useState } from 'react';
import { SERVICES_DATA } from '../data/aecData';
import { ServiceItem } from '../types';
import { 
  Award, 
  Layers, 
  ShieldCheck, 
  GraduationCap, 
  FileCheck, 
  TrendingUp, 
  CheckCircle2, 
  Clock, 
  ArrowRight,
  Sparkles,
  Briefcase
} from 'lucide-react';

interface ServicesSectionProps {
  onSelectService: (service: ServiceItem) => void;
  onOpenQuote: (serviceTitle?: string) => void;
}

export const ServicesSection: React.FC<ServicesSectionProps> = ({
  onSelectService,
  onOpenQuote
}) => {
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'iso', label: 'Normas ISO & SIG' },
    { id: 'auditoria', label: 'Auditorías Independientes' },
    { id: 'capacitacion', label: 'Capacitación SENCE' },
    { id: 'normas-chilenas', label: 'Normas Chilenas NCh' },
    { id: 'procesos', label: 'Optimización de Procesos' },
  ];

  const filteredServices = activeCategory === 'todos'
    ? SERVICES_DATA
    : SERVICES_DATA.filter(s => s.category === activeCategory);

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-5 h-5 text-blue-700" />;
      case 'Layers': return <Layers className="w-5 h-5 text-blue-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-5 h-5 text-blue-700" />;
      case 'GraduationCap': return <GraduationCap className="w-5 h-5 text-blue-700" />;
      case 'FileCheck': return <FileCheck className="w-5 h-5 text-blue-700" />;
      case 'TrendingUp': return <TrendingUp className="w-5 h-5 text-blue-700" />;
      default: return <Award className="w-5 h-5 text-blue-700" />;
    }
  };

  return (
    <section id="servicios" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Briefcase className="w-3.5 h-3.5 text-blue-700" />
            <span>Portafolio de Especialidad AEC</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Servicios Integrales de Consultoría, Auditoría y Capacitación
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Soluciones estructuradas para garantizar la conformidad normativa, optimizar costos y certificar su empresa con consultores senior certificados internacionalmente.
          </p>
        </div>

        {/* Category Filter Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-700 text-white shadow-md shadow-blue-700/20'
                  : 'bg-slate-100 text-slate-700 hover:text-slate-900 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Services Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredServices.map((service) => (
            <div
              key={service.id}
              className="relative rounded-2xl bg-white border border-slate-200 p-6 flex flex-col justify-between hover:border-blue-400 hover:shadow-lg transition-all group"
            >
              <div>
                {/* Header row */}
                <div className="flex items-start justify-between mb-4">
                  <div className="p-3 rounded-xl bg-blue-50 border border-blue-100 group-hover:bg-blue-600 group-hover:text-white transition-all">
                    {getIcon(service.iconName)}
                  </div>
                  {service.badge && (
                    <span className="px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold">
                      {service.badge}
                    </span>
                  )}
                </div>

                {/* Title & Description */}
                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {service.title}
                </h3>
                <p className="text-xs text-slate-600 mb-5 leading-relaxed">
                  {service.shortDescription}
                </p>

                {/* Feature highlights */}
                <div className="space-y-2 mb-6 pt-3 border-t border-slate-100">
                  {service.features.slice(0, 3).map((feat, idx) => (
                    <div key={idx} className="flex items-start gap-2 text-xs text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span className="line-clamp-2">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Action buttons & duration */}
              <div className="pt-4 border-t border-slate-100 space-y-3">
                <div className="flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    {service.durationEstimate}
                  </span>
                  <span className="text-emerald-700 font-bold flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    100% Garantizado
                  </span>
                </div>

                <div className="grid grid-cols-2 gap-2">
                  <button
                    onClick={() => onSelectService(service)}
                    className="w-full py-2.5 px-3 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 text-xs font-bold border border-slate-200 transition-colors text-center"
                  >
                    Ver Alcance
                  </button>
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="w-full py-2.5 px-3 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-all flex items-center justify-center gap-1 group/btn"
                  >
                    <span>Cotizar</span>
                    <ArrowRight className="w-3 h-3 group-hover/btn:translate-x-0.5 transition-transform" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Custom Requirements Callout */}
        <div className="mt-12 p-8 rounded-2xl bg-gradient-to-r from-slate-900 via-blue-950 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <div className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-blue-800/60 border border-blue-500/40 text-blue-200 text-[11px] font-bold">
              <Sparkles className="w-3 h-3 text-blue-300" />
              <span>Planes Corporativos a la Medida</span>
            </div>
            <h3 className="text-xl font-bold text-white">
              ¿Tiene requerimientos específicos o licitaciones complejas?
            </h3>
            <p className="text-xs text-slate-300 max-w-2xl leading-relaxed">
              Nuestros consultores senior diseñan planes a la medida para consorcios, multi-plantas, matrices internacionales y plazos acelerados.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Propuesta a Medida para Empresa')}
            className="shrink-0 px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-slate-900 font-bold text-xs shadow-lg transition-all transform hover:-translate-y-0.5"
          >
            Solicitar Asesoría a la Medida
          </button>
        </div>
      </div>
    </section>
  );
};
