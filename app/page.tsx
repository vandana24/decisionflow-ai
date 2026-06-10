"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import AnalysisResult from "./types/analysis";
import Toast from "./components/Toast";
import Loader from "./components/Loader";


export default function Home() {
  const [transcript, setTranscript] = useState("");
  const [summary, setSummary] = useState<AnalysisResult | {}>({});
  const [toast, setToast] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);

  const router = useRouter();

  const handleSubmission = async () => {
    if (!transcript.trim()) {
      setToast("Please enter a transcript before analyzing.");

      setTimeout(() => {
        setToast(null);
      }, 3000);

      return;
    }

    try {
      setLoading(true);

      const response = await fetch("/api/analyze", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          input: transcript,
        }),
      });

      if (!response.ok) {
        throw new Error("Analysis failed");
      }

      const data = await response.json();

      setSummary(data.result);

      localStorage.setItem(
        "analysis",
        JSON.stringify(data.result)
      );

      localStorage.setItem(
        "trace",
        JSON.stringify(data.result.trace)
      );

      if (data.result?.actions?.length > 0) {
        router.push("/results");
      } else {
        setToast("No analysis generated.");
      }
    } catch (error) {
      console.error(error);
      setToast("Analysis failed");
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-slate-950 text-slate-100 p-8">
      <div className="mx-auto max-w-5xl">
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
          className="
            w-full
            min-h-[400px]
            rounded-2xl
            border
            border-slate-700
            bg-slate-900
            p-5
            text-slate-100
            placeholder:text-slate-500
            focus:outline-none
            focus:ring-2
            focus:ring-slate-500
          "
          placeholder="Paste meeting transcript here..."
          value={transcript}
          onChange={(e) => setTranscript(e.target.value)}
        />

        {loading ? (
          <Loader />
        ) : (
          <button
            onClick={handleSubmission}
            className="
              mt-4
              px-4
              py-2
              border
              border-slate-600
              rounded-lg
              bg-transparent
              text-white
              transition-all
              duration-300
              cursor-pointer
              hover:bg-white
              hover:text-slate-950
              hover:border-white
            "
          >
            Analyze Meeting
          </button>
        )}
      </div>
    </main>
  );
}