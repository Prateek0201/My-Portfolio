"use client";

import { Code2, Link2, Mail } from "lucide-react";
import MagneticButton from "@/components/MagneticButton";
import TerminalWindow from "@/components/TerminalWindow";
import TypewriterText from "@/components/TypewriterText";
import { personal } from "@/lib/data";

export default function Hero() {
  return (
    <section className="relative min-h-screen overflow-hidden px-4 pb-12 pt-24 sm:px-6 md:px-10 md:pt-24 lg:px-16 xl:px-24">
      <div className="relative z-10 grid w-full items-center gap-10 lg:min-h-[calc(100vh-7rem)] lg:grid-cols-[minmax(0,0.95fr)_minmax(360px,0.7fr)] lg:gap-16 xl:gap-24">
        <div className="max-w-[920px] space-y-6">
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.18em] text-primary sm:text-sm">
            Data Scientist & AI/ML Engineer <span className="animate-pulse">_</span>
          </p>
          <h1 className="max-w-[13ch] font-[family-name:var(--font-body)] text-[clamp(3rem,5.8vw,5.8rem)] font-semibold leading-[0.96] tracking-normal text-foreground">
            {personal.name}
          </h1>
          <TypewriterText
            strings={[
              "Building Multi-Agent AI Systems",
              "Crafting Production RAG Pipelines",
              "Turning Data into Revenue Impact",
            ]}
          />
          <p className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg">{personal.summary}</p>

          <div className="flex flex-wrap gap-4">
            <MagneticButton
              onClick={() => document.getElementById("experience")?.scrollIntoView({ behavior: "smooth" })}
              className="min-h-11 rounded-[24px] bg-primary px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground transition-colors hover:bg-secondary hover:text-foreground"
            >
              View My Work
            </MagneticButton>
            <a href="/resume.pdf" download className="inline-flex min-h-11 items-center rounded-[40px] border border-primary px-6 py-3 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.15em] text-primary transition-colors hover:bg-primary hover:text-primary-foreground">
              Download Resume
            </a>
          </div>

          <div className="flex items-center gap-3 text-muted-foreground">
            <a href={personal.github || "#"} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-link-hover"><Code2 size={18} /></a>
            <a href={personal.linkedin || "#"} target="_blank" rel="noreferrer" className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-link-hover"><Link2 size={18} /></a>
            <a href={`mailto:${personal.email}`} className="grid h-11 w-11 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-link-hover"><Mail size={18} /></a>
          </div>
        </div>
        <div className="w-full max-w-[520px] justify-self-stretch lg:justify-self-end">
          <TerminalWindow />
        </div>
      </div>
    </section>
  );
}
