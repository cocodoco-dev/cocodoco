"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "comfort_giver"
  | "playful_charmer"
  | "loyal_anchor"
  | "enigmatic_heart"
  | "golden_retriever_lover"
  | "free_spirit_lover";

const questions = [
  {
    q: "On a date, you usually…",
    opts: [
      {
        t: "Ask thoughtful questions and listen deeply",
        s: { comfort_giver: 2, loyal_anchor: 1 },
      },
      {
        t: "Keep things playful and tease a little",
        s: { playful_charmer: 2, golden_retriever_lover: 1 },
      },
      {
        t: "Plan ahead and make things feel smooth",
        s: { loyal_anchor: 2, free_spirit_lover: 1 },
      },
      {
        t: "Go with the vibe and stay a little mysterious",
        s: { enigmatic_heart: 2, playful_charmer: 1 },
      },
    ],
  },
  {
    q: "Your love language feels closest to…",
    opts: [
      {
        t: "Quality time and emotional presence",
        s: { comfort_giver: 2, golden_retriever_lover: 1 },
      },
      {
        t: "Words, flirting, and playful attention",
        s: { playful_charmer: 2, comfort_giver: 1 },
      },
      {
        t: "Acts of service and reliability",
        s: { loyal_anchor: 2 },
      },
      {
        t: "Trust, freedom, and space",
        s: { free_spirit_lover: 2, enigmatic_heart: 1 },
      },
    ],
  },
  {
    q: "When texting someone you like, you are…",
    opts: [
      {
        t: "Warm, consistent, and caring",
        s: { comfort_giver: 2, loyal_anchor: 1 },
      },
      {
        t: "Witty, quick, and full of charm",
        s: { playful_charmer: 2 },
      },
      {
        t: "Very excited and openly affectionate",
        s: { golden_retriever_lover: 2, comfort_giver: 1 },
      },
      {
        t: "A bit unpredictable but interesting",
        s: { enigmatic_heart: 2, free_spirit_lover: 1 },
      },
    ],
  },
  {
    q: "Your biggest relationship strength is…",
    opts: [
      {
        t: "Making people feel emotionally safe",
        s: { comfort_giver: 2 },
      },
      {
        t: "Keeping things fun and exciting",
        s: { playful_charmer: 2 },
      },
      {
        t: "Being dependable no matter what",
        s: { loyal_anchor: 2 },
      },
      {
        t: "Staying true to yourself while loving deeply",
        s: { free_spirit_lover: 2, enigmatic_heart: 1 },
      },
    ],
  },
  {
    q: "When conflict happens, you usually…",
    opts: [
      {
        t: "Try to talk gently and work through it",
        s: { comfort_giver: 2, loyal_anchor: 1 },
      },
      {
        t: "Lighten the tension before going serious",
        s: { playful_charmer: 2 },
      },
      {
        t: "Stay calm and solve things practically",
        s: { loyal_anchor: 2 },
      },
      {
        t: "Pull back for space before opening up",
        s: { enigmatic_heart: 2, free_spirit_lover: 1 },
      },
    ],
  },
  {
    q: "Your ideal relationship feels like…",
    opts: [
      {
        t: "Warm, gentle, and emotionally secure",
        s: { comfort_giver: 2 },
      },
      {
        t: "Fun, flirty, and full of chemistry",
        s: { playful_charmer: 2, golden_retriever_lover: 1 },
      },
      {
        t: "Stable, loyal, and long-term",
        s: { loyal_anchor: 2 },
      },
      {
        t: "Deep, free, and never controlling",
        s: { free_spirit_lover: 2, enigmatic_heart: 1 },
      },
    ],
  },
  {
    q: "People are most attracted to your…",
    opts: [
      {
        t: "Warmth and kindness",
        s: { comfort_giver: 2, golden_retriever_lover: 1 },
      },
      {
        t: "Charm and playful confidence",
        s: { playful_charmer: 2 },
      },
      {
        t: "Maturity and emotional steadiness",
        s: { loyal_anchor: 2 },
      },
      {
        t: "Mystery and quiet depth",
        s: { enigmatic_heart: 2, free_spirit_lover: 1 },
      },
    ],
  },
  {
    q: "In love, what matters most to you?",
    opts: [
      {
        t: "Feeling safe and understood",
        s: { comfort_giver: 2 },
      },
      {
        t: "Excitement and emotional spark",
        s: { playful_charmer: 2, golden_retriever_lover: 1 },
      },
      {
        t: "Trust and commitment",
        s: { loyal_anchor: 2 },
      },
      {
        t: "Freedom and authenticity",
        s: { free_spirit_lover: 2, enigmatic_heart: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "comfort_giver";
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
    comfort_giver: 0,
    playful_charmer: 0,
    loyal_anchor: 0,
    enigmatic_heart: 0,
    golden_retriever_lover: 0,
    free_spirit_lover: 0,
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
          Love Style Test 💘
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