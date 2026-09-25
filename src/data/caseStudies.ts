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
  { tag: "Consulting · UHNWI Tax Advisor", headline: "Closed multiple UHNWI clients by posting highly targeted content.", verified: false },
  {
    tag: "Agency · Creator Management",
    handle: "@[handle]",
    headline: "Built an 8-figure agency on inbound alone.",
    beforeAfter: "0 → 500k followers",
    timeline: "12 months (100k in the first 3)",
    how: "Content built so the exact client he wanted would DM him. No outreach.",
    breakdown: "[Breakdown — to add]",
    verified: false,
  },
  { tag: "Info Product · E-Commerce", headline: "Built a 7-figure course business without showing off his lifestyle.", verified: false },
];
