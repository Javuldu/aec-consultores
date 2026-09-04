import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/aecData';
import { MessageSquare, X, Send } from 'lucide-react';

export const WhatsAppWidget: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedTopic, setSelectedTopic] = useState('Cotizar Certificación ISO');

  const topics = [
    'Cotizar Certificación ISO',
    'Auditoría Interna / Diagnóstico',
    'Acreditación OTEC (NCh 2728)',
    'Capacitación con SENCE',
    'Hablar con un Consultor Senior'
  ];

  const handleOpenWhatsApp = () => {
    const text = `Hola AEC Consultores, me comunico desde su sitio web. Me interesa: ${selectedTopic}.`;
    const url = `https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(text)}`;
    window.open(url, '_blank');
    setIsOpen(false);
  };

  return (
    <div className="fixed bottom-4 right-4 sm:bottom-6 sm:right-6 z-40">
      {isOpen ? (
        <div className="w-[calc(100vw-2rem)] max-w-sm sm:w-96 rounded-3xl bg-white border border-slate-200 shadow-2xl overflow-hidden text-slate-900 animate-in fade-in slide-in-from-bottom-5 duration-200">
          {/* Header */}
          <div className="p-4 bg-emerald-700 flex items-center justify-between text-white">
            <div className="flex items-center gap-3">
              <div className="relative">
                <div className="w-10 h-10 rounded-full bg-white flex items-center justify-center font-bold font-mono text-emerald-800 text-sm border border-emerald-300">
                  AEC
                </div>
                <span className="w-3 h-3 rounded-full bg-emerald-400 border-2 border-emerald-800 absolute bottom-0 right-0" />
              </div>
              <div>
                <h4 className="text-sm font-bold leading-tight">AEC Consultores</h4>
                <p className="text-[11px] text-emerald-100 opacity-90">Respuesta directa por WhatsApp</p>
              </div>
            </div>
            <button
              onClick={() => setIsOpen(false)}
              className="p-2 min-w-[36px] min-h-[36px] flex items-center justify-center rounded-lg text-emerald-100 hover:text-white hover:bg-emerald-800 transition-colors"
              aria-label="Cerrar chat de WhatsApp"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Body */}
          <div className="p-4 space-y-3 bg-white">
            <div className="p-3 rounded-2xl bg-slate-50 text-xs text-slate-700 leading-relaxed border border-slate-200">
              👋 ¡Hola! ¿En qué podemos ayudar a su empresa hoy? Seleccione el tema de su consulta para conectarlo de inmediato con un consultor senior:
            </div>

            <div className="space-y-1.5 pt-1">
              {topics.map((t) => (
                <button
                  key={t}
                  onClick={() => setSelectedTopic(t)}
                  className={`w-full text-left p-2.5 rounded-xl text-xs font-semibold border transition-all min-h-[40px] flex items-center ${
                    selectedTopic === t
                      ? 'bg-emerald-50 border-emerald-600 text-emerald-900 ring-1 ring-emerald-600'
                      : 'bg-white border-slate-200 text-slate-700 hover:text-slate-900 hover:bg-slate-50'
                  }`}
                >
                  {t}
                </button>
              ))}
            </div>

            <button
              onClick={handleOpenWhatsApp}
              className="w-full min-h-[44px] py-3 px-4 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white font-bold text-xs shadow-md transition-all flex items-center justify-center gap-2 mt-2"
            >
              <Send className="w-3.5 h-3.5" />
              <span>Iniciar Conversación en WhatsApp</span>
            </button>

            <div className="text-center text-[10px] text-slate-500 pt-1">
              Tel: {COMPANY_INFO.phone} • Santiago, Chile
            </div>
          </div>
        </div>
      ) : (
        <button
          onClick={() => setIsOpen(true)}
          className="group flex items-center gap-2 p-3.5 min-w-[48px] min-h-[48px] rounded-full bg-emerald-600 hover:bg-emerald-700 text-white font-bold shadow-lg hover:scale-105 transition-all"
          aria-label="Abrir chat de WhatsApp"
        >
          <MessageSquare className="w-6 h-6 fill-white" />
          <span className="text-xs font-bold pr-1 hidden sm:inline-block">
            ¿Dudas? WhatsApp
          </span>
        </button>
      )}
    </div>
  );
};
