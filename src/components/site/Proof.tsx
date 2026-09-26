import { useEffect, useState } from "react";
import { Accent } from "@/components/site/AccentText";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { receipts, aboutPhoto, type Receipt } from "@/data/receipts";
import { T } from "./typography";

const Placeholder = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`flex items-center justify-center rounded-lg border border-dashed border-border bg-secondary text-sm text-muted-foreground ${className}`}>
    {label}
  </div>
);

function CaseCard({ c }: { c: CaseStudy }) {
  const [open, setOpen] = useState(false);
  return (
    <div className="flex flex-col rounded-xl border border-line bg-card p-6">
      <div className="flex flex-wrap items-center gap-2">
        <span className="rounded-full bg-secondary px-3 py-1 text-xs font-medium text-muted-foreground">{c.tag}</span>
        {c.verified && (
          <span className="rounded-full border border-accent px-3 py-1 text-xs font-medium text-accent">Verified</span>
        )}
      </div>
      {c.handle && <div className="mt-3 text-sm text-muted-foreground">{c.handle}</div>}
      <h3 className={`mt-3 ${T.cardTitle}`}>{c.headline}</h3>
      {c.beforeAfter && <p className="mt-3 font-medium text-foreground">{c.beforeAfter}</p>}
      {c.timeline && <p className="mt-1 text-sm text-muted-foreground">{c.timeline}</p>}
      {c.how && <p className="mt-4 font-serif text-lg italic text-accent">{c.how}</p>}
      <div className="mt-5">
        {c.proofImage ? (
          <img src={c.proofImage} alt={`Proof for ${c.headline}`} loading="lazy" className="w-full rounded-lg border border-line" />
        ) : (
          <Placeholder label="[Proof image]" className="aspect-[4/3]" />
        )}
      </div>
      <div className="mt-auto pt-5">
        <button
          type="button"
          onClick={() => setOpen((o) => !o)}
          aria-expanded={open}
          className="text-sm font-medium text-foreground underline underline-offset-4"
        >
          {open ? "Hide breakdown" : "See breakdown"}
        </button>
        {open && (
          <p className={`mt-3 ${T.body} text-muted-foreground`}>{c.breakdown ?? "[Breakdown — to add]"}</p>
        )}
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>
        Different industries. <Accent>Same playbook.</Accent>
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => <CaseCard key={i} c={c} />)}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Results from profiles our team directed. Not typical; see the earnings disclaimer.
      </p>
    </div>
    </section>
  );
}

const placeholderHeights = ["h-48", "h-72", "h-56", "h-64", "h-80", "h-52", "h-60", "h-44"];

export function Receipts() {
  const [active, setActive] = useState<Receipt | null>(null);
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="receipts" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 pb-20 sm:pb-28">
        <h2 className={T.sectionTitle}>Likes ain't buys. <Accent>These are buys.</Accent></h2>
        <p className="mx-auto mt-5 max-w-reading text-center text-muted-foreground">
          Most of our clients don't want competitors seeing their numbers, so names are blurred.
        </p>
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {receipts.length === 0
            ? placeholderHeights.map((h, i) => (
                <Placeholder key={i} label="[Receipt]" className={`mb-4 break-inside-avoid !bg-card ${h}`} />
              ))
            : receipts.map((r, i) => (
                <button key={i} type="button" onClick={() => setActive(r)} className="mb-4 block w-full break-inside-avoid text-left">
                  <img src={r.image} alt={r.caption ?? "Client result screenshot"} loading="lazy" className="w-full rounded-lg border border-line" />
                  {r.caption && <span className="mt-2 block text-xs text-muted-foreground">{r.caption}</span>}
                </button>
              ))}
        </div>
      </div>
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
        >
          <img src={active.image} alt={active.caption ?? "Client result screenshot"} className="max-h-[90vh] max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>Built from experience, <Accent>not textbooks.</Accent></h2>
      <p className={T.lead}>
        Our entire philosophy is built from years of testing and iterating, it didn't just appear overnight.{" \n\n\n"}The founder, the creative director, the short form specialist, the funnel expert, the entire crew that's behind 8 figures in client results and over 20B+ views, all are on your board.
      </p>
      <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-xl border border-line bg-card p-6 sm:p-8 md:grid-cols-[240px_1fr]">
        {aboutPhoto ? (
          <img src={aboutPhoto} alt="Jordan Chen, founder of YRT Institute" loading="lazy" className="aspect-[4/5] w-full max-w-[240px] rounded-xl object-cover" />
        ) : (
          <Placeholder label="[Photo of Jordan]" className="aspect-[4/5] w-full max-w-[240px] !bg-card" />
        )}
        <div>
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>"For years we've helped many businesses in various industries succeed on social media by taking over their content department. However once the partnership ended, the content systems always fell apart.</p>
            <p>{"\n"}</p>
            <p>{"\n"}</p>
          </div>
          <p className="mt-6 font-serif text-2xl italic text-accent">Jordan Chen, Founder</p>
        </div>
      </div>
    </div>
    </section>
  );
}
