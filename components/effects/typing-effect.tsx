"use client";

import { motion } from "motion/react";
import { useCallback, useEffect, useRef, useState } from "react";
import { cn } from "@/lib/utils";

type TypingEffectProps = {
  words: readonly string[];
  className?: string;
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseMs?: number;
  caretClassName?: string;
};

/**
 * Cycling typewriter effect with blinking caret.
 */
export function TypingEffect({
  words,
  className,
  typingSpeed = 70,
  deletingSpeed = 40,
  pauseMs = 2000,
  caretClassName,
}: TypingEffectProps) {
  const [index, setIndex] = useState(0);
  const [text, setText] = useState("");
  const [deleting, setDeleting] = useState(false);
  const timeoutRef = useRef<ReturnType<typeof setTimeout>>(null);

  const word = words[index % words.length];

  const tick = useCallback(() => {
    setText((current) => {
      const target = words[index % words.length];
      if (!deleting) {
        if (current === target) {
          setDeleting(true);
          return current;
        }
        return target.slice(0, current.length + 1);
      }
      if (current.length === 0) {
        setDeleting(false);
        setIndex((i) => (i + 1) % words.length);
        return current;
      }
      return target.slice(0, current.length - 1);
    });
  }, [deleting, index, words]);

  useEffect(() => {
    const speed = deleting ? deletingSpeed : typingSpeed;
    const delay = !deleting && text === word ? pauseMs : speed;
    timeoutRef.current = setTimeout(tick, delay);
    return () => clearTimeout(timeoutRef.current!);
  }, [text, deleting, tick, typingSpeed, deletingSpeed, pauseMs, word]);

  return (
    <span className={cn("inline-flex items-baseline", className)} aria-live="polite">
      <span>{text}</span>
      <motion.span
        aria-hidden="true"
        className={cn(
          "ml-0.5 inline-block h-[1em] w-[3px] translate-y-[0.15em] rounded-full bg-gradient-to-b from-accent-a to-accent-c",
          caretClassName
        )}
        animate={{ opacity: [1, 1, 0, 0] }}
        transition={{ duration: 1.1, repeat: Infinity, times: [0, 0.6, 0.6, 1] }}
      />
    </span>
  );
}
