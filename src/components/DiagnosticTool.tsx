import React, { useState } from 'react';
import { DIAGNOSTIC_QUESTIONS, COMPANY_INFO } from '../data/aecData';
import { 
  Calculator, 
  CheckCircle2, 
  ArrowRight, 
  ArrowLeft, 
  RotateCcw, 
  Sparkles, 
  ShieldCheck, 
  MessageSquare,
  FileCheck2,
  X
} from 'lucide-react';
import confetti from 'canvas-confetti';

interface DiagnosticToolProps {
  isOpen: boolean;
  onClose: () => void;
  onOpenQuoteWithData: (diagnosticSummary: string) => void;
}

export const DiagnosticTool: React.FC<DiagnosticToolProps> = ({
  isOpen,
  onClose,
  onOpenQuoteWithData
}) => {
  const [currentStep, setCurrentStep] = useState(0);
  const [answers, setAnswers] = useState<Record<string, string>>({});
  const [isCalculated, setIsCalculated] = useState(false);

  if (!isOpen) return null;

  const currentQ = DIAGNOSTIC_QUESTIONS[currentStep];

  const handleSelectOption = (questionId: string, value: string) => {
    setAnswers(prev => ({ ...prev, [questionId]: value }));
  };

  const handleNext = () => {
    if (currentStep < DIAGNOSTIC_QUESTIONS.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult();
    }
  };

  const handlePrev = () => {
    if (currentStep > 0) {
      setCurrentStep(prev => prev - 1);
    }
  };

  const calculateResult = () => {
    setIsCalculated(true);
    try {
      confetti({
        particleCount: 80,
        spread: 70,
        origin: { y: 0.6 }
      });
    } catch {
      // ignore
    }
  };

  const handleReset = () => {
    setAnswers({});
    setCurrentStep(0);
    setIsCalculated(false);
  };

  // Compute metrics based on selected answers
  const computeReadiness = () => {
    let score = 30; // base score
    if (answers['currentStatus'] === 'cero') score += 10;
    if (answers['currentStatus'] === 'parcial') score += 35;
    if (answers['currentStatus'] === 'maduro') score += 55;
    if (answers['currentStatus'] === 'renovacion') score += 65;

    if (answers['companySize'] === 'grande') score += 10;
    if (answers['companySize'] === 'mediana') score += 8;

    score = Math.min(score, 95);

    let level = 'En Desarrollo';
    let timelineWeeks = 16;

    if (score < 45) {
      level = 'Nivel Inicial / Diagnóstico Base';
      timelineWeeks = 18;
    } else if (score < 75) {
      level = 'Nivel Intermedio / Formalización';
      timelineWeeks = 14;
    } else {
      level = 'Nivel Avanzado / Pre-Auditoría';
      timelineWeeks = 10;
    }

    if (answers['timelineGoal'] === 'urgente') {
      timelineWeeks = Math.max(8, timelineWeeks - 4);
    }

    return {
      score,
      level,
      timelineWeeks,
      monthsEst: Math.ceil(timelineWeeks / 4),
      standardSelected: answers['targetStandard'] || 'ISO 9001:2015',
      industrySelected: answers['industry'] || 'General'
    };
  };

  const result = computeReadiness();
  const summaryText = `Diagnóstico AEC Consultores: Norma=${result.standardSelected}, Sector=${result.industrySelected}, Nivel=${result.level}, Score=${result.score}%, Estimación=${result.monthsEst} meses`;

  return (
    <div className="fixed inset-0 z-50 overflow-y-auto bg-slate-900/60 backdrop-blur-sm flex items-center justify-center p-4 sm:p-6 animate-in fade-in duration-200">
      <div className="relative w-full max-w-2xl bg-white border border-slate-200 rounded-3xl shadow-2xl overflow-hidden text-slate-900 my-8">
        {/* Header */}
        <div className="px-4 sm:px-6 py-4 sm:py-5 bg-slate-50 border-b border-slate-200 flex items-center justify-between">
          <div className="flex items-center gap-3 pr-2">
            <div className="p-2 rounded-xl bg-blue-50 border border-blue-200 text-blue-700 shrink-0">
              <Calculator className="w-5 h-5" />
            </div>
            <div>
              <h2 className="text-base sm:text-lg font-bold text-slate-900 flex flex-wrap items-center gap-1.5 sm:gap-2">
                <span>Diagnóstico de Brecha</span>
                <span className="text-xs px-2 py-0.5 rounded-full bg-blue-50 text-blue-800 border border-blue-200 font-bold">
                  Gratuito
                </span>
              </h2>
              <p className="text-[11px] sm:text-xs text-slate-500">
                Evalúe el estado de madurez de su empresa y obtenga su hoja de ruta
              </p>
            </div>
          </div>
          <button
            onClick={onClose}
            className="p-2 min-w-[40px] min-h-[40px] flex items-center justify-center rounded-lg text-slate-400 hover:text-slate-700 hover:bg-slate-100 transition-colors shrink-0"
            aria-label="Cerrar diagnóstico"
          >
            <X className="w-5 h-5" />
          </button>
        </div>

        {/* Content Body */}
        <div className="p-4 sm:p-6">
          {!isCalculated ? (
            <div>
              {/* Progress Bar */}
              <div className="mb-6">
                <div className="flex items-center justify-between text-xs text-slate-500 mb-2 font-semibold">
                  <span>Paso {currentStep + 1} de {DIAGNOSTIC_QUESTIONS.length}</span>
                  <span>{Math.round(((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100)}% Completado</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <div 
                    className="h-full bg-blue-700 transition-all duration-300"
                    style={{ width: `${((currentStep + 1) / DIAGNOSTIC_QUESTIONS.length) * 100}%` }}
                  />
                </div>
              </div>

              {/* Question */}
              <div className="space-y-4 mb-6">
                <h3 className="text-lg font-bold text-slate-900">{currentQ.title}</h3>
                <p className="text-xs text-slate-500">{currentQ.description}</p>

                <div className="space-y-2.5 pt-2">
                  {currentQ.options.map((opt) => {
                    const isSelected = answers[currentQ.id] === opt.value;
                    return (
                      <button
                        key={opt.value}
                        onClick={() => handleSelectOption(currentQ.id, opt.value)}
                        className={`w-full text-left p-4 rounded-xl border transition-all flex items-center justify-between ${
                          isSelected
                            ? 'bg-blue-50 border-blue-600 text-blue-900 shadow-xs ring-1 ring-blue-600'
                            : 'bg-slate-50 border-slate-200 hover:border-slate-300 text-slate-700 hover:bg-slate-100'
                        }`}
                      >
                        <span className="text-sm font-semibold">{opt.label}</span>
                        <div className={`w-5 h-5 rounded-full border flex items-center justify-center ${
                          isSelected ? 'border-blue-700 bg-blue-700 text-white' : 'border-slate-300'
                        }`}>
                          {isSelected && <CheckCircle2 className="w-3.5 h-3.5" />}
                        </div>
                      </button>
                    );
                  })}
                </div>
              </div>

              {/* Navigation buttons */}
              <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-2">
                <button
                  onClick={handlePrev}
                  disabled={currentStep === 0}
                  className={`inline-flex items-center justify-center min-h-[44px] gap-1.5 px-4 py-2.5 rounded-xl text-xs font-bold ${
                    currentStep === 0 
                      ? 'text-slate-300 cursor-not-allowed' 
                      : 'text-slate-700 hover:text-slate-900 bg-slate-100 hover:bg-slate-200'
                  }`}
                >
                  <ArrowLeft className="w-4 h-4" />
                  <span>Anterior</span>
                </button>

                <button
                  onClick={handleNext}
                  disabled={!answers[currentQ.id]}
                  className={`inline-flex items-center justify-center min-h-[44px] gap-1.5 px-5 py-2.5 rounded-xl text-xs font-bold shadow-md transition-all ${
                    !answers[currentQ.id]
                      ? 'bg-slate-100 text-slate-400 cursor-not-allowed'
                      : 'bg-blue-700 hover:bg-blue-800 text-white'
                  }`}
                >
                  <span>{currentStep === DIAGNOSTIC_QUESTIONS.length - 1 ? 'Calcular Diagnóstico' : 'Siguiente'}</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          ) : (
            /* Results View */
            <div className="space-y-6">
              <div className="text-center space-y-2">
                <div className="inline-flex items-center justify-center p-3 rounded-2xl bg-blue-50 border border-blue-200 text-blue-700 mb-2">
                  <Sparkles className="w-8 h-8" />
                </div>
                <h3 className="text-2xl font-extrabold text-slate-900">
                  Diagnóstico de Madurez Completado
                </h3>
                <p className="text-sm text-slate-600 max-w-md mx-auto">
                  A continuación le presentamos su estimación de viabilidad y cronograma preliminar bajo metodología Hin Shitsu.
                </p>
              </div>

              {/* Metrics Grid */}
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-bold block mb-1">Madurez Estimada</span>
                  <span className="text-2xl font-extrabold text-blue-700 font-mono">{result.score}%</span>
                  <span className="text-[10px] text-slate-500 block mt-1">{result.level}</span>
                </div>

                <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-bold block mb-1">Tiempo Estimado</span>
                  <span className="text-2xl font-extrabold text-indigo-700 font-mono">{result.monthsEst} meses</span>
                  <span className="text-[10px] text-slate-500 block mt-1">({result.timelineWeeks} semanas de trabajo)</span>
                </div>

                <div className="col-span-2 sm:col-span-1 p-4 rounded-xl bg-slate-50 border border-slate-200 text-center">
                  <span className="text-xs text-slate-500 font-bold block mb-1">Garantía de Éxito</span>
                  <span className="text-2xl font-extrabold text-emerald-700 font-mono">100%</span>
                  <span className="text-[10px] text-slate-500 block mt-1">Contractual con AEC</span>
                </div>
              </div>

              {/* Action Plan Milestones */}
              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200 space-y-3">
                <h4 className="text-xs font-bold uppercase tracking-wider text-blue-800 flex items-center gap-1.5">
                  <ShieldCheck className="w-4 h-4 text-blue-700" />
                  Hoja de Ruta Recomendada:
                </h4>
                <ul className="text-xs text-slate-700 space-y-2">
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span><strong>Fase 1 (Semanas 1-2):</strong> Gap Analysis in-situ con consultor senior para mapeo de procesos clave.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span><strong>Fase 2 (Semanas 3-8):</strong> Documentación liviana, matrices de riesgo y capacitaciones con código SENCE.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span><strong>Fase 3 (Semanas 9-12):</strong> Auditoría interna de 1ª parte y cierre de desvíos con 0 No-Conformidades.</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0 mt-0.5" />
                    <span><strong>Fase 4:</strong> Acompañamiento presencial durante la auditoría externa de la Casa Certificadora.</span>
                  </li>
                </ul>
              </div>

              {/* Conversion Buttons */}
              <div className="space-y-2.5 pt-2">
                <button
                  onClick={() => {
                    onClose();
                    onOpenQuoteWithData(summaryText);
                  }}
                  className="w-full flex items-center justify-center gap-2 py-3 px-4 rounded-xl bg-blue-700 hover:bg-blue-800 text-white font-bold text-sm shadow-md transition-all"
                >
                  <FileCheck2 className="w-4 h-4" />
                  <span>Solicitar Propuesta Técnica y Económica Formal</span>
                </button>

                <a
                  href={`https://wa.me/${COMPANY_INFO.whatsapp}?text=${encodeURIComponent(`Hola AEC Consultores, realicé el diagnóstico online para ${result.standardSelected} en el sector ${result.industrySelected} (Madurez ${result.score}%, ${result.monthsEst} meses). Quisiera agendar una llamada.`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full flex items-center justify-center gap-2 py-2.5 px-4 rounded-xl bg-emerald-50 hover:bg-emerald-100 border border-emerald-200 text-emerald-800 text-xs font-bold transition-colors"
                >
                  <MessageSquare className="w-4 h-4 text-emerald-600" />
                  <span>Consultar de inmediato por WhatsApp (+56 2 2440 5103)</span>
                </a>

                <button
                  onClick={handleReset}
                  className="w-full flex items-center justify-center gap-1.5 py-2 text-xs text-slate-500 hover:text-slate-800 transition-colors font-medium"
                >
                  <RotateCcw className="w-3.5 h-3.5" />
                  <span>Reiniciar evaluación con otros parámetros</span>
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};
