"use client";

import { useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Tabs, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { skillGroups } from "@/lib/data";

export default function Skills() {
  const [activeTab, setActiveTab] = useState(skillGroups[0]?.category ?? "");

  return (
    <SectionWrapper id="skills" label="02 - Technical Arsenal" title="Skills">
      <Tabs value={activeTab} onValueChange={setActiveTab}>
        <TabsList className="mb-8 !h-auto w-full flex-wrap justify-start gap-x-6 gap-y-2 border-b border-border/40 bg-transparent p-0">
          {skillGroups.map((group) => (
            <TabsTrigger
              key={group.category}
              value={group.category}
              className="relative rounded-none border-b-2 border-transparent bg-transparent px-1 pb-3 pt-2 font-[family-name:var(--font-mono)] text-[13px] font-bold uppercase tracking-[0.12em] text-muted-foreground transition-all duration-300 hover:border-primary/50 hover:text-primary data-[state=active]:border-primary data-[state=active]:bg-transparent data-[state=active]:text-primary data-[state=active]:shadow-none -mb-px"
            >
              {group.category}
            </TabsTrigger>
          ))}
        </TabsList>
      </Tabs>

      <div key={activeTab} className="flex flex-wrap gap-3">
          {(skillGroups.find((g) => g.category === activeTab)?.skills ?? []).map((skill) => (
            <span
              key={skill}
              className="inline-flex items-center rounded-[20px] border border-border bg-secondary px-3 py-1.5 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-primary hover:text-link-hover"
            >
              {skill}
            </span>
          ))}
      </div>
    </SectionWrapper>
  );
}
