"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  dreamer_mind: {
    title: "Dreamer Mind ☁️",
    summary: "Your mind naturally moves toward possibility, imagination, and what life could become.",
    desc1:
      "You have a dreamer mind, which means your thoughts often travel beyond what is immediately visible. You are naturally drawn to possibility, meaning, and the emotional or imaginative future of things. While others may focus only on what is practical right now, you tend to sense what could exist beyond the present moment.",
    desc2:
      "This gives your mind a beautiful kind of depth. You often inspire others because you can see beyond limitation and hold onto possibility even when life feels narrow. The challenge is that dreaming can become drifting if it is never grounded. Your greatest strength appears when imagination is trusted enough to become action.",
    strengths: "Vision, imagination, hope",
    watchOut: "Escaping into possibility without grounding it",
    bestMatch: "Someone supportive and steady who believes in your inner world without trying to shrink it",
  },

  strategist_mind: {
    title: "Strategist Mind ♟️",
    summary: "Your mind naturally looks for patterns, direction, and the smartest way forward.",
    desc1:
      "You have a strategist mind, which means you rarely think in a random way. Your brain naturally organizes, compares, and evaluates. You often look for structure inside complexity, and that gives you an ability to plan ahead that many people do not realize they are missing until they talk to you.",
    desc2:
      "This makes your thinking especially strong in uncertain or complicated situations. You are often able to stay clear-headed while others get lost in emotion or confusion. The challenge is that strategy can sometimes become over-control. Your mind becomes most powerful when planning is paired with trust and adaptability.",
    strengths: "Foresight, clarity, intelligent planning",
    watchOut: "Over-controlling outcomes, overthinking every step",
    bestMatch: "Someone confident and flexible who appreciates your direction without resisting it",
  },

  explorer_mind: {
    title: "Explorer Mind 🧭",
    summary: "Your mind feels most alive when it is discovering, expanding, and moving into the unknown.",
    desc1:
      "You have an explorer mind, which means curiosity is one of your strongest internal forces. You are energized by discovery, new ideas, new experiences, and perspectives that stretch what you thought you knew. For you, mental life feels richest when something new is unfolding.",
    desc2:
      "This makes your energy intellectually alive and exciting. You often bring movement into conversations and help others look beyond the obvious. The challenge is that exploration can become restlessness if there is never enough focus to go deeper. Your mind becomes most powerful when curiosity and commitment work together.",
    strengths: "Curiosity, openness, discovery",
    watchOut: "Restlessness, moving on before something fully develops",
    bestMatch: "Someone adventurous and open-minded who enjoys growing with you",
  },

  empath_mind: {
    title: "Empath Mind 💗",
    summary: "Your mind is deeply connected to emotion, meaning, and the inner world of people.",
    desc1:
      "You have an empath mind, which means your thinking is not purely logical or detached—it is human, emotionally aware, and deeply perceptive. You naturally pick up on tone, emotional weight, and what others are carrying beneath the surface. That gives you a powerful kind of understanding many people never fully develop.",
    desc2:
      "This can make your presence deeply comforting and insightful. People may feel understood by you in a way they cannot easily explain. The challenge is that emotional depth can become emotional overload if it is not protected. Your empathy becomes strongest when your heart and your boundaries grow together.",
    strengths: "Emotional insight, care, human understanding",
    watchOut: "Absorbing too much, feeling mentally heavy from others",
    bestMatch: "Someone grounded and emotionally mature who respects your depth",
  },

  creator_mind: {
    title: "Creator Mind 🎨",
    summary: "Your mind is expressive, original, and always shaping something new from what it sees.",
    desc1:
      "You have a creator mind, which means your thoughts naturally form, shape, and transform. You are drawn to expression, originality, and ideas that feel alive rather than flat. Even in ordinary situations, your brain often notices patterns, moods, or possibilities that others completely overlook.",
    desc2:
      "This makes you mentally magnetic. You bring freshness into spaces that might otherwise feel predictable. Whether through words, ideas, visuals, or emotional expression, your mind wants to create rather than just consume. The challenge is that originality can come with self-doubt. Your strength becomes most visible when you trust your own voice enough to keep building.",
    strengths: "Originality, imagination, expression",
    watchOut: "Self-doubt, losing momentum when ideas are not immediately understood",
    bestMatch: "Someone open-minded who gives your ideas room to grow",
  },

  calm_observer_mind: {
    title: "Calm Observer Mind 🌙",
    summary: "Your mind is quiet, perceptive, and often understands more than it immediately reveals.",
    desc1:
      "You have a calm observer mind, which means you think deeply without always needing attention for it. You are often the one noticing details, emotional shifts, and subtle patterns while others are too busy reacting. Your mind tends to stay one step back from chaos—and that gives you unusual clarity.",
    desc2:
      "This is a powerful kind of intelligence because it helps you understand situations fully before moving. People may underestimate how much you see, but that quiet awareness is often exactly what gives your thinking its strength. The challenge is that staying observant too long can become hesitation. Your calm mind becomes most powerful when insight turns into action.",
    strengths: "Observation, calm clarity, emotional perception",
    watchOut: "Holding back too long, staying in reflection without moving",
    bestMatch: "Someone patient and thoughtful who values depth over noise",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "dreamer_mind";
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
            href="/quiz/mind-type"
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

export default function MindTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}