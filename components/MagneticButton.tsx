"use client";

import type { ReactNode } from "react";

type MagneticButtonProps = {
  children: ReactNode;
  className?: string;
  onClick?: () => void;
};

export default function MagneticButton({
  children,
  className,
  onClick,
}: MagneticButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={className}
    >
      {children}
    </button>
  );
}
