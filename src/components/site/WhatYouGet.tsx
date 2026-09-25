import { Check } from "lucide-react";
import { DMButton } from "@/components/site/DMButton";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";

const rhythm: { label: string; text: string; note?: string }[] = [
  { label: "Every quarter", text: "A strategy session with our team to set your content goals and the plan for the next 90 days." },
  { label: "Every month", text: "A 1:1 review call with our team: what's working, what isn't, what changes." },
  { label: "Every day", text: "The Boardroom: every founder on the board in one group, working toward the same goal. Wins, honest feedback, hot seats, and borrowing what's working for others." },
];

const playbooks = [
  ["Brand & Positioning", "Foundation", "Becoming the most trusted authority figure in your space. Building a genuine brand that attracts and converts leads like crazy whilst also opening up the door for incredible partnerships."],
  ["Inbound Leads Engine", "Inbound", "The entire content cycle: ideation, filming, editing and posting like a professional, not an at-home amateur, on a schedule that fits you and your lifestyle."],
  ["Conversion", "Foundation", "Turning views, profile visits and DMs into clients using the same systems that have generated over 30,000 leads for others."],
  ["People & Systems", "Leverage", "Hiring, training and managing the team that runs the engine so you can just be the face, not the operator."],
];

const extras = [
  "An onboarding call to set your goals and first strategy",
  "Your team can join",
  "Direct access to the team that has been",
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>A seat at the table with our whole team.</h2>
      <p className="mx-auto mt-5 max-w-reading text-center text-lg text-muted-foreground">
        A board seat isn't access to one person. It's access to the team behind 8 figures in client results.
      </p>

      <dl className="mx-auto mt-12 max-w-3xl divide-y divide-line border-y border-line">
        {rhythm.map((r) => (
          <div key={r.label} className="grid grid-cols-1 gap-2 py-6 sm:grid-cols-[180px_1fr] sm:gap-8">
            <dt className="font-semibold text-foreground">{r.label}</dt>
            <dd>
              <p className="leading-relaxed text-foreground">{r.text}</p>
              {r.note && <p className="mt-2 text-sm text-muted-foreground">{r.note}</p>}
            </dd>
          </div>
        ))}
      </dl>

      <div className="mt-16">
        <h3 className="text-center font-serif text-3xl text-foreground">The playbooks</h3>
        <p className="mx-auto mt-3 max-w-reading text-center text-muted-foreground">
          Training unlocks by phase, so you and your team are never overwhelmed.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {playbooks.map(([name, phase, line]) => (
            <div key={name} className="rounded-xl border border-line bg-card p-5">
              <span className="inline-block rounded-full border border-line px-2.5 py-0.5 text-xs text-accent">{phase}</span>
              <h4 className="mt-3 font-semibold text-foreground">{name}</h4>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{line}</p>
            </div>
          ))}
        </div>
      </div>

      <div className="mx-auto mt-12 max-w-reading">
        <h3 className="text-sm font-semibold uppercase tracking-wider text-muted-foreground">Also included</h3>
        <ul className="mt-4 space-y-3">
          {extras.map((t) => (
            <li key={t} className="flex gap-3 text-foreground">
              <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />{t}
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-12 flex justify-center"><DMButton size="lg" /></div>
    </section>
  );
}
