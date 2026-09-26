import { useEffect, useRef, useState } from "react";
import { Accent } from "@/components/site/AccentText";
import { caseStudies, type CaseStudy } from "@/data/caseStudies";
import { receipts, aboutPhoto, type Receipt } from "@/data/receipts";
import { Button } from "@/components/ui/button";
import { T } from "./typography";

const Placeholder = ({ label, className = "" }: { label: string; className?: string }) => (
  <div className={`flex items-center justify-center rounded-lg border border-dashed border-border bg-secondary text-sm text-muted-foreground ${className}`}>
    {label}
  </div>
);

function VideoTile({ c, visible }: { c: CaseStudy; visible: boolean }) {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [playing, setPlaying] = useState(false);

  const play = () => {
    const video = videoRef.current;
    if (!video) return;
    video.muted = false;
    video.play().then(() => setPlaying(true)).catch(() => setPlaying(false));
  };

  return (
    <article className="min-w-0 shrink-0 snap-start basis-full md:basis-auto">
      <div className="relative aspect-video overflow-hidden rounded-lg border border-line bg-card">
        {c.videoUrl ? (
          visible && <>
            <video
              ref={videoRef}
              src={c.videoUrl}
              preload="auto"
              playsInline
              controls={playing}
              onEnded={() => setPlaying(false)}
              className="h-full w-full object-cover"
              aria-label={c.headline}
            />
            {!playing && <Button
              type="button"
              variant="ghost"
              size="icon"
              onClick={play}
              aria-label={`Play video: ${c.headline}`}
              className="absolute inset-0 m-auto size-14 rounded-full bg-foreground/85 text-background hover:bg-foreground hover:text-background"
            >
              <svg viewBox="0 0 24 24" fill="currentColor" aria-hidden="true"><path d="M8 5.5v13l10-6.5z" /></svg>
            </Button>}
          </>
        ) : (
          <div className="flex h-full items-center justify-center font-serif text-2xl text-muted-foreground">
            Video coming soon
          </div>
        )}
      </div>
      <p className={`mt-5 ${T.label}`}>{c.tag}</p>
      <h3 className={`mt-2 ${T.cardTitle}`}>{c.headline}</h3>
    </article>
  );
}

export function CaseStudies() {
  const sectionRef = useRef<HTMLElement>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const [visible, setVisible] = useState(false);
  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        setVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.1 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  const onScroll = () => {
    const carousel = carouselRef.current;
    if (!carousel) return;
    const step = carousel.clientWidth + 24;
    setActiveIndex(Math.min(caseStudies.length - 1, Math.round(carousel.scrollLeft / step)));
  };

  return (
    <section ref={sectionRef} id="case-studies" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>
        Different industries. <Accent>Same playbook.</Accent>
      </h2>
      <div ref={carouselRef} onScroll={onScroll} className="mt-12 flex snap-x snap-mandatory gap-6 overflow-x-auto scroll-smooth md:grid md:grid-cols-3 md:overflow-visible">
        {caseStudies.map((c) => <VideoTile key={c.tag} c={c} visible={visible} />)}
      </div>
      <div className="mt-6 flex justify-center gap-3 md:hidden" aria-label="Video selection">
        {caseStudies.map((c, i) => <Button
          key={c.tag}
          type="button"
          variant="ghost"
          size="icon"
          aria-label={`Show video ${i + 1}`}
          aria-current={activeIndex === i ? "true" : undefined}
          onClick={() => {
            const carousel = carouselRef.current;
            if (carousel) carousel.scrollTo({ left: i * (carousel.clientWidth + 24), behavior: "smooth" });
          }}
          className="size-8 rounded-full p-0 hover:bg-transparent"
        ><span className={`block size-2 rounded-full ${activeIndex === i ? "bg-accent" : "bg-muted-foreground/40"}`} /></Button>)}
      </div>
      <p className="mt-8 text-center text-sm text-muted-foreground">
        Results from profiles our team built. Not typical; see the earnings disclaimer.
      </p>
    </div>
    </section>
  );
}

const placeholderHeights = ["h-48", "h-72", "h-56", "h-64", "h-80", "h-52", "h-60", "h-44"];

export function Receipts() {
  const [active, setActive] = useState<Receipt | null>(null);
  useEffect(() => {
    if (!active) return;
    const onKey = (e: KeyboardEvent) => e.key === "Escape" && setActive(null);
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [active]);

  return (
    <section id="receipts" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 pb-20 sm:pb-28">
        <h2 className={T.sectionTitle}>Likes ain't buys. <Accent>These are buys.</Accent></h2>
        <p className="mx-auto mt-5 max-w-reading text-center text-muted-foreground">
          Most of our clients don't want competitors seeing their numbers, so names are blurred.
        </p>
        <div className="mt-12 columns-2 gap-4 md:columns-3 lg:columns-4">
          {receipts.length === 0
            ? placeholderHeights.map((h, i) => (
                <Placeholder key={i} label="[Receipt]" className={`mb-4 break-inside-avoid !bg-card ${h}`} />
              ))
            : receipts.map((r, i) => (
                <button key={i} type="button" onClick={() => setActive(r)} className="mb-4 block w-full break-inside-avoid text-left">
                  <img src={r.image} alt={r.caption ?? "Client result screenshot"} loading="lazy" className="w-full rounded-lg border border-line" />
                  {r.caption && <span className="mt-2 block text-xs text-muted-foreground">{r.caption}</span>}
                </button>
              ))}
        </div>
      </div>
      {active && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={() => setActive(null)}
          className="fixed inset-0 z-50 flex items-center justify-center bg-foreground/80 p-4"
        >
          <img src={active.image} alt={active.caption ?? "Client result screenshot"} className="max-h-[90vh] max-w-full rounded-lg" />
        </div>
      )}
    </section>
  );
}

export function Team() {
  return (
    <section id="team" className="bg-secondary">
      <div className="mx-auto max-w-content px-6 py-20 sm:py-28">
      <h2 className={T.sectionTitle}>Built from experience, <Accent>not textbooks.</Accent></h2>
      <p className={T.lead}>
        Our entire philosophy is built from years of testing and iterating, it didn't just appear overnight.
      </p>
      <div className="mt-10 grid grid-cols-1 items-center gap-8 rounded-xl border border-line bg-card p-6 sm:p-8 md:grid-cols-[240px_1fr]">
        {aboutPhoto ? (
          <img src={aboutPhoto} alt="Jordan Chen, founder of YRT Institute" loading="lazy" className="aspect-[4/5] w-full max-w-[240px] rounded-xl object-cover" />
        ) : (
          <Placeholder label="[Photo of Jordan]" className="aspect-[4/5] w-full max-w-[240px] !bg-card" />
        )}
        <div>
          <div className="space-y-4 text-base leading-relaxed text-foreground">
            <p>"Our entire philosophy is built from years of testing and iterating. Everything "</p>
            <p>{"\n"}</p>
            <p>{"\n"}</p>
          </div>
          <p className="mt-6 font-serif text-2xl italic text-accent">Jordan Chen, Founder</p>
        </div>
      </div>
    </div>
    </section>
  );
}
