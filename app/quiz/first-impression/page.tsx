"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "warm"
  | "mysterious"
  | "confident"
  | "gentle"
  | "cool"
  | "charming";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When people meet you for the first time, what do they usually notice first?",
    opts: [
      { t: "My warm smile and approachable energy", s: { warm: 2, gentle: 1 } },
      { t: "That I seem quiet, deep, or hard to fully read", s: { mysterious: 2, cool: 1 } },
      { t: "That I seem self-assured and grounded", s: { confident: 2, cool: 1 } },
      { t: "That I feel soft, kind, and easy to be around", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "What kind of vibe do you naturally give off in a new room?",
    opts: [
      { t: "Friendly and welcoming", s: { warm: 2, charming: 1 } },
      { t: "Reserved but intriguing", s: { mysterious: 2, cool: 1 } },
      { t: "Strong, composed, and noticeable", s: { confident: 2 } },
      { t: "Calm, soft, and comforting", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "How do you usually act when meeting someone for the first time?",
    opts: [
      { t: "I try to make them feel comfortable right away", s: { warm: 2, gentle: 1 } },
      { t: "I speak less at first and let them observe me", s: { mysterious: 2, cool: 1 } },
      { t: "I stay natural and speak with confidence", s: { confident: 2, charming: 1 } },
      { t: "I act politely, gently, and with quiet sincerity", s: { gentle: 2 } },
    ],
  },
  {
    q: "Which first-impression compliment sounds most like you?",
    opts: [
      { t: "You seem so sweet and easy to talk to.", s: { warm: 2, gentle: 1 } },
      { t: "You have a mysterious aura.", s: { mysterious: 2 } },
      { t: "You seem really confident.", s: { confident: 2, cool: 1 } },
      { t: "You have a very soft and calming presence.", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "What kind of energy do you think your face naturally gives off?",
    opts: [
      { t: "Bright, friendly, and open", s: { warm: 2, charming: 1 } },
      { t: "Quiet, unreadable, and a little distant", s: { mysterious: 2, cool: 1 } },
      { t: "Sharp, steady, and self-possessed", s: { confident: 2, cool: 1 } },
      { t: "Soft, kind, and gentle", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "What role do you often end up playing when people first meet you?",
    opts: [
      { t: "The one who makes the atmosphere more comfortable", s: { warm: 2, gentle: 1 } },
      { t: "The one people want to figure out more", s: { mysterious: 2, charming: 1 } },
      { t: "The one who seems put together and composed", s: { confident: 2, cool: 1 } },
      { t: "The one who feels kind, safe, and calming", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "If your first impression had a texture, what would it feel like?",
    opts: [
      { t: "Warm sunlight on skin", s: { warm: 2 } },
      { t: "Velvet in a dim room", s: { mysterious: 2, cool: 1 } },
      { t: "Smooth polished stone", s: { confident: 2, cool: 1 } },
      { t: "Soft cotton or a cozy blanket", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "How do people usually respond to you at first?",
    opts: [
      { t: "They open up to me easily", s: { warm: 2, gentle: 1 } },
      { t: "They seem curious but slightly cautious", s: { mysterious: 2, cool: 1 } },
      { t: "They seem to respect me quickly", s: { confident: 2 } },
      { t: "They seem relaxed and reassured around me", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "What kind of social energy feels most natural to you?",
    opts: [
      { t: "Warm, expressive, and inviting", s: { warm: 2, charming: 1 } },
      { t: "Low-key, observant, and a bit elusive", s: { mysterious: 2, cool: 1 } },
      { t: "Clear, poised, and steady", s: { confident: 2, cool: 1 } },
      { t: "Gentle, sincere, and emotionally safe", s: { gentle: 2 } },
    ],
  },
  {
    q: "Which kind of beauty or charm feels closest to your energy?",
    opts: [
      { t: "A bright and lovable kind of charm", s: { warm: 2, charming: 1 } },
      { t: "A subtle and hard-to-explain allure", s: { mysterious: 2 } },
      { t: "A strong and elegant kind of presence", s: { confident: 2, cool: 1 } },
      { t: "A soft and comforting kind of sweetness", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "When someone remembers you after one meeting, what is it most likely because of?",
    opts: [
      { t: "I felt kind, bright, and easy to like", s: { warm: 2, charming: 1 } },
      { t: "I left them wondering about me", s: { mysterious: 2, cool: 1 } },
      { t: "I seemed strong, calm, and confident", s: { confident: 2 } },
      { t: "I made them feel quietly comfortable", s: { gentle: 2, warm: 1 } },
    ],
  },
  {
    q: "What first impression do you give?",
    opts: [
      { t: "Warm and approachable", s: { warm: 2 } },
      { t: "Mysterious and intriguing", s: { mysterious: 2 } },
      { t: "Confident and impressive", s: { confident: 2 } },
      { t: "Gentle and comforting", s: { gentle: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "warm",
    "mysterious",
    "confident",
    "gentle",
    "cool",
    "charming",
  ];

  let best: ResultKey = "warm";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function FirstImpressionQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    warm: 0,
    mysterious: 0,
    confident: 0,
    gentle: 0,
    cool: 0,
    charming: 0,
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
      router.push(`/result/first-impression?type=${top}`);
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
          First Impression Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          What First Impression Do You Give? ✨
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
          Discover the vibe people are most likely to feel when they first meet
          you. This personality quiz explores whether your first impression
          feels most warm, mysterious, confident, gentle, cool, or charming.
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
            This first impression personality quiz is designed to help you
            discover the vibe people are most likely to feel from you in the
            first few moments of meeting you. First impressions are not the full
            truth of who someone is, but they do reveal something real about the
            emotional energy, atmosphere, and presence a person naturally gives
            off before any deeper story has been shared.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people come across as warm and instantly approachable. Others
            seem mysterious, confident, gentle, cool, or naturally charming.
            These impressions are often shaped by expression, tone, social
            energy, body language, and the emotional rhythm someone carries into
            a room. Even if people get to know you differently over time, the
            very first feeling they get around you can still say a lot about
            your outward energy.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of reflective questions, you can discover
            which first-impression energy fits you most naturally. The result is
            meant to be fun, emotionally resonant, and easy to share. It can be
            a lighthearted personality result, but it can also be a useful way
            to understand how your energy lands before people fully know your
            deeper personality.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why first impressions matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            First impressions matter because people often feel your energy
            before they understand your full character. A first impression is
            not a complete definition, but it can shape the tone of a new
            connection. It influences whether someone feels drawn in, relaxed,
            curious, impressed, or comforted in your presence.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your first impression can help you see yourself from
            the outside. You may already know what your inner personality feels
            like, but this quiz looks at what people might notice before they
            hear your full story. That can be surprisingly useful in friendship,
            dating, work, social settings, and personal confidence.
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
            a box. Most people are more complex than a single first impression,
            and different settings can highlight different parts of you. Still,
            one energy often stands out more strongly than the others when
            people first encounter your presence.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A helpful next step is to compare your result with your real-life
            experiences. What do people say about you when they first meet you?
            Do they describe you as easy to talk to, hard to read, calming,
            powerful, or especially memorable? The more honestly you compare the
            result with your real interactions, the more meaningful it becomes.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you understand the difference between your
            outer energy and your deeper personality. Some people seem cool at
            first but are deeply warm once known. Others seem gentle but carry
            strong confidence underneath. That contrast is part of what makes
            personality interesting. A first impression is only the opening
            layer, but it still tells an important story.
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
            This test looks at several elements that shape first impressions. It
            explores your natural social energy, the kind of atmosphere you
            bring into a room, how others tend to respond to you at first, and
            the emotional tone your presence gives off before deeper connection
            forms. It also considers whether your outer vibe feels more warm,
            mysterious, confident, gentle, cool, or charming.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on surface beauty or popularity, this quiz
            tries to capture the emotional quality people are likely to sense
            around you first. That is why the questions are designed to feel
            reflective, aesthetic, and intuitive. The goal is not just to tell
            you how you look to others, but to reveal the deeper atmosphere your
            presence creates on first contact.
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
            <li>Warm and Approachable</li>
            <li>Mysterious and Intriguing</li>
            <li>Confident and Impressive</li>
            <li>Gentle and Comforting</li>
            <li>Cool and Collected</li>
            <li>Charming and Memorable</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a deeper explanation of the energy people
            feel from you at first, how that impression can show up in social
            life, what strengths it carries, and what kind of presence makes you
            memorable. In that sense, this is not only a fun first impression
            quiz. It is also a small reflection on the emotional atmosphere you
            create before anyone even knows your full story.
          </p>
        </section>
      </div>
    </main>
  );
}