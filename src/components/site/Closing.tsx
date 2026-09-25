import { Check, X } from "lucide-react";
import { site } from "@/config/site";
import { Accent } from "@/components/site/AccentText";
import { DMButton } from "@/components/site/DMButton";
import { earningsText, openLegal, type LegalKey } from "@/components/site/LegalDialogs";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { T } from "./typography";


const yes = [
  "You run an online business making at minimum $20K/month.",
  "Your have an offer worth $2k+ per client (can also be a back-end offer).",
  "You have real results and case studies to talk about.",
  "You'd rather fix the video than blame the algorithm.",
  "You actually care about the people you sell to.",
  "You're willing to play the long game.",
];
const no = [
  "You're just starting out or don't have case studies yet. Build those first.",
  "You want to make content to show off rather than make an impact.",
  "You want an agency to make it all for you.",
  "You're looking for a shortcut.",
];

const steps = [
  `DM '${site.dmKeyword}' to @${site.instagramHandle} with what you sell, your monthly revenue, where your clients come from now, and your biggest content problem.`,
  "Jordan reads every message himself and replies within 24–48 hours.",
  "If it's a fit, you get your personal offer: the full breakdown, price, plus a short video walking through it for your business.",
  "You start within about 7 days.",
];

export function Apply() {
  return (
    <section id="apply" className="bg-background">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
        <h2 className={T.sectionTitle}>Is this <Accent>for you?</Accent></h2>
        <div className="mt-12 grid grid-cols-1 gap-6 md:grid-cols-2">
          <div className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <h3 className={`${T.cardTitle} !text-muted-foreground`}>Not for you if</h3>
            <ul className="mt-5 space-y-4">
              {no.map((t) => (
                <li key={t} className="flex gap-3 text-muted-foreground">
                  <X className="mt-0.5 h-5 w-5 shrink-0" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
          <div className="rounded-xl border border-line bg-card p-6 sm:p-8">
            <h3 className={T.cardTitle}>For you if</h3>
            <ul className="mt-5 space-y-4">
              {yes.map((t) => (
                <li key={t} className="flex gap-3 text-foreground">
                  <Check className="mt-0.5 h-5 w-5 shrink-0 text-accent" aria-hidden />{t}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <div className="mx-auto mt-12 max-w-2xl rounded-xl border-2 border-accent bg-card p-8 text-center">
          <p className="font-serif text-2xl leading-snug text-foreground sm:text-3xl">
            Make your investment back within 90 days, or you stay in for free until you do.
          </p>
        </div>
        <p className="mt-4 text-center text-xs text-muted-foreground">
          Revenue from everything we help you with counts. Full terms come with your offer.
        </p>


        <p className={`mt-16 ${T.label}`}>How to apply</p>
        <ol className="mt-5 grid grid-cols-1 gap-6 md:grid-cols-4">
          {steps.map((s, i) => (
            <li key={i} className="border-t border-line pt-5">
              <div className="font-serif text-3xl text-accent">{i + 1}</div>
              <p className="mt-3 leading-relaxed text-foreground">{s}</p>
            </li>
          ))}
        </ol>
        <div className="mt-12 flex justify-center"><DMButton size="lg" /></div>
      </div>
    </section>
  );
}

const faqs = [
  ["Is this a course?", "No. We direct your actual content: we plan it with you, review it and tell you what to change. There's training too, unlocked by phase, but it's the smallest part."],
  ["Is it done-for-you?", "No. We advise; you and your team execute. In Phase 3 we help you build the team that runs it, so you don't have to."],
  ["Who will I work with?", "Our whole team: Jordan, our creative director, short-form specialist and funnel specialist."],
  ["How much time will it take?", "More at the start while we build the foundation. The goal is a couple of hours a week once your team runs it, and filming can be batched weekly or monthly."],
  ["I have no audience yet. Will it work?", "Yes. A fresh account is slower than one with a small following, but the view jail isn't real. If you're stuck under 5,000 views, the content just isn't good enough yet."],
  ["Which platforms?", "Short-form video first. Long-form YouTube is coming."],
  ["What does it cost?", "Pricing comes with your personal offer, after Jordan reviews your DM."],
];

export function Faq() {
  return (
    <section id="faq" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>What founders ask <Accent>before they DM.</Accent></h2>
      <Accordion type="single" collapsible className="mx-auto mt-12 max-w-reading">
        {faqs.map(([q, a], i) => (
          <AccordionItem key={q} value={`q${i}`} className="border-line">
            <AccordionTrigger className="text-left text-lg text-foreground">{q}</AccordionTrigger>
            <AccordionContent className="text-base leading-relaxed text-muted-foreground">{a}</AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </div>
    </section>
  );
}

export function FinalCta() {
  return (
    <section id="final-cta" className="surface-dark">
      <div className="mx-auto max-w-content px-6 py-20 text-center sm:py-28">
        <h2 className={T.displayClose}>
          Your One Catalyst Banger is coming. <Accent>Build the engine first.</Accent>
        </h2>
        <p className={T.lead}>
          {site.totalSeats} founding seats. Jordan reviews every DM personally.
        </p>
        <div className="mt-10 flex justify-center"><DMButton size="lg" /></div>
      </div>
    </section>
  );
}

export function Footer() {
  const ext = "hover:text-foreground";
  return (
    <footer id="footer" className="surface-dark">
      <div className="border-t border-line">
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
        <p className={`mt-8 max-w-3xl ${T.finePrint}`}>{earningsText}</p>
        <p className="mt-4 text-xs">© {new Date().getFullYear()} YRT Institute.</p>
      </div>
      </div>
    </footer>
  );
}
