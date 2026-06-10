import { runAgent } from "../foundry/runagent";
import { getEnv } from "../utils";
import { parseJsonResponse } from "./utils/parseJsonResponse";

const agentName = getEnv("ACTION_AGENT_NAME");
const agentVersion = getEnv("ACTION_AGENT_VERSION");

export async function actionAgent(
  input: string
): Promise<string[]> {
  try {
    const response = await runAgent(
      agentName,
      agentVersion,
      input
    );

    if (!response?.trim()) {
      console.warn(
        `[Action Agent] Empty response`
      );
      return [];
    }

    return parseJsonResponse<string[]>(response);
  } catch (error: any) {
    console.error(
      `[Action Agent] Failed`,
      error
    );

    if (
      error?.message?.includes("not found") ||
      error?.status === 404
    ) {
      console.error(
        `[Action Agent] Agent '${agentName}' v${agentVersion} does not exist`
      );
    }

    return [];
  }
}