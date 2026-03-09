"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "analytical_brain"
  | "creative_brain"
  | "strategic_brain"
  | "emotional_brain"
  | "curious_brain"
  | "balanced_brain";

const questions = [
  {
    q: "When solving a problem, you usually…",
    opts: [
      {
        t: "Break it down into logical steps",
        s: { analytical_brain: 2, strategic_brain: 1 },
      },
      {
        t: "Think of unusual or original ideas",
        s: { creative_brain: 2, curious_brain: 1 },
      },
      {
        t: "Focus on the long-term outcome",
        s: { strategic_brain: 2, analytical_brain: 1 },
      },
      {
        t: "Think about how people will feel",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "Your mind feels most alive when…",
    opts: [
      {
        t: "You are organizing information clearly",
        s: { analytical_brain: 2 },
      },
      {
        t: "You are making or imagining something new",
        s: { creative_brain: 2 },
      },
      {
        t: "You are planning the best route forward",
        s: { strategic_brain: 2 },
      },
      {
        t: "You are understanding people deeply",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "People usually come to you for…",
    opts: [
      {
        t: "Clear answers",
        s: { analytical_brain: 2 },
      },
      {
        t: "Fresh ideas",
        s: { creative_brain: 2 },
      },
      {
        t: "Smart decisions",
        s: { strategic_brain: 2 },
      },
      {
        t: "Support and understanding",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "When you learn something new, you prefer to…",
    opts: [
      {
        t: "Study the structure and logic behind it",
        s: { analytical_brain: 2 },
      },
      {
        t: "Play around and experiment freely",
        s: { creative_brain: 2, curious_brain: 1 },
      },
      {
        t: "Figure out how it can be used effectively",
        s: { strategic_brain: 2 },
      },
      {
        t: "Connect it to people and real-life meaning",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "Your biggest mental strength is…",
    opts: [
      {
        t: "Precision",
        s: { analytical_brain: 2 },
      },
      {
        t: "Originality",
        s: { creative_brain: 2 },
      },
      {
        t: "Planning ahead",
        s: { strategic_brain: 2 },
      },
      {
        t: "Emotional insight",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "In conversations, you usually…",
    opts: [
      {
        t: "Focus on facts and accuracy",
        s: { analytical_brain: 2 },
      },
      {
        t: "Jump to interesting ideas and what-ifs",
        s: { creative_brain: 2, curious_brain: 1 },
      },
      {
        t: "Look for the point and direction",
        s: { strategic_brain: 2 },
      },
      {
        t: "Read the tone and emotional undercurrent",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "What kind of mental space suits you best?",
    opts: [
      {
        t: "A clean system with clear order",
        s: { analytical_brain: 2 },
      },
      {
        t: "A messy but inspiring environment",
        s: { creative_brain: 2 },
      },
      {
        t: "A focused space where goals are clear",
        s: { strategic_brain: 2 },
      },
      {
        t: "A calm space with emotional comfort",
        s: { emotional_brain: 2, balanced_brain: 1 },
      },
    ],
  },
  {
    q: "Deep down, your brain is always trying to…",
    opts: [
      {
        t: "Understand how things work",
        s: { analytical_brain: 2, curious_brain: 1 },
      },
      {
        t: "Create something new",
        s: { creative_brain: 2 },
      },
      {
        t: "Find the smartest way forward",
        s: { strategic_brain: 2 },
      },
      {
        t: "Make life feel more meaningful and human",
        s: { emotional_brain: 2, balanced_brain: 2 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "analytical_brain";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function BrainTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    analytical_brain: 0,
    creative_brain: 0,
    strategic_brain: 0,
    emotional_brain: 0,
    curious_brain: 0,
    balanced_brain: 0,
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
      router.push(`/result/brain-type?type=${top}`);
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
          Your Brain Type Test 🧠
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