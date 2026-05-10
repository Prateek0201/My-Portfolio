"use client";

import { useEffect, useMemo, useState } from "react";

type TypewriterTextProps = {
  strings: string[];
  typingSpeed?: number;
  deletingSpeed?: number;
  pauseDuration?: number;
};

export default function TypewriterText({
  strings,
  typingSpeed = 72,
  deletingSpeed = 40,
  pauseDuration = 1400,
}: TypewriterTextProps) {
  const safeStrings = useMemo(() => strings.filter(Boolean), [strings]);
  const [text, setText] = useState(() => strings.find(Boolean) ?? "");
  const [index, setIndex] = useState(0);
  const [deleting, setDeleting] = useState(false);
  const [started, setStarted] = useState(false);

  useEffect(() => {
    if (!safeStrings.length) return;
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;

    if (prefersReducedMotion) return;

    const startTimer = setTimeout(() => setStarted(true), 1200);
    return () => clearTimeout(startTimer);
  }, [safeStrings]);

  useEffect(() => {
    if (!safeStrings.length || !started) return;
    const current = safeStrings[index % safeStrings.length];
    const doneTyping = !deleting && text === current;
    const doneDeleting = deleting && text === "";

    let timeout = typingSpeed;
    if (doneTyping) timeout = pauseDuration;
    if (deleting) timeout = deletingSpeed;

    const timer = setTimeout(() => {
      if (doneTyping) return setDeleting(true);
      if (doneDeleting) {
        setDeleting(false);
        return setIndex((prev) => (prev + 1) % safeStrings.length);
      }
      setText((prev) =>
        deleting
          ? prev.slice(0, -1)
          : current.slice(0, Math.min(current.length, prev.length + 1)),
      );
    }, timeout);

    return () => clearTimeout(timer);
  }, [deleting, deletingSpeed, index, pauseDuration, safeStrings, started, text, typingSpeed]);

  return (
    <h2 className="min-h-10 font-[family-name:var(--font-body)] text-[clamp(1.35rem,2.4vw,2rem)] font-medium leading-tight tracking-normal text-primary">
      {text}
      <span className="ml-1 inline-block animate-pulse">|</span>
    </h2>
  );
}
