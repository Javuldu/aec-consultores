import React, { useState } from 'react';
import { 
  FileText, 
  Download, 
  CheckCircle2, 
  BookOpen, 
  X, 
  Send,
  ShieldCheck,
  FileCheck
} from 'lucide-react';

export const KnowledgeHub: React.FC = () => {
  const [downloadModalItem, setDownloadModalItem] = useState<{
    title: string;
    description: string;
    items: string[];
    pages: string;
  } | null>(null);

  const [recipientEmail, setRecipientEmail] = useState('');
  const [isSent, setIsSent] = useState(false);

  const resources = [
    {
      id: 'checklist-iso9001',
      title: 'Checklist de Autodiagnóstico ISO 9001:2015',
      category: 'Guía Técnica',
      pages: '12 Páginas (PDF + Excel)',
      description: 'Herramienta de autoevaluación punto por punto de las 10 cláusulas normativas para identificar No-Conformidades potenciales.',
      items: [
        'Evaluación de cláusulas 4 a 10 de ISO 9001',
        'Matriz de riesgos y oportunidades para la dirección',
        'Criterios de evidencia para la auditoría de certificación'
      ]
    },
    {
      id: 'guia-seremi-legal',
      title: 'Matriz de Cumplimiento SEREMI y Sanitario',
      category: 'Regulatorio Chile',
      pages: '8 Páginas (PDF)',
      description: 'Compendio de trámites para resoluciones sanitarias, planes de emergencia y fiscalizaciones laborales en Chile.',
      items: [
        'Requisitos para Autorización Sanitaria de funcionamiento',
        'Puntos críticos en fiscalizaciones de la Dirección del Trabajo',
        'Estructura de Plan de Emergencia y Evacuación regulado'
      ]
    },
    {
      id: 'manual-sence',
      title: 'Guía Práctica de Franquicia SENCE para Capacitación',
      category: 'Financiamiento',
      pages: '6 Páginas (PDF)',
      description: 'Aprenda a financiar el 100% de la formación de auditores internos e interpretación de normas con el 1% de la planilla de remuneraciones.',
      items: [
        'Cálculo del monto disponible por tramo de remuneración',
        'Paso a paso para la inscripción de cursos con código SENCE',
        'Modelos de declaración jurada y liquidación ante el SII'
      ]
    },
    {
      id: 'guia-trinorma',
      title: 'Roadmap de Integración Trinorma (Anexo SL)',
      category: 'Estrategia SIG',
      pages: '15 Páginas (PDF)',
      description: 'Estructura metodológica para unificar Calidad, Medio Ambiente y Seguridad reduciendo la duplicidad documental.',
      items: [
        'Cuadro comparativo de requisitos comunes (ISO 9001, 14001, 45001)',
        'Estructura de Política Integrada y Matriz de Riesgos unificada',
        'Cronograma modelo de implementación en 5 meses'
      ]
    }
  ];

  const handleSendKit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!recipientEmail) return;
    setIsSent(true);
    setTimeout(() => {
      setIsSent(false);
      setDownloadModalItem(null);
      setRecipientEmail('');
    }, 2500);
  };

  return (
    <section className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-14">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <BookOpen className="w-3.5 h-3.5 text-blue-700" />
            <span>Centro de Recursos y Conocimiento</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Guías Técnicas & Herramientas Gratuitas de Gestión
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Descargue checklists y plantillas prácticas elaboradas por nuestros auditores líderes para acelerar el cumplimiento normativo en su empresa.
          </p>
        </div>

        {/* Resources Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {resources.map((res) => (
            <div
              key={res.id}
              className="p-6 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all flex flex-col justify-between group shadow-sm"
            >
              <div>
                <div className="flex items-center justify-between mb-3">
                  <span className="px-2.5 py-0.5 rounded text-[11px] font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    {res.category}
                  </span>
                  <span className="text-xs text-slate-500 font-mono font-medium">{res.pages}</span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 mb-2 group-hover:text-blue-700 transition-colors">
                  {res.title}
                </h3>
                <p className="text-xs text-slate-600 mb-4 leading-relaxed">
                  {res.description}
                </p>

                <div className="space-y-1.5 mb-6 pt-3 border-t border-slate-100">
                  {res.items.map((item, idx) => (
                    <div key={idx} className="flex items-center gap-2 text-xs text-slate-700 font-medium">
                      <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 shrink-0" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 flex items-center gap-1 font-medium">
                  <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                  Descarga Gratuita
                </span>
                <button
                  onClick={() => setDownloadModalItem(res)}
                  className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-blue-800 hover:text-blue-900 text-xs font-bold border border-slate-200 transition-colors"
                >
                  <Download className="w-3.5 h-3.5 text-blue-700" />
                  <span>Obtener Guía</span>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Download / Access Resource Modal */}
      {downloadModalItem && (
        <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4">
          <div className="relative w-full max-w-md bg-white border border-slate-200 rounded-2xl shadow-2xl overflow-hidden text-slate-900 p-6 space-y-4">
            <div className="flex items-start justify-between">
              <div className="flex items-center gap-2.5">
                <div className="p-2 rounded-xl bg-blue-50 text-blue-700 border border-blue-200">
                  <FileCheck className="w-5 h-5" />
                </div>
                <div>
                  <h3 className="text-base font-bold text-slate-900 leading-tight">
                    {downloadModalItem.title}
                  </h3>
                  <span className="text-xs text-slate-500">{downloadModalItem.pages}</span>
                </div>
              </div>
              <button
                onClick={() => setDownloadModalItem(null)}
                className="p-1 text-slate-400 hover:text-slate-700"
              >
                <X className="w-5 h-5" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              Ingrese su correo corporativo para recibir de inmediato el enlace de descarga directa con la guía completa y plantillas editables.
            </p>

            {isSent ? (
              <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-800 text-center space-y-1">
                <CheckCircle2 className="w-6 h-6 mx-auto text-emerald-600" />
                <p className="text-xs font-bold">¡Guía enviada exitosamente!</p>
                <p className="text-[11px] text-slate-600">Revise su bandeja de entrada (y carpeta spam si es necesario).</p>
              </div>
            ) : (
              <form onSubmit={handleSendKit} className="space-y-3">
                <div>
                  <label className="block text-xs font-bold text-slate-700 mb-1">
                    Correo Electrónico de Empresa:
                  </label>
                  <input
                    type="email"
                    required
                    placeholder="ejemplo@suempresa.cl"
                    value={recipientEmail}
                    onChange={(e) => setRecipientEmail(e.target.value)}
                    className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600"
                  />
                </div>

                <button
                  type="submit"
                  className="w-full py-2.5 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2"
                >
                  <Send className="w-3.5 h-3.5" />
                  <span>Enviar Guía por Correo</span>
                </button>
              </form>
            )}
          </div>
        </div>
      )}
    </section>
  );
};
