import { createFileRoute } from "@tanstack/react-router";
import { useEffect, type CSSProperties } from "react";
import { initSource } from "@/lib/analytics";
import { LegalDialogs } from "@/components/site/LegalDialogs";
import { site } from "@/config/site";
import { TopBar } from "@/components/site/TopBar";
import { MobileBar } from "@/components/site/MobileBar";
import { Hero, Numbers } from "@/components/site/Hero";
import { Problem, Tried, Beliefs } from "@/components/site/Story";
import { HowItWorks } from "@/components/site/Method";
import { CaseStudies, Receipts, About } from "@/components/site/Proof";
import { Offer, Fit, Apply, Faq, FinalCta, Footer } from "@/components/site/Closing";

const TITLE = "YRT Creative Board | Likes ain't buys";
const DESC = "A creative advisory for established online businesses. Turn your expertise into content that brings in buyers.";
const OG = "https://yrtinstitute.com/og-image.png";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: TITLE },
      { name: "description", content: DESC },
      { property: "og:title", content: TITLE },
      { property: "og:description", content: DESC },
      { property: "og:type", content: "website" },
      { property: "og:image", content: OG },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: TITLE },
      { name: "twitter:description", content: DESC },
      { name: "twitter:image", content: OG },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
  component: Index,
});

function Index() {
  useEffect(() => { initSource(); }, []);
  return (
    <div
      className="min-h-screen bg-background pb-36 md:pb-0"
      style={{ "--accent": site.accentColor } as CSSProperties}
    >
      <TopBar />
      <main>
        <Hero />
        <HowItWorks />
        <Numbers />
        <Problem />
        <Tried />
        <Beliefs />
        <CaseStudies />
        <Receipts />
        <About />
        <Offer />
        <Fit />
        <Apply />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
      <LegalDialogs />
    </div>
  );
}
