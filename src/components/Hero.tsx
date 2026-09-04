import React from 'react';
import { COMPANY_INFO } from '../data/aecData';
import { 
  Award, 
  CheckCircle2, 
  ShieldCheck, 
  TrendingUp, 
  ArrowRight, 
  Calculator, 
  Sparkles,
  Users,
  Building2,
  Cpu,
  Pickaxe,
  Leaf,
  Globe2
} from 'lucide-react';

interface HeroProps {
  onOpenDiagnostic: () => void;
  onOpenQuote: (service?: string) => void;
  onSelectStandard: (code: string) => void;
}

export const Hero: React.FC<HeroProps> = ({ onOpenDiagnostic, onOpenQuote, onSelectStandard }) => {
  const quickStandards = [
    { code: 'ISO 9001:2015', name: 'Calidad & Clientes', color: 'border-[#006AB4]/30 bg-[#e6f3fa] text-[#006AB4] hover:border-[#006AB4] hover:bg-[#d0e7f7]' },
    { code: 'Trinorma SIG', name: 'Calidad + Ambiente + SSO', color: 'border-[#111C2C]/20 bg-[#111C2C]/5 text-[#111C2C] hover:border-[#111C2C] hover:bg-[#111C2C]/10' },
    { code: 'ISO/IEC 27001:2022', name: 'Ciberseguridad & Datos', color: 'border-[#006AB4]/30 bg-[#e6f3fa] text-[#006AB4] hover:border-[#006AB4] hover:bg-[#d0e7f7]' },
    { code: 'ISO 14001:2015', name: 'Gestión Ambiental', color: 'border-emerald-200 bg-emerald-50 text-emerald-800 hover:border-emerald-400 hover:bg-emerald-100' },
    { code: 'ISO 45001:2018', name: 'Seguridad & Salud Laboral', color: 'border-[#FF6B00]/30 bg-[#fff3eb] text-[#FF6B00] hover:border-[#FF6B00] hover:bg-[#ffe2cc]' },
    { code: 'NCh 2728:2015', name: 'Acreditación OTEC / SENCE', color: 'border-[#006AB4]/30 bg-[#e6f3fa] text-[#006AB4] hover:border-[#006AB4] hover:bg-[#d0e7f7]' },
  ];

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-24 bg-gradient-to-b from-[#F8FAFC] via-white to-slate-100/60 border-b border-slate-200">
      {/* Refined subtle background pattern */}
      <div className="absolute inset-0 bg-[radial-gradient(#cbd5e1_1px,transparent_1px)] [background-size:24px_24px] opacity-50 pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto space-y-6">
          {/* Superbadge */}
          <div className="inline-flex items-center gap-2 px-3 sm:px-4 py-1.5 rounded-full bg-white border border-slate-200 text-xs font-semibold text-[#64748B] shadow-sm max-w-full">
            <span className="flex h-2 w-2 relative shrink-0">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-[#FF6B00] opacity-75"></span>
              <span className="relative inline-flex rounded-full h-2 w-2 bg-[#FF6B00]"></span>
            </span>
            <span className="text-[#006AB4] font-bold">Metodología Hin Shitsu</span>
            <span className="hidden sm:inline text-slate-300">|</span>
            <span className="hidden sm:inline text-[#111C2C]">Garantía de Certificación en Chile y Región Andina</span>
          </div>

          {/* Main Title */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl font-extrabold tracking-tight text-[#111C2C] leading-[1.15]">
            Consultoría Estratégica & Certificaciones ISO que{' '}
            <span className="text-[#006AB4] underline decoration-[#FF6B00]/40 decoration-wavy decoration-2">
              Multiplican sus Negocios
            </span>
          </h1>

          {/* Subtitle */}
          <p className="text-lg sm:text-xl text-[#64748B] max-w-3xl mx-auto font-normal leading-relaxed">
            Especialistas en diseño, implementación ágil, auditorías y capacitación para normativas{' '}
            <strong className="text-[#111C2C] font-semibold">ISO 9001, 14001, 45001, 27001</strong> y{' '}
            <strong className="text-[#111C2C] font-semibold">Normas Chilenas NCh</strong>. Eliminamos la burocracia documental para entregarle un Sistema de Gestión rentable y 100% auditable.
          </p>

          {/* Action CTAs */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3">
            <button
              onClick={onOpenDiagnostic}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2.5 px-6 py-3.5 rounded-xl bg-[#006AB4] hover:bg-[#005694] text-white font-bold text-base shadow-lg shadow-[#006AB4]/25 transition-all transform hover:-translate-y-0.5 group"
            >
              <Calculator className="w-5 h-5 text-[#FF6B00]" />
              <span>Diagnóstico Gap Gratuito (2 min)</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button
              onClick={() => onOpenQuote()}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-xl bg-white hover:bg-[#F8FAFC] text-[#111C2C] font-bold text-base border border-slate-300 shadow-sm transition-all hover:border-[#006AB4]"
            >
              <span>Agendar Asesoría con Consultor Senior</span>
            </button>
          </div>

          {/* Quick Standards Selector */}
          <div className="pt-6">
            <p className="text-xs uppercase tracking-wider text-[#64748B] font-bold mb-3">
              Seleccione la norma de su interés para ver alcance y requisitos:
            </p>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {quickStandards.map((std) => (
                <button
                  key={std.code}
                  onClick={() => onSelectStandard(std.code)}
                  className={`px-3.5 py-1.5 rounded-xl text-xs font-bold border transition-all ${std.color}`}
                >
                  {std.code} <span className="font-medium opacity-80">({std.name})</span>
                </button>
              ))}
            </div>
          </div>
        </div>

        {/* Corporate Trust & Stat Highlights Grid */}
        <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6">
          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#006AB4]/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#006AB4] font-mono">
                {COMPANY_INFO.stats.approvalRate}%
              </span>
              <div className="p-2 rounded-xl bg-[#e6f3fa] text-[#006AB4] border border-[#006AB4]/20 group-hover:scale-105 transition-transform">
                <Award className="w-5 h-5 text-[#FF6B00]" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#111C2C] mb-1">Aprobación en Auditorías</h3>
            <p className="text-xs text-[#64748B]">100% de éxito garantizado contractualmente ante casas certificadoras.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#006AB4]/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#111C2C] font-mono">
                +{COMPANY_INFO.stats.yearsExperience} Años
              </span>
              <div className="p-2 rounded-xl bg-[#111C2C]/5 text-[#111C2C] border border-[#111C2C]/10 group-hover:scale-105 transition-transform">
                <TrendingUp className="w-5 h-5 text-[#006AB4]" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#111C2C] mb-1">Experiencia y Liderazgo</h3>
            <p className="text-xs text-[#64748B]">Trayectoria consolidada en gestión de calidad y optimización de procesos.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#006AB4]/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#006AB4] font-mono">
                +{COMPANY_INFO.stats.projectsCompleted}
              </span>
              <div className="p-2 rounded-xl bg-[#e6f3fa] text-[#006AB4] border border-[#006AB4]/20 group-hover:scale-105 transition-transform">
                <ShieldCheck className="w-5 h-5 text-[#006AB4]" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#111C2C] mb-1">Proyectos Certificados</h3>
            <p className="text-xs text-[#64748B]">Empresas asesoradas con éxito en Chile, Colombia, Perú y Ecuador.</p>
          </div>

          <div className="p-6 rounded-2xl bg-white border border-slate-200 shadow-sm hover:shadow-md hover:border-[#006AB4]/40 transition-all group">
            <div className="flex items-center justify-between mb-2">
              <span className="text-3xl sm:text-4xl font-extrabold text-[#FF6B00] font-mono">
                4 Países
              </span>
              <div className="p-2 rounded-xl bg-[#fff3eb] text-[#FF6B00] border border-[#FF6B00]/20 group-hover:scale-105 transition-transform">
                <Globe2 className="w-5 h-5 text-[#FF6B00]" />
              </div>
            </div>
            <h3 className="text-sm font-bold text-[#111C2C] mb-1">Presencia Regional</h3>
            <p className="text-xs text-[#64748B]">Consultores senior locales con conocimiento normativo específico.</p>
          </div>
        </div>

        {/* Sectors Served Bar */}
        <div className="mt-12 pt-8 border-t border-slate-200">
          <p className="text-center text-xs font-bold uppercase tracking-wider text-[#64748B] mb-6">
            Especialistas en sectores de alta exigencia técnica y regulatoria:
          </p>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3">
            {[
              { icon: Pickaxe, label: 'Minería & Proveedores', sub: 'Normas ISO & Faena' },
              { icon: Cpu, label: 'Tecnología & SaaS', sub: 'ISO 27001 Ciberseguridad' },
              { icon: Leaf, label: 'Agroindustria & Alimentos', sub: 'HACCP / ISO 22000' },
              { icon: Building2, label: 'Construcción & Obras', sub: 'Calidad & Seguridad' },
              { icon: Users, label: 'Capacitación (OTEC)', sub: 'NCh 2728 SENCE' },
              { icon: ShieldCheck, label: 'Servicios Corporativos', sub: 'Trinorma & Compliance' },
            ].map((sec, idx) => {
              const Icon = sec.icon;
              return (
                <div 
                  key={idx} 
                  className="flex flex-col items-center text-center p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm hover:border-[#006AB4]/40 transition-colors"
                >
                  <Icon className="w-5 h-5 text-[#006AB4] mb-1.5" />
                  <span className="text-xs font-bold text-[#111C2C]">{sec.label}</span>
                  <span className="text-[10px] text-[#64748B]">{sec.sub}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
