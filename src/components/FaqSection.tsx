import React, { useState } from 'react';
import { FAQS_DATA, COMPANY_INFO } from '../data/aecData';
import { 
  HelpCircle, 
  ChevronDown, 
  MessageSquare
} from 'lucide-react';

interface FaqSectionProps {
  onOpenQuote: () => void;
}

export const FaqSection: React.FC<FaqSectionProps> = ({ onOpenQuote }) => {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [activeCategory, setActiveCategory] = useState<string>('todos');

  const categories = [
    { id: 'todos', label: 'Todas las Preguntas' },
    { id: 'general', label: 'General & Empresa' },
    { id: 'iso', label: 'Certificaciones ISO' },
    { id: 'metodologia', label: 'Metodología Hin Shitsu' },
    { id: 'costos', label: 'Costos & SENCE' },
    { id: 'auditorias', label: 'Auditorías' },
  ];

  const filteredFaqs = activeCategory === 'todos'
    ? FAQS_DATA
    : FAQS_DATA.filter(f => f.category === activeCategory);

  const toggleAccordion = (idx: number) => {
    setOpenIdx(openIdx === idx ? null : idx);
  };

  return (
    <section id="preguntas" className="py-24 bg-slate-50 relative border-b border-slate-200">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <HelpCircle className="w-3.5 h-3.5 text-blue-700" />
            <span>Resolución de Dudas Frecuentes</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Preguntas Frecuentes sobre Consultoría & Certificación
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Claridad total sobre nuestros procesos, plazos, acreditaciones y mecanismos de financiamiento.
          </p>
        </div>

        {/* Category Pills */}
        <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
          {categories.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-3.5 py-1.5 rounded-xl text-xs font-bold transition-all ${
                activeCategory === cat.id
                  ? 'bg-blue-700 text-white shadow-sm'
                  : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-100 border border-slate-200'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        {/* Accordion List */}
        <div className="space-y-3">
          {filteredFaqs.map((faq, idx) => {
            const isOpen = openIdx === idx;
            return (
              <div
                key={idx}
                className={`rounded-2xl border transition-all overflow-hidden ${
                  isOpen
                    ? 'bg-white border-blue-400 shadow-md ring-1 ring-blue-400'
                    : 'bg-white border-slate-200 hover:border-slate-300'
                }`}
              >
                <button
                  onClick={() => toggleAccordion(idx)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <span className={`text-sm sm:text-base font-bold transition-colors ${
                    isOpen ? 'text-blue-700' : 'text-slate-900'
                  }`}>
                    {faq.question}
                  </span>
                  <div className={`p-1.5 rounded-lg border transition-transform duration-200 shrink-0 ${
                    isOpen 
                      ? 'rotate-180 bg-blue-50 border-blue-200 text-blue-700' 
                      : 'bg-slate-50 border-slate-200 text-slate-500'
                  }`}>
                    <ChevronDown className="w-4 h-4" />
                  </div>
                </button>

                {isOpen && (
                  <div className="px-5 pb-6 sm:px-6 pt-0 text-xs sm:text-sm text-slate-600 leading-relaxed border-t border-slate-100 pt-4 animate-in fade-in duration-200">
                    <p>{faq.answer}</p>
                  </div>
                )}
              </div>
            );
          })}
        </div>

        {/* Need more details banner */}
        <div className="mt-12 p-6 rounded-2xl bg-white border border-slate-200 shadow-sm flex flex-col sm:flex-row items-center justify-between gap-4 text-center sm:text-left">
          <div>
            <h4 className="text-sm font-bold text-slate-900">¿Tiene una consulta específica no listada?</h4>
            <p className="text-xs text-slate-500 mt-0.5">Nuestro equipo de consultores responde en menos de 2 horas hábiles.</p>
          </div>
          <div className="flex items-center gap-3">
            <a
              href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola AEC Consultores, tengo una consulta sobre sus servicios.')}`}
              target="_blank"
              rel="noopener noreferrer"
              className="px-4 py-2 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold transition-colors flex items-center gap-1.5"
            >
              <MessageSquare className="w-3.5 h-3.5 text-emerald-600" />
              <span>WhatsApp Directo</span>
            </a>
            <button
              onClick={onOpenQuote}
              className="px-4 py-2 rounded-xl bg-blue-700 hover:bg-blue-800 text-white text-xs font-bold transition-all shadow-sm"
            >
              Enviar Consulta
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};
