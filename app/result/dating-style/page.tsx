"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  romantic_dreamer: {
    title: "The Romantic Dreamer 💫",
    summary:
      "You love deeply, believe in magic, and feel everything with your whole heart.",
    desc1:
      "For you, love is not just something you feel — it is something you create. You are drawn to meaningful gestures, emotional depth, and the kind of connection that feels like it was written for you. When you like someone, it shows. You put your whole heart into the experience.",
    desc2:
      "This kind of romantic energy is rare and beautiful. The challenge is that not everyone loves at the same depth or speed as you, and that can feel like rejection when it is simply a difference in style. Your dating life thrives when you find someone who matches your emotional investment — not someone you have to convince to care.",
    strengths: "Deep feeling, thoughtfulness, emotional generosity",
    watchOut: "Idealizing people too quickly, getting hurt by unmatched energy",
    bestMatch: "Someone emotionally expressive who loves being loved and loves back just as openly",
  },

  slow_burn: {
    title: "The Slow Burn 🕯️",
    summary:
      "You take your time, build real trust, and love in a way that lasts.",
    desc1:
      "You do not rush into feelings, and that is not a flaw — it is a form of emotional intelligence. Before you let someone in, you watch how they show up. You pay attention to patterns, not just first impressions. The connections you build may start quietly, but they tend to run very deep.",
    desc2:
      "This style of dating creates some of the most meaningful relationships because it is built on something real. The challenge is that others may misread your caution as disinterest. Being more transparent about where you are emotionally — even when you are still figuring it out — can help the right people stay instead of walking away too soon.",
    strengths: "Patience, depth, emotional awareness",
    watchOut: "Being mistaken for cold or uninterested, opening up too late",
    bestMatch: "Someone patient and consistent who earns trust without pressure",
  },

  free_spirit: {
    title: "The Free Spirit 🌸",
    summary:
      "You keep it light, enjoy the journey, and never force love to be something it is not.",
    desc1:
      "You approach dating with a refreshing openness. You are not chasing timelines or ticking boxes — you are genuinely enjoying the experience of getting to know people. Your energy is fun, low-pressure, and magnetic, which naturally draws people in.",
    desc2:
      "This style protects you from forcing connections that are not right, and that is a strength. The challenge is that sometimes the right connection does ask for a little more commitment and vulnerability than feels comfortable. Letting yourself be known fully — not just the light, easy parts — is where your most meaningful relationships begin.",
    strengths: "Openness, spontaneity, self-awareness",
    watchOut: "Avoiding depth when things get real, missing connections by staying too casual",
    bestMatch: "Someone easygoing and secure who does not pressure you but also genuinely shows up",
  },

  loyal_partner: {
    title: "The Loyal Partner 💗",
    summary:
      "You love with consistency, show up fully, and build the kind of relationship people wish they had.",
    desc1:
      "When you commit to someone, it means something. You do not love halfway. Your idea of a relationship is not just about feelings — it is about choosing someone every day and putting in the effort to make it real. People who date you often feel genuinely valued.",
    desc2:
      "This kind of steady love is a gift, and it is rare. The challenge is that your loyalty can sometimes keep you in situations longer than is healthy, simply because you believe in the potential of what something could be. Knowing when to hold on and when to let go is the most important skill in your dating journey.",
    strengths: "Reliability, commitment, emotional steadiness",
    watchOut: "Staying too long in the wrong relationship, giving more than you receive",
    bestMatch: "Someone who values loyalty, shows up the same way, and never makes you wonder where you stand",
  },

  passionate_lover: {
    title: "The Passionate Lover 🔥",
    summary:
      "You love intensely, feel everything fully, and make relationships unforgettable.",
    desc1:
      "You bring heat to everything you feel. When you are in, you are all in — emotionally, physically, and mentally. Your presence in a relationship is magnetic because you make the other person feel truly wanted and alive. Love, for you, is not a background thing. It is the main event.",
    desc2:
      "This intensity creates connections that feel electric and real. The challenge is that passionate energy can sometimes overwhelm partners who need more space or a slower pace. Learning to stay present without consuming all the oxygen in a relationship allows your fire to burn longer instead of brighter for a short time.",
    strengths: "Intensity, emotional honesty, making people feel deeply desired",
    watchOut: "Coming on too strong, emotional burnout, moving too fast",
    bestMatch: "Someone emotionally grounded who can match your fire without feeling consumed by it",
  },

  independent_heart: {
    title: "The Independent Heart 🌙",
    summary:
      "You love on your own terms, never lose yourself, and know exactly what you need.",
    desc1:
      "You value your sense of self above almost everything else, and that makes you a grounded, self-aware partner when the relationship is right. You do not fall into love out of loneliness or pressure. You choose it. That means when you are in, it is genuine and intentional.",
    desc2:
      "This independence is deeply attractive to the right people. The challenge is that protecting your space can sometimes create emotional distance that keeps real intimacy from forming. Allowing someone in — fully, not just partially — does not mean losing yourself. It means trusting that you will still be you, even while being close to someone else.",
    strengths: "Self-awareness, emotional maturity, choosing love intentionally",
    watchOut: "Keeping walls up too long, confusing emotional safety with emotional distance",
    bestMatch: "Someone secure and respectful who loves your independence instead of fighting it",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "romantic_dreamer";
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
            href="/quiz/dating-style"
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

export default function DatingStyleResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
