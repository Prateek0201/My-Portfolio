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
        <TabsList className="mb-6 h-auto flex-wrap justify-start gap-2 bg-transparent p-0">
          {skillGroups.map((group) => (
            <TabsTrigger
              key={group.category}
              value={group.category}
              className="min-h-10 rounded-[24px] border border-border bg-card px-4 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-muted-foreground data-[state=active]:border-primary data-[state=active]:bg-primary data-[state=active]:text-primary-foreground"
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
              className="rounded-[20px] border border-border bg-secondary px-3 py-1.5 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.1em] text-muted-foreground transition-colors hover:border-primary hover:text-link-hover"
            >
              {skill}
            </span>
          ))}
      </div>
    </SectionWrapper>
  );
}
