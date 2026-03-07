"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "empathy"
  | "courage"
  | "creativity"
  | "intelligence"
  | "resilience"
  | "leadership";

const questions = [
  {
    q: "When life gets difficult, your first instinct is to…",
    opts: [
      {
        t: "Check in on how people are feeling",
        s: { empathy: 2, leadership: 1 },
      },
      {
        t: "Face it directly, even if it is hard",
        s: { courage: 2, resilience: 1 },
      },
      {
        t: "Think of a different way through it",
        s: { creativity: 2, intelligence: 1 },
      },
      {
        t: "Pause and figure out the smartest response",
        s: { intelligence: 2, resilience: 1 },
      },
    ],
  },
  {
    q: "People trust you most because you are…",
    opts: [
      {
        t: "Understanding",
        s: { empathy: 2 },
      },
      {
        t: "Brave under pressure",
        s: { courage: 2, leadership: 1 },
      },
      {
        t: "Original and inventive",
        s: { creativity: 2 },
      },
      {
        t: "Steady and dependable",
        s: { resilience: 2, leadership: 1 },
      },
    ],
  },
  {
    q: "When others give up, you usually…",
    opts: [
      {
        t: "Encourage them emotionally",
        s: { empathy: 2, leadership: 1 },
      },
      {
        t: "Keep pushing forward anyway",
        s: { courage: 2, resilience: 1 },
      },
      {
        t: "Look for a better or fresher solution",
        s: { creativity: 2, intelligence: 1 },
      },
      {
        t: "Analyze what went wrong and adjust",
        s: { intelligence: 2, resilience: 1 },
      },
    ],
  },
  {
    q: "Your strongest impact on people is usually…",
    opts: [
      {
        t: "Making them feel seen and understood",
        s: { empathy: 2 },
      },
      {
        t: "Making them feel stronger",
        s: { courage: 2, leadership: 1 },
      },
      {
        t: "Making them see new possibilities",
        s: { creativity: 2 },
      },
      {
        t: "Making things clearer and easier to solve",
        s: { intelligence: 2, resilience: 1 },
      },
    ],
  },
  {
    q: "What kind of challenge suits you best?",
    opts: [
      {
        t: "Helping someone through something difficult",
        s: { empathy: 2 },
      },
      {
        t: "Taking a risk others avoid",
        s: { courage: 2 },
      },
      {
        t: "Building something new from scratch",
        s: { creativity: 2 },
      },
      {
        t: "Solving a complex problem",
        s: { intelligence: 2, leadership: 1 },
      },
    ],
  },
  {
    q: "Your hidden advantage is that you can…",
    opts: [
      {
        t: "Read emotional reality clearly",
        s: { empathy: 2 },
      },
      {
        t: "Stay strong when things feel uncertain",
        s: { courage: 2, resilience: 1 },
      },
      {
        t: "Imagine what others cannot yet see",
        s: { creativity: 2 },
      },
      {
        t: "Stay calm and think clearly under pressure",
        s: { intelligence: 2, leadership: 1 },
      },
    ],
  },
  {
    q: "If people had to describe your greatest quality, it would be…",
    opts: [
      {
        t: "Heart",
        s: { empathy: 2 },
      },
      {
        t: "Bravery",
        s: { courage: 2 },
      },
      {
        t: "Originality",
        s: { creativity: 2 },
      },
      {
        t: "Wisdom",
        s: { intelligence: 2, resilience: 1 },
      },
    ],
  },
  {
    q: "Deep down, your real strength comes from…",
    opts: [
      {
        t: "Caring deeply about people",
        s: { empathy: 2 },
      },
      {
        t: "Moving forward despite fear",
        s: { courage: 2, resilience: 1 },
      },
      {
        t: "Creating what does not exist yet",
        s: { creativity: 2 },
      },
      {
        t: "Knowing how to guide things in the right direction",
        s: { leadership: 2, intelligence: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "empathy";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function TrueStrengthQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    empathy: 0,
    courage: 0,
    creativity: 0,
    intelligence: 0,
    resilience: 0,
    leadership: 0,
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
      router.push(`/result/true-strength?type=${top}`);
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
          Your True Strength Test 💪
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