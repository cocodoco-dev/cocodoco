"use client";

import { useRouter } from "next/navigation";
import { useState } from "react";

type ResultKey =
  | "secure_heart"
  | "anxious_romantic"
  | "avoidant_soul"
  | "fearful_deep";

const questions = [
  {
    q: "When you start liking someone, you usually…",
    opts: [
      { t: "Feel excited but stay grounded", s: { secure_heart: 2 } },
      { t: "Think about them constantly", s: { anxious_romantic: 2, fearful_deep: 1 } },
      { t: "Pull back a little to protect yourself", s: { avoidant_soul: 2 } },
      { t: "Want closeness but also feel scared of it", s: { fearful_deep: 2, anxious_romantic: 1 } },
    ],
  },
  {
    q: "If they reply late, your first thought is…",
    opts: [
      { t: "They’re probably just busy", s: { secure_heart: 2 } },
      { t: "Did I do something wrong?", s: { anxious_romantic: 2 } },
      { t: "It’s fine, I’ll focus on my own thing", s: { avoidant_soul: 2 } },
      { t: "I try to act calm, but I overthink it deeply", s: { fearful_deep: 2, anxious_romantic: 1 } },
    ],
  },
  {
    q: "In relationships, what feels hardest for you?",
    opts: [
      { t: "Nothing specific — I value healthy balance", s: { secure_heart: 2 } },
      { t: "Not needing constant reassurance", s: { anxious_romantic: 2 } },
      { t: "Letting someone get too close", s: { avoidant_soul: 2 } },
      { t: "Trusting love without feeling danger", s: { fearful_deep: 2 } },
    ],
  },
  {
    q: "How do you usually show love?",
    opts: [
      { t: "Steadily, honestly, and naturally", s: { secure_heart: 2 } },
      { t: "With lots of care and attention", s: { anxious_romantic: 2 } },
      { t: "Quietly, through actions more than words", s: { avoidant_soul: 2 } },
      { t: "Very deeply, but only when I feel safe", s: { fearful_deep: 2, secure_heart: 1 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  let best: ResultKey = "secure_heart";
  let bestVal = -999;

  (Object.keys(scores) as ResultKey[]).forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function AttachmentStyleQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    secure_heart: 0,
    anxious_romantic: 0,
    avoidant_soul: 0,
    fearful_deep: 0,
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
      router.push(`/result/attachment-style?type=${top}`);
    }
  }

  const q = questions[current];

  return (
    <main style={{ padding: "40px" }}>
      <h1>What Is Your Attachment Style in Love? 💘</h1>

      <h2>
        Question {current + 1} / {questions.length}
      </h2>

      <h3>{q.q}</h3>

      {q.opts.map((opt, idx) => (
        <button key={idx} onClick={() => choose(opt.s)}>
          {opt.t}
        </button>
      ))}

      <section style={{ marginTop: "40px" }}>
        <h2>About this quiz</h2>

        <p>
          This love attachment style quiz is designed to help you understand how you emotionally connect in romantic relationships. Attachment style influences how you respond to closeness, trust, reassurance, and emotional conflict. It plays a major role in how relationships begin, develop, and sometimes struggle.
        </p>

        <p>
          Some people feel naturally secure and stable in love, while others may feel anxious, distant, or conflicted between closeness and fear. These patterns are not flaws — they are simply learned emotional responses shaped by past experiences, personality, and environment.
        </p>

        <p>
          By answering a few simple questions, this quiz identifies which emotional pattern best represents your current relationship tendencies. The results include Secure Heart, Anxious Romantic, Avoidant Soul, and Fearful Deep — each representing a unique way of experiencing love.
        </p>

        <h3>Why this matters</h3>
        <p>
          Understanding your attachment style can help you build healthier relationships. When you recognize your patterns, you become more aware of your reactions, expectations, and emotional needs. This awareness can improve communication, reduce misunderstandings, and help you form stronger, more balanced connections with others.
        </p>

        <h3>How to use your result</h3>
        <p>
          Once you receive your result, use it as a tool for reflection rather than a fixed label. Your attachment style is not permanent — it can evolve over time through self-awareness and experience. Think about how your tendencies show up in real relationships and consider small changes that can lead to more secure and fulfilling connections.
        </p>

        <h3>Possible results</h3>
        <ul>
          <li>Secure Heart</li>
          <li>Anxious Romantic</li>
          <li>Avoidant Soul</li>
          <li>Fearful Deep</li>
        </ul>
      </section>
    </main>
  );
}