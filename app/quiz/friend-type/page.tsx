"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "loyal_anchor"
  | "sunshine_friend"
  | "honest_guardian"
  | "chaotic_fun"
  | "soft_listener"
  | "old_soul_friend";

const questions = [
  {
    q: "When your friend is going through a hard time, you usually…",
    opts: [
      { t: "Stay by their side no matter what", s: { loyal_anchor: 2, soft_listener: 1 } },
      { t: "Try to make them laugh and feel lighter", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "Tell them what they need to hear honestly", s: { honest_guardian: 2, old_soul_friend: 1 } },
      { t: "Listen quietly and let them open up at their own pace", s: { soft_listener: 2, old_soul_friend: 1 } },
    ],
  },
  {
    q: "What do your friends probably appreciate most about you?",
    opts: [
      { t: "You are always dependable", s: { loyal_anchor: 2 } },
      { t: "You make everything more fun", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "You are real with them", s: { honest_guardian: 2 } },
      { t: "You understand their feelings deeply", s: { soft_listener: 2, old_soul_friend: 1 } },
    ],
  },
  {
    q: "What is your role in a friend group most of the time?",
    opts: [
      { t: "The steady one everyone can count on", s: { loyal_anchor: 2 } },
      { t: "The mood-maker", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "The one who keeps it real", s: { honest_guardian: 2 } },
      { t: "The calm and thoughtful one", s: { soft_listener: 2, old_soul_friend: 1 } },
    ],
  },
  {
    q: "If a friend is making a bad decision, you tend to…",
    opts: [
      { t: "Support them, but stay close in case they fall", s: { loyal_anchor: 2, soft_listener: 1 } },
      { t: "Try to lighten the situation first", s: { sunshine_friend: 2 } },
      { t: "Tell them directly, even if they do not like it", s: { honest_guardian: 2 } },
      { t: "Ask questions so they can realize it themselves", s: { old_soul_friend: 2, soft_listener: 1 } },
    ],
  },
  {
    q: "What makes friendship meaningful to you?",
    opts: [
      { t: "Loyalty and consistency", s: { loyal_anchor: 2 } },
      { t: "Shared memories and fun energy", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "Honesty and trust", s: { honest_guardian: 2 } },
      { t: "Emotional depth and understanding", s: { soft_listener: 2, old_soul_friend: 1 } },
    ],
  },
  {
    q: "How do you usually show love to your friends?",
    opts: [
      { t: "By always being there", s: { loyal_anchor: 2 } },
      { t: "By cheering them up and hyping them", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "By protecting them from nonsense", s: { honest_guardian: 2 } },
      { t: "By listening and remembering the little things", s: { soft_listener: 2, old_soul_friend: 1 } },
    ],
  },
  {
    q: "What kind of friend are you in conflict?",
    opts: [
      { t: "I try to hold the friendship together", s: { loyal_anchor: 2 } },
      { t: "I hate tension and want to fix the mood fast", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "I would rather be honest than fake", s: { honest_guardian: 2 } },
      { t: "I stay calm and think about what is really going on", s: { old_soul_friend: 2, soft_listener: 1 } },
    ],
  },
  {
    q: "Deep down, the friend you are is someone who…",
    opts: [
      { t: "Never leaves people behind", s: { loyal_anchor: 2 } },
      { t: "Makes life brighter", s: { sunshine_friend: 2, chaotic_fun: 1 } },
      { t: "Protects people with truth", s: { honest_guardian: 2 } },
      { t: "Feels people deeply and quietly", s: { soft_listener: 2, old_soul_friend: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "loyal_anchor";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function FriendTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    loyal_anchor: 0,
    sunshine_friend: 0,
    honest_guardian: 0,
    chaotic_fun: 0,
    soft_listener: 0,
    old_soul_friend: 0,
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
      router.push(`/result/friend-type?type=${top}`);
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
          What Kind of Friend Are You? 💞
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