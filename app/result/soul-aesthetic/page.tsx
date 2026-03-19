"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  dreamy_romantic: {
    title: "Dreamy Romantic 🌸",
    summary:
      "Your soul matches an aesthetic that is soft, emotional, and full of tender beauty.",
    desc1:
      "You are drawn to beauty that feels delicate, heartfelt, and quietly magical. Your inner world likely holds a lot of emotion, softness, and imagination. Flowers, pink skies, handwritten feelings, and moments that feel almost cinematic may speak to you more deeply than loud or flashy things ever could.",
    desc2:
      "What makes this aesthetic yours is not just that it is pretty — it reflects your emotional sensitivity. You notice small details, emotional tone, and the subtle beauty hidden in ordinary life. Your soul feels most alive when life feels gentle, meaningful, and a little bit enchanted.",
    strengths: "Tenderness, emotional beauty, softness",
    watchOut: "Romanticizing what hurts you, living too much in fantasy",
    bestMatch:
      "People and spaces that feel kind, gentle, and emotionally sincere",
  },

  soft_minimalist: {
    title: "Soft Minimalist 🤍",
    summary:
      "Your soul matches an aesthetic that is calm, clean, and quietly beautiful.",
    desc1:
      "You are most drawn to peace. Your soul does not need chaos to feel alive — it feels most itself in spaces that are simple, soft, and emotionally uncluttered. You likely appreciate neutral tones, stillness, natural light, and a sense of quiet order that helps you breathe more deeply.",
    desc2:
      "This aesthetic reflects a soul that values clarity and emotional balance. There is elegance in the way you simplify things, and your presence may often feel calming to others. You are not cold or empty — you simply understand that beauty does not need noise to be real.",
    strengths: "Peace, clarity, balance",
    watchOut: "Withdrawing too much, hiding your emotions behind calmness",
    bestMatch:
      "People and spaces that feel grounded, natural, and emotionally easy",
  },

  vintage_poetic: {
    title: "Vintage Poetic 📖",
    summary:
      "Your soul matches an aesthetic filled with nostalgia, depth, and quiet beauty.",
    desc1:
      "You are drawn to beauty that feels like memory. Old books, rainy windows, faded colors, paper letters, and things touched by time may move you more than anything glossy or new. Your soul seems to trust beauty that carries a story, a history, or a trace of longing.",
    desc2:
      "This aesthetic reflects your emotional depth and your connection to meaning. You likely feel things in layers, and your heart may be naturally reflective and sentimental. There is something timeless about the way you move through the world — as if you are always listening for the emotional echo behind the moment.",
    strengths: "Depth, meaning, emotional richness",
    watchOut: "Getting stuck in nostalgia, holding onto feelings too long",
    bestMatch:
      "People and spaces that feel thoughtful, soulful, and full of story",
  },

  dark_moody: {
    title: "Dark Moody 🌙",
    summary:
      "Your soul matches an aesthetic that is deep, intense, mysterious, and emotionally powerful.",
    desc1:
      "You are drawn to beauty with shadow in it. Rain at night, low light, silence, stormy skies, and emotionally charged spaces may feel more honest to you than bright surfaces. Your soul likely trusts depth over ease, and intensity over shallow comfort.",
    desc2:
      "This aesthetic reflects a powerful inner world. You are not afraid of emotional complexity, and you may even find meaning in sadness, stillness, or mystery. What makes this aesthetic beautiful on you is that it holds depth without apology. Your soul does not need to be loud to be unforgettable.",
    strengths: "Intensity, mystery, emotional honesty",
    watchOut: "Staying in heaviness too long, mistaking pain for depth",
    bestMatch:
      "People and spaces that respect your depth without trying to flatten it",
  },

  golden_sunlit: {
    title: "Golden Sunlit ☀️",
    summary:
      "Your soul matches an aesthetic that is warm, alive, radiant, and full of natural light.",
    desc1:
      "You are drawn to beauty that feels warm and life-giving. Golden hour, summer air, nature, laughter, open windows, and the soft glow of sunlight likely feel deeply healing to you. Your soul naturally leans toward warmth, openness, and emotional brightness.",
    desc2:
      "This aesthetic reflects a heart that brings comfort and light without trying too hard. There is something uplifting about your energy, even when you are quiet. The beauty of this aesthetic is not only joy — it is warmth, honesty, and the feeling that life can still be soft and good.",
    strengths: "Warmth, openness, uplifting presence",
    watchOut: "Ignoring your heavier emotions to stay bright",
    bestMatch:
      "People and spaces that feel sunny, genuine, and emotionally warm",
  },

  ethereal_cosmic: {
    title: "Ethereal Cosmic 🌌",
    summary:
      "Your soul matches an aesthetic that feels otherworldly, mysterious, and quietly infinite.",
    desc1:
      "You are drawn to beauty that feels bigger than ordinary life. Stars, moonlight, silence, surreal imagery, silver tones, and vast open skies may speak to something deep inside you. Your soul seems to live half in this world and half in a place made of wonder, distance, and intuition.",
    desc2:
      "This aesthetic reflects your layered inner world and your attraction to mystery, imagination, and emotional depth. You may often feel hard to fully define, even to yourself. That is part of your beauty. Your soul is not meant to fit neatly into simple categories — it is meant to feel expansive, strange, and luminous.",
    strengths: "Imagination, mystery, emotional depth",
    watchOut: "Feeling detached, drifting too far from real connection",
    bestMatch:
      "People and spaces that feel magical, spacious, and deeply intuitive",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "dreamy_romantic";
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
            href="/quiz/soul-aesthetic"
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

export default function SoulAestheticResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}