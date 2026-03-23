"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "emotionally_safe"
  | "quietly_loyal"
  | "genuinely_considerate"
  | "calm_communicator"
  | "softly_supportive"
  | "secure_and_steady";

const questions = [
  {
    q: "When someone you care about is having a hard day, you usually…",
    opts: [
      { t: "Create space where they can feel safe and open up", s: { emotionally_safe: 2, softly_supportive: 1 } },
      { t: "Stay by their side, even if they do not say much", s: { quietly_loyal: 2, secure_and_steady: 1 } },
      { t: "Notice little things they need and help quietly", s: { genuinely_considerate: 2, softly_supportive: 1 } },
      { t: "Talk calmly and help them sort through what they feel", s: { calm_communicator: 2, emotionally_safe: 1 } },
    ],
  },
  {
    q: "What kind of compliment sounds most like you?",
    opts: [
      { t: "“I feel comfortable being myself around you.”", s: { emotionally_safe: 2 } },
      { t: "“You are always there when it really matters.”", s: { quietly_loyal: 2, secure_and_steady: 1 } },
      { t: "“You always think about the little things.”", s: { genuinely_considerate: 2 } },
      { t: "“You make difficult conversations feel easier.”", s: { calm_communicator: 2, emotionally_safe: 1 } },
    ],
  },
  {
    q: "In relationships or friendships, your strength tends to be…",
    opts: [
      { t: "Helping people feel emotionally accepted", s: { emotionally_safe: 2 } },
      { t: "Being dependable over time, not just in big moments", s: { quietly_loyal: 2, secure_and_steady: 1 } },
      { t: "Showing care through thoughtful actions", s: { genuinely_considerate: 2, softly_supportive: 1 } },
      { t: "Keeping communication honest but gentle", s: { calm_communicator: 2 } },
    ],
  },
  {
    q: "What do you value most in close connection?",
    opts: [
      { t: "Emotional safety", s: { emotionally_safe: 2, secure_and_steady: 1 } },
      { t: "Consistency and loyalty", s: { quietly_loyal: 2 } },
      { t: "Mutual care shown in everyday ways", s: { genuinely_considerate: 2, softly_supportive: 1 } },
      { t: "Clear and respectful communication", s: { calm_communicator: 2 } },
    ],
  },
  {
    q: "When conflict happens, you are most likely to…",
    opts: [
      { t: "Stay kind so the other person does not feel attacked", s: { emotionally_safe: 2 } },
      { t: "Remain steady and not give up on the relationship too quickly", s: { quietly_loyal: 2, secure_and_steady: 1 } },
      { t: "Think carefully about how the other person might be feeling", s: { genuinely_considerate: 2, softly_supportive: 1 } },
      { t: "Try to talk things through clearly and calmly", s: { calm_communicator: 2 } },
    ],
  },
  {
    q: "What kind of green flag do people often miss at first?",
    opts: [
      { t: "How emotionally gentle you really are", s: { emotionally_safe: 2, softly_supportive: 1 } },
      { t: "How deeply loyal you are once you care", s: { quietly_loyal: 2 } },
      { t: "How much effort you put into thoughtful details", s: { genuinely_considerate: 2 } },
      { t: "How maturely you handle difficult moments", s: { calm_communicator: 2, secure_and_steady: 1 } },
    ],
  },
  {
    q: "What feels most natural to you when you love someone?",
    opts: [
      { t: "Making sure they feel safe, not judged", s: { emotionally_safe: 2 } },
      { t: "Staying consistent even when life gets messy", s: { quietly_loyal: 2, secure_and_steady: 1 } },
      { t: "Supporting them in soft, practical ways", s: { softly_supportive: 2, genuinely_considerate: 1 } },
      { t: "Speaking with care and honesty", s: { calm_communicator: 2 } },
    ],
  },
  {
    q: "At your core, your hidden green flag is…",
    opts: [
      { t: "You make people feel emotionally safe", s: { emotionally_safe: 2 } },
      { t: "You stay true and loyal over time", s: { quietly_loyal: 2 } },
      { t: "You care in ways people do not always notice at first", s: { genuinely_considerate: 2, softly_supportive: 1 } },
      { t: "You bring calm, healthy energy into connection", s: { secure_and_steady: 2, calm_communicator: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "emotionally_safe";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function SecretGreenFlagQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    emotionally_safe: 0,
    quietly_loyal: 0,
    genuinely_considerate: 0,
    calm_communicator: 0,
    softly_supportive: 0,
    secure_and_steady: 0,
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
      router.push(`/result/secret-green-flag?type=${top}`);
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
          What Is Your Secret Green Flag? 💚
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
            This personality quiz is designed to help you discover the hidden
            green flag that makes you a healthy and lovable person in close
            relationships. A green flag is not always loud or obvious. Sometimes
            the most beautiful qualities are the ones people notice slowly.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people make others feel emotionally safe. Others are quietly
            loyal, deeply thoughtful, calm in communication, softly supportive,
            or steady in a way that makes relationships feel secure. This test
            looks at the kind of care, maturity, and emotional energy you bring
            into connection.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            secret green flag is Emotional Safety, Quiet Loyalty, Genuine
            Consideration, Calm Communication, Soft Support, or Secure Steadiness.
            The result is meant to be fun, warm, and easy to share.
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
            <li>Emotionally Safe</li>
            <li>Quietly Loyal</li>
            <li>Genuinely Considerate</li>
            <li>Calm Communicator</li>
            <li>Softly Supportive</li>
            <li>Secure and Steady</li>
          </ul>
        </section>
      </div>
    </main>
  );
}