import { AIProjectClient } from "@azure/ai-projects";
import { DefaultAzureCredential } from "@azure/identity";
import { getEnv } from "../utils";

const endpoint = getEnv("AZURE_OPENAI_ENDPOINT");
const deployment = getEnv("AZURE_OPENAI_DEPLOYMENT");


// Singleton client
export const projectClient = new AIProjectClient(
  endpoint,
  new DefaultAzureCredential()
);

// OpenAI compatible client used by agents
export const openAIClient = projectClient.getOpenAIClient();
export const MODEL = deployment;