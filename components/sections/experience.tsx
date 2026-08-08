"use client";

import { motion, useInView, useReducedMotion } from "motion/react";
import { ArrowUpRight, Briefcase, Calendar, MapPin } from "lucide-react";
import { useRef } from "react";
import { cn } from "@/lib/utils";
import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/shared/section-heading";
import { Badge } from "@/components/ui/badge";

export function Experience() {
  return (
    <section id="experience" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Experience"
          title="Four years of shipping, three companies, countless lessons"
          description="A career spent turning product problems into polished, reliable software."
          icon={Briefcase}
        />

        <div className="relative mt-16">
          {/* Vertical line */}
          <div
            aria-hidden="true"
            className="absolute left-4 top-0 h-full w-px bg-gradient-to-b from-accent-a/60 via-accent-b/40 to-transparent sm:left-1/2 sm:-translate-x-1/2"
          />

          <div className="space-y-12">
            {experience.map((job, i) => (
              <TimelineItem key={job.id} job={job} index={i} />
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

function TimelineItem({ job, index }: { job: (typeof experience)[number]; index: number }) {
  const ref = useRef<HTMLDivElement>(null);
  const inView = useInView(ref, { once: true, margin: "-80px" });
  const reduce = useReducedMotion();
  const left = index % 2 === 0;

  return (
    <div ref={ref} className="relative pl-12 sm:pl-0">
      {/* Node */}
      <div
        aria-hidden="true"
        className="absolute left-4 top-2 -translate-x-1/2 sm:left-1/2"
      >
        <motion.span
          className="block size-4 rounded-full border-2 border-background bg-gradient-to-br from-accent-a to-accent-c shadow-lg shadow-accent-b/40"
          initial={{ scale: 0 }}
          animate={inView ? { scale: 1 } : { scale: 0 }}
          transition={{ type: "spring", stiffness: 300, damping: 20, delay: 0.2 }}
        />
      </div>

      <motion.div
        initial={{ opacity: 0, x: reduce ? 0 : left ? -32 : 32, y: 12 }}
        animate={inView ? { opacity: 1, x: 0, y: 0 } : {}}
        transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "sm:w-[calc(50%-2.5rem)]",
          left ? "sm:mr-auto" : "sm:ml-auto"
        )}
      >
        <article className="card-hover group relative overflow-hidden rounded-2xl border border-border bg-card/60 p-6 backdrop-blur-xl">
          <div
            aria-hidden="true"
            className="pointer-events-none absolute -right-12 -top-12 size-40 rounded-full bg-accent-b/10 blur-2xl transition-opacity duration-500 group-hover:opacity-100"
          />

          <div className="flex items-start justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="font-display text-lg font-bold text-foreground">
                  {job.company}
                </span>
                {job.website && (
                  <a
                    href={job.website}
                    target="_blank"
                    rel="noopener noreferrer"
                    aria-label={`${job.company} website`}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    <ArrowUpRight className="size-4" />
                  </a>
                )}
              </div>
              <p className="mt-0.5 text-sm font-medium text-primary">{job.position}</p>
            </div>
            <Badge variant="outline" className="shrink-0">
              {job.period}
            </Badge>
          </div>

          <div className="mt-3 flex flex-wrap items-center gap-x-4 gap-y-1 text-xs text-muted-foreground">
            <span className="flex items-center gap-1">
              <Calendar className="size-3.5" />
              {job.period}
            </span>
            <span className="flex items-center gap-1">
              <MapPin className="size-3.5" />
              {job.location}
            </span>
            <span>{job.type}</span>
          </div>

          <p className="mt-4 text-sm leading-relaxed text-muted-foreground">
            {job.summary}
          </p>

          <ul className="mt-4 space-y-2.5">
            {job.highlights.map((h) => (
              <li key={h.text} className="flex gap-2.5 text-sm text-foreground/85">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 rounded-full bg-gradient-to-r from-accent-a to-accent-c"
                />
                <span>
                  {h.text}
                  {h.metric && (
                    <span className="ml-1.5 font-mono text-xs text-primary">{h.metric}</span>
                  )}
                </span>
              </li>
            ))}
          </ul>

          <div className="mt-5 flex flex-wrap gap-1.5">
            {job.technologies.map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
        </article>
      </motion.div>
    </div>
  );
}
