import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { COMPANY_INFO } from '../data/aecData';
import { 
  Building2, 
  ShieldCheck, 
  Award, 
  Users, 
  Globe, 
  CheckCircle2, 
  MapPin, 
  Sparkles,
  Phone,
  Mail,
  ArrowRight
} from 'lucide-react';

interface AboutPageProps {
  onOpenQuote: (service?: string) => void;
  onNavigate: (page: string) => void;
}

export const AboutPage: React.FC<AboutPageProps> = ({
  onOpenQuote,
  onNavigate
}) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Nosotros & Cobertura" onNavigate={onNavigate} />

        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Building2 className="w-3.5 h-3.5 text-blue-700" />
            <span>Trayectoria, Liderazgo & Alcance Regional</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Acerca de AEC Consultores
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Más de 16 años acompañando a empresas en Chile y la Región Andina a alcanzar estándares de clase mundial con cero burocracia documental.
          </p>
        </div>

        {/* Corporate Pillars Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-16">
          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-blue-50 text-blue-700 border border-blue-200 flex items-center justify-center">
              <ShieldCheck className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Nuestra Misión</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Transformar los sistemas de gestión en herramientas vivas que potencien la rentabilidad, la seguridad y la sostenibilidad de las organizaciones, garantizando la aprobación de sus certificaciones internacionales.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-indigo-50 text-indigo-700 border border-indigo-200 flex items-center justify-center">
              <Sparkles className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Nuestra Visión</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Ser el referente latinoamericano indiscutido en consultoría de calidad y gobernanza de procesos, reconocidos por nuestra metodología Hin Shitsu y el 100% de éxito en auditorías externas.
            </p>
          </div>

          <div className="p-8 rounded-3xl bg-white border border-slate-200 shadow-sm space-y-4">
            <div className="w-12 h-12 rounded-2xl bg-emerald-50 text-emerald-700 border border-emerald-200 flex items-center justify-center">
              <Award className="w-6 h-6" />
            </div>
            <h2 className="text-xl font-bold text-slate-900">Garantía Contractual</h2>
            <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
              Establecemos por contrato el compromiso de acompañar a su empresa hasta la obtención formal del certificado. Si surgiera alguna No-Conformidad, nuestro equipo la subsana sin costo adicional.
            </p>
          </div>
        </div>

        {/* Senior Auditors & Team Stats */}
        <div className="p-8 sm:p-12 rounded-3xl bg-slate-900 text-white shadow-xl mb-16 space-y-8">
          <div className="max-w-2xl space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-400">Equipo de Élite</span>
            <h2 className="text-2xl sm:text-3xl font-extrabold">Consultores & Auditores Senior IRCA</h2>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed">
              Nuestro equipo está conformado exclusivamente por profesionales con más de 10 años de experiencia específica en terreno, faenas mineras, plantas agroindustriales y corporaciones tecnológicas.
            </p>
          </div>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-6 pt-4 border-t border-slate-800">
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-blue-400 font-mono">28</span>
              <p className="text-xs text-slate-400 mt-1">Auditores Líderes Calificados</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-emerald-400 font-mono">100%</span>
              <p className="text-xs text-slate-400 mt-1">Aprobación en Auditorías</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-indigo-400 font-mono">+360</span>
              <p className="text-xs text-slate-400 mt-1">Proyectos Exitosos</p>
            </div>
            <div>
              <span className="text-3xl sm:text-4xl font-extrabold text-cyan-400 font-mono">16+</span>
              <p className="text-xs text-slate-400 mt-1">Años de Trayectoria</p>
            </div>
          </div>
        </div>

        {/* Regional Coverage Section */}
        <div className="bg-white p-8 sm:p-12 rounded-3xl border border-slate-200 shadow-md space-y-8 mb-16">
          <div className="text-center max-w-2xl mx-auto space-y-2">
            <span className="text-xs font-bold uppercase tracking-wider text-blue-700 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
              Presencia Internacional
            </span>
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900">
              Cobertura en Chile & Región Andina
            </h2>
            <p className="text-xs sm:text-sm text-slate-600">
              Operaciones directas con equipos locales y consultoría presencial en los principales centros industriales.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {COMPANY_INFO.operatingCountries.map((c, idx) => (
              <div
                key={idx}
                className="p-6 rounded-2xl bg-slate-50 border border-slate-200 space-y-3"
              >
                <div className="text-3xl">{c.flag}</div>
                <h3 className="font-bold text-slate-900 text-base">{c.name}</h3>
                <p className="text-xs text-slate-600">{c.status}</p>
                <span className="inline-block text-[11px] font-bold text-blue-700 bg-blue-50 px-2.5 py-1 rounded-md border border-blue-200">
                  +{c.projects} Proyectos
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* CTA Bar */}
        <div className="p-8 rounded-3xl bg-blue-700 text-white flex flex-col sm:flex-row items-center justify-between gap-6 shadow-xl">
          <div>
            <h3 className="text-xl font-bold">¿Listo para iniciar la transformación de su empresa?</h3>
            <p className="text-xs text-blue-100 mt-1">
              Conversé hoy mismo con nuestro equipo directivo en Santiago de Chile.
            </p>
          </div>
          <button
            onClick={() => onOpenQuote('Información Corporativa')}
            className="px-6 py-3 rounded-xl bg-white hover:bg-slate-100 text-blue-900 text-xs font-bold shadow-md transition-all shrink-0"
          >
            Solicitar Reunión Ejecutiva
          </button>
        </div>
      </div>
    </div>
  );
};
