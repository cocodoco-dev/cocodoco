"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  emotionally_safe: {
    title: "Emotionally Safe 💗",
    summary:
      "Your secret green flag is the way people feel safe, accepted, and unjudged around you.",
    desc1:
      "One of your most beautiful qualities is emotional gentleness. You often make people feel like they do not need to perform, defend themselves, or hide their real feelings. That kind of safety is rare, and it creates a kind of trust that cannot be faked.",
    desc2:
      "What makes this a secret green flag is that it may not be obvious at first. People might only realize it after spending time with you and noticing how much lighter, calmer, and more open they feel. Your energy gives people permission to be real, and that is deeply healing.",
    strengths: "Gentleness, trust-building, emotional safety",
    watchOut: "Absorbing too much of other people’s emotions",
    bestMatch:
      "People who value kindness, honesty, and emotional depth",
  },

  quietly_loyal: {
    title: "Quietly Loyal 🤍",
    summary:
      "Your secret green flag is your consistency, loyalty, and the way you stay true over time.",
    desc1:
      "You may not always be the loudest person about love or care, but your presence is dependable. When you choose someone, you tend to show up in a real way. You are not all performance and intensity at the beginning — you are someone whose care proves itself over time.",
    desc2:
      "That kind of loyalty is powerful because it makes people feel secure. In a world full of mixed signals and temporary energy, your steadiness stands out. Your green flag is not flashy, but it is deeply valuable: you are someone people can actually trust.",
    strengths: "Loyalty, consistency, dependability",
    watchOut: "Staying too loyal to people who do not deserve it",
    bestMatch:
      "People who appreciate consistency and know how to value real commitment",
  },

  genuinely_considerate: {
    title: "Genuinely Considerate 🌷",
    summary:
      "Your secret green flag is how naturally thoughtful, observant, and caring you are.",
    desc1:
      "You notice details that many people miss. The little things matter to you — how someone is feeling, what would make their day easier, what might quietly hurt them, and what could make them feel seen. Your care often shows up through thoughtfulness rather than attention-seeking.",
    desc2:
      "This is a green flag because real consideration is one of the clearest signs of emotional maturity. You do not only think about your own experience — you naturally make room for other people too. That quality makes your care feel sincere and deeply comforting.",
    strengths: "Thoughtfulness, empathy, attentiveness",
    watchOut: "Overextending yourself or caring more than others reciprocate",
    bestMatch:
      "People who notice effort and return care with equal sincerity",
  },

  calm_communicator: {
    title: "Calm Communicator 🫶",
    summary:
      "Your secret green flag is the way you bring calm, honesty, and maturity into difficult conversations.",
    desc1:
      "You have a healthy way of handling communication. Even when emotions are involved, you tend to value respect, clarity, and emotional steadiness over drama. That makes you someone people can actually talk to, not just someone they react around.",
    desc2:
      "This is a powerful green flag because healthy relationships are built on communication that feels safe and real. You help tension feel less threatening, and you often make it easier for people to speak honestly. Your energy says that conflict does not have to mean chaos.",
    strengths: "Clarity, maturity, respectful honesty",
    watchOut: "Taking on the role of the “stable one” too often",
    bestMatch:
      "People who value directness, emotional maturity, and mutual respect",
  },

  softly_supportive: {
    title: "Softly Supportive ☁️",
    summary:
      "Your secret green flag is the quiet, nurturing way you support people without making it about yourself.",
    desc1:
      "You have a soft kind of strength. When someone you care about is struggling, you often know how to be present in a way that feels comforting rather than overwhelming. Your support may not always be dramatic, but it is often exactly what people need.",
    desc2:
      "What makes this special is that your care feels gentle and real. You do not always need attention for the way you help. You simply offer kindness, steadiness, and emotional warmth. That kind of support makes people feel less alone, and that is a beautiful quality to carry.",
    strengths: "Nurturing energy, warmth, emotional support",
    watchOut: "Being overlooked because your care is so quiet",
    bestMatch:
      "People who appreciate tenderness and know how to receive care well",
  },

  secure_and_steady: {
    title: "Secure and Steady 🌿",
    summary:
      "Your secret green flag is the grounded, healthy energy you bring into relationships.",
    desc1:
      "You have a stabilizing presence. Rather than creating confusion or emotional chaos, you tend to bring steadiness, patience, and a sense of balance into connection. People may feel more relaxed around you because your energy does not constantly shift in ways that make them guess.",
    desc2:
      "That is a rare green flag. Healthy love often looks simple from the outside, but simplicity built on steadiness is one of the most valuable things a person can offer. You help relationships feel calmer, safer, and more sustainable over time.",
    strengths: "Stability, emotional balance, healthy consistency",
    watchOut: "Being underestimated because your energy feels calm rather than dramatic",
    bestMatch:
      "People who want something real, steady, and emotionally healthy",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "emotionally_safe";
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
            href="/quiz/secret-green-flag"
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

export default function SecretGreenFlagResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}