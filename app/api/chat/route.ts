import { personal, experience, skillGroups, education, achievements } from "@/lib/data";
import { createUIMessageStreamResponse } from "ai";

// Allow streaming responses up to 30 seconds
export const maxDuration = 30;

export async function POST(req: Request) {
  const { messages } = await req.json();

  const systemPrompt = `
You are the AI assistant for Prateek Kumar Panda's personal portfolio website.
Your objective is to answer visitor questions about Prateek's experience, skills, projects, and education.

You must ALWAYS adhere to the following rules:
1. ONLY answer questions related to Prateek's professional background, skills, projects, or education based on the context below.
2. If the user asks a question that is NOT related to Prateek or his professional background, politely decline and steer the conversation back to his portfolio.
3. Be professional, concise, and friendly. Do not hallucinate information not provided in the context.
4. You are an assistant representing Prateek, not Prateek himself. Use third-person pronouns ("Prateek", "he", "his").

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

  let conversationHistory = "";
  for (const msg of messages) {
    const role = msg.role === "user" ? "user" : "assistant";
    const content = msg.content || msg.text || (msg.parts ? msg.parts.map((p: any) => p.text).join("") : "");
    if (content) {
      conversationHistory += `<|start_header_id|>${role}<|end_header_id|>\n${content}\n<|eot_id|>\n`;
    }
  }

  const fullPrompt = `<|begin_of_text|><|start_header_id|>system<|end_header_id|>\n${systemPrompt}\n<|eot_id|>\n${conversationHistory}<|start_header_id|>assistant<|end_header_id|>\n`;

  try {
    const response = await fetch("https://endeared-smog-habitant.ngrok-free.dev/api/generate", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        model: "llama3.2:1b",
        prompt: fullPrompt,
        stream: true,
      }),
    });

    if (!response.body) {
      throw new Error("No response body from ngrok LLM");
    }

    const stream = new ReadableStream({
      async start(controller) {
        const reader = response.body!.getReader();
        const decoder = new TextDecoder();
        let buffer = '';
        try {
          while (true) {
            const { done, value } = await reader.read();
            if (done) break;

            buffer += decoder.decode(value, { stream: true });
            const lines = buffer.split('\n');
            buffer = lines.pop() || ''; // Keep the last incomplete line in the buffer

            for (const line of lines) {
              if (line.trim() === '') continue;
              try {
                const data = JSON.parse(line);
                if (data.response) {
                  controller.enqueue({ type: 'text-delta', textDelta: data.response });
                }
              } catch (e) {
                // Ignore parse error on individual chunk and continue
              }
            }
          }
        } catch (err) {
          controller.error(err);
        } finally {
          controller.close();
        }
      },
    });

    return createUIMessageStreamResponse({ stream });
  } catch (error) {
    console.error("Chat API Error:", error);
    return new Response(JSON.stringify({ error: "Failed to generate response" }), { status: 500 });
  }
}
