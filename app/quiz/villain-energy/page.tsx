"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

type ResultKey =
  | "the_mastermind"
  | "the_charmer"
  | "the_rebel"
  | "the_lone_wolf"
  | "the_dramatic"
  | "the_silent_threat";

type Question = {
  q: string;
  opts: { t: string; s: Partial<Record<ResultKey, number>> }[];
};

const priority: ResultKey[] = [
  "the_mastermind",
  "the_charmer",
  "the_rebel",
  "the_lone_wolf",
  "the_dramatic",
  "the_silent_threat",
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  return priority.reduce((a, b) => (scores[b] > scores[a] ? b : a));
}

const questions: Question[] = [
  {
    q: "If you were a villain, your goal would be...",
    opts: [
      { t: "Total control. You don't want chaos — you want everything running exactly as planned", s: { the_mastermind: 2 } },
      { t: "Burn it all down. The system was corrupt to begin with", s: { the_rebel: 2 } },
      { t: "Absolute freedom. No rules, no obligations, no one telling you what to do", s: { the_lone_wolf: 2 } },
      { t: "To be unforgettable. The goal is the legend you leave behind", s: { the_dramatic: 2 } },
    ],
  },
  {
    q: "Your enemy just underestimated you. You...",
    opts: [
      { t: "Make sure the whole room eventually knows about their mistake", s: { the_dramatic: 2 } },
      { t: "Let them keep thinking that. It makes what comes next easier", s: { the_charmer: 2 } },
      { t: "Say nothing. Note it. Act when the timing is right", s: { the_silent_threat: 2 } },
      { t: "Already knew they would. You planned for it", s: { the_mastermind: 2 } },
    ],
  },
  {
    q: "Which villain trait do you actually have?",
    opts: [
      { t: "People like me almost immediately — and I know exactly how I do it", s: { the_charmer: 2 } },
      { t: "I already have a plan for scenarios that haven't happened yet", s: { the_mastermind: 2 } },
      { t: "I can hold a grudge for years and never let it show", s: { the_rebel: 2 } },
      { t: "I genuinely don't need anyone. That part isn't performance", s: { the_lone_wolf: 2 } },
    ],
  },
  {
    q: "Someone gets in your way. You...",
    opts: [
      { t: "Wait. You don't move against people — you outlast them", s: { the_silent_threat: 2 } },
      { t: "Find a way around them without them noticing", s: { the_mastermind: 2 } },
      { t: "Make them like you first, then redirect them", s: { the_charmer: 2 } },
      { t: "Go straight through. You don't negotiate with obstacles", s: { the_rebel: 2 } },
    ],
  },
  {
    q: "You've been betrayed by someone you trusted. You...",
    opts: [
      { t: "Cut them off completely, without explanation, without warning", s: { the_lone_wolf: 2 } },
      { t: "Stay calm. You had a contingency. You always have a contingency", s: { the_mastermind: 2 } },
      { t: "Make it known. Not immediately — but eventually, and thoroughly", s: { the_dramatic: 2 } },
      { t: "Show absolutely nothing. Process it alone, privately", s: { the_silent_threat: 2 } },
    ],
  },
  {
    q: "Which line feels most true about you?",
    opts: [
      { t: "Rules only apply to people who agreed to them", s: { the_rebel: 2 } },
      { t: "I don't need people. I want them — occasionally, on my terms", s: { the_lone_wolf: 2 } },
      { t: "I already know how this ends", s: { the_mastermind: 2 } },
      { t: "People always trust me. That's not luck", s: { the_charmer: 2 } },
    ],
  },
  {
    q: "Your villain aesthetic is...",
    opts: [
      { t: "Tailored, precise, cold. Nothing out of place", s: { the_mastermind: 2 } },
      { t: "Invisible until it's too late. No one sees you coming", s: { the_silent_threat: 2 } },
      { t: "Effortlessly likeable. You look like the last person they should worry about", s: { the_charmer: 2 } },
      { t: "The entrance. Everyone knows when you've arrived", s: { the_dramatic: 2 } },
    ],
  },
  {
    q: "Someone challenges you publicly. You...",
    opts: [
      { t: "Smile, disarm them, make them feel like they overreacted", s: { the_charmer: 2 } },
      { t: "Match their energy. Loudly. You don't back down in front of people", s: { the_rebel: 2 } },
      { t: "Say nothing. Your silence does more damage than any response would", s: { the_silent_threat: 2 } },
      { t: "Stay completely composed. It rattles them more than anything else", s: { the_mastermind: 2 } },
    ],
  },
  {
    q: "What do people consistently underestimate about you?",
    opts: [
      { t: "How little I actually need from them", s: { the_lone_wolf: 2 } },
      { t: "How much I've already noticed while appearing to do nothing", s: { the_silent_threat: 2 } },
      { t: "How far ahead I've already thought this through", s: { the_mastermind: 2 } },
      { t: "How far I'll go when I actually care about something", s: { the_rebel: 2 } },
    ],
  },
  {
    q: "Your real power is...",
    opts: [
      { t: "That I genuinely don't care what happens to me — which makes me unpredictable", s: { the_rebel: 2 } },
      { t: "That everyone trusts me, which means I'm always two steps ahead", s: { the_charmer: 2 } },
      { t: "That I need nothing from anyone, so no one has leverage over me", s: { the_lone_wolf: 2 } },
      { t: "That I see what people want before they say it — and I use that", s: { the_mastermind: 2 } },
    ],
  },
  {
    q: "In a heist movie, you'd be...",
    opts: [
      { t: "The face — you get past every obstacle just by talking", s: { the_charmer: 2 } },
      { t: "The architect — you designed the plan three weeks ago", s: { the_mastermind: 2 } },
      { t: "The one who makes the most unforgettable exit", s: { the_dramatic: 2 } },
      { t: "The one who goes rogue when the plan doesn't feel right", s: { the_rebel: 2 } },
    ],
  },
  {
    q: "Your villain origin story starts with...",
    opts: [
      { t: "Being told you were too much — and deciding to become exactly that", s: { the_dramatic: 2 } },
      { t: "Realizing the rules were written by people who benefited from them", s: { the_rebel: 2 } },
      { t: "The day you realized people believe whatever you make them believe", s: { the_charmer: 2 } },
      { t: "The moment you decided never to need anyone ever again", s: { the_lone_wolf: 2 } },
    ],
  },
];

export default function VillainEnergyQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    the_mastermind: 0,
    the_charmer: 0,
    the_rebel: 0,
    the_lone_wolf: 0,
    the_dramatic: 0,
    the_silent_threat: 0,
  });

  const progress = useMemo(
    () => ((current + 1) / questions.length) * 100,
    [current]
  );

  function handleOption(s: Partial<Record<ResultKey, number>>) {
    const next = { ...scores };
    for (const key in s) {
      next[key as ResultKey] =
        (next[key as ResultKey] || 0) + (s[key as ResultKey] || 0);
    }
    if (current + 1 < questions.length) {
      setScores(next);
      setCurrent(current + 1);
    } else {
      router.push(`/result/villain-energy?type=${pickTop(next)}`);
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
          Villain Energy Personality Test
        </p>

        <h1 style={{ fontSize: "34px", lineHeight: 1.2, marginBottom: "12px", color: "#111827" }}>
          What Kind of Villain Energy Do You Have? 🖤
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
          Everyone has a shadow side. This quiz explores whether your energy
          feels most like a cold mastermind, a magnetic charmer, a defiant
          rebel, a self-sufficient lone wolf, a theatrical dramatic, or a
          quietly dangerous silent threat.
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
            {q.opts.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOption(opt.s)}
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
                  boxShadow: "0 8px 18px rgba(251,113,133,0.18)",
                  fontFamily: "Arial, sans-serif",
                  textAlign: "left",
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
            background: "rgba(255,255,255,0.65)",
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
            Everyone has a shadow side — a set of traits that would read as
            dangerous, threatening, or powerful if turned outward without
            restraint. This quiz is not about whether you are good or bad. It
            is about what kind of power you carry, how you instinctively move
            when you feel threatened, and what your natural edge looks like
            when you stop managing it for other people&apos;s comfort.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Not everyone&apos;s shadow looks the same. Some people&apos;s
            unconstrained self is a strategist — cold, precise, always three
            moves ahead. Some people burn things down on principle. Some charm
            their way through everything. Some go completely alone. The shape
            your villain energy takes is not random: it reflects your
            temperament, your history, and the specific qualities you have been
            taught to keep in check. By answering twelve questions about how
            you naturally respond to power, conflict, and other people, you can
            discover which of six villain types fits you most closely.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Your result is not a judgment. It is a description of your dominant
            power mode — the energy that emerges when you stop performing for
            the room and operate from your most unmanaged self. Think of it as
            the version of you that exists when no one is watching and nothing
            is at stake except what you actually want.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            Why your villain energy matters
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            In Jungian psychology, the shadow is not the enemy — it is the part
            of yourself that contains suppressed power, creativity, and drive.
            Carl Jung argued that the shadow, when integrated rather than
            denied, makes a person more whole rather than more dangerous. The
            problem is not the traits themselves. The problem is when they
            operate unconsciously — when you project them outward, or when they
            surface at the wrong moment because you never gave them a
            legitimate outlet.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Understanding your villain energy gives you access to the strengths
            buried inside it. The mastermind&apos;s shadow contains genuine
            strategic intelligence. The rebel&apos;s shadow contains real moral
            courage. The lone wolf&apos;s contains a self-sufficiency most
            people never develop. Knowing which type you carry — and what the
            healthy version of it looks like — is more useful than pretending
            the energy isn&apos;t there.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            How to use your result
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Read your result as a description of your default power mode — not
            your entire personality, and not a fixed identity. Most people can
            access more than one villain type depending on context and
            what&apos;s at stake. But one tends to feel most like home: the
            energy that requires no effort, that shows up automatically when
            you are stressed, threatened, or simply not trying to manage
            anyone&apos;s impression of you. That is the one this quiz is
            designed to surface.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Each result also includes a growth path — the shadow of the shadow.
            Every villain type has a version of itself that works against you
            rather than for you: the mastermind whose strategy tips into
            paranoia, the charmer whose ease tips into inauthenticity, the
            rebel whose defiance tips into self-sabotage. Knowing your type
            helps you recognize when your natural power is landing — and when
            it is starting to cost you something.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            What this test explores
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            This quiz looks at several dimensions of how you move through the
            world when you are operating from power rather than performance. It
            explores how you respond when someone underestimates you, how you
            handle betrayal, what you do when someone gets in your way, what
            you think your real power actually is, and what kind of origin
            story your life has been building toward. It also looks at your
            relationship to rules, to other people&apos;s approval, to
            solitude, and to being seen.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Rather than sorting you into a fixed box, the quiz tries to
            describe the specific texture of your edge — which is almost always
            more interesting than knowing your personality in general. The
            villain archetype strips away the social performance and asks
            what&apos;s underneath. This quiz tries to make some of that
            visible in a way that feels like recognition rather than reduction.
          </p>

          <h3 style={{ fontSize: "21px", fontWeight: 700, marginBottom: "10px", color: "#111827" }}>
            Possible results
          </h3>

          <ul style={{ paddingLeft: "22px", lineHeight: 1.9, fontSize: "16px", marginTop: 0, marginBottom: "18px" }}>
            <li>The Mastermind</li>
            <li>The Charmer</li>
            <li>The Rebel</li>
            <li>The Lone Wolf</li>
            <li>The Dramatic</li>
            <li>The Silent Threat</li>
          </ul>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: 0 }}>
            Each result comes with a detailed description of your villain
            energy, what it looks like in real life, where it becomes a genuine
            strength, where it tends to work against you, and what the most
            integrated version of it looks like. In that sense, this is not
            only a fun personality quiz. It is also a small reflection on the
            parts of yourself you have been taught to keep quiet — and what
            they are actually worth.
          </p>
        </section>
      </div>
    </main>
  );
}
