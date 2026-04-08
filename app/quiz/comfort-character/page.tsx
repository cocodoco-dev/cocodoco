"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "sunshine"
  | "listener"
  | "protector"
  | "dreamy"
  | "healer"
  | "homebody";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When someone feels emotionally overwhelmed, what do you most naturally offer?",
    opts: [
      { t: "Lightness, laughter, and a softer mood", s: { sunshine: 2, dreamy: 1 } },
      { t: "A safe space where they can talk freely", s: { listener: 2, healer: 1 } },
      { t: "Protection, reassurance, and steady presence", s: { protector: 2, homebody: 1 } },
      { t: "Warm, gentle care that makes everything feel softer", s: { healer: 2, dreamy: 1 } },
    ],
  },
  {
    q: "What kind of comfort feels most true to your personality?",
    opts: [
      { t: "The kind that brightens the room instantly", s: { sunshine: 2 } },
      { t: "The kind that listens without judgment", s: { listener: 2, healer: 1 } },
      { t: "The kind that quietly keeps people safe", s: { protector: 2, homebody: 1 } },
      { t: "The kind that feels cozy, dreamy, and emotionally soft", s: { dreamy: 2, homebody: 1 } },
    ],
  },
  {
    q: "In a difficult moment, what do people often feel from you first?",
    opts: [
      { t: "A spark of hope that things can feel lighter again", s: { sunshine: 2, healer: 1 } },
      { t: "Calm attention and genuine understanding", s: { listener: 2 } },
      { t: "Strength, loyalty, and the feeling that they are not alone", s: { protector: 2 } },
      { t: "Tender warmth that makes emotions feel easier to hold", s: { dreamy: 2, healer: 1 } },
    ],
  },
  {
    q: "What kind of atmosphere do you naturally create around others?",
    opts: [
      { t: "Cheerful, uplifting, and emotionally sunny", s: { sunshine: 2 } },
      { t: "Quiet, thoughtful, and deeply accepting", s: { listener: 2, homebody: 1 } },
      { t: "Stable, dependable, and grounding", s: { protector: 2 } },
      { t: "Soft, cozy, and comforting like a safe little world", s: { homebody: 2, dreamy: 1 } },
    ],
  },
  {
    q: "If you were comforting a friend after a long day, what would feel most like you?",
    opts: [
      { t: "Trying to make them smile and feel lighter", s: { sunshine: 2 } },
      { t: "Listening carefully and letting them say everything", s: { listener: 2, healer: 1 } },
      { t: "Taking care of practical things so they can rest", s: { protector: 2, homebody: 1 } },
      { t: "Creating a soft emotional space with warmth and gentleness", s: { healer: 2, dreamy: 1 } },
    ],
  },
  {
    q: "Which sentence feels most like your comfort style?",
    opts: [
      { t: "I want people to feel brighter after being around me.", s: { sunshine: 2 } },
      { t: "I want people to feel heard and understood.", s: { listener: 2 } },
      { t: "I want people to feel safe no matter what happens.", s: { protector: 2 } },
      { t: "I want people to feel emotionally wrapped in warmth.", s: { healer: 2, homebody: 1 } },
    ],
  },
  {
    q: "What kind of character energy do you secretly relate to most?",
    opts: [
      { t: "The one who keeps everyone’s spirits up", s: { sunshine: 2 } },
      { t: "The one others can open their heart to", s: { listener: 2, healer: 1 } },
      { t: "The one who protects the group when things get hard", s: { protector: 2 } },
      { t: "The one who feels like home, peace, and softness", s: { homebody: 2, dreamy: 1 } },
    ],
  },
  {
    q: "What kind of emotional gift do you think you carry most naturally?",
    opts: [
      { t: "Hope and emotional brightness", s: { sunshine: 2 } },
      { t: "Understanding and quiet empathy", s: { listener: 2, healer: 1 } },
      { t: "Reliability and emotional safety", s: { protector: 2, homebody: 1 } },
      { t: "Tenderness, softness, and healing warmth", s: { healer: 2, dreamy: 1 } },
    ],
  },
  {
    q: "When people are exhausted, what part of you becomes most helpful?",
    opts: [
      { t: "My ability to lift the mood without forcing it", s: { sunshine: 2, dreamy: 1 } },
      { t: "My patience and willingness to stay present", s: { listener: 2 } },
      { t: "My instinct to take care of them and keep things steady", s: { protector: 2, homebody: 1 } },
      { t: "My softness that helps them feel emotionally held", s: { healer: 2 } },
    ],
  },
  {
    q: "Which kind of comfort do you personally value the most?",
    opts: [
      { t: "A playful kind of warmth that keeps life from feeling too heavy", s: { sunshine: 2 } },
      { t: "A deep kind of understanding that asks for nothing", s: { listener: 2, healer: 1 } },
      { t: "A dependable kind of care you can always lean on", s: { protector: 2 } },
      { t: "A cozy, dreamy feeling that makes the world softer", s: { dreamy: 2, homebody: 1 } },
    ],
  },
  {
    q: "What are you most likely to protect in relationships?",
    opts: [
      { t: "The joy, lightness, and good energy between people", s: { sunshine: 2 } },
      { t: "Honest feelings, vulnerability, and emotional truth", s: { listener: 2, healer: 1 } },
      { t: "Trust, loyalty, and security", s: { protector: 2, homebody: 1 } },
      { t: "Peace, tenderness, and the feeling of emotional rest", s: { dreamy: 2, healer: 1 } },
    ],
  },
  {
    q: "At your core, what kind of comfort character are you?",
    opts: [
      { t: "The Sunshine Comfort Character", s: { sunshine: 2 } },
      { t: "The Listener Comfort Character", s: { listener: 2 } },
      { t: "The Protector Comfort Character", s: { protector: 2 } },
      { t: "The Soft Dream Comfort Character", s: { dreamy: 2, healer: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "sunshine",
    "listener",
    "protector",
    "dreamy",
    "healer",
    "homebody",
  ];

  let best: ResultKey = "sunshine";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ComfortCharacterQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    sunshine: 0,
    listener: 0,
    protector: 0,
    dreamy: 0,
    healer: 0,
    homebody: 0,
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
      router.push(`/result/comfort-character?type=${top}`);
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
          Comfort Character Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Kind of Comfort Character Are You? ☁️
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
          Discover the kind of comfort your presence brings into people’s lives.
          This personality quiz explores whether your energy feels most like
          sunshine, a deep listener, a protector, a soft dream, a healer, or a
          cozy sense of home.
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
            This comfort character quiz is designed to reveal the emotional role
            your presence naturally plays in the lives of others. Some people
            comfort through warmth and laughter. Others comfort through deep
            listening, quiet protection, tenderness, healing energy, or the kind
            of softness that feels like home. Even without trying, people often
            bring a certain emotional atmosphere wherever they go.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Comfort is not only about being nice. It is about the specific way
            your energy helps people breathe easier, feel safer, open up, or
            rest emotionally. Some people are sunshine during heavy moments.
            Some are the listener who makes you feel understood. Some are the
            protector who helps you feel secure. Others carry a dreamy softness,
            a healing tenderness, or a cozy groundedness that feels like
            emotional shelter.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover what
            kind of comfort character you are most naturally. The result is
            meant to feel emotionally warm, easy to share, and surprisingly
            accurate. It can be a fun personality result, but it can also offer
            real insight into how your energy affects the people around you.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why comfort energy matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Comfort energy matters because people do not only remember what you
            said. They also remember how your presence made them feel. In a
            world where many people are tired, overstimulated, or emotionally
            guarded, the kind of comfort you bring can become one of your most
            meaningful qualities. It shapes trust, intimacy, friendship, and the
            emotional tone of your relationships.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your comfort style can help you notice your quiet
            strengths. You may be more healing, grounding, or emotionally
            reassuring than you realize. It can also help you understand why
            certain people feel naturally safe with you and why your energy
            leaves a lasting emotional impression even in small moments.
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
            Once you get your result, try to read it as a mirror rather than a
            strict label. Most people can comfort others in more than one way,
            but one emotional style usually feels especially natural. That core
            style often shows up in the way you care for people, respond to
            stress, hold emotional space, and create a sense of safety.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A useful next step is to compare your result with your real-life
            relationships. When people come to you, what are they usually
            seeking? Lightness, understanding, security, softness, healing, or
            a sense of peace? The more honestly you reflect on the role you
            already play, the more meaningful your result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you see both your strengths and your blind
            spots. The sunshine type may need to remember that not everything
            must become light right away. The listener may need stronger
            boundaries. The protector may need rest. The dreamy comfort type may
            need grounding. The healer may need to stop carrying too much. The
            homebody comfort type may need to let others care for them too.
            Emotional gifts become healthiest when they are shared sustainably.
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
            This test explores several dimensions of emotional presence. It
            looks at how you respond when others are struggling, what kind of
            atmosphere you create, what emotional needs you naturally protect,
            and what people are most likely to feel in your presence. It also
            explores whether your comfort style is brighter, quieter, steadier,
            softer, more nurturing, or more home-like.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface-level personality traits, this
            quiz tries to reveal the emotional function your energy plays in
            human connection. That is why the questions are designed to feel
            reflective and relational. The goal is not just to tell you what you
            are like, but to show what kind of emotional experience people may
            receive when they are with you.
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
            <li>The Sunshine Comfort Character</li>
            <li>The Listener Comfort Character</li>
            <li>The Protector Comfort Character</li>
            <li>The Soft Dream Comfort Character</li>
            <li>The Healer Comfort Character</li>
            <li>The Home Comfort Character</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your emotional style,
            your comfort strengths, the kind of safety you naturally create, and
            the growth path that can help your caring energy stay balanced. In
            that sense, this is not only a fun comfort personality quiz. It is
            also a small reflection on the role your heart plays in making life
            gentler for other people.
          </p>
        </section>
      </div>
    </main>
  );
}