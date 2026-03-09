"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  soft_romantic: {
    title: "Soft Romantic 🤍",
    summary:
      "Your romantic energy feels gentle, tender, and emotionally safe—people are drawn to the comfort of your heart.",
    desc1:
      "You love in a way that feels warm rather than loud. Your romantic energy often shows through softness, kindness, and the ability to make someone feel emotionally held. Instead of creating chaos, you create closeness, and that can be deeply attractive in a world that often confuses intensity with love.",
    desc2:
      "This kind of romantic energy is powerful because it gives people peace. You make love feel human, sincere, and safe to trust. The challenge is that tender people can end up giving more than they receive if they ignore their own needs. Your love becomes strongest when softness is protected by healthy boundaries.",
    strengths: "Tenderness, warmth, emotional safety",
    watchOut: "Over-giving, settling for less than you deserve",
    bestMatch:
      "Someone emotionally mature who values gentleness and gives the same care back",
  },

  magnetic_flirt: {
    title: "Magnetic Flirt ✨",
    summary:
      "Your romantic energy feels playful, exciting, and impossible to ignore—people feel chemistry around you fast.",
    desc1:
      "You bring spark into connection. There is something naturally charming, lively, and flirtatious about your presence that makes romance feel electric rather than ordinary. People may feel drawn to you because you make attraction feel fun, vivid, and hard to forget.",
    desc2:
      "This energy is magnetic because it awakens people. You bring movement, chemistry, and emotional excitement into romantic situations in a way that can be instantly memorable. The challenge is that playful energy can sometimes be mistaken for inconsistency. Your strongest romantic power appears when charm is balanced with sincerity.",
    strengths: "Charm, chemistry, playful energy",
    watchOut: "Mixed signals, seeming less serious than you really are",
    bestMatch:
      "Someone confident and emotionally clear who enjoys your spark without getting lost in it",
  },

  loyal_lover: {
    title: "Loyal Lover 💍",
    summary:
      "Your romantic energy feels steady, devoted, and trustworthy—people sense that your love is built to last.",
    desc1:
      "You love through consistency. Rather than chasing drama or intensity for its own sake, you tend to show affection through loyalty, effort, and staying power. People may feel safe with you because your romantic energy says, clearly and quietly, that you do not disappear when things become real.",
    desc2:
      "That kind of love is rare and deeply valuable. You make romance feel stable, grounded, and worth building on. The challenge is that loyal people can stay too long in relationships that no longer deserve them. Your love becomes healthiest when devotion is matched by reciprocity.",
    strengths: "Loyalty, stability, dependability",
    watchOut: "Staying too long, accepting emotional imbalance",
    bestMatch:
      "Someone honest and emotionally responsible who values commitment the way you do",
  },

  slow_burn: {
    title: "Slow Burn 🌙",
    summary:
      "Your romantic energy feels deep, quiet, and unforgettable—it takes time to unfold, but it stays with people.",
    desc1:
      "You are not always instantly obvious, and that is part of your power. Your romantic presence often builds slowly through depth, subtlety, and emotional meaning rather than quick display. People may find themselves thinking about you more and more over time, because your energy lingers long after the moment is over.",
    desc2:
      "This kind of romantic energy is powerful because it grows roots. You make love feel layered, intentional, and emotionally real. The challenge is that slow-burning people can seem distant if they stay hidden too long. Your strongest magnetism appears when mystery is balanced with just enough openness.",
    strengths: "Depth, emotional meaning, lasting magnetism",
    watchOut: "Being hard to read, opening up too slowly",
    bestMatch:
      "Someone patient and perceptive who values depth over instant certainty",
  },

  golden_heart: {
    title: "Golden Heart ☀️",
    summary:
      "Your romantic energy feels warm, generous, and uplifting—people are drawn to the goodness in the way you love.",
    desc1:
      "You love in a way that feels bright and wholehearted. Your romantic energy often makes people feel appreciated, welcomed, and emotionally lighter, because there is something genuinely warm in how you care. Even small gestures from you can carry real emotional weight.",
    desc2:
      "This kind of energy is beautiful because it makes love feel hopeful. You remind people that romance does not always need games or confusion to feel alive. The challenge is that generous hearts can attract people who enjoy the warmth without fully returning it. Your love shines brightest when your kindness is given where it is honored.",
    strengths: "Generosity, warmth, uplifting love",
    watchOut: "Giving too much too soon, attracting takers",
    bestMatch:
      "Someone sincere and appreciative who treasures your warmth instead of consuming it",
  },

  wild_fire: {
    title: "Wild Fire 🔥",
    summary:
      "Your romantic energy feels intense, passionate, and consuming—people feel the force of your presence.",
    desc1:
      "You do not love halfway. Your romantic energy tends to be bold, emotionally alive, and impossible to reduce to something small or neat. People may feel both excited and overwhelmed by the depth of feeling, chemistry, or force that you bring into attraction.",
    desc2:
      "This kind of energy is unforgettable because it changes the atmosphere fast. You make romance feel vivid, urgent, and emotionally charged. The challenge is that strong passion can become overwhelming if it moves without grounding. Your romantic power becomes strongest when intensity is guided by self-awareness rather than impulse alone.",
    strengths: "Passion, intensity, unforgettable presence",
    watchOut: "Emotional overheat, moving too fast",
    bestMatch:
      "Someone emotionally strong and steady enough to hold your fire without fearing it",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "soft_romantic";
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
            href="/quiz/romantic-energy"
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

export default function RomanticEnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}