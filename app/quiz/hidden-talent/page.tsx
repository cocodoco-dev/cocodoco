"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "emotional_reader"
  | "creative_visionary"
  | "natural_leader"
  | "peace_maker"
  | "deep_thinker"
  | "spark_maker";

const questions = [
  {
    q: "What do people often notice about you a little later?",
    opts: [
      { t: "You understand feelings quickly", s: { emotional_reader: 2, peace_maker: 1 } },
      { t: "You come up with original ideas", s: { creative_visionary: 2, deep_thinker: 1 } },
      { t: "You naturally take charge when needed", s: { natural_leader: 2, spark_maker: 1 } },
      { t: "You shift the mood of a room easily", s: { spark_maker: 2, peace_maker: 1 } },
    ],
  },
  {
    q: "When a problem appears, your first instinct is to…",
    opts: [
      { t: "Read the people involved", s: { emotional_reader: 2, peace_maker: 1 } },
      { t: "Look at it from a new angle", s: { creative_visionary: 2, deep_thinker: 1 } },
      { t: "Organize people and move forward", s: { natural_leader: 2 } },
      { t: "Calm things down before acting", s: { peace_maker: 2, emotional_reader: 1 } },
    ],
  },
  {
    q: "Which compliment fits you best?",
    opts: [
      { t: "“You just get people.”", s: { emotional_reader: 2 } },
      { t: "“I never would have thought of that.”", s: { creative_visionary: 2 } },
      { t: "“Things work better when you are here.”", s: { natural_leader: 2 } },
      { t: "“You make everything feel lighter.”", s: { spark_maker: 2, peace_maker: 1 } },
    ],
  },
  {
    q: "In a group, your hidden strength is usually…",
    opts: [
      { t: "Sensing what people are not saying", s: { emotional_reader: 2, deep_thinker: 1 } },
      { t: "Connecting ideas in a unique way", s: { creative_visionary: 2 } },
      { t: "Helping people move with direction", s: { natural_leader: 2 } },
      { t: "Keeping the emotional balance stable", s: { peace_maker: 2, emotional_reader: 1 } },
    ],
  },
  {
    q: "What kind of work or role would secretly suit you well?",
    opts: [
      { t: "Something involving empathy and people", s: { emotional_reader: 2, peace_maker: 1 } },
      { t: "Something imaginative or artistic", s: { creative_visionary: 2 } },
      { t: "Something strategic and decisive", s: { natural_leader: 2, deep_thinker: 1 } },
      { t: "Something that energizes or inspires others", s: { spark_maker: 2 } },
    ],
  },
  {
    q: "What usually makes you stand out without trying?",
    opts: [
      { t: "Your emotional awareness", s: { emotional_reader: 2 } },
      { t: "Your unusual perspective", s: { creative_visionary: 2, deep_thinker: 1 } },
      { t: "Your calm authority", s: { natural_leader: 2 } },
      { t: "Your uplifting energy", s: { spark_maker: 2, peace_maker: 1 } },
    ],
  },
  {
    q: "When people feel overwhelmed, you tend to…",
    opts: [
      { t: "Understand exactly what they need emotionally", s: { emotional_reader: 2, peace_maker: 1 } },
      { t: "Offer a new way to see the situation", s: { creative_visionary: 2, deep_thinker: 1 } },
      { t: "Help them focus and take action", s: { natural_leader: 2 } },
      { t: "Lighten the energy and help them breathe", s: { spark_maker: 2, peace_maker: 1 } },
    ],
  },
  {
    q: "Deep down, your hidden talent is probably…",
    opts: [
      { t: "Reading hearts", s: { emotional_reader: 2 } },
      { t: "Seeing what others miss", s: { creative_visionary: 2, deep_thinker: 1 } },
      { t: "Guiding people forward", s: { natural_leader: 2 } },
      { t: "Changing the emotional atmosphere", s: { spark_maker: 2, peace_maker: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "emotional_reader";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function HiddenTalentQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    emotional_reader: 0,
    creative_visionary: 0,
    natural_leader: 0,
    peace_maker: 0,
    deep_thinker: 0,
    spark_maker: 0,
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
      router.push(`/result/hidden-talent?type=${top}`);
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
          What Is Your Hidden Talent? 🎁
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