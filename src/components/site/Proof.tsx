import { useEffect, useState } from "react";
import { Accent } from "@/components/site/AccentText";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { receipts, aboutPhoto, type Receipt } from "@/data/receipts";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";
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
      <h3 className="mt-3 font-serif text-2xl leading-snug text-foreground">{c.headline}</h3>
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
          <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{c.breakdown ?? "[Breakdown — to add]"}</p>
        )}
      </div>
    </div>
  );
}

export function CaseStudies() {
  return (
    <section id="case-studies" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>
        Different industries. <Accent>Same human on the other side of the screen.</Accent>
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-3">
        {caseStudies.map((c, i) => <CaseCard key={i} c={c} />)}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Results from profiles Jordan directed. Not typical; see the earnings disclaimer.
      </p>
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
    <section id="receipts" className="border-y border-line bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <h2 className={H2}>Likes ain't buys. <Accent>These are buys.</Accent></h2>
        <p className="mx-auto mt-5 max-w-reading text-center text-muted-foreground">
          Most of our clients don't want competitors seeing their numbers, so names are blurred.
        </p>
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {receipts.length === 0
            ? placeholderHeights.map((h, i) => (
                <Placeholder key={i} label="[Receipt]" className={`mb-4 break-inside-avoid bg-card ${h}`} />
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

export function About() {
  return (
    <section id="about" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <div className="grid grid-cols-1 items-center gap-10 md:grid-cols-2 md:gap-16">
        {aboutPhoto ? (
          <img src={aboutPhoto} alt="Jordan Chen" loading="lazy" className="aspect-[4/5] w-full rounded-xl object-cover" />
        ) : (
          <Placeholder label="[Photo of Jordan]" className="aspect-[4/5] w-full" />
        )}
        <div>
          <h2 className="font-serif text-4xl leading-tight text-foreground sm:text-5xl">I used to chase views too.</h2>
          <div className="mt-6 space-y-5 text-lg leading-relaxed text-muted-foreground">
            <p>
              I started a YouTube channel at 16 and got into online business at 17, after typing "how do you make money online" into Google. For years I chased views, because they were the only number I could see. Then I went viral in the wrong markets and made nothing, while videos with a few thousand views brought in more money than anything before.
            </p>
            <p>
              Working as a sales rep for JK Molina, I closed a package for a client making $30k a month from 300 Twitter followers. That's when it clicked: likes ain't buys.
            </p>
            <p>
              Since then I've spent years as a creative director behind other people's accounts, generating 8 figures for clients. YRT is how I teach it.
            </p>
          </div>
          <p className="mt-8 font-serif text-3xl italic text-accent">Jordan Chen</p>
        </div>
      </div>
    </section>
  );
}
