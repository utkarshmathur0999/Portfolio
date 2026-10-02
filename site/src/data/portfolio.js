// ============================================================
// EDIT THIS FILE to update the whole site. Nothing else needs touching.
// Any link value containing "_HERE" is treated as "not set yet":
// the matching button is hidden automatically until you replace it.
// ============================================================

export const profile = {
  name: "Utkarsh Mathur",
  role: "Backend Software Engineer",
  tagline: "Java | Spring Boot | Banking & FinTech | Generative AI",
  intro:
    "Backend-focused Software Engineer with 2.5+ years of experience building Java and Spring Boot applications for banking and financial services. Experienced in payment processing, ISO 20022/SWIFT migration, microservices, REST APIs, databases, CI/CD, and AI-powered applications.",
  location: "Jaipur, India",
  photo: "src/assets/images/profile.webp", // replace file or change path
  photoAlt: "Portrait of Utkarsh Mathur",
  aboutPhoto: "", // optional second photo; leave empty to hide
  gallery: [], // optional: [{ src: "src/assets/images/x.webp", alt: "..." }]
  heroStack: ["Java", "Spring Boot", "Microservices", "Oracle", "PostgreSQL", "Docker", "RAG"],
};

export const links = {
  email: "utkarshmathur0999@gmail.com",
  phone: "8005930075",
  linkedin: "LINKEDIN_URL_HERE",
  github: "GITHUB_URL_HERE",
  resume: "src/assets/resume/Utkarsh_Mathur_Resume.pdf", // change filename here
  resumeDownloadName: "Utkarsh_Mathur_Resume.pdf",
};

export const stats = [
  { value: "2.5+", label: "years in banking & financial services" },
  { value: "50,000+", label: "daily financial records handled by batch jobs" },
  { value: "~25%", label: "faster Oracle query execution after tuning" },
];

export const about = [
  "I'm a backend-focused Software Engineer who builds Java and Spring Boot systems for banking and financial services. At TCS, I work on core payment processing and an MT-to-MX (ISO 20022) migration for a Saudi Arabian banking client, supporting SWIFT-compliant message transformation.",
  "My day-to-day covers REST and SOAP integrations, Spring Batch reconciliation jobs, Oracle SQL tuning, and messaging with IBM MQ and Kafka concepts, delivered through Jenkins, Maven, and Docker in Agile teams.",
  "More recently I built a full-stack loan origination and KYC system with an LLM-powered assistant grounded through retrieval-augmented generation (RAG). I hold Microsoft and Anthropic certifications in AI application development.",
];

export const aboutFocus = [
  "Java", "Spring Boot", "Microservices", "REST APIs", "Payment processing",
  "ISO 20022 / MT-to-MX", "SWIFT", "SQL & Oracle", "LLM applications", "RAG", "Docker", "CI/CD",
];

export const experience = [
  {
    role: "Product Engineer",
    company: "Tata Consultancy Services (TCS)",
    location: "Gurugram, India",
    period: "August 2024 – Present",
    points: [
      "Developed and modified Core Java modules and XML-based configuration logic for an MT-to-MX (ISO 20022) migration for a Saudi Arabian banking client.",
      "Built REST API components using Spring Boot, Spring MVC, and Spring Data JPA/Hibernate within a layered microservices architecture supporting core payment processing.",
      "Contributed to Spring Batch jobs automating bulk transaction processing and reconciliation workflows handling 50,000+ daily financial records.",
      "Worked with IBM MQ and Kafka concepts supporting asynchronous, high-volume financial messaging, and maintained SOAP/REST endpoints for banking data integrations.",
      "Tuned Oracle SQL queries and indexing strategies, reducing query execution time by approximately 25%.",
      "Applied Singleton and Factory design patterns to improve modularity.",
      "Used Jenkins, Maven, Docker, Git, and JIRA in an Agile/Scrum team; debugged production issues using JVM-level tools.",
    ],
    metrics: ["50,000+ daily financial records", "~25% query execution improvement"],
  },
  {
    role: "Associate Software Developer",
    company: "Design2Occupancy LLP (D2O)",
    location: "Jaipur, India",
    period: "February 2024 – August 2024",
    points: [
      "Developed and maintained backend components for a corporate web portal.",
      "Worked with Java, Spring Boot, JPA/Hibernate, and Oracle SQL.",
      "Designed and optimized SQL schemas and queries.",
      "Built and tested modular REST APIs.",
      "Wrote unit tests to improve reliability and maintain code coverage.",
      "Participated in Agile ceremonies, sprint planning, and code reviews.",
    ],
    metrics: [],
  },
];

export const skills = [
  { title: "Programming & Databases", items: ["Java 8", "Java 17", "SQL", "XML", "HTML5", "CSS3", "Oracle DB", "PostgreSQL"] },
  { title: "Backend & Frameworks", items: ["Spring Boot", "Spring MVC", "Spring Data JPA", "Hibernate", "Spring Batch", "Spring Security", "Servlets", "JSP", "JDBC"] },
  { title: "Frontend", items: ["Angular"] },
  { title: "AI & Generative AI", items: ["Prompt Engineering", "LLM API Integration", "OpenAI API", "Claude API", "RAG", "Azure AI Services"] },
  { title: "Banking & Architecture", items: ["ISO 20022", "MT-to-MX Migration", "SWIFT Compliance", "Microservices", "REST APIs", "SOAP APIs", "IBM MQ", "Kafka", "Design Patterns"] },
  { title: "DevOps & Tools", items: ["Jenkins", "Docker", "Maven", "Git", "JUnit", "Mockito", "JIRA", "Agile/Scrum"] },
];

export const project = {
  title: "Loan Origination & KYC Onboarding System with AI Assistant",
  stack: ["Java 17", "Spring Boot", "PostgreSQL", "Angular", "Docker", "LLM APIs", "RAG"],
  summary:
    "Built a full-stack loan origination and KYC onboarding system covering customer onboarding, document metadata capture, and loan application status tracking.",
  features: [
    "Customer onboarding", "KYC onboarding", "Document metadata capture", "Loan application status tracking",
    "REST APIs", "PostgreSQL database", "Angular frontend", "AI-powered applicant assistant", "Docker Compose deployment",
  ],
  aiPoints: [
    "Answers applicant questions about required documents and loan policies.",
    "Uses LLM API calls, integrating OpenAI/Claude APIs.",
    "Grounded through a Retrieval-Augmented Generation (RAG) pipeline.",
    "Uses prompt engineering designed to reduce unsupported responses.",
  ],
  appFlow: ["Angular UI", "Spring Boot REST APIs", "Business Services", "PostgreSQL"],
  aiFlow: ["User Question", "AI Assistant", "RAG Retrieval", "Relevant Loan/KYC Information", "LLM", "Grounded Response"],
  projectUrl: "PROJECT_URL_HERE",
  githubUrl: "PROJECT_GITHUB_URL_HERE",
};

export const certifications = [
  {
    name: "Microsoft Certified: Azure AI Apps and Agents Developer Associate",
    issuer: "Microsoft",
    issued: "August 2026",
    expires: "August 2027",
    image: "src/assets/certificates/azure-ai-apps-agents.webp",
    imageAlt: "Microsoft Certified: Azure AI Apps and Agents Developer Associate certificate",
    verifyUrl: "CERTIFICATE_VERIFICATION_URL_HERE",
  },
  {
    name: "Claude Certified Developer – Foundations",
    issuer: "Anthropic",
    issued: "August 2026",
    expires: "August 2027",
    image: "src/assets/certificates/claude-certified-developer.webp",
    imageAlt: "Claude Certified Developer – Foundations certificate",
    // Taken from the credential URL printed on your certificate
    verifyUrl: "https://www.credly.com/badges/2b364c6a-764f-4e62-b7f1-8b7b66643176",
  },
];

export const education = {
  degree: "Bachelor of Technology (B.Tech), Electrical Engineering",
  school: "Jaipur Engineering College and Research Center",
  location: "Jaipur, India",
  years: "2020 – 2024",
  cgpa: "8.57",
};

export const siteUrl = "https://YOUR-SITE.netlify.app"; // also update in index.html, sitemap.xml, robots.txt
