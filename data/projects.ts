export type Project = {
  id: string;
  name: string;
  year: string;
  description: string;
  tech: string[];
};

export const projects: Project[] = [
  {
    id: "platter-pos",
    name: "POS Back Office Admin Panel",
    year: "2026",
    description:
      "A mission-critical admin panel for a restaurant POS — enabling operators to manage orders, menu, and staff with role-based access and real-time Customer Facing Display (CFD) syncing.",
    tech: ["Next.js", "React", "GraphQL", "TypeScript", "Server Actions"],
  },
  {
    id: "platter-marketing",
    name: "Platter Marketing Website",
    year: "2026",
    description:
      "A high-performance marketing site for a food-tech brand — rebuilt with Next.js Server Actions for a seamless, conversion-focused user experience with lightning-fast loads.",
    tech: ["Next.js", "React", "Tailwind CSS", "Server Actions"],
  },
  {
    id: "notch-carbon",
    name: "Notch Carbon Accounting",
    year: "2024",
    description:
      "An enterprise carbon accounting platform — I owned site management, reporting, profiles, and membership modules, with role-based authentication hardening access control.",
    tech: ["React", "Next.js", "TypeScript", "Node.js", "MongoDB"],
  },
  {
    id: "alpha-compliance",
    name: "Alpha Compliance Hub",
    year: "2025",
    description:
      "A compliance platform with customer and admin applications — featuring real-time updates via Socket.io, interactive maps, and import/export compliance workflows on a microservice architecture.",
    tech: ["React", "Node.js", "NestJS", "Socket.io", "PostgreSQL"],
  },
  {
    id: "artmo",
    name: "Art Mo Platform",
    year: "2023",
    description:
      "A digital art gifting platform — I built the Authentication, Gift, and Art modules, enabling secure user access and seamless digital transactions.",
    tech: ["React", "Redux Toolkit", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "soft-partnas",
    name: "Soft Partnas Recruitment",
    year: "2023",
    description:
      "A recruitment platform connecting companies and candidates — with role-based authentication, subscriptions, job listings, and a full application workflow.",
    tech: ["React", "Redux", "Node.js", "Express", "MongoDB"],
  },
  {
    id: "scholar-lead",
    name: "Scholar-lead School Management",
    year: "2022",
    description:
      "A school management system — I developed the dashboard, enrollment, network, and goal management modules used daily by administrators.",
    tech: ["React", "Redux Toolkit", "Tailwind CSS", "Node.js", "MongoDB"],
  },
];
