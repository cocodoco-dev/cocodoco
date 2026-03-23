"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  soft_dreamer: {
    title: "Soft Dreamer 🌙",
    summary:
      "You are the kind of main character whose story feels emotional, cinematic, and quietly unforgettable.",
    desc1:
      "Your energy feels gentle, reflective, and full of inner life. You may not always be the loudest person in the room, but you carry a depth that people feel. There is something cinematic about the way you move through the world — like even your quiet moments have meaning.",
    desc2:
      "What makes you a main character is your emotional presence. You notice beauty, feel things deeply, and often seem connected to a richer inner world than most people realize. Your story is not about noise. It is about subtle moments, emotional truth, and the kind of softness that stays with people.",
    strengths: "Depth, emotional sensitivity, quiet beauty",
    watchOut: "Getting lost in overthinking or romanticizing pain",
    bestMatch:
      "People and spaces that feel gentle, artistic, and emotionally sincere",
  },

  chaotic_icon: {
    title: "Chaotic Icon ⚡",
    summary:
      "You are the kind of main character who brings unforgettable energy, boldness, and dramatic charm into every scene.",
    desc1:
      "You have a presence that feels alive. Whether you mean to or not, you often make things more vivid, more memorable, and a little more chaotic. You are not here to be background energy. People remember you because your vibe feels spontaneous, expressive, and impossible to fully predict.",
    desc2:
      "What makes you a main character is your ability to shift the whole atmosphere. You bring movement, fun, unpredictability, and strong individuality into life. Even your messiness has charm. Your story feels loud in the best way — full of moments people replay later because you made them feel something real.",
    strengths: "Boldness, charisma, unforgettable presence",
    watchOut: "Burning out or hiding vulnerability behind chaos",
    bestMatch:
      "People who can enjoy your energy while respecting your real feelings underneath",
  },

  quiet_mastermind: {
    title: "Quiet Mastermind 🖤",
    summary:
      "You are the kind of main character whose power comes from intelligence, restraint, and hidden depth.",
    desc1:
      "You do not need attention to have presence. There is something strong about the way you observe, think, and move with intention. People may underestimate how much you notice, but your inner world is often sharper, deeper, and more strategic than they realize.",
    desc2:
      "What makes you a main character is your quiet power. You often understand the emotional dynamics around you without needing to explain yourself. Your story feels layered, thoughtful, and quietly intense. You are the kind of character people understand more deeply over time — and remember for much longer.",
    strengths: "Intelligence, observation, quiet intensity",
    watchOut: "Becoming too guarded or emotionally unreachable",
    bestMatch:
      "People who respect depth, patience, and subtle emotional intelligence",
  },

  golden_heart: {
    title: "Golden Heart ☀️",
    summary:
      "You are the kind of main character who holds warmth, kindness, and emotional light at the center of the story.",
    desc1:
      "Your energy feels safe, warm, and deeply human. You are often the person people trust, lean on, or remember because of how genuine your heart feels. Even when life gets difficult, you carry a kind of emotional goodness that helps people feel less alone.",
    desc2:
      "What makes you a main character is not drama — it is heart. Your story matters because of the care you bring into it. You often create connection, comfort, and emotional grounding without even trying to stand out. That warmth becomes unforgettable because it is real.",
    strengths: "Warmth, kindness, emotional steadiness",
    watchOut: "Giving too much and forgetting your own needs",
    bestMatch:
      "People who value sincerity, emotional safety, and soft strength",
  },

  magnetic_rebel: {
    title: "Magnetic Rebel 🔥",
    summary:
      "You are the kind of main character who feels bold, independent, and impossible to fully contain.",
    desc1:
      "There is something naturally striking about you. You tend to move with your own rhythm, and people can feel that you are not built to fit neatly into expectations. Your energy feels self-directed, alive, and a little dangerous in the most interesting way.",
    desc2:
      "What makes you a main character is your refusal to become small for comfort. You carry individuality, edge, and a kind of freedom that other people notice immediately. Your story feels powerful because it is driven by instinct, truth, and the courage to be fully yourself.",
    strengths: "Independence, boldness, strong identity",
    watchOut: "Pushing people away before they can understand you",
    bestMatch:
      "People who admire freedom, confidence, and emotional honesty",
  },

  healing_poet: {
    title: "Healing Poet 🌷",
    summary:
      "You are the kind of main character whose story changes people through softness, insight, and emotional healing.",
    desc1:
      "Your presence feels gentle, thoughtful, and emotionally restorative. You may not always realize it, but people often leave interactions with you feeling calmer, more understood, or more connected to themselves. There is a quiet healing quality in the way you feel and respond.",
    desc2:
      "What makes you a main character is the emotional impact you leave behind. Your story is not about dominating the scene — it is about changing its meaning. You carry softness with depth, and that gives your presence a rare kind of beauty. People remember you because something inside them shifted.",
    strengths: "Healing energy, empathy, emotional wisdom",
    watchOut: "Carrying other people’s pain too often",
    bestMatch:
      "People who value tenderness, reflection, and emotional growth",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "soft_dreamer";
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
            href="/quiz/main-character"
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

export default function MainCharacterResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}