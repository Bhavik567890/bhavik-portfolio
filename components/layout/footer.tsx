import { ArrowUpRight } from "lucide-react";
import Link from "next/link";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import { SocialLinks } from "@/components/shared/social-links";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";

const columns: { title: string; links: { label: string; href: string }[] }[] = [
  {
    title: "Navigate",
    links: siteConfig.nav.map((item) => ({ label: item.label, href: item.href })),
  },
  {
    title: "Elsewhere",
    links: [
      { label: "GitHub", href: siteConfig.links.github },
      { label: "LinkedIn", href: siteConfig.links.linkedin },
      { label: "Email", href: `mailto:${siteConfig.email}` },
    ],
  },
];

export function Footer() {
  return (
    <footer className="relative border-t border-border bg-card/40">
      <div className="mx-auto max-w-6xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr]">
          <div>
            <Link href="/" className="flex items-center gap-2.5">
              <span className="grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent-a via-accent-b to-accent-c font-display text-sm font-bold text-white shadow-lg shadow-accent-b/30">
                BM
              </span>
              <span className="font-display text-sm font-semibold tracking-tight">
                Bhavik Maheta
              </span>
            </Link>
            <p className="mt-4 max-w-xs text-sm leading-relaxed text-muted-foreground">
              {profile.summary}
            </p>
            <SocialLinks className="mt-6" />
          </div>

          {columns.map((col) => (
            <nav key={col.title} aria-label={col.title}>
              <h3 className="text-xs font-semibold uppercase tracking-widest text-muted-foreground">
                {col.title}
              </h3>
              <ul className="mt-4 space-y-3">
                {col.links.map((link) => {
                  const isExternal = link.href.startsWith("http");
                  return (
                    <li key={link.label}>
                      <Link
                        href={link.href}
                        className="group inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-foreground"
                        {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      >
                        {link.label}
                        {isExternal && (
                          <ArrowUpRight className="size-3 opacity-0 transition-opacity group-hover:opacity-100" />
                        )}
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </nav>
          ))}
        </div>

        <div className="mt-14 flex flex-col items-center justify-center gap-4 border-t border-border pt-8 sm:flex-row">
          <div className="flex items-center gap-3">
            <Link
              href={siteConfig.links.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-foreground"
            >
              Resume
            </Link>
            <span className="text-muted-foreground/40">·</span>
            <span className="text-sm text-muted-foreground">GMT+5:30 · Ahmedabad</span>
            <ThemeSwitcher />
          </div>
        </div>
      </div>
    </footer>
  );
}
