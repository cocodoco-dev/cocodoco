"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "soft-girl"
  | "cool-girl"
  | "it-girl"
  | "mysterious-girl"
  | "sunshine-girl"
  | "boss-girl";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of vibe feels most natural to you?",
    opts: [
      { t: "Soft, sweet, and emotionally warm", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "Effortless, confident, and a little distant", s: { "cool-girl": 2, "mysterious-girl": 1 } },
      { t: "Stylish, magnetic, and noticed everywhere", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "Quiet, intense, and hard to fully read", s: { "mysterious-girl": 2, "cool-girl": 1 } },
    ],
  },
  {
    q: "How do people usually remember you?",
    opts: [
      { t: "As someone gentle and comforting", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "As someone calm, composed, and effortlessly cool", s: { "cool-girl": 2 } },
      { t: "As someone striking and impossible to ignore", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "As someone intriguing they want to understand more", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "What kind of energy do you bring into a room?",
    opts: [
      { t: "Warmth, softness, and emotional ease", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "Chill confidence and understated presence", s: { "cool-girl": 2, "boss-girl": 1 } },
      { t: "Charisma, sparkle, and social gravity", s: { "it-girl": 2 } },
      { t: "Depth, silence, and curiosity", s: { "mysterious-girl": 2, "cool-girl": 1 } },
    ],
  },
  {
    q: "What feels most important in your personal style?",
    opts: [
      { t: "Looking cute, tender, and emotionally expressive", s: { "soft-girl": 2 } },
      { t: "Looking minimal, polished, and naturally cool", s: { "cool-girl": 2 } },
      { t: "Looking iconic, trend-aware, and eye-catching", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "Looking unique, moody, and quietly unforgettable", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "How do you usually handle attention?",
    opts: [
      { t: "I like kind attention, but not anything too intense", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "I act casual, even when people notice me", s: { "cool-girl": 2 } },
      { t: "I know how to own a moment when eyes are on me", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "I do not chase attention, but it often finds me anyway", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "What kind of compliment feels best to receive?",
    opts: [
      { t: "You feel so sweet and safe to be around", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "You make everything look effortless", s: { "cool-girl": 2 } },
      { t: "You have such a strong presence", s: { "boss-girl": 2, "it-girl": 1 } },
      { t: "There is something about you I cannot explain", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "What role do you often play in your friend group?",
    opts: [
      { t: "The caring one who listens and comforts", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "The chill one who keeps things grounded", s: { "cool-girl": 2 } },
      { t: "The one with taste, ideas, and social pull", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "The one who says less but always leaves an impression", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "What kind of beauty are you most drawn to?",
    opts: [
      { t: "Soft colors, romance, and dreamy details", s: { "soft-girl": 2 } },
      { t: "Clean lines, confidence, and simplicity", s: { "cool-girl": 2, "boss-girl": 1 } },
      { t: "Bold fashion, polished glamour, and trend energy", s: { "it-girl": 2 } },
      { t: "Shadowy elegance, depth, and a little mystery", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "What kind of life feels most aligned with your energy?",
    opts: [
      { t: "A life full of softness, love, and emotional beauty", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "A life that feels free, stylish, and self-possessed", s: { "cool-girl": 2 } },
      { t: "A life that looks exciting, ambitious, and unforgettable", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "A life with depth, meaning, and private magic", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "When someone first meets you, what do they probably feel?",
    opts: [
      { t: "That I am kind, approachable, and sweet", s: { "soft-girl": 2, "sunshine-girl": 1 } },
      { t: "That I am calm, cool, and hard to shake", s: { "cool-girl": 2 } },
      { t: "That I have presence and know who I am", s: { "boss-girl": 2, "it-girl": 1 } },
      { t: "That I have a quiet depth they want to figure out", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "Which phrase feels most like you?",
    opts: [
      { t: "Gentle, loving, and a little dreamy", s: { "soft-girl": 2 } },
      { t: "Relaxed, stylish, and naturally confident", s: { "cool-girl": 2 } },
      { t: "Bright, magnetic, and impossible to ignore", s: { "it-girl": 2, "sunshine-girl": 1 } },
      { t: "Deep, private, and unforgettable", s: { "mysterious-girl": 2 } },
    ],
  },
  {
    q: "At heart, which girl energy sounds most like your core self?",
    opts: [
      { t: "The Soft Girl", s: { "soft-girl": 2 } },
      { t: "The Cool Girl", s: { "cool-girl": 2 } },
      { t: "The It Girl", s: { "it-girl": 2, "boss-girl": 1 } },
      { t: "The Mysterious Girl", s: { "mysterious-girl": 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "soft-girl",
    "cool-girl",
    "it-girl",
    "mysterious-girl",
    "sunshine-girl",
    "boss-girl",
  ];

  let best: ResultKey = "soft-girl";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function GirlTypeEnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    "soft-girl": 0,
    "cool-girl": 0,
    "it-girl": 0,
    "mysterious-girl": 0,
    "sunshine-girl": 0,
    "boss-girl": 0,
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
      router.push(`/result/girl-type-energy?type=${top}`);
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
          Girl Energy Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Which “Girl Type” Energy Are You? 🎀
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
          Discover the feminine energy people feel from you most naturally.
          This personality quiz explores whether your vibe is more Soft Girl,
          Cool Girl, It Girl, Mysterious Girl, Sunshine Girl, or Boss Girl.
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
            This girl energy personality quiz is designed to help you discover
            the feminine vibe you most naturally give off. Everyone carries a
            certain social and emotional energy, and that energy often shapes
            how people first experience you, how you express yourself, and what
            kind of presence you bring into your relationships, style, and daily
            life. Sometimes that energy feels soft and sweet. Sometimes it feels
            cool, bright, magnetic, mysterious, or powerful.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people radiate the warmth of a Soft Girl, full of tenderness,
            sweetness, and emotional softness. Others give off the calm
            confidence of a Cool Girl, the attention-grabbing charisma of an It
            Girl, the quiet depth of a Mysterious Girl, the uplifting warmth of
            a Sunshine Girl, or the strong self-possession of a Boss Girl. None
            of these girl types are better than the others. They simply describe
            different styles of feminine energy and different ways of being felt
            by the world around you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective but fun questions, you can find
            out which girl type energy feels most aligned with your natural
            vibe. The result is meant to be easy to enjoy, emotionally
            resonant, and highly shareable. It can be a cute personality result,
            but it can also reveal something real about your style, presence,
            and the kind of emotional atmosphere you naturally create.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why girl type energy matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Girl type energy matters because people often feel your vibe before
            they fully know your story. The way you carry yourself, respond to
            attention, express emotion, and move through the world creates an
            impression that feels bigger than words. Sometimes that impression
            is soft and comforting. Sometimes it is stylish and commanding.
            Sometimes it is playful, mysterious, or effortlessly cool.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your energy can help you see what people are naturally
            drawn to in you. It can explain why your style choices feel right,
            why certain social roles come easily, and why your presence leaves a
            specific emotional effect. It can also help you appreciate your own
            strengths instead of trying to force yourself into someone else’s
            version of femininity.
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
            Once you get your result, try to use it as a reflection of your core
            vibe rather than a strict label. Most people are not made of only
            one kind of energy. You may relate to more than one result, but one
            usually feels especially familiar. That result often points to the
            way your presence most naturally lands on other people and the kind
            of feminine expression that feels most effortless to you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your real life.
            What kind of compliments do you hear most often? What role do you
            naturally play in your friend group? What kind of style, beauty, or
            social energy feels most like home to you? The more honestly you
            reflect, the more meaningful your result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you better understand your strengths and
            your blind spots. The Soft Girl may need stronger boundaries. The
            Cool Girl may need to show vulnerability more openly. The It Girl
            may need grounding beyond outside attention. The Mysterious Girl may
            need to let others in. The Sunshine Girl may need rest. The Boss
            Girl may need softness without feeling weak. Growth often begins
            when you understand your natural energy and learn how to use it in a
            way that stays true to you.
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
            This test explores several dimensions of your social and emotional
            presence. It looks at how you handle attention, what kind of beauty
            feels most aligned with you, how people tend to remember you, and
            what kind of energy you naturally bring into a room. It also
            explores how you relate to softness, confidence, presence, style,
            emotional warmth, and personal power.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on appearance, this quiz tries to reveal
            the deeper vibe underneath your style. That is why the questions are
            not only about looks, but also about emotional tone, presence,
            social instinct, and self-expression. The goal is not just to give
            you a cute label, but to show you what kind of feminine energy your
            personality most naturally carries.
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
            <li>The Soft Girl</li>
            <li>The Cool Girl</li>
            <li>The It Girl</li>
            <li>The Mysterious Girl</li>
            <li>The Sunshine Girl</li>
            <li>The Boss Girl</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your vibe, your
            emotional strengths, your social presence, and the kind of energy
            people are likely to feel from you. In that sense, this is not only
            a fun girl type quiz. It is also a small reflection on the way your
            femininity, personality, and presence come together to create the
            impression that is uniquely yours.
          </p>
        </section>
      </div>
    </main>
  );
}