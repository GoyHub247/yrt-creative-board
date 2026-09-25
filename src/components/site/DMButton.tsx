import { site } from "@/config/site";
import { cn } from "@/lib/utils";

type Props = { size?: "lg" | "sm"; className?: string };

export function DMButton({ size = "lg", className }: Props) {
  return (
    <a
      href={site.dmUrl}
      target="_blank"
      rel="noopener noreferrer"
      className={cn(
        "inline-flex items-center justify-center rounded-lg bg-accent font-medium text-accent-foreground transition-[opacity,transform] duration-200 hover:-translate-y-px hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-8 py-4 text-base" : "px-4 py-2 text-sm",
        className,
      )}
    >
      DM '{site.dmKeyword}' to apply
    </a>
  );
}
