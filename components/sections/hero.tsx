"use client";

import { motion, useReducedMotion } from "motion/react";
import {
  ArrowDown,
  Hexagon,
  Mail,
  MapPin,
  Sparkles,
  Zap,
} from "lucide-react";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import { TypingEffect } from "@/components/effects/typing-effect";
import { Aurora } from "@/components/effects/aurora";
import { GridBackground } from "@/components/effects/grid-background";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { SocialLinks } from "@/components/shared/social-links";

const floatingBadges = [
  { icon: Hexagon, label: "React", className: "-top-4 -left-6", delay: 0 },
  { icon: Zap, label: "Next.js", className: "top-1/3 -right-8", delay: 1.2 },
  { icon: Sparkles, label: "TypeScript", className: "-bottom-4 -left-4", delay: 0.6 },
];

export function Hero() {
  const reduce = useReducedMotion();

  return (
    <section
      id="home"
      aria-label="Introduction"
      className="relative flex min-h-[100svh] items-center overflow-hidden pb-20 pt-28"
    >
      <Aurora variant="hero" />
      <GridBackground />
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-0 h-64 w-[60rem] -translate-x-1/2 rounded-full bg-accent-a/10 blur-3xl"
      />

      <div className="relative z-10 mx-auto grid w-full max-w-6xl items-center gap-16 px-4 sm:px-6 lg:grid-cols-[1.15fr_0.85fr] lg:px-8">
        {/* Copy */}
        <div>
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
            className="flex flex-wrap items-center gap-2"
          >
            <Badge variant="accent" className="gap-1.5 px-3 py-1">
              <span className="relative flex size-2">
                <span className="absolute inline-flex size-full animate-ping rounded-full bg-emerald-400 opacity-75" />
                <span className="relative inline-flex size-2 rounded-full bg-emerald-500" />
              </span>
              {profile.availability}
            </Badge>
            <Badge variant="outline" className="gap-1">
              <MapPin className="size-3 text-primary" />
              {profile.location}
            </Badge>
          </motion.div>

          <motion.h1
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 font-display text-4xl font-extrabold leading-[1.08] tracking-tight text-foreground sm:text-6xl lg:text-[4.2rem]"
          >
            Hi, I&apos;m{" "}
            <span className="bg-gradient-to-r from-accent-a via-accent-b to-accent-c bg-clip-text text-transparent">
              {profile.name}
            </span>
            .
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="mt-4 font-display text-2xl font-semibold tracking-tight text-muted-foreground sm:text-3xl"
          >
            <TypingEffect
              words={profile.roles}
              className="text-gradient"
              typingSpeed={65}
              pauseMs={2200}
            />
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-6 max-w-xl text-base leading-relaxed text-muted-foreground sm:text-lg"
          >
            {profile.tagline}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.4, ease: [0.22, 1, 0.36, 1] }}
            className="mt-8 flex flex-wrap items-center gap-3"
          >
            <MagneticButton>
              <Button variant="gradient" size="lg" asChild>
                <a
                  href={siteConfig.links.resume}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Download Resume
                </a>
              </Button>
            </MagneticButton>
            <MagneticButton>
              <Button variant="outline" size="lg" asChild>
                <a href="#contact">
                  <Mail className="size-4" />
                  Let&apos;s talk
                </a>
              </Button>
            </MagneticButton>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className="mt-8"
          >
            <SocialLinks />
          </motion.div>
        </div>

        {/* Visual identity */}
        <motion.div
          initial={{ opacity: 0, scale: 0.94 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.25, ease: [0.22, 1, 0.36, 1] }}
          className="relative mx-auto w-full max-w-sm lg:max-w-md"
        >
          <motion.div
            animate={reduce ? undefined : { y: [0, -14, 0] }}
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
            className="relative aspect-square"
          >
            <div
              aria-hidden="true"
              className="absolute -inset-4 rounded-[2.5rem] bg-gradient-to-br from-accent-a/30 via-accent-b/20 to-accent-c/30 blur-2xl"
            />
            <div className="relative flex aspect-square w-full items-center justify-center overflow-hidden rounded-[2.5rem] border border-border bg-gradient-to-br from-accent-a/15 via-card to-accent-c/10 shadow-2xl backdrop-blur-xl">
              <div className="absolute inset-0 grid-pattern opacity-60" />
              <div className="relative flex flex-col items-center gap-4">
                <div className="grid size-32 place-items-center rounded-[2rem] bg-gradient-to-br from-accent-a via-accent-b to-accent-c font-display text-5xl font-extrabold text-white shadow-2xl shadow-accent-b/40">
                  BM
                </div>
                <p className="text-center font-mono text-xs text-muted-foreground">
                  bhavikmaheta.dev
                </p>
                <div className="flex gap-2">
                  {["⚛", "▲", "TS"].map((tag) => (
                    <span
                      key={tag}
                      className="grid size-8 place-items-center rounded-lg border border-border bg-card/80 text-sm"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </div>

            {floatingBadges.map(({ icon: Icon, label, className, delay }) => (
              <motion.div
                key={label}
                animate={reduce ? undefined : { y: [0, -10, 0] }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "easeInOut",
                  delay,
                }}
                className={`absolute ${className} flex items-center gap-2 rounded-2xl border border-border bg-card/80 px-3.5 py-2.5 shadow-xl backdrop-blur-xl`}
              >
                <span className="grid size-8 place-items-center rounded-lg bg-primary/10 text-primary">
                  <Icon className="size-4" />
                </span>
                <span className="text-sm font-medium">{label}</span>
              </motion.div>
            ))}
          </motion.div>
        </motion.div>
      </div>

      <motion.a
        href="#about"
        aria-label="Scroll to about section"
        className="absolute bottom-6 left-1/2 z-10 hidden -translate-x-1/2 rounded-full border border-border p-2.5 text-muted-foreground transition-colors hover:text-foreground sm:block"
        animate={reduce ? undefined : { y: [0, 8, 0] }}
        transition={{ duration: 1.8, repeat: Infinity, ease: "easeInOut" }}
      >
        <ArrowDown className="size-4" />
      </motion.a>
    </section>
  );
}
