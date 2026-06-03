// Real Google reviews for Wild Mountain Immigration (5.0 average, 45 reviews).
// Source: public Google Business Profile. Names shown as publicly displayed.
// Long reviews are trimmed for length; wording is otherwise the client's own.

export const reviewStats = {
  rating: 5.0,
  count: 45,
  source: "Google",
  // Public Google Business Profile reviews link.
  url: "https://maps.app.goo.gl/rq6E6ejWW1q6z77x8",
} as const;

export type Review = {
  name: string;
  text: string;
  tag: string;        // short pathway label, derived from the review
  when: string;       // relative time as shown publicly
};

export const reviews: Review[] = [
  {
    name: "Jake Carr",
    tag: "Permanent residence",
    when: "3 months ago",
    text: "Nicola went above and beyond to assist me with my PR application. She was always readily available to answer questions and give advice, and it made the whole process so much easier. I would 100% recommend Wild Mountain Immigration if you are looking to apply for any visas or for permanent residency in Canada.",
  },
  {
    name: "satish parida",
    tag: "Spousal sponsorship",
    when: "3 weeks ago",
    text: "Nicola is amazing. She is very knowledgeable in spousal sponsorship and PR. She is a great listener and stays updated with the changes. After consulting with her, all my doubts were clarified. I highly recommend Wild Mountain Immigration for your immigration needs.",
  },
  {
    name: "Peter Nguyen",
    tag: "Work permit to PR",
    when: "a year ago",
    text: "I came to Nicola when things were toughest, out of status with expired paperwork. She calmed me down and walked me through everything, the work permit, then the PNP, then PR. She always kept me updated and answered every question, no matter how small. After a few months I had my work permit, my nomination and my invitation to apply for PR. More than worthy, her work and the price are well deserved.",
  },
  {
    name: "Vinita Menon",
    tag: "Work permit",
    when: "a year ago",
    text: "Our experience with Wild Mountain has been wonderful. Nicola was very professional and thorough in her advice. With us having no prior experience, she was patient with our queries and explained everything in detail, ensuring a successful work permit application. I would absolutely recommend Nicola and her team for anything immigration in Canada.",
  },
  {
    name: "Daryl Page",
    tag: "Citizenship",
    when: "2 years ago",
    text: "I used Wild Mountain Immigration for my citizenship application. The immigration system can be confusing and overwhelming, but Nic was there every step of the way with a friendly, reliable and prompt service. I would, and do, recommend her for all applications and advice regarding immigration.",
  },
  {
    name: "Victoria Young",
    tag: "Sponsorship",
    when: "3 years ago",
    text: "Nicola helped us through the process of applying for PR through sponsorship, which we received in 9 months. She was available to answer all our questions and provided endless helpful information. She made this stressful process seem easy for us. We are so grateful for the amazing service at Wild Mountain Immigration.",
  },
  {
    name: "Emily Smith",
    tag: "File review",
    when: "3 years ago",
    text: "This was the most invaluable service before submitting my PR application. Nicola checked everything thoroughly and sent detailed feedback. There were so many things I had missed or done incorrectly, which I was able to change before submitting, and meant I had no problems and got my PR through in record time. It is worth all the money in the world to know it is all done correctly.",
  },
  {
    name: "clifford cohen",
    tag: "Citizenship",
    when: "2 years ago",
    text: "I could write a book about Nicola and how she supported my applications for my kids' citizenship. Her attention to detail and patience was endless, guiding me and reminding me what needs to be done. You can tell she genuinely cares about this work. I would not hesitate to recommend her.",
  },
  {
    name: "Nathan Barnes",
    tag: "Permanent residence",
    when: "a year ago",
    text: "WOW! Nicola was amazing. Extremely helpful, understanding and always there to guide me through the very challenging application process. I would not have been able to do this without Nicola's knowledge. I cannot recommend Wild Mountain Immigration enough. Worth every dollar!",
  },
  {
    name: "Patrick Marcelo",
    tag: "Work permit",
    when: "a year ago",
    text: "We have an excellent experience with Wild Mountain Immigration. Nicola helped us all the time, answering all our questions, very professional. At the border the officer thanked us for having all our paperwork in order. Following Nicola's instructions, everything was ok. We obtained our work permits and we're happy living in Calgary.",
  },
  {
    name: "Massud Rezaie",
    tag: "PR / work permit",
    when: "3 years ago",
    text: "I could not recommend Nicola more to anyone who needs help with their visa or PR for Canada. She has felt like a dear friend helping me with every step, answering my many questions with the utmost patience and care. I wouldn't be here otherwise and I'm truly grateful for all her help.",
  },
  {
    name: "Mia Clement-jones",
    tag: "Recent client",
    when: "a month ago",
    text: "Nicola was amazing from start to finish. Any worries or questions I had she quickly resolved and made the process so easy. Thank you so much!",
  },
];

// Org-level JSON-LD review nodes (a representative subset).
export function reviewSchema() {
  return {
    aggregateRating: {
      "@type": "AggregateRating",
      ratingValue: reviewStats.rating,
      reviewCount: reviewStats.count,
      bestRating: 5,
      worstRating: 1,
    },
    review: reviews.slice(0, 6).map((r) => ({
      "@type": "Review",
      reviewRating: { "@type": "Rating", ratingValue: 5, bestRating: 5 },
      author: { "@type": "Person", name: r.name },
      reviewBody: r.text,
    })),
  };
}
