"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  warm_blanket: {
    title: "Warm Blanket 🧣",
    summary:
      "You are the kind of comfort that makes people feel instantly softer, safer, and emotionally cared for.",
    desc1:
      "Your comfort feels immediate and warm. People may feel at ease around you because your presence has a way of taking the sharp edge off hard moments. You do not always need perfect words—often, just being near you can make people feel less cold inside.",
    desc2:
      "This kind of comfort is powerful because it gives emotional relief. You help people feel held without making them explain everything first. The challenge is that warm people can become a place where everyone rests while no one asks how they are doing. Your comfort becomes healthiest when your warmth includes yourself too.",
    strengths: "Warmth, reassurance, emotional softness",
    watchOut: "Over-giving, becoming everyone’s safe place without rest",
    bestMatch:
      "People who appreciate tenderness and know how to return the care you give",
  },

  quiet_room: {
    title: "Quiet Room 🌙",
    summary:
      "You are the kind of comfort that brings peace, stillness, and room to breathe.",
    desc1:
      "Your presence does not overwhelm people. Instead, it gives them space to settle, think, and feel without pressure. There is something calming about your energy that makes others feel like they do not have to perform, explain, or rush when they are around you.",
    desc2:
      "This comfort matters because not all healing is loud. Sometimes the greatest gift is simply a peaceful place where the nervous system can unclench. The challenge is that calm people can be overlooked because their impact is quiet. In reality, your stillness is exactly what makes you healing.",
    strengths: "Calmness, space, grounding peace",
    watchOut: "Being overlooked, holding too much in silence",
    bestMatch:
      "People who respect quiet care and understand the depth behind your calmness",
  },

  late_night_talk: {
    title: "Late Night Talk 🌌",
    summary:
      "You are the kind of comfort that makes people feel deeply understood and less alone.",
    desc1:
      "Your comfort comes through emotional understanding. People may open up to you because you listen in a way that feels real, patient, and personal. Rather than just soothing the surface, you often help others feel seen at the level that actually hurts.",
    desc2:
      "This kind of comfort is unforgettable because it reaches the heart of things. You make people feel like their inner world is not too much to be shared. The challenge is that deep listeners can absorb more than they should. Your gift becomes strongest when understanding others does not mean carrying everything for them.",
    strengths: "Understanding, empathy, emotional depth",
    watchOut: "Emotional exhaustion, carrying too much of others’ pain",
    bestMatch:
      "People who value real connection and do not mistake your depth for endless capacity",
  },

  sunny_window: {
    title: "Sunny Window ☀️",
    summary:
      "You are the kind of comfort that brings light, hope, and a softer way back into the day.",
    desc1:
      "Your comfort feels bright in a gentle way. You may not erase pain, but you often help people feel that pain is survivable. There is something in your energy that lets light back into the room, making others feel a little less trapped in what they are going through.",
    desc2:
      "This kind of comfort is beautiful because it restores hope without denying reality. You help people remember that healing can include brightness, not just endurance. The challenge is that hopeful people can feel pressure to always be the positive one. Your comfort is strongest when your light stays honest and human.",
    strengths: "Hope, brightness, uplifting warmth",
    watchOut: "Feeling pressure to stay positive, hiding your own darker moments",
    bestMatch:
      "People who love your light and also make room for your full emotional range",
  },

  gentle_hug: {
    title: "Gentle Hug 🤍",
    summary:
      "You are the kind of comfort that feels tender, close, and quietly healing.",
    desc1:
      "Your comfort is intimate in the softest way. People may feel drawn to you because your energy says, without words, that they do not have to be strong every second. You create a feeling of closeness that can calm fear, soften pain, and make people feel emotionally protected.",
    desc2:
      "This comfort is powerful because tenderness is often what people need most and ask for least. You remind others that gentleness is not weakness—it is relief. The challenge is that deeply tender people can be taken for granted if they do not protect their own energy. Your comfort shines brightest when softness has boundaries.",
    strengths: "Tenderness, closeness, emotional care",
    watchOut: "Being taken for granted, giving comfort past your limits",
    bestMatch:
      "People who value softness and know how to handle your gentleness with care",
  },

  safe_home: {
    title: "Safe Home 🏡",
    summary:
      "You are the kind of comfort that feels dependable, grounding, and deeply secure.",
    desc1:
      "Your comfort is not just a moment—it feels like stability. People may trust you because your presence feels reliable, steady, and emotionally real in a way that does not disappear when things get hard. Being around you can feel like returning to something solid.",
    desc2:
      "This kind of comfort is rare because it offers both peace and permanence. You make people feel that they do not have to brace themselves all the time. The challenge is that dependable people often become the emotional foundation for others without enough support of their own. Your comfort becomes strongest when your stability is protected too.",
    strengths: "Security, steadiness, dependable care",
    watchOut: "Carrying too much, becoming everyone’s emotional foundation",
    bestMatch:
      "People who value consistency and give you the same sense of safety back",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "warm_blanket";
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
            href="/quiz/comfort-type"
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

export default function ComfortTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}