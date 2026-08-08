"use client";

import { AnimatePresence, motion } from "motion/react";
import { CheckCircle2, Loader2, Mail, MapPin, Phone, Send } from "lucide-react";
import { useActionState, useEffect, useRef, useState } from "react";
import { sendMessage, type ContactState } from "@/app/actions/send-message";
import { siteConfig } from "@/data/site";
import { SectionHeading } from "@/components/shared/section-heading";
import { Reveal } from "@/components/effects/reveal";
import { MagneticButton } from "@/components/effects/magnetic-button";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { SocialLinks } from "@/components/shared/social-links";

const contactChannels = [
  { icon: Mail, label: "Email", value: siteConfig.email, href: `mailto:${siteConfig.email}` },
  { icon: Phone, label: "Phone", value: siteConfig.phone, href: `tel:${siteConfig.phone.replace(/[^+\d]/g, "")}` },
  { icon: MapPin, label: "Location", value: siteConfig.location, href: undefined },
];

export function Contact() {
  const [state, action, pending] = useActionState<ContactState, FormData>(
    sendMessage,
    {}
  );
  const [submitted, setSubmitted] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  useEffect(() => {
    if (state.success) {
      setSubmitted(true);
      timeoutRef.current = setTimeout(() => setSubmitted(false), 6000);
    }
    return () => clearTimeout(timeoutRef.current!);
  }, [state.success]);

  return (
    <section id="contact" className="relative scroll-mt-24 py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <SectionHeading
          eyebrow="Contact"
          title="Let's build something great together"
          description="Whether it's a full-time role, freelance project, or just a hello — my inbox is always open."
        />

        <div className="mt-16 grid gap-10 lg:grid-cols-[0.9fr_1.1fr]">
          {/* Info */}
          <div className="space-y-4">
            <Reveal>
              <p className="text-base leading-relaxed text-muted-foreground">
                I&apos;m currently available for select freelance and full-time
                opportunities. I typically reply within 24 hours.
              </p>
            </Reveal>
            {contactChannels.map((channel, i) => {
              const Icon = channel.icon;
              return (
                <Reveal key={channel.label} delay={i * 0.07}>
                  <a
                    href={channel.href}
                    aria-disabled={!channel.href}
                    className={`card-hover flex items-center gap-4 rounded-2xl border border-border bg-card/60 p-5 backdrop-blur-xl ${
                      channel.href ? "" : "pointer-events-none"
                    }`}
                  >
                    <span className="grid size-12 shrink-0 place-items-center rounded-xl bg-primary/10 text-primary">
                      <Icon className="size-5" />
                    </span>
                    <div className="min-w-0">
                      <p className="text-xs font-medium uppercase tracking-wider text-muted-foreground">
                        {channel.label}
                      </p>
                      <p className="truncate text-sm font-medium text-foreground">
                        {channel.value}
                      </p>
                    </div>
                  </a>
                </Reveal>
              );
            })}
            <Reveal delay={0.25}>
              <SocialLinks className="pt-2" />
            </Reveal>
          </div>

          {/* Form */}
          <Reveal delay={0.1}>
            <form
              action={action}
              className="rounded-3xl border border-border bg-card/50 p-6 backdrop-blur-xl sm:p-8"
            >
              <AnimatePresence mode="wait">
                {submitted ? (
                  <motion.div
                    key="success"
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0 }}
                    className="flex min-h-[380px] flex-col items-center justify-center gap-4 text-center"
                  >
                    <motion.div
                      initial={{ scale: 0 }}
                      animate={{ scale: 1 }}
                      transition={{ type: "spring", stiffness: 260, damping: 18, delay: 0.1 }}
                    >
                      <CheckCircle2 className="size-20 text-emerald-500" />
                    </motion.div>
                    <h3 className="font-display text-2xl font-bold tracking-tight">
                      Message sent!
                    </h3>
                    <p className="max-w-sm text-sm text-muted-foreground">
                      Thanks for reaching out. I&apos;ll get back to you shortly.
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      onClick={() => setSubmitted(false)}
                    >
                      Send another message
                    </Button>
                  </motion.div>
                ) : (
                  <motion.div
                    key="form"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="space-y-5"
                  >
                    <div className="grid gap-5 sm:grid-cols-2">
                      <div className="space-y-2">
                        <Label htmlFor="contact-name">Name</Label>
                        <Input
                          id="contact-name"
                          name="name"
                          placeholder="Your name"
                          autoComplete="name"
                          required
                          maxLength={100}
                        />
                      </div>
                      <div className="space-y-2">
                        <Label htmlFor="contact-email">Email</Label>
                        <Input
                          id="contact-email"
                          name="email"
                          type="email"
                          placeholder="you@example.com"
                          autoComplete="email"
                          required
                          maxLength={254}
                        />
                      </div>
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-subject">Subject</Label>
                      <Input
                        id="contact-subject"
                        name="subject"
                        placeholder="What's this about?"
                        maxLength={150}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="contact-message">Message</Label>
                      <Textarea
                        id="contact-message"
                        name="message"
                        placeholder="Tell me about your project or opportunity…"
                        required
                        maxLength={5000}
                      />
                    </div>

                    {state.error && (
                      <p
                        role="alert"
                        className="rounded-xl border border-destructive/30 bg-destructive/10 px-4 py-3 text-sm text-destructive"
                      >
                        {state.error}
                      </p>
                    )}

                    <MagneticButton className="w-full">
                      <Button
                        type="submit"
                        variant="gradient"
                        size="lg"
                        disabled={pending}
                        className="w-full"
                      >
                        {pending ? (
                          <Loader2 className="size-4 animate-spin" />
                        ) : (
                          <Send className="size-4" />
                        )}
                        {pending ? "Sending…" : "Send message"}
                      </Button>
                    </MagneticButton>
                  </motion.div>
                )}
              </AnimatePresence>
            </form>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
