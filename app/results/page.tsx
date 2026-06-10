"use client";
import { useEffect, useState } from "react";
import Link from "next/link";
import AnalysisResult from "../types/analysis";
import Toast from "../components/Toast";


export default function ResultsPage() {
  const [analysis, setAnalysis] = useState<AnalysisResult | null>(null);
  const [toast, setToast] = useState<string | null>(null);

  useEffect(() => {
    const stored = localStorage.getItem("analysis");

    if (stored) {
      setAnalysis(JSON.parse(stored));
    }
  }, []);

  const handleCopyEmail = () => {
    if (analysis?.email) {
      const formattedEmail = `
      Subject: ${analysis.email.subject}

      ${analysis.email.body}
      `.trim();
      navigator.clipboard.writeText(formattedEmail);
      setToast("Email copied to clipboard!");

      setTimeout(() => {
        setToast(null);
      }, 3000);
    }
  }
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold">Meeting Analysis</h1>

        <p className="mb-8 text-slate-400">
          AI-generated insights from the meeting transcript.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Summary */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm md:col-span-2">
            <h2 className="mb-3 text-xl font-semibold">Summary</h2>
            <p className="text-slate-400">{analysis?.summary}</p>
          </section>

          {/* Decisions */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Decisions</h2>

            <ul className="space-y-2">
              {analysis?.decisions.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </section>

          {/* Actions */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Action Items</h2>

            <ul className="space-y-2">
              {analysis?.actions.map((item, index) => (
                <li key={index}>📌 {item}</li>
              ))}
            </ul>
          </section>

          {/* Risks */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-4 text-xl font-semibold">
              Risks
            </h2>

            <div className="space-y-4">
              {analysis?.risks?.map((risk, index) => (
                <div
                  key={index}
                  className="rounded-xl border border-amber-500/20 bg-slate-950 p-4"
                >
                  <div className="flex items-start gap-2">
                    <span className="text-lg">⚠️</span>

                    <div className="flex-1">
                      <p className="font-medium text-amber-300">
                        {risk.risk}
                      </p>

                      <div className="mt-3 space-y-2 text-sm">
                        <div>
                          <span className="text-slate-500">
                            Source:
                          </span>{" "}
                          <span className="text-sky-400">
                            {risk.source}
                          </span>
                        </div>

                        <div>
                          <span className="text-slate-500">
                            Reason:
                          </span>{" "}
                          <span className="text-slate-300">
                            {risk.reason}
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Dependencies */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">Dependencies</h2>

            <ul className="space-y-2">
              {analysis?.dependencies.map((item, index) => (
                <li key={index}>🔗 {item}</li>
              ))}
            </ul>
          </section>

          {/* Email */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">Follow-up Email</h2>
              <Toast
                message={toast}
                type="success"
                onClose={() => setToast(null)}
              />
              {/* <button
                className="mt-4 px-4 py-2 border border-slate-600 rounded-lg bg-transparent text-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-slate-950 hover:border-white"
                onClick={handleCopyEmail}
              >
                Copy Email
              </button> */}
              <div className="flex gap-3">
                <Link
                  href="/trace"
                  className="
                    rounded-lg
                    border
                    border-slate-600
                    px-4
                    py-2
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-slate-950
                  "
                >
                  View Trace
                </Link>

                <button
                  className="
                    rounded-lg
                    border
                    border-slate-600
                    px-4
                    py-2
                    text-white
                    transition-all
                    duration-300
                    hover:bg-white
                    hover:text-slate-950
                  "
                  onClick={handleCopyEmail}
                >
                  Copy Email
                </button>
              </div>
            </div>

            <pre className="whitespace-pre-wrap rounded-xl border border-slate-700 bg-slate-800 p-4 text-sm text-slate-200">
              {analysis?.email
                ? `Subject: ${analysis.email.subject}\n\n${analysis.email.body}`
                : ""}
            </pre>
          </section>
        </div>
      </div>
    </main>
  );
}