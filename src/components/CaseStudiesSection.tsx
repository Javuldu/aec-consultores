import React, { useState } from 'react';
import { CASE_STUDIES } from '../data/aecData';
import { 
  Building2, 
  MapPin, 
  Clock, 
  CheckCircle2, 
  Quote, 
  Award,
  ChevronLeft,
  ChevronRight
} from 'lucide-react';

interface CaseStudiesSectionProps {
  onOpenQuote: (sectorInfo?: string) => void;
}

export const CaseStudiesSection: React.FC<CaseStudiesSectionProps> = ({ onOpenQuote }) => {
  const [activeIdx, setActiveIdx] = useState<number>(0);

  const activeCase = CASE_STUDIES[activeIdx];

  return (
    <section id="casos-exito" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Award className="w-3.5 h-3.5 text-blue-700" />
            <span>Resultados Comprobados</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Casos de Éxito en Sectores Estratégicos
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Descubra cómo organizaciones líderes en minería, tecnología, agroindustria y educación han certificado sus procesos con 100% de éxito.
          </p>
        </div>

        {/* Case Study Featured Card */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden mb-10">
          <div className="p-6 sm:p-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            {/* Left Content */}
            <div className="lg:col-span-7 space-y-6">
              {/* Badge info */}
              <div className="flex flex-wrap items-center gap-3">
                <span className="px-3 py-1 rounded-md text-xs font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
                  {activeCase.standardApplied}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <MapPin className="w-3.5 h-3.5 text-blue-600" />
                  {activeCase.region}
                </span>
                <span className="flex items-center gap-1 text-xs text-slate-500 font-medium">
                  <Clock className="w-3.5 h-3.5 text-indigo-600" />
                  {activeCase.completionTime}
                </span>
              </div>

              <h3 className="text-2xl font-bold text-slate-900">
                {activeCase.clientSector}
              </h3>

              {/* Challenge & Solution */}
              <div className="space-y-3 text-xs sm:text-sm text-slate-600">
                <p>
                  <strong className="text-slate-900 block mb-1 font-semibold">El Desafío:</strong>
                  {activeCase.challenge}
                </p>
                <p>
                  <strong className="text-blue-700 block mb-1 font-semibold">Solución AEC Hin Shitsu:</strong>
                  {activeCase.solution}
                </p>
              </div>

              {/* Measured Results */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-2">
                <span className="text-xs font-bold uppercase tracking-wider text-emerald-800 block mb-1">
                  Impacto Cuantificado:
                </span>
                {activeCase.results.map((res, i) => (
                  <div key={i} className="flex items-start gap-2 text-xs text-slate-700 font-medium">
                    <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                    <span>{res}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Right Testimonial */}
            <div className="lg:col-span-5 flex flex-col justify-between h-full bg-slate-50 p-6 sm:p-8 rounded-2xl border border-slate-200 space-y-6">
              <div className="space-y-4">
                <Quote className="w-8 h-8 text-blue-600" />
                <p className="text-sm italic text-slate-700 leading-relaxed font-normal">
                  "{activeCase.quote.text}"
                </p>
              </div>

              <div className="pt-4 border-t border-slate-200">
                <div className="font-bold text-slate-900 text-sm">{activeCase.quote.author}</div>
                <div className="text-xs text-blue-700 font-semibold">{activeCase.quote.role}</div>
                <div className="text-[11px] text-slate-500">{activeCase.clientSector}</div>
              </div>
            </div>
          </div>

          {/* Navigation Bar inside the case card */}
          <div className="px-6 py-4 bg-slate-50 border-t border-slate-200 flex items-center justify-between">
            <div className="flex items-center gap-2">
              {CASE_STUDIES.map((_, idx) => (
                <button
                  key={idx}
                  onClick={() => setActiveIdx(idx)}
                  className={`w-3 h-3 rounded-full transition-all ${
                    activeIdx === idx ? 'bg-blue-700 w-8' : 'bg-slate-300 hover:bg-slate-400'
                  }`}
                  aria-label={`Ver caso ${idx + 1}`}
                />
              ))}
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={() => setActiveIdx((prev) => (prev > 0 ? prev - 1 : CASE_STUDIES.length - 1))}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
                aria-label="Caso anterior"
              >
                <ChevronLeft className="w-4 h-4" />
              </button>
              <span className="text-xs text-slate-500 font-mono font-medium">
                {activeIdx + 1} / {CASE_STUDIES.length}
              </span>
              <button
                onClick={() => setActiveIdx((prev) => (prev < CASE_STUDIES.length - 1 ? prev + 1 : 0))}
                className="p-2 rounded-lg bg-white hover:bg-slate-100 text-slate-700 border border-slate-200 transition-colors"
                aria-label="Caso siguiente"
              >
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Quick Sector Selector Carousel Buttons */}
        <div className="grid grid-cols-2 sm:grid-cols-4 gap-3 max-w-4xl mx-auto">
          {CASE_STUDIES.map((cs, idx) => (
            <button
              key={cs.id}
              onClick={() => setActiveIdx(idx)}
              className={`p-3 rounded-xl text-left border transition-all text-xs font-semibold ${
                activeIdx === idx
                  ? 'bg-blue-50 border-blue-600 text-blue-900 ring-1 ring-blue-600'
                  : 'bg-white border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-50'
              }`}
            >
              <div className="text-[10px] text-blue-700 font-mono font-bold mb-1">{cs.region}</div>
              <div className="line-clamp-1">{cs.clientSector}</div>
            </button>
          ))}
        </div>
      </div>
    </section>
  );
};
