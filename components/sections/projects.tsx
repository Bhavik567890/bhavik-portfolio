import { FolderKanban } from "lucide-react";
import type { Project } from "@/data/projects";
import { projects } from "@/data/projects";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { Badge } from "@/components/ui/badge";

export function Projects() {
  return (
    <section id="projects" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Featured projects"
          title="Work that shipped to real users"
          description="A selection of products I've built and owned across SaaS, POS, compliance, and more."
          icon={FolderKanban}
        />

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((project, i) => (
            <Reveal key={project.id} delay={i * 0.05} className="h-full">
              <ProjectCard project={project} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}

function ProjectCard({ project }: { project: Project }) {
  return (
    <article className="card-hover flex h-full flex-col rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl">
      <div className="min-w-0">
        <h3 className="font-display text-lg font-semibold tracking-tight text-foreground">
          {project.name}
        </h3>
        <p className="mt-0.5 font-mono text-xs text-muted-foreground">{project.year}</p>
      </div>

      <p className="mt-3 flex-1 text-sm leading-relaxed text-muted-foreground">
        {project.description}
      </p>

      <div className="mt-5 flex flex-wrap gap-1.5">
        {project.tech.map((tech) => (
          <Badge key={tech} variant="secondary">
            {tech}
          </Badge>
        ))}
      </div>
    </article>
  );
}
