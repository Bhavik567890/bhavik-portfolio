"use client";

import { animate, useInView } from "motion/react";
import { useEffect, useRef } from "react";
import { cn } from "@/lib/utils";

type CounterProps = {
  to: number;
  from?: number;
  duration?: number;
  className?: string;
  prefix?: string;
  suffix?: string;
  decimals?: number;
};

/**
 * Animated number counter that starts when scrolled into view.
 */
export function Counter({
  to,
  from = 0,
  duration = 1.6,
  className,
  prefix = "",
  suffix = "",
  decimals = 0,
}: CounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });

  useEffect(() => {
    if (!inView || !ref.current) return;
    const controls = animate(from, to, {
      duration,
      ease: [0.22, 1, 0.36, 1],
      onUpdate: (value) => {
        if (ref.current) {
          ref.current.textContent = `${prefix}${value.toFixed(decimals)}${suffix}`;
        }
      },
    });
    return () => controls.stop();
  }, [inView, from, to, duration, prefix, suffix, decimals]);

  return (
    <span ref={ref} className={cn("tabular-nums", className)}>
      {prefix}
      {from.toFixed(decimals)}
      {suffix}
    </span>
  );
}
