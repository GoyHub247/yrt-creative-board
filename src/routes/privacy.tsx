import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/privacy")({
  head: () => ({
    meta: [
      { title: "Privacy policy — YRT Institute" },
      { name: "description", content: "Privacy policy for YRT Creative Board by YRT Institute." },
      { property: "og:title", content: "Privacy policy — YRT Institute" },
      { property: "og:description", content: "Privacy policy for YRT Creative Board by YRT Institute." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <LegalPage title="Privacy policy" />,
});
