import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/earnings-disclaimer")({
  head: () => ({
    meta: [
      { title: "Earnings disclaimer — YRT Institute" },
      { name: "description", content: "Earnings disclaimer for YRT Creative Board by YRT Institute." },
      { property: "og:title", content: "Earnings disclaimer — YRT Institute" },
      { property: "og:description", content: "Earnings disclaimer for YRT Creative Board by YRT Institute." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <LegalPage title="Earnings disclaimer" />,
});
