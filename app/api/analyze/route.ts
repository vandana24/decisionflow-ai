import { NextResponse } from "next/server";
import { coordinator } from "../../lib/agents/coordinator";

export async function POST(req: Request) {
  const { input } = await req.json();

  if (!input) {
    return NextResponse.json(
      { error: "Transcript is required" },
      { status: 400 }
    );
  }

  const result = await coordinator(input);

  return NextResponse.json({ result });
}