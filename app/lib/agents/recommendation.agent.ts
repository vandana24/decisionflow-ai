import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";
import { parseJsonResponse } from "./utils/parseJsonResponse";

const agentName = getEnv("RECOMMENDATION_AGENT_NAME");
const agentVersion = getEnv("RECOMMENDATION_AGENT_VERSION");

export async function recommendationAgent(
  input: string
) {
  const response = await runAgent(
    agentName,
    agentVersion,
    input
  );
  return parseJsonResponse<string[]>(response);
}