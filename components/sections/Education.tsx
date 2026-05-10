import { Award, GraduationCap } from "lucide-react";
import SectionWrapper from "@/components/SectionWrapper";
import { certification, education } from "@/lib/data";

export default function Education() {
  return (
    <SectionWrapper id="education" label="05 - Academic Foundation" title="Education">
      <div className="grid gap-4 md:grid-cols-2">
        <article className="glass-card glow-border p-6">
          <GraduationCap className="mb-4 text-primary" size={30} />
          <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-tight tracking-normal text-foreground">{education.degree}</h3>
          <p className="mt-3 text-muted-foreground">{education.institution}</p>
          <p className="mt-1 text-sm text-muted-foreground">{education.period}</p>
          <span className="mt-4 inline-flex rounded-[20px] border border-primary bg-primary px-3 py-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-primary-foreground">
            {education.cgpa}
          </span>
        </article>

        <article className="glass-card glow-border relative overflow-hidden p-6">
          <Award className="mb-4 text-accent" size={30} />
          <h3 className="font-[family-name:var(--font-body)] text-2xl font-semibold leading-tight tracking-normal text-foreground">{certification.title}</h3>
          <p className="mt-3 text-muted-foreground">{certification.subtitle}</p>
          <span className="mt-4 inline-flex rounded-[20px] border border-accent bg-accent px-3 py-1 font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-accent-foreground">
            {certification.issuer}
          </span>
        </article>
      </div>
    </SectionWrapper>
  );
}
