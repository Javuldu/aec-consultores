import React from 'react';
import { ServiceItem } from '../types';
import { COMPANY_INFO } from '../data/aecData';
import { 
  Award, 
  CheckCircle2, 
  Clock, 
  Layers, 
  ShieldCheck, 
  GraduationCap, 
  FileCheck, 
  TrendingUp, 
  X, 
  FileText, 
  MessageSquare,
  ArrowRight
} from 'lucide-react';

interface ServiceDetailModalProps {
  service: ServiceItem | null;
  onClose: () => void;
  onOpenQuote: (serviceTitle: string) => void;
}

export const ServiceDetailModal: React.FC<ServiceDetailModalProps> = ({
  service,
  onClose,
  onOpenQuote
}) => {
  if (!service) return null;

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
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 my-8">
        {/* Header */}
        <div className="p-6 bg-slate-50 border-b border-slate-200 flex items-start justify-between">
          <div className="flex items-start gap-4">
            <div className="p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
              {getIcon(service.iconName)}
            </div>
            <div>
              {service.badge && (
                <span className="inline-block px-2.5 py-0.5 rounded-full bg-blue-50 border border-blue-200 text-blue-800 text-[11px] font-bold mb-1.5">
                  {service.badge}
                </span>
              )}
              <h2 className="text-xl font-extrabold text-slate-900 leading-snug">
                {service.title}
              </h2>
              <div className="flex items-center gap-2 text-xs text-slate-500 mt-1">
                <Clock className="w-3.5 h-3.5 text-slate-400" />
                <span>Duración estimada: <strong>{service.durationEstimate}</strong></span>
              </div>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-1.5 rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-6 space-y-6 max-h-[75vh] overflow-y-auto">
          <div>
            <h3 className="text-xs uppercase tracking-wider text-slate-500 font-bold mb-2">Descripción del Servicio</h3>
            <p className="text-sm text-slate-600 leading-relaxed">
              {service.fullDescription}
            </p>
          </div>

          {/* Key Features */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-blue-800 font-bold flex items-center gap-1.5">
              <CheckCircle2 className="w-4 h-4 text-blue-700" />
              Alcance y Metodología Incluida:
            </h3>
            <ul className="grid grid-cols-1 gap-2.5">
              {service.features.map((feat, idx) => (
                <li key={idx} className="flex items-start gap-2.5 text-xs text-slate-700">
                  <div className="w-1.5 h-1.5 rounded-full bg-blue-600 mt-1.5 shrink-0" />
                  <span>{feat}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Tangible Deliverables */}
          <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
            <h3 className="text-xs uppercase tracking-wider text-indigo-800 font-bold flex items-center gap-1.5">
              <FileText className="w-4 h-4 text-indigo-700" />
              Entregables Formales para la Empresa:
            </h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
              {service.deliverables.map((deliv, idx) => (
                <div key={idx} className="p-2.5 rounded-lg bg-white border border-slate-200 text-xs text-slate-700 flex items-start gap-2">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-600 mt-0.5 shrink-0" />
                  <span>{deliv}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Hin Shitsu Guarantee Notice */}
          <div className="p-3.5 rounded-xl bg-emerald-50 border border-emerald-200 text-emerald-900 text-xs flex items-center gap-3">
            <ShieldCheck className="w-5 h-5 text-emerald-600 shrink-0" />
            <div>
              <strong>Garantía de Aprobación AEC:</strong> Acompañamos contractualmente a su empresa durante todo el proceso hasta la obtención del certificado o resolución oficial.
            </div>
          </div>
        </div>

        {/* Footer actions */}
        <div className="p-6 bg-slate-50 border-t border-slate-200 flex flex-col sm:flex-row items-center justify-between gap-3">
          <a
            href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hola AEC Consultores, me interesa cotizar el servicio: ${service.title}`)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-4 py-2.5 rounded-xl bg-white hover:bg-slate-100 text-slate-800 text-xs font-bold border border-slate-300 transition-colors shadow-xs"
          >
            <MessageSquare className="w-4 h-4 text-emerald-600" />
            <span>Consultar por WhatsApp</span>
          </a>

          <button
            onClick={() => {
              onClose();
              onOpenQuote(service.title);
            }}
            className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-2.5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold shadow-md transition-all"
          >
            <span>Cotizar este Servicio</span>
            <ArrowRight className="w-4 h-4" />
          </button>
        </div>
      </div>
    </div>
  );
};
