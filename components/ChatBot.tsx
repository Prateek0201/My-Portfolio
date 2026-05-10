"use client";

import { useChat } from "@ai-sdk/react";
import { MessageCircle, X, Send, Bot, User, Loader2 } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { Button } from "./ui/button";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

export default function ChatBot() {
  const [isOpen, setIsOpen] = useState(false);
  const [input, setInput] = useState("");
  const { messages, sendMessage, status } = useChat();
  
  const isLoading = status === "submitted" || status === "streaming";
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setInput(e.target.value);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!input.trim() || isLoading) return;
    sendMessage({ text: input });
    setInput("");
  };

  // Auto-scroll to bottom
  useEffect(() => {
    if (messagesEndRef.current) {
      messagesEndRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [messages]);

  return (
    <>
      {/* Chat Button Container */}
      <div 
        className={`fixed bottom-6 right-6 z-50 transition-all duration-300 ${
          isOpen ? "scale-0 opacity-0 pointer-events-none" : "scale-100 opacity-100"
        }`}
      >
        <div className="relative flex items-center justify-end">
          {/* Greeting Popup / Tooltip */}
          <div className="absolute right-full mr-4 animate-bounce">
            <div className="relative rounded-xl border border-border bg-card px-4 py-2 text-sm font-medium text-foreground shadow-xl whitespace-nowrap">
              Ask about me! ✨
              {/* Little triangle pointing right */}
              <div className="absolute -right-1.5 top-1/2 h-3 w-3 -translate-y-1/2 rotate-45 border-r border-t border-border bg-card"></div>
            </div>
          </div>

          <button
            onClick={() => setIsOpen(true)}
            className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg transition-transform hover:scale-110"
            aria-label="Open chat"
          >
            <MessageCircle size={28} />
          </button>
        </div>
      </div>

      {/* Chat Window */}
      <div
        className={`fixed bottom-6 right-6 z-50 flex h-[500px] max-h-[80vh] w-[350px] max-w-[calc(100vw-3rem)] flex-col overflow-hidden rounded-2xl border border-border bg-card shadow-2xl transition-all duration-300 ${
          isOpen
            ? "translate-y-0 scale-100 opacity-100"
            : "pointer-events-none translate-y-4 scale-95 opacity-0"
        }`}
      >
        {/* Header */}
        <div className="flex items-center justify-between border-b border-border bg-background/50 px-4 py-3 backdrop-blur-md">
          <div className="flex items-center gap-2">
            <div className="flex h-8 w-8 items-center justify-center rounded-full bg-primary/20 text-primary">
              <Bot size={18} />
            </div>
            <div>
              <h3 className="font-[family-name:var(--font-mono)] text-sm font-semibold uppercase tracking-wider text-foreground">
                Prateek AI
              </h3>
              <p className="text-[10px] text-muted-foreground">Ask about my portfolio</p>
            </div>
          </div>
          <button
            onClick={() => setIsOpen(false)}
            className="rounded-full p-1.5 text-muted-foreground hover:bg-secondary hover:text-foreground transition-colors"
          >
            <X size={18} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.length === 0 && (
            <div className="flex flex-col items-center justify-center h-full text-center space-y-3 opacity-50">
              <Bot size={32} className="text-primary" />
              <p className="text-sm">Hi! I'm an AI assistant. Ask me anything about Prateek's experience or skills.</p>
            </div>
          )}
          
          {messages.map((m) => (
            <div
              key={m.id}
              className={`flex ${m.role === "user" ? "justify-end" : "justify-start"}`}
            >
              <div
                className={`flex max-w-[85%] items-start gap-2 rounded-2xl px-4 py-2.5 text-sm ${
                  m.role === "user"
                    ? "bg-primary text-primary-foreground rounded-tr-sm"
                    : "bg-secondary text-foreground rounded-tl-sm"
                }`}
              >
                {m.role === "assistant" && (
                  <Bot size={16} className="mt-0.5 shrink-0 opacity-70" />
                )}
                <div className="text-sm">
                  <ReactMarkdown
                    remarkPlugins={[remarkGfm]}
                    components={{
                      p: ({ children }) => <p className="mb-2 last:mb-0">{children}</p>,
                      a: ({ children, href }) => <a href={href} target="_blank" rel="noreferrer" className="text-primary underline underline-offset-2 hover:text-primary/80">{children}</a>,
                      ul: ({ children }) => <ul className="mb-2 list-inside list-disc space-y-1 pl-2">{children}</ul>,
                      ol: ({ children }) => <ol className="mb-2 list-inside list-decimal space-y-1 pl-2">{children}</ol>,
                      li: ({ children }) => <li>{children}</li>,
                      strong: ({ children }) => <strong className="font-semibold text-foreground">{children}</strong>,
                      code: ({ children }) => <code className="rounded bg-background/50 px-1 py-0.5 font-[family-name:var(--font-mono)] text-[0.8em] text-primary">{children}</code>,
                    }}
                  >
                    {(m as any).content || 
                     (m as any).text || 
                     ((m as any).parts ? (m as any).parts.map((p: any) => p.text || '').join('') : '')}
                  </ReactMarkdown>
                </div>
                {m.role === "user" && (
                  <User size={16} className="mt-0.5 shrink-0 opacity-70" />
                )}
              </div>
            </div>
          ))}
          {isLoading && messages[messages.length - 1]?.role === "user" && (
            <div className="flex justify-start">
              <div className="flex items-center gap-2 rounded-2xl rounded-tl-sm bg-secondary px-4 py-2.5 text-sm text-foreground">
                <Loader2 size={16} className="animate-spin text-primary" />
                <span>Thinking...</span>
              </div>
            </div>
          )}
          <div ref={messagesEndRef} />
        </div>

        {/* Input Form */}
        <form
          onSubmit={handleSubmit}
          className="border-t border-border bg-background p-3"
        >
          <div className="relative flex items-center">
            <input
              value={input || ""}
              onChange={handleInputChange}
              placeholder="Ask a question..."
              className="w-full rounded-full border border-border bg-secondary/50 py-2.5 pl-4 pr-12 text-sm text-foreground placeholder:text-muted-foreground focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary transition-all"
            />
            <button
              type="submit"
              disabled={isLoading || !input || !input.trim()}
              className="absolute right-1 flex h-8 w-8 items-center justify-center rounded-full bg-primary text-primary-foreground transition-transform hover:scale-105 disabled:opacity-50 disabled:hover:scale-100"
            >
              <Send size={14} className="-ml-0.5" />
            </button>
          </div>
        </form>
      </div>
    </>
  );
}
