export const siteConfig = {
  name: "Bhavik Maheta",
  role: "Full-Stack Software Engineer",
  url: process.env.NEXT_PUBLIC_SITE_URL ?? "https://bhavikmaheta.dev",
  email: "bhavikvasani7777@gmail.com",
  location: "Ahmedabad, Gujarat, India",
  phone: "+91 98980 07453",
  description:
    "Bhavik Maheta is a Full-Stack Software Engineer with 4+ years of experience building high-performance web applications with React, Next.js, TypeScript, Node.js and NestJS.",
  keywords: [
    "Bhavik Maheta",
    "Full-Stack Engineer",
    "Software Engineer",
    "React Developer",
    "Next.js Developer",
    "TypeScript",
    "Node.js",
    "NestJS",
    "Portfolio",
    "Frontend Engineer",
    "Ahmedabad",
  ],
  links: {
    github: "https://github.com/bhavikmaheta",
    linkedin: "https://www.linkedin.com/in/bhavik-maheta-688132244/",
    resume: "/resume/bhavik-maheta-resume.pdf",
  },
  nav: [
    { label: "Home", href: "/#home" },
    { label: "About", href: "/#about" },
    { label: "Experience", href: "/#experience" },
    { label: "Projects", href: "/#projects" },
    { label: "Contact", href: "/#contact" },
  ],
} as const;

export type SiteConfig = typeof siteConfig;
