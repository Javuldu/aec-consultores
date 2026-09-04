export interface ServiceItem {
  id: string;
  title: string;
  shortDescription: string;
  fullDescription: string;
  category: 'iso' | 'auditoria' | 'capacitacion' | 'normas-chilenas' | 'procesos';
  iconName: string;
  features: string[];
  deliverables: string[];
  durationEstimate: string;
  badge?: string;
  popular?: boolean;
}

export interface StandardItem {
  code: string;
  name: string;
  subtitle: string;
  category: 'calidad' | 'ambiente' | 'seguridad' | 'ciberseguridad' | 'inocuidad' | 'gobierno' | 'nch';
  description: string;
  benefits: string[];
  keyClauses: string[];
  idealFor: string[];
  typicalTimeline: string;
  tagColor: string;
}

export interface CaseStudy {
  id: string;
  clientSector: string;
  region: string;
  challenge: string;
  solution: string;
  results: string[];
  standardApplied: string;
  completionTime: string;
  quote: {
    text: string;
    author: string;
    role: string;
  };
}

export interface DiagnosticQuestion {
  id: string;
  title: string;
  description: string;
  options: {
    label: string;
    value: string;
    score: number;
    description?: string;
  }[];
}

export interface DiagnosticResult {
  score: number;
  readinessLevel: 'Inicial' | 'En Desarrollo' | 'Avanzado' | 'Listo para Certificación';
  summary: string;
  estimatedWeeks: number;
  recommendedSteps: string[];
  suggestedStandards: string[];
}

export interface FaqItem {
  question: string;
  answer: string;
  category: 'general' | 'iso' | 'metodologia' | 'costos' | 'auditorias';
}
