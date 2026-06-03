"use client";

import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import Image from "next/image";
import { clsx } from "clsx";

/* eslint-disable @typescript-eslint/no-explicit-any */
declare global {
  interface Window {
    YT?: any;
    onYouTubeIframeAPIReady?: () => void;
  }
}

let apiPromise: Promise<void> | null = null;
function loadYouTubeApi(): Promise<void> {
  if (typeof window === "undefined") return Promise.resolve();
  if (window.YT?.Player) return Promise.resolve();
  if (apiPromise) return apiPromise;
  apiPromise = new Promise((resolve) => {
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    const prev = window.onYouTubeIframeAPIReady;
    window.onYouTubeIframeAPIReady = () => {
      prev?.();
      resolve();
    };
    document.head.appendChild(tag);
  });
  return apiPromise;
}

/**
 * Hero background video. Uses the YouTube IFrame API so we can:
 *  - start the film at a chosen second and loop back to it (not to 0),
 *  - keep the poster image on top until playback genuinely begins, which hides
 *    YouTube's loading / play-button chrome (the poster is also the LCP image),
 *  - drive a clean, labelled sound toggle.
 * To protect mobile performance and respect reduced-motion, the player only
 * mounts on larger screens with motion allowed; otherwise the poster stands in.
 *
 * `cover` sizes the 16:9 player to fill a full-bleed landscape hero.
 */
export type HeroVideoHandle = { toggleSound: () => void };

type HeroVideoProps = {
  id: string;
  poster: string;
  posterAlt: string;
  start?: number;
  /** Loop back to `start` this many seconds before the video's true end. */
  endTrim?: number;
  /** Absolute second to loop at (overrides endTrim), e.g. stop at 2:15 → 135. */
  end?: number;
  cover?: boolean;
  /** Notified whenever the video becomes active or the mute state changes, so a
   *  parent can render its own sound toggle wherever it likes. */
  onState?: (s: { enabled: boolean; muted: boolean }) => void;
};

export const HeroVideo = forwardRef<HeroVideoHandle, HeroVideoProps>(function HeroVideo({
  id,
  poster,
  posterAlt,
  start = 0,
  endTrim = 6,
  end,
  cover = false,
  onState,
}, ref) {
  const holderRef = useRef<HTMLDivElement>(null);
  const playerRef = useRef<any>(null);
  const tickRef = useRef<number | null>(null);
  const [enabled, setEnabled] = useState(false);
  const [playing, setPlaying] = useState(false);
  const [muted, setMuted] = useState(true);

  useEffect(() => {
    // Respect reduced-motion; otherwise run on every screen size (mobile too).
    const okMotion = !window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    if (!okMotion) return;
    setEnabled(true);

    let cancelled = false;
    let revealed = false;

    // Single ticker that (a) keeps the film playing, (b) only lifts the poster
    // once playback is genuinely advancing past YouTube's start-up chrome, and
    // (c) loops back before the real end. Reveal is state-driven, not timed, so
    // the poster is guaranteed to cover any centre play/pause button.
    const loop = () => {
      const p = playerRef.current;
      if (!p?.getCurrentTime) return;
      const YT = window.YT;
      const state = p.getPlayerState?.();
      const t = p.getCurrentTime() ?? 0;
      const d = p.getDuration?.() ?? 0;

      // Never let it rest in a non-playing state (paused/buffering/cued/unstarted
      // is exactly what renders YouTube's centre button). Force it to play.
      if (state !== YT?.PlayerState?.PLAYING) {
        p.playVideo?.();
      }

      const stopAt = end ?? (d > 0 ? d - endTrim : Infinity);
      const COVER = 1.5; // seconds of poster cover before the loop seek

      // Pre-cover: drop back to the poster shortly BEFORE looping, so the
      // seek/rebuffer (which can flash YouTube's centre button) happens while
      // the poster is on top and the iframe is back at opacity-0.
      if (revealed && stopAt !== Infinity && t >= stopAt - COVER) {
        revealed = false;
        setPlaying(false);
      }

      // Loop back once we reach the trim point, then let the reveal logic below
      // bring the film back in once it's playing cleanly again.
      if (stopAt !== Infinity && t >= stopAt) {
        p.seekTo(start, true);
        p.mute();
        setMuted(true);
        return;
      }

      // Reveal only once the film is PLAYING and its clock has run a clear 3.5s
      // past `start` (well past YouTube's start-of-play centre-button animation),
      // and never during the pre-loop cover window. Until then the iframe is held
      // at opacity-0 AND the poster covers it, so any chrome is on a hidden layer.
      if (!revealed && state === YT?.PlayerState?.PLAYING && t >= start + 3.5 && t < stopAt - COVER) {
        revealed = true;
        setPlaying(true);
      }
    };

    const startVideo = () => loadYouTubeApi().then(() => {
      if (cancelled || !holderRef.current || !window.YT?.Player) return;
      playerRef.current = new window.YT.Player(holderRef.current, {
        videoId: id,
        host: "https://www.youtube-nocookie.com",
        playerVars: {
          autoplay: 1,
          mute: 1,
          controls: 0,
          start,
          playsinline: 1,
          modestbranding: 1,
          rel: 0,
          disablekb: 1,
          fs: 0,
          iv_load_policy: 3,
        },
        events: {
          onReady: (e: any) => {
            e.target.mute();
            e.target.playVideo();
            tickRef.current = window.setInterval(loop, 250);
          },
          onStateChange: (e: any) => {
            const YT = window.YT;
            // Restart (muted) if it ever reaches the true end.
            if (e.data === YT.PlayerState.ENDED) {
              e.target.seekTo(start, true);
              e.target.mute();
              setMuted(true);
              e.target.playVideo();
            }
            // Resume INSTANTLY on paused/unstarted/cued, rather than waiting up
            // to a tick. These are the states that render YouTube's centre play/
            // pause button, so closing the gap to ~0ms means it can't be caught
            // on screen right after the reveal.
            if (
              e.data === YT.PlayerState.PAUSED ||
              e.data === YT.PlayerState.UNSTARTED ||
              e.data === YT.PlayerState.CUED
            ) {
              e.target.playVideo();
            }
          },
        },
      });
    });

    // Defer the heavy YouTube iframe API + player until the browser is idle, so
    // it never competes with the LCP / initial paint (big Lighthouse win). The
    // poster is the LCP and shows instantly; the film fades in once it loads.
    const win = window as Window & {
      requestIdleCallback?: (cb: () => void, opts?: { timeout: number }) => number;
      cancelIdleCallback?: (id: number) => void;
    };
    let idleId: number | undefined;
    let timerId: number | undefined;
    if (win.requestIdleCallback) idleId = win.requestIdleCallback(startVideo, { timeout: 4000 });
    else timerId = window.setTimeout(startVideo, 2000);

    return () => {
      cancelled = true;
      if (idleId !== undefined) win.cancelIdleCallback?.(idleId);
      if (timerId !== undefined) window.clearTimeout(timerId);
      if (tickRef.current) window.clearInterval(tickRef.current);
      try {
        playerRef.current?.destroy?.();
      } catch {
        /* noop */
      }
    };
  }, [id, start, endTrim, end]);

  function toggleSound() {
    const p = playerRef.current;
    if (!p) return;
    if (muted) {
      p.unMute();
      p.setVolume(100);
      setMuted(false);
    } else {
      p.mute();
      setMuted(true);
    }
  }

  // Expose the toggle to the parent and keep it informed of mute/enabled state.
  useImperativeHandle(ref, () => ({ toggleSound }), [muted]);
  useEffect(() => {
    onState?.({ enabled, muted });
  }, [enabled, muted, onState]);

  return (
    <div className="absolute inset-0 overflow-hidden">
      {enabled && (
        <div
          className={clsx(
            "absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 transition-opacity duration-700 ease-out [&>iframe]:size-full",
            // The iframe is invisible until reveal, so YouTube's start-up flash
            // can never be seen even as the poster crossfades away.
            playing ? "opacity-100" : "opacity-0",
            cover
              ? "h-[max(56.25vw,100vh)] w-[max(100vw,177.78vh)]"
              : "h-full w-[222%] max-w-none",
          )}
        >
          <div ref={holderRef} className="pointer-events-none size-full" />
        </div>
      )}

      {/* Poster sits on top and fades out only once real playback has begun,
          so no YouTube play-button or loading frame is ever visible. */}
      <Image
        src={poster}
        alt={posterAlt}
        fill
        priority
        sizes={cover ? "100vw" : "(max-width: 1024px) 90vw, 460px"}
        className={clsx(
          "object-cover transition-opacity duration-1000 ease-out",
          playing ? "opacity-0" : "opacity-100",
        )}
      />

    </div>
  );
});
