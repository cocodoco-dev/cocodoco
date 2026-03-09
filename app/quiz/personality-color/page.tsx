"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "red_core"
  | "blue_core"
  | "yellow_core"
  | "green_core"
  | "purple_core"
  | "pink_core";

const questions = [
  {
    q: "What kind of energy feels most natural to you?",
    opts: [
      { t: "Bold, intense, and action-driven", s: { red_core: 2, yellow_core: 1 } },
      { t: "Calm, thoughtful, and steady", s: { blue_core: 2, green_core: 1 } },
      { t: "Bright, playful, and expressive", s: { yellow_core: 2, pink_core: 1 } },
      { t: "Gentle, caring, and emotionally aware", s: { pink_core: 2, green_core: 1 } },
    ],
  },
  {
    q: "What do people often feel around you?",
    opts: [
      { t: "Motivated and energized", s: { red_core: 2 } },
      { t: "Safe and understood", s: { blue_core: 2, green_core: 1 } },
      { t: "Lighter and more alive", s: { yellow_core: 2, pink_core: 1 } },
      { t: "Curious because there is depth to you", s: { purple_core: 2, blue_core: 1 } },
    ],
  },
  {
    q: "When life gets messy, your natural response is to…",
    opts: [
      { t: "Push through and take control", s: { red_core: 2 } },
      { t: "Slow down and think clearly", s: { blue_core: 2, purple_core: 1 } },
      { t: "Keep your spirit up and move forward", s: { yellow_core: 2 } },
      { t: "Protect your peace and emotional balance", s: { green_core: 2, pink_core: 1 } },
    ],
  },
  {
    q: "Which quality matters most to you?",
    opts: [
      { t: "Strength", s: { red_core: 2 } },
      { t: "Truth", s: { blue_core: 2, purple_core: 1 } },
      { t: "Joy", s: { yellow_core: 2 } },
      { t: "Kindness", s: { pink_core: 2, green_core: 1 } },
    ],
  },
  {
    q: "What is your emotional style most like?",
    opts: [
      { t: "Passionate and direct", s: { red_core: 2 } },
      { t: "Deep and reflective", s: { purple_core: 2, blue_core: 1 } },
      { t: "Warm and uplifting", s: { yellow_core: 2, pink_core: 1 } },
      { t: "Soft and grounding", s: { green_core: 2, pink_core: 1 } },
    ],
  },
  {
    q: "What kind of role do you naturally play in people’s lives?",
    opts: [
      { t: "The one who pushes them forward", s: { red_core: 2 } },
      { t: "The one who understands quietly", s: { blue_core: 2, purple_core: 1 } },
      { t: "The one who brightens the atmosphere", s: { yellow_core: 2 } },
      { t: "The one who comforts and steadies", s: { green_core: 2, pink_core: 1 } },
    ],
  },
  {
    q: "What kind of beauty feels closest to your personality?",
    opts: [
      { t: "Something strong and unforgettable", s: { red_core: 2 } },
      { t: "Something clean, calm, and deep", s: { blue_core: 2, purple_core: 1 } },
      { t: "Something bright and full of life", s: { yellow_core: 2 } },
      { t: "Something soft, warm, and healing", s: { pink_core: 2, green_core: 1 } },
    ],
  },
  {
    q: "Deep down, your core personality color feels most like…",
    opts: [
      { t: "A flame that refuses to shrink", s: { red_core: 2 } },
      { t: "An ocean with quiet depth", s: { blue_core: 2, purple_core: 1 } },
      { t: "Sunlight that reaches people easily", s: { yellow_core: 2 } },
      { t: "A soft garden where people can breathe", s: { green_core: 2, pink_core: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "red_core";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function PersonalityColorQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    red_core: 0,
    blue_core: 0,
    yellow_core: 0,
    green_core: 0,
    purple_core: 0,
    pink_core: 0,
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
      router.push(`/result/personality-color?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "36px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(720px, 100%)", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          What Is Your Core Personality Color? 🎨
        </h1>

        <p
          style={{
            marginBottom: "20px",
            color: "#374151",
            fontSize: "17px",
            fontWeight: 600,
          }}
        >
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
          <h2
            style={{
              marginBottom: "18px",
              color: "#374151",
              fontSize: "22px",
              lineHeight: 1.4,
              fontWeight: 700,
            }}
          >
            {q.q}
          </h2>

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