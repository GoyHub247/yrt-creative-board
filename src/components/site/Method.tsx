import { DMButton } from "@/components/site/DMButton";
import { VideoPlayer } from "@/components/site/VideoPlayer";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";

const phases = [
  { n: 1, name: "Foundation", title: "Build the engine.", what: "We get clear on what you want, position your personal brand, and turn the attention you already have into quick cash.", move: "You've landed your first clients from social, possible within 30 days." },
  { n: 2, name: "Inbound", title: "Start it up.", what: "We find your format and filming schedule, and the leads start coming in.", move: "New leads arrive from social every day, the aim by day 90." },
  { n: 3, name: "Leverage", title: "Hand over the keys.", what: "Your team runs and maintains the engine. You're the face, not the mechanic.", move: "It takes you a couple of hours a week." },
];

const outcomes = [
  "Inbound leads in your DMs every day",
  "No cold outreach",
  "No paying for every lead",
  "A couple of hours a week of your time",
  "It compounds: every video makes the next one easier to grow",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-content scroll-mt-24 px-6 py-20 sm:py-28">
      <h2 className={H2}>How the Creative Board works.</h2>
      <p className="mx-auto mt-5 max-w-reading text-center text-lg text-muted-foreground">
        Not an agency. Not a course. We build it with you, in three phases.
      </p>

      <div className="mx-auto mt-12 max-w-4xl">
        <VideoPlayer />
      </div>

      <div className="relative mt-14 grid grid-cols-1 gap-6 md:grid-cols-3">
        <div aria-hidden className="absolute left-8 top-0 bottom-0 w-px bg-border md:left-0 md:right-0 md:top-10 md:bottom-auto md:h-px md:w-auto" />
        {phases.map((p) => (
          <div key={p.n} className="relative flex flex-col rounded-xl border border-line bg-card p-6">
            <div className="flex items-baseline gap-3">
              <span className="font-serif text-3xl text-accent">{p.n}</span>
              <h3 className="font-serif text-2xl text-foreground">{p.name}</h3>
            </div>
            <p className="mt-3 font-medium text-foreground">{p.title}</p>
            <div className="mt-5 text-xs font-medium uppercase tracking-[0.14em] text-muted-foreground">What happens</div>
            <p className="mt-2 leading-relaxed text-foreground">{p.what}</p>
            <div className="mt-6 rounded-lg bg-secondary p-4">
              <div className="text-xs font-medium uppercase tracking-[0.14em] text-accent">You move on when</div>
              <p className="mt-2 text-sm leading-relaxed text-foreground">{p.move}</p>
            </div>
          </div>
        ))}
      </div>

      <div className="mt-10 rounded-xl border border-line bg-secondary p-6 sm:p-8">
        <h3 className="font-serif text-3xl text-foreground sm:text-4xl">
          The end result: an evergreen client engine.
        </h3>
        <ul className="mt-6 grid gap-4 sm:grid-cols-2">
          {outcomes.map((outcome) => (
            <li key={outcome} className="flex gap-3 leading-relaxed text-foreground">
              <span aria-hidden className="mt-0.5 text-sm font-semibold text-accent">✓</span>
              <span>{outcome}</span>
            </li>
          ))}
        </ul>
      </div>

      <div className="mt-10 flex justify-center">
        <DMButton size="lg" />
      </div>
    </section>
  );
}
