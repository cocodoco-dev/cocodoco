"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  connector: {
    title: "The Connector 🤝",
    summary: "You naturally bring people together and make relationships feel easier.",
    desc1:
      "Your social personality is all about connection. You have a natural instinct for helping people feel included, understood, and linked to one another. In many groups, you are the quiet bridge that makes interactions smoother and more human, even if you do not always realize you are doing it.",
    desc2:
      "People often appreciate your presence because you make social spaces feel less awkward and more welcoming. You understand that relationships are often built through small moments of care and social awareness. The only challenge is that you may end up taking responsibility for everyone else's comfort. Your gift becomes strongest when connection does not come at the cost of your own energy.",
    strengths: "Connection, warmth, social awareness",
    watchOut: "Over-functioning for others, trying to hold every relationship together",
    bestMatch: "Someone kind and socially aware who also knows how to meet you halfway",
  },

  listener: {
    title: "The Listener 🎧",
    summary: "You make people feel heard, safe, and emotionally understood.",
    desc1:
      "Your social personality is built on attention, care, and emotional presence. You may not always dominate conversations, but people often remember how they felt around you—and that feeling is usually trust. You know how to listen without rushing, judging, or forcing the moment to be about you.",
    desc2:
      "This makes your presence deeply valuable. In a world full of noise, your ability to truly hear people is rare. Others may open up to you more quickly than they expect because your energy feels safe. The challenge is that you may absorb too much if you are not careful. Your listening becomes even stronger when it is balanced with healthy boundaries.",
    strengths: "Empathy, patience, emotional safety",
    watchOut: "Absorbing too much, forgetting your own needs",
    bestMatch: "Someone emotionally mature who values depth and reciprocity",
  },

  storyteller: {
    title: "The Storyteller 🎙️",
    summary: "You bring personality, humor, and memorable energy into social spaces.",
    desc1:
      "Your social personality shines through expression. You know how to make a conversation more alive, more colorful, or simply more fun. Whether through humor, perspective, or the way you tell a story, you naturally add life to the room and help moments feel more memorable.",
    desc2:
      "People often enjoy being around you because you create energy. Your presence can break awkwardness, lift boredom, and make people feel emotionally engaged. The challenge is that being the one who keeps things entertaining can become tiring if you feel pressure to always perform. Your charm becomes strongest when it comes from authenticity rather than expectation.",
    strengths: "Humor, charisma, expressive energy",
    watchOut: "Feeling pressure to always be 'on', using performance to hide vulnerability",
    bestMatch: "Someone playful and emotionally real who enjoys your spark without depending on it",
  },

  observer: {
    title: "The Observer 👀",
    summary: "You understand people quietly and often notice what others completely miss.",
    desc1:
      "Your social personality is subtle but powerful. You may not be the loudest voice in a group, but you are often one of the most aware. You notice tone, tension, chemistry, and small signals that many people overlook, which gives you a deep understanding of how social spaces actually work.",
    desc2:
      "There is strength in the way you watch before you react. People may not always realize how much you understand, but your insight often runs deeper than theirs. The challenge is that observation can turn into emotional distance if you stay too hidden for too long. Your gift becomes most powerful when insight is paired with presence.",
    strengths: "Perception, awareness, emotional intelligence",
    watchOut: "Staying too detached, holding back more than you need to",
    bestMatch: "Someone patient and perceptive who values depth over noise",
  },

  energizer: {
    title: "The Energizer ⚡",
    summary: "You bring movement, excitement, and social momentum wherever you go.",
    desc1:
      "Your social personality is full of life. You naturally bring energy into conversations, gatherings, and shared moments, which often makes people feel more awake and engaged. There is a spark in the way you show up, and it can quickly change the mood of a room.",
    desc2:
      "This makes you magnetic in group settings. People often remember how lively things felt around you, and your energy can help others loosen up. The challenge is that always being the source of momentum can become exhausting. Your social strength becomes even healthier when your energy has space to rest too.",
    strengths: "Momentum, enthusiasm, lively presence",
    watchOut: "Burnout, relying too much on constant stimulation",
    bestMatch: "Someone warm and steady who enjoys your spark without draining it",
  },

  calm_presence: {
    title: "The Calm Presence 🌿",
    summary: "You make social spaces feel steadier, softer, and easier to exist in.",
    desc1:
      "Your social personality is grounded and quietly reassuring. Even when you are not the center of attention, your presence often changes the emotional tone of a space. People may feel more relaxed around you without fully understanding why, because your energy naturally lowers social pressure.",
    desc2:
      "This makes you incredibly valuable in both friendships and group dynamics. You help people breathe, settle, and feel less guarded. The challenge is that softer energy can sometimes be overlooked in louder spaces. Your strength becomes even more visible when you remember that calm is not weakness—it is social stability.",
    strengths: "Stability, comfort, emotional grounding",
    watchOut: "Being overlooked, staying too quiet when your voice matters",
    bestMatch: "Someone emotionally balanced who appreciates peace and genuine connection",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "connector";
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
            href="/quiz/social-personality"
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

export default function SocialPersonalityResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}