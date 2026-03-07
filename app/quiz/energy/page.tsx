"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "golden_energy"
  | "calm_energy"
  | "mysterious_energy"
  | "creative_energy"
  | "bold_energy"
  | "soft_energy";

const questions = [
  {
    q: "When you walk into a room, people usually…",
    opts: [
      {
        t: "Feel the mood get lighter",
        s: { golden_energy: 2, soft_energy: 1 },
      },
      {
        t: "Notice your calm presence",
        s: { calm_energy: 2, soft_energy: 1 },
      },
      {
        t: "Wonder what you're really thinking",
        s: { mysterious_energy: 2, creative_energy: 1 },
      },
      {
        t: "Notice your strong presence immediately",
        s: { bold_energy: 2, golden_energy: 1 },
      },
    ],
  },
  {
    q: "Your vibe is usually closest to…",
    opts: [
      {
        t: "Warm sunshine",
        s: { golden_energy: 2, soft_energy: 1 },
      },
      {
        t: "Quiet air",
        s: { calm_energy: 2 },
      },
      {
        t: "Midnight moonlight",
        s: { mysterious_energy: 2 },
      },
      {
        t: "A spark of color",
        s: { creative_energy: 2, bold_energy: 1 },
      },
    ],
  },
  {
    q: "People tend to come to you when they need…",
    opts: [
      {
        t: "Encouragement",
        s: { golden_energy: 2 },
      },
      {
        t: "Peace",
        s: { calm_energy: 2, soft_energy: 1 },
      },
      {
        t: "Insight",
        s: { mysterious_energy: 2, calm_energy: 1 },
      },
      {
        t: "Inspiration",
        s: { creative_energy: 2, bold_energy: 1 },
      },
    ],
  },
  {
    q: "Your style usually feels…",
    opts: [
      {
        t: "Bright and friendly",
        s: { golden_energy: 2, soft_energy: 1 },
      },
      {
        t: "Simple and grounded",
        s: { calm_energy: 2 },
      },
      {
        t: "Unique and hard to read",
        s: { mysterious_energy: 2, creative_energy: 1 },
      },
      {
        t: "Expressive and original",
        s: { creative_energy: 2, bold_energy: 1 },
      },
    ],
  },
  {
    q: "When talking to others, you naturally…",
    opts: [
      {
        t: "Make them feel included",
        s: { golden_energy: 2, soft_energy: 1 },
      },
      {
        t: "Make them feel comfortable",
        s: { calm_energy: 2, soft_energy: 1 },
      },
      {
        t: "Make them curious",
        s: { mysterious_energy: 2 },
      },
      {
        t: "Make them feel energized",
        s: { bold_energy: 2, creative_energy: 1 },
      },
    ],
  },
  {
    q: "Your biggest hidden strength is…",
    opts: [
      {
        t: "Positivity",
        s: { golden_energy: 2 },
      },
      {
        t: "Stability",
        s: { calm_energy: 2, soft_energy: 1 },
      },
      {
        t: "Depth",
        s: { mysterious_energy: 2 },
      },
      {
        t: "Imagination",
        s: { creative_energy: 2, bold_energy: 1 },
      },
    ],
  },
  {
    q: "If your energy were a place, it would be…",
    opts: [
      {
        t: "A sunny café",
        s: { golden_energy: 2 },
      },
      {
        t: "A quiet garden",
        s: { calm_energy: 2, soft_energy: 1 },
      },
      {
        t: "A moonlit street",
        s: { mysterious_energy: 2 },
      },
      {
        t: "An artist's room",
        s: { creative_energy: 2, bold_energy: 1 },
      },
    ],
  },
  {
    q: "People remember you most for being…",
    opts: [
      {
        t: "Warm",
        s: { golden_energy: 2, soft_energy: 1 },
      },
      {
        t: "Calm",
        s: { calm_energy: 2 },
      },
      {
        t: "Intriguing",
        s: { mysterious_energy: 2 },
      },
      {
        t: "Different",
        s: { creative_energy: 2, bold_energy: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "golden_energy";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function EnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    golden_energy: 0,
    calm_energy: 0,
    mysterious_energy: 0,
    creative_energy: 0,
    bold_energy: 0,
    soft_energy: 0,
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
      router.push(`/result/energy?type=${top}`);
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
        <h1 style={{ fontSize: "40px", marginBottom: "10px" }}>
          What Energy Do You Give Off? ✨
        </h1>

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

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
            }}
          >
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