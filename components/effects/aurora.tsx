import { cn } from "@/lib/utils";

type AuroraProps = {
  className?: string;
  variant?: "hero" | "soft";
};

/**
 * Aurora gradient blobs — animated, blurred, non-interactive background layer.
 */
export function Aurora({ className, variant = "soft" }: AuroraProps) {
  return (
    <div
      aria-hidden="true"
      className={cn("pointer-events-none absolute inset-0 overflow-hidden", className)}
    >
      <div className="absolute -left-1/4 -top-1/4 size-[55vw] rounded-full bg-accent-a/25 blur-[120px] animate-aurora" />
      <div className="absolute right-[-15%] top-[-10%] size-[45vw] rounded-full bg-accent-b/20 blur-[120px] animate-aurora [animation-delay:-6s]" />
      <div
        className={cn(
          "absolute bottom-[-25%] left-1/3 size-[50vw] rounded-full bg-accent-c/20 blur-[120px] animate-aurora [animation-delay:-12s]",
          variant === "soft" && "opacity-70"
        )}
      />
    </div>
  );
}
