import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { RoiCalculator } from '../components/RoiCalculator';
import { DiagnosticTool } from '../components/DiagnosticTool';
import { Calculator, Sparkles, ShieldCheck, CheckCircle2, Award, ArrowRight } from 'lucide-react';

interface RoiCalculatorPageProps {
  onOpenQuote: (service?: string) => void;
  onOpenDiagnosticModal: () => void;
  onNavigate: (page: string) => void;
}

export const RoiCalculatorPage: React.FC<RoiCalculatorPageProps> = ({
  onOpenQuote,
  onOpenDiagnosticModal,
  onNavigate
}) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Calculadora de Retorno & Diagnóstico" onNavigate={onNavigate} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Calculator className="w-3.5 h-3.5 text-blue-700" />
            <span>Herramientas Financieras & Diagnóstico de Brechas</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de ROI & Evaluación de Madurez
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Mida el impacto económico de eliminar costos por mala calidad y calcule el tiempo estimado de certificación para su empresa.
          </p>
        </div>

        {/* Interactive ROI Calculator Component */}
        <div className="mb-16">
          <RoiCalculator onOpenQuote={onOpenQuote} />
        </div>

        {/* Gap Analysis In-Depth Explanation & Trigger */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <div className="flex flex-col lg:flex-row items-center justify-between gap-8">
            <div className="space-y-4 max-w-2xl text-center lg:text-left">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                Gap Analysis en Línea
              </span>
              <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
                ¿Cuál es el Nivel de Madurez de sus Procesos?
              </h2>
              <p className="text-sm text-slate-600 leading-relaxed">
                Responda nuestro cuestionario técnico de 5 preguntas para obtener un diagnóstico preliminar del estado de preparación de su organización, hoja de ruta recomendada y estimación de semanas para certificación.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2">
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Sin costo ni compromiso comercial</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Resultado instantáneo con plan de acción</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Recomendación de normas aplicables</span>
                </div>
                <div className="flex items-center gap-2 text-xs text-slate-700">
                  <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                  <span>Exportación de informe a PDF</span>
                </div>
              </div>
            </div>

            <div className="shrink-0">
              <button
                onClick={onOpenDiagnosticModal}
                className="inline-flex items-center gap-3 px-8 py-4 rounded-2xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-xl shadow-blue-700/25 transition-all transform hover:-translate-y-0.5"
              >
                <Calculator className="w-5 h-5" />
                <span>Iniciar Test Diagnóstico de Brechas</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
