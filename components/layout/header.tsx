"use client";

import { AnimatePresence, motion, useReducedMotion } from "motion/react";
import { Download, Menu, Search, X } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { Button } from "@/components/ui/button";
import { ThemeSwitcher } from "@/components/layout/theme-switcher";

function Logo() {
  return (
    <Link
      href="/"
      className="group flex items-center gap-2.5 rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
      aria-label={`${siteConfig.name} — home`}
    >
      <span className="relative grid size-9 place-items-center rounded-xl bg-gradient-to-br from-accent-a via-accent-b to-accent-c font-display text-sm font-bold text-white shadow-lg shadow-accent-b/30 transition-transform duration-300 group-hover:rotate-6">
        BM
        <span className="absolute inset-0 rounded-xl ring-1 ring-white/20" />
      </span>
      <span className="hidden font-display text-sm font-semibold tracking-tight sm:inline">
        Bhavik<span className="text-gradient"> Maheta</span>
      </span>
    </Link>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");
  const pathname = usePathname();
  const reduce = useReducedMotion();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const sections = ["home", "about", "experience", "projects", "contact"];
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) setActiveSection(entry.target.id);
        }
      },
      { rootMargin: "-45% 0px -50% 0px" }
    );
    sections.forEach((id) => {
      const el = document.getElementById(id);
      if (el) observer.observe(el);
    });
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    setMobileOpen(false);
  }, [pathname]);

  useEffect(() => {
    document.body.style.overflow = mobileOpen ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [mobileOpen]);

  const triggerPalette = () => {
    window.dispatchEvent(new KeyboardEvent("keydown", { key: "k", metaKey: true }));
  };

  return (
    <>
      <motion.header
        initial={{ y: reduce ? 0 : -24, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
        className={cn(
          "fixed inset-x-0 top-0 z-50 transition-all duration-300",
          scrolled
            ? "border-b border-border/70 bg-background/70 backdrop-blur-xl"
            : "border-b border-transparent bg-transparent"
        )}
      >
        <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
          <Logo />

          <nav
            aria-label="Primary"
            className="hidden items-center gap-1 lg:flex"
          >
            {siteConfig.nav.map((item) => {
              const active = item.href === `/#${activeSection}`;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  className={cn(
                    "relative rounded-full px-3.5 py-1.5 text-sm transition-colors",
                    active
                      ? "text-foreground"
                      : "text-muted-foreground hover:text-foreground"
                  )}
                >
                  {active && (
                    <motion.span
                      layoutId="nav-active"
                      className="absolute inset-0 -z-10 rounded-full bg-accent"
                      transition={{ type: "spring", stiffness: 400, damping: 32 }}
                    />
                  )}
                  {item.label}
                </Link>
              );
            })}
          </nav>

          <div className="flex items-center gap-1.5">
            <Button
              variant="ghost"
              size="icon"
              aria-label="Search (Cmd + K)"
              onClick={triggerPalette}
              className="hidden sm:inline-flex"
            >
              <Search className="size-4" />
            </Button>
            <ThemeSwitcher />
            <Button
              variant="gradient"
              size="sm"
              asChild
              className="hidden md:inline-flex"
            >
              <a href={siteConfig.links.resume} target="_blank" rel="noopener noreferrer">
                <Download className="size-3.5" />
                Resume
              </a>
            </Button>
            <Button
              variant="ghost"
              size="icon"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
              onClick={() => setMobileOpen((o) => !o)}
              className="lg:hidden"
            >
              {mobileOpen ? <X className="size-5" /> : <Menu className="size-5" />}
            </Button>
          </div>
        </div>
      </motion.header>

      {/* Mobile drawer */}
      <AnimatePresence>
        {mobileOpen && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-40 bg-background/60 backdrop-blur-sm lg:hidden"
            onClick={() => setMobileOpen(false)}
          >
            <motion.nav
              aria-label="Mobile"
              initial={{ y: -12, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              exit={{ y: -12, opacity: 0 }}
              transition={{ duration: 0.25 }}
              className="mx-4 mt-20 overflow-hidden rounded-2xl border border-border bg-card p-3 shadow-2xl"
              onClick={(e) => e.stopPropagation()}
            >
              {siteConfig.nav.map((item, i) => (
                <motion.div
                  key={item.href}
                  initial={{ opacity: 0, x: -8 }}
                  animate={{ opacity: 1, x: 0 }}
                  transition={{ delay: 0.04 * i }}
                >
                  <Link
                    href={item.href}
                    onClick={() => setMobileOpen(false)}
                    className="flex items-center justify-between rounded-xl px-4 py-3 text-sm text-foreground/85 transition-colors hover:bg-accent hover:text-accent-foreground"
                  >
                    {item.label}
                  </Link>
                </motion.div>
              ))}
              <div className="mt-2 border-t border-border pt-3">
                <Button variant="gradient" asChild className="w-full" onClick={() => setMobileOpen(false)}>
                  <a
                    href={siteConfig.links.resume}
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Download className="size-4" />
                    Download Resume
                  </a>
                </Button>
              </div>
            </motion.nav>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
