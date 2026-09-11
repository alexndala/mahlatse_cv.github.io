export interface Project {
  name: string;
  tagline: string;
  description: string;
  longDescription: string[];
  features: string[];
  tech: string[];
  status: "Live" | "In Development" | "Concept";
  category: "SaaS" | "Client-Facing" | "Research Tool" | "Matching Engine";
  link?: string;
  github?: string;
}

export const projects: Project[] = [
  {
    name: "Absolute",
    tagline: "Goals-based financial planning SaaS for IFAs",
    description:
      "A comprehensive financial planning and asset allocation platform for South African financial advisers, featuring Monte Carlo probability scoring, regulatory compliance engines, and advanced portfolio optimisation.",
    longDescription: [
      "Monte Carlo probability scoring for goal achievability",
      "NEED/WANT/DREAM goal tiering framework",
      "Reg 28 / TFSA / RA wrapper compliance engine",
      "Standalone Compliance & Two-Pot Engines",
      "MCMC portfolio optimisation across six risk models",
      "Built for South African IFA market under POPIA/FAIS/FSCA",
    ],
    features: [
      "Monte Carlo Simulation",
      "Regulatory Compliance Engine",
      "MCMC Optimisation",
      "Goal-Based Planning",
      "Multi-Wrapper Support",
    ],
    tech: [
      "Python",
      "React",
      "TypeScript",
      "Tailwind CSS",
      "PostgreSQL",
      "Docker",
      "Monte Carlo",
      "MCMC",
      "Kalman Filter",
    ],
    status: "In Development",
    category: "SaaS",
  },
  {
    name: "Ndlela",
    tagline: "Client-facing personal finance & wealth platform",
    description:
      "The client-facing layer of the Absolute ecosystem — a self-serve personal finance and wealth management application for end clients.",
    longDescription: [
      "Client-facing portal for Absolute ecosystem",
      "Personal finance tracking and goal management",
      "Wealth management dashboard",
      "Seamless adviser-client collaboration",
      "Data handoff architecture with Absolute",
    ],
    features: [
      "Personal Finance Tracking",
      "Goal Management",
      "Wealth Dashboard",
      "Adviser Collaboration",
    ],
    tech: ["React", "TypeScript", "Tailwind CSS", "Supabase", "JWT Auth"],
    status: "In Development",
    category: "Client-Facing",
  },
  {
    name: "Parity",
    tagline: "Algorithm-based fund matching engine (700+ SA unit trusts)",
    description:
      "A free, algorithm-based (not LLM) tool that ranks 700+ South African unit trusts across risk profile, time horizon, fee sensitivity, and goal alignment. Users answer five questions and receive tailored portfolios with qualified-vetted advisers for human-in-the-loop sign-off.",
    longDescription: [
      "700+ South African unit trusts ranked",
      "~40 ASISA sectors with ESG classification",
      "PlexCrown/TER data integration",
      "Five-question user profiling",
      "Algorithm-based matching (not LLM)",
      "Qualified adviser vetting & human-in-the-loop",
      "Risk profile, time horizon, fee sensitivity, goal alignment",
    ],
    features: [
      "Fund Matching Engine",
      "700+ Funds Coverage",
      "5-Question Profiling",
      "Adviser Vetting",
      "ASISA Sector Mapping",
    ],
    tech: [
      "Python",
      "React",
      "TypeScript",
      "PostgreSQL",
      "Pandas",
      "ProfileData",
      "Morningstar",
      "FE fundinfo",
    ],
    status: "Live",
    category: "Matching Engine",
  },
  {
    name: "Calenda",
    tagline: "Bloomberg-style earnings & corporate actions research cockpit",
    description:
      "A free research platform for portfolio managers surfacing earnings, dividends, splits, and IPOs with deep per-event analytics including beat/miss history, historical ±5-day price reaction, and EPS trend analysis.",
    longDescription: [
      "Earnings, dividends, splits, IPOs calendar",
      "Beat/miss history per event",
      "Historical ±5-day price reaction analysis",
      "EPS trend tracking",
      "Bloomberg-style research interface",
      "Portfolio manager focused",
    ],
    features: [
      "Earnings Calendar",
      "Corporate Actions",
      "Beat/Miss Analytics",
      "Price Reaction History",
      "EPS Trend Analysis",
    ],
    tech: ["Python", "React", "TypeScript", "Financial Data APIs", "Data Visualization"],
    status: "Live",
    category: "Research Tool",
  },
];