import { GraduationCap, Languages, UserRound } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { Counter } from "@/components/effects/counter";

const stats = [
  { value: 4, suffix: "+", label: "Years of experience" },
  { value: 12, suffix: "+", label: "Products shipped" },
  { value: 3, suffix: "", label: "Companies" },
  { value: 8, suffix: "", label: "Technologies" },
];

export function About() {
  return (
    <section id="about" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="About me"
          title="Engineering precision, designed for people"
          description="A short story about who I am, what I value, and the path that got me here."
          icon={UserRound}
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[1.2fr_0.8fr]">
          {/* Story */}
          <div className="space-y-5">
            {profile.about.map((paragraph, i) => (
              <Reveal key={i} delay={i * 0.08}>
                <p className="text-base leading-relaxed text-muted-foreground">
                  {paragraph}
                </p>
              </Reveal>
            ))}

            <Reveal delay={0.2}>
              <div className="mt-6 flex flex-wrap gap-2">
                {profile.interests.map((interest) => (
                  <span
                    key={interest}
                    className="rounded-full border border-border bg-card/60 px-3.5 py-1.5 text-sm text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {interest}
                  </span>
                ))}
              </div>
            </Reveal>
          </div>

          {/* Facts + education */}
          <div className="space-y-6">
            <Reveal delay={0.1}>
              <div className="grid grid-cols-2 gap-4">
                {profile.facts.map((fact) => (
                  <div
                    key={fact.label}
                    className="min-w-0 rounded-2xl border border-border bg-card/60 p-4 transition-colors hover:border-primary/30"
                  >
                    <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                      {fact.label}
                    </p>
                    {fact.label === "Email" ? (
                      <a
                        href={`mailto:${fact.value}`}
                        className="mt-1.5 block text-sm font-medium break-all text-primary transition-colors hover:underline"
                      >
                        {fact.value}
                      </a>
                    ) : (
                      <p className="mt-1.5 text-sm font-medium text-foreground">
                        {fact.value}
                      </p>
                    )}
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.18}>
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-2 text-primary">
                  <GraduationCap className="size-4" />
                  <h3 className="font-display text-sm font-semibold">Education</h3>
                </div>
                {profile.education.map((edu) => (
                  <div key={edu.institution} className="mt-4">
                    <p className="font-medium text-foreground">{edu.degree}</p>
                    <p className="mt-0.5 text-sm text-muted-foreground">
                      {edu.institution} · {edu.location}
                    </p>
                    <p className="mt-0.5 font-mono text-xs text-primary">{edu.period}</p>
                  </div>
                ))}
              </div>
            </Reveal>

            <Reveal delay={0.26}>
              <div className="rounded-2xl border border-border bg-card/60 p-5">
                <div className="flex items-center gap-2 text-primary">
                  <Languages className="size-4" />
                  <h3 className="font-display text-sm font-semibold">Languages</h3>
                </div>
                <ul className="mt-4 space-y-3">
                  {profile.languages.map((lang) => (
                    <li key={lang.name}>
                      <div className="flex items-center justify-between text-sm">
                        <span className="font-medium text-foreground">{lang.name}</span>
                        <span className="text-muted-foreground">{lang.level}</span>
                      </div>
                      <div className="mt-1.5 h-1.5 overflow-hidden rounded-full bg-muted">
                        <div
                          className="h-full rounded-full bg-gradient-to-r from-accent-a to-accent-c"
                          style={{ width: `${lang.proficiency}%` }}
                        />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </Reveal>
          </div>
        </div>

        {/* Stats band */}
        <Reveal className="mt-20" delay={0.1}>
          <div className="relative overflow-hidden rounded-3xl border border-border bg-card/50 p-8 backdrop-blur-xl sm:p-12">
            <div
              aria-hidden="true"
              className="pointer-events-none absolute -right-20 -top-20 size-64 rounded-full bg-accent-b/15 blur-3xl"
            />
            <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
              {stats.map((stat, i) => (
                <Reveal key={stat.label} delay={i * 0.08}>
                  <div className="text-center">
                    <p className="font-display text-4xl font-extrabold tracking-tight sm:text-5xl">
                      <Counter
                        to={stat.value}
                        suffix={stat.suffix}
                        className="text-gradient"
                      />
                    </p>
                    <p className="mt-2 text-sm text-muted-foreground">{stat.label}</p>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
