export default function TerminalWindow() {
  return (
    <div className="glass-card relative w-full overflow-hidden rounded-[24px] scanline">
      <div className="flex items-center gap-2 border-b border-border px-4 py-3">
        <span className="h-3 w-3 rounded-full bg-[#ff5f57]" />
        <span className="h-3 w-3 rounded-full bg-[#febc2e]" />
        <span className="h-3 w-3 rounded-full bg-[#28c840]" />
        <span className="ml-3 text-xs font-[family-name:var(--font-mono)] uppercase tracking-[0.12em] text-muted-foreground">
          agent_pipeline.py
        </span>
      </div>

      <div className="space-y-1 overflow-x-auto p-4 font-[family-name:var(--font-mono)] text-xs sm:p-5 md:text-sm">
        <p>
          <span className="text-primary">from</span>{" "}
          <span className="text-foreground">crewai</span>{" "}
          <span className="text-primary">import</span>{" "}
          <span className="text-foreground">Agent, Task, Crew, Process</span>
        </p>
        <p className="text-muted-foreground">{"// ... truncated imports"}</p>
        <p>
          <span className="text-foreground">llm</span> ={" "}
          <span className="text-foreground">Bedrock</span>(
        </p>
        <p className="pl-4">
          <span className="text-foreground">model</span>=
          <span className="text-amber-300">&quot;claude-sonnet-3-5&quot;</span>,
        </p>
        <p className="pl-4">
          <span className="text-foreground">region</span>=
          <span className="text-amber-300">&quot;us-east-1&quot;</span>
        </p>
        <p>)</p>
        <p className="text-muted-foreground">{"// ... agent declarations"}</p>
        <p>
          <span className="text-foreground">&gt; Initializing pipeline...</span>
          <span className="ml-1 inline-block animate-pulse text-primary">▌</span>
        </p>
      </div>
    </div>
  );
}
