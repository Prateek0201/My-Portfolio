import type { ReactNode } from "react";

type SectionWrapperProps = {
  id: string;
  label?: string;
  title?: string;
  children: ReactNode;
  className?: string;
};

export default function SectionWrapper({
  id,
  label,
  title,
  children,
  className,
}: SectionWrapperProps) {
  return (
    <section
      id={id}
      className={`content-section section-glass relative px-4 py-12 sm:px-6 sm:py-14 md:px-10 md:py-16 lg:px-16 lg:py-20 xl:px-24 ${className ?? ""}`}
    >
      <div className="w-full">
        {(label || title) && (
          <div className="mb-7 md:mb-8">
            {label ? (
              <p className="mb-3 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-muted-foreground">
                {label}
              </p>
            ) : null}
            {title ? (
              <>
                <h2 className="max-w-4xl font-[family-name:var(--font-body)] text-[clamp(2rem,4vw,4rem)] font-semibold leading-tight tracking-normal text-foreground">
                  {title}
                </h2>
                <span className="mt-4 block h-px w-16 bg-primary" />
              </>
            ) : null}
          </div>
        )}
        <div>{children}</div>
      </div>
    </section>
  );
}
