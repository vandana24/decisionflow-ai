import { NextResponse } from "next/server";
import { runAgent } from "../../services/openai";

export async function POST(req: Request) {
  const body = await req.json();

  const userInput = body.input;

  if (!userInput) {
    return NextResponse.json(
      { error: "input is required" },
      { status: 400 }
    );
  }

  const result = await runAgent(userInput);

  return NextResponse.json({ result });
}