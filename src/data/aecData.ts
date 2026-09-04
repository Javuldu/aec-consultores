import { ServiceItem, StandardItem, CaseStudy, DiagnosticQuestion, FaqItem } from '../types';

export const COMPANY_INFO = {
  name: 'AEC Consultores',
  tagline: 'Consultoría Estratégica, Gestión de Procesos y Certificación Internacional',
  phone: '(56 2) 2440 5103',
  phoneClean: '56224405103',
  whatsapp: '+5694405103',
  whatsappDisplay: '+56 9 4405 103',
  email: 'contacto@aecconsultores.com',
  address: 'Av. Providencia 1208, Oficina 705, Providencia, Santiago, Chile',
  operatingCountries: [
    { name: 'Chile', flag: '🇨🇱', status: 'Casa Matriz (Santiago, Antofagasta, Concepción)', projects: 220 },
    { name: 'Colombia', flag: '🇨🇴', status: 'Oficina Regional (Bogotá, Medellín)', projects: 65 },
    { name: 'Perú', flag: '🇵🇪', status: 'Operaciones (Lima, Arequipa)', projects: 45 },
    { name: 'Ecuador', flag: '🇪🇨', status: 'Proyectos Activos (Quito, Guayaquil)', projects: 30 },
  ],
  stats: {
    approvalRate: 100, // 100% de éxito en auditorías de certificación
    yearsExperience: 16,
    projectsCompleted: 360,
    certifiedAuditors: 28,
    clientSatisfaction: 98.6,
  }
};

export const SERVICES_DATA: ServiceItem[] = [
  {
    id: 'consultoria-iso',
    title: 'Implementación y Certificación de Normas ISO',
    shortDescription: 'Asesoría experta integral para diseñar, documentar y certificar Sistemas de Gestión bajo normas ISO 9001, 14001, 45001, 27001 y más.',
    fullDescription: 'Guiamos a su organización en todo el ciclo de adopción de estándares internacionales. Desde el diagnóstico de brechas (Gap Analysis) hasta el acompañamiento presencial en la auditoría de tercera parte, garantizando la certificación sin burocracia excesiva.',
    category: 'iso',
    iconName: 'Award',
    popular: true,
    badge: '100% Aprobación Garantizada',
    durationEstimate: '3 a 6 meses según alcance',
    features: [
      'Diagnóstico inicial de brechas (Gap Analysis detallado)',
      'Diseño y estandarización ágil de procesos operativos',
      'Elaboración de manuales, matrices de riesgo y procedimientos clave',
      'Capacitación al personal y formación de líderes de proceso',
      'Auditoría interna previa para asegurar 0 No-Conformidades mayores',
      'Acompañamiento presencial durante la auditoría del ente certificador'
    ],
    deliverables: [
      'Sistema de Gestión 100% operativo y digitalizado',
      'Matriz de Riesgos y Oportunidades según norma',
      'Informe de Auditoría Interna de 1ª parte',
      'Certificado de Aprobación de la Casa Certificadora'
    ]
  },
  {
    id: 'sistemas-integrados',
    title: 'Sistemas Integrados de Gestión (Trinorma SIG)',
    shortDescription: 'Integración sinérgica de Calidad (9001), Medio Ambiente (14001) y Seguridad (45001) optimizando hasta un 40% el esfuerzo administrativo.',
    fullDescription: 'Diseñamos arquitecturas de gestión unificadas que combinan los requisitos de múltiples normas bajo una estructura de alto nivel común (Anexo SL). Reduzca duplicidad de documentos y optimice auditorías.',
    category: 'iso',
    iconName: 'Layers',
    popular: true,
    badge: 'Alta Eficiencia',
    durationEstimate: '4 a 8 meses',
    features: [
      'Mapeo unificado de procesos bajo estructura Anexo SL',
      'Matriz integrada de riesgos (Calidad, Ambientales e IPERC)',
      'Sistema documental unificado (política única, objetivos alineados)',
      'Auditorías internas combinadas para reducir tiempos de parada',
      'Indicadores de desempeño (KPIs) transversales para la alta dirección'
    ],
    deliverables: [
      'Manual y Política Integrada de Gestión',
      'Matriz IPERC + Matriz de Aspectos Ambientales + Matriz Calidad',
      'Cuadro de Mando Integral para revisión por la dirección'
    ]
  },
  {
    id: 'auditorias-independientes',
    title: 'Auditorías de Diagnóstico, Internas y de Proveedores',
    shortDescription: 'Evaluación técnica imparcial con auditores líderes calificados para detectar desvíos, preparar auditorías externas y homologar cadena de suministro.',
    fullDescription: 'Servicio de auditoría de 1ª y 2ª parte realizado por consultores senior con credenciales IRCA. Identificamos brechas antes de que impacten sus operaciones o auditorías formales.',
    category: 'auditoria',
    iconName: 'ShieldCheck',
    durationEstimate: '1 a 3 semanas',
    features: [
      'Auditorías internas reglamentarias obligatorias para mantener certificación',
      'Auditorías de Diagnóstico previo a certificaciones (Mock Audits)',
      'Homologación y auditorías de segunda parte a proveedores críticos',
      'Auditorías de cumplimiento legal y regulatorio SEREMI / ambiental',
      'Planes de acción correctiva inmediatos con priorización de impacto'
    ],
    deliverables: [
      'Informe ejecutivo de auditoría con matriz de hallazgos',
      'Registro de No-Conformidades y Oportunidades de Mejora',
      'Taller de cierre con la Alta Dirección'
    ]
  },
  {
    id: 'capacitacion-sence',
    title: 'Capacitación Corporativa y Formación de Auditores',
    shortDescription: 'Cursos in-company y programas sincrónicos orientados a la práctica real, con franquicia tributaria SENCE disponible.',
    fullDescription: 'Programas de formación diseñados para empoderar a los colaboradores en la cultura de calidad, metodologías de mejora continua y técnicas de auditoría bajo norma ISO 19011.',
    category: 'capacitacion',
    iconName: 'GraduationCap',
    badge: 'Franquicia SENCE',
    durationEstimate: '16 a 40 horas cronológicas',
    features: [
      'Curso de Formación de Auditores Internos (ISO 9001, 14001, 45001, 27001)',
      'Taller de Gestión del Riesgo y Continuidad del Negocio',
      'Interpretación de Normas y Requisitos Legales Aplicables',
      'Metodología Hin Shitsu y Resolución de Problemas (5S, Ishikawa, Kaizen)',
      'Modalidades: Presencial, Híbrida y Sincrónica vía Aula Virtual'
    ],
    deliverables: [
      'Certificados de Aprobación individuales y colectivos',
      'Material de estudio, plantillas y casos de estudio reales',
      'Informe pedagógico de competencias adquiridas'
    ]
  },
  {
    id: 'normas-chilenas-seremi',
    title: 'Normas Chilenas NCh & Cumplimiento Regulatorio SEREMI',
    shortDescription: 'Acompañamiento especializado para NCh 2728 (OTEC), NCh 3262 (Equidad de Género) y tramitaciones sanitarias SEREMI.',
    fullDescription: 'Asesoramos en el estricto cumplimiento de estándares chilenos obligatorios para operar en rubros específicos como OTEC ante SENCE, sellos de igualdad y resoluciones sanitarias de funcionamiento.',
    category: 'normas-chilenas',
    iconName: 'FileCheck',
    durationEstimate: '2 a 4 meses',
    features: [
      'Implementación NCh 2728:2015 para creación y mantención de OTEC',
      'Implementación NCh 3262 para Sello Iguala-Conciliación',
      'Tramitación de Resoluciones Sanitarias ante SEREMI de Salud',
      'Elaboración de Planes de Emergencia y Evacuación según normativa',
      'Auditorías de preparación ante fiscalizaciones de la Dirección del Trabajo'
    ],
    deliverables: [
      'Expediente técnico completo para acreditación sectorial',
      'Resolución de Aprobación de la entidad reguladora',
      'Manual de Sistema de Gestión NCh operativo'
    ]
  },
  {
    id: 'optimizacion-procesos',
    title: 'Reingeniería de Procesos & Metodología Hin Shitsu',
    shortDescription: 'Transformación operativa basada en la filosofía japonesa de calidad total, eliminando cuellos de botella y reduciendo costos ocultos.',
    fullDescription: 'Aplicamos la metodología Hin Shitsu (Despliegue de Calidad y Satisfacción Profunda) para alinear los procesos con la rentabilidad del negocio y la lealtad del cliente final.',
    category: 'procesos',
    iconName: 'TrendingUp',
    durationEstimate: '2 a 5 meses',
    features: [
      'Mapeo de la Cadena de Valor (Value Stream Mapping)',
      'Identificación y eliminación sistemática de desperdicios (Muda)',
      'Estandarización de puestos críticos de trabajo y manuales digitales',
      'Diseño de indicadores clave de desempeño (KPIs y OKRs)',
      'Implementación de tableros de control visual y gestión por procesos'
    ],
    deliverables: [
      'Mapa de procesos optimizado "To-Be"',
      'Matriz de reducción de costos y tiempos de ciclo',
      'Dashboard ejecutivo de indicadores operativos'
    ]
  }
];

export const STANDARDS_DATA: StandardItem[] = [
  {
    code: 'ISO 9001:2015',
    name: 'Sistemas de Gestión de la Calidad',
    subtitle: 'El estándar mundial para asegurar satisfacción de clientes y consistencia en el servicio',
    category: 'calidad',
    tagColor: 'blue',
    description: 'Permite estructurar los procesos de la empresa con enfoque en el cliente, gestión de riesgos y mejora continua, facilitando el acceso a licitaciones de gran envergadura.',
    benefits: [
      'Requisito mandatorio para licitaciones públicas (Mercado Público / ChileCompra)',
      'Reducción drástica de no-conformidades y costos por reprocesos',
      'Aumento comprobado en la satisfacción y fidelidad de los clientes',
      'Mayor eficiencia operativa y estandarización del conocimiento interno'
    ],
    keyClauses: ['Contexto de la organización', 'Liderazgo', 'Planificación del riesgo', 'Operación y control', 'Evaluación del desempeño'],
    idealFor: ['Empresas de Servicios', 'Industria Manufacturera', 'Empresas de Construcción e Ingeniería', 'Proveedores Mineros'],
    typicalTimeline: '3 a 5 meses'
  },
  {
    code: 'ISO 14001:2015',
    name: 'Sistemas de Gestión Ambiental',
    subtitle: 'Sostenibilidad, gestión de huella y cumplimiento normativo ambiental estricto',
    category: 'ambiente',
    tagColor: 'emerald',
    description: 'Demuestra el compromiso genuino de la organización con la sostenibilidad, el control de aspectos ambientales significativos y la prevención de contingencias legales.',
    benefits: [
      'Cumplimiento sistemático de la normativa ambiental chilena e internacional',
      'Reducción del consumo de recursos críticos (agua, energía, insumos)',
      'Acceso preferente a clientes corporativos con políticas de compras verdes',
      'Prevención de multas y sanciones de la Superintendencia del Medio Ambiente (SMA)'
    ],
    keyClauses: ['Identificación de aspectos ambientales', 'Requisitos legales aplicables', 'Preparación ante emergencias', 'Ciclo de vida'],
    idealFor: ['Minería y Servicios Relacionados', 'Agroindustria y Alimentos', 'Química y Farmacéutica', 'Logística y Transporte'],
    typicalTimeline: '4 a 6 meses'
  },
  {
    code: 'ISO 45001:2018',
    name: 'Sistemas de Gestión de Seguridad y Salud en el Trabajo',
    subtitle: 'Protección integral del capital humano y reducción de accidentabilidad laboral',
    category: 'seguridad',
    tagColor: 'amber',
    description: 'Proporciona un marco proactivo para prevenir lesiones y deterioro de la salud en el lugar de trabajo, reduciendo tasas de siniestralidad y cotizaciones adicionales.',
    benefits: [
      'Disminución directa en la tasa de accidentabilidad y días perdidos',
      'Rebaja potencial en la cotización adicional de la Ley 16.744 de mutuales',
      'Cumplimiento riguroso de normativas del Ministerio de Salud y Dirección del Trabajo',
      'Cultura preventiva sólida que eleva el clima laboral y la productividad'
    ],
    keyClauses: ['Consulta y participación de trabajadores', 'Identificación de peligros (IPERC)', 'Gestión del cambio', 'Preparación ante emergencias'],
    idealFor: ['Minería', 'Construcción y Montaje', 'Plantas Industriales', 'Servicios de Mantenimiento y Logística'],
    typicalTimeline: '4 a 6 meses'
  },
  {
    code: 'ISO/IEC 27001:2022',
    name: 'Seguridad de la Información y Ciberseguridad',
    subtitle: 'Blindaje de activos digitales, confidencialidad, integridad y continuidad del negocio',
    category: 'ciberseguridad',
    tagColor: 'cyan',
    description: 'Establece controles rigurosos para salvaguardar la información sensible propia y de terceros, cumpliendo con leyes de protección de datos personales y ciberseguridad.',
    benefits: [
      'Protección contra fugas de datos, ransomware e incidentes de seguridad',
      'Exigencia clave de corporaciones bancarias, retail y clientes globales',
      'Alineación con la Ley de Protección de Datos Personales y Ley Marco de Ciberseguridad',
      'Garantía de continuidad operativa ante ciberataques o desastres tecnológicos'
    ],
    keyClauses: ['Evaluación de riesgos de información', 'Controles Anexo A (Organizaciones, Personas, Físicos, Tecnológicos)', 'Gestión de incidentes'],
    idealFor: ['Empresas Fintech y Bancos', 'Software y Servicios Cloud (SaaS)', 'Contact Centers y BPO', 'Salud y Telemedicina'],
    typicalTimeline: '4 a 7 meses'
  },
  {
    code: 'ISO 22000 / HACCP',
    name: 'Inocuidad Alimentaria',
    subtitle: 'Seguridad total a lo largo de toda la cadena de suministro alimentaria',
    category: 'inocuidad',
    tagColor: 'rose',
    description: 'Integra los principios HACCP con programas de prerrequisitos para garantizar que los alimentos sean seguros en el momento del consumo humano o animal.',
    benefits: [
      'Apertura inmediata a mercados de exportación (EE.UU., UE, Asia)',
      'Cumplimiento con el Reglamento Sanitario de los Alimentos (RSA - Dto. 977)',
      'Trazabilidad total de materias primas, lotes y despachos',
      'Confianza absoluta de supermercados, cadenas y distribuidores globales'
    ],
    keyClauses: ['Análisis de peligros (HACCP)', 'Puntos Críticos de Control (PCC)', 'Programas de Prerrequisitos (PPR)', 'Trazabilidad y Retiro'],
    idealFor: ['Empresas Agroindustriales', 'Pesqueras y Acuícolas', 'Plantas de Alimentos Procesados', 'Servicios de Catering y Casino'],
    typicalTimeline: '4 a 6 meses'
  },
  {
    code: 'ISO 37001:2016',
    name: 'Sistemas de Gestión Antisoborno (Compliance)',
    subtitle: 'Transparencia corporativa, prevención de corrupción y blindaje reputacional',
    category: 'gobierno',
    tagColor: 'purple',
    description: 'Ayuda a prevenir, detectar y enfrentar el soborno en contrataciones públicas y privadas, reforzando el modelo de prevención de delitos (Ley 20.393 en Chile).',
    benefits: [
      'Protección penal para directores y ejecutivos bajo la Ley 20.393',
      'Mayor puntuación y credibilidad en licitaciones internacionales y estatales',
      'Canal de denuncias seguro y cultura ética institucional',
      'Atracción de fondos de inversión y financiamiento institucional'
    ],
    keyClauses: ['Debida diligencia a socios de negocio', 'Controles financieros y no financieros', 'Canal ético', 'Políticas de regalos y donaciones'],
    idealFor: ['Contratistas del Estado', 'Grandes Constructoras', 'Empresas Financieras', 'Consorcios Internacionales'],
    typicalTimeline: '3 a 5 meses'
  },
  {
    code: 'NCh 2728:2015',
    name: 'Norma Chilena para Organismos Técnicos de Capacitación (OTEC)',
    subtitle: 'Requisito mandatorio para impartir capacitación con franquicia tributaria SENCE',
    category: 'nch',
    tagColor: 'teal',
    description: 'Estándar de calidad exclusivo de Chile que fija los requisitos que debe cumplir un OTEC para acreditarse formalmente ante el Servicio Nacional de Capacitación y Empleo (SENCE).',
    benefits: [
      'Habilita la facturación y ejecución de cursos con Franquicia Tributaria SENCE',
      'Estandarización del diseño instruccional, relatores y evaluación pedagógica',
      'Acreditación oficial para participar en licitaciones de capacitación del Estado',
      'Monitoreo continuo de la satisfacción y aprendizaje de los alumnos'
    ],
    keyClauses: ['Diseño y desarrollo de actividades formativas', 'Gestión de relatores e infraestructura', 'Evaluación del impacto de la capacitación'],
    idealFor: ['Institutos de Capacitación', 'Consultoras de RRHH', 'Universidades y Centros de Formación Técnica', 'Empresas con filiales OTEC'],
    typicalTimeline: '2 a 4 meses'
  },
  {
    code: 'NCh 3262:2021',
    name: 'Gestión de Igualdad de Género y Conciliación de la Vida Laboral',
    subtitle: 'Certificación que otorga el Sello Iguala-Conciliación del Ministerio de la Mujer',
    category: 'nch',
    tagColor: 'indigo',
    description: 'Promueve la equidad salarial, corresponsabilidad parental, prevención del acoso laboral y sexual, y balance de vida trabajo-familia en el entorno corporativo.',
    benefits: [
      'Obtención del Sello Oficial Iguala-Conciliación del Gobierno de Chile',
      'Puntaje adicional en licitaciones públicas de Mercado Público',
      'Atracción y retención del mejor talento con políticas modernas de flexibilidad',
      'Cumplimiento preventivo integral de la Ley Karin (Ley 21.643)'
    ],
    keyClauses: ['Diagnóstico de brechas de género', 'Conciliación vida laboral y familiar', 'Prevención del acoso', 'Brecha remuneracional'],
    idealFor: ['Grandes Empresas', 'Instituciones Públicas y Municipalidades', 'Empresas Mineras y de Servicios', 'Banca y Seguros'],
    typicalTimeline: '3 a 6 meses'
  }
];

export const HIN_SHITSU_PILLARS = [
  {
    step: '01',
    title: 'Diagnóstico Ágil & Gap Analysis',
    subtitle: 'Radiografía sin adornos de la realidad operativa',
    description: 'Auditamos sus procesos actuales frente a la norma objetivo. No imponemos modelos teóricos: mapeamos cómo opera hoy su equipo para construir sobre lo que ya funciona bien.',
    focusPoints: [
      'Evaluación exhaustiva de procesos clave vs requisitos normativos',
      'Informe de brecha (Gap Analysis) con matriz de prioridades y riesgos',
      'Cronograma realista con hitos de entrega y responsables asignados'
    ]
  },
  {
    step: '02',
    title: 'Diseño Práctico & Documentación Liviana',
    subtitle: 'Cero burocracia: documentos que la gente realmente usa',
    description: 'Eliminamos la sobre-documentación estéril. Diseñamos procedimientos concisos, matrices interactivas y flujos visuales que facilitan el trabajo diario en lugar de entorpecerlo.',
    focusPoints: [
      'Procedimientos operativos estándar (POE) en formatos digitales ágiles',
      'Matriz de riesgos y controles integrada a la gestión diaria',
      'Definición de KPIs medibles vinculados a los objetivos del negocio'
    ]
  },
  {
    step: '03',
    title: 'Adopción Cultural & Capacitación Senior',
    subtitle: 'La calidad la hacen las personas, no los papeles',
    description: 'Nuestros consultores senior capacitan a los mandos medios y equipos de terreno. Formamos auditores internos dentro de su propia empresa para garantizar la sostenibilidad del sistema.',
    focusPoints: [
      'Talleres prácticos in-company (con código SENCE disponible)',
      'Formación de auditores internos bajo directrices ISO 19011',
      'Acompañamiento en el registro de evidencias y primeras mediciones'
    ]
  },
  {
    step: '04',
    title: 'Auditoría Previa & Certificación Exitosa',
    subtitle: 'Acompañamiento presencial hasta la entrega del certificado',
    description: 'Realizamos una auditoría interna rigurosa para corregir cualquier desvío. Durante la auditoría oficial del organismo certificador (Bureau Veritas, SGS, AENOR, etc.), estamos físicamente a su lado.',
    focusPoints: [
      'Auditoría interna integral con informe para la Alta Dirección',
      'Resolución rápida de no-conformidades antes de la auditoría externa',
      'Acompañamiento presencial durante la auditoría de 3ª parte',
      'Garantía contractual de obtención del certificado'
    ]
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'mineria-servicios',
    clientSector: 'Servicios de Mantenimiento a la Gran Minería',
    region: 'Antofagasta, Chile',
    challenge: 'Requerían certificar Trinorma (ISO 9001, 14001 y 45001) en tiempo récord de 5 meses para calificar como proveedor principal en faena de cobre de alta exigencia.',
    solution: 'Implementamos la metodología Hin Shitsu con estandarización digital de procedimientos en terreno, integración de matrices de riesgo y formación intensiva de líderes de cuadrilla.',
    results: [
      '100% de aprobación en auditoría de certificación sin No-Conformidades mayores',
      'Adjudicación de contrato marco minero por USD $4.2M anuales',
      'Reducción de un 42% en tiempos de reporte de incidentes y casi-accidentes'
    ],
    standardApplied: 'Trinorma Integrada (ISO 9001 + 14001 + 45001)',
    completionTime: '4.5 meses',
    quote: {
      text: 'AEC Consultores no nos llenó de carpetas inútiles. Su consultor senior entendió la realidad de faena y nos preparó de forma impecable para la auditoría de Bureau Veritas.',
      author: 'Rodrigo Mella',
      role: 'Gerente de Operaciones y HSE'
    }
  },
  {
    id: 'tech-saas',
    clientSector: 'Empresa de Software y Servicios Cloud B2B',
    region: 'Santiago, Chile & Bogotá, Colombia',
    challenge: 'Grandes clientes bancarios y corporativos exigían certificación ISO/IEC 27001 para renovar contratos y permitir integración de APIs financieras.',
    solution: 'Despliegue de Sistema de Gestión de Seguridad de la Información (SGSI), análisis de riesgos sobre infraestructura AWS y asesoría en políticas de gobernanza de datos y respuesta a incidentes.',
    results: [
      'Certificación ISO 27001:2022 obtenida en primera auditoría',
      'Retención del 100% de clientes bancarios clave',
      'Reducción del tiempo de respuesta ante cuestionarios de seguridad de clientes de 3 semanas a 24 horas'
    ],
    standardApplied: 'ISO/IEC 27001:2022',
    completionTime: '5 meses',
    quote: {
      text: 'El enfoque moderno y ágil de AEC fue clave para que nuestros ingenieros adoptaran los controles de seguridad sin frenar los sprints de desarrollo.',
      author: 'Carolina Valenzuela',
      role: 'Chief Technology Officer'
    }
  },
  {
    id: 'agroindustria-exportacion',
    clientSector: 'Procesadora y Exportadora Frutícola',
    region: 'Valle Central, Chile & Lima, Perú',
    challenge: 'Apertura de nuevos canales de exportación a supermercados en Norteamérica y Europa requería certificar ISO 22000 y homologación estricta de normas sanitarias.',
    solution: 'Rediseño del plan HACCP, auditorías de diagnóstico en plantas de empaque y calibración de programas de prerrequisitos operativos.',
    results: [
      'Habilitación sanitaria y certificación ISO 22000 expedita',
      'Apertura de 3 nuevos mercados internacionales en la temporada siguiente',
      'Cero rechazos de contenedores en aduana de destino por inocuidad'
    ],
    standardApplied: 'ISO 22000 + HACCP',
    completionTime: '4 meses',
    quote: {
      text: 'La experiencia de los consultores de AEC en terreno agroindustrial nos dio la tranquilidad de que cada detalle sanitario estaba cubierto.',
      author: 'Esteban Larraín',
      role: 'Gerente de Aseguramiento de Calidad'
    }
  },
  {
    id: 'otec-capacitacion',
    clientSector: 'Organismo Técnico de Capacitación y Consultoría RRHH',
    region: 'Concepción, Chile',
    challenge: 'Puesta en marcha de nuevo OTEC para ofrecer capacitación con franquicia tributaria SENCE a empresas industriales de la región del Biobío.',
    solution: 'Implementación completa del Sistema de Gestión de Calidad bajo NCh 2728:2015, diseño del catálogo de cursos y expediente técnico para validación SENCE.',
    results: [
      'Acreditación SENCE concedida en el primer intento',
      'Inicio de operaciones comerciales con 12 empresas clientes en el primer trimestre',
      'Plataforma de gestión académica 100% conforme a los requisitos'
    ],
    standardApplied: 'NCh 2728:2015 (OTEC SENCE)',
    completionTime: '2.5 meses',
    quote: {
      text: 'Sin la guía de AEC nos habríamos demorado el doble en descifrar los requerimientos de la NCh 2728. Hicieron el proceso sumamente claro y fluido.',
      author: 'Mariana Soto',
      role: 'Directora Ejecutiva'
    }
  }
];

export const DIAGNOSTIC_QUESTIONS: DiagnosticQuestion[] = [
  {
    id: 'industry',
    title: '1. ¿A qué sector industrial pertenece su empresa?',
    description: 'Esto nos permite determinar las exigencias sectoriales y normativas más convenientes.',
    options: [
      { label: 'Minería, Energía o Servicios a Faena', value: 'mineria', score: 10 },
      { label: 'Tecnología, Software, Finanzas o Servicios B2B', value: 'tech', score: 10 },
      { label: 'Construcción, Ingeniería o Montaje', value: 'construccion', score: 10 },
      { label: 'Alimentos, Agroindustria, Pesca o Gastronomía', value: 'alimentos', score: 10 },
      { label: 'Capacitación (OTEC), Educación o RRHH', value: 'capacitacion', score: 10 },
      { label: 'Logística, Transporte o Comercio', value: 'logistica', score: 10 },
      { label: 'Salud, Laboratorios o Dispositivos Médicos', value: 'salud', score: 10 },
      { label: 'Otro Sector', value: 'otro', score: 8 }
    ]
  },
  {
    id: 'targetStandard',
    title: '2. ¿Qué norma o certificación desea implementar o auditar?',
    description: 'Seleccione el objetivo principal de su organización.',
    options: [
      { label: 'ISO 9001 (Gestión de la Calidad y Licitaciones)', value: 'iso9001', score: 15 },
      { label: 'Trinorma Integrada (ISO 9001 + 14001 + 45001)', value: 'trinorma', score: 20 },
      { label: 'ISO 27001 (Seguridad de la Información y Ciberseguridad)', value: 'iso27001', score: 18 },
      { label: 'ISO 14001 (Gestión Ambiental y Sostenibilidad)', value: 'iso14001', score: 15 },
      { label: 'ISO 45001 (Seguridad y Salud Ocupacional)', value: 'iso45001', score: 15 },
      { label: 'NCh 2728 (Acreditación OTEC / SENCE)', value: 'nch2728', score: 12 },
      { label: 'NCh 3262 (Igualdad de Género / Sello Iguala)', value: 'nch3262', score: 14 },
      { label: 'ISO 22000 / HACCP (Inocuidad Alimentaria)', value: 'haccp', score: 16 }
    ]
  },
  {
    id: 'currentStatus',
    title: '3. ¿Cuál es el estado actual de los procesos de su empresa?',
    description: 'Evalúa el grado de formalización previa.',
    options: [
      { label: 'Desde cero: no tenemos procedimientos escritos ni certificaciones previas', value: 'cero', score: 5 },
      { label: 'Tenemos manuales y procedimientos internos, pero no alineados formalmente a una norma', value: 'parcial', score: 15 },
      { label: 'Tuvimos certificación antes o tenemos un sistema maduro que requiere actualización', value: 'maduro', score: 25 },
      { label: 'Estamos certificados y necesitamos auditorías internas obligatorias o renovar', value: 'renovacion', score: 35 }
    ]
  },
  {
    id: 'timelineGoal',
    title: '4. ¿En qué plazo le gustaría obtener la certificación o auditoría?',
    description: 'Para dimensionar el ritmo de trabajo y asignación de consultores.',
    options: [
      { label: 'Urgente: En menos de 3 meses (por licitación o requerimiento de cliente)', value: 'urgente', score: 10 },
      { label: 'Plazo estándar óptimo: Entre 3 y 6 meses', value: 'estandar', score: 20 },
      { label: 'Planificación anual: 6 a 12 meses', value: 'anual', score: 15 },
      { label: 'Solo diagnóstico inicial y cotización informativa', value: 'diagnostico', score: 10 }
    ]
  },
  {
    id: 'companySize',
    title: '5. Tamaño aproximado de la dotación de la empresa',
    description: 'El tamaño influye en el número de jornadas de auditoría y consultoría.',
    options: [
      { label: '1 a 15 colaboradores (Microempresa)', value: 'micro', score: 10 },
      { label: '16 a 50 colaboradores (Pequeña Empresa)', value: 'pequena', score: 15 },
      { label: '51 a 200 colaboradores (Mediana Empresa)', value: 'mediana', score: 20 },
      { label: 'Más de 200 colaboradores (Gran Empresa / Multi-sede)', value: 'grande', score: 25 }
    ]
  }
];

export const FAQS_DATA: FaqItem[] = [
  {
    question: '¿Por qué elegir a AEC Consultores frente a otras consultoras?',
    answer: 'En AEC Consultores nos basamos en la filosofía japonesa Hin Shitsu: combinamos consultores senior con amplia experiencia en terreno, eliminación de burocracia documental y un enfoque 100% orientado al resultado económico de su empresa. Respaldamos nuestro trabajo con una tasa histórica de 100% de aprobación en auditorías de certificación.',
    category: 'general'
  },
  {
    question: '¿Qué es exactamente la metodología "Hin Shitsu"?',
    answer: 'Hin Shitsu proviene de la tradición japonesa de Calidad Total (Despliegue de la Función de Calidad). Consiste en traducir las necesidades y expectativas profundas del cliente en procesos robustos y estandarizados. En la práctica, significa que su Sistema de Gestión no será un mero papeleo para pasar la auditoría, sino una herramienta real para aumentar la productividad y reducir costos operativos.',
    category: 'metodologia'
  },
  {
    question: '¿Cuánto tiempo toma certificar una empresa bajo la norma ISO 9001 u otra norma?',
    answer: 'El plazo promedio para una empresa pyme oscila entre 3 y 5 meses, dependiendo del tamaño de la organización, la madurez de sus procesos y el compromiso del equipo. Para situaciones de urgencia por licitaciones, estructuramos planes acelerados de alta intensidad.',
    category: 'iso'
  },
  {
    question: '¿AEC Consultores es quien otorga el certificado oficial?',
    answer: 'Por estricta regulación de la ISO e INN (Instituto Nacional de Normalización), ninguna consultora puede certificar a sus propios asesorados para evitar conflicto de interés. AEC Consultores diseña, implementa, capacita y audita internamente a su empresa, garantizando que esté 100% preparada para que una Casa Certificadora acreditada internacionalmente (ej: Bureau Veritas, SGS, AENOR, DNV, TÜV) le otorgue el certificado oficial.',
    category: 'iso'
  },
  {
    question: '¿Podemos financiar las capacitaciones con la Franquicia Tributaria SENCE?',
    answer: 'Sí. Diseñamos cursos y programas in-company adaptados a las necesidades de su empresa que cuentan con código SENCE, lo que permite imputar hasta el 100% del costo de la capacitación al impuesto de primera categoría.',
    category: 'costos'
  },
  {
    question: '¿Realizan auditorías internas obligatorias a empresas ya certificadas?',
    answer: 'Absolutamente. Todas las normas ISO exigen una auditoría interna anual independiente antes de la auditoría de seguimiento o recertificación. Realizamos auditorías de primera parte con informes exhaustivos y plan de cierre de brechas listo para presentar a su casa certificadora.',
    category: 'auditorias'
  },
  {
    question: '¿Qué presencia geográfica tienen?',
    answer: 'Nuestra casa matriz está ubicada en Santiago de Chile, con cobertura en todo el territorio nacional (incluyendo faenas en el norte y sur). Asimismo, atendemos proyectos corporativos en Colombia, Perú y Ecuador a través de nuestra red de consultores senior en la región andina.',
    category: 'general'
  }
];
