"use client";

import { useRouter } from "next/navigation";
import { useMemo, useState } from "react";

type ResultKey =
  | "fear_abandonment"
  | "fear_rejection"
  | "fear_intimacy"
  | "fear_losing_self"
  | "fear_commitment"
  | "fear_betrayal";

type Question = {
  q: string;
  opts: {
    t: string;
    s: Partial<Record<ResultKey, number>>;
  }[];
};

const questions: Question[] = [
  {
    q: "When a relationship starts feeling real and deep, your first instinct is...",
    opts: [
      { t: "To wonder quietly whether this feeling will actually last", s: { fear_abandonment: 2 } },
      { t: "To ask yourself if you're truly what they hoped for", s: { fear_rejection: 2 } },
      { t: "To feel a gentle pull toward a little more space", s: { fear_intimacy: 2 } },
      { t: "To check whether you still feel like yourself", s: { fear_losing_self: 2 } },
      { t: "To slow down — it's still too soon to know if this is right", s: { fear_commitment: 2 } },
      { t: "To stay quietly alert — you've been surprised before", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "When your partner seems quieter than usual, what goes through your mind first?",
    opts: [
      { t: "Something might be wrong — and you might be the reason", s: { fear_abandonment: 2, fear_rejection: 1 } },
      { t: "They're probably becoming less interested in you", s: { fear_rejection: 2, fear_abandonment: 1 } },
      { t: "Nothing much — you actually appreciate the space", s: { fear_intimacy: 2 } },
      { t: "A chance to reconnect quietly with yourself", s: { fear_losing_self: 2 } },
      { t: "A faint question about whether this is really the right relationship", s: { fear_commitment: 2 } },
      { t: "A subtle alertness — you start noticing patterns more carefully", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "The thought that unsettles you most about love is...",
    opts: [
      { t: "\"What if they leave when I'm not expecting it?\"", s: { fear_abandonment: 2 } },
      { t: "\"What if I'm simply not enough in the long run?\"", s: { fear_rejection: 2 } },
      { t: "\"What if closeness costs me my sense of freedom?\"", s: { fear_intimacy: 2 } },
      { t: "\"What if I lose myself completely in this person?\"", s: { fear_losing_self: 2 } },
      { t: "\"What if I commit and realize I chose wrong?\"", s: { fear_commitment: 2 } },
      { t: "\"What if they're not who I believe them to be?\"", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "In a relationship, which scenario feels most uncomfortable to you?",
    opts: [
      { t: "Your partner becoming emotionally distant without explanation", s: { fear_abandonment: 2 } },
      { t: "Your partner seeming subtly underwhelmed by who you are", s: { fear_rejection: 2 } },
      { t: "Your partner needing your emotional availability constantly", s: { fear_intimacy: 2 } },
      { t: "Your partner gradually shaping what you do, like, or believe", s: { fear_losing_self: 2 } },
      { t: "Being expected to commit before you feel fully ready", s: { fear_commitment: 2 } },
      { t: "Discovering something your partner kept from you, even something small", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "When you imagine a long-term relationship, the first thing that surfaces is...",
    opts: [
      { t: "A deep longing — and a worry it could still end one day", s: { fear_abandonment: 2 } },
      { t: "A hope that you'll still be worth choosing years from now", s: { fear_rejection: 2 } },
      { t: "Unease — that's a long time to be emotionally exposed", s: { fear_intimacy: 2 } },
      { t: "A resolve to stay true to yourself no matter how deep it gets", s: { fear_losing_self: 2 } },
      { t: "Hesitation — you don't want to be locked in if it turns out wrong", s: { fear_commitment: 2 } },
      { t: "A need for it to be built on something completely honest", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "Which pattern do you recognize most in yourself when things get close?",
    opts: [
      { t: "Checking more often that they're still happy with the relationship", s: { fear_abandonment: 2, fear_rejection: 1 } },
      { t: "Adjusting yourself to feel more acceptable or appealing", s: { fear_rejection: 2 } },
      { t: "Creating subtle distance once things become too intimate", s: { fear_intimacy: 2 } },
      { t: "Holding firmly to your own opinions, space, and identity", s: { fear_losing_self: 2 } },
      { t: "Hesitating before making any decision that feels permanent", s: { fear_commitment: 2 } },
      { t: "Watching quietly for anything that doesn't quite add up", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "After a conflict with someone you care about, what worries you most?",
    opts: [
      { t: "That they might decide this relationship isn't worth the effort", s: { fear_abandonment: 2 } },
      { t: "That they now think less of you as a person", s: { fear_rejection: 2 } },
      { t: "That the emotional intensity of repair feels like too much", s: { fear_intimacy: 2 } },
      { t: "That you responded in a way that wasn't fully your own truth", s: { fear_losing_self: 2 } },
      { t: "That this conflict reveals you two might not actually be right together", s: { fear_commitment: 2 } },
      { t: "Whether what they said in anger reflects how they truly feel", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "The kind of love that feels most healing to imagine is...",
    opts: [
      { t: "Love that stays — consistently, without making you wonder", s: { fear_abandonment: 2 } },
      { t: "Love that sees all your flaws and genuinely doesn't mind", s: { fear_rejection: 2 } },
      { t: "Love that gives you room to breathe and doesn't swallow your whole self", s: { fear_intimacy: 2, fear_commitment: 1 } },
      { t: "Love that actively supports your individuality and personal growth", s: { fear_losing_self: 2 } },
      { t: "Love that unfolds slowly, without pressure or ultimatums", s: { fear_commitment: 2 } },
      { t: "Love with no secrets — where honesty is the whole foundation", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "Which sentence resonates most with your inner experience of love?",
    opts: [
      { t: "\"I love deeply — and I'm always quietly aware of how easily things can change.\"", s: { fear_abandonment: 2 } },
      { t: "\"Part of me still wonders if I'm genuinely someone worth loving long-term.\"", s: { fear_rejection: 2 } },
      { t: "\"I want closeness — but too much, too fast, and something in me retreats.\"", s: { fear_intimacy: 2 } },
      { t: "\"My biggest fear in love is losing the thread back to myself.\"", s: { fear_losing_self: 2 } },
      { t: "\"I want to choose the right person so badly that choosing feels terrifying.\"", s: { fear_commitment: 2 } },
      { t: "\"I've been surprised by people before. Now I pay closer attention.\"", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "When someone loves you visibly and openly, your reaction is...",
    opts: [
      { t: "Deep relief — and a quiet hope it lasts", s: { fear_abandonment: 2 } },
      { t: "Warmth — and a small voice asking if you really deserve it", s: { fear_rejection: 2 } },
      { t: "Both touched and subtly overwhelmed at once", s: { fear_intimacy: 2 } },
      { t: "Appreciated — as long as they still see you as your own person", s: { fear_losing_self: 2 } },
      { t: "Moved — but a little uncertain about what it means for the future", s: { fear_commitment: 2 } },
      { t: "Grateful — and quietly watching to see if it stays consistent", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "Deep down, what do you most need love to give you?",
    opts: [
      { t: "Consistency — someone who makes you feel secure that they're staying", s: { fear_abandonment: 2 } },
      { t: "Acceptance — someone who sees the real you and loves it anyway", s: { fear_rejection: 2 } },
      { t: "Freedom — closeness that doesn't feel like containment", s: { fear_intimacy: 2 } },
      { t: "Space — to remain fully yourself while being fully in love", s: { fear_losing_self: 2 } },
      { t: "Room — to decide and commit at your own natural pace", s: { fear_commitment: 2 } },
      { t: "Truth — a relationship built completely on honesty", s: { fear_betrayal: 2 } },
    ],
  },
  {
    q: "At the heart of it, what is your relationship fear really about?",
    opts: [
      { t: "Being left — suddenly or gradually", s: { fear_abandonment: 2 } },
      { t: "Not being enough — in the end", s: { fear_rejection: 2 } },
      { t: "Getting too close — and losing your sense of yourself", s: { fear_intimacy: 2 } },
      { t: "Disappearing into someone else's world", s: { fear_losing_self: 2 } },
      { t: "Making the wrong choice — and being unable to go back", s: { fear_commitment: 2 } },
      { t: "Being deceived by someone you fully trusted", s: { fear_betrayal: 2 } },
    ],
  },
];

function pickTop(scores: Record<ResultKey, number>): ResultKey {
  const priority: ResultKey[] = [
    "fear_abandonment",
    "fear_rejection",
    "fear_intimacy",
    "fear_losing_self",
    "fear_commitment",
    "fear_betrayal",
  ];

  let best: ResultKey = "fear_abandonment";
  let bestVal = -999;

  priority.forEach((k) => {
    if (scores[k] > bestVal) {
      bestVal = scores[k];
      best = k;
    }
  });

  return best;
}

export default function RelationshipFearQuiz() {
  const router = useRouter();
  const [current, setCurrent] = useState(0);
  const [scores, setScores] = useState<Record<ResultKey, number>>({
    fear_abandonment: 0,
    fear_rejection: 0,
    fear_intimacy: 0,
    fear_losing_self: 0,
    fear_commitment: 0,
    fear_betrayal: 0,
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
      router.push(`/result/relationship-fear?type=${top}`);
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
          What Is Your Relationship Fear? 💙
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
          Discover the hidden fear quietly shaping how you love and connect.
          This quiz explores whether your deepest relationship fear is about
          abandonment, rejection, intimacy, losing yourself, commitment, or
          betrayal — and what it means for the way you love.
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
              gap: "10px",
              alignItems: "center",
            }}
          >
            {q.opts.map((opt, idx) => (
              <button
                key={idx}
                onClick={() => choose(opt.s)}
                style={{
                  padding: "13px 18px",
                  borderRadius: "14px",
                  border: "none",
                  background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)",
                  color: "white",
                  cursor: "pointer",
                  fontSize: "15px",
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
            This relationship fear quiz is designed to help you identify the
            specific emotional fear that shapes your experience of love. Most
            people carry one or two deep relationship fears without fully naming
            them — fears that influence how you behave in love, how quickly you
            trust, and what kinds of moments trigger anxiety or withdrawal in
            even good relationships.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Relationship fears are not personality flaws. They are responses
            developed over time, often rooted in early attachment experiences,
            past relationships, or moments where love did not feel safe.
            Understanding your specific fear is the first step toward relating
            from a place of genuine choice rather than automatic self-protection.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            By answering a series of reflective questions about your patterns,
            instincts, and emotional reactions, this quiz identifies which of
            six core relationship fears is most active in your love life right
            now. The result is designed to feel honest, emotionally grounded,
            and genuinely useful — not just for self-knowledge, but for the real
            work of relating well to the people you care about.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            Why relationship fears shape everything
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            Relationship fears operate mostly beneath awareness. You might know
            that you struggle with getting close, or that you feel anxious in
            relationships, or that you keep finding reasons to leave — but you
            might not know precisely what you are afraid of. That lack of
            clarity makes it much harder to address. When you can name the
            specific fear, you can begin to work with it rather than simply
            experiencing its effects.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Fear of abandonment shapes how you respond to silence. Fear of
            rejection shapes how much of yourself you let others see. Fear of
            intimacy shapes what you do when someone gets too close. Fear of
            losing yourself shapes what you quietly protect inside every
            relationship. Fear of commitment shapes how you make decisions about
            the future. Fear of betrayal shapes how much trust you can extend
            and where. Each of these fears creates a different profile — a
            different way of loving, a different set of quiet strengths, and a
            different kind of challenge to work through.
          </p>

          <h3
            style={{
              fontSize: "21px",
              fontWeight: 700,
              marginBottom: "10px",
              color: "#111827",
            }}
          >
            How to read your result
          </h3>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            When you receive your result, read it as a reflection rather than a
            verdict. Your relationship fear is not who you are — it is a pattern
            that developed for understandable reasons, and one that can shift
            over time with awareness and care. The result describes how your
            fear shows up in love, what it might be protecting, what strengths
            come with it, and what growth can look like.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Most people find that seeing their relationship fear named clearly —
            without judgment — is itself a relief. It is easier to work with a
            named thing than a nameless anxiety. Many also find that sharing
            their result with a partner or someone close opens conversations that
            would not have happened otherwise.
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

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "14px" }}>
            This quiz explores your emotional reactions in close relationships —
            not what you believe about love intellectually, but what you
            actually feel when love becomes real. It looks at your instinctive
            responses to closeness, uncertainty, conflict, vulnerability, and
            commitment. It also explores what kinds of love feel most healing,
            which situations feel most uncomfortable, and which patterns tend to
            repeat across your relationships.
          </p>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: "18px" }}>
            Because relationship fears often coexist, your result reflects your
            strongest pattern — the fear that is most actively shaping your
            experience of love right now. It does not mean you are free of other
            fears, or that this is the only complexity in your emotional life.
            It simply identifies where the most energy is currently being
            directed.
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
            <li>Fear of Abandonment — being left, suddenly or gradually</li>
            <li>Fear of Rejection — not being enough or worth choosing</li>
            <li>Fear of Intimacy — getting too close or losing your freedom</li>
            <li>Fear of Losing Yourself — disappearing into someone else&apos;s world</li>
            <li>Fear of Commitment — making the wrong choice or being trapped</li>
            <li>Fear of Betrayal — being deceived by someone you fully trusted</li>
          </ul>

          <p style={{ lineHeight: 1.9, fontSize: "16px", marginBottom: 0 }}>
            Each result comes with a deep description of how your fear shows up
            in real relationships, the strengths that come paired with it, what
            may feel difficult, and a growth path toward love that feels more
            secure and chosen. This is not a test about what is wrong with you.
            It is a mirror showing one of the most human things about you — the
            place where love still feels complicated, and why.
          </p>
        </section>
      </div>
    </main>
  );
}
