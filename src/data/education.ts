export interface Education {
  degree: string;
  institution: string;
  period: string;
  status: "Current" | "Completed" | "Incomplete";
  details?: string[];
  certifications?: string[];
}

export const education: Education[] = [
  {
    degree: "MSc Financial Engineering",
    institution: "WorldQuant University",
    period: "2026 (Current)",
    status: "Current",
    details: [
      "Advanced quantitative finance curriculum",
      "Machine learning for financial markets",
      "Risk management and portfolio optimisation",
      "Financial data science and econometrics",
    ],
  },
  {
    degree: "Associate's Degree in Software & Data Engineering",
    institution: "WeThinkCode_ Institute",
    period: "2025",
    status: "Completed",
    details: [
      "Full-stack software development",
      "Data structures and algorithms",
      "Database design and modelling",
      "Data warehousing and ETL pipelines",
      "Systems design and architecture",
      "Apache Kafka and distributed systems",
      "CI/CD and DevOps practices",
    ],
    certifications: [
      "Software Development",
      "Software Development Life Cycle (SDLC)",
      "Software Design",
      "Software Documentation",
      "Data Warehousing",
      "Databases",
      "Systems Design",
      "Apache Kafka",
    ],
  },
  {
    degree: "Applied Data Science Certificate",
    institution: "WorldQuant University",
    period: "2025",
    status: "Completed",
    details: [
      "Python for data science (Pandas, NumPy, Scikit-Learn)",
      "Machine learning algorithms (Regression, Classification, Clustering)",
      "Time series analysis (ARMA, ARIMA, Autoregressive models)",
      "Statistical analysis and hypothesis testing",
      "Data visualization (Matplotlib, Seaborn, Plotly)",
      "Feature engineering and hyperparameter tuning",
      "MLOps and model deployment",
      "Ethics in machine learning",
    ],
    certifications: [
      "Quantitative Analytics",
      "Pandas",
      "Scikit-Learn",
      "Matplotlib",
      "Seaborn",
      "PyMongo",
      "Plotly",
      "Autoregressive Models",
      "Linear Regression",
      "ARMA Models",
      "Hyperparameter Tuning",
      "Feature Engineering",
      "Machine Learning Algorithms",
      "Data Structures",
      "Docker",
      "Git",
      "Descriptive Analysis",
      "Diagnostic Analytics",
      "Predictive Analytics",
      "Prescriptive Analytics",
      "Data Science Methodologies",
      "Data Cleaning and Preprocessing",
      "Regression and Classification Modeling",
      "Ethics in Machine Learning",
      "Statistical Analysis",
      "Business Insight and Intelligence",
      "Database Management",
    ],
  },
  {
    degree: "BCom Investment Management (Incomplete)",
    institution: "Stellenbosch University",
    period: "2017–2020",
    status: "Incomplete",
    details: [
      "Investment management fundamentals",
      "Financial markets and instruments",
      "Portfolio theory and practice",
      "Risk management principles",
    ],
  },
  {
    degree: "National Senior Certificate – Mathematics & Physical Sciences",
    institution: "KwaNdebele Science School",
    period: "2015",
    status: "Completed",
    details: ["Mathematics", "Physical Sciences"],
  },
];

export const additionalCertifications = [
  {
    name: "AWS Certified AI Practitioner (AIF-C01) – Exam Prep",
    issuer: "AWS Skill Builder",
    date: "May 2025",
    status: "In Progress",
  },
  {
    name: "Git Version Control (GitHub/GitLab)",
    issuer: "CodeAcademy",
    date: "February 2025",
    status: "Completed",
  },
  {
    name: "Introduction to Generative AI",
    issuer: "AWS Educate",
    date: "March 2025",
    status: "Completed",
  },
];