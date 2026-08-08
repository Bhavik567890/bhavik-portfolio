"use client";

import { useScroll } from "motion/react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";

export function ScrollProgress() {
  const { scrollYProgress } = useScroll();
  const pathname = usePathname();
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 100);
    return () => clearTimeout(t);
  }, [pathname]);

  return (
    <motion.div
      aria-hidden="true"
      className={cn(
        "fixed inset-x-0 top-0 z-[60] h-0.5 origin-left bg-gradient-to-r from-accent-a via-accent-b to-accent-c transition-opacity duration-500",
        !visible && "opacity-0"
      )}
      style={{ scaleX: scrollYProgress }}
    />
  );
}
