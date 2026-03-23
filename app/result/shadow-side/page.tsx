"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  overthinker: {
    title: "The Overthinker 🫧",
    summary:
      "Your shadow side is the tendency to turn fear, uncertainty, and emotion into endless mental noise.",
    desc1:
      "When life feels uncertain, your mind tries to protect you by thinking more, analyzing more, and replaying more. You may search for the perfect answer, the perfect choice, or the perfect way to avoid pain. But instead of creating peace, it can leave you emotionally exhausted and even farther from clarity.",
    desc2:
      "This shadow side often comes from caring deeply and wanting safety. Your mind is not your enemy — it is trying to protect you. But healing begins when you realize not every feeling can be solved through analysis. Sometimes peace comes not from figuring everything out, but from softening your grip on uncertainty.",
    strengths: "Awareness, depth, thoughtfulness",
    watchOut: "Rumination, indecision, emotional exhaustion",
    bestMatch:
      "Practices and people that help you feel grounded, present, and safe enough to stop spiraling",
  },

  people_pleaser: {
    title: "The People Pleaser 🌷",
    summary:
      "Your shadow side is the tendency to over-give, over-adjust, and lose yourself to keep connection safe.",
    desc1:
      "You may have learned that being easy, helpful, kind, or emotionally convenient was the safest way to be loved. So when tension appears, you often try to smooth things over, carry too much, or silence your own needs. On the surface it can look selfless, but underneath it may come from fear of rejection, guilt, or emotional loss.",
    desc2:
      "This shadow side usually grows from a beautiful heart that has learned to survive through pleasing. Your kindness is real, but it becomes painful when it costs you your own truth. Healing begins when you let yourself believe that love should not require self-erasure.",
    strengths: "Kindness, empathy, emotional generosity",
    watchOut: "Weak boundaries, resentment, losing your voice",
    bestMatch:
      "Relationships and spaces where your needs are welcomed, not punished",
  },

  emotional_escapist: {
    title: "The Emotional Escapist 🌫️",
    summary:
      "Your shadow side is the tendency to avoid, numb, or run from emotions before they fully land.",
    desc1:
      "When things start to feel too intense, too vulnerable, or too painful, your instinct may be to disappear from it. You might distract yourself, detach, stay busy, go emotionally blank, or pull away before feelings become too real. It can create temporary relief, but it often leaves unprocessed emotions quietly building underneath.",
    desc2:
      "This shadow side is a form of self-protection. Somewhere along the way, feeling too much may have stopped feeling safe. Healing begins when you slowly learn that emotions do not need to be outrun in order to survive them. What you avoid does not disappear — but what you face gently can begin to soften.",
    strengths: "Adaptability, self-protection, emotional sensitivity",
    watchOut: "Detachment, avoidance, delayed emotional pain",
    bestMatch:
      "Gentle routines and emotionally safe people who help you stay present without pressure",
  },

  guarded_controller: {
    title: "The Guarded Controller 🖤",
    summary:
      "Your shadow side is the need to stay composed, protected, and in control so vulnerability never gets too close.",
    desc1:
      "You may have learned that control feels safer than exposure. So when emotions rise, you tighten your grip. You manage what you show, what you say, and how much of yourself others are allowed to reach. On the outside, this can look strong and self-contained. On the inside, it can become lonely and exhausting.",
    desc2:
      "This shadow side often forms around fear of being hurt, misunderstood, or emotionally overpowered. Your control may have protected you for a long time, but it can also keep love, softness, and support at a distance. Healing begins when safety no longer has to mean emotional isolation.",
    strengths: "Composure, self-discipline, emotional restraint",
    watchOut: "Distance, rigidity, difficulty receiving support",
    bestMatch:
      "People and environments where trust can grow slowly without forcing you open",
  },

  self_saboteur: {
    title: "The Self-Saboteur 🔥",
    summary:
      "Your shadow side is the tendency to disrupt good things before they have the chance to fully become yours.",
    desc1:
      "When something meaningful, beautiful, or hopeful starts to enter your life, a part of you may become restless. You may pull away, procrastinate, numb out, ruin the momentum, or convince yourself it will not last anyway. It is not because you do not want good things — it is often because some part of you does not yet feel safe holding them.",
    desc2:
      "This shadow side is usually rooted in fear, shame, or old disappointment. It tries to protect you from future pain by making the ending happen early. Healing begins when you recognize that ruining something first is still a way of staying controlled by fear. You deserve the chance to stay.",
    strengths: "Instinct, sensitivity, awareness of risk",
    watchOut: "Procrastination, withdrawal, ruining what you want most",
    bestMatch:
      "People and habits that help you build self-trust slowly and consistently",
  },

  silent_storm: {
    title: "The Silent Storm ⛈️",
    summary:
      "Your shadow side is the tendency to hold so much inside that your hidden emotions turn into pressure.",
    desc1:
      "You may appear calm, steady, or hard to read, but there is often much more happening underneath than people realize. You absorb, contain, and carry a lot. Instead of expressing your feelings as they come, you may store them quietly until they become heaviness, distance, or inner pressure.",
    desc2:
      "This shadow side often comes from learning that your emotions were too much, inconvenient, or unsafe to reveal. But what stays buried does not stay still. Healing begins when you stop treating your inner world like something that must always be controlled in silence. Your feelings are not dangerous for existing.",
    strengths: "Depth, endurance, emotional richness",
    watchOut: "Bottling things up, internal pressure, emotional isolation",
    bestMatch:
      "Safe spaces where you can express yourself before your feelings become a storm",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "overthinker";
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
            href="/quiz/shadow-side"
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

export default function ShadowSideResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}