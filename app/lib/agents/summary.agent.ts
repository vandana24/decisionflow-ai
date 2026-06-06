import { openAIClient, MODEL} from "../foundry/client";
import { summaryPrompt } from "../prompts/summary.prompt";

export async function summaryAgent(input: string) {
  const res = await openAIClient.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: summaryPrompt },
      { role: "user", content: input },
    ],
  });

  return res.choices[0].message.content ?? "";
}