import { summaryAgent } from "./summary.agent";
import { decisionAgent } from "./decision.agent";
import { actionAgent } from "./action.agent";
import { riskAgent } from "./risk.agent";
import { recommendationAgent } from "./recommendation.agent";
import { dependencyAgent } from "./dependency.agent";
import { emailAgent } from "./email.agent";

import AnalysisResult from "../../types/analysis";
import { AgentTrace } from "../../types/trace";
import { executeAgent } from "./utils/trace";

export async function coordinator(
  transcript: string
): Promise<AnalysisResult> {
  const traces: AgentTrace[] = [];

  const [
    summary,
    decisions,
    actions,
    risks,
    recommendations,
    dependencies,
  ] = await Promise.all([
    executeAgent(
      "Summary Agent",
      "Generates meeting summary",
      () => summaryAgent(transcript),
      traces
    ),

    executeAgent(
      "Decision Agent",
      "Extracts business decisions",
      () => decisionAgent(transcript),
      traces
    ),

    executeAgent(
      "Action Agent",
      "Extracts action items",
      () => actionAgent(transcript),
      traces
    ),

    executeAgent(
      "Risk Agent",
      "Performs grounded risk analysis",
      () => riskAgent(transcript),
      traces
    ),

    executeAgent(
      "Recommendation Agent",
      "Generates grounded recommendations",
      () => recommendationAgent(transcript),
      traces
    ),

    executeAgent(
      "Dependency Agent",
      "Identifies dependencies and approvals",
      () => dependencyAgent(transcript),
      traces
    ),
  ]);

  const email = await executeAgent(
    "Email Agent",
    "Creates stakeholder follow-up email",
    () => emailAgent(transcript),
    traces
  );

  return {
    summary,
    decisions,
    actions,
    risks,
    recommendations,
    dependencies,
    email,
    trace: traces,
  };
}