import React, { useState } from 'react';
import { COMPANY_INFO } from '../data/aecData';
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  Send, 
  CheckCircle2, 
  Building2, 
  Video, 
  MessageSquare, 
  ShieldCheck,
  Sparkles
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface ContactSectionProps {
  initialService?: string;
}

export const ContactSection: React.FC<ContactSectionProps> = ({ initialService }) => {
  const [formData, setFormData] = useState({
    fullName: '',
    email: '',
    phone: '',
    company: '',
    country: 'Chile',
    serviceNeeded: initialService || 'ISO 9001:2015 (Calidad)',
    meetingType: 'videollamada',
    message: ''
  });

  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
    try {
      confetti({
        particleCount: 70,
        spread: 60,
        origin: { y: 0.7 }
      });
    } catch {
      // ignore
    }
  };

  const whatsappMessage = `Hola AEC Consultores, mi nombre es ${formData.fullName || 'Interesado'} de la empresa ${formData.company || 'mi empresa'}. Deseo cotizar: ${formData.serviceNeeded}. País: ${formData.country}.`;

  return (
    <section id="contacto" className="py-24 bg-white relative border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Mail className="w-3.5 h-3.5 text-blue-700" />
            <span>Contacto Directo & Cotizaciones</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Comience su Proceso de Certificación Hoy
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Agende una sesión de diagnóstico de 30 minutos sin costo con uno de nuestros consultores senior o solicite una propuesta formal inmediata.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
          {/* Contact Details & Office Map (Left 5 Cols) */}
          <div className="lg:col-span-5 space-y-6">
            <div className="p-6 rounded-3xl bg-slate-50 border border-slate-200 space-y-5 shadow-sm">
              <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2">
                <Building2 className="w-5 h-5 text-blue-700" />
                <span>Casa Matriz Santiago de Chile</span>
              </h3>

              <div className="space-y-4 text-xs sm:text-sm text-slate-600">
                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-blue-700 border border-slate-200 shadow-xs shrink-0 mt-0.5">
                    <MapPin className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Dirección:</strong>
                    <span>{COMPANY_INFO.address}</span>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-blue-700 border border-slate-200 shadow-xs shrink-0 mt-0.5">
                    <Phone className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Teléfono Central:</strong>
                    <a href={`tel:${COMPANY_INFO.phoneClean}`} className="hover:text-blue-700 transition-colors">
                      {COMPANY_INFO.phone}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-blue-700 border border-slate-200 shadow-xs shrink-0 mt-0.5">
                    <Mail className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Correo Electrónico:</strong>
                    <a href={`mailto:${COMPANY_INFO.email}`} className="hover:text-blue-700 transition-colors">
                      {COMPANY_INFO.email}
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-3">
                  <div className="p-2 rounded-xl bg-white text-blue-700 border border-slate-200 shadow-xs shrink-0 mt-0.5">
                    <Clock className="w-4 h-4" />
                  </div>
                  <div>
                    <strong className="text-slate-900 block font-bold">Horario de Atención:</strong>
                    <span>Lunes a Viernes de 08:30 a 18:30 hrs (GMT-3)</span>
                  </div>
                </div>
              </div>

              {/* Direct WhatsApp Callout */}
              <div className="pt-4 border-t border-slate-200">
                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent('Hola AEC Consultores, deseo solicitar información sobre sus servicios.')}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 p-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold transition-all shadow-md"
                >
                  <MessageSquare className="w-4 h-4" />
                  <span>Chatear por WhatsApp ({COMPANY_INFO.whatsappDisplay})</span>
                </a>
              </div>
            </div>

            {/* Regional Network summary */}
            <div className="p-5 rounded-2xl bg-white border border-slate-200 text-xs text-slate-600 space-y-2 shadow-sm">
              <span className="font-bold text-slate-900 block">Red de Consultores en Latinoamérica:</span>
              <p className="leading-relaxed">
                Atendemos proyectos de auditoría y certificación in-situ en regiones de Chile (Antofagasta, Calama, Concepción, Puerto Montt) y en Colombia, Perú y Ecuador.
              </p>
            </div>
          </div>

          {/* Interactive Request Form (Right 7 Cols) */}
          <div className="lg:col-span-7">
            <div className="p-6 sm:p-8 rounded-3xl bg-white border border-slate-200 shadow-xl">
              {submitted ? (
                <div className="text-center py-10 space-y-4 animate-in fade-in">
                  <div className="w-14 h-14 bg-emerald-50 text-emerald-700 border border-emerald-200 rounded-2xl flex items-center justify-center mx-auto">
                    <CheckCircle2 className="w-8 h-8" />
                  </div>
                  <h3 className="text-2xl font-bold text-slate-900">
                    ¡Solicitud Recibida con Éxito!
                  </h3>
                  <p className="text-sm text-slate-600 max-w-md mx-auto leading-relaxed">
                    Hemos asignado su requerimiento a un Consultor Senior de AEC. Nos pondremos en contacto con usted en menos de 2 horas hábiles al correo <strong>{formData.email}</strong>.
                  </p>

                  <div className="pt-4 space-y-3">
                    <a
                      href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(whatsappMessage)}`}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex items-center gap-2 px-6 py-3 rounded-xl bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-bold shadow-lg transition-all"
                    >
                      <MessageSquare className="w-4 h-4" />
                      <span>Confirmar y adelantar detalles por WhatsApp</span>
                    </a>

                    <div>
                      <button
                        onClick={() => setSubmitted(false)}
                        className="text-xs text-slate-500 hover:text-slate-800 transition-colors mt-2 font-medium"
                      >
                        Enviar otra solicitud
                      </button>
                    </div>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-4">
                  <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-2">
                    <Sparkles className="w-4 h-4 text-blue-700" />
                    <span>Formulario de Solicitud de Propuesta & Diagnóstico</span>
                  </h3>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Nombre y Apellidos *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Andrés Morales"
                        value={formData.fullName}
                        onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Correo Corporativo *
                      </label>
                      <input
                        type="email"
                        required
                        placeholder="amorales@empresa.cl"
                        value={formData.email}
                        onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Teléfono / WhatsApp *
                      </label>
                      <input
                        type="tel"
                        required
                        placeholder="+56 9 1234 5678"
                        value={formData.phone}
                        onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Empresa / Organización *
                      </label>
                      <input
                        type="text"
                        required
                        placeholder="Ej. Minera o Maestranza SpA"
                        value={formData.company}
                        onChange={(e) => setFormData({ ...formData, company: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 focus:ring-1 focus:ring-blue-600"
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        Norma o Servicio de Interés *
                      </label>
                      <select
                        value={formData.serviceNeeded}
                        onChange={(e) => setFormData({ ...formData, serviceNeeded: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      >
                        <option value="ISO 9001:2015 (Calidad)">ISO 9001:2015 (Calidad)</option>
                        <option value="Trinorma SIG (ISO 9001 + 14001 + 45001)">Trinorma SIG (Integrada)</option>
                        <option value="ISO/IEC 27001:2022 (Ciberseguridad)">ISO/IEC 27001:2022 (Ciberseguridad)</option>
                        <option value="ISO 14001:2015 (Medio Ambiente)">ISO 14001:2015 (Medio Ambiente)</option>
                        <option value="ISO 45001:2018 (Seguridad y Salud)">ISO 45001:2018 (Seguridad y Salud)</option>
                        <option value="NCh 2728:2015 (Acreditación OTEC)">NCh 2728:2015 (Acreditación OTEC)</option>
                        <option value="NCh 3262 (Igualdad y Conciliación)">NCh 3262 (Igualdad y Conciliación)</option>
                        <option value="ISO 22000 / HACCP (Alimentos)">ISO 22000 / HACCP (Alimentos)</option>
                        <option value="Auditoría Interna / Diagnóstico">Auditoría Interna / Diagnóstico</option>
                        <option value="Capacitación SENCE In-Company">Capacitación SENCE In-Company</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-xs font-bold text-slate-700 mb-1">
                        País de la Operación
                      </label>
                      <select
                        value={formData.country}
                        onChange={(e) => setFormData({ ...formData, country: e.target.value })}
                        className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 focus:outline-none focus:border-blue-600"
                      >
                        <option value="Chile">🇨🇱 Chile</option>
                        <option value="Colombia">🇨🇴 Colombia</option>
                        <option value="Perú">🇵🇪 Perú</option>
                        <option value="Ecuador">🇪🇨 Ecuador</option>
                        <option value="Otro">🌐 Otro País</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Modalidad Preferida de Reunión
                    </label>
                    <div className="grid grid-cols-3 gap-2 text-xs">
                      {[
                        { id: 'videollamada', label: 'Videollamada', icon: Video },
                        { id: 'oficina', label: 'Oficina Providencia', icon: Building2 },
                        { id: 'terreno', label: 'Visita a Faena', icon: MapPin },
                      ].map((item) => {
                        const Icon = item.icon;
                        const isSel = formData.meetingType === item.id;
                        return (
                          <button
                            type="button"
                            key={item.id}
                            onClick={() => setFormData({ ...formData, meetingType: item.id })}
                            className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 transition-all ${
                              isSel
                                ? 'bg-blue-50 border-blue-600 text-blue-900 font-bold shadow-xs'
                                : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                            }`}
                          >
                            <Icon className="w-3.5 h-3.5" />
                            <span className="text-[11px]">{item.label}</span>
                          </button>
                        );
                      })}
                    </div>
                  </div>

                  <div>
                    <label className="block text-xs font-bold text-slate-700 mb-1">
                      Detalles o Plazo Objetivo (Opcional):
                    </label>
                    <textarea
                      rows={3}
                      placeholder="Ej. Requerimos certificar antes de fin de año por exigencia de licitación..."
                      value={formData.message}
                      onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                      className="w-full px-3.5 py-2.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-900 placeholder-slate-400 focus:outline-none focus:border-blue-600 resize-none"
                    />
                  </div>

                  <button
                    type="submit"
                    className="w-full py-3.5 px-6 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md shadow-blue-700/20 transition-all flex items-center justify-center gap-2 mt-2"
                  >
                    <Send className="w-4 h-4" />
                    <span>Enviar Solicitud de Cotización</span>
                  </button>

                  <div className="flex items-center justify-center gap-2 text-[11px] text-slate-500 pt-1">
                    <ShieldCheck className="w-3.5 h-3.5 text-emerald-600" />
                    <span>Confidencialidad garantizada bajo acuerdo NDA estricto.</span>
                  </div>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
