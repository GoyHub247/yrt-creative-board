import { site } from "@/config/site";
import { DMButton } from "@/components/site/DMButton";

const figures = [
  { value: "8 figures", label: "revenue generated for clients." },
  { value: "30,000+", label: "qualified leads generated." },
  { value: "20B+", label: "total views, with single videos past 100M." },
];

export function Hero() {
  return (
    <section id="hero" className="bg-background">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <div className="flex flex-col items-center text-center">
        <p className="text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground sm:text-sm">
          YRT Creative Board · For founders doing at minimum $20k+/month
        </p>

        <h1 className="mt-6 max-w-4xl font-serif text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
          Turn your personal brand into an Evergreen Client Engine™.
        </h1>

        <p className="mt-7 max-w-reading text-lg leading-relaxed text-muted-foreground sm:text-xl">
          Build a well-oiled organic content machine that brings you inbound leads every day, so you can stop cold outreach and stop paying to acquire every client.
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
          {site.totalSeats} founding seats. Every application is personally reviewed by Jordan.
        </p>

        <div className="mt-10 w-full border-t border-line pt-8 sm:mt-12">
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3 sm:gap-8">
            {figures.map((figure) => (
              <div key={figure.value} className="text-center">
                <div className="font-serif text-3xl text-foreground sm:text-4xl">{figure.value}</div>
                <div className="mt-1 text-sm text-muted-foreground">{figure.label}</div>
              </div>
            ))}
          </div>
          <p className="mt-7 text-center text-sm text-muted-foreground">
            Views are the number we care about the least. It's a side effect. Buyers are the point.
          </p>
        </div>
      </div>
    </div>
    </section>
  );
}
