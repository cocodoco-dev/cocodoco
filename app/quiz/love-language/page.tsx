"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "words_of_affirmation"
  | "quality_time"
  | "acts_of_service"
  | "physical_touch"
  | "thoughtful_gifts";

const questions = [
  {
    q: "What makes you feel most loved in a relationship?",
    opts: [
      { t: "Hearing sincere and affectionate words", s: { words_of_affirmation: 2 } },
      { t: "Having undistracted time together", s: { quality_time: 2 } },
      { t: "When someone helps me without being asked", s: { acts_of_service: 2 } },
      { t: "Warm hugs, cuddles, and physical closeness", s: { physical_touch: 2 } },
    ],
  },
  {
    q: "If someone wants to cheer you up, what would mean the most?",
    opts: [
      { t: "A sweet message reminding me how much I matter", s: { words_of_affirmation: 2 } },
      { t: "Spending real time with me and listening fully", s: { quality_time: 2 } },
      { t: "Taking something stressful off my plate", s: { acts_of_service: 2 } },
      { t: "A long hug or comforting touch", s: { physical_touch: 2, thoughtful_gifts: 1 } },
    ],
  },
  {
    q: "Which moment feels the most romantic to you?",
    opts: [
      { t: "A heartfelt confession or loving compliment", s: { words_of_affirmation: 2 } },
      { t: "A peaceful date where you feel fully present together", s: { quality_time: 2 } },
      { t: "Someone doing thoughtful things to make your life easier", s: { acts_of_service: 2 } },
      { t: "Holding hands and feeling close without needing words", s: { physical_touch: 2 } },
    ],
  },
  {
    q: "What kind of gesture stays with you the longest?",
    opts: [
      { t: "Words I can replay in my mind later", s: { words_of_affirmation: 2 } },
      { t: "Time that felt meaningful and fully shared", s: { quality_time: 2 } },
      { t: "A practical act that showed real care", s: { acts_of_service: 2 } },
      { t: "A physical moment that felt safe and tender", s: { physical_touch: 2 } },
    ],
  },
  {
    q: "What usually hurts your feelings most?",
    opts: [
      { t: "Harsh words or a lack of verbal affection", s: { words_of_affirmation: 2 } },
      { t: "Feeling ignored or emotionally absent together", s: { quality_time: 2 } },
      { t: "Feeling like I have to carry everything alone", s: { acts_of_service: 2 } },
      { t: "Feeling physically distant or cold", s: { physical_touch: 2 } },
    ],
  },
  {
    q: "What do you naturally do when you really care about someone?",
    opts: [
      { t: "Tell them how special they are", s: { words_of_affirmation: 2 } },
      { t: "Try to spend more real time with them", s: { quality_time: 2 } },
      { t: "Help them in concrete ways", s: { acts_of_service: 2 } },
      { t: "Reach for closeness, hugs, or gentle touch", s: { physical_touch: 2 } },
    ],
  },
  {
    q: "Which kind of surprise would make you happiest?",
    opts: [
      { t: "A meaningful letter or voice message", s: { words_of_affirmation: 2 } },
      { t: "A whole day planned just to be together", s: { quality_time: 2 } },
      { t: "Someone quietly handling something I was worried about", s: { acts_of_service: 2 } },
      { t: "A warm, affectionate reunion after missing each other", s: { physical_touch: 2 } },
    ],
  },
  {
    q: "What feels most true about your heart?",
    opts: [
      { t: "Love feels real when it is spoken clearly", s: { words_of_affirmation: 2 } },
      { t: "Love feels real when time is truly shared", s: { quality_time: 2 } },
      { t: "Love feels real when it shows up through action", s: { acts_of_service: 2 } },
      { t: "Love feels real when closeness is physical and warm", s: { physical_touch: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "words_of_affirmation";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function LoveLanguageQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    words_of_affirmation: 0,
    quality_time: 0,
    acts_of_service: 0,
    physical_touch: 0,
    thoughtful_gifts: 0,
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
      router.push(`/result/love-language?type=${top}`);
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
          What Is Your Love Language? 💗
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
            This love language quiz is designed to help you discover how you
            most naturally give and receive love. Love is not only about having
            feelings. It is also about what makes affection feel real, safe, and
            emotionally meaningful to you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people feel most loved through warm words and clear affection.
            Others feel it through undivided time, practical help, thoughtful
            gestures, or physical closeness. This test looks at what touches
            your heart most deeply in romantic connection.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            love language is Words of Affirmation, Quality Time, Acts of
            Service, Physical Touch, or Thoughtful Gifts. The result is meant to
            be fun, warm, and easy to share.
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
            <li>Words of Affirmation</li>
            <li>Quality Time</li>
            <li>Acts of Service</li>
            <li>Physical Touch</li>
            <li>Thoughtful Gifts</li>
          </ul>
        </section>
      </div>
    </main>
  );
}