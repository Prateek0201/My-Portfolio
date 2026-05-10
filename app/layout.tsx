import type { Metadata } from "next";
import { JetBrains_Mono, Outfit } from "next/font/google";
import { Toaster } from "@/components/ui/sonner";
import "./globals.css";

const jetbrainsMono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  weight: ["400", "500", "600"],
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-body",
  weight: ["400", "500", "600"],
  display: "swap",
});

export const metadata: Metadata = {
  title: "Prateek Kumar Panda - Data Scientist & AI/ML Engineer",
  description:
    "Portfolio of Prateek Kumar Panda - Data Scientist specialising in multi-agent LLM systems, RAG pipelines, and large-scale analytics for pharma and QSR industries.",
  keywords: [
    "Data Scientist",
    "AI Engineer",
    "ML Engineer",
    "LangChain",
    "CrewAI",
    "RAG",
    "PySpark",
    "AWS Bedrock",
  ],
  authors: [{ name: "Prateek Kumar Panda" }],
  openGraph: {
    title: "Prateek Kumar Panda - Data Scientist & AI/ML Engineer",
    description:
      "Building production-grade AI systems, RAG pipelines, and revenue intelligence solutions.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`dark ${jetbrainsMono.variable} ${outfit.variable}`}
    >
      <body
        suppressHydrationWarning
        className="overflow-x-hidden bg-background text-foreground antialiased font-[family-name:var(--font-body)]"
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
