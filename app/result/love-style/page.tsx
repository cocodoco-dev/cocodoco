"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const results = {
  warm_hugger: {
    title: "Warm Hugger 🧸",
    desc: "You’re affectionate, attentive, and you build love through emotional safety.",
  },
  charming_tease: {
    title: "Charming Tease 😼",
    desc: "Flirty, witty, and playful—your love feels like a fun rom-com scene.",
  },
  steady_rock: {
    title: "Steady Rock 🪨",
    desc: "Reliable and calm. You love with consistency, trust, and real commitment.",
  },
  mystery_cat: {
    title: "Mystery Cat 🐾",
    desc: "You’re charming but private. You open up slowly—and it’s worth the wait.",
  },
  golden_retriever: {
    title: "Golden Retriever 💛",
    desc: "Bright, loyal, and expressive. Your love is warm, enthusiastic, and honest.",
  },
  independent_star: {
    title: "Independent Star ⭐",
    desc: "You love deeply but need freedom. You want a partner, not a manager.",
  },
} as const;

type ResultKey = keyof typeof results;

export default function LoveStyleResult() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "warm_hugger";
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
        textAlign: "center",
      }}
    >
      <div style={{ width: "min(860px, 100%)" }}>
        <h1 style={{ fontSize: "46px", marginBottom: "12px" }}>{r.title}</h1>
        <p style={{ fontSize: "18px", color: "#374151", marginBottom: "24px" }}>{r.desc}</p>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center" }}>
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
            href="/quiz/love-style"
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

        {/* Ad placeholder */}
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