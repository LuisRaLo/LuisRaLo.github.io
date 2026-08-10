export interface JobEntry {
  id: string;
  company: string;
  logo: string;
  domain?: string;
  logoImage?: string;
  year: string;
  roles: { title: string; period: string }[];
  location?: string;
  bullets: string[];
  tech: string[];
  projects?: ProjectItem[];
}

export interface ProjectLink {
  label: string;
  url: string;
}

export interface ProjectItem {
  name: string;
  description: string;
  links: ProjectLink[];
}

export interface EducationEntry {
  school: string;
  degree: string;
  period: string;
  note?: string;
}

export interface CourseEntry {
  name: string;
  org: string;
  year: string;
  featured?: boolean;
}

export interface SkillGroup {
  title: string;
  items: string[];
}

export interface TechItem {
  name: string;
  slug?: string;
}

export interface LangContent {
  meta: { title: string; description: string };
  nav: {
    spotlight: string;
    about: string;
    experience: string;
    skills: string;
    activity: string;
    education: string;
    contact: string;
  };
  crossLink: {
    toRecruiter: string;
    toInvestor: string;
  };
  hero: {
    greeting: string;
    name: string;
    role: string;
    exCompanies: string;
    tagline: string;
    ctaContact: string;
    ctaCV: string;
    certifiedByLabel: string;
    stats: { value: string; label: string }[];
  };
  about: { title: string; paragraph: string };
  spotlight: {
    eyebrow: string;
    fundingBadge: string;
    title: string;
    subtitle: string;
    problemLabel: string;
    problem: string;
    productLabel: string;
    product: string;
    proofLabel: string;
    proof: string;
    stats: { value: string; label: string }[];
    links: { label: string; url: string }[];
    cta: string;
  };
  experience: { title: string; jobs: JobEntry[]; projectsLabel: string; visitLabel: string };
  techStack: { title: string; subtitle: string; items: TechItem[] };
  skills: { title: string; groups: SkillGroup[] };
  githubActivity: { title: string; subtitle: string; viewProfile: string };
  education: {
    title: string;
    entries: EducationEntry[];
    coursesTitle: string;
    featuredLabel: string;
    courses: CourseEntry[];
  };
  contact: {
    title: string;
    text: string;
    phoneLabel: string;
    emailLabel: string;
    locationLabel: string;
    cvLabel: string;
  };
  footer: { rights: string; builtWith: string };
}

const experienceES: JobEntry[] = [
  {
    id: "iruz",
    company: "Iruz Labs",
    logo: "IL",
    domain: "iruzlabs.com",
    logoImage: "/assets/logos/iruzlabs.png",
    year: "2025",
    location: "Remoto",
    roles: [{ title: "Founder, CEO & CTO", period: "Marzo 2025 – Actual" }],
    bullets: [
      "Fundé la empresa desde cero: visión, modelo de negocio (SaaS B2B), estrategia comercial y go-to-market.",
      "Diseñé y desarrollé el producto principal: una plataforma AAaaS (Autonomous Agents as a Service) omnicanal (WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram y voz) para comunicación proactiva y reactiva.",
      "Construí el motor agéntico desde su arquitectura base, agnóstico a industria: hoy opera en retail, real estate, salones de belleza, concesionarias de autos, cobranza (cartera vencida) y call centers.",
      "Los agentes de IA perfilan, agendan, prospectan y califican leads las 24 horas; el agente humano cierra la venta con todo el contexto.",
      "Desarrollé un CRM y un ENGINE interno integrado al motor agéntico, con trazabilidad end-to-end del funnel de ventas.",
      "Con nuestro cliente GRUPO DRT (Querétaro) implementamos un funnel automatizado que incrementó significativamente el ROI de sus campañas de captación inmobiliaria.",
      "Gestiono la infraestructura cloud, pipelines CI/CD, observabilidad y la evolución técnica del producto.",
    ],
    tech: [
      "Microservicios",
      "Event-driven",
      "Kafka",
      "GoLang",
      "Node.js",
      "Python",
      "Astro",
      "LLMs",
      "Vector DBs",
      "WhatsApp Business API",
      "Meta APIs (Instagram/Facebook)",
      "SIP / Twilio",
      "Docker",
      "Lambda",
    ],
    projects: [
      {
        name: "Iruz Labs",
        description: "Sitio y plataforma AAaaS omnicanal de Iruz Labs: agentes de IA para WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram y voz.",
        links: [{ label: "iruzlabs.com", url: "https://iruzlabs.com" }],
      },
      {
        name: "Atenea",
        description: "Motor de agentes autónomos de Iruz Labs.",
        links: [{ label: "atenea.iruzlabs.com", url: "https://atenea.iruzlabs.com" }],
      },
      {
        name: "CRM",
        description: "CRM interno integrado al motor agéntico, con trazabilidad end-to-end del funnel de ventas.",
        links: [{ label: "crm.iruzlabs.com", url: "https://crm.iruzlabs.com" }],
      },
      {
        name: "CIEE",
        description: "Implementación de la plataforma de Iruz Labs para un cliente.",
        links: [{ label: "ciee.iruzlabs.com", url: "https://ciee.iruzlabs.com" }],
      },
    ],
  },
  {
    id: "arkos",
    company: "Arkos MX",
    logo: "AK",
    domain: "arkosmx.com",
    year: "2025",
    location: "Remoto",
    roles: [{ title: "Tech Lead", period: "Diciembre 2025 – Marzo 2026" }],
    bullets: [
      "Lideré técnicamente al equipo de ingeniería, estableciendo SCRUM, estándares de desarrollo y alineación entre equipos.",
      "Implementé pipelines de IA Generativa y culminé el proyecto en tiempo y forma.",
      "Implementé CI/CD, lineamientos de codificación, revisión de código, Gitflow y monitoreo/alertamiento para la estabilidad de la plataforma.",
      "Desarrollé flujos con Jenkins y CloudFormation (IaC), mejorando la seguridad de los pipelines y logrando su adopción en toda la compañía.",
      "Configuré observabilidad con Grafana, CloudWatch Logs Insights, arranque de X-Ray y alertas a Slack vía webhooks.",
      "Contribuí en decisiones de estrategia de precios, diferenciación de mercado y automatización con IA.",
    ],
    tech: [
      "Microservicios",
      "Event-driven",
      "Kafka",
      "Node.js",
      "Python",
      "React",
      "LLMs",
      "Vector DBs",
      "WhatsApp Business API",
      "SIP / Twilio",
      "Docker",
      "gRPC / REST",
      "Observabilidad",
    ],
    projects: [
      {
        name: "Arkos MX",
        description: "Sitio de Arkos MX.",
        links: [{ label: "arkosmx.com", url: "https://arkosmx.com" }],
      },
      {
        name: "Pulse",
        description: "Producto web desarrollado en Arkos MX.",
        links: [{ label: "pulse.arkosmx.com", url: "https://pulse.arkosmx.com" }],
      },
    ],
  },
  {
    id: "nolab",
    company: "NOLAB",
    logo: "NL",
    domain: "nolab.mx",
    year: "2025",
    location: "Remoto",
    roles: [
      { title: "Tech Lead & Product Lead", period: "Agosto 2025 – Diciembre 2025" },
      { title: "Senior Full-stack Developer", period: "Marzo 2025 – Julio 2025" },
    ],
    bullets: [
      "Logré concretar y lanzar Axia, el producto principal, de inicio a fin.",
      "Asumí el liderazgo técnico del equipo, estableciendo SCRUM, estándares de desarrollo y alineación entre equipos.",
      "Implementé CI/CD, lineamientos de codificación, revisión de código, Gitflow y estrategias de monitoreo/alertamiento.",
      "Actué como Product Lead junto al CEO, definiendo visión de producto, modelo de negocio, roadmap y arquitectura técnica.",
      "Coordiné la priorización de funcionalidades, el discovery con usuarios y la validación con stakeholders.",
      "Contribuí en decisiones clave de pricing, diferenciación de mercado y capacidades de automatización con IA.",
      "Reconocido con un aumento salarial por mi desempeño.",
    ],
    tech: [
      "Microservicios",
      "Event-driven",
      "Kafka",
      "Node.js",
      "Python",
      "React",
      "LLMs",
      "Vector DBs",
      "WhatsApp Business API",
      "Docker",
      "gRPC / REST",
    ],
    projects: [
      {
        name: "NOLAB",
        description: "Sitio de NOLAB.",
        links: [{ label: "nolab.mx", url: "https://nolab.mx" }],
      },
      {
        name: "Axia",
        description: "Producto principal desarrollado en NOLAB.",
        links: [{ label: "hiaxia.com", url: "https://hiaxia.com" }],
      },
    ],
  },
  {
    id: "stori",
    company: "Stori",
    logo: "ST",
    domain: "storicard.com",
    year: "2022",
    roles: [{ title: "Software Engineer B3", period: "Noviembre 2022 – Enero 2025" }],
    bullets: [
      "Contribuí a mejoras de retención y de eficiencia operativa con un impacto de +$100K USD mensuales.",
      "Impulsé la adopción de IaC en toda la compañía (Jenkins + CloudFormation), mejorando la seguridad de los pipelines.",
      "Lideré la planificación y ejecución de dos migraciones a gran escala, con mínima interrupción del servicio.",
      "Rediseñé y reestructuré la arquitectura del front-end, mejorando la experiencia de usuario y el rendimiento.",
      "Construí soluciones serverless en AWS (Lambda, API Gateway, SNS/SQS, DynamoDB) y cargas en ECS orquestadas con Airflow y Step Functions.",
      "Configuré observabilidad (Grafana, CloudWatch Logs Insights, X-Ray inicial) con alertas a Slack.",
      "Planifiqué y entregué desde cero un proyecto en React Native + NestJS; luego migré la infraestructura a microservicios con Terraform y EKS, agregando rastreo en tiempo real vía WebSockets.",
      "Reconocido con un incremento salarial por mi desempeño.",
    ],
    tech: [
      "AWS",
      "Golang",
      "Python",
      "Node.js",
      "Vue.js",
      "React",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "Terraform / CloudFormation",
      "Docker",
      "WebSockets",
      "EKS / ECS",
    ],
    projects: [
      {
        name: "App Stori — Payments & Topups",
        description: "Lideré el frontend de los módulos de Payments y Topups en la app de Stori.",
        links: [],
      },
    ],
  },
  {
    id: "publicis",
    company: "Publicis Groupe",
    logo: "PG",
    domain: "publicisgroupe.com",
    year: "2022",
    roles: [{ title: "Fullstack Engineer", period: "Enero 2022 – Noviembre 2022" }],
    bullets: [
      "Logré terminar y entregar la app miNegocio MX para el cliente PepsiCo.",
      "Desarrollé IaC bajo prácticas DevOps, preparando la transición hacia una arquitectura de microservicios.",
      "Gestioné despliegues en EC2 y políticas/permisos de IAM.",
      "Desplegué el front-end en React vía AWS Amplify, con pipelines CI/CD en Jenkins y AWS Pipeline.",
      "Configuré Systems Manager, Parameter Store, Secrets Manager, API Gateway y CloudWatch.",
      "Implementé observabilidad con Grafana, CloudWatch Logs Insights, X-Ray y alertas a Teams.",
      "Participé como líder técnico en ceremonias junto a mi manager y el cliente.",
    ],
    tech: ["AWS", "IaC", "EC2", "Amplify", "Jenkins", "React", "IAM", "CloudWatch", "Grafana"],
    projects: [
      {
        name: "miNegocio MX",
        description: "App de ERP para Latam desarrollada para clientes de PepsiCo.",
        links: [
          { label: "App Store", url: "https://apps.apple.com/mx/app/minegocio-mx/id6478282665" },
          {
            label: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio&hl=es_MX",
          },
        ],
      },
      {
        name: "Joyapp",
        description: "Plataforma web desarrollada para PepsiCo.",
        links: [{ label: "joyapp.mx", url: "https://www.joyapp.mx" }],
      },
    ],
  },
  {
    id: "neta",
    company: "Neta Systems – Grupo Salinas",
    logo: "NS",
    year: "2021",
    roles: [{ title: "FullStack Developer", period: "Octubre 2021 – Enero 2022" }],
    bullets: [
      "Desarrollé APIs eficientes y escalables en Java y NodeJS.",
      "Definí y administré contratos de interfaces entre sistemas.",
      "Recopilé requisitos para proyectos internos alineados a las necesidades del negocio.",
      "Realicé pruebas de integración y unitarias.",
      "Gestioné proyectos en GitLab y Jenkins.",
    ],
    tech: ["Java", "NodeJS", "GitLab", "Jenkins"],
  },
  {
    id: "cemees",
    company: "CEMEES",
    logo: "CM",
    domain: "cemees.org",
    year: "2016",
    roles: [{ title: "Developer per project", period: "2016 – 2021" }],
    bullets: [
      "Administré servidores de bases de datos (MySQL, SQL Server, MongoDB), Linux/Windows Server, VMs y respaldos (NAS).",
      "Diseñé y administré bases de datos con SQL avanzado.",
      "Desarrollé apps móviles (Android/Java, React Native), de escritorio (Python, C#) y web (PHP, .NET) para un ERP interno multiplataforma.",
      "Implementé microservicios y endpoints para cada cliente (web, móvil, socket, escritorio) con NodeJS/TypeScript.",
      "Integré APIs de terceros (Google, Amazon, PayPal, RENAPO, entre otras).",
    ],
    tech: ["Java", "NodeJS", "React Native", "Python", "C#", "PHP", ".NET", "MySQL", "SQL Server", "MongoDB"],
    projects: [
      {
        name: "Internet y el capitalismo (I de IV)",
        description: "Artículo publicado en la revista Buzos de la Noticia.",
        links: [
          {
            label: "buzos.com.mx",
            url: "https://buzos.com.mx/noticia/internet-y-el-capitalismo-i-de-iv",
          },
        ],
      },
    ],
  },
  {
    id: "freelance",
    company: "Freelancer",
    logo: "FL",
    year: "2012",
    roles: [{ title: "Fullstack Engineer", period: "2012 – 2021" }],
    bullets: [
      "Desarrollé apps móviles online/offline en React Native y NodeJS para inventarios y proyectos escolares.",
      "Construí sitios web de gestión de cursos, materiales y usuarios (PHP, JS, HTML, CSS).",
      "Implementé servicios REST y bases de datos MySQL para módulos de ERP y plataformas de e-learning.",
      "Desarrollé un sitio de e-commerce con integraciones a PayPal y Shopify.",
      "Actualicé módulos de WordPress y desarrollé landing pages.",
    ],
    tech: ["React Native", "NodeJS", "PHP", "JavaScript", "TypeScript", "MySQL", "PayPal API", "Shopify API"],
  },
];

const experienceEN: JobEntry[] = [
  {
    id: "iruz",
    company: "Iruz Labs",
    logo: "IL",
    domain: "iruzlabs.com",
    logoImage: "/assets/logos/iruzlabs.png",
    year: "2025",
    location: "Remote",
    roles: [{ title: "Founder, CEO & CTO", period: "March 2025 – Present" }],
    bullets: [
      "Founded the company from scratch: vision, business model (B2B SaaS), commercial strategy, and go-to-market.",
      "Designed and built the core product: an omnichannel AAaaS (Autonomous Agents as a Service) platform (WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram, and voice) for proactive and reactive communication.",
      "Built the agentic engine from its base architecture, industry-agnostic: it now runs in retail, real estate, beauty salons, car dealerships, debt collection, and call centers.",
      "AI agents profile, schedule, prospect, and qualify leads 24/7; the human agent closes the sale with full context.",
      "Built an internal CRM and Engine integrated with the agentic core, giving end-to-end sales funnel traceability.",
      "Partnered with client GRUPO DRT (Querétaro) to design an automated funnel and conversational flow that significantly increased ROI on their real-estate acquisition campaigns.",
      "Manage cloud infrastructure, CI/CD pipelines, observability, and the product's technical roadmap.",
    ],
    tech: [
      "Microservices",
      "Event-driven",
      "Kafka",
      "GoLang",
      "Node.js",
      "Python",
      "Astro",
      "LLMs",
      "Vector DBs",
      "WhatsApp Business API",
      "Meta APIs (Instagram/Facebook)",
      "SIP / Twilio",
      "Docker",
      "Lambda",
    ],
    projects: [
      {
        name: "Iruz Labs",
        description: "Iruz Labs' site and omnichannel AAaaS platform: AI agents for WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram, and voice.",
        links: [{ label: "iruzlabs.com", url: "https://iruzlabs.com" }],
      },
      {
        name: "Atenea",
        description: "Iruz Labs' autonomous agent engine.",
        links: [{ label: "atenea.iruzlabs.com", url: "https://atenea.iruzlabs.com" }],
      },
      {
        name: "CRM",
        description: "Internal CRM integrated with the agentic engine, with end-to-end sales funnel traceability.",
        links: [{ label: "crm.iruzlabs.com", url: "https://crm.iruzlabs.com" }],
      },
      {
        name: "CIEE",
        description: "Client implementation of the Iruz Labs platform.",
        links: [{ label: "ciee.iruzlabs.com", url: "https://ciee.iruzlabs.com" }],
      },
    ],
  },
  {
    id: "arkos",
    company: "Arkos MX",
    logo: "AK",
    domain: "arkosmx.com",
    year: "2025",
    location: "Remote",
    roles: [{ title: "Tech Lead", period: "December 2025 – March 2026" }],
    bullets: [
      "Led the engineering team technically, establishing SCRUM, development standards, and cross-team alignment.",
      "Implemented Generative AI pipelines and delivered the project on time and on scope.",
      "Set up CI/CD, coding guidelines, code review, Gitflow, and monitoring/alerting for platform stability.",
      "Built key workflows with Jenkins and CloudFormation (IaC), improving pipeline security and driving company-wide adoption.",
      "Set up observability with Grafana, CloudWatch Logs Insights, an initial X-Ray rollout, and Slack alerting via webhooks.",
      "Contributed to pricing strategy, market differentiation, and AI automation decisions.",
    ],
    tech: [
      "Microservices",
      "Event-driven",
      "Kafka",
      "Node.js",
      "Python",
      "React",
      "LLMs",
      "Vector DBs",
      "WhatsApp Business API",
      "SIP / Twilio",
      "Docker",
      "gRPC / REST",
      "Observability",
    ],
    projects: [
      {
        name: "Arkos MX",
        description: "Arkos MX site.",
        links: [{ label: "arkosmx.com", url: "https://arkosmx.com" }],
      },
      {
        name: "Pulse",
        description: "Web product built at Arkos MX.",
        links: [{ label: "pulse.arkosmx.com", url: "https://pulse.arkosmx.com" }],
      },
    ],
  },
  {
    id: "nolab",
    company: "NOLAB",
    logo: "NL",
    domain: "nolab.mx",
    year: "2025",
    location: "Remote",
    roles: [
      { title: "Tech Lead & Product Lead", period: "August 2025 – December 2025" },
      { title: "Senior Full-stack Developer", period: "March 2025 – July 2025" },
    ],
    bullets: [
      "Delivered Axia, the flagship product, from concept to launch.",
      "Took on technical leadership of the engineering team, establishing SCRUM, development standards, and cross-team alignment.",
      "Implemented CI/CD, coding guidelines, code review, Gitflow, and monitoring/alerting strategies.",
      "Acted as Product Lead alongside the CEO, defining product vision, business model, roadmap, and technical architecture.",
      "Coordinated feature prioritization, user discovery, and stakeholder validation.",
      "Contributed to key decisions on pricing, market differentiation, and AI automation capabilities.",
      "Recognized with a salary increase for performance.",
    ],
    tech: [
      "Microservices",
      "Event-driven",
      "Kafka",
      "Node.js",
      "Python",
      "React",
      "LLMs",
      "Vector DBs",
      "WhatsApp Business API",
      "Docker",
      "gRPC / REST",
    ],
    projects: [
      {
        name: "NOLAB",
        description: "NOLAB site.",
        links: [{ label: "nolab.mx", url: "https://nolab.mx" }],
      },
      {
        name: "Axia",
        description: "Flagship product built at NOLAB.",
        links: [{ label: "hiaxia.com", url: "https://hiaxia.com" }],
      },
    ],
  },
  {
    id: "stori",
    company: "Stori",
    logo: "ST",
    domain: "storicard.com",
    year: "2022",
    roles: [{ title: "Software Engineer B3", period: "November 2022 – January 2025" }],
    bullets: [
      "Contributed to retention and operational efficiency improvements worth +$100K USD/month.",
      "Drove company-wide IaC adoption (Jenkins + CloudFormation), improving pipeline security.",
      "Led the planning and execution of two large-scale migrations with minimal service disruption.",
      "Redesigned and restructured the front-end architecture, improving UX and performance.",
      "Built serverless AWS solutions (Lambda, API Gateway, SNS/SQS, DynamoDB) and ECS workloads orchestrated with Airflow and Step Functions.",
      "Set up observability (Grafana, CloudWatch Logs Insights, early X-Ray) with Slack alerting.",
      "Planned and delivered a React Native + NestJS project from scratch, later migrating infrastructure to microservices with Terraform and EKS, and added real-time tracking via WebSockets.",
      "Recognized with a salary increase for performance.",
    ],
    tech: [
      "AWS",
      "Golang",
      "Python",
      "Node.js",
      "Vue.js",
      "React",
      "React Native",
      "NestJS",
      "PostgreSQL",
      "Terraform / CloudFormation",
      "Docker",
      "WebSockets",
      "EKS / ECS",
    ],
    projects: [
      {
        name: "Stori App — Payments & Topups",
        description: "Led frontend development for the Payments and Topups modules in the Stori app.",
        links: [],
      },
    ],
  },
  {
    id: "publicis",
    company: "Publicis Groupe",
    logo: "PG",
    domain: "publicisgroupe.com",
    year: "2022",
    roles: [{ title: "Fullstack Engineer", period: "January 2022 – November 2022" }],
    bullets: [
      "Delivered the miNegocio MX app to completion for client PepsiCo.",
      "Built IaC following DevOps practices, preparing the transition to a microservices architecture.",
      "Managed EC2 deployments and IAM policies/permissions.",
      "Deployed the React front-end via AWS Amplify with CI/CD pipelines in Jenkins and AWS Pipeline.",
      "Configured Systems Manager, Parameter Store, Secrets Manager, API Gateway, and CloudWatch.",
      "Set up observability with Grafana, CloudWatch Logs Insights, X-Ray, and Teams alerting.",
      "Acted as technical lead in team ceremonies alongside my manager and the client.",
    ],
    tech: ["AWS", "IaC", "EC2", "Amplify", "Jenkins", "React", "IAM", "CloudWatch", "Grafana"],
    projects: [
      {
        name: "miNegocio MX",
        description: "LatAm ERP app built for PepsiCo clients.",
        links: [
          { label: "App Store", url: "https://apps.apple.com/mx/app/minegocio-mx/id6478282665" },
          {
            label: "Google Play",
            url: "https://play.google.com/store/apps/details?id=com.pepsicoconsumer.minegocio&hl=es_MX",
          },
        ],
      },
      {
        name: "Joyapp",
        description: "Web platform built for PepsiCo.",
        links: [{ label: "joyapp.mx", url: "https://www.joyapp.mx" }],
      },
    ],
  },
  {
    id: "neta",
    company: "Neta Systems – Grupo Salinas",
    logo: "NS",
    year: "2021",
    roles: [{ title: "FullStack Developer", period: "October 2021 – January 2022" }],
    bullets: [
      "Built efficient, scalable APIs in Java and Node.js.",
      "Defined and maintained interface contracts between systems.",
      "Gathered requirements for internal projects aligned with business needs.",
      "Wrote integration and unit tests.",
      "Managed projects in GitLab and Jenkins.",
    ],
    tech: ["Java", "NodeJS", "GitLab", "Jenkins"],
  },
  {
    id: "cemees",
    company: "CEMEES",
    logo: "CM",
    domain: "cemees.org",
    year: "2016",
    roles: [{ title: "Developer per project", period: "2016 – 2021" }],
    bullets: [
      "Administered database servers (MySQL, SQL Server, MongoDB), Linux/Windows Server, VMs, and backups (NAS).",
      "Designed and administered databases using advanced SQL.",
      "Built mobile (Android/Java, React Native), desktop (Python, C#), and web (PHP, .NET) apps for a multiplatform internal ERP.",
      "Implemented microservices and endpoints for each client (web, mobile, socket, desktop) with Node.js/TypeScript.",
      "Integrated third-party APIs (Google, Amazon, PayPal, RENAPO, and others).",
    ],
    tech: ["Java", "NodeJS", "React Native", "Python", "C#", "PHP", ".NET", "MySQL", "SQL Server", "MongoDB"],
    projects: [
      {
        name: "Internet y el capitalismo (I de IV)",
        description: "Article published in Buzos de la Noticia magazine.",
        links: [
          {
            label: "buzos.com.mx",
            url: "https://buzos.com.mx/noticia/internet-y-el-capitalismo-i-de-iv",
          },
        ],
      },
    ],
  },
  {
    id: "freelance",
    company: "Freelancer",
    logo: "FL",
    year: "2012",
    roles: [{ title: "Fullstack Engineer", period: "2012 – 2021" }],
    bullets: [
      "Built online/offline mobile apps in React Native and Node.js for inventory management and school projects.",
      "Built websites for course, material, and user management (PHP, JS, HTML, CSS).",
      "Implemented REST services and MySQL databases for ERP modules and e-learning platforms.",
      "Built an e-commerce site integrated with PayPal and Shopify.",
      "Updated WordPress modules and built landing pages.",
    ],
    tech: ["React Native", "NodeJS", "PHP", "JavaScript", "TypeScript", "MySQL", "PayPal API", "Shopify API"],
  },
];

const skillGroupsES: SkillGroup[] = [
  { title: "IA & Agentes", items: ["Generative AI & LLM Management", "Agentic AI", "Bases de datos vectoriales"] },
  { title: "Liderazgo", items: ["Technical Leadership & Ownership", "SCRUM", "Gitflow & Code Review", "CI/CD"] },
  { title: "AWS · Cómputo & Contenedores", items: ["Lambda", "ECS", "ECR", "EKS", "EC2", "Step Functions"] },
  { title: "AWS · Redes", items: ["VPC", "Load Balancer", "Route 53", "API Gateway"] },
  { title: "AWS · Datos", items: ["RDS", "DynamoDB", "DocumentDB", "ElastiCache"] },
  {
    title: "AWS · Operación & Mensajería",
    items: ["CloudFormation (YAML / CDK)", "Systems Manager", "Secrets Manager", "CloudWatch (Logs Insights)", "IAM", "SQS", "SNS", "Amplify", "CodePipeline"],
  },
];

const skillGroupsEN: SkillGroup[] = [
  { title: "AI & Agents", items: ["Generative AI & LLM Management", "Agentic AI", "Vector Databases"] },
  { title: "Leadership", items: ["Technical Leadership & Ownership", "SCRUM", "Gitflow & Code Review", "CI/CD"] },
  { title: "AWS · Compute & Containers", items: ["Lambda", "ECS", "ECR", "EKS", "EC2", "Step Functions"] },
  { title: "AWS · Networking", items: ["VPC", "Load Balancer", "Route 53", "API Gateway"] },
  { title: "AWS · Data", items: ["RDS", "DynamoDB", "DocumentDB", "ElastiCache"] },
  {
    title: "AWS · Ops & Messaging",
    items: ["CloudFormation (YAML / CDK)", "Systems Manager", "Secrets Manager", "CloudWatch (Logs Insights)", "IAM", "SQS", "SNS", "Amplify", "CodePipeline"],
  },
];

const techStackItems: TechItem[] = [
  // Languages
  { name: "GoLang", slug: "go" },
  { name: "TypeScript", slug: "typescript" },
  { name: "JavaScript", slug: "javascript" },
  { name: "Python", slug: "python" },
  { name: "Java", slug: "openjdk" },
  { name: "PHP", slug: "php" },
  { name: "C#", slug: "dotnet" },
  // Frameworks
  { name: "Node.js", slug: "nodedotjs" },
  { name: "Astro", slug: "astro" },
  { name: "React", slug: "react" },
  { name: "Vue.js", slug: "vuedotjs" },
  { name: "Angular", slug: "angular" },
  // Cloud
  { name: "AWS" },
  { name: "GCP", slug: "googlecloud" },
  { name: "Azure" },
  // Infra
  { name: "Terraform", slug: "terraform" },
  { name: "Docker", slug: "docker" },
  { name: "Kafka", slug: "apachekafka" },
  { name: "Jenkins", slug: "jenkins" },
  { name: "Grafana", slug: "grafana" },
  // Data
  { name: "PostgreSQL", slug: "postgresql" },
  { name: "MySQL", slug: "mysql" },
  { name: "MariaDB", slug: "mariadb" },
  { name: "MongoDB", slug: "mongodb" },
  { name: "Redis", slug: "redis" },
  { name: "Pinecone" },
  { name: "Chroma" },
  // Messaging
  { name: "WhatsApp API", slug: "whatsapp" },
];

const coursesData: CourseEntry[] = [
  { name: "AI for All: From Basics to GenAI Practice", org: "NVIDIA", year: "2025", featured: true },
  { name: "Python 101 for Data Science Certification", org: "Cognitive Class · IBM Developer Skills Network", year: "2021", featured: true },
  { name: "React Native Intermediate", org: "LinkedIn Academy", year: "2022" },
  { name: "Database Fundamentals", org: "Educalix", year: "2021" },
  { name: "Agile Methodologies Course", org: "ITT", year: "2021" },
  { name: "Variable Analysis Course", org: "CEMEES", year: "2019" },
  { name: "Java Programming Course", org: "UNAM", year: "2018" },
  { name: "Data Curator Certification", org: "Fundación Carlos Slim", year: "2015" },
  { name: "Finder Certification", org: "Fundación Carlos Slim", year: "2015" },
  { name: "IT Technician Certification", org: "Fundación Carlos Slim", year: "2015" },
  { name: "Collaboration Certificate, “Polikids” Course", org: "Fundación Carlos Slim", year: "2015" },
];

export const content: { es: LangContent; en: LangContent } = {
  es: {
    meta: {
      title: "Luis Enrique Ramírez López — Founder | CEO & CTO",
      description:
        "Portafolio de Luis Enrique Ramírez López, Founder, CEO & CTO — arquitecto de software senior especializado en IA, agentes autónomos y sistemas distribuidos.",
    },
    nav: {
      spotlight: "Iruz Labs",
      about: "Sobre mí",
      experience: "Experiencia",
      skills: "Habilidades",
      activity: "Actividad",
      education: "Educación",
      contact: "Contacto",
    },
    crossLink: {
      toRecruiter: "Ver CV para reclutadores",
      toInvestor: "Ver para inversionistas",
    },
    hero: {
      greeting: "Hola, soy",
      name: "Luis Enrique Ramírez López",
      role: "Founder | CEO & CTO",
      exCompanies: "Ex-Stori · Ex-Publicis · Ex-Nolab · Ex-Arkos",
      tagline:
        "Arquitecto de software senior con la capacidad única de traducir complejos desafíos de ingeniería en modelos de negocio rentables y escalables.",
      ctaContact: "Hablemos",
      ctaCV: "Descargar CV",
      certifiedByLabel: "Certificado por",
      stats: [
        { value: "14+", label: "años construyendo software" },
        { value: "6+", label: "años de experiencia con AWS" },
        { value: "4", label: "roles como Tech Lead / CTO" },
      ],
    },
    about: {
      title: "Sobre mí",
      paragraph:
        "Ingeniero de software con más de 14 años construyendo sistemas distribuidos, y hoy founder de una startup de IA. Combino profundidad técnica —arquitecturas basadas en eventos, microservicios, automatización con LLMs— con visión de negocio: sé identificar cuándo un problema de ingeniería es, en realidad, un problema de producto o de go-to-market. Antes de Iruz Labs lideré equipos de ingeniería en Stori y Publicis; mientras escalaba Iruz Labs en su etapa inicial, compaginé consultoría de Tech Lead en NOLAB y Arkos MX, estableciendo estándares de SCRUM, CI/CD y observabilidad en cada uno.",
    },
    spotlight: {
      eyebrow: "Lo que estoy construyendo",
      fundingBadge: "Buscando ronda Seed",
      title: "Iruz Labs",
      subtitle:
        "Una plataforma omnicanal de agentes de IA (AAaaS) — WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram y voz — que perfila, agenda, prospecta y califica leads para que tu equipo de ventas cierre con toda la información en mano.",
      problemLabel: "El problema",
      problem:
        "En cualquier vertical con procesos de venta —retail, real estate, belleza, automotriz, cobranza, call centers— los equipos pierden leads por falta de seguimiento rápido y constante en los canales donde ya están sus prospectos. Escalar un equipo humano para cubrir todos esos canales es caro y lento.",
      productLabel: "El producto",
      product:
        "Iruz Labs construye agentes de IA que trabajan de forma omnicanal —WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram y llamadas de voz— perfilando, agendando, prospectando y calificando leads las 24 horas. El agente humano entra al final del proceso, ya con todo el contexto, para cerrar la venta. Incluye un CRM propio con trazabilidad end-to-end del funnel. Lidero un equipo reducido de ingeniería y ventas.",
      proofLabel: "Prueba de tracción",
      proof:
        "Dos casos de éxito en real estate además de GRUPO DRT (Querétaro), y clientes activos en Colombia (Integrity Inmo) y Estados Unidos (DBO Graphics), generando en conjunto ~$1,000+ USD/mes en MRR inicial. Seleccionados en el pitch de Deel, con beneficios de AWS for Startups y Deel for Startups.",
      stats: [
        { value: "6.8%", label: "conversión de lead dormido a venta cerrada" },
        { value: "3x", label: "más ventas cerradas" },
        { value: "90%", label: "menos tiempo de respuesta" },
        { value: "3", label: "países con clientes activos" },
      ],
      links: [
        { label: "iruzlabs.com", url: "https://iruzlabs.com" },
        { label: "Ver producto (Atenea)", url: "https://atenea.iruzlabs.com" },
      ],
      cta: "¿Te interesa invertir en nuestra ronda seed o colaborar con Iruz Labs? Hablemos.",
    },
    experience: {
      title: "Experiencia Laboral",
      jobs: experienceES,
      projectsLabel: "Proyectos",
      visitLabel: "Visitar",
    },
    techStack: {
      title: "Stack Tecnológico",
      subtitle: "Tecnologías con las que construyo, en producción, día a día.",
      items: techStackItems,
    },
    skills: { title: "Habilidades", groups: skillGroupsES },
    githubActivity: {
      title: "Actividad en GitHub",
      subtitle: "Constancia en construir, día a día.",
      viewProfile: "Ver perfil completo en GitHub",
    },
    education: {
      title: "Educación",
      entries: [
        {
          school: "UNADM",
          degree: "Licenciatura en Matemáticas",
          period: "2016 – 2020",
        },
      ],
      coursesTitle: "Cursos y Certificaciones",
      featuredLabel: "Destacado",
      courses: coursesData,
    },
    contact: {
      title: "Contacto",
      text: "¿Buscas invertir en Iruz Labs, o buscas un Tech Lead / CTO para tu equipo? En ambos casos, escríbeme — con gusto lo platicamos.",
      phoneLabel: "WhatsApp",
      emailLabel: "Correo",
      locationLabel: "Ubicación",
      cvLabel: "Descargar CV completo (PDF)",
    },
    footer: {
      rights: "Todos los derechos reservados.",
      builtWith: "Construido con Astro.",
    },
  },
  en: {
    meta: {
      title: "Luis Enrique Ramírez L. — Senior Software Engineer",
      description:
        "Portfolio of Luis Enrique Ramírez L., Senior Software Engineer specialized in AI, autonomous agents, and distributed systems.",
    },
    nav: {
      spotlight: "Iruz Labs",
      about: "About",
      experience: "Experience",
      skills: "Skills",
      activity: "Activity",
      education: "Education",
      contact: "Contact",
    },
    crossLink: {
      toRecruiter: "View résumé for recruiters",
      toInvestor: "View for investors",
    },
    hero: {
      greeting: "Hi, I'm",
      name: "Luis Enrique Ramírez López",
      role: "Founder | CEO & CTO",
      exCompanies: "Ex-Stori · Ex-Publicis · Ex-Nolab · Ex-Arkos",
      tagline:
        "Senior software architect with a unique ability to translate complex engineering challenges into profitable, scalable business models.",
      ctaContact: "Let's talk",
      ctaCV: "Download CV",
      certifiedByLabel: "Certified by",
      stats: [
        { value: "14+", label: "years building software" },
        { value: "6+", label: "years of AWS experience" },
        { value: "4", label: "Tech Lead / CTO roles" },
      ],
    },
    about: {
      title: "About me",
      paragraph:
        "Software engineer with 14+ years building distributed systems, and today the founder of an AI startup. I combine technical depth — event-driven architectures, microservices, LLM-based automation — with business judgment: knowing when an engineering problem is really a product or go-to-market problem. Before Iruz Labs, I led engineering teams at Stori and Publicis; while scaling Iruz Labs in its early stage, I combined that with Tech Lead consulting at NOLAB and Arkos MX, establishing SCRUM, CI/CD, and observability standards at each.",
    },
    spotlight: {
      eyebrow: "What I'm building",
      fundingBadge: "Raising a Seed round",
      title: "Iruz Labs",
      subtitle:
        "An omnichannel AI agent platform (AAaaS) — WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram, and voice — that profiles, schedules, prospects, and qualifies leads so your sales team can close with full context.",
      problemLabel: "The problem",
      problem:
        "In any sales-driven vertical — retail, real estate, beauty, automotive, debt collection, call centers — teams lose leads due to slow, inconsistent follow-up across the channels where their prospects already are. Scaling a human team to cover every channel is expensive and slow.",
      productLabel: "The product",
      product:
        "Iruz Labs builds AI agents that work omnichannel — WhatsApp, Instagram, Facebook, TikTok, SMS, Telegram, and voice calls — profiling, scheduling, prospecting, and qualifying leads 24/7. The human agent steps in at the end, with full context, to close the sale. Includes an in-house CRM with end-to-end funnel traceability. I lead a small engineering and sales team.",
      proofLabel: "Proof of traction",
      proof:
        "Two real-estate success stories in addition to GRUPO DRT (Querétaro), plus active clients in Colombia (Integrity Inmo) and the United States (DBO Graphics), generating a combined ~$1,000+ USD/mo in initial MRR. Selected for Deel's pitch program, with AWS for Startups and Deel for Startups perks.",
      stats: [
        { value: "6.8%", label: "dormant-lead to closed-sale conversion" },
        { value: "3x", label: "more closed sales" },
        { value: "90%", label: "less response time" },
        { value: "3", label: "countries with active clients" },
      ],
      links: [
        { label: "iruzlabs.com", url: "https://iruzlabs.com" },
        { label: "See the product (Atenea)", url: "https://atenea.iruzlabs.com" },
      ],
      cta: "Interested in investing in our seed round, or collaborating with Iruz Labs? Let's talk.",
    },
    experience: {
      title: "Work Experience",
      jobs: experienceEN,
      projectsLabel: "Projects",
      visitLabel: "Visit",
    },
    techStack: {
      title: "Tech Stack",
      subtitle: "Technologies I build with, in production, day to day.",
      items: techStackItems,
    },
    skills: { title: "Skills", groups: skillGroupsEN },
    githubActivity: {
      title: "GitHub Activity",
      subtitle: "Consistency in building, day after day.",
      viewProfile: "View full GitHub profile",
    },
    education: {
      title: "Education",
      entries: [
        {
          school: "UNADM",
          degree: "B.S. in Mathematics",
          period: "2016 – 2020",
        },
      ],
      coursesTitle: "Courses & Certifications",
      featuredLabel: "Featured",
      courses: coursesData,
    },
    contact: {
      title: "Contact",
      text: "Looking to invest in Iruz Labs, or looking for a Tech Lead / CTO for your team? Either way, reach out — I'd love to talk.",
      phoneLabel: "WhatsApp",
      emailLabel: "Email",
      locationLabel: "Location",
      cvLabel: "Download full CV (PDF)",
    },
    footer: {
      rights: "All rights reserved.",
      builtWith: "Built with Astro.",
    },
  },
};

export const profile = {
  phone: "+52 999 514 8922",
  whatsapp: "https://wa.me/529995148922",
  email: "luis@iruzlabs.com",
  location: "Ciudad de México",
  photo: "/assets/profile.png",
  cv: "/assets/luis-ramirez-cv.pdf",
  initials: "LR",
  linkedin: "https://www.linkedin.com/in/luis-enrique-ram%C3%ADrez-l%C3%B3pez-a221ab222/",
  github: "https://github.com/LuisRaLo",
};
