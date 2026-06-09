"use client";

import { useState, useMemo } from "react";
import { useRouter } from "next/navigation";

type ResultKey =
  | "the_replayer"
  | "the_forecaster"
  | "the_perfectionist"
  | "the_people_reader"
  | "the_decision_looper"
  | "the_silent_spiral";

type Question = {
  q: string;
  opts: { t: string; s: Partial<Record<ResultKey, number>> }[];
};

const priority: ResultKey[] = [
  "the_replayer",
  "the_forecaster",
  "the_perfectionist",
  "the_people_reader",
  "the_decision_looper",
  "the_silent_spiral",
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  return priority.reduce((a, b) => (scores[b] > scores[a] ? b : a));
}

const questions: Question[] = [
  {
    q: "When a conversation ends, you usually...",
    opts: [
      { t: "Replay what you said — word by word — on the way home", s: { the_replayer: 2 } },
      { t: "Start imagining how it could go wrong later", s: { the_forecaster: 2 } },
      { t: "Wonder if you said it well enough, if you could have done better", s: { the_perfectionist: 2 } },
      { t: "Analyze their reaction — what did that expression actually mean?", s: { the_people_reader: 2 } },
    ],
  },
  {
    q: "You're choosing between two options — even something small, like what to order. You tend to...",
    opts: [
      { t: "Go back and forth until time runs out — you still can't commit", s: { the_decision_looper: 2 } },
      { t: "Think about which choice you'll regret less", s: { the_replayer: 2 } },
      { t: "Ask what others think — you want to know what seems better from the outside", s: { the_people_reader: 2 } },
      { t: "Try to calculate which option has the best outcome ahead of time", s: { the_forecaster: 2 } },
    ],
  },
  {
    q: "Something embarrassing happened a few days ago. You've probably...",
    opts: [
      { t: "Wondered if the person noticed — and what they think of you now", s: { the_people_reader: 2 } },
      { t: "Replayed it with small variations — what you should have said instead", s: { the_perfectionist: 2 } },
      { t: "Re-experienced the exact words and moment over and over", s: { the_replayer: 2 } },
      { t: "Processed it alone — you're still sitting with it, quietly", s: { the_silent_spiral: 2 } },
    ],
  },
  {
    q: "Someone takes a long time to reply to your message. You...",
    opts: [
      { t: "Start imagining the reasons — are they upset? Did something change?", s: { the_forecaster: 2 } },
      { t: "Go quiet inside — you don't show it, but something shifts", s: { the_silent_spiral: 2 } },
      { t: "Wonder if you should have said it differently", s: { the_decision_looper: 2 } },
      { t: "Start reading into what they might be feeling about you specifically", s: { the_people_reader: 2, the_forecaster: 1 } },
    ],
  },
  {
    q: "What keeps you awake at night most often?",
    opts: [
      { t: "Thinking in silence — something's bothering you but you can't quite name it", s: { the_silent_spiral: 2 } },
      { t: "Something someone said — what did they really mean by that?", s: { the_people_reader: 2 } },
      { t: "Future scenarios — what if this goes wrong, or that does", s: { the_forecaster: 2 } },
      { t: "A moment from earlier — something you wish you'd handled differently", s: { the_replayer: 2 } },
    ],
  },
  {
    q: "You send a text, post something, or speak up in a group. Afterward, you...",
    opts: [
      { t: "Wonder if it was good enough — you're already thinking about what you'd change", s: { the_perfectionist: 2 } },
      { t: "Notice who's seen it and try to read their silence", s: { the_people_reader: 2 } },
      { t: "Feel a low hum of worry you can't fully explain", s: { the_silent_spiral: 2 } },
      { t: "Replay the exact wording — was the tone right? Did it land wrong?", s: { the_replayer: 2 } },
    ],
  },
  {
    q: "Before something important, you tend to...",
    opts: [
      { t: "Rehearse it — what you'll say, how it'll go, different versions of the outcome", s: { the_replayer: 2 } },
      { t: "Loop between approaches — you keep second-guessing which one is right", s: { the_decision_looper: 2 } },
      { t: "Imagine what could go wrong and mentally prepare for each scenario", s: { the_forecaster: 2 } },
      { t: "Polish every detail — you go over things that probably won't even matter", s: { the_perfectionist: 2 } },
    ],
  },
  {
    q: "You're about to meet someone new. Before you see them, you...",
    opts: [
      { t: "Wonder what they'll think of you — how will you come across?", s: { the_people_reader: 2 } },
      { t: "Think through past meetings that went awkwardly, just in case", s: { the_replayer: 2 } },
      { t: "Process the anticipation quietly — you're holding more than you show", s: { the_silent_spiral: 2 } },
      { t: "Run through possibilities — what if the conversation stalls or gets weird", s: { the_decision_looper: 2, the_forecaster: 1 } },
    ],
  },
  {
    q: "Something goes wrong that wasn't really your fault. You...",
    opts: [
      { t: "Start imagining how bad it could get from here", s: { the_forecaster: 2 } },
      { t: "Review every decision you made leading up to it — could you have done better?", s: { the_perfectionist: 2 } },
      { t: "Worry about how it looked — what people think of your role in it", s: { the_people_reader: 2 } },
      { t: "Sit with it alone for a while before saying anything to anyone", s: { the_silent_spiral: 2 } },
    ],
  },
  {
    q: "You're trying to relax, but your brain won't stop. It keeps going back to...",
    opts: [
      { t: "A decision you haven't made yet — you circle it again and again", s: { the_decision_looper: 2 } },
      { t: "A future that hasn't happened — what if it goes this way, what if that", s: { the_forecaster: 2 } },
      { t: "A moment from earlier — what you did, what you said, how it could've gone", s: { the_replayer: 2 } },
      { t: "Something unfinished — something that's not quite right and won't let you rest", s: { the_perfectionist: 2 } },
    ],
  },
  {
    q: "When your overthinking kicks in, it usually feels like...",
    opts: [
      { t: "A quiet weight you carry — no one else can really see it", s: { the_silent_spiral: 2 } },
      { t: "A loop that keeps running — you can't quite find the exit", s: { the_decision_looper: 2 } },
      { t: "An internal editor pointing out everything that wasn't quite right", s: { the_perfectionist: 2 } },
      { t: "A rapid sequence of what-ifs, each one leading to the next", s: { the_forecaster: 2 } },
    ],
  },
  {
    q: "Which feels most true about how your overthinking shows up?",
    opts: [
      { t: "I fixate on what people think of me — how I came across, what they felt", s: { the_people_reader: 2 } },
      { t: "I spiral inward — quietly and alone, without really showing it", s: { the_silent_spiral: 2 } },
      { t: "I loop on decisions — I can't settle on a choice and move on", s: { the_decision_looper: 2 } },
      { t: "I replay the past — moments, words, what I should have said or done", s: { the_replayer: 2 } },
    ],
  },
];

export default function OverthinkerTypeQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    the_replayer: 0,
    the_forecaster: 0,
    the_perfectionist: 0,
    the_people_reader: 0,
    the_decision_looper: 0,
    the_silent_spiral: 0,
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
      router.push(`/result/overthinker-type?type=${pickTop(next)}`);
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
        padding: "48px 18px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 style={{ fontSize: "36px", margin: 0, color: "#111827" }}>
            cocodoco
          </h1>
        </a>
      </header>

      <div
        style={{
          maxWidth: "min(760px, 100%)",
          margin: "0 auto",
        }}
      >
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#9d174d",
            textTransform: "uppercase",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Personality
        </p>
        <h2
          style={{
            fontSize: "28px",
            fontWeight: 800,
            color: "#111827",
            textAlign: "center",
            marginBottom: "10px",
            lineHeight: 1.3,
          }}
        >
          What Kind of Overthinker Are You?
        </h2>
        <p
          style={{
            textAlign: "center",
            color: "#6b7280",
            fontSize: "15px",
            marginBottom: "28px",
            lineHeight: 1.6,
          }}
        >
          Everyone overthinks — but not in the same way. Discover the pattern
          your mind follows, and what it reveals about how you actually process
          the world.
        </p>

        <div
          style={{
            background: "#f3f4f6",
            borderRadius: "999px",
            height: "6px",
            marginBottom: "8px",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              height: "100%",
              width: `${progress}%`,
              background:
                "linear-gradient(90deg, #fb7185 0%, #f59e0b 100%)",
              borderRadius: "999px",
              transition: "width 0.25s ease",
            }}
          />
        </div>
        <p
          style={{
            textAlign: "right",
            fontSize: "13px",
            color: "#9ca3af",
            marginBottom: "20px",
          }}
        >
          {current + 1} / {questions.length}
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            borderRadius: "18px",
            padding: "28px 24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            marginBottom: "16px",
          }}
        >
          <p
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "22px",
              lineHeight: 1.5,
            }}
          >
            {q.q}
          </p>

          <div
            style={{
              display: "flex",
              flexDirection: "column",
              gap: "12px",
              alignItems: "center",
            }}
          >
            {q.opts.map((opt, i) => (
              <button
                key={i}
                onClick={() => handleOption(opt.s)}
                style={{
                  width: "min(560px, 100%)",
                  padding: "14px 20px",
                  background:
                    "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)",
                  color: "white",
                  border: "none",
                  borderRadius: "14px",
                  fontSize: "15px",
                  fontWeight: 600,
                  cursor: "pointer",
                  textAlign: "left",
                  lineHeight: 1.5,
                  boxShadow: "0 8px 18px rgba(251,113,133,0.18)",
                  fontFamily: "Arial, sans-serif",
                }}
              >
                {opt.t}
              </button>
            ))}
          </div>
        </div>

        <div
          style={{
            width: "min(760px, 100%)",
            height: "100px",
            borderRadius: "14px",
            border: "1px dashed #f2a7b8",
            background: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: "14px",
            margin: "20px 0",
          }}
        >
          Ad Space (Google AdSense will go here)
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            borderRadius: "18px",
            padding: "28px 24px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.04)",
            marginTop: "8px",
          }}
        >
          <h3
            style={{
              fontSize: "18px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "14px",
            }}
          >
            About this quiz
          </h3>

          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            Overthinking is one of the most universal human experiences — and one of the least understood. Nearly everyone does it, but the form it takes varies enormously from person to person. Some people replay the past. Some project into the future. Some spiral quietly and invisibly while appearing completely calm on the outside. This quiz is designed to identify which pattern your brain most naturally defaults to.
          </p>

          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "10px", marginTop: "20px" }}>
            Why everyone overthinks differently
          </h3>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            Research in cognitive psychology has identified distinct overthinking styles that tend to cluster around individual differences in temperament, attachment history, and how the brain manages threat and uncertainty. People with higher sensitivity to social evaluation tend toward the kind of overthinking that fixates on how others see them. People with a strong need for cognitive closure — a well-studied personality trait — are more likely to loop endlessly on decisions, unable to commit without certainty. And people with anxious attachment styles tend toward future-focused forecasting, while those with more avoidant patterns often internalize their spirals, carrying them silently rather than expressing them.
          </p>

          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "10px", marginTop: "20px" }}>
            The brain science behind the loop
          </h3>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            Overthinking is partly a function of the default mode network — the brain system that activates during rest, self-reflection, and mental time travel. In people who overthink frequently, the default mode network tends to stay active even when they are trying to focus, creating an almost constant stream of self-referential thought. This is why overthinking often feels involuntary: it is not a habit you chose. It is, in a real sense, how your brain is wired to process unresolved experience.
          </p>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            Psychologist Susan Nolen-Hoeksema, whose decades of research on rumination at Yale defined much of what we now know about repetitive negative thinking, found that ruminative response style — the tendency to passively focus on distressing feelings and their causes — is one of the strongest predictors of prolonged emotional difficulty. Critically, she found that different people ruminate on different content: some on past events, some on the future, some on themselves, some on others. The content of the overthinking matters as much as the fact of it.
          </p>

          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "10px", marginTop: "20px" }}>
            Overthinking vs. thinking
          </h3>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            Not all repetitive thinking is overthinking. Reflection — the deliberate, forward-moving kind of self-examination that produces new understanding — is actually healthy and associated with emotional growth. Overthinking differs from reflection in one key way: it loops rather than progresses. You return to the same question and generate the same answer (or no answer), and the process repeats. The loop runs, but it does not resolve.
          </p>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8, marginBottom: "14px" }}>
            This quiz focuses on identifying the specific flavor of your overthinking — not to label it as a problem, but because understanding your particular pattern is the first step toward working with it rather than fighting it. The Replayer needs different strategies than the Forecaster. The Silent Spiral needs something different from the People Reader. Knowing your type is genuinely useful information.
          </p>

          <h3 style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginBottom: "10px", marginTop: "20px" }}>
            What your result means
          </h3>
          <p style={{ color: "#374151", fontSize: "15px", lineHeight: 1.8 }}>
            Each result in this quiz describes a distinct overthinking style, grounded in cognitive and personality research. None of them are pure deficits — every style described here contains real strengths, not just tendencies to work on. The goal is not to stop thinking deeply, but to understand the form your depth takes — and where, specifically, it tends to tip into a loop.
          </p>
        </div>
      </div>
    </main>
  );
}
