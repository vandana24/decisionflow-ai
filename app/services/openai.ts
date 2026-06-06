import { DefaultAzureCredential } from "@azure/identity";
import { AIProjectClient } from "@azure/ai-projects";

// ✅ Safe env validation
function getEnv(name: string): string {
  const value = process.env[name];
  if (!value) {
    throw new Error(`Missing environment variable: ${name}`);
  }
  return value;
}

const endpoint: string = getEnv("AZURE_OPENAI_ENDPOINT");
const agentName: string = getEnv("AZURE_OPENAI_DEPLOYMENT");
const agentVersion: string = "1";

// Create AI Project client
const projectClient = new AIProjectClient(
  endpoint,
  new DefaultAzureCredential()
);

export async function runAgent(userInput: string): Promise<string> {
  const openAIClient = projectClient.getOpenAIClient();

  // 1. Create conversation with user input
  const conversation = await openAIClient.conversations.create({
    items: [
      {
        type: "message",
        role: "user",
        content: userInput,
      },
    ],
  });

  // 2. Get agent response
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

  return response.output_text ?? "No response from agent";
}