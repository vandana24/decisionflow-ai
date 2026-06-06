import { openAIClient, MODEL} from "../foundry/client";
import { actionPrompt } from "../prompts/action.prompt";

export async function actionAgent(input: string) {
  const res = await openAIClient.chat.completions.create({
    model: MODEL,
    messages: [
      { role: "system", content: actionPrompt },
      { role: "user", content: input },
    ],
  });

  return JSON.parse(res.choices[0].message.content || "[]");
}