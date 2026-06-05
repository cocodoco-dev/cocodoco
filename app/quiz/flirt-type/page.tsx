"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "subtle_charmer"
  | "playful_teaser"
  | "sincere_connector"
  | "confident_pursuer"
  | "soft_romantic"
  | "mystery_keeper";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When you like someone, what is your first instinct?",
    opts: [
      { t: "Wait for them to notice you — you are subtle about it", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "Find a reason to joke or tease them about something", s: { playful_teaser: 2 } },
      { t: "Ask them something that actually means something", s: { sincere_connector: 2, soft_romantic: 1 } },
      { t: "Make it obvious — you are not really built for subtlety", s: { confident_pursuer: 2 } },
    ],
  },
  {
    q: "What does your flirting usually look like from the outside?",
    opts: [
      { t: "A lot of eye contact and small, deliberate gestures", s: { subtle_charmer: 2 } },
      { t: "Jokes, banter, and a lot of laughing", s: { playful_teaser: 2 } },
      { t: "Long conversations that go deeper than they expected", s: { sincere_connector: 2 } },
      { t: "Clear signals — you do not really do ambiguous", s: { confident_pursuer: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "What does your ideal flirting moment look like?",
    opts: [
      { t: "A slow, charged silence where neither of you says what you are really thinking", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "Back-and-forth where you are both laughing and keeping each other on your toes", s: { playful_teaser: 2 } },
      { t: "A real conversation where you both say something true", s: { sincere_connector: 2, soft_romantic: 1 } },
      { t: "A moment where you just decide to go for it", s: { confident_pursuer: 2 } },
    ],
  },
  {
    q: "How do you usually get someone's attention?",
    opts: [
      { t: "Being present in a way they cannot quite explain", s: { mystery_keeper: 2, subtle_charmer: 1 } },
      { t: "Being funny in a way they did not expect", s: { playful_teaser: 2 } },
      { t: "Asking about something they clearly care about", s: { sincere_connector: 2 } },
      { t: "Making direct eye contact or saying something bold", s: { confident_pursuer: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "What is the most flirtatious thing you naturally do?",
    opts: [
      { t: "Remember a small detail they mentioned and bring it up later", s: { subtle_charmer: 2, sincere_connector: 1 } },
      { t: "Turn everything into a playful challenge", s: { playful_teaser: 2 } },
      { t: "Give them your full attention in a room full of people", s: { sincere_connector: 2 } },
      { t: "Compliment them directly and mean every word", s: { soft_romantic: 2, confident_pursuer: 1 } },
    ],
  },
  {
    q: "What makes you feel like the flirting is actually working?",
    opts: [
      { t: "The way they look at you a second longer than necessary", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "They start teasing you back", s: { playful_teaser: 2 } },
      { t: "The conversation goes somewhere neither of you planned", s: { sincere_connector: 2 } },
      { t: "They stop playing it cool and just say how they feel", s: { confident_pursuer: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "What is your biggest flirting strength?",
    opts: [
      { t: "Creating tension without ever saying it out loud", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "Making someone laugh until they forget to be nervous", s: { playful_teaser: 2 } },
      { t: "Making someone feel like the most interesting person in the room", s: { sincere_connector: 2 } },
      { t: "Being brave enough to actually say what you mean", s: { confident_pursuer: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "What kind of compliment do you most naturally give?",
    opts: [
      { t: "Something specific and quiet — a detail only you noticed", s: { subtle_charmer: 2, sincere_connector: 1 } },
      { t: "Something teasing that is secretly a compliment", s: { playful_teaser: 2 } },
      { t: "Something that shows you actually listened and remembered", s: { sincere_connector: 2 } },
      { t: "Something warm and direct that catches them off guard", s: { soft_romantic: 2, confident_pursuer: 1 } },
    ],
  },
  {
    q: "How do you act when someone you like is nearby?",
    opts: [
      { t: "Calmer than usual — you go quieter and more deliberate", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "Funnier than usual — the jokes come out faster", s: { playful_teaser: 2 } },
      { t: "More curious than usual — you ask more questions", s: { sincere_connector: 2 } },
      { t: "More open than usual — you just say things you normally hold back", s: { soft_romantic: 2, confident_pursuer: 1 } },
    ],
  },
  {
    q: "What is your flirting weakness?",
    opts: [
      { t: "When someone rushes the energy before it has built properly", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "When someone cannot take a joke or play along", s: { playful_teaser: 2 } },
      { t: "When the conversation stays completely surface-level", s: { sincere_connector: 2 } },
      { t: "When someone is impossible to read no matter what you do", s: { confident_pursuer: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "What does someone have to do to genuinely catch your interest?",
    opts: [
      { t: "Hold your gaze just long enough to make it feel like something", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "Make you laugh without trying too hard", s: { playful_teaser: 2 } },
      { t: "Say something that actually surprises you", s: { sincere_connector: 2 } },
      { t: "Be completely unafraid to be direct with you", s: { confident_pursuer: 2, soft_romantic: 1 } },
    ],
  },
  {
    q: "At your core, your flirting style feels most like…",
    opts: [
      { t: "A quiet invitation — felt but never quite said", s: { subtle_charmer: 2, mystery_keeper: 1 } },
      { t: "A game both of you are winning", s: { playful_teaser: 2 } },
      { t: "A real conversation that went somewhere unexpected", s: { sincere_connector: 2 } },
      { t: "Warmth that does not apologize for being warm", s: { soft_romantic: 2, confident_pursuer: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "subtle_charmer",
    "playful_teaser",
    "sincere_connector",
    "confident_pursuer",
    "soft_romantic",
    "mystery_keeper",
  ];

  let best: ResultKey = "subtle_charmer";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function FlirtTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    subtle_charmer: 0,
    playful_teaser: 0,
    sincere_connector: 0,
    confident_pursuer: 0,
    soft_romantic: 0,
    mystery_keeper: 0,
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
      router.push(`/result/flirt-type?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
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
          Flirt Type Personality Test
        </p>

        <h1 style={{ fontSize: "34px", lineHeight: 1.2, marginBottom: "12px", color: "#111827" }}>
          What Kind of Flirt Are You? 💘
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
          Discover the flirting style that comes most naturally to you. This quiz
          explores whether your energy feels most like a subtle charmer, a playful
          teaser, a sincere connector, a confident pursuer, a soft romantic, or a
          mystery keeper.
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

        <p style={{ marginBottom: "20px", color: "#374151", fontSize: "16px", fontWeight: 700 }}>
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

          <div style={{ display: "flex", flexDirection: "column", gap: "12px", alignItems: "center" }}>
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
          <h2 style={{ fontSize: "25px", fontWeight: 700, marginTop: 0, marginBottom: "14px", color: "#111827" }}>
            About this quiz
          </h2>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            This flirt type quiz is designed to reveal the specific way your
            romantic energy naturally moves toward people you are interested in.
            Flirting is not one style fits all. Some people create electricity
            through restraint and presence. Some do it through humor and
            challenge. Some through warmth, directness, depth, or the particular
            magnetism of someone who does not give everything away. Each of these
            styles is real, effective in its own way, and rooted in something
            genuine about who you are.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Most people flirt the way they feel most comfortable — not the way
            they were taught or told they should. Your natural flirting style
            tends to reflect your broader personality: how you communicate, what
            makes you feel safe in connection, and what kind of energy you bring
            into situations where something romantic might be at stake. That is
            why this quiz explores not just what you do when you flirt, but how
            you think, how you respond to others, and what makes you feel like
            something is actually working.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            By answering twelve reflective questions about how you naturally
            behave when you are interested in someone, you can discover which of
            six flirt types fits you most closely. The result is designed to feel
            accurate, easy to share, and genuinely interesting — both as
            something fun and as a small window into your relational style.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            Why your flirt type matters
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Understanding how you flirt helps you understand how you connect. The
            same energy that shows up in flirting tends to show up in how you
            pursue things you care about, how you handle uncertainty in
            relationships, and how you signal interest more broadly. Someone who
            flirts through depth and questions is often someone who values depth
            and feels most seen through it. Someone who flirts through humor is
            often someone who uses levity as a form of genuine connection rather
            than avoidance.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Knowing your flirt type also helps you recognize mismatches before
            they become frustrating. A subtle charmer and a confident pursuer can
            spend weeks in a charged dynamic where neither is sure the other is
            actually interested — because each reads the other&apos;s style as
            ambiguous or overwhelming by turns. Understanding the styles makes the
            signals more readable, for yourself and for the people you are
            interested in.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            How to use your result
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Once you get your result, try reading it as a description of your
            default mode — the style that emerges most naturally when you are not
            overthinking it. Most people can access more than one flirt style
            depending on context and connection, but one tends to feel most like
            home. That core style often reveals something real about how you
            experience attraction and how you most naturally try to create it.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Your result also includes a growth path. Every flirt type has a
            shadow — a version of the style that works against you rather than
            for you. The subtle charmer whose subtlety becomes invisibility. The
            playful teaser whose humor becomes a wall. The sincere connector who
            goes so deep so fast that people feel overwhelmed. Knowing your type
            helps you recognize when your natural style is landing and when it
            might need a small adjustment.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            What this test explores
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            This test explores several dimensions of romantic communication style.
            It looks at how you initiate, what you do when you are near someone
            you like, what kind of attention you give and seek, how you read
            signals from others, what makes you feel like a connection is real,
            and what your flirting costs you when it does not work the way you
            hoped. It also examines whether your style leads with warmth, wit,
            depth, confidence, mystery, or presence.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Rather than labeling you with a fixed type, this quiz tries to
            describe how your specific energy moves in romantic contexts — which
            is almost always more illuminating than knowing your personality in
            general. Flirting is where a lot of what we feel but do not say
            becomes visible. This quiz tries to make some of that visible in a
            way that feels like recognition rather than reduction.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            Possible results
          </h3>

          <ul style={{ paddingLeft: "22px", lineHeight: 1.9, fontSize: "16px", marginTop: 0, marginBottom: "18px" }}>
            <li>The Subtle Charmer</li>
            <li>The Playful Teaser</li>
            <li>The Sincere Connector</li>
            <li>The Confident Pursuer</li>
            <li>The Soft Romantic</li>
            <li>The Mystery Keeper</li>
          </ul>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: 0 }}>
            Each result comes with a detailed explanation of your flirting style,
            what it communicates to others, where it shines, where it sometimes
            works against you, and what a healthier or more intentional version of
            it looks like. In that sense, this is not only a fun personality quiz.
            It is also a small reflection on how your heart moves when it is
            interested in someone.
          </p>
        </section>
      </div>
    </main>
  );
}
