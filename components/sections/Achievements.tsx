import { Brain, Target, TrendingUp, Zap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { achievements } from "@/lib/data";

const iconMap = { Brain, TrendingUp, Zap, Target };

export default function Achievements() {
  return (
    <SectionWrapper id="achievements" label="04 - Highlights" title="Achievements">
      <div className="grid gap-4 md:grid-cols-2">
        {achievements.map((item, idx) => {
          const Icon = iconMap[item.icon as keyof typeof iconMap] ?? Brain;
          return (
            <article
              key={item.title}
              className="glass-card glow-border group relative overflow-hidden p-5 sm:p-6"
            >
              <div className="mb-4 inline-flex rounded-[20px] bg-primary p-3 text-primary-foreground">
                <Icon size={34} />
              </div>
              <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-tight tracking-normal text-foreground transition-colors group-hover:text-link-hover">{item.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">{item.description}</p>
            </article>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
