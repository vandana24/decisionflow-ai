import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";
import { parseJsonResponse } from "./utils/parseJsonResponse";

const agentName = getEnv("EMAIL_AGENT_NAME");
const agentVersion = getEnv("EMAIL_AGENT_VERSION");

export async function emailAgent(
  input: string
) {
  const response = await runAgent(
    agentName,
    agentVersion,
    input
  );
  return parseJsonResponse<{
    subject: string;
    body: string;
  }>(response);
}