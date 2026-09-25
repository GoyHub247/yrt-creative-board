import { site } from "@/config/site";
import { DMButton } from "@/components/site/DMButton";
import { AccentText, Accent } from "@/components/site/AccentText";

export function Hero() {
  return (
    <section id="hero" className="mx-auto max-w-content px-6 pt-16 pb-20 sm:pt-24">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
          YRT Creative Board · For founders doing $20k+/month
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
          Turn your personal brand into a client engine.
        </h1>

        <p className="mt-7 max-w-reading text-lg leading-relaxed text-muted-foreground sm:text-xl">
          A well-oiled content machine that brings you leads every day, so you can stop cold outreach and stop paying for every client. We build it with you in phases, until your team runs it in a couple of hours a week.
        </p>

        <div className="mt-10 flex w-full flex-col items-stretch justify-center gap-3 sm:w-auto sm:flex-row sm:items-center">
          <DMButton size="lg" />
          <a
            href="#how-it-works"
            onClick={(event) => {
              const section = document.getElementById("how-it-works");
              if (!section) return;
              event.preventDefault();
              section.scrollIntoView({ behavior: "smooth", block: "start" });
            }}
            className="inline-flex items-center justify-center rounded-lg border border-accent px-8 py-4 text-base font-medium text-accent transition-colors duration-200 hover:bg-secondary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background"
          >
            Watch how it works ↓
          </a>
        </div>

        <p className="mt-5 max-w-reading text-sm text-muted-foreground">
          {site.totalSeats} founding seats. Jordan reviews every DM personally.
        </p>
      </div>
    </section>
  );
}

export function Numbers() {
  const figures = [
    { value: "8 figures", label: "generated for clients" },
    { value: "100M+", label: "views on a single video" },
    { value: "20B+", label: <>total views. <Accent>The number we care about least.</Accent></> },
  ];

  return (
    <section id="numbers" className="border-y border-line bg-secondary">
      <div className="mx-auto max-w-content px-6 py-16 sm:py-20">
        <div className="grid grid-cols-1 gap-10 sm:grid-cols-3 sm:gap-8">
          {figures.map((f) => (
            <div key={f.value} className="text-center">
              <div className="font-serif text-5xl text-foreground sm:text-6xl">
                {f.value}
              </div>
              <div className="mt-3 text-sm text-muted-foreground sm:text-base">
                {f.label}
              </div>
            </div>
          ))}
        </div>
        <p className="mt-12 text-center text-sm text-muted-foreground sm:text-base">
          <AccentText>Views are a side effect. Buyers are the point.</AccentText>
        </p>
      </div>
    </section>
  );
}
