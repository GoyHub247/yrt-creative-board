import { Accent } from "./AccentText";
import { DMButton } from "@/components/site/DMButton";
import { VideoPlayer } from "@/components/site/VideoPlayer";
import { T } from "./typography";


const outcomes = [
  "Inbound leads in your DMs every day",
  "No cold outreach, no ads",
  "No paying for every lead",
  "A couple of hours a month of your time",
  "A compounding asset: every video builds upon the last",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="scroll-mt-24 bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>How the Creative Board <Accent>works.</Accent></h2>
      <p className={T.lead}>
        Everything a founder needs to scale their socials and build a cult-like brand.
      </p>

      <div className="mx-auto mt-12 max-w-4xl">
        <VideoPlayer />
      </div>

      <p className={T.lead}>
        First clients from social possible within 30 days. Leads every day by day 90. After that, a couple of hours a month of your time, with your team running it.
      </p>

      <div className="mt-10 rounded-xl border border-line border-l-[3px] border-l-accent bg-card p-6 sm:p-8">
        <h3 className={T.subTitle}>
          The end result: <Accent>an Evergreen Client Engine.</Accent>
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
    </div>
    </section>
  );
}
