"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  moon: {
    title: "The Moon Muse 🌙",
    summary:
      "You are the Moon Muse — quiet, enchanting, and unforgettable in the most subtle way.",
    desc1:
      "Your presence feels like something soft and distant, yet deeply magnetic. People may not fully understand you at first, but they feel something the moment you enter a space. You carry a kind of emotional depth that does not demand attention, yet quietly holds it.",
    desc2:
      "What makes you powerful is your mystery. You do not reveal everything all at once, and that creates a natural pull. You feel like a story that unfolds slowly, something that people want to keep returning to, trying to understand more each time.",
    meaning1:
      "This result often means your energy is rooted in emotional subtlety, introspection, and quiet beauty. You are likely someone who experiences life internally before expressing it outwardly. Your world is rich, layered, and filled with feeling that is not always visible on the surface.",
    meaning2:
      "Because of that, you may sometimes feel slightly separate from others, not because you do not care, but because your inner world is so deep and personal. That depth is not distance. It is part of what makes your presence so captivating.",
    showUp1:
      "In everyday life, this energy shows up as thoughtful silence, meaningful glances, emotional intuition, and a strong sensitivity to atmosphere. You may notice things others miss, especially in how people feel beneath what they say.",
    showUp2:
      "People may feel calm, intrigued, or even slightly haunted by your presence. You leave impressions that linger, not because you try to, but because your energy is naturally reflective and emotionally resonant.",
    strengths: "Mystery, depth, emotional intuition",
    strengthDetails:
      "Your strengths lie in your ability to create emotional atmosphere, to sense what is unspoken, and to carry a kind of beauty that does not need to be loud to be powerful. You inspire through presence rather than performance.",
    watchOut: "Withdrawing too much or becoming emotionally distant",
    watchOutDetails:
      "Because your inner world is so strong, you may sometimes retreat into it too deeply. This can make it harder for others to reach you, even when they want to. The goal is not to lose your mystery, but to allow safe connection to exist alongside it.",
    bestMatch:
      "People who respect your depth and allow your presence to unfold naturally",
    growth1:
      "Growth for you often means allowing yourself to be seen without feeling like you must explain everything. Your presence is already enough. You do not need to translate your entire inner world to be understood.",
    growth2:
      "The healthiest version of your energy is someone who remains deeply introspective while still letting meaningful connection in. Your mystery does not disappear when shared. It becomes even more beautiful.",
    reminder:
      "You do not need to be fully understood to be deeply felt.",
  },

  rose: {
    title: "The Rose Muse 🌹",
    summary:
      "You are the Rose Muse — warm, romantic, and emotionally magnetic in the most heartfelt way.",
    desc1:
      "Your presence feels soft, inviting, and deeply human. People are naturally drawn to your warmth, your sincerity, and the way you make them feel safe to be themselves. You carry an energy that feels like closeness, like something genuine and real.",
    desc2:
      "What makes you powerful is your emotional openness. You do not inspire through distance, but through connection. Your energy creates intimacy, and people often feel more alive, more seen, and more valued around you.",
    meaning1:
      "This result often means your energy is centered around love, care, and emotional truth. You likely experience life through feeling, connection, and relationships that matter deeply to you.",
    meaning2:
      "Because of that, your life may feel richer in emotional experiences than most. You love deeply, remember meaningfully, and care in a way that leaves a lasting impression on others.",
    showUp1:
      "In daily life, this shows up as kindness, attentiveness, emotional sensitivity, and a natural ability to make people feel comfortable and understood.",
    showUp2:
      "People may feel safe opening up to you, trusting you, or staying close to you. Your presence is not distant or abstract. It is felt directly, and often very deeply.",
    strengths: "Warmth, emotional connection, sincerity",
    strengthDetails:
      "Your strengths include empathy, emotional intelligence, and the ability to create meaningful bonds. You make people feel valued in a way that is rare and deeply needed.",
    watchOut: "Over-giving or losing yourself in others",
    watchOutDetails:
      "Because you care so much, you may sometimes give more than you receive. It can become easy to prioritize others' emotions over your own. Your love is powerful, but it needs balance to remain healthy.",
    bestMatch:
      "People who return your sincerity and value emotional depth",
    growth1:
      "Growth for you often begins with remembering that your needs matter just as much as the people you care about. Love becomes stronger when it includes yourself.",
    growth2:
      "The healthiest version of your energy is not less loving. It is more grounded. It is a love that connects deeply without disappearing in the process.",
    reminder:
      "You are allowed to be both soft and strong at the same time.",
  },

  fire: {
    title: "The Fire Muse 🔥",
    summary:
      "You are the Fire Muse — bold, intense, and impossible to ignore.",
    desc1:
      "Your presence carries heat, energy, and a kind of raw magnetism. People feel you immediately. There is nothing subtle about the impact you leave. You are alive in a way that is felt, not just seen.",
    desc2:
      "What makes you powerful is your intensity. You do not fade into the background. You ignite emotions, awaken desire, and create moments that people remember long after they pass.",
    meaning1:
      "This result often means your energy is driven by passion, instinct, and emotional force. You likely move through life with strong feelings and a clear sense of what you want.",
    meaning2:
      "Because of that, your life may feel intense at times, but also deeply real. You are not here for something quiet or half-lived. You are here for something that burns.",
    showUp1:
      "In everyday life, this shows up as confidence, bold expression, emotional honesty, and a strong presence that people cannot easily ignore.",
    showUp2:
      "People may feel energized, attracted, or even overwhelmed by your presence. You bring movement and change simply by being fully yourself.",
    strengths: "Passion, courage, magnetic energy",
    strengthDetails:
      "Your strengths include confidence, emotional honesty, and the ability to awaken something in others. You bring life into spaces that would otherwise feel dull or stagnant.",
    watchOut: "Burning too fast or overwhelming yourself and others",
    watchOutDetails:
      "Your intensity can sometimes become too much, both for you and for others. Learning when to slow down, rest, or soften can help your energy remain powerful without becoming exhausting.",
    bestMatch:
      "People who can meet your intensity without trying to control it",
    growth1:
      "Growth for you often means learning that not everything needs to burn to be meaningful. Some things grow slowly and still matter deeply.",
    growth2:
      "The healthiest version of your energy is not less intense. It is more balanced. It is a fire that warms as much as it ignites.",
    reminder:
      "Your intensity is not too much. It just needs direction.",
  },

  velvet: {
    title: "The Velvet Muse 🖤",
    summary:
      "You are the Velvet Muse — deep, elegant, and quietly intoxicating.",
    desc1:
      "Your presence feels rich, slow, and layered. There is something about you that feels both comforting and slightly dangerous at the same time. People are drawn to you not because you demand attention, but because your energy feels rare.",
    desc2:
      "What makes you powerful is your depth. You do not reveal yourself quickly, and that creates a sense of intrigue. Your energy feels like something to be discovered rather than immediately understood.",
    meaning1:
      "This result often means your energy is rooted in emotional complexity, elegance, and quiet strength. You likely carry both softness and intensity in a way that feels balanced but mysterious.",
    meaning2:
      "Because of that, you may attract people who are looking for something deeper than surface-level connection. Your presence feels intentional and meaningful.",
    showUp1:
      "In everyday life, this shows up as calm confidence, emotional control, thoughtful expression, and a strong but quiet presence.",
    showUp2:
      "People may feel intrigued, grounded, or deeply drawn into your world. Your energy is not loud, but it is powerful in a way that lingers.",
    strengths: "Depth, elegance, emotional control",
    strengthDetails:
      "Your strengths include emotional balance, quiet confidence, and the ability to create a sense of depth in any space you enter.",
    watchOut: "Holding too much inside or becoming hard to reach",
    watchOutDetails:
      "Because you do not express everything easily, others may struggle to fully understand you. Allowing small moments of openness can help create stronger connection without losing your depth.",
    bestMatch:
      "People who appreciate subtlety and emotional depth",
    growth1:
      "Growth for you often means allowing yourself to be a little more open without feeling like you are losing control.",
    growth2:
      "The healthiest version of your energy is not less guarded. It is more connected. It is depth that can still be shared.",
    reminder:
      "You do not lose your mystery by letting people in.",
  },

  storm: {
    title: "The Storm Muse ⛈️",
    summary:
      "You are the Storm Muse — intense, transformative, and impossible to forget.",
    desc1:
      "Your presence feels powerful and unpredictable. You bring change, emotion, and movement wherever you go. People do not just notice you. They feel something shift when you are around.",
    desc2:
      "What makes you powerful is your ability to disrupt what is stagnant. You challenge, awaken, and transform. Your energy does not leave things the same as it found them.",
    meaning1:
      "This result often means your energy is tied to change, emotional force, and transformation. You likely experience life in waves rather than in stillness.",
    meaning2:
      "Because of that, your presence can feel overwhelming at times, but also deeply meaningful. You are not here to be neutral. You are here to move things.",
    showUp1:
      "In everyday life, this shows up as emotional intensity, strong reactions, deep honesty, and a presence that creates movement.",
    showUp2:
      "People may feel challenged, awakened, or transformed around you. You bring truth, even when it is uncomfortable.",
    strengths: "Transformation, intensity, emotional force",
    strengthDetails:
      "Your strengths include the ability to create change, to bring hidden things to the surface, and to move through life with real emotional power.",
    watchOut: "Creating chaos without grounding",
    watchOutDetails:
      "Your energy can sometimes become overwhelming if it is not grounded. Learning to stabilize your emotions can make your impact even stronger.",
    bestMatch:
      "People who can handle depth and emotional movement",
    growth1:
      "Growth for you often means learning to balance movement with stability.",
    growth2:
      "The healthiest version of your energy is not less powerful. It is more directed.",
    reminder:
      "You are not too intense. You are meant to move things.",
  },

  starlight: {
    title: "The Starlight Muse ✨",
    summary:
      "You are the Starlight Muse — radiant, inspiring, and quietly magical.",
    desc1:
      "Your presence feels light, uplifting, and full of possibility. People often feel better just being around you. There is something about you that makes life feel a little brighter.",
    desc2:
      "What makes you powerful is your ability to inspire. You bring hope, imagination, and a sense of wonder into spaces that need it.",
    meaning1:
      "This result often means your energy is tied to inspiration, lightness, and emotional possibility. You likely see beauty where others might not.",
    meaning2:
      "Because of that, your presence can feel refreshing and uplifting. You remind people of what is still possible.",
    showUp1:
      "In everyday life, this shows up as positivity, creativity, emotional openness, and a natural ability to uplift others.",
    showUp2:
      "People may feel inspired, hopeful, or comforted by your presence. You bring light without forcing it.",
    strengths: "Inspiration, lightness, emotional uplift",
    strengthDetails:
      "Your strengths include optimism, emotional warmth, and the ability to make others feel like things can get better.",
    watchOut: "Avoiding deeper emotions or reality",
    watchOutDetails:
      "Because your energy is so light, you may sometimes avoid heavier emotions. Allowing yourself to feel everything can make your light even more real.",
    bestMatch:
      "People who appreciate your light while staying grounded",
    growth1:
      "Growth for you often means allowing both light and depth to exist together.",
    growth2:
      "The healthiest version of your energy is not just bright. It is balanced.",
    reminder:
      "Your light is real. Let it shine, but let it stay grounded too.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "moon";
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
        background:
          "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "42px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(860px, 100%)", textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#9d174d",
            textTransform: "uppercase",
          }}
        >
          Muse Personality Result
        </p>

        <h1
          style={{
            fontSize: "40px",
            lineHeight: 1.2,
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
            lineHeight: 1.7,
          }}
        >
          {r.summary}
        </p>

        <div style={{ ...adBoxStyle, marginBottom: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.76)",
            border: "1px solid #f2a7b8",
            borderRadius: "18px",
            padding: "24px",
            textAlign: "left",
            lineHeight: 1.8,
            color: "#374151",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <p style={{ marginTop: 0 }}>{r.desc1}</p>
          <p>{r.desc2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            What this muse means
          </h2>

          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            How your energy shows up
          </h2>

          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            Your strengths
          </h2>

          <p><strong>Main strengths:</strong> {r.strengths}</p>
          <p>{r.strengthDetails}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            What may feel difficult
          </h2>

          <p><strong>Watch out for:</strong> {r.watchOut}</p>
          <p>{r.watchOutDetails}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            Growth path
          </h2>

          <p>{r.growth1}</p>
          <p>{r.growth2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            A small reminder for you
          </h2>

          <p>{r.reminder}</p>

          <p style={{ marginTop: "18px" }}>
            <strong>Best match:</strong> {r.bestMatch}
          </p>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "22px" }}>
          <button onClick={copyLink} style={{ padding: "12px 22px", background: copied ? "#22c55e" : "#111827", color: "white", borderRadius: "10px", border: "none", cursor: "pointer", fontWeight: "bold" }}>
            {copied ? "Copied!" : "Share result"}
          </button>

          <a href="/quiz/what-kind-of-muse-are-you" style={{ padding: "12px 22px", background: "#ff8fab", color: "white", borderRadius: "10px", textDecoration: "none", fontWeight: "bold" }}>
            Try again
          </a>

          <a href="/" style={{ padding: "12px 22px", background: "white", color: "#111827", borderRadius: "10px", textDecoration: "none", fontWeight: "bold", border: "1px solid #e5e7eb" }}>
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

export default function MuseResultPage() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}