"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "soft_pretty"
  | "elegant_pretty"
  | "cute_pretty"
  | "mysterious_pretty"
  | "sunny_pretty"
  | "ethereal_pretty";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of vibe do people notice from you first?",
    opts: [
      {
        t: "Gentle, warm, and comforting",
        s: { soft_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "Polished, graceful, and calm",
        s: { elegant_pretty: 2 },
      },
      {
        t: "Playful, sweet, and charming",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "Quiet, intriguing, and hard to read",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "Which compliment feels most like you?",
    opts: [
      {
        t: "“You have such a soft energy.”",
        s: { soft_pretty: 2 },
      },
      {
        t: "“You look so classy without trying.”",
        s: { elegant_pretty: 2 },
      },
      {
        t: "“You’re so cute it’s impossible not to smile.”",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "“There’s something almost unreal about you.”",
        s: { ethereal_pretty: 2, mysterious_pretty: 1 },
      },
    ],
  },
  {
    q: "What kind of beauty feels most natural to you?",
    opts: [
      {
        t: "Softness that makes people feel safe",
        s: { soft_pretty: 2 },
      },
      {
        t: "Refinement that feels timeless",
        s: { elegant_pretty: 2 },
      },
      {
        t: "Brightness that feels lively and lovable",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "A quiet aura that leaves people curious",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "If your beauty were a scene, it would be…",
    opts: [
      {
        t: "A soft morning with light curtains and silence",
        s: { soft_pretty: 2 },
      },
      {
        t: "A slow walk through a beautiful city in a long coat",
        s: { elegant_pretty: 2 },
      },
      {
        t: "Golden afternoon light and laughter with friends",
        s: { sunny_pretty: 2, cute_pretty: 1 },
      },
      {
        t: "Moonlight through a window with music playing softly",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "What usually makes you attractive to others?",
    opts: [
      {
        t: "The way people feel calm around me",
        s: { soft_pretty: 2 },
      },
      {
        t: "The way I carry myself",
        s: { elegant_pretty: 2 },
      },
      {
        t: "My playful and lovable energy",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "The sense that there’s more to me than I show",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "Which color palette feels most like your beauty?",
    opts: [
      {
        t: "Cream, blush, and soft beige",
        s: { soft_pretty: 2 },
      },
      {
        t: "Black, ivory, champagne, and muted gold",
        s: { elegant_pretty: 2 },
      },
      {
        t: "Peach, pink, butter yellow, and sky blue",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "Silver, moon white, dusty blue, and midnight tones",
        s: { ethereal_pretty: 2, mysterious_pretty: 1 },
      },
    ],
  },
  {
    q: "What kind of presence do you have in a room?",
    opts: [
      {
        t: "Quietly soothing",
        s: { soft_pretty: 2 },
      },
      {
        t: "Composed and memorable",
        s: { elegant_pretty: 2 },
      },
      {
        t: "Bright and instantly lovable",
        s: { sunny_pretty: 2, cute_pretty: 1 },
      },
      {
        t: "Subtle but impossible to fully forget",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "What kind of charm feels most like you in everyday life?",
    opts: [
      {
        t: "The kind that quietly comforts people",
        s: { soft_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "The kind that feels refined and self-possessed",
        s: { elegant_pretty: 2 },
      },
      {
        t: "The kind that feels bubbly, sweet, and easy to adore",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "The kind that feels distant in a beautiful way",
        s: { ethereal_pretty: 2, mysterious_pretty: 1 },
      },
    ],
  },
  {
    q: "What kind of reaction do you most often create?",
    opts: [
      {
        t: "People soften around me",
        s: { soft_pretty: 2 },
      },
      {
        t: "People notice my elegance even when I am quiet",
        s: { elegant_pretty: 2 },
      },
      {
        t: "People smile or feel lighter around me",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "People get curious and want to figure me out",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "Which kind of beauty detail feels closest to your energy?",
    opts: [
      {
        t: "Soft eyes, gentle tone, and calming warmth",
        s: { soft_pretty: 2 },
      },
      {
        t: "Clean lines, polished style, and graceful composure",
        s: { elegant_pretty: 2 },
      },
      {
        t: "Bright expression, sweet charm, and lively warmth",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "Dreamy atmosphere, distant glow, and quiet intensity",
        s: { ethereal_pretty: 2, mysterious_pretty: 1 },
      },
    ],
  },
  {
    q: "If someone remembered one thing about your beauty, what would it be?",
    opts: [
      {
        t: "How comforting my presence felt",
        s: { soft_pretty: 2 },
      },
      {
        t: "How elegant and put-together I seemed",
        s: { elegant_pretty: 2 },
      },
      {
        t: "How charming and lovable I felt",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "How hard I was to fully forget",
        s: { mysterious_pretty: 2, ethereal_pretty: 1 },
      },
    ],
  },
  {
    q: "At your core, what kind of pretty are you?",
    opts: [
      {
        t: "The kind that feels soft and healing",
        s: { soft_pretty: 2 },
      },
      {
        t: "The kind that feels elegant and magnetic",
        s: { elegant_pretty: 2 },
      },
      {
        t: "The kind that feels sweet and radiant",
        s: { cute_pretty: 2, sunny_pretty: 1 },
      },
      {
        t: "The kind that feels dreamy and unforgettable",
        s: { ethereal_pretty: 2, mysterious_pretty: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "soft_pretty",
    "elegant_pretty",
    "cute_pretty",
    "mysterious_pretty",
    "sunny_pretty",
    "ethereal_pretty",
  ];

  let best: ResultKey = "soft_pretty";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function KindOfPrettyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    soft_pretty: 0,
    elegant_pretty: 0,
    cute_pretty: 0,
    mysterious_pretty: 0,
    sunny_pretty: 0,
    ethereal_pretty: 0,
  });

  const progress = useMemo(() => {
    return ((current + 1) / questions.length) * 100;
  }, [current]);

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
      router.push(`/result/kind-of-pretty?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "36px 18px 60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(760px, 100%)", textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#9d174d",
            textTransform: "uppercase",
          }}
        >
          Beauty Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Kind of Pretty Are You? ✨
        </h1>

        <p
          style={{
            margin: "0 auto 18px",
            color: "#4b5563",
            fontSize: "16px",
            lineHeight: 1.8,
            maxWidth: "680px",
          }}
        >
          Discover the kind of beauty energy you naturally give off. This quiz
          explores whether your presence feels soft, elegant, cute, mysterious,
          sunny, or ethereal — not just in appearance, but in the emotional
          atmosphere you create.
        </p>

        <div
          style={{
            width: "100%",
            height: "12px",
            borderRadius: "999px",
            background: "rgba(255,255,255,0.8)",
            border: "1px solid #fbcfe8",
            overflow: "hidden",
            marginBottom: "12px",
          }}
        >
          <div
            style={{
              width: `${progress}%`,
              height: "100%",
              background: "linear-gradient(90deg, #fb7185 0%, #f59e0b 100%)",
              borderRadius: "999px",
              transition: "width 0.25s ease",
            }}
          />
        </div>

        <p
          style={{
            marginBottom: "20px",
            color: "#374151",
            fontSize: "16px",
            fontWeight: 700,
          }}
        >
          Question {current + 1} of {questions.length}
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.78)",
            border: "1px solid #f2a7b8",
            borderRadius: "18px",
            padding: "24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
          }}
        >
          <h2
            style={{
              marginBottom: "20px",
              color: "#374151",
              fontSize: "24px",
              lineHeight: 1.45,
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
                  padding: "14px 18px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                  lineHeight: 1.5,
                  width: "min(560px, 100%)",
                  fontWeight: 600,
                  boxShadow: "0 8px 18px rgba(251, 113, 133, 0.18)",
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
            background: "rgba(255, 255, 255, 0.65)",
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
            background: "rgba(255,255,255,0.76)",
            border: "1px solid #f2d2db",
            borderRadius: "18px",
            padding: "26px",
            color: "#374151",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <h2
            style={{
              fontSize: "25px",
              fontWeight: 700,
              marginTop: 0,
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
            This beauty personality quiz is designed to help you discover what
            kind of pretty energy you naturally carry. Beauty is not only about
            facial features, makeup style, or fashion choices. It is also about
            atmosphere, emotional tone, and the feeling your presence creates in
            other people. Some beauty feels soft and comforting. Some feels
            polished and elegant. Some feels playful, bright, mysterious, or
            almost unreal.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            That is why this test focuses on vibe as much as appearance. It
            looks at how your presence lands in a room, what kind of compliments
            fit you best, what sort of aesthetic world feels most natural to
            you, and what kind of emotional impression your beauty tends to
            leave behind. In other words, it explores not only how pretty you
            are, but what kind of pretty people feel from you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of short but revealing questions, you can
            discover whether your beauty is closest to Soft Pretty, Elegant
            Pretty, Cute Pretty, Mysterious Pretty, Sunny Pretty, or Ethereal
            Pretty. The result is meant to be flattering, reflective, easy to
            share, and surprisingly accurate in the way it captures your beauty
            vibe.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why beauty vibe matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Beauty vibe matters because people often respond to energy before
            they fully process details. Long before someone explains why they
            find another person attractive, they usually feel something first.
            It might be softness, brightness, elegance, mystery, sweetness, or
            dreaminess. That emotional impression becomes part of what makes
            someone memorable.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your beauty vibe can also be useful in everyday life.
            It can help you recognize what kind of style, mood, aesthetic, and
            self-expression feel most aligned with you. Instead of chasing every
            trend, you can start noticing what already works naturally with your
            presence. That often leads to a stronger sense of confidence and a
            more genuine kind of beauty.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            How to use your result
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Once you receive your result, try to see it as a reflection of your
            most natural beauty energy rather than a rule you have to follow.
            Most people contain more than one type of beauty. You may be soft
            with a little mystery, elegant with a sunny undertone, or cute with
            an ethereal edge. But there is usually one kind of atmosphere that
            feels most effortless and most recognizably yours.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A useful next step is to compare your result with the way people
            actually respond to you. What kind of compliments do you receive
            most often? What kind of color palette, styling, or mood tends to
            make you feel most like yourself? What kind of presence do people
            seem to remember after you leave a room? Those details often reveal
            your real beauty energy more clearly than trends ever could.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you build a more intentional aesthetic.
            Soft Pretty types may lean into comfort, glow, and tenderness.
            Elegant Pretty types may shine in refined simplicity. Cute Pretty
            types often come alive through brightness and charm. Mysterious
            Pretty types carry quiet magnetism. Sunny Pretty types radiate
            warmth and light. Ethereal Pretty types feel dreamy, delicate, and
            almost untouchable. Each one is attractive in a different way.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            What this test explores
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            This test explores first impressions, emotional atmosphere,
            self-expression, visual softness or sharpness, and the kind of
            aesthetic feeling that surrounds your beauty. It looks beyond narrow
            standards and focuses instead on the more personal question of how
            your beauty feels. That feeling is often what makes someone stand
            out.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than trying to rank beauty, this quiz treats beauty as a set
            of emotional styles. Some beauty invites. Some glows. Some lingers.
            Some soothes. Some dazzles. The goal is to capture your most natural
            beauty mode in a way that feels fun, affirming, and emotionally
            true.
          </p>

          <h3
            style={{
              fontSize: "21px",
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
              marginTop: 0,
              marginBottom: "18px",
            }}
          >
            <li>Soft Pretty</li>
            <li>Elegant Pretty</li>
            <li>Cute Pretty</li>
            <li>Mysterious Pretty</li>
            <li>Sunny Pretty</li>
            <li>Ethereal Pretty</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a fuller explanation of your beauty vibe,
            your emotional presence, the kind of impression you leave behind,
            and why people may be drawn to you in the way they are. In that
            sense, this is not only a fun pretty quiz. It is also a small
            reflection on the atmosphere your presence naturally creates.
          </p>
        </section>
      </div>
    </main>
  );
}