"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "empathetic_listener"
  | "calm_problem_solver"
  | "natural_connector"
  | "quiet_leader"
  | "adaptable_mind"
  | "clear_communicator";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When people come to you with a problem, what do you naturally do first?",
    opts: [
      {
        t: "Listen closely and make them feel understood",
        s: { empathetic_listener: 2, natural_connector: 1 },
      },
      {
        t: "Look for the most practical solution",
        s: { calm_problem_solver: 2, adaptable_mind: 1 },
      },
      {
        t: "Help everyone feel connected and on the same page",
        s: { natural_connector: 2, clear_communicator: 1 },
      },
      {
        t: "Stay calm and guide things in a steady direction",
        s: { quiet_leader: 2, calm_problem_solver: 1 },
      },
    ],
  },
  {
    q: "What do people often appreciate most about you?",
    opts: [
      {
        t: "You really understand how they feel",
        s: { empathetic_listener: 2 },
      },
      {
        t: "You stay composed when things get messy",
        s: { calm_problem_solver: 2, quiet_leader: 1 },
      },
      {
        t: "You make people feel included and comfortable",
        s: { natural_connector: 2 },
      },
      {
        t: "You explain things clearly and simply",
        s: { clear_communicator: 2 },
      },
    ],
  },
  {
    q: "In a group project or team setting, your strength is usually…",
    opts: [
      {
        t: "Sensing what people need emotionally",
        s: { empathetic_listener: 2, natural_connector: 1 },
      },
      {
        t: "Finding structure and solving obstacles",
        s: { calm_problem_solver: 2 },
      },
      {
        t: "Building good chemistry between people",
        s: { natural_connector: 2 },
      },
      {
        t: "Keeping the group focused without being loud about it",
        s: { quiet_leader: 2, clear_communicator: 1 },
      },
    ],
  },
  {
    q: "When plans suddenly change, you usually…",
    opts: [
      {
        t: "Check how everyone is feeling first",
        s: { empathetic_listener: 2 },
      },
      {
        t: "Adjust quickly and figure out what works now",
        s: { adaptable_mind: 2, calm_problem_solver: 1 },
      },
      {
        t: "Help people regroup and move together",
        s: { natural_connector: 2, quiet_leader: 1 },
      },
      {
        t: "Clarify the next step so no one feels lost",
        s: { clear_communicator: 2, quiet_leader: 1 },
      },
    ],
  },
  {
    q: "Which kind of challenge do you handle best?",
    opts: [
      {
        t: "Emotional tension between people",
        s: { empathetic_listener: 2, natural_connector: 1 },
      },
      {
        t: "Unexpected problems that need practical thinking",
        s: { calm_problem_solver: 2, adaptable_mind: 1 },
      },
      {
        t: "Situations where people need unity and trust",
        s: { natural_connector: 2, quiet_leader: 1 },
      },
      {
        t: "Confusion caused by unclear information",
        s: { clear_communicator: 2 },
      },
    ],
  },
  {
    q: "What feels most natural to you in difficult moments?",
    opts: [
      {
        t: "Being emotionally present",
        s: { empathetic_listener: 2 },
      },
      {
        t: "Thinking clearly under pressure",
        s: { calm_problem_solver: 2 },
      },
      {
        t: "Reading the room and adapting your approach",
        s: { adaptable_mind: 2, natural_connector: 1 },
      },
      {
        t: "Steadying others without making it dramatic",
        s: { quiet_leader: 2 },
      },
    ],
  },
  {
    q: "Which compliment sounds most like you?",
    opts: [
      {
        t: "“You make people feel heard.”",
        s: { empathetic_listener: 2 },
      },
      {
        t: "“You always find a way through.”",
        s: { calm_problem_solver: 2, adaptable_mind: 1 },
      },
      {
        t: "“You’re good at bringing people together.”",
        s: { natural_connector: 2 },
      },
      {
        t: "“You make complicated things easy to understand.”",
        s: { clear_communicator: 2 },
      },
    ],
  },
  {
    q: "At your core, your soft skill superpower is…",
    opts: [
      {
        t: "Understanding people deeply",
        s: { empathetic_listener: 2 },
      },
      {
        t: "Staying smart and steady under pressure",
        s: { calm_problem_solver: 2, quiet_leader: 1 },
      },
      {
        t: "Creating trust and connection naturally",
        s: { natural_connector: 2 },
      },
      {
        t: "Helping people move forward with clarity",
        s: { clear_communicator: 2, adaptable_mind: 1 },
      },
    ],
  },
  {
    q: "When someone in a group feels left out, what do you usually notice first?",
    opts: [
      {
        t: "Their emotional discomfort",
        s: { empathetic_listener: 2, natural_connector: 1 },
      },
      {
        t: "What practical step could include them better",
        s: { calm_problem_solver: 2, adaptable_mind: 1 },
      },
      {
        t: "How to bring them into the group naturally",
        s: { natural_connector: 2, clear_communicator: 1 },
      },
      {
        t: "How to shift the group quietly without making it awkward",
        s: { quiet_leader: 2 },
      },
    ],
  },
  {
    q: "What kind of work style fits you best?",
    opts: [
      {
        t: "People-centered and emotionally aware",
        s: { empathetic_listener: 2, natural_connector: 1 },
      },
      {
        t: "Structured, practical, and solution-focused",
        s: { calm_problem_solver: 2 },
      },
      {
        t: "Flexible and quick to adjust when needed",
        s: { adaptable_mind: 2, calm_problem_solver: 1 },
      },
      {
        t: "Clear, focused, and easy for others to follow",
        s: { clear_communicator: 2, quiet_leader: 1 },
      },
    ],
  },
  {
    q: "What do you tend to bring into tense situations?",
    opts: [
      {
        t: "Empathy and emotional safety",
        s: { empathetic_listener: 2 },
      },
      {
        t: "Calm logic and steady next steps",
        s: { calm_problem_solver: 2, quiet_leader: 1 },
      },
      {
        t: "Adaptability and quick adjustment",
        s: { adaptable_mind: 2 },
      },
      {
        t: "Clarity that helps people stop spiraling",
        s: { clear_communicator: 2, natural_connector: 1 },
      },
    ],
  },
  {
    q: "Which description feels most like your real strength?",
    opts: [
      {
        t: "I help people feel safe enough to open up",
        s: { empathetic_listener: 2, natural_connector: 1 },
      },
      {
        t: "I stay useful and steady when things go wrong",
        s: { calm_problem_solver: 2, adaptable_mind: 1 },
      },
      {
        t: "I create trust and chemistry between people",
        s: { natural_connector: 2, quiet_leader: 1 },
      },
      {
        t: "I turn confusion into clarity",
        s: { clear_communicator: 2 },
      },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "empathetic_listener",
    "calm_problem_solver",
    "natural_connector",
    "quiet_leader",
    "adaptable_mind",
    "clear_communicator",
  ];

  let best: ResultKey = "empathetic_listener";
  let bestVal = -999;

  priority.forEach((k) => {
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
      router.push(`/result/soft-skill-superpower?type=${top}`);
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
          Career & Personality Test
        </p>

        <h1
          style={{
            fontSize: "34px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          Which Soft Skill Is Your Superpower? ✨
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
          Discover the human strength that makes you especially effective in
          work, relationships, and everyday life. This quiz explores whether
          your natural superpower is empathy, calm problem-solving, connection,
          quiet leadership, adaptability, or clear communication.
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
            This soft skills quiz is designed to help you discover the human
            strength that makes you especially effective in everyday life, work,
            and relationships. Soft skills are not secondary skills. In many
            cases, they are the reason people trust you, rely on you, work well
            with you, and remember you long after a task is finished. Technical
            ability may open doors, but soft skills often shape what happens
            once you are in the room.
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
            looks at how you handle emotion, pressure, teamwork, uncertainty,
            and group dynamics. In other words, it explores the human skill you
            bring into situations that are not solved by logic alone.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            By answering a series of short but revealing questions, you can
            discover whether your superpower is Empathetic Listening, Calm
            Problem-Solving, Natural Connection, Quiet Leadership, Adaptable
            Mind, or Clear Communication. The result is meant to be insightful,
            encouraging, easy to share, and useful for understanding your real
            strengths more clearly.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why soft skills matter
          </h3>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            Soft skills matter because most real-life situations involve people,
            not just tasks. Knowing what to do is important, but knowing how to
            respond to stress, misunderstanding, uncertainty, and emotion is
            often what makes someone truly effective. The people who steady a
            tense room, explain clearly, connect a team, or help others feel
            heard are often doing some of the most valuable work in the room.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Understanding your soft skill superpower can help you see where you
            naturally add value. It can improve self-awareness, teamwork,
            leadership, and even career direction. It can also help you notice
            that your strengths may already be visible to others, even if you
            tend to downplay them because they feel natural to you.
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
            a limit. Most people have more than one valuable soft skill, but one
            often feels especially central. That core strength tends to show up
            across many areas of life, including work, friendships, family
            dynamics, and stressful situations.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "14px",
            }}
          >
            A useful next step is to compare your result with real experience.
            What do people come to you for? What kind of situations bring out
            your best side? When tension appears, what do you instinctively
            offer first: empathy, solutions, clarity, steadiness, flexibility,
            or connection? Those patterns often reveal your real superpower more
            clearly than any title ever could.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Your result can also help you develop more intentionally. An
            Empathetic Listener may want stronger boundaries. A Calm
            Problem-Solver may want more emotional openness. A Natural
            Connector may want clearer self-prioritization. A Quiet Leader may
            want more visibility. An Adaptable Mind may want more stability. A
            Clear Communicator may want more patience with emotion. Growth
            becomes easier when you know both your gift and its blind spot.
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
            This test explores how you respond when people need support, how you
            move inside group settings, how you react when plans shift, and what
            kind of value you naturally add when things become difficult. It is
            less about what you say your strengths are and more about what your
            instincts reveal when people, change, and pressure are involved.
          </p>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: "18px",
            }}
          >
            Rather than focusing only on professional performance, this quiz
            looks at human effectiveness. Some people make others feel heard.
            Some bring order. Some create trust. Some lead quietly. Some adapt
            fast. Some make confusion disappear through clarity. The goal is to
            identify the kind of interpersonal intelligence you bring into the
            world most naturally.
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
            <li>Empathetic Listener</li>
            <li>Calm Problem-Solver</li>
            <li>Natural Connector</li>
            <li>Quiet Leader</li>
            <li>Adaptable Mind</li>
            <li>Clear Communicator</li>
          </ul>

          <p
            style={{
              lineHeight: 1.9,
              fontSize: "16px",
              marginBottom: 0,
            }}
          >
            Each result comes with a fuller explanation of your soft skill
            strength, how it shows up in real situations, why people rely on
            it, and what kind of growth path helps it become even stronger. In
            that sense, this is not only a fun personality quiz. It is also a
            practical reflection on the kind of human value you naturally bring
            into other people’s lives.
          </p>
        </section>
      </div>
    </main>
  );
}