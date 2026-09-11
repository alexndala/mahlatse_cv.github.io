export interface Experience {
  company: string;
  role: string;
  period: string;
  description: string;
  bullets: string[];
  tech: string[];
  featured?: boolean;
}

export const experience: Experience[] = [
  {
    company: "10X Investments (Pty) Ltd",
    role: "Lead Quantitative Analyst / Developer",
    period: "June 2025 – January 2026",
    description:
      "Sole owner and consultant developer of a greenfield Multi-Asset Portfolio Construction & Capital Markets Assumptions Platform with R70b+ AUM. Responsible for the full stack — data extraction through to portfolio analytics — serving internal stakeholders and enabling delivery of quantitative insights to third-party clients.",
    bullets: [
      "Engineered financial data pipelines and ETL processes integrating multi-source market data from Bloomberg Terminal and Morningstar, ensuring data quality and governance standards.",
      "Developed and maintained all asset class valuation models driving long-term risk and return expectations across multi-asset portfolios.",
      "Built a Monte Carlo simulation and MCMC-based portfolio optimisation framework, integrating a backend quantitative engine with an Excel frontend for stakeholder use.",
      "Conducted portfolio scenario analysis across historical, hypothetical, and sensitivity frameworks; performed stress testing to support evidence-based asset allocation decisions.",
      "Implemented CI/CD pipelines and automated data workflows, identifying and resolving inefficiencies to enhance operational efficiency.",
      "Applied Kalman-filtered CPI model for inflation adjustments and ACM yield decomposition within capital markets assumptions architecture.",
      "Maintained model governance documentation and stayed current with quantitative research literature, applying best practices to the investment process.",
    ],
    tech: [
      "Python",
      "Bloomberg Terminal",
      "Morningstar",
      "Monte Carlo",
      "MCMC",
      "Kalman Filter",
      "ACM Yield Decomposition",
      "CI/CD",
      "ETL",
      "Data Governance",
    ],
    featured: true,
  },
  {
    company: "Absolute Labs",
    role: "Founder & Developer – Absolute, Ndlela, Parity & Calenda",
    period: "2025 – Present",
    description:
      "Independently building and commercialising a suite of fintech products for the South African wealth management, IFA, and capital markets research.",
    bullets: [
      "Absolute: Goals-based financial planning and asset allocation SaaS for financial advisers; features include Monte Carlo probability scoring, NEED/WANT/DREAM goal tiering, Reg 28/TFSA/RA wrapper compliance, standalone Compliance & Two-Pot Engines, and MCMC portfolio optimisation across six risk models.",
      "Ndlela: Personal finance and wealth management application serving as the client-facing layer of the Absolute ecosystem; development started 2025 to present.",
      "Parity: Free client-facing algorithm-based (not LLM) tool built end-to-end. Engineered a matching engine ranking 700+ South African unit trusts across risk profile, time horizon, fee sensitivity, and goal alignment (~40 ASISA sectors, ESG classification, PlexCrown/TER data). Users answer just five questions and tailored portfolios are presented along with qualified-vetted advisers for sign-off/human-loop.",
      "Calenda: Free Bloomberg-style earnings and corporate actions research cockpit for portfolio managers; surfaces earnings, dividends, splits, and IPOs with deep per-event analytics including beat/miss history, historical ±5-day price reaction, and EPS trend.",
      "Architected client data handoff between products to streamline adviser onboarding and portfolio management workflows.",
      "Pursuing data licensing partnerships with ProfileData, Morningstar, and FE fundinfo for fund data integration.",
      "Built under POPIA, FAIS, and FSCA regulatory frameworks with a compliance-first development philosophy.",
    ],
    tech: [
      "Python",
      "JavaScript/TypeScript",
      "React",
      "Tailwind CSS",
      "Docker",
      "Apache Kafka",
      "Google Cloud",
      "Railway",
      "Cloudflare",
      "Supabase",
      "PostgreSQL",
      "Redis",
      "JWT Authentication",
      "REST API",
      "Monte Carlo",
      "MCMC",
      "Reg 28/TFSA/RA Compliance",
    ],
    featured: true,
  },
  {
    company: "RisCura Invest (Pty) Ltd",
    role: "Trade & Rebalancing Analyst (Internship)",
    period: "June 2022 – June 2023",
    description:
      "Supported high-volume trade implementation, settlements, cashflow management, and portfolio performance monitoring within a large institutional asset management environment.",
    bullets: [
      "Executed and settled high-volume trade instructions across multiple client portfolios, ensuring accuracy and adherence to mandates.",
      "Generated and delivered client performance reports; implemented real-time portfolio performance checks.",
      "Addressed client and intermediary queries related to portfolio changes, performance attribution, and regulatory compliance.",
      "Utilised Bloomberg Terminal and Morningstar for market data retrieval and analysis; liaised with asset managers and investment service providers.",
      "Collaborated with Portfolio Management and Operations teams on client onboarding to derivative contracts.",
    ],
    tech: [
      "Bloomberg Terminal",
      "Morningstar",
      "Trade Execution",
      "Settlements",
      "Performance Reporting",
      "Portfolio Rebalancing",
      "FAIS/FICA Compliance",
    ],
  },
  {
    company: "HTX",
    role: "Business Development Analyst (Contract)",
    period: "July 2021 – September 2021",
    description:
      "Ensured intermediary adherence to FAIS and FICA regulatory requirements while servicing existing intermediaries and sourcing new distribution relationships.",
    bullets: [
      "Ensured intermediary adherence to FAIS and FICA regulatory requirements.",
      "Serviced existing intermediaries and sourced new distribution relationships for HTX.",
      "Coordinated and maintained SLAs with internal and external stakeholders.",
    ],
    tech: ["FAIS", "FICA", "Business Development", "SLA Management"],
  },
  {
    company: "Department of Education, Mpumalanga",
    role: "Assistant Math Student Teacher (Learnership)",
    period: "2016",
    description:
      "Facilitated mathematics instruction and mentored learners through problem-solving; developed public speaking and communication skills.",
    bullets: [
      "Facilitated mathematics instruction and mentored learners through problem-solving.",
      "Developed public speaking and communication skills.",
    ],
    tech: ["Mathematics", "Teaching", "Communication"],
  },
];