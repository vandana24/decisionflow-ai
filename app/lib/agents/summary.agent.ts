import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";

const agentName = getEnv("SUMMARY_AGENT_NAME");
const agentVersion = getEnv("SUMMARY_AGENT_VERSION");

export async function summaryAgent(
  input: string
) {
  return runAgent(
    agentName,
    agentVersion,
    input
  );
}