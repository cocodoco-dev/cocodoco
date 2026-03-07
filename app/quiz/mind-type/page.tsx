"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "dreamer_mind"
  | "strategist_mind"
  | "explorer_mind"
  | "empath_mind"
  | "creator_mind"
  | "calm_observer_mind";

const questions = [
  {
    q: "When you face a new idea, your first instinct is to…",
    opts: [
      {
        t: "Imagine all the possibilities it could become",
        s: { dreamer_mind: 2, creator_mind: 1 },
      },
      {
        t: "Test whether it actually makes sense",
        s: { strategist_mind: 2, calm_observer_mind: 1 },
      },
      {
        t: "Follow your curiosity and explore it",
        s: { explorer_mind: 2, dreamer_mind: 1 },
      },
      {
        t: "Think about what it means for people",
        s: { empath_mind: 2, calm_observer_mind: 1 },
      },
    ],
  },
  {
    q: "People often compliment your mind for being…",
    opts: [
      {
        t: "Imaginative",
        s: { dreamer_mind: 2, creator_mind: 1 },
      },
      {
        t: "Sharp and strategic",
        s: { strategist_mind: 2 },
      },
      {
        t: "Curious and open",
        s: { explorer_mind: 2 },
      },
      {
        t: "Emotionally insightful",
        s: { empath_mind: 2, calm_observer_mind: 1 },
      },
    ],
  },
  {
    q: "Your brain feels most alive when…",
    opts: [
      {
        t: "You are imagining the future",
        s: { dreamer_mind: 2 },
      },
      {
        t: "You are solving a difficult problem",
        s: { strategist_mind: 2, calm_observer_mind: 1 },
      },
      {
        t: "You are discovering something new",
        s: { explorer_mind: 2 },
      },
      {
        t: "You are creating something original",
        s: { creator_mind: 2, dreamer_mind: 1 },
      },
    ],
  },
  {
    q: "In a conversation, your mind naturally pays attention to…",
    opts: [
      {
        t: "What could be possible beyond the obvious",
        s: { dreamer_mind: 2, creator_mind: 1 },
      },
      {
        t: "The logic and structure behind what’s being said",
        s: { strategist_mind: 2 },
      },
      {
        t: "Interesting details you want to know more about",
        s: { explorer_mind: 2, calm_observer_mind: 1 },
      },
      {
        t: "The emotional tone underneath the words",
        s: { empath_mind: 2, calm_observer_mind: 1 },
      },
    ],
  },
  {
    q: "When a problem appears, you usually…",
    opts: [
      {
        t: "Visualize a better future and move toward it",
        s: { dreamer_mind: 2 },
      },
      {
        t: "Build the smartest plan you can",
        s: { strategist_mind: 2, calm_observer_mind: 1 },
      },
      {
        t: "Experiment and see what happens",
        s: { explorer_mind: 2, creator_mind: 1 },
      },
      {
        t: "Look at how people are being affected first",
        s: { empath_mind: 2 },
      },
    ],
  },
  {
    q: "Your ideal mental space feels like…",
    opts: [
      {
        t: "A place full of ideas, dreams, and possibility",
        s: { dreamer_mind: 2, creator_mind: 1 },
      },
      {
        t: "A clear system where everything connects logically",
        s: { strategist_mind: 2 },
      },
      {
        t: "A world full of discovery and stimulation",
        s: { explorer_mind: 2 },
      },
      {
        t: "A calm space where you can think and feel deeply",
        s: { empath_mind: 2, calm_observer_mind: 1 },
      },
    ],
  },
  {
    q: "What kind of thought comes to you most naturally?",
    opts: [
      {
        t: "“What if things could be bigger than this?”",
        s: { dreamer_mind: 2 },
      },
      {
        t: "“What is the smartest move here?”",
        s: { strategist_mind: 2 },
      },
      {
        t: "“What else is out there?”",
        s: { explorer_mind: 2 },
      },
      {
        t: "“What is really happening beneath the surface?”",
        s: { empath_mind: 1, calm_observer_mind: 2 },
      },
    ],
  },
  {
    q: "Deep down, your mind is always trying to…",
    opts: [
      {
        t: "Imagine a more meaningful future",
        s: { dreamer_mind: 2 },
      },
      {
        t: "Understand and organize complexity",
        s: { strategist_mind: 2, calm_observer_mind: 1 },
      },
      {
        t: "Explore what life has not shown you yet",
        s: { explorer_mind: 2 },
      },
      {
        t: "Express what feels unique and true",
        s: { creator_mind: 2, empath_mind: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "dreamer_mind";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function MindTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    dreamer_mind: 0,
    strategist_mind: 0,
    explorer_mind: 0,
    empath_mind: 0,
    creator_mind: 0,
    calm_observer_mind: 0,
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
      router.push(`/result/mind-type?type=${top}`);
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
          What Kind of Mind Do You Have? 🧠
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