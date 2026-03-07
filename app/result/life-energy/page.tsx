"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  fire_energy: {
    title: "Fire Energy 🔥",
    summary: "Your life energy is driven by passion, motion, and the urge to ignite change.",
    desc1:
      "You carry fire energy, which means your presence often feels intense, active, and forward-moving. You are energized by momentum, challenge, and the feeling that something real is happening. Even when life becomes difficult, part of you wants to move, act, and turn pressure into motion.",
    desc2:
      "This makes your energy powerful and unforgettable. You can inspire others simply by refusing to stay small. The challenge is that fire can burn too hot if it never slows down. Your strongest form appears when passion is balanced with rest, patience, and emotional awareness.",
    strengths: "Passion, drive, momentum",
    watchOut: "Burnout, impatience, pushing too hard",
    bestMatch: "Someone grounded enough to steady your fire without putting it out",
  },

  water_energy: {
    title: "Water Energy 🌊",
    summary: "Your life energy is emotional, flowing, and deeply connected to what is real beneath the surface.",
    desc1:
      "You carry water energy, which means your inner life runs deep. You are not always loud about what you feel, but your energy is shaped by emotion, intuition, and an ability to move around obstacles rather than always forcing through them. You often understand life through depth rather than speed.",
    desc2:
      "This makes your presence emotionally powerful. Water adapts, survives, and transforms—and so do you. The challenge is that deep emotional flow can sometimes become heaviness if it is not released. Your energy becomes strongest when you let yourself move, not just absorb.",
    strengths: "Depth, adaptability, intuition",
    watchOut: "Emotional overload, holding too much inside",
    bestMatch: "Someone calm and emotionally steady who respects your depth",
  },

  wind_energy: {
    title: "Wind Energy 💨",
    summary: "Your life energy is free, changing, and always moving toward something new.",
    desc1:
      "You carry wind energy, which means your spirit is naturally drawn toward movement, freedom, and change. You often feel most alive when something is opening, shifting, or expanding. You are not built to remain emotionally or mentally trapped for too long.",
    desc2:
      "This gives your presence freshness and possibility. People may feel lighter around you because your energy reminds them that life can move. The challenge is that wind can become directionless if it never lands anywhere long enough. Your energy becomes strongest when freedom and focus learn to work together.",
    strengths: "Freedom, flexibility, movement",
    watchOut: "Restlessness, drifting without direction",
    bestMatch: "Someone adventurous but grounded enough to help you stay anchored",
  },

  earth_energy: {
    title: "Earth Energy 🌱",
    summary: "Your life energy is grounded, steady, and deeply reassuring.",
    desc1:
      "You carry earth energy, which means your strength often shows through consistency, patience, and stability. You are not always the loudest force in the room, but your presence often helps others feel more secure. There is a natural rootedness in you that gives life a sense of steadiness.",
    desc2:
      "This makes your energy deeply valuable in a world full of noise and instability. You help create trust simply by being real and grounded. The challenge is that staying rooted can sometimes become resistance to change. Your earth energy becomes strongest when stability includes openness as well.",
    strengths: "Stability, patience, reliability",
    watchOut: "Resistance to change, staying too comfortable",
    bestMatch: "Someone warm and alive who respects your pace while gently expanding your world",
  },

  light_energy: {
    title: "Light Energy ✨",
    summary: "Your life energy feels hopeful, uplifting, and naturally healing to be around.",
    desc1:
      "You carry light energy, which means your presence often brings emotional brightness. People may feel better around you without fully knowing why, because your energy naturally leans toward hope, meaning, and warmth. Even in difficult moments, part of you keeps searching for what is still good, still possible, still alive.",
    desc2:
      "This makes your energy quietly powerful. Light is not only brightness—it is guidance. The challenge is that being a source of hope can become exhausting if you feel you always have to stay positive. Your light becomes strongest when it is honest, not performative.",
    strengths: "Hope, warmth, uplifting presence",
    watchOut: "Pressure to stay positive, hiding your own pain",
    bestMatch: "Someone genuine and emotionally mature who values your warmth without depending on it",
  },

  shadow_energy: {
    title: "Shadow Energy 🌑",
    summary: "Your life energy is deep, introspective, and shaped by what most people overlook.",
    desc1:
      "You carry shadow energy, which means your strength often lives in complexity, quiet truth, and the parts of life that are not always easy to explain. You are often more comfortable with depth than surface, and you may naturally see what others try to ignore. That gives your energy a mysterious but powerful gravity.",
    desc2:
      "Shadow energy is not darkness in a negative sense—it is depth, honesty, and the willingness to face what is real. This can make you emotionally strong in ways that are not immediately obvious. The challenge is that depth can become isolation if you stay inside it too long. Your energy becomes strongest when shadow is balanced with connection.",
    strengths: "Depth, honesty, emotional courage",
    watchOut: "Isolation, staying too hidden in your inner world",
    bestMatch: "Someone patient and emotionally grounded who is not afraid of depth",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "fire_energy";
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
            href="/quiz/life-energy"
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

export default function LifeEnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}