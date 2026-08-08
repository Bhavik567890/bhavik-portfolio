"use client";

import type { ReactNode } from "react";
import { ThemeProvider } from "@/components/layout/theme-provider";
import { CursorGlow } from "@/components/layout/cursor-glow";
import { ScrollProgress } from "@/components/layout/scroll-progress";
import { ScrollToTop } from "@/components/layout/scroll-to-top";
import { CommandPalette } from "@/components/layout/command-palette";

export function Providers({ children }: { children: ReactNode }) {
  return (
    <ThemeProvider>
      <CursorGlow />
      <ScrollProgress />
      {children}
      <ScrollToTop />
      <CommandPalette />
    </ThemeProvider>
  );
}
