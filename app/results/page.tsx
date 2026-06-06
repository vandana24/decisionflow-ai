export default function ResultsPage() {
  const result = {
    summary:
      "The team discussed migrating to Azure AI Search, agreed to build a proof of concept, and identified security approval as a prerequisite before production deployment.",

    decisions: [
      "Use Azure AI Search for enterprise search",
      "Complete POC by next Friday",
    ],

    actions: [
      "Priya - Build POC",
      "Vandana - Create architecture document",
      "Rahul - Review migration approach",
    ],

    risks: [
      "Security approval is still pending",
      "POC timeline is aggressive",
    ],

    dependencies: [
      "Architecture review",
      "Security sign-off",
      "Budget approval",
    ],

    email: `Subject: Meeting Follow-up

Hello Team,

Thank you for attending today's meeting.

Key Decisions:
• Use Azure AI Search for enterprise search
• Complete POC by next Friday

Action Items:
• Priya - Build POC
• Vandana - Create architecture document
• Rahul - Review migration approach

Risks:
• Security approval is still pending
• POC timeline is aggressive

Regards,
DecisionFlow AI`,
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mx-auto max-w-6xl">
        <h1 className="mb-2 text-4xl font-bold">
          Meeting Analysis
        </h1>

        <p className="mb-8 text-slate-400">
          AI-generated insights from the meeting transcript.
        </p>

        <div className="grid gap-6 md:grid-cols-2">
          {/* Summary */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm md:col-span-2">
            <h2 className="mb-3 text-xl font-semibold">
              Summary
            </h2>
            <p className="text-slate-400">{result.summary}</p>
          </section>

          {/* Decisions */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Decisions
            </h2>

            <ul className="space-y-2">
              {result.decisions.map((item, index) => (
                <li key={index}>✅ {item}</li>
              ))}
            </ul>
          </section>

          {/* Actions */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Action Items
            </h2>

            <ul className="space-y-2">
              {result.actions.map((item, index) => (
                <li key={index}>📌 {item}</li>
              ))}
            </ul>
          </section>

          {/* Risks */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Risks
            </h2>

            <ul className="space-y-2">
              {result.risks.map((item, index) => (
                <li key={index}>⚠️ {item}</li>
              ))}
            </ul>
          </section>

          {/* Dependencies */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm">
            <h2 className="mb-3 text-xl font-semibold">
              Dependencies
            </h2>

            <ul className="space-y-2">
              {result.dependencies.map((item, index) => (
                <li key={index}>🔗 {item}</li>
              ))}
            </ul>
          </section>

          {/* Email */}
          <section className="rounded-2xl border border-slate-700 bg-slate-900 p-6 shadow-sm md:col-span-2">
            <div className="mb-4 flex items-center justify-between">
              <h2 className="text-xl font-semibold">
                Follow-up Email
              </h2>

            <button className="mt-4 px-4 py-2 border border-slate-600 rounded-lg bg-transparent text-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-slate-950 hover:border-white">
                Copy Email
            </button>
            </div>

            <pre className="whitespace-pre-wrap rounded-lg bg-slate-100 p-4 text-sm">
              {result.email}
            </pre>
          </section>
        </div>
      </div>
    </main>
  );
}