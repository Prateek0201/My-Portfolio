"use client";

import { Code2, Link2, Mail } from "lucide-react";
import { FormEvent, useState } from "react";
import SectionWrapper from "@/components/SectionWrapper";
import { Button } from "@/components/ui/button";
import { toast } from "sonner";
import { personal } from "@/lib/data";

export default function Contact() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");

  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (event: FormEvent) => {
    event.preventDefault();
    setIsSubmitting(true);

    try {
      const response = await fetch(`https://formsubmit.co/ajax/${personal.email}`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name,
          email,
          message,
          _subject: `New Portfolio Message from ${name}`,
        }),
      });

      if (response.ok) {
        toast.success("Message sent successfully!");
        setName("");
        setEmail("");
        setMessage("");
      } else {
        toast.error("Failed to send message. Please try again later.");
      }
    } catch (error) {
      toast.error("An error occurred. Please try again.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <SectionWrapper id="contact" title="Let's Build Something Intelligent">
      <p className="mb-6 max-w-2xl text-muted-foreground">
        Open to full-time roles, freelance projects, and research collaborations.
      </p>

      <div className="mb-6 grid gap-4 md:grid-cols-3">
        <a className="glass-card group p-4 transition-colors hover:border-primary" href={`mailto:${personal.email}`}>
          <Mail className="mb-3 text-primary" />
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-muted-foreground">Email</p>
          <p className="relative mt-1 break-words text-sm text-foreground transition-colors group-hover:text-link-hover">
            {personal.email}
          </p>
        </a>
        <a className="glass-card group p-4 transition-colors hover:border-primary" href={personal.linkedin || "#"} target="_blank" rel="noreferrer">
          <Link2 className="mb-3 text-primary" />
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-muted-foreground">LinkedIn</p>
          <p className="relative mt-1 text-sm text-foreground transition-colors group-hover:text-link-hover">Connect on LinkedIn</p>
        </a>
        <a className="glass-card group p-4 transition-colors hover:border-primary" href={personal.github || "#"} target="_blank" rel="noreferrer">
          <Code2 className="mb-3 text-primary" />
          <p className="font-[family-name:var(--font-mono)] text-xs uppercase tracking-[0.12em] text-muted-foreground">GitHub</p>
          <p className="relative mt-1 text-sm text-foreground transition-colors group-hover:text-link-hover">View Projects</p>
        </a>
      </div>

      <form onSubmit={handleSubmit} className="glass-card space-y-4 p-4 sm:p-5">
        <input className="w-full rounded-sm border border-border bg-background/70 px-3 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" placeholder="Name" value={name} onChange={(e) => setName(e.target.value)} required />
        <input type="email" className="w-full rounded-sm border border-border bg-background/70 px-3 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <textarea className="w-full rounded-sm border border-border bg-background/70 px-3 py-3 text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary" rows={5} placeholder="Message" value={message} onChange={(e) => setMessage(e.target.value)} required />
        <Button disabled={isSubmitting} type="submit" className="min-h-11 rounded-[24px] bg-primary px-6 font-[family-name:var(--font-mono)] text-xs font-semibold uppercase tracking-[0.15em] text-primary-foreground hover:bg-secondary hover:text-foreground disabled:opacity-50">
          {isSubmitting ? "Sending..." : "Send Message"}
        </Button>
      </form>
    </SectionWrapper>
  );
}
