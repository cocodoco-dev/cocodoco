"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  red_core: {
    title: "Red Core ❤️",
    summary:
      "Your core personality color is red—bold, passionate, and impossible to ignore.",
    desc1:
      "At your core, you carry strong energy. You tend to move through life with intensity, courage, and a natural refusal to stay small for other people’s comfort. Even when you are quiet, there is often a force underneath your presence that makes people feel your conviction.",
    desc2:
      "This color is powerful because it represents action, desire, and emotional fire. You often bring momentum into spaces that feel hesitant or stuck. The challenge is that strong energy can overwhelm people when it is not softened by patience. Your red shines brightest when power is guided by heart.",
    strengths: "Passion, courage, strong presence",
    watchOut: "Impatience, coming on too strongly",
    bestMatch:
      "People who respect your intensity and are secure enough not to fear it",
  },

  blue_core: {
    title: "Blue Core 🌊",
    summary:
      "Your core personality color is blue—calm, thoughtful, and quietly deep.",
    desc1:
      "At your core, you are grounded in reflection and emotional clarity. You often carry yourself with a sense of calm that helps other people settle, and your presence can feel safe because it is not chaotic or performative. There is often more depth in you than people first realize.",
    desc2:
      "This color is powerful because it represents truth, steadiness, and emotional intelligence. You may not always be the loudest person in the room, but your impact tends to last because it feels sincere and clear. The challenge is that calm people are sometimes underestimated. In reality, your stillness is one of your greatest strengths.",
    strengths: "Calmness, depth, emotional clarity",
    watchOut: "Keeping too much inside, seeming distant",
    bestMatch:
      "People who value steadiness and know how to appreciate quiet depth",
  },

  yellow_core: {
    title: "Yellow Core ☀️",
    summary:
      "Your core personality color is yellow—bright, lively, and naturally uplifting.",
    desc1:
      "At your core, you bring light. You often carry a kind of energy that feels expressive, hopeful, and emotionally easy to notice. People may feel more awake, more optimistic, or simply more alive around you because your presence adds warmth to the atmosphere.",
    desc2:
      "This color is powerful because it represents joy, movement, and human warmth. You help remind people that life can still feel open and playful even when things are heavy. The challenge is that bright people sometimes feel pressure to stay bright all the time. Your yellow is strongest when your light stays honest, not forced.",
    strengths: "Joy, warmth, uplifting energy",
    watchOut: "Hiding sadness, over-giving your energy",
    bestMatch:
      "People who love your brightness and also make room for your full emotional range",
  },

  green_core: {
    title: "Green Core 🌿",
    summary:
      "Your core personality color is green—grounding, gentle, and deeply steady.",
    desc1:
      "At your core, you bring peace. There is often something stable and reassuring about your presence that helps people breathe a little easier. You may naturally move toward balance, emotional care, and the kind of calm that makes life feel less sharp.",
    desc2:
      "This color is powerful because it represents healing, steadiness, and quiet growth. You often support people simply by being consistent and emotionally real. The challenge is that grounded people can become the emotional support system for everyone else. Your green becomes healthiest when your peace is protected too.",
    strengths: "Grounding energy, steadiness, care",
    watchOut: "Taking on too much, neglecting your own needs",
    bestMatch:
      "People who value peace and return the same stability you offer them",
  },

  purple_core: {
    title: "Purple Core 🌌",
    summary:
      "Your core personality color is purple—mysterious, intuitive, and emotionally layered.",
    desc1:
      "At your core, you are not simple, and that is part of your beauty. You often carry depth, imagination, and a kind of emotional richness that makes people feel there is more to you than they can immediately understand. Your presence tends to linger because it feels unusual and meaningful.",
    desc2:
      "This color is powerful because it represents inner depth, intuition, and quiet magnetism. You may see things others miss, feel things deeply, or move through life with a strong inner world that shapes everything you do. The challenge is that mystery can become distance if you stay hidden too long. Your purple glows brightest when depth is paired with openness.",
    strengths: "Depth, intuition, subtle magnetism",
    watchOut: "Being hard to read, retreating too far inward",
    bestMatch:
      "People who are patient, perceptive, and unafraid of emotional complexity",
  },

  pink_core: {
    title: "Pink Core 🌸",
    summary:
      "Your core personality color is pink—soft, caring, and emotionally warm.",
    desc1:
      "At your core, you are guided by heart. You often bring tenderness, affection, and a gentle emotional awareness into the lives of others, which can make people feel seen and comforted more quickly than they expect. Your warmth is not weak—it is one of the most memorable things about you.",
    desc2:
      "This color is powerful because it represents kindness, softness, and human connection. You may naturally care, nurture, or make people feel emotionally safer just by the way you respond to them. The challenge is that soft-hearted people can be taken for granted if they do not protect themselves. Your pink becomes strongest when kindness includes boundaries too.",
    strengths: "Tenderness, warmth, emotional care",
    watchOut: "Over-giving, being underestimated",
    bestMatch:
      "People who value gentleness and know how to handle your softness with care",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "red_core";
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
            href="/quiz/personality-color"
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

export default function PersonalityColorResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}