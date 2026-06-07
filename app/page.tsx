"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AnalysisResult from "./types/analysis";
import Toast from "./components/Toast";

export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState<AnalysisResult | {}>({});
  const [toast, setToast] = useState<string | null>(null);
  const router = useRouter();

  const handleSubmission = () => {
    if (!transcript.trim()) {
      setToast("Please enter a transcript before analyzing.");

      setTimeout(() => {
        setToast(null);
      }, 3000);
      return;
    }

    fetch("/api/analyze", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        input: transcript,
      }),
    })
    .then((res) => res.json())
    .then((data) => {
      setSummary(data.result);
      localStorage.setItem("analysis", JSON.stringify(data.result));
      localStorage.setItem("trace", JSON.stringify(data.result.trace));
      data.result?.actions.length && router.push("/results");
    })
    .catch((err) => {
      console.error(err);
    });
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <h1 className="mb-2 text-4xl font-bold">
        DecisionFlow AI
      </h1>

      <p className="mb-8 text-slate-400">
        Transform meetings into decisions, actions, and accountability.
      </p>
      <Toast
        message={toast}
        type="error"
        onClose={() => setToast(null)}
      />
      <textarea
        className="w-full h-64 border rounded-lg p-4 mt-8"
        placeholder="Paste meeting transcript here..."
        value={transcript}
        onChange={(e) => setTranscript(e.target.value)}
      />

      <button className="mt-4 px-4 py-2 border border-slate-600 rounded-lg bg-transparent text-white transition-all duration-300 cursor-pointer hover:bg-white hover:text-slate-950 hover:border-white"
      onClick={handleSubmission}>
        Analyze Meeting
      </button>
    </main>
  );
}