"use client";

import { motion, useReducedMotion } from "motion/react";
import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  strength?: number;
};

/**
 * Button that magnetically follows the cursor. Falls back gracefully
 * when reduced-motion is preferred or on touch devices.
 */
export function MagneticButton({
  children,
  className,
  strength = 0.35,
}: MagneticButtonProps) {
  const reduce = useReducedMotion();

  if (reduce) {
    return <div className={cn("inline-block", className)}>{children}</div>;
  }

  return (
    <motion.div
      className={cn("inline-block", className)}
      whileHover={{ scale: 1.03 }}
      whileTap={{ scale: 0.97 }}
      onMouseMove={(e) => {
        const el = e.currentTarget;
        const rect = el.getBoundingClientRect();
        const x = (e.clientX - rect.left - rect.width / 2) * strength;
        const y = (e.clientY - rect.top - rect.height / 2) * strength;
        el.style.transform = `translate(${x}px, ${y}px)`;
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.transform = "translate(0px, 0px)";
      }}
    >
      {children}
    </motion.div>
  );
}
