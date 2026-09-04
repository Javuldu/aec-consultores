import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { HIN_SHITSU_PILLARS, COMPANY_INFO } from '../data/aecData';
import { 
  ShieldCheck, 
  Sparkles, 
  CheckCircle2, 
  ArrowRight, 
  Award, 
  Users, 
  Clock, 
  Layers, 
  Check, 
  X as XIcon,
  Calculator,
  MessageSquare
} from 'lucide-react';

interface MethodologyPageProps {
  onOpenDiagnostic: () => void;
  onOpenQuote: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const MethodologyPage: React.FC<MethodologyPageProps> = ({
  onOpenDiagnostic,
  onOpenQuote,
  onNavigate
}) => {
  const japanesePillars = [
    {
      kanji: '現場 (Genba)',
      name: 'El Lugar de los Hechos',
      desc: 'No diseñamos desde un escritorio cerrado. Nuestros consultores senior auditan y observan el proceso real en terreno y faena para capturar la verdadera dinámica operativa.'
    },
    {
      kanji: '改善 (Kaizen)',
      name: 'Mejora Continua Ágil',
      desc: 'Pequeñas mejoras prácticas incrementales que generan grandes ahorros, evitando manuales rígidos que nadie aplica en el día a día.'
    },
    {
      kanji: 'ポカヨケ (Poka-Yoke)',
      name: 'A Prueba de Errores',
      desc: 'Estandarización de controles visuales y listas de chequeo preventivas que impiden fallas antes de que lleguen al cliente o al auditor externo.'
    },
    {
      kanji: '方針管理 (Hoshin Kanri)',
      name: 'Dirección por Objetivos',
      desc: 'Alineación matemática entre la política de calidad y los objetivos financieros y estratégicos de la Alta Dirección.'
    }
  ];

  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Metodología Hin Shitsu" onNavigate={onNavigate} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Sparkles className="w-3.5 h-3.5 text-blue-700" />
            <span>Excelencia Operacional de Origen Japonés</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Metodología Hin Shitsu (品質)
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Un método probado que sustituye la burocracia documental estéril por sistemas de gestión vivos, ágiles y orientados a la rentabilidad real de su empresa.
          </p>
        </div>

        {/* 4 Japanese Core Principles Grid */}
        <div className="mb-16">
          <div className="text-center max-w-2xl mx-auto mb-8 space-y-1">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Filosofía de Gestión</span>
            <h2 className="text-2xl font-bold text-slate-900">Los 4 Pilares de la Metodología</h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {japanesePillars.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-3 hover:border-blue-400 hover:shadow-md transition-all"
              >
                <span className="text-xs font-mono font-bold text-blue-700 block bg-blue-50 px-2.5 py-1 rounded-lg border border-blue-200 w-fit">
                  {p.kanji}
                </span>
                <h3 className="text-lg font-bold text-slate-900">
                  {p.name}
                </h3>
                <p className="text-xs text-slate-600 leading-relaxed">
                  {p.desc}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* The 4-Phase Consulting Cycle */}
        <div className="mb-16 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-8">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Ciclo de Implementación
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              El Ciclo de Consultoría en 4 Fases
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Paso a paso estructurado para asegurar la certificación con 0 No-Conformidades mayores.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {HIN_SHITSU_PILLARS.map((p, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-4 flex flex-col justify-between"
              >
                <div className="space-y-3">
                  <div className="w-10 h-10 rounded-xl bg-blue-700 text-white flex items-center justify-center font-mono font-bold text-sm shadow-md">
                    {p.step}
                  </div>
                  <div>
                    <h3 className="font-bold text-slate-900 text-base">
                      {p.title}
                    </h3>
                    <span className="text-[11px] font-semibold text-blue-700 block mt-0.5">
                      {p.subtitle}
                    </span>
                  </div>
                  <p className="text-xs text-slate-600 leading-relaxed">
                    {p.description}
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 space-y-1.5">
                  {p.focusPoints.map((pt, pIdx) => (
                    <div key={pIdx} className="flex items-start gap-2 text-[11px] text-slate-700">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0 mt-0.5" />
                      <span>{pt}</span>
                    </div>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Comparative Matrix: AEC vs Traditional Consulting */}
        <div className="mb-16 bg-white p-6 sm:p-10 rounded-3xl border border-slate-200 shadow-md space-y-6">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700">Comparativa Transparente</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              ¿Por Qué Nuestro Modelo Supera la Consultoría Tradicional?
            </h2>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400">
                  <th className="py-3 px-4 font-bold text-slate-900">Criterio de Evaluación</th>
                  <th className="py-3 px-4 font-bold text-blue-800 bg-blue-50/70 rounded-t-xl">AEC Consultores (Hin Shitsu)</th>
                  <th className="py-3 px-4 font-bold text-slate-500">Consultoras Tradicionales</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 text-slate-700">
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Carga Documental</td>
                  <td className="py-3.5 px-4 bg-blue-50/40 text-blue-900 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Documentación ágil y digitalizada que la gente usa.
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-rose-500" />
                    Cientos de páginas en carpetas archivadas sin uso.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Perfil de Consultores</td>
                  <td className="py-3.5 px-4 bg-blue-50/40 text-blue-900 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Auditores Senior calificados con credenciales IRCA.
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-rose-500" />
                    Pasantes o juniors supervisados remotamente.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Acompañamiento en Auditoría</td>
                  <td className="py-3.5 px-4 bg-blue-50/40 text-blue-900 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    Presencial junto a su equipo frente al ente certificador.
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-rose-500" />
                    Entregan documentos y se retiran antes del auditor.
                  </td>
                </tr>
                <tr>
                  <td className="py-3.5 px-4 font-bold text-slate-900">Garantía Contractual</td>
                  <td className="py-3.5 px-4 bg-blue-50/40 text-blue-900 font-medium flex items-center gap-2">
                    <Check className="w-4 h-4 text-emerald-600" />
                    100% de éxito garantizado por contrato hasta el certificado.
                  </td>
                  <td className="py-3.5 px-4 text-slate-500 flex items-center gap-2">
                    <XIcon className="w-4 h-4 text-rose-500" />
                    Cobran adicionales por levantar No-Conformidades.
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-blue-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold">¿Desea aplicar Hin Shitsu en su organización?</h3>
            <p className="text-xs text-blue-100 mt-1">
              Agende un diagnóstico inicial sin costo con un Consultor Senior de AEC.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-blue-800 text-xs font-bold transition-all shadow-md"
            >
              Test Diagnóstico Gap
            </button>
            <button
              onClick={() => onOpenQuote('Metodología Hin Shitsu')}
              className="px-5 py-2.5 rounded-xl bg-slate-900 hover:bg-black text-white text-xs font-bold transition-all shadow-md"
            >
              Solicitar Propuesta
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};
