import { cn } from "@/lib/utils";

type GridBackgroundProps = {
  className?: string;
  mask?: boolean;
};

/**
 * Subtle grid backdrop used behind hero and section content.
 */
export function GridBackground({ className, mask = true }: GridBackgroundProps) {
  return (
    <div
      aria-hidden="true"
      className={cn(
        "pointer-events-none absolute inset-0 grid-pattern",
        mask &&
          "[mask-image:radial-gradient(ellipse_60%_60%_at_50%_40%,black,transparent)]",
        className
      )}
    />
  );
}
