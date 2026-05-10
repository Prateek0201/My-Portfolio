import { Code2, Link2, Mail } from "lucide-react";
import { personal } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-border py-8">
      <div className="flex w-full flex-col items-center gap-4 px-4 sm:px-6 md:px-10 lg:px-16 xl:px-24">
        <p className="text-center font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-muted-foreground">
          Designed & Built by Prateek Kumar Panda - 2026
        </p>
        <div className="flex items-center gap-3 text-muted-foreground">
          <a href={personal.github || "#"} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-link-hover"><Code2 size={18} /></a>
          <a href={personal.linkedin || "#"} target="_blank" rel="noreferrer" className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-link-hover"><Link2 size={18} /></a>
          <a href={`mailto:${personal.email}`} className="grid h-10 w-10 place-items-center rounded-full border border-border transition-colors hover:border-primary hover:text-link-hover"><Mail size={18} /></a>
        </div>
      </div>
    </footer>
  );
}
