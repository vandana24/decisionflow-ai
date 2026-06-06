"use client";
import { useEffect, useState } from "react";
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
            <h2 className="mb-3 text-xl font-semibold">Risks</h2>

            <ul className="space-y-2">
              {analysis?.risks.map((item, index) => (
                <li key={index}>⚠️ {item}</li>
              ))}
            </ul>
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
              <button
                className="mt-4 px-4 py-2 border border-slate-600 rounded-lg bg-transparent text-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-slate-950 hover:border-white"
                onClick={handleCopyEmail}
              >
                Copy Email
              </button>
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