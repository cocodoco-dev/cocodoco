"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "dreamer"
  | "lover"
  | "sage"
  | "rebel"
  | "guardian"
  | "magician";

const questions = [
  {
    q: "What feels most natural to your inner self?",
    opts: [
      { t: "Imagining what life could be", s: { dreamer: 2, magician: 1 } },
      { t: "Loving deeply and feeling everything fully", s: { lover: 2, guardian: 1 } },
      { t: "Seeking truth, meaning, and understanding", s: { sage: 2, magician: 1 } },
      { t: "Wanting freedom and resisting what feels false", s: { rebel: 2 } },
    ],
  },
  {
    q: "When life gets hard, what instinct rises first?",
    opts: [
      { t: "Escape into hope, imagination, or possibility", s: { dreamer: 2, magician: 1 } },
      { t: "Hold onto the people and feelings that matter most", s: { lover: 2, guardian: 1 } },
      { t: "Step back and try to understand what is really happening", s: { sage: 2 } },
      { t: "Push back against what feels unfair or limiting", s: { rebel: 2 } },
    ],
  },
  {
    q: "What kind of power feels most true to you?",
    opts: [
      { t: "The power of vision and imagination", s: { dreamer: 2 } },
      { t: "The power of connection and devotion", s: { lover: 2, guardian: 1 } },
      { t: "The power of wisdom and clarity", s: { sage: 2 } },
      { t: "The power of transformation and breaking old rules", s: { magician: 2, rebel: 1 } },
    ],
  },
  {
    q: "What role do you often play in other people’s lives?",
    opts: [
      { t: "The one who inspires possibility", s: { dreamer: 2, magician: 1 } },
      { t: "The one who loves, nurtures, and feels deeply", s: { lover: 2, guardian: 1 } },
      { t: "The one who sees clearly and gives perspective", s: { sage: 2 } },
      { t: "The one who challenges comfort and sparks change", s: { rebel: 2, magician: 1 } },
    ],
  },
  {
    q: "Which sentence feels most like your soul?",
    opts: [
      { t: "There has to be something more beautiful ahead.", s: { dreamer: 2 } },
      { t: "What matters most is what I love and protect.", s: { lover: 2, guardian: 1 } },
      { t: "I need to understand what is real.", s: { sage: 2 } },
      { t: "I cannot become small just to fit in.", s: { rebel: 2 } },
    ],
  },
  {
    q: "What kind of energy do people often feel from you?",
    opts: [
      { t: "Soft hope and emotional imagination", s: { dreamer: 2 } },
      { t: "Warmth, intimacy, and emotional presence", s: { lover: 2, guardian: 1 } },
      { t: "Depth, thoughtfulness, and calm insight", s: { sage: 2 } },
      { t: "Intensity, change, and a little danger", s: { rebel: 2, magician: 1 } },
    ],
  },
  {
    q: "What do you most want your life to become?",
    opts: [
      { t: "A meaningful story full of beauty and possibility", s: { dreamer: 2 } },
      { t: "A life built around real love and emotional truth", s: { lover: 2, guardian: 1 } },
      { t: "A life shaped by wisdom, truth, and understanding", s: { sage: 2 } },
      { t: "A life that changes things in a real way", s: { magician: 2, rebel: 1 } },
    ],
  },
  {
    q: "At your core, which archetype are you at heart?",
    opts: [
      { t: "The Dreamer", s: { dreamer: 2 } },
      { t: "The Guardian", s: { guardian: 2, lover: 1 } },
      { t: "The Sage", s: { sage: 2 } },
      { t: "The Magician", s: { magician: 2, rebel: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "dreamer";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ArchetypeAtHeartQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    dreamer: 0,
    lover: 0,
    sage: 0,
    rebel: 0,
    guardian: 0,
    magician: 0,
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
      router.push(`/result/archetype-at-heart?type=${top}`);
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
          Which Archetype Are You at Heart? 🗝️
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
            This archetype personality quiz is designed to help you discover the
            deeper symbolic role your inner self most naturally reflects. An
            archetype is not just a label. It is a recurring emotional pattern,
            energy, and way of moving through life that feels deeply familiar to
            your core.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people move through life as dreamers full of hope and vision.
            Others carry the energy of the lover, the sage, the rebel, the
            guardian, or the magician. This test looks at your instincts, your
            emotional values, and the deeper role your soul seems to return to
            again and again.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            heart is closest to The Dreamer, The Lover, The Sage, The Rebel, The
            Guardian, or The Magician. The result is meant to be reflective,
            meaningful, and easy to share.
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
            <li>The Dreamer</li>
            <li>The Lover</li>
            <li>The Sage</li>
            <li>The Rebel</li>
            <li>The Guardian</li>
            <li>The Magician</li>
          </ul>
        </section>
      </div>
    </main>
  );
}