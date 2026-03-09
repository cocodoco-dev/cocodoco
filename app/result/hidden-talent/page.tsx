"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  emotional_reader: {
    title: "Emotional Reader 💗",
    summary:
      "Your hidden talent is understanding people deeply—you often sense feelings before they are fully spoken.",
    desc1:
      "You have a quiet gift for reading emotional reality. Even when people say they are fine, you often notice the tone, tension, or softness underneath their words. This makes you naturally empathetic, emotionally intelligent, and often more perceptive than people first realize.",
    desc2:
      "This talent is powerful because it helps people feel seen. You may notice what others need, where they are hurting, or what they are trying not to show. The challenge is that reading emotions so well can become heavy if you absorb too much. Your gift becomes strongest when empathy is balanced with boundaries.",
    strengths: "Empathy, perception, emotional intelligence",
    watchOut: "Absorbing too much, over-caring for others",
    bestMatch:
      "People who appreciate emotional depth and do not treat your care as limitless",
  },

  creative_visionary: {
    title: "Creative Visionary 🎨",
    summary:
      "Your hidden talent is seeing possibilities others miss—you naturally think in fresh, original directions.",
    desc1:
      "Your mind does not stay inside ordinary lines for long. You tend to connect ideas in unusual ways, imagine better versions of things, and notice possibilities that other people pass by. Even in everyday situations, your perspective often carries a creative spark that feels both intuitive and surprising.",
    desc2:
      "This talent matters because innovation often begins with someone who sees differently. You may not always realize it, but your way of thinking can inspire change, beauty, or new momentum in the people around you. The challenge is that visionary people can feel misunderstood if they move faster than others can follow. Your gift shines brightest when imagination is paired with patience.",
    strengths: "Originality, imagination, fresh perspective",
    watchOut: "Feeling misunderstood, getting lost in ideas without action",
    bestMatch:
      "People who value originality and give your ideas room to grow",
  },

  natural_leader: {
    title: "Natural Leader 👑",
    summary:
      "Your hidden talent is guiding people forward—you bring direction, structure, and calm authority when it matters.",
    desc1:
      "You may not always try to lead, but when a situation needs focus, people often look to you. There is something in your energy that helps others move, organize, and make decisions with more clarity. Your strength is not just control—it is the ability to create momentum without unnecessary chaos.",
    desc2:
      "This talent is valuable because many people hesitate when things get uncertain, while you naturally step into responsibility. Others may trust you more quickly than you realize. The challenge is that capable people are often given too much to carry. Your leadership becomes strongest when responsibility is shared instead of silently piled onto you.",
    strengths: "Direction, decisiveness, dependable presence",
    watchOut: "Taking on too much, feeling like you always have to be strong",
    bestMatch:
      "People who respect your leadership and support you instead of just depending on you",
  },

  peace_maker: {
    title: "Peace Maker 🕊️",
    summary:
      "Your hidden talent is creating emotional balance—you know how to calm tension and make people feel safer.",
    desc1:
      "You have a natural ability to soften intensity without making things fake. In difficult situations, you often sense how to steady emotions, lower conflict, and make space for people to breathe again. That gives you a calming influence that can be far more powerful than dramatic action.",
    desc2:
      "This talent is rare because true peace-making is not avoidance—it is emotional wisdom in motion. You help people feel less defensive and more human around each other. The challenge is that peace-makers sometimes sacrifice their own needs to keep everything smooth. Your gift becomes healthiest when harmony includes your well-being too.",
    strengths: "Calmness, diplomacy, emotional steadiness",
    watchOut: "Avoiding your own needs, keeping peace at your own expense",
    bestMatch:
      "People who value harmony and do not rely on you to carry every emotional burden",
  },

  deep_thinker: {
    title: "Deep Thinker 🌙",
    summary:
      "Your hidden talent is seeing beneath the surface—you notice meaning, patterns, and truth that others overlook.",
    desc1:
      "You tend to process life with unusual depth. Rather than reacting only to what is visible, you often think about why things happen, what they mean, and what lies underneath them. This gives you a quiet intellectual and emotional insight that can feel wiser than your age.",
    desc2:
      "This talent matters because depth brings clarity. You may be the one who sees patterns before others do, asks better questions, or understands complexity without needing everything simplified. The challenge is that deep thinkers can get stuck inside reflection for too long. Your gift becomes most powerful when insight leads to action instead of endless analysis.",
    strengths: "Insight, reflection, pattern recognition",
    watchOut: "Overthinking, staying in your head too long",
    bestMatch:
      "People who respect depth and enjoy real conversation instead of surface-level noise",
  },

  spark_maker: {
    title: "Spark Maker ✨",
    summary:
      "Your hidden talent is shifting the energy around you—you bring life, momentum, and brightness into spaces.",
    desc1:
      "You have a gift for changing atmosphere. Whether through humor, charm, boldness, or simple emotional energy, you often make people feel more awake and engaged. You may walk into a quiet room and, without trying too hard, make it feel lighter, warmer, or more alive.",
    desc2:
      "That is a real talent because energy is contagious. You help people move out of heaviness, hesitation, or emotional flatness and into something more open. The challenge is that high-energy people sometimes feel pressure to keep performing. Your strongest spark appears when your light comes from sincerity, not obligation.",
    strengths: "Charisma, momentum, uplifting presence",
    watchOut: "Feeling pressure to entertain, hiding your lower-energy moments",
    bestMatch:
      "People who love your energy and also value the real you behind it",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "emotional_reader";
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
            href="/quiz/hidden-talent"
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

export default function HiddenTalentResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}