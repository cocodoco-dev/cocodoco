"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  analytical_brain: {
    title: "Analytical Brain 🔍",
    summary:
      "Your mind is sharp, structured, and always looking for how things work.",
    desc1:
      "You have a naturally analytical brain, which means your thoughts often move toward clarity, systems, and logic. You are the type of person who feels more comfortable when ideas are organized and when problems can be broken into understandable parts. Even in messy situations, your brain quietly searches for the pattern behind the noise.",
    desc2:
      "This makes you reliable, insightful, and often ahead of others when it comes to understanding complexity. People may come to you when they need a clear answer or a smart explanation. The only challenge is that logic can sometimes become over-analysis. Your greatest strength appears when precision is balanced with flexibility.",
    strengths: "Logic, structure, clarity",
    watchOut: "Overthinking, getting stuck in details",
    bestMatch:
      "Someone open-minded who appreciates your precision without fearing complexity",
  },

  creative_brain: {
    title: "Creative Brain 🎨",
    summary:
      "Your mind is imaginative, expressive, and full of unexpected possibilities.",
    desc1:
      "You have a creative brain, which means you naturally see things from fresh angles. While others may follow the obvious route, your mind often takes a more original one. You are drawn to ideas, possibilities, and forms of expression that feel alive rather than predictable.",
    desc2:
      "This makes your energy memorable. You often bring new perspectives into spaces that might otherwise feel repetitive or flat. The challenge is that imagination can become scattered if it is never grounded. Your creativity becomes especially powerful when your ideas are given enough focus to fully grow.",
    strengths: "Originality, expression, imagination",
    watchOut: "Scattered focus, doubting your own ideas too soon",
    bestMatch:
      "Someone curious and supportive who gives your mind room to create",
  },

  strategic_brain: {
    title: "Strategic Brain ♟️",
    summary:
      "Your mind naturally looks ahead, connects outcomes, and plans the smartest move.",
    desc1:
      "You have a strategic brain, which means you rarely think only about the present moment. Your mind often moves toward consequences, direction, and positioning. You are good at seeing what matters now and what will matter later, which gives your decisions a quiet sense of purpose.",
    desc2:
      "This makes you valuable in situations that require planning, leadership, or long-term thinking. People may not always notice how quickly your brain maps a path forward—but it often does. The challenge is that strategy can sometimes become control. Your strength becomes most effective when planning is balanced with adaptability.",
    strengths: "Planning, foresight, smart decision-making",
    watchOut: "Trying to over-control outcomes, struggling with uncertainty",
    bestMatch:
      "Someone confident and flexible who can respect your direction without resisting it",
  },

  emotional_brain: {
    title: "Emotional Brain 💗",
    summary:
      "Your mind understands people deeply and is wired for emotional meaning.",
    desc1:
      "You have an emotional brain, which means your intelligence often shows up through empathy, sensitivity, and the ability to read emotional reality. You naturally notice tone, feeling, and the unspoken layer of what is happening between people. To you, meaning matters just as much as logic.",
    desc2:
      "This gives you a rare kind of depth. You do not just process information—you process people. That can make you compassionate, intuitive, and deeply aware. The challenge is that you may absorb too much from others if you are not careful. Your emotional intelligence becomes strongest when it is protected by boundaries.",
    strengths: "Empathy, intuition, emotional depth",
    watchOut: "Absorbing too much, making decisions from emotional overload",
    bestMatch:
      "Someone warm and grounded who respects your sensitivity",
  },

  curious_brain: {
    title: "Curious Brain 🧭",
    summary:
      "Your mind is driven by discovery, questions, and the excitement of learning something new.",
    desc1:
      "You have a curious brain, which means you are mentally energized by exploration. You like ideas that open doors rather than close them, and you often feel most alive when there is something to discover, test, or better understand. Your thoughts naturally move toward what is possible.",
    desc2:
      "This makes your energy feel mentally alive and engaging. You are often the person who asks the interesting question or notices the path nobody else thought to take. The challenge is that curiosity can become restlessness if it never settles anywhere long enough. Your strength grows when curiosity is paired with direction.",
    strengths: "Openness, exploration, mental energy",
    watchOut: "Restlessness, jumping between too many interests",
    bestMatch:
      "Someone adventurous and open-minded who enjoys exploring ideas with you",
  },

  balanced_brain: {
    title: "Balanced Brain ⚖️",
    summary:
      "Your mind blends logic and feeling in a way that feels grounded, thoughtful, and human.",
    desc1:
      "You have a balanced brain, which means your thinking is not trapped in just one mode. You can understand facts without losing emotional nuance, and you can care deeply without losing perspective. This balance gives you a kind of quiet wisdom that often helps people trust your judgment.",
    desc2:
      "You tend to see both structure and meaning, which makes your decisions feel complete rather than one-sided. That balance is a huge strength in a world where many people lean too far in one direction. The challenge is that seeing every side can sometimes make decisions slower. Your gift becomes strongest when balance leads to confident action.",
    strengths: "Perspective, emotional logic, steadiness",
    watchOut:
      "Taking too long to decide, trying too hard to please every side",
    bestMatch:
      "Someone thoughtful and emotionally mature who values your balanced view",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "analytical_brain";
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
            href="/quiz/brain-type"
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

export default function BrainTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}