import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";
import { parseJsonResponse } from "./utils/parseJsonResponse";

const agentName = getEnv("DEPENDENCY_AGENT_NAME");
const agentVersion = getEnv("DEPENDENCY_AGENT_VERSION");

export async function dependencyAgent(
  input: string
) {
  const response = await runAgent(
    agentName,
    agentVersion,
    input
  );
  return parseJsonResponse<string[]>(response);
}