import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { TopBar } from "@/components/site/TopBar";
import { MobileBar } from "@/components/site/MobileBar";
import { Hero, Numbers } from "@/components/site/Hero";
import { Problem, Tried, Beliefs } from "@/components/site/Story";
import { Method, Scorecard } from "@/components/site/Method";
import { CaseStudies, Receipts, About } from "@/components/site/Proof";
import { Offer, Fit, HowItWorks, Faq, FinalCta, Footer } from "@/components/site/Closing";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "YRT Creative Board — YRT Institute" },
      { name: "description", content: "A creative advisory by YRT Institute. Likes ain't buys." },
      { property: "og:title", content: "YRT Creative Board — YRT Institute" },
      { property: "og:description", content: "A creative advisory by YRT Institute. Likes ain't buys." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div
      className="min-h-screen bg-background pb-36 md:pb-0"
      style={{ "--accent": site.accentColor } as CSSProperties}
    >
      <TopBar />
      <main>
        <Hero />
        <Numbers />
        <Problem />
        <Tried />
        <Beliefs />
        <Method />
        <Scorecard />
        <CaseStudies />
        <Receipts />
        <About />
        <Offer />
        <Fit />
        <HowItWorks />
        <Faq />
        <FinalCta />
      </main>
      <Footer />
      <MobileBar />
    </div>
  );
}
