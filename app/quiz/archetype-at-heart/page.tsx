"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "dreamer"
  | "lover"
  | "sage"
  | "rebel"
  | "guardian"
  | "magician";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What feels most natural to your inner self?",
    opts: [
      { t: "Imagining what life could be", s: { dreamer: 2, magician: 1 } },
      { t: "Loving deeply and feeling everything fully", s: { lover: 2, guardian: 1 } },
      { t: "Seeking truth, meaning, and understanding", s: { sage: 2, magician: 1 } },
      { t: "Wanting freedom and resisting what feels false", s: { rebel: 2 } },
    ],
  },
  {
    q: "When life gets hard, what instinct rises first?",
    opts: [
      { t: "Escape into hope, imagination, or possibility", s: { dreamer: 2, magician: 1 } },
      { t: "Hold onto the people and feelings that matter most", s: { lover: 2, guardian: 1 } },
      { t: "Step back and try to understand what is really happening", s: { sage: 2 } },
      { t: "Push back against what feels unfair or limiting", s: { rebel: 2 } },
    ],
  },
  {
    q: "What kind of power feels most true to you?",
    opts: [
      { t: "The power of vision and imagination", s: { dreamer: 2 } },
      { t: "The power of connection and devotion", s: { lover: 2, guardian: 1 } },
      { t: "The power of wisdom and clarity", s: { sage: 2 } },
      { t: "The power of transformation and breaking old rules", s: { magician: 2, rebel: 1 } },
    ],
  },
  {
    q: "What role do you often play in other people’s lives?",
    opts: [
      { t: "The one who inspires possibility", s: { dreamer: 2, magician: 1 } },
      { t: "The one who loves, nurtures, and feels deeply", s: { lover: 2, guardian: 1 } },
      { t: "The one who sees clearly and gives perspective", s: { sage: 2 } },
      { t: "The one who challenges comfort and sparks change", s: { rebel: 2, magician: 1 } },
    ],
  },
  {
    q: "Which sentence feels most like your soul?",
    opts: [
      { t: "There has to be something more beautiful ahead.", s: { dreamer: 2 } },
      { t: "What matters most is what I love and protect.", s: { lover: 2, guardian: 1 } },
      { t: "I need to understand what is real.", s: { sage: 2 } },
      { t: "I cannot become small just to fit in.", s: { rebel: 2 } },
    ],
  },
  {
    q: "What kind of energy do people often feel from you?",
    opts: [
      { t: "Soft hope and emotional imagination", s: { dreamer: 2 } },
      { t: "Warmth, intimacy, and emotional presence", s: { lover: 2, guardian: 1 } },
      { t: "Depth, thoughtfulness, and calm insight", s: { sage: 2 } },
      { t: "Intensity, change, and a little danger", s: { rebel: 2, magician: 1 } },
    ],
  },
  {
    q: "What do you most want your life to become?",
    opts: [
      { t: "A meaningful story full of beauty and possibility", s: { dreamer: 2 } },
      { t: "A life built around real love and emotional truth", s: { lover: 2, guardian: 1 } },
      { t: "A life shaped by wisdom, truth, and understanding", s: { sage: 2 } },
      { t: "A life that changes things in a real way", s: { magician: 2, rebel: 1 } },
    ],
  },
  {
    q: "When someone you care about is struggling, what do you naturally do?",
    opts: [
      { t: "Help them see hope, possibility, or a brighter future", s: { dreamer: 2, magician: 1 } },
      { t: "Stay close, comfort them, and offer emotional warmth", s: { lover: 2, guardian: 1 } },
      { t: "Listen carefully and offer thoughtful perspective", s: { sage: 2 } },
      { t: "Encourage them to break out of what is trapping them", s: { rebel: 2, magician: 1 } },
    ],
  },
  {
    q: "What do you protect most fiercely?",
    opts: [
      { t: "My vision, ideals, and inner world", s: { dreamer: 2 } },
      { t: "My relationships and emotional bonds", s: { lover: 2, guardian: 1 } },
      { t: "My truth and intellectual honesty", s: { sage: 2 } },
      { t: "My freedom and authenticity", s: { rebel: 2 } },
    ],
  },
  {
    q: "Which kind of beauty pulls you in the most?",
    opts: [
      { t: "Something poetic, soft, and full of longing", s: { dreamer: 2, lover: 1 } },
      { t: "Something intimate, heartfelt, and deeply human", s: { lover: 2, guardian: 1 } },
      { t: "Something quiet, profound, and meaningful", s: { sage: 2 } },
      { t: "Something strange, powerful, and transformative", s: { magician: 2, rebel: 1 } },
    ],
  },
  {
    q: "When you enter a new chapter of life, what leads you forward?",
    opts: [
      { t: "Hope for what could bloom next", s: { dreamer: 2 } },
      { t: "Love, loyalty, and emotional purpose", s: { lover: 2, guardian: 1 } },
      { t: "A deeper understanding of what matters", s: { sage: 2 } },
      { t: "The desire to reinvent, disrupt, or transform", s: { magician: 2, rebel: 1 } },
    ],
  },
  {
    q: "At your core, which archetype are you at heart?",
    opts: [
      { t: "The Dreamer", s: { dreamer: 2 } },
      { t: "The Lover", s: { lover: 2, guardian: 1 } },
      { t: "The Sage", s: { sage: 2 } },
      { t: "The Rebel", s: { rebel: 2, magician: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "dreamer",
    "lover",
    "sage",
    "rebel",
    "guardian",
    "magician",
  ];

  let best: ResultKey = "dreamer";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ArchetypeAtHeartQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    dreamer: 0,
    lover: 0,
    sage: 0,
    rebel: 0,
    guardian: 0,
    magician: 0,
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
      router.push(`/result/archetype-at-heart?type=${top}`);
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
          Archetype Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Which Archetype Are You at Heart? 🗝️
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
          Discover the deeper symbolic energy your soul returns to again and
          again. This personality quiz explores whether your inner self is most
          aligned with the Dreamer, Lover, Sage, Rebel, Guardian, or Magician.
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
            This archetype personality quiz is designed to help you discover the
            symbolic role your inner self most naturally reflects. An archetype
            is more than a label. It is a recurring emotional pattern, a style
            of energy, and a way of moving through life that feels deeply
            familiar to your core. Even when your circumstances change, certain
            instincts tend to repeat: how you dream, how you love, how you
            protect, how you seek truth, and how you respond to change.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people carry the spirit of the Dreamer, always drawn toward
            beauty, longing, and possibility. Others move through life with the
            heart of the Lover, the perspective of the Sage, the fire of the
            Rebel, the steadiness of the Guardian, or the transformative power
            of the Magician. None of these energies are better than the others.
            They simply describe different ways people create meaning, form
            identity, and shape their lives.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover
            which archetype your heart returns to most naturally. The result is
            meant to be thoughtful, emotionally resonant, and easy to share. It
            can be a fun personality result, but it can also be a useful mirror
            for understanding your instincts, values, and emotional direction.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why archetypes matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Archetypes matter because they give language to patterns that often
            feel difficult to explain. You may already sense that there is a
            certain role you keep playing in life. Perhaps you are always the
            one who sees beauty before others do. Perhaps you are the one who
            protects, questions, rebels, loves, or transforms. Archetypes help
            name that deeper pattern.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your archetype can make your inner life feel more
            coherent. It can help explain what motivates you, what drains you,
            what kind of meaning you seek, and what kind of energy you naturally
            bring into relationships, creativity, and personal growth. You may
            also notice that your archetype influences how you react to change,
            uncertainty, pressure, and emotional connection.
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
            Once you receive your result, try to use it as a starting point for
            reflection rather than a strict box. Most people are not made of one
            energy alone. You may relate to two or three archetypes, but one
            usually feels especially central. That core pattern often reveals
            what your soul leans on when life becomes emotionally meaningful.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your real life.
            What role do you naturally play in friendships, love, work, and
            difficult transitions? What kind of beauty or purpose pulls you
            forward? What do you protect most strongly? The more honestly you
            reflect, the more powerful your result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your archetype can also help you understand your strengths and your
            blind spots. The Dreamer may need grounding. The Lover may need
            boundaries. The Sage may need to trust feeling as much as thought.
            The Rebel may need direction. The Guardian may need rest. The
            Magician may need stability. Growth often begins when you learn to
            honor your deepest energy without being ruled by its extremes.
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
            This test looks at several dimensions of personality and inner
            identity. It explores how you respond to difficulty, what kind of
            emotional power feels most natural to you, what you tend to protect,
            and what kind of role you often play in the lives of others. It also
            looks at how you imagine meaning, beauty, truth, love, change, and
            transformation.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface traits, this quiz tries to get
            closer to the emotional and symbolic energy at the center of your
            personality. That is why the questions are designed to feel
            reflective rather than purely practical. The goal is not just to
            sort you into a category, but to reveal something about the deeper
            emotional role your heart recognizes as home.
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
            <li>The Dreamer</li>
            <li>The Lover</li>
            <li>The Sage</li>
            <li>The Rebel</li>
            <li>The Guardian</li>
            <li>The Magician</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your emotional style,
            your core strengths, your symbolic energy, and the kind of path your
            personality seems to be inviting you toward. In that sense, this is
            not only a fun archetype quiz. It is also a small reflection on who
            you are becoming.
          </p>
        </section>
      </div>
    </main>
  );
}