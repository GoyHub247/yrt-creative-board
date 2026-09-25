export type CaseStudy = {
  tag: string;
  handle?: string;
  headline: string;
  beforeAfter?: string;
  timeline?: string;
  how?: string;
  proofImage?: string;
  breakdown?: string;
  verified: boolean;
};

export const caseStudies: CaseStudy[] = [
  { tag: "Info product · [niche]", headline: "[Case study 1 — to add]", verified: false },
  {
    tag: "Agency · Creator management",
    handle: "@[handle]",
    headline: "Built an 8-figure agency on inbound alone.",
    beforeAfter: "0 → 500k followers",
    timeline: "12 months (100k in the first 3)",
    how: "Content built so the exact client he wanted would DM him. No outreach.",
    breakdown: "[Breakdown — to add]",
    verified: false,
  },
  { tag: "Info product · [niche]", headline: "[Case study 3 — to add]", verified: false },
];
