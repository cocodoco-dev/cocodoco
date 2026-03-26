"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "quiet_observer"
  | "deep_feeler"
  | "cozy_homebody"
  | "selective_social"
  | "independent_thinker"
  | "creative_dreamer";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "What drains you the fastest?",
    opts: [
      {
        t: "Too much noise, movement, or being watched",
        s: { quiet_observer: 2, deep_feeler: 1 },
      },
      {
        t: "Small talk that feels empty or forced",
        s: { independent_thinker: 2, selective_social: 1 },
      },
      {
        t: "Plans that interrupt my peace at home",
        s: { cozy_homebody: 2 },
      },
      {
        t: "Being around people when I am already overwhelmed emotionally",
        s: { deep_feeler: 2, creative_dreamer: 1 },
      },
    ],
  },
  {
    q: "How do you usually act in a group setting?",
    opts: [
      {
        t: "I stay quiet and notice everything",
        s: { quiet_observer: 2 },
      },
      {
        t: "I talk more if I feel safe with the people there",
        s: { selective_social: 2, deep_feeler: 1 },
      },
      {
        t: "I am present, but part of me stays in my own world",
        s: { creative_dreamer: 2 },
      },
      {
        t: "I join in when I have something meaningful to say",
        s: { independent_thinker: 2, quiet_observer: 1 },
      },
    ],
  },
  {
    q: "What kind of alone time feels best to you?",
    opts: [
      {
        t: "A peaceful room, no pressure, and space to just exist",
        s: { cozy_homebody: 2, quiet_observer: 1 },
      },
      {
        t: "Time to journal, feel, or emotionally process things",
        s: { deep_feeler: 2 },
      },
      {
        t: "Time to think, learn, read, or go deep into ideas",
        s: { independent_thinker: 2 },
      },
      {
        t: "Time to imagine, create, or drift into inspiration",
        s: { creative_dreamer: 2 },
      },
    ],
  },
  {
    q: "What do people often misunderstand about you?",
    opts: [
      {
        t: "They think I have nothing to say, but I am noticing everything",
        s: { quiet_observer: 2 },
      },
      {
        t: "They think I am distant, but I actually feel a lot",
        s: { deep_feeler: 2 },
      },
      {
        t: "They think I am antisocial, but I just protect my energy",
        s: { selective_social: 2, cozy_homebody: 1 },
      },
      {
        t: "They think I am daydreaming, but my inner world is very alive",
        s: { creative_dreamer: 2, independent_thinker: 1 },
      },
    ],
  },
  {
    q: "When you connect with someone, what matters most?",
    opts: [
      {
        t: "Feeling emotionally safe and understood",
        s: { deep_feeler: 2, selective_social: 1 },
      },
      {
        t: "Being able to be quiet together without pressure",
        s: { cozy_homebody: 2, quiet_observer: 1 },
      },
      {
        t: "Having thoughtful, meaningful conversation",
        s: { independent_thinker: 2 },
      },
      {
        t: "Feeling like they understand my strange little inner world",
        s: { creative_dreamer: 2 },
      },
    ],
  },
  {
    q: "What kind of environment makes you feel most like yourself?",
    opts: [
      {
        t: "A calm place where I can quietly take everything in",
        s: { quiet_observer: 2 },
      },
      {
        t: "A cozy familiar place where I can fully relax",
        s: { cozy_homebody: 2 },
      },
      {
        t: "A space that gives me room to think deeply",
        s: { independent_thinker: 2 },
      },
      {
        t: "A beautiful or emotionally rich atmosphere that inspires me",
        s: { creative_dreamer: 2, deep_feeler: 1 },
      },
    ],
  },
  {
    q: "How do you usually recharge after a tiring week?",
    opts: [
      {
        t: "By retreating and being left alone for a while",
        s: { quiet_observer: 2, cozy_homebody: 1 },
      },
      {
        t: "By staying home and doing simple comforting things",
        s: { cozy_homebody: 2 },
      },
      {
        t: "By reflecting on what I am feeling and why",
        s: { deep_feeler: 2 },
      },
      {
        t: "By getting lost in my interests, thoughts, or projects",
        s: { independent_thinker: 2, creative_dreamer: 1 },
      },
    ],
  },
  {
    q: "Which sentence sounds most like you?",
    opts: [
      {
        t: "I notice more than I say",
        s: { quiet_observer: 2 },
      },
      {
        t: "My feelings run deeper than most people realize",
        s: { deep_feeler: 2 },
      },
      {
        t: "Home feels like my emotional reset button",
        s: { cozy_homebody: 2 },
      },
      {
        t: "I would rather have a few real people than a crowd",
        s: { selective_social: 2 },
      },
    ],
  },
  {
    q: "What is your biggest social preference?",
    opts: [
      {
        t: "Low-pressure conversations with the right people",
        s: { selective_social: 2, quiet_observer: 1 },
      },
      {
        t: "Honest conversations with emotional depth",
        s: { deep_feeler: 2 },
      },
      {
        t: "Time alone before and after being social",
        s: { cozy_homebody: 2, independent_thinker: 1 },
      },
      {
        t: "Being around people who let me stay a little different",
        s: { creative_dreamer: 2 },
      },
    ],
  },
  {
    q: "What kind of introvert energy do you secretly admire most?",
    opts: [
      {
        t: "The quiet person who sees everything",
        s: { quiet_observer: 2 },
      },
      {
        t: "The soft-hearted person with hidden emotional depth",
        s: { deep_feeler: 2 },
      },
      {
        t: "The person who protects their peace without guilt",
        s: { cozy_homebody: 2, selective_social: 1 },
      },
      {
        t: "The thoughtful person with a rich inner mind",
        s: { independent_thinker: 2, creative_dreamer: 1 },
      },
    ],
  },
  {
    q: "When someone new tries to get close to you, what happens first?",
    opts: [
      {
        t: "I observe them quietly before opening up",
        s: { quiet_observer: 2, selective_social: 1 },
      },
      {
        t: "I open slowly, but deeply if I feel safe",
        s: { deep_feeler: 2 },
      },
      {
        t: "I need time because my peace matters a lot to me",
        s: { cozy_homebody: 2 },
      },
      {
        t: "I connect best if they understand my mind and inner world",
        s: { independent_thinker: 2, creative_dreamer: 1 },
      },
    ],
  },
  {
    q: "At your core, what kind of introvert are you?",
    opts: [
      {
        t: "The Quiet Observer",
        s: { quiet_observer: 2 },
      },
      {
        t: "The Deep Feeler",
        s: { deep_feeler: 2 },
      },
      {
        t: "The Cozy Homebody",
        s: { cozy_homebody: 2 },
      },
      {
        t: "The Selective Social Introvert",
        s: { selective_social: 2, independent_thinker: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "quiet_observer",
    "deep_feeler",
    "cozy_homebody",
    "selective_social",
    "independent_thinker",
    "creative_dreamer",
  ];

  let best: ResultKey = "quiet_observer";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function IntrovertTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    quiet_observer: 0,
    deep_feeler: 0,
    cozy_homebody: 0,
    selective_social: 0,
    independent_thinker: 0,
    creative_dreamer: 0,
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
      router.push(`/result/introvert-type?type=${top}`);
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
          Introvert Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Kind of Introvert Are You? 🌙
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
          Discover the kind of quiet energy you naturally carry. This quiz
          explores whether you are more of a quiet observer, deep feeler, cozy
          homebody, selective social introvert, independent thinker, or
          creative dreamer.
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
            Not all introverts are the same. Some introverts are quiet because
            they are deeply observant. Some are deeply emotional but only show
            that side to a few people. Others simply feel most alive in calm,
            familiar spaces where their nervous system can fully relax.
            Introversion is not one single personality type. It is a whole range
            of quiet energies.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            This quiz is designed to help you discover what kind of introvert
            you really are. Some people are selective and social only with the
            right people. Others are independent thinkers who live in ideas.
            Some are creative dreamers with rich inner worlds. And some are cozy
            homebodies who genuinely recharge through stillness and peace.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover the
            introverted energy that fits you best. The result is meant to feel
            accurate, gentle, and easy to share, while also giving language to
            parts of yourself you may have always felt but never clearly named.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why introvert types matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Introvert types matter because many quiet people are misunderstood.
            Some are labeled shy when they are actually just thoughtful. Some
            are seen as distant when they are emotionally deep. Some are called
            antisocial when they are really just protective of their energy.
            Knowing your type can help you understand your own needs with more
            kindness and clarity.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            When you understand your introvert style, it becomes easier to see
            what drains you, what restores you, how you connect, and why certain
            environments feel safe while others feel exhausting. That insight
            can help you build a life that actually fits your nervous system and
            your personality instead of fighting against it.
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
            Once you get your result, try to use it as a way to understand
            yourself more gently. This is not about boxing yourself in. Most
            people relate to more than one kind of introvert energy. But one
            usually feels especially central, and that can explain a lot about
            how you move through the world.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Your result can also help you make better choices about rest,
            friendships, work environments, and boundaries. Some introverts need
            emotional safety. Some need mental freedom. Some need physical calm.
            The more clearly you know your quiet nature, the easier it becomes
            to care for it.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            The goal is not to become louder. It is to understand the shape of
            your quietness and recognize the strengths hidden inside it.
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
            <li>The Quiet Observer</li>
            <li>The Deep Feeler</li>
            <li>The Cozy Homebody</li>
            <li>The Selective Social Introvert</li>
            <li>The Independent Thinker</li>
            <li>The Creative Dreamer</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of your quiet strengths,
            your social style, the way you recharge, and what your inner world
            may need most.
          </p>
        </section>
      </div>
    </main>
  );
}