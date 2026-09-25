import { createFileRoute } from "@tanstack/react-router";
import type { CSSProperties } from "react";
import { site } from "@/config/site";
import { TopBar } from "@/components/site/TopBar";
import { MobileBar } from "@/components/site/MobileBar";
import { Hero, Numbers } from "@/components/site/Hero";

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

const sections = [
  "problem", "tried", "beliefs", "method", "scorecard",
  "case-studies", "receipts", "about", "offer", "fit", "how-it-works", "faq", "final-cta",
];

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
        {sections.map((id) => (
          <section key={id} id={id} className="mx-auto max-w-content px-6 py-16">
            <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
              [{id}]
            </div>
          </section>
        ))}
      </main>
      <footer id="footer" className="mx-auto max-w-content px-6 py-16">
        <div className="rounded-xl border border-dashed border-border p-8 text-center text-sm text-muted-foreground">
          [footer]
        </div>
      </footer>
      <MobileBar />
    </div>
  );
}
