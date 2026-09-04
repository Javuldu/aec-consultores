import React from 'react';
import { COMPANY_INFO } from '../data/aecData';

import { 
  Award, 
  Phone, 
  Mail, 
  MapPin, 
  ShieldCheck, 
  ArrowUp
} from 'lucide-react';

interface FooterProps {
  onOpenDiagnostic: () => void;
  onOpenQuote: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const Footer: React.FC<FooterProps> = ({ onOpenDiagnostic, onOpenQuote, onNavigate }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="bg-[#111C2C] text-[#94A3B8] border-t border-[#1b2b42] text-xs">
      {/* Top Banner */}
      <div className="border-b border-[#1b2b42] py-8 bg-[#0a111a]/80">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-4 text-center md:text-left">
            <div className="p-3 rounded-2xl bg-[#006AB4]/20 text-[#006AB4] border border-[#006AB4]/40 shrink-0">
              <Award className="w-6 h-6 text-[#FF6B00]" />
            </div>
            <div>
              <h4 className="text-base font-bold text-white">¿Listo para elevar la excelencia de su organización?</h4>
              <p className="text-xs text-[#94A3B8]">Garantizamos contractualmente la aprobación en auditorías de certificación.</p>
            </div>
          </div>

          <div className="flex items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="px-4 py-2.5 rounded-xl bg-[#1b2b42] hover:bg-[#263c5c] text-white text-xs font-semibold border border-[#2a4063] transition-colors"
            >
              Test Gap Gratuito
            </button>
            <button
              onClick={() => onOpenQuote()}
              className="px-5 py-2.5 rounded-xl bg-[#006AB4] hover:bg-[#005694] text-white text-xs font-bold shadow-md transition-all"
            >
              Solicitar Cotización
            </button>
          </div>
        </div>
      </div>

      {/* Main Footer Links */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Info (Col 1-2) */}
          <div className="lg:col-span-2 space-y-4">
            <div className="flex items-center gap-3">
              <button 
                onClick={() => onNavigate('inicio')}
                className="text-left group inline-block"
                aria-label="AEC Consultores - Ir a Inicio"
              >
                <img src="/aec logo b.svg" alt="AEC Consultores" className="h-12 w-auto group-hover:opacity-90 transition-opacity" />
              </button>
            </div>

            <p className="text-xs text-[#94A3B8] leading-relaxed pr-6">
              Firma consultora especializada en asesoría estratégica, auditorías de cumplimiento, capacitación SENCE y certificación de sistemas de gestión bajo la metodología japonesa Hin Shitsu.
            </p>

            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <MapPin className="w-4 h-4 text-[#006AB4] shrink-0" />
                <span>{COMPANY_INFO.address}</span>
              </div>
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <Phone className="w-4 h-4 text-[#006AB4] shrink-0" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-white transition-colors">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2 text-[#CBD5E1]">
                <Mail className="w-4 h-4 text-[#006AB4] shrink-0" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-white transition-colors">{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>

          {/* Core Services Links */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Nuestras Páginas</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('inicio')} className="hover:text-[#006AB4] transition-colors text-left">
                  Página de Inicio
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('servicios')} className="hover:text-[#006AB4] transition-colors text-left">
                  Servicios de Consultoría
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('normas')} className="hover:text-[#006AB4] transition-colors text-left">
                  Catálogo de Normas ISO & NCh
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('metodologia')} className="hover:text-[#006AB4] transition-colors text-left">
                  Metodología Hin Shitsu
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('calculadora')} className="hover:text-[#006AB4] transition-colors text-left">
                  Calculadora ROI & Brechas
                </button>
              </li>
            </ul>
          </div>

          {/* Popular Standards */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Secciones Clave</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li>
                <button onClick={() => onNavigate('casos-exito')} className="hover:text-[#006AB4] transition-colors text-left">
                  Casos de Éxito & Clientes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('nosotros')} className="hover:text-[#006AB4] transition-colors text-left">
                  Acerca de AEC Consultores
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('recursos')} className="hover:text-[#006AB4] transition-colors text-left">
                  Centro de Recursos & Guías
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('preguntas')} className="hover:text-[#006AB4] transition-colors text-left">
                  Preguntas Frecuentes
                </button>
              </li>
              <li>
                <button onClick={() => onNavigate('contacto')} className="hover:text-[#006AB4] transition-colors text-left">
                  Contacto & Cotización
                </button>
              </li>
            </ul>
          </div>

          {/* Regional Footprint & Navigation */}
          <div className="space-y-3">
            <h4 className="text-xs font-bold uppercase tracking-wider text-white">Presencia Regional</h4>
            <ul className="space-y-2 text-[#94A3B8]">
              <li className="flex items-center gap-1.5">🇨🇱 <span>Chile (Casa Matriz)</span></li>
              <li className="flex items-center gap-1.5">🇨🇴 <span>Colombia (Bogotá & Medellín)</span></li>
              <li className="flex items-center gap-1.5">🇵🇪 <span>Perú (Lima & Arequipa)</span></li>
              <li className="flex items-center gap-1.5">🇪🇨 <span>Ecuador (Quito & Guayaquil)</span></li>
            </ul>
            <div className="pt-3">
              <span className="text-[11px] font-semibold text-[#FF6B00] flex items-center gap-1">
                <ShieldCheck className="w-3.5 h-3.5" />
                100% Éxito en Auditorías
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Bottom Legal bar */}
      <div className="border-t border-[#1b2b42] py-6 bg-[#0a111a]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row items-center justify-between gap-4 text-[11px] text-[#64748B]">
          <div>
            © {new Date().getFullYear()} AEC Consultores SpA. Todos los derechos reservados. Rediseño multi-página corporativo.
          </div>
          <div className="flex items-center gap-6">
            <button onClick={() => onNavigate('metodologia')} className="hover:text-white transition-colors">
              Metodología Hin Shitsu
            </button>
            <button onClick={() => onNavigate('calculadora')} className="hover:text-white transition-colors">
              Calculadora ROI
            </button>
            <button
              onClick={scrollToTop}
              className="p-1.5 rounded-lg bg-[#1b2b42] hover:bg-[#263c5c] text-white transition-colors"
              title="Volver arriba"
            >
              <ArrowUp className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
