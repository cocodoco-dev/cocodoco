"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "roaring_20s"
  | "renaissance"
  | "victorian"
  | "retro_70s"
  | "ancient_classical"
  | "future_neon";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of world feels most emotionally magnetic to you?",
    opts: [
      {
        t: "A glamorous world of jazz, gold, and late-night celebration",
        s: { roaring_20s: 2, retro_70s: 1 },
      },
      {
        t: "A world of art, philosophy, beauty, and human brilliance",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "A quiet, romantic world full of letters, manners, and longing",
        s: { victorian: 2, renaissance: 1 },
      },
      {
        t: "A bold, expressive world full of rebellion, color, and freedom",
        s: { retro_70s: 2, future_neon: 1 },
      },
    ],
  },
  {
    q: "What kind of beauty feels most like home to your soul?",
    opts: [
      {
        t: "Sparkling parties, elegant fashion, and golden city nights",
        s: { roaring_20s: 2, victorian: 1 },
      },
      {
        t: "Paintings, marble, poetry, and timeless creativity",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Soft candlelight, rainy windows, and old-world romance",
        s: { victorian: 2, roaring_20s: 1 },
      },
      {
        t: "Neon lights, electric motion, and a future full of possibility",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
  {
    q: "If you could spend one perfect day anywhere, where would you go?",
    opts: [
      {
        t: "A rooftop party in a dazzling city full of music and champagne",
        s: { roaring_20s: 2 },
      },
      {
        t: "A sunlit studio filled with sketches, books, and ideas",
        s: { renaissance: 2, victorian: 1 },
      },
      {
        t: "A grand old house with gardens, tea, and handwritten notes",
        s: { victorian: 2 },
      },
      {
        t: "A futuristic city glowing with technology and endless movement",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
  {
    q: "What kind of energy do people often feel from you?",
    opts: [
      {
        t: "Charming, lively, and a little dazzling",
        s: { roaring_20s: 2, retro_70s: 1 },
      },
      {
        t: "Thoughtful, artistic, and quietly profound",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Gentle, deep, and emotionally romantic",
        s: { victorian: 2, renaissance: 1 },
      },
      {
        t: "Independent, unusual, and slightly ahead of your time",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
  {
    q: "Which kind of love story feels most meaningful to you?",
    opts: [
      {
        t: "A dramatic romance wrapped in glamour and unforgettable nights",
        s: { roaring_20s: 2, victorian: 1 },
      },
      {
        t: "A soulful connection built on beauty, intellect, and inspiration",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "A slow-burn romance filled with longing, devotion, and letters",
        s: { victorian: 2 },
      },
      {
        t: "A wild, unconventional connection that feels electric and free",
        s: { retro_70s: 2, future_neon: 1 },
      },
    ],
  },
  {
    q: "What kind of personal style feels most true to you?",
    opts: [
      {
        t: "Elegant, luxurious, and a little dramatic",
        s: { roaring_20s: 2, victorian: 1 },
      },
      {
        t: "Classic, refined, and artistically expressive",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Soft, romantic, and timelessly graceful",
        s: { victorian: 2 },
      },
      {
        t: "Bold, experimental, and impossible to box in",
        s: { retro_70s: 2, future_neon: 1 },
      },
    ],
  },
  {
    q: "What do you think your soul secretly craves most?",
    opts: [
      {
        t: "Excitement, sparkle, and a life that feels unforgettable",
        s: { roaring_20s: 2, future_neon: 1 },
      },
      {
        t: "Meaning, wisdom, and beauty that lasts across time",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Depth, tenderness, and emotional sincerity",
        s: { victorian: 2, renaissance: 1 },
      },
      {
        t: "Freedom, movement, and the thrill of something new",
        s: { retro_70s: 2, future_neon: 1 },
      },
    ],
  },
  {
    q: "Which setting would inspire you the most creatively?",
    opts: [
      {
        t: "A lively jazz club where everyone feels larger than life",
        s: { roaring_20s: 2 },
      },
      {
        t: "A historic city filled with sculpture, ideas, and masterpieces",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "A quiet room with old books, velvet curtains, and rainy skies",
        s: { victorian: 2 },
      },
      {
        t: "A glowing cyber city full of screens, motion, and new worlds",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
  {
    q: "What kind of strength feels most like yours?",
    opts: [
      {
        t: "Charisma, confidence, and social brilliance",
        s: { roaring_20s: 2 },
      },
      {
        t: "Wisdom, creativity, and depth of thought",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Loyalty, emotional endurance, and quiet devotion",
        s: { victorian: 2 },
      },
      {
        t: "Originality, courage, and fearless self-expression",
        s: { retro_70s: 2, future_neon: 1 },
      },
    ],
  },
  {
    q: "What kind of atmosphere are you most drawn to?",
    opts: [
      {
        t: "Golden lights, laughter, and glamorous movement",
        s: { roaring_20s: 2 },
      },
      {
        t: "Warm sunlight, marble halls, and thoughtful conversation",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Foggy mornings, old gardens, and beautiful melancholy",
        s: { victorian: 2 },
      },
      {
        t: "Neon nights, digital dreams, and restless energy",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
  {
    q: "When you imagine your most authentic self, what do you see?",
    opts: [
      {
        t: "Someone radiant, magnetic, and impossible to forget",
        s: { roaring_20s: 2 },
      },
      {
        t: "Someone wise, creative, and deeply connected to meaning",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "Someone tender, graceful, and full of emotional depth",
        s: { victorian: 2 },
      },
      {
        t: "Someone visionary, bold, and not confined by the present",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
  {
    q: "Which era do you think your soul belongs to most?",
    opts: [
      {
        t: "The Roaring Twenties",
        s: { roaring_20s: 2 },
      },
      {
        t: "The Renaissance",
        s: { renaissance: 2, ancient_classical: 1 },
      },
      {
        t: "The Victorian Era",
        s: { victorian: 2 },
      },
      {
        t: "A bold futuristic age",
        s: { future_neon: 2, retro_70s: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "roaring_20s",
    "renaissance",
    "victorian",
    "retro_70s",
    "ancient_classical",
    "future_neon",
  ];

  let best: ResultKey = "roaring_20s";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function EraMatchesYourSoulQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    roaring_20s: 0,
    renaissance: 0,
    victorian: 0,
    retro_70s: 0,
    ancient_classical: 0,
    future_neon: 0,
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
      router.push(`/result/era-matches-your-soul?type=${top}`);
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
          Era Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Which Era Matches Your Soul? ⏳
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
          Discover the time period your soul feels most emotionally connected to.
          This personality quiz explores whether your inner self belongs to the
          Roaring Twenties, the Renaissance, the Victorian Era, the Retro 70s,
          the Ancient Classical world, or a bold futuristic age.
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
            This era personality quiz is designed to help you discover which
            historical or symbolic time period feels most aligned with your inner
            world. Sometimes people feel emotionally connected to a certain era
            not because they literally belong there, but because its beauty,
            energy, values, and atmosphere reflect something deep inside them.
            The way you imagine love, freedom, creativity, elegance, meaning, or
            transformation can often reveal the kind of age your soul feels most
            at home in.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some souls are drawn to the glamour and sparkle of the Roaring
            Twenties. Others feel connected to the artistic brilliance of the
            Renaissance, the emotional depth of the Victorian era, the bold
            freedom of the Retro 70s, the timeless wisdom of the Ancient
            Classical world, or the visionary energy of a futuristic neon age.
            None of these eras are better than the others. They simply reflect
            different emotional atmospheres and different ways of moving through
            life.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover
            which era matches your soul most naturally. The result is meant to
            feel atmospheric, emotionally resonant, and easy to share. It is a
            fun personality result, but it can also act as a creative mirror for
            understanding the beauty, rhythm, and emotional tone that feel most
            true to you.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why eras matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Eras matter because they carry emotional symbolism. A time period is
            not only about dates, clothing, or architecture. It also represents
            a mood, a worldview, and a way of feeling life. That is why people
            are often drawn to certain historical aesthetics or atmospheres even
            without fully understanding why. Sometimes an era simply feels like
            home because it expresses something your inner self already values.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding what kind of era your soul connects to can help you
            understand what inspires you, what kind of beauty you seek, what
            kind of emotional world feels natural, and what kind of life energy
            you are trying to create. You may also notice that your result
            reveals something about how you approach love, creativity,
            self-expression, depth, freedom, and meaning.
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
            Once you receive your result, try to use it as a form of reflection
            rather than a strict identity. Most people contain pieces of more
            than one era. You may resonate with several atmospheres, but one
            usually feels especially central. That result often points to the
            emotional tone your soul naturally returns to when you imagine beauty
            and belonging.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your actual life.
            What kind of places, art, fashion, relationships, and stories pull
            you in most strongly? What kind of atmosphere makes you feel alive?
            What kind of values do you keep returning to even when life changes?
            The more honestly you reflect, the more meaningful your result
            becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your era result can also help you understand both your strengths and
            your blind spots. A soul drawn to glamour may need grounding. A soul
            drawn to romance may need boundaries. A soul drawn to wisdom may need
            spontaneity. A soul drawn to freedom may need direction. Growth
            often begins when you learn how to honor the atmosphere that feels
            true to you without getting lost in its extremes.
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
            This test explores several dimensions of your emotional and symbolic
            personality. It looks at what kind of beauty draws you in, what kind
            of lifestyle feels inspiring, what type of love story resonates with
            you, how your energy feels to others, and what kind of atmosphere
            your soul seems to crave most deeply.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface-level preferences, this quiz
            tries to reveal the era-like emotional world that feels most
            natural to your identity. That is why the questions are designed to
            feel reflective, aesthetic, and symbolic. The goal is not only to
            tell you what period you like, but to reveal what kind of emotional
            world your soul keeps recognizing as home.
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
            <li>The Roaring Twenties</li>
            <li>The Renaissance</li>
            <li>The Victorian Era</li>
            <li>The Retro 70s</li>
            <li>The Ancient Classical World</li>
            <li>The Future Neon Age</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your emotional style,
            your natural strengths, your symbolic atmosphere, and the kind of
            life energy your soul seems to be drawn toward. In that sense, this
            is not only a fun era quiz. It is also a creative reflection on the
            world your heart has been searching for all along.
          </p>
        </section>
      </div>
    </main>
  );
}