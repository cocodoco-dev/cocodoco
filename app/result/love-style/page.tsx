"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  comfort_giver: {
    title: "The Comfort Giver 🧸",
    summary: "You make love feel safe, warm, and deeply comforting.",
    desc1:
      "You are the kind of person who naturally creates emotional safety. People feel calmer around you because your presence is gentle, steady, and reassuring. In relationships, you do not rely on games or intensity to build closeness. You build it through care, empathy, and consistency.",
    desc2:
      "Your love often feels like home. You remember small things, notice emotional shifts, and know how to make someone feel understood. That warmth is one of your biggest strengths—but it can also make you overextend yourself. The right relationship for you is one where your kindness is appreciated, not quietly taken for granted.",
    strengths: "Emotional warmth, empathy, consistency",
    watchOut: "Over-giving, staying too long in one-sided dynamics",
    bestMatch: "Someone who values stability, softness, and emotional depth",
  },

  playful_charmer: {
    title: "The Playful Charmer 😼",
    summary: "You turn love into something playful, magnetic, and exciting.",
    desc1:
      "Your energy makes romance feel alive. You flirt naturally, joke easily, and know how to create chemistry without forcing it. Conversations with you rarely feel flat because you bring wit, spontaneity, and that tiny spark of unpredictability that keeps people interested.",
    desc2:
      "People are often drawn to your charm before they even realize why. Being with you feels light, fun, and memorable. But sometimes your playful side can blur your deeper feelings, making others wonder how serious you really are. When you pair your charm with emotional clarity, you become incredibly hard to forget.",
    strengths: "Charisma, humor, chemistry",
    watchOut: "Mixed signals, emotional ambiguity",
    bestMatch: "Someone confident enough to enjoy your playful rhythm",
  },

  loyal_anchor: {
    title: "The Loyal Anchor ⚓",
    summary: "Your love style is calm, steady, and deeply dependable.",
    desc1:
      "You are not someone who rushes into emotional chaos. Instead, you build trust carefully and let relationships grow with time. Your love is quiet but strong, and that makes you one of the most dependable partners anyone could have.",
    desc2:
      "What people admire most about you is your consistency. Your words and actions usually match, and that creates real security. Some may misread your calm nature as emotional distance at first, but the people who stay long enough realize your steadiness is actually your strongest form of affection.",
    strengths: "Loyalty, stability, maturity",
    watchOut: "Being too reserved, taking too long to express feelings",
    bestMatch: "Someone who wants trust, commitment, and emotional security",
  },

  enigmatic_heart: {
    title: "The Enigmatic Heart 🐾",
    summary: "You are intriguing, independent, and hard to fully read.",
    desc1:
      "Your love style is subtle. You do not reveal everything all at once, and you are rarely the person wearing your whole heart on your sleeve. Instead, people discover you in layers—and that mystery can be one of the most attractive things about you.",
    desc2:
      "You value depth, privacy, and emotional nuance. When you finally let someone in, it means something real. The challenge is that not everyone knows how to read your quieter way of loving. You need someone patient enough to understand that your reserved nature does not mean your feelings are small.",
    strengths: "Depth, independence, emotional complexity",
    watchOut: "Emotional distance, difficulty showing vulnerability",
    bestMatch: "Someone patient, perceptive, and emotionally secure",
  },

  golden_retriever_lover: {
    title: "The Golden Retriever Lover 💛",
    summary: "Your love is bright, loyal, and full of enthusiasm.",
    desc1:
      "When you care about someone, it shows. Your affection feels open, warm, and sincere, and people around you usually never have to guess where they stand with you. You bring energy and emotional brightness into relationships in a way that feels refreshing.",
    desc2:
      "You are often the one who adds the little sparks—kind texts, excited reactions, spontaneous sweetness, and visible loyalty. That openness is beautiful, but it can also leave you vulnerable when the other person gives much less than you do. Your love becomes strongest when your warmth is balanced by healthy boundaries.",
    strengths: "Warmth, openness, loyalty",
    watchOut: "Getting attached too quickly, giving too much too soon",
    bestMatch: "Someone affectionate, kind, and emotionally expressive",
  },

  free_spirit_lover: {
    title: "The Free Spirit Lover ⭐",
    summary: "You love deeply, but never lose your sense of independence.",
    desc1:
      "For you, love is not about possession. It is about connection between two people who still get to remain fully themselves. You value freedom, individuality, and emotional honesty, and you want relationships that feel alive rather than restrictive.",
    desc2:
      "You are drawn to bonds that leave room for growth, curiosity, and personal direction. That makes your love feel refreshing and mature. Some people may mistake your independence for distance, but the truth is that you simply believe the healthiest love is built between two whole people—not two people trying to control each other.",
    strengths: "Independence, authenticity, confidence",
    watchOut: "Appearing detached, needing more space than some partners expect",
    bestMatch: "Someone secure, self-driven, and emotionally mature",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "comfort_giver";
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
        <h1 style={{ fontSize: "46px", marginBottom: "12px" }}>{r.title}</h1>

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
            href="/quiz/love-style"
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
            Home
          </a>
        </div>

        <div
          style={{
            marginTop: "22px",
            width: "100%",
            height: "120px",
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
      </div>
    </main>
  );
}

export default function LoveStyleResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}