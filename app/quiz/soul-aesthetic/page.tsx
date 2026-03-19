"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "dreamy_romantic"
  | "soft_minimalist"
  | "vintage_poetic"
  | "dark_moody"
  | "golden_sunlit"
  | "ethereal_cosmic";

const questions = [
  {
    q: "What kind of atmosphere feels most like home to your soul?",
    opts: [
      { t: "Soft lights, flowers, and gentle music", s: { dreamy_romantic: 2, vintage_poetic: 1 } },
      { t: "Clean space, calm silence, and simple beauty", s: { soft_minimalist: 2 } },
      { t: "Old books, warm cafés, and nostalgic corners", s: { vintage_poetic: 2, dreamy_romantic: 1 } },
      { t: "Rainy nights, shadows, and deep quiet", s: { dark_moody: 2 } },
    ],
  },
  {
    q: "Which image feels the most emotionally powerful to you?",
    opts: [
      { t: "A pink sunset over a field of flowers", s: { dreamy_romantic: 2, golden_sunlit: 1 } },
      { t: "A white room with sunlight on the floor", s: { soft_minimalist: 2 } },
      { t: "A handwritten letter tucked inside an old novel", s: { vintage_poetic: 2 } },
      { t: "A moonlit window during a storm", s: { dark_moody: 2, ethereal_cosmic: 1 } },
    ],
  },
  {
    q: "Your emotional energy is usually closest to…",
    opts: [
      { t: "Tender, dreamy, and full of feeling", s: { dreamy_romantic: 2 } },
      { t: "Quiet, balanced, and uncluttered", s: { soft_minimalist: 2 } },
      { t: "Deep, nostalgic, and thoughtful", s: { vintage_poetic: 2, dark_moody: 1 } },
      { t: "Mysterious, intense, and layered", s: { dark_moody: 2, ethereal_cosmic: 1 } },
    ],
  },
  {
    q: "If your soul had a color palette, it would be…",
    opts: [
      { t: "Blush pink, cream, and rose gold", s: { dreamy_romantic: 2 } },
      { t: "White, beige, and soft gray", s: { soft_minimalist: 2 } },
      { t: "Brown, faded gold, and dusty blue", s: { vintage_poetic: 2 } },
      { t: "Black, silver, midnight blue", s: { dark_moody: 2, ethereal_cosmic: 1 } },
    ],
  },
  {
    q: "What kind of beauty do you trust most?",
    opts: [
      { t: "Beauty that feels emotional and soft", s: { dreamy_romantic: 2 } },
      { t: "Beauty that feels simple and natural", s: { soft_minimalist: 2, golden_sunlit: 1 } },
      { t: "Beauty that carries history and memory", s: { vintage_poetic: 2 } },
      { t: "Beauty that feels strange, deep, or haunting", s: { dark_moody: 2, ethereal_cosmic: 1 } },
    ],
  },
  {
    q: "Which place would heal you the most right now?",
    opts: [
      { t: "A garden at golden hour", s: { dreamy_romantic: 2, golden_sunlit: 1 } },
      { t: "A peaceful room with nothing unnecessary", s: { soft_minimalist: 2 } },
      { t: "A quiet old town with bookstores and rain", s: { vintage_poetic: 2 } },
      { t: "A rooftop under the stars at midnight", s: { ethereal_cosmic: 2, dark_moody: 1 } },
    ],
  },
  {
    q: "What do people often feel from your presence?",
    opts: [
      { t: "Gentleness and warmth", s: { dreamy_romantic: 2, golden_sunlit: 1 } },
      { t: "Calm and ease", s: { soft_minimalist: 2 } },
      { t: "Depth and quiet emotion", s: { vintage_poetic: 2 } },
      { t: "Mystery and intensity", s: { dark_moody: 2, ethereal_cosmic: 1 } },
    ],
  },
  {
    q: "Which phrase sounds most like your soul?",
    opts: [
      { t: "A soft heart in bloom", s: { dreamy_romantic: 2 } },
      { t: "Peace in simplicity", s: { soft_minimalist: 2 } },
      { t: "A memory that never left", s: { vintage_poetic: 2 } },
      { t: "A universe hidden behind quiet eyes", s: { ethereal_cosmic: 2, dark_moody: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "dreamy_romantic";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function SoulAestheticQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    dreamy_romantic: 0,
    soft_minimalist: 0,
    vintage_poetic: 0,
    dark_moody: 0,
    golden_sunlit: 0,
    ethereal_cosmic: 0,
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
      router.push(`/result/soul-aesthetic?type=${top}`);
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
          What Aesthetic Matches Your Soul? ✨
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
            This aesthetic personality quiz is designed to help you discover
            which visual and emotional aesthetic best matches your inner world.
            Aesthetic is not only about fashion or decoration. It is also about
            the mood your soul naturally leans toward — the atmosphere that
            feels comforting, beautiful, and true to you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people carry a soft romantic energy, while others feel most at
            home in simplicity, nostalgia, shadow, sunlight, or something more
            cosmic and hard to define. This test looks at your emotional tone,
            visual instincts, and the kind of beauty that feels real to your
            heart.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            soul matches Dreamy Romantic, Soft Minimalist, Vintage Poetic, Dark
            Moody, Golden Sunlit, or Ethereal Cosmic energy. The result is made
            to be fun, personal, and easy to share.
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
            <li>Dreamy Romantic</li>
            <li>Soft Minimalist</li>
            <li>Vintage Poetic</li>
            <li>Dark Moody</li>
            <li>Golden Sunlit</li>
            <li>Ethereal Cosmic</li>
          </ul>
        </section>
      </div>
    </main>
  );
}