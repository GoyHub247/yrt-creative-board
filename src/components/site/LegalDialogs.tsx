import { useEffect, useState } from "react";
import { Dialog, DialogContent, DialogDescription, DialogTitle } from "@/components/ui/dialog";

export const earningsText =
  "Results shown are from profiles our team directed and are not typical. Your results depend on your offer, effort and starting point. No income is guaranteed beyond the terms of the 90-day guarantee.";

const docs = {
  privacy: { title: "Privacy", body: "[Legal text to be supplied]" },
  terms: { title: "Terms", body: "[Legal text to be supplied]" },
  "earnings-disclaimer": { title: "Earnings disclaimer", body: earningsText },
} as const;

export type LegalKey = keyof typeof docs;
export const legalKeys = Object.keys(docs) as LegalKey[];

const EVT = "yrt:legal";
export function openLegal(key: LegalKey) {
  window.dispatchEvent(new CustomEvent(EVT, { detail: key }));
}

export function LegalDialogs() {
  const [open, setOpen] = useState<LegalKey | null>(null);

  useEffect(() => {
    const fromHash = () => {
      const h = window.location.hash.slice(1) as LegalKey;
      if (h in docs) setOpen(h);
    };
    fromHash();
    const onOpen = (e: Event) => setOpen((e as CustomEvent<LegalKey>).detail);
    window.addEventListener("hashchange", fromHash);
    window.addEventListener(EVT, onOpen);
    return () => {
      window.removeEventListener("hashchange", fromHash);
      window.removeEventListener(EVT, onOpen);
    };
  }, []);

  const close = () => {
    setOpen(null);
    if (window.location.hash) {
      history.replaceState(null, "", window.location.pathname + window.location.search);
    }
  };

  const doc = open ? docs[open] : null;
  return (
    <Dialog open={!!doc} onOpenChange={(o) => !o && close()}>
      <DialogContent className="flex h-dvh max-h-dvh w-full max-w-full flex-col gap-0 rounded-none border-line bg-background p-0 sm:h-auto sm:max-h-[85vh] sm:max-w-2xl sm:rounded-xl">
        <div className="border-b border-line px-6 py-5 pr-14">
          <DialogTitle className="font-serif text-3xl font-normal text-foreground">{doc?.title}</DialogTitle>
        </div>
        <DialogDescription asChild>
          <div className="flex-1 overflow-y-auto px-6 py-6 text-base leading-relaxed text-muted-foreground">
            <p>{doc?.body}</p>
          </div>
        </DialogDescription>
      </DialogContent>
    </Dialog>
  );
}
