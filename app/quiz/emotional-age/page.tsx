"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "childlike_heart"
  | "teen_spirit"
  | "balanced_adult"
  | "old_soul"
  | "gentle_guardian"
  | "timeless_depth";

const questions = [
  {
    q: "When something goes wrong unexpectedly, you usually…",
    opts: [
      { t: "Feel it immediately and react honestly", s: { childlike_heart: 2, teen_spirit: 1 } },
      { t: "Get frustrated, then bounce back fast", s: { teen_spirit: 2, childlike_heart: 1 } },
      { t: "Pause, think, and deal with it calmly", s: { balanced_adult: 2, gentle_guardian: 1 } },
      { t: "Accept it quietly and look at the bigger picture", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "What matters most to you in relationships?",
    opts: [
      { t: "Feeling safe to be fully yourself", s: { childlike_heart: 2, gentle_guardian: 1 } },
      { t: "Excitement, honesty, and strong emotion", s: { teen_spirit: 2 } },
      { t: "Trust, communication, and mutual effort", s: { balanced_adult: 2 } },
      { t: "Depth, loyalty, and emotional meaning", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "How do you make decisions most often?",
    opts: [
      { t: "I follow what feels right in the moment", s: { childlike_heart: 2 } },
      { t: "I go with passion and instinct", s: { teen_spirit: 2, childlike_heart: 1 } },
      { t: "I weigh my options and choose carefully", s: { balanced_adult: 2, gentle_guardian: 1 } },
      { t: "I think deeply about long-term meaning", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "People often come to you because…",
    opts: [
      { t: "You make them feel light and comfortable", s: { childlike_heart: 2 } },
      { t: "You bring energy and emotional honesty", s: { teen_spirit: 2 } },
      { t: "You give grounded and practical advice", s: { balanced_adult: 2, gentle_guardian: 1 } },
      { t: "You understand things on a deeper level", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "What kind of emotion feels most natural to you?",
    opts: [
      { t: "Wonder and softness", s: { childlike_heart: 2 } },
      { t: "Intensity and passion", s: { teen_spirit: 2, timeless_depth: 1 } },
      { t: "Stability and clarity", s: { balanced_adult: 2, gentle_guardian: 1 } },
      { t: "Reflection and quiet depth", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "How do you usually respond to conflict?",
    opts: [
      { t: "I get hurt easily, but I forgive fast", s: { childlike_heart: 2, gentle_guardian: 1 } },
      { t: "I react strongly, then cool down later", s: { teen_spirit: 2 } },
      { t: "I try to solve it fairly and clearly", s: { balanced_adult: 2 } },
      { t: "I step back and think about what it really means", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "Which description feels most like you?",
    opts: [
      { t: "Open-hearted and emotionally sincere", s: { childlike_heart: 2 } },
      { t: "Passionate and full of feeling", s: { teen_spirit: 2 } },
      { t: "Steady and emotionally reliable", s: { balanced_adult: 2, gentle_guardian: 1 } },
      { t: "Deep, thoughtful, and quietly intense", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
  {
    q: "Deep down, your emotional world is…",
    opts: [
      { t: "Pure, soft, and hopeful", s: { childlike_heart: 2 } },
      { t: "Restless, vivid, and alive", s: { teen_spirit: 2 } },
      { t: "Grounded, warm, and balanced", s: { balanced_adult: 2, gentle_guardian: 1 } },
      { t: "Layered, timeless, and hard to explain", s: { old_soul: 2, timeless_depth: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "childlike_heart";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function EmotionalAgeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    childlike_heart: 0,
    teen_spirit: 0,
    balanced_adult: 0,
    old_soul: 0,
    gentle_guardian: 0,
    timeless_depth: 0,
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
      router.push(`/result/emotional-age?type=${top}`);
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
          What Is Your Emotional Age? 💌
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