export interface AgentTrace {
  agent: string;
  description: string;
  status: "completed" | "failed";
  duration: string;
}