"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "quiet_strategist"
  | "gentle_idealist"
  | "curious_explorer"
  | "calm_thinker"
  | "natural_leader"
  | "creative_mind";

const questions = [
  {
    q: "When facing a new situation, you usually…",
    opts: [
      { t: "Observe and understand the situation first", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Focus on how people feel about it", s: { gentle_idealist: 2 } },
      { t: "Jump in and explore it directly", s: { curious_explorer: 2, natural_leader: 1 } },
      { t: "Think of a new or unusual approach", s: { creative_mind: 2, curious_explorer: 1 } },
    ],
  },
  {
    q: "Your friends often say you are…",
    opts: [
      { t: "Thoughtful", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Kind", s: { gentle_idealist: 2 } },
      { t: "Adventurous", s: { curious_explorer: 2, natural_leader: 1 } },
      { t: "Creative", s: { creative_mind: 2 } },
    ],
  },
  {
    q: "When solving problems you prefer to…",
    opts: [
      { t: "Analyze the situation logically", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Talk things out with people", s: { gentle_idealist: 2 } },
      { t: "Experiment with different options", s: { curious_explorer: 2, creative_mind: 1 } },
      { t: "Come up with new ideas", s: { creative_mind: 2, natural_leader: 1 } },
    ],
  },
  {
    q: "Your hidden strength is probably…",
    opts: [
      { t: "Strategy", s: { quiet_strategist: 2, natural_leader: 1 } },
      { t: "Empathy", s: { gentle_idealist: 2 } },
      { t: "Curiosity", s: { curious_explorer: 2 } },
      { t: "Creativity", s: { creative_mind: 2 } },
    ],
  },
  {
    q: "In group situations you usually…",
    opts: [
      { t: "Watch and understand the dynamics", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Support others emotionally", s: { gentle_idealist: 2 } },
      { t: "Encourage new experiences", s: { curious_explorer: 2, natural_leader: 1 } },
      { t: "Bring fresh ideas", s: { creative_mind: 2 } },
    ],
  },
  {
    q: "If you had a free year you would…",
    opts: [
      { t: "Study something deeply", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Help people or communities", s: { gentle_idealist: 2 } },
      { t: "Travel and explore the world", s: { curious_explorer: 2, natural_leader: 1 } },
      { t: "Create something original", s: { creative_mind: 2 } },
    ],
  },
  {
    q: "People are most surprised by your…",
    opts: [
      { t: "Insight", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Warmth", s: { gentle_idealist: 2 } },
      { t: "Boldness", s: { natural_leader: 2, curious_explorer: 1 } },
      { t: "Imagination", s: { creative_mind: 2 } },
    ],
  },
  {
    q: "Deep down you want to…",
    opts: [
      { t: "Understand how things work", s: { quiet_strategist: 2, calm_thinker: 1 } },
      { t: "Make the world kinder", s: { gentle_idealist: 2 } },
      { t: "Experience everything life offers", s: { curious_explorer: 2, natural_leader: 1 } },
      { t: "Express something unique", s: { creative_mind: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "quiet_strategist";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function HiddenPersonalityQuiz() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState<Record<ResultKey, number>>({
    quiet_strategist: 0,
    gentle_idealist: 0,
    curious_explorer: 0,
    calm_thinker: 0,
    natural_leader: 0,
    creative_mind: 0,
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
      router.push(`/result/hidden-personality?type=${top}`);
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
      <div style={{ width: "min(720px,100%)", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          Hidden Personality Test ✨
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
                  width: "min(520px,100%)",
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
            background: "rgba(255,255,255,0.6)",
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