// Wild Mountain Immigration, image sources.
// [PLACEHOLDERS] Real, license-free Unsplash photos used until the client
// supplies their own photography + Nicola's professional headshot.

const U = (id: string, w = 1200) =>
  `https://images.unsplash.com/photo-${id}?q=80&w=${w}&auto=format&fit=crop`;

export const img = {
  // Hero, aspirational couple in the Canadian Rockies
  heroPeople: U("1613547481633-3edf3c3bfdfe", 1100),
  // Full-bleed cinematic landscape band (iconic Rockies lake)
  rockies: U("1501114676295-bbbcc7a12466", 2000),
  rockiesAlt: U("1561134643-668f9057cce4", 1600),
  // Nicola Wightman, real bio photo (client-supplied)
  nicola: "/brand/nicola-wightman.avif",
  // CICC / RCIC regulator mark (client-supplied)
  cicc: "/brand/CICC.avif",
  // Small avatars, hero social proof
  heroAvatars: [
    U("1607378119679-1b10e82b3704", 120),
    U("1494790108377-be9c29b29330", 120),
    U("1564564244660-5d73c057f2d2", 120),
  ],
  // Testimonial faces
  reviewAvatars: [
    U("1625241152315-4a698f74ceb7", 160),
    U("1592234789031-94bf65f630ed", 160),
    U("1573497161161-c3e73707e25c", 160),
  ],
} as const;
