"use client";

import { motion } from "motion/react";

export default function Loading() {
  return (
    <div className="flex min-h-[60vh] items-center justify-center" role="status" aria-label="Loading">
      <div className="flex flex-col items-center gap-4">
        <div className="relative size-16">
          <motion.div
            className="absolute inset-0 rounded-full border-2 border-primary/20"
            style={{ borderTopColor: "var(--accent-a)", borderRightColor: "var(--accent-b)", borderBottomColor: "var(--accent-c)" }}
            animate={{ rotate: 360 }}
            transition={{ duration: 1, repeat: Infinity, ease: "linear" }}
          />
        </div>
        <motion.p
          className="font-mono text-xs uppercase tracking-widest text-muted-foreground"
          animate={{ opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 1.4, repeat: Infinity }}
        >
          Loading…
        </motion.p>
      </div>
    </div>
  );
}
