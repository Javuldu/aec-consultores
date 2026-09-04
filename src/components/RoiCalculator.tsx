import React, { useState } from 'react';
import { 
  Calculator, 
  TrendingUp, 
  DollarSign, 
  Percent, 
  ShieldCheck, 
  Award, 
  ArrowRight, 
  HelpCircle
} from 'lucide-react';

interface RoiCalculatorProps {
  onOpenQuote: (details: string) => void;
}

export const RoiCalculator: React.FC<RoiCalculatorProps> = ({ onOpenQuote }) => {
  const [employees, setEmployees] = useState<number>(35);
  const [annualRevenueClp, setAnnualRevenueClp] = useState<number>(450); // In Millions CLP
  const [certType, setCertType] = useState<string>('iso9001');

  // Multipliers based on certification
  const getFactor = () => {
    switch (certType) {
      case 'trinorma': return { efficiency: 0.22, tenderAdvantage: 0.35, label: 'Trinorma SIG (9001+14001+45001)' };
      case 'iso27001': return { efficiency: 0.18, tenderAdvantage: 0.40, label: 'ISO 27001 (Seguridad y Ciberseguridad)' };
      case 'nch2728': return { efficiency: 0.25, tenderAdvantage: 0.50, label: 'NCh 2728 (OTEC / SENCE)' };
      default: return { efficiency: 0.15, tenderAdvantage: 0.30, label: 'ISO 9001 (Calidad)' };
    }
  };

  const factor = getFactor();

  // Calculations in Millions CLP
  const estimatedSavings = Math.round(annualRevenueClp * 0.04 * factor.efficiency * 10) / 10;
  const tenderPotential = Math.round(annualRevenueClp * factor.tenderAdvantage * 10) / 10;
  const senceBenefit = Math.round(employees * 0.35 * 10) / 10; // Millions in tax deductible training
  const estimatedPaybackMonths = Math.max(1.8, Math.round((3.5 - (employees / 100)) * 10) / 10);

  const formatCLP = (amountMillions: number) => {
    return `$${amountMillions.toLocaleString('es-CL')}M CLP`;
  };

  return (
    <section id="calculadora-roi" className="py-24 bg-slate-50 relative overflow-hidden border-b border-slate-200">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-12">
          <div className="inline-flex items-center gap-2 px-3.5 py-1 rounded-full bg-blue-50 border border-blue-200 text-xs font-bold text-blue-800">
            <Calculator className="w-3.5 h-3.5 text-blue-700" />
            <span>Impacto Económico Estimado</span>
          </div>
          <h2 className="text-3xl sm:text-4xl font-extrabold text-slate-900 tracking-tight">
            Calculadora de Retorno de Inversión (ROI)
          </h2>
          <p className="text-slate-600 text-base leading-relaxed">
            Una certificación ISO con metodología Hin Shitsu no es un gasto administrativo, es un catalizador de ingresos y ahorro operativo comprobado.
          </p>
        </div>

        {/* Calculator Interactive Box */}
        <div className="max-w-5xl mx-auto rounded-3xl bg-white border border-slate-200 shadow-xl overflow-hidden">
          <div className="grid grid-cols-1 lg:grid-cols-12">
            {/* Input Controls (Left Column) */}
            <div className="lg:col-span-6 p-6 sm:p-8 space-y-6 border-b lg:border-b-0 lg:border-r border-slate-200">
              <h3 className="text-base font-bold text-slate-900 flex items-center gap-2">
                <span>Parámetros de su Empresa</span>
              </h3>

              {/* Certification Type Selector */}
              <div className="space-y-2">
                <label className="text-xs font-bold text-slate-700">
                  Objetivo de Certificación:
                </label>
                <div className="grid grid-cols-2 gap-2">
                  {[
                    { id: 'iso9001', label: 'ISO 9001 (Calidad)' },
                    { id: 'trinorma', label: 'Trinorma SIG (Integrada)' },
                    { id: 'iso27001', label: 'ISO 27001 (Ciberseguridad)' },
                    { id: 'nch2728', label: 'NCh 2728 (OTEC / SENCE)' },
                  ].map((item) => (
                    <button
                      key={item.id}
                      onClick={() => setCertType(item.id)}
                      className={`p-2.5 rounded-xl text-xs font-semibold text-left border transition-all ${
                        certType === item.id
                          ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-sm'
                          : 'bg-slate-50 border-slate-200 text-slate-600 hover:text-slate-900 hover:bg-slate-100'
                      }`}
                    >
                      {item.label}
                    </button>
                  ))}
                </div>
              </div>

              {/* Number of Employees Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Dotación de Colaboradores:</span>
                  <span className="font-mono font-bold text-blue-700 bg-blue-50 px-2 py-0.5 rounded border border-blue-200">
                    {employees} personas
                  </span>
                </div>
                <input
                  type="range"
                  min={5}
                  max={250}
                  step={5}
                  value={employees}
                  onChange={(e) => setEmployees(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-blue-700"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>5 colaboradores</span>
                  <span>100 colaboradores</span>
                  <span>250+ colaboradores</span>
                </div>
              </div>

              {/* Estimated Annual Revenue Slider */}
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs">
                  <span className="font-bold text-slate-700">Facturación Anual / Licitaciones:</span>
                  <span className="font-mono font-bold text-indigo-700 bg-indigo-50 px-2 py-0.5 rounded border border-indigo-200">
                    ${annualRevenueClp}M CLP
                  </span>
                </div>
                <input
                  type="range"
                  min={50}
                  max={3000}
                  step={50}
                  value={annualRevenueClp}
                  onChange={(e) => setAnnualRevenueClp(Number(e.target.value))}
                  className="w-full h-2 bg-slate-200 rounded-lg appearance-none cursor-pointer accent-indigo-700"
                />
                <div className="flex justify-between text-[10px] text-slate-500 font-medium">
                  <span>$50M CLP</span>
                  <span>$1.500M CLP</span>
                  <span>$3.000M+ CLP</span>
                </div>
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200 text-xs text-slate-600 flex items-start gap-2">
                <HelpCircle className="w-4 h-4 text-blue-600 mt-0.5 shrink-0" />
                <span>
                  Las estimaciones se basan en benchmarks históricos de más de 360 empresas asesoradas por AEC Consultores.
                </span>
              </div>
            </div>

            {/* Projected ROI Results (Right Column) */}
            <div className="lg:col-span-6 p-6 sm:p-8 bg-slate-50/80 flex flex-col justify-between space-y-6">
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <h3 className="text-base font-bold text-slate-900">Retorno Estimado para su Empresa</h3>
                  <span className="px-2.5 py-0.5 rounded-full bg-emerald-50 border border-emerald-200 text-emerald-800 text-xs font-bold">
                    Alto Rendimiento
                  </span>
                </div>

                {/* Primary Metric Cards */}
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[11px] text-slate-500 font-bold block mb-1">Ahorro Operativo Anual</span>
                    <span className="text-2xl font-extrabold text-emerald-700 font-mono">
                      {formatCLP(estimatedSavings)}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">Por reducción de mermas y reprocesos</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[11px] text-slate-500 font-bold block mb-1">Capacidad Licitatoria Extra</span>
                    <span className="text-2xl font-extrabold text-blue-700 font-mono">
                      {formatCLP(tenderPotential)}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">Apertura en Mercado Público y privados</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[11px] text-slate-500 font-bold block mb-1">Franquicia SENCE Estimada</span>
                    <span className="text-2xl font-extrabold text-indigo-700 font-mono">
                      {formatCLP(senceBenefit)}
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">Deducible del impuesto de 1ª categoría</span>
                  </div>

                  <div className="p-4 rounded-2xl bg-white border border-slate-200 shadow-sm">
                    <span className="text-[11px] text-slate-500 font-bold block mb-1">Retorno de Inversión (Payback)</span>
                    <span className="text-2xl font-extrabold text-amber-700 font-mono">
                      ~{estimatedPaybackMonths} Meses
                    </span>
                    <span className="text-[10px] text-slate-500 block mt-1">Recuperación estimada de la asesoría</span>
                  </div>
                </div>
              </div>

              {/* Action Button */}
              <div className="pt-4 border-t border-slate-200">
                <button
                  onClick={() => onOpenQuote(`Cotización basada en ROI (${factor.label}, ${employees} personas, ${annualRevenueClp}M CLP)`)}
                  className="w-full py-3.5 px-5 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-xs sm:text-sm shadow-lg shadow-blue-700/20 transition-all flex items-center justify-center gap-2"
                >
                  <Award className="w-4 h-4" />
                  <span>Solicitar Plan de Implementación a Medida</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
