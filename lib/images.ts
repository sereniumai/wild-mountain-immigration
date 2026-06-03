// Wild Mountain Immigration, image sources.
// [PLACEHOLDERS] License-free Unsplash photos, now SELF-HOSTED under /public/brand
// (not hot-linked) so there is no runtime Unsplash dependency and next/image can
// optimise them to AVIF/WebP from our own origin. Swap these for the client's own
// photography + Nicola's professional headshot when supplied.

export const img = {
  // Aspirational couple in the Canadian Rockies (program hero side image)
  heroPeople: "/brand/hero-people.jpg",
  // Full-bleed cinematic landscape band (iconic Rockies lake)
  rockies: "/brand/rockies.jpg",
  rockiesAlt: "/brand/rockies-alt.jpg",
  // Nicola Wightman, real bio photo (client-supplied)
  nicola: "/brand/nicola-wightman.avif",
  // CICC / RCIC regulator mark (client-supplied)
  cicc: "/brand/CICC.avif",
} as const;
