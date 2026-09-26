import { Accent } from "./AccentText";
import { Check } from "lucide-react";
import { DMButton } from "@/components/site/DMButton";
import { site } from "@/config/site";
import { T } from "./typography";


const rhythm: { label: string; text: string; note?: string }[] = [
  { label: "Every quarter", text: "A strategy session with our team to set your content goals and the plan for the next 90 days." },
  { label: "Every month", text: "A 1:1 review with our team: what's working, what isn't, what changes." },
  { label: "Every day", text: "The Creative Boardroom: every founder on the board in one group, working toward the same goal. Wins, honest feedback, hot seats, and borrowing what's working for others." },
];

const playbooks = [
  ["Brand & Positioning", "Foundation", "Becoming the most trusted authority figure in your space. Building a genuine brand that attracts and converts leads like crazy whilst also opening up the door for incredible partnerships."],
  ["Attention & Creation", "Inbound", "The entire content cycle: ideation, filming, editing and posting like a professional, not an at-home amateur, on a schedule that fits you and your lifestyle."],
  ["Conversion", "Foundation", "Turning views, profile visits and DMs into clients using the same systems that have generated over 30,000 leads for others."],
  ["People & Systems", "Leverage", "Hiring, training and managing the team that runs the engine so you can just be the face, not the operator."],
];

const extras = [
  "Templates and software we use in our own company to stay at the frontier of short form content.",
  "You can join together with your team so they can be trained from day.",
  "Direct access to the team behind 8 figures in client results.",
];

export function WhatYouGet() {
  return (
    <section id="what-you-get" className="bg-background">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>A seat at the table with <Accent>our whole team.</Accent></h2>
      <p className={T.lead}>
        A board seat isn't access to one person. It's access to the team behind 8 figures in client results. The founder, creative director, short form specialist, funnel expert, all on your board.
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
        <h3 className={`text-center ${T.subTitle}`}>The playbooks</h3>
        <p className="mx-auto mt-3 max-w-reading text-center text-muted-foreground">
          Training unlocks by phase, so you and your team are never overwhelmed.
        </p>
        <div className="mt-8 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {playbooks.map(([name, phase, line]) => (
            <div key={name} className="rounded-xl border border-line bg-card p-5">
              <span className="inline-block rounded-full border border-line px-2.5 py-0.5 text-xs text-accent">{phase}</span>
              <h4 className={`mt-3 ${T.cardTitle}`}>{name}</h4>
              <p className={`mt-2 ${T.body} text-muted-foreground`}>{line}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
    </section>
  );
}
