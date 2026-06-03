import { Container } from "@/components/ui/container";
import { Reveal } from "@/components/ui/reveal";
import { YouTubeEmbed } from "@/components/content/youtube-embed";
import { site } from "@/lib/site";
import { jsonLd } from "@/lib/jsonld";

/**
 * Short films from real people who moved to Canada.
 * Add each person's YouTube video id below; until then a branded placeholder
 * shows and the VideoObject schema is omitted (only emitted for real videos).
 */
const films: { name: string; country: string; youtubeId: string; blurb: string }[] = [
  {
    name: "Marie",
    country: "Ireland",
    youtubeId: "HtcObeCy9Pk",
    blurb: "Find out what activities Marie has found in Canada that she had never even considered trying before.",
  },
  {
    name: "Shak",
    country: "Iraq",
    youtubeId: "i8hb0G8LGNE",
    blurb: "Find out why Shak loves living in Canada, and his gratitude towards the country for being so diverse.",
  },
  {
    name: "Matt",
    country: "England",
    youtubeId: "AtIRXOrvNNY",
    blurb: "Find out what Matt does for fun while living in Canada, and his reasons for staying long term.",
  },
];

function Label({ children }: { children: React.ReactNode }) {
  return (
    <div className="flex justify-center">
      <span className="inline-flex items-center rounded-full bg-blush px-3 py-1 text-[11.5px] font-semibold uppercase tracking-[0.14em] text-brand">{children}</span>
    </div>
  );
}

export function VideoTestimonials() {
  const schema = films
    .filter((f) => f.youtubeId)
    .map((f) => ({
      "@context": "https://schema.org",
      "@type": "VideoObject",
      name: `${f.name} from ${f.country}: moving to Canada`,
      description: f.blurb,
      thumbnailUrl: `https://i.ytimg.com/vi/${f.youtubeId}/hqdefault.jpg`,
      contentUrl: `https://www.youtube.com/watch?v=${f.youtubeId}`,
      embedUrl: `https://www.youtube.com/embed/${f.youtubeId}`,
      uploadDate: "2024-01-01",
      publisher: { "@id": `${site.url}/#org` },
    }));

  return (
    <section className="py-20 lg:py-28">
      {schema.length > 0 && (
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: jsonLd(schema) }} />
      )}
      <Container>
        <Reveal className="mx-auto max-w-2xl text-center">
          <Label>Real stories</Label>
          <h2 className="mt-5 text-[2.1rem] font-semibold leading-[1.06] tracking-[-0.03em] text-ink sm:text-[2.9rem]">
            Hear from people who<br className="hidden sm:block" /> made the move
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-ink-soft">
            Short films from real immigrants now building their lives in Canada,<br className="hidden sm:block" /> in their own words.
          </p>
        </Reveal>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {films.map((f, i) => (
            <Reveal key={f.name} delay={(i % 3) * 80}>
              <div className="group flex h-full flex-col overflow-hidden rounded-2xl border border-brand/15 bg-blush shadow-soft transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
                <YouTubeEmbed id={f.youtubeId} title={`${f.name} from ${f.country}`} className="rounded-none" />
                <div className="flex flex-1 flex-col p-6">
                  <h3 className="font-heading text-[1.35rem] font-semibold tracking-tight text-ink">
                    {f.name} <span className="font-normal text-brand">|</span> {f.country}
                  </h3>
                  <p className="mt-2.5 flex-1 text-[15px] leading-relaxed text-ink-soft">{f.blurb}</p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </Container>
    </section>
  );
}
