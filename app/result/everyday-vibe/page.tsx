"use client";

import { useSearchParams } from "next/navigation";
import { useMemo, useState } from "react";

const results = {
  cozy: {
    title: "Cozy Planner 🧸",
    desc: "You love calm routines, comfy vibes, and a little bit of structure.",
  },
  sprinter: {
    title: "Spontaneous Sprinter ⚡",
    desc: "You move fast, decide quickly, and your weekends start with 'why not?'",
  },
  collector: {
    title: "Curious Collector 🔍",
    desc: "You collect experiences, tastes, and random fun facts. Always exploring.",
  },
  floater: {
    title: "Chill Floater 🌿",
    desc: "You go with the flow. No pressure. Just vibes.",
  },
} as const;

type ResultKey = keyof typeof results;

export default function ResultPage() {
  const sp = useSearchParams();
  const key = (sp.get("type") as ResultKey) || "cozy";
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
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        textAlign: "center",
        padding: "24px",
      }}
    >
      <h1 style={{ fontSize: "42px", marginBottom: "14px" }}>{r.title}</h1>
      <p style={{ fontSize: "18px", maxWidth: "520px", marginBottom: "24px" }}>
        {r.desc}
      </p>

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
          href="/quiz/everyday-vibe"
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

      {/* Ad placeholder (later: AdSense) */}
      <div
        style={{
          marginTop: "28px",
          width: "min(720px, 100%)",
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
    </main>
  );
}