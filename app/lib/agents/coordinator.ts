import { summaryAgent } from "./summary.agent";
import { decisionAgent } from "./decision.agent";
import { actionAgent } from "./action.agent";
import { riskAgent } from "./risk.agent";
import { recommendationAgent } from "./recommendation.agent";
import { emailAgent } from "./email.agent";
import { dependencyAgent } from "./dependency.agent";
import  AnalysisResult  from "../../types/analysis";

export async function coordinator(input: string): Promise<AnalysisResult> {
  const [
    summary,
    decisions,
    actions,
    risks,
    recommendations,
    dependencies,
  ] = await Promise.all([
    summaryAgent(input),
    decisionAgent(input),
    actionAgent(input),
    riskAgent(input),
    recommendationAgent(input),
    dependencyAgent(input),
  ]);

  const email = await emailAgent({
    summary,
    decisions,
    actions,
    risks,
  });

  return {
    summary,
    decisions,
    actions,
    risks,
    dependencies,
    recommendations,
    email,
  };
}