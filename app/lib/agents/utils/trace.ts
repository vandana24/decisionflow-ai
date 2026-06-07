import { AgentTrace } from "../../../types/trace";

export async function executeAgent<T>(
  name: string,
  description: string,
  fn: () => Promise<T>,
  traces: AgentTrace[]
): Promise<T> {
  const start = Date.now();

  try {
    const result = await fn();

    traces.push({
      agent: name,
      description,
      status: "completed",
      duration: `${Date.now() - start} ms`,
    });

    return result;
  } catch (error) {
    traces.push({
      agent: name,
      description,
      status: "failed",
      duration: `${Date.now() - start} ms`,
    });

    throw error;
  }
}