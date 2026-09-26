import { useEffect, useState } from "react";
import { seatLabel } from "@/config/site";
import { cn } from "@/lib/utils";
import { DMButton } from "./DMButton";

export function MobileBar() {
  const [show, setShow] = useState(false);
  useEffect(() => {
    const el = document.querySelector("[data-hero-ctas]");
    if (!el) { setShow(true); return; }
    const io = new IntersectionObserver(([e]) => setShow(!e?.isIntersecting));
    io.observe(el);
    return () => io.disconnect();
  }, []);
  return (
    <div
      data-location="mobile-bar"
      aria-hidden={!show}
      inert={!show}
      className={cn(
        "fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur transition-transform duration-300 motion-reduce:transition-none md:hidden",
        show ? "translate-y-0" : "translate-y-full",
      )}
    >
      <p className="mb-2 text-center text-xs text-muted-foreground">{seatLabel}</p>
      <DMButton size="lg" className="w-full" />
    </div>
  );
}
