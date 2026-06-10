import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";
import { parseJsonResponse } from "./utils/parseJsonResponse";

const agentName = getEnv("DECISION_AGENT_NAME");
const agentVersion = getEnv("DECISION_AGENT_VERSION");

export async function decisionAgent(
  input: string
) {
  const response = await runAgent(
    agentName,
    agentVersion,
    input
  );
  return parseJsonResponse<string[]>(response);
}