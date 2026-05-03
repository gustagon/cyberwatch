// CyberWatch v2.1 — i18n EN/ES/FR · Dictionary fixed
import React, { useState, useEffect, useRef, useMemo, createContext, useContext } from "react";
import {
  Shield, Activity, Database, Search, AlertTriangle, Globe, Zap, TrendingUp,
  Filter, RefreshCw, ExternalLink, Eye, Skull, Lock, Wifi, Server, Bug,
  ChevronRight, BarChart3, Crown, Trophy, Medal, Award, X,
  Mail, FileText, Users, Send, CheckCircle, Newspaper, Calendar, Download, Inbox,
  Target, Radar, Gauge, Fingerprint, KeyRound, ShieldCheck, ShieldAlert, Link2, Cloud, Cpu, Share2, Plus,
  ArrowRight, Menu, ChevronDown
} from "lucide-react";
import {
  BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer,
  PieChart, Pie, Cell, LineChart, Line, Legend
} from "recharts";

// ============================================================
// I18N — Sistema de internacionalización (EN · ES · FR)
// ============================================================
const LOCALES = {
  en: { code: "en", name: "English", flag: "🇬🇧" },
  es: { code: "es", name: "Español", flag: "🇪🇸" },
};

const DICT = {
  en: {
    // Generic
    signIn: "Sign in", signOut: "Sign out", tryFree7: "Try free · 7 days",
    skipTour: "Skip tour", next: "Next", back: "Back", startExploring: "Start exploring",
    step: "Step", of: "of", replayTour: "Replay tour", walkThrough: "Walk through all 7 modules",
    startTour: "Start tour", platformTour: "PLATFORM TOUR", exitTour: "Exit tour",
    finishTour: "Finish tour", openModule: "Open {name}",
    close: "Close", cancel: "Cancel", save: "Save", delete: "Delete", create: "Create",
    search: "Search", filter: "Filter", loading: "Loading", all: "All", none: "None",
    // Auth
    welcomeBack: "Welcome back. Your SOC is waiting.",
    noAccount: "Don't have an account?", createIn30: "Create one in 30s",
    haveAccount: "Already have an account?",
    startFreeTrial: "Start free trial", trial90days: "90 days · No credit card · Full access",
    email: "Email", password: "Password", fullName: "Full name",
    company: "Company", acceptTerms: "I accept the terms and privacy policy. I understand I will receive the CTI reports during the trial.",
    createAccount: "Create account · Start trial",
    demoAnyEmail: "Demo · any email works",
    completeFields: "Complete required fields", invalidEmail: "Invalid email",
    passwordMin: "Password must be at least 6 characters", mustAccept: "You must accept the terms",
    // Landing
    liveThreats: "Live · {n} threats observed today",
    heroTitle1: "Extended Threat", heroTitle2: "Intelligence for the", heroTitle3: "modern SOC.",
    heroLead: "Unified CTI, External Attack Surface Management, Vulnerability Lifecycle and Dark Web monitoring. Autonomous AI agents triage, investigate and remediate — so your analysts can focus on what matters.",
    exploreNow: "Explore the Platform Now", free7days: "FREE 7 DAYS",
    orBook90: "Or book a 90-day trial", instantAccess: "Instant access · no signup required · all modules unlocked",
    agenticBadge: "Powered by Claude Opus 4.7 · Agentic AI",
    noCard: "No credit card", socReady: "SOC 2 Type II", compliance: "NIS2 · GDPR · DORA", mitreMapped: "MITRE ATT&CK mapped",
    platformLabel: "// PLATFORM MODULES",
    sixModules1: "Six modules.", sixModules2: "One intelligence fabric.",
    platformDesc: "Every module feeds the next. A threat detected by the real-time engine enriches the CTI reports. A credential leak found by dark web monitoring updates your Hack Risk Score. Vulnerabilities feed the lifecycle. One spine, continuous signal.",
    agenticSection1: "Stop reading alerts.", agenticSection2: "Start resolving them.",
    agenticSectionDesc: "Traditional threat intel is passive — it delivers data and waits. Our Agentic AI, powered by Claude Opus 4.7, autonomously investigates indicators, enriches context from NVD, MITRE, KEV and your own data, and generates remediation plans specific to your stack.",
    agenticBullet1: "Autonomous triage of every threat event",
    agenticBullet2: "Contextual risk scoring (CVSS × asset criticality × environment)",
    agenticBullet3: "Remediation plans in natural language: patch, workaround, rollback",
    agenticBullet4: "Executive briefings that translate technical into financial impact",
    aiRemediationPlan: "AI Remediation Plan", generatedIn: "Generated in 1.8s by Claude Opus 4.7",
    aiPatch: "Patch", aiWorkaround: "Workaround", aiHardening: "Hardening", aiVerify: "Verify",
    bannerBadge: "No signup · Instant access",
    bannerTitle1: "Skip the demo call.", bannerTitle2: "See it in action now.",
    bannerDesc: "One click gives you the full platform for 7 days. All six modules unlocked. Real data flowing. Use it with your own team, no commitments.",
    bannerTeams: "{n} teams exploring right now",
    noCardNoSignup: "FREE 7 DAYS · NO CARD",
    pricingLabel: "// PRICING",
    pricingTitle1: "Transparent.", pricingTitle2: "No surprises.",
    finalCTA1: "Your SOC deserves", finalCTA2: "better intel.",
    finalCTADesc: "No forms. No sales calls. Click and start exploring the full platform right now. All 6 modules unlocked · Threat Dashboard · CTI Reports · Hack Risk · Vulnerability Lifecycle.",
    orRegister90: "Or register for 90-day trial",
    finalNote: "Instant access · no signup · no card · full feature set",
    // Nav
    navThreatDashboard: "Threat Dashboard", navThreatRegistry: "Threat Registry",
    navBreachCVE: "Breach & CVE Intel", navCTIReports: "CTI Reports",
    navHackRisk: "Hack Risk Score", navVLM: "Vulnerability Lifecycle",
    navBenchmark: "Platform Benchmark",
    sectionIntelligence: "Intelligence", sectionRiskCompliance: "Risk & Compliance",
    agenticSidebar: "Autonomous agents powered by Claude Opus 4.7 investigate, triage and remediate threats.",
    // Topbar
    eventsTracked: "{org} · {n} events tracked",
    exploreBadge: "7-DAY EXPLORE · ALL UNLOCKED",
    searchPlaceholder: "Search CVE, IOC, asset, threat actor...",
    liveFeed: "LIVE FEED", paused: "PAUSED", pause: "Pause", resume: "Resume",
    organization: "Organization",
    // Dashboard
    critical: "Critical", high: "High", medium: "Medium", low: "Low",
    openIncidents: "open incidents",
    totalThreats: "Total threats recorded", filter_: "Filter", clearDB: "Clear DB",
    byThreatType: "By threat type", mitreAttackTactics: "MITRE ATT&CK Tactics",
    threatFeedTitle: "Threat feed (priority by severity)", shownCount: "{n} shown",
    waiting: "Waiting for detections...",
    // Registry
    searchRegistry: "Search type, family, IP, MITRE ID...",
    records: "{a} / {b} records (persistent)", noRecords: "No records",
    timestamp: "Timestamp", severity: "Severity", type: "Type", source: "Source", mitre: "MITRE", cvss: "CVSS",
    // Pricing tiers
    mostPopular: "Most popular",
    tierStarter: "Starter", tierStarterPeriod: "90-day trial", tierStarterCTA: "Start free",
    tierStarterF1: "Real-time threat feed", tierStarterF2: "100 threats in DB",
    tierStarterF3: "CTI weekly bulletin", tierStarterF4: "1 asset in Hack Risk", tierStarterF5: "Community support",
    tierPro: "Professional", tierProPeriod: "/month", tierProCTA: "Start trial",
    tierProF1: "Unlimited threat DB", tierProF2: "All 11 CTI report types", tierProF3: "25 assets · full EASM scans",
    tierProF4: "Vulnerability Lifecycle (full)", tierProF5: "Agentic AI remediation", tierProF6: "NVD · MITRE · CISA KEV",
    tierProF7: "Slack · Jira · Teams", tierProF8: "Email + chat support",
    tierEnt: "Enterprise", tierEntPrice: "Custom", tierEntPeriod: "annual", tierEntCTA: "Book briefing",
    tierEntF1: "Everything in Professional", tierEntF2: "Unlimited assets", tierEntF3: "On-prem or sovereign cloud",
    tierEntF4: "Dedicated threat analyst", tierEntF5: "Custom SIEM integrations", tierEntF6: "SAML · SCIM · audit logs",
    tierEntF7: "24/7 incident hotline", tierEntF8: "Compliance attestations",
    // Module cards
    modRealtime: "Real-time detection", modRealtimeDesc: "MITRE ATT&CK mapped threats with CVSS-weighted severity, persisted operational DB with Agentic triage.",
    modCTI: "CTI reports", modCTIDesc: "+130 reports across 11 types: daily bulletins, ransomware, leaks, hacktivism, sectorial trends, DDoS.",
    modRisk: "Hack Risk Score", modRiskDesc: "External Attack Surface Management across 8 dimensions. Score 0-100, grade A-F, compliance mapping.",
    modBreach: "Breach & CVE intel", modBreachDesc: "Live NVD API. Search 200k+ CVEs. Curated catalog of major breaches since 2023 with threat actor attribution.",
    modVLM: "Vulnerability Lifecycle", modVLMDesc: "Discover → Prioritize → Evaluate → Report → Remediate → Verify. AI-generated remediation by Claude Opus 4.7.",
    modBench: "Competitive benchmark", modBenchDesc: "30 platforms scored and ranked. Your positioning vs Lumu, SOCRadar, Darktrace, Recorded Future, Mandiant.",
    bannerF1: "Live threat detection", bannerF2: "CTI Reports service", bannerF3: "Hack Risk scanner",
    bannerF4: "Vulnerability Lifecycle", bannerF5: "NVD · MITRE · KEV data", bannerF6: "AI remediation engine",
    // Loading
    loadingPlatform: "Loading platform...",
    // Threat modal
    severity_: "SEVERITY", cvssScore: "CVSS Score", cvssVector: "CVSS Vector",
    threatDetails: "Threat details", attackerInfo: "Attacker information",
    targetInfo: "Target information", iocSection: "Indicators of Compromise (IOC)",
    mitreSection: "MITRE ATT&CK", recommendedActions: "Recommended actions",
    detectedAt: "Detected at", threatType: "Threat type", malwareFamily: "Malware family",
    sourceIp: "Source IP", sourceCountry: "Source country", sourceASN: "Source ASN",
    targetSector: "Target sector", targetOrg: "Target organization", targetGeo: "Target geography",
    fileHash: "File hash (SHA-256)", c2Server: "C2 Server", relatedDomains: "Related domains",
    tactic: "Tactic", technique: "Technique", subTechnique: "Sub-technique",
    isolateHost: "Isolate affected host", blockIP: "Block source IP at perimeter",
    huntForIOCs: "Hunt for IOCs across fleet", patchVulnerability: "Apply patch / mitigation",
    notifySOC: "Notify SOC team", openInNVD: "Open in NVD",
    // Registry
    registryTitle: "Persistent threat registry",
    // CVE
    cveTitle: "Breach & CVE Intelligence",
    cveSubtitle: "Live queries against the official NVD API · Curated breach catalog",
    cveTabRecent: "Recent CVEs", cveTabSearch: "Search CVE", cveTabBreaches: "Major breaches",
    cveSearchPlaceholder: "e.g. CVE-2024-21887, log4j, ivanti...",
    cveSearch: "Search", cveLoading: "Querying NVD...", cveNoResults: "No results found",
    cvePublished: "Published",
    // Reports tab
    reportsHeroBadge: "Cyber Threat Intelligence Subscription",
    reportsHeroTitle: "+130 reports per quarter",
    reportsHeroSubtitle: "Daily threat news, ransomware monitoring, credential leaks, hacktivism, sectorial trends. Inspired by Telefónica Tech, expanded with more report types.",
    reportsTabPublic: "Public landing", reportsTabAdmin: "Admin panel", reportsTabArchive: "Archive",
    // Risk
    riskHeroBadge: "Hack Risk Score · External Attack Surface Management",
    riskHeroTitle: "See your company as an attacker sees it",
    riskHeroSubtitle: "8-dimension scan. Score 0-100. Compliance mapping to NIST CSF 2.0, ISO 27001:2022, NIS2, GDPR, DORA. Shareable report with 7-day token.",
    riskCategorySurface: "Attack surface", riskCategoryCreds: "Credential leaks",
    // Risk form
    riskScanFormTitle: "New attack surface analysis",
    riskScanFormSubtitle: "Enter the domain to scan. The scan takes a few seconds.",
    riskScanFormDomain: "Domain", riskScanFormCompany: "Company name", riskScanFormSector: "Sector",
    riskScanFormStart: "Start scan",
    riskScanIncludes: "The scan includes: subdomain enumeration, port analysis, SSL/TLS check, SPF/DKIM/DMARC validation, dark web credential search, CVE correlation, cloud posture and forum mentions.",
    invalidDomain: "Invalid domain (e.g. company.com)",
    reportsFormSelectSector: "Select...",
    riskCategoryVulns: "Vulnerabilities", riskCategorySSL: "SSL/TLS hygiene",
    riskCategoryEmail: "Email security", riskCategoryDNS: "DNS posture",
    riskCategoryDark: "Dark web exposure", riskCategoryCloud: "Cloud posture",
    riskCatSurfaceDesc: "Exposed assets discovered",
    riskCatCredsDesc: "Credentials leaked on the dark web",
    riskCatVulnsDesc: "Exploitable CVEs in exposed services",
    riskCatSSLDesc: "Certificates and TLS configuration",
    riskCatEmailDesc: "SPF, DKIM, DMARC",
    riskCatDNSDesc: "DNS configuration and records",
    riskCatDarkDesc: "Mentions in forums and markets",
    riskCatCloudDesc: "Misconfigs in AWS/Azure/GCP",
    // VLM
    vlmHeroBadge: "Vulnerability Lifecycle Management",
    vlmHeroTitle: "Beyond Tenable, InsightVM & ManageEngine",
    vlmHeroSubtitle: "Discover → Prioritize → Evaluate → Report → Remediate → Verify. Real Risk score, SLA tracking, CISA KEV badges, AI remediation by Claude Opus 4.7.",
    vlmStageDiscover: "Discover", vlmStagePrioritize: "Prioritize", vlmStageEvaluate: "Evaluate",
    vlmStageReport: "Report", vlmStageRemediate: "Remediate", vlmStageVerify: "Verify",
    vlmDiscoverDesc: "Total inventory of hardware, software, applications and network assets.",
    vlmPrioritizeDesc: "Classification by asset value and business criticality.",
    vlmEvaluateDesc: "Technical scan to find flaws and misconfigurations.",
    vlmReportDesc: "Detailed documentation and strategic communication.",
    vlmRemediateDesc: "Patch application and configuration changes.",
    vlmVerifyDesc: "Re-scan to confirm risk resolution.",
    // Study
    studyHeroBadge: "Competitive Platform Benchmark",
    studyHeroTitle: "30 platforms scored across 5 dimensions",
    studyHeroSubtitle: "Coverage · Intelligence quality · Automation · Integrations · Value. Updated quarterly.",
    // Report catalog
    rcFreqDaily: "Daily", rcFreqWeekly: "Weekly", rcFreqMonthly: "Monthly", rcFreqBimonthly: "Bi-monthly",
    rcDailyTitle: "Daily threat news", rcDailyDesc: "Daily bulletin with data from public, private and own sources: threats, new security flaws, malware and actors, plus patches, IoCs and PoCs.",
    rcWeeklyTitle: "Weekly threat news", rcWeeklyDesc: "Highlights of the week from daily bulletins, with the most important cybersecurity news.",
    rcThreatTitle: "Threat report", rcThreatDesc: "Weekly thorough evaluation of current threats (infostealers, ransomware, vulnerabilities) and the adversaries behind them.",
    rcFraudTitle: "Fraud Hunters", rcFraudDesc: "Monthly detailed analysis of suspicious infrastructure from public and private sources: domains, URLs, IPs, DDNS.",
    rcRansomTitle: "Ransomware monitoring", rcRansomDesc: "Ransomware incidents analyzing each family (LockBit, Akira, 8base, BlackCat), most affected countries and sectors.",
    rcLeaksTitle: "Information leaks", rcLeaksDesc: "Compilation of public information leak incidents classified by criticality, sector, technique, location and affected technologies.",
    rcSectorTitle: "Sectorial trends", rcSectorDesc: "Relevant news affecting main sectors: Public Administrations, banking, retail, energy, healthcare, etc.",
    rcVulnTitle: "Vulnerability intelligence", rcVulnDesc: "Vulnerabilities detected and reported in CVE, with adversary landscape and exploitation trends.",
    rcHackTitle: "Hacktivism monitoring", rcHackDesc: "TTPs, actors, attack types, incidents observed by region and mitigation recommendations.",
    rcDdosTitle: "DDoS monitoring", rcDdosDesc: "Denial-of-service attacks in armed conflicts: degree of impact by country and sector, campaigns and actors.",
    rcActivismTitle: "Digital activism monitoring", rcActivismDesc: "Activist events in Spain, Chile, Colombia and Peru: campaigns, actors, motivation and protection.",
    // Reports landing
    reportsLandingTitle: "Cyber threat intelligence reports",
    reportsLandingSubtitle: "Subscribe and receive expert intelligence directly in your inbox. No infrastructure required.",
    reportsCatalogTitle: "Available report types",
    reportsSubscribeTitle: "Start your free trial",
    reportsSubscribeDesc: "90 days of full access. No credit card required.",
    reportsFormName: "Full name", reportsFormEmail: "Corporate email", reportsFormCompany: "Company",
    reportsFormSector: "Sector", reportsFormSelectSector: "Select your sector",
    reportsFormSubmit: "Subscribe · Free 90 days", reportsFormSuccess: "Subscribed successfully!",
    reportsFormSuccessDesc: "Check your inbox for the welcome email and your first report.",
    selectAtLeastOne: "Select at least one report type",
    subscriptionsActive: "active subscriptions",
    registerAnother: "Register another subscriber",
    trialBadge: "FREE TRIAL · 90 DAYS",
    statsReports: "reports delivered", statsDays: "trial days", statsTypes: "report types", statsUpdate: "updates",
    selectReports: "Select the ones you want to receive. All included in the free trial.",
    phoneOptional: "Phone (optional)",
    youSelected: "You selected {n} / {total} report types",
    privacyAccept: "I have read and accept the privacy policy and the processing of my data for the reception of cyber intelligence reports.",
    // Sectors
    sectorPublic: "Public Administration", sectorBanking: "Banking & Finance",
    sectorHealth: "Healthcare", sectorEnergy: "Energy & Utilities",
    sectorRetail: "Retail & eCommerce", sectorTech: "Technology",
    sectorIndustry: "Industry/Manufacturing", sectorEducation: "Education",
    sectorTelco: "Telco", sectorTransport: "Transport", sectorOther: "Other",
    // Tour
    tour: {
      0: { title: "Threat Dashboard", headline: "Your real-time command center",
           body: "Live-streaming threat feed mapped to MITRE ATT&CK. Every event is scored by CVSS, classified by severity, and enriched with source geography and target sector. Click any severity tile to filter instantly.",
           h: ["KPI cards show open incidents by severity", "Charts break down by threat type and ATT&CK tactic", "Feed updates every 3.5s · pause anytime from the topbar"] },
      1: { title: "Threat Registry", headline: "Your operational memory",
           body: "Every detection is persisted in a searchable database. Query by IP, CVE, MITRE ID, family or attacker country. This is what your analysts will open first thing every morning.",
           h: ["Full-text search across all historical events", "Click any row for the full event modal with IOC hash + ATT&CK link", "Data survives browser reloads"] },
      2: { title: "Breach & CVE Intel", headline: "Research every vulnerability, know every breach",
           body: "Live queries against the official NVD API. Search 200,000+ CVEs, browse what was just published in the last 30 days, or dive into the curated catalog of major breaches since 2023.",
           h: ["Three modes: Recent, Search, Breaches", "Every finding links to NVD and MITRE", "Use this when a CVE hits the news"] },
      3: { title: "CTI Reports", headline: "130+ intelligence reports per quarter",
           body: "Subscribers receive 11 types of reports covering daily threat news, ransomware monitoring, credential leaks, hacktivism, sectorial trends and more. Manage subscribers, generate reports, browse the archive.",
           h: ["Public landing + admin panel + report archive", "Reports are auto-generated from your live threat data", "Inspired by Telefónica Tech · more report types"] },
      4: { title: "Hack Risk Score", headline: "See your company as an attacker sees it",
           body: "External Attack Surface Management. Enter a domain and get a 0-100 score across 8 dimensions: attack surface, credential leaks, vulnerabilities, SSL/TLS, email, DNS, dark web, cloud posture. Plus compliance mapping to NIST/ISO/NIS2/GDPR/DORA.",
           h: ["8 scan phases run in real time", "Remediation guidance per finding", "Shareable report with 7-day token"] },
      5: { title: "Vulnerability Lifecycle", headline: "Beyond Tenable, InsightVM & ManageEngine",
           body: "The full Discover → Prioritize → Evaluate → Report → Remediate → Verify cycle. Real Risk score (CVSS × criticality × environment), SLA tracking, CISA KEV badges, kanban-style remediation workflow and 6 deliverable types.",
           h: ["Click any vulnerability for Claude Opus 4.7 remediation plan", "AI generates: patch, workaround, hardening, verify, rollback", "This is what sets us apart in the VM market"] },
      6: { title: "Platform Benchmark", headline: "Know the market, know your position",
           body: "30 competitive threat intelligence platforms ranked by a 5-dimension scoring system. Compare CyberWatch against Lumu, SOCRadar, Darktrace, Recorded Future, Mandiant, CrowdStrike and more. Includes podium, filtered by category.",
           h: ["Sortable by coverage, intel, automation, integrations or value", "Filter by NDR, CTI, XDR, SIEM, DRP", "Great for RFP responses and competitive positioning"] },
    },
  },
  es: {
    signIn: "Iniciar sesión", signOut: "Salir", tryFree7: "Probar gratis · 7 días",
    skipTour: "Saltar tour", next: "Siguiente", back: "Atrás", startExploring: "Empezar a explorar",
    step: "Paso", of: "de", replayTour: "Repetir tour", walkThrough: "Recorrer los 7 módulos",
    startTour: "Iniciar tour", platformTour: "TOUR DE LA PLATAFORMA", exitTour: "Salir del tour",
    finishTour: "Finalizar tour", openModule: "Abrir {name}",
    close: "Cerrar", cancel: "Cancelar", save: "Guardar", delete: "Eliminar", create: "Crear",
    search: "Buscar", filter: "Filtrar", loading: "Cargando", all: "Todo", none: "Ninguno",
    welcomeBack: "Bienvenido de vuelta. Tu SOC te espera.",
    noAccount: "¿No tienes cuenta?", createIn30: "Crea una en 30s",
    haveAccount: "¿Ya tienes cuenta?",
    startFreeTrial: "Comenzar prueba gratuita", trial90days: "90 días · Sin tarjeta · Acceso completo",
    email: "Email", password: "Contraseña", fullName: "Nombre completo",
    company: "Empresa", acceptTerms: "Acepto los términos y la política de privacidad. Entiendo que recibiré los informes CTI durante la prueba.",
    createAccount: "Crear cuenta · Iniciar prueba",
    demoAnyEmail: "Demo · cualquier email funciona",
    completeFields: "Completa los campos obligatorios", invalidEmail: "Email no válido",
    passwordMin: "La contraseña debe tener al menos 6 caracteres", mustAccept: "Debes aceptar los términos",
    liveThreats: "En directo · {n} amenazas detectadas hoy",
    heroTitle1: "Inteligencia de amenazas", heroTitle2: "extendida para el", heroTitle3: "SOC moderno.",
    heroLead: "CTI unificado, gestión de superficie de ataque externa, ciclo de vida de vulnerabilidades y monitorización de la dark web. Agentes de IA autónomos investigan y remedian, dejando a tus analistas centrarse en lo que importa.",
    exploreNow: "Explorar la plataforma ya", free7days: "GRATIS 7 DÍAS",
    orBook90: "O reserva prueba de 90 días", instantAccess: "Acceso instantáneo · sin registro · todos los módulos desbloqueados",
    agenticBadge: "Con Claude Opus 4.7 · IA Agéntica",
    noCard: "Sin tarjeta", socReady: "SOC 2 Type II", compliance: "NIS2 · GDPR · DORA", mitreMapped: "Mapeado a MITRE ATT&CK",
    platformLabel: "// MÓDULOS DE LA PLATAFORMA",
    sixModules1: "Seis módulos.", sixModules2: "Un tejido de inteligencia.",
    platformDesc: "Cada módulo alimenta al siguiente. Una amenaza detectada en tiempo real enriquece los informes CTI. Una credencial filtrada en la dark web actualiza tu Hack Risk Score. Las vulnerabilidades alimentan el ciclo de vida. Una columna vertebral, señal continua.",
    agenticSection1: "Deja de leer alertas.", agenticSection2: "Empieza a resolverlas.",
    agenticSectionDesc: "La inteligencia de amenazas tradicional es pasiva: entrega datos y espera. Nuestra IA Agéntica, impulsada por Claude Opus 4.7, investiga autónomamente, enriquece el contexto desde NVD, MITRE, KEV y tus propios datos, y genera planes de remediación específicos para tu stack.",
    agenticBullet1: "Triaje autónomo de cada evento de amenaza",
    agenticBullet2: "Puntuación de riesgo contextual (CVSS × criticidad del activo × entorno)",
    agenticBullet3: "Planes de remediación en lenguaje natural: parche, workaround, rollback",
    agenticBullet4: "Informes ejecutivos que traducen lo técnico a impacto financiero",
    aiRemediationPlan: "Plan de remediación IA", generatedIn: "Generado en 1,8s por Claude Opus 4.7",
    aiPatch: "Parche", aiWorkaround: "Workaround", aiHardening: "Hardening", aiVerify: "Verificar",
    bannerBadge: "Sin registro · Acceso instantáneo",
    bannerTitle1: "Sáltate la llamada comercial.", bannerTitle2: "Míralo en acción ya.",
    bannerDesc: "Un clic te da la plataforma completa durante 7 días. Los seis módulos desbloqueados. Datos reales fluyendo. Úsalo con tu equipo, sin compromisos.",
    bannerTeams: "{n} equipos explorando ahora mismo",
    noCardNoSignup: "GRATIS 7 DÍAS · SIN TARJETA",
    pricingLabel: "// PRECIOS",
    pricingTitle1: "Transparente.", pricingTitle2: "Sin sorpresas.",
    finalCTA1: "Tu SOC merece", finalCTA2: "mejor inteligencia.",
    finalCTADesc: "Sin formularios. Sin llamadas comerciales. Haz clic y empieza a explorar la plataforma completa ahora. Los 6 módulos desbloqueados · Threat Dashboard · Informes CTI · Hack Risk · Ciclo de vida de vulnerabilidades.",
    orRegister90: "O regístrate para prueba de 90 días",
    finalNote: "Acceso instantáneo · sin registro · sin tarjeta · funcionalidad completa",
    navThreatDashboard: "Panel de Amenazas", navThreatRegistry: "Registro de Amenazas",
    navBreachCVE: "Brechas y CVE", navCTIReports: "Informes CTI",
    navHackRisk: "Hack Risk Score", navVLM: "Ciclo de Vulnerabilidades",
    navBenchmark: "Benchmark de Plataformas",
    sectionIntelligence: "Inteligencia", sectionRiskCompliance: "Riesgo y Cumplimiento",
    agenticSidebar: "Agentes autónomos con Claude Opus 4.7 investigan, clasifican y remedian amenazas.",
    eventsTracked: "{org} · {n} eventos registrados",
    exploreBadge: "EXPLORE 7 DÍAS · TODO DESBLOQUEADO",
    searchPlaceholder: "Buscar CVE, IOC, activo, actor de amenaza...",
    liveFeed: "FEED EN VIVO", paused: "PAUSADO", pause: "Pausar", resume: "Reanudar",
    organization: "Organización",
    critical: "Crítico", high: "Alto", medium: "Medio", low: "Bajo",
    openIncidents: "incidentes abiertos",
    totalThreats: "Total de amenazas registradas", filter_: "Filtro", clearDB: "Limpiar BD",
    byThreatType: "Por tipo de amenaza", mitreAttackTactics: "Tácticas MITRE ATT&CK",
    threatFeedTitle: "Feed de amenazas (priorizado por gravedad)", shownCount: "{n} mostradas",
    waiting: "Esperando detecciones...",
    searchRegistry: "Buscar tipo, familia, IP, MITRE ID...",
    records: "{a} / {b} registros (persistentes)", noRecords: "Sin registros",
    timestamp: "Fecha", severity: "Severidad", type: "Tipo", source: "Origen", mitre: "MITRE", cvss: "CVSS",
    mostPopular: "Más popular",
    tierStarter: "Starter", tierStarterPeriod: "prueba 90 días", tierStarterCTA: "Empezar gratis",
    tierStarterF1: "Feed de amenazas en tiempo real", tierStarterF2: "100 amenazas en BD",
    tierStarterF3: "Boletín CTI semanal", tierStarterF4: "1 activo en Hack Risk", tierStarterF5: "Soporte comunitario",
    tierPro: "Professional", tierProPeriod: "/mes", tierProCTA: "Iniciar prueba",
    tierProF1: "BD de amenazas ilimitada", tierProF2: "Los 11 tipos de informes CTI", tierProF3: "25 activos · escaneos EASM completos",
    tierProF4: "Ciclo de vulnerabilidades (completo)", tierProF5: "Remediación con IA Agéntica", tierProF6: "NVD · MITRE · CISA KEV",
    tierProF7: "Slack · Jira · Teams", tierProF8: "Email + chat de soporte",
    tierEnt: "Enterprise", tierEntPrice: "A medida", tierEntPeriod: "anual", tierEntCTA: "Agendar demo",
    tierEntF1: "Todo lo de Professional", tierEntF2: "Activos ilimitados", tierEntF3: "On-prem o nube soberana",
    tierEntF4: "Analista de amenazas dedicado", tierEntF5: "Integraciones SIEM personalizadas", tierEntF6: "SAML · SCIM · logs de auditoría",
    tierEntF7: "Línea de incidencias 24/7", tierEntF8: "Certificaciones de cumplimiento",
    modRealtime: "Detección en tiempo real", modRealtimeDesc: "Amenazas mapeadas a MITRE ATT&CK con severidad por CVSS, BD operacional persistente con triaje agéntico.",
    modCTI: "Informes CTI", modCTIDesc: "+130 informes en 11 tipos: boletines diarios, ransomware, fugas, hacktivismo, tendencias sectoriales, DDoS.",
    modRisk: "Hack Risk Score", modRiskDesc: "Gestión de superficie de ataque externa en 8 dimensiones. Score 0-100, grado A-F, mapeo de cumplimiento.",
    modBreach: "Brechas y CVE", modBreachDesc: "API NVD en vivo. Busca entre 200k+ CVEs. Catálogo curado de grandes brechas desde 2023 con atribución.",
    modVLM: "Ciclo de Vulnerabilidades", modVLMDesc: "Descubrir → Priorizar → Evaluar → Reportar → Remediar → Verificar. Remediación IA con Claude Opus 4.7.",
    modBench: "Benchmark competitivo", modBenchDesc: "30 plataformas puntuadas y rankeadas. Tu posición vs Lumu, SOCRadar, Darktrace, Recorded Future, Mandiant.",
    bannerF1: "Detección en tiempo real", bannerF2: "Servicio de informes CTI", bannerF3: "Scanner Hack Risk",
    bannerF4: "Ciclo de vulnerabilidades", bannerF5: "Datos NVD · MITRE · KEV", bannerF6: "Motor de remediación IA",
    loadingPlatform: "Cargando plataforma...",
    severity_: "SEVERIDAD", cvssScore: "Puntuación CVSS", cvssVector: "Vector CVSS",
    threatDetails: "Detalles de la amenaza", attackerInfo: "Información del atacante",
    targetInfo: "Información del objetivo", iocSection: "Indicadores de compromiso (IOC)",
    mitreSection: "MITRE ATT&CK", recommendedActions: "Acciones recomendadas",
    detectedAt: "Detectado el", threatType: "Tipo de amenaza", malwareFamily: "Familia de malware",
    sourceIp: "IP origen", sourceCountry: "País de origen", sourceASN: "ASN origen",
    targetSector: "Sector objetivo", targetOrg: "Organización objetivo", targetGeo: "Geografía objetivo",
    fileHash: "Hash de archivo (SHA-256)", c2Server: "Servidor C2", relatedDomains: "Dominios relacionados",
    tactic: "Táctica", technique: "Técnica", subTechnique: "Sub-técnica",
    isolateHost: "Aislar el host afectado", blockIP: "Bloquear IP origen en perímetro",
    huntForIOCs: "Cazar IOCs en toda la flota", patchVulnerability: "Aplicar parche / mitigación",
    notifySOC: "Notificar al equipo SOC", openInNVD: "Abrir en NVD",
    registryTitle: "Registro persistente de amenazas",
    cveTitle: "Inteligencia de Brechas y CVE",
    cveSubtitle: "Consultas en vivo contra la API oficial del NVD · Catálogo curado de brechas",
    cveTabRecent: "CVEs recientes", cveTabSearch: "Buscar CVE", cveTabBreaches: "Grandes brechas",
    cveSearchPlaceholder: "ej. CVE-2024-21887, log4j, ivanti...",
    cveSearch: "Buscar", cveLoading: "Consultando NVD...", cveNoResults: "Sin resultados",
    cvePublished: "Publicado",
    reportsHeroBadge: "Suscripción de Inteligencia de Amenazas",
    reportsHeroTitle: "+130 informes por trimestre",
    reportsHeroSubtitle: "Noticias diarias, monitorización ransomware, fugas de credenciales, hacktivismo, tendencias sectoriales. Inspirado en Telefónica Tech, ampliado con más tipos.",
    reportsTabPublic: "Landing pública", reportsTabAdmin: "Panel admin", reportsTabArchive: "Archivo",
    riskHeroBadge: "Hack Risk Score · Gestión de Superficie de Ataque Externa",
    riskHeroTitle: "Mira tu empresa como la mira un atacante",
    riskHeroSubtitle: "Escaneo en 8 dimensiones. Puntuación 0-100. Mapeo de cumplimiento a NIST CSF 2.0, ISO 27001:2022, NIS2, GDPR, DORA. Informe compartible con token de 7 días.",
    riskCategorySurface: "Superficie de ataque", riskCategoryCreds: "Credenciales filtradas",
    riskScanFormTitle: "Nuevo análisis de superficie de ataque",
    riskScanFormSubtitle: "Introduce el dominio a analizar. El scan tardará unos segundos.",
    riskScanFormDomain: "Dominio", riskScanFormCompany: "Nombre de la empresa", riskScanFormSector: "Sector",
    riskScanFormStart: "Iniciar scan",
    riskScanIncludes: "El scan incluye: enumeración de subdominios, análisis de puertos, SSL/TLS, SPF/DKIM/DMARC, búsqueda de credenciales en la dark web, cruce de CVEs, postura cloud y menciones en foros.",
    invalidDomain: "Dominio no válido (ej: empresa.com)",
    reportsFormSelectSector: "Selecciona...",
    riskCategoryVulns: "Vulnerabilidades", riskCategorySSL: "Higiene SSL/TLS",
    riskCategoryEmail: "Seguridad de email", riskCategoryDNS: "Postura DNS",
    riskCategoryDark: "Exposición en dark web", riskCategoryCloud: "Postura cloud",
    riskCatSurfaceDesc: "Activos expuestos descubiertos",
    riskCatCredsDesc: "Credenciales filtradas en la dark web",
    riskCatVulnsDesc: "CVEs explotables en servicios expuestos",
    riskCatSSLDesc: "Certificados y configuración TLS",
    riskCatEmailDesc: "SPF, DKIM, DMARC",
    riskCatDNSDesc: "Configuración DNS y registros",
    riskCatDarkDesc: "Menciones en foros y mercados",
    riskCatCloudDesc: "Misconfigs en AWS/Azure/GCP",
    vlmHeroBadge: "Gestión del Ciclo de Vulnerabilidades",
    vlmHeroTitle: "Más allá de Tenable, InsightVM y ManageEngine",
    vlmHeroSubtitle: "Descubrir → Priorizar → Evaluar → Reportar → Remediar → Verificar. Puntuación Real Risk, seguimiento de SLA, badges CISA KEV, remediación IA con Claude Opus 4.7.",
    vlmStageDiscover: "Descubrir", vlmStagePrioritize: "Priorizar", vlmStageEvaluate: "Evaluar",
    vlmStageReport: "Reportar", vlmStageRemediate: "Remediar", vlmStageVerify: "Verificar",
    vlmDiscoverDesc: "Inventario total de hardware, software, aplicaciones y activos en red.",
    vlmPrioritizeDesc: "Clasificación por valor de activo y criticidad de negocio.",
    vlmEvaluateDesc: "Escaneo técnico para hallar fallos y configuraciones.",
    vlmReportDesc: "Documentación detallada y comunicación estratégica.",
    vlmRemediateDesc: "Aplicación de parches y cambios de configuración.",
    vlmVerifyDesc: "Re-escaneo para confirmar la resolución del riesgo.",
    studyHeroBadge: "Benchmark Competitivo de Plataformas",
    studyHeroTitle: "30 plataformas puntuadas en 5 dimensiones",
    studyHeroSubtitle: "Cobertura · Calidad de inteligencia · Automatización · Integraciones · Valor. Actualizado trimestralmente.",
    rcFreqDaily: "Diario", rcFreqWeekly: "Semanal", rcFreqMonthly: "Mensual", rcFreqBimonthly: "Bimestral",
    rcDailyTitle: "Boletín de noticias diarias", rcDailyDesc: "Boletín informativo diario con datos de fuentes públicas, privadas y propias: amenazas, nuevos fallos de seguridad, malware y actores, así como parches, IoCs y PoCs.",
    rcWeeklyTitle: "Boletín de noticias semanal", rcWeeklyDesc: "Highlights de la semana partiendo de los boletines diarios, con las noticias más importantes del sector de ciberseguridad.",
    rcThreatTitle: "Informe de amenaza", rcThreatDesc: "Evaluación minuciosa semanal de amenazas actuales (infostealers, ransomware, vulnerabilidades) y los adversarios detrás de ellas.",
    rcFraudTitle: "Fraud Hunters", rcFraudDesc: "Análisis mensual detallado de infraestructuras sospechosas de fuentes públicas y privadas: dominios, URLs, IPs, DDNS.",
    rcRansomTitle: "Monitorización de ransomware", rcRansomDesc: "Incidentes de ransomware analizando cada familia (LockBit, Akira, 8base, BlackCat), países y sectores más afectados.",
    rcLeaksTitle: "Fugas de información", rcLeaksDesc: "Recopilación de incidentes públicos de fugas de información clasificados por criticidad, sector, técnica, localización y tecnologías afectadas.",
    rcSectorTitle: "Tendencias sectoriales", rcSectorDesc: "Noticias relevantes que afectan a los principales sectores: Administraciones Públicas, banca, retail, energía, sanidad, etc.",
    rcVulnTitle: "Inteligencia de vulnerabilidades", rcVulnDesc: "Vulnerabilidades detectadas y reportadas en el CVE, con panorama de adversarios y tendencias de explotación.",
    rcHackTitle: "Monitorización de hacktivismo", rcHackDesc: "TTPs, actores, tipos de ataques, incidentes observados por regiones y recomendaciones para mitigar.",
    rcDdosTitle: "Monitorización de DDoS", rcDdosDesc: "Ataques de denegación de servicio en conflictos armados: grado de afectación por país y sector, campañas y actores.",
    rcActivismTitle: "Monitorización de activismo digital", rcActivismDesc: "Acontecimientos activistas en España, Chile, Colombia y Perú: campañas, actores, motivación y protección.",
    reportsLandingTitle: "Informes de inteligencia de amenazas",
    reportsLandingSubtitle: "Suscríbete y recibe inteligencia experta directamente en tu bandeja. Sin infraestructura.",
    reportsCatalogTitle: "Tipos de informes disponibles",
    reportsSubscribeTitle: "Inicia tu prueba gratuita",
    reportsSubscribeDesc: "90 días de acceso completo. Sin tarjeta de crédito.",
    reportsFormName: "Nombre completo", reportsFormEmail: "Email corporativo", reportsFormCompany: "Empresa",
    reportsFormSector: "Sector", reportsFormSelectSector: "Selecciona tu sector",
    reportsFormSubmit: "Suscribirme · 90 días gratis", reportsFormSuccess: "¡Suscripción completada!",
    reportsFormSuccessDesc: "Revisa tu bandeja para el email de bienvenida y tu primer informe.",
    selectAtLeastOne: "Selecciona al menos un tipo de informe",
    subscriptionsActive: "suscripciones activas",
    registerAnother: "Registrar otro suscriptor",
    trialBadge: "PRUEBA GRATUITA · 90 DÍAS",
    statsReports: "informes entregados", statsDays: "días de prueba", statsTypes: "tipos de informes", statsUpdate: "actualización",
    selectReports: "Selecciona los que quieres recibir. Todos incluidos en la prueba gratuita.",
    phoneOptional: "Teléfono (opcional)",
    youSelected: "Has seleccionado {n} / {total} tipos de informes",
    privacyAccept: "He leído y acepto la política de privacidad y el tratamiento de mis datos para la recepción de los informes de ciberinteligencia.",
    sectorPublic: "Administración Pública", sectorBanking: "Banca y Finanzas",
    sectorHealth: "Salud", sectorEnergy: "Energía y Utilities",
    sectorRetail: "Retail y eCommerce", sectorTech: "Tecnología",
    sectorIndustry: "Industria/Manufactura", sectorEducation: "Educación",
    sectorTelco: "Telco", sectorTransport: "Transporte", sectorOther: "Otro",
    tour: {
      0: { title: "Panel de Amenazas", headline: "Tu centro de mando en tiempo real",
           body: "Feed de amenazas en directo mapeado a MITRE ATT&CK. Cada evento puntuado por CVSS, clasificado por severidad, enriquecido con geografía de origen y sector objetivo. Haz clic en cualquier tarjeta de severidad para filtrar al instante.",
           h: ["Las tarjetas KPI muestran incidentes abiertos por severidad", "Los gráficos desglosan por tipo de amenaza y táctica ATT&CK", "El feed se actualiza cada 3,5s · pausa desde la topbar"] },
      1: { title: "Registro de Amenazas", headline: "Tu memoria operacional",
           body: "Cada detección se persiste en una base de datos con búsqueda. Consulta por IP, CVE, MITRE ID, familia o país del atacante. Esto es lo primero que abren tus analistas cada mañana.",
           h: ["Búsqueda full-text sobre todos los eventos históricos", "Haz clic en cualquier fila para el modal completo con hash IOC + enlace ATT&CK", "Los datos sobreviven a recargas del navegador"] },
      2: { title: "Brechas y CVE", headline: "Investiga cada vulnerabilidad, conoce cada brecha",
           body: "Consultas en vivo contra la API oficial del NVD. Busca entre 200.000+ CVEs, navega por lo publicado en los últimos 30 días, o profundiza en el catálogo curado de grandes brechas desde 2023.",
           h: ["Tres modos: Recientes, Buscar, Brechas", "Cada hallazgo enlaza a NVD y MITRE", "Úsalo cuando un CVE sea noticia"] },
      3: { title: "Informes CTI", headline: "+130 informes de inteligencia por trimestre",
           body: "Los suscriptores reciben 11 tipos de informes: noticias diarias, monitorización de ransomware, fugas de credenciales, hacktivismo, tendencias sectoriales y más. Gestiona suscriptores, genera informes, navega el archivo.",
           h: ["Landing pública + panel admin + archivo de informes", "Los informes se auto-generan desde tus datos de amenazas en vivo", "Inspirado en Telefónica Tech · más tipos de informes"] },
      4: { title: "Hack Risk Score", headline: "Mira tu empresa como la mira un atacante",
           body: "Gestión de superficie de ataque externa. Introduce un dominio y recibe una puntuación 0-100 en 8 dimensiones: superficie, credenciales filtradas, vulnerabilidades, SSL/TLS, email, DNS, dark web, postura cloud. Más mapeo de cumplimiento a NIST/ISO/NIS2/GDPR/DORA.",
           h: ["8 fases de escaneo en tiempo real", "Guía de remediación por cada hallazgo", "Informe compartible con token de 7 días"] },
      5: { title: "Ciclo de Vulnerabilidades", headline: "Más allá de Tenable, InsightVM y ManageEngine",
           body: "El ciclo completo Descubrir → Priorizar → Evaluar → Reportar → Remediar → Verificar. Puntuación Real Risk (CVSS × criticidad × entorno), seguimiento de SLA, badges CISA KEV, workflow kanban de remediación y 6 entregables.",
           h: ["Haz clic en cualquier vulnerabilidad para plan de remediación Claude Opus 4.7", "La IA genera: parche, workaround, hardening, verificar, rollback", "Esto es lo que nos diferencia en el mercado VM"] },
      6: { title: "Benchmark de Plataformas", headline: "Conoce el mercado, conoce tu posición",
           body: "30 plataformas competidoras de inteligencia de amenazas puntuadas en 5 dimensiones. Compara CyberWatch con Lumu, SOCRadar, Darktrace, Recorded Future, Mandiant, CrowdStrike y más. Incluye podio y filtrado por categoría.",
           h: ["Ordena por cobertura, inteligencia, automatización, integraciones o valor", "Filtra por NDR, CTI, XDR, SIEM, DRP", "Excelente para respuestas a RFP y posicionamiento competitivo"] },
    },
  },
};;

const I18nContext = createContext({ locale: "en", t: (k) => k, setLocale: () => {} });
function useT() {
  const ctx = useContext(I18nContext);
  const t = (key, vars = {}) => {
    const dict = DICT[ctx.locale] || DICT.en;
    // Soporte rutas "tour.0.title"
    let value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), dict);
    if (value === undefined) value = key.split(".").reduce((o, k) => (o && o[k] !== undefined ? o[k] : undefined), DICT.en) ?? key;
    if (typeof value === "string") {
      Object.entries(vars).forEach(([k, v]) => { value = value.replaceAll(`{${k}}`, v); });
    }
    return value;
  };
  return { t, locale: ctx.locale, setLocale: ctx.setLocale };
}

// Selector de idioma reutilizable (dropdown compacto)
function LangSwitcher({ variant = "dark" }) {
  const { locale, setLocale } = useT();
  const [open, setOpen] = useState(false);
  const current = LOCALES[locale] || LOCALES.en;
  const dark = variant === "dark";
  return (
    <div className="relative">
      <button onClick={() => setOpen(!open)}
        className={`flex items-center gap-1.5 text-xs font-semibold rounded-lg px-2.5 py-1.5 transition ${
          dark ? "bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] text-slate-900"
               : "bg-slate-100 hover:bg-slate-200 border border-cyan-500/20 text-slate-900"
        }`}>
        <span className="text-sm">{current.flag}</span>
        <span className="uppercase tracking-wider">{current.code}</span>
        <ChevronDown className={`w-3 h-3 transition ${open ? "rotate-180" : ""}`} />
      </button>
      {open && (
        <>
          <div className="fixed inset-0 z-40" onClick={() => setOpen(false)} />
          <div className="absolute right-0 mt-1 z-50 min-w-[140px] bg-[var(--surface-1)] border border-[var(--border)] rounded-lg shadow-2xl overflow-hidden">
            {Object.values(LOCALES).map(l => (
              <button key={l.code} onClick={() => { setLocale(l.code); setOpen(false); }}
                className={`w-full flex items-center gap-2 px-3 py-2 text-sm hover:bg-cyan-500/10 transition text-left ${
                  l.code === locale ? "bg-cyan-500/15 text-cyan-700" : "text-slate-900"
                }`}>
                <span className="text-base">{l.flag}</span>
                <span className="flex-1 font-medium">{l.name}</span>
                {l.code === locale && <CheckCircle className="w-3.5 h-3.5 text-cyan-700" strokeWidth={2.5} />}
              </button>
            ))}
          </div>
        </>
      )}
    </div>
  );
}

// ============================================================
// 1. ESTUDIO COMPARATIVO - 30 plataformas
// ============================================================
const PLATFORMS = [
  // ---- NDR / Detection (Lumu-like) ----
  { name: "Darktrace", cat: "NDR/XDR", focus: "IA autónoma, self-learning, Antigena response", price: "€€€€", coverage: 9, intel: 8, automation: 10, integrations: 9, value: 9, notes: "Líder AI, caro pero potente" },
  { name: "Vectra AI", cat: "NDR/XDR", focus: "Attack Signal Intelligence, identity threats", price: "€€€€", coverage: 9, intel: 8, automation: 9, integrations: 9, value: 8, notes: "Excelente para Azure AD/M365" },
  { name: "ExtraHop Reveal(x)", cat: "NDR", focus: "Wire data analytics, descifrado línea", price: "€€€€", coverage: 9, intel: 7, automation: 8, integrations: 9, value: 8, notes: "Fuerte en east-west traffic" },
  { name: "Lumu Technologies", cat: "NDR", focus: "Continuous compromise assessment, metadata DNS/flow", price: "€€", coverage: 8, intel: 8, automation: 9, integrations: 8, value: 9, notes: "Pay-as-you-go, MITRE mapping, bajo false-positive" },
  { name: "Corelight", cat: "NDR", focus: "Zeek/Suricata open-core, threat hunting", price: "€€€", coverage: 9, intel: 7, automation: 7, integrations: 9, value: 8, notes: "Favorito de SOCs maduros" },
  { name: "Stamus Networks", cat: "NDR", focus: "Suricata-based, gov/finance", price: "€€€", coverage: 8, intel: 7, automation: 7, integrations: 7, value: 7, notes: "Open-source friendly" },
  { name: "Gatewatcher", cat: "NDR", focus: "AIonIQ, soberanía europea", price: "€€€", coverage: 8, intel: 7, automation: 8, integrations: 7, value: 7, notes: "Preferida en EU/gov" },
  { name: "Trellix NDR", cat: "NDR", focus: "Ex-FireEye/McAfee, sandbox integrado", price: "€€€€", coverage: 8, intel: 8, automation: 8, integrations: 8, value: 7, notes: "Legacy fuerte, setup costoso" },
  { name: "NetWitness NDR", cat: "NDR", focus: "Full packet capture, forensics", price: "€€€€", coverage: 9, intel: 7, automation: 7, integrations: 8, value: 7, notes: "Ideal forensics profundo" },
  { name: "Stellar Cyber Open XDR", cat: "XDR", focus: "Correlación single-license", price: "€€€", coverage: 8, intel: 7, automation: 8, integrations: 9, value: 8, notes: "Buen ratio coste/cobertura" },
  // ---- XDR/SIEM ----
  { name: "CrowdStrike Falcon", cat: "XDR/EDR", focus: "EDR líder + Falcon Intelligence", price: "€€€€", coverage: 10, intel: 10, automation: 10, integrations: 10, value: 9, notes: "Referente de mercado" },
  { name: "Microsoft Defender XDR", cat: "XDR", focus: "Ecosistema M365/Azure", price: "€€€", coverage: 9, intel: 9, automation: 9, integrations: 10, value: 9, notes: "Incluido en licencias E5" },
  { name: "Splunk Enterprise Security", cat: "SIEM", focus: "Analytics-driven SIEM (Cisco)", price: "€€€€", coverage: 9, intel: 8, automation: 8, integrations: 10, value: 7, notes: "Potente pero caro por ingesta" },
  { name: "IBM QRadar Suite", cat: "SIEM/XDR", focus: "SIEM + SOAR + UEBA", price: "€€€€", coverage: 9, intel: 8, automation: 8, integrations: 9, value: 7, notes: "Enterprise clásico" },
  { name: "Wazuh", cat: "SIEM OSS", focus: "Open source, HIDS + SIEM", price: "€ (Free)", coverage: 7, intel: 6, automation: 6, integrations: 8, value: 10, notes: "Mejor value si hay equipo interno" },
  // ---- CTI / DRP (SOCRadar-like) ----
  { name: "Recorded Future", cat: "CTI", focus: "Security Intelligence Graph, IOC scoring", price: "€€€€", coverage: 10, intel: 10, automation: 9, integrations: 10, value: 9, notes: "Referencia en CTI" },
  { name: "Mandiant Advantage (Google)", cat: "CTI/DRP", focus: "Frontline intel, Google DRP", price: "€€€€", coverage: 10, intel: 10, automation: 8, integrations: 9, value: 9, notes: "Insights post-breach únicos" },
  { name: "CrowdStrike Falcon Intelligence", cat: "CTI", focus: "Actor tracking, adversary profiles", price: "€€€€", coverage: 9, intel: 10, automation: 9, integrations: 10, value: 9, notes: "Integrado con EDR" },
  { name: "SOCRadar XTI", cat: "CTI/DRP", focus: "Dark web, credential leak, ASM, takedowns", price: "€€", coverage: 9, intel: 9, automation: 8, integrations: 9, value: 10, notes: "Mejor ratio precio/cobertura CTI" },
  { name: "Cyble Vision", cat: "CTI/DRP", focus: "Gen-3 Agentic AI, predicción 6 meses", price: "€€€", coverage: 9, intel: 9, automation: 9, integrations: 8, value: 9, notes: "Aggressive AI roadmap" },
  { name: "Cyberint (Check Point)", cat: "CTI/DRP", focus: "Argos, external threat landscape", price: "€€€", coverage: 8, intel: 9, automation: 8, integrations: 8, value: 8, notes: "Fuerte en brand + supply chain" },
  { name: "CTM360", cat: "DRP", focus: "Surface/Deep/Dark + takedowns ilimitados", price: "€€€", coverage: 9, intel: 8, automation: 9, integrations: 7, value: 9, notes: "Turnkey, cero setup" },
  { name: "ZeroFOX", cat: "DRP", focus: "Social media, brand, executive protection", price: "€€€", coverage: 8, intel: 8, automation: 8, integrations: 8, value: 8, notes: "Líder en digital risk social" },
  { name: "Flashpoint", cat: "CTI", focus: "Deep/dark web humano, BEC, fraud", price: "€€€€", coverage: 8, intel: 10, automation: 7, integrations: 8, value: 8, notes: "Inteligencia humana de élite" },
  { name: "CYFIRMA DeCYFIR", cat: "CTI/DRP", focus: "Predictive intel, external attack surface", price: "€€", coverage: 8, intel: 8, automation: 8, integrations: 7, value: 9, notes: "Buen precio en APAC/EU" },
  { name: "CloudSEK XVigil", cat: "CTI/DRP", focus: "Brand, data leak, app stores", price: "€€", coverage: 8, intel: 8, automation: 8, integrations: 7, value: 9, notes: "Fuerte fraude financiero" },
  { name: "ThreatMon", cat: "CTI/DRP", focus: "ASM + fraud + dark web, AI", price: "€€", coverage: 7, intel: 7, automation: 7, integrations: 7, value: 8, notes: "Emergente, buena relación calidad/precio" },
  { name: "CybelAngel", cat: "DRP/EASM", focus: "Data leak detection, open DBs, IoT", price: "€€€€", coverage: 9, intel: 8, automation: 8, integrations: 8, value: 8, notes: "Best-in-class leak discovery" },
  { name: "Searchlight DarkIQ", cat: "CTI", focus: "Dark web puro, law-enforcement grade", price: "€€€", coverage: 7, intel: 9, automation: 7, integrations: 7, value: 8, notes: "Especialista deep/dark" },
  { name: "Flare", cat: "CTI/DRP", focus: "Continuous threat exposure mgmt", price: "€€", coverage: 7, intel: 8, automation: 8, integrations: 7, value: 9, notes: "SMB-friendly, roadmap rápido" },
];

const rankedPlatforms = [...PLATFORMS]
  .map(p => ({ ...p, score: p.coverage + p.intel + p.automation + p.integrations + p.value }))
  .sort((a, b) => b.score - a.score);

// ============================================================
// 2. GENERADOR DE AMENAZAS SIMULADAS EN TIEMPO REAL
// ============================================================
const MITRE_TECHNIQUES = [
  { id: "T1566", name: "Phishing", tactic: "Initial Access" },
  { id: "T1486", name: "Data Encrypted for Impact", tactic: "Impact" },
  { id: "T1059", name: "Command and Scripting Interpreter", tactic: "Execution" },
  { id: "T1078", name: "Valid Accounts", tactic: "Persistence" },
  { id: "T1110", name: "Brute Force", tactic: "Credential Access" },
  { id: "T1071", name: "Application Layer Protocol (C2)", tactic: "Command and Control" },
  { id: "T1055", name: "Process Injection", tactic: "Defense Evasion" },
  { id: "T1021", name: "Remote Services", tactic: "Lateral Movement" },
  { id: "T1003", name: "OS Credential Dumping", tactic: "Credential Access" },
  { id: "T1567", name: "Exfiltration Over Web Service", tactic: "Exfiltration" },
  { id: "T1190", name: "Exploit Public-Facing Application", tactic: "Initial Access" },
  { id: "T1027", name: "Obfuscated Files or Information", tactic: "Defense Evasion" },
];

const THREAT_TYPES = [
  { type: "Ransomware", family: ["LockBit 4.0", "Akira", "BlackCat", "Play", "Cl0p"], icon: "skull" },
  { type: "Phishing", family: ["Tycoon 2FA", "EvilProxy", "Storm-1575", "Mamba 2FA"], icon: "bug" },
  { type: "C2 Beacon", family: ["Cobalt Strike", "Sliver", "Havoc", "Brute Ratel"], icon: "wifi" },
  { type: "Credential Stuffing", family: ["OpenBullet", "SilverBullet", "BlackBullet"], icon: "lock" },
  { type: "Crypto Miner", family: ["XMRig", "CoinMiner", "LemonDuck"], icon: "server" },
  { type: "Infostealer", family: ["RedLine", "Lumma", "Vidar", "StealC", "Rhadamanthys"], icon: "eye" },
  { type: "Supply Chain", family: ["npm-typosquat", "PyPI-malware", "GitHub-Action"], icon: "globe" },
  { type: "Zero-Day Exploit", family: ["CVE-2025-XXXX", "N-Day chain"], icon: "zap" },
];

const COUNTRIES = ["RU", "CN", "KP", "IR", "BR", "NG", "US", "UA", "IN", "VN", "TR"];
const SECTORS = ["Finance", "Healthcare", "Energy", "Gov", "Retail", "Tech", "Education", "Manufacturing"];

function randomIP() {
  return `${Math.floor(Math.random() * 223) + 1}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}.${Math.floor(Math.random() * 255)}`;
}
function randomHash() {
  const chars = "abcdef0123456789";
  return Array.from({ length: 16 }, () => chars[Math.floor(Math.random() * 16)]).join("");
}

function generateThreat() {
  const t = THREAT_TYPES[Math.floor(Math.random() * THREAT_TYPES.length)];
  const family = t.family[Math.floor(Math.random() * t.family.length)];
  const mitre = MITRE_TECHNIQUES[Math.floor(Math.random() * MITRE_TECHNIQUES.length)];
  // Severity scoring: weighted CVSS-like calc
  const exploitability = Math.random() * 10;
  const impact = Math.random() * 10;
  const cvss = Math.min(10, (exploitability * 0.4 + impact * 0.6 + (t.type === "Ransomware" || t.type === "Zero-Day Exploit" ? 2 : 0)));
  let severity = "Low";
  if (cvss >= 9) severity = "Critical";
  else if (cvss >= 7) severity = "High";
  else if (cvss >= 4) severity = "Medium";
  return {
    id: `THR-${Date.now()}-${Math.floor(Math.random() * 1000)}`,
    timestamp: new Date().toISOString(),
    type: t.type,
    family,
    severity,
    cvss: Number(cvss.toFixed(1)),
    mitre_id: mitre.id,
    mitre_name: mitre.name,
    mitre_tactic: mitre.tactic,
    src_ip: randomIP(),
    src_country: COUNTRIES[Math.floor(Math.random() * COUNTRIES.length)],
    dst_sector: SECTORS[Math.floor(Math.random() * SECTORS.length)],
    ioc_hash: randomHash(),
    confidence: Math.floor(60 + Math.random() * 40),
    status: "new",
  };
}

const SEVERITY_COLORS = {
  Critical: "#dc2626",
  High: "#ea580c",
  Medium: "#ca8a04",
  Low: "#16a34a",
};
const SEVERITY_RANK = { Critical: 4, High: 3, Medium: 2, Low: 1 };

// ============================================================
// DASHBOARD (ex-componente principal, ahora requiere auth)
// ============================================================
// ============================================================
// DASHBOARD NAV + GUIDED TOUR CONFIG
// ============================================================
const DASHBOARD_NAV = [
  { id: "dashboard", labelKey: "navThreatDashboard", icon: Activity },
  { id: "registry", labelKey: "navThreatRegistry", icon: Database },
  { id: "cve", labelKey: "navBreachCVE", icon: Search },
  { id: "reports", labelKey: "navCTIReports", icon: FileText },
  { id: "risk", labelKey: "navHackRisk", icon: Target },
  { id: "vlm", labelKey: "navVLM", icon: Cpu },
  { id: "study", labelKey: "navBenchmark", icon: BarChart3 },
];

const TOUR_STEPS = [
  {
    tab: "dashboard", icon: Activity, title: "Threat Dashboard",
    headline: "Your real-time command center",
    body: "Live-streaming threat feed mapped to MITRE ATT&CK. Every event is scored by CVSS, classified by severity, and enriched with source geography and target sector. Click any severity tile to filter instantly.",
    highlight: ["KPI cards show open incidents by severity", "Charts break down by threat type and ATT&CK tactic", "Feed updates every 3.5s · pause anytime from the topbar"],
  },
  {
    tab: "registry", icon: Database, title: "Threat Registry",
    headline: "Your operational memory",
    body: "Every detection is persisted in a searchable database. Query by IP, CVE, MITRE ID, family or attacker country. This is what your analysts will open first thing every morning.",
    highlight: ["Full-text search across all historical events", "Click any row for the full event modal with IOC hash + ATT&CK link", "Data survives browser reloads"],
  },
  {
    tab: "cve", icon: Search, title: "Breach & CVE Intel",
    headline: "Research every vulnerability, know every breach",
    body: "Live queries against the official NVD API. Search 200,000+ CVEs, browse what was just published in the last 30 days, or dive into the curated catalog of major breaches since 2023.",
    highlight: ["Three modes: Recent, Search, Breaches", "Every finding links to NVD and MITRE", "Use this when a CVE hits the news"],
  },
  {
    tab: "reports", icon: FileText, title: "CTI Reports",
    headline: "130+ intelligence reports per quarter",
    body: "Subscribers receive 11 types of reports covering daily threat news, ransomware monitoring, credential leaks, hacktivism, sectorial trends and more. Manage subscribers, generate reports, browse the archive.",
    highlight: ["Public landing + admin panel + report archive", "Reports are auto-generated from your live threat data", "Inspired by Telefónica Tech · more report types"],
  },
  {
    tab: "risk", icon: Target, title: "Hack Risk Score",
    headline: "See your company as an attacker sees it",
    body: "External Attack Surface Management. Enter a domain and get a 0-100 score across 8 dimensions: attack surface, credential leaks, vulnerabilities, SSL/TLS, email, DNS, dark web, cloud posture. Plus compliance mapping to NIST/ISO/NIS2/GDPR/DORA.",
    highlight: ["8 scan phases run in real time", "Remediation guidance per finding", "Shareable report with 7-day token"],
  },
  {
    tab: "vlm", icon: Cpu, title: "Vulnerability Lifecycle",
    headline: "Beyond Tenable, InsightVM & ManageEngine",
    body: "The full Discover → Prioritize → Evaluate → Report → Remediate → Verify cycle. Real Risk score (CVSS × criticality × environment), SLA tracking, CISA KEV badges, kanban-style remediation workflow and 6 deliverable types.",
    highlight: ["Click any vulnerability for Claude Opus 4.7 remediation plan", "AI generates: patch, workaround, hardening, verify, rollback", "This is what sets us apart in the VM market"],
  },
  {
    tab: "study", icon: BarChart3, title: "Platform Benchmark",
    headline: "Know the market, know your position",
    body: "30 competitive threat intelligence platforms ranked by a 5-dimension scoring system. Compare CyberWatch against Lumu, SOCRadar, Darktrace, Recorded Future, Mandiant, CrowdStrike and more. Includes podium, filtered by category.",
    highlight: ["Sortable by coverage, intel, automation, integrations or value", "Filter by NDR, CTI, XDR, SIEM, DRP", "Great for RFP responses and competitive positioning"],
  },
];

function CyberWatchDashboard({ user = { email: "demo@cyberwatch.io", company: "Demo Corp" }, onLogout = () => {} }) {
  const { t } = useT();
  const [tab, setTab] = useState("dashboard");
  const [threats, setThreats] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isLive, setIsLive] = useState(true);
  const [filter, setFilter] = useState("all");
  const [selected, setSelected] = useState(null);
  const [tourStep, setTourStep] = useState(0);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);
  const intervalRef = useRef(null);

  // Cargar amenazas almacenadas al montar
  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("threats:all");
        if (r && r.value) setThreats(JSON.parse(r.value));
      } catch (e) { /* primera vez */ }
      setLoading(false);
    })();
  }, []);

  const startTour = () => { setTab("tour"); setTourStep(0); setMobileNavOpen(false); };
  const exitTour = () => { setTab("dashboard"); setTourStep(0); };

  // Generador en tiempo real
  useEffect(() => {
    if (!isLive || loading) return;
    intervalRef.current = setInterval(() => {
      setThreats(prev => {
        const next = [generateThreat(), ...prev].slice(0, 500);
        window.storage.set("threats:all", JSON.stringify(next)).catch(() => {});
        return next;
      });
    }, 3500);
    return () => clearInterval(intervalRef.current);
  }, [isLive, loading]);

  const clearAll = async () => {
    setThreats([]);
    try { await window.storage.delete("threats:all"); } catch (e) {}
  };

  const filteredThreats = useMemo(() => {
    let f = threats;
    if (filter !== "all") f = f.filter(t => t.severity === filter);
    return [...f].sort((a, b) => {
      const s = SEVERITY_RANK[b.severity] - SEVERITY_RANK[a.severity];
      if (s !== 0) return s;
      return b.cvss - a.cvss;
    });
  }, [threats, filter]);

  const stats = useMemo(() => {
    const counts = { Critical: 0, High: 0, Medium: 0, Low: 0 };
    threats.forEach(t => { counts[t.severity]++; });
    return counts;
  }, [threats]);

  const typeData = useMemo(() => {
    const m = {};
    threats.forEach(t => { m[t.type] = (m[t.type] || 0) + 1; });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [threats]);

  const tacticData = useMemo(() => {
    const m = {};
    threats.forEach(t => { m[t.mitre_tactic] = (m[t.mitre_tactic] || 0) + 1; });
    return Object.entries(m).map(([name, value]) => ({ name, value }));
  }, [threats]);

  const NAV_ITEMS = DASHBOARD_NAV;

  const activeTab = NAV_ITEMS.find(n => n.id === tab) || NAV_ITEMS[0];

  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-slate-900 flex" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .mono { font-family: 'JetBrains Mono', monospace; }
        body, p, span, div, td, th, li { font-weight: 450; }
        h1, h2, h3, h4 { color: var(--surface-0); letter-spacing: -0.01em; }
        @keyframes glow { 0%,100% { box-shadow: 0 0 0 rgba(34,211,238,0); } 50% { box-shadow: 0 0 20px rgba(34,211,238,0.3); } }
      `}</style>

      {/* MOBILE BACKDROP */}
      {mobileNavOpen && (
        <div className="fixed inset-0 z-40 bg-slate-900/40 backdrop-blur-sm md:hidden" onClick={() => setMobileNavOpen(false)} />
      )}

      {/* SIDEBAR (drawer en móvil, fija en desktop) */}
      <aside className={`w-72 md:w-60 bg-[var(--surface-1)] border-r border-[var(--border)] flex flex-col fixed md:sticky top-0 h-screen z-50 transition-transform duration-300 ${
        mobileNavOpen ? "translate-x-0" : "-translate-x-full md:translate-x-0"
      }`}>
        <div className="px-5 py-5 border-b border-[var(--border)] flex items-center gap-2.5">
          <div className="w-9 h-9 rounded-lg bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 flex items-center justify-center shadow-lg shadow-cyan-500/20">
            <Shield className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
          </div>
          <div className="leading-tight flex-1">
            <div className="font-semibold tracking-tight text-sm">CyberWatch</div>
            <div className="mono text-[11px] text-cyan-700 uppercase tracking-[0.18em]">XTI Platform</div>
          </div>
          <button onClick={() => setMobileNavOpen(false)} className="md:hidden p-1.5 rounded-lg hover:bg-slate-100 text-slate-700" title={t("close")}>
            <X className="w-5 h-5" />
          </button>
        </div>

        <nav className="flex-1 px-3 py-4 space-y-0.5 overflow-y-auto">
          <div className="mono text-[11px] uppercase tracking-widest text-slate-800 font-semibold px-3 py-2">{t("sectionIntelligence")}</div>
          {NAV_ITEMS.slice(0, 4).map(n => {
            const I = n.icon;
            const active = tab === n.id;
            return (
              <button key={n.id} onClick={() => { setTab(n.id); setMobileNavOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition relative ${
                  active ? "bg-cyan-500/10 text-cyan-700" : "text-slate-800 hover:text-slate-800 hover:bg-slate-100"
                }`}>
                {active && <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-cyan-400 rounded-r-full" />}
                <I className="w-4 h-4 flex-shrink-0" strokeWidth={active ? 2.5 : 2} />
                <span className="font-medium">{t(n.labelKey)}</span>
              </button>
            );
          })}
          <div className="mono text-[11px] uppercase tracking-widest text-slate-800 font-semibold px-3 py-2 pt-4">{t("sectionRiskCompliance")}</div>
          {NAV_ITEMS.slice(4).map(n => {
            const I = n.icon;
            const active = tab === n.id;
            return (
              <button key={n.id} onClick={() => { setTab(n.id); setMobileNavOpen(false); }}
                className={`w-full flex items-center gap-2.5 px-3 py-2 rounded-lg text-xs transition relative ${
                  active ? "bg-cyan-500/10 text-cyan-700" : "text-slate-800 hover:text-slate-800 hover:bg-slate-100"
                }`}>
                {active && <div className="absolute left-0 top-1/4 bottom-1/4 w-0.5 bg-cyan-400 rounded-r-full" />}
                <I className="w-4 h-4 flex-shrink-0" strokeWidth={active ? 2.5 : 2} />
                <span className="font-medium">{t(n.labelKey)}</span>
              </button>
            );
          })}

          {/* Agentic AI banner */}
          <div className="mt-6 mx-1 p-3 rounded-lg bg-gradient-to-br from-violet-500/10 via-cyan-500/5 to-transparent border border-violet-500/20">
            <div className="flex items-center gap-1.5 mb-1">
              <Zap className="w-3 h-3 text-violet-400" />
              <span className="mono text-[11px] uppercase tracking-widest text-violet-700">Agentic AI</span>
            </div>
            <p className="text-[11px] text-slate-800 leading-snug">
              {t("agenticSidebar")}
            </p>
          </div>

          {/* Tour de la plataforma */}
          <button onClick={startTour}
            className={`mt-3 mx-1 w-[calc(100%-0.5rem)] p-2.5 rounded-lg border text-left transition group ${
              tab === "tour"
                ? "bg-cyan-500/10 border-cyan-400/60"
                : "bg-slate-100 hover:bg-cyan-500/10 border-[var(--border)] hover:border-cyan-400/40"
            }`}>
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 rounded bg-cyan-500/20 flex items-center justify-center flex-shrink-0">
                <Target className="w-3 h-3 text-cyan-700 group-hover:scale-110 transition" strokeWidth={2.5} />
              </div>
              <div className="flex-1 min-w-0">
                <div className="text-[11px] font-semibold text-slate-900">{t("startTour")}</div>
                <div className="text-[10px] text-slate-700">{t("walkThrough")}</div>
              </div>
            </div>
          </button>
        </nav>

        <div className="p-3 border-t border-[var(--border)]">
          <div className="flex items-center gap-2 p-2 rounded-lg bg-slate-100">
            <div className="w-8 h-8 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center text-[11px] font-bold flex-shrink-0">
              {(user.email || "?").slice(0, 2).toUpperCase()}
            </div>
            <div className="flex-1 min-w-0">
              <div className="text-xs font-medium truncate">{user.full_name || user.email}</div>
              <div className="text-[11px] text-slate-700 truncate">{user.company || "Organization"}</div>
            </div>
            <button onClick={onLogout} title={t("signOut")}
              className="p-1.5 rounded hover:bg-red-500/20 text-slate-700 hover:text-red-400 transition">
              <X className="w-3.5 h-3.5" />
            </button>
          </div>
        </div>
      </aside>

      {/* MAIN AREA */}
      <div className="flex-1 flex flex-col min-w-0 md:ml-0">
        {/* TOPBAR */}
        <header className="h-14 border-b border-[var(--border)] bg-[var(--surface-1)]/80 backdrop-blur-xl sticky top-0 z-30 flex items-center px-4 md:px-6 gap-3 md:gap-4">
          <button className="md:hidden p-2 -ml-2 rounded-lg hover:bg-slate-100 text-slate-900" onClick={() => setMobileNavOpen(true)} title="Open menu">
            <Menu className="w-5 h-5" />
          </button>
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap">
              <activeTab.icon className="w-4 h-4 text-cyan-400" />
              <h1 className="text-sm font-semibold truncate">{t(activeTab.labelKey)}</h1>
              {user.trial_type === "explore" && (
                <span className="mono text-[10px] uppercase tracking-widest font-bold bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 px-2 py-0.5 rounded flex items-center gap-1">
                  <Zap className="w-2.5 h-2.5" strokeWidth={3} />
                  {t("exploreBadge")}
                </span>
              )}
            </div>
            <div className="mono text-[11px] text-slate-800 font-medium uppercase tracking-wider">
              {t("eventsTracked", { org: user.company || t("organization"), n: threats.length })}
            </div>
          </div>
          <div className="hidden lg:flex items-center gap-2 px-3 py-1.5 bg-[var(--surface-3)] border border-[var(--border)] rounded-lg w-72">
            <Search className="w-3.5 h-3.5 text-slate-700 flex-shrink-0" />
            <input placeholder={t("searchPlaceholder")}
              className="bg-transparent flex-1 text-xs placeholder-slate-400 focus:outline-none" />
            <span className="mono text-[11px] text-slate-700 font-medium px-1 bg-[var(--surface-3)] rounded">⌘K</span>
          </div>
          <div className={`hidden sm:flex items-center gap-1.5 text-[11px] mono uppercase tracking-widest px-2.5 py-1 rounded ${isLive ? "bg-green-500/10 text-green-700 border border-green-500/30" : "bg-[var(--surface-3)] text-slate-800 border border-[var(--border-strong)]"}`}>
            <span className={`w-1.5 h-1.5 rounded-full ${isLive ? "bg-green-400 animate-pulse" : "bg-slate-500"}`} />
            {isLive ? t("liveFeed") : t("paused")}
          </div>
          <LangSwitcher />
          <button onClick={() => setIsLive(!isLive)} className="text-xs px-3 py-1.5 rounded bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] text-slate-700">
            {isLive ? t("pause") : t("resume")}
          </button>
        </header>

        {/* TABS HORIZONTAL — siempre visible en móvil, oculta en desktop (ya está la sidebar) */}
        <div className="md:hidden bg-[var(--surface-1)] border-b border-[var(--border)] sticky top-14 z-20">
          <div className="flex overflow-x-auto scrollbar-thin px-2 py-2 gap-1.5" style={{ scrollbarWidth: "none" }}>
            <style>{`.scrollbar-thin::-webkit-scrollbar { display: none; }`}</style>
            {NAV_ITEMS.map(n => {
              const I = n.icon;
              const active = tab === n.id;
              return (
                <button key={n.id} onClick={() => setTab(n.id)}
                  className={`flex items-center gap-1.5 px-3 py-2 rounded-lg text-xs font-semibold whitespace-nowrap transition flex-shrink-0 ${
                    active
                      ? "bg-cyan-500/15 text-cyan-700 border border-cyan-400/40"
                      : "bg-[var(--surface-2)] text-slate-700 border border-[var(--border)] hover:border-[var(--border-strong)]"
                  }`}>
                  <I className="w-3.5 h-3.5" strokeWidth={active ? 2.5 : 2} />
                  <span>{t(n.labelKey)}</span>
                </button>
              );
            })}
          </div>
        </div>

        <main className="flex-1 px-4 md:px-6 py-6 overflow-x-hidden">
        {tab === "dashboard" && <DashboardTab stats={stats} threats={filteredThreats} typeData={typeData} tacticData={tacticData}
          filter={filter} setFilter={setFilter} setSelected={setSelected} clearAll={clearAll} total={threats.length} />}
        {tab === "registry" && <RegistryTab threats={threats} setSelected={setSelected} />}
        {tab === "cve" && <CveTab />}
        {tab === "reports" && <ReportsTab threats={threats} />}
        {tab === "risk" && <RiskAssessmentTab threats={threats} />}
        {tab === "vlm" && <VlmTab />}
        {tab === "study" && <StudyTab />}
        {tab === "tour" && <TourView
          step={tourStep}
          totalSteps={TOUR_STEPS.length}
          onNext={() => setTourStep(s => Math.min(s + 1, TOUR_STEPS.length - 1))}
          onBack={() => setTourStep(s => Math.max(0, s - 1))}
          onJumpTo={(s) => setTourStep(s)}
          onExit={exitTour}
          onJumpToModule={(moduleId) => { setTab(moduleId); }}
        />}
      </main>
      </div>

      {selected && <ThreatModal threat={selected} onClose={() => setSelected(null)} />}
    </div>
  );
}

// ============================================================
// DASHBOARD TAB
// ============================================================
function DashboardTab({ stats, threats, typeData, tacticData, filter, setFilter, setSelected, clearAll, total }) {
  const { t } = useT();
  const pieColors = ["#06b6d4", "#8b5cf6", "#ec4899", "#f59e0b", "#10b981", "#ef4444", "#3b82f6", "#eab308"];

  return (
    <div className="space-y-5">
      {/* KPI CARDS */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
        {[
          { label: t("critical"), value: stats.Critical, color: "#ef4444", bg: "from-red-500/10", icon: Skull, key: "Critical" },
          { label: t("high"), value: stats.High, color: "#f97316", bg: "from-orange-500/10", icon: AlertTriangle, key: "High" },
          { label: t("medium"), value: stats.Medium, color: "#eab308", bg: "from-yellow-500/10", icon: Bug, key: "Medium" },
          { label: t("low"), value: stats.Low, color: "#10b981", bg: "from-emerald-500/10", icon: Eye, key: "Low" },
        ].map(c => {
          const Icon = c.icon;
          const active = filter === c.key;
          return (
            <button key={c.key} onClick={() => setFilter(active ? "all" : c.key)}
              className={`p-4 rounded-xl bg-gradient-to-br ${c.bg} to-transparent bg-[var(--surface-2)] border text-left transition hover:-translate-y-0.5 ${
                active ? "border-[3px]" : "border-[var(--border)] hover:border-[var(--border-strong)]"
              }`}
              style={active ? { borderColor: c.color } : {}}>
              <div className="flex items-center justify-between mb-3">
                <div className="w-8 h-8 rounded-lg flex items-center justify-center" style={{ background: c.color + "22", color: c.color }}>
                  <Icon className="w-4 h-4" strokeWidth={2.5} />
                </div>
                <span className="mono text-[11px] uppercase tracking-widest" style={{ color: c.color }}>{c.label}</span>
              </div>
              <div className="text-3xl font-bold tabular-nums" style={{ color: c.color }}>{c.value}</div>
              <div className="text-[11px] text-slate-700 mt-1">{t("openIncidents")}</div>
            </button>
          );
        })}
      </div>

      <div className="flex items-center justify-between flex-wrap gap-2">
        <div className="text-sm text-slate-800">
          {t("totalThreats")}: <span className="text-cyan-400 font-bold">{total}</span>
          {filter !== "all" && <span> · {t("filter_")}: <span className="text-slate-900">{filter}</span> <button onClick={() => setFilter("all")} className="text-red-400 ml-1">✕</button></span>}
        </div>
        <button onClick={clearAll} className="text-xs px-3 py-1.5 rounded bg-red-900/40 text-red-700 hover:bg-red-900/60 border border-red-900">
          {t("clearDB")}
        </button>
      </div>

      {/* CHARTS */}
      <div className="grid md:grid-cols-2 gap-4">
        <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-cyan-400" />{t("byThreatType")}</h3>
          <ResponsiveContainer width="100%" height={220}>
            <PieChart>
              <Pie data={typeData} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={80} label={(e) => e.name}>
                {typeData.map((_, i) => <Cell key={i} fill={pieColors[i % pieColors.length]} />)}
              </Pie>
              <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid #334155" }} />
            </PieChart>
          </ResponsiveContainer>
        </div>
        <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
          <h3 className="text-sm font-semibold mb-3 flex items-center gap-2"><Activity className="w-4 h-4 text-cyan-400" />{t("mitreAttackTactics")}</h3>
          <ResponsiveContainer width="100%" height={220}>
            <BarChart data={tacticData} layout="vertical">
              <CartesianGrid stroke="#1e293b" />
              <XAxis type="number" stroke="#64748b" fontSize={10} />
              <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={10} width={100} />
              <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid #334155" }} />
              <Bar dataKey="value" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* LIVE FEED */}
      <div className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--border)] flex items-center justify-between">
          <h3 className="text-sm font-semibold flex items-center gap-2">
            <Zap className="w-4 h-4 text-yellow-400" />{t("threatFeedTitle")}
          </h3>
          <span className="text-xs text-slate-800 font-medium">{t("shownCount", { n: threats.length })}</span>
        </div>
        <div className="divide-y divide-[var(--border)] max-h-[500px] overflow-y-auto">
          {threats.length === 0 && (
            <div className="p-8 text-center text-slate-700 text-sm">{t("waiting")}</div>
          )}
          {threats.slice(0, 50).map(threat => (
            <button key={threat.id} onClick={() => setSelected(threat)}
              className="w-full px-4 py-3 hover:bg-cyan-500/5 flex items-center gap-3 text-left transition">
              <div className="w-1 self-stretch rounded" style={{ background: SEVERITY_COLORS[threat.severity] }} />
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: SEVERITY_COLORS[threat.severity] + "33", color: SEVERITY_COLORS[threat.severity] }}>
                    {threat.severity} · CVSS {threat.cvss}
                  </span>
                  <span className="text-sm font-medium">{threat.type}</span>
                  <span className="text-xs text-slate-800 font-medium">· {threat.family}</span>
                </div>
                <div className="text-xs text-slate-800 mt-1 truncate">
                  {threat.src_country} {threat.src_ip} → {threat.dst_sector} · {threat.mitre_id} {threat.mitre_name}
                </div>
              </div>
              <ChevronRight className="w-4 h-4 text-slate-600 flex-shrink-0" />
            </button>
          ))}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// REGISTRY TAB (persistent DB view)
// ============================================================
function RegistryTab({ threats, setSelected }) {
  const { t } = useT();
  const [q, setQ] = useState("");
  const filtered = threats.filter(threat =>
    !q || threat.type.toLowerCase().includes(q.toLowerCase()) ||
    threat.family.toLowerCase().includes(q.toLowerCase()) ||
    threat.src_ip.includes(q) || threat.mitre_id.toLowerCase().includes(q.toLowerCase())
  );

  return (
    <div className="space-y-4">
      <div className="flex items-center gap-3 flex-wrap">
        <div className="flex-1 min-w-[200px] relative">
          <Search className="w-4 h-4 absolute left-3 top-1/2 -translate-y-1/2 text-slate-700" />
          <input value={q} onChange={e => setQ(e.target.value)} placeholder={t("searchRegistry")}
            className="w-full pl-10 pr-4 py-2 bg-[var(--surface-2)] border border-[var(--border)] rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-cyan-400" />
        </div>
        <div className="text-xs text-slate-800 font-medium">{t("records", { a: filtered.length, b: threats.length })}</div>
      </div>

      <div className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-700">
            <thead className="bg-[var(--surface-3)] text-xs uppercase text-slate-800 font-semibold tracking-wider">
              <tr>
                <th className="px-3 py-2 text-left">{t("timestamp")}</th>
                <th className="px-3 py-2 text-left">{t("severity")}</th>
                <th className="px-3 py-2 text-left">{t("type")}</th>
                <th className="px-3 py-2 text-left">{t("source")}</th>
                <th className="px-3 py-2 text-left">{t("mitre")}</th>
                <th className="px-3 py-2 text-left">{t("cvss")}</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {filtered.slice(0, 200).map(threat => (
                <tr key={threat.id} onClick={() => setSelected(threat)} className="hover:bg-cyan-500/5 cursor-pointer">
                  <td className="px-3 py-2 text-xs text-slate-800">{new Date(threat.timestamp).toLocaleTimeString()}</td>
                  <td className="px-3 py-2">
                    <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: SEVERITY_COLORS[threat.severity] + "33", color: SEVERITY_COLORS[threat.severity] }}>
                      {threat.severity}
                    </span>
                  </td>
                  <td className="px-3 py-2">{threat.type} <span className="text-slate-700 text-xs">/ {threat.family}</span></td>
                  <td className="px-3 py-2 text-xs font-mono">{threat.src_country} {threat.src_ip}</td>
                  <td className="px-3 py-2 text-xs">{threat.mitre_id}</td>
                  <td className="px-3 py-2 font-bold">{threat.cvss}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {filtered.length === 0 && <div className="p-8 text-center text-slate-700 text-sm">{t("noRecords")}</div>}
        </div>
      </div>
    </div>
  );
}

// ============================================================
// CVE TAB - consulta vulnerabilidades reales NVD
// ============================================================
function CveTab() {
  const { t } = useT();
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [mode, setMode] = useState("recent"); // recent | search | breach

  const fetchNVD = async (keyword = "") => {
    setLoading(true);
    setError(null);
    try {
      const url = keyword
        ? `https://services.nvd.nist.gov/rest/json/cves/2.0?keywordSearch=${encodeURIComponent(keyword)}&resultsPerPage=20`
        : `https://services.nvd.nist.gov/rest/json/cves/2.0?resultsPerPage=20&pubStartDate=${new Date(Date.now() - 30 * 86400000).toISOString().slice(0, -5)}&pubEndDate=${new Date().toISOString().slice(0, -5)}`;
      const r = await fetch(url);
      if (!r.ok) throw new Error(`NVD API ${r.status}`);
      const data = await r.json();
      setResults(data.vulnerabilities || []);
    } catch (e) {
      setError(e.message);
    }
    setLoading(false);
  };

  useEffect(() => { if (mode === "recent") fetchNVD(); }, [mode]);

  const KNOWN_BREACHES = [
    { name: "MOVEit Transfer (Cl0p)", year: 2023, records: "77M+", cve: "CVE-2023-34362", impact: "Critical", sectors: "Gov, Finance, Health" },
    { name: "Okta Support System", year: 2023, records: "134", cve: "—", impact: "High", sectors: "Tech/SaaS" },
    { name: "23andMe", year: 2023, records: "6.9M", cve: "—", impact: "High", sectors: "Health" },
    { name: "Change Healthcare (ALPHV)", year: 2024, records: "100M", cve: "—", impact: "Critical", sectors: "Healthcare" },
    { name: "Snowflake customers", year: 2024, records: "560M+", cve: "—", impact: "Critical", sectors: "Multi" },
    { name: "Ticketmaster", year: 2024, records: "560M", cve: "—", impact: "High", sectors: "Entertainment" },
    { name: "National Public Data", year: 2024, records: "2.9B", cve: "—", impact: "Critical", sectors: "Consumer" },
    { name: "Ivanti Connect Secure", year: 2024, records: "—", cve: "CVE-2024-21887", impact: "Critical", sectors: "Enterprise" },
    { name: "Fortinet FortiManager", year: 2024, records: "—", cve: "CVE-2024-47575", impact: "Critical", sectors: "Enterprise" },
    { name: "Salt Typhoon telcos", year: 2024, records: "—", cve: "—", impact: "Critical", sectors: "Telco/Gov" },
  ];

  return (
    <div className="space-y-4">
      <div className="mb-4">
        <h2 className="text-2xl font-bold text-slate-900 mb-1">{t("cveTitle")}</h2>
        <p className="text-sm text-slate-700 font-medium">{t("cveSubtitle")}</p>
      </div>
      <div className="flex gap-1 bg-[var(--surface-2)] p-1 rounded-lg w-fit border border-[var(--border)]">
        {[
          { id: "recent", label: t("cveTabRecent") },
          { id: "search", label: t("cveTabSearch") },
          { id: "breach", label: t("cveTabBreaches") },
        ].map(m => (
          <button key={m.id} onClick={() => setMode(m.id)}
            className={`px-3 py-1.5 text-xs rounded font-semibold ${mode === m.id ? "bg-cyan-600 text-slate-900" : "text-slate-800 hover:text-slate-900"}`}>
            {m.label}
          </button>
        ))}
      </div>

      {mode === "search" && (
        <form onSubmit={e => { e.preventDefault(); fetchNVD(query); }} className="flex gap-2">
          <input value={query} onChange={e => setQuery(e.target.value)} placeholder={t("cveSearchPlaceholder")}
            className="flex-1 px-4 py-2 bg-[var(--surface-2)] border border-[var(--border)] rounded-lg text-sm text-slate-700 placeholder-slate-400 focus:outline-none focus:border-cyan-400" />
          <button type="submit" className="px-4 py-2 bg-cyan-600 hover:bg-cyan-500 rounded-lg text-sm font-semibold text-slate-900">{t("cveSearch")}</button>
        </form>
      )}

      {(mode === "recent" || mode === "search") && (
        <>
          {loading && <div className="p-8 text-center text-slate-700 text-sm flex items-center justify-center gap-2"><RefreshCw className="w-4 h-4 animate-spin" /> {t("cveLoading")}</div>}
          {error && <div className="p-4 bg-red-900/30 border border-red-900 rounded-lg text-sm text-red-700 font-medium">{error}</div>}
          {!loading && !error && results.length > 0 && (
            <div className="space-y-2">
              {results.map(({ cve }) => {
                const metric = cve.metrics?.cvssMetricV31?.[0]?.cvssData || cve.metrics?.cvssMetricV30?.[0]?.cvssData || cve.metrics?.cvssMetricV2?.[0]?.cvssData;
                const score = metric?.baseScore;
                const sev = metric?.baseSeverity || (score >= 9 ? "CRITICAL" : score >= 7 ? "HIGH" : score >= 4 ? "MEDIUM" : "LOW");
                const desc = cve.descriptions?.find(d => d.lang === "en")?.value || "";
                const color = sev === "CRITICAL" ? SEVERITY_COLORS.Critical : sev === "HIGH" ? SEVERITY_COLORS.High : sev === "MEDIUM" ? SEVERITY_COLORS.Medium : SEVERITY_COLORS.Low;
                return (
                  <div key={cve.id} className="p-4 bg-[var(--surface-2)] rounded-lg border border-[var(--border)] hover:border-cyan-500/40">
                    <div className="flex items-start justify-between gap-3 flex-wrap">
                      <div className="flex items-center gap-2">
                        <span className="font-mono text-cyan-400 font-semibold text-sm">{cve.id}</span>
                        {score && (
                          <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: color + "33", color }}>
                            {sev} {score}
                          </span>
                        )}
                      </div>
                      <a href={`https://nvd.nist.gov/vuln/detail/${cve.id}`} target="_blank" rel="noopener"
                        className="text-xs text-slate-800 hover:text-cyan-400 flex items-center gap-1 font-medium">
                        NVD <ExternalLink className="w-3 h-3" />
                      </a>
                    </div>
                    <p className="text-sm text-slate-700 mt-2 line-clamp-3">{desc}</p>
                    <div className="text-xs text-slate-800 font-medium mt-2">{t("cvePublished")}: {new Date(cve.published).toLocaleDateString()}</div>
                  </div>
                );
              })}
            </div>
          )}
          {!loading && !error && results.length === 0 && mode === "search" && query && (
            <div className="p-8 text-center text-slate-700 text-sm">{t("cveNoResults")}: "{query}"</div>
          )}
        </>
      )}

      {mode === "breach" && (
        <div className="space-y-2">
          {KNOWN_BREACHES.map((b, i) => {
            const color = b.impact === "Critical" ? SEVERITY_COLORS.Critical : SEVERITY_COLORS.High;
            return (
              <div key={i} className="p-4 bg-[var(--surface-2)] rounded-lg border border-[var(--border)] flex items-center justify-between flex-wrap gap-2">
                <div className="flex-1 min-w-[200px]">
                  <div className="flex items-center gap-2">
                    <span className="font-semibold text-sm text-slate-900">{b.name}</span>
                    <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: color + "33", color }}>{b.impact}</span>
                  </div>
                  <div className="text-xs text-slate-800 mt-1 font-medium">
                    {b.year} · {b.records} · {b.sectors}
                  </div>
                </div>
                {b.cve !== "—" && (
                  <a href={`https://nvd.nist.gov/vuln/detail/${b.cve}`} target="_blank" rel="noopener"
                    className="text-xs font-mono text-cyan-400 hover:underline flex items-center gap-1">
                    {b.cve} <ExternalLink className="w-3 h-3" />
                  </a>
                )}
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

// ============================================================
// STUDY TAB - comparativa 30 plataformas
// ============================================================
function StudyTab() {
  const { t } = useT();
  const [sortBy, setSortBy] = useState("score");
  const [catFilter, setCatFilter] = useState("all");

  const cats = ["all", ...new Set(PLATFORMS.map(p => p.cat))];
  const data = rankedPlatforms
    .filter(p => catFilter === "all" || p.cat === catFilter)
    .sort((a, b) => (b[sortBy] || 0) - (a[sortBy] || 0));

  const podium = rankedPlatforms.slice(0, 3);

  return (
    <div className="space-y-6">
      <div className="mb-2">
        <span className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 font-bold">{t("studyHeroBadge")}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 leading-tight">{t("studyHeroTitle")}</h2>
        <p className="text-sm text-slate-800 font-medium mt-2 max-w-3xl">{t("studyHeroSubtitle")}</p>
      </div>
      <div className="bg-gradient-to-br from-[var(--surface-1)] to-[var(--surface-2)] rounded-xl p-5 border border-[var(--border)]">
        <h2 className="text-lg font-bold mb-1">Estudio comparativo · 30 plataformas de ciber-amenazas</h2>
        <p className="text-sm text-slate-800">Ranking por valor aportado = Cobertura + Intel + Automatización + Integraciones + Relación calidad/precio (máx. 50).</p>
      </div>

      {/* PODIUM */}
      <div className="grid grid-cols-3 gap-3">
        {podium.map((p, i) => {
          const Icon = i === 0 ? Crown : i === 1 ? Trophy : Medal;
          const colors = ["from-yellow-500 to-yellow-700", "from-slate-400 to-slate-600", "from-orange-600 to-orange-800"];
          return (
            <div key={p.name} className={`p-4 rounded-xl bg-gradient-to-br ${colors[i]} text-slate-900`}>
              <Icon className="w-6 h-6 mb-2" />
              <div className="text-xs opacity-80">#{i + 1}</div>
              <div className="font-bold text-sm">{p.name}</div>
              <div className="text-xs opacity-90 mt-1">{p.cat}</div>
              <div className="text-2xl font-bold mt-2">{p.score}<span className="text-sm opacity-70">/50</span></div>
            </div>
          );
        })}
      </div>

      {/* FILTERS */}
      <div className="flex items-center gap-2 flex-wrap">
        <Filter className="w-4 h-4 text-slate-700" />
        {cats.map(c => (
          <button key={c} onClick={() => setCatFilter(c)}
            className={`text-xs px-3 py-1 rounded-full border ${catFilter === c ? "bg-cyan-600 border-cyan-500 text-slate-900" : "border-[var(--border-strong)] text-slate-800 hover:text-slate-900"}`}>
            {c}
          </button>
        ))}
      </div>

      {/* TABLE */}
      <div className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-sm text-slate-700">
            <thead className="bg-[var(--surface-3)] text-xs uppercase text-slate-800">
              <tr>
                <th className="px-3 py-2 text-left">#</th>
                <th className="px-3 py-2 text-left">Plataforma</th>
                <th className="px-3 py-2 text-left">Categoría</th>
                <th className="px-3 py-2 text-left">Precio</th>
                {["coverage", "intel", "automation", "integrations", "value"].map(k => (
                  <th key={k} onClick={() => setSortBy(k)} className="px-2 py-2 text-center cursor-pointer hover:text-cyan-400">
                    {k === "coverage" ? "Cob." : k === "intel" ? "Intel" : k === "automation" ? "Auto" : k === "integrations" ? "Integr" : "Value"}
                  </th>
                ))}
                <th onClick={() => setSortBy("score")} className="px-3 py-2 text-center cursor-pointer hover:text-cyan-400">Score</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {data.map((p, i) => (
                <tr key={p.name} className="hover:bg-cyan-500/5">
                  <td className="px-3 py-2 text-slate-700">{i + 1}</td>
                  <td className="px-3 py-2">
                    <div className="font-semibold">{p.name}</div>
                    <div className="text-xs text-slate-800 font-medium">{p.focus}</div>
                  </td>
                  <td className="px-3 py-2 text-xs"><span className="px-2 py-0.5 rounded bg-[var(--surface-3)]">{p.cat}</span></td>
                  <td className="px-3 py-2 text-xs">{p.price}</td>
                  <td className="px-2 py-2 text-center">{p.coverage}</td>
                  <td className="px-2 py-2 text-center">{p.intel}</td>
                  <td className="px-2 py-2 text-center">{p.automation}</td>
                  <td className="px-2 py-2 text-center">{p.integrations}</td>
                  <td className="px-2 py-2 text-center">{p.value}</td>
                  <td className="px-3 py-2 text-center">
                    <span className="font-bold text-cyan-400">{p.score}</span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>

      <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)] text-xs text-slate-800 space-y-2">
        <p><strong className="text-slate-800">Conclusiones del estudio:</strong></p>
        <p>• <strong className="text-cyan-400">CrowdStrike Falcon</strong> lidera en valor absoluto por su suite unificada EDR+CTI+XDR.</p>
        <p>• <strong className="text-cyan-400">SOCRadar XTI</strong> es el mejor en ratio precio/valor en CTI/DRP, ideal para mid-market.</p>
        <p>• <strong className="text-cyan-400">Lumu</strong> ofrece el mejor pay-as-you-go en NDR con bajo ruido y mapeo MITRE sólido.</p>
        <p>• <strong className="text-cyan-400">Wazuh</strong> gana si el criterio prioritario es TCO (open source) y se dispone de equipo SOC.</p>
        <p>• <strong className="text-cyan-400">Recorded Future + Mandiant</strong> siguen siendo la referencia en inteligencia premium.</p>
        <p>• Para agentic/AI security (tu nicho de consultoría): <strong className="text-cyan-400">Cyble Gen-3</strong>, <strong className="text-cyan-400">Darktrace</strong> y <strong className="text-cyan-400">Vectra AI</strong> son los más alineados con MITRE ATLAS.</p>
      </div>
    </div>
  );
}

// ============================================================
// THREAT MODAL
// ============================================================
function ThreatModal({ threat, onClose }) {
  const { t } = useT();
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-xl max-w-lg w-full p-5" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: SEVERITY_COLORS[threat.severity] + "33", color: SEVERITY_COLORS[threat.severity] }}>
                {threat.severity} · CVSS {threat.cvss}
              </span>
              <span className="text-xs text-slate-800 font-medium">Conf. {threat.confidence}%</span>
            </div>
            <h3 className="text-lg font-bold">{threat.type}</h3>
            <p className="text-sm text-slate-800">{threat.family}</p>
          </div>
          <button onClick={onClose} className="text-slate-700 hover:text-slate-900"><X className="w-5 h-5" /></button>
        </div>
        <div className="space-y-2 text-sm">
          <Row label="ID" value={threat.id} mono />
          <Row label={t("detectedAt")} value={new Date(threat.timestamp).toLocaleString()} />
          <Row label="MITRE ATT&CK" value={`${threat.mitre_id} — ${threat.mitre_name}`} />
          <Row label={t("tactic")} value={threat.mitre_tactic} />
          <Row label={t("sourceIp")} value={`${threat.src_country} ${threat.src_ip}`} mono />
          <Row label={t("targetSector")} value={threat.dst_sector} />
          <Row label={t("fileHash")} value={threat.ioc_hash} mono />
        </div>
        <div className="mt-4 pt-4 border-t border-[var(--border)] flex gap-2">
          <a href={`https://attack.mitre.org/techniques/${threat.mitre_id}/`} target="_blank" rel="noopener"
            className="flex-1 text-center text-xs px-3 py-2 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded text-slate-800 font-medium">
            MITRE ATT&CK
          </a>
          <a href={`https://www.virustotal.com/gui/search/${threat.ioc_hash}`} target="_blank" rel="noopener"
            className="flex-1 text-center text-xs px-3 py-2 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded text-slate-800 font-medium">
            VirusTotal
          </a>
        </div>
      </div>
    </div>
  );
}

function Row({ label, value, mono }) {
  return (
    <div className="flex justify-between gap-3">
      <span className="text-slate-700">{label}</span>
      <span className={mono ? "font-mono text-cyan-400 text-xs" : "text-slate-800"}>{value}</span>
    </div>
  );
}

// ============================================================
// REPORTS TAB - Servicio de informes de ciberinteligencia
// Réplica del servicio gratuito de Telefónica Tech
// ============================================================
const getReportCatalog = (t) => [
  { id: "daily", icon: Newspaper, title: t("rcDailyTitle"), freq: t("rcFreqDaily"), color: "from-blue-500 to-blue-700", desc: t("rcDailyDesc") },
  { id: "weekly", icon: Newspaper, title: t("rcWeeklyTitle"), freq: t("rcFreqWeekly"), color: "from-cyan-500 to-cyan-700", desc: t("rcWeeklyDesc") },
  { id: "threat", icon: AlertTriangle, title: t("rcThreatTitle"), freq: t("rcFreqWeekly"), color: "from-red-500 to-red-700", desc: t("rcThreatDesc") },
  { id: "fraud", icon: Search, title: t("rcFraudTitle"), freq: t("rcFreqMonthly"), color: "from-purple-500 to-purple-700", desc: t("rcFraudDesc") },
  { id: "ransomware", icon: Skull, title: t("rcRansomTitle"), freq: t("rcFreqMonthly"), color: "from-rose-600 to-rose-800", desc: t("rcRansomDesc") },
  { id: "leaks", icon: Database, title: t("rcLeaksTitle"), freq: t("rcFreqMonthly"), color: "from-amber-500 to-amber-700", desc: t("rcLeaksDesc") },
  { id: "sector", icon: TrendingUp, title: t("rcSectorTitle"), freq: t("rcFreqMonthly"), color: "from-emerald-500 to-emerald-700", desc: t("rcSectorDesc") },
  { id: "vuln", icon: Bug, title: t("rcVulnTitle"), freq: t("rcFreqMonthly"), color: "from-orange-500 to-orange-700", desc: t("rcVulnDesc") },
  { id: "hack", icon: Globe, title: t("rcHackTitle"), freq: t("rcFreqMonthly"), color: "from-fuchsia-500 to-fuchsia-700", desc: t("rcHackDesc") },
  { id: "ddos", icon: Zap, title: t("rcDdosTitle"), freq: t("rcFreqMonthly"), color: "from-yellow-500 to-yellow-700", desc: t("rcDdosDesc") },
  { id: "activism", icon: Users, title: t("rcActivismTitle"), freq: t("rcFreqBimonthly"), color: "from-teal-500 to-teal-700", desc: t("rcActivismDesc") },
];

const getSectorOptions = (t) => [t("sectorPublic"), t("sectorBanking"), t("sectorHealth"), t("sectorEnergy"),
  t("sectorRetail"), t("sectorTech"), t("sectorIndustry"), t("sectorEducation"), t("sectorTelco"), t("sectorTransport"), t("sectorOther")];

function ReportsTab({ threats }) {
  const { t } = useT();
  const REPORT_CATALOG = getReportCatalog(t);
  const [view, setView] = useState("landing"); // landing | admin | archive
  const [subscribers, setSubscribers] = useState([]);
  const [archive, setArchive] = useState([]);
  const [previewReport, setPreviewReport] = useState(null);

  // Cargar datos persistidos
  useEffect(() => {
    (async () => {
      try {
        const s = await window.storage.get("subscribers:list");
        if (s?.value) setSubscribers(JSON.parse(s.value));
      } catch (e) {}
      try {
        const a = await window.storage.get("reports:archive");
        if (a?.value) setArchive(JSON.parse(a.value));
      } catch (e) {}
    })();
  }, []);

  const saveSubscriber = async (sub) => {
    const next = [{ ...sub, id: `SUB-${Date.now()}`, createdAt: new Date().toISOString(), status: "active" }, ...subscribers];
    setSubscribers(next);
    try { await window.storage.set("subscribers:list", JSON.stringify(next)); } catch (e) {}
  };

  const removeSubscriber = async (id) => {
    const next = subscribers.filter(s => s.id !== id);
    setSubscribers(next);
    try { await window.storage.set("subscribers:list", JSON.stringify(next)); } catch (e) {}
  };

  // Generar reporte usando datos reales de threats
  const generateReport = async (reportType) => {
    const cat = REPORT_CATALOG.find(r => r.id === reportType);
    if (!cat) return;
    const report = {
      id: `RPT-${Date.now()}`,
      type: reportType,
      title: cat.title,
      freq: cat.freq,
      date: new Date().toISOString(),
      content: buildReportContent(reportType, threats),
      deliveredTo: subscribers.filter(s => s.reports.includes(reportType)).length,
    };
    const next = [report, ...archive].slice(0, 50);
    setArchive(next);
    try { await window.storage.set("reports:archive", JSON.stringify(next)); } catch (e) {}
  };

  return (
    <div className="space-y-6">
      <div className="mb-2">
        <span className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 font-bold">{t("reportsHeroBadge")}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 leading-tight">{t("reportsHeroTitle")}</h2>
        <p className="text-sm text-slate-800 font-medium mt-2 max-w-3xl">{t("reportsHeroSubtitle")}</p>
      </div>
      {/* Sub-nav */}
      <div className="flex gap-1 bg-[var(--surface-2)] p-1 rounded-lg w-fit border border-[var(--border)] flex-wrap">
        {[
          { id: "landing", label: t("reportsTabPublic"), icon: Globe },
          { id: "admin", label: `${t("reportsTabAdmin")} (${subscribers.length})`, icon: Users },
          { id: "archive", label: `${t("reportsTabArchive")} (${archive.length})`, icon: Inbox },
        ].map(v => {
          const I = v.icon;
          return (
            <button key={v.id} onClick={() => setView(v.id)}
              className={`flex items-center gap-1.5 px-3 py-1.5 text-xs rounded font-semibold ${view === v.id ? "bg-cyan-600 text-slate-900" : "text-slate-800 hover:text-slate-900"}`}>
              <I className="w-3.5 h-3.5" /> {v.label}
            </button>
          );
        })}
      </div>

      {view === "landing" && <LandingView onSubscribe={saveSubscriber} />}
      {view === "admin" && <AdminView subscribers={subscribers} onRemove={removeSubscriber} onGenerate={generateReport} />}
      {view === "archive" && <ArchiveView archive={archive} onPreview={setPreviewReport} />}

      {previewReport && <ReportPreviewModal report={previewReport} onClose={() => setPreviewReport(null)} />}
    </div>
  );
}

// ---- LANDING: réplica de la landing de Telefónica Tech ----
function LandingView({ onSubscribe }) {
  const { t } = useT();
  const REPORT_CATALOG = getReportCatalog(t);
  const SECTOR_OPTIONS = getSectorOptions(t);
  const [form, setForm] = useState({
    fullName: "", email: "", company: "", sector: "", phone: "",
    reports: REPORT_CATALOG.map(r => r.id), accept: false,
  });
  const [sent, setSent] = useState(false);
  const [error, setError] = useState("");

  const toggleReport = (id) => {
    setForm(f => ({ ...f, reports: f.reports.includes(id) ? f.reports.filter(r => r !== id) : [...f.reports, id] }));
  };

  const submit = async (e) => {
    e.preventDefault();
    setError("");
    if (!form.fullName || !form.email || !form.company || !form.sector) {
      setError(t("completeFields")); return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) {
      setError(t("invalidEmail")); return;
    }
    if (!form.accept) { setError(t("mustAccept")); return; }
    if (form.reports.length === 0) { setError(t("selectAtLeastOne")); return; }
    await onSubscribe(form);
    setSent(true);
  };

  if (sent) {
    return (
      <div className="bg-gradient-to-br from-green-900/40 to-emerald-900/20 border border-green-700/50 rounded-2xl p-8 text-center">
        <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-green-500/20 flex items-center justify-center">
          <CheckCircle className="w-8 h-8 text-green-700" />
        </div>
        <h2 className="text-2xl font-bold mb-2 text-slate-900">{t("reportsFormSuccess")}</h2>
        <p className="text-slate-700 mb-1">{t("reportsFormSuccessDesc")}</p>
        <p className="text-xs text-slate-800 font-medium mb-6">+130 · {form.reports.length} {t("subscriptionsActive")}</p>
        <button onClick={() => { setSent(false); setForm({ fullName: "", email: "", company: "", sector: "", phone: "", reports: REPORT_CATALOG.map(r => r.id), accept: false }); }}
          className="text-xs px-4 py-2 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded text-slate-800 font-medium">
          {t("registerAnother")}
        </button>
      </div>
    );
  }

  return (
    <div className="space-y-8">
      {/* HERO */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-blue-50 via-white to-cyan-50 p-6 md:p-10 border border-[var(--border)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-cyan-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative">
          <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-cyan-500/20 text-cyan-700 mb-3">
            {t("trialBadge")}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold mb-3 leading-tight text-slate-900">
            {t("reportsLandingTitle")}
          </h1>
          <p className="text-slate-700 text-sm md:text-base max-w-2xl mb-6">
            {t("reportsLandingSubtitle")}
          </p>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3 max-w-3xl">
            {[
              { n: "+130", l: t("statsReports") },
              { n: "90", l: t("statsDays") },
              { n: "11", l: t("statsTypes") },
              { n: "24/7", l: t("statsUpdate") },
            ].map((s, i) => (
              <div key={i} className="bg-[var(--surface-2)]/80 backdrop-blur rounded-lg p-3 border border-[var(--border)]">
                <div className="text-2xl font-bold text-cyan-400">{s.n}</div>
                <div className="text-xs text-slate-800 font-medium">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* REPORT CARDS */}
      <div>
        <h2 className="text-xl font-bold mb-1 text-slate-900">{t("reportsCatalogTitle")}</h2>
        <p className="text-sm text-slate-800 font-medium mb-4">{t("selectReports")}</p>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
          {REPORT_CATALOG.map(r => {
            const Icon = r.icon;
            const active = form.reports.includes(r.id);
            return (
              <button key={r.id} onClick={() => toggleReport(r.id)}
                className={`text-left p-4 rounded-xl border transition relative ${
                  active ? "border-cyan-500 bg-cyan-500/5" : "border-[var(--border)] bg-[var(--surface-2)] hover:border-cyan-500/40"
                }`}>
                {active && (
                  <div className="absolute top-2 right-2 w-5 h-5 rounded-full bg-cyan-500 flex items-center justify-center">
                    <CheckCircle className="w-3 h-3 text-slate-900" />
                  </div>
                )}
                <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${r.color} flex items-center justify-center mb-2`}>
                  <Icon className="w-5 h-5 text-slate-900" />
                </div>
                <div className="flex items-center gap-2 mb-1">
                  <h3 className="font-semibold text-sm text-slate-900">{r.title}</h3>
                </div>
                <span className="text-[11px] uppercase tracking-wider font-semibold text-cyan-400">{r.freq}</span>
                <p className="text-xs text-slate-800 mt-2 leading-relaxed font-medium">{r.desc}</p>
              </button>
            );
          })}
        </div>
      </div>

      {/* SIGNUP FORM */}
      <div id="signup" className="bg-[var(--surface-2)] rounded-2xl border border-[var(--border)] p-6 md:p-8">
        <div className="max-w-xl">
          <h2 className="text-xl font-bold mb-1 flex items-center gap-2 text-slate-900">
            <Send className="w-5 h-5 text-cyan-400" /> {t("reportsSubscribeTitle")}
          </h2>
          <p className="text-sm text-slate-800 font-medium mb-5">{t("reportsSubscribeDesc")}</p>
          <div className="space-y-3">
            <Input label={t("reportsFormName") + " *"} value={form.fullName} onChange={v => setForm({ ...form, fullName: v })} />
            <Input label={t("reportsFormEmail") + " *"} type="email" value={form.email} onChange={v => setForm({ ...form, email: v })} />
            <Input label={t("reportsFormCompany") + " *"} value={form.company} onChange={v => setForm({ ...form, company: v })} />
            <div>
              <label className="block text-xs text-slate-800 font-medium mb-1">{t("reportsFormSector")} *</label>
              <select value={form.sector} onChange={e => setForm({ ...form, sector: e.target.value })}
                className="w-full px-3 py-2 bg-[var(--surface-1)] border border-[var(--border)] rounded-lg text-sm text-slate-900 focus:outline-none focus:border-cyan-400">
                <option value="">{t("reportsFormSelectSector")}</option>
                {SECTOR_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
            <Input label={t("phoneOptional")} value={form.phone} onChange={v => setForm({ ...form, phone: v })} />
            <div className="text-xs text-slate-800 font-medium pt-1">
              {t("youSelected", { n: form.reports.length, total: REPORT_CATALOG.length })}
            </div>
            <label className="flex items-start gap-2 text-xs text-slate-900 leading-relaxed font-medium pt-2">
              <input type="checkbox" checked={form.accept} onChange={e => setForm({ ...form, accept: e.target.checked })}
                className="mt-0.5 accent-cyan-500" />
              <span>{t("privacyAccept")}</span>
            </label>
            {error && <div className="text-xs text-red-700 bg-red-500/10 border border-red-500/40 rounded-lg p-2 font-medium">{error}</div>}
            <button onClick={submit}
              className="w-full mt-2 py-3 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 hover:to-blue-500 rounded-lg font-semibold text-sm text-slate-900 transition uppercase">
              {t("reportsFormSubmit")}
            </button>
          </div>
        </div>
      </div>

      {/* STATS */}
      <div className="grid md:grid-cols-3 gap-3">
        {[
          { n: "+4,5M$", l: "coste medio por filtración en 2023", src: "IBM" },
          { n: "+1.000M$", l: "pagados por rescates de ransomware en 2023", src: "IBM" },
          { n: "+100M", l: "contraseñas expuestas sólo en 2024", src: "HaveIBeenPwned" },
        ].map((s, i) => (
          <div key={i} className="p-5 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
            <div className="text-3xl font-bold text-cyan-400">{s.n}</div>
            <div className="text-sm text-slate-700 mt-1">{s.l}</div>
            <div className="text-xs text-slate-800 font-medium mt-2">Fuente: {s.src}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

function Input({ label, value, onChange, type = "text" }) {
  return (
    <div>
      <label className="block text-sm font-semibold text-slate-900 mb-1.5">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)}
        className="w-full px-3 py-2.5 bg-[var(--surface-0)] border border-[var(--border-strong)] rounded-lg text-sm text-slate-900 placeholder-slate-500 font-medium focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20" />
    </div>
  );
}

// ---- ADMIN: gestión de suscriptores ----
function AdminView({ subscribers, onRemove, onGenerate }) {
  const { t } = useT();
  const REPORT_CATALOG = getReportCatalog(t);
  return (
    <div className="space-y-4">
      <div className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] p-5">
        <h3 className="font-semibold mb-1 flex items-center gap-2"><Send className="w-4 h-4 text-cyan-400" />Generar y entregar reporte</h3>
        <p className="text-xs text-slate-800 mb-3">Genera un reporte usando datos reales del dashboard y márcalo como entregado a los suscriptores correspondientes.</p>
        <div className="flex flex-wrap gap-2">
          {REPORT_CATALOG.map(r => (
            <button key={r.id} onClick={() => onGenerate(r.id)}
              className="text-xs px-3 py-1.5 bg-[var(--surface-3)] hover:bg-cyan-700 rounded border border-[var(--border-strong)]">
              {r.title}
            </button>
          ))}
        </div>
      </div>

      <div className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="px-4 py-3 border-b border-[var(--border)]">
          <h3 className="font-semibold flex items-center gap-2"><Users className="w-4 h-4 text-cyan-400" />Suscriptores activos ({subscribers.length})</h3>
        </div>
        {subscribers.length === 0 ? (
          <div className="p-8 text-center text-slate-700 text-sm">Sin suscriptores todavía. Da de alta alguno desde "Servicio público".</div>
        ) : (
          <div className="overflow-x-auto">
            <table className="w-full text-sm text-slate-700">
              <thead className="bg-[var(--surface-3)] text-xs uppercase text-slate-800">
                <tr>
                  <th className="px-3 py-2 text-left">Alta</th>
                  <th className="px-3 py-2 text-left">Nombre</th>
                  <th className="px-3 py-2 text-left">Email</th>
                  <th className="px-3 py-2 text-left">Empresa</th>
                  <th className="px-3 py-2 text-left">Sector</th>
                  <th className="px-3 py-2 text-center">Reportes</th>
                  <th className="px-3 py-2"></th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[var(--border)]">
                {subscribers.map(s => (
                  <tr key={s.id} className="hover:bg-cyan-500/5">
                    <td className="px-3 py-2 text-xs text-slate-800 font-medium">{new Date(s.createdAt).toLocaleDateString()}</td>
                    <td className="px-3 py-2">{s.fullName}</td>
                    <td className="px-3 py-2 text-xs font-mono text-cyan-400">{s.email}</td>
                    <td className="px-3 py-2 text-xs">{s.company}</td>
                    <td className="px-3 py-2 text-xs">{s.sector}</td>
                    <td className="px-3 py-2 text-center text-xs">
                      <span className="px-2 py-0.5 bg-[var(--surface-3)] rounded">{s.reports.length}/{REPORT_CATALOG.length}</span>
                    </td>
                    <td className="px-3 py-2">
                      <button onClick={() => onRemove(s.id)} className="text-xs text-red-400 hover:text-red-700">Baja</button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        )}
      </div>
    </div>
  );
}

// ---- ARCHIVE: reportes generados ----
function ArchiveView({ archive, onPreview }) {
  const { t } = useT();
  const REPORT_CATALOG = getReportCatalog(t);
  if (archive.length === 0) {
    return (
      <div className="p-10 text-center text-slate-700 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
        <Inbox className="w-10 h-10 mx-auto mb-2 opacity-50" />
        <p className="text-sm">Sin reportes generados todavía.</p>
        <p className="text-xs mt-1">Ve a "Suscriptores" y pulsa cualquier tipo de reporte para generarlo.</p>
      </div>
    );
  }
  return (
    <div className="space-y-2">
      {archive.map(r => {
        const cat = REPORT_CATALOG.find(c => c.id === r.type);
        const Icon = cat?.icon || FileText;
        return (
          <button key={r.id} onClick={() => onPreview(r)}
            className="w-full text-left p-4 bg-[var(--surface-2)] hover:bg-[var(--surface-3)] rounded-xl border border-[var(--border)] flex items-center gap-3 transition">
            <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${cat?.color || "from-slate-600 to-slate-800"} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-5 h-5 text-slate-900" />
            </div>
            <div className="flex-1 min-w-0">
              <div className="font-semibold text-sm">{r.title}</div>
              <div className="text-xs text-slate-800 font-medium">
                {new Date(r.date).toLocaleString()} · {r.freq} · Entregado a {r.deliveredTo} suscriptores
              </div>
            </div>
            <Eye className="w-4 h-4 text-slate-700" />
          </button>
        );
      })}
    </div>
  );
}

// ---- Generador de contenido de reporte a partir de threats reales ----
function buildReportContent(type, threats) {
  const now = new Date();
  const recent = threats.slice(0, 100);
  const crit = recent.filter(t => t.severity === "Critical");
  const high = recent.filter(t => t.severity === "High");
  const byType = {};
  recent.forEach(t => { byType[t.type] = (byType[t.type] || 0) + 1; });
  const topTypes = Object.entries(byType).sort((a, b) => b[1] - a[1]);
  const byCountry = {};
  recent.forEach(t => { byCountry[t.src_country] = (byCountry[t.src_country] || 0) + 1; });
  const topCountries = Object.entries(byCountry).sort((a, b) => b[1] - a[1]).slice(0, 5);
  const bySector = {};
  recent.forEach(t => { bySector[t.dst_sector] = (bySector[t.dst_sector] || 0) + 1; });

  const sections = [];
  sections.push({ h: "Resumen ejecutivo", body: `Durante el periodo analizado se han procesado ${recent.length} eventos de ciberinteligencia, de los cuales ${crit.length} son críticos y ${high.length} de severidad alta. El vector más observado es "${topTypes[0]?.[0] || "N/D"}" con ${topTypes[0]?.[1] || 0} detecciones.` });

  if (type === "daily" || type === "weekly") {
    sections.push({ h: "Noticias destacadas", body: recent.slice(0, 5).map((t, i) => `${i + 1}. [${t.severity}] ${t.type} — familia ${t.family}. Origen ${t.src_country}, objetivo sector ${t.dst_sector}. TTP: ${t.mitre_id} ${t.mitre_name}.`).join("\n") });
    sections.push({ h: "IoCs del periodo", body: recent.slice(0, 8).map(t => `• ${t.src_ip} | hash: ${t.ioc_hash}`).join("\n") });
  }
  if (type === "threat") {
    sections.push({ h: "Amenazas activas", body: topTypes.slice(0, 5).map(([k, v]) => `• ${k}: ${v} detecciones`).join("\n") });
    sections.push({ h: "Adversarios observados", body: "Familias identificadas: " + [...new Set(recent.map(t => t.family))].slice(0, 8).join(", ") });
  }
  if (type === "fraud") {
    sections.push({ h: "Infraestructuras sospechosas", body: recent.slice(0, 10).map(t => `• IP ${t.src_ip} (${t.src_country}) — ${t.type} / ${t.family}`).join("\n") });
  }
  if (type === "ransomware") {
    const rw = recent.filter(t => t.type === "Ransomware");
    sections.push({ h: "Incidentes por familia", body: rw.length ? rw.slice(0, 10).map(t => `• ${t.family} → sector ${t.dst_sector}, origen ${t.src_country}, CVSS ${t.cvss}`).join("\n") : "No se han registrado incidentes de ransomware en el periodo." });
    sections.push({ h: "Sectores más afectados", body: Object.entries(bySector).sort((a, b) => b[1] - a[1]).slice(0, 5).map(([k, v]) => `• ${k}: ${v}`).join("\n") });
  }
  if (type === "leaks") {
    sections.push({ h: "Fugas detectadas", body: `Total: ${recent.length}. Por criticidad: Critical ${crit.length}, High ${high.length}.` });
    sections.push({ h: "Clasificación por sector", body: Object.entries(bySector).map(([k, v]) => `• ${k}: ${v}`).join("\n") });
  }
  if (type === "sector") {
    sections.push({ h: "Actividad por sector", body: Object.entries(bySector).sort((a, b) => b[1] - a[1]).map(([k, v]) => `• ${k}: ${v} eventos`).join("\n") });
  }
  if (type === "vuln") {
    sections.push({ h: "Vulnerabilidades y explotación", body: "Consultar panel CVE con las últimas publicadas en NVD. Eventos correlacionados este periodo: " + recent.filter(t => t.type === "Zero-Day Exploit").length });
    sections.push({ h: "Tendencias de explotación", body: topTypes.slice(0, 5).map(([k, v]) => `• ${k}: ${v}`).join("\n") });
  }
  if (type === "hack") {
    sections.push({ h: "TTPs observados (MITRE ATT&CK)", body: [...new Set(recent.map(t => `${t.mitre_id} ${t.mitre_name}`))].slice(0, 10).map(x => `• ${x}`).join("\n") });
    sections.push({ h: "Regiones de origen", body: topCountries.map(([k, v]) => `• ${k}: ${v}`).join("\n") });
  }
  if (type === "ddos") {
    sections.push({ h: "Actividad DDoS", body: `Orígenes principales: ${topCountries.map(c => c[0]).join(", ")}. Sectores más afectados: ${Object.entries(bySector).sort((a, b) => b[1] - a[1]).slice(0, 3).map(s => s[0]).join(", ")}.` });
  }
  if (type === "activism") {
    sections.push({ h: "Campañas activistas", body: `Monitorización de colectivos hacktivistas con actividad en LATAM y EU. Eventos correlacionados en el periodo: ${recent.length}.` });
  }

  sections.push({ h: "Recomendaciones", body: "• Aplicar parches de los CVE críticos publicados esta semana.\n• Revisar reglas de egress para IPs en listas de reputación.\n• Reforzar MFA en cuentas privilegiadas.\n• Realizar búsqueda retroactiva de los IoCs proporcionados.\n• Revisar playbooks de respuesta a incidentes." });
  sections.push({ h: "Fuentes", body: "Telemetría propia (DOC/SOCs), NVD, MITRE ATT&CK, CTA, APWG, OSINT." });

  return { date: now.toISOString(), sections };
}

// ---- MODAL: visualización del reporte ----
function ReportPreviewModal({ report, onClose }) {
  const { t } = useT();
  const REPORT_CATALOG = getReportCatalog(t);
  const cat = REPORT_CATALOG.find(c => c.id === report.type);
  const Icon = cat?.icon || FileText;

  const download = () => {
    const text = `${report.title}\n${"=".repeat(report.title.length)}\nFecha: ${new Date(report.content.date).toLocaleString()}\nFrecuencia: ${report.freq}\n\n${report.content.sections.map(s => `${s.h}\n${"-".repeat(s.h.length)}\n${s.body}\n`).join("\n")}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `${report.id}-${report.type}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-5 border-b border-[var(--border)] flex items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${cat?.color || "from-slate-600 to-slate-800"} flex items-center justify-center flex-shrink-0`}>
              <Icon className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{report.title}</h3>
              <div className="text-xs text-slate-800 mt-0.5">
                {new Date(report.date).toLocaleString()} · {report.freq} · Entregado a {report.deliveredTo} suscriptores
              </div>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-700 hover:text-slate-900"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-sm">
          {report.content.sections.map((s, i) => (
            <div key={i}>
              <h4 className="font-semibold text-cyan-400 mb-1">{s.h}</h4>
              <pre className="text-xs text-slate-800 font-medium whitespace-pre-wrap font-sans bg-[var(--surface-0)] p-3 rounded border border-[var(--border)]">{s.body}</pre>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-[var(--border)] flex gap-2">
          <button onClick={download} className="flex-1 text-xs px-3 py-2 bg-cyan-600 hover:bg-cyan-500 rounded flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Descargar .txt
          </button>
          <button onClick={onClose} className="px-4 py-2 text-xs bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded">Cerrar</button>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// RISK ASSESSMENT TAB - Hack Risk Score + Attack Surface Management
// Inspirado en hackrisk.io/hackrisk.ai pero más completo
// ============================================================
const getRiskCategories = (t) => [
  { id: "surface", name: t("riskCategorySurface"), icon: Radar, weight: 20, desc: t("riskCatSurfaceDesc") },
  { id: "creds", name: t("riskCategoryCreds"), icon: KeyRound, weight: 18, desc: t("riskCatCredsDesc") },
  { id: "vulns", name: t("riskCategoryVulns"), icon: Bug, weight: 20, desc: t("riskCatVulnsDesc") },
  { id: "ssl", name: t("riskCategorySSL"), icon: Lock, weight: 10, desc: t("riskCatSSLDesc") },
  { id: "email", name: t("riskCategoryEmail"), icon: Mail, weight: 8, desc: t("riskCatEmailDesc") },
  { id: "dns", name: t("riskCategoryDNS"), icon: Globe, weight: 6, desc: t("riskCatDNSDesc") },
  { id: "darkweb", name: t("riskCategoryDark"), icon: Eye, weight: 10, desc: t("riskCatDarkDesc") },
  { id: "cloud", name: t("riskCategoryCloud"), icon: Cloud, weight: 8, desc: t("riskCatCloudDesc") },
];

const COMPLIANCE_FRAMEWORKS = [
  { id: "nist", name: "NIST CSF 2.0", color: "from-blue-600 to-blue-800" },
  { id: "iso27001", name: "ISO 27001:2022", color: "from-purple-600 to-purple-800" },
  { id: "nis2", name: "NIS2 Directive", color: "from-cyan-600 to-cyan-800" },
  { id: "gdpr", name: "GDPR", color: "from-emerald-600 to-emerald-800" },
  { id: "dora", name: "DORA", color: "from-amber-600 to-amber-800" },
];

function RiskAssessmentTab({ threats }) {
  const { t } = useT();
  const RISK_CATEGORIES = getRiskCategories(t);
  const [assets, setAssets] = useState([]);
  const [current, setCurrent] = useState(null);
  const [view, setView] = useState("list"); // list | scan | detail
  const [scanning, setScanning] = useState(false);
  const [scanProgress, setScanProgress] = useState({ step: 0, msg: "" });
  const [shareModal, setShareModal] = useState(false);

  useEffect(() => {
    (async () => {
      try {
        const r = await window.storage.get("assets:list");
        if (r?.value) setAssets(JSON.parse(r.value));
      } catch (e) {}
    })();
  }, []);

  const persistAssets = async (next) => {
    setAssets(next);
    try { await window.storage.set("assets:list", JSON.stringify(next)); } catch (e) {}
  };

  const startScan = async (domain, company, sector) => {
    setScanning(true);
    const steps = [
      "Enumerando subdominios (DNS, CT logs)...",
      "Descubriendo puertos y servicios expuestos...",
      "Analizando certificados SSL/TLS...",
      "Verificando SPF/DKIM/DMARC...",
      "Buscando credenciales en dark web...",
      "Cruzando CVEs con servicios detectados...",
      "Auditando postura cloud...",
      "Calculando risk score y compliance...",
    ];
    for (let i = 0; i < steps.length; i++) {
      setScanProgress({ step: i + 1, msg: steps[i] });
      await new Promise(r => setTimeout(r, 450));
    }
    const result = runSimulatedScan(domain, company, sector);
    const next = [result, ...assets];
    await persistAssets(next);
    setCurrent(result);
    setView("detail");
    setScanning(false);
  };

  const deleteAsset = async (id) => {
    const next = assets.filter(a => a.id !== id);
    await persistAssets(next);
    if (current?.id === id) { setCurrent(null); setView("list"); }
  };

  const rescan = async (asset) => {
    setScanning(true);
    await new Promise(r => setTimeout(r, 1500));
    const result = runSimulatedScan(asset.domain, asset.company, asset.sector);
    result.id = asset.id;
    result.history = [...(asset.history || []), { date: asset.scanDate, score: asset.score }];
    const next = assets.map(a => a.id === asset.id ? result : a);
    await persistAssets(next);
    setCurrent(result);
    setScanning(false);
  };

  return (
    <div className="space-y-5">
      <div className="mb-2">
        <span className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 font-bold">{t("riskHeroBadge")}</span>
        <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mt-2 leading-tight">{t("riskHeroTitle")}</h2>
        <p className="text-sm text-slate-800 font-medium mt-2 max-w-3xl">{t("riskHeroSubtitle")}</p>
      </div>
      {view === "list" && !scanning && (
        <AssetListView assets={assets} onNew={() => setView("scan")}
          onOpen={(a) => { setCurrent(a); setView("detail"); }}
          onDelete={deleteAsset} threats={threats} />
      )}
      {view === "scan" && !scanning && (
        <ScanFormView onStart={startScan} onCancel={() => setView("list")} />
      )}
      {scanning && <ScanningView progress={scanProgress} />}
      {view === "detail" && current && !scanning && (
        <AssetDetailView asset={current} onBack={() => setView("list")}
          onRescan={() => rescan(current)} onShare={() => setShareModal(true)} />
      )}
      {shareModal && current && <ShareReportModal asset={current} onClose={() => setShareModal(false)} />}
    </div>
  );
}

// ---- Simulated scan engine ----
const RISK_CATEGORY_WEIGHTS = [
  { id: "surface", weight: 20 },
  { id: "creds", weight: 18 },
  { id: "vulns", weight: 20 },
  { id: "ssl", weight: 10 },
  { id: "email", weight: 8 },
  { id: "dns", weight: 6 },
  { id: "darkweb", weight: 10 },
  { id: "cloud", weight: 8 },
];

function runSimulatedScan(domain, company, sector) {
  const rand = (min, max) => Math.floor(Math.random() * (max - min + 1)) + min;
  const rnd = () => Math.random();

  // Discovery
  const subdomains = [];
  const prefixes = ["www", "mail", "admin", "vpn", "api", "dev", "staging", "portal", "cloud", "git", "jenkins", "grafana", "wiki", "smtp", "ftp", "owa", "webmail", "sso", "login", "crm"];
  const numSubs = rand(8, 22);
  for (let i = 0; i < numSubs; i++) {
    subdomains.push(`${prefixes[i % prefixes.length]}${i > 19 ? i : ""}.${domain}`);
  }
  const openPorts = [];
  const portPool = [
    { p: 22, s: "SSH" }, { p: 80, s: "HTTP" }, { p: 443, s: "HTTPS" },
    { p: 21, s: "FTP" }, { p: 25, s: "SMTP" }, { p: 3389, s: "RDP" },
    { p: 3306, s: "MySQL" }, { p: 5432, s: "PostgreSQL" }, { p: 27017, s: "MongoDB" },
    { p: 6379, s: "Redis" }, { p: 9200, s: "Elasticsearch" }, { p: 8080, s: "HTTP-alt" },
  ];
  portPool.forEach(p => { if (rnd() < 0.45) openPorts.push(p); });

  // Metric counts
  const m = {
    subdomains: numSubs,
    openPorts: openPorts.length,
    exposedAdmin: rand(0, 4),
    breachedCreds: rand(0, 250),
    cves: rand(0, 18),
    criticalCves: rand(0, 4),
    sslIssues: rand(0, 5),
    expiredCerts: rand(0, 2),
    emailIssues: rand(0, 3),
    dnsIssues: rand(0, 3),
    darkwebMentions: rand(0, 12),
    cloudMisconfigs: rand(0, 9),
  };

  // Category scores (0-100, higher = better)
  const cats = {
    surface: Math.max(0, 100 - m.subdomains * 2 - m.openPorts * 4 - m.exposedAdmin * 8),
    creds: Math.max(0, 100 - Math.min(80, m.breachedCreds / 3)),
    vulns: Math.max(0, 100 - m.cves * 3 - m.criticalCves * 8),
    ssl: Math.max(0, 100 - m.sslIssues * 10 - m.expiredCerts * 20),
    email: Math.max(0, 100 - m.emailIssues * 25),
    dns: Math.max(0, 100 - m.dnsIssues * 20),
    darkweb: Math.max(0, 100 - m.darkwebMentions * 5),
    cloud: Math.max(0, 100 - m.cloudMisconfigs * 8),
  };

  // Weighted overall score
  let totalWeight = 0, weightedSum = 0;
  RISK_CATEGORY_WEIGHTS.forEach(c => {
    weightedSum += cats[c.id] * c.weight;
    totalWeight += c.weight;
  });
  const score = Math.round(weightedSum / totalWeight);
  const grade = score >= 90 ? "A" : score >= 80 ? "B" : score >= 70 ? "C" : score >= 60 ? "D" : "F";

  // Findings
  const findings = [];
  if (m.exposedAdmin > 0) findings.push({ sev: "Critical", cat: "surface", title: `${m.exposedAdmin} paneles de administración expuestos`, desc: `Se han detectado panels accesibles públicamente en subdominios (admin.${domain}, portal.${domain}). Riesgo de brute-force y credential stuffing.`, rec: "Restringir por IP, añadir MFA y mover tras VPN/Zero Trust." });
  if (openPorts.some(p => p.p === 3389)) findings.push({ sev: "Critical", cat: "surface", title: "RDP (3389) expuesto a Internet", desc: "Puerto 3389 accesible desde Internet, vector primario de ransomware según CISA.", rec: "Cerrar puerto, usar Bastion host o Azure Bastion, aplicar NLA." });
  if (openPorts.some(p => [3306, 5432, 27017, 6379, 9200].includes(p.p))) findings.push({ sev: "Critical", cat: "surface", title: "Bases de datos expuestas públicamente", desc: "Servicios de BBDD accesibles desde Internet sin justificación.", rec: "Bloquear en firewall, mover a subnet privada, habilitar autenticación fuerte." });
  if (m.breachedCreds > 100) findings.push({ sev: "Critical", cat: "creds", title: `${m.breachedCreds} credenciales corporativas en dark web`, desc: `Emails @${domain} encontrados en dumps recientes (combolists, infostealers).`, rec: "Forzar reset masivo, activar MFA obligatorio, monitorización continua de credential leaks." });
  else if (m.breachedCreds > 20) findings.push({ sev: "High", cat: "creds", title: `${m.breachedCreds} credenciales filtradas detectadas`, desc: "Credenciales históricas expuestas en brechas públicas.", rec: "Notificar usuarios afectados y forzar rotación." });
  if (m.criticalCves > 0) findings.push({ sev: "Critical", cat: "vulns", title: `${m.criticalCves} CVEs críticos (CVSS ≥ 9.0) en servicios expuestos`, desc: "Vulnerabilidades con exploit público activo afectan a tu superficie externa.", rec: "Aplicar parches en ventana de emergencia <72h según ENISA." });
  if (m.cves > 0) findings.push({ sev: "High", cat: "vulns", title: `${m.cves} vulnerabilidades medias/altas detectadas`, desc: "Servicios con versiones vulnerables.", rec: "Priorizar según KEV de CISA y contexto de negocio." });
  if (m.expiredCerts > 0) findings.push({ sev: "High", cat: "ssl", title: `${m.expiredCerts} certificados SSL caducados`, desc: "Certificados expirados o próximos a expirar.", rec: "Renovar y automatizar con Let's Encrypt/ACME." });
  if (m.sslIssues > 0) findings.push({ sev: "Medium", cat: "ssl", title: `${m.sslIssues} problemas de configuración TLS`, desc: "Protocolos débiles (TLS 1.0/1.1), cifrados inseguros o cadenas incompletas.", rec: "Configurar TLS 1.2+ y cipher suites de Mozilla modern." });
  if (m.emailIssues > 0) findings.push({ sev: "High", cat: "email", title: "SPF/DKIM/DMARC incompletos o mal configurados", desc: "Posibilidad de email spoofing y suplantación del dominio corporativo.", rec: "Configurar SPF estricto, DKIM 2048-bit y DMARC p=reject tras fase p=quarantine." });
  if (m.dnsIssues > 0) findings.push({ sev: "Medium", cat: "dns", title: "Configuración DNS mejorable", desc: "Ausencia de CAA, DNSSEC no habilitado o registros residuales.", rec: "Habilitar DNSSEC, añadir registro CAA y limpiar entradas huérfanas." });
  if (m.darkwebMentions > 3) findings.push({ sev: "High", cat: "darkweb", title: `${m.darkwebMentions} menciones en foros dark web`, desc: `La marca "${company}" aparece en foros underground: ransomware blogs, initial access brokers, combolists.`, rec: "Activar monitorización 24/7, preparar playbook de crisis y comunicación." });
  if (m.cloudMisconfigs > 0) findings.push({ sev: "High", cat: "cloud", title: `${m.cloudMisconfigs} misconfiguraciones cloud`, desc: "Buckets S3 públicos, Security Groups abiertos, IAM con permisos excesivos.", rec: "Ejecutar CSPM (Prisma, Wiz) y aplicar CIS Benchmarks." });

  // Compliance scores
  const compliance = {};
  COMPLIANCE_FRAMEWORKS.forEach(f => {
    compliance[f.id] = Math.max(0, Math.min(100, score + rand(-12, 8)));
  });

  // Historical simulated trend (last 6 scans)
  const history = [];
  for (let i = 6; i >= 1; i--) {
    history.push({
      date: new Date(Date.now() - i * 30 * 86400000).toISOString(),
      score: Math.max(30, Math.min(100, score + rand(-15, 15))),
    });
  }

  return {
    id: `AST-${Date.now()}`,
    domain, company, sector,
    scanDate: new Date().toISOString(),
    score, grade, metrics: m, categoryScores: cats,
    subdomains, openPorts, findings, compliance, history,
  };
}

// ---- ASSET LIST ----
function AssetListView({ assets, onNew, onOpen, onDelete, threats }) {
  const { t } = useT();
  return (
    <div className="space-y-5">
      {/* Hero */}
      <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-red-50 via-slate-50 to-purple-50 p-6 md:p-8 border border-[var(--border)]">
        <div className="absolute top-0 right-0 w-96 h-96 bg-red-500/10 rounded-full blur-3xl -translate-y-1/2 translate-x-1/2" />
        <div className="relative flex items-start justify-between flex-wrap gap-4">
          <div className="max-w-xl">
            <div className="inline-block text-xs font-semibold px-3 py-1 rounded-full bg-red-500/20 text-red-700 mb-3">
              ATTACK SURFACE MANAGEMENT · EARLY WARNING
            </div>
            <h1 className="text-2xl md:text-3xl font-bold mb-2 leading-tight">
              Hack Risk Score<br />
              <span className="bg-gradient-to-r from-red-400 to-orange-400 bg-clip-text text-transparent">Piensa como un atacante</span>
            </h1>
            <p className="text-sm text-slate-700 mb-4">
              Descubrimos tus activos expuestos, credenciales filtradas, vulnerabilidades, menciones en dark web y
              problemas de configuración. Te damos un score 0-100, grade A-F, mapeo a frameworks y remediación priorizada.
            </p>
            <button onClick={onNew}
              className="px-5 py-2.5 bg-gradient-to-r from-red-500 to-orange-500 hover:from-red-400 hover:to-orange-400 rounded-lg font-semibold text-sm flex items-center gap-2">
              <Plus className="w-4 h-4" /> Analizar nuevo activo
            </button>
          </div>
          <div className="grid grid-cols-2 gap-2 text-xs">
            {[
              { n: "8", l: "categorías" },
              { n: "0-100", l: "score" },
              { n: "5", l: "frameworks" },
              { n: "24/7", l: "monitoring" },
            ].map((s, i) => (
              <div key={i} className="bg-[var(--surface-2)]/80 rounded px-3 py-2 border border-[var(--border)] min-w-[90px]">
                <div className="text-xl font-bold text-red-400">{s.n}</div>
                <div className="text-slate-800">{s.l}</div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Assets list */}
      <div>
        <div className="flex items-center justify-between mb-3">
          <h2 className="text-lg font-bold">Activos monitorizados ({assets.length})</h2>
          <button onClick={onNew} className="text-xs px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 rounded flex items-center gap-1">
            <Plus className="w-3.5 h-3.5" /> Nuevo scan
          </button>
        </div>
        {assets.length === 0 ? (
          <div className="p-10 text-center bg-[var(--surface-2)] rounded-xl border border-[var(--border)] border-dashed">
            <Target className="w-10 h-10 mx-auto mb-2 text-slate-600" />
            <p className="text-sm text-slate-800">Sin activos analizados todavía.</p>
            <p className="text-xs text-slate-800 font-medium font-medium mt-1">Pulsa "Analizar nuevo activo" para empezar un scan.</p>
          </div>
        ) : (
          <div className="grid md:grid-cols-2 gap-3">
            {assets.map(a => (
              <div key={a.id} className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)] hover:border-cyan-500/40 relative group">
                <button onClick={() => onDelete(a.id)} className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 text-slate-700 hover:text-red-400 transition">
                  <X className="w-4 h-4" />
                </button>
                <button onClick={() => onOpen(a)} className="w-full text-left">
                  <div className="flex items-start gap-3">
                    <ScoreBadge score={a.score} grade={a.grade} size="md" />
                    <div className="flex-1 min-w-0 pr-5">
                      <div className="font-semibold truncate">{a.company}</div>
                      <div className="text-xs font-mono text-cyan-400 truncate">{a.domain}</div>
                      <div className="text-[11px] text-slate-700 mt-1">{a.sector} · {new Date(a.scanDate).toLocaleDateString()}</div>
                      <div className="flex items-center gap-2 mt-2 text-[11px]">
                        <span className="text-red-400">{a.findings.filter(f => f.sev === "Critical").length} críticos</span>
                        <span className="text-orange-400">{a.findings.filter(f => f.sev === "High").length} altos</span>
                        <span className="text-slate-700">{a.metrics.subdomains} subdominios</span>
                      </div>
                    </div>
                  </div>
                </button>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}

// ---- Score badge ----
function ScoreBadge({ score, grade, size = "lg" }) {
  const color = score >= 90 ? "#10b981" : score >= 80 ? "#84cc16" : score >= 70 ? "#eab308" : score >= 60 ? "#f97316" : "#dc2626";
  const dim = size === "lg" ? 120 : size === "md" ? 72 : 50;
  const stroke = size === "lg" ? 10 : 7;
  const r = (dim - stroke) / 2;
  const c = 2 * Math.PI * r;
  const offset = c - (score / 100) * c;
  return (
    <div className="relative flex-shrink-0" style={{ width: dim, height: dim }}>
      <svg width={dim} height={dim} className="-rotate-90">
        <circle cx={dim / 2} cy={dim / 2} r={r} stroke="#1e293b" strokeWidth={stroke} fill="none" />
        <circle cx={dim / 2} cy={dim / 2} r={r} stroke={color} strokeWidth={stroke} fill="none"
          strokeDasharray={c} strokeDashoffset={offset} strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 1s" }} />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center">
        <div className={`font-bold ${size === "lg" ? "text-3xl" : size === "md" ? "text-xl" : "text-base"}`} style={{ color }}>{score}</div>
        <div className={`${size === "lg" ? "text-sm" : "text-[11px]"} font-semibold`} style={{ color }}>Grade {grade}</div>
      </div>
    </div>
  );
}

// ---- SCAN FORM ----
function ScanFormView({ onStart, onCancel }) {
  const { t } = useT();
  const SECTOR_OPTIONS = getSectorOptions(t);
  const [domain, setDomain] = useState("");
  const [company, setCompany] = useState("");
  const [sector, setSector] = useState("");
  const [err, setErr] = useState("");

  const submit = () => {
    setErr("");
    if (!domain || !company || !sector) { setErr(t("completeFields")); return; }
    if (!/^[a-z0-9.-]+\.[a-z]{2,}$/i.test(domain)) { setErr(t("invalidDomain")); return; }
    onStart(domain.toLowerCase().trim(), company.trim(), sector);
  };

  return (
    <div className="max-w-xl mx-auto bg-[var(--surface-1)] rounded-2xl border border-[var(--border-strong)] p-6 md:p-8 shadow-lg">
      <button onClick={onCancel} className="text-sm font-semibold text-slate-700 hover:text-slate-900 mb-4 inline-flex items-center gap-1">
        ← {t("back")}
      </button>
      <h2 className="text-xl font-bold mb-1.5 flex items-center gap-2 text-slate-900">
        <Radar className="w-5 h-5 text-cyan-700" /> {t("riskScanFormTitle")}
      </h2>
      <p className="text-sm text-slate-700 font-medium mb-6">{t("riskScanFormSubtitle")}</p>
      <div className="space-y-4">
        <Input label={t("riskScanFormDomain") + " *"} value={domain} onChange={setDomain} />
        <Input label={t("riskScanFormCompany") + " *"} value={company} onChange={setCompany} />
        <div>
          <label className="block text-sm font-semibold text-slate-900 mb-1.5">{t("riskScanFormSector")} *</label>
          <select value={sector} onChange={e => setSector(e.target.value)}
            className="w-full px-3 py-2.5 bg-[var(--surface-0)] border border-[var(--border-strong)] rounded-lg text-sm text-slate-900 font-medium focus:outline-none focus:border-cyan-500 focus:ring-2 focus:ring-cyan-500/20">
            <option value="">{t("reportsFormSelectSector")}</option>
            {SECTOR_OPTIONS.map(s => <option key={s} value={s}>{s}</option>)}
          </select>
        </div>
        {err && <div className="text-xs text-red-700 bg-red-50 border border-red-300 rounded-lg p-2.5 font-semibold">{err}</div>}
        <div className="pt-2 text-xs text-slate-700 font-medium leading-relaxed">
          {t("riskScanIncludes")}
        </div>
        <button onClick={submit}
          className="w-full py-3 bg-gradient-to-r from-cyan-400 to-cyan-500 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] rounded-lg font-bold text-sm text-slate-900 transition uppercase tracking-wider">
          {t("riskScanFormStart")}
        </button>
      </div>
    </div>
  );
}

// ---- SCANNING ----
function ScanningView({ progress }) {
  const { t } = useT();
  return (
    <div className="max-w-lg mx-auto bg-[var(--surface-1)] rounded-2xl border border-[var(--border-strong)] p-8 text-center shadow-lg">
      <div className="w-20 h-20 mx-auto mb-4 rounded-full bg-gradient-to-br from-cyan-400 to-blue-600 flex items-center justify-center animate-pulse shadow-lg shadow-cyan-500/40">
        <Radar className="w-10 h-10 text-slate-900" strokeWidth={2.5} />
      </div>
      <h3 className="text-lg font-bold mb-2 text-slate-900">{t("riskScanningTitle")}</h3>
      <p className="text-sm font-semibold text-slate-700 mb-4">{t("step")} {progress.step} {t("of")} 8</p>
      <div className="w-full bg-[var(--surface-3)] rounded-full h-2.5 mb-4 overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-400 to-cyan-500 transition-all"
          style={{ width: `${(progress.step / 8) * 100}%` }} />
      </div>
      <p className="text-sm font-semibold text-cyan-700 flex items-center justify-center gap-2">
        <RefreshCw className="w-4 h-4 animate-spin" /> {progress.msg}
      </p>
    </div>
  );
}

// ---- ASSET DETAIL ----
function AssetDetailView({ asset, onBack, onRescan, onShare }) {
  const { t } = useT();
  const RISK_CATEGORIES = getRiskCategories(t);
  const [sevFilter, setSevFilter] = useState("all");
  const filteredFindings = sevFilter === "all" ? asset.findings : asset.findings.filter(f => f.sev === sevFilter);

  return (
    <div className="space-y-5">
      {/* Header */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <button onClick={onBack} className="text-xs text-slate-800 hover:text-slate-900">← Volver a listado</button>
        <div className="flex gap-2">
          <button onClick={onRescan} className="text-xs px-3 py-1.5 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded flex items-center gap-1">
            <RefreshCw className="w-3 h-3" /> Re-escanear
          </button>
          <button onClick={onShare} className="text-xs px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 rounded flex items-center gap-1">
            <Share2 className="w-3 h-3" /> Compartir reporte
          </button>
        </div>
      </div>

      {/* Score hero */}
      <div className="bg-gradient-to-br from-[var(--surface-1)] to-[var(--surface-2)] rounded-2xl p-6 border border-[var(--border)] flex flex-wrap items-center gap-6">
        <ScoreBadge score={asset.score} grade={asset.grade} size="lg" />
        <div className="flex-1 min-w-[200px]">
          <h2 className="text-2xl font-bold">{asset.company}</h2>
          <div className="text-sm font-mono text-cyan-400">{asset.domain}</div>
          <div className="text-xs text-slate-800 mt-1">{asset.sector} · Último scan: {new Date(asset.scanDate).toLocaleString()}</div>
          <div className="flex flex-wrap gap-2 mt-3 text-xs">
            <Stat label="Críticos" value={asset.findings.filter(f => f.sev === "Critical").length} color="#dc2626" />
            <Stat label="Altos" value={asset.findings.filter(f => f.sev === "High").length} color="#ea580c" />
            <Stat label="Medios" value={asset.findings.filter(f => f.sev === "Medium").length} color="#ca8a04" />
            <Stat label="Subdominios" value={asset.metrics.subdomains} color="#06b6d4" />
            <Stat label="Puertos abiertos" value={asset.metrics.openPorts} color="#8b5cf6" />
          </div>
        </div>
      </div>

      {/* Category scores */}
      <div>
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><Gauge className="w-4 h-4 text-cyan-400" />Puntuación por categoría</h3>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
          {RISK_CATEGORIES.map(c => {
            const Icon = c.icon;
            const s = asset.categoryScores[c.id];
            const color = s >= 80 ? "#10b981" : s >= 60 ? "#eab308" : s >= 40 ? "#f97316" : "#dc2626";
            return (
              <div key={c.id} className="p-3 bg-[var(--surface-2)] rounded-lg border border-[var(--border)]">
                <div className="flex items-center justify-between mb-1">
                  <Icon className="w-4 h-4" style={{ color }} />
                  <span className="text-xs font-bold" style={{ color }}>{s}</span>
                </div>
                <div className="text-xs font-semibold">{c.name}</div>
                <div className="w-full bg-[var(--surface-3)] rounded-full h-1 mt-1.5 overflow-hidden">
                  <div className="h-full" style={{ width: `${s}%`, background: color }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Trend chart */}
      <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><TrendingUp className="w-4 h-4 text-cyan-400" />Evolución histórica del score</h3>
        <ResponsiveContainer width="100%" height={180}>
          <LineChart data={[...asset.history, { date: asset.scanDate, score: asset.score }].map(h => ({ ...h, label: new Date(h.date).toLocaleDateString() }))}>
            <CartesianGrid stroke="#1e293b" />
            <XAxis dataKey="label" stroke="#64748b" fontSize={10} />
            <YAxis domain={[0, 100]} stroke="#64748b" fontSize={10} />
            <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid #334155" }} />
            <Line type="monotone" dataKey="score" stroke="#06b6d4" strokeWidth={2} dot={{ r: 4 }} />
          </LineChart>
        </ResponsiveContainer>
      </div>

      {/* Findings */}
      <div>
        <div className="flex items-center justify-between mb-3 flex-wrap gap-2">
          <h3 className="text-sm font-semibold flex items-center gap-2"><ShieldAlert className="w-4 h-4 text-red-400" />
            Hallazgos ({asset.findings.length})
          </h3>
          <div className="flex gap-1">
            {["all", "Critical", "High", "Medium"].map(s => (
              <button key={s} onClick={() => setSevFilter(s)}
                className={`text-[11px] px-2 py-1 rounded ${sevFilter === s ? "bg-cyan-600" : "bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)]"}`}>
                {s === "all" ? "Todos" : s}
              </button>
            ))}
          </div>
        </div>
        <div className="space-y-2">
          {filteredFindings.length === 0 && (
            <div className="p-4 text-center text-xs text-slate-800 font-medium bg-[var(--surface-2)] rounded border border-[var(--border)]">Sin hallazgos en esta severidad</div>
          )}
          {filteredFindings.map((f, i) => {
            const color = f.sev === "Critical" ? "#dc2626" : f.sev === "High" ? "#ea580c" : f.sev === "Medium" ? "#ca8a04" : "#16a34a";
            return (
              <div key={i} className="p-3 bg-[var(--surface-2)] rounded-lg border-l-4 border-[var(--border)]" style={{ borderLeftColor: color }}>
                <div className="flex items-start justify-between gap-2 mb-1">
                  <h4 className="font-semibold text-sm">{f.title}</h4>
                  <span className="text-[11px] px-2 py-0.5 rounded font-semibold flex-shrink-0" style={{ background: color + "33", color }}>
                    {f.sev}
                  </span>
                </div>
                <p className="text-xs text-slate-800 mb-2">{f.desc}</p>
                <div className="text-xs flex items-start gap-1.5 text-cyan-700 bg-cyan-900/20 rounded p-2">
                  <ShieldCheck className="w-3 h-3 mt-0.5 flex-shrink-0" />
                  <span><strong>Remediación:</strong> {f.rec}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Compliance mapping */}
      <div>
        <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><Award className="w-4 h-4 text-cyan-400" />Compliance mapping</h3>
        <div className="grid grid-cols-2 md:grid-cols-5 gap-2">
          {COMPLIANCE_FRAMEWORKS.map(f => {
            const s = asset.compliance[f.id];
            return (
              <div key={f.id} className={`p-3 rounded-lg bg-gradient-to-br ${f.color} text-slate-900`}>
                <div className="text-xs opacity-90">{f.name}</div>
                <div className="text-2xl font-bold mt-1">{s}<span className="text-xs opacity-70">%</span></div>
                <div className="w-full bg-white/20 rounded-full h-1 mt-1">
                  <div className="h-full bg-white rounded-full" style={{ width: `${s}%` }} />
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Attack surface details */}
      <div className="grid md:grid-cols-2 gap-3">
        <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><Link2 className="w-4 h-4 text-cyan-400" />
            Subdominios descubiertos ({asset.subdomains.length})
          </h3>
          <div className="max-h-48 overflow-y-auto space-y-1">
            {asset.subdomains.map((s, i) => (
              <div key={i} className="text-xs font-mono text-slate-700 bg-[var(--surface-0)] px-2 py-1 rounded">{s}</div>
            ))}
          </div>
        </div>
        <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
          <h3 className="text-sm font-semibold mb-2 flex items-center gap-2"><Wifi className="w-4 h-4 text-cyan-400" />
            Puertos abiertos ({asset.openPorts.length})
          </h3>
          <div className="max-h-48 overflow-y-auto space-y-1">
            {asset.openPorts.map((p, i) => {
              const risky = [22, 21, 3389, 3306, 5432, 27017, 6379, 9200].includes(p.p);
              return (
                <div key={i} className="text-xs flex items-center justify-between bg-[var(--surface-0)] px-2 py-1 rounded">
                  <span className="font-mono">{p.p}/tcp</span>
                  <span className={risky ? "text-red-400" : "text-slate-800"}>{p.s}</span>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

function Stat({ label, value, color }) {
  return (
    <div className="flex items-center gap-1.5 px-2 py-1 rounded bg-[var(--surface-2)] border border-[var(--border)]">
      <span className="w-1.5 h-1.5 rounded-full" style={{ background: color }} />
      <span className="text-slate-800">{label}:</span>
      <span className="font-bold" style={{ color }}>{value}</span>
    </div>
  );
}

// ---- SHARE REPORT MODAL ----
function ShareReportModal({ asset, onClose }) {
  const { t } = useT();
  const RISK_CATEGORIES = getRiskCategories(t);
  const [copied, setCopied] = useState(false);
  const shareUrl = `https://cyberwatch.io/report/${asset.id}?token=${btoa(asset.domain).slice(0, 16)}`;

  const copy = () => {
    navigator.clipboard?.writeText(shareUrl);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const download = () => {
    const text = `HACK RISK REPORT\n${"=".repeat(16)}\n\nEmpresa: ${asset.company}\nDominio: ${asset.domain}\nSector: ${asset.sector}\nFecha: ${new Date(asset.scanDate).toLocaleString()}\n\nSCORE GLOBAL: ${asset.score}/100 (Grade ${asset.grade})\n\nRESUMEN:\n- Críticos: ${asset.findings.filter(f => f.sev === "Critical").length}\n- Altos: ${asset.findings.filter(f => f.sev === "High").length}\n- Medios: ${asset.findings.filter(f => f.sev === "Medium").length}\n- Subdominios: ${asset.metrics.subdomains}\n- Puertos abiertos: ${asset.metrics.openPorts}\n- Credenciales filtradas: ${asset.metrics.breachedCreds}\n- CVEs detectados: ${asset.metrics.cves}\n\nPUNTUACIÓN POR CATEGORÍA:\n${RISK_CATEGORIES.map(c => `- ${c.name}: ${asset.categoryScores[c.id]}/100`).join("\n")}\n\nCOMPLIANCE:\n${COMPLIANCE_FRAMEWORKS.map(f => `- ${f.name}: ${asset.compliance[f.id]}%`).join("\n")}\n\nHALLAZGOS DETALLADOS:\n${asset.findings.map((f, i) => `\n${i + 1}. [${f.sev}] ${f.title}\n   ${f.desc}\n   → Remediación: ${f.rec}`).join("\n")}\n\n---\nGenerado por CyberWatch\n`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url;
    a.download = `hackrisk-${asset.domain}-${Date.now()}.txt`;
    a.click();
    URL.revokeObjectURL(url);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-xl max-w-md w-full p-5" onClick={e => e.stopPropagation()}>
        <div className="flex items-start justify-between mb-4">
          <h3 className="text-lg font-bold flex items-center gap-2"><Share2 className="w-5 h-5 text-cyan-400" /> Compartir reporte</h3>
          <button onClick={onClose} className="text-slate-700 hover:text-slate-900"><X className="w-5 h-5" /></button>
        </div>
        <p className="text-sm text-slate-800 mb-4">Comparte el Hack Risk Report de <strong className="text-slate-900">{asset.company}</strong>.</p>
        <div className="space-y-3">
          <div>
            <label className="text-xs text-slate-800 font-medium">Enlace privado (válido 7 días)</label>
            <div className="flex gap-2 mt-1">
              <input readOnly value={shareUrl} className="flex-1 px-2 py-1.5 bg-[var(--surface-3)] border border-[var(--border-strong)] rounded text-xs font-mono" />
              <button onClick={copy} className="text-xs px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 rounded">
                {copied ? "✓" : "Copiar"}
              </button>
            </div>
          </div>
          <button onClick={download} className="w-full py-2.5 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded text-sm flex items-center justify-center gap-2">
            <Download className="w-4 h-4" /> Descargar reporte completo (.txt)
          </button>
          <div className="text-xs text-slate-800 font-medium pt-2 border-t border-[var(--border)]">
            En producción también se enviará por email a los destinatarios con PDF firmado digitalmente.
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// VLM TAB - Vulnerability Lifecycle Management
// Metodología: Descubrir → Priorizar → Evaluar → Reportar → Remediar → Verificar
// Supera a Tenable/InsightVM/ManageEngine con IA (Claude) para priorización y remediación
// ============================================================
const getVlmLifecycle = (t) => [
  { id: "discover", label: t("vlmStageDiscover"), icon: Search, desc: t("vlmDiscoverDesc") },
  { id: "prioritize", label: t("vlmStagePrioritize"), icon: Gauge, desc: t("vlmPrioritizeDesc") },
  { id: "assess", label: t("vlmStageEvaluate"), icon: Target, desc: t("vlmEvaluateDesc") },
  { id: "report", label: t("vlmStageReport"), icon: FileText, desc: t("vlmReportDesc") },
  { id: "remediate", label: t("vlmStageRemediate"), icon: ShieldCheck, desc: t("vlmRemediateDesc") },
  { id: "verify", label: t("vlmStageVerify"), icon: CheckCircle, desc: t("vlmVerifyDesc") },
];

const VULN_STATUSES = ["Open", "In Progress", "Fixed", "Verified", "False Positive", "Risk Accepted"];
const STATUS_COLORS = {
  "Open": "#dc2626", "In Progress": "#eab308", "Fixed": "#06b6d4",
  "Verified": "#10b981", "False Positive": "#64748b", "Risk Accepted": "#8b5cf6"
};

const VULN_TEMPLATES = [
  { cve: "CVE-2024-21887", title: "Ivanti Connect Secure Command Injection", cvss: 9.1, vector: "Network", software: "Ivanti Connect Secure", age: 120 },
  { cve: "CVE-2024-47575", title: "FortiManager Missing Authentication", cvss: 9.8, vector: "Network", software: "FortiManager 7.x", age: 45 },
  { cve: "CVE-2024-3400", title: "PAN-OS Command Injection (GlobalProtect)", cvss: 10.0, vector: "Network", software: "Palo Alto PAN-OS", age: 200 },
  { cve: "CVE-2023-34362", title: "MOVEit Transfer SQL Injection", cvss: 9.8, vector: "Network", software: "MOVEit Transfer", age: 600 },
  { cve: "CVE-2024-6387", title: "regreSSHion - OpenSSH RCE", cvss: 8.1, vector: "Network", software: "OpenSSH < 9.8", age: 180 },
  { cve: "CVE-2023-4911", title: "Looney Tunables - glibc LPE", cvss: 7.8, vector: "Local", software: "glibc", age: 400 },
  { cve: "CVE-2024-38812", title: "VMware vCenter Heap Overflow", cvss: 9.8, vector: "Network", software: "VMware vCenter", age: 60 },
  { cve: "CVE-2024-4577", title: "PHP-CGI Argument Injection (Windows)", cvss: 9.8, vector: "Network", software: "PHP 8.x CGI", age: 150 },
  { cve: "CVE-2024-21626", title: "runc Container Escape (Leaky Vessels)", cvss: 8.6, vector: "Local", software: "runc < 1.1.12", age: 300 },
  { cve: "CVE-2024-23897", title: "Jenkins CLI Arbitrary File Read", cvss: 9.8, vector: "Network", software: "Jenkins < 2.442", age: 280 },
  { cve: "CVE-2023-44487", title: "HTTP/2 Rapid Reset", cvss: 7.5, vector: "Network", software: "Nginx / HAProxy", age: 500 },
  { cve: "CVE-2024-27198", title: "JetBrains TeamCity Auth Bypass", cvss: 9.8, vector: "Network", software: "TeamCity < 2023.11.4", age: 320 },
];

const ASSET_TEMPLATES = [
  { name: "srv-db-prod-01", type: "Server", os: "Ubuntu 22.04", criticality: "Critical", env: "Production", ip: "10.0.12.45" },
  { name: "srv-web-prod-02", type: "Server", os: "RHEL 9", criticality: "Critical", env: "Production", ip: "10.0.10.22" },
  { name: "fw-perimeter", type: "Network", os: "PAN-OS 11.1", criticality: "Critical", env: "Production", ip: "10.0.0.1" },
  { name: "k8s-cluster-prod", type: "Cloud", os: "EKS 1.28", criticality: "High", env: "Production", ip: "cluster.internal" },
  { name: "vpn-gateway-01", type: "Network", os: "Ivanti ICS", criticality: "Critical", env: "Production", ip: "10.0.0.5" },
  { name: "jenkins-ci", type: "Server", os: "Ubuntu 22.04", criticality: "High", env: "DevOps", ip: "10.0.20.10" },
  { name: "ws-finance-15", type: "Endpoint", os: "Windows 11", criticality: "Medium", env: "Corporate", ip: "10.0.50.115" },
  { name: "srv-backup-01", type: "Server", os: "Debian 12", criticality: "High", env: "Production", ip: "10.0.15.30" },
  { name: "mail-exchange", type: "Server", os: "Exchange 2019", criticality: "Critical", env: "Production", ip: "10.0.11.20" },
  { name: "s3-data-lake", type: "Cloud", os: "AWS S3", criticality: "High", env: "Production", ip: "s3.eu-west-1" },
];

function seedVulnerabilities() {
  const vulns = [];
  const now = Date.now();
  const owners = ["sec-team", "infra-team", "devops", "app-team", "network-team"];
  for (let i = 0; i < 28; i++) {
    const t = VULN_TEMPLATES[Math.floor(Math.random() * VULN_TEMPLATES.length)];
    const asset = ASSET_TEMPLATES[Math.floor(Math.random() * ASSET_TEMPLATES.length)];
    const sev = t.cvss >= 9 ? "Critical" : t.cvss >= 7 ? "High" : t.cvss >= 4 ? "Medium" : "Low";
    const ageDays = Math.floor(Math.random() * 180);
    const status = VULN_STATUSES[Math.floor(Math.random() * VULN_STATUSES.length)];
    // SLA: Critical=7d, High=30d, Medium=60d, Low=90d
    const slaDays = sev === "Critical" ? 7 : sev === "High" ? 30 : sev === "Medium" ? 60 : 90;
    // contextual risk (IA): baseline CVSS + exposure + criticality
    const critBonus = asset.criticality === "Critical" ? 1.2 : asset.criticality === "High" ? 1.1 : 1.0;
    const envBonus = asset.env === "Production" ? 1.1 : 1.0;
    const realRisk = Math.min(10, t.cvss * critBonus * envBonus).toFixed(1);
    vulns.push({
      id: `VLN-${String(i + 1).padStart(4, "0")}`,
      cve: t.cve, title: t.title, cvss: t.cvss, realRisk: parseFloat(realRisk),
      severity: sev, vector: t.vector, software: t.software,
      assetName: asset.name, assetType: asset.type, assetIp: asset.ip,
      criticality: asset.criticality, env: asset.env,
      status, owner: owners[Math.floor(Math.random() * owners.length)],
      discoveredAt: new Date(now - ageDays * 86400000).toISOString(),
      slaDays, slaDeadline: new Date(now + (slaDays - ageDays) * 86400000).toISOString(),
      ageDays, kev: Math.random() < 0.3, exploitable: Math.random() < 0.4,
    });
  }
  return vulns;
}

function seedScans() {
  const scans = [];
  const types = ["Infraestructura", "Web/App (OWASP)", "Cloud (AWS/Azure)", "Autenticado", "DAST"];
  const now = Date.now();
  for (let i = 0; i < 6; i++) {
    const daysAgo = i * 7;
    scans.push({
      id: `SCN-${i + 1}`,
      name: `Ciclo ${i + 1} - ${types[i % types.length]}`,
      type: types[i % types.length],
      date: new Date(now - daysAgo * 86400000).toISOString(),
      scheduled: i % 2 === 0,
      assetsScanned: 45 + Math.floor(Math.random() * 20),
      vulnsFound: { critical: 2 + Math.floor(Math.random() * 4), high: 5 + Math.floor(Math.random() * 8), medium: 10 + Math.floor(Math.random() * 15), low: 15 + Math.floor(Math.random() * 20) },
      status: "completed",
    });
  }
  return scans.reverse();
}

function VlmTab() {
  const { t } = useT();
  const VLM_LIFECYCLE = getVlmLifecycle(t);
  const [view, setView] = useState("overview");
  const [vulns, setVulns] = useState([]);
  const [scans, setScans] = useState([]);
  const [selectedVuln, setSelectedVuln] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      let v = [], s = [];
      try { const r = await window.storage.get("vlm:vulns"); if (r?.value) v = JSON.parse(r.value); } catch (e) {}
      try { const r = await window.storage.get("vlm:scans"); if (r?.value) s = JSON.parse(r.value); } catch (e) {}
      if (v.length === 0) { v = seedVulnerabilities(); await window.storage.set("vlm:vulns", JSON.stringify(v)).catch(() => {}); }
      if (s.length === 0) { s = seedScans(); await window.storage.set("vlm:scans", JSON.stringify(s)).catch(() => {}); }
      setVulns(v); setScans(s); setLoading(false);
    })();
  }, []);

  const updateVuln = async (id, patch) => {
    const next = vulns.map(v => v.id === id ? { ...v, ...patch } : v);
    setVulns(next);
    try { await window.storage.set("vlm:vulns", JSON.stringify(next)); } catch (e) {}
    if (selectedVuln?.id === id) setSelectedVuln({ ...selectedVuln, ...patch });
  };

  const runNewScan = async () => {
    const newVulns = seedVulnerabilities().slice(0, 5).map(v => ({ ...v, id: `VLN-${Date.now()}-${Math.floor(Math.random() * 100)}`, status: "Open", discoveredAt: new Date().toISOString(), ageDays: 0 }));
    const nextVulns = [...newVulns, ...vulns];
    const newScan = {
      id: `SCN-${Date.now()}`, name: `Scan bajo demanda`, type: "Infraestructura",
      date: new Date().toISOString(), scheduled: false, assetsScanned: ASSET_TEMPLATES.length,
      vulnsFound: {
        critical: newVulns.filter(v => v.severity === "Critical").length,
        high: newVulns.filter(v => v.severity === "High").length,
        medium: newVulns.filter(v => v.severity === "Medium").length,
        low: newVulns.filter(v => v.severity === "Low").length,
      },
      status: "completed",
    };
    const nextScans = [newScan, ...scans];
    setVulns(nextVulns); setScans(nextScans);
    try {
      await window.storage.set("vlm:vulns", JSON.stringify(nextVulns));
      await window.storage.set("vlm:scans", JSON.stringify(nextScans));
    } catch (e) {}
  };

  if (loading) return <div className="p-10 text-center text-slate-700 text-sm">Cargando programa VLM...</div>;

  const stats = {
    total: vulns.length,
    critical: vulns.filter(v => v.severity === "Critical" && v.status === "Open").length,
    high: vulns.filter(v => v.severity === "High" && v.status === "Open").length,
    medium: vulns.filter(v => v.severity === "Medium" && v.status === "Open").length,
    low: vulns.filter(v => v.severity === "Low" && v.status === "Open").length,
    fixed: vulns.filter(v => v.status === "Verified" || v.status === "Fixed").length,
    kev: vulns.filter(v => v.kev && v.status === "Open").length,
    slaBreached: vulns.filter(v => v.status === "Open" && v.ageDays > v.slaDays).length,
  };

  return (
    <div className="space-y-5">
      {/* Lifecycle header */}
      <div className="bg-gradient-to-br from-indigo-50 via-slate-50 to-blue-50 rounded-2xl p-5 border border-[var(--border)]">
        <span className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 font-bold">{t("vlmHeroBadge")}</span>
        <h1 className="text-lg md:text-2xl font-bold mt-1 mb-1 text-slate-900">{t("vlmHeroTitle")}</h1>
        <p className="text-xs text-slate-800 mb-4 font-medium">{t("vlmHeroSubtitle")}</p>
        <div className="grid grid-cols-3 md:grid-cols-6 gap-1.5">
          {VLM_LIFECYCLE.map((p, i) => {
            const Icon = p.icon;
            return (
              <div key={p.id} className="bg-[var(--surface-2)] rounded-lg p-2 border border-[var(--border)] text-center">
                <div className="text-[11px] text-cyan-400 font-bold">{i + 1}</div>
                <Icon className="w-4 h-4 mx-auto my-1 text-cyan-400" />
                <div className="text-[11px] font-semibold">{p.label}</div>
              </div>
            );
          })}
        </div>
      </div>

      {/* Sub-nav */}
      <div className="flex gap-1 bg-[var(--surface-2)] p-1 rounded-lg border border-[var(--border)] overflow-x-auto">
        {[
          { id: "overview", label: "Overview" },
          { id: "vulns", label: `Vulnerabilidades (${stats.total})` },
          { id: "scans", label: "Escaneos" },
          { id: "remediation", label: "Remediación" },
          { id: "trends", label: "Tendencias" },
          { id: "deliverables", label: "Entregables" },
        ].map(v => (
          <button key={v.id} onClick={() => setView(v.id)}
            className={`px-3 py-1.5 text-xs rounded whitespace-nowrap ${view === v.id ? "bg-cyan-600 text-slate-900" : "text-slate-800 hover:text-slate-900"}`}>
            {v.label}
          </button>
        ))}
      </div>

      {view === "overview" && <VlmOverview stats={stats} vulns={vulns} scans={scans} onRunScan={runNewScan} />}
      {view === "vulns" && <VlmVulns vulns={vulns} onSelect={setSelectedVuln} />}
      {view === "scans" && <VlmScans scans={scans} onRunScan={runNewScan} />}
      {view === "remediation" && <VlmRemediation vulns={vulns} onSelect={setSelectedVuln} />}
      {view === "trends" && <VlmTrends scans={scans} vulns={vulns} />}
      {view === "deliverables" && <VlmDeliverables vulns={vulns} scans={scans} stats={stats} />}

      {selectedVuln && <VulnModal vuln={selectedVuln} onClose={() => setSelectedVuln(null)} onUpdate={(patch) => updateVuln(selectedVuln.id, patch)} />}
    </div>
  );
}

// ---- VLM Overview ----
function VlmOverview({ stats, vulns, scans, onRunScan }) {
  const recent = [...vulns].sort((a, b) => b.realRisk - a.realRisk).slice(0, 6);
  const fixed30 = vulns.filter(v => (v.status === "Verified" || v.status === "Fixed") && v.ageDays < 30).length;
  const mttr = vulns.filter(v => v.status === "Verified").reduce((acc, v) => acc + (v.slaDays || 30), 0) / Math.max(1, vulns.filter(v => v.status === "Verified").length);

  return (
    <div className="space-y-4">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
        {[
          { l: "Abiertas Críticas", v: stats.critical, c: "#dc2626", icon: Skull },
          { l: "Abiertas Altas", v: stats.high, c: "#ea580c", icon: AlertTriangle },
          { l: "SLA incumplidos", v: stats.slaBreached, c: "#f59e0b", icon: Calendar },
          { l: "En CISA KEV", v: stats.kev, c: "#ec4899", icon: Zap },
          { l: "Remediadas", v: stats.fixed, c: "#10b981", icon: CheckCircle },
          { l: "MTTR (días)", v: Math.round(mttr || 0), c: "#06b6d4", icon: Gauge },
          { l: "Fix 30d", v: fixed30, c: "#8b5cf6", icon: TrendingUp },
          { l: "Total", v: stats.total, c: "#64748b", icon: Database },
        ].map((k, i) => {
          const Icon = k.icon;
          return (
            <div key={i} className="p-3 bg-[var(--surface-2)] rounded-lg border border-[var(--border)]">
              <div className="flex items-center justify-between mb-1">
                <Icon className="w-4 h-4" style={{ color: k.c }} />
                <div className="text-xl font-bold" style={{ color: k.c }}>{k.v}</div>
              </div>
              <div className="text-xs text-slate-800">{k.l}</div>
            </div>
          );
        })}
      </div>

      <div className="flex gap-2 flex-wrap">
        <button onClick={onRunScan} className="px-4 py-2 bg-gradient-to-r from-cyan-500 to-blue-600 rounded text-sm font-semibold flex items-center gap-2">
          <Radar className="w-4 h-4" /> Lanzar escaneo bajo demanda
        </button>
      </div>

      <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
        <h3 className="text-sm font-semibold mb-3 flex items-center gap-2">
          <Zap className="w-4 h-4 text-yellow-400" /> Top 6 vulnerabilidades por Real Risk (IA contextual)
        </h3>
        <div className="space-y-2">
          {recent.map(v => {
            const color = STATUS_COLORS[v.status];
            const sevColor = v.severity === "Critical" ? "#dc2626" : v.severity === "High" ? "#ea580c" : v.severity === "Medium" ? "#ca8a04" : "#16a34a";
            return (
              <div key={v.id} className="flex items-center gap-3 text-xs">
                <div className="w-1 self-stretch rounded" style={{ background: sevColor }} />
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 flex-wrap">
                    <span className="font-mono text-cyan-400">{v.cve}</span>
                    <span className="truncate">{v.title}</span>
                    {v.kev && <span className="text-[11px] px-1.5 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300">KEV</span>}
                  </div>
                  <div className="text-[11px] text-slate-700 mt-0.5">{v.assetName} · {v.env} · owner {v.owner}</div>
                </div>
                <div className="text-right flex-shrink-0">
                  <div className="text-xs font-bold" style={{ color: sevColor }}>Real: {v.realRisk}</div>
                  <div className="text-[11px] text-slate-700">CVSS {v.cvss}</div>
                </div>
                <span className="text-[11px] px-1.5 py-0.5 rounded flex-shrink-0" style={{ background: color + "33", color }}>{v.status}</span>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// ---- VLM Vulns ----
function VlmVulns({ vulns, onSelect }) {
  const [severity, setSeverity] = useState("all");
  const [status, setStatus] = useState("Open");
  const [search, setSearch] = useState("");
  const filtered = vulns
    .filter(v => severity === "all" || v.severity === severity)
    .filter(v => status === "all" || v.status === status)
    .filter(v => !search || v.cve.toLowerCase().includes(search.toLowerCase()) || v.title.toLowerCase().includes(search.toLowerCase()) || v.assetName.includes(search))
    .sort((a, b) => b.realRisk - a.realRisk);

  return (
    <div className="space-y-3">
      <div className="flex gap-2 flex-wrap">
        <input value={search} onChange={e => setSearch(e.target.value)} placeholder="CVE, título, activo..."
          className="flex-1 min-w-[150px] px-3 py-1.5 bg-[var(--surface-2)] border border-[var(--border)] rounded text-xs text-slate-800 font-medium placeholder-slate-400 focus:outline-none focus:border-cyan-400" />
        <select value={severity} onChange={e => setSeverity(e.target.value)} className="px-2 py-1.5 bg-[var(--surface-2)] border border-[var(--border)] rounded text-xs">
          <option value="all">Todas las severidades</option>
          <option>Critical</option><option>High</option><option>Medium</option><option>Low</option>
        </select>
        <select value={status} onChange={e => setStatus(e.target.value)} className="px-2 py-1.5 bg-[var(--surface-2)] border border-[var(--border)] rounded text-xs">
          <option value="all">Todos los estados</option>
          {VULN_STATUSES.map(s => <option key={s}>{s}</option>)}
        </select>
      </div>

      <div className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full text-xs text-slate-700 font-medium">
            <thead className="bg-[var(--surface-3)] text-[11px] uppercase text-slate-800">
              <tr>
                <th className="px-2 py-2 text-left">CVE</th>
                <th className="px-2 py-2 text-left">Título</th>
                <th className="px-2 py-2 text-left">Activo</th>
                <th className="px-2 py-2 text-center">CVSS</th>
                <th className="px-2 py-2 text-center">Real Risk</th>
                <th className="px-2 py-2 text-center">Edad</th>
                <th className="px-2 py-2 text-center">SLA</th>
                <th className="px-2 py-2 text-center">Estado</th>
              </tr>
            </thead>
            <tbody className="divide-y divide-[var(--border)]">
              {filtered.slice(0, 100).map(v => {
                const slaBreached = v.ageDays > v.slaDays && v.status === "Open";
                const color = STATUS_COLORS[v.status];
                const sevColor = v.severity === "Critical" ? "#dc2626" : v.severity === "High" ? "#ea580c" : v.severity === "Medium" ? "#ca8a04" : "#16a34a";
                return (
                  <tr key={v.id} onClick={() => onSelect(v)} className="hover:bg-cyan-500/5 cursor-pointer">
                    <td className="px-2 py-2 font-mono text-cyan-400">
                      {v.cve}
                      {v.kev && <span className="ml-1 text-[11px] px-1 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300">KEV</span>}
                    </td>
                    <td className="px-2 py-2 max-w-[180px] truncate">{v.title}</td>
                    <td className="px-2 py-2">
                      <div className="font-mono text-[11px]">{v.assetName}</div>
                      <div className="text-[11px] text-slate-700">{v.env}</div>
                    </td>
                    <td className="px-2 py-2 text-center">
                      <span className="font-bold" style={{ color: sevColor }}>{v.cvss}</span>
                    </td>
                    <td className="px-2 py-2 text-center font-bold" style={{ color: sevColor }}>{v.realRisk}</td>
                    <td className="px-2 py-2 text-center">{v.ageDays}d</td>
                    <td className="px-2 py-2 text-center">
                      {slaBreached ? <span className="text-red-400 font-bold">¡{v.ageDays - v.slaDays}d!</span> : <span className="text-slate-700">{v.slaDays - v.ageDays}d</span>}
                    </td>
                    <td className="px-2 py-2 text-center">
                      <span className="text-[11px] px-2 py-0.5 rounded" style={{ background: color + "33", color }}>{v.status}</span>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}

// ---- VLM Scans (programados y bajo demanda) ----
function VlmScans({ scans, onRunScan }) {
  return (
    <div className="space-y-3">
      <div className="flex justify-between items-center flex-wrap gap-2">
        <h3 className="text-sm font-semibold">Escaneos programados y bajo demanda</h3>
        <button onClick={onRunScan} className="text-xs px-3 py-1.5 bg-cyan-600 hover:bg-cyan-500 rounded flex items-center gap-1">
          <Plus className="w-3.5 h-3.5" /> Nuevo scan
        </button>
      </div>
      <div className="space-y-2">
        {scans.map(s => (
          <div key={s.id} className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
            <div className="flex items-start justify-between flex-wrap gap-2">
              <div className="flex-1 min-w-[200px]">
                <div className="flex items-center gap-2 flex-wrap">
                  <span className="font-semibold text-sm">{s.name}</span>
                  <span className="text-[11px] px-2 py-0.5 rounded bg-[var(--surface-3)]">{s.type}</span>
                  {s.scheduled && <span className="text-[11px] px-2 py-0.5 rounded bg-blue-500/20 text-blue-300">Programado</span>}
                  {!s.scheduled && <span className="text-[11px] px-2 py-0.5 rounded bg-purple-500/20 text-purple-300">On-demand</span>}
                </div>
                <div className="text-xs text-slate-800 font-medium mt-1">{new Date(s.date).toLocaleString()} · {s.assetsScanned} activos escaneados</div>
              </div>
              <div className="flex gap-1 text-xs">
                <span className="px-2 py-1 rounded bg-red-500/20 text-red-700">{s.vulnsFound.critical} C</span>
                <span className="px-2 py-1 rounded bg-orange-500/20 text-orange-300">{s.vulnsFound.high} A</span>
                <span className="px-2 py-1 rounded bg-yellow-500/20 text-yellow-300">{s.vulnsFound.medium} M</span>
                <span className="px-2 py-1 rounded bg-green-500/20 text-green-700">{s.vulnsFound.low} B</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// ---- VLM Remediation (workflow) ----
function VlmRemediation({ vulns, onSelect }) {
  const cols = [
    { id: "Open", label: "Por abordar", color: "#dc2626" },
    { id: "In Progress", label: "En progreso", color: "#eab308" },
    { id: "Fixed", label: "Aplicado", color: "#06b6d4" },
    { id: "Verified", label: "Verificado", color: "#10b981" },
  ];
  return (
    <div className="grid grid-cols-1 md:grid-cols-4 gap-3">
      {cols.map(c => {
        const items = vulns.filter(v => v.status === c.id).sort((a, b) => b.realRisk - a.realRisk).slice(0, 10);
        return (
          <div key={c.id} className="bg-[var(--surface-2)] rounded-xl border border-[var(--border)] overflow-hidden">
            <div className="px-3 py-2 border-b border-[var(--border)] flex items-center justify-between">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 rounded-full" style={{ background: c.color }} />
                <span className="text-xs font-semibold">{c.label}</span>
              </div>
              <span className="text-[11px] text-slate-700">{items.length}</span>
            </div>
            <div className="p-2 space-y-2 max-h-[500px] overflow-y-auto">
              {items.length === 0 && <div className="text-[11px] text-slate-600 text-center py-4">Sin ítems</div>}
              {items.map(v => (
                <button key={v.id} onClick={() => onSelect(v)}
                  className="w-full text-left p-2 bg-[var(--surface-3)]/80 rounded border border-[var(--border)] hover:border-slate-600 transition">
                  <div className="font-mono text-[11px] text-cyan-400">{v.cve}</div>
                  <div className="text-xs font-medium line-clamp-2 mt-0.5">{v.title}</div>
                  <div className="flex items-center justify-between mt-1">
                    <span className="text-[11px] text-slate-700">{v.assetName}</span>
                    <span className="text-[11px] font-bold" style={{ color: c.color }}>{v.realRisk}</span>
                  </div>
                </button>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}

// ---- VLM Trends ----
function VlmTrends({ scans, vulns }) {
  const byScan = scans.map(s => ({
    name: new Date(s.date).toLocaleDateString().slice(0, 5),
    Críticas: s.vulnsFound.critical, Altas: s.vulnsFound.high, Medias: s.vulnsFound.medium, Bajas: s.vulnsFound.low,
  }));
  const bySoftware = {};
  vulns.forEach(v => { bySoftware[v.software] = (bySoftware[v.software] || 0) + 1; });
  const topSoftware = Object.entries(bySoftware).sort((a, b) => b[1] - a[1]).slice(0, 6).map(([name, v]) => ({ name, value: v }));
  const byAge = [
    { name: "0-7d", value: vulns.filter(v => v.ageDays <= 7).length },
    { name: "8-30d", value: vulns.filter(v => v.ageDays > 7 && v.ageDays <= 30).length },
    { name: "31-60d", value: vulns.filter(v => v.ageDays > 30 && v.ageDays <= 60).length },
    { name: "61-90d", value: vulns.filter(v => v.ageDays > 60 && v.ageDays <= 90).length },
    { name: ">90d", value: vulns.filter(v => v.ageDays > 90).length },
  ];

  return (
    <div className="space-y-3">
      <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
        <h3 className="text-sm font-semibold mb-3">Comparativa por ciclos de escaneo</h3>
        <ResponsiveContainer width="100%" height={220}>
          <BarChart data={byScan}>
            <CartesianGrid stroke="#1e293b" />
            <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
            <YAxis stroke="#64748b" fontSize={10} />
            <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid #334155" }} />
            <Legend wrapperStyle={{ fontSize: 10 }} />
            <Bar dataKey="Críticas" fill="#dc2626" stackId="a" />
            <Bar dataKey="Altas" fill="#ea580c" stackId="a" />
            <Bar dataKey="Medias" fill="#ca8a04" stackId="a" />
            <Bar dataKey="Bajas" fill="#16a34a" stackId="a" />
          </BarChart>
        </ResponsiveContainer>
      </div>
      <div className="grid md:grid-cols-2 gap-3">
        <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
          <h3 className="text-sm font-semibold mb-3">Antigüedad de vulnerabilidades</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={byAge}>
              <CartesianGrid stroke="#1e293b" />
              <XAxis dataKey="name" stroke="#64748b" fontSize={10} />
              <YAxis stroke="#64748b" fontSize={10} />
              <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid #334155" }} />
              <Bar dataKey="value" fill="#06b6d4" />
            </BarChart>
          </ResponsiveContainer>
        </div>
        <div className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
          <h3 className="text-sm font-semibold mb-3">Software más afectado</h3>
          <ResponsiveContainer width="100%" height={180}>
            <BarChart data={topSoftware} layout="vertical">
              <CartesianGrid stroke="#1e293b" />
              <XAxis type="number" stroke="#64748b" fontSize={10} />
              <YAxis type="category" dataKey="name" stroke="#64748b" fontSize={9} width={110} />
              <Tooltip contentStyle={{ background: "var(--surface-2)", border: "1px solid #334155" }} />
              <Bar dataKey="value" fill="#8b5cf6" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>
    </div>
  );
}

// ---- VLM Deliverables (los 6 del PDF) ----
function VlmDeliverables({ vulns, scans, stats }) {
  const [generating, setGenerating] = useState(null);
  const [modalContent, setModalContent] = useState(null);

  const DELIVERABLES = [
    { id: "technical", title: "Informe técnico detallado", desc: "Listado completo de vulnerabilidades con evidencias, descripción técnica y referencias CVE/CVSS.", icon: FileText, color: "from-blue-500 to-blue-700" },
    { id: "executive", title: "Informe ejecutivo", desc: "Número total de vulnerabilidades, riesgo global, impacto financiero/reputacional y recomendaciones estratégicas.", icon: BarChart3, color: "from-purple-500 to-purple-700" },
    { id: "remediation", title: "Plan de remediación", desc: "Acciones concretas para corregir cada vulnerabilidad, priorizadas y con hardening guidance (generado por IA).", icon: ShieldCheck, color: "from-emerald-500 to-emerald-700" },
    { id: "evidence", title: "Evidencias del escaneo", desc: "Resultados exportados (CSV, XML, PDF), logs del escáner y detalles de los escenarios ejecutados.", icon: Database, color: "from-cyan-500 to-cyan-700" },
    { id: "dashboard", title: "Dashboard gestionado", desc: "Acceso en tiempo real a resultados, evolución del riesgo y estado de remediación.", icon: Activity, color: "from-orange-500 to-orange-700" },
    { id: "rescan", title: "Informe de re-escaneo", desc: "Confirmación de vulnerabilidades resueltas e identificación de posibles fallos persistentes.", icon: RefreshCw, color: "from-pink-500 to-pink-700" },
  ];

  const generate = (d) => {
    setGenerating(d.id);
    setTimeout(() => {
      setModalContent({ deliverable: d, content: buildDeliverable(d.id, vulns, scans, stats) });
      setGenerating(null);
    }, 600);
  };

  return (
    <div className="space-y-3">
      <p className="text-xs text-slate-800">Los 6 entregables estándar del ciclo de vida. Generados a partir del programa VLM.</p>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
        {DELIVERABLES.map(d => {
          const Icon = d.icon;
          return (
            <div key={d.id} className="p-4 bg-[var(--surface-2)] rounded-xl border border-[var(--border)]">
              <div className={`w-10 h-10 rounded-lg bg-gradient-to-br ${d.color} flex items-center justify-center mb-2`}>
                <Icon className="w-5 h-5 text-slate-900" />
              </div>
              <h3 className="font-semibold text-sm">{d.title}</h3>
              <p className="text-xs text-slate-800 mt-1 leading-relaxed">{d.desc}</p>
              <button onClick={() => generate(d)} disabled={generating === d.id}
                className="mt-3 w-full py-1.5 text-xs bg-[var(--surface-3)] hover:bg-cyan-700 rounded flex items-center justify-center gap-1">
                {generating === d.id ? <><RefreshCw className="w-3 h-3 animate-spin" /> Generando...</> : <><Send className="w-3 h-3" /> Generar</>}
              </button>
            </div>
          );
        })}
      </div>
      {modalContent && <DeliverableModal {...modalContent} onClose={() => setModalContent(null)} />}
    </div>
  );
}

function buildDeliverable(id, vulns, scans, stats) {
  const open = vulns.filter(v => v.status === "Open");
  const critical = open.filter(v => v.severity === "Critical");
  const byAsset = {};
  vulns.forEach(v => { byAsset[v.assetName] = (byAsset[v.assetName] || 0) + 1; });
  const topAssets = Object.entries(byAsset).sort((a, b) => b[1] - a[1]).slice(0, 5);

  if (id === "technical") return {
    sections: [
      { h: "Inventario de vulnerabilidades detectadas", body: vulns.slice(0, 15).map(v => `[${v.severity}] ${v.cve} — ${v.title}\n  Activo: ${v.assetName} (${v.env}, crit=${v.criticality})\n  CVSS: ${v.cvss} | Real Risk: ${v.realRisk} | Vector: ${v.vector}\n  Software: ${v.software}\n  Estado: ${v.status} | Detectada hace ${v.ageDays}d`).join("\n\n") },
      { h: "Referencias", body: "• Common Vulnerability Scoring System (CVSS v3.1)\n• CVE Identifiers (MITRE)\n• CISA KEV Catalog\n• MITRE ATT&CK\n• OWASP Top 10 2021" },
    ]
  };
  if (id === "executive") return {
    sections: [
      { h: "Resumen ejecutivo", body: `El programa VLM ha identificado ${stats.total} vulnerabilidades, de las cuales ${stats.critical} son críticas y ${stats.high} altas en estado abierto. Se detectaron ${stats.kev} vulnerabilidades incluidas en el catálogo CISA KEV (explotación activa confirmada) y ${stats.slaBreached} han superado el SLA.\n\nSe han remediado ${stats.fixed} vulnerabilidades, reduciendo la superficie de exposición.` },
      { h: "Impacto potencial", body: `• Financiero estimado: exposición €${(stats.critical * 450000 + stats.high * 180000).toLocaleString()} (base IBM Cost of Data Breach 2024: €4.88M media)\n• Reputacional: presencia en KEV expone a auditorías regulatorias (NIS2, DORA)\n• Operativo: ${stats.slaBreached} SLAs incumplidos generan riesgo de cumplimiento ISO 27001` },
      { h: "Recomendaciones estratégicas", body: "1. Priorizar parcheo inmediato (<72h) de KEVs activas.\n2. Ampliar ventana de mantenimiento para reducir MTTR.\n3. Automatizar patch management en activos no críticos.\n4. Implementar compensating controls donde no pueda parchearse.\n5. Revisar tier de criticidad del inventario anualmente." },
    ]
  };
  if (id === "remediation") return {
    sections: [
      { h: "Plan de remediación priorizado (generado por IA contextual)", body: critical.slice(0, 8).map((v, i) => `${i + 1}. ${v.cve} en ${v.assetName}\n   Acción: Aplicar parche del fabricante (prioridad P1, <72h)\n   Hardening: Restringir acceso por firewall, habilitar WAF si es web\n   Workaround si no se puede parchear: aislar activo en VLAN restringida\n   Verificación: re-escaneo con mismo plugin y validación manual\n   Rollback plan: snapshot previo, ventana de mantenimiento coordinada`).join("\n\n") },
      { h: "Recomendaciones de hardening general", body: "• Habilitar MFA en todas las interfaces administrativas\n• Segmentar red por criticidad (Zero Trust)\n• Ejecutar CIS Benchmarks en servidores core\n• Activar logging centralizado y retención 1 año\n• Revisiones trimestrales de configuración" },
    ]
  };
  if (id === "evidence") return {
    sections: [
      { h: "Escaneos del periodo", body: scans.map(s => `• ${s.name} (${new Date(s.date).toLocaleDateString()})\n  Tipo: ${s.type}\n  Activos: ${s.assetsScanned}\n  Hallazgos: ${s.vulnsFound.critical + s.vulnsFound.high + s.vulnsFound.medium + s.vulnsFound.low}`).join("\n\n") },
      { h: "Exportaciones disponibles", body: "• CSV con todos los campos de vulnerabilidades\n• XML compatible con SIEM/SOAR\n• PDF firmado digitalmente para auditoría\n• JSON API endpoint para integración DevSecOps" },
    ]
  };
  if (id === "dashboard") return {
    sections: [
      { h: "KPIs en tiempo real", body: `• Total: ${stats.total}\n• Abiertas críticas: ${stats.critical}\n• Abiertas altas: ${stats.high}\n• Incumpliendo SLA: ${stats.slaBreached}\n• En KEV: ${stats.kev}\n• Remediadas: ${stats.fixed}` },
      { h: "Widgets activos", body: "• Evolución del riesgo por activo\n• MTTR por equipo responsable\n• Heatmap por criticidad × severidad\n• Top 10 CVEs pendientes\n• Compliance ISO 27001 / NIS2 / NIST" },
    ]
  };
  if (id === "rescan") {
    const fixed = vulns.filter(v => v.status === "Verified" || v.status === "Fixed");
    return {
      sections: [
        { h: "Vulnerabilidades confirmadas como resueltas", body: fixed.slice(0, 10).map(v => `✓ ${v.cve} en ${v.assetName} — verificada ${new Date(v.discoveredAt).toLocaleDateString()}`).join("\n") || "Sin re-escaneos confirmados aún" },
        { h: "Activos con mayor carga pendiente", body: topAssets.map(([a, n]) => `• ${a}: ${n} vulnerabilidades`).join("\n") },
        { h: "Posibles fallos persistentes", body: "Identificar vulnerabilidades reabiertas: vulnerabilidades marcadas como Fixed pero detectadas de nuevo en siguiente scan. Requiere revisión manual y análisis de causa raíz." },
      ]
    };
  }
  return { sections: [] };
}

function DeliverableModal({ deliverable, content, onClose }) {
  const Icon = deliverable.icon;
  const download = () => {
    const text = `${deliverable.title}\n${"=".repeat(deliverable.title.length)}\n\n${content.sections.map(s => `${s.h}\n${"-".repeat(s.h.length)}\n${s.body}`).join("\n\n")}`;
    const blob = new Blob([text], { type: "text/plain" });
    const url = URL.createObjectURL(blob);
    const a = document.createElement("a");
    a.href = url; a.download = `${deliverable.id}-${Date.now()}.txt`; a.click();
    URL.revokeObjectURL(url);
  };
  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-xl max-w-2xl w-full max-h-[85vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-5 border-b border-[var(--border)] flex items-start justify-between">
          <div className="flex items-start gap-3">
            <div className={`w-12 h-12 rounded-lg bg-gradient-to-br ${deliverable.color} flex items-center justify-center`}>
              <Icon className="w-6 h-6 text-slate-900" />
            </div>
            <div>
              <h3 className="text-lg font-bold">{deliverable.title}</h3>
              <div className="text-xs text-slate-800">{new Date().toLocaleString()}</div>
            </div>
          </div>
          <button onClick={onClose} className="text-slate-700 hover:text-slate-900"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-sm">
          {content.sections.map((s, i) => (
            <div key={i}>
              <h4 className="font-semibold text-cyan-400 mb-1">{s.h}</h4>
              <pre className="text-xs text-slate-800 font-medium whitespace-pre-wrap font-sans bg-[var(--surface-0)] p-3 rounded border border-[var(--border)]">{s.body}</pre>
            </div>
          ))}
        </div>
        <div className="p-4 border-t border-[var(--border)] flex gap-2">
          <button onClick={download} className="flex-1 py-2 text-xs bg-cyan-600 hover:bg-cyan-500 rounded flex items-center justify-center gap-1">
            <Download className="w-3.5 h-3.5" /> Descargar
          </button>
        </div>
      </div>
    </div>
  );
}

// ---- Vuln detail modal with IA-generated remediation ----
function VulnModal({ vuln, onClose, onUpdate }) {
  const [aiPlan, setAiPlan] = useState(null);
  const [loadingAi, setLoadingAi] = useState(false);
  const color = STATUS_COLORS[vuln.status];
  const sevColor = vuln.severity === "Critical" ? "#dc2626" : vuln.severity === "High" ? "#ea580c" : vuln.severity === "Medium" ? "#ca8a04" : "#16a34a";

  const askAi = async () => {
    setLoadingAi(true);
    try {
      const prompt = `Eres un experto en ciberseguridad. Genera un plan de remediación accionable para esta vulnerabilidad:

CVE: ${vuln.cve}
Título: ${vuln.title}
CVSS: ${vuln.cvss}
Software afectado: ${vuln.software}
Activo: ${vuln.assetName} (tipo ${vuln.assetType}, criticidad ${vuln.criticality}, entorno ${vuln.env})
Vector: ${vuln.vector}
En CISA KEV: ${vuln.kev ? "SÍ" : "No"}

Devuelve SOLO texto plano estructurado en 5 secciones numeradas (en español, conciso):
1. Parche oficial recomendado (comando o versión)
2. Workaround si no se puede parchear ahora
3. Hardening adicional
4. Test de verificación
5. Rollback plan
No uses markdown, solo texto plano con saltos de línea.`;

      const res = await fetch("https://api.anthropic.com/v1/messages", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          model: "claude-sonnet-4-20250514",
          max_tokens: 1000,
          messages: [{ role: "user", content: prompt }],
        })
      });
      const data = await res.json();
      const text = data.content?.map(c => c.text || "").join("\n") || "";
      setAiPlan(text);
    } catch (e) {
      setAiPlan("Error generando plan. En producción, Claude Opus 4.7 devolvería un plan contextualizado aquí.\n\n(Simulación) 1. Parche: actualizar a la versión segura. 2. Workaround: restringir acceso por ACL. 3. Hardening: WAF + MFA. 4. Test: nmap + re-escaneo con plugin. 5. Rollback: snapshot previo.");
    }
    setLoadingAi(false);
  };

  return (
    <div className="fixed inset-0 z-50 bg-slate-900/40 flex items-center justify-center p-4" onClick={onClose}>
      <div className="bg-[var(--surface-2)] border border-[var(--border-strong)] rounded-xl max-w-2xl w-full max-h-[90vh] flex flex-col" onClick={e => e.stopPropagation()}>
        <div className="p-5 border-b border-[var(--border)] flex items-start justify-between gap-3">
          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 flex-wrap mb-1">
              <span className="font-mono text-cyan-400 font-semibold">{vuln.cve}</span>
              <span className="text-xs px-2 py-0.5 rounded font-semibold" style={{ background: sevColor + "33", color: sevColor }}>
                {vuln.severity} · CVSS {vuln.cvss}
              </span>
              {vuln.kev && <span className="text-[11px] px-2 py-0.5 rounded bg-fuchsia-500/20 text-fuchsia-300">CISA KEV</span>}
            </div>
            <h3 className="text-lg font-bold">{vuln.title}</h3>
          </div>
          <button onClick={onClose} className="text-slate-700 hover:text-slate-900"><X className="w-5 h-5" /></button>
        </div>
        <div className="p-5 overflow-y-auto flex-1 space-y-4 text-sm">
          <div className="grid grid-cols-2 gap-2 text-xs">
            <Row label="Software" value={vuln.software} />
            <Row label="Vector" value={vuln.vector} />
            <Row label="Real Risk (IA)" value={vuln.realRisk} />
            <Row label="Edad" value={`${vuln.ageDays}d`} />
            <Row label="Activo" value={vuln.assetName} mono />
            <Row label="Entorno" value={vuln.env} />
            <Row label="Criticidad activo" value={vuln.criticality} />
            <Row label="Owner" value={vuln.owner} />
          </div>
          <div className="pt-2 border-t border-[var(--border)]">
            <label className="text-xs text-slate-800 font-medium mb-1 block">Cambiar estado</label>
            <div className="flex gap-1 flex-wrap">
              {VULN_STATUSES.map(s => (
                <button key={s} onClick={() => onUpdate({ status: s })}
                  className={`text-xs px-2 py-1 rounded ${vuln.status === s ? "bg-cyan-600 text-slate-900" : "bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)]"}`}>
                  {s}
                </button>
              ))}
            </div>
          </div>
          <div className="pt-2 border-t border-[var(--border)]">
            <div className="flex items-center justify-between mb-2">
              <h4 className="text-sm font-semibold flex items-center gap-1">
                <Zap className="w-4 h-4 text-yellow-400" /> Plan de remediación (Claude Opus 4.7)
              </h4>
              <button onClick={askAi} disabled={loadingAi}
                className="text-xs px-3 py-1 bg-gradient-to-r from-cyan-500 to-blue-600 hover:from-cyan-400 rounded flex items-center gap-1">
                {loadingAi ? <><RefreshCw className="w-3 h-3 animate-spin" /> Generando...</> : <>Generar con IA</>}
              </button>
            </div>
            {aiPlan ? (
              <pre className="text-xs text-slate-800 font-medium whitespace-pre-wrap font-sans bg-[var(--surface-0)] p-3 rounded border border-[var(--border)]">{aiPlan}</pre>
            ) : (
              <div className="text-xs text-slate-800 font-medium bg-[var(--surface-0)] p-3 rounded border border-[var(--border)] border-dashed">
                Claude Opus 4.7 analizará el CVE con el contexto del activo (criticidad, entorno, compensating controls) y generará un plan paso-a-paso: parche, workaround, hardening, test de verificación y rollback.
              </div>
            )}
          </div>
          <div className="text-xs flex gap-2 pt-2 border-t border-[var(--border)]">
            <a href={`https://nvd.nist.gov/vuln/detail/${vuln.cve}`} target="_blank" rel="noopener" className="flex-1 text-center py-2 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded">NVD</a>
            <a href={`https://cve.mitre.org/cgi-bin/cvename.cgi?name=${vuln.cve}`} target="_blank" rel="noopener" className="flex-1 text-center py-2 bg-[var(--surface-3)] hover:bg-[var(--border)] border border-[var(--border)] rounded">MITRE</a>
            {vuln.kev && <a href="https://www.cisa.gov/known-exploited-vulnerabilities-catalog" target="_blank" rel="noopener" className="flex-1 text-center py-2 bg-fuchsia-500/20 text-fuchsia-300 rounded">CISA KEV</a>}
          </div>
        </div>
      </div>
    </div>
  );
}

// ============================================================
// LANDING PAGE (público)
// ============================================================
function LandingPage({ onNavigate, onQuickExplore }) {
  const { t } = useT();
  const [count, setCount] = useState(2847293);
  useEffect(() => {
    const i = setInterval(() => setCount(c => c + Math.floor(Math.random() * 7) + 1), 800);
    return () => clearInterval(i);
  }, []);

  return (
    <div className="min-h-screen bg-[var(--surface-0)] text-slate-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800;900&family=JetBrains+Mono:wght@400;500;600&display=swap');
        .mono { font-family: 'JetBrains Mono', monospace; }
        body, p, span, div, td, th, li { font-weight: 450; }
        @keyframes pulse-ring { 0% { transform: scale(0.8); opacity: 0.8; } 100% { transform: scale(2.5); opacity: 0; } }
        .pulse-ring { animation: pulse-ring 2s cubic-bezier(0.4,0,0.6,1) infinite; }
        @keyframes blink { 50% { opacity: 0.2; } }
        .blink { animation: blink 1.2s ease-in-out infinite; }
        @keyframes float-up { 0% { transform: translateY(20px); opacity: 0; } 100% { transform: translateY(0); opacity: 1; } }
        .float-up { animation: float-up 0.6s cubic-bezier(0.16,1,0.3,1) forwards; opacity: 0; }
        .grid-pattern { background-image: linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px); background-size: 40px 40px; }
        .glow-cyan { box-shadow: 0 0 60px -15px rgba(34,211,238,0.5), 0 0 100px -30px rgba(34,211,238,0.3); }
      `}</style>

      {/* NAV */}
      <nav className="border-b border-cyan-500/10 backdrop-blur-xl bg-slate-900/40 fixed top-0 left-0 right-0 z-50">
        <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2.5">
            <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
              <Shield className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
            </div>
            <div className="leading-tight">
              <div className="font-semibold tracking-tight">CyberWatch</div>
              <div className="mono text-[11px] text-cyan-700 uppercase tracking-[0.2em]">XTI · Threat Intelligence</div>
            </div>
          </div>
          <div className="hidden md:flex items-center gap-7 text-sm text-slate-800">
            <a href="#platform" className="hover:text-cyan-700 transition">Platform</a>
            <a href="#modules" className="hover:text-cyan-700 transition">Modules</a>
            <a href="#pricing" className="hover:text-cyan-700 transition">Pricing</a>
            <span className="flex items-center gap-1.5 text-violet-700">
              <Zap className="w-3 h-3" /><span className="text-xs font-medium">Agentic AI</span>
            </span>
          </div>
          <div className="flex items-center gap-3">
            <LangSwitcher variant="light" />
            <button onClick={() => onNavigate("login")} className="text-sm text-slate-800 hover:text-slate-900 transition">{t("signIn")}</button>
            <button onClick={onQuickExplore}
              className="group text-sm bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 px-4 py-2 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition flex items-center gap-1.5">
              <Zap className="w-3.5 h-3.5" strokeWidth={3} />
              {t("tryFree7")}
            </button>
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="pt-32 pb-20 px-6 relative overflow-hidden">
        <div className="absolute inset-0 grid-pattern opacity-40" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-cyan-500/10 rounded-full blur-3xl" />
        <div className="max-w-7xl mx-auto relative">
          <div className="flex items-center gap-2 mb-8 float-up">
            <span className="relative flex w-2 h-2">
              <span className="absolute inline-flex w-full h-full rounded-full bg-cyan-400 opacity-75 pulse-ring" />
              <span className="relative inline-flex rounded-full w-2 h-2 bg-cyan-400" />
            </span>
            <span className="mono text-xs uppercase tracking-[0.2em] text-cyan-700">
              {t("liveThreats", { n: count.toLocaleString() })}
            </span>
          </div>

          <div className="grid lg:grid-cols-12 gap-10 items-start">
            <div className="lg:col-span-7 float-up" style={{ animationDelay: "100ms" }}>
              <div className="inline-flex items-center gap-2 bg-gradient-to-r from-violet-500/10 to-cyan-500/10 border border-violet-500/30 rounded-full px-3 py-1 mb-6">
                <Zap className="w-3 h-3 text-violet-700" />
                <span className="mono text-[11px] uppercase tracking-widest text-violet-700">{t("agenticBadge")}</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-bold leading-[1.02] tracking-tight">
                {t("heroTitle1")}<br />
                {t("heroTitle2")}<br />
                <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">{t("heroTitle3")}</span>
              </h1>
              <p className="mt-7 text-slate-800 text-lg max-w-xl leading-relaxed">
                {t("heroLead")}
              </p>
              <div className="mt-9 flex flex-wrap gap-3">
                <button onClick={onQuickExplore}
                  className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-slate-900 px-7 py-4 rounded-lg font-bold text-base hover:shadow-[0_0_60px_rgba(34,211,238,0.7)] transition-all hover:scale-[1.02]">
                  <Zap className="w-5 h-5" strokeWidth={3} />
                  {t("exploreNow")}
                  <span className="mono text-[11px] bg-[var(--surface-0)]/20 px-2 py-0.5 rounded font-bold tracking-wider">{t("free7days")}</span>
                  <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
                </button>
                <button onClick={() => onNavigate("signup")}
                  className="inline-flex items-center gap-2 border border-cyan-500/40 text-cyan-700 px-6 py-4 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition font-medium">
                  {t("orBook90")}
                </button>
              </div>
              <div className="mt-6 flex items-center gap-2 text-xs text-cyan-700">
                <CheckCircle className="w-3.5 h-3.5 text-cyan-400" strokeWidth={2.5} />
                <span className="font-medium">{t("instantAccess")}</span>
              </div>
              <div className="mt-10 flex flex-wrap items-center gap-x-4 gap-y-2 mono text-[11px] text-slate-800 font-medium uppercase tracking-wider">
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-cyan-400" /> {t("noCard")}</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-cyan-400" /> {t("socReady")}</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-cyan-400" /> {t("compliance")}</span>
                <span className="flex items-center gap-1.5"><CheckCircle className="w-3 h-3 text-cyan-400" /> {t("mitreMapped")}</span>
              </div>
            </div>

            {/* Live feed preview */}
            <div className="lg:col-span-5 float-up" style={{ animationDelay: "200ms" }}>
              <div className="bg-gradient-to-b from-[var(--surface-1)] to-[var(--surface-0)] border border-cyan-500/20 rounded-xl overflow-hidden backdrop-blur glow-cyan">
                <div className="px-4 py-2.5 border-b border-cyan-500/10 flex items-center justify-between bg-[var(--surface-0)]/60">
                  <div className="flex items-center gap-2">
                    <div className="flex gap-1.5">
                      <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-yellow-500/80" />
                      <div className="w-2.5 h-2.5 rounded-full bg-green-500/80" />
                    </div>
                    <span className="mono text-[11px] text-cyan-700 ml-2">cyberwatch://threat-feed</span>
                  </div>
                  <span className="mono text-[11px] text-red-400 blink">● LIVE</span>
                </div>
                <div className="p-3 space-y-1.5 min-h-[420px]">
                  {[
                    { sev: "CRIT", color: "#ef4444", type: "Ransomware", src: "RU 185.22.x.x", target: "Finance" },
                    { sev: "HIGH", color: "#f97316", type: "C2 Beacon", src: "CN 218.87.x.x", target: "Healthcare" },
                    { sev: "CRIT", color: "#ef4444", type: "Zero-Day", src: "KP 175.45.x.x", target: "Gov" },
                    { sev: "MED ", color: "#eab308", type: "Phishing", src: "NG 197.210.x.x", target: "Retail" },
                    { sev: "HIGH", color: "#f97316", type: "Cred Stuff", src: "BR 200.14.x.x", target: "Tech" },
                    { sev: "CRIT", color: "#ef4444", type: "Ransomware", src: "IR 5.63.x.x", target: "Energy" },
                    { sev: "MED ", color: "#eab308", type: "Infostealer", src: "VN 14.241.x.x", target: "Finance" },
                    { sev: "HIGH", color: "#f97316", type: "Supply Chain", src: "npm-typosquat", target: "DevOps" },
                  ].map((r, i) => (
                    <div key={i} className="flex items-center gap-2.5 p-2 hover:bg-cyan-500/5 rounded text-xs mono border-l-2" style={{ borderLeftColor: r.color }}>
                      <span className="text-slate-700 w-12">{new Date(Date.now() - i * 12000).toTimeString().slice(0, 5)}</span>
                      <span className="font-bold w-10" style={{ color: r.color }}>{r.sev}</span>
                      <span className="text-slate-800 flex-1 truncate">{r.type}</span>
                      <span className="text-slate-600">→</span>
                      <span className="text-cyan-400">{r.target}</span>
                    </div>
                  ))}
                </div>
                <div className="border-t border-cyan-500/10 px-4 py-2 flex items-center justify-between bg-[var(--surface-0)]/60">
                  <span className="mono text-[11px] text-slate-800 font-medium">MITRE ATT&CK · NVD enriched</span>
                  <span className="mono text-[11px] text-green-700">● OPERATIONAL</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* STATS */}
      <section className="border-y border-cyan-500/10 bg-[var(--surface-0)] py-10">
        <div className="max-w-7xl mx-auto px-6 grid grid-cols-2 md:grid-cols-4 gap-8">
          {[
            { n: "+130", l: "reports per quarter", s: "delivered to subscribers" },
            { n: "8", l: "risk categories", s: "per asset scanned" },
            { n: "30+", l: "platforms benchmarked", s: "in comparative study" },
            { n: "24/7", l: "continuous monitoring", s: "autonomous agents" },
          ].map((s, i) => (
            <div key={i} className="border-l-2 border-cyan-500/30 pl-4">
              <div className="text-4xl md:text-5xl font-bold text-slate-900 tabular-nums">{s.n}</div>
              <div className="mt-2 text-sm font-medium text-slate-800">{s.l}</div>
              <div className="mt-0.5 mono text-[11px] text-slate-800 font-medium uppercase tracking-wider">{s.s}</div>
            </div>
          ))}
        </div>
      </section>

      {/* MODULES */}
      <section id="modules" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="max-w-3xl mb-14">
            <span className="mono text-xs uppercase tracking-[0.25em] text-cyan-400">{t("platformLabel")}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              {t("sixModules1")} <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">{t("sixModules2")}</span>
            </h2>
            <p className="mt-5 text-slate-800 leading-relaxed">
              {t("platformDesc")}
            </p>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-3">
            {[
              { icon: Activity, title: t("modRealtime"), desc: t("modRealtimeDesc"), tag: "Core", color: "#22d3ee" },
              { icon: FileText, title: t("modCTI"), desc: t("modCTIDesc"), tag: "Intel", color: "#06b6d4" },
              { icon: Target, title: t("modRisk"), desc: t("modRiskDesc"), tag: "EASM", color: "#3b82f6" },
              { icon: Search, title: t("modBreach"), desc: t("modBreachDesc"), tag: "Research", color: "#8b5cf6" },
              { icon: Database, title: t("modVLM"), desc: t("modVLMDesc"), tag: "VLM", color: "#a78bfa" },
              { icon: Shield, title: t("modBench"), desc: t("modBenchDesc"), tag: "Advisory", color: "#6366f1" },
            ].map((mod, i) => {
              const Icon = mod.icon;
              return (
                <div key={i} className="group relative bg-gradient-to-br from-[var(--surface-1)] to-[var(--surface-0)] p-6 rounded-xl border border-cyan-500/10 hover:border-cyan-400/40 transition overflow-hidden">
                  <div className="absolute -right-10 -top-10 w-32 h-32 rounded-full opacity-0 group-hover:opacity-100 transition blur-2xl" style={{ background: mod.color }} />
                  <div className="relative">
                    <div className="flex items-start justify-between mb-5">
                      <div className="w-11 h-11 rounded-lg flex items-center justify-center"
                        style={{ background: `${mod.color}1a`, border: `1px solid ${mod.color}44` }}>
                        <Icon className="w-5 h-5" style={{ color: mod.color }} strokeWidth={2} />
                      </div>
                      <span className="mono text-[11px] uppercase tracking-widest text-slate-800 font-semibold">{mod.tag}</span>
                    </div>
                    <h3 className="text-lg font-semibold mb-2">{mod.title}</h3>
                    <p className="text-sm text-slate-900 leading-relaxed font-medium">{mod.desc}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* AGENTIC AI SECTION */}
      <section className="py-24 px-6 relative overflow-hidden border-y border-cyan-500/10">
        <div className="absolute inset-0 grid-pattern opacity-30" />
        <div className="absolute inset-0 bg-gradient-to-b from-violet-500/5 via-transparent to-transparent" />
        <div className="max-w-7xl mx-auto relative">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-violet-500/10 border border-violet-500/30 rounded-full px-3 py-1 mb-5">
                <Zap className="w-3 h-3 text-violet-700" />
                <span className="mono text-[11px] uppercase tracking-widest text-violet-700">{t("agenticBadge")}</span>
              </div>
              <h2 className="text-4xl md:text-5xl font-bold leading-tight mb-5">
                {t("agenticSection1")}<br />
                <span className="bg-gradient-to-r from-violet-300 to-cyan-300 bg-clip-text text-transparent">{t("agenticSection2")}</span>
              </h2>
              <p className="text-slate-800 leading-relaxed mb-6">
                {t("agenticSectionDesc")}
              </p>
              <div className="space-y-3">
                {[
                  t("agenticBullet1"),
                  t("agenticBullet2"),
                  t("agenticBullet3"),
                  t("agenticBullet4"),
                ].map((bullet, i) => (
                  <div key={i} className="flex items-start gap-3 text-sm text-slate-700">
                    <div className="mt-0.5 w-5 h-5 rounded bg-violet-500/20 flex items-center justify-center flex-shrink-0">
                      <CheckCircle className="w-3 h-3 text-violet-700" strokeWidth={2.5} />
                    </div>
                    <span>{bullet}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="relative">
              <div className="bg-gradient-to-br from-[var(--surface-1)] to-[var(--surface-0)] border border-violet-500/30 rounded-xl p-6 shadow-2xl shadow-violet-500/10">
                <div className="flex items-center gap-2 mb-4 pb-4 border-b border-violet-500/20">
                  <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-violet-400 to-cyan-400 flex items-center justify-center">
                    <Zap className="w-4 h-4 text-slate-900" />
                  </div>
                  <div>
                    <div className="text-sm font-semibold">{t("aiRemediationPlan")}</div>
                    <div className="mono text-[11px] text-violet-700">CVE-2024-21887 · Ivanti ICS</div>
                  </div>
                </div>
                <div className="space-y-3 text-xs">
                  <div><span className="mono text-violet-700 uppercase tracking-wider text-[11px]">1. {t("aiPatch")}</span>
                    <p className="text-slate-700 mt-0.5">Upgrade to Ivanti ICS 22.6R2.2+. Priority P1 (&lt;72h, CISA KEV).</p></div>
                  <div><span className="mono text-violet-700 uppercase tracking-wider text-[11px]">2. {t("aiWorkaround")}</span>
                    <p className="text-slate-700 mt-0.5">Apply mitigation.release.20240107 XML. Restrict /api/v1/* via WAF rules.</p></div>
                  <div><span className="mono text-violet-700 uppercase tracking-wider text-[11px]">3. {t("aiHardening")}</span>
                    <p className="text-slate-700 mt-0.5">Enforce MFA, enable Integrity Checker Tool, segregate management plane.</p></div>
                  <div><span className="mono text-violet-700 uppercase tracking-wider text-[11px]">4. {t("aiVerify")}</span>
                    <p className="text-slate-700 mt-0.5">Run NVD plugin 190032. curl test against vulnerable endpoints.</p></div>
                </div>
                <div className="mt-4 pt-3 border-t border-violet-500/20 mono text-[11px] text-slate-800 font-medium flex items-center gap-2">
                  <RefreshCw className="w-3 h-3" />
                  {t("generatedIn")}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* INSTANT ACCESS BANNER */}
      <section className="py-16 px-6 relative overflow-hidden">
        <div className="max-w-6xl mx-auto">
          <div className="relative bg-gradient-to-br from-cyan-500/20 via-[var(--surface-1)] to-violet-500/20 border border-cyan-400/40 rounded-2xl p-8 md:p-12 overflow-hidden">
            <div className="absolute inset-0 grid-pattern opacity-30" />
            <div className="absolute -right-20 -top-20 w-96 h-96 rounded-full bg-cyan-500/20 blur-3xl" />
            <div className="absolute -left-20 -bottom-20 w-96 h-96 rounded-full bg-violet-500/20 blur-3xl" />

            <div className="relative flex flex-col md:flex-row items-center gap-8">
              <div className="flex-1">
                <div className="inline-flex items-center gap-2 bg-cyan-400/20 border border-cyan-400/40 rounded-full px-3 py-1 mb-4">
                  <Zap className="w-3 h-3 text-cyan-700" strokeWidth={3} />
                  <span className="mono text-[11px] uppercase tracking-widest text-cyan-800 font-bold">{t("bannerBadge")}</span>
                </div>
                <h3 className="text-3xl md:text-4xl font-bold text-slate-900 leading-tight">
                  {t("bannerTitle1")}<br />
                  <span className="bg-gradient-to-r from-cyan-200 to-cyan-400 bg-clip-text text-transparent">{t("bannerTitle2")}</span>
                </h3>
                <p className="mt-4 text-slate-900 font-medium leading-relaxed max-w-xl">
                  {t("bannerDesc")}
                </p>
                <div className="mt-5 grid grid-cols-2 gap-x-6 gap-y-2 max-w-md">
                  {[
                    t("bannerF1"),
                    t("bannerF2"),
                    t("bannerF3"),
                    t("bannerF4"),
                    t("bannerF5"),
                    t("bannerF6"),
                  ].map(f => (
                    <div key={f} className="flex items-center gap-2 text-sm text-slate-900 font-medium">
                      <CheckCircle className="w-4 h-4 text-cyan-700 flex-shrink-0" strokeWidth={2.5} />
                      <span>{f}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="flex-shrink-0 flex flex-col items-center gap-3">
                <button onClick={onQuickExplore}
                  className="group relative inline-flex items-center gap-3 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-slate-900 px-8 py-5 rounded-xl font-bold text-lg hover:shadow-[0_0_80px_rgba(34,211,238,0.8)] transition-all hover:scale-[1.03]">
                  <Zap className="w-6 h-6" strokeWidth={3} />
                  <div className="text-left leading-tight">
                    <div>{t("exploreNow")}</div>
                    <div className="mono text-[11px] tracking-wider font-bold opacity-75">{t("noCardNoSignup")}</div>
                  </div>
                  <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition" />
                </button>
                <div className="flex items-center gap-1.5 mono text-[11px] text-cyan-700 font-medium">
                  <div className="w-1.5 h-1.5 rounded-full bg-cyan-300 animate-pulse" />
                  <span>{t("bannerTeams", { n: "2,847" })}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* PRICING */}
      <section id="pricing" className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <span className="mono text-xs uppercase tracking-[0.25em] text-cyan-400">{t("pricingLabel")}</span>
            <h2 className="text-4xl md:text-5xl font-bold mt-4 leading-tight">
              {t("pricingTitle1")} <span className="bg-gradient-to-r from-cyan-300 to-blue-400 bg-clip-text text-transparent">{t("pricingTitle2")}</span>
            </h2>
          </div>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { name: t("tierStarter"), price: "€0", period: t("tierStarterPeriod"), feats: [t("tierStarterF1"), t("tierStarterF2"), t("tierStarterF3"), t("tierStarterF4"), t("tierStarterF5")], cta: t("tierStarterCTA"), highlight: false },
              { name: t("tierPro"), price: "€890", period: t("tierProPeriod"), feats: [t("tierProF1"), t("tierProF2"), t("tierProF3"), t("tierProF4"), t("tierProF5"), t("tierProF6"), t("tierProF7"), t("tierProF8")], cta: t("tierProCTA"), highlight: true },
              { name: t("tierEnt"), price: t("tierEntPrice"), period: t("tierEntPeriod"), feats: [t("tierEntF1"), t("tierEntF2"), t("tierEntF3"), t("tierEntF4"), t("tierEntF5"), t("tierEntF6"), t("tierEntF7"), t("tierEntF8")], cta: t("tierEntCTA"), highlight: false },
            ].map((tier, i) => (
              <div key={i} className={`relative p-8 rounded-xl transition ${tier.highlight ? "bg-gradient-to-b from-cyan-500/10 via-[var(--surface-1)] to-[var(--surface-0)] border border-cyan-400/40 shadow-2xl shadow-cyan-500/20" : "bg-gradient-to-b from-[var(--surface-1)] to-[var(--surface-0)] border border-cyan-500/10 hover:border-cyan-500/30"}`}>
                {tier.highlight && <div className="absolute -top-3 left-8 mono text-[11px] uppercase tracking-widest bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 px-2.5 py-1 rounded font-semibold">{t("mostPopular")}</div>}
                <h3 className="text-2xl font-semibold mb-4">{tier.name}</h3>
                <div className="flex items-baseline gap-2">
                  <span className="text-5xl font-bold tabular-nums">{tier.price}</span>
                  <span className="mono text-xs text-slate-800 font-medium">{tier.period}</span>
                </div>
                <ul className="mt-7 space-y-3">
                  {tier.feats.map(f => (
                    <li key={f} className="flex items-start gap-2.5 text-sm text-slate-700">
                      <CheckCircle className="w-4 h-4 text-cyan-400 flex-shrink-0 mt-0.5" strokeWidth={2.5} />
                      <span>{f}</span>
                    </li>
                  ))}
                </ul>
                <button onClick={() => onNavigate("signup")}
                  className={`mt-8 block w-full text-center py-3 rounded-lg font-semibold transition ${
                    tier.highlight ? "bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 hover:shadow-[0_0_30px_rgba(34,211,238,0.5)]" : "border border-cyan-500/30 text-cyan-700 hover:bg-cyan-500/10"
                  }`}>{tier.cta}</button>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FINAL CTA */}
      <section className="py-24 px-6 relative overflow-hidden border-t border-cyan-500/10">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,rgba(34,211,238,0.12),transparent_60%)]" />
        <div className="max-w-5xl mx-auto text-center relative">
          <h2 className="text-5xl md:text-6xl font-bold leading-[1.05] text-slate-900">
            {t("finalCTA1")}<br />
            <span className="bg-gradient-to-r from-cyan-300 via-cyan-400 to-blue-400 bg-clip-text text-transparent">{t("finalCTA2")}</span>
          </h2>
          <p className="mt-7 text-slate-900 text-lg max-w-xl mx-auto font-medium">
            {t("finalCTADesc")}
          </p>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <button onClick={onQuickExplore}
              className="group relative inline-flex items-center gap-2.5 bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-slate-900 px-8 py-4 rounded-lg font-bold text-base hover:shadow-[0_0_60px_rgba(34,211,238,0.7)] transition-all hover:scale-[1.02]">
              <Zap className="w-5 h-5" strokeWidth={3} />
              {t("exploreNow")}
              <span className="mono text-[11px] bg-[var(--surface-0)]/20 px-2 py-0.5 rounded font-bold tracking-wider">{t("free7days")}</span>
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition" />
            </button>
            <button onClick={() => onNavigate("signup")}
              className="inline-flex items-center gap-2 border border-cyan-500/40 text-cyan-700 px-7 py-4 rounded-lg hover:bg-cyan-500/10 hover:border-cyan-400 transition font-medium">
              {t("orRegister90")}
            </button>
          </div>
          <div className="mt-5 flex items-center justify-center gap-2 text-xs text-cyan-700 font-medium">
            <CheckCircle className="w-3.5 h-3.5 text-cyan-400" strokeWidth={2.5} />
            <span>{t("finalNote")}</span>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-cyan-500/10 py-10 px-6 bg-[var(--surface-0)]">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-start md:items-center gap-4">
          <div className="flex items-center gap-2.5">
            <div className="w-8 h-8 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-lg flex items-center justify-center">
              <Shield className="w-4 h-4 text-slate-900" strokeWidth={2.5} />
            </div>
            <div>
              <div className="font-semibold tracking-tight">CyberWatch</div>
              <div className="mono text-[11px] text-cyan-700">cyberwatchthreatintelligence.com</div>
            </div>
          </div>
          <div className="mono text-[11px] text-slate-800 font-medium uppercase tracking-wider flex gap-6">
            <span>SOC 2</span><span>ISO 27001</span><span>GDPR</span><span>NIS2</span><span>DORA</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

// ============================================================
// AUTH VIEWS
// ============================================================
function AuthShell({ title, subtitle, children, footer, onNavigate }) {
  return (
    <div className="min-h-screen bg-[var(--surface-0)] flex flex-col relative overflow-hidden text-slate-900" style={{ fontFamily: "'Inter', system-ui, sans-serif" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap');
        .mono { font-family: 'JetBrains Mono', monospace; }
        body, p, span, div, label { font-weight: 450; }
        .grid-pattern { background-image: linear-gradient(rgba(34,211,238,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(34,211,238,0.06) 1px, transparent 1px); background-size: 40px 40px; }
      `}</style>
      <div className="absolute inset-0 grid-pattern opacity-40" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-cyan-500/10 rounded-full blur-3xl" />
      <nav className="relative border-b border-cyan-500/10 px-6 py-4 flex items-center justify-between">
        <button onClick={() => onNavigate("landing")} className="flex items-center gap-2.5">
          <div className="w-9 h-9 bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 rounded-lg flex items-center justify-center shadow-lg shadow-cyan-500/30">
            <Shield className="w-5 h-5 text-slate-900" strokeWidth={2.5} />
          </div>
          <div className="leading-tight text-left">
            <div className="font-semibold tracking-tight text-slate-700">CyberWatch</div>
            <div className="mono text-[11px] text-cyan-700 uppercase tracking-[0.2em]">XTI Platform</div>
          </div>
        </button>
        <LangSwitcher variant="light" />
      </nav>
      <div className="relative flex-1 flex items-center justify-center px-6 py-12">
        <div className="w-full max-w-md">
          <div className="text-center mb-8">
            <h1 className="text-3xl font-bold text-slate-700">{title}</h1>
            {subtitle && <p className="mt-2 text-sm text-slate-800">{subtitle}</p>}
          </div>
          <div className="bg-gradient-to-b from-[var(--surface-1)]/90 to-[var(--surface-0)]/90 border border-cyan-500/20 rounded-xl p-6 backdrop-blur-xl shadow-2xl shadow-cyan-500/5">
            {children}
          </div>
          {footer && <div className="mt-6 text-center text-sm text-slate-700">{footer}</div>}
        </div>
      </div>
    </div>
  );
}


function AuthInput({ label, type = "text", value, onChange, placeholder, required }) {
  return (
    <div>
      <label className="block text-xs mono uppercase tracking-widest text-slate-800 font-semibold mb-2">{label}{required && <span className="text-cyan-400 ml-0.5">*</span>}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder}
        className="w-full px-3.5 py-2.5 bg-[var(--surface-0)] border border-[var(--border)] rounded-lg text-sm text-slate-900 placeholder-slate-400 focus:outline-none focus:border-cyan-400 focus:ring-1 focus:ring-cyan-400/30 transition" />
    </div>
  );
}

function LoginView({ onNavigate, onAuth }) {
  const { t } = useT();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [err, setErr] = useState("");

  const submit = () => {
    setErr("");
    if (!email || !password) { setErr(t("completeFields")); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) { setErr(t("invalidEmail")); return; }
    onAuth({ email, company: email.split("@")[1]?.split(".")[0] || "Organization", full_name: email.split("@")[0] });
  };

  return (
    <AuthShell title={t("signIn")} subtitle={t("welcomeBack")} onNavigate={onNavigate}
      footer={<>{t("noAccount")} <button onClick={() => onNavigate("signup")} className="text-cyan-700 hover:text-cyan-700 font-semibold underline decoration-cyan-500/40 underline-offset-2">{t("createIn30")}</button></>}>
      <div className="space-y-4">
        <AuthInput label={t("email")} type="email" value={email} onChange={setEmail} placeholder="you@company.com" required />
        <AuthInput label={t("password")} type="password" value={password} onChange={setPassword} placeholder="••••••••" required />
        {err && <div className="text-xs text-red-700 bg-red-500/10 border border-red-500/40 rounded-lg px-3 py-2 font-medium">{err}</div>}
        <button onClick={submit}
          className="w-full py-2.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition">
          {t("signIn")}
        </button>
        <div className="text-center text-[11px] mono uppercase tracking-widest text-slate-700 font-semibold pt-2">
          {t("demoAnyEmail")}
        </div>
      </div>
    </AuthShell>
  );
}

function SignupView({ onNavigate, onAuth }) {
  const { t } = useT();
  const [form, setForm] = useState({ fullName: "", email: "", company: "", password: "", accept: false });
  const [err, setErr] = useState("");

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const submit = () => {
    setErr("");
    if (!form.fullName || !form.email || !form.company || !form.password) { setErr(t("completeFields")); return; }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { setErr(t("invalidEmail")); return; }
    if (form.password.length < 6) { setErr(t("passwordMin")); return; }
    if (!form.accept) { setErr(t("mustAccept")); return; }
    onAuth({ email: form.email, company: form.company, full_name: form.fullName });
  };

  return (
    <AuthShell title={t("startFreeTrial")} subtitle={t("trial90days")} onNavigate={onNavigate}
      footer={<>{t("haveAccount")} <button onClick={() => onNavigate("login")} className="text-cyan-700 hover:text-cyan-700 font-semibold underline decoration-cyan-500/40 underline-offset-2">{t("signIn")}</button></>}>
      <div className="space-y-3">
        <AuthInput label={t("fullName")} value={form.fullName} onChange={v => set("fullName", v)} placeholder="—" required />
        <AuthInput label={t("email")} type="email" value={form.email} onChange={v => set("email", v)} placeholder="you@company.com" required />
        <AuthInput label={t("company")} value={form.company} onChange={v => set("company", v)} placeholder="ACME Corp" required />
        <AuthInput label={t("password")} type="password" value={form.password} onChange={v => set("password", v)} placeholder="min. 6" required />
        <label className="flex items-start gap-2 text-xs text-slate-900 leading-relaxed font-medium pt-1">
          <input type="checkbox" checked={form.accept} onChange={e => set("accept", e.target.checked)} className="mt-0.5 accent-cyan-500" />
          <span>{t("acceptTerms")}</span>
        </label>
        {err && <div className="text-xs text-red-700 bg-red-500/10 border border-red-500/40 rounded-lg px-3 py-2 font-medium">{err}</div>}
        <button onClick={submit}
          className="w-full py-2.5 bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 rounded-lg font-semibold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition">
          {t("createAccount")}
        </button>
      </div>
    </AuthShell>
  );
}

function LoadingView() {
  const { t } = useT();
  return (
    <div className="min-h-screen bg-[var(--surface-0)] flex items-center justify-center">
      <div className="flex items-center gap-3 text-slate-900">
        <RefreshCw className="w-5 h-5 animate-spin text-cyan-400" />
        <span className="text-sm mono uppercase tracking-widest font-semibold">{t("loadingPlatform")}</span>
      </div>
    </div>
  );
}

// ============================================================
// ROOT COMPONENT - SaaS con routing + auth
// ============================================================
export default function CyberWatchSaaS() {
  const [route, setRoute] = useState("loading");
  const [user, setUser] = useState(null);
  const [locale, setLocaleState] = useState("en");

  useEffect(() => {
    (async () => {
      // Cargar idioma preferido (storage → navegador → en)
      try {
        const r = await window.storage.get("app:locale");
        if (r?.value && DICT[r.value]) {
          setLocaleState(r.value);
        } else {
          const browserLang = (navigator.language || "en").slice(0, 2);
          if (DICT[browserLang]) setLocaleState(browserLang);
        }
      } catch (e) {}
      // Cargar sesión
      try {
        const r = await window.storage.get("auth:session");
        if (r?.value) {
          setUser(JSON.parse(r.value));
          setRoute("dashboard");
          return;
        }
      } catch (e) {}
      setRoute("landing");
    })();
  }, []);

  const setLocale = async (newLocale) => {
    setLocaleState(newLocale);
    try { await window.storage.set("app:locale", newLocale); } catch (e) {}
  };

  const authenticate = async (userData) => {
    const u = { ...userData, authenticated_at: new Date().toISOString() };
    try { await window.storage.set("auth:session", JSON.stringify(u)); } catch (e) {}
    setUser(u);
    setRoute("dashboard");
  };

  const quickExplore = () => authenticate({
    email: "explorer@cyberwatch.io",
    full_name: "Platform Explorer",
    company: "7-Day Explore Access",
    trial_type: "explore",
    trial_days: 7,
  });

  const logout = async () => {
    try { await window.storage.delete("auth:session"); } catch (e) {}
    setUser(null);
    setRoute("landing");
  };

  const view =
    route === "loading" ? <LoadingView /> :
    route === "landing" ? <LandingPage onNavigate={setRoute} onQuickExplore={quickExplore} /> :
    route === "login" ? <LoginView onNavigate={setRoute} onAuth={authenticate} /> :
    route === "signup" ? <SignupView onNavigate={setRoute} onAuth={authenticate} /> :
    route === "dashboard" ? <CyberWatchDashboard user={user} onLogout={logout} /> : null;

  return (
    <I18nContext.Provider value={{ locale, setLocale, t: (k) => k }}>
      <style>{`
        /* === TEMA ADAPTATIVO: respeta el modo del sistema operativo === */
        :root {
          /* MODO CLARO (default) */
          --surface-0: #ffffff;
          --surface-1: #f8fafc;
          --surface-2: #f1f5f9;
          --surface-3: #e2e8f0;
          --border: #cbd5e1;
          --border-strong: #94a3b8;
          --txt-strong: #0f172a;   /* slate-900 */
          --txt-base: #1e293b;     /* slate-800 */
          --txt-muted: #475569;    /* slate-600 */
          --txt-subtle: #64748b;   /* slate-500 */
        }
        @media (prefers-color-scheme: dark) {
          :root {
            /* MODO OSCURO automático cuando el SO está en dark */
            --surface-0: #0a0e1a;     /* fondo principal casi negro */
            --surface-1: #131927;     /* sidebar / surfaces base */
            --surface-2: #1c2436;     /* cards principales */
            --surface-3: #2a3349;     /* surfaces elevadas */
            --border: #3a4560;        /* bordes principales */
            --border-strong: #4a5876; /* bordes hover */
            --txt-strong: #ffffff;    /* texto principal */
            --txt-base: #f1f5f9;      /* slate-100 */
            --txt-muted: #cbd5e1;     /* slate-300 */
            --txt-subtle: #94a3b8;    /* slate-400 */
          }
        }

        /* OVERRIDES de Tailwind text-slate-X para que respondan al tema */
        @media (prefers-color-scheme: dark) {
          .text-slate-900 { color: var(--txt-strong) !important; }
          .text-slate-800 { color: var(--txt-base) !important; }
          .text-slate-700 { color: var(--txt-muted) !important; }
          .text-slate-600 { color: var(--txt-subtle) !important; }
          .text-slate-500 { color: #94a3b8 !important; }
          .text-slate-400 { color: #94a3b8 !important; }
          /* Cyan/violet que se oscurecieron en modo claro vuelven a claros en dark */
          .text-cyan-700 { color: #67e8f9 !important; }
          .text-cyan-800 { color: #67e8f9 !important; }
          .text-violet-700 { color: #c4b5fd !important; }
          .text-violet-800 { color: #c4b5fd !important; }
          .text-red-700 { color: #fca5a5 !important; }
          .text-green-700 { color: #86efac !important; }
          /* Hovers de slate-100/200 invertidos */
          .hover\\:bg-slate-100:hover { background-color: var(--surface-2) !important; }
          .hover\\:bg-slate-200:hover { background-color: var(--surface-3) !important; }
          .bg-slate-100 { background-color: var(--surface-2) !important; }
          .bg-slate-200 { background-color: var(--surface-3) !important; }
          /* Botones cyan: texto debe ser oscuro siempre (negro sobre cyan brillante) */
          .from-cyan-300, .from-cyan-400, .from-cyan-500 {
            /* mantener gradiente */
          }
          /* Backdrop más oscuro en modo dark */
          .bg-slate-900\\/40 { background-color: rgba(0,0,0,0.7) !important; }
        }

        /* === FUERZA COLOR EN TODOS LOS INPUTS — soluciona iOS Safari user-agent stylesheet === */
        input, select, textarea {
          color: var(--txt-strong) !important;
          -webkit-text-fill-color: var(--txt-strong) !important;
          caret-color: var(--txt-strong) !important;
          background-color: var(--surface-0);
        }
        input::placeholder, textarea::placeholder {
          color: var(--txt-subtle) !important;
          -webkit-text-fill-color: var(--txt-subtle) !important;
          opacity: 1 !important;
        }
        select option {
          color: var(--txt-strong);
          background-color: var(--surface-0);
        }
        /* Autofill (Chrome/Safari ponen amarillo o blanco que rompe contraste) */
        input:-webkit-autofill, input:-webkit-autofill:hover, input:-webkit-autofill:focus {
          -webkit-text-fill-color: var(--txt-strong) !important;
          -webkit-box-shadow: 0 0 0 1000px var(--surface-0) inset !important;
          caret-color: var(--txt-strong) !important;
        }

        /* Body base */
        body {
          background-color: var(--surface-0);
          color: var(--txt-strong);
        }
      `}</style>
      {view}
    </I18nContext.Provider>
  );
}

// ============================================================
// TOUR VIEW — pantalla de tour de la plataforma como pestaña
// ============================================================
function TourView({ step, totalSteps, onNext, onBack, onJumpTo, onExit, onJumpToModule }) {
  const { t } = useT();
  const safeStep = Math.max(0, Math.min(step, totalSteps - 1));
  const s = TOUR_STEPS[safeStep];
  const Icon = s.icon;
  const isFirst = safeStep === 0;
  const isLast = safeStep === totalSteps - 1;
  const progress = ((safeStep + 1) / totalSteps) * 100;
  const tourData = {
    title: t(`tour.${safeStep}.title`),
    headline: t(`tour.${safeStep}.headline`),
    body: t(`tour.${safeStep}.body`),
    h: t(`tour.${safeStep}.h`),
  };

  return (
    <div className="space-y-5">
      {/* Header con progreso y exit */}
      <div className="flex items-center justify-between flex-wrap gap-3">
        <div>
          <span className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 font-bold">
            {t("platformTour")} · {t("step")} {safeStep + 1} {t("of")} {totalSteps}
          </span>
          <h2 className="text-xl md:text-2xl font-bold text-slate-900 mt-1">
            {t("walkThrough")}
          </h2>
        </div>
        <button onClick={onExit}
          className="text-xs mono uppercase tracking-widest font-semibold text-slate-700 hover:text-slate-900 px-4 py-2 rounded-lg border border-[var(--border)] hover:border-slate-400 transition flex items-center gap-2">
          <X className="w-3.5 h-3.5" /> {t("exitTour")}
        </button>
      </div>

      {/* Barra de progreso */}
      <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
        <div className="h-full bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 transition-all duration-500" style={{ width: `${progress}%` }} />
      </div>

      {/* Hero del módulo */}
      <div className="flex flex-col md:flex-row items-start gap-5 mt-2">
        <div className="w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-gradient-to-br from-cyan-400 via-cyan-500 to-blue-600 flex items-center justify-center flex-shrink-0 shadow-xl shadow-cyan-500/30">
          <Icon className="w-8 h-8 md:w-10 md:h-10 text-slate-900" strokeWidth={2.5} />
        </div>
        <div className="flex-1 min-w-0">
          <div className="mono text-[11px] uppercase tracking-[0.2em] text-cyan-700 font-bold mb-1.5">
            {tourData.title}
          </div>
          <h1 className="text-2xl md:text-4xl font-bold text-slate-900 leading-tight tracking-tight">
            {tourData.headline}
          </h1>
        </div>
      </div>

      {/* Body principal */}
      <div className="bg-slate-100 border border-[var(--border)] rounded-2xl p-5 md:p-7">
        <p className="text-base md:text-lg text-slate-800 leading-relaxed font-medium mb-5">
          {tourData.body}
        </p>

        <div className="space-y-2.5">
          {(Array.isArray(tourData.h) ? tourData.h : []).map((highlight, i) => (
            <div key={i} className="flex items-start gap-3 p-3 bg-slate-200 border border-[var(--border)] rounded-lg">
              <div className="w-7 h-7 rounded-lg bg-cyan-500/20 border border-cyan-400/40 flex items-center justify-center flex-shrink-0 mt-0.5">
                <CheckCircle className="w-4 h-4 text-cyan-700" strokeWidth={2.5} />
              </div>
              <span className="text-sm md:text-base text-slate-900 font-medium leading-relaxed pt-0.5">{highlight}</span>
            </div>
          ))}
        </div>

        {/* Acceso directo al módulo */}
        <div className="mt-5 pt-5 border-t border-[var(--border)]">
          <button onClick={() => onJumpToModule(DASHBOARD_NAV[safeStep].id)}
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-cyan-500/10 border border-cyan-400/40 hover:bg-cyan-500/20 text-cyan-700 font-semibold text-sm transition">
            <ArrowRight className="w-4 h-4" />
            {t("openModule", { name: tourData.title })}
          </button>
        </div>
      </div>

      {/* Navegación entre pasos */}
      <div className="bg-slate-100 border border-[var(--border)] rounded-2xl p-4">
        <div className="flex items-center justify-between gap-3 mb-4 flex-wrap">
          <button onClick={onBack} disabled={isFirst}
            className={`px-5 py-2.5 text-sm rounded-xl border-2 font-semibold transition flex items-center gap-2 ${
              isFirst
                ? "border-[var(--border)] text-slate-600 opacity-40 cursor-not-allowed"
                : "border-cyan-500/40 text-cyan-700 hover:bg-cyan-500/10 hover:border-cyan-400"
            }`}>
            <ArrowRight className="w-4 h-4 rotate-180" /> {t("back")}
          </button>

          {isLast ? (
            <button onClick={onExit}
              className="px-6 py-2.5 text-sm rounded-xl bg-gradient-to-r from-cyan-300 via-cyan-400 to-cyan-500 text-slate-900 font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition flex items-center gap-2">
              <CheckCircle className="w-5 h-5" strokeWidth={3} />
              {t("finishTour")}
            </button>
          ) : (
            <button onClick={onNext}
              className="px-6 py-2.5 text-sm rounded-xl bg-gradient-to-r from-cyan-400 to-cyan-500 text-slate-900 font-bold hover:shadow-[0_0_30px_rgba(34,211,238,0.5)] transition flex items-center gap-2">
              {t("next")} · {DASHBOARD_NAV[safeStep + 1] ? t(DASHBOARD_NAV[safeStep + 1].labelKey) : ""}
              <ArrowRight className="w-4 h-4" />
            </button>
          )}
        </div>

        {/* Lista clickable de los 7 pasos */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: totalSteps }).map((_, i) => {
            const NavIcon = DASHBOARD_NAV[i]?.icon;
            const isActive = i === safeStep;
            const isPast = i < safeStep;
            return (
              <button key={i} onClick={() => onJumpTo(i)}
                className={`flex flex-col items-center justify-center gap-1 py-2 px-1 rounded-lg transition ${
                  isActive
                    ? "bg-cyan-500/15 border border-cyan-400/60"
                    : isPast
                    ? "bg-cyan-500/5 border border-cyan-400/20 hover:bg-cyan-500/10"
                    : "bg-slate-200 border border-[var(--border)] hover:bg-slate-100"
                }`}>
                {NavIcon && <NavIcon className={`w-4 h-4 ${isActive || isPast ? "text-cyan-700" : "text-slate-700"}`} strokeWidth={isActive ? 2.5 : 2} />}
                <span className={`text-[10px] font-semibold ${isActive || isPast ? "text-cyan-700" : "text-slate-700"}`}>{i + 1}</span>
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
}
