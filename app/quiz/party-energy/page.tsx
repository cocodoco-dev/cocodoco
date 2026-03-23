"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "social_spark"
  | "chill_anchor"
  | "chaotic_icon"
  | "mysterious_observer"
  | "golden_hype"
  | "soft_connector";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When you arrive at a party, what usually happens first?",
    opts: [
      {
        t: "I start talking and the energy picks up fast",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "I find the vibe and settle in naturally",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "Something weird, funny, or iconic happens around me",
        s: { chaotic_icon: 2, golden_hype: 1 },
      },
      {
        t: "I quietly observe before deciding where I belong",
        s: { mysterious_observer: 2, chill_anchor: 1 },
      },
    ],
  },
  {
    q: "What role do you naturally play in a group setting?",
    opts: [
      {
        t: "The one who keeps conversation alive",
        s: { social_spark: 2 },
      },
      {
        t: "The one who keeps everyone comfortable",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "The one who makes the night unforgettable",
        s: { chaotic_icon: 2, golden_hype: 1 },
      },
      {
        t: "The one people get curious about",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "What kind of party moment feels most like you?",
    opts: [
      {
        t: "Laughing with everyone in the center of the room",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "Having a relaxed conversation that makes people stay longer",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "Starting something spontaneous that becomes the story of the night",
        s: { chaotic_icon: 2 },
      },
      {
        t: "Quietly catching someone’s attention without trying too hard",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "What do people probably remember most about you after a party?",
    opts: [
      {
        t: "My fun, talkative energy",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "How easy I was to be around",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "The chaos I somehow made charming",
        s: { chaotic_icon: 2, golden_hype: 1 },
      },
      {
        t: "The vibe I gave off without saying much",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "If the room gets awkward, what do you do?",
    opts: [
      {
        t: "Jump in and bring the energy back up",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "Smooth it out with calm, easy conversation",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "Say something wild enough to reset the whole mood",
        s: { chaotic_icon: 2 },
      },
      {
        t: "Watch quietly until the moment passes",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "What kind of vibe matches your party self best?",
    opts: [
      {
        t: "Bright, lively, and outgoing",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "Calm, warm, and grounding",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "Unpredictable, funny, and a little dangerous",
        s: { chaotic_icon: 2 },
      },
      {
        t: "Quiet, cool, and magnetic",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "How do people tend to feel around you at social events?",
    opts: [
      {
        t: "More energetic and more open",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "More relaxed and more themselves",
        s: { soft_connector: 2, chill_anchor: 1 },
      },
      {
        t: "Like anything could happen",
        s: { chaotic_icon: 2, golden_hype: 1 },
      },
      {
        t: "Intrigued, even if they cannot explain why",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "At your core, what energy do you bring to a party?",
    opts: [
      {
        t: "I light the room up",
        s: { golden_hype: 2, social_spark: 1 },
      },
      {
        t: "I make the room feel good",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "I make the room memorable",
        s: { chaotic_icon: 2 },
      },
      {
        t: "I make the room curious",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "What kind of interaction feels most natural to you at a party?",
    opts: [
      {
        t: "Talking to lots of people and keeping the mood alive",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "Making one or two people feel especially comfortable",
        s: { soft_connector: 2, chill_anchor: 1 },
      },
      {
        t: "Doing something random that somehow becomes iconic",
        s: { chaotic_icon: 2, golden_hype: 1 },
      },
      {
        t: "Saying less, but making people notice anyway",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "What is your strongest social superpower?",
    opts: [
      {
        t: "I can make almost any room feel more alive",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "I can make people feel safe and relaxed fast",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "I can turn a normal moment into a legendary one",
        s: { chaotic_icon: 2 },
      },
      {
        t: "I can create intrigue without trying too hard",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "What kind of compliments fit your vibe best?",
    opts: [
      {
        t: "You are so fun and easy to talk to",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "You have such calming energy",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "You are chaotic, but in the best way",
        s: { chaotic_icon: 2 },
      },
      {
        t: "You are so mysterious in a cool way",
        s: { mysterious_observer: 2 },
      },
    ],
  },
  {
    q: "Which party identity feels most like your true self?",
    opts: [
      {
        t: "The bright social one everyone ends up talking to",
        s: { social_spark: 2, golden_hype: 1 },
      },
      {
        t: "The grounding presence people naturally stay near",
        s: { chill_anchor: 2, soft_connector: 1 },
      },
      {
        t: "The unforgettable wildcard",
        s: { chaotic_icon: 2, golden_hype: 1 },
      },
      {
        t: "The quiet person everyone keeps noticing",
        s: { mysterious_observer: 2 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "social_spark",
    "chill_anchor",
    "chaotic_icon",
    "mysterious_observer",
    "golden_hype",
    "soft_connector",
  ];

  let best: ResultKey = "social_spark";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function PartyEnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    social_spark: 0,
    chill_anchor: 0,
    chaotic_icon: 0,
    mysterious_observer: 0,
    golden_hype: 0,
    soft_connector: 0,
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
      router.push(`/result/party-energy?type=${top}`);
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
          Party Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Energy Do You Bring to a Party? 🎉
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
          Find out what kind of social vibe you naturally bring into fun group
          settings. This quiz explores whether you are the bright spark, the
          calm center, the unforgettable wildcard, the quiet mystery, the hype
          magnet, or the gentle connector everyone feels good around.
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
            This party personality quiz is designed to help you discover the
            kind of social energy you naturally bring into fun group settings.
            Party energy is not only about being loud, extroverted, or always in
            the middle of the room. It is also about the emotional atmosphere
            you create, the way people feel around you, and the role you
            instinctively take on when a group comes together.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people lift the whole room through bright conversation and easy
            confidence. Others keep the mood grounded, create soft connection,
            bring unforgettable chaos, or attract attention through quiet
            mystery. This test looks at your natural social vibe, your group
            role, your emotional effect on other people, and the kind of energy
            you leave behind after the night ends.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of playful but revealing questions, you can
            discover whether your party energy is closest to Social Spark, Chill
            Anchor, Chaotic Icon, Mysterious Observer, Golden Hype, or Soft
            Connector. The result is meant to be fun, flattering, easy to
            share, and surprisingly accurate in the way it captures your social
            presence.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why party energy matters
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Social energy matters because people remember more than what you
            said. They remember the feeling of being around you. Some people
            make a room feel safer. Some make it more exciting. Some make it
            funnier, softer, brighter, or more magnetic. Even in casual social
            situations, your vibe shapes the atmosphere in ways you may not
            notice at first.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your party energy can help you understand your wider
            social presence too. The same qualities that show up at parties
            often show up in friendships, dating, networking, and group
            dynamics. That is why this quiz is not only about parties. It is
            also about the emotional signal you naturally give off when you are
            around other people.
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
            Once you get your result, think of it as a reflection of your most
            natural social mode rather than a rigid identity. Most people can
            act differently depending on mood, setting, or who they are with.
            But there is usually one kind of energy that feels most effortless
            and most recognizable. That is the energy this quiz is trying to
            capture.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with real situations.
            What happens when you enter a room full of people? Do you energize
            it, calm it, stir it up, charm it, or make people curious? What
            kind of memories do people seem to carry away after spending time
            with you? The more honestly you reflect, the more fun and accurate
            the result becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you understand your social strengths.
            Social Spark types often create momentum. Chill Anchor types create
            comfort. Chaotic Icon types make moments unforgettable. Mysterious
            Observer types draw attention through restraint. Golden Hype types
            radiate bright star quality. Soft Connector types make people feel
            accepted and emotionally at ease. Each vibe has its own charm.
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
            This test explores how you enter social spaces, what role you
            instinctively take in group settings, how you respond to awkward
            moments, and what emotional aftertaste you leave behind in a room.
            It is less about strict extrovert versus introvert labels and more
            about the kind of social atmosphere your presence creates.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than measuring popularity or confidence in a narrow way, this
            quiz focuses on social flavor. Some people are naturally loud. Some
            are naturally warm. Some are quietly magnetic. Some are iconic in a
            delightfully chaotic way. The goal is to capture that vibe in a way
            that feels playful, flattering, and shareable without losing the
            sense that it reflects something real.
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
            <li>Social Spark</li>
            <li>Chill Anchor</li>
            <li>Chaotic Icon</li>
            <li>Mysterious Observer</li>
            <li>Golden Hype</li>
            <li>Soft Connector</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a fuller explanation of your social vibe,
            your strengths in group settings, the kind of atmosphere you create,
            and why people tend to remember you the way they do. In that sense,
            this is not only a fun party quiz. It is also a playful reflection
            of your wider social energy.
          </p>
        </section>
      </div>
    </main>
  );
}