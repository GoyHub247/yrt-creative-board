import jordanChenAsset from "@/assets/jordan-chen.png.asset.json";

export type Receipt = { image: string; caption?: string };

/** Add real screenshots here. While empty, placeholder tiles are shown. */
export const receipts: Receipt[] = [];

/** Portrait for the About section. */
export const aboutPhoto = jordanChenAsset.url;
