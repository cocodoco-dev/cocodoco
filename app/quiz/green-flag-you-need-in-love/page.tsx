"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "consistency"
  | "honesty"
  | "reassurance"
  | "respect"
  | "effort"
  | "emotional-safety";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When you start liking someone, what matters most in the very beginning?",
    opts: [
      {
        t: "That they stay steady instead of acting hot and cold",
        s: { consistency: 2, "emotional-safety": 1 },
      },
      {
        t: "That they are clear and truthful about what they want",
        s: { honesty: 2, respect: 1 },
      },
      {
        t: "That they make me feel secure instead of confused",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "That they actually show up with real intention and care",
        s: { effort: 2, consistency: 1 },
      },
    ],
  },
  {
    q: "What kind of behavior hurts you the fastest in love?",
    opts: [
      {
        t: "When someone changes their energy without explanation",
        s: { consistency: 2, reassurance: 1 },
      },
      {
        t: "When someone avoids honesty or says half-truths",
        s: { honesty: 2 },
      },
      {
        t: "When I am left overthinking whether I matter to them",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "When someone expects my care but gives very little back",
        s: { effort: 2, respect: 1 },
      },
    ],
  },
  {
    q: "What makes you feel most loved in a relationship?",
    opts: [
      {
        t: "When their behavior matches their words over time",
        s: { consistency: 2, honesty: 1 },
      },
      {
        t: "When I know they are emotionally transparent with me",
        s: { honesty: 2, "emotional-safety": 1 },
      },
      {
        t: "When they notice my worries and help me feel secure",
        s: { reassurance: 2, consistency: 1 },
      },
      {
        t: "When I can feel genuine care through what they actually do",
        s: { effort: 2, respect: 1 },
      },
    ],
  },
  {
    q: "If conflict happens, what do you need most from the other person?",
    opts: [
      {
        t: "A calm, stable presence that does not disappear",
        s: { consistency: 2, "emotional-safety": 1 },
      },
      {
        t: "Direct truth instead of vague answers or avoidance",
        s: { honesty: 2, respect: 1 },
      },
      {
        t: "Comfort that reminds me we are still okay",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "Real effort to repair things rather than empty apologies",
        s: { effort: 2, consistency: 1 },
      },
    ],
  },
  {
    q: "What kind of relationship dynamic drains you the most?",
    opts: [
      {
        t: "One where I never know what version of them I will get",
        s: { consistency: 2 },
      },
      {
        t: "One where feelings are hidden and nothing feels fully honest",
        s: { honesty: 2, "emotional-safety": 1 },
      },
      {
        t: "One where I have to guess whether I am loved",
        s: { reassurance: 2 },
      },
      {
        t: "One where basic care feels one-sided",
        s: { effort: 2, respect: 1 },
      },
    ],
  },
  {
    q: "What kind of green flag instantly catches your attention?",
    opts: [
      {
        t: "Someone who is steady, predictable, and emotionally reliable",
        s: { consistency: 2, "emotional-safety": 1 },
      },
      {
        t: "Someone who communicates clearly and does not play games",
        s: { honesty: 2, respect: 1 },
      },
      {
        t: "Someone who knows how to comfort and reassure naturally",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "Someone who puts in thoughtful effort without being asked",
        s: { effort: 2, consistency: 1 },
      },
    ],
  },
  {
    q: "When you imagine your healthiest love, what feeling is strongest?",
    opts: [
      {
        t: "Peace because things feel stable and dependable",
        s: { consistency: 2, "emotional-safety": 1 },
      },
      {
        t: "Trust because nothing important feels hidden",
        s: { honesty: 2, respect: 1 },
      },
      {
        t: "Relief because I feel emotionally secure and wanted",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "Warmth because love is shown through real actions",
        s: { effort: 2, respect: 1 },
      },
    ],
  },
  {
    q: "What do you usually find yourself craving after being hurt in love?",
    opts: [
      {
        t: "Someone whose care does not suddenly disappear",
        s: { consistency: 2, reassurance: 1 },
      },
      {
        t: "Someone who is truthful from the start",
        s: { honesty: 2 },
      },
      {
        t: "Someone who makes me feel safe to stop overthinking",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "Someone who proves their feelings through effort",
        s: { effort: 2, consistency: 1 },
      },
    ],
  },
  {
    q: "Which sentence feels most personal to your love life?",
    opts: [
      {
        t: "I need to know I can count on someone emotionally",
        s: { consistency: 2, "emotional-safety": 1 },
      },
      {
        t: "I need honesty more than charm",
        s: { honesty: 2, respect: 1 },
      },
      {
        t: "I need love that calms my fear instead of feeding it",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "I need love that feels intentional, not passive",
        s: { effort: 2, respect: 1 },
      },
    ],
  },
  {
    q: "What kind of person are you most likely to trust deeply?",
    opts: [
      {
        t: "Someone whose actions stay steady no matter the mood",
        s: { consistency: 2 },
      },
      {
        t: "Someone who tells the truth even when it is uncomfortable",
        s: { honesty: 2, respect: 1 },
      },
      {
        t: "Someone who knows how to hold emotional tenderness carefully",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "Someone who actively invests in the relationship",
        s: { effort: 2, consistency: 1 },
      },
    ],
  },
  {
    q: "What would make your heart relax the most with the right person?",
    opts: [
      {
        t: "Knowing they will still be there tomorrow in the same real way",
        s: { consistency: 2, reassurance: 1 },
      },
      {
        t: "Knowing I never have to decode mixed signals or hidden motives",
        s: { honesty: 2, "emotional-safety": 1 },
      },
      {
        t: "Knowing I can be vulnerable and still be gently held",
        s: { reassurance: 2, "emotional-safety": 1 },
      },
      {
        t: "Knowing love will be expressed through real care and follow-through",
        s: { effort: 2, respect: 1 },
      },
    ],
  },
  {
    q: "Which green flag do you need in love the most right now?",
    opts: [
      {
        t: "Consistency",
        s: { consistency: 2 },
      },
      {
        t: "Honesty",
        s: { honesty: 2 },
      },
      {
        t: "Reassurance",
        s: { reassurance: 2 },
      },
      {
        t: "Effort",
        s: { effort: 2, respect: 1, "emotional-safety": 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "consistency",
    "honesty",
    "reassurance",
    "respect",
    "effort",
    "emotional-safety",
  ];

  let best: ResultKey = "consistency";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function WhichGreenFlagDoYouNeedInLoveQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    consistency: 0,
    honesty: 0,
    reassurance: 0,
    respect: 0,
    effort: 0,
    "emotional-safety": 0,
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
      router.push(`/result/green-flag-you-need-in-love?type=${top}`);
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
          Love Green Flag Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Which Green Flag Do You Need in Love? 💚
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
          Discover the kind of healthy love your heart needs most right now.
          This personality quiz explores whether the green flag you crave most
          is consistency, honesty, reassurance, respect, effort, or emotional
          safety.
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
            This love green flag quiz is designed to help you understand what
            kind of healthy behavior your heart most needs in a relationship.
            Sometimes people focus so much on red flags that they forget to ask
            a deeper question: what does safe, nourishing, emotionally healthy
            love actually look like for me? That answer is often more personal
            than it seems. One person may need consistency more than anything.
            Another may crave honesty, reassurance, respect, effort, or a sense
            of emotional safety that allows them to fully relax.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            The kind of green flag you need most is often shaped by your
            emotional wiring, your past relationship patterns, and the places
            where your heart has felt confused, unseen, or exhausted before. If
            you have been hurt by mixed signals, you may long for consistency.
            If you have been left guessing, honesty may matter most. If you have
            carried emotional anxiety in love, reassurance or emotional safety
            may feel essential. This quiz helps put language to that deeper
            emotional need.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover the
            specific green flag that would make your love life feel healthier,
            calmer, and more real. The result is meant to feel emotionally
            accurate, gentle, and easy to share. It can be a fun relationship
            result, but it can also be a useful mirror for understanding what
            your heart needs in order to trust, soften, and grow in love.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why green flags matter in love
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Green flags matter because healthy relationships are not built only
            by avoiding obvious problems. They are built by the presence of
            things that actively create trust. A green flag is not just the
            absence of harm. It is a pattern of care, clarity, maturity, and
            emotional steadiness that makes love feel safer to live inside.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            When you understand the green flag your heart needs most, you become
            more aware of what actually supports your emotional well-being. That
            awareness can help you choose better relationships, communicate your
            needs more clearly, and stop confusing intensity with security. It
            can also help you notice the difference between being emotionally
            activated and being genuinely cared for.
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
            Once you get your result, try to treat it as a tool for reflection
            rather than a rigid rule. Most people need several healthy qualities
            in love, not just one. But there is often one green flag that feels
            especially healing or especially necessary at this point in your
            life. That is usually the place where your heart most wants peace.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your relationship
            history. What has been missing most often? What kind of behavior has
            made you feel grounded, safe, and valued? What kind of love makes
            your nervous system relax instead of forcing you to overwork for
            closeness? The more honestly you reflect, the more meaningful your
            result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you become more intentional in dating and
            love. Instead of being drawn only to chemistry or emotional
            intensity, you may start recognizing the kind of healthy pattern
            that truly supports you. Growth in love often begins when you stop
            asking only who excites your heart and start asking who helps it
            feel safe, respected, and real.
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
            This test looks at several layers of your emotional life in love. It
            explores what hurts you most quickly, what makes you trust someone
            more deeply, what kind of behavior calms your heart, and what kind
            of relationship pattern feels most nourishing to you. It also looks
            at how you respond to uncertainty, conflict, vulnerability, and
            emotional closeness.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface preferences, this quiz tries to
            identify the deeper green flag your emotional world is asking for.
            That is why the questions are reflective and feeling-centered. The
            goal is not just to describe what you like in theory, but to reveal
            the healthy relational quality that would make your heart feel more
            understood, protected, and supported in real life.
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
            <li>Consistency</li>
            <li>Honesty</li>
            <li>Reassurance</li>
            <li>Respect</li>
            <li>Effort</li>
            <li>Emotional Safety</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of what your heart needs
            most, why that green flag matters so much to you, how it can show up
            in relationships, and what kind of love may help you grow in a
            healthier direction. In that sense, this is not only a fun love quiz
            to share with friends. It is also a small reflection on the kind of
            care your heart has been asking for all along.
          </p>
        </section>
      </div>
    </main>
  );
}