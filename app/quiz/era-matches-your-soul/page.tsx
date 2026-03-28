"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "victorian"
  | "roaring20s"
  | "oldhollywood"
  | "bohemian70s"
  | "grunge90s"
  | "y2k";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of beauty feels most like home to your soul?",
    opts: [
      { t: "Soft candlelight, handwritten letters, and timeless romance", s: { victorian: 2, oldhollywood: 1 } },
      { t: "Champagne sparkle, jazz, parties, and glamorous movement", s: { roaring20s: 2, oldhollywood: 1 } },
      { t: "Elegant silhouettes, silver screens, and cinematic mystery", s: { oldhollywood: 2, victorian: 1 } },
      { t: "Sunlight, wildflowers, freedom, and artistic warmth", s: { bohemian70s: 2 } },
      { t: "Rainy streets, thrifted clothes, and raw emotion", s: { grunge90s: 2 } },
      { t: "Glossy pop culture, digital dreams, and playful confidence", s: { y2k: 2 } },
    ],
  },
  {
    q: "What kind of life would feel most natural to you?",
    opts: [
      { t: "A quiet life full of meaning, poetry, and emotional depth", s: { victorian: 2 } },
      { t: "A fast and sparkling life full of people, music, and excitement", s: { roaring20s: 2, y2k: 1 } },
      { t: "A polished and glamorous life with hidden complexity", s: { oldhollywood: 2 } },
      { t: "A free-spirited life built around creativity and self-discovery", s: { bohemian70s: 2 } },
      { t: "A real and unfiltered life where nothing feels fake", s: { grunge90s: 2 } },
      { t: "A bold and expressive life where reinvention is always possible", s: { y2k: 2, roaring20s: 1 } },
    ],
  },
  {
    q: "Which mood do you return to again and again?",
    opts: [
      { t: "Longing, tenderness, and old-soul emotion", s: { victorian: 2 } },
      { t: "Joy, motion, and electric social energy", s: { roaring20s: 2 } },
      { t: "Mystery, elegance, and emotional restraint", s: { oldhollywood: 2, victorian: 1 } },
      { t: "Warmth, softness, and soulful freedom", s: { bohemian70s: 2 } },
      { t: "Intensity, melancholy, and quiet rebellion", s: { grunge90s: 2 } },
      { t: "Fun, sparkle, and a little chaos", s: { y2k: 2 } },
    ],
  },
  {
    q: "If your wardrobe could tell your story, what would it say?",
    opts: [
      { t: "Romantic, delicate, and full of detail", s: { victorian: 2, oldhollywood: 1 } },
      { t: "Daring, dazzling, and made to stand out", s: { roaring20s: 2, y2k: 1 } },
      { t: "Refined, iconic, and impossibly elegant", s: { oldhollywood: 2 } },
      { t: "Soft, earthy, expressive, and artistic", s: { bohemian70s: 2 } },
      { t: "Layered, undone, and effortlessly real", s: { grunge90s: 2 } },
      { t: "Playful, shiny, experimental, and fearless", s: { y2k: 2 } },
    ],
  },
  {
    q: "What kind of connection feels most meaningful to you?",
    opts: [
      { t: "Deep devotion that feels almost written in fate", s: { victorian: 2 } },
      { t: "Magnetic chemistry and unforgettable nights", s: { roaring20s: 2, oldhollywood: 1 } },
      { t: "A love that feels iconic, private, and cinematic", s: { oldhollywood: 2 } },
      { t: "Soulful connection built on freedom and honesty", s: { bohemian70s: 2 } },
      { t: "A bond that accepts the messy, real parts of me", s: { grunge90s: 2 } },
      { t: "Flirty, fun, expressive connection with lots of energy", s: { y2k: 2 } },
    ],
  },
  {
    q: "What kind of art pulls you in the most?",
    opts: [
      { t: "Poetry, paintings, and stories filled with longing", s: { victorian: 2 } },
      { t: "Jazz, glittering nightlife, and dazzling performance", s: { roaring20s: 2 } },
      { t: "Classic cinema, dramatic portraits, and timeless icons", s: { oldhollywood: 2 } },
      { t: "Music that feels earthy, spiritual, and free", s: { bohemian70s: 2 } },
      { t: "Art that feels raw, emotional, and a little broken", s: { grunge90s: 2 } },
      { t: "Pop visuals, glossy magazines, and futuristic fun", s: { y2k: 2 } },
    ],
  },
  {
    q: "What do you secretly wish the world had more of?",
    opts: [
      { t: "Depth, sincerity, and romance", s: { victorian: 2 } },
      { t: "Celebration, glamour, and fearless fun", s: { roaring20s: 2, y2k: 1 } },
      { t: "Grace, mystery, and unforgettable presence", s: { oldhollywood: 2 } },
      { t: "Freedom, creativity, and gentleness", s: { bohemian70s: 2 } },
      { t: "Truth, emotion, and less pretending", s: { grunge90s: 2 } },
      { t: "Playfulness, self-expression, and bold individuality", s: { y2k: 2 } },
    ],
  },
  {
    q: "When you imagine your ideal room, what does it look like?",
    opts: [
      { t: "Antique books, lace curtains, candles, and pressed flowers", s: { victorian: 2 } },
      { t: "Gold details, velvet, music, and party energy", s: { roaring20s: 2 } },
      { t: "Soft lighting, mirrors, elegance, and classic beauty", s: { oldhollywood: 2 } },
      { t: "Plants, records, art, and warm sunlight", s: { bohemian70s: 2 } },
      { t: "Posters, darker tones, and beautifully imperfect chaos", s: { grunge90s: 2 } },
      { t: "Chrome, pink, glossy accents, and cute tech", s: { y2k: 2 } },
    ],
  },
  {
    q: "What kind of strength feels most like yours?",
    opts: [
      { t: "Emotional endurance and quiet devotion", s: { victorian: 2 } },
      { t: "Charisma, boldness, and fearless presence", s: { roaring20s: 2 } },
      { t: "Composure, elegance, and magnetic mystery", s: { oldhollywood: 2 } },
      { t: "Inner freedom and creative authenticity", s: { bohemian70s: 2 } },
      { t: "Honesty, resilience, and staying real", s: { grunge90s: 2 } },
      { t: "Confidence, adaptability, and playful reinvention", s: { y2k: 2 } },
    ],
  },
  {
    q: "Which setting feels like it could hold your soul?",
    opts: [
      { t: "A misty garden, a manor library, or a rainy window seat", s: { victorian: 2 } },
      { t: "A glittering ballroom or jazz club at midnight", s: { roaring20s: 2 } },
      { t: "A film set, a luxury hotel, or a city glowing after dark", s: { oldhollywood: 2 } },
      { t: "A road trip, a music festival, or a sunlit studio", s: { bohemian70s: 2 } },
      { t: "A record shop, a dim café, or a city corner in the rain", s: { grunge90s: 2 } },
      { t: "A mall at night, a neon room, or a pop-filled bedroom", s: { y2k: 2 } },
    ],
  },
  {
    q: "How do people often experience your energy?",
    opts: [
      { t: "Soft, romantic, and emotionally deep", s: { victorian: 2 } },
      { t: "Bright, magnetic, and impossible to ignore", s: { roaring20s: 2, y2k: 1 } },
      { t: "Elegant, composed, and a little hard to fully read", s: { oldhollywood: 2 } },
      { t: "Warm, soulful, and gently freeing", s: { bohemian70s: 2 } },
      { t: "Quietly intense, honest, and unforgettable", s: { grunge90s: 2 } },
      { t: "Fun, expressive, and full of personality", s: { y2k: 2 } },
    ],
  },
  {
    q: "Which era matches your soul the most?",
    opts: [
      { t: "The Victorian era", s: { victorian: 2 } },
      { t: "The Roaring Twenties", s: { roaring20s: 2 } },
      { t: "Old Hollywood", s: { oldhollywood: 2 } },
      { t: "The bohemian 1970s", s: { bohemian70s: 2 } },
      { t: "The grunge 1990s", s: { grunge90s: 2 } },
      { t: "The Y2K 2000s", s: { y2k: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "victorian",
    "roaring20s",
    "oldhollywood",
    "bohemian70s",
    "grunge90s",
    "y2k",
  ];

  let best: ResultKey = "victorian";
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
    victorian: 0,
    roaring20s: 0,
    oldhollywood: 0,
    bohemian70s: 0,
    grunge90s: 0,
    y2k: 0,
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
          Discover the time period your soul feels most drawn to. This personality
          quiz explores whether your inner energy belongs to the Victorian era,
          the Roaring Twenties, Old Hollywood, the bohemian 1970s, the grunge
          1990s, or the Y2K 2000s.
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
            This era personality quiz is designed to reveal which time period
            your inner self feels most connected to. Some people carry the
            romantic depth of the Victorian era, while others feel more at home
            in the glamour of Old Hollywood, the sparkle of the Roaring
            Twenties, the freedom of the 1970s, the emotional rawness of the
            1990s, or the playful boldness of the Y2K era.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            This is not really about history trivia. It is about emotional
            atmosphere, aesthetic instinct, and the kind of energy your soul
            keeps returning to. The result is meant to feel reflective, fun, and
            easy to share with friends.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of mood-based questions, you can discover the
            era that best reflects your taste, emotional rhythm, and symbolic
            style. It is a playful personality mirror, but it can also say
            something meaningful about what kind of beauty, freedom, or depth
            you naturally seek.
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
            <li>The Victorian Era</li>
            <li>The Roaring Twenties</li>
            <li>Old Hollywood</li>
            <li>The Bohemian 1970s</li>
            <li>The Grunge 1990s</li>
            <li>The Y2K 2000s</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result can later include a deeper explanation of your emotional
            energy, aesthetic style, personal strengths, and the kind of world
            your soul seems to belong in.
          </p>
        </section>
      </div>
    </main>
  );
}