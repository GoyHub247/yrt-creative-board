/** Shared text styles — the single source for page typography. */
export const T = {
  display: "font-serif font-normal text-5xl sm:text-7xl md:text-8xl leading-[0.95] text-balance text-foreground",
  displayClose: "font-serif font-normal text-5xl sm:text-6xl md:text-7xl leading-[0.95] text-balance text-foreground",
  sectionTitle: "font-serif font-normal text-4xl sm:text-5xl leading-tight text-center max-w-3xl mx-auto text-balance text-foreground",
  subTitle: "font-serif font-normal text-3xl sm:text-4xl leading-tight text-balance text-foreground",
  cardTitle: "font-serif font-normal text-2xl leading-snug text-balance text-foreground",
  lead: "mx-auto mt-5 max-w-reading text-center text-lg leading-relaxed text-muted-foreground",
  body: "text-base leading-relaxed",
  small: "text-sm text-muted-foreground",
  label: "text-xs font-medium uppercase tracking-[0.16em] text-muted-foreground",
  finePrint: "text-xs leading-relaxed",
  figure: "font-serif font-normal text-3xl sm:text-4xl",
} as const;
