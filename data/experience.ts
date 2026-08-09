export type Experience = {
  id: string;
  company: string;
  position: string;
  period: string;
  type: string;
  location: string;
  website: string;
  summary: string;
  highlights: { text: string; metric?: string }[];
  technologies: string[];
  stack: { category: string; items: string[] }[];
};

export const experience: Experience[] = [
  {
    id: "platter",
    company: "Platter",
    position: "Software Engineer",
    period: "Apr 2026 – Present",
    type: "Full-time",
    location: "Ahmedabad, India",
    website: "https://plattermanagement.com",
    summary:
      "Owning customer-facing surfaces at a growing food-tech company — from the marketing website that tells the brand story to the point-of-sale admin that runs restaurant operations.",
    highlights: [
      {
        text: "Developed and maintained the marketing website with Next.js and Server Actions, improving performance and delivering a seamless user experience.",
        metric: "Marketing site · Next.js + Server Actions",
      },
      {
        text: "Owned the POS Back Office Admin Panel, implementing GraphQL-powered features such as Customer Facing Display (CFD) and role-based access control.",
        metric: "CFD + RBAC · GraphQL",
      },
      {
        text: "Resolved production issues and delivered enhancements end-to-end through Jira-driven agile delivery.",
        metric: "Production reliability",
      },
    ],
    technologies: ["Next.js", "React", "GraphQL", "TypeScript", "Server Actions"],
    stack: [
      { category: "Frontend", items: ["Next.js", "React", "TypeScript"] },
      { category: "API", items: ["GraphQL", "Server Actions"] },
      { category: "Workflow", items: ["Jira", "GitHub", "CI/CD"] },
    ],
  },
  {
    id: "communication-crafts",
    company: "Communication Crafts",
    position: "Software Engineer",
    period: "Mar 2024 – Mar 2026",
    type: "Full-time",
    location: "Ahmedabad, India",
    website: "https://communicationcrafts.com",
    summary:
      "Built sustainability and compliance products used by enterprises — shipping complex data models, real-time collaboration, and security-first access control across two flagship SaaS platforms.",
    highlights: [
      {
        text: "Developed and maintained key modules for the Notch Carbon Accounting Software — site management, reporting, user profiles, and membership — while implementing role-based authentication to strengthen security and access control.",
        metric: "Carbon accounting SaaS",
      },
      {
        text: "Built customer-facing and administrator applications for Alpha Compliance Hub with microservice integrations, real-time updates via Socket.io, interactive maps, and import/export compliance workflows.",
        metric: "Real-time · Microservices",
      },
      {
        text: "Contributed across frontend architecture, API integration, and security — reducing time-to-merge and raising code-quality bar through review.",
        metric: "Cross-stack delivery",
      },
    ],
    technologies: ["React", "Next.js", "NestJS", "Socket.io", "MongoDB", "Node.js"],
    stack: [
      { category: "Frontend", items: ["React", "Next.js", "TypeScript"] },
      { category: "Backend", items: ["Node.js", "NestJS", "GraphQL", "Socket.io"] },
      { category: "Data", items: ["MongoDB", "PostgreSQL"] },
    ],
  },
  {
    id: "tridhya",
    company: "Tridhya Tech PVT LTD",
    position: "Associate Software Engineer",
    period: "Sep 2021 – Feb 2024",
    type: "Full-time",
    location: "Ahmedabad, India",
    website: "https://www.tridhyatech.com",
    summary:
      "My launchpad — where I learned to ship. Built core modules across three products spanning digital gifting, recruitment, and education, establishing strong fundamentals in scalable frontend architecture.",
    highlights: [
      {
        text: "Developed core modules for the Art Mo platform — Authentication, Gift, and Art features — enabling secure user access and seamless digital transactions.",
        metric: "Digital gifting platform",
      },
      {
        text: "Built role-based authentication, subscription modules, job listings, and application workflows for the Soft Partnas recruitment platform.",
        metric: "Recruitment SaaS",
      },
      {
        text: "Developed core modules for the Scholar-lead School Management System — dashboard, enrollment, network, and goal management features.",
        metric: "School management SaaS",
      },
    ],
    technologies: ["React", "Redux", "Node.js", "Express", "MongoDB", "Tailwind CSS"],
    stack: [
      { category: "Frontend", items: ["React", "Redux Toolkit", "Tailwind CSS"] },
      { category: "Backend", items: ["Node.js", "Express.js"] },
      { category: "Data", items: ["MongoDB"] },
    ],
  },
];
