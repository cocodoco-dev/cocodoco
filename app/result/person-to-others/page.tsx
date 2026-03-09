"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  safe_person: {
    title: "The Safe Person 🤝",
    summary:
      "People see you as someone they can trust, lean on, and emotionally breathe around.",
    desc1:
      "To other people, you often come across as safe in the best possible way. Your presence tends to feel kind, grounded, and emotionally dependable, which makes people lower their guard faster than they expect. You may not always realize it, but many people quietly associate you with comfort, trust, and stability.",
    desc2:
      "This makes your presence deeply meaningful. In a world where many people feel rushed, performative, or hard to read, you feel real. Others may not always say it out loud, but they often remember how secure they felt around you. The challenge is that safe people sometimes become emotional anchors for everyone else. Your strength becomes healthiest when trust does not turn into emotional over-carrying.",
    strengths: "Trustworthiness, warmth, emotional reliability",
    watchOut: "Carrying too much for others, being taken for granted",
    bestMatch:
      "Someone honest and emotionally mature who values safety and reciprocity",
  },

  interesting_person: {
    title: "The Interesting One 🌙",
    summary:
      "People see you as someone with layers, originality, and a mind that feels worth discovering.",
    desc1:
      "To other people, you often come across as genuinely interesting. There is something about the way you think, speak, or exist that feels less predictable than average. You may not even be trying to stand out, but people often feel there is more to you than they can fully understand right away—and that draws them in.",
    desc2:
      "This gives your presence a kind of quiet magnetism. You are memorable because you do not feel flat or obvious. Others may replay things you said long after the interaction ends. The challenge is that being interesting can sometimes create distance if people feel they cannot fully reach you. Your strongest impact appears when your uniqueness is paired with warmth.",
    strengths: "Originality, intrigue, memorable presence",
    watchOut:
      "Feeling misunderstood, becoming too distant without meaning to",
    bestMatch:
      "Someone curious and open-minded who appreciates complexity",
  },

  fun_person: {
    title: "The Fun One 🎉",
    summary:
      "People see you as someone who brings lightness, energy, and joy into their lives.",
    desc1:
      "To other people, you often come across as genuinely fun to be around. Your presence tends to make things feel lighter, more alive, and more emotionally easy. You bring movement into social spaces, and people often associate you with laughter, memorable moments, and the feeling that life is a little less heavy around you.",
    desc2:
      "This kind of social energy is powerful because it is felt immediately. You help people loosen up, breathe, and enjoy the moment. The challenge is that fun people sometimes feel pressure to stay bright all the time, even when they are tired or emotionally full. Your charm becomes strongest when your lightness stays honest, not forced.",
    strengths: "Joy, liveliness, social warmth",
    watchOut:
      "Feeling pressure to perform, being underestimated emotionally",
    bestMatch:
      "Someone grounded who enjoys your energy without expecting you to carry every mood",
  },

  calm_person: {
    title: "The Calm One 🌿",
    summary:
      "People see you as someone steady, peaceful, and easy to exist around.",
    desc1:
      "To other people, you often come across as calming. Even when you are not the center of attention, your energy changes the emotional tone of a space. People may feel less rushed, less tense, or less self-conscious around you because your presence naturally lowers pressure.",
    desc2:
      "That kind of social effect is more powerful than it looks. Calm people are often the ones others trust in emotionally noisy moments. You may help people settle simply by being yourself. The challenge is that softer energies are sometimes overlooked in louder rooms. Your calm becomes strongest when you remember it is a form of strength, not invisibility.",
    strengths: "Peace, steadiness, emotional grounding",
    watchOut:
      "Being overlooked, staying too quiet when your voice matters",
    bestMatch:
      "Someone thoughtful and warm who values peace without mistaking it for passivity",
  },

  inspiring_person: {
    title: "The Inspiring One ✨",
    summary:
      "People see you as someone who makes them think bigger, grow, or move differently.",
    desc1:
      "To other people, you often come across as inspiring. There is something in your mindset, words, or energy that pushes people to think beyond where they are right now. You may not always notice it, but your presence can make others feel more hopeful, more motivated, or more aware of their own potential.",
    desc2:
      "This makes your impact larger than the moment itself. People may leave a conversation with you feeling changed, clearer, or more willing to move. The challenge is that inspiring people sometimes take on too much responsibility for everyone else's growth. Your energy becomes healthiest when encouragement is offered without feeling responsible for the outcome.",
    strengths: "Motivation, perspective, uplifting influence",
    watchOut:
      "Feeling responsible for fixing or guiding everyone",
    bestMatch:
      "Someone self-aware and emotionally mature who values growth and mutual encouragement",
  },

  unforgettable_person: {
    title: "The Unforgettable One 🔥",
    summary:
      "People see you as someone who leaves a lasting mark on their mind, even after a short time.",
    desc1:
      "To other people, you often come across as unforgettable. There is something about your energy, presence, or emotional effect that lingers. Even when you are not trying to make a dramatic impression, people may still think about you later because you felt different, stronger, or more memorable than expected.",
    desc2:
      "This kind of presence can be powerful because it stays with people. You may carry depth, intensity, or a certain emotional weight that makes interactions feel significant. The challenge is that being unforgettable can sometimes create emotional projection—people may imagine more than you intended. Your strongest impact appears when your depth is grounded in clarity.",
    strengths: "Impact, memorability, emotional presence",
    watchOut:
      "Being idealized or misunderstood, unintentionally seeming hard to reach",
    bestMatch:
      "Someone emotionally strong and self-aware who can appreciate depth without projecting onto it",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "safe_person";
  const r = results[key];

  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert("Copy failed. Please copy from the address bar.");
    }
  }

  const adBoxStyle = {
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
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "42px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(860px, 100%)", textAlign: "center" }}>
        <h1
          style={{
            fontSize: "40px",
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          {r.title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#374151",
            marginBottom: "22px",
          }}
        >
          {r.summary}
        </p>

        <div style={{ ...adBoxStyle, marginBottom: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.72)",
            border: "1px solid #f2a7b8",
            borderRadius: "18px",
            padding: "24px",
            textAlign: "left",
            lineHeight: 1.7,
            color: "#374151",
          }}
        >
          <p style={{ marginTop: 0 }}>{r.desc1}</p>
          <p>{r.desc2}</p>

          <div style={{ marginTop: "18px" }}>
            <p style={{ margin: "10px 0" }}>
              <strong>Strengths:</strong> {r.strengths}
            </p>
            <p style={{ margin: "10px 0" }}>
              <strong>Watch out for:</strong> {r.watchOut}
            </p>
            <p style={{ margin: "10px 0" }}>
              <strong>Best match:</strong> {r.bestMatch}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "22px",
          }}
        >
          <button
            onClick={copyLink}
            style={{
              padding: "12px 22px",
              background: copied ? "#22c55e" : "#111827",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {copied ? "Copied!" : "Share result"}
          </button>

          <a
            href="/quiz/person-to-others"
            style={{
              padding: "12px 22px",
              background: "#ff8fab",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Try again
          </a>

          <a
            href="/"
            style={{
              padding: "12px 22px",
              background: "white",
              color: "#111827",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "1px solid #e5e7eb",
            }}
          >
            Other tests
          </a>
        </div>

        <div style={{ ...adBoxStyle, marginTop: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>
      </div>
    </main>
  );
}

export default function PersonToOthersResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}