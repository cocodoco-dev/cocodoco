"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  childlike_heart: {
    title: "Childlike Heart 🧸",
    summary:
      "Your emotional age is young at heart—you feel things sincerely, openly, and with genuine softness.",
    desc1:
      "Your emotional world is shaped by honesty and innocence. You often react from the heart before the mind, and that gives you a rare kind of sincerity. People may feel safe around you because your emotions feel real, unfiltered, and easy to trust.",
    desc2:
      "This does not mean you are immature. It means your heart still knows how to stay soft in a world that often teaches people to become guarded. Your challenge is protecting that softness without losing it. Your emotional strength appears when openness is paired with healthy boundaries.",
    strengths: "Sincerity, softness, emotional honesty",
    watchOut: "Getting hurt too easily, trusting too quickly",
    bestMatch:
      "Someone gentle and emotionally steady who values your open heart",
  },

  teen_spirit: {
    title: "Teen Spirit ⚡",
    summary:
      "Your emotional age feels youthful, passionate, and full of intensity—you experience life through strong feeling.",
    desc1:
      "Your emotions are vivid and alive. You care deeply, react strongly, and often feel things in a way that brings excitement and momentum into life. Even when others seem emotionally distant, you bring heat, honesty, and passion into the room.",
    desc2:
      "That emotional fire can be magnetic. People may remember you because your presence feels real and energizing. The challenge is that intensity can become emotional whiplash if you move faster than your own self-awareness. Your growth comes from learning how to keep passion without letting it control you.",
    strengths: "Passion, honesty, emotional energy",
    watchOut: "Impulsiveness, emotional ups and downs",
    bestMatch:
      "Someone grounded enough to handle your intensity without trying to dim it",
  },

  balanced_adult: {
    title: "Balanced Adult 🌿",
    summary:
      "Your emotional age is mature and balanced—you feel deeply, but you also know how to stay grounded.",
    desc1:
      "You tend to handle emotions with calm awareness. Rather than reacting immediately, you often pause, think, and respond with clarity. People may see you as emotionally dependable because your presence feels stable, fair, and safe.",
    desc2:
      "That balance is one of your greatest strengths. You are able to care without collapsing and support others without losing yourself. The challenge is that emotionally capable people are sometimes expected to carry too much. Your healthiest version appears when you remember that maturity does not mean you must always be the strong one.",
    strengths: "Stability, self-awareness, reliability",
    watchOut: "Taking on too much, hiding your own needs",
    bestMatch:
      "Someone thoughtful and emotionally reciprocal who values steady connection",
  },

  old_soul: {
    title: "Old Soul 🌙",
    summary:
      "Your emotional age feels older than most—you carry depth, reflection, and a strong sense of inner meaning.",
    desc1:
      "You are emotionally thoughtful in a way that feels timeless. Rather than chasing noise, you naturally look for truth, depth, and emotional substance. People may feel that you understand sadness, love, and life itself on a level that is difficult to explain.",
    desc2:
      "This emotional age can make you deeply comforting and unforgettable. You often see beneath the surface, which gives your feelings unusual weight and wisdom. The challenge is that depth can become heaviness if you stay in reflection for too long. Your strength shines brightest when wisdom leaves room for lightness too.",
    strengths: "Depth, wisdom, emotional insight",
    watchOut: "Overthinking, carrying emotional heaviness",
    bestMatch:
      "Someone patient and genuine who appreciates depth without fearing it",
  },

  gentle_guardian: {
    title: "Gentle Guardian 🤍",
    summary:
      "Your emotional age is caring and quietly mature—you protect others with warmth, patience, and heart.",
    desc1:
      "You have a nurturing emotional presence. Rather than leading with intensity or mystery, you often show love through steadiness, kindness, and concern for how others feel. People may lean on you because you make them feel understood without making them feel judged.",
    desc2:
      "That kind of emotional maturity is powerful. You know how to comfort, hold space, and stay present when others feel overwhelmed. The challenge is that caregivers can slowly forget themselves while taking care of everyone else. Your emotional balance becomes strongest when compassion includes you too.",
    strengths: "Warmth, patience, emotional care",
    watchOut: "Over-giving, neglecting your own feelings",
    bestMatch:
      "Someone appreciative and emotionally responsible who gives back what you give",
  },

  timeless_depth: {
    title: "Timeless Depth 🖤",
    summary:
      "Your emotional age is hard to define—you carry both intensity and wisdom in a way that feels rare and deeply layered.",
    desc1:
      "You are not emotionally simple, and that is your power. You may feel things with great intensity, but there is also awareness, restraint, and meaning underneath. People are often drawn to you because your emotional world feels rich, private, and impossible to reduce to one label.",
    desc2:
      "This makes your presence memorable. You can feel both young in passion and old in wisdom, which creates a kind of emotional gravity that others notice. The challenge is learning when to open up and when to protect your energy. Your strongest emotional expression appears when depth is balanced with softness and trust.",
    strengths: "Intensity, wisdom, emotional complexity",
    watchOut: "Being hard to read, keeping too much inside",
    bestMatch:
      "Someone emotionally strong and perceptive enough to understand your layers",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "childlike_heart";
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
            href="/quiz/emotional-age"
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

export default function EmotionalAgeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}