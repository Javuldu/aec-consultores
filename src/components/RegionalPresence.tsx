import React from 'react';
import { COMPANY_INFO } from '../data/aecData';
import { 
  Globe2, 
  MapPin, 
  Building2, 
  ShieldCheck, 
  Phone, 
  Mail, 
  ArrowRight,
  Sparkles
} from 'lucide-react';

interface RegionalPresenceProps {
  onOpenQuote: () => void;
}

export const RegionalPresence: React.FC<RegionalPresenceProps> = ({ onOpenQuote }) => {
  return (
    <section className="py-20 bg-slate-50 border-b border-slate-200 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-center">
          {/* Left info */}
          <div className="lg:col-span-5 space-y-6">
            <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
              <Globe2 className="w-3.5 h-3.5 text-blue-700" />
              <span>Cobertura en la Región Andina</span>
            </div>

            <h2 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Casa Matriz en Santiago y Capacidad Operativa Regional
            </h2>

            <p className="text-sm text-slate-600 leading-relaxed">
              Desde nuestra sede en Santiago de Chile, coordinamos proyectos de consultoría, auditorías y certificaciones en todo el territorio nacional y en los principales polos industriales de Colombia, Perú y Ecuador.
            </p>

            <div className="space-y-3 pt-2">
              <div className="flex items-start gap-3 p-3.5 rounded-xl bg-white border border-slate-200 shadow-sm">
                <MapPin className="w-5 h-5 text-blue-700 shrink-0 mt-0.5" />
                <div className="text-xs">
                  <strong className="text-slate-900 block font-bold">Sede Central:</strong>
                  <span className="text-slate-600">{COMPANY_INFO.address}</span>
                </div>
              </div>

              <div className="flex items-center gap-4 text-xs text-slate-600 font-medium">
                <a href={`tel:${COMPANY_INFO.phoneClean}`} className="flex items-center gap-1.5 hover:text-blue-700">
                  <Phone className="w-4 h-4 text-blue-700" />
                  <span>{COMPANY_INFO.phone}</span>
                </a>
                <a href={`mailto:${COMPANY_INFO.email}`} className="flex items-center gap-1.5 hover:text-blue-700">
                  <Mail className="w-4 h-4 text-blue-700" />
                  <span>{COMPANY_INFO.email}</span>
                </a>
              </div>
            </div>
          </div>

          {/* Right Country Cards */}
          <div className="lg:col-span-7 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {COMPANY_INFO.operatingCountries.map((c, idx) => (
              <div
                key={idx}
                className="p-5 rounded-2xl bg-white border border-slate-200 hover:border-blue-400 hover:shadow-md transition-all space-y-3 shadow-sm"
              >
                <div className="flex items-center justify-between">
                  <div className="flex items-center gap-2.5">
                    <span className="text-2xl" role="img" aria-label={c.name}>{c.flag}</span>
                    <h3 className="font-bold text-slate-900 text-base">{c.name}</h3>
                  </div>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-mono font-bold bg-blue-50 text-blue-800 border border-blue-200">
                    +{c.projects} Proyectos
                  </span>
                </div>

                <p className="text-xs text-slate-600 leading-relaxed">
                  {c.status}
                </p>

                <div className="pt-2 border-t border-slate-100 flex items-center justify-between text-[11px] text-slate-500">
                  <span className="flex items-center gap-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    Auditores Senior Locales
                  </span>
                  <span className="text-blue-700 font-bold">100% Cobertura</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
