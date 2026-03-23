"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "overthinker"
  | "people_pleaser"
  | "emotional_escapist"
  | "guarded_controller"
  | "self_saboteur"
  | "silent_storm";

const questions = [
  {
    q: "When you are overwhelmed, what do you tend to do first?",
    opts: [
      { t: "Think about everything until it gets even heavier", s: { overthinker: 2, silent_storm: 1 } },
      { t: "Focus on everyone else so I do not deal with myself", s: { people_pleaser: 2, emotional_escapist: 1 } },
      { t: "Avoid it and distract myself however I can", s: { emotional_escapist: 2, self_saboteur: 1 } },
      { t: "Shut down and try to stay in control", s: { guarded_controller: 2, silent_storm: 1 } },
    ],
  },
  {
    q: "What hurts you more than you usually admit?",
    opts: [
      { t: "The feeling that I made the wrong choice", s: { overthinker: 2 } },
      { t: "The fear of disappointing people", s: { people_pleaser: 2 } },
      { t: "The pressure of facing painful feelings directly", s: { emotional_escapist: 2 } },
      { t: "The idea of being emotionally exposed", s: { guarded_controller: 2, silent_storm: 1 } },
    ],
  },
  {
    q: "Which pattern sounds most like your hidden struggle?",
    opts: [
      { t: "I replay things in my head long after they end", s: { overthinker: 2 } },
      { t: "I say yes when I really mean no", s: { people_pleaser: 2 } },
      { t: "I numb out when things feel too intense", s: { emotional_escapist: 2, self_saboteur: 1 } },
      { t: "I act calm even when I am holding too much inside", s: { silent_storm: 2, guarded_controller: 1 } },
    ],
  },
  {
    q: "When something good enters your life, what can make it hard to fully receive?",
    opts: [
      { t: "I start worrying about everything that could go wrong", s: { overthinker: 2, self_saboteur: 1 } },
      { t: "I focus more on keeping others happy than enjoying it", s: { people_pleaser: 2 } },
      { t: "I pull away before it becomes too emotionally real", s: { emotional_escapist: 2, guarded_controller: 1 } },
      { t: "I keep too much of myself hidden", s: { guarded_controller: 2, silent_storm: 1 } },
    ],
  },
  {
    q: "What do you most often hide from other people?",
    opts: [
      { t: "How anxious my mind actually is", s: { overthinker: 2 } },
      { t: "How tired I am from always trying to be good for everyone", s: { people_pleaser: 2 } },
      { t: "How often I avoid what I really feel", s: { emotional_escapist: 2 } },
      { t: "How intense my emotions are underneath the surface", s: { silent_storm: 2, guarded_controller: 1 } },
    ],
  },
  {
    q: "What kind of self-protection feels most familiar?",
    opts: [
      { t: "Trying to think my way out of pain", s: { overthinker: 2 } },
      { t: "Keeping peace so no one gets upset with me", s: { people_pleaser: 2 } },
      { t: "Running from discomfort before it catches up", s: { emotional_escapist: 2, self_saboteur: 1 } },
      { t: "Controlling what others get to see", s: { guarded_controller: 2 } },
    ],
  },
  {
    q: "Which sentence feels a little too real?",
    opts: [
      { t: "My mind makes everything harder than it needs to be.", s: { overthinker: 2 } },
      { t: "I lose myself trying to be easy to love.", s: { people_pleaser: 2 } },
      { t: "I disappear from my feelings when they get too big.", s: { emotional_escapist: 2 } },
      { t: "I hold so much in that it turns into pressure.", s: { silent_storm: 2, guarded_controller: 1 } },
    ],
  },
  {
    q: "At your core, your shadow side is closest to…",
    opts: [
      { t: "A mind that turns fear into endless thinking", s: { overthinker: 2 } },
      { t: "A heart that over-gives to feel safe", s: { people_pleaser: 2 } },
      { t: "A self that escapes before pain can land", s: { emotional_escapist: 2, self_saboteur: 1 } },
      { t: "A hidden intensity that stays tightly controlled", s: { guarded_controller: 2, silent_storm: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "overthinker";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ShadowSideQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    overthinker: 0,
    people_pleaser: 0,
    emotional_escapist: 0,
    guarded_controller: 0,
    self_saboteur: 0,
    silent_storm: 0,
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
      router.push(`/result/shadow-side?type=${top}`);
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
          What Is Your Shadow Side? 🌑
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
            This shadow side quiz is designed to help you explore the hidden
            patterns that show up when you feel stressed, overwhelmed, hurt, or
            emotionally unprotected. Your shadow side is not your whole self. It
            is the part of you that forms around fear, survival, and emotional
            defense.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people get trapped in overthinking. Others lose themselves in
            pleasing people, escaping emotions, controlling vulnerability,
            sabotaging themselves, or holding so much inside that it becomes
            pressure. This test looks at the hidden pattern your heart and mind
            fall back on when life feels difficult.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            shadow side is The Overthinker, The People Pleaser, The Emotional
            Escapist, The Guarded Controller, The Self-Saboteur, or The Silent
            Storm. The result is meant to be reflective, insightful, and easy
            to share.
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
            <li>The Overthinker</li>
            <li>The People Pleaser</li>
            <li>The Emotional Escapist</li>
            <li>The Guarded Controller</li>
            <li>The Self-Saboteur</li>
            <li>The Silent Storm</li>
          </ul>
        </section>
      </div>
    </main>
  );
}