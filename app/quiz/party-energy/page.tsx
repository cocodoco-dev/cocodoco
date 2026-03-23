"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "social_spark"
  | "chill_anchor"
  | "chaotic_icon"
  | "mysterious_observer"
  | "golden_hype"
  | "soft_connector";

const questions = [
  {
    q: "When you arrive at a party, what usually happens first?",
    opts: [
      { t: "I start talking and the energy picks up fast", s: { social_spark: 2, golden_hype: 1 } },
      { t: "I find the vibe and settle in naturally", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "Something weird, funny, or iconic happens around me", s: { chaotic_icon: 2, golden_hype: 1 } },
      { t: "I quietly observe before deciding where I belong", s: { mysterious_observer: 2, chill_anchor: 1 } },
    ],
  },
  {
    q: "What role do you naturally play in a group setting?",
    opts: [
      { t: "The one who keeps conversation alive", s: { social_spark: 2 } },
      { t: "The one who keeps everyone comfortable", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "The one who makes the night unforgettable", s: { chaotic_icon: 2, golden_hype: 1 } },
      { t: "The one people get curious about", s: { mysterious_observer: 2 } },
    ],
  },
  {
    q: "What kind of party moment feels most like you?",
    opts: [
      { t: "Laughing with everyone in the center of the room", s: { social_spark: 2, golden_hype: 1 } },
      { t: "Having a relaxed conversation that makes people stay longer", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "Starting something spontaneous that becomes the story of the night", s: { chaotic_icon: 2 } },
      { t: "Quietly catching someone’s attention without trying too hard", s: { mysterious_observer: 2 } },
    ],
  },
  {
    q: "What do people probably remember most about you after a party?",
    opts: [
      { t: "My fun, talkative energy", s: { social_spark: 2 } },
      { t: "How easy I was to be around", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "The chaos I somehow made charming", s: { chaotic_icon: 2, golden_hype: 1 } },
      { t: "The vibe I gave off without saying much", s: { mysterious_observer: 2 } },
    ],
  },
  {
    q: "If the room gets awkward, what do you do?",
    opts: [
      { t: "Jump in and bring the energy back up", s: { social_spark: 2, golden_hype: 1 } },
      { t: "Smooth it out with calm, easy conversation", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "Say something wild enough to reset the whole mood", s: { chaotic_icon: 2 } },
      { t: "Watch quietly until the moment passes", s: { mysterious_observer: 2 } },
    ],
  },
  {
    q: "What kind of vibe matches your party self best?",
    opts: [
      { t: "Bright, lively, and outgoing", s: { social_spark: 2, golden_hype: 1 } },
      { t: "Calm, warm, and grounding", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "Unpredictable, funny, and a little dangerous", s: { chaotic_icon: 2 } },
      { t: "Quiet, cool, and magnetic", s: { mysterious_observer: 2 } },
    ],
  },
  {
    q: "How do people tend to feel around you at social events?",
    opts: [
      { t: "More energetic and more open", s: { social_spark: 2 } },
      { t: "More relaxed and more themselves", s: { soft_connector: 2, chill_anchor: 1 } },
      { t: "Like anything could happen", s: { chaotic_icon: 2, golden_hype: 1 } },
      { t: "Intrigued, even if they cannot explain why", s: { mysterious_observer: 2 } },
    ],
  },
  {
    q: "At your core, what energy do you bring to a party?",
    opts: [
      { t: "I light the room up", s: { golden_hype: 2, social_spark: 1 } },
      { t: "I make the room feel good", s: { chill_anchor: 2, soft_connector: 1 } },
      { t: "I make the room memorable", s: { chaotic_icon: 2 } },
      { t: "I make the room curious", s: { mysterious_observer: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "social_spark";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function PartyEnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    social_spark: 0,
    chill_anchor: 0,
    chaotic_icon: 0,
    mysterious_observer: 0,
    golden_hype: 0,
    soft_connector: 0,
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
      router.push(`/result/party-energy?type=${top}`);
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
          What Energy Do You Bring to a Party? 🎉
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
            This party personality quiz is designed to help you discover the
            kind of social energy you naturally bring into fun group settings.
            Party energy is not only about being loud or outgoing. It is also
            about the atmosphere you create and how people feel when you are
            there.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people energize the whole room through conversation and hype.
            Others keep everything grounded, create soft connection, bring
            memorable chaos, or attract people through quiet mystery. This test
            looks at your social vibe, your natural role, and the feeling people
            associate with you at parties.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether you are
            Social Spark, Chill Anchor, Chaotic Icon, Mysterious Observer,
            Golden Hype, or Soft Connector. The result is meant to be fun,
            flattering, and easy to share.
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
            <li>Social Spark</li>
            <li>Chill Anchor</li>
            <li>Chaotic Icon</li>
            <li>Mysterious Observer</li>
            <li>Golden Hype</li>
            <li>Soft Connector</li>
          </ul>
        </section>
      </div>
    </main>
  );
}