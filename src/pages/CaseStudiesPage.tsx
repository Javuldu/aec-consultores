import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { CASE_STUDIES, COMPANY_INFO } from '../data/aecData';
import { 
  Building2, 
  MapPin, 
  Clock, 
  Award, 
  CheckCircle2, 
  Quote, 
  ShieldCheck, 
  ArrowRight,
  TrendingUp
} from 'lucide-react';

interface CaseStudiesPageProps {
  onOpenQuote: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const CaseStudiesPage: React.FC<CaseStudiesPageProps> = ({
  onOpenQuote,
  onNavigate
}) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Casos de Éxito & Resultados" onNavigate={onNavigate} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Casos Reales Documentados</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Historias de Éxito & Resultados Comprobables
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Conozca cómo empresas líderes en Minería, Software, Agroindustria y Capacitación alcanzaron su certificación con 100% de éxito.
          </p>
        </div>

        {/* Metrics Bar */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-16">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-emerald-600 font-mono">100%</span>
            <p className="text-xs text-slate-500 font-medium mt-1">Aprobación en 1ª Auditoría</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-blue-700 font-mono">+{COMPANY_INFO.stats.projectsCompleted}</span>
            <p className="text-xs text-slate-500 font-medium mt-1">Sistemas Certificados</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-indigo-700 font-mono">3.8 Meses</span>
            <p className="text-xs text-slate-500 font-medium mt-1">Tiempo Promedio a Certificación</p>
          </div>
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm text-center">
            <span className="text-3xl sm:text-4xl font-extrabold text-cyan-700 font-mono">0</span>
            <p className="text-xs text-slate-500 font-medium mt-1">No-Conformidades Mayores</p>
          </div>
        </div>

        {/* Case Studies Detailed Cards */}
        <div className="space-y-8 mb-16">
          {CASE_STUDIES.map((cs) => (
            <div
              key={cs.id}
              className="p-6 sm:p-10 rounded-3xl bg-white border border-slate-200 shadow-md space-y-6"
            >
              <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4 pb-4 border-b border-slate-100">
                <div className="space-y-1.5">
                  <div className="flex flex-wrap items-center gap-2">
                    <span className="px-3 py-1 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-xs font-bold font-mono">
                      {cs.standardApplied}
                    </span>
                    <span className="inline-flex items-center gap-1 text-xs text-slate-500 font-medium">
                      <MapPin className="w-3.5 h-3.5 text-slate-400" />
                      {cs.region}
                    </span>
                  </div>
                  <h2 className="text-xl sm:text-2xl font-bold text-slate-900">
                    {cs.clientSector}
                  </h2>
                </div>

                <div className="flex items-center gap-3">
                  <span className="text-xs text-slate-500 font-medium flex items-center gap-1 bg-slate-50 px-3 py-1.5 rounded-xl border border-slate-200">
                    <Clock className="w-3.5 h-3.5 text-blue-600" />
                    Plazo: <strong>{cs.completionTime}</strong>
                  </span>
                  <button
                    onClick={() => onOpenQuote(cs.standardApplied)}
                    className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-sm transition-all"
                  >
                    Cotizar Caso Similar
                  </button>
                </div>
              </div>

              {/* Challenge & Solution */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-rose-800">El Desafío</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cs.challenge}
                  </p>
                </div>

                <div className="p-5 rounded-2xl bg-slate-50 border border-slate-200 space-y-2">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-800">La Solución AEC</span>
                  <p className="text-xs sm:text-sm text-slate-700 leading-relaxed">
                    {cs.solution}
                  </p>
                </div>
              </div>

              {/* Measurable Results */}
              <div className="p-5 rounded-2xl bg-emerald-50/50 border border-emerald-200 space-y-3">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-900 flex items-center gap-2">
                  <TrendingUp className="w-4 h-4 text-emerald-700" />
                  Resultados Clave Medidos:
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
                  {cs.results.map((res, rIdx) => (
                    <div key={rIdx} className="p-3 rounded-xl bg-white border border-emerald-200 text-xs text-slate-800 font-medium flex items-start gap-2 shadow-xs">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{res}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Direct Client Testimonial */}
              <div className="p-5 rounded-2xl bg-slate-900 text-white space-y-3">
                <Quote className="w-6 h-6 text-blue-400 opacity-70" />
                <p className="text-xs sm:text-sm text-slate-200 italic leading-relaxed">
                  "{cs.quote.text}"
                </p>
                <div className="pt-2 border-t border-slate-800 flex items-center justify-between text-xs">
                  <span className="font-bold text-white">{cs.quote.author}</span>
                  <span className="text-slate-400">{cs.quote.role}</span>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Certifying Bodies Grid */}
        <div className="bg-white p-8 sm:p-10 rounded-3xl border border-slate-200 shadow-sm text-center space-y-6">
          <span className="text-xs font-bold uppercase tracking-wider text-slate-500">
            Casas Certificadoras Internacionales con las que Interactuamos
          </span>
          <p className="text-xs sm:text-sm text-slate-600 max-w-2xl mx-auto">
            Preparamos a su empresa para aprobar sin observaciones frente a los organismos de certificación acreditados por IAF e INN:
          </p>

          <div className="flex flex-wrap items-center justify-center gap-6 pt-2">
            <span className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
              Bureau Veritas
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
              AENOR Internacional
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
              SGS Certificación
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
              TÜV Rheinland
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
              ICONTEC Internacional
            </span>
            <span className="px-5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 font-bold text-xs text-slate-800">
              Lloyd's Register (LRQA)
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};
