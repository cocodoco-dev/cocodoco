"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  words_of_affirmation: {
    title: "Words of Affirmation 💌",
    summary:
      "Your love language is words of affirmation — love feels most real when it is spoken clearly and sincerely.",
    desc1:
      "Your heart responds deeply to language. A sincere compliment, a loving message, a thoughtful reassurance, or hearing exactly how much you matter can stay with you for a long time. Words are not “small” to you — they are emotional proof of care.",
    desc2:
      "You likely feel most secure in love when affection is expressed openly rather than assumed. When someone chooses their words with warmth and intention, it helps your heart relax. Your love becomes strongest when communication feels honest, affectionate, and emotionally present.",
    strengths: "Warm communication, emotional clarity, verbal affection",
    watchOut: "Feeling unloved when care is shown silently",
    bestMatch:
      "Someone expressive, sincere, and emotionally reassuring",
  },

  quality_time: {
    title: "Quality Time ⏳",
    summary:
      "Your love language is quality time — love feels deepest when someone is fully present with you.",
    desc1:
      "For you, love is not measured by grand gestures as much as real presence. Time that feels focused, shared, and emotionally attentive means everything. What matters most is not simply being near someone, but feeling like they are truly with you.",
    desc2:
      "You likely feel most loved when someone gives you their attention without distraction. A quiet walk, a long conversation, or simply being together with intention can mean more to you than almost anything else. Your heart values depth, presence, and the feeling of being chosen in the moment.",
    strengths: "Presence, emotional attentiveness, shared depth",
    watchOut: "Feeling hurt when time together feels distracted or shallow",
    bestMatch:
      "Someone attentive, intentional, and emotionally available",
  },

  acts_of_service: {
    title: "Acts of Service 🫶",
    summary:
      "Your love language is acts of service — love feels most real when care shows up through action.",
    desc1:
      "For you, love is deeply meaningful when it becomes practical. Someone helping you, making your life lighter, remembering what you need, or quietly showing up for you can touch your heart more than dramatic words ever could. Action feels honest to you.",
    desc2:
      "You likely trust love most when it is dependable and embodied in real effort. Small gestures — helping with tasks, solving a problem, taking care of details — can feel incredibly intimate because they say, “I see you, and I want to support you.” Your heart believes actions reveal intention.",
    strengths: "Reliability, devotion, practical care",
    watchOut: "Feeling unseen when love stays only verbal",
    bestMatch:
      "Someone thoughtful, dependable, and willing to show care through effort",
  },

  physical_touch: {
    title: "Physical Touch 🤍",
    summary:
      "Your love language is physical touch — love feels safest, warmest, and most real through closeness.",
    desc1:
      "Your heart connects strongly through physical presence. Hugs, hand-holding, cuddling, gentle touches, and closeness can bring you comfort in a way words sometimes cannot. Touch is not just physical to you — it carries reassurance, safety, and emotional grounding.",
    desc2:
      "You likely feel most loved when affection is tangible and warm. Physical closeness can calm your nervous system, strengthen intimacy, and help you feel emotionally connected without needing constant explanation. Your love becomes strongest when closeness feels tender, safe, and mutual.",
    strengths: "Warmth, intimacy, emotional grounding",
    watchOut: "Feeling distant when affection becomes physically cold",
    bestMatch:
      "Someone affectionate, comforting, and naturally warm",
  },

  thoughtful_gifts: {
    title: "Thoughtful Gifts 🎁",
    summary:
      "Your love language is thoughtful gifts — love feels meaningful when care is remembered and made tangible.",
    desc1:
      "To you, a gift is not about money or extravagance. It is about emotional memory. When someone notices what you love, brings you something small but meaningful, or chooses something that says “I thought of you,” it can touch you very deeply. A gift becomes a symbol of care.",
    desc2:
      "You likely feel most loved when affection takes a visible form that you can hold onto. Thoughtful gifts make you feel remembered, considered, and emotionally valued. What matters most is not size, but intention. Your heart lights up when love becomes something tangible and personal.",
    strengths: "Sentiment, appreciation, emotional memory",
    watchOut: "Feeling dismissed if others misunderstand this as materialism",
    bestMatch:
      "Someone observant, thoughtful, and emotionally intentional",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "words_of_affirmation";
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
            href="/quiz/love-language"
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

export default function LoveLanguageResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}