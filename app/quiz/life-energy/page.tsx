"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "fire_energy"
  | "water_energy"
  | "wind_energy"
  | "earth_energy"
  | "light_energy"
  | "shadow_energy";

const questions = [
  {
    q: "When life changes suddenly, you usually…",
    opts: [
      {
        t: "Act quickly and push forward",
        s: { fire_energy: 2, wind_energy: 1 },
      },
      {
        t: "Adapt quietly and go with the flow",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "Pause and ground yourself first",
        s: { earth_energy: 2, light_energy: 1 },
      },
      {
        t: "Stay hopeful and look for meaning",
        s: { light_energy: 2, wind_energy: 1 },
      },
    ],
  },
  {
    q: "People often feel your energy as…",
    opts: [
      {
        t: "Passionate and strong",
        s: { fire_energy: 2 },
      },
      {
        t: "Calm and emotionally deep",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "Free and refreshing",
        s: { wind_energy: 2 },
      },
      {
        t: "Stable and comforting",
        s: { earth_energy: 2, light_energy: 1 },
      },
    ],
  },
  {
    q: "What gives you energy the fastest?",
    opts: [
      {
        t: "A challenge that makes your heart race",
        s: { fire_energy: 2 },
      },
      {
        t: "A quiet emotional reset",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "Freedom, movement, and new air",
        s: { wind_energy: 2 },
      },
      {
        t: "A sense of peace and stability",
        s: { earth_energy: 2, light_energy: 1 },
      },
    ],
  },
  {
    q: "Your inner life feels most like…",
    opts: [
      {
        t: "A flame that keeps pushing forward",
        s: { fire_energy: 2 },
      },
      {
        t: "An ocean with deep currents",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "A sky full of motion",
        s: { wind_energy: 2, light_energy: 1 },
      },
      {
        t: "A quiet place with strong roots",
        s: { earth_energy: 2 },
      },
    ],
  },
  {
    q: "When helping others, you usually…",
    opts: [
      {
        t: "Motivate them to move forward",
        s: { fire_energy: 2, light_energy: 1 },
      },
      {
        t: "Sit with them emotionally",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "Help them see new possibilities",
        s: { wind_energy: 2, light_energy: 1 },
      },
      {
        t: "Give them steadiness and reassurance",
        s: { earth_energy: 2 },
      },
    ],
  },
  {
    q: "Which space feels most like you?",
    opts: [
      {
        t: "A place full of heat, motion, and life",
        s: { fire_energy: 2 },
      },
      {
        t: "A quiet place near water or stillness",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "An open place with air and freedom",
        s: { wind_energy: 2 },
      },
      {
        t: "A grounded, warm, stable environment",
        s: { earth_energy: 2, light_energy: 1 },
      },
    ],
  },
  {
    q: "What kind of strength do you trust most?",
    opts: [
      {
        t: "Intensity and drive",
        s: { fire_energy: 2 },
      },
      {
        t: "Depth and emotional endurance",
        s: { water_energy: 2, shadow_energy: 1 },
      },
      {
        t: "Flexibility and movement",
        s: { wind_energy: 2 },
      },
      {
        t: "Patience and consistency",
        s: { earth_energy: 2, light_energy: 1 },
      },
    ],
  },
  {
    q: "Deep down, your life energy is trying to…",
    opts: [
      {
        t: "Ignite change",
        s: { fire_energy: 2 },
      },
      {
        t: "Flow through what is real",
        s: { water_energy: 2 },
      },
      {
        t: "Stay free and evolving",
        s: { wind_energy: 2 },
      },
      {
        t: "Bring peace, hope, and grounding",
        s: { earth_energy: 1, light_energy: 2, shadow_energy: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "fire_energy";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function LifeEnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    fire_energy: 0,
    water_energy: 0,
    wind_energy: 0,
    earth_energy: 0,
    light_energy: 0,
    shadow_energy: 0,
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
      router.push(`/result/life-energy?type=${top}`);
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
          Your Life Energy Test ✨
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