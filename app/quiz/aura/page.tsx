"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "golden_aura"
  | "moon_aura"
  | "rose_aura"
  | "ocean_aura"
  | "fire_aura"
  | "forest_aura";

const questions = [
  {
    q: "What do people usually feel first when they meet you?",
    opts: [
      { t: "Warmth and positivity", s: { golden_aura: 2, rose_aura: 1 } },
      { t: "Calm curiosity", s: { moon_aura: 2, ocean_aura: 1 } },
      { t: "Comfort and emotional safety", s: { rose_aura: 2, forest_aura: 1 } },
      { t: "Intensity and confidence", s: { fire_aura: 2, golden_aura: 1 } },
    ],
  },
  {
    q: "Your presence in a room is usually…",
    opts: [
      { t: "Bright and uplifting", s: { golden_aura: 2 } },
      { t: "Quiet but impossible to ignore", s: { moon_aura: 2, fire_aura: 1 } },
      { t: "Soft and welcoming", s: { rose_aura: 2, ocean_aura: 1 } },
      { t: "Grounded and steady", s: { forest_aura: 2, ocean_aura: 1 } },
    ],
  },
  {
    q: "Which energy feels most like you?",
    opts: [
      { t: "Sunlight through a window", s: { golden_aura: 2 } },
      { t: "Moonlight at midnight", s: { moon_aura: 2 } },
      { t: "A warm blanket and a safe place", s: { rose_aura: 2 } },
      { t: "A spark that changes the atmosphere", s: { fire_aura: 2 } },
    ],
  },
  {
    q: "When others are overwhelmed, you tend to…",
    opts: [
      { t: "Cheer them up and bring hope", s: { golden_aura: 2, fire_aura: 1 } },
      { t: "Listen quietly and understand deeply", s: { moon_aura: 2, ocean_aura: 1 } },
      { t: "Comfort them gently", s: { rose_aura: 2, forest_aura: 1 } },
      { t: "Help them stay calm and stable", s: { forest_aura: 2, ocean_aura: 1 } },
    ],
  },
  {
    q: "What makes your energy memorable?",
    opts: [
      { t: "You make people feel lighter", s: { golden_aura: 2 } },
      { t: "You make people feel intrigued", s: { moon_aura: 2, fire_aura: 1 } },
      { t: "You make people feel cared for", s: { rose_aura: 2 } },
      { t: "You make people feel grounded", s: { forest_aura: 2, ocean_aura: 1 } },
    ],
  },
  {
    q: "Which vibe do you naturally give off?",
    opts: [
      { t: "Radiant and warm", s: { golden_aura: 2, rose_aura: 1 } },
      { t: "Mysterious and deep", s: { moon_aura: 2 } },
      { t: "Tender and soothing", s: { rose_aura: 2, ocean_aura: 1 } },
      { t: "Strong and magnetic", s: { fire_aura: 2 } },
    ],
  },
  {
    q: "How do you usually affect other people’s mood?",
    opts: [
      { t: "I lift it quickly", s: { golden_aura: 2, fire_aura: 1 } },
      { t: "I make it calmer and quieter", s: { ocean_aura: 2, forest_aura: 1 } },
      { t: "I make people feel emotionally safe", s: { rose_aura: 2 } },
      { t: "I create depth and tension", s: { moon_aura: 2, fire_aura: 1 } },
    ],
  },
  {
    q: "Deep down, your aura feels most like…",
    opts: [
      { t: "Light that warms people", s: { golden_aura: 2 } },
      { t: "A hidden world people want to understand", s: { moon_aura: 2 } },
      { t: "A heart that comforts people", s: { rose_aura: 2 } },
      { t: "A force that leaves an impression", s: { fire_aura: 2, forest_aura: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "golden_aura";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function AuraQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    golden_aura: 0,
    moon_aura: 0,
    rose_aura: 0,
    ocean_aura: 0,
    fire_aura: 0,
    forest_aura: 0,
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
      router.push(`/result/aura?type=${top}`);
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
          What Kind of Aura Do You Have? ✨
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