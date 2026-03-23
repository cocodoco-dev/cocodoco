"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "soft_dreamer"
  | "chaotic_icon"
  | "quiet_mastermind"
  | "golden_heart"
  | "magnetic_rebel"
  | "healing_poet";

const questions = [
  {
    q: "What kind of energy do you naturally bring into a room?",
    opts: [
      { t: "Soft, warm, and quietly emotional", s: { soft_dreamer: 2, healing_poet: 1 } },
      { t: "Fun, unpredictable, and impossible to ignore", s: { chaotic_icon: 2, magnetic_rebel: 1 } },
      { t: "Calm, observant, and a little unreadable", s: { quiet_mastermind: 2 } },
      { t: "Bright, comforting, and easy to trust", s: { golden_heart: 2, healing_poet: 1 } },
    ],
  },
  {
    q: "If your life were a movie, your strongest trait would be…",
    opts: [
      { t: "Your emotional depth and inner world", s: { soft_dreamer: 2, healing_poet: 1 } },
      { t: "Your boldness and unforgettable presence", s: { chaotic_icon: 2, magnetic_rebel: 1 } },
      { t: "Your intelligence and hidden strategy", s: { quiet_mastermind: 2 } },
      { t: "Your kindness and ability to hold people together", s: { golden_heart: 2 } },
    ],
  },
  {
    q: "Which scene feels the most like you?",
    opts: [
      { t: "Staring out a window, lost in thought with music playing", s: { soft_dreamer: 2, healing_poet: 1 } },
      { t: "Walking into chaos but somehow making it iconic", s: { chaotic_icon: 2, magnetic_rebel: 1 } },
      { t: "Saying little, but understanding everything", s: { quiet_mastermind: 2 } },
      { t: "Being the safe place everyone keeps returning to", s: { golden_heart: 2, healing_poet: 1 } },
    ],
  },
  {
    q: "What usually makes people remember you?",
    opts: [
      { t: "Your softness and emotional presence", s: { soft_dreamer: 2 } },
      { t: "Your wild charm and strong individuality", s: { chaotic_icon: 2, magnetic_rebel: 1 } },
      { t: "Your quiet intensity and depth", s: { quiet_mastermind: 2 } },
      { t: "Your warmth and genuine heart", s: { golden_heart: 2, healing_poet: 1 } },
    ],
  },
  {
    q: "When life gets messy, your instinct is to…",
    opts: [
      { t: "Feel everything deeply and make meaning out of it", s: { soft_dreamer: 2, healing_poet: 1 } },
      { t: "Keep moving and turn chaos into momentum", s: { chaotic_icon: 2, magnetic_rebel: 1 } },
      { t: "Step back, analyze, and plan carefully", s: { quiet_mastermind: 2 } },
      { t: "Protect the people you care about", s: { golden_heart: 2 } },
    ],
  },
  {
    q: "Which quote feels most like your vibe?",
    opts: [
      { t: "I feel everything a little too deeply.", s: { soft_dreamer: 2, healing_poet: 1 } },
      { t: "I’m a mess, but somehow it works.", s: { chaotic_icon: 2 } },
      { t: "I notice more than I say.", s: { quiet_mastermind: 2 } },
      { t: "Love is still the strongest thing I have.", s: { golden_heart: 2, healing_poet: 1 } },
    ],
  },
  {
    q: "What kind of main character moment fits you best?",
    opts: [
      { t: "A quiet emotional breakthrough under the stars", s: { soft_dreamer: 2, healing_poet: 1 } },
      { t: "A dramatic entrance that changes the whole vibe", s: { chaotic_icon: 2, magnetic_rebel: 1 } },
      { t: "A smart move no one saw coming", s: { quiet_mastermind: 2 } },
      { t: "A small act of love that changes someone deeply", s: { golden_heart: 2, healing_poet: 1 } },
    ],
  },
  {
    q: "At your core, what kind of main character are you?",
    opts: [
      { t: "A soft soul living inside a cinematic heart", s: { soft_dreamer: 2 } },
      { t: "A bold force who makes life feel bigger", s: { magnetic_rebel: 2, chaotic_icon: 1 } },
      { t: "A quiet mind with hidden power", s: { quiet_mastermind: 2 } },
      { t: "A healing presence people never forget", s: { healing_poet: 2, golden_heart: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "soft_dreamer";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function MainCharacterQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    soft_dreamer: 0,
    chaotic_icon: 0,
    quiet_mastermind: 0,
    golden_heart: 0,
    magnetic_rebel: 0,
    healing_poet: 0,
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
      router.push(`/result/main-character?type=${top}`);
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
          What Kind of Main Character Are You? 🎬
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
            This personality quiz is designed to help you discover what kind of
            main character energy you naturally carry. Main character energy is
            not just about being dramatic or loud. It is about the emotional
            role you seem to play in your own story and in the lives of others.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people move through life like soft dreamers, full of emotion
            and quiet beauty. Others feel more like icons of chaos, hidden
            masterminds, warm-hearted protectors, magnetic rebels, or healing
            souls who leave emotional change behind them. This test looks at
            your vibe, your inner role, and the kind of energy people remember.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether you are
            a Soft Dreamer, Chaotic Icon, Quiet Mastermind, Golden Heart,
            Magnetic Rebel, or Healing Poet. The result is meant to be fun,
            cinematic, and easy to share.
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
            <li>Soft Dreamer</li>
            <li>Chaotic Icon</li>
            <li>Quiet Mastermind</li>
            <li>Golden Heart</li>
            <li>Magnetic Rebel</li>
            <li>Healing Poet</li>
          </ul>
        </section>
      </div>
    </main>
  );
}