"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  warm_charm: {
    title: "Warm Charm 💗",
    summary:
      "What makes you attractive is the way people feel safe, relaxed, and emotionally seen around you.",
    desc1:
      "Your attractiveness comes from warmth rather than performance. You have a presence that makes people feel softer, calmer, and more open. Instead of forcing attention, you naturally create comfort—and that comfort can be incredibly magnetic. People often trust you faster than they expect to.",
    desc2:
      "There is a quiet beauty in being someone who feels emotionally safe. Your energy tells people they do not need to pretend around you, and that is a rare kind of attraction. The challenge is that warm people are sometimes underestimated because their strength feels gentle. In reality, your softness is exactly what makes you unforgettable.",
    strengths: "Warmth, emotional safety, sincerity",
    watchOut: "Giving too much too fast, being taken for granted",
    bestMatch:
      "Someone emotionally mature who values gentleness and reciprocity",
  },

  quiet_mystery: {
    title: "Quiet Mystery 🌙",
    summary:
      "What makes you attractive is the sense that there is always more to you than people can immediately read.",
    desc1:
      "Your attractiveness comes from depth and quiet intrigue. You do not reveal everything all at once, and that gives your energy a kind of natural tension. People are often drawn to you because they feel there is something meaningful beneath the surface—and they want to understand it.",
    desc2:
      "This kind of attraction is powerful because it lingers. While louder people may get attention quickly, you tend to stay in people’s minds. Your presence feels layered, thoughtful, and hard to forget. The challenge is that mystery can become distance if you stay hidden too long. Your strongest magnetism appears when intrigue is balanced with openness.",
    strengths: "Depth, intrigue, subtle magnetism",
    watchOut: "Being too unreadable, creating distance without meaning to",
    bestMatch:
      "Someone patient and perceptive who enjoys depth rather than needing instant clarity",
  },

  playful_magnetism: {
    title: "Playful Magnetism 😼",
    summary:
      "What makes you attractive is your ability to make people feel alive, playful, and emotionally awake.",
    desc1:
      "Your attractiveness comes from energy. You know how to bring spark into a moment, and people often feel brighter around you. There is something naturally flirtatious, playful, or light in your presence that makes connection feel exciting instead of heavy.",
    desc2:
      "This gives you strong chemistry with people. You make interactions feel memorable because you bring movement, humor, and a little unpredictability. The challenge is that playful energy can sometimes be mistaken for emotional inconsistency. Your attraction becomes strongest when fun and sincerity work together.",
    strengths: "Chemistry, charm, fun energy",
    watchOut: "Mixed signals, seeming less serious than you really are",
    bestMatch:
      "Someone confident and emotionally clear who can enjoy your spark without getting lost in it",
  },

  elegant_energy: {
    title: "Elegant Energy ✨",
    summary:
      "What makes you attractive is your composed presence, quiet confidence, and natural sense of refinement.",
    desc1:
      "Your attractiveness comes from the way you carry yourself. You often give off a calm, polished, and self-possessed energy that feels mature rather than loud. People may be drawn to you because you seem like someone who knows their own value without needing to announce it.",
    desc2:
      "That kind of presence can be deeply attractive because it creates both respect and curiosity. You feel centered, intentional, and hard to shake. The challenge is that elegance can sometimes look intimidating to people who do not understand your softness underneath. Your strongest attraction appears when refinement is paired with warmth.",
    strengths: "Composure, confidence, refinement",
    watchOut: "Seeming distant or intimidating without meaning to",
    bestMatch:
      "Someone grounded and emotionally secure who appreciates quiet confidence",
  },

  bright_presence: {
    title: "Bright Presence ☀️",
    summary:
      "What makes you attractive is the way your energy lights up people and spaces almost instantly.",
    desc1:
      "Your attractiveness comes from brightness. You have a presence that feels uplifting, expressive, and emotionally easy to notice. People are often drawn to you because your energy makes things feel lighter and more alive. Even when you are not trying to stand out, your presence often lifts the atmosphere naturally.",
    desc2:
      "This kind of attraction is powerful because it makes people feel good. You are memorable not only because of who you are, but because of how people feel around you. The challenge is that bright people sometimes feel pressure to stay bright all the time. Your real power shows most when your light stays honest rather than performative.",
    strengths: "Warmth, visibility, uplifting energy",
    watchOut:
      "Feeling pressure to always be positive, over-giving your energy",
    bestMatch:
      "Someone steady and genuine who enjoys your brightness without depending on it constantly",
  },

  deep_allure: {
    title: "Deep Allure 🖤",
    summary:
      "What makes you attractive is your emotional depth, quiet intensity, and the feeling that you mean more than you say.",
    desc1:
      "Your attractiveness comes from emotional gravity. There is often something serious, intimate, or quietly powerful about your presence that makes people feel there is more to you than surface charm. You do not attract people through noise—you attract them through depth.",
    desc2:
      "This kind of allure is hard to fake and hard to forget. People may feel drawn to your stillness, your intensity, or the emotional meaning in the way you speak and carry yourself. The challenge is that deep energy can feel heavy if you never let lightness in. Your attraction becomes strongest when depth and softness coexist.",
    strengths: "Depth, intensity, emotional gravity",
    watchOut: "Appearing too guarded or too heavy too quickly",
    bestMatch:
      "Someone emotionally strong and patient who is not afraid of depth",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "warm_charm";
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

        {/* Ad 1: summary 바로 아래 */}
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
            href="/quiz/attractive"
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

        {/* Ad 2: 버튼 아래 */}
        <div style={{ ...adBoxStyle, marginTop: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>
      </div>
    </main>
  );
}

export default function AttractiveResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}