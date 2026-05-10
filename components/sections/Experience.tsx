"use client";

import { useRef } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { experience } from "@/lib/data";

export default function Experience() {
  const timelineRef = useRef<HTMLDivElement>(null);

  return (
    <SectionWrapper id="experience" label="03 - Professional Journey" title="Experience">
      <div ref={timelineRef} className="relative pl-0 sm:pl-10">
        <div className="absolute left-3 top-0 hidden h-full w-px border-l border-dashed border-accent sm:block" />

        {experience.map((item) => (
          <div key={item.company} className="mb-6 last:mb-0">
            <div className="mb-4 flex items-center gap-2">
              <span className="hidden h-3 w-3 rounded-full bg-primary sm:inline-flex" />
              <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-muted-foreground">
                {item.period} - {item.company} ({item.type})
              </p>
            </div>
            <div className="space-y-3">
              {item.projects.map((project) => (
                <article
                  key={project.title}
                  className="glass-card glow-border relative p-5 sm:p-6"
                >
                  <span
                    className="mb-4 inline-flex rounded-[20px] border px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.12em] sm:absolute sm:right-4 sm:top-4 border-primary bg-primary text-primary-foreground"
                  >
                    {project.impact}
                  </span>
                  <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-tight tracking-normal text-foreground sm:pr-40">
                    {project.title}
                  </h3>
                  <div className="mt-3 flex flex-wrap gap-2">
                    {project.tags.map((tag) => (
                      <span
                        key={tag}
                        className="rounded-[20px] border px-2.5 py-1 font-[family-name:var(--font-mono)] text-[11px] uppercase tracking-[0.1em] border-primary text-primary"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>
                  <ul className="mt-4 space-y-2">
                    {project.bullets.map((point) => (
                      <li key={point} className="text-sm leading-relaxed text-muted-foreground">
                        <span className="mr-2 text-primary">›</span>
                        {point}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
            </div>
          </div>
        ))}
      </div>
    </SectionWrapper>
  );
}
