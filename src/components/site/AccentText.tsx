import { Fragment, type ReactNode } from "react";

/**
 * Renders a string with *asterisk*-wrapped segments as italic serif in the
 * accent colour, per the YRT design system. Everything else renders as-is.
 */
export function AccentText({ children }: { children: string }) {
  const parts = children.split(/(\*[^*]+\*)/g);
  return (
    <>
      {parts.map((part, i) => {
        if (part.startsWith("*") && part.endsWith("*")) {
          return (
            <em key={i} className="font-serif italic text-accent not-italic-[style:normal]">
              {part.slice(1, -1)}
            </em>
          );
        }
        return <Fragment key={i}>{part}</Fragment>;
      })}
    </>
  );
}

/** Wraps an already-built node tree — use when the accent run is known up front. */
export function Accent({ children }: { children: ReactNode }) {
  return <em className="font-serif italic text-accent">{children}</em>;
}
