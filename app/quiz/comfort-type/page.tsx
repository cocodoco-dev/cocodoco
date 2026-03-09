"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "warm_blanket"
  | "quiet_room"
  | "late_night_talk"
  | "sunny_window"
  | "gentle_hug"
  | "safe_home";

const questions = [
  {
    q: "When someone feels exhausted, your natural instinct is to…",
    opts: [
      { t: "Wrap them in warmth and kindness", s: { warm_blanket: 2, gentle_hug: 1 } },
      { t: "Give them calm and quiet space", s: { quiet_room: 2, safe_home: 1 } },
      { t: "Stay up and truly listen to them", s: { late_night_talk: 2, gentle_hug: 1 } },
      { t: "Brighten their mood little by little", s: { sunny_window: 2, warm_blanket: 1 } },
    ],
  },
  {
    q: "What kind of comfort feels most like you?",
    opts: [
      { t: "Soft, warm, and immediate", s: { warm_blanket: 2 } },
      { t: "Still, peaceful, and grounding", s: { quiet_room: 2, safe_home: 1 } },
      { t: "Deep, understanding, and personal", s: { late_night_talk: 2 } },
      { t: "Light, hopeful, and gentle", s: { sunny_window: 2, gentle_hug: 1 } },
    ],
  },
  {
    q: "People probably feel safest around you because…",
    opts: [
      { t: "You are warm and reassuring", s: { warm_blanket: 2, gentle_hug: 1 } },
      { t: "You do not overwhelm them", s: { quiet_room: 2 } },
      { t: "You understand what they really mean", s: { late_night_talk: 2, safe_home: 1 } },
      { t: "You make hard things feel lighter", s: { sunny_window: 2 } },
    ],
  },
  {
    q: "If someone is crying, you usually want to…",
    opts: [
      { t: "Hold them and be kind", s: { gentle_hug: 2, warm_blanket: 1 } },
      { t: "Stay close without forcing words", s: { quiet_room: 2, safe_home: 1 } },
      { t: "Talk through the pain with them", s: { late_night_talk: 2 } },
      { t: "Help them feel a little hope again", s: { sunny_window: 2, warm_blanket: 1 } },
    ],
  },
  {
    q: "What atmosphere feels most like your energy?",
    opts: [
      { t: "A cozy blanket on a cold night", s: { warm_blanket: 2 } },
      { t: "A quiet room with soft air", s: { quiet_room: 2 } },
      { t: "A long conversation after midnight", s: { late_night_talk: 2 } },
      { t: "Sunlight coming through the window", s: { sunny_window: 2 } },
    ],
  },
  {
    q: "How do you usually help people heal?",
    opts: [
      { t: "By making them feel cared for", s: { warm_blanket: 2, gentle_hug: 1 } },
      { t: "By giving them emotional space", s: { quiet_room: 2, safe_home: 1 } },
      { t: "By helping them feel understood", s: { late_night_talk: 2 } },
      { t: "By helping them believe things can get better", s: { sunny_window: 2 } },
    ],
  },
  {
    q: "What is your strongest comforting quality?",
    opts: [
      { t: "Warmth", s: { warm_blanket: 2 } },
      { t: "Calmness", s: { quiet_room: 2, safe_home: 1 } },
      { t: "Understanding", s: { late_night_talk: 2 } },
      { t: "Gentle hope", s: { sunny_window: 2, gentle_hug: 1 } },
    ],
  },
  {
    q: "Deep down, the kind of comfort you are is…",
    opts: [
      { t: "Something soft people want to return to", s: { warm_blanket: 2, gentle_hug: 1 } },
      { t: "A peaceful place where people can breathe", s: { quiet_room: 2, safe_home: 1 } },
      { t: "A voice that makes people feel less alone", s: { late_night_talk: 2 } },
      { t: "A light that enters quietly and stays", s: { sunny_window: 2, safe_home: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "warm_blanket";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ComfortTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    warm_blanket: 0,
    quiet_room: 0,
    late_night_talk: 0,
    sunny_window: 0,
    gentle_hug: 0,
    safe_home: 0,
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
      router.push(`/result/comfort-type?type=${top}`);
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
          What Kind of Comfort Are You? ☁️
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