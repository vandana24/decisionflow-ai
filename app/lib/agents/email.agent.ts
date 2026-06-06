import { openAIClient, MODEL} from "../foundry/client";
import { emailPrompt } from "../prompts/email.prompt";

export async function emailAgent(input: {
  summary: string;
  decisions: string[];
  actions: string[];
  risks: string[];
}): Promise<{ subject: string; body: string }> {
  const res = await openAIClient.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: emailPrompt },
      {
        role: "user",
        content: JSON.stringify(input),
      },
    ],
  });

  return JSON.parse(res.choices[0].message.content || "[]");
}