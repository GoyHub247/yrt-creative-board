import { Accent } from "@/components/site/AccentText";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";

export function Problem() {
  const items = [
    "Stuck under 5,000 views, however often you post.",
    "Views that never turn into a single DM.",
    "Content eating the hours you should spend running the business.",
    "Starting strong, then falling off after a few weeks.",
  ];
  return (
    <section id="problem" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>
        You've got the results. <Accent>Your content doesn't show it yet.</Accent>
      </h2>
      <div className="mx-auto mt-12 grid max-w-3xl grid-cols-1 gap-4 sm:grid-cols-2">
        {items.map((t, i) => (
          <div key={i} className="rounded-xl border border-line bg-card p-6">
            <div className="font-serif text-2xl text-accent">0{i + 1}</div>
            <p className="mt-3 text-foreground">{t}</p>
          </div>
        ))}
      </div>
    </section>
  );
}

export function Tried() {
  const cards = [
    ["The Clipper", "Chops long-form into dozens of clips and hopes volume does the work."],
    ["The Lifestyle Actor", "Films a life they don't even want, because they think that's what gets views."],
    ["The Viral Chaser", "Goes viral without knowing who the views are for, or what they should buy."],
    ["The CAC Optimizer", "Spends every month shaving a few dollars off the cost per client, instead of building an engine that doesn't charge per lead."],
  ];
  return (
    <section id="tried" className="border-y border-line bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <h2 className={H2}>You've probably been one of these.</h2>
        <div className="mt-12 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map(([name, line]) => (
            <div key={name} className="rounded-xl border border-line bg-card p-6">
              <h3 className="font-serif text-2xl text-foreground">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{line}</p>
            </div>
          ))}
        </div>
        <p className="mx-auto mt-14 max-w-2xl text-center text-xl leading-relaxed text-foreground sm:text-2xl">
          None of them fix the real problem. Your content isn't built to reach buyers, or to convert them when it does.
        </p>
      </div>
    </section>
  );
}

export function Beliefs() {
  const beliefs = [
    ["Likes ain't buys.", "20 billion views taught us that views are a side effect. We build content for the few people who will actually buy."],
    ["Every industry is the same industry.", "Attorney, agency, coach: there's always one human on the other side of the screen, and human psychology doesn't change."],
    ["It's not the algorithm. It's the video.", "The algorithm doesn't change; people's interests do. In our experience, 95% of the time an underperforming video is a video problem."],
  ];
  const rows = [
    ["Views = success", "Buyers = success"],
    ["Hooks are the only thing that matters", "The right viewer matters more than the hook"],
    ["My niche is different", "Every niche is a human watching a screen"],
    ["The algorithm changed", "Your audience's interests changed"],
    ["My video got suppressed", "The video wasn't good enough, yet"],
    ["Post more", "Post better"],
  ];
  return (
    <section id="beliefs" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>
        Social media isn't a numbers game. <Accent>It's a people game.</Accent>
      </h2>
      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-3 md:gap-8">
        {beliefs.map(([title, body], i) => (
          <div key={title} className="border-t border-line pt-6">
            <div className="text-sm font-medium text-accent">{i + 1}</div>
            <h3 className="mt-2 font-serif text-2xl text-foreground">{title}</h3>
            <p className="mt-3 leading-relaxed text-muted-foreground">{body}</p>
          </div>
        ))}
      </div>

      <div className="mx-auto mt-16 max-w-3xl rounded-xl border border-line bg-card p-6 sm:p-8">
        <div className="grid grid-cols-2 gap-6 border-b border-line pb-4 text-sm font-medium uppercase tracking-[0.14em]">
          <div className="text-muted-foreground">What you've been told</div>
          <div className="flex items-center gap-2 text-foreground">
            <span className="h-2 w-2 rounded-full bg-accent" aria-hidden />
            What's true
          </div>
        </div>
        {rows.map(([told, truth]) => (
          <div key={told} className="grid grid-cols-2 gap-6 border-b border-line py-4 last:border-0">
            <div className="text-muted-foreground line-through">{told}</div>
            <div className="text-foreground">{truth}</div>
          </div>
        ))}
      </div>

      <p className="mx-auto mt-14 max-w-2xl text-center text-lg leading-relaxed text-foreground">
        One more thing. You need to be someone to speak, which is why we only work with founders who have real results to talk about.
      </p>
    </section>
  );
}
