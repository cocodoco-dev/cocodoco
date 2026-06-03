"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "romantic_dreamer"
  | "slow_burn"
  | "free_spirit"
  | "loyal_partner"
  | "passionate_lover"
  | "independent_heart";

const questions = [
  {
    q: "When you first meet someone you like, what do you do?",
    opts: [
      { t: "Drop hints and hope they notice you", s: { romantic_dreamer: 2, slow_burn: 1 } },
      { t: "Get to know them slowly over time", s: { slow_burn: 2, loyal_partner: 1 } },
      { t: "Make a move right away — life's too short", s: { free_spirit: 2, passionate_lover: 1 } },
      { t: "Stay calm and let things unfold naturally", s: { independent_heart: 2, slow_burn: 1 } },
    ],
  },
  {
    q: "What does your ideal first date look like?",
    opts: [
      { t: "Romantic and thoughtful — candles, flowers, all of it", s: { romantic_dreamer: 2 } },
      { t: "Low-key hangout where we can actually talk", s: { slow_burn: 2, loyal_partner: 1 } },
      { t: "Spontaneous and fun — figure it out as we go", s: { free_spirit: 2, passionate_lover: 1 } },
      { t: "Something that shows we genuinely share interests", s: { independent_heart: 2, slow_burn: 1 } },
    ],
  },
  {
    q: "How quickly do you usually catch feelings?",
    opts: [
      { t: "Fast — I'm already imagining our future", s: { romantic_dreamer: 2, passionate_lover: 1 } },
      { t: "Slowly — I need time before I really trust someone", s: { slow_burn: 2, independent_heart: 1 } },
      { t: "It depends — I try not to overthink it", s: { free_spirit: 2 } },
      { t: "When it feels right — not too fast, not too slow", s: { loyal_partner: 2, slow_burn: 1 } },
    ],
  },
  {
    q: "What matters most to you in a relationship?",
    opts: [
      { t: "Deep emotional connection and romance", s: { romantic_dreamer: 2, passionate_lover: 1 } },
      { t: "Trust and long-term stability", s: { loyal_partner: 2, slow_burn: 1 } },
      { t: "Freedom and fun without pressure", s: { free_spirit: 2, independent_heart: 1 } },
      { t: "Mutual respect and personal space", s: { independent_heart: 2, loyal_partner: 1 } },
    ],
  },
  {
    q: "When you're really into someone, you tend to…",
    opts: [
      { t: "Text first, plan things, and make it obvious", s: { romantic_dreamer: 2, passionate_lover: 1 } },
      { t: "Show up consistently and quietly be there for them", s: { loyal_partner: 2, slow_burn: 1 } },
      { t: "Keep it light and enjoy the moment", s: { free_spirit: 2 } },
      { t: "Pull back a little to protect your feelings", s: { independent_heart: 2, slow_burn: 1 } },
    ],
  },
  {
    q: "How do you handle conflict in a relationship?",
    opts: [
      { t: "Talk it out emotionally until we fully understand each other", s: { passionate_lover: 2, romantic_dreamer: 1 } },
      { t: "Give each other space, then come back to it calmly", s: { independent_heart: 2, slow_burn: 1 } },
      { t: "Fix it quickly so things feel good again", s: { loyal_partner: 2, free_spirit: 1 } },
      { t: "Process it deeply — conflict means something real is there", s: { slow_burn: 2, romantic_dreamer: 1 } },
    ],
  },
  {
    q: "What's your biggest fear in dating?",
    opts: [
      { t: "Being with someone who doesn't feel as deeply as I do", s: { romantic_dreamer: 2, passionate_lover: 1 } },
      { t: "Losing my sense of self in a relationship", s: { independent_heart: 2, free_spirit: 1 } },
      { t: "Getting stuck in something that never really grows", s: { free_spirit: 2, independent_heart: 1 } },
      { t: "Not being chosen or feeling taken for granted", s: { loyal_partner: 2, slow_burn: 1 } },
    ],
  },
  {
    q: "How would your friends describe your dating life?",
    opts: [
      { t: "Always deep in their feelings about someone", s: { romantic_dreamer: 2, passionate_lover: 1 } },
      { t: "Takes forever to open up but so worth it", s: { slow_burn: 2, independent_heart: 1 } },
      { t: "Keeps it casual and just goes with the flow", s: { free_spirit: 2 } },
      { t: "Steady and loyal — when they love, they really love", s: { loyal_partner: 2, slow_burn: 1 } },
    ],
  },
  {
    q: "The relationship you dream about feels like…",
    opts: [
      { t: "A movie — full of magic and butterflies", s: { romantic_dreamer: 2 } },
      { t: "Coming home — safe, warm, and completely real", s: { loyal_partner: 2, slow_burn: 1 } },
      { t: "An adventure — never boring, always growing", s: { free_spirit: 2, passionate_lover: 1 } },
      { t: "A partnership — equal, respectful, and free", s: { independent_heart: 2, loyal_partner: 1 } },
    ],
  },
  {
    q: "When a relationship ends, you usually…",
    opts: [
      { t: "Feel it deeply and need real time to heal", s: { romantic_dreamer: 2, passionate_lover: 1 } },
      { t: "Reflect slowly and try to understand what happened", s: { slow_burn: 2, independent_heart: 1 } },
      { t: "Move on relatively quickly and focus on yourself", s: { free_spirit: 2, independent_heart: 1 } },
      { t: "Stay loyal to the good memories while moving forward", s: { loyal_partner: 2, slow_burn: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "romantic_dreamer";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function DatingStyleQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    romantic_dreamer: 0,
    slow_burn: 0,
    free_spirit: 0,
    loyal_partner: 0,
    passionate_lover: 0,
    independent_heart: 0,
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
      router.push(`/result/dating-style?type=${top}`);
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
          What&apos;s Your Dating Style? 💘
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
