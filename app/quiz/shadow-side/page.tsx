"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "overthinker"
  | "people_pleaser"
  | "emotional_escapist"
  | "guarded_controller"
  | "self_saboteur"
  | "silent_storm";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When you are overwhelmed, what do you tend to do first?",
    opts: [
      {
        t: "Think about everything until it gets even heavier",
        s: { overthinker: 2, silent_storm: 1 },
      },
      {
        t: "Focus on everyone else so I do not deal with myself",
        s: { people_pleaser: 2, emotional_escapist: 1 },
      },
      {
        t: "Avoid it and distract myself however I can",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "Shut down and try to stay in control",
        s: { guarded_controller: 2, silent_storm: 1 },
      },
    ],
  },
  {
    q: "What hurts you more than you usually admit?",
    opts: [
      {
        t: "The feeling that I made the wrong choice",
        s: { overthinker: 2 },
      },
      {
        t: "The fear of disappointing people",
        s: { people_pleaser: 2 },
      },
      {
        t: "The pressure of facing painful feelings directly",
        s: { emotional_escapist: 2 },
      },
      {
        t: "The idea of being emotionally exposed",
        s: { guarded_controller: 2, silent_storm: 1 },
      },
    ],
  },
  {
    q: "Which pattern sounds most like your hidden struggle?",
    opts: [
      {
        t: "I replay things in my head long after they end",
        s: { overthinker: 2 },
      },
      {
        t: "I say yes when I really mean no",
        s: { people_pleaser: 2 },
      },
      {
        t: "I numb out when things feel too intense",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "I act calm even when I am holding too much inside",
        s: { silent_storm: 2, guarded_controller: 1 },
      },
    ],
  },
  {
    q: "When something good enters your life, what can make it hard to fully receive?",
    opts: [
      {
        t: "I start worrying about everything that could go wrong",
        s: { overthinker: 2, self_saboteur: 1 },
      },
      {
        t: "I focus more on keeping others happy than enjoying it",
        s: { people_pleaser: 2 },
      },
      {
        t: "I pull away before it becomes too emotionally real",
        s: { emotional_escapist: 2, guarded_controller: 1 },
      },
      {
        t: "I keep too much of myself hidden",
        s: { guarded_controller: 2, silent_storm: 1 },
      },
    ],
  },
  {
    q: "What do you most often hide from other people?",
    opts: [
      {
        t: "How anxious my mind actually is",
        s: { overthinker: 2 },
      },
      {
        t: "How tired I am from always trying to be good for everyone",
        s: { people_pleaser: 2 },
      },
      {
        t: "How often I avoid what I really feel",
        s: { emotional_escapist: 2 },
      },
      {
        t: "How intense my emotions are underneath the surface",
        s: { silent_storm: 2, guarded_controller: 1 },
      },
    ],
  },
  {
    q: "What kind of self-protection feels most familiar?",
    opts: [
      {
        t: "Trying to think my way out of pain",
        s: { overthinker: 2 },
      },
      {
        t: "Keeping peace so no one gets upset with me",
        s: { people_pleaser: 2 },
      },
      {
        t: "Running from discomfort before it catches up",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "Controlling what others get to see",
        s: { guarded_controller: 2 },
      },
    ],
  },
  {
    q: "Which sentence feels a little too real?",
    opts: [
      {
        t: "My mind makes everything harder than it needs to be.",
        s: { overthinker: 2 },
      },
      {
        t: "I lose myself trying to be easy to love.",
        s: { people_pleaser: 2 },
      },
      {
        t: "I disappear from my feelings when they get too big.",
        s: { emotional_escapist: 2 },
      },
      {
        t: "I hold so much in that it turns into pressure.",
        s: { silent_storm: 2, guarded_controller: 1 },
      },
    ],
  },
  {
    q: "At your core, your shadow side is closest to…",
    opts: [
      {
        t: "A mind that turns fear into endless thinking",
        s: { overthinker: 2 },
      },
      {
        t: "A heart that over-gives to feel safe",
        s: { people_pleaser: 2 },
      },
      {
        t: "A self that escapes before pain can land",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "A hidden intensity that stays tightly controlled",
        s: { guarded_controller: 2, silent_storm: 1 },
      },
    ],
  },
  {
    q: "When you feel emotionally triggered, what is most likely to happen next?",
    opts: [
      {
        t: "I spiral in my own thoughts and replay everything",
        s: { overthinker: 2, silent_storm: 1 },
      },
      {
        t: "I try to smooth things over even if I feel hurt",
        s: { people_pleaser: 2 },
      },
      {
        t: "I check out, distract myself, or avoid it completely",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "I get quieter, colder, and more controlled",
        s: { guarded_controller: 2, silent_storm: 1 },
      },
    ],
  },
  {
    q: "What kind of fear quietly shapes your choices the most?",
    opts: [
      {
        t: "The fear of making mistakes I cannot undo",
        s: { overthinker: 2 },
      },
      {
        t: "The fear of being too much or disappointing people",
        s: { people_pleaser: 2 },
      },
      {
        t: "The fear of feeling pain too directly",
        s: { emotional_escapist: 2 },
      },
      {
        t: "The fear of losing control over myself",
        s: { guarded_controller: 2, self_saboteur: 1 },
      },
    ],
  },
  {
    q: "What do you do when you know something in your life is not working anymore?",
    opts: [
      {
        t: "I think about it endlessly but struggle to act",
        s: { overthinker: 2, self_saboteur: 1 },
      },
      {
        t: "I keep adjusting myself to make it easier for others",
        s: { people_pleaser: 2 },
      },
      {
        t: "I avoid looking at it directly for as long as I can",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "I contain everything and tell myself I can handle it alone",
        s: { silent_storm: 2, guarded_controller: 1 },
      },
    ],
  },
  {
    q: "Which description feels most like the part of you people do not fully see?",
    opts: [
      {
        t: "A restless mind that rarely lets me fully relax",
        s: { overthinker: 2 },
      },
      {
        t: "A self that bends too much to stay accepted",
        s: { people_pleaser: 2 },
      },
      {
        t: "A pattern of slipping away from what hurts",
        s: { emotional_escapist: 2, self_saboteur: 1 },
      },
      {
        t: "A powerful emotional buildup hidden behind control",
        s: { silent_storm: 2, guarded_controller: 1 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "overthinker",
    "people_pleaser",
    "emotional_escapist",
    "guarded_controller",
    "self_saboteur",
    "silent_storm",
  ];

  let best: ResultKey = "overthinker";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function ShadowSideQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    overthinker: 0,
    people_pleaser: 0,
    emotional_escapist: 0,
    guarded_controller: 0,
    self_saboteur: 0,
    silent_storm: 0,
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
      router.push(`/result/shadow-side?type=${top}`);
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
          Self-Reflection Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Is Your Shadow Side? 🌑
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
          Explore the hidden emotional pattern that tends to appear when you
          feel stressed, hurt, overwhelmed, or unprotected. This quiz is not
          about judging you. It is about understanding the part of you that
          forms around fear, defense, and survival.
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
            This shadow side quiz is designed to help you explore the hidden
            patterns that show up when you feel stressed, overwhelmed, hurt, or
            emotionally unprotected. Your shadow side is not your whole self. It
            is the part of you that forms around fear, self-protection, and
            emotional survival. Most people do not show this side all the time,
            but it often appears in moments of pressure, uncertainty, or deep
            vulnerability.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people get trapped in overthinking. Others lose themselves in
            pleasing people, escaping emotions, controlling vulnerability,
            sabotaging themselves, or holding so much inside that it turns into
            quiet pressure. This test looks at the defensive pattern your mind
            and heart may fall back on when life becomes emotionally difficult.
            It is less about what you do at your best and more about what
            happens when you feel least safe.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover
            whether your shadow side is closest to The Overthinker, The People
            Pleaser, The Emotional Escapist, The Guarded Controller, The
            Self-Saboteur, or The Silent Storm. The result is meant to be
            thoughtful, emotionally insightful, and easy to reflect on rather
            than harsh or judgmental.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why shadow patterns matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Shadow patterns matter because they often shape your life quietly.
            They influence how you respond to stress, how you handle closeness,
            how you cope with fear, and what you do when you feel emotionally
            threatened. Without awareness, these patterns can repeat themselves
            in relationships, work, decision-making, and self-image without you
            fully realizing why.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your shadow side can bring compassion to behaviors you
            may have judged in yourself. Instead of seeing those patterns as
            proof that something is wrong with you, you can begin to see them as
            protective strategies that formed for a reason. Awareness does not
            erase them instantly, but it helps you respond more consciously
            rather than automatically.
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
            Once you receive your result, try to treat it as a mirror rather
            than a fixed identity. Your shadow side is not a label that defines
            you forever. It is simply the coping pattern that may appear most
            strongly when your inner world feels unsafe, overloaded, or
            emotionally exposed.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your real life.
            What happens when you feel anxious, rejected, overwhelmed, or
            uncertain? Do you think too much, over-give, avoid, control, shut
            down, or undermine yourself? The more honestly you notice the
            pattern, the more useful the result becomes. Reflection is what
            turns self-recognition into growth.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you see the hidden cost of your coping
            style. The Overthinker may need trust. The People Pleaser may need
            boundaries. The Emotional Escapist may need emotional tolerance. The
            Guarded Controller may need vulnerability. The Self-Saboteur may
            need self-belief. The Silent Storm may need expression. Each shadow
            side protects something, but each one also asks for healing in a
            different way.
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
            This test explores your emotional defenses, avoidance patterns,
            hidden fears, self-protective habits, and the ways you tend to
            respond when pain feels too close. It looks at how you react to
            overwhelm, how you protect yourself from disappointment, and what
            kind of shadow pattern becomes most active when your sense of safety
            is threatened.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on personality at its brightest, this quiz
            explores personality under emotional strain. Some people spiral in
            thought. Some disappear into pleasing. Some detach, control,
            implode, or quietly unravel. The goal is not to shame those
            patterns, but to name them clearly enough that they no longer
            control you from the dark.
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
            <li>The Overthinker</li>
            <li>The People Pleaser</li>
            <li>The Emotional Escapist</li>
            <li>The Guarded Controller</li>
            <li>The Self-Saboteur</li>
            <li>The Silent Storm</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a fuller explanation of your hidden coping
            pattern, how it tends to show up, what it protects, and what kind of
            growth may help soften it. In that sense, this is not only a dark
            personality quiz. It is also a chance to understand the part of
            yourself that learned to survive before it learned to heal.
          </p>
        </section>
      </div>
    </main>
  );
}