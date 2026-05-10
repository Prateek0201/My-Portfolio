import { google } from "@ai-sdk/google";
import { streamText } from "ai";
import { personal, experience, skillGroups, education, achievements } from "@/lib/data";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  // Robustly format messages to bypass strict Zod validation from the AI SDK backend
  const formattedMessages = messages.map((m: any) => ({
    role: m.role || "user",
    content: m.content || m.text || (m.parts ? m.parts.map((p: any) => p.text).join("") : "")
  }));

  const systemPrompt = `
You are the AI assistant for Prateek Kumar Panda's personal portfolio website.
Your objective is to answer visitor questions about Prateek's experience, skills, projects, and education.

You must ALWAYS adhere to the following rules:
1. ONLY answer questions related to Prateek's professional background, skills, projects, or education based on the context below.
2. If the user asks a question that is NOT related to Prateek or his professional background (e.g., general coding questions, weather, politics, math, writing essays unrelated to Prateek), politely decline and steer the conversation back to his portfolio. Say something like: "I am specifically designed to answer questions about Prateek's professional background. Feel free to ask me about his experience with ML/AI, his projects, or his skills!"
3. Be professional, concise, and friendly. Do not hallucinate information not provided in the context.
4. You are an assistant representing Prateek, not Prateek himself. Use third-person pronouns ("Prateek", "he", "his") when referring to him, or say "I can help you learn more about Prateek".

--- CONTEXT ABOUT PRATEEK KUMAR PANDA ---
Name: ${personal.name}
Title: ${personal.title}
Location: ${personal.location}
Summary: ${personal.summary}

Education:
Degree: ${education.degree}
Institution: ${education.institution} (${education.period})
CGPA: ${education.cgpa}

Experience:
${experience.map((exp) => `
Company: ${exp.company} (${exp.period})
Projects:
${exp.projects.map((p) => `- ${p.title}: ${p.bullets.join(" ")}`).join("\n")}
`).join("\n")}

Skills:
${skillGroups.map((g) => `${g.category}: ${g.skills.join(", ")}`).join("\n")}

Achievements:
${achievements.map((a) => `- ${a.title}: ${a.description}`).join("\n")}
--- END CONTEXT ---
`;

  try {
    const result = streamText({
      model: google("gemini-2.5-flash"), // using flash for fast chat responses
      system: systemPrompt,
      messages: formattedMessages,
      temperature: 0.3, // keep responses grounded
    });

    return result.toUIMessageStreamResponse();
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), { status: 500 });
  }
}
