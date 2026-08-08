"use client";

import * as React from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import {
  ArrowUpRight,
  CornerDownLeft,
  FileText,
  Mail,
  Moon,
  Search,
  Sun,
  type LucideIcon,
} from "lucide-react";
import { useEffect, useMemo, useState } from "react";
import { cn } from "@/lib/utils";
import { siteConfig } from "@/data/site";
import { profile } from "@/data/profile";
import { Dialog, DialogContent } from "@/components/ui/dialog";

type CommandItem = {
  id: string;
  label: string;
  hint?: string;
  keywords: string;
  icon: LucideIcon;
  action: () => void;
};

export function CommandPalette() {
  const router = useRouter();
  const { resolvedTheme, setTheme } = useTheme();
  const [open, setOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [active, setActive] = useState(0);

  const toggleTheme = () => setTheme(resolvedTheme === "dark" ? "light" : "dark");

  const items = useMemo<CommandItem[]>(
    () => [
      ...siteConfig.nav.map((item, i) => ({
        id: `nav-${i}`,
        label: `Go to ${item.label}`,
        hint: item.href,
        keywords: item.label,
        icon: Search,
        action: () => {
          setOpen(false);
          router.push(item.href);
        },
      })),
      {
        id: "resume",
        label: "Download resume (PDF)",
        hint: siteConfig.links.resume,
        keywords: "resume cv download pdf",
        icon: FileText,
        action: () => {
          setOpen(false);
          window.open(siteConfig.links.resume, "_blank", "noopener");
        },
      },
      {
        id: "theme",
        label: "Toggle light / dark mode",
        hint: "theme",
        keywords: "theme dark light mode",
        icon: Sun,
        action: () => {
          setOpen(false);
          toggleTheme();
        },
      },
      {
        id: "email",
        label: `Email ${profile.firstName}`,
        hint: profile.email,
        keywords: "email contact mail reach",
        icon: Mail,
        action: () => {
          setOpen(false);
          window.location.href = `mailto:${profile.email}`;
        },
      },
      {
        id: "github",
        label: "Open GitHub",
        hint: "github.com",
        keywords: "github code repo",
        icon: ArrowUpRight,
        action: () => {
          setOpen(false);
          window.open(siteConfig.links.github, "_blank", "noopener");
        },
      },
      {
        id: "linkedin",
        label: "Open LinkedIn",
        hint: "linkedin.com",
        keywords: "linkedin profile connect",
        icon: ArrowUpRight,
        action: () => {
          setOpen(false);
          window.open(siteConfig.links.linkedin, "_blank", "noopener");
        },
      },
    ],
    // eslint-disable-next-line react-hooks/exhaustive-deps
    [router, setTheme]
  );

  const filtered = useMemo(() => {
    const q = query.trim().toLowerCase();
    if (!q) return items;
    return items.filter(
      (item) =>
        item.label.toLowerCase().includes(q) ||
        item.keywords.toLowerCase().includes(q) ||
        (item.hint ?? "").toLowerCase().includes(q)
    );
  }, [items, query]);

  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "k" && (e.metaKey || e.ctrlKey)) {
        e.preventDefault();
        setOpen((o) => !o);
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  useEffect(() => setActive(0), [query, open]);

  useEffect(() => {
    if (!open) return;
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "ArrowDown") {
        e.preventDefault();
        setActive((a) => (a + 1) % Math.max(filtered.length, 1));
      } else if (e.key === "ArrowUp") {
        e.preventDefault();
        setActive((a) => (a - 1 + filtered.length) % Math.max(filtered.length, 1));
      } else if (e.key === "Enter") {
        e.preventDefault();
        filtered[active]?.action();
      }
    };
    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [open, filtered, active]);

  return (
    <Dialog open={open} onOpenChange={setOpen}>
      <DialogContent className="gap-0 overflow-hidden p-0 sm:max-w-xl">
        <div className="flex items-center gap-3 border-b border-border px-4">
          <Search className="size-4 shrink-0 text-muted-foreground" />
          <input
            autoFocus
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Type a command or search…"
            className="h-12 w-full bg-transparent text-sm outline-none placeholder:text-muted-foreground"
            aria-label="Search"
          />
          <kbd className="hidden shrink-0 rounded-md border border-border bg-muted px-1.5 py-0.5 font-mono text-[10px] text-muted-foreground sm:inline-block">
            ESC
          </kbd>
        </div>
        <div className="max-h-[340px] overflow-y-auto p-2">
          {filtered.length === 0 && (
            <p className="px-3 py-8 text-center text-sm text-muted-foreground">
              No results for “{query}”.
            </p>
          )}
          {filtered.map((item, i) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                type="button"
                onClick={item.action}
                onMouseEnter={() => setActive(i)}
                className={cn(
                  "flex w-full items-center gap-3 rounded-lg px-3 py-2.5 text-left text-sm transition-colors",
                  active === i
                    ? "bg-accent text-accent-foreground"
                    : "text-foreground/80"
                )}
              >
                <Icon
                  className={cn(
                    "size-4 shrink-0",
                    active === i ? "text-accent-foreground" : "text-muted-foreground"
                  )}
                />
                <span className="flex-1 truncate">{item.label}</span>
                {item.hint && item.hint.startsWith("/") && (
                  <span className="font-mono text-[10px] text-muted-foreground">
                    {item.hint}
                  </span>
                )}
                {active === i && (
                  <CornerDownLeft className="size-3.5 shrink-0 text-muted-foreground" />
                )}
              </button>
            );
          })}
        </div>
        <div className="flex items-center gap-4 border-t border-border px-4 py-2 text-[11px] text-muted-foreground">
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 font-mono">↑↓</kbd>
            navigate
          </span>
          <span className="flex items-center gap-1">
            <kbd className="rounded border border-border bg-muted px-1 font-mono">↵</kbd>
            open
          </span>
          <span className="ml-auto flex items-center gap-1">
            <Moon className="size-3" /> <Sun className="size-3" /> theme
          </span>
        </div>
      </DialogContent>
    </Dialog>
  );
}
