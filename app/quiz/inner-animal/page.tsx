"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "fox"
  | "owl"
  | "wolf"
  | "dolphin"
  | "bear"
  | "cat";

const questions = [
  {
    q: "When you enter a new situation, you usually…",
    opts: [
      {
        t: "Read the room before acting",
        s: { owl: 2, fox: 1 },
      },
      {
        t: "Talk to people quickly",
        s: { dolphin: 2, cat: 1 },
      },
      {
        t: "Stay independent and do your own thing",
        s: { cat: 2, wolf: 1 },
      },
      {
        t: "Move carefully but confidently",
        s: { bear: 2, wolf: 1 },
      },
    ],
  },
  {
    q: "Your biggest strength is…",
    opts: [
      {
        t: "Intelligence",
        s: { fox: 2, owl: 1 },
      },
      {
        t: "Observation",
        s: { owl: 2 },
      },
      {
        t: "Loyalty",
        s: { wolf: 2, bear: 1 },
      },
      {
        t: "Freedom",
        s: { cat: 2, dolphin: 1 },
      },
    ],
  },
  {
    q: "In friendships, you are usually the one who…",
    opts: [
      {
        t: "Gives smart advice",
        s: { fox: 2, owl: 1 },
      },
      {
        t: "Notices what others miss",
        s: { owl: 2 },
      },
      {
        t: "Protects your people",
        s: { wolf: 2, bear: 1 },
      },
      {
        t: "Keeps things fun and light",
        s: { dolphin: 2, cat: 1 },
      },
    ],
  },
  {
    q: "Your ideal day feels like…",
    opts: [
      {
        t: "Solving something interesting",
        s: { fox: 2, owl: 1 },
      },
      {
        t: "Quiet time with your thoughts",
        s: { owl: 2, bear: 1 },
      },
      {
        t: "Adventure with trusted people",
        s: { wolf: 2, dolphin: 1 },
      },
      {
        t: "Total freedom with no pressure",
        s: { cat: 2, bear: 1 },
      },
    ],
  },
  {
    q: "When someone annoys you, you usually…",
    opts: [
      {
        t: "Outsmart the situation",
        s: { fox: 2, cat: 1 },
      },
      {
        t: "Step back and say little",
        s: { owl: 2, bear: 1 },
      },
      {
        t: "Confront it directly",
        s: { wolf: 2 },
      },
      {
        t: "Distance yourself and move on",
        s: { cat: 2, dolphin: 1 },
      },
    ],
  },
  {
    q: "What attracts people to you most?",
    opts: [
      {
        t: "Sharp mind",
        s: { fox: 2 },
      },
      {
        t: "Calm mystery",
        s: { owl: 2, cat: 1 },
      },
      {
        t: "Strong presence",
        s: { wolf: 2, bear: 1 },
      },
      {
        t: "Easy charm",
        s: { dolphin: 2 },
      },
    ],
  },
  {
    q: "Your energy in a group is…",
    opts: [
      {
        t: "Clever and strategic",
        s: { fox: 2 },
      },
      {
        t: "Quiet but aware",
        s: { owl: 2, bear: 1 },
      },
      {
        t: "Strong and steady",
        s: { bear: 2, wolf: 1 },
      },
      {
        t: "Playful and social",
        s: { dolphin: 2, cat: 1 },
      },
    ],
  },
  {
    q: "Deep down, you want to live like…",
    opts: [
      {
        t: "Someone who always stays one step ahead",
        s: { fox: 2 },
      },
      {
        t: "Someone who understands everything deeply",
        s: { owl: 2 },
      },
      {
        t: "Someone strong and true to their pack",
        s: { wolf: 2, bear: 1 },
      },
      {
        t: "Someone completely free and authentic",
        s: { cat: 2, dolphin: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "fox";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function InnerAnimalQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    fox: 0,
    owl: 0,
    wolf: 0,
    dolphin: 0,
    bear: 0,
    cat: 0,
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
      router.push(`/result/inner-animal?type=${top}`);
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
          Your Inner Animal Test 🐾
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