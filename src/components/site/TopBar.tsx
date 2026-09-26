import { useEffect, useState } from "react";
import { cn } from "@/lib/utils";
import { DMButton } from "./DMButton";

export function TopBar() {
  const [scrolled, setScrolled] = useState(false);
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 4);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={cn(
        "z-40 border-b bg-background/95 backdrop-blur md:sticky md:top-0",
        scrolled ? "border-border" : "border-transparent",
      )}
    >
      <div className="mx-auto grid max-w-content grid-cols-[minmax(0,1fr)_auto] items-center gap-4 px-6 py-4">
        <span className="truncate font-serif text-2xl text-foreground">YRT Institute</span>
        <div className="hidden shrink-0 items-center gap-4 md:flex">
          <DMButton size="sm" />
        </div>
      </div>
    </header>
  );
}
