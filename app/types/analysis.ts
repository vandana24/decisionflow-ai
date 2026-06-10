import { AgentTrace } from "./trace";
import { Risk } from "./risk";

export default interface AnalysisResult {
  summary: string;
  decisions: string[];
  actions: string[];
  risks: Risk[];
  dependencies: string[];
  recommendations: string[];
  email: {
    subject: string;
    body: string;
  };
  trace: AgentTrace[];
}