"use client";

import dynamic from "next/dynamic";

const UnicornBackground = dynamic(() => import("@/components/UnicornBackground"), {
  ssr: false,
});

export default function ClientBackground() {
  return <UnicornBackground />;
}
