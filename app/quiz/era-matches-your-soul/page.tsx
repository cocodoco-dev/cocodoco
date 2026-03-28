"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "vintage_romance"
  | "roaring_twenties"
  | "golden_hollywood"
  | "free_spirit_70s"
  | "nostalgic_90s"
  | "y2k_dream";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of atmosphere feels most like home to your soul?",
    opts: [
      {
        t: "Soft candlelight, handwritten letters, and quiet longing",
        s: { vintage_romance: 2, golden_hollywood: 1 },
      },
      {
        t: "Champagne, jazz, glitter, and a room full of excitement",
        s: { roaring_twenties: 2, y2k_dream: 1 },
      },
      {
        t: "Warm film cameras, emotional music, and timeless glamour",
        s: { golden_hollywood: 2, vintage_romance: 1 },
      },
      {
        t: "Freedom, color, self-expression, and playful rebellion",
        s: { free_spirit_70s: 2, nostalgic_90s: 1 },
      },
    ],
  },
  {
    q: "If you could step into one kind of daily life, what would you choose?",
    opts: [
      {
        t: "Writing poetry by the window while the rain falls outside",
        s: { vintage_romance: 2 },
      },
      {
        t: "Dancing all night in a glamorous city full of possibility",
        s: { roaring_twenties: 2, golden_hollywood: 1 },
      },
      {
        t: "Living beautifully, dressing elegantly, and feeling cinematic",
        s: { golden_hollywood: 2, y2k_dream: 1 },
      },
      {
        t: "Road trips, mixtapes, and doing life your own way",
        s: { nostalgic_90s: 2, free_spirit_70s: 1 },
      },
    ],
  },
  {
    q: "What kind of beauty pulls you in the most?",
    opts: [
      {
        t: "Something delicate, romantic, and almost tragic",
        s: { vintage_romance: 2 },
      },
      {
        t: "Something bold, flashy, and impossible to ignore",
        s: { roaring_twenties: 2, y2k_dream: 1 },
      },
      {
        t: "Something graceful, polished, and effortlessly iconic",
        s: { golden_hollywood: 2 },
      },
      {
        t: "Something raw, colorful, carefree, and full of personality",
        s: { free_spirit_70s: 2, nostalgic_90s: 1 },
      },
    ],
  },
  {
    q: "When you imagine your ideal social life, what feels right?",
    opts: [
      {
        t: "A few deep bonds and soulful conversations",
        s: { vintage_romance: 2, nostalgic_90s: 1 },
      },
      {
        t: "Big parties, magnetic energy, and unforgettable nights",
        s: { roaring_twenties: 2, y2k_dream: 1 },
      },
      {
        t: "Elegant gatherings where everyone feels captivating",
        s: { golden_hollywood: 2, roaring_twenties: 1 },
      },
      {
        t: "Easygoing people, honesty, and freedom to be yourself",
        s: { free_spirit_70s: 2, nostalgic_90s: 1 },
      },
    ],
  },
  {
    q: "Which kind of fashion feels most like your true energy?",
    opts: [
      {
        t: "Lace, flowing fabrics, antique details, and timeless romance",
        s: { vintage_romance: 2 },
      },
      {
        t: "Sequins, feathers, sparkle, and dramatic confidence",
        s: { roaring_twenties: 2 },
      },
      {
        t: "Classic silhouettes, polished elegance, and old-school glamour",
        s: { golden_hollywood: 2 },
      },
      {
        t: "Denim, playful layers, funky colors, or nostalgic street style",
        s: { nostalgic_90s: 2, free_spirit_70s: 1 },
      },
    ],
  },
  {
    q: "What kind of music feels closest to your inner world?",
    opts: [
      {
        t: "Tender songs that feel like secret love letters",
        s: { vintage_romance: 2 },
      },
      {
        t: "Jazz, swing, or anything that makes life feel sparkling",
        s: { roaring_twenties: 2 },
      },
      {
        t: "Orchestral, cinematic, or emotionally grand songs",
        s: { golden_hollywood: 2, vintage_romance: 1 },
      },
      {
        t: "Soulful grooves, indie nostalgia, or playful pop with attitude",
        s: { free_spirit_70s: 2, nostalgic_90s: 1, y2k_dream: 1 },
      },
    ],
  },
  {
    q: "What kind of energy do you naturally bring into a room?",
    opts: [
      {
        t: "Soft mystery and emotional depth",
        s: { vintage_romance: 2 },
      },
      {
        t: "Excitement, sparkle, and a little danger",
        s: { roaring_twenties: 2, y2k_dream: 1 },
      },
      {
        t: "Grace, presence, and quiet star quality",
        s: { golden_hollywood: 2 },
      },
      {
        t: "Warm individuality, ease, and a free spirit",
        s: { free_spirit_70s: 2, nostalgic_90s: 1 },
      },
    ],
  },
  {
    q: "If your soul had a preferred pace of life, what would it be?",
    opts: [
      {
        t: "Slow, meaningful, and emotionally rich",
        s: { vintage_romance: 2 },
      },
      {
        t: "Fast, thrilling, and full of social energy",
        s: { roaring_twenties: 2, y2k_dream: 1 },
      },
      {
        t: "Intentional, elegant, and beautifully composed",
        s: { golden_hollywood: 2 },
      },
      {
        t: "Loose, spontaneous, and open to adventure",
        s: { free_spirit_70s: 2, nostalgic_90s: 1 },
      },
    ],
  },
  {
    q: "Which kind of place would your soul most love to wander through?",
    opts: [
      {
        t: "An old library, a hidden garden, or a rainy European street",
        s: { vintage_romance: 2 },
      },
      {
        t: "A glittering ballroom or a jazz club alive after midnight",
        s: { roaring_twenties: 2 },
      },
      {
        t: "A classic movie set, vintage hotel, or glamorous city rooftop",
        s: { golden_hollywood: 2, y2k_dream: 1 },
      },
      {
        t: "A record shop, a festival field, or a nostalgic downtown block",
        s: { nostalgic_90s: 2, free_spirit_70s: 1 },
      },
    ],
  },
  {
    q: "What kind of love story feels most like yours?",
    opts: [
      {
        t: "Tender, poetic, and a little heartbreaking",
        s: { vintage_romance: 2 },
      },
      {
        t: "Passionate, dramatic, and impossible to forget",
        s: { roaring_twenties: 2, golden_hollywood: 1 },
      },
      {
        t: "Beautiful, devoted, and worthy of the big screen",
        s: { golden_hollywood: 2 },
      },
      {
        t: "Playful, real, and built on freedom and chemistry",
        s: { free_spirit_70s: 2, nostalgic_90s: 1, y2k_dream: 1 },
      },
    ],
  },
  {
    q: "Which sentence feels most like your soul?",
    opts: [
      {
        t: "I was made for beauty, longing, and meaning.",
        s: { vintage_romance: 2 },
      },
      {
        t: "Life should feel alive, dazzling, and unforgettable.",
        s: { roaring_twenties: 2, y2k_dream: 1 },
      },
      {
        t: "I want life to feel timeless, elegant, and cinematic.",
        s: { golden_hollywood: 2 },
      },
      {
        t: "I want to live freely and feel fully like myself.",
        s: { free_spirit_70s: 2, nostalgic_90s: 1 },
      },
    ],
  },
  {
    q: "Which era do you think your soul secretly belongs to?",
    opts: [
      {
        t: "A romantic old world full of feeling and poetry",
        s: { vintage_romance: 2 },
      },
      {
        t: "The roaring age of glamour, nightlife, and sparkle",
        s: { roaring_twenties: 2 },
      },
      {
        t: "The golden age of stars, drama, and elegance",
        s: { golden_hollywood: 2 },
      },
      {
        t: "A freer, more colorful, more expressive time",
        s: { free_spirit_70s: 2, nostalgic_90s: 1, y2k_dream: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "vintage_romance",
    "roaring_twenties",
    "golden_hollywood",
    "free_spirit_70s",
    "nostalgic_90s",
    "y2k_dream",
  ];

  let best: ResultKey = "vintage_romance";
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
    vintage_romance: 0,
    roaring_twenties: 0,
    golden_hollywood: 0,
    free_spirit_70s: 0,
    nostalgic_90s: 0,
    y2k_dream: 0,
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
          Soul Era Personality Test
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
          This personality quiz explores whether your energy belongs to a world
          of romance, glamour, rebellion, nostalgia, or dreamy transformation.
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
            This soul era quiz is designed to reveal which time period feels
            most naturally aligned with your inner emotional world. Sometimes
            people feel strangely connected to a certain era, not because they
            literally belong there, but because its beauty, rhythm, energy, or
            emotional tone mirrors something deep inside them.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some souls are drawn toward romance, softness, and old-world
            longing. Others are pulled toward glamour, rebellion, cinematic
            elegance, nostalgic simplicity, or playful reinvention. This test
            explores those emotional patterns through reflective questions about
            beauty, pace, love, atmosphere, and identity.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result is meant to feel personal, fun, and emotionally
            resonant. It is less about historical accuracy and more about inner
            symbolism. In other words, this is a personality mirror disguised as
            an era test.
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
              marginBottom: 0,
            }}
          >
            <li>Vintage Romance</li>
            <li>Roaring Twenties</li>
            <li>Golden Hollywood</li>
            <li>Free Spirit 70s</li>
            <li>Nostalgic 90s</li>
            <li>Y2K Dream</li>
          </ul>
        </section>
      </div>
    </main>
  );
}