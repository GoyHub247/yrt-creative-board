import { useState } from "react";
import { Accent } from "@/components/site/AccentText";
import { DMButton } from "@/components/site/DMButton";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";

const phases = [
  { n: 1, name: "Foundation", what: "We get clear on what you actually want. Then, before we touch your content, we find the fastest money already sitting in your social presence.", move: "You've landed your first clients from social, possible within 30 days." },
  { n: 2, name: "Inbound", what: "We find the format and filming schedule that fit you, then post, review and iterate.", move: "New leads come in from social every day, the aim by day 90." },
  { n: 3, name: "Leverage", what: "Your team takes over ideation, filming, editing and posting. You're the face, not the engine.", move: "You spend a couple of hours a week on content." },
];

export function Method() {
  return (
    <section id="method" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>Three phases. <Accent>One inbound engine.</Accent></h2>
      <p className="mx-auto mt-5 max-w-reading text-center text-lg text-muted-foreground">
        Think of us as your fractional creative director. We don't do it for you. We build the team that does.
      </p>
      <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div aria-hidden className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-0 md:right-0 md:top-10 md:bottom-auto md:h-px md:w-auto" />
        {phases.map((p) => (
          <div key={p.n} className="relative flex flex-col rounded-xl border border-line bg-card p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl text-accent">{p.n}</span>
              <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
            </div>
            <div className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">What happens</div>
            <p className="mt-2 leading-relaxed text-foreground">{p.what}</p>
            <div className="mt-6 rounded-lg bg-secondary p-4">
              <div className="text-xs font-medium uppercase tracking-[0.14em] text-accent">You move on when</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{p.move}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

const questions = [
  { key: "reach", label: "Reach", q: "Are you past 100–300 views a video?", lo: "Stuck under 300", hi: "Well past it every time" },
  { key: "conversion", label: "Conversion", q: "Do views turn into DMs?", lo: "Never", hi: "Every week" },
  { key: "time", label: "Time", q: "How much of your week does content take?", lo: "It eats my week", hi: "A couple of hours" },
  { key: "consistency", label: "Consistency", q: "Have you kept posting for months?", lo: "I keep stopping", hi: "Months without a break" },
  { key: "authority", label: "Authority", q: "Do you have real results to talk about?", lo: "Not yet", hi: "Plenty of case studies" },
] as const;

type Key = (typeof questions)[number]["key"];

export function Scorecard() {
  const [v, setV] = useState<Record<Key, number>>({ reach: 5, conversion: 5, time: 5, consistency: 5, authority: 5 });
  const total = Object.values(v).reduce((a, b) => a + b, 0);

  let title: string, text: string, cta = true;
  if (v.authority <= 3) {
    title = "Build your results first.";
    text = "Content amplifies what's already there. Get a few client wins you can talk about, then come back.";
    cta = false;
  } else if (total <= 24) {
    title = "You'd start in Foundation.";
    text = "We'd get clear on what you want and find the fastest money already sitting in your social presence.";
  } else if (total <= 39) {
    title = "You'd start in Inbound.";
    text = "Your foundation is there. We'd build a format and schedule that bring in leads every day.";
  } else {
    title = "You'd start in Leverage.";
    text = "Content already works for you. Now we get your team running it, so you're the face, not the engine.";
  }

  return (
    <section id="scorecard" className="border-y border-line bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <h2 className={H2}>How hard is your content <Accent>working?</Accent></h2>
        <p className="mx-auto mt-5 max-w-reading text-center text-lg text-muted-foreground">
          Rate yourself honestly. It takes 30 seconds.
        </p>
        <div className="mt-14 grid grid-cols-1 gap-10 lg:grid-cols-[1fr_380px]">
          <div className="space-y-8">
            {questions.map((q) => (
              <div key={q.key}>
                <div className="flex items-baseline justify-between gap-4">
                  <label htmlFor={q.key} className="font-serif text-2xl text-foreground">{q.label}</label>
                  <span className="font-serif text-2xl text-accent tabular-nums">{v[q.key]}</span>
                </div>
                <p className="mt-1 text-muted-foreground">{q.q}</p>
                <input
                  id={q.key}
                  type="range"
                  min={1}
                  max={10}
                  step={1}
                  value={v[q.key]}
                  onChange={(e) => setV((s) => ({ ...s, [q.key]: Number(e.target.value) }))}
                  className="mt-4 w-full"
                  style={{ accentColor: "var(--accent)" }}
                />
                <div className="mt-1 flex justify-between text-xs text-muted-foreground">
                  <span>1 · {q.lo}</span>
                  <span>10 · {q.hi}</span>
                </div>
              </div>
            ))}
          </div>
          <div className="lg:sticky lg:top-28 h-fit rounded-xl border border-line bg-card p-6 sm:p-8" aria-live="polite">
            <div className="text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">Your score</div>
            <div className="mt-2 font-serif text-5xl text-foreground tabular-nums">
              {total}<span className="text-2xl text-muted-foreground"> / 50</span>
            </div>
            <div className="mt-4 h-1 w-full overflow-hidden rounded-full bg-secondary">
              <div className="h-full bg-accent transition-all" style={{ width: `${(total / 50) * 100}%` }} />
            </div>
            <h3 className="mt-6 font-serif text-2xl text-foreground">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{text}</p>
            <div className="mt-6">
              {cta ? (
                <DMButton />
              ) : (
                <a href="https://instagram.com/jordanchenyrt" target="_blank" rel="noopener noreferrer" className="text-accent underline underline-offset-4">
                  Follow @jordanchenyrt in the meantime
                </a>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
