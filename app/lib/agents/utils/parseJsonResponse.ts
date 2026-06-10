export function parseJsonResponse<T>(text: string): T {
  const cleaned = text
    .replace(/```json/g, "")
    .replace(/```/g, "")
    .trim();

  if (!cleaned) {
    return [] as T;
  }

  try {
    return JSON.parse(cleaned) as T;
  } catch (err) {
    console.error("Failed JSON parse");
    console.error(cleaned);

    return [] as T;
  }
}