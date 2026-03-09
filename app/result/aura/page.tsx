"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  golden_aura: {
    title: "Golden Aura ☀️",
    summary:
      "Your aura feels bright, warm, and naturally uplifting—people often feel lighter around you.",
    desc1:
      "You carry an energy that feels radiant without trying too hard. Your presence often brings warmth, positivity, and a quiet kind of joy that people notice immediately. Even when you are not speaking much, others may still feel that you brighten the room just by being there.",
    desc2:
      "This kind of aura is powerful because it gives people emotional oxygen. You make things feel more hopeful, more open, and easier to breathe in. The challenge is that bright people sometimes feel pressure to stay bright all the time. Your strongest glow appears when your warmth stays honest, not forced.",
    strengths: "Warmth, positivity, emotional light",
    watchOut: "Feeling pressure to always seem okay, over-giving your energy",
    bestMatch:
      "Someone grounded and genuine who enjoys your light without depending on it",
  },

  moon_aura: {
    title: "Moon Aura 🌙",
    summary:
      "Your aura feels quiet, mysterious, and deeply magnetic—people sense there is more to you than they can explain.",
    desc1:
      "You do not always attract attention in the loudest way, but your energy lingers. There is something thoughtful, layered, and a little hard to read about you that makes people curious. Others may feel drawn to you because your presence feels calm on the surface, but full of hidden depth underneath.",
    desc2:
      "This kind of aura has a lasting effect. While others may shine quickly, you stay in people’s minds because your energy feels meaningful and rare. The challenge is that mystery can turn into distance if you stay closed off for too long. Your strongest magnetism appears when quiet depth is balanced with warmth.",
    strengths: "Mystery, depth, subtle magnetism",
    watchOut: "Seeming too distant, being hard to read",
    bestMatch:
      "Someone patient and perceptive who enjoys discovering emotional depth",
  },

  rose_aura: {
    title: "Rose Aura 🌷",
    summary:
      "Your aura feels soft, comforting, and emotionally safe—people often feel cared for around you.",
    desc1:
      "You carry a gentle kind of beauty in the way your energy touches people. Rather than overwhelming others, you soothe them. Your presence can feel kind, warm, and quietly healing, which makes people open up faster than they expect to.",
    desc2:
      "This kind of aura is incredibly valuable because it creates emotional safety. People may not always have the perfect words for it, but they often feel calmer and more themselves around you. The challenge is that soft energy can be taken for granted if you keep giving without boundaries. Your aura becomes strongest when tenderness includes self-protection too.",
    strengths: "Comfort, kindness, emotional safety",
    watchOut: "Over-giving, being underestimated",
    bestMatch:
      "Someone emotionally mature who values gentleness and reciprocity",
  },

  ocean_aura: {
    title: "Ocean Aura 🌊",
    summary:
      "Your aura feels calm, deep, and steady—people often trust your energy because it feels grounding.",
    desc1:
      "You have a peaceful presence that helps people slow down. There is something emotionally spacious about you, as if others can breathe more easily in your company. Rather than creating noise, you create calm, and that makes your energy feel stable and quietly powerful.",
    desc2:
      "This kind of aura stands out because it brings balance. People may come to you when they feel scattered, overwhelmed, or emotionally tired. The challenge is that steady people are often expected to hold more than they should. Your healthiest energy appears when your calm is shared, not drained away.",
    strengths: "Calm, steadiness, grounding presence",
    watchOut: "Absorbing too much from others, emotional fatigue",
    bestMatch:
      "Someone sincere and balanced who respects your peace instead of taking from it",
  },

  fire_aura: {
    title: "Fire Aura 🔥",
    summary:
      "Your aura feels bold, intense, and magnetic—people notice your energy because it changes the atmosphere.",
    desc1:
      "You carry strong presence. Whether through confidence, emotional intensity, or natural charisma, your aura tends to leave an impression fast. People may feel energized, challenged, or awakened around you because your energy pushes things out of stillness.",
    desc2:
      "This makes you unforgettable. You bring movement, passion, and force into spaces that might otherwise feel flat. The challenge is that strong energy can sometimes overwhelm people who are not ready for it. Your aura becomes most powerful when intensity is guided by emotional control rather than pure impulse.",
    strengths: "Intensity, confidence, magnetic impact",
    watchOut: "Coming on too strong, emotional overheat",
    bestMatch:
      "Someone confident and emotionally steady enough to handle your fire",
  },

  forest_aura: {
    title: "Forest Aura 🌿",
    summary:
      "Your aura feels natural, grounded, and deeply reassuring—people often feel safe and stable around you.",
    desc1:
      "You have an earthy kind of presence that feels real and dependable. Instead of chasing attention, your energy creates trust. People may see you as someone solid, calming, and emotionally centered, even when everything around them feels chaotic.",
    desc2:
      "This kind of aura is quietly powerful because it offers steadiness in a world full of noise. Others may not always realize how much your energy supports them until they step away from it. The challenge is that grounded people can become the default support system for everyone else. Your strongest presence appears when your stability is protected too.",
    strengths: "Stability, trust, grounded warmth",
    watchOut: "Becoming everyone’s emotional anchor, neglecting your own needs",
    bestMatch:
      "Someone calm and appreciative who values your steady presence",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "golden_aura";
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
            href="/quiz/aura"
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

export default function AuraResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}