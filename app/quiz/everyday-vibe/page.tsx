"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "cozy_planner"
  | "spontaneous_sprinter"
  | "curious_collector"
  | "chill_floater"
  | "social_butterfly"
  | "quiet_observer";

const questions = [
  {
    q: "Your ideal weekend starts with…",
    opts: [
      { t: "Making a cozy plan for the day", s: { cozy_planner: 2, quiet_observer: 1 } },
      { t: "Going somewhere exciting", s: { spontaneous_sprinter: 2, social_butterfly: 1 } },
      { t: "Exploring a new place", s: { curious_collector: 2, spontaneous_sprinter: 1 } },
      { t: "Seeing what friends are doing", s: { social_butterfly: 2, chill_floater: 1 } },
    ],
  },
  {
    q: "When you enter a new place you usually…",
    opts: [
      { t: "Find a comfortable spot first", s: { cozy_planner: 2, chill_floater: 1 } },
      { t: "Walk around quickly to explore", s: { spontaneous_sprinter: 2, curious_collector: 1 } },
      { t: "Start talking to people", s: { social_butterfly: 2 } },
      { t: "Observe quietly before doing anything", s: { quiet_observer: 2, curious_collector: 1 } },
    ],
  },
  {
    q: "Your friends describe you as…",
    opts: [
      { t: "Reliable and calm", s: { cozy_planner: 2, quiet_observer: 1 } },
      { t: "Energetic and spontaneous", s: { spontaneous_sprinter: 2 } },
      { t: "Curious and thoughtful", s: { curious_collector: 2, quiet_observer: 1 } },
      { t: "Easygoing and relaxed", s: { chill_floater: 2, social_butterfly: 1 } },
    ],
  },
  {
    q: "When plans suddenly change you…",
    opts: [
      { t: "Feel a bit uncomfortable", s: { cozy_planner: 2, quiet_observer: 1 } },
      { t: "Get excited about the surprise", s: { spontaneous_sprinter: 2 } },
      { t: "Adapt and explore new options", s: { curious_collector: 2, chill_floater: 1 } },
      { t: "Just go with the flow", s: { chill_floater: 2, social_butterfly: 1 } },
    ],
  },
  {
    q: "Your ideal environment is…",
    opts: [
      { t: "A warm cozy room", s: { cozy_planner: 2 } },
      { t: "A busy city full of activity", s: { social_butterfly: 2, spontaneous_sprinter: 1 } },
      { t: "A new place to discover", s: { curious_collector: 2, spontaneous_sprinter: 1 } },
      { t: "Somewhere quiet and peaceful", s: { quiet_observer: 2, chill_floater: 1 } },
    ],
  },
  {
    q: "When meeting new people you usually…",
    opts: [
      { t: "Listen more than you talk", s: { quiet_observer: 2, cozy_planner: 1 } },
      { t: "Start conversations easily", s: { social_butterfly: 2, spontaneous_sprinter: 1 } },
      { t: "Ask lots of questions", s: { curious_collector: 2 } },
      { t: "Wait and observe the vibe", s: { chill_floater: 1, quiet_observer: 2 } },
    ],
  },
  {
    q: "Your daily energy feels more like…",
    opts: [
      { t: "Calm and steady", s: { cozy_planner: 2, quiet_observer: 1 } },
      { t: "Fast and excited", s: { spontaneous_sprinter: 2, social_butterfly: 1 } },
      { t: "Curious and focused", s: { curious_collector: 2 } },
      { t: "Relaxed and flexible", s: { chill_floater: 2 } },
    ],
  },
  {
    q: "Your life motto sounds like…",
    opts: [
      { t: "Comfort and balance matter most", s: { cozy_planner: 2 } },
      { t: "Life is an adventure", s: { spontaneous_sprinter: 2 } },
      { t: "Always learn something new", s: { curious_collector: 2 } },
      { t: "No stress, just flow", s: { chill_floater: 2, social_butterfly: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "cozy_planner";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function EverydayVibeQuiz() {
  const router = useRouter();

  const [current, setCurrent] = useState(0);

  const [scores, setScores] = useState<Record<ResultKey, number>>({
    cozy_planner: 0,
    spontaneous_sprinter: 0,
    curious_collector: 0,
    chill_floater: 0,
    social_butterfly: 0,
    quiet_observer: 0,
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
      router.push(`/result/everyday-vibe?type=${top}`);
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
          Everyday Vibe Test 🌿
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