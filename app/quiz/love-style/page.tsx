"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "warm_hugger"
  | "charming_tease"
  | "steady_rock"
  | "mystery_cat"
  | "golden_retriever"
  | "independent_star";

const questions = [
  {
    q: "On a date, you usually…",
    opts: [
      { t: "Ask lots of questions and listen deeply", s: { warm_hugger: 2, steady_rock: 1 } },
      { t: "Crack jokes and keep it playful", s: { charming_tease: 2, golden_retriever: 1 } },
      { t: "Plan everything in advance", s: { steady_rock: 2, independent_star: 1 } },
      { t: "Go with the vibe and stay a bit mysterious", s: { mystery_cat: 2, charming_tease: 1 } },
    ],
  },
  {
    q: "Your love language vibe is closest to…",
    opts: [
      { t: "Quality time", s: { warm_hugger: 2, golden_retriever: 1 } },
      { t: "Words of affirmation", s: { charming_tease: 2, warm_hugger: 1 } },
      { t: "Acts of service", s: { steady_rock: 2 } },
      { t: "Space + trust", s: { independent_star: 2, mystery_cat: 1 } },
    ],
  },
  {
    q: "When texting, you’re…",
    opts: [
      { t: "Fast replies, lots of emojis", s: { golden_retriever: 2, warm_hugger: 1 } },
      { t: "Short and witty", s: { charming_tease: 2 } },
      { t: "Consistent, calm, and clear", s: { steady_rock: 2 } },
      { t: "Disappear… then return like nothing happened", s: { mystery_cat: 2, independent_star: 1 } },
    ],
  },
  {
    q: "Conflict style?",
    opts: [
      { t: "Talk it out ASAP", s: { warm_hugger: 2, steady_rock: 1 } },
      { t: "Lighten the mood first, then talk", s: { charming_tease: 2 } },
      { t: "Need time to cool down", s: { independent_star: 2, mystery_cat: 1 } },
      { t: "Avoid drama at all costs", s: { mystery_cat: 2 } },
    ],
  },
  {
    q: "Your ideal weekend with a partner is…",
    opts: [
      { t: "Cozy home date + deep talk", s: { warm_hugger: 2 } },
      { t: "Spontaneous outing + fun photos", s: { golden_retriever: 2, charming_tease: 1 } },
      { t: "A well-planned day, no chaos", s: { steady_rock: 2 } },
      { t: "Separate hobbies, meet later for dinner", s: { independent_star: 2 } },
    ],
  },
  {
    q: "What attracts you most?",
    opts: [
      { t: "Kindness and emotional warmth", s: { warm_hugger: 2 } },
      { t: "Confidence and humor", s: { charming_tease: 2 } },
      { t: "Reliability and maturity", s: { steady_rock: 2 } },
      { t: "Quiet charm and independence", s: { mystery_cat: 2, independent_star: 1 } },
    ],
  },
  {
    q: "When you like someone, you…",
    opts: [
      { t: "Show care in small daily ways", s: { warm_hugger: 2, steady_rock: 1 } },
      { t: "Flirt a lot and test the waters", s: { charming_tease: 2 } },
      { t: "Keep it low-key but loyal", s: { steady_rock: 2 } },
      { t: "Act chill… but secretly think about them", s: { mystery_cat: 2, golden_retriever: 1 } },
    ],
  },
  {
    q: "In relationships, you value…",
    opts: [
      { t: "Emotional safety", s: { warm_hugger: 2, steady_rock: 1 } },
      { t: "Fun & chemistry", s: { charming_tease: 2, golden_retriever: 1 } },
      { t: "Stability & commitment", s: { steady_rock: 2 } },
      { t: "Freedom & individuality", s: { independent_star: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "warm_hugger";
  let bestVal = -999;
  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });
  return best;
}

export default function LoveStyleQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    warm_hugger: 0,
    charming_tease: 0,
    steady_rock: 0,
    mystery_cat: 0,
    golden_retriever: 0,
    independent_star: 0,
  });

  function choose(partial: Partial<Record<ResultKey, number>>) {
    const nextScores = { ...scores };
    (Object.keys(partial) as ResultKey[]).forEach((k) => {
      nextScores[k] += partial[k] || 0;
    });
    setScores(nextScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const top = pickTop(nextScores);
      router.push(`/result/love-style?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "42px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(860px, 100%)", textAlign: "center" }}>
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>Love Style Test 💘</h1>
        <p style={{ marginBottom: "22px", color: "#374151" }}>
          Question {current + 1} / {questions.length}
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            border: "1px solid #f2a7b8",
            borderRadius: "16px",
            padding: "22px",
          }}
        >
          <h2 style={{ marginBottom: "18px" }}>{q.q}</h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
            {q.opts.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => choose(opt.s)}
                style={{
                  padding: "12px 18px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#ff8fab",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                  width: "min(520px, 100%)",
                }}
              >
                {opt.t}
              </button>
            ))}
          </div>
        </div>

        {/* Ad placeholder */}
        <div
          style={{
            marginTop: "18px",
            width: "100%",
            height: "110px",
            borderRadius: "14px",
            border: "1px dashed #f2a7b8",
            background: "rgba(255, 255, 255, 0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: "14px",
          }}
        >
          Ad Space (Google AdSense will go here)
        </div>
      </div>
    </main>
  );
}