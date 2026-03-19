"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "warm_charm"
  | "quiet_mystery"
  | "playful_magnetism"
  | "elegant_energy"
  | "bright_presence"
  | "deep_allure";

const questions = [
  {
    q: "What usually draws people to you first?",
    opts: [
      { t: "Your warmth and kindness", s: { warm_charm: 2, bright_presence: 1 } },
      { t: "Your quiet and mysterious vibe", s: { quiet_mystery: 2, deep_allure: 1 } },
      { t: "Your playful and fun energy", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "Your calm and refined presence", s: { elegant_energy: 2, deep_allure: 1 } },
    ],
  },
  {
    q: "In conversation, your most attractive trait is…",
    opts: [
      { t: "Making people feel comfortable quickly", s: { warm_charm: 2 } },
      { t: "Saying less, but making it memorable", s: { quiet_mystery: 2, elegant_energy: 1 } },
      { t: "Making people laugh and feel alive", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "Speaking with depth and intention", s: { deep_allure: 2, elegant_energy: 1 } },
    ],
  },
  {
    q: "Which compliment sounds most like you?",
    opts: [
      { t: "“You feel so easy to be around.”", s: { warm_charm: 2 } },
      { t: "“There’s something intriguing about you.”", s: { quiet_mystery: 2, deep_allure: 1 } },
      { t: "“You have such fun energy.”", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "“You have such a graceful vibe.”", s: { elegant_energy: 2 } },
    ],
  },
  {
    q: "When someone starts liking you, it is often because…",
    opts: [
      { t: "They feel emotionally safe with you", s: { warm_charm: 2, deep_allure: 1 } },
      { t: "They want to understand you more", s: { quiet_mystery: 2 } },
      { t: "You make life feel exciting", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "You carry yourself with quiet confidence", s: { elegant_energy: 2, deep_allure: 1 } },
    ],
  },
  {
    q: "Your energy in a room is usually…",
    opts: [
      { t: "Soft and welcoming", s: { warm_charm: 2 } },
      { t: "Quiet, but impossible to ignore", s: { quiet_mystery: 2, deep_allure: 1 } },
      { t: "Bright and lively", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "Polished and composed", s: { elegant_energy: 2 } },
    ],
  },
  {
    q: "What kind of attraction feels most natural to you?",
    opts: [
      { t: "Gentle connection", s: { warm_charm: 2 } },
      { t: "Slow-burning intrigue", s: { quiet_mystery: 2, deep_allure: 1 } },
      { t: "Chemistry and fun", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "Elegant tension and depth", s: { elegant_energy: 2, deep_allure: 1 } },
    ],
  },
  {
    q: "People are often surprised by your…",
    opts: [
      { t: "Emotional warmth", s: { warm_charm: 2 } },
      { t: "Hidden depth", s: { quiet_mystery: 2, deep_allure: 1 } },
      { t: "Ability to lift the mood instantly", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "Quiet confidence", s: { elegant_energy: 2 } },
    ],
  },
  {
    q: "Deep down, what makes you attractive is…",
    opts: [
      { t: "Your heart", s: { warm_charm: 2 } },
      { t: "Your mystery", s: { quiet_mystery: 2 } },
      { t: "Your energy", s: { playful_magnetism: 2, bright_presence: 1 } },
      { t: "Your depth", s: { deep_allure: 2, elegant_energy: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "warm_charm";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function AttractiveQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    warm_charm: 0,
    quiet_mystery: 0,
    playful_magnetism: 0,
    elegant_energy: 0,
    bright_presence: 0,
    deep_allure: 0,
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
      router.push(`/result/attractive?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "36px 18px 60px",
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
          What Makes You Attractive? ✨
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

        <section
          style={{
            marginTop: "34px",
            textAlign: "left",
            background: "rgba(255,255,255,0.72)",
            border: "1px solid #f2d2db",
            borderRadius: "16px",
            padding: "24px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
              marginBottom: "14px",
              color: "#111827",
            }}
          >
            About this quiz
          </h2>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            This personality quiz is designed to help you discover what makes
            you attractive to other people. Attraction is not only about looks.
            In real life, people are often drawn to warmth, emotional safety,
            mystery, confidence, playfulness, and the overall energy someone
            brings into a conversation or relationship.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people naturally attract others through gentle kindness and a
            comforting presence. Others leave a strong impression through quiet
            depth, elegant composure, bright liveliness, or a sense of intrigue
            that makes people want to know more. This test looks at your social
            style, your emotional tone, and the kind of atmosphere you create
            around others.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of short questions, you can find out whether
            your strongest attractive trait is Warm Charm, Quiet Mystery,
            Playful Magnetism, Elegant Energy, Bright Presence, or Deep Allure.
            The result is meant to be fun, insightful, and easy to share with
            friends.
          </p>

          <h3
            style={{
              fontSize: "20px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Possible results
          </h3>

          <ul
            style={{
              paddingLeft: "22px",
              lineHeight: 1.9,
              fontSize: "16px",
              margin: 0,
            }}
          >
            <li>Warm Charm</li>
            <li>Quiet Mystery</li>
            <li>Playful Magnetism</li>
            <li>Elegant Energy</li>
            <li>Bright Presence</li>
            <li>Deep Allure</li>
          </ul>
        </section>
      </div>
    </main>
  );
}