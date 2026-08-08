import { AtSign, GitFork, Mail, type LucideIcon } from "lucide-react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";

const socials: { label: string; href: string; icon: LucideIcon }[] = [
  { label: "GitHub", href: siteConfig.links.github, icon: GitFork },
  { label: "LinkedIn", href: siteConfig.links.linkedin, icon: AtSign },
  { label: "Email", href: `mailto:${siteConfig.email}`, icon: Mail },
];

export function SocialLinks({
  className,
  iconClassName,
}: {
  className?: string;
  iconClassName?: string;
}) {
  return (
    <div className={cn("flex items-center gap-2", className)}>
      {socials.map(({ label, href, icon: Icon }) => {
        const isExternal = href.startsWith("http");
        return (
          <a
            key={label}
            href={href}
            {...(isExternal ? { target: "_blank", rel: "noopener noreferrer" } : {})}
            aria-label={label}
            className={cn(
              "grid size-10 place-items-center rounded-xl border border-border bg-card/60 text-muted-foreground transition-all duration-300 hover:-translate-y-0.5 hover:border-primary/40 hover:text-foreground hover:shadow-lg hover:shadow-primary/10",
              iconClassName
            )}
          >
            <Icon className="size-[18px]" />
          </a>
        );
      })}
    </div>
  );
}
