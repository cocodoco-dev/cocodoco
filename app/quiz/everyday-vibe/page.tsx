"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

type ResultKey = "cozy" | "sprinter" | "collector" | "floater";

const questions = [
  {
    question: "What do you usually do on weekends?",
    options: [
      { text: "Stay home and relax", score: { cozy: 2, floater: 1 } },
      { text: "Meet friends", score: { sprinter: 2, collector: 1 } },
      { text: "Explore something new", score: { collector: 2, sprinter: 1 } },
      { text: "Just go with the flow", score: { floater: 2, cozy: 1 } },
    ],
  },
  {
    question: "Pick a drink",
    options: [
      { text: "Coffee", score: { cozy: 1, collector: 1 } },
      { text: "Beer", score: { sprinter: 1, floater: 1 } },
      { text: "Energy drink", score: { sprinter: 2 } },
      { text: "Water", score: { floater: 2 } },
    ],
  },
  {
    question: "Your ideal place?",
    options: [
      { text: "Home", score: { cozy: 2 } },
      { text: "City", score: { sprinter: 2 } },
      { text: "Nature", score: { floater: 2 } },
      { text: "Anywhere", score: { collector: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "cozy";
  let bestVal = -Infinity;
  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });
  return best;
}

export default function QuizPage() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    cozy: 0,
    sprinter: 0,
    collector: 0,
    floater: 0,
  });

  function choose(optionScore: Partial<Record<ResultKey, number>>) {
    const nextScores = { ...scores };
    (Object.keys(optionScore) as ResultKey[]).forEach((k) => {
      nextScores[k] += optionScore[k] || 0;
    });
    setScores(nextScores);

    if (current < questions.length - 1) {
      setCurrent(current + 1);
    } else {
      const top = pickTop(nextScores);
      router.push(`/result/everyday-vibe?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "36px", marginBottom: "18px" }}>
        Everyday Vibe Test
      </h1>

      <p style={{ marginBottom: "18px" }}>
        Question {current + 1} / {questions.length}
      </p>

      <h2 style={{ marginBottom: "22px", maxWidth: "720px" }}>{q.question}</h2>

      <div style={{ display: "flex", flexDirection: "column", gap: "12px" }}>
        {q.options.map((opt, idx) => (
          <button
            key={idx}
            onClick={() => choose(opt.score)}
            style={{
              padding: "12px 26px",
              borderRadius: "10px",
              border: "none",
              background: "#ff8fab",
              color: "white",
              cursor: "pointer",
              fontSize: "16px",
              minWidth: "280px",
            }}
          >
            {opt.text}
          </button>
        ))}
      </div>
    </main>
  );
}