"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "secure_heart"
  | "anxious_romantic"
  | "avoidant_soul"
  | "fearful_deep";

const questions = [
  {
    q: "When you start liking someone, you usually…",
    opts: [
      { t: "Feel excited but stay grounded", s: { secure_heart: 2 } },
      { t: "Think about them constantly", s: { anxious_romantic: 2, fearful_deep: 1 } },
      { t: "Pull back a little to protect yourself", s: { avoidant_soul: 2 } },
      { t: "Want closeness but also feel scared of it", s: { fearful_deep: 2, anxious_romantic: 1 } },
    ],
  },
  {
    q: "If they reply late, your first thought is…",
    opts: [
      { t: "They’re probably just busy", s: { secure_heart: 2 } },
      { t: "Did I do something wrong?", s: { anxious_romantic: 2 } },
      { t: "It’s fine, I’ll focus on my own thing", s: { avoidant_soul: 2 } },
      { t: "I try to act calm, but I overthink it deeply", s: { fearful_deep: 2, anxious_romantic: 1 } },
    ],
  },
  {
    q: "In relationships, what feels hardest for you?",
    opts: [
      { t: "Nothing specific — I value healthy balance", s: { secure_heart: 2 } },
      { t: "Not needing constant reassurance", s: { anxious_romantic: 2 } },
      { t: "Letting someone get too close", s: { avoidant_soul: 2 } },
      { t: "Trusting love without feeling danger", s: { fearful_deep: 2 } },
    ],
  },
  {
    q: "How do you usually show love?",
    opts: [
      { t: "Steadily, honestly, and naturally", s: { secure_heart: 2 } },
      { t: "With lots of care, attention, and checking in", s: { anxious_romantic: 2 } },
      { t: "Quietly, through actions more than words", s: { avoidant_soul: 2 } },
      { t: "Very deeply, but only when I feel safe enough", s: { fearful_deep: 2, secure_heart: 1 } },
    ],
  },
  {
    q: "When conflict happens in love, you tend to…",
    opts: [
      { t: "Talk it through calmly", s: { secure_heart: 2 } },
      { t: "Feel panicked and want quick reassurance", s: { anxious_romantic: 2 } },
      { t: "Need space and shut down a little", s: { avoidant_soul: 2 } },
      { t: "Freeze between wanting comfort and wanting distance", s: { fearful_deep: 2 } },
    ],
  },
  {
    q: "Which relationship dynamic feels most familiar?",
    opts: [
      { t: "Mutual trust and emotional stability", s: { secure_heart: 2 } },
      { t: "Loving hard but worrying a lot", s: { anxious_romantic: 2 } },
      { t: "Caring deeply but guarding independence", s: { avoidant_soul: 2 } },
      { t: "Wanting intimacy but fearing emotional pain", s: { fearful_deep: 2 } },
    ],
  },
  {
    q: "What do you secretly need most in love?",
    opts: [
      { t: "Honesty and consistent affection", s: { secure_heart: 2 } },
      { t: "Reassurance that I truly matter", s: { anxious_romantic: 2 } },
      { t: "Respect for my space and pace", s: { avoidant_soul: 2 } },
      { t: "Safety strong enough to soften my fear", s: { fearful_deep: 2, secure_heart: 1 } },
    ],
  },
  {
    q: "At your core, your love style is…",
    opts: [
      { t: "Open and balanced", s: { secure_heart: 2 } },
      { t: "Deeply attached and emotionally intense", s: { anxious_romantic: 2 } },
      { t: "Independent and self-protective", s: { avoidant_soul: 2 } },
      { t: "Sensitive, layered, and cautious", s: { fearful_deep: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "secure_heart";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function AttachmentStyleQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    secure_heart: 0,
    anxious_romantic: 0,
    avoidant_soul: 0,
    fearful_deep: 0,
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
      router.push(`/result/attachment-style?type=${top}`);
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
          What Is Your Attachment Style in Love? 💘
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
            This love attachment style quiz is designed to help you understand
            how you emotionally connect in romantic relationships. Attachment
            style is the pattern that shapes how you respond to closeness,
            reassurance, distance, trust, and emotional conflict in love.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people feel naturally secure and balanced in love. Others may
            crave reassurance, protect themselves through distance, or feel torn
            between wanting intimacy and fearing emotional pain. None of these
            patterns make you “too much” or “not enough” — they simply reveal
            how your heart has learned to protect and connect.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            love style is most similar to Secure Heart, Anxious Romantic,
            Avoidant Soul, or Fearful Deep. The result is meant to be fun,
            insightful, and easy to share.
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
            <li>Secure Heart</li>
            <li>Anxious Romantic</li>
            <li>Avoidant Soul</li>
            <li>Fearful Deep</li>
          </ul>
        </section>
      </div>
    </main>
  );
}