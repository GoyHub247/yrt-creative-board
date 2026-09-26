export const site = {
  instagramHandle: "jordanchenyrt",
  dmKeyword: "BOARD",
  dmUrl: "https://ig.me/m/jordanchenyrt",
  totalSeats: 10,
  // Hand-updated. Must always be the true number.
  seatsLeft: 10,
  // Empty shows a "Video coming soon" placeholder.
  videoEmbedUrl: "",
  youtubeUrl: "[YouTube URL]",
  // Temporary accent colour.
  accentColor: "#2F4A3A",
} as const;

export const seatLabel = `${site.seatsLeft} of ${site.totalSeats} beta seats left`;
