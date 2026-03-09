"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  loyal_anchor: {
    title: "Loyal Anchor ⚓",
    summary:
      "You are the kind of friend people trust deeply—you stay, support, and hold things together when it matters most.",
    desc1:
      "Your friendship style is built on loyalty. You are often the steady presence people rely on when life feels uncertain, emotional, or messy. Rather than showing love through big words, you usually show it by staying consistent, dependable, and hard to shake.",
    desc2:
      "That kind of friendship is rare. People may not always say it out loud, but your presence gives them security and trust. The challenge is that dependable people can become the one everyone leans on without asking how they are doing. Your friendship shines brightest when loyalty includes caring for yourself too.",
    strengths: "Loyalty, consistency, emotional steadiness",
    watchOut: "Carrying too much, staying too long in one-sided friendships",
    bestMatch:
      "Friends who value loyalty and give the same steadiness back to you",
  },

  sunshine_friend: {
    title: "Sunshine Friend ☀️",
    summary:
      "You are the kind of friend who makes life feel brighter—people feel lighter, happier, and more alive around you.",
    desc1:
      "Your friendship style is warm, uplifting, and full of energy. You naturally bring humor, hope, and emotional light into people’s lives, especially when they need it most. Even ordinary moments can feel more memorable because of the vibe you bring.",
    desc2:
      "This kind of friendship is powerful because it changes people’s emotional atmosphere. You remind others that joy is part of care too. The challenge is that cheerful people sometimes feel pressured to be the happy one all the time. Your friendship becomes strongest when your brightness stays real, not forced.",
    strengths: "Warmth, positivity, uplifting energy",
    watchOut: "Hiding your own feelings, feeling pressure to always lift others",
    bestMatch:
      "Friends who love your energy and also make room for your quieter side",
  },

  honest_guardian: {
    title: "Honest Guardian 🛡️",
    summary:
      "You are the kind of friend who protects people with truth—you care enough to be real, even when it is uncomfortable.",
    desc1:
      "Your friendship style is honest, protective, and grounded. You are not interested in fake support or empty reassurance if you believe someone needs real guidance. People may not always love hearing the truth in the moment, but deep down, they know your honesty comes from care rather than judgment.",
    desc2:
      "That makes you a valuable friend. You help people see clearly, stay accountable, and avoid getting lost in their own blind spots. The challenge is that honesty can feel sharp if softness is missing. Your friendship becomes most powerful when truth and tenderness work together.",
    strengths: "Honesty, protection, strong boundaries",
    watchOut: "Coming across too harshly, expecting others to handle truth the way you do",
    bestMatch:
      "Friends who respect honesty and understand that your directness comes from love",
  },

  chaotic_fun: {
    title: "Chaotic Fun 🎉",
    summary:
      "You are the kind of friend who brings excitement, spontaneity, and unforgettable energy wherever you go.",
    desc1:
      "Your friendship style is playful, lively, and impossible to ignore. You make friendships feel fun rather than routine, and people often remember the moments they shared with you because your energy makes things feel alive. There is a spark around you that turns normal plans into stories.",
    desc2:
      "This kind of friendship is magnetic. You bring movement, laughter, and unpredictability that can pull people out of boredom or heaviness. The challenge is that others may sometimes mistake your fun side for emotional inconsistency. Your friendship is strongest when your spark is paired with reassurance and sincerity.",
    strengths: "Fun energy, spontaneity, memorable presence",
    watchOut: "Mixed signals, seeming less dependable than you really are",
    bestMatch:
      "Friends who enjoy your playful chaos and also appreciate your genuine heart",
  },

  soft_listener: {
    title: "Soft Listener 🤍",
    summary:
      "You are the kind of friend who makes people feel safe to open up—your presence feels gentle, calm, and deeply comforting.",
    desc1:
      "Your friendship style is soft, attentive, and emotionally receptive. You often notice what people are feeling before they fully say it, and you create space for them without pushing too hard. Friends may trust you quickly because they sense that you listen to understand, not to judge.",
    desc2:
      "That kind of friendship is deeply healing. You give people a feeling of being emotionally held, which is something many rarely experience. The challenge is that soft people can absorb too much if they never protect their own energy. Your friendship becomes healthiest when empathy is balanced with boundaries.",
    strengths: "Empathy, patience, emotional safety",
    watchOut: "Absorbing too much, over-giving without limits",
    bestMatch:
      "Friends who appreciate your gentleness and do not treat your care as endless",
  },

  old_soul_friend: {
    title: "Old Soul Friend 🌙",
    summary:
      "You are the kind of friend people turn to for depth, wisdom, and emotional perspective that goes beyond the surface.",
    desc1:
      "Your friendship style is thoughtful, reflective, and quietly profound. You are often the person who sees what is really going on beneath the drama, and people may come to you when they want more than comfort—they want understanding. Your words tend to stay with people long after the conversation ends.",
    desc2:
      "This makes you a rare kind of friend. You bring emotional depth and meaning into relationships in a way that feels timeless. The challenge is that deep people can become emotionally heavy if they never let lightness in. Your friendship becomes most beautiful when wisdom leaves room for play too.",
    strengths: "Depth, wisdom, emotional insight",
    watchOut: "Overthinking, becoming too emotionally heavy",
    bestMatch:
      "Friends who value depth and can meet you with both sincerity and warmth",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "loyal_anchor";
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
            href="/quiz/friend-type"
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

export default function FriendTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}