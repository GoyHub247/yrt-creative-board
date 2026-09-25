import { seatLabel } from "@/config/site";
import { DMButton } from "./DMButton";

export function MobileBar() {
  return (
    <div className="fixed inset-x-0 bottom-0 z-40 border-t border-border bg-background/95 px-4 pb-[calc(0.75rem+env(safe-area-inset-bottom))] pt-3 backdrop-blur md:hidden">
      <p className="mb-2 text-center text-xs text-muted-foreground">{seatLabel}</p>
      <DMButton size="lg" className="w-full" />
    </div>
  );
}
