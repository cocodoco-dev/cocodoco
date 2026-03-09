"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  dreamy_soul: {
    title: "Dreamy Soul ☁️",
    summary:
      "Your soul gives off a soft, beautiful, and slightly unreal vibe—people feel wonder around you.",
    desc1:
      "Your inner energy feels gentle, imaginative, and emotionally textured. There is something about you that seems to exist slightly outside the ordinary, and that makes your presence memorable. People may feel like you carry your own little world inside you, full of feelings, beauty, and quiet meaning.",
    desc2:
      "This soul vibe is magnetic because it feels delicate but deep. You often leave an impression without needing to be loud, simply because your emotional atmosphere feels rare. The challenge is that dreamy people can drift too far into their inner world. Your energy becomes strongest when softness is paired with grounding.",
    strengths: "Imagination, softness, emotional beauty",
    watchOut: "Escaping reality too often, feeling hard to fully reach",
    bestMatch:
      "Someone gentle and grounded who protects your softness without trying to change it",
  },

  golden_soul: {
    title: "Golden Soul ☀️",
    summary:
      "Your soul gives off warmth, hope, and light—people often feel brighter and safer around you.",
    desc1:
      "Your energy feels open-hearted and naturally uplifting. Even when life is messy, there is often something warm in your presence that makes people feel more at ease. You may not always realize it, but others often experience you as a kind of emotional sunlight.",
    desc2:
      "This soul vibe is powerful because it brings life back into tired spaces. You help people breathe, smile, and remember that things can still be okay. The challenge is that bright souls sometimes feel pressure to stay bright all the time. Your real power appears when your warmth stays honest instead of performative.",
    strengths: "Warmth, hope, uplifting energy",
    watchOut: "Over-giving your light, feeling pressure to stay positive",
    bestMatch:
      "Someone steady and genuine who loves your warmth without relying on it too much",
  },

  midnight_soul: {
    title: "Midnight Soul 🌌",
    summary:
      "Your soul gives off a deep, mysterious, and emotionally layered vibe—people sense there is more to you than words can explain.",
    desc1:
      "You carry an energy that feels quiet on the surface but intense underneath. Rather than revealing yourself all at once, you tend to leave people with a feeling of depth, curiosity, and emotional gravity. Your soul vibe often feels like something people can sense long before they can understand it.",
    desc2:
      "This makes you unforgettable. You do not need noise to make an impact, because your presence lingers in people’s minds. The challenge is that deep souls can become too hidden if they stay protected for too long. Your energy becomes most magnetic when mystery is balanced with just enough openness.",
    strengths: "Depth, mystery, emotional intensity",
    watchOut: "Seeming distant, carrying emotional heaviness alone",
    bestMatch:
      "Someone patient and perceptive who is not afraid of emotional depth",
  },

  wild_soul: {
    title: "Wild Soul ⚡",
    summary:
      "Your soul gives off a bold, alive, and electric vibe—people feel movement and freedom around you.",
    desc1:
      "Your inner energy is spirited, expressive, and hard to contain. There is a sense of motion around you, as if your soul refuses to live too quietly or too small. People may feel more awake around you because your vibe carries spontaneity, spark, and emotional momentum.",
    desc2:
      "This soul vibe is captivating because it breaks stillness. You bring life into spaces that might otherwise feel flat, predictable, or emotionally shut down. The challenge is that wild energy can look restless if it is not grounded in self-awareness. Your strongest presence appears when freedom and sincerity move together.",
    strengths: "Passion, boldness, lively energy",
    watchOut: "Restlessness, seeming hard to keep up with",
    bestMatch:
      "Someone confident and emotionally clear who enjoys your spark without trying to cage it",
  },

  gentle_soul: {
    title: "Gentle Soul 🤍",
    summary:
      "Your soul gives off comfort, tenderness, and quiet care—people often feel emotionally safe around you.",
    desc1:
      "You carry a soothing kind of energy that makes people soften without realizing it. Your vibe often feels warm, calm, and emotionally kind, as if being near you gives people permission to breathe out. Others may trust you quickly because your soul feels safe rather than demanding.",
    desc2:
      "This kind of vibe is deeply valuable. In a loud world, your softness can feel healing to people who are tired, overwhelmed, or guarded. The challenge is that gentle souls can become a place where everyone rests without asking what that costs. Your energy is strongest when your kindness includes boundaries too.",
    strengths: "Comfort, tenderness, emotional safety",
    watchOut: "Over-giving, being taken for granted",
    bestMatch:
      "Someone emotionally mature who values your softness and protects it too",
  },

  old_soul_flame: {
    title: "Old Soul Flame 🔥",
    summary:
      "Your soul gives off a rare mix of wisdom and intensity—people feel both depth and quiet fire in you.",
    desc1:
      "Your energy feels ancient in insight but alive in feeling. You often carry emotional meaning, reflection, and inner strength in a way that makes your presence feel layered and memorable. People may sense that you understand life on a deeper level, even if you do not always say much.",
    desc2:
      "This soul vibe is powerful because it combines gravity with warmth. You can feel intense without being chaotic, and thoughtful without being cold. The challenge is that people with deep inner fire sometimes keep too much inside. Your soul shines most when wisdom is allowed to soften into connection.",
    strengths: "Wisdom, intensity, emotional depth",
    watchOut: "Being too guarded, carrying too much alone",
    bestMatch:
      "Someone strong and perceptive who appreciates both your depth and your fire",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "dreamy_soul";
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
            href="/quiz/soul-vibe"
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

export default function SoulVibeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}