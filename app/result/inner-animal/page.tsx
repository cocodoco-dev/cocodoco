"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  fox: {
    title: "The Fox 🦊",
    summary: "You are clever, adaptable, and naturally strategic.",
    desc1:
      "Your inner animal is the fox because you move through life with intelligence and quick judgment. You notice opportunities early, read situations fast, and often understand the game before other people realize there even is one. There is a sharpness to your energy that makes you resourceful and difficult to fool.",
    desc2:
      "People may underestimate how much you notice, but that is often your advantage. You tend to think ahead, adjust quickly, and protect yourself well. The only risk is becoming too guarded or too focused on staying ahead. Your strength becomes even more powerful when strategy is balanced with trust.",
    strengths: "Intelligence, adaptability, timing",
    watchOut: "Over-guarding yourself, always trying to stay in control",
    bestMatch:
      "Someone perceptive and confident who respects your independence",
  },

  owl: {
    title: "The Owl 🦉",
    summary: "You are thoughtful, observant, and quietly wise.",
    desc1:
      "Your inner animal is the owl because you understand more than people first assume. You are the type who watches carefully, notices subtle details, and prefers depth over noise. While others rush to react, you often take a step back and see the bigger picture more clearly.",
    desc2:
      "There is a calm wisdom in your presence. You do not need to dominate every room to leave an impression. In fact, your quiet understanding is often what makes you memorable. The challenge is that you may stay in observation mode too long. When you trust your own voice, your insight becomes truly powerful.",
    strengths: "Observation, wisdom, emotional depth",
    watchOut: "Overthinking, holding back too much",
    bestMatch:
      "Someone patient and emotionally aware who values depth",
  },

  wolf: {
    title: "The Wolf 🐺",
    summary:
      "You are independent, loyal, and stronger than people first assume.",
    desc1:
      "Your inner animal is the wolf because you carry both independence and fierce loyalty. You may not trust easily, and you probably do not feel the need to belong everywhere. But when someone is truly part of your circle, you protect them deeply and stand by them with real strength.",
    desc2:
      "There is something powerful in your presence because people can sense that you are not fake or easily swayed. You know who you are, and that gives your energy weight. The challenge is that your guarded side can make you seem harder to approach than you really are. Letting the right people in is where your strength becomes connection.",
    strengths: "Loyalty, independence, quiet strength",
    watchOut: "Trust issues, emotional walls",
    bestMatch:
      "Someone genuine and strong enough to respect your boundaries",
  },

  dolphin: {
    title: "The Dolphin 🐬",
    summary: "You are expressive, bright, and socially magnetic.",
    desc1:
      "Your inner animal is the dolphin because your energy feels lively, warm, and easy to connect with. You are often at your best when there is movement, conversation, and shared emotional energy around you. People tend to feel lighter around you because your presence feels open and naturally inviting.",
    desc2:
      "You bring humor, flexibility, and brightness into spaces that might otherwise feel dull. That is part of what makes you so likable. At the same time, being socially open can sometimes make you overextend yourself. Your energy becomes strongest when your warmth is protected by healthy boundaries.",
    strengths: "Charm, emotional brightness, social ease",
    watchOut:
      "Spreading yourself too thin, needing too much outside energy",
    bestMatch:
      "Someone warm and playful who also helps you recharge",
  },

  bear: {
    title: "The Bear 🐻",
    summary: "You are grounded, dependable, and emotionally steady.",
    desc1:
      "Your inner animal is the bear because you carry a calm kind of strength. You are not someone who needs constant noise or attention to feel solid. Instead, your energy feels steady, patient, and deeply reassuring. People often feel safer around you because you seem hard to shake.",
    desc2:
      "There is comfort in the way you move through life. You trust your own pace, and that gives you a strong sense of stability. The challenge is that you may sometimes resist change longer than you should. Your strength becomes even more impressive when you let new experiences in without losing your grounded nature.",
    strengths: "Stability, patience, dependable presence",
    watchOut: "Resistance to change, staying too comfortable",
    bestMatch:
      "Someone energetic enough to inspire you but calm enough to understand you",
  },

  cat: {
    title: "The Cat 🐈",
    summary: "You are free-spirited, intuitive, and impossible to control.",
    desc1:
      "Your inner animal is the cat because your energy is self-possessed and distinctly your own. You do not like being pushed into roles, expectations, or emotional pressure that does not feel genuine. You value freedom, personal rhythm, and the ability to move through life on your own terms.",
    desc2:
      "That independence is part of your charm. People are often drawn to your quiet confidence and the fact that you never seem desperate for approval. The challenge is that your need for space can sometimes be misunderstood as distance. When you let the right people see your softer side, your independence becomes even more magnetic.",
    strengths: "Freedom, intuition, authenticity",
    watchOut: "Appearing distant, pulling away too quickly",
    bestMatch:
      "Someone secure and relaxed who does not try to control you",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "fox";
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
            href="/quiz/inner-animal"
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

export default function InnerAnimalResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}