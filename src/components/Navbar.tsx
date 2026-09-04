import React, { useState, useEffect } from 'react';
import { COMPANY_INFO } from '../data/aecData';
import { AecLogo } from './AecLogo';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Menu, 
  X, 
  ShieldCheck, 
  Award, 
  FileText, 
  Calculator, 
  ChevronRight,
  Sparkles,
  ChevronDown,
  Building2,
  BookOpen,
  HelpCircle,
  TrendingUp,
  Layers
} from 'lucide-react';

interface NavbarProps {
  currentPage: string;
  onNavigate: (page: string, anchor?: string) => void;
  onOpenDiagnostic: () => void;
  onOpenQuote: (defaultService?: string) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ 
  currentPage, 
  onNavigate, 
  onOpenDiagnostic, 
  onOpenQuote 
}) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [servicesDropdownOpen, setServicesDropdownOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navItems = [
    { id: 'inicio', label: 'Inicio' },
    { id: 'servicios', label: 'Servicios' },
    { id: 'normas', label: 'Normas ISO & NCh' },
    { id: 'metodologia', label: 'Hin Shitsu' },
    { id: 'calculadora', label: 'Calculadora ROI' },
    { id: 'casos-exito', label: 'Casos de Éxito' },
    { id: 'nosotros', label: 'Nosotros' },
    { id: 'recursos', label: 'Recursos' },
    { id: 'preguntas', label: 'Preguntas' },
    { id: 'contacto', label: 'Contacto' },
  ];

  const handleNavClick = (pageId: string) => {
    onNavigate(pageId);
    setMobileMenuOpen(false);
  };

  return (
    <header className="sticky top-0 left-0 right-0 z-50 transition-all duration-300">
      {/* Top micro bar for corporate contacts & regional scope */}
      <div className="bg-[#111C2C] text-[#64748B] text-xs py-2 px-4 hidden md:block border-b border-[#1b2b42]">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <div className="flex items-center gap-6">
            <a 
              href={`tel:${COMPANY_INFO.phoneClean}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Phone className="w-3.5 h-3.5 text-[#006AB4]" />
              <span className="font-medium text-slate-200">{COMPANY_INFO.phone}</span>
            </a>
            <a 
              href={`mailto:${COMPANY_INFO.email}`}
              className="flex items-center gap-1.5 text-slate-300 hover:text-white transition-colors"
            >
              <Mail className="w-3.5 h-3.5 text-[#006AB4]" />
              <span>{COMPANY_INFO.email}</span>
            </a>
            <div className="flex items-center gap-1.5 text-[#64748B]">
              <MapPin className="w-3.5 h-3.5 text-[#64748B]" />
              <span>Santiago, Chile • Cobertura en CL, CO, PE, EC</span>
            </div>
          </div>
          
          <div className="flex items-center gap-4">
            <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full bg-[#111C2C] border border-[#FF6B00]/40 text-[#FF6B00] font-semibold text-[11px]">
              <span className="w-1.5 h-1.5 rounded-full bg-[#FF6B00] animate-pulse" />
              100% Éxito en Auditorías de Certificación
            </span>
            <div className="flex items-center gap-2 text-slate-300 pl-3 border-l border-slate-700 text-xs font-mono">
              <span title="Chile">🇨🇱 CL</span>
              <span title="Colombia">🇨🇴 CO</span>
              <span title="Perú">🇵🇪 PE</span>
              <span title="Ecuador">🇪🇨 EC</span>
            </div>
          </div>
        </div>
      </div>

      {/* Main Navigation Bar */}
      <nav className={`transition-all duration-300 ${
        isScrolled 
          ? 'bg-white/95 backdrop-blur-md border-b border-slate-200 shadow-md py-3' 
          : 'bg-white/90 backdrop-blur-sm border-b border-slate-200/70 py-4'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Brand Logo */}
          <button 
            onClick={() => handleNavClick('inicio')}
            className="flex items-center group text-left transition-transform active:scale-[0.98] py-0.5"
            aria-label="AEC Consultores - Ir a Inicio"
          >
            <img 
              src="/logo azul.svg" 
              alt="AEC Consultores" 
              className="h-11 sm:h-12 md:h-14 w-auto object-contain transition-transform group-hover:scale-[1.02]" 
            />
          </button>

          {/* Desktop Links */}
          <div className="hidden xl:flex items-center gap-1">
            {navItems.map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-3 py-2 text-xs xl:text-sm font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#e6f3fa] text-[#006AB4] font-bold border border-[#006AB4]/30 shadow-xs'
                      : 'text-[#64748B] hover:text-[#006AB4] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
          </div>

          {/* Desktop Compact Navigation for Large Screens */}
          <div className="hidden lg:flex xl:hidden items-center gap-1">
            {navItems.slice(0, 6).map((item) => {
              const isActive = currentPage === item.id;
              return (
                <button
                  key={item.id}
                  onClick={() => handleNavClick(item.id)}
                  className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                    isActive
                      ? 'bg-[#e6f3fa] text-[#006AB4] font-bold border border-[#006AB4]/30'
                      : 'text-[#64748B] hover:text-[#006AB4] hover:bg-[#F8FAFC]'
                  }`}
                >
                  {item.label}
                </button>
              );
            })}
            <button
              onClick={() => handleNavClick('contacto')}
              className={`px-2.5 py-1.5 text-xs font-semibold rounded-lg transition-all ${
                currentPage === 'contacto' ? 'bg-[#e6f3fa] text-[#006AB4] font-bold' : 'text-[#64748B] hover:text-[#006AB4]'
              }`}
            >
              Contacto
            </button>
          </div>

          {/* Desktop Right CTAs */}
          <div className="hidden sm:flex items-center gap-3">
            <button
              onClick={onOpenDiagnostic}
              className="inline-flex items-center gap-2 px-3.5 py-2 rounded-xl bg-slate-50 hover:bg-[#e6f3fa] text-[#006AB4] text-xs sm:text-sm font-semibold border border-slate-200 hover:border-[#006AB4]/40 transition-all shadow-sm"
              title="Realizar diagnóstico de brecha gratuito"
            >
              <Calculator className="w-4 h-4 text-[#FF6B00]" />
              <span>Diagnóstico Gap</span>
            </button>
            <button
              onClick={() => onOpenQuote()}
              className="inline-flex items-center gap-2 px-4 py-2 rounded-xl bg-[#006AB4] hover:bg-[#005694] text-white font-bold text-xs sm:text-sm shadow-md shadow-[#006AB4]/20 transition-all transform hover:-translate-y-0.5"
            >
              <span>Cotizar Asesoría</span>
              <ChevronRight className="w-4 h-4" />
            </button>
          </div>

          {/* Mobile Menu Toggle Button */}
          <div className="flex items-center gap-2 lg:hidden">
            <button
              onClick={onOpenDiagnostic}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-slate-100 text-[#006AB4] border border-slate-200 text-xs sm:hidden transition-colors"
              title="Diagnóstico Gap"
              aria-label="Abrir test de diagnóstico"
            >
              <Calculator className="w-5 h-5 text-[#FF6B00]" />
            </button>
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="p-2.5 min-w-[44px] min-h-[44px] flex items-center justify-center rounded-xl bg-slate-100 text-[#111C2C] hover:text-[#006AB4] hover:bg-slate-200 border border-slate-200 transition-colors"
              aria-label={mobileMenuOpen ? "Cerrar menú de navegación" : "Abrir menú de navegación"}
            >
              {mobileMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>

        {/* Mobile Dropdown Menu with all pages */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t border-slate-200 bg-white px-4 pt-3 pb-6 space-y-3 mt-2 shadow-xl max-h-[calc(100vh-5rem)] overflow-y-auto overscroll-contain animate-in fade-in slide-in-from-top-4 duration-200">
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-1">
              {navItems.map((item) => {
                const isActive = currentPage === item.id;
                return (
                  <button
                    key={item.id}
                    onClick={() => handleNavClick(item.id)}
                    className={`w-full px-3 py-2.5 rounded-xl text-sm font-semibold transition-all flex items-center justify-between text-left min-h-[44px] ${
                      isActive
                        ? 'bg-[#006AB4] text-white shadow-sm font-bold'
                        : 'text-[#111C2C] hover:bg-[#e6f3fa] hover:text-[#006AB4]'
                    }`}
                  >
                    <span>{item.label}</span>
                    <ChevronRight className={`w-4 h-4 ${isActive ? 'text-white' : 'text-[#64748B]'}`} />
                  </button>
                );
              })}
            </div>

            <div className="pt-4 border-t border-slate-100 space-y-2">
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenDiagnostic();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-slate-50 text-[#006AB4] border border-slate-200 text-sm font-bold"
              >
                <Calculator className="w-4 h-4 text-[#FF6B00]" />
                <span>Test Diagnóstico de Brecha (Gap Analysis)</span>
              </button>
              <button
                onClick={() => {
                  setMobileMenuOpen(false);
                  onOpenQuote();
                }}
                className="w-full min-h-[44px] flex items-center justify-center gap-2 px-4 py-3 rounded-xl bg-[#006AB4] hover:bg-[#005694] text-white font-bold text-sm shadow-md"
              >
                <span>Solicitar Asesoría Personalizada</span>
                <ChevronRight className="w-4 h-4" />
              </button>
            </div>

            <div className="pt-3 text-xs text-[#64748B] space-y-1">
              <div className="flex items-center gap-2">
                <Phone className="w-3.5 h-3.5 text-[#006AB4]" />
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-[#006AB4]">{COMPANY_INFO.phone}</a>
              </div>
              <div className="flex items-center gap-2">
                <Mail className="w-3.5 h-3.5 text-[#006AB4]" />
                <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-[#006AB4]">{COMPANY_INFO.email}</a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
};
