import { Accent } from "@/components/site/AccentText";

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
