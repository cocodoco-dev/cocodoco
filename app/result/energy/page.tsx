"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  golden_energy: {
    title: "Golden Energy ☀️",
    summary: "Your presence feels warm, open, and naturally uplifting.",
    desc1:
      "You give off golden energy because people often feel lighter around you. There is something emotionally bright about your presence that makes spaces feel more welcoming and human. You are often the kind of person who makes others feel included, noticed, and a little more hopeful without even trying too hard.",
    desc2:
      "That warmth is one of your greatest strengths. You naturally create emotional brightness, and people are drawn to that. The challenge is that you may feel pressure to stay positive even when you need rest. Your energy becomes even healthier when warmth is balanced with honesty and boundaries.",
    strengths: "Warmth, positivity, emotional openness",
    watchOut: "Overextending yourself, feeling responsible for everyone's mood",
    bestMatch: "Someone grounded who appreciates your light without depending on it too much",
  },

  calm_energy: {
    title: "Calm Energy 🌿",
    summary: "You give off a grounded and peaceful energy that helps people breathe easier.",
    desc1:
      "Your presence feels steady, balanced, and emotionally safe. You are the type of person who makes things feel less chaotic simply by being there. In a loud world, your energy stands out because it is quiet in the best possible way—stable, soothing, and difficult to shake.",
    desc2:
      "People often trust calm energy because it feels real. You do not need to dominate spaces to make an impression. At your best, you bring reassurance and perspective. The challenge is that others may sometimes mistake your calm for distance. When you let your warmth show a little more, your energy becomes even more magnetic.",
    strengths: "Stability, peace, emotional steadiness",
    watchOut: "Being misunderstood as detached, staying too quiet for too long",
    bestMatch: "Someone thoughtful who values peace but also brings warmth into your world",
  },

  mysterious_energy: {
    title: "Mysterious Energy 🌙",
    summary: "Your energy feels deep, quiet, and hard to fully read.",
    desc1:
      "You give off mysterious energy because people often sense that there is more to you than what is immediately visible. You do not reveal yourself all at once, and that creates depth. Others may feel drawn to you precisely because they cannot fully predict or define you.",
    desc2:
      "This kind of energy can be incredibly attractive. You make people curious, and your presence often lingers in their minds longer than louder personalities do. The challenge is that mystery can sometimes become emotional distance if you stay too hidden for too long. Your energy is strongest when depth is balanced with openness.",
    strengths: "Depth, intrigue, emotional complexity",
    watchOut: "Coming across as too distant, making people guess too much",
    bestMatch: "Someone patient and perceptive who is not afraid of depth",
  },

  creative_energy: {
    title: "Creative Energy 🎨",
    summary: "Your vibe feels expressive, original, and full of fresh possibility.",
    desc1:
      "You give off creative energy because your presence feels alive with ideas, personality, and perspective. There is something distinctive about the way you see things, and people often notice that you bring freshness into ordinary spaces. Even when you are not trying to stand out, your originality often does it for you.",
    desc2:
      "This makes your energy memorable. You bring inspiration, imagination, and emotional color into the world around you. The challenge is that creativity sometimes comes with self-doubt or scattered focus. When you trust your own voice more fully, your energy becomes not only expressive—but deeply influential.",
    strengths: "Originality, imagination, inspiration",
    watchOut: "Scattered focus, second-guessing your own ideas",
    bestMatch: "Someone open-minded who appreciates your individuality and gives it room to grow",
  },

  bold_energy: {
    title: "Bold Energy ⚡",
    summary: "Your presence is strong, direct, and hard to ignore.",
    desc1:
      "You give off bold energy because people feel your presence immediately. You have a clear way of moving, speaking, or carrying yourself that creates impact. Even when you are not trying to take over a room, your energy often feels confident enough to shape the tone of it.",
    desc2:
      "This can make you incredibly compelling. You bring movement, certainty, and a sense of momentum that many people admire. The challenge is that strong energy can sometimes overwhelm quieter people without meaning to. Your boldness becomes even more powerful when it is paired with sensitivity and awareness.",
    strengths: "Confidence, presence, momentum",
    watchOut: "Coming across too intensely, forgetting softer energies exist too",
    bestMatch: "Someone secure enough to respect your power without being intimidated by it",
  },

  soft_energy: {
    title: "Soft Energy ☁️",
    summary: "Your vibe feels gentle, comforting, and emotionally easy to be around.",
    desc1:
      "You give off soft energy because people often feel safer, calmer, and less guarded around you. There is a quiet kindness in your presence that lowers emotional pressure. You may not always be the loudest or most obvious person in the room, but you are often one of the easiest to trust.",
    desc2:
      "That softness is not weakness—it is emotional grace. You help others relax without demanding anything from them, and that makes your presence deeply comforting. The challenge is that gentle energy can sometimes be overlooked in louder environments. Your softness becomes strongest when you remember that it is a strength, not something to hide.",
    strengths: "Kindness, comfort, emotional gentleness",
    watchOut: "Being overlooked, giving more than you receive",
    bestMatch: "Someone warm and emotionally mature who recognizes your quiet strength",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "golden_energy";
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
            href="/quiz/energy"
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

export default function EnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}