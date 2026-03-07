"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "safe_person"
  | "interesting_person"
  | "fun_person"
  | "calm_person"
  | "inspiring_person"
  | "unforgettable_person";

const questions = [
  {
    q: "When people first meet you, they often feel…",
    opts: [
      {
        t: "Comfortable right away",
        s: { safe_person: 2, calm_person: 1 },
      },
      {
        t: "Curious about you",
        s: { interesting_person: 2, unforgettable_person: 1 },
      },
      {
        t: "Excited and energized",
        s: { fun_person: 2, inspiring_person: 1 },
      },
      {
        t: "Like there is something special about you",
        s: { unforgettable_person: 2, interesting_person: 1 },
      },
    ],
  },
  {
    q: "In a group of friends, you are usually the one who…",
    opts: [
      {
        t: "Listens and supports people",
        s: { safe_person: 2, calm_person: 1 },
      },
      {
        t: "Says surprising or thoughtful things",
        s: { interesting_person: 2, inspiring_person: 1 },
      },
      {
        t: "Makes people laugh and feel alive",
        s: { fun_person: 2 },
      },
      {
        t: "Quietly leaves a strong impression",
        s: { unforgettable_person: 2, calm_person: 1 },
      },
    ],
  },
  {
    q: "What do people compliment you for most?",
    opts: [
      {
        t: "Being kind and reliable",
        s: { safe_person: 2 },
      },
      {
        t: "Being unique or different",
        s: { interesting_person: 2, unforgettable_person: 1 },
      },
      {
        t: "Being fun to be around",
        s: { fun_person: 2 },
      },
      {
        t: "Being thoughtful and calming",
        s: { calm_person: 2, inspiring_person: 1 },
      },
    ],
  },
  {
    q: "When someone remembers you later, it is usually because…",
    opts: [
      {
        t: "You made them feel understood",
        s: { safe_person: 2, calm_person: 1 },
      },
      {
        t: "You said something memorable",
        s: { interesting_person: 2, inspiring_person: 1 },
      },
      {
        t: "They had a genuinely good time with you",
        s: { fun_person: 2 },
      },
      {
        t: "Your presence stayed in their mind",
        s: { unforgettable_person: 2 },
      },
    ],
  },
  {
    q: "When a friend is struggling, you usually…",
    opts: [
      {
        t: "Listen carefully and support them",
        s: { safe_person: 2, calm_person: 1 },
      },
      {
        t: "Offer a perspective they did not expect",
        s: { interesting_person: 2, inspiring_person: 1 },
      },
      {
        t: "Lift their mood and help them breathe again",
        s: { fun_person: 2 },
      },
      {
        t: "Say something that quietly stays with them",
        s: { unforgettable_person: 2, inspiring_person: 1 },
      },
    ],
  },
  {
    q: "Your energy in a room is usually…",
    opts: [
      {
        t: "Comforting",
        s: { safe_person: 2, calm_person: 1 },
      },
      {
        t: "Intriguing",
        s: { interesting_person: 2, unforgettable_person: 1 },
      },
      {
        t: "Lively",
        s: { fun_person: 2, inspiring_person: 1 },
      },
      {
        t: "Steady and grounding",
        s: { calm_person: 2 },
      },
    ],
  },
  {
    q: "What role do you naturally take in relationships?",
    opts: [
      {
        t: "The person people rely on",
        s: { safe_person: 2 },
      },
      {
        t: "The one who makes life more interesting",
        s: { interesting_person: 2, unforgettable_person: 1 },
      },
      {
        t: "The one who keeps things fun and bright",
        s: { fun_person: 2 },
      },
      {
        t: "The one who motivates and inspires growth",
        s: { inspiring_person: 2, calm_person: 1 },
      },
    ],
  },
  {
    q: "If someone described you to another person, they would say…",
    opts: [
      {
        t: "“They are really kind and safe to be around.”",
        s: { safe_person: 2 },
      },
      {
        t: "“They are genuinely interesting.”",
        s: { interesting_person: 2 },
      },
      {
        t: "“They are so much fun.”",
        s: { fun_person: 2 },
      },
      {
        t: "“You do not forget them easily.”",
        s: { unforgettable_person: 2, inspiring_person: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "safe_person";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function PersonToOthersQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    safe_person: 0,
    interesting_person: 0,
    fun_person: 0,
    calm_person: 0,
    inspiring_person: 0,
    unforgettable_person: 0,
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
      router.push(`/result/person-to-others?type=${top}`);
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
          What Kind of Person Are You to Others? 👀
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