"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  social_spark: {
    title: "Social Spark ✨",
    summary:
      "You bring lively, talkative, and contagious energy that gets people opening up fast.",
    desc1:
      "Your party energy is bright, social, and naturally engaging. You help conversations start, keep moments alive, and make people feel less awkward just by being there. Your presence often acts like a social spark that gets the whole room moving a little more easily.",
    desc2:
      "What makes this energy special is how quickly it spreads. People often feel more relaxed, more expressive, and more included around you. You do not just attend the vibe — you help create it. Your energy makes social spaces feel warmer and more alive.",
    strengths: "Conversation, openness, social momentum",
    watchOut: "Overextending your energy for the sake of the mood",
    bestMatch:
      "Crowds and people who love warmth, fun, and easy connection",
  },

  chill_anchor: {
    title: "Chill Anchor 🌿",
    summary:
      "You bring calm, grounded energy that makes the whole party feel easier to enjoy.",
    desc1:
      "Your party energy is relaxed, steady, and quietly reassuring. You may not be the loudest person in the room, but people often feel comfortable near you because your vibe is easy to settle into. You help social spaces feel less chaotic and more natural.",
    desc2:
      "What makes this energy powerful is that not every party needs more noise — sometimes it needs balance. You create a sense of ease that lets people loosen up without pressure. Your presence often becomes the part of the night people remember as genuinely comfortable.",
    strengths: "Grounding presence, calmness, ease",
    watchOut: "Being overlooked because your energy is subtle",
    bestMatch:
      "People and spaces that value comfort, steadiness, and real connection",
  },

  chaotic_icon: {
    title: "Chaotic Icon ⚡",
    summary:
      "You bring wild, unforgettable energy that turns an ordinary party into a story.",
    desc1:
      "Your party energy is spontaneous, funny, and impossible to fully predict. Things tend to become more memorable when you are around, not because you plan it that way, but because your presence adds movement and unpredictability to the room. You are the type people talk about afterward.",
    desc2:
      "What makes this energy special is that it breaks people out of routine. You make the vibe feel alive, weird in the best way, and harder to forget. Even when the night gets chaotic, your energy often turns that chaos into something iconic instead of just messy.",
    strengths: "Spontaneity, humor, unforgettable presence",
    watchOut: "Burning too hot or going past your own limits",
    bestMatch:
      "People who love fun, unpredictability, and nights with a story",
  },

  mysterious_observer: {
    title: "Mysterious Observer 🌙",
    summary:
      "You bring quiet, magnetic energy that makes people notice you without fully understanding why.",
    desc1:
      "Your party energy is subtle but striking. You may not rush to the center of attention, but people often become curious about you anyway. There is something composed, thoughtful, or a little unreadable in the way you move through a social space, and that gives your presence a strong pull.",
    desc2:
      "What makes this energy special is that it lingers. While louder personalities may dominate the room for a moment, your vibe stays in people’s minds longer. You bring intrigue, coolness, and a kind of quiet intensity that feels rare in a busy setting.",
    strengths: "Presence, intrigue, quiet magnetism",
    watchOut: "Seeming more distant than you actually are",
    bestMatch:
      "People who appreciate subtlety, depth, and a little mystery",
  },

  golden_hype: {
    title: "Golden Hype ☀️",
    summary:
      "You bring radiant, uplifting energy that makes people feel excited to be there.",
    desc1:
      "Your party energy is bright, joyful, and emotionally contagious. You have a way of making things feel more fun, more open, and more full of life. People often feel pulled toward your vibe because it carries excitement without feeling forced.",
    desc2:
      "What makes this energy powerful is that it raises the emotional temperature of the room. You help people loosen up, smile more, and feel like something good is happening. Your presence feels like golden-hour social energy — warm, memorable, and easy to love.",
    strengths: "Excitement, warmth, uplifting presence",
    watchOut: "Feeling pressure to always keep the energy high",
    bestMatch:
      "People and parties that thrive on brightness, joy, and momentum",
  },

  soft_connector: {
    title: "Soft Connector 🤍",
    summary:
      "You bring gentle, emotionally warm energy that helps people feel included and understood.",
    desc1:
      "Your party energy is not about taking over the room — it is about quietly improving it. You naturally help people feel less left out, less nervous, and more connected. Whether through one-on-one conversation or soft social warmth, your presence creates emotional ease.",
    desc2:
      "What makes this energy beautiful is how human it feels. You help people relax into themselves instead of performing. The party may be louder around you, but what people remember is often the way you made them feel genuinely welcome. That is a rare kind of social power.",
    strengths: "Warmth, inclusion, emotional ease",
    watchOut: "Giving too much to everyone else’s comfort",
    bestMatch:
      "People and spaces that value kindness, softness, and real belonging",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "social_spark";
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
            href="/quiz/party-energy"
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

export default function PartyEnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}