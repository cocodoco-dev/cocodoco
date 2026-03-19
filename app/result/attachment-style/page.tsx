"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  secure_heart: {
    title: "Secure Heart 💗",
    summary:
      "Your attachment style in love is secure, steady, and emotionally balanced.",
    desc1:
      "You tend to approach love with openness rather than fear. You can care deeply without losing yourself, and you usually value honesty, consistency, and emotional safety. People often feel calm around you because your love feels stable instead of confusing.",
    desc2:
      "That does not mean you are emotionless or never get hurt. It means your heart usually trusts connection without needing to control it. Your strength in love is balance: you know how to stay close while still respecting both your needs and someone else’s. That kind of love is deeply comforting and rare.",
    strengths: "Trust, emotional balance, healthy closeness",
    watchOut: "Staying too long with emotionally unavailable people",
    bestMatch:
      "Someone sincere, communicative, and emotionally consistent",
  },

  anxious_romantic: {
    title: "Anxious Romantic 💌",
    summary:
      "Your attachment style in love is deeply caring, emotionally intense, and reassurance-seeking.",
    desc1:
      "You love with your whole heart. When you care about someone, their attention, tone, and presence can affect you strongly. You often crave emotional closeness and reassurance, not because you are weak, but because love feels deeply meaningful to you.",
    desc2:
      "Your biggest strength is devotion. You are attentive, affectionate, and emotionally invested. But sometimes that same depth can turn into overthinking, fear of being left, or reading too much into small changes. Your healthiest love appears when reassurance comes not only from others, but also from your own inner stability.",
    strengths: "Devotion, sensitivity, emotional depth",
    watchOut: "Overthinking, fear of distance, needing too much reassurance",
    bestMatch:
      "Someone warm, reliable, and clear with their feelings",
  },

  avoidant_soul: {
    title: "Avoidant Soul 🌫️",
    summary:
      "Your attachment style in love is independent, guarded, and slow to fully let people in.",
    desc1:
      "You may care deeply, but you do not always show it in obvious ways. In love, you often protect your freedom, emotional space, and inner world. You usually feel safest when things move at your own pace and when no one tries to force closeness too quickly.",
    desc2:
      "This does not mean you do not want love. It means vulnerability can feel risky, especially if closeness starts to feel overwhelming. Your strength is self-control and emotional independence. The challenge is that protecting yourself too much can block the intimacy you actually want. Love tends to work best for you when space and trust grow together.",
    strengths: "Independence, calmness, emotional self-protection",
    watchOut: "Shutting down, seeming distant, avoiding vulnerability",
    bestMatch:
      "Someone patient, grounded, and respectful of your pace",
  },

  fearful_deep: {
    title: "Fearful Deep 🖤",
    summary:
      "Your attachment style in love is intense, layered, and caught between longing for closeness and fearing pain.",
    desc1:
      "You often want real intimacy, but part of you may also fear what comes with it. Love can feel beautiful and dangerous at the same time. You may open deeply one moment, then pull back the next when things start to feel too emotionally real.",
    desc2:
      "Your heart is not cold — it is protective. You often feel things strongly, and that makes trust especially important. Your greatest strength is emotional depth and sincerity. The challenge is healing the part of you that expects closeness to become hurt. Your love becomes most powerful when safety, patience, and self-trust begin to replace fear.",
    strengths: "Depth, sincerity, emotional complexity",
    watchOut: "Push-pull patterns, fear of trust, emotional overwhelm",
    bestMatch:
      "Someone emotionally patient, gentle, and consistently safe",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "secure_heart";
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
            href="/quiz/attachment-style"
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

export default function AttachmentStyleResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}