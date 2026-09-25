import { useState } from "react";
import { site } from "@/config/site";
import { cn } from "@/lib/utils";

/**
 * 16:9 video player for a Wistia or Vidalytics embed URL.
 * - Autoplays muted, tap for sound.
 * - While videoEmbedUrl is empty, shows a styled "Video coming soon" placeholder.
 *
 * Embed URL is appended with autoplay + mute params on first load; tapping the
 * player re-loads it unmuted. Both Wistia (`?autoplay=true&muted=true`) and
 * Vidalytics accept these as query params; unknown params are ignored by the
 * provider, so a single append is safe for both.
 */
export function VideoPlayer() {
  const [muted, setMuted] = useState(true);
  const url = site.videoEmbedUrl;

  if (!url) {
    return (
      <div className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-card">
        <div className="absolute inset-0 flex flex-col items-center justify-center gap-3 text-center">
          <span className="font-serif text-3xl text-ink-soft sm:text-4xl">
            Video coming soon
          </span>
          <span className="text-sm text-muted-foreground">
            A short film from Jordan on how the Board works.
          </span>
        </div>
      </div>
    );
  }

  const sep = url.includes("?") ? "&" : "?";
  const src = `${url}${sep}autoplay=true${muted ? "&muted=true" : "&muted=false"}`;

  return (
    <div
      className="relative aspect-video w-full overflow-hidden rounded-xl border border-line bg-black"
      onClick={() => {
        if (muted) setMuted(false);
      }}
    >
      <iframe
        key={String(muted)}
        src={src}
        title="YRT Creative Board"
        className="absolute inset-0 h-full w-full"
        allow="autoplay; fullscreen; encrypted-media"
        allowFullScreen
      />
      {muted && (
        <button
          type="button"
          aria-label="Tap for sound"
          className={cn(
            "absolute bottom-3 right-3 rounded-md bg-black/60 px-3 py-1.5 text-xs font-medium text-white",
            "backdrop-blur transition-opacity hover:bg-black/80",
          )}
        >
          Tap for sound
        </button>
      )}
    </div>
  );
}
