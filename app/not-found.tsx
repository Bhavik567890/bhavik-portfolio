import Link from "next/link";
import { ArrowLeft } from "lucide-react";
import { Aurora } from "@/components/effects/aurora";
import { Button } from "@/components/ui/button";

export default function NotFound() {
  return (
    <div className="relative flex min-h-[100svh] items-center justify-center overflow-hidden px-4">
      <Aurora />
      <div className="relative z-10 text-center">
        <p className="font-display text-[7rem] font-extrabold leading-none sm:text-[9rem]">
          <span className="bg-gradient-to-r from-accent-a via-accent-b to-accent-c bg-clip-text text-transparent">
            404
          </span>
        </p>
        <h1 className="mt-4 font-display text-2xl font-bold tracking-tight sm:text-3xl">
          This page took a detour
        </h1>
        <p className="mx-auto mt-3 max-w-md text-muted-foreground">
          The page you&apos;re looking for doesn&apos;t exist or has moved. Let&apos;s get
          you back on track.
        </p>
        <div className="mt-8 flex flex-wrap items-center justify-center gap-3">
          <Button asChild>
            <Link href="/">
              <ArrowLeft className="size-4" />
              Back home
            </Link>
          </Button>
        </div>
      </div>
    </div>
  );
}
