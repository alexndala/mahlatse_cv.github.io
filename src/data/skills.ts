export interface SkillCategory {
  name: string;
  icon: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level?: "Expert" | "Advanced" | "Intermediate" | "Beginner";
  source?: string[];
}

export const skillCategories: SkillCategory[] = [
  {
    name: "Languages & Frameworks",
    icon: "code",
    skills: [
      { name: "Python", level: "Expert", source: ["10X Investments", "WorldQuant University", "Absolute Labs"] },
      { name: "Java", level: "Advanced", source: ["10X Investments", "WeThinkCode"] },
      { name: "JavaScript / TypeScript", level: "Advanced", source: ["Absolute Labs", "WorldQuant University"] },
      { name: "React", level: "Advanced", source: ["Absolute Labs"] },
      { name: "Tailwind CSS", level: "Advanced", source: ["Absolute Labs"] },
      { name: "VBA", level: "Advanced", source: ["10X Investments", "RisCura"] },
      { name: "FastAPI", level: "Intermediate", source: ["WorldQuant University"] },
      { name: "SQL", level: "Advanced", source: ["WeThinkCode", "WorldQuant University", "10X Investments"] },
    ],
  },
  {
    name: "Quantitative & Analytics",
    icon: "chart-bar",
    skills: [
      { name: "Monte Carlo Simulation", level: "Expert", source: ["10X Investments", "Absolute Labs", "WorldQuant University"] },
      { name: "MCMC Portfolio Optimisation", level: "Expert", source: ["10X Investments", "Absolute Labs"] },
      { name: "Kalman Filter", level: "Advanced", source: ["10X Investments"] },
      { name: "ACM Yield Decomposition", level: "Advanced", source: ["10X Investments"] },
      { name: "Asset Class Valuation Models", level: "Expert", source: ["10X Investments"] },
      { name: "Scenario Analysis", level: "Expert", source: ["10X Investments", "Absolute Labs"] },
      { name: "Stress Testing", level: "Expert", source: ["10X Investments", "Absolute Labs"] },
      { name: "Predictive Analytics", level: "Advanced", source: ["WorldQuant University", "10X Investments"] },
      { name: "Descriptive & Prescriptive Analytics", level: "Advanced", source: ["WorldQuant University", "10X Investments"] },
      { name: "Time Series Analysis (ARMA/ARIMA)", level: "Advanced", source: ["WorldQuant University"] },
      { name: "Machine Learning (Scikit-Learn, Regression)", level: "Advanced", source: ["WorldQuant University", "10X Investments"] },
      { name: "Hyperparameter Tuning", level: "Intermediate", source: ["WorldQuant University"] },
      { name: "Feature Engineering", level: "Advanced", source: ["WorldQuant University", "10X Investments"] },
    ],
  },
  {
    name: "Data Engineering & Infrastructure",
    icon: "database",
    skills: [
      { name: "ETL Pipeline Development", level: "Expert", source: ["10X Investments", "Absolute Labs", "WeThinkCode"] },
      { name: "Data Warehousing", level: "Expert", source: ["10X Investments", "WeThinkCode", "WorldQuant University"] },
      { name: "Database Design & Modelling", level: "Expert", source: ["WeThinkCode", "10X Investments"] },
      { name: "PostgreSQL", level: "Advanced", source: ["WeThinkCode", "WorldQuant University", "Absolute Labs"] },
      { name: "Redis", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "Apache Kafka", level: "Advanced", source: ["WeThinkCode", "Absolute Labs"] },
      { name: "Data Governance", level: "Advanced", source: ["10X Investments", "WorldQuant University"] },
      { name: "Data Cleaning & Preprocessing", level: "Expert", source: ["WorldQuant University", "10X Investments"] },
      { name: "Data Modeling", level: "Advanced", source: ["WorldQuant University", "WeThinkCode"] },
      { name: "Data Visualization (Plotly, Matplotlib, Seaborn)", level: "Advanced", source: ["WorldQuant University", "10X Investments"] },
      { name: "Pandas / NumPy", level: "Expert", source: ["WorldQuant University", "10X Investments"] },
    ],
  },
  {
    name: "Platforms, Tools & DevOps",
    icon: "cog",
    skills: [
      { name: "Bloomberg Terminal", level: "Expert", source: ["10X Investments", "RisCura", "Prescient FoF"] },
      { name: "Morningstar", level: "Expert", source: ["10X Investments", "RisCura", "Prescient FoF"] },
      { name: "Docker", level: "Advanced", source: ["WorldQuant University", "Absolute Labs"] },
      { name: "CI/CD Pipelines", level: "Advanced", source: ["10X Investments", "WeThinkCode", "Absolute Labs"] },
      { name: "Git / GitHub / GitLab", level: "Expert", source: ["WeThinkCode", "CodeAcademy", "10X Investments"] },
      { name: "Google Cloud", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "Railway", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "Cloudflare", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "Supabase", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "DBeaver", level: "Advanced", source: ["10X Investments", "WeThinkCode"] },
      { name: "JWT Authentication", level: "Advanced", source: ["Absolute Labs"] },
      { name: "REST API Integration", level: "Advanced", source: ["Absolute Labs", "WorldQuant University"] },
      { name: "Excel (Advanced)", level: "Expert", source: ["10X Investments", "RisCura", "Dataquest"] },
      { name: "Power BI", level: "Intermediate", source: ["RisCura", "Dataquest"] },
      { name: "Linux", level: "Advanced", source: ["WeThinkCode", "10X Investments"] },
    ],
  },
  {
    name: "Regulatory & Domain Knowledge",
    icon: "shield-check",
    skills: [
      { name: "POPIA Compliance", level: "Advanced", source: ["10X Investments", "Absolute Labs", "HTX"] },
      { name: "FAIS / FSCA Frameworks", level: "Advanced", source: ["10X Investments", "Absolute Labs", "HTX", "RisCura"] },
      { name: "Regulation 28", level: "Expert", source: ["10X Investments", "Absolute Labs"] },
      { name: "TFSA / RA Wrapper Compliance", level: "Expert", source: ["Absolute Labs"] },
      { name: "Two-Pot Retirement System", level: "Advanced", source: ["Absolute Labs"] },
      { name: "FICA", level: "Advanced", source: ["HTX", "RisCura"] },
      { name: "Consumer Duty", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "UCITS", level: "Intermediate", source: ["Absolute Labs"] },
      { name: "Portfolio Management", level: "Expert", source: ["10X Investments", "RisCura", "Rice University"] },
      { name: "Risk Management", level: "Advanced", source: ["10X Investments", "Coursera", "Rice University"] },
      { name: "Asset Allocation", level: "Expert", source: ["10X Investments", "Rice University", "RisCura"] },
      { name: "Index Tracking", level: "Advanced", source: ["10X Investments", "LinkedIn"] },
      { name: "FX Dealing / Derivatives", level: "Advanced", source: ["10X Investments", "RisCura", "LinkedIn"] },
    ],
  },
];

export const allSkills = skillCategories.flatMap((c) => c.skills);