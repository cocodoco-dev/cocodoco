"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "main_character"
  | "soft_mysterious"
  | "fun_chaotic"
  | "cool_unbothered"
  | "thoughtful_deep"
  | "sweet_safe";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of post feels most natural for you to share?",
    opts: [
      {
        t: "Something aesthetic, cinematic, or visually striking",
        s: { main_character: 2, soft_mysterious: 1 },
      },
      {
        t: "Something funny, unserious, or a little chaotic",
        s: { fun_chaotic: 2, cool_unbothered: 1 },
      },
      {
        t: "Something thoughtful, meaningful, or emotionally honest",
        s: { thoughtful_deep: 2, sweet_safe: 1 },
      },
      {
        t: "Something warm, cute, or comforting",
        s: { sweet_safe: 2, soft_mysterious: 1 },
      },
    ],
  },
  {
    q: "When people look at your profile, what do you secretly hope they feel?",
    opts: [
      {
        t: "That I have a special glow or presence",
        s: { main_character: 2 },
      },
      {
        t: "That I am hard to fully read",
        s: { soft_mysterious: 2, cool_unbothered: 1 },
      },
      {
        t: "That I seem fun and easy to be around",
        s: { fun_chaotic: 2, sweet_safe: 1 },
      },
      {
        t: "That there is more depth to me than people expect",
        s: { thoughtful_deep: 2 },
      },
    ],
  },
  {
    q: "What is most likely to appear in your stories or feed?",
    opts: [
      {
        t: "Pretty lighting, mirrors, outfits, sunsets, or moments that feel iconic",
        s: { main_character: 2 },
      },
      {
        t: "Random memes, jokes, screenshots, or weirdly funny things",
        s: { fun_chaotic: 2 },
      },
      {
        t: "Quiet photos, blurred details, dark tones, or low-key moments",
        s: { soft_mysterious: 2, thoughtful_deep: 1 },
      },
      {
        t: "Small daily things, cozy details, or honest thoughts",
        s: { sweet_safe: 2, thoughtful_deep: 1 },
      },
    ],
  },
  {
    q: "How would your friends describe your online energy?",
    opts: [
      {
        t: "Like a main character in an indie movie",
        s: { main_character: 2, thoughtful_deep: 1 },
      },
      {
        t: "Like someone who disappears and comes back cooler every time",
        s: { cool_unbothered: 2, soft_mysterious: 1 },
      },
      {
        t: "Like a meme account with a soul",
        s: { fun_chaotic: 2 },
      },
      {
        t: "Like a warm person who makes the internet feel softer",
        s: { sweet_safe: 2 },
      },
    ],
  },
  {
    q: "What feels most true about the way you post?",
    opts: [
      {
        t: "I care about vibe and mood more than quantity",
        s: { soft_mysterious: 2, main_character: 1 },
      },
      {
        t: "I post when I want. I do not force it.",
        s: { cool_unbothered: 2 },
      },
      {
        t: "I like making people laugh or react",
        s: { fun_chaotic: 2 },
      },
      {
        t: "I post what feels emotionally real to me",
        s: { thoughtful_deep: 2, sweet_safe: 1 },
      },
    ],
  },
  {
    q: "Which comment would feel most accurate under your post?",
    opts: [
      {
        t: "Why does this look like a movie scene?",
        s: { main_character: 2 },
      },
      {
        t: "You are actually impossible to read",
        s: { soft_mysterious: 2 },
      },
      {
        t: "This is so random but so you",
        s: { fun_chaotic: 2 },
      },
      {
        t: "This feels weirdly comforting",
        s: { sweet_safe: 2, thoughtful_deep: 1 },
      },
    ],
  },
  {
    q: "What kind of energy do you naturally give in group chats or comments?",
    opts: [
      {
        t: "A little selective, but sharp when I do speak",
        s: { cool_unbothered: 2, soft_mysterious: 1 },
      },
      {
        t: "Funny, reactive, and slightly unhinged",
        s: { fun_chaotic: 2 },
      },
      {
        t: "Gentle, caring, and emotionally aware",
        s: { sweet_safe: 2, thoughtful_deep: 1 },
      },
      {
        t: "Reflective, observant, and kind of deep",
        s: { thoughtful_deep: 2 },
      },
    ],
  },
  {
    q: "Which online aesthetic feels closest to your presence?",
    opts: [
      {
        t: "Polished but personal, like a life worth watching",
        s: { main_character: 2 },
      },
      {
        t: "Soft shadows, hidden meanings, and low-key intensity",
        s: { soft_mysterious: 2 },
      },
      {
        t: "Chaotic screenshots, fun edits, and meme energy",
        s: { fun_chaotic: 2 },
      },
      {
        t: "Simple, honest, warm, and quietly lovable",
        s: { sweet_safe: 2, cool_unbothered: 1 },
      },
    ],
  },
  {
    q: "What makes someone memorable online to you?",
    opts: [
      {
        t: "They have undeniable presence",
        s: { main_character: 2 },
      },
      {
        t: "They feel rare and hard to figure out",
        s: { soft_mysterious: 2, cool_unbothered: 1 },
      },
      {
        t: "They are effortlessly funny",
        s: { fun_chaotic: 2 },
      },
      {
        t: "They feel sincere, deep, or emotionally grounded",
        s: { thoughtful_deep: 2, sweet_safe: 1 },
      },
    ],
  },
  {
    q: "When you disappear from posting for a while, what is the reason most likely to be?",
    opts: [
      {
        t: "I only come back when the vibe feels right",
        s: { soft_mysterious: 2, main_character: 1 },
      },
      {
        t: "I genuinely forgot or did not care",
        s: { cool_unbothered: 2, fun_chaotic: 1 },
      },
      {
        t: "I was living, feeling, or processing things offline",
        s: { thoughtful_deep: 2 },
      },
      {
        t: "I just wanted peace and softness for a bit",
        s: { sweet_safe: 2 },
      },
    ],
  },
  {
    q: "What kind of DM do you seem most likely to receive?",
    opts: [
      {
        t: "You look unreal in your posts",
        s: { main_character: 2 },
      },
      {
        t: "Why are you actually kind of mysterious?",
        s: { soft_mysterious: 2 },
      },
      {
        t: "You are way too funny for no reason",
        s: { fun_chaotic: 2 },
      },
      {
        t: "Talking to you feels really safe",
        s: { sweet_safe: 2, thoughtful_deep: 1 },
      },
    ],
  },
  {
    q: "At your core, what vibe do you think you give off online?",
    opts: [
      {
        t: "Main character energy",
        s: { main_character: 2 },
      },
      {
        t: "Soft mystery",
        s: { soft_mysterious: 2 },
      },
      {
        t: "Fun chaos",
        s: { fun_chaotic: 2 },
      },
      {
        t: "Cool distance with hidden depth",
        s: { cool_unbothered: 2, thoughtful_deep: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "main_character",
    "soft_mysterious",
    "fun_chaotic",
    "cool_unbothered",
    "thoughtful_deep",
    "sweet_safe",
  ];

  let best: ResultKey = "main_character";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function OnlineVibeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    main_character: 0,
    soft_mysterious: 0,
    fun_chaotic: 0,
    cool_unbothered: 0,
    thoughtful_deep: 0,
    sweet_safe: 0,
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
      router.push(`/result/online-vibe?type=${top}`);
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
          Online Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Vibe Do You Give Off Online? 💻
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
          Discover the online energy people feel from you right away. This quiz
          explores whether your internet vibe feels main-character, mysterious,
          chaotic, cool, deep, or softly comforting.
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
            The internet gives people a strange kind of first impression. Before
            someone hears your voice or spends real time with you, they often
            meet your vibe through your photos, captions, timing, stories,
            comments, and the emotional atmosphere of your online presence. That
            presence can feel bold, soft, chaotic, quiet, magnetic, thoughtful,
            or comforting long before anyone knows the full story of who you
            are.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            This quiz is designed to explore the feeling your digital self gives
            off most naturally. Some people come across like a main character.
            Others feel mysterious, funny, low-key cool, emotionally deep, or
            safe in a way that makes people want to stay. None of these vibes
            are better than the others. They simply reflect different kinds of
            social energy.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover the
            online vibe people are most likely to sense from you. The result is
            meant to feel fun, accurate, and easy to share, while also saying
            something real about your energy and how it translates through the
            screen.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why online vibe matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Your online vibe matters because people respond to atmosphere before
            they respond to detail. A profile does not just show what you post.
            It creates a mood. It suggests how you move through the world, what
            you pay attention to, and what kind of emotional space you create
            around yourself. Even subtle choices can shape that feeling.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your online vibe can help you see why certain people
            are drawn to you, why your content feels natural in a particular
            style, and why others may read your energy a certain way. Sometimes
            it can also explain the gap between who you are privately and how
            you appear digitally.
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
            Once you get your result, use it as a mirror rather than a strict
            category. Most people contain more than one kind of energy, but one
            vibe usually stands out more strongly than the rest. That core vibe
            often shapes the way people remember you online.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            You can also use your result to guide how you post. If your energy
            is naturally thoughtful, maybe that is why quick trend-based posting
            feels empty to you. If your energy is playful and chaotic, maybe
            your humor is part of your charm. If your vibe is soft and safe,
            that warmth may be exactly what makes people return to your content.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            The point is not to force yourself into a new persona. It is to
            notice what already feels true, and maybe understand why your online
            presence leaves the impression that it does.
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
            <li>Main Character Energy</li>
            <li>Soft Mysterious Energy</li>
            <li>Fun Chaotic Energy</li>
            <li>Cool Unbothered Energy</li>
            <li>Thoughtful Deep Energy</li>
            <li>Sweet Safe Energy</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of how your vibe comes
            across, what people tend to feel from you online, your strongest
            qualities, and what makes your digital presence memorable.
          </p>
        </section>
      </div>
    </main>
  );
}