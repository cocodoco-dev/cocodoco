"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "dreamy_soul"
  | "golden_soul"
  | "midnight_soul"
  | "wild_soul"
  | "gentle_soul"
  | "old_soul_flame";

const questions = [
  {
    q: "What kind of atmosphere feels most like home to you?",
    opts: [
      { t: "Soft lights, quiet thoughts, and imagination", s: { dreamy_soul: 2, midnight_soul: 1 } },
      { t: "Warm laughter and bright energy", s: { golden_soul: 2, wild_soul: 1 } },
      { t: "Depth, silence, and emotional intensity", s: { midnight_soul: 2, old_soul_flame: 1 } },
      { t: "Peace, comfort, and emotional safety", s: { gentle_soul: 2, dreamy_soul: 1 } },
    ],
  },
  {
    q: "What do people often feel around you?",
    opts: [
      { t: "A soft kind of wonder", s: { dreamy_soul: 2 } },
      { t: "Warmth and hope", s: { golden_soul: 2 } },
      { t: "Curiosity and emotional depth", s: { midnight_soul: 2, old_soul_flame: 1 } },
      { t: "Calm and comfort", s: { gentle_soul: 2, golden_soul: 1 } },
    ],
  },
  {
    q: "Which image feels closest to your inner energy?",
    opts: [
      { t: "Clouds drifting across a pink sky", s: { dreamy_soul: 2 } },
      { t: "Morning sunlight through a window", s: { golden_soul: 2 } },
      { t: "Stars over a dark ocean", s: { midnight_soul: 2 } },
      { t: "A fire burning in silence", s: { old_soul_flame: 2, wild_soul: 1 } },
    ],
  },
  {
    q: "What kind of emotion feels most natural to your soul?",
    opts: [
      { t: "Wonder and longing", s: { dreamy_soul: 2, midnight_soul: 1 } },
      { t: "Joy and openness", s: { golden_soul: 2 } },
      { t: "Intensity and reflection", s: { midnight_soul: 2, old_soul_flame: 1 } },
      { t: "Tenderness and care", s: { gentle_soul: 2 } },
    ],
  },
  {
    q: "When life feels overwhelming, your soul wants to…",
    opts: [
      { t: "Escape into imagination and beauty", s: { dreamy_soul: 2 } },
      { t: "Find light and keep moving", s: { golden_soul: 2, wild_soul: 1 } },
      { t: "Sit with the truth of it quietly", s: { midnight_soul: 2, old_soul_flame: 1 } },
      { t: "Return to warmth and emotional safety", s: { gentle_soul: 2 } },
    ],
  },
  {
    q: "What makes you unforgettable to others?",
    opts: [
      { t: "Your soft and unusual emotional world", s: { dreamy_soul: 2 } },
      { t: "Your bright and uplifting presence", s: { golden_soul: 2 } },
      { t: "Your mysterious emotional depth", s: { midnight_soul: 2, old_soul_flame: 1 } },
      { t: "Your comfort and genuine heart", s: { gentle_soul: 2, golden_soul: 1 } },
    ],
  },
  {
    q: "What kind of movement feels most like your spirit?",
    opts: [
      { t: "Floating", s: { dreamy_soul: 2 } },
      { t: "Dancing", s: { golden_soul: 2, wild_soul: 1 } },
      { t: "Wandering at night", s: { midnight_soul: 2 } },
      { t: "Burning slowly and steadily", s: { old_soul_flame: 2, gentle_soul: 1 } },
    ],
  },
  {
    q: "Deep down, your soul gives off the vibe of…",
    opts: [
      { t: "A beautiful dream people do not forget", s: { dreamy_soul: 2 } },
      { t: "A warm light people want near them", s: { golden_soul: 2 } },
      { t: "A secret world filled with depth", s: { midnight_soul: 2 } },
      { t: "A quiet fire with meaning and heart", s: { old_soul_flame: 2, gentle_soul: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "dreamy_soul";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function SoulVibeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    dreamy_soul: 0,
    golden_soul: 0,
    midnight_soul: 0,
    wild_soul: 0,
    gentle_soul: 0,
    old_soul_flame: 0,
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
      router.push(`/result/soul-vibe?type=${top}`);
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
          What Vibe Does Your Soul Give Off? 🌙
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