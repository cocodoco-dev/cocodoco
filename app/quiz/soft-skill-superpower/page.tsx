"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "empathetic_listener"
  | "calm_problem_solver"
  | "natural_connector"
  | "quiet_leader"
  | "adaptable_mind"
  | "clear_communicator";

const questions = [
  {
    q: "When people come to you with a problem, what do you naturally do first?",
    opts: [
      { t: "Listen closely and make them feel understood", s: { empathetic_listener: 2, natural_connector: 1 } },
      { t: "Look for the most practical solution", s: { calm_problem_solver: 2, adaptable_mind: 1 } },
      { t: "Help everyone feel connected and on the same page", s: { natural_connector: 2, clear_communicator: 1 } },
      { t: "Stay calm and guide things in a steady direction", s: { quiet_leader: 2, calm_problem_solver: 1 } },
    ],
  },
  {
    q: "What do people often appreciate most about you?",
    opts: [
      { t: "You really understand how they feel", s: { empathetic_listener: 2 } },
      { t: "You stay composed when things get messy", s: { calm_problem_solver: 2, quiet_leader: 1 } },
      { t: "You make people feel included and comfortable", s: { natural_connector: 2 } },
      { t: "You explain things clearly and simply", s: { clear_communicator: 2 } },
    ],
  },
  {
    q: "In a group project or team setting, your strength is usually…",
    opts: [
      { t: "Sensing what people need emotionally", s: { empathetic_listener: 2, natural_connector: 1 } },
      { t: "Finding structure and solving obstacles", s: { calm_problem_solver: 2 } },
      { t: "Building good chemistry between people", s: { natural_connector: 2 } },
      { t: "Keeping the group focused without being loud about it", s: { quiet_leader: 2, clear_communicator: 1 } },
    ],
  },
  {
    q: "When plans suddenly change, you usually…",
    opts: [
      { t: "Check how everyone is feeling first", s: { empathetic_listener: 2 } },
      { t: "Adjust quickly and figure out what works now", s: { adaptable_mind: 2, calm_problem_solver: 1 } },
      { t: "Help people regroup and move together", s: { natural_connector: 2, quiet_leader: 1 } },
      { t: "Clarify the next step so no one feels lost", s: { clear_communicator: 2, quiet_leader: 1 } },
    ],
  },
  {
    q: "Which kind of challenge do you handle best?",
    opts: [
      { t: "Emotional tension between people", s: { empathetic_listener: 2, natural_connector: 1 } },
      { t: "Unexpected problems that need practical thinking", s: { calm_problem_solver: 2, adaptable_mind: 1 } },
      { t: "Situations where people need unity and trust", s: { natural_connector: 2, quiet_leader: 1 } },
      { t: "Confusion caused by unclear information", s: { clear_communicator: 2 } },
    ],
  },
  {
    q: "What feels most natural to you in difficult moments?",
    opts: [
      { t: "Being emotionally present", s: { empathetic_listener: 2 } },
      { t: "Thinking clearly under pressure", s: { calm_problem_solver: 2 } },
      { t: "Reading the room and adapting your approach", s: { adaptable_mind: 2, natural_connector: 1 } },
      { t: "Steadying others without making it dramatic", s: { quiet_leader: 2 } },
    ],
  },
  {
    q: "Which compliment sounds most like you?",
    opts: [
      { t: "“You make people feel heard.”", s: { empathetic_listener: 2 } },
      { t: "“You always find a way through.”", s: { calm_problem_solver: 2, adaptable_mind: 1 } },
      { t: "“You’re good at bringing people together.”", s: { natural_connector: 2 } },
      { t: "“You make complicated things easy to understand.”", s: { clear_communicator: 2 } },
    ],
  },
  {
    q: "At your core, your soft skill superpower is…",
    opts: [
      { t: "Understanding people deeply", s: { empathetic_listener: 2 } },
      { t: "Staying smart and steady under pressure", s: { calm_problem_solver: 2, quiet_leader: 1 } },
      { t: "Creating trust and connection naturally", s: { natural_connector: 2 } },
      { t: "Helping people move forward with clarity", s: { clear_communicator: 2, adaptable_mind: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "empathetic_listener";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function SoftSkillSuperpowerQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    empathetic_listener: 0,
    calm_problem_solver: 0,
    natural_connector: 0,
    quiet_leader: 0,
    adaptable_mind: 0,
    clear_communicator: 0,
  });

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
      router.push(`/result/soft-skill-superpower?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "36px 18px 60px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(720px, 100%)", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "32px",
            marginBottom: "10px",
            color: "#111827",
          }}
        >
          Which Soft Skill Is Your Superpower? ✨
        </h1>

        <p
          style={{
            marginBottom: "20px",
            color: "#374151",
            fontSize: "17px",
            fontWeight: 600,
          }}
        >
          Question {current + 1} / {questions.length}
        </p>

        <div
          style={{
            background: "rgba(255,255,255,0.75)",
            border: "1px solid #f2a7b8",
            borderRadius: "16px",
            padding: "22px",
          }}
        >
          <h2
            style={{
              marginBottom: "18px",
              color: "#374151",
              fontSize: "22px",
              lineHeight: 1.4,
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
                  padding: "12px 18px",
                  borderRadius: "12px",
                  border: "none",
                  background: "#ff8fab",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "16px",
                  width: "min(520px, 100%)",
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
            background: "rgba(255, 255, 255, 0.6)",
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
            background: "rgba(255,255,255,0.72)",
            border: "1px solid #f2d2db",
            borderRadius: "16px",
            padding: "24px",
            color: "#374151",
          }}
        >
          <h2
            style={{
              fontSize: "24px",
              fontWeight: 700,
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
            This soft skills quiz is designed to help you discover the human
            strength that makes you especially effective in everyday life, work,
            and relationships. Soft skills are not small skills. They are often
            the reason people trust you, rely on you, and remember you.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Some people shine through empathy and deep listening. Others stand
            out through calm problem-solving, adaptability, communication,
            leadership, or the ability to connect people naturally. This test
            looks at how you handle people, pressure, and change.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a few short questions, you can discover whether your
            superpower is Empathetic Listening, Calm Problem-Solving, Natural
            Connection, Quiet Leadership, Adaptability, or Clear Communication.
            The result is meant to be insightful, encouraging, and easy to share.
          </p>

          <h3
            style={{
              fontSize: "20px",
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
              margin: 0,
            }}
          >
            <li>Empathetic Listener</li>
            <li>Calm Problem-Solver</li>
            <li>Natural Connector</li>
            <li>Quiet Leader</li>
            <li>Adaptable Mind</li>
            <li>Clear Communicator</li>
          </ul>
        </section>
      </div>
    </main>
  );
}