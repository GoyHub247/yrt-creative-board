import { createFileRoute } from "@tanstack/react-router";
import { LegalPage } from "@/components/site/LegalPage";

export const Route = createFileRoute("/terms")({
  head: () => ({
    meta: [
      { title: "Terms — YRT Institute" },
      { name: "description", content: "Terms for YRT Creative Board by YRT Institute." },
      { property: "og:title", content: "Terms — YRT Institute" },
      { property: "og:description", content: "Terms for YRT Creative Board by YRT Institute." },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary" },
    ],
  }),
  component: () => <LegalPage title="Terms" />,
});
