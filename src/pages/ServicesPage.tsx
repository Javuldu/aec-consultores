import React, { useState } from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { SERVICES_DATA, COMPANY_INFO } from '../data/aecData';
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
  FileText, 
  MessageSquare,
  Sparkles,
  Search,
  Filter,
  Calculator
} from 'lucide-react';

interface ServicesPageProps {
  onSelectServiceModal: (service: ServiceItem) => void;
  onOpenQuote: (serviceTitle?: string) => void;
  onOpenDiagnostic: () => void;
  onNavigate: (page: string) => void;
}

export const ServicesPage: React.FC<ServicesPageProps> = ({
  onSelectServiceModal,
  onOpenQuote,
  onOpenDiagnostic,
  onNavigate
}) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('todos');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const categories = [
    { id: 'todos', label: 'Todos los Servicios' },
    { id: 'iso', label: 'Normas ISO & SIG' },
    { id: 'auditoria', label: 'Auditorías de 1ª y 2ª Parte' },
    { id: 'capacitacion', label: 'Capacitación SENCE' },
    { id: 'normas-chilenas', label: 'Normas Chilenas (OTEC/SEREMI)' },
    { id: 'procesos', label: 'Reingeniería Lean Hin Shitsu' },
  ];

  const filteredServices = SERVICES_DATA.filter((service) => {
    const matchesCategory = selectedCategory === 'todos' || service.category === selectedCategory;
    const matchesSearch = 
      service.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.shortDescription.toLowerCase().includes(searchQuery.toLowerCase()) ||
      service.features.some(f => f.toLowerCase().includes(searchQuery.toLowerCase()));
    return matchesCategory && matchesSearch;
  });

  const getIcon = (iconName: string) => {
    switch (iconName) {
      case 'Award': return <Award className="w-6 h-6 text-blue-700" />;
      case 'Layers': return <Layers className="w-6 h-6 text-blue-700" />;
      case 'ShieldCheck': return <ShieldCheck className="w-6 h-6 text-blue-700" />;
      case 'GraduationCap': return <GraduationCap className="w-6 h-6 text-blue-700" />;
      case 'FileCheck': return <FileCheck className="w-6 h-6 text-blue-700" />;
      case 'TrendingUp': return <TrendingUp className="w-6 h-6 text-blue-700" />;
      default: return <Award className="w-6 h-6 text-blue-700" />;
    }
  };

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Servicios de Consultoría" onNavigate={onNavigate} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Portafolio Completo de Soluciones Corporativas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Servicios de Consultoría, Auditoría & Certificación
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Asesoría estratégica de alto nivel con garantía de aprobación contractual y acompañamiento presencial en cada etapa.
          </p>
        </div>

        {/* Search & Category Filter Bar */}
        <div className="bg-white p-4 sm:p-6 rounded-3xl border border-slate-200 shadow-sm mb-12 space-y-4">
          <div className="flex flex-col md:flex-row items-stretch md:items-center justify-between gap-4">
            <div className="relative flex-1">
              <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2" />
              <input
                type="text"
                placeholder="Buscar por servicio, norma o entregable..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs sm:text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
              />
            </div>

            <div className="flex items-center gap-2 overflow-x-auto pb-1 md:pb-0">
              <Filter className="w-4 h-4 text-slate-400 shrink-0 hidden sm:block" />
              <div className="flex items-center gap-1.5 flex-nowrap">
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
        </div>

        {/* Services In-Depth List */}
        <div className="space-y-8">
          {filteredServices.map((service, idx) => (
            <div
              key={service.id}
              className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 hover:border-blue-300 shadow-md transition-all space-y-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-start justify-between gap-6">
                {/* Left Header */}
                <div className="space-y-3 max-w-3xl">
                  <div className="flex flex-wrap items-center gap-2">
                    <div className="p-2.5 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
                      {getIcon(service.iconName)}
                    </div>
                    {service.badge && (
                      <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold">
                        {service.badge}
                      </span>
                    )}
                    <span className="text-xs text-slate-500 font-medium flex items-center gap-1.5">
                      <Clock className="w-3.5 h-3.5 text-slate-400" />
                      Estimación: <strong>{service.durationEstimate}</strong>
                    </span>
                  </div>

                  <h2 className="text-2xl font-bold text-slate-900">
                    {service.title}
                  </h2>

                  <p className="text-slate-600 text-sm leading-relaxed">
                    {service.fullDescription}
                  </p>
                </div>

                {/* Right Action buttons */}
                <div className="flex flex-row lg:flex-col items-center gap-3 shrink-0">
                  <button
                    onClick={() => onOpenQuote(service.title)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-5 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all"
                  >
                    <span>Cotizar Servicio</span>
                    <ArrowRight className="w-3.5 h-3.5" />
                  </button>

                  <button
                    onClick={() => onSelectServiceModal(service)}
                    className="w-full sm:w-auto inline-flex items-center justify-center gap-1.5 px-4 py-2.5 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-800 font-semibold text-xs border border-slate-200 transition-colors"
                  >
                    <span>Ver Ficha Técnica</span>
                  </button>
                </div>
              </div>

              {/* Scope & Deliverables Grid */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-4 border-t border-slate-100">
                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
                    <CheckCircle2 className="w-3.5 h-3.5 text-blue-700" />
                    Alcance del Proyecto:
                  </span>
                  <ul className="space-y-1.5 text-xs text-slate-700">
                    {service.features.map((feat, fIdx) => (
                      <li key={fIdx} className="flex items-start gap-2">
                        <span className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                <div className="p-4 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-indigo-800 flex items-center gap-1.5">
                    <FileText className="w-3.5 h-3.5 text-indigo-700" />
                    Entregables Tangibles:
                  </span>
                  <div className="grid grid-cols-1 gap-2">
                    {service.deliverables.map((deliv, dIdx) => (
                      <div key={dIdx} className="p-2 rounded-xl bg-white border border-slate-200 text-xs text-slate-700 flex items-center gap-2">
                        <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                        <span>{deliv}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Bottom Banner for Gap Analysis */}
        <div className="mt-16 p-8 rounded-3xl bg-gradient-to-r from-blue-900 to-slate-900 text-white flex flex-col md:flex-row items-center justify-between gap-6 shadow-xl">
          <div className="space-y-2 text-center md:text-left">
            <h3 className="text-xl font-bold">¿No está seguro de qué norma o servicio requiere su empresa?</h3>
            <p className="text-xs text-blue-100 max-w-xl leading-relaxed">
              Realice nuestro test interactivo de diagnóstico de brechas (Gap Analysis) en 3 minutos y reciba una evaluación técnica sin costo.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="px-5 py-3 rounded-xl bg-white hover:bg-slate-100 text-blue-900 text-xs font-bold shadow-md transition-all flex items-center gap-2"
            >
              <Calculator className="w-4 h-4 text-blue-700" />
              <span>Realizar Diagnóstico Gap Gratuito</span>
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
