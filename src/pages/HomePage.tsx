import React from 'react';
import { Hero } from '../components/Hero';
import { ServicesSection } from '../components/ServicesSection';
import { HinShitsuSection } from '../components/HinShitsuSection';
import { StandardsExplorer } from '../components/StandardsExplorer';
import { RoiCalculator } from '../components/RoiCalculator';
import { CaseStudiesSection } from '../components/CaseStudiesSection';
import { RegionalPresence } from '../components/RegionalPresence';
import { KnowledgeHub } from '../components/KnowledgeHub';
import { FaqSection } from '../components/FaqSection';
import { ContactSection } from '../components/ContactSection';
import { ServiceItem } from '../types';
import { 
  ArrowRight, 
  ShieldCheck, 
  Award, 
  Users, 
  Clock, 
  CheckCircle2, 
  Calculator,
  BookOpen,
  Building2,
  FileCheck2,
  ChevronRight
} from 'lucide-react';
import { COMPANY_INFO } from '../data/aecData';

interface HomePageProps {
  onOpenDiagnostic: () => void;
  onOpenQuote: (service?: string) => void;
  onSelectServiceModal: (service: ServiceItem) => void;
  onNavigate: (page: string, anchor?: string) => void;
}

export const HomePage: React.FC<HomePageProps> = ({
  onOpenDiagnostic,
  onOpenQuote,
  onSelectServiceModal,
  onNavigate
}) => {
  const handleSelectStandardHero = (code: string) => {
    onNavigate('normas', code);
  };

  return (
    <div className="space-y-0">
      {/* 1. Hero Section */}
      <Hero
        onOpenDiagnostic={onOpenDiagnostic}
        onOpenQuote={onOpenQuote}
        onSelectStandard={handleSelectStandardHero}
      />

      {/* Corporate Quick Value Strip */}
      <section className="bg-slate-900 text-white py-8 border-y border-slate-800">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-emerald-400">100%</span>
              <p className="text-xs text-slate-300 font-medium">Aprobación en Auditorías</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-blue-400">+{COMPANY_INFO.stats.projectsCompleted}</span>
              <p className="text-xs text-slate-300 font-medium">Proyectos Ejecutados</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-indigo-400">{COMPANY_INFO.stats.yearsExperience} Años</span>
              <p className="text-xs text-slate-300 font-medium">Trayectoria en la Región</p>
            </div>
            <div className="space-y-1">
              <span className="text-3xl sm:text-4xl font-extrabold font-mono text-cyan-400">4 Países</span>
              <p className="text-xs text-slate-300 font-medium">Chile, Colombia, Perú, Ecuador</p>
            </div>
          </div>
        </div>
      </section>

      {/* 2. Core Services Grid */}
      <ServicesSection
        onSelectService={onSelectServiceModal}
        onOpenQuote={onOpenQuote}
      />

      {/* Multi-page Explore Hub (Visual Cards to Explore other pages) */}
      <section className="py-16 bg-slate-50 border-b border-slate-200">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-10 space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Explore Nuestra Plataforma
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Soluciones Integrales para su Empresa
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            <button
              onClick={() => onNavigate('normas')}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
                  <Award className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  Catálogo de Normas ISO & NCh
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Fichas técnicas de ISO 9001, 14001, 45001, 27001, 22000 y NCh 2728 para OTEC.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 pt-4 group-hover:translate-x-1 transition-transform">
                <span>Ver catálogo</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('metodologia')}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center">
                  <ShieldCheck className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  Metodología Hin Shitsu
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Filosofía japonesa de calidad total, documentación liviana y cero burocracia.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 pt-4 group-hover:translate-x-1 transition-transform">
                <span>Conocer metodología</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('calculadora')}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
                  <Calculator className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  Calculadora ROI & Diagnóstico
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Simule ahorros por no-calidad y evalúe la madurez de sus procesos.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 pt-4 group-hover:translate-x-1 transition-transform">
                <span>Calcular retorno</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>

            <button
              onClick={() => onNavigate('casos-exito')}
              className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-500 hover:shadow-md transition-all text-left flex flex-col justify-between group shadow-sm"
            >
              <div className="space-y-2">
                <div className="w-10 h-10 rounded-xl bg-cyan-50 text-cyan-700 border border-cyan-200 flex items-center justify-center">
                  <Building2 className="w-5 h-5" />
                </div>
                <h3 className="font-bold text-slate-900 text-sm group-hover:text-blue-700 transition-colors">
                  Casos de Éxito & Clientes
                </h3>
                <p className="text-xs text-slate-500 leading-relaxed">
                  Resultados medibles en minería, agroindustria, software, OTEC y servicios.
                </p>
              </div>
              <span className="inline-flex items-center gap-1 text-xs font-bold text-blue-700 pt-4 group-hover:translate-x-1 transition-transform">
                <span>Ver testimonios</span>
                <ChevronRight className="w-3.5 h-3.5" />
              </span>
            </button>
          </div>
        </div>
      </section>

      {/* 3. Japanese Hin Shitsu Methodology Summary */}
      <HinShitsuSection
        onOpenDiagnostic={onOpenDiagnostic}
        onOpenQuote={() => onOpenQuote('Metodología Hin Shitsu')}
      />

      {/* 4. Standards & Norms Explorer */}
      <StandardsExplorer
        onOpenQuote={onOpenQuote}
      />

      {/* 5. Interactive ROI Calculator */}
      <RoiCalculator
        onOpenQuote={onOpenQuote}
      />

      {/* 6. Case Studies & Verified Results */}
      <CaseStudiesSection
        onOpenQuote={onOpenQuote}
      />

      {/* 7. Regional Presence */}
      <RegionalPresence
        onOpenQuote={() => onOpenQuote('Propuesta Regional')}
      />

      {/* 8. Downloadable Knowledge Hub */}
      <KnowledgeHub />

      {/* 9. Interactive FAQ Accordion */}
      <FaqSection
        onOpenQuote={() => onOpenQuote('Consulta General')}
      />

      {/* 10. Contact & Proposal Booking */}
      <ContactSection />
    </div>
  );
};
