"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "soft_romantic"
  | "magnetic_flirt"
  | "loyal_lover"
  | "slow_burn"
  | "golden_heart"
  | "wild_fire";

const questions = [
  {
    q: "What makes romantic attraction feel real to you?",
    opts: [
      { t: "Emotional softness and feeling safe", s: { soft_romantic: 2, golden_heart: 1 } },
      { t: "Chemistry, playfulness, and spark", s: { magnetic_flirt: 2, wild_fire: 1 } },
      { t: "Trust, loyalty, and consistency", s: { loyal_lover: 2, slow_burn: 1 } },
      { t: "Depth that builds slowly over time", s: { slow_burn: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "How do you usually show romantic interest?",
    opts: [
      { t: "Through warmth, tenderness, and care", s: { soft_romantic: 2, golden_heart: 1 } },
      { t: "Through teasing, charm, and energy", s: { magnetic_flirt: 2 } },
      { t: "Through loyalty and steady effort", s: { loyal_lover: 2 } },
      { t: "Through quiet attention and emotional depth", s: { slow_burn: 2, loyal_lover: 1 } },
    ],
  },
  {
    q: "What kind of love story feels most like you?",
    opts: [
      { t: "A gentle connection that feels safe", s: { soft_romantic: 2 } },
      { t: "An exciting romance full of chemistry", s: { magnetic_flirt: 2, wild_fire: 1 } },
      { t: "A strong bond that lasts through anything", s: { loyal_lover: 2, golden_heart: 1 } },
      { t: "A slow connection that becomes unforgettable", s: { slow_burn: 2 } },
    ],
  },
  {
    q: "What do people probably feel when they like you?",
    opts: [
      { t: "Comforted and emotionally drawn in", s: { soft_romantic: 2, golden_heart: 1 } },
      { t: "Excited and a little obsessed", s: { magnetic_flirt: 2, wild_fire: 1 } },
      { t: "Safe enough to trust you deeply", s: { loyal_lover: 2 } },
      { t: "Curious because there is more to you than meets the eye", s: { slow_burn: 2 } },
    ],
  },
  {
    q: "Which romantic quality feels most natural to you?",
    opts: [
      { t: "Tenderness", s: { soft_romantic: 2 } },
      { t: "Charm", s: { magnetic_flirt: 2 } },
      { t: "Devotion", s: { loyal_lover: 2 } },
      { t: "Depth", s: { slow_burn: 2, wild_fire: 1 } },
    ],
  },
  {
    q: "What kind of energy do you bring into relationships?",
    opts: [
      { t: "Warmth and emotional reassurance", s: { soft_romantic: 2, golden_heart: 1 } },
      { t: "Spark and playful unpredictability", s: { magnetic_flirt: 2, wild_fire: 1 } },
      { t: "Steadiness and loyalty", s: { loyal_lover: 2 } },
      { t: "Intensity that grows stronger with time", s: { slow_burn: 2, wild_fire: 1 } },
    ],
  },
  {
    q: "What is your biggest romantic strength?",
    opts: [
      { t: "Making people feel emotionally held", s: { soft_romantic: 2, golden_heart: 1 } },
      { t: "Creating unforgettable chemistry", s: { magnetic_flirt: 2 } },
      { t: "Being someone people can rely on", s: { loyal_lover: 2 } },
      { t: "Making love feel meaningful and deep", s: { slow_burn: 2, wild_fire: 1 } },
    ],
  },
  {
    q: "Deep down, your romantic energy feels most like…",
    opts: [
      { t: "A soft place to land", s: { soft_romantic: 2, golden_heart: 1 } },
      { t: "A spark people cannot ignore", s: { magnetic_flirt: 2, wild_fire: 1 } },
      { t: "A promise that stays", s: { loyal_lover: 2 } },
      { t: "A flame that deepens over time", s: { slow_burn: 2, wild_fire: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "soft_romantic";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function RomanticEnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    soft_romantic: 0,
    magnetic_flirt: 0,
    loyal_lover: 0,
    slow_burn: 0,
    golden_heart: 0,
    wild_fire: 0,
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
      router.push(`/result/romantic-energy?type=${top}`);
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
          What Kind of Romantic Energy Do You Have? 💘
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