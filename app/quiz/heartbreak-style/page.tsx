"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "the_griever"
  | "the_avoider"
  | "the_analyzer"
  | "the_romantic"
  | "the_rebuilder"
  | "the_protector";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "In the days immediately after a breakup, you most likely...",
    opts: [
      { t: "Let yourself cry and feel it — you need space to actually grieve", s: { the_griever: 2 } },
      { t: "Fill your schedule instantly — being still feels unbearable", s: { the_avoider: 2 } },
      { t: "Replay everything in your head, tracing where it went wrong", s: { the_analyzer: 2, the_griever: 1 } },
      { t: "Hold onto some quiet hope — maybe this isn't really the end", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "When someone asks how you're doing after a breakup...",
    opts: [
      { t: "You're honest — you tell them you're struggling and need to talk", s: { the_griever: 2 } },
      { t: "You say you're fine and change the subject", s: { the_avoider: 2, the_protector: 1 } },
      { t: "You give a detailed account of what probably went wrong", s: { the_analyzer: 2 } },
      { t: "You mention how much you miss them — the good things, the memories", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "The hardest part of heartbreak for you is...",
    opts: [
      { t: "The grief itself — the rawness, the missing, the weight of it", s: { the_griever: 2 } },
      { t: "Having to slow down long enough to actually feel it", s: { the_avoider: 2, the_protector: 1 } },
      { t: "Not having answers — not understanding why it ended this way", s: { the_analyzer: 2 } },
      { t: "Losing the future you had imagined with that person", s: { the_romantic: 2, the_griever: 1 } },
    ],
  },
  {
    q: "A month after a breakup, you're most likely...",
    opts: [
      { t: "Still processing — healing takes as long as it takes", s: { the_griever: 2 } },
      { t: "Busier than ever — you've filled every available hour", s: { the_avoider: 2 } },
      { t: "Still trying to understand it — the why keeps coming back", s: { the_analyzer: 2 } },
      { t: "Occasionally checking their social media or rereading old messages", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "After heartbreak, which feels most true about how you cope?",
    opts: [
      { t: "I need to feel the pain fully before I can move forward", s: { the_griever: 2 } },
      { t: "I'd rather stay busy and keep moving — sitting with it makes it worse", s: { the_avoider: 2 } },
      { t: "I use the pain as fuel — I want to come out of this stronger", s: { the_rebuilder: 2 } },
      { t: "I close off a little — I'm more careful the next time I trust someone", s: { the_protector: 2 } },
    ],
  },
  {
    q: "When you think about your ex after a breakup, you mostly...",
    opts: [
      { t: "Feel a deep sadness — you loved them, and that love was real", s: { the_griever: 2 } },
      { t: "Try not to think about them — going there makes everything worse", s: { the_avoider: 2, the_protector: 1 } },
      { t: "Want to understand — their feelings, their reasons, what they were thinking", s: { the_analyzer: 2 } },
      { t: "Remember the good more than the hurt — the warmth lingers longest", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "Which describes your first week of heartbreak most accurately?",
    opts: [
      { t: "Emotionally open — you let yourself fall apart, you need people around", s: { the_griever: 2 } },
      { t: "Distracted — your schedule fills up almost immediately", s: { the_avoider: 2 } },
      { t: "Pulled inward — you don't want to be vulnerable with anyone right now", s: { the_protector: 2 } },
      { t: "Searching for meaning — looking for what this experience can teach you", s: { the_rebuilder: 2 } },
    ],
  },
  {
    q: "After a significant heartbreak, what changes most about you?",
    opts: [
      { t: "You feel more emotionally open — grief softened something in you", s: { the_griever: 2 } },
      { t: "You become harder to reach — your walls quietly go up", s: { the_protector: 2 } },
      { t: "You know yourself better — you came out of it with real self-awareness", s: { the_rebuilder: 2, the_analyzer: 1 } },
      { t: "You carry some part of them with you — they don't fully leave", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "When you imagine fully letting go of someone, you feel...",
    opts: [
      { t: "Sad but eventually ready — grief is the path through, not around", s: { the_griever: 2 } },
      { t: "Like something worth working toward — you want to come out of this different", s: { the_rebuilder: 2 } },
      { t: "Uneasy — there are still things you don't understand and need to", s: { the_analyzer: 2 } },
      { t: "Resistant — letting go feels like losing something genuinely real", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "If you unexpectedly bumped into your ex, you'd most likely...",
    opts: [
      { t: "Feel a wave of emotion — it would hit harder than you expected", s: { the_griever: 2, the_romantic: 1 } },
      { t: "Keep it brief and composed — you'd rather not reopen anything", s: { the_protector: 2, the_avoider: 1 } },
      { t: "Feel a pull to ask questions — how they are, what they think now", s: { the_analyzer: 2 } },
      { t: "Feel something jump inside — some part of you would still be glad to see them", s: { the_romantic: 2 } },
    ],
  },
  {
    q: "What do you most need from people around you during heartbreak?",
    opts: [
      { t: "Space to feel everything, without being told to move on", s: { the_griever: 2 } },
      { t: "Distraction — plans, laughter, being kept busy and out of your head", s: { the_avoider: 2 } },
      { t: "Someone to help you process and make sense of what happened", s: { the_analyzer: 2, the_griever: 1 } },
      { t: "Encouragement to grow — people who believe you'll come out of this better", s: { the_rebuilder: 2 } },
    ],
  },
  {
    q: "When you look back on past heartbreaks, you mostly...",
    opts: [
      { t: "Remember how much they hurt — and how much you actually felt", s: { the_griever: 2 } },
      { t: "Prefer not to revisit them — you've moved past and want to stay there", s: { the_avoider: 2, the_protector: 1 } },
      { t: "Can see the patterns and warning signs you missed — you understand it now", s: { the_analyzer: 2 } },
      { t: "Still feel something — even old heartbreaks hold a kind of tenderness", s: { the_romantic: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "the_griever",
    "the_avoider",
    "the_analyzer",
    "the_romantic",
    "the_rebuilder",
    "the_protector",
  ];

  let best: ResultKey = "the_griever";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function HeartbreakStyleQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    the_griever: 0,
    the_avoider: 0,
    the_analyzer: 0,
    the_romantic: 0,
    the_rebuilder: 0,
    the_protector: 0,
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
      router.push(`/result/heartbreak-style?type=${top}`);
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
          Love & Relationships Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What Is Your Heartbreak Style? 💔
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
          Discover how you move through heartbreak — whether you grieve deeply,
          stay busy, overthink everything, hold on, rebuild, or quietly close
          off. Your heartbreak style reveals something real about how you love.
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
            This heartbreak style quiz is designed to reveal the specific way
            you move through loss in love. Heartbreak is not one experience —
            it is different for every person, shaped by personality, emotional
            history, and the particular way each individual processes pain. Some
            people need to feel everything before they can heal. Others keep
            moving until they can finally slow down. Some think their way
            through. Some hold on. Some rebuild. Some quietly close off.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            None of these styles is the right way to go through heartbreak.
            Each has its own strengths and its own challenges, and each tends
            to emerge from a combination of temperament and what earlier
            experiences with loss have taught the nervous system to expect and
            protect against. Understanding your specific style is not about
            judging how you grieve — it is about seeing your patterns clearly
            enough to work with them rather than being driven by them.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            By answering a series of reflective questions about your instincts,
            behaviors, and emotional reactions during heartbreak, this quiz
            identifies which of six core styles most closely matches your
            experience. The result is designed to feel recognizable and honest —
            a description of how you actually move through loss, not how you
            think you should.
          </p>

          <h3
            style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}
          >
            Why heartbreak style matters
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            The way you handle heartbreak is one of the most revealing things
            about you as a person in love. It shows what you are most afraid
            of losing, how you relate to emotional pain, and what your nervous
            system has learned to do when something important ends. It also
            tends to repeat — the same patterns that showed up in your first
            heartbreak are usually still visible in your most recent one,
            refined but recognizable.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Knowing your heartbreak style can help you understand why recovery
            feels the way it does for you, what kind of support actually helps,
            and where your particular pattern might be keeping you from healing
            as fully as you could. It can also help the people around you
            understand what you need — and what they should probably not do or
            say when you are in the middle of loss.
          </p>

          <h3
            style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}
          >
            How to read your result
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            When you receive your result, treat it as a mirror rather than a
            verdict. Your heartbreak style is not a flaw or a strength — it is
            a pattern, and like all patterns it has both useful and unhelpful
            aspects. The result will describe how your style shows up in real
            heartbreaks, what strengths it carries, where it may create
            difficulty, and what growth can look like for your specific way of
            grieving.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Most people find that reading their heartbreak style clearly — with
            recognition rather than judgment — is itself useful. Grief is harder
            when you do not understand what you are doing inside it. Naming the
            pattern gives you something to work with.
          </p>

          <h3
            style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}
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
            <li>The Deep Feeler — feels everything fully, needs time to grieve</li>
            <li>The Runner — stays busy, avoids stillness, outpaces the pain</li>
            <li>The Overthinker — replays and analyzes until understanding arrives</li>
            <li>The Keeper — holds on to the person and what was real between you</li>
            <li>The Phoenix — transforms pain into growth and forward momentum</li>
            <li>The Guardian — closes off quietly, becomes more careful next time</li>
          </ul>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: 0 }}>
            Each result comes with a full description of your heartbreak style,
            what it says about how you love, your strengths, what may make
            healing harder, and a growth path toward moving through loss in a
            way that serves you better. Heartbreak is one of the most universal
            human experiences. This quiz is a small attempt to make it feel a
            little less nameless.
          </p>
        </section>
      </div>
    </main>
  );
}
