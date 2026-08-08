"use client";

import {
  motion,
  useMotionValue,
  useReducedMotion,
  useSpring,
} from "motion/react";
import { useEffect, useState } from "react";

/**
 * A soft radial glow that follows the cursor. Desktop-only, decorative,
 * and skipped for reduced-motion / touch users.
 */
export function CursorGlow() {
  const reduce = useReducedMotion();
  const [enabled, setEnabled] = useState(false);
  const x = useMotionValue(-400);
  const y = useMotionValue(-400);
  const springX = useSpring(x, { stiffness: 120, damping: 25, mass: 0.5 });
  const springY = useSpring(y, { stiffness: 120, damping: 25, mass: 0.5 });

  useEffect(() => {
    if (reduce) return;
    const mql = window.matchMedia("(pointer: fine)");
    setEnabled(mql.matches);
    if (!mql.matches) return;

    const onMove = (e: MouseEvent) => {
      x.set(e.clientX - 250);
      y.set(e.clientY - 250);
    };
    window.addEventListener("mousemove", onMove, { passive: true });
    return () => window.removeEventListener("mousemove", onMove);
  }, [reduce, x, y]);

  if (!enabled) return null;

  return (
    <motion.div
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-0 size-[500px] rounded-full"
      style={{
        x: springX,
        y: springY,
        background:
          "radial-gradient(circle, color-mix(in oklab, var(--accent-a) 12%, transparent) 0%, transparent 70%)",
      }}
    />
  );
}
