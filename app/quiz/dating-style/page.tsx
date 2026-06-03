"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "romantic_dreamer"
  | "slow_burn"
  | "free_spirit"
  | "loyal_partner"
  | "passionate_lover"
  | "independent_heart";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
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
  const priority: ResultKey[] = [
    "romantic_dreamer",
    "slow_burn",
    "free_spirit",
    "loyal_partner",
    "passionate_lover",
    "independent_heart",
  ];

  let best: ResultKey = "romantic_dreamer";
  let bestVal = -999;

  priority.forEach((k) => {
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
      router.push(`/result/dating-style?type=${top}`);
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
          Dating Style Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What&apos;s Your Dating Style? 💘
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
          Discover how you naturally love, connect, and show up in romantic
          relationships. This personality quiz explores whether your dating
          energy feels most like a romantic dreamer, a slow burn, a free spirit,
          a loyal partner, a passionate lover, or an independent heart.
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

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            This dating style quiz is designed to reveal how your heart
            naturally moves in romantic relationships. Some people love with
            grand gestures and deep feeling. Others build slowly, protect their
            independence, stay light and free, give steadily and loyally, burn
            with intense passion, or love quietly on their own terms. Even when
            people are not fully conscious of it, they often carry one
            consistent emotional style in how they date, connect, and fall for
            others.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Dating style is not just about whether you text first or how quickly
            you commit. It is about the emotional atmosphere you create in
            romantic relationships, the way you show care, how you handle
            closeness and distance, and what love feels like when it flows
            through you naturally. Understanding that style can explain a lot
            about your past relationships, your current patterns, and what you
            are really looking for.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            By answering a series of reflective questions about how you
            naturally respond in romantic situations, you can discover the
            dating style that fits you most closely. The result is designed to
            feel accurate, emotionally honest, and easy to share — whether as
            something fun or as a real moment of self-reflection.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why dating style matters
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Your dating style shapes everything about how love feels for you
            and the people you connect with. It influences how quickly you open
            up, what kind of attention feels good, how you handle uncertainty,
            what makes you feel secure, and what eventually makes you feel
            drained or fulfilled. Two people can deeply care for each other and
            still feel mismatched because their styles create friction rather
            than flow.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Knowing your style helps you stop blaming yourself for patterns
            that are not flaws but simply the shape your love naturally takes.
            It can also help you become more intentional — choosing people who
            complement your style instead of conflict with it, and adjusting
            the parts of your style that may be creating unnecessary distance
            or pain.
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

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Once you get your result, try reading it as a mirror rather than a
            label. Most people carry more than one dating style, but one usually
            feels most natural — especially under emotional pressure or in
            relationships that matter deeply. That core style often reveals
            itself in the way you pursue, the way you pull back, and the way
            you stay or leave.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            A useful next step is to compare your result with your relationship
            history. Look for the patterns. When did you feel most like
            yourself in love? When did things go wrong in a way that felt
            familiar? What did past partners appreciate most about you, and
            what did they find frustrating? Often your dating style is right
            there, visible in retrospect.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Your result also includes a growth path — not because your style
            needs to be fixed, but because every style has a shadow side that
            tends to appear in longer relationships. Awareness of that shadow
            gives you a real advantage in love.
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

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            This test explores several emotional dimensions of romantic
            behavior. It looks at how you initiate, how you respond to
            closeness, what you value in a partner, how you handle conflict,
            what your fears in dating look like, and what kind of relationship
            feels most like home. It also examines whether your romantic energy
            is warmer, cooler, deeper, lighter, more intense, or more
            self-contained.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Rather than sorting people into rigid personality boxes, this quiz
            tries to describe how love moves through you. That makes it less
            about what type you are and more about how you love — which is
            usually a more useful and accurate lens for understanding yourself
            in relationships.
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
            <li>The Romantic Dreamer</li>
            <li>The Slow Burn</li>
            <li>The Free Spirit</li>
            <li>The Loyal Partner</li>
            <li>The Passionate Lover</li>
            <li>The Independent Heart</li>
          </ul>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: 0 }}>
            Each result comes with a deeper explanation of your emotional style
            in love, your romantic strengths, the challenges your style tends
            to create, and a growth path that can help your love life become
            more fulfilling and self-aware. In that sense, this is not only a
            fun dating quiz. It is also a small reflection on the way your
            heart moves toward other people.
          </p>
        </section>
      </div>
    </main>
  );
}
