"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "cozy"
  | "minimalist"
  | "dreamy"
  | "vintage"
  | "creative"
  | "moody";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What kind of environment helps your mind breathe the most?",
    opts: [
      { t: "A soft, warm space that feels safe and comforting", s: { cozy: 2, dreamy: 1 } },
      { t: "A clean, open space with very little visual noise", s: { minimalist: 2 } },
      { t: "A beautiful space that feels poetic, gentle, and a little magical", s: { dreamy: 2, vintage: 1 } },
      { t: "A deep, atmospheric room with shadow, mood, and intensity", s: { moody: 2, creative: 1 } },
    ],
  },
  {
    q: "When your thoughts get overwhelming, what do you naturally want around you?",
    opts: [
      { t: "Blankets, warm light, and things that feel emotionally familiar", s: { cozy: 2 } },
      { t: "Order, simplicity, and room to think clearly", s: { minimalist: 2 } },
      { t: "Soft colors, delicate details, and a sense of emotional escape", s: { dreamy: 2 } },
      { t: "Music, art, texture, and a space that feels expressive", s: { creative: 2, moody: 1 } },
    ],
  },
  {
    q: "Which object would feel most naturally 'you' in a room?",
    opts: [
      { t: "A plush chair, a candle, and a stack of favorite books", s: { cozy: 2, vintage: 1 } },
      { t: "A sleek desk, neutral palette, and intentional emptiness", s: { minimalist: 2 } },
      { t: "A gauzy curtain, glowing lamp, and a dreamy wall print", s: { dreamy: 2 } },
      { t: "An art corner, layered decor, and pieces full of personality", s: { creative: 2, vintage: 1 } },
    ],
  },
  {
    q: "What kind of beauty does your mind connect with most deeply?",
    opts: [
      { t: "Beauty that feels warm, gentle, and emotionally grounding", s: { cozy: 2 } },
      { t: "Beauty that feels balanced, quiet, and uncluttered", s: { minimalist: 2 } },
      { t: "Beauty that feels soft, nostalgic, and dreamlike", s: { dreamy: 2, vintage: 1 } },
      { t: "Beauty that feels dramatic, artistic, and full of feeling", s: { moody: 2, creative: 1 } },
    ],
  },
  {
    q: "How does your inner world usually feel?",
    opts: [
      { t: "Tender, reflective, and quietly emotional", s: { cozy: 2, dreamy: 1 } },
      { t: "Focused, thoughtful, and calm when things are in order", s: { minimalist: 2 } },
      { t: "Imaginative, romantic, and always drifting somewhere deeper", s: { dreamy: 2 } },
      { t: "Intense, layered, and full of color, contrast, or ideas", s: { creative: 2, moody: 1 } },
    ],
  },
  {
    q: "If your mind became a room for one evening, what would it feel like?",
    opts: [
      { t: "A quiet lamp-lit room where you can finally exhale", s: { cozy: 2 } },
      { t: "A sunlit, perfectly arranged room with space to reset", s: { minimalist: 2 } },
      { t: "A soft, floaty room that feels like a memory or a dream", s: { dreamy: 2, vintage: 1 } },
      { t: "A dim, expressive room filled with art, mood, and atmosphere", s: { moody: 2, creative: 1 } },
    ],
  },
  {
    q: "What do you most want your personal space to do for you?",
    opts: [
      { t: "Comfort me and make me feel emotionally held", s: { cozy: 2 } },
      { t: "Clear my mind and help me feel in control", s: { minimalist: 2 } },
      { t: "Inspire me and make everyday life feel softer", s: { dreamy: 2 } },
      { t: "Reflect my depth, taste, and emotional complexity", s: { moody: 2, vintage: 1 } },
    ],
  },
  {
    q: "Which color mood feels closest to your mind?",
    opts: [
      { t: "Cream, warm beige, soft brown, and muted blush", s: { cozy: 2, vintage: 1 } },
      { t: "White, gray, sand, and clean natural tones", s: { minimalist: 2 } },
      { t: "Lavender, pale blue, rosy pink, and hazy light", s: { dreamy: 2 } },
      { t: "Forest green, charcoal, burgundy, navy, or deep plum", s: { moody: 2, creative: 1 } },
    ],
  },
  {
    q: "What kind of mental energy do you give off to other people?",
    opts: [
      { t: "Soft, safe, and quietly comforting", s: { cozy: 2 } },
      { t: "Composed, clean, and easy to trust", s: { minimalist: 2 } },
      { t: "Gentle, unusual, and a little hard to forget", s: { dreamy: 2, vintage: 1 } },
      { t: "Interesting, intense, and creatively alive", s: { creative: 2, moody: 1 } },
    ],
  },
  {
    q: "What kind of room detail would make you feel the most at home?",
    opts: [
      { t: "Warm blankets, soft textures, and ambient lighting", s: { cozy: 2 } },
      { t: "Clear surfaces, simple furniture, and visual breathing room", s: { minimalist: 2 } },
      { t: "Delicate decor, flowing fabric, and soft glowing light", s: { dreamy: 2 } },
      { t: "Vintage pieces, layered textures, and expressive objects", s: { vintage: 2, creative: 1 } },
    ],
  },
  {
    q: "What kind of thought pattern feels most like yours?",
    opts: [
      { t: "I circle back to what feels emotionally safe and meaningful", s: { cozy: 2 } },
      { t: "I function best when things feel clear, intentional, and organized", s: { minimalist: 2 } },
      { t: "My mind often drifts toward symbols, feelings, and imagination", s: { dreamy: 2 } },
      { t: "My thoughts come in layers, moods, and sudden creative sparks", s: { creative: 2, moody: 1 } },
    ],
  },
  {
    q: "At your core, what aesthetic room matches your mind best?",
    opts: [
      { t: "A Cozy Room", s: { cozy: 2 } },
      { t: "A Minimalist Room", s: { minimalist: 2 } },
      { t: "A Dreamy Room", s: { dreamy: 2 } },
      { t: "A Moody Artistic Room", s: { moody: 2, creative: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "cozy",
    "minimalist",
    "dreamy",
    "vintage",
    "creative",
    "moody",
  ];

  let best: ResultKey = "cozy";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function AestheticRoomMatchesYourMindQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    cozy: 0,
    minimalist: 0,
    dreamy: 0,
    vintage: 0,
    creative: 0,
    moody: 0,
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
      router.push(`/result/aesthetic-room-matches-your-mind?type=${top}`);
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
          Room Aesthetic Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Aesthetic Room Matches Your Mind? 🛋️
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
          Discover the kind of room that reflects your inner mental landscape
          most naturally. This personality quiz explores whether your mind feels
          most like a Cozy Room, Minimalist Room, Dreamy Room, Vintage Room,
          Creative Studio, or Moody Artistic Room.
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
            This aesthetic room personality quiz is designed to reveal what kind
            of physical space best reflects the way your mind naturally works.
            A room is not just decoration. It can mirror your mental rhythm,
            emotional needs, inner atmosphere, and the kind of beauty that helps
            you feel most like yourself. The room you are drawn to often says
            something meaningful about how you think, feel, rest, and process
            the world.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some minds crave warmth, softness, and emotional grounding. Others
            feel most alive in simplicity, openness, and visual calm. Some are
            drawn to dreamy, romantic atmospheres full of imagination, while
            others feel reflected by vintage charm, expressive creativity, or
            moody intensity. None of these room styles are better than the
            others. They simply represent different inner landscapes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover what
            kind of room aesthetic most closely matches your mind. The result is
            meant to feel beautiful, emotionally accurate, and easy to share. It
            can be fun, but it can also offer useful insight into what kind of
            environment helps your mind feel safe, inspired, clear, and fully
            alive.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why room aesthetics matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Room aesthetics matter because our surroundings shape how we think,
            feel, and move through daily life. The colors, textures, lighting,
            and level of visual stimulation around you can affect your mental
            clarity, emotional energy, and sense of identity more than you may
            realize. Sometimes the space that feels most beautiful to you is
            also the space that feels most psychologically true.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding what room aesthetic matches your mind can help explain
            why certain environments calm you, inspire you, or make you feel
            more deeply yourself. It can also reveal whether your inner world is
            more comfort-seeking, structure-loving, emotionally imaginative,
            artistically expressive, nostalgic, or drawn toward mood and depth.
            In that sense, your room taste is not just preference. It is often a
            clue to your inner design.
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
            Once you receive your result, try using it as a mirror rather than a
            rule. You do not need to redesign your entire room overnight to make
            the result meaningful. Instead, notice what emotional need the room
            style reflects. Does your mind need more softness, more quiet, more
            inspiration, more structure, or more atmosphere? The answer often
            matters more than the label itself.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            You can also use your result to guide small changes in your daily
            environment. That might mean adding warmer lighting, clearing visual
            clutter, bringing in more texture, choosing colors that calm you, or
            creating a corner that feels emotionally aligned with your inner
            world. Even small adjustments can make a room feel more like a place
            your mind actually wants to return to.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you understand your strengths and blind
            spots. A cozy mind may need more openness. A minimalist mind may
            need more softness. A dreamy mind may need grounding. A vintage mind
            may need freshness. A creative mind may need structure. A moody mind
            may need more light. Growth often begins when your environment
            supports your nature without trapping you inside only one version of
            yourself.
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
            This test explores several dimensions of your inner world through
            the lens of room aesthetics. It looks at what kind of space helps
            you rest, what kind of beauty you naturally connect with, how your
            thoughts behave under stress, and what kind of emotional atmosphere
            feels most natural to your mind. It also considers your relationship
            to comfort, order, imagination, nostalgia, self-expression, and
            depth.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface design trends, this quiz tries
            to get closer to the emotional and psychological tone of the space
            your mind would choose for itself. That is why the questions are
            designed to feel reflective instead of purely decorative. The goal
            is not just to tell you what room looks good. It is to reveal what
            kind of space feels mentally and emotionally like home.
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
            <li>The Cozy Room</li>
            <li>The Minimalist Room</li>
            <li>The Dreamy Room</li>
            <li>The Vintage Room</li>
            <li>The Creative Studio</li>
            <li>The Moody Artistic Room</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your mental style,
            emotional atmosphere, natural strengths, and the kind of environment
            your mind seems to be asking for. In that sense, this is not only a
            fun aesthetic room quiz. It is also a small reflection on how your
            inner world wants to be held, expressed, and understood.
          </p>
        </section>
      </div>
    </main>
  );
}