"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  soft_pretty: {
    title: "Soft Pretty 🌸",
    summary:
      "Your beauty feels gentle, comforting, and quietly healing to the people around you.",
    desc1:
      "Your kind of pretty is not loud or attention-seeking. It feels warm, delicate, and emotionally safe. People may be drawn to you because your presence makes things feel softer, calmer, and easier to breathe in. There is a tenderness in the way your energy lands.",
    desc2:
      "What makes this kind of beauty special is that it lingers emotionally. You may not always realize it, but softness is powerful. People often remember how peaceful, kind, or comforted they felt around you. Your beauty is the kind that feels like warmth rather than performance.",
    strengths: "Gentleness, warmth, emotional softness",
    watchOut: "Being underestimated because your beauty feels quiet",
    bestMatch:
      "People and spaces that value tenderness, calmness, and sincerity",
  },

  elegant_pretty: {
    title: "Elegant Pretty ✨",
    summary:
      "Your beauty feels graceful, refined, and naturally magnetic without needing to try too hard.",
    desc1:
      "You carry a kind of beauty that feels polished and timeless. It is not only about appearance — it is about the way you move, the way you hold yourself, and the quiet confidence in your energy. People may notice that you feel composed even when you are not doing anything dramatic.",
    desc2:
      "What makes this kind of pretty powerful is its steadiness. Your beauty does not rely on being loud or overly expressive. It comes through in your presence, your restraint, and the sense that you know your own value. That kind of elegance stays in people’s minds.",
    strengths: "Grace, composure, timeless magnetism",
    watchOut: "Seeming distant or intimidating without meaning to",
    bestMatch:
      "People and spaces that appreciate subtle confidence and refinement",
  },

  cute_pretty: {
    title: "Cute Pretty 🍓",
    summary:
      "Your beauty feels sweet, playful, and naturally lovable in a way that brightens people instantly.",
    desc1:
      "Your kind of pretty has charm in it. There is something endearing, expressive, and emotionally easy about the way you come across. People may smile more around you without even realizing why, because your energy feels alive, soft, and easy to adore.",
    desc2:
      "What makes this kind of beauty special is that it carries joy. Cute beauty is not shallow — it is powerful in the way it makes people feel lighter, warmer, and more drawn in. Your presence feels approachable and memorable, which gives your beauty a real emotional pull.",
    strengths: "Charm, sweetness, lovable energy",
    watchOut: "Not being taken seriously enough at first",
    bestMatch:
      "People and spaces that love brightness, playfulness, and emotional warmth",
  },

  mysterious_pretty: {
    title: "Mysterious Pretty 🌙",
    summary:
      "Your beauty feels quiet, intriguing, and hard to fully read — and that is exactly what makes it unforgettable.",
    desc1:
      "You have the kind of beauty that creates curiosity. There is something subtle, deep, or quietly intense in your presence that makes people feel there is more to you than they can immediately understand. You may not reveal everything at once, and that gives your beauty a lingering effect.",
    desc2:
      "What makes this kind of pretty powerful is that it stays with people. While more obvious beauty may catch attention quickly, yours tends to live in memory. It feels layered, thoughtful, and a little elusive. The mystery is not distance for its own sake — it is part of your natural depth.",
    strengths: "Intrigue, depth, unforgettable aura",
    watchOut: "Seeming more distant than you really are",
    bestMatch:
      "People and spaces that respect depth, subtlety, and emotional complexity",
  },

  sunny_pretty: {
    title: "Sunny Pretty ☀️",
    summary:
      "Your beauty feels bright, radiant, and naturally uplifting in a way that people notice right away.",
    desc1:
      "You have the kind of pretty that feels full of light. There is something open, warm, and emotionally vivid in the way you show up. People may be drawn to you because your energy makes things feel more alive, more hopeful, and more fun without trying too hard.",
    desc2:
      "What makes this kind of beauty powerful is how it affects the atmosphere. You do not just look bright — you make people feel brighter. Your beauty is memorable because it carries joy, vitality, and warmth. It feels like emotional sunlight.",
    strengths: "Radiance, warmth, uplifting energy",
    watchOut: "Feeling pressure to always stay bright",
    bestMatch:
      "People and spaces that feel open, genuine, and full of life",
  },

  ethereal_pretty: {
    title: "Ethereal Pretty 🕊️",
    summary:
      "Your beauty feels dreamy, delicate, and almost otherworldly in the way it touches people’s attention.",
    desc1:
      "You have the kind of pretty that feels hard to fully describe. It is soft, airy, and a little unreal — not because it is distant, but because it carries a dreamlike quality. People may feel drawn to you in a way they cannot explain clearly, only feel.",
    desc2:
      "What makes this kind of beauty special is that it feels like mood as much as appearance. There is imagination, softness, and a quiet glow in your energy that gives your presence a rare feeling. Your beauty is the kind people remember like a scene from a film or a feeling from a dream.",
    strengths: "Dreaminess, delicacy, unforgettable atmosphere",
    watchOut: "Feeling hard to define or misunderstood",
    bestMatch:
      "People and spaces that value beauty, imagination, and emotional depth",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "soft_pretty";
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
            href="/quiz/kind-of-pretty"
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

export default function KindOfPrettyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}