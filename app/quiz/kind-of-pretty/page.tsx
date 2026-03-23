"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "soft_pretty"
  | "elegant_pretty"
  | "cute_pretty"
  | "mysterious_pretty"
  | "sunny_pretty"
  | "ethereal_pretty";

const questions = [
  {
    q: "What kind of vibe do people notice from you first?",
    opts: [
      { t: "Gentle, warm, and comforting", s: { soft_pretty: 2, sunny_pretty: 1 } },
      { t: "Polished, graceful, and calm", s: { elegant_pretty: 2 } },
      { t: "Playful, sweet, and charming", s: { cute_pretty: 2, sunny_pretty: 1 } },
      { t: "Quiet, intriguing, and hard to read", s: { mysterious_pretty: 2, ethereal_pretty: 1 } },
    ],
  },
  {
    q: "Which compliment feels most like you?",
    opts: [
      { t: "“You have such a soft energy.”", s: { soft_pretty: 2 } },
      { t: "“You look so classy without trying.”", s: { elegant_pretty: 2 } },
      { t: "“You’re so cute it’s impossible not to smile.”", s: { cute_pretty: 2 } },
      { t: "“There’s something almost unreal about you.”", s: { ethereal_pretty: 2, mysterious_pretty: 1 } },
    ],
  },
  {
    q: "What kind of beauty feels most natural to you?",
    opts: [
      { t: "Softness that makes people feel safe", s: { soft_pretty: 2 } },
      { t: "Refinement that feels timeless", s: { elegant_pretty: 2 } },
      { t: "Brightness that feels lively and lovable", s: { cute_pretty: 2, sunny_pretty: 1 } },
      { t: "A quiet aura that leaves people curious", s: { mysterious_pretty: 2, ethereal_pretty: 1 } },
    ],
  },
  {
    q: "If your beauty were a scene, it would be…",
    opts: [
      { t: "A soft morning with light curtains and silence", s: { soft_pretty: 2 } },
      { t: "A slow walk through a beautiful city in a long coat", s: { elegant_pretty: 2 } },
      { t: "Golden afternoon light and laughter with friends", s: { sunny_pretty: 2, cute_pretty: 1 } },
      { t: "Moonlight through a window with music playing softly", s: { mysterious_pretty: 2, ethereal_pretty: 1 } },
    ],
  },
  {
    q: "What usually makes you attractive to others?",
    opts: [
      { t: "The way people feel calm around me", s: { soft_pretty: 2 } },
      { t: "The way I carry myself", s: { elegant_pretty: 2 } },
      { t: "My playful and lovable energy", s: { cute_pretty: 2, sunny_pretty: 1 } },
      { t: "The sense that there’s more to me than I show", s: { mysterious_pretty: 2, ethereal_pretty: 1 } },
    ],
  },
  {
    q: "Which color palette feels most like your beauty?",
    opts: [
      { t: "Cream, blush, and soft beige", s: { soft_pretty: 2 } },
      { t: "Black, ivory, champagne, and muted gold", s: { elegant_pretty: 2 } },
      { t: "Peach, pink, butter yellow, and sky blue", s: { cute_pretty: 2, sunny_pretty: 1 } },
      { t: "Silver, moon white, dusty blue, and midnight tones", s: { ethereal_pretty: 2, mysterious_pretty: 1 } },
    ],
  },
  {
    q: "What kind of presence do you have in a room?",
    opts: [
      { t: "Quietly soothing", s: { soft_pretty: 2 } },
      { t: "Composed and memorable", s: { elegant_pretty: 2 } },
      { t: "Bright and instantly lovable", s: { sunny_pretty: 2, cute_pretty: 1 } },
      { t: "Subtle but impossible to fully forget", s: { mysterious_pretty: 2, ethereal_pretty: 1 } },
    ],
  },
  {
    q: "At your core, what kind of pretty are you?",
    opts: [
      { t: "The kind that feels soft and healing", s: { soft_pretty: 2 } },
      { t: "The kind that feels elegant and magnetic", s: { elegant_pretty: 2 } },
      { t: "The kind that feels sweet and radiant", s: { cute_pretty: 2, sunny_pretty: 1 } },
      { t: "The kind that feels dreamy and unforgettable", s: { ethereal_pretty: 2, mysterious_pretty: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "soft_pretty";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function KindOfPrettyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    soft_pretty: 0,
    elegant_pretty: 0,
    cute_pretty: 0,
    mysterious_pretty: 0,
    sunny_pretty: 0,
    ethereal_pretty: 0,
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
      router.push(`/result/kind-of-pretty?type=${top}`);
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
          What Kind of Pretty Are You? ✨
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
            This personality beauty quiz is designed to help you discover what
            kind of pretty energy you naturally carry. Beauty is not only about
            features. It is also about atmosphere, emotional tone, and the way
            your presence makes people feel.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people feel soft and comforting. Others feel elegant and
            timeless, sweet and lovable, sunny and bright, mysterious and
            intriguing, or almost dreamlike in the way they move through the
            world. This test looks at your vibe, your emotional presence, and
            the kind of beauty that seems most true to you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            beauty is Soft Pretty, Elegant Pretty, Cute Pretty, Mysterious
            Pretty, Sunny Pretty, or Ethereal Pretty. The result is meant to be
            fun, flattering, and easy to share.
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
            <li>Soft Pretty</li>
            <li>Elegant Pretty</li>
            <li>Cute Pretty</li>
            <li>Mysterious Pretty</li>
            <li>Sunny Pretty</li>
            <li>Ethereal Pretty</li>
          </ul>
        </section>
      </div>
    </main>
  );
}