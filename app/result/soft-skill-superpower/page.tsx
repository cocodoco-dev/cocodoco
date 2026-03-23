"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  empathetic_listener: {
    title: "Empathetic Listener 💗",
    summary:
      "Your soft skill superpower is the ability to make people feel heard, understood, and emotionally safe.",
    desc1:
      "You have a rare way of listening that goes beyond words. People often feel that you truly notice their emotional reality, even when they struggle to explain it clearly. That kind of presence builds trust quickly because it makes others feel less alone.",
    desc2:
      "What makes this a superpower is that emotional understanding changes everything. It improves relationships, teamwork, and communication in a deep way. Your ability to listen with care can calm tension, strengthen connection, and help people open up honestly.",
    strengths: "Empathy, trust-building, emotional awareness",
    watchOut: "Absorbing too much of other people’s stress",
    bestMatch:
      "Roles and relationships where emotional intelligence matters deeply",
  },

  calm_problem_solver: {
    title: "Calm Problem-Solver 🧠",
    summary:
      "Your soft skill superpower is staying clear-headed and practical when things get difficult.",
    desc1:
      "When other people feel scattered or stressed, you often become more focused. You naturally look for what matters most, what can be fixed, and what the next step should be. Instead of adding panic, you bring clarity and movement.",
    desc2:
      "That is a real superpower because difficult moments need people who can think steadily under pressure. You help situations feel more manageable by breaking down problems and responding with calm rather than chaos. People trust you because you make progress feel possible.",
    strengths: "Clear thinking, composure, practical action",
    watchOut: "Focusing so much on solutions that feelings get overlooked",
    bestMatch:
      "Fast-moving situations where steadiness and smart action matter",
  },

  natural_connector: {
    title: "Natural Connector 🌷",
    summary:
      "Your soft skill superpower is bringing people together and creating real trust between them.",
    desc1:
      "You have a gift for reading social energy and helping people feel included. You often know how to soften awkwardness, create comfort, and make people feel like they belong. That ability is more powerful than it looks because strong relationships often shape the success of everything else.",
    desc2:
      "What makes this a superpower is that connection is not accidental. You help people move from distance to trust. In teams, friendships, and everyday interactions, your presence can improve the atmosphere and make collaboration feel much more natural.",
    strengths: "Trust, inclusion, relationship-building",
    watchOut: "Taking too much responsibility for everyone getting along",
    bestMatch:
      "Communities and teams where chemistry, belonging, and collaboration matter",
  },

  quiet_leader: {
    title: "Quiet Leader 🌿",
    summary:
      "Your soft skill superpower is guiding people steadily without needing to dominate the room.",
    desc1:
      "You do not need to be loud to lead well. Your strength often shows up through calm presence, good judgment, and the ability to steady others when things feel uncertain. People may follow your energy because it feels grounded rather than performative.",
    desc2:
      "That is a superpower because not all leadership is dramatic. Some of the strongest leaders create trust through reliability, emotional steadiness, and thoughtful direction. You help people feel safer moving forward, even when you are not the one demanding attention.",
    strengths: "Steadiness, judgment, grounded influence",
    watchOut: "Being underestimated because your style is subtle",
    bestMatch:
      "Situations where calm guidance and trust matter more than ego",
  },

  adaptable_mind: {
    title: "Adaptable Mind ⚡",
    summary:
      "Your soft skill superpower is adjusting quickly, learning fast, and staying flexible when life changes.",
    desc1:
      "You naturally know how to shift when the situation shifts. When plans change or unexpected problems appear, you are often able to regroup and respond without staying stuck for too long. That flexibility helps you move through uncertainty with more ease than many people can.",
    desc2:
      "What makes this a superpower is that change is everywhere. Your ability to adapt helps you stay resilient, useful, and forward-moving even when the path is unclear. You are often stronger than you realize because you know how to keep going without needing perfect conditions.",
    strengths: "Flexibility, resilience, quick adjustment",
    watchOut: "Adapting so well that your own preferences get ignored",
    bestMatch:
      "Dynamic environments where learning, change, and resilience matter",
  },

  clear_communicator: {
    title: "Clear Communicator ✨",
    summary:
      "Your soft skill superpower is making things understandable, honest, and easier for people to navigate.",
    desc1:
      "You have a gift for turning confusion into clarity. Whether you are explaining an idea, talking through tension, or helping people understand what matters, your words often make things feel simpler and more manageable. That kind of clarity is incredibly valuable.",
    desc2:
      "This is a superpower because communication shapes everything. When people feel confused, anxious, or disconnected, clear communication can restore trust and direction. You help others move forward because you know how to say what matters in a way people can actually receive.",
    strengths: "Clarity, honesty, understanding",
    watchOut: "Assuming people are ready to hear things as directly as you see them",
    bestMatch:
      "Roles and relationships where truth, clarity, and alignment matter",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "empathetic_listener";
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
            href="/quiz/soft-skill-superpower"
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

export default function SoftSkillSuperpowerResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}