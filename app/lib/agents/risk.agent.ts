import { openAIClient, MODEL} from "../foundry/client";
import { riskPrompt } from "../prompts/risk.prompt";

export async function riskAgent(input: string) {
  const res = await openAIClient.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: riskPrompt },
      { role: "user", content: input },
    ],
  });

  return JSON.parse(res.choices[0].message.content || "[]");
}