import { Accent } from "@/components/site/AccentText";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";

export function Why() {
  const cards = [
    ["The Clipper", "You overpay for clipping campaigns that are full of low quality effort kids trying to get views at any cost (which don't convert). All volume, no real tangible results."],
    ["The Lifestyle Actor", "Portrays a life on social media they don't even want, because they think it's what gets them views and sales. It's expensive to compete and soul-crushing to live only for others' entertainment."],
    ["The Viral Chaser", "Only tries to go viral thinking it's what's going to get them results, not knowing that there are brands out there with 10,000 followers making millions in profit per month."],
    ["The CAC Optimizer", "Reliant fully on paid advertising to acquire new clients, instead of building an engine that doesn't charge per lead."],
  ];
  const beliefs = [
    ["Likes ain't buys.", "20 billion views taught us that views are a side effect. We build content for the few people who will actually buy."],
    ["Every industry is the same industry.", "Agencies, coaching, law firms, local businesses, consultants: it doesn't matter because there's always a human on the other side of the screen. Human nature and psychology doesn't change."],
    ["It's not the algorithm. It's the video.", "The algorithm doesn't change; people's interests do. In our experience, 95% of the time an underperforming video is a video problem."],
  ];

  return (
    <section id="why" className="surface-dark">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <h2 className={H2}>
          You're great at running your business. <Accent>Your content doesn't show it yet.</Accent>
        </h2>
        <p className="mx-auto mt-6 max-w-reading text-center text-lg leading-relaxed text-muted-foreground">
          Stuck under 5,000 views. Views that never turn into DMs. Content that eats your week.
        </p>

        <p className="mt-14 text-sm font-medium uppercase tracking-[0.14em] text-accent">
          You've probably tried one of these
        </p>
        <div className="mt-5 grid grid-cols-1 gap-4 md:grid-cols-2">
          {cards.map(([name, line]) => (
            <div key={name} className="rounded-xl border border-line bg-card p-6">
              <h3 className="font-serif text-2xl text-foreground">{name}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{line}</p>
            </div>
          ))}
        </div>

        <h3 className="mt-16 font-serif text-3xl text-foreground sm:text-4xl">What actually works</h3>
        <div className="mt-5 border-y border-line">
          {beliefs.map(([title, body]) => (
            <div key={title} className="grid grid-cols-1 gap-2 border-b border-line py-6 last:border-b-0 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1.2fr)] md:gap-10">
              <h4 className="font-serif text-2xl text-foreground">{title}</h4>
              <p className="leading-relaxed text-muted-foreground">{body}</p>
            </div>
          ))}
        </div>
          </div>
    </section>
  );
}
