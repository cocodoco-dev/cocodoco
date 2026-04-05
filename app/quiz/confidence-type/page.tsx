"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "quiet"
  | "magnetic"
  | "resilient"
  | "fearless"
  | "grounded"
  | "visionary";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When you walk into a difficult situation, what gives you the strongest sense of confidence?",
    opts: [
      { t: "Knowing I do not need to prove myself loudly", s: { quiet: 2, grounded: 1 } },
      { t: "Feeling that my energy naturally draws people in", s: { magnetic: 2, visionary: 1 } },
      { t: "Remembering everything I have already survived", s: { resilient: 2, grounded: 1 } },
      { t: "Trusting myself to act even if I feel nervous", s: { fearless: 2, resilient: 1 } },
    ],
  },
  {
    q: "What kind of presence feels most like your natural strength?",
    opts: [
      { t: "Calm, steady, and quietly self-assured", s: { quiet: 2, grounded: 1 } },
      { t: "Warm, charming, and hard to ignore", s: { magnetic: 2 } },
      { t: "Strong because I know I can handle setbacks", s: { resilient: 2, grounded: 1 } },
      { t: "Bold, daring, and ready to move first", s: { fearless: 2, visionary: 1 } },
    ],
  },
  {
    q: "When someone doubts you, what happens inside you first?",
    opts: [
      { t: "I stay composed because I know who I am", s: { quiet: 2, grounded: 1 } },
      { t: "I want to show them what I am capable of", s: { magnetic: 2, fearless: 1 } },
      { t: "I turn that doubt into fuel and keep going", s: { resilient: 2 } },
      { t: "I push forward anyway, even more directly", s: { fearless: 2, resilient: 1 } },
    ],
  },
  {
    q: "Which sentence sounds most like your confidence style?",
    opts: [
      { t: "I do not need attention to know my worth", s: { quiet: 2, grounded: 1 } },
      { t: "My energy speaks before I even say much", s: { magnetic: 2, visionary: 1 } },
      { t: "I trust myself because I have come through a lot", s: { resilient: 2, grounded: 1 } },
      { t: "I believe in moving before fear gets too loud", s: { fearless: 2 } },
    ],
  },
  {
    q: "What kind of challenge makes you feel most powerful?",
    opts: [
      { t: "A moment where inner calm matters more than noise", s: { quiet: 2, grounded: 1 } },
      { t: "A social setting where presence and charisma matter", s: { magnetic: 2 } },
      { t: "A hard season that asks for endurance", s: { resilient: 2, grounded: 1 } },
      { t: "A risk that requires bravery and quick action", s: { fearless: 2, visionary: 1 } },
    ],
  },
  {
    q: "How do other people often experience your confidence?",
    opts: [
      { t: "Subtle but strong once they really notice it", s: { quiet: 2 } },
      { t: "Attractive, expressive, and naturally influential", s: { magnetic: 2, visionary: 1 } },
      { t: "Dependable, strong, and emotionally durable", s: { resilient: 2, grounded: 1 } },
      { t: "Bold, direct, and unafraid to take the lead", s: { fearless: 2 } },
    ],
  },
  {
    q: "What helps you trust yourself the most?",
    opts: [
      { t: "A strong inner sense that does not depend on approval", s: { quiet: 2, grounded: 1 } },
      { t: "Seeing how my energy changes the room around me", s: { magnetic: 2, visionary: 1 } },
      { t: "Knowing I can recover, even when things fall apart", s: { resilient: 2 } },
      { t: "Believing I can figure things out by acting", s: { fearless: 2, visionary: 1 } },
    ],
  },
  {
    q: "When life becomes uncertain, where does your confidence go first?",
    opts: [
      { t: "Back to my inner calm and sense of self", s: { quiet: 2, grounded: 1 } },
      { t: "Into connection, expression, and visible energy", s: { magnetic: 2 } },
      { t: "Into endurance and emotional toughness", s: { resilient: 2, grounded: 1 } },
      { t: "Into movement, risk, and bold decision-making", s: { fearless: 2, visionary: 1 } },
    ],
  },
  {
    q: "What kind of confidence do you admire most in yourself?",
    opts: [
      { t: "The kind that stays solid without needing applause", s: { quiet: 2, grounded: 1 } },
      { t: "The kind that lights people up and inspires attention", s: { magnetic: 2, visionary: 1 } },
      { t: "The kind that keeps standing after being tested", s: { resilient: 2 } },
      { t: "The kind that dares before certainty arrives", s: { fearless: 2 } },
    ],
  },
  {
    q: "Which kind of success feels most aligned with your confidence?",
    opts: [
      { t: "Feeling deeply sure of myself, even in silence", s: { quiet: 2, grounded: 1 } },
      { t: "Leaving a strong impression wherever I go", s: { magnetic: 2 } },
      { t: "Making it through what should have broken me", s: { resilient: 2, grounded: 1 } },
      { t: "Building a life by taking bold chances", s: { fearless: 2, visionary: 1 } },
    ],
  },
  {
    q: "When people come to you for support, what strength do you naturally offer?",
    opts: [
      { t: "A calm belief that things can be handled", s: { quiet: 2, grounded: 1 } },
      { t: "Encouragement that makes them feel seen and energized", s: { magnetic: 2, visionary: 1 } },
      { t: "A steady reminder that pain can be survived", s: { resilient: 2 } },
      { t: "A push to be brave and move forward", s: { fearless: 2 } },
    ],
  },
  {
    q: "At your core, what kind of confidence feels most like you?",
    opts: [
      { t: "Quiet Confidence", s: { quiet: 2 } },
      { t: "Magnetic Confidence", s: { magnetic: 2 } },
      { t: "Resilient Confidence", s: { resilient: 2 } },
      { t: "Fearless Confidence", s: { fearless: 2, visionary: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "quiet",
    "magnetic",
    "resilient",
    "fearless",
    "grounded",
    "visionary",
  ];

  let best: ResultKey = "quiet";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ConfidenceTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    quiet: 0,
    magnetic: 0,
    resilient: 0,
    fearless: 0,
    grounded: 0,
    visionary: 0,
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
      router.push(`/result/confidence-type?type=${top}`);
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
          Confidence Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Kind of Confidence Do You Have? ✨
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
          Discover the kind of confidence that feels most natural to you. This
          personality quiz explores whether your strength shows up as Quiet,
          Magnetic, Resilient, Fearless, Grounded, or Visionary confidence.
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
            This confidence personality quiz is designed to help you discover
            the style of confidence that feels most natural to your inner self.
            Confidence is not always loud, visible, or dramatic. Sometimes it
            looks like calm composure. Sometimes it looks like resilience,
            courage, grounded self-trust, or an energy that naturally draws
            people in. Even when people seem confident in very different ways,
            there is usually a deeper pattern underneath how they carry
            themselves through life.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people have Quiet Confidence, rooted in inner certainty that
            does not need much attention. Others carry Magnetic Confidence that
            feels expressive, warm, and naturally influential. Some move through
            life with Resilient Confidence that has been built through survival
            and experience. Others show Fearless Confidence that pushes forward
            before certainty fully arrives. You may also relate to the grounding
            force of Grounded Confidence or the inspiring energy of Visionary
            Confidence.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover
            which kind of confidence your personality returns to most naturally.
            The result is meant to feel thoughtful, encouraging, and emotionally
            accurate. It can be a fun personality result to share, but it can
            also help you better understand how you trust yourself, how you face
            pressure, and what kind of strength other people may already sense
            in you.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why confidence matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Confidence matters because it shapes how you move through challenge,
            connection, opportunity, and uncertainty. It affects how you speak
            up, how you recover from doubt, how you protect your sense of self,
            and how much trust you place in your own instincts. People often
            think confidence is only about being bold or visible, but real
            confidence comes in many forms.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your confidence style can make your inner life feel
            more coherent. It can help explain why you react a certain way in
            pressure, what kinds of situations make you feel strongest, and what
            kind of support helps your confidence grow. It can also reveal your
            blind spots, such as hiding too much, over-performing strength,
            depending too much on momentum, or mistaking survival for true inner
            peace.
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
            Once you receive your result, try to use it as a mirror rather than
            a limit. Most people are not made of only one kind of confidence.
            You may relate to several styles at once, but one usually feels more
            central than the others. That central pattern often reveals how you
            naturally protect your worth and where your deepest self-trust
            begins.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your real life.
            How do you respond when people doubt you? What kind of situations
            make you feel strongest? Do you trust yourself more through calm,
            connection, endurance, bold action, stability, or possibility? The
            more honestly you reflect on those questions, the more useful your
            result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your confidence result can also help you understand both your
            strengths and your growth edges. Quiet Confidence may need more
            visible expression. Magnetic Confidence may need deeper grounding.
            Resilient Confidence may need softness, not only toughness.
            Fearless Confidence may need patience and reflection. Grounded
            Confidence may need more trust in possibility. Visionary Confidence
            may need structure to turn inspiration into reality. Growth begins
            when confidence becomes both strong and balanced.
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
            This test looks at several dimensions of confidence and self-trust.
            It explores what helps you feel strong, how you respond to pressure,
            what kind of presence you naturally carry, and how you react when
            life becomes uncertain. It also looks at whether your confidence
            comes more from calm composure, social presence, endurance, bold
            action, emotional steadiness, or a strong sense of future
            possibility.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface-level boldness, this quiz tries
            to get closer to the emotional structure underneath your confidence.
            That is why the questions are written to feel reflective rather than
            purely practical. The goal is not just to label you as confident or
            not confident, but to reveal the deeper way your strength naturally
            organizes itself in everyday life.
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
            <li>Quiet Confidence</li>
            <li>Magnetic Confidence</li>
            <li>Resilient Confidence</li>
            <li>Fearless Confidence</li>
            <li>Grounded Confidence</li>
            <li>Visionary Confidence</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your self-trust, your
            strengths, your emotional pattern, and the kind of growth path your
            confidence may be inviting you toward. In that sense, this is not
            only a fun confidence quiz. It is also a small reflection on the way
            your strength has been forming inside you all along.
          </p>
        </section>
      </div>
    </main>
  );
}