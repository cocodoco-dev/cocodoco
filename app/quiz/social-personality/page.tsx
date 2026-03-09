"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "connector"
  | "listener"
  | "storyteller"
  | "observer"
  | "energizer"
  | "calm_presence";

const questions = [
  {
    q: "When you enter a new group, you usually…",
    opts: [
      {
        t: "Start introducing people and building connections",
        s: { connector: 2, energizer: 1 },
      },
      {
        t: "Talk one-on-one and listen closely",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "Say something funny or interesting to break the ice",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "Watch the group dynamic before jumping in",
        s: { observer: 2, calm_presence: 1 },
      },
    ],
  },
  {
    q: "Friends often come to you because you…",
    opts: [
      {
        t: "Know how to connect people",
        s: { connector: 2 },
      },
      {
        t: "Truly listen without judging",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "Know how to make things fun",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "Notice what others miss",
        s: { observer: 2 },
      },
    ],
  },
  {
    q: "In conversation, your natural role is…",
    opts: [
      {
        t: "Keeping everyone involved",
        s: { connector: 2, energizer: 1 },
      },
      {
        t: "Making the other person feel heard",
        s: { listener: 2 },
      },
      {
        t: "Bringing humor, stories, and energy",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "Reading the tone before speaking",
        s: { observer: 2, calm_presence: 1 },
      },
    ],
  },
  {
    q: "When there is social tension, you usually…",
    opts: [
      {
        t: "Help people reconnect and smooth things over",
        s: { connector: 2, calm_presence: 1 },
      },
      {
        t: "Talk privately and help someone process it",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "Lighten the mood and break the awkwardness",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "Stay quiet and understand what is really happening",
        s: { observer: 2 },
      },
    ],
  },
  {
    q: "The social trait people notice in you first is…",
    opts: [
      {
        t: "Warm connection",
        s: { connector: 2 },
      },
      {
        t: "Gentle attention",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "Fun presence",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "Quiet awareness",
        s: { observer: 2 },
      },
    ],
  },
  {
    q: "At a gathering, your ideal vibe is…",
    opts: [
      {
        t: "Everyone feels included and connected",
        s: { connector: 2 },
      },
      {
        t: "A few meaningful conversations",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "Lots of laughter and good stories",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "A calm atmosphere where you can read the room",
        s: { observer: 2, calm_presence: 1 },
      },
    ],
  },
  {
    q: "People usually remember you as…",
    opts: [
      {
        t: "The person who brought people together",
        s: { connector: 2 },
      },
      {
        t: "The person who was kind and easy to talk to",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "The person who made things more fun",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "The person who quietly understood everything",
        s: { observer: 2 },
      },
    ],
  },
  {
    q: "Deep down, your social style is about…",
    opts: [
      {
        t: "Building connection",
        s: { connector: 2 },
      },
      {
        t: "Making people feel safe",
        s: { listener: 2, calm_presence: 1 },
      },
      {
        t: "Bringing life into the room",
        s: { storyteller: 2, energizer: 1 },
      },
      {
        t: "Understanding people beneath the surface",
        s: { observer: 2 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "connector";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function SocialPersonalityQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    connector: 0,
    listener: 0,
    storyteller: 0,
    observer: 0,
    energizer: 0,
    calm_presence: 0,
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
      router.push(`/result/social-personality?type=${top}`);
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
          Your Social Personality Test 💬
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