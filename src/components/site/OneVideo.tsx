import { Accent } from "./AccentText";
import { T } from "./typography";


const paragraphs = [
  "We've watched our clients' accounts go from 3,000 to 100,000 followers overnight, with more leads than the founder could ever imagine.",
  "The first Catalyst Banger™ completely changes the trajectory of your business. It's the beginning of faster tests, more conversions and way harder scaling.",
];

export function OneVideo() {
  return (
    <section id="one-video" className="scroll-mt-24 bg-background">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>It only takes <Accent>one video.</Accent></h2>

      <div className="mt-12 grid grid-cols-1 gap-10 md:grid-cols-2 md:gap-14">
        {/* Left: copy */}
        <div className="flex flex-col gap-5 text-base leading-relaxed text-foreground">
          {paragraphs.map((p, i) => (
            <p key={i}>{p}</p>
          ))}
        </div>

        {/* Right: SVG growth graphic + screenshot slot */}
        <div className="flex flex-col gap-8">
          <div className="rounded-xl border border-line bg-card p-6">
            <svg
              viewBox="0 0 320 180"
              className="w-full h-auto"
              role="img"
              aria-label="A follower line that runs almost flat, jumps sharply at one point labelled The video, then keeps climbing at a steeper angle than before."
            >
              {/* Flat segment */}
              <polyline
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="10,160 60,158 110,156 150,154"
              />
              {/* Sharp jump at "The video" */}
              <polyline
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="150,154 162,154 168,70"
              />
              {/* Steeper climb after */}
              <polyline
                fill="none"
                stroke="var(--ink)"
                strokeWidth="2"
                strokeLinejoin="round"
                strokeLinecap="round"
                points="168,70 210,52 260,34 310,16"
              />
              {/* Accent dot at the jump */}
              <circle cx="168" cy="70" r="5" fill="var(--accent)" />
              {/* Label */}
              <text
                x="176"
                y="64"
                className="font-serif"
                fontSize="13"
                fill="var(--accent)"
              >
                The video
              </text>
            </svg>
          </div>

          {/* Screenshot slot */}
          <figure className="flex flex-col items-center gap-3">
            <div className="flex aspect-video w-full max-w-md items-center justify-center rounded-xl border border-dashed border-line bg-secondary text-sm text-muted-foreground">
              [Overnight growth screenshot]
            </div>
            <figcaption className={`text-center ${T.small}`}>
              [before] → [after] followers in [timeframe]
            </figcaption>
          </figure>
        </div>
      </div>

    </div>
    </section>
  );
}
