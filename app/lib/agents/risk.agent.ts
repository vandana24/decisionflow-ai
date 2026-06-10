import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";
import { parseJsonResponse } from "./utils/parseJsonResponse";
import { Risk } from "../../types/risk";

const agentName = getEnv("RISK_AGENT_NAME");
const agentVersion = getEnv("RISK_AGENT_VERSION");

export async function riskAgent(
  input: string
) {
  const response = await runAgent(
    agentName,
    agentVersion,
    input
  );
  return parseJsonResponse<Risk[]>(response);
}