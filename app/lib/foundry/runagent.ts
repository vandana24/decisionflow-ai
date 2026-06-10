import { DefaultAzureCredential } from "@azure/identity";
import { AIProjectClient } from "@azure/ai-projects";
import { getEnv } from "../utils";

const endpoint = getEnv("AZURE_OPENAI_ENDPOINT");

// Create AI Project client
const projectClient = new AIProjectClient(endpoint, new DefaultAzureCredential());


export async function runAgent(
  agentName: string,
  agentVersion: string,
  input: string
) {
  const openAIClient = projectClient.getOpenAIClient();

  // Create conversation
  const conversation =
    await openAIClient.conversations.create({
      items: [
        {
          type: "message",
          role: "user",
          content: input,
        },
      ],
    });

  // Run agent
  const response = await openAIClient.responses.create(
      {
        conversation: conversation.id,
      },
      {
        body: {
          agent_reference: {
            name: agentName,
            version: agentVersion,
            type: "agent_reference",
          },
        },
      }
    );

  return response.output_text;
}