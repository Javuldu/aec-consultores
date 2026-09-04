import React from 'react';
import { Breadcrumbs } from '../components/Breadcrumbs';
import { ContactSection } from '../components/ContactSection';
import { Mail, Phone, MapPin, Clock, MessageSquare } from 'lucide-react';
import { COMPANY_INFO } from '../data/aecData';

interface ContactPageProps {
  initialService?: string;
  onNavigate: (page: string) => void;
}

export const ContactPage: React.FC<ContactPageProps> = ({ initialService, onNavigate }) => {
  return (
    <div className="py-12 sm:py-16 bg-slate-50 min-h-screen">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <Breadcrumbs currentPage="Contacto & Solicitud de Propuesta" onNavigate={onNavigate} />

        {/* Page Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>Atención Inmediata & Asesoría Senior</span>
          </div>

          <h1 className="text-3xl sm:text-5xl font-extrabold text-slate-900 tracking-tight">
            Contacto & Solicitud de Propuesta
          </h1>

          <p className="text-slate-600 text-base sm:text-lg leading-relaxed">
            Póngase en contacto con nuestro equipo directivo en Santiago de Chile o solicite una propuesta formal adaptada al tamaño y rubro de su empresa.
          </p>
        </div>

        {/* Contact Section Component */}
        <ContactSection initialService={initialService} />
      </div>
    </div>
  );
};
