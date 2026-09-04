import React, { useState } from 'react';
import { HIN_SHITSU_PILLARS } from '../data/aecData';
import { 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  ShieldCheck, 
  FileX, 
  Zap, 
  Compass
} from 'lucide-react';

interface HinShitsuSectionProps {
  onOpenDiagnostic: () => void;
  onOpenQuote: () => void;
}

export const HinShitsuSection: React.FC<HinShitsuSectionProps> = ({
  onOpenDiagnostic,
  onOpenQuote
}) => {
  const [activeStep, setActiveStep] = useState<number>(0);

  const comparisons = [
    {
      feature: 'Enfoque Documental',
      traditional: 'Cientos de páginas de manuales genéricos que nadie lee ni aplica.',
      hinShitsu: 'Procedimientos ágiles, visuales y digitalizados que optimizan el trabajo diario.',
    },
    {
      feature: 'Perfil de Consultores',
      traditional: 'Junior o pasantes que solo aplican plantillas teóricas estándar.',
      hinShitsu: 'Consultores Senior con más de 15 años de experiencia en faena e industria.',
    },
    {
      feature: 'Capacitación del Personal',
      traditional: 'Charlas teóricas rápidas sin transferencia real de competencias.',
      hinShitsu: 'Formación práctica in-situ y habilitación de auditores internos (Código SENCE).',
    },
    {
      feature: 'Auditoría de Certificación',
      traditional: 'La consultora entrega los documentos y deja sola a la empresa en la auditoría.',
      hinShitsu: 'Acompañamiento presencial físico durante la auditoría externa con garantía de aprobación.',
    }
  ];

  return (
    <section id="metodologia" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Compass className="w-3.5 h-3.5 text-blue-700" />
            <span>Nuestra Filosofía de Excelencia</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Metodología Japonesa <span className="text-blue-700">Hin Shitsu</span>
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Basada en los principios de <em>Hin Shitsu Ki No Ten Kai</em> (Despliegue de la Calidad). Transformamos requisitos normativos complejos en sistemas de gestión vivos, eficientes y alineados con la rentabilidad de su negocio.
          </p>
        </div>

        {/* 4 Steps Interactive Tabs */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-3 mb-8">
          {HIN_SHITSU_PILLARS.map((pillar, idx) => (
            <button
              key={pillar.step}
              onClick={() => setActiveStep(idx)}
              className={`p-4 rounded-2xl text-left border transition-all relative overflow-hidden ${
                activeStep === idx
                  ? 'bg-white border-blue-600 shadow-md ring-1 ring-blue-600'
                  : 'bg-white/80 border-slate-200 hover:border-slate-300 text-slate-600 hover:text-slate-900'
              }`}
            >
              <div className="flex items-center justify-between mb-2">
                <span className={`text-xs font-mono font-bold px-2 py-0.5 rounded ${
                  activeStep === idx ? 'bg-blue-700 text-white' : 'bg-slate-100 text-slate-600'
                }`}>
                  Fase {pillar.step}
                </span>
                {activeStep === idx && (
                  <span className="w-2 h-2 rounded-full bg-blue-600 animate-pulse" />
                )}
              </div>
              <h3 className={`text-xs sm:text-sm font-bold ${activeStep === idx ? 'text-slate-900' : 'text-slate-700'}`}>
                {pillar.title}
              </h3>
            </button>
          ))}
        </div>

        {/* Active Step Deep-Dive Card */}
        <div className="p-6 sm:p-8 rounded-2xl bg-white border border-slate-200 shadow-lg mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 text-xs font-mono text-blue-800 font-bold bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                <span>PASO {HIN_SHITSU_PILLARS[activeStep].step} DE 04</span>
                <span>•</span>
                <span>{HIN_SHITSU_PILLARS[activeStep].subtitle}</span>
              </div>
              
              <h3 className="text-2xl font-extrabold text-slate-900">
                {HIN_SHITSU_PILLARS[activeStep].title}
              </h3>

              <p className="text-sm text-slate-600 leading-relaxed">
                {HIN_SHITSU_PILLARS[activeStep].description}
              </p>

              <div className="space-y-3 pt-2">
                <h4 className="text-xs uppercase tracking-wider text-slate-500 font-bold">Actividades Clave en Esta Etapa:</h4>
                <div className="space-y-2">
                  {HIN_SHITSU_PILLARS[activeStep].focusPoints.map((point, idx) => (
                    <div key={idx} className="flex items-start gap-3 text-xs sm:text-sm text-slate-700">
                      <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{point}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <div className="lg:col-span-5 bg-slate-50 p-6 rounded-2xl border border-slate-200 space-y-4">
              <div className="flex items-center gap-3 pb-3 border-b border-slate-200">
                <div className="p-2.5 rounded-xl bg-blue-100 text-blue-700 border border-blue-200">
                  <ShieldCheck className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-sm font-bold text-slate-900">Compromiso AEC Hin Shitsu</h4>
                  <p className="text-[11px] text-slate-500">Garantía total de satisfacción y aprobación</p>
                </div>
              </div>

              <div className="text-xs text-slate-700 space-y-2.5">
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 font-medium">Tasa de Aprobación</span>
                  <span className="font-bold text-emerald-700 font-mono">100% Primera Auditoría</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 font-medium">Nivel de Consultores</span>
                  <span className="font-bold text-blue-700">100% Senior Lead Auditor</span>
                </div>
                <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-slate-200">
                  <span className="text-slate-500 font-medium">Acompañamiento</span>
                  <span className="font-bold text-slate-900">Presencial en Auditoría</span>
                </div>
              </div>

              <button
                onClick={onOpenDiagnostic}
                className="w-full py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-all flex items-center justify-center gap-2"
              >
                <span>Evaluar mi empresa con este método</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Why AEC vs Traditional Matrix */}
        <div className="space-y-6">
          <div className="text-center">
            <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
              ¿Por qué las empresas prefieren a AEC Consultores?
            </h3>
            <p className="text-xs text-slate-500 mt-1">
              Diferencias claras entre la consultoría burocrática tradicional y nuestro enfoque ágil
            </p>
          </div>

          <div className="overflow-x-auto">
            <div className="min-w-[600px] border border-slate-200 rounded-2xl overflow-hidden shadow-sm bg-white">
              <div className="grid grid-cols-3 bg-slate-100 p-4 border-b border-slate-200 text-xs font-bold uppercase tracking-wider">
                <span className="text-slate-600">Aspecto Clave</span>
                <span className="text-rose-700 flex items-center gap-1">
                  <FileX className="w-4 h-4 text-rose-600" />
                  Consultoría Tradicional
                </span>
                <span className="text-blue-800 flex items-center gap-1">
                  <Zap className="w-4 h-4 text-blue-700" />
                  AEC Hin Shitsu
                </span>
              </div>
              <div className="divide-y divide-slate-100 text-xs">
                {comparisons.map((comp, idx) => (
                  <div key={idx} className="grid grid-cols-3 p-4 items-center hover:bg-slate-50 transition-colors">
                    <span className="font-semibold text-slate-900">{comp.feature}</span>
                    <span className="text-slate-500 pr-4">{comp.traditional}</span>
                    <span className="text-blue-900 font-semibold bg-blue-50/80 p-2.5 rounded-xl border border-blue-200">
                      {comp.hinShitsu}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
