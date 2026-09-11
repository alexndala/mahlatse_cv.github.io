export interface Certification {
  name: string;
  issuer: string;
  date: string;
  credentialId?: string;
  credentialUrl?: string;
  skills: string[];
  category: "Cloud/AWS" | "AI/ML" | "Finance/Quant" | "Data" | "Software Engineering" | "Professional" | "Blockchain";
  featured?: boolean;
}

export const certifications: Certification[] = [
  {
    name: "Coding: Debugging – 84th Percentile",
    issuer: "TestGorilla",
    date: "May 2026",
    skills: ["Debugging", "Problem Solving"],
    category: "Software Engineering",
    featured: true,
  },
  {
    name: "AWS – 81st Percentile",
    issuer: "TestGorilla",
    date: "May 2026",
    skills: ["Amazon Web Services (AWS)", "Amazon SNS", "Amazon SQS", "Amazon EC2", "AWS EventBridge", "Solution Architecture", "AWS IAM"],
    category: "Cloud/AWS",
    featured: true,
  },
  {
    name: "Exam Prep Standard Course: AWS Certified AI Practitioner (AIF-C01)",
    issuer: "Amazon Web Services (AWS)",
    date: "May 2025",
    skills: ["Artificial Intelligence (AI)", "GenAI", "AWS Bedrock", "AWS SageMaker", "AWS IAM", "MLOps"],
    category: "Cloud/AWS",
    featured: true,
  },
  {
    name: "Introduction to GenAI",
    issuer: "Amazon Web Services (AWS)",
    date: "March 2025",
    skills: ["Generative AI", "AI Fundamentals"],
    category: "AI/ML",
  },
  {
    name: "Artificial Intelligence",
    issuer: "IBM",
    date: "February 2025",
    skills: ["Deep Neural Networks (DNN)", "Machine Learning", "AI Ethics"],
    category: "AI/ML",
    featured: true,
  },
  {
    name: "Data",
    issuer: "IBM",
    date: "February 2025",
    skills: ["IBM Watson", "Predictive Analytics", "Data Science", "Data Modeling"],
    category: "Data",
  },
  {
    name: "Python and Statistics for Financial Analysis",
    issuer: "Coursera – Hong Kong University of Science and Technology",
    date: "January 2025",
    credentialUrl: "https://coursera.org/verify/...",
    skills: ["Statistical Analysis", "Financial Data Analysis", "Machine Learning", "Hypothesis Testing", "Linear Regression", "Sharpe Ratio", "Maximum Drawdown"],
    category: "Finance/Quant",
    featured: true,
  },
  {
    name: "Investment and Portfolio Management Specialization",
    issuer: "Coursera – Rice University",
    date: "June 2024",
    skills: ["Financial Markets", "Portfolio Management", "Asset Allocation", "Risk Management", "Trade Booking", "Performance Reporting"],
    category: "Finance/Quant",
    featured: true,
  },
  {
    name: "McKinsey Forward Program",
    issuer: "McKinsey & Company",
    date: "December 2024",
    skills: ["Problem Solving", "Navigating the Digital World", "Adaptability and Resilience", "Corporate Communications", "Relationships and Well-being"],
    category: "Professional",
    featured: true,
  },
  {
    name: "Introduction to Data Analysis in Excel",
    issuer: "Dataquest.io",
    date: "June 2024",
    credentialId: "S91IITB4Z0JH85F44T9J",
    skills: ["Data Modeling", "SQL", "Microsoft Excel", "Data Analysis"],
    category: "Data",
  },
  {
    name: "Investment Risk Management",
    issuer: "Coursera",
    date: "December 2023",
    skills: ["Financial Data Analysis", "Statistics", "Risk Management"],
    category: "Finance/Quant",
  },
  {
    name: "Version Control – Git (GitLab/GitHub)",
    issuer: "CodeAcademy",
    date: "February 2025",
    skills: ["Git", "GitHub", "GitLab", "CI/CD", "Collaboration"],
    category: "Software Engineering",
  },
  {
    name: "South African National Blockchain Alliance (SANBA) Member",
    issuer: "SANBA",
    date: "July 2021",
    skills: ["Blockchain"],
    category: "Blockchain",
  },
];

export const certificationsByCategory = certifications.reduce((acc, cert) => {
  if (!acc[cert.category]) acc[cert.category] = [];
  acc[cert.category].push(cert);
  return acc;
}, {} as Record<string, Certification[]>);