import SectionWrapper from "@/components/SectionWrapper";
import { stats } from "@/lib/data";

const highlighted = [
  "multi-agent LLM",
  "RAG",
  "PySpark",
  "AWS Bedrock",
  "NLP pipelines",
  "production-grade",
];

export default function About() {
  const text =
    "I design production-grade ML systems and AI products across pharma and QSR. My work combines multi-agent LLM orchestration, RAG pipelines, and PySpark-based analytics to solve real business goals. I build with AWS Bedrock and modern NLP pipelines to deliver reliable customer-facing experiences.";

  const rendered = highlighted.reduce(
    (acc, item) =>
      acc.replace(
        item,
        `<mark class='bg-transparent text-primary border-b border-primary'>${item}</mark>`,
      ),
    text,
  );

  return (
    <SectionWrapper id="about" label="01 - Profile" title="About">
      <div className="grid gap-8 lg:grid-cols-[1.2fr_0.8fr]">
        <p
          className="max-w-3xl text-base leading-8 text-muted-foreground sm:text-lg"
          dangerouslySetInnerHTML={{ __html: rendered }}
        />
        <div className="grid grid-cols-2 gap-4">
          {stats.map((stat) => (
            <div key={stat.label} className="glass-card glow-border p-4 sm:p-5">
              <p className="font-[family-name:var(--font-body)] text-3xl font-semibold leading-none tracking-normal text-primary">{stat.value}</p>
              <p className="mt-2 text-xs uppercase tracking-[0.12em] text-muted-foreground sm:text-sm">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
