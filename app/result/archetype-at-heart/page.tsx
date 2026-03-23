"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  dreamer: {
    title: "The Dreamer 🌙",
    summary:
      "At heart, you are the Dreamer — hopeful, imaginative, and always sensing that life could become something more beautiful.",
    desc1:
      "Your inner self naturally leans toward possibility. Even when life is difficult, a part of you keeps looking toward beauty, meaning, and what could still unfold. You are often guided by feeling, imagination, and the emotional pull of a future that has not fully arrived yet.",
    desc2:
      "What makes this archetype powerful is not escapism, but vision. Dreamers help life feel larger than survival. You carry hope, softness, and emotional imagination in a way that can inspire both yourself and the people around you. Your gift is seeing beyond what is in front of you.",
    strengths: "Hope, imagination, emotional vision",
    watchOut: "Getting lost in fantasy or waiting too long to act",
    bestMatch:
      "People and paths that protect your softness while helping your visions become real",
  },

  lover: {
    title: "The Lover 💗",
    summary:
      "At heart, you are the Lover — emotionally devoted, deeply feeling, and driven by connection that feels real.",
    desc1:
      "Your inner self is rooted in feeling. You are someone who naturally values intimacy, beauty, affection, and emotional truth. When something matters to you, it matters fully. Love, in all its forms, tends to shape your decisions more than detached logic ever could.",
    desc2:
      "What makes this archetype powerful is depth of connection. Lovers bring warmth, sincerity, and emotional presence into life. You help people feel chosen, seen, and valued. Your gift is not simply loving deeply — it is making life itself feel more alive through what you care about.",
    strengths: "Devotion, warmth, emotional depth",
    watchOut: "Losing yourself inside attachment or intensity",
    bestMatch:
      "Connections that are mutual, emotionally honest, and genuinely tender",
  },

  sage: {
    title: "The Sage 📚",
    summary:
      "At heart, you are the Sage — thoughtful, observant, and drawn toward wisdom, truth, and real understanding.",
    desc1:
      "Your inner self tends to search beneath the surface. You often want to know what something really means, what is actually true, and how everything fits together beneath appearances. You may naturally step back, reflect, and notice things that others miss.",
    desc2:
      "What makes this archetype powerful is clarity. Sages bring perspective into confusion and depth into noise. Your gift is not just intelligence, but insight — the ability to understand patterns, meaning, and emotional reality with more depth than most people realize.",
    strengths: "Wisdom, perspective, insight",
    watchOut: "Living too much in thought and too little in direct experience",
    bestMatch:
      "People and paths that value truth, reflection, and thoughtful depth",
  },

  rebel: {
    title: "The Rebel 🔥",
    summary:
      "At heart, you are the Rebel — fiercely individual, freedom-driven, and unwilling to live inside what feels false.",
    desc1:
      "Your inner self resists what feels limiting, dishonest, or imposed from the outside. You are often driven by instinct, truth, and the need to stay real even when it would be easier to conform. Something in you pushes against cages, roles, and expectations that do not fit your soul.",
    desc2:
      "What makes this archetype powerful is courage. Rebels disrupt comfort not just for the sake of chaos, but because they can sense when something needs to change. Your gift is the strength to protect authenticity, challenge what no longer works, and remind life to stay honest.",
    strengths: "Freedom, authenticity, courage",
    watchOut: "Pushing away support or peace in the name of independence",
    bestMatch:
      "People and paths that respect your truth without trying to contain it",
  },

  guardian: {
    title: "The Guardian 🌿",
    summary:
      "At heart, you are the Guardian — steady, protective, and deeply guided by care, loyalty, and emotional responsibility.",
    desc1:
      "Your inner self is rooted in devotion and protection. You naturally care about what is safe, what is lasting, and who needs to be held with real consistency. You may often become the person others trust because your energy feels dependable and emotionally grounded.",
    desc2:
      "What makes this archetype powerful is steadiness. Guardians help life feel safer, softer, and more sustainable. Your gift is not only caring — it is showing up, protecting what matters, and creating a kind of emotional structure people can lean on.",
    strengths: "Loyalty, steadiness, protection",
    watchOut: "Carrying too much for others and neglecting your own needs",
    bestMatch:
      "People and paths that value trust, consistency, and heartfelt devotion",
  },

  magician: {
    title: "The Magician ✨",
    summary:
      "At heart, you are the Magician — transformative, intuitive, and drawn to changing reality from the inside out.",
    desc1:
      "Your inner self is naturally connected to change, symbolism, and the feeling that life can shift in meaningful ways. You may often sense hidden potential, unseen patterns, or emotional truths that are difficult to explain logically. Something in you is drawn to transformation rather than stagnation.",
    desc2:
      "What makes this archetype powerful is alchemy. Magicians turn inner movement into outer change. Your gift is seeing what could be transformed, awakened, or reimagined — in yourself, in others, and sometimes in the whole atmosphere around you. You carry possibility with intention.",
    strengths: "Transformation, intuition, vision",
    watchOut: "Trying to reinvent everything before fully grounding yourself",
    bestMatch:
      "People and paths that welcome depth, change, and meaningful evolution",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "dreamer";
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
            href="/quiz/archetype-at-heart"
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

export default function ArchetypeAtHeartResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}