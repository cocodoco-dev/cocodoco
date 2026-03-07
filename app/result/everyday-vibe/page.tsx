"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  cozy_planner: {
    title: "Cozy Planner 🧸",
    summary: "You bring calm, comfort, and quiet structure wherever you go.",
    desc1:
      "Your vibe feels warm, grounded, and reassuring. You naturally create an atmosphere that feels safe and comfortable, and people often feel more relaxed just by being around you. You do not chase chaos if you can help it—you prefer environments that feel steady, familiar, and emotionally easy to live in.",
    desc2:
      "At your best, you are thoughtful, dependable, and quietly nurturing. You know how to create balance in your daily life, and that sense of order helps other people feel at ease too. The only thing to watch out for is becoming too attached to comfort. Sometimes the most rewarding experiences begin just outside your routine.",
    strengths: "Warmth, reliability, emotional steadiness",
    watchOut: "Getting stuck in routine, avoiding change for too long",
    bestMatch: "Someone energetic enough to inspire you, but gentle enough to respect your pace",
  },

  spontaneous_sprinter: {
    title: "Spontaneous Sprinter ⚡",
    summary: "You move quickly, trust your instincts, and bring momentum into every room.",
    desc1:
      "Your vibe feels alive, immediate, and exciting. You are the kind of person who says yes before overthinking, and that gives your energy a natural spark. Life around you rarely feels dull because you bring movement, speed, and an adventurous edge to even ordinary moments.",
    desc2:
      "People are often drawn to your boldness because you make things happen instead of waiting for the perfect timing. You bring courage and action, which is something many people secretly admire. Still, your pace can sometimes outrun your patience. Slowing down once in a while helps your energy feel powerful instead of chaotic.",
    strengths: "Momentum, boldness, excitement",
    watchOut: "Impulsiveness, losing interest too quickly",
    bestMatch: "Someone curious and flexible who can keep up with your pace",
  },

  curious_collector: {
    title: "Curious Collector 🔍",
    summary: "You are driven by discovery, ideas, and the thrill of finding something new.",
    desc1:
      "Your vibe is thoughtful, curious, and full of quiet excitement. You are the kind of person who notices interesting details, asks unexpected questions, and gets genuinely excited about new places, concepts, and experiences. For you, life feels richest when there is always something new to learn or explore.",
    desc2:
      "You often leave an impression because people can feel your mind moving beneath the surface. There is depth to your curiosity, and that makes your energy feel engaging rather than random. The challenge is that you may collect too many interests at once and scatter your focus. When you direct your curiosity well, it becomes one of your strongest gifts.",
    strengths: "Curiosity, creativity, mental depth",
    watchOut: "Overthinking, chasing too many things at once",
    bestMatch: "Someone open-minded who enjoys exploring ideas and experiences with you",
  },

  chill_floater: {
    title: "Chill Floater 🌿",
    summary: "You move through life with softness, ease, and very little unnecessary stress.",
    desc1:
      "Your vibe feels peaceful, flexible, and emotionally light. You are not someone who wants to force everything into a rigid shape. Instead, you let life unfold, respond calmly, and keep your sense of peace even when the world gets noisy around you.",
    desc2:
      "This makes you incredibly easy to be around. You reduce tension rather than adding to it, and people often see you as a source of comfort and emotional breathing room. Still, going with the flow too much can sometimes turn into avoiding decisions. Your calm becomes strongest when it is paired with just enough direction.",
    strengths: "Calmness, adaptability, emotional ease",
    watchOut: "Procrastination, drifting without intention",
    bestMatch: "Someone grounded who appreciates your relaxed energy without trying to control it",
  },

  social_butterfly: {
    title: "Social Butterfly 🦋",
    summary: "You bring brightness, connection, and easy warmth into social spaces.",
    desc1:
      "Your vibe is lively, expressive, and naturally inviting. You connect with people quickly, and your energy often helps others feel included. In group settings, you are usually one of the people who makes the room feel lighter, warmer, and more fun.",
    desc2:
      "People remember you because you make interactions feel easy. You know how to keep things moving, how to bring conversation to life, and how to add energy without trying too hard. Your challenge is that being everywhere for everyone can leave you drained. Protecting your own energy helps your social side stay joyful instead of exhausting.",
    strengths: "Charm, friendliness, social ease",
    watchOut: "People-pleasing, spreading your energy too thin",
    bestMatch: "Someone warm and confident who enjoys people but respects your need to recharge",
  },

  quiet_observer: {
    title: "Quiet Observer 🌙",
    summary: "You notice what others miss and bring depth into even the quietest moments.",
    desc1:
      "Your vibe feels calm, thoughtful, and quietly perceptive. You are not usually the loudest presence in a room, but you often understand more than people expect. You pick up on tone, mood, and subtle details, and that gives your energy a natural sense of depth.",
    desc2:
      "There is something grounding about the way you move through the world. You take your time, think before reacting, and often see patterns that others overlook. The only risk is becoming too distant from action while staying in observation mode. When you trust your own voice more, your insight becomes even more powerful.",
    strengths: "Perception, calmness, quiet intelligence",
    watchOut: "Withdrawing too much, hesitating to speak up",
    bestMatch: "Someone patient and emotionally aware who values depth over noise",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "cozy_planner";
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
            href="/quiz/everyday-vibe"
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

export default function EverydayVibeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}