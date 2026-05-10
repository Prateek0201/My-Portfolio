"use client";

import { useEffect } from "react";

declare global {
  interface Window {
    UnicornStudio?: {
      init?: () => void;
      isInitialized?: boolean;
    };
  }
}

export default function UnicornBackground() {
  useEffect(() => {
    const prefersReducedMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)",
    ).matches;
    const connection = (navigator as Navigator & {
      connection?: { saveData?: boolean; effectiveType?: string };
    }).connection as
      | { saveData?: boolean; effectiveType?: string }
      | undefined;
    const deviceMemory = (navigator as Navigator & { deviceMemory?: number })
      .deviceMemory;
    const isConstrainedDevice =
      prefersReducedMotion ||
      connection?.saveData ||
      connection?.effectiveType === "2g" ||
      deviceMemory === undefined ||
      deviceMemory <= 4;

    if (isConstrainedDevice) return;

    const init = () => window.UnicornStudio?.init?.();
    const load = () => {
      if (window.UnicornStudio?.init) {
        init();
        return;
      }

      window.UnicornStudio = { isInitialized: false };
      const existingScript = document.querySelector<HTMLScriptElement>(
        'script[src*="unicornStudio.umd.js"]',
      );

      if (existingScript) {
        existingScript.addEventListener("load", init, { once: true });
        return;
      }

      const script = document.createElement("script");
      script.src =
        "https://cdn.jsdelivr.net/gh/hiunicornstudio/unicornstudio.js@v2.1.3/dist/unicornStudio.umd.js";
      script.async = true;
      script.defer = true;
      script.onload = init;
      (document.head || document.body).appendChild(script);
    };

    let idleId: number | undefined;
    let timeoutId: ReturnType<typeof setTimeout> | undefined;

    if (typeof window.requestIdleCallback === "function") {
      idleId = window.requestIdleCallback(load, { timeout: 2500 });
    } else {
      timeoutId = globalThis.setTimeout(load, 1400);
    }

    return () => {
      if (typeof idleId === "number" && typeof window.cancelIdleCallback === "function") {
        window.cancelIdleCallback(idleId);
      }
      if (timeoutId) {
        globalThis.clearTimeout(timeoutId);
      }
    };
  }, []);

  return (
    <>
      <div className="site-bg-fallback pointer-events-none fixed left-0 top-0 -z-20 h-full w-full" />
      <div
        className="pointer-events-none fixed left-0 top-0 -z-10 h-full w-full motion-reduce:hidden"
        data-us-project="FA91ypkIWKOhjZEGAfQR"
        aria-hidden="true"
      />
    </>
  );
}
