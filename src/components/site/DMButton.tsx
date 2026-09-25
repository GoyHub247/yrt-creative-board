import { site } from "@/config/site";
import { cn } from "@/lib/utils";
import { track, getSource } from "@/lib/analytics";

type Props = { size?: "lg" | "sm"; className?: string };

export function DMButton({ size = "lg", className }: Props) {
  return (
    <a
      href={site.dmUrl}
      target="_blank"
      rel="noopener noreferrer"
      onClick={(e) => {
        const location = e.currentTarget.closest("section[id], header, footer, [data-location]");
        const id = location?.getAttribute("data-location") ?? location?.id ?? location?.tagName.toLowerCase() ?? "unknown";
        track("dm_click", { location: id, source: getSource() });
      }}
      className={cn(
        "dm-button inline-flex items-center justify-center rounded-lg bg-accent font-medium text-accent-foreground transition-[opacity,transform] duration-200 hover:-translate-y-px hover:opacity-90 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background",
        size === "lg" ? "px-8 py-4 text-base" : "px-4 py-2 text-sm",
        className,
      )}
    >
      DM '{site.dmKeyword}' to apply
    </a>
  );
}
