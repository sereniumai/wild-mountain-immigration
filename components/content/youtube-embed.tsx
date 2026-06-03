"use client";

import { useState } from "react";
import { Play } from "lucide-react";

/**
 * Lightweight YouTube "facade": shows the thumbnail + play button and only loads
 * the (privacy-mode) iframe on click. This keeps the homepage fast for Lighthouse
 * (no third-party video JS until the user actually plays). Pass the YouTube video
 * id; leave it empty to render a branded placeholder until the real id is added.
 */
export function YouTubeEmbed({
  id,
  title,
  className = "rounded-2xl ring-1 ring-black/5",
}: {
  id: string;
  title: string;
  /** Wrapper styling (corners/ring); override to sit flush inside a card. */
  className?: string;
}) {
  const [playing, setPlaying] = useState(false);
  const hasId = Boolean(id);

  return (
    <div className={`relative aspect-video overflow-hidden bg-ink ${className}`}>
      {playing && hasId ? (
        <iframe
          className="absolute inset-0 size-full"
          src={`https://www.youtube-nocookie.com/embed/${id}?autoplay=1&rel=0&modestbranding=1`}
          title={title}
          loading="lazy"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          allowFullScreen
        />
      ) : (
        <button
          type="button"
          onClick={() => hasId && setPlaying(true)}
          aria-label={hasId ? `Play video: ${title}` : `${title} (video coming soon)`}
          className="group absolute inset-0 size-full cursor-pointer"
        >
          {hasId ? (
            // eslint-disable-next-line @next/next/no-img-element
            <img
              src={`https://i.ytimg.com/vi/${id}/hqdefault.jpg`}
              alt=""
              className="size-full object-cover"
              loading="lazy"
            />
          ) : (
            <div className="size-full bg-gradient-to-br from-[#2a2e33] to-ink" />
          )}
          <span className="absolute inset-0 bg-linear-to-t from-ink/45 via-ink/5 to-ink/10 transition-colors group-hover:from-ink/55" />
          <span className="absolute inset-0 grid place-items-center">
            <span className="flex size-15 items-center justify-center rounded-full bg-white/95 text-brand shadow-[0_10px_30px_rgba(0,0,0,0.22)] backdrop-blur-sm transition-all duration-300 group-hover:scale-110 group-hover:bg-white">
              <Play className="size-6 translate-x-0.5 fill-current" />
            </span>
          </span>
        </button>
      )}
    </div>
  );
}
