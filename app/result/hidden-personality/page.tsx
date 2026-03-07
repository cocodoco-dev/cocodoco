"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  quiet_strategist: {
    title: "The Quiet Strategist ♟️",
    summary: "You notice patterns, read situations carefully, and think before you move.",
    desc1:
      "Your hidden personality is thoughtful, observant, and quietly strategic. You are rarely the loudest person in the room, but you often understand more than people realize. While others react quickly, you tend to study the situation first and make sense of what is really going on beneath the surface.",
    desc2:
      "This gives you a calm kind of power. You often make good judgments because you do not rush yourself into noise or unnecessary drama. The challenge is that you may stay in observation mode too long and hesitate when action is needed. When you trust your instincts a little sooner, your insight becomes even more valuable.",
    strengths: "Strategy, perception, careful thinking",
    watchOut: "Overanalyzing, waiting too long before acting",
    bestMatch: "Someone steady and emotionally intelligent who respects your quiet depth",
  },

  gentle_idealist: {
    title: "The Gentle Idealist 🌸",
    summary: "You are guided by empathy, sincerity, and a strong inner sense of what matters.",
    desc1:
      "Your hidden personality is warm, values-driven, and deeply human. You naturally care about people, fairness, and emotional truth. Even when you do not say much out loud, your choices are often shaped by a quiet desire to make life softer, kinder, and more meaningful.",
    desc2:
      "People may not immediately see how strong this side of you is, because your kindness often appears gentle on the surface. But beneath that softness is conviction. You care deeply, and that depth can be powerful. Your challenge is protecting your energy so that compassion does not become emotional exhaustion.",
    strengths: "Empathy, sincerity, moral clarity",
    watchOut: "Taking on too much emotional weight, idealizing people too quickly",
    bestMatch: "Someone honest and grounded who values kindness as much as you do",
  },

  curious_explorer: {
    title: "The Curious Explorer 🧭",
    summary: "You are driven by discovery, fresh experiences, and the thrill of learning something new.",
    desc1:
      "Your hidden personality is adventurous, open-minded, and always searching for something just beyond the familiar. You are energized by movement, novelty, and possibility. Whether it is a new idea, a new place, or a new perspective, you feel most alive when life keeps expanding around you.",
    desc2:
      "This makes your presence exciting and mentally alive. You often inspire others to try something new or think more freely. The challenge is that curiosity can easily pull you in many directions at once. Your gift becomes strongest when you pair exploration with enough focus to go deeper.",
    strengths: "Openness, curiosity, adventurous thinking",
    watchOut: "Restlessness, losing interest too quickly",
    bestMatch: "Someone flexible and open-minded who enjoys exploring life with you",
  },

  calm_thinker: {
    title: "The Calm Thinker 🌙",
    summary: "You bring emotional balance, reflection, and quiet clarity to situations around you.",
    desc1:
      "Your hidden personality is grounded and reflective. You do not usually let every emotion pull you off course, which gives you a natural steadiness that people often underestimate. Even when the outside world feels noisy, part of you remains centered and thoughtful.",
    desc2:
      "This calm energy is one of your greatest strengths. Others may come to you because you help situations feel less chaotic and more manageable. Still, there are times when staying too composed can make your feelings harder for others to read. Your balance becomes even stronger when you allow yourself to be emotionally visible too.",
    strengths: "Composure, reflection, emotional steadiness",
    watchOut: "Bottling things up, seeming more distant than you feel",
    bestMatch: "Someone patient and warm who appreciates depth without needing constant intensity",
  },

  natural_leader: {
    title: "The Natural Leader 🔥",
    summary: "You carry initiative, direction, and an energy that naturally pulls others forward.",
    desc1:
      "Your hidden personality is stronger and more influential than you may even realize. People tend to notice your confidence, your momentum, or your ability to take the first step when others hesitate. Even without trying too hard, you often become a source of direction in group situations.",
    desc2:
      "Leadership for you is not only about being in charge—it is about carrying movement. You have a way of making things happen. The challenge is remembering that not everyone moves at your pace. When you combine your natural drive with patience and awareness, your presence becomes both powerful and trusted.",
    strengths: "Initiative, confidence, momentum",
    watchOut: "Impatience, unintentionally overwhelming quieter people",
    bestMatch: "Someone secure and supportive who respects your drive without competing with it",
  },

  creative_mind: {
    title: "The Creative Mind 🎨",
    summary: "You see possibilities, ideas, and beauty in places other people often overlook.",
    desc1:
      "Your hidden personality is imaginative, expressive, and mentally alive. You are drawn to originality, emotion, and the freedom to see things from a different angle. Even in ordinary moments, your mind tends to notice possibilities that others would walk right past.",
    desc2:
      "This makes your energy feel unique and memorable. You bring freshness into conversations, ideas, and the way you interpret the world. The challenge is that creativity can sometimes come with inner chaos or self-doubt. When you trust your own voice more consistently, your originality becomes one of your strongest gifts.",
    strengths: "Imagination, originality, expression",
    watchOut: "Self-doubt, scattered focus",
    bestMatch: "Someone open-minded who appreciates your depth and gives your ideas room to grow",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "quiet_strategist";
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
            href="/quiz/hidden-personality"
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

export default function HiddenPersonalityResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}