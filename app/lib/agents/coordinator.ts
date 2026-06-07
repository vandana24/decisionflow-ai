import { summaryAgent } from "./summary.agent";
import { decisionAgent } from "./decision.agent";
import { actionAgent } from "./action.agent";
import { riskAgent } from "./risk.agent";
import { recommendationAgent } from "./recommendation.agent";
import { emailAgent } from "./email.agent";
import { dependencyAgent } from "./dependency.agent";
import  AnalysisResult  from "../../types/analysis";
import { AgentTrace } from "../../types/trace";
import { executeAgent } from "./utils/trace";

export async function coordinator(
  input: string
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
      "Creates executive summary",
      () => summaryAgent(input),
      traces
    ),

    executeAgent(
      "Decision Agent",
      "Extracts business decisions",
      () => decisionAgent(input),
      traces
    ),

    executeAgent(
      "Action Agent",
      "Extracts action items",
      () => actionAgent(input),
      traces
    ),

    executeAgent(
      "Risk Agent",
      "Identifies risks and blockers",
      () => riskAgent(input),
      traces
    ),

    executeAgent(
      "Recommendation Agent",
      "Generates business recommendations",
      () => recommendationAgent(input),
      traces
    ),

    executeAgent(
      "Dependency Agent",
      "Identifies project dependencies",
      () => dependencyAgent(input),
      traces
    ),
  ]);

  const email = await executeAgent(
    "Email Agent",
    "Creates follow-up email",
    () =>
      emailAgent({
        summary,
        decisions,
        actions,
        risks,
      }),
    traces
  );

  return {
    summary,
    decisions,
    actions,
    risks,
    dependencies,
    recommendations,
    email,
    trace: traces,
  };
}