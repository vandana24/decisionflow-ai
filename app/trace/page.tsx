"use client";
import { useEffect, useState } from "react";
import { AgentTrace } from "../types/trace";

export default function TracePage() {
    const [traceSteps, setTraceSteps] = useState<AgentTrace[]>([]);
    useEffect(() => {
        const data = localStorage.getItem("trace");

        if (data) {
          setTraceSteps(JSON.parse(data));
        }
    }, []);
  return (
    <main className="min-h-screen bg-slate-950 text-white p-8">
      <div className="mx-auto max-w-5xl">
        <h1 className="text-5xl font-bold mb-3 bg-gradient-to-r from-sky-400 to-cyan-400 bg-clip-text text-transparent">
          Agent Trace
        </h1>

        <p className="text-slate-400 mb-10">
          Execution flow of the multi-agent reasoning system.
        </p>

        <div className="space-y-6">
          {traceSteps.map((step, index) => (
            <div
              key={step.agent}
              className="relative rounded-2xl border border-slate-700 bg-slate-900 p-6"
            >
              {index !== traceSteps.length - 1 && (
                <div className="absolute left-9 top-16 h-12 w-[2px] bg-slate-700" />
              )}

              <div className="flex items-start gap-4">
                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-sky-500 text-white font-bold">
                  ✓
                </div>

                <div>
                  <h2 className="text-xl font-semibold text-sky-400">
                    {step.agent}
                  </h2>

                  <div className="mt-2">
                    <p className="text-slate-300">
                      {step.description}
                    </p>

                    <div className="mt-3 flex gap-3">
                      <span className="rounded-full bg-emerald-500/20 px-3 py-1 text-xs text-emerald-400">
                        {step.status}
                      </span>

                      <span className="rounded-full bg-sky-500/20 px-3 py-1 text-xs text-sky-400">
                        {step.duration}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </main>
  );
}