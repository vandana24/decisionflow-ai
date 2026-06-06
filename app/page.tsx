export default function Home() {
  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <h1 className="mb-2 text-4xl font-bold">
        DecisionFlow AI
      </h1>

      <p className="mb-8 text-slate-400">
        Transform meetings into decisions, actions, and accountability.
      </p>

      <textarea
        className="w-full h-64 border rounded-lg p-4 mt-8"
        placeholder="Paste meeting transcript here..."
      />

      <button className="mt-4 px-4 py-2 border border-slate-600 rounded-lg bg-transparent text-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-slate-950 hover:border-white">
        Analyze Meeting
      </button>
    </main>
  );
}