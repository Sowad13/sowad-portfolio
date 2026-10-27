export const profile = {
  name: "Md Mejbah Ur Rahman Sowad",
  short: "Sowad",
  email: "mejbahur13@gmail.com",
  linkedin: "https://linkedin.com/in/mejbah-ur-rahman",
  github: "https://github.com/Sowad13",
  location: "Dhaka, Bangladesh",
  summary:
    "I manage large distributor and student portfolios, build trusted relationships, and use data and AI tools to turn insights into measurable results.",
};

export const stats = [
  { to: 100, suffix: "+", label: "distributor accounts managed" },
  { to: 1500, suffix: "+", label: "man-hours saved per year" },
  { to: 97, suffix: "%", label: "month-end sales prediction accuracy" },
  { to: 20, suffix: "+", label: "AI Contents, 7+ Brands, 3 Companies" },
];

export const skillsMarquee = [
  "Account management", "Stakeholder engagement", "Python", "SQL", "Power BI",
  "Tableau", "Retool", "Jira", "Figma", "Prompt engineering", "Escalation handling",
  "Training & enablement",
];

export const experience = [
  {
    role: "Product Manager, AI Content & Video Production",
    org: "DataInsightopia",
    when: "Jan 2026 – Jun 2026",
    points: [
      "Delivered 20+ pieces of AI-generated commercial content for 7+ brands across 3 client companies, translating client briefs into creative and technical outputs using AI-driven tools and prompt engineering (Suno, Veo, Nano Banana/Flow), from concept to final delivery.",
      "Led and mentored team members on around 10 additional projects, prioritizing by deadlines, scope, and client-defined success criteria to ensure on-time delivery, and introduced AI-based production workflows that improved turnaround time and content quality.",
    ],
  },
  {
    role: "Academic Mentor & English-Medium Tutor",
    org: "Quick Study (UK), Remote",
    when: "May 2025 – Oct 2025",
    points: [
      "Taught UK-based O Level and A Level students one-on-one and in groups, entirely in English.",
      "Built long-term relationships with students and parents and spotted learning gaps early.",
      "Tracked performance against target grades and sent regular progress reviews to parents.",
      "Prioritised a caseload by performance risk and exam proximity.",
    ],
  },
  {
    role: "Customer Service Executive",
    org: "Unilever Bangladesh Limited",
    when: "Mar 2024 – Apr 2025",
    points: [
      "Managed relationships and sales operations for 100+ distributor accounts across 3 of 4 national depots.",
      "Built Python and Excel automation that saved an estimated 1,500+ man-hours a year.",
      "Built 5+ Power BI dashboards to monitor account health and surface issues early.",
      "Worked with cross-functional teams on 2–3 service delivery projects.",
    ],
  },
  {
    role: "Distribution Requirement Planner (Contractual)",
    org: "Unilever Bangladesh Limited",
    when: "Jun 2023 – Feb 2024",
    points: [
      "Managed national stock distribution from multiple plants to 5 depots, keeping stock-unavailability loss below 5%.",
      "Wrote 15+ Python scripts to automate distribution planning.",
      "Designed and maintained 2 interactive Power BI dashboards.",
    ],
  },
];

export const projects = [
  {
    id: "plan-diish",
    title: "PLAN DIISH",
    sub: "Business waste alert automation",
    tags: ["Automation", "Data"],
    body: "Automated business waste alerts with Python, cutting operation time by over 90% and removing non-value-adding tasks. Also built a dynamic model that predicts month-end sales value with over 97% accuracy. It earned the Unilever Supply Chain Director's Award.",
    tools: ["Python", "Jupyter Notebook", "Excel"],
  },
  {
    id: "uttor",
    title: "Uttor",
    sub: "AI customer reply automation for SMEs",
    tags: ["AI", "Automation"],
    body: "A B2B service that automates customer replies for Bangladeshi SMEs across WhatsApp and Facebook Messenger, using Claude Haiku as the AI engine. It includes a client dashboard for managing conversations.",
    tools: ["Node.js", "Express", "WhatsApp Cloud API", "Messenger API"],
  },
  {
    id: "air",
    title: "Dhaka Air Pollution Analysis",
    sub: "SQL analysis and Power BI dashboard",
    tags: ["Data"],
    body: "Analysed Dhaka's air quality against WHO and Bangladesh standards with SQL, then built an interactive Power BI dashboard. It identified PM2.5 as the most critical pollutant across years.",
    tools: ["Excel", "SQL", "Power BI"],
  },
];

export const skillGroups = [
  { name: "Customer & relationship management", items: ["Account management", "Stakeholder engagement", "Client communication", "Training & enablement", "Escalation handling"] },
  { name: "Data analysis", items: ["Python", "SQL", "Excel"] },
  { name: "Visualisation & reporting", items: ["Power BI", "Tableau", "Retool"] },
  { name: "Tools & platforms", items: ["Git", "Figma", "MS Office", "Jira"] },
  { name: "AI content tools", items: ["Suno", "Veo", "Nano Banana/Flow", "Prompt engineering"] },
];

export const skillTabs = [
  { id: "customers", label: "Customers" },
  { id: "data", label: "Data" },
  { id: "reporting", label: "Reporting" },
  { id: "tools", label: "Tools" },
  { id: "ai", label: "AI" },
];

export const skillDetails = [
  { name: "Account management", g: "customers", proof: "Managed 100+ distributor accounts across 3 of 4 national depots at Unilever." },
  { name: "Stakeholder engagement", g: "customers", proof: "Primary contact for client stakeholders at DataInsightopia, turning business requirements into creative and technical briefs." },
  { name: "Client communication", g: "customers", proof: "Taught UK students entirely in English and sent regular progress reviews to their parents." },
  { name: "Training & enablement", g: "customers", proof: "Taught O Level and A Level students one-on-one and in groups, tailoring support to each student's gaps." },
  { name: "Escalation handling", g: "customers", proof: "Key contact for distributor service issues, using dashboards to surface problems before they escalated." },
  { name: "Python", g: "data", proof: "Wrote 15+ planning scripts and built automation that saved an estimated 1,500+ man-hours a year." },
  { name: "SQL", g: "data", proof: "Analysed Dhaka's air quality data against WHO and Bangladesh standards." },
  { name: "Excel", g: "data", proof: "Built workflow solutions and the month-end sales model behind PLAN DIISH, with over 97% accuracy." },
  { name: "Power BI", g: "reporting", proof: "Built 5+ account health dashboards and 2 real-time distribution dashboards at Unilever, plus the Dhaka air pollution dashboard." },
  { name: "Tableau", g: "reporting", proof: "Part of my reporting toolkit alongside Power BI." },
  { name: "Retool", g: "reporting", proof: "Part of my reporting toolkit for internal dashboards and tools." },
  { name: "Git", g: "tools", proof: "Version control for my projects. My code is on GitHub." },
  { name: "Figma", g: "tools", proof: "Part of my everyday toolkit for designing and planning." },
  { name: "Jira", g: "tools", proof: "Part of my everyday toolkit for tracking work across projects." },
  { name: "Prompt engineering", g: "ai", proof: "Produced commercial video with Suno, Veo and Nano Banana/Flow at DataInsightopia." },
  { name: "AI automation", g: "ai", proof: "Built Uttor, which replies to SME customers on WhatsApp and Messenger using Claude Haiku." },
];