"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  empathy: {
    title: "Empathy 💗",
    summary:
      "Your true strength is the ability to deeply understand and care for people.",
    desc1:
      "Empathy is your real strength because you naturally notice emotional reality. You are often able to sense what others are carrying, even when they do not say it out loud. That gives your presence a kind of depth and softness that makes people feel seen rather than judged.",
    desc2:
      "This strength is more powerful than many people realize. Empathy builds trust, connection, and emotional safety in ways that logic alone never can. The challenge is that caring deeply can become emotionally heavy if you forget your own boundaries. Your strength becomes most sustainable when compassion includes yourself too.",
    strengths: "Emotional understanding, kindness, trust-building",
    watchOut: "Absorbing too much from others, neglecting your own needs",
    bestMatch:
      "Someone emotionally mature who values your heart and respects your boundaries",
  },

  courage: {
    title: "Courage 🔥",
    summary:
      "Your true strength is moving forward even when fear is still present.",
    desc1:
      "Courage is your real strength because you are willing to face what many people avoid. You may still feel fear, doubt, or uncertainty—but unlike many others, you do not always let those feelings decide for you. There is a forward-moving quality in your spirit that pushes through discomfort.",
    desc2:
      "That makes your strength deeply inspiring. Courage is not loud confidence every second; it is choosing action even when things are not guaranteed. The challenge is that constant bravery can become pressure if you never allow yourself softness. Your courage becomes strongest when it is paired with self-awareness and rest.",
    strengths: "Bravery, momentum, inner strength",
    watchOut: "Pushing too hard, thinking vulnerability makes you weak",
    bestMatch:
      "Someone grounded who supports your fire without trying to contain it",
  },

  creativity: {
    title: "Creativity 🎨",
    summary:
      "Your true strength is seeing possibilities that other people often miss.",
    desc1:
      "Creativity is your real strength because your mind does not stop at what already exists. You naturally imagine new ways, new meanings, and new possibilities. Even in situations that feel ordinary or limited, you often sense that something original can still be created.",
    desc2:
      "This gives you a powerful kind of influence. Creativity is not only about art—it is about vision. You help bring freshness into spaces that might otherwise stay predictable. The challenge is that imagination can feel fragile when it is not protected. Your strength becomes most powerful when you trust your ideas enough to keep building them.",
    strengths: "Originality, imagination, fresh thinking",
    watchOut: "Self-doubt, scattered energy",
    bestMatch:
      "Someone open-minded who values originality and encourages your ideas to grow",
  },

  intelligence: {
    title: "Intelligence 🧠",
    summary:
      "Your true strength is clear thinking, insight, and the ability to understand complexity.",
    desc1:
      "Intelligence is your real strength because your mind naturally looks for understanding. You are often good at making sense of complexity, seeing patterns, and solving things that confuse other people. Even when you are quiet, there is often a lot happening under the surface of your thoughts.",
    desc2:
      "This makes your presence valuable in both practical and emotional situations. Intelligence helps you create clarity where others see confusion. The challenge is that strong thinking can sometimes turn into overthinking or distance. Your intelligence becomes most powerful when insight is balanced with trust in action.",
    strengths: "Clarity, analysis, problem-solving",
    watchOut: "Overthinking, staying in your head too long",
    bestMatch:
      "Someone curious and steady who appreciates depth without making everything feel like a test",
  },

  resilience: {
    title: "Resilience 🌱",
    summary:
      "Your true strength is your ability to keep going and rebuild, even after hard seasons.",
    desc1:
      "Resilience is your real strength because you do not break as easily as people assume. Life may knock you down, but there is something inside you that keeps finding a way to stand back up. You carry endurance, recovery, and emotional staying power in a way that often becomes visible only after difficulty appears.",
    desc2:
      "This is a deeply powerful kind of strength because it is built through reality, not image. People may admire your steadiness because you can keep moving without losing yourself completely. The challenge is that resilience can make others assume you are always fine. Your strength becomes healthier when you remember you are allowed to need support too.",
    strengths: "Endurance, recovery, emotional steadiness",
    watchOut: "Carrying too much alone, being seen as 'always okay'",
    bestMatch:
      "Someone dependable and caring who values your strength without taking it for granted",
  },

  leadership: {
    title: "Leadership 👑",
    summary:
      "Your true strength is guiding people and helping things move in the right direction.",
    desc1:
      "Leadership is your real strength because you naturally create direction. Even if you do not always think of yourself as a leader, people often look to you when decisions need to be made, energy needs to be focused, or someone needs to move first. You have a presence that can organize people and momentum.",
    desc2:
      "This makes your strength highly visible in group settings, work, and moments of uncertainty. Leadership is not only about being in charge—it is about carrying responsibility in a way that helps others move forward. The challenge is remembering that real leadership includes listening, not just driving. Your influence becomes strongest when strength is paired with humility.",
    strengths: "Direction, confidence, influence",
    watchOut: "Taking on too much, forgetting to slow down and listen",
    bestMatch:
      "Someone secure and emotionally intelligent who respects your direction and offers honest perspective",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "empathy";
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
            href="/quiz/true-strength"
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

export default function TrueStrengthResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}