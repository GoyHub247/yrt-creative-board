import { Check, X } from "lucide-react";
import { site } from "@/config/site";
import { Accent } from "@/components/site/AccentText";
import { DMButton } from "@/components/site/DMButton";
import { earningsText, openLegal, type LegalKey } from "@/components/site/LegalDialogs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";

const H2 = "font-serif text-4xl leading-tight text-foreground sm:text-5xl text-center max-w-3xl mx-auto";

const perks = [
  ["Onboarding call", "Set expectations and build your first quarterly strategy."],
  ["Quarterly board meetings", "1:1 with Jordan to set goals and check progress."],
  ["Monthly board reviews", "A recorded audit of your content and profiles."],
  ["The Boardroom", "A group chat where Jordan roasts content and profiles and gives honest feedback."],
  ["Ideation support", "Ideas, plus the latest top-performing videos to adapt to your business."],
  ["Training by phase", "Unlocked as you progress, so you never drown in information."],
  ["Direct line to Jordan", "Founding members only."],
  ["Your team can join", "Bring the people who'll run it with you."],
];

export function Offer() {
  return (
    <section id="offer" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>Your seat on the <Accent>Creative Board.</Accent></h2>
      <p className="mx-auto mt-5 max-w-reading text-center text-lg text-muted-foreground">
        {site.totalSeats} founding seats. Rolling entry: you start within about 7 days of being accepted.
      </p>
      <div className="mt-12 grid grid-cols-2 gap-3 sm:gap-4 lg:grid-cols-4">
        {perks.map(([t, d]) => (
          <div key={t} className="rounded-xl border border-line bg-card p-4 sm:p-5">
            <h3 className="font-semibold text-foreground">{t}</h3>
            <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{d}</p>
          </div>
        ))}
      </div>
      <div className="mx-auto mt-12 max-w-2xl rounded-xl border-2 border-accent bg-card p-8 text-center">
        <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
          Make your investment back within 90 days, or you stay in free until you do.
        </p>
      </div>
      <p className="mt-4 text-center text-xs text-muted-foreground">
        Revenue from everything we help you with counts. Full terms come with your offer.
      </p>
      <p className="mt-10 text-center text-foreground">Pricing comes with your personal offer, after Jordan reviews your DM.</p>
      <div className="mt-6 flex justify-center"><DMButton size="lg" /></div>
    </section>
  );
}

const yes = [
  "You run an agency, coaching, consulting or course business doing $20k+/month.",
  "Your offer is worth $2k+ per client.",
  "You have real results and case studies to talk about.",
  "You'd rather fix the video than blame the algorithm.",
  "You actually care about the people you sell to.",
  "You're willing to play the long game.",
];
const no = [
  "You're just starting out or don't have case studies yet. Build those first.",
  "You want content to show off.",
  "You want an agency to make it all for you.",
  "You're looking for a shortcut.",
];

export function Fit() {
  return (
    <section id="fit" className="border-y border-line bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <h2 className={H2}>This is for you <Accent>if…</Accent></h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-foreground">For you if</h3>
            <ul className="mt-5 space-y-4">
              {yes.map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <h3 className="font-serif text-2xl text-muted-foreground">Not for you if</h3>
            <ul className="mt-5 space-y-4">
              {no.map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}

const steps = [
  `DM '${site.dmKeyword}' to @${site.instagramHandle} with what you sell, your monthly revenue, where your clients come from now, and your biggest content problem.`,
  "Jordan reads every message himself and replies within 24–48 hours.",
  "If it's a fit, you get your personal offer: the full breakdown, plus a short video walking through it for your business.",
  "You start within about 7 days.",
];

export function HowItWorks() {
  return (
    <section id="how-it-works" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>How it <Accent>works.</Accent></h2>
      <ol className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-4">
        {steps.map((s, i) => (
          <li key={i} className="border-t border-line pt-5">
            <div className="font-serif text-3xl text-accent">{i + 1}</div>
            <p className="mt-3 leading-relaxed text-foreground">{s}</p>
          </li>
        ))}
      </ol>
      <div className="mt-12 flex justify-center"><DMButton size="lg" /></div>
    </section>
  );
}

const faqs = [
  ["Is this a course?", "No. It's an advisory: strategy, reviews and direction from Jordan, with training unlocked by phase."],
  ["Is it done-for-you?", "No. We advise; you and your team execute. Phase 3 gets a team running it so you don't have to."],
  ["How much time will it take?", "More at the start while we build the foundation. The goal is a couple of hours a week once your team runs it, and filming can be batched weekly or monthly."],
  ["I have no audience yet. Will it work?", "Yes. A fresh account is slower than one with a small following, but the 100-view jail isn't real. The content just isn't good enough yet."],
  ["Will this work in my industry?", "Every industry is the same industry: a human on the other side of the screen."],
  ["What if the algorithm changes?", "It doesn't. People's interests do, and we teach you to follow them."],
  ["How fast will I see results?", "First clients from social are possible within 30 days, and the aim is new leads every day by day 90. Accounts with an existing following move faster."],
  ["Which platforms?", "Short-form video first. Long-form YouTube is coming."],
  ["Do I work with Jordan directly?", "Yes: onboarding, quarterly board meetings and monthly reviews. Founding members also get a direct line."],
  ["Can my team join?", "Yes."],
  ["What does it cost?", "Pricing comes with your personal offer, after Jordan reviews your DM."],
  ["Is there a guarantee?", "Yes. Make your investment back within 90 days, or you stay in free until you do."],
];

export function Faq() {
  return (
    <section id="faq" className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={H2}>What founders ask <Accent>before they DM.</Accent></h2>
      <Accordion type="single" collapsible className="mx-auto mt-12 max-w-reading">
        {faqs.map(([q, a], i) => (
          <AccordionItem key={q} value={`q${i}`} className="border-line">
            <AccordionTrigger className="text-left text-lg text-foreground">{q}</AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="final-cta" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 py-24 text-center sm:py-32">
        <h2 className="font-serif text-6xl leading-[0.95] text-foreground sm:text-7xl md:text-8xl">
          It only takes <Accent>one video.</Accent>
        </h2>
        <p className="mx-auto mt-6 max-w-reading text-lg text-muted-foreground">
          {site.totalSeats} founding seats. I read every message myself. — Jordan
        </p>
        <div className="mt-10 flex justify-center"><DMButton size="lg" /></div>
      </div>
    </section>
  );
}

export function Footer() {
  const ext = "hover:text-foreground";
  return (
    <footer id="footer" className="border-t border-line">
      <div className="mx-auto max-w-content px-6 py-12 text-sm text-muted-foreground">
        <div className="flex flex-col gap-6 sm:flex-row sm:items-center sm:justify-between">
          <div className="font-serif text-xl text-foreground">YRT Institute</div>
          <nav className="flex flex-wrap gap-x-5 gap-y-2">
            <a className={ext} href={`https://instagram.com/${site.instagramHandle}`} target="_blank" rel="noopener noreferrer">Instagram</a>
            <a className={ext} href={site.youtubeUrl} target="_blank" rel="noopener noreferrer">YouTube</a>
            <a className={ext} href="#privacy" onClick={(e) => { e.preventDefault(); openLegal("privacy" as LegalKey); }}>Privacy</a>
            <a className={ext} href="#terms" onClick={(e) => { e.preventDefault(); openLegal("terms" as LegalKey); }}>Terms</a>
            <a className={ext} href="#earnings-disclaimer" onClick={(e) => { e.preventDefault(); openLegal("earnings-disclaimer" as LegalKey); }}>Earnings disclaimer</a>
          </nav>
        </div>
        <p className="mt-8 max-w-3xl text-xs leading-relaxed">{earningsText}</p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} YRT Institute.</p>
      </div>
    </footer>
  );
}
