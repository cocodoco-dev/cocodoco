"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "moon"
  | "rose"
  | "fire"
  | "velvet"
  | "storm"
  | "starlight";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of presence feels most natural to you?",
    opts: [
      { t: "Quiet, dreamy, and a little hard to forget", s: { moon: 2, starlight: 1 } },
      { t: "Soft, romantic, and emotionally warm", s: { rose: 2, velvet: 1 } },
      { t: "Bold, magnetic, and impossible to ignore", s: { fire: 2, storm: 1 } },
      { t: "Deep, mysterious, and quietly powerful", s: { velvet: 2, moon: 1 } },
    ],
  },
  {
    q: "When people are drawn to you, what are they usually feeling?",
    opts: [
      { t: "A sense of mystery they want to understand", s: { moon: 2, storm: 1 } },
      { t: "Comfort, affection, and emotional closeness", s: { rose: 2, velvet: 1 } },
      { t: "Excitement, heat, and strong attraction", s: { fire: 2 } },
      { t: "Wonder, inspiration, or a feeling of magic", s: { starlight: 2, moon: 1 } },
    ],
  },
  {
    q: "Which kind of beauty feels most like your energy?",
    opts: [
      { t: "Silver light, silence, and soft longing", s: { moon: 2, starlight: 1 } },
      { t: "Blush tones, tenderness, and blooming emotion", s: { rose: 2 } },
      { t: "Red heat, confidence, and burning intensity", s: { fire: 2, storm: 1 } },
      { t: "Dark velvet, depth, and elegant mystery", s: { velvet: 2, moon: 1 } },
    ],
  },
  {
    q: "If your energy were a scene in a movie, what would it look like?",
    opts: [
      { t: "A moonlit window and someone quietly staring into the night", s: { moon: 2 } },
      { t: "A slow dance, soft smiles, and hands almost touching", s: { rose: 2, velvet: 1 } },
      { t: "A charged stare across a crowded room", s: { fire: 2, storm: 1 } },
      { t: "A glittering night sky that makes everything feel possible", s: { starlight: 2, moon: 1 } },
    ],
  },
  {
    q: "What do you naturally awaken in other people?",
    opts: [
      { t: "Curiosity, imagination, and a little obsession", s: { moon: 2, velvet: 1 } },
      { t: "Softness, vulnerability, and the desire to open up", s: { rose: 2 } },
      { t: "Desire, courage, and intense emotion", s: { fire: 2, storm: 1 } },
      { t: "Hope, inspiration, and a sense of wonder", s: { starlight: 2 } },
    ],
  },
  {
    q: "How do you tend to move through life emotionally?",
    opts: [
      { t: "Quietly, deeply, and in your own inner world", s: { moon: 2, velvet: 1 } },
      { t: "Through feeling, connection, and heartfelt moments", s: { rose: 2 } },
      { t: "With passion, instinct, and full emotional force", s: { fire: 2, storm: 1 } },
      { t: "With vision, possibility, and a touch of magic", s: { starlight: 2, moon: 1 } },
    ],
  },
  {
    q: "What kind of compliment fits you best?",
    opts: [
      { t: "You feel like a beautiful secret", s: { moon: 2, velvet: 1 } },
      { t: "You make people feel loved just by being yourself", s: { rose: 2 } },
      { t: "You have a dangerously attractive energy", s: { fire: 2, storm: 1 } },
      { t: "You make life feel brighter and more enchanting", s: { starlight: 2 } },
    ],
  },
  {
    q: "When your energy is strongest, what does it become?",
    opts: [
      { t: "Enchanting, reflective, and emotionally haunting", s: { moon: 2 } },
      { t: "Tender, nurturing, and deeply heartfelt", s: { rose: 2, velvet: 1 } },
      { t: "Electric, fearless, and impossible to resist", s: { fire: 2, storm: 1 } },
      { t: "Radiant, inspiring, and full of possibility", s: { starlight: 2 } },
    ],
  },
  {
    q: "Which kind of connection feels most aligned with your soul?",
    opts: [
      { t: "A quiet bond that feels fated and deeply understood", s: { moon: 2, velvet: 1 } },
      { t: "A sweet, safe connection full of sincerity", s: { rose: 2 } },
      { t: "A passionate bond that changes everything", s: { fire: 2, storm: 1 } },
      { t: "A rare connection that feels inspiring and larger than life", s: { starlight: 2 } },
    ],
  },
  {
    q: "What kind of atmosphere do you leave behind after you leave a room?",
    opts: [
      { t: "A lingering mystery that people keep thinking about", s: { moon: 2, velvet: 1 } },
      { t: "Warmth, softness, and emotional sweetness", s: { rose: 2 } },
      { t: "Tension, excitement, and undeniable impact", s: { fire: 2, storm: 1 } },
      { t: "Sparkle, wonder, and a lifted mood", s: { starlight: 2 } },
    ],
  },
  {
    q: "What part of yourself do you protect most?",
    opts: [
      { t: "My inner world and the parts of me not everyone gets to see", s: { moon: 2, velvet: 1 } },
      { t: "My heart and the sincerity of what I feel", s: { rose: 2 } },
      { t: "My fire, freedom, and emotional intensity", s: { fire: 2, storm: 1 } },
      { t: "My dreams, light, and sense of possibility", s: { starlight: 2 } },
    ],
  },
  {
    q: "What kind of muse are you?",
    opts: [
      { t: "The Moon Muse", s: { moon: 2 } },
      { t: "The Rose Muse", s: { rose: 2 } },
      { t: "The Fire Muse", s: { fire: 2 } },
      { t: "The Velvet Muse", s: { velvet: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "moon",
    "rose",
    "fire",
    "velvet",
    "storm",
    "starlight",
  ];

  let best: ResultKey = "moon";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function WhatKindOfMuseAreYouQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    moon: 0,
    rose: 0,
    fire: 0,
    velvet: 0,
    storm: 0,
    starlight: 0,
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
      router.push(`/result/what-kind-of-muse-are-you?type=${top}`);
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
          Muse Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Kind of Muse Are You? ✨
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
          Discover the kind of inspiration your energy gives off. This personality
          quiz explores whether your presence feels most like the Moon Muse, Rose
          Muse, Fire Muse, Velvet Muse, Storm Muse, or Starlight Muse.
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
            This muse personality quiz is designed to reveal the kind of
            inspirational energy your presence naturally carries. A muse is not
            only someone beautiful or admired. A muse is a feeling, an atmosphere,
            and a type of emotional effect. Some people inspire through softness.
            Some through mystery. Some through passion. Some through elegance,
            intensity, or wonder. This test explores which kind of muse your
            inner energy most resembles.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people feel like the Moon Muse, quiet, dreamy, and hard to
            forget. Others reflect the warmth of the Rose Muse, the intensity of
            the Fire Muse, the depth of the Velvet Muse, the force of the Storm
            Muse, or the rare glow of the Starlight Muse. None of these results
            are better than the others. They simply describe different ways your
            energy moves people emotionally.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover what
            kind of muse-like presence you naturally carry into relationships,
            social spaces, creativity, and first impressions. The result is meant
            to feel expressive, emotional, and easy to share. It is a fun
            personality quiz, but it can also act as a mirror for the kind of
            atmosphere your soul leaves behind.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why muse energy matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Muse energy matters because people do not only respond to what you
            say or do. They also respond to what they feel around you. Some
            people bring comfort. Some awaken curiosity. Some create longing,
            courage, tenderness, or transformation. Your presence has an effect,
            even when you are not trying to control it.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your muse energy can help you better recognize what
            people are often picking up from you emotionally. It may explain why
            others experience you as mysterious, warm, magnetic, inspiring, or
            intense. It can also reveal the kind of beauty and emotional power
            you naturally express without having to force it.
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
            Once you get your result, try to see it as a reflection of your
            emotional atmosphere rather than a fixed label. Most people contain
            more than one kind of beauty or energy. You may relate to multiple
            muse types, but one usually feels especially central to the way your
            presence affects others.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare the result with your real life.
            What kind of feeling do people often describe when they talk about
            you? What kind of connections do you tend to create? Do people open
            up around you, become intrigued, feel inspired, or feel emotionally
            pulled in? The more honestly you reflect, the more meaningful the
            result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you understand both your strengths and your
            blind spots. The Moon Muse may need grounding. The Rose Muse may need
            boundaries. The Fire Muse may need direction. The Velvet Muse may
            need openness. The Storm Muse may need calm. The Starlight Muse may
            need consistency. Growth begins when you honor your natural energy
            without being controlled by its extremes.
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
            This test explores the emotional tone of your presence. It looks at
            what people are drawn to in you, what kind of beauty feels most
            natural to your soul, what atmosphere you leave behind, and what kind
            of emotional response your energy tends to awaken in others.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface personality traits, this quiz
            tries to reflect the more symbolic and emotional feeling of who you
            are. That is why the questions are designed to feel atmospheric,
            expressive, and a little cinematic. The goal is not only to tell you
            what kind of person you are, but to reveal the kind of inspiration
            your energy becomes in the eyes and hearts of others.
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
            <li>The Moon Muse</li>
            <li>The Rose Muse</li>
            <li>The Fire Muse</li>
            <li>The Velvet Muse</li>
            <li>The Storm Muse</li>
            <li>The Starlight Muse</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your emotional
            presence, your symbolic beauty, your strengths, your challenges, and
            the kind of impact your energy naturally leaves on other people. In
            that sense, this is not only a fun muse quiz. It is also a reflection
            on the kind of feeling you bring into the world just by being who
            you are.
          </p>
        </section>
      </div>
    </main>
  );
}