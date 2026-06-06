import { openAIClient, MODEL} from "../foundry/client";
import { decisionPrompt } from "../prompts/decision.prompt";

export async function decisionAgent(input: string) {
  const res = await openAIClient.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: decisionPrompt },
      { role: "user", content: input },
    ],
  });

  return JSON.parse(res.choices[0].message.content || "[]");
}