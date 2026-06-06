import { openAIClient, MODEL} from "../foundry/client";
import { recommendationPrompt } from "../prompts/recommendation.prompt";

export async function recommendationAgent(input: string) {
  const res = await openAIClient.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: recommendationPrompt },
      { role: "user", content: input },
    ],
  });

  return JSON.parse(res.choices[0].message.content || "[]");
}