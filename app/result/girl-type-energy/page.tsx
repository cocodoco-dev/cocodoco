"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  "soft-girl": {
    title: "The Soft Girl 🎀",
    summary:
      "At heart, you are the Soft Girl — gentle, warm, and emotionally expressive in a way that makes people feel safe around you.",
    desc1:
      "Your energy is naturally soft and comforting. You tend to move through life with emotional awareness, kindness, and a quiet sense of beauty. People often feel at ease in your presence because you carry a warmth that does not demand attention but gently draws it in.",
    desc2:
      "What makes this energy powerful is its emotional depth. Softness is not weakness. It is sensitivity, care, and the ability to connect with life in a way that feels real. You bring tenderness into spaces that might otherwise feel cold or distant.",
    meaning1:
      "This result often means your core energy is rooted in emotional connection, softness, and sincerity. You are likely someone who values feeling understood, creating safe spaces, and expressing care in ways that feel genuine rather than performative.",
    meaning2:
      "Because of that, you may experience life through emotion first. You notice tone, atmosphere, and subtle shifts in feeling. This makes you deeply empathetic and emotionally present, but it can also make you sensitive to harshness, distance, or emotional inconsistency.",
    showUp1:
      "In real life, this energy shows up as kindness, sweetness, emotional openness, and a natural ability to comfort others. You may be the one people come to when they need to feel understood or held in a gentle way.",
    showUp2:
      "You may also express yourself through soft aesthetics, romantic details, or emotionally meaningful choices. The challenge is making sure your softness remains a strength rather than something that allows others to take more than you can give.",
    strengths: "Warmth, empathy, emotional presence",
    strengthDetails:
      "Your strengths include emotional intelligence, kindness, and the ability to create safe and nurturing environments. You bring a sense of softness that helps others relax and open up. That is a rare and deeply valuable kind of presence.",
    watchOut: "Being too accommodating or losing boundaries",
    watchOutDetails:
      "What may feel difficult is protecting your own needs. Because you care deeply, you may sometimes give too much or prioritize others over yourself. Your softness becomes strongest when it includes clear boundaries and self-respect.",
    bestMatch:
      "People who appreciate your gentleness and treat your heart with care",
    growth1:
      "Growth for you often means learning that softness and strength can exist together. You do not need to harden yourself to be respected.",
    growth2:
      "The healthiest version of your energy is someone who stays kind and open while also knowing when to say no, step back, and protect their own emotional space.",
    reminder:
      "Your softness is your power. Just make sure it protects you too.",
  },

  "cool-girl": {
    title: "The Cool Girl 🖤",
    summary:
      "At heart, you are the Cool Girl — effortless, composed, and naturally confident without needing to prove it.",
    desc1:
      "Your energy is relaxed and self-possessed. You do not need to chase attention because your presence speaks for itself. There is something about your calm confidence that makes people notice you without you trying too hard.",
    desc2:
      "What makes this energy powerful is its ease. You carry yourself in a way that feels natural, not forced. You do not over-explain yourself or seek validation, which gives you a quiet but undeniable presence.",
    meaning1:
      "This result often means your core energy is rooted in independence, composure, and authenticity. You likely value being true to yourself rather than adjusting your identity to fit expectations.",
    meaning2:
      "Because of that, you may come across as calm, grounded, and a little hard to read. That can make you intriguing, but it can also create distance if people are unsure how to connect with you emotionally.",
    showUp1:
      "In daily life, this energy shows up as relaxed confidence, minimal effort style, and a steady presence. You are often the person who seems unbothered even when things are intense.",
    showUp2:
      "You may also value space and independence, preferring relationships that feel natural rather than overly demanding. The challenge is allowing yourself to be emotionally open when it matters.",
    strengths: "Confidence, composure, authenticity",
    strengthDetails:
      "Your strengths include self-trust, independence, and the ability to remain calm under pressure. You do not easily lose yourself in chaos, which gives you a grounded and stable presence.",
    watchOut: "Emotional distance or seeming unavailable",
    watchOutDetails:
      "What may feel difficult is letting people see your deeper emotional side. Sometimes protecting your independence can create distance that prevents real connection.",
    bestMatch:
      "People who respect your independence but still invite emotional depth",
    growth1:
      "Growth for you often means allowing yourself to be seen more fully, not just as composed, but as emotionally real.",
    growth2:
      "The healthiest version of your energy is someone who stays confident and independent while also being open enough to build meaningful connections.",
    reminder:
      "You do not lose your cool by being vulnerable. You deepen it.",
  },

  "it-girl": {
    title: "The It Girl ✨",
    summary:
      "At heart, you are the It Girl — magnetic, expressive, and naturally noticed wherever you go.",
    desc1:
      "Your energy draws attention without effort. There is something about your presence that feels alive, stylish, and impossible to ignore. People tend to notice you, remember you, and feel your presence strongly.",
    desc2:
      "What makes this energy powerful is charisma. You bring life into spaces through expression, confidence, and the ability to stand out. Your presence can elevate the energy of the room.",
    meaning1:
      "This result often means your core energy is rooted in visibility, expression, and personal style. You are likely someone who enjoys being seen and expressing yourself outwardly.",
    meaning2:
      "Because of that, your life may naturally involve attention, social interaction, and being in spaces where your presence is felt. This can be exciting and empowering, but it can also create pressure to always maintain that image.",
    showUp1:
      "In real life, this energy shows up as bold style, social magnetism, and a strong sense of identity. You may be the one people look to for trends, ideas, or inspiration.",
    showUp2:
      "You may also feel comfortable taking up space and owning your presence. The challenge is making sure your identity is not defined only by how others see you.",
    strengths: "Charisma, presence, expression",
    strengthDetails:
      "Your strengths include confidence, visibility, and the ability to energize people around you. You naturally create excitement and draw people in.",
    watchOut: "Relying too much on external validation",
    watchOutDetails:
      "What may feel difficult is staying grounded in who you are beyond attention. When validation becomes central, it can create pressure or insecurity.",
    bestMatch:
      "People who see you beyond your image and value your real self",
    growth1:
      "Growth for you often means connecting your outer presence with your inner identity.",
    growth2:
      "The healthiest version of your energy is someone who shines outwardly while staying deeply rooted inwardly.",
    reminder:
      "You are more than the attention you receive.",
  },

  "mysterious-girl": {
    title: "The Mysterious Girl 🌑",
    summary:
      "At heart, you are the Mysterious Girl — deep, intriguing, and quietly unforgettable.",
    desc1:
      "Your energy is not loud, but it is powerful. You do not reveal everything at once, and that creates a sense of depth that draws people in. There is something about you that feels layered and hard to fully understand.",
    desc2:
      "What makes this energy powerful is depth. You do not rely on visibility to be felt. Your presence lingers because of what is left unsaid.",
    meaning1:
      "This result often means your core energy is rooted in introspection, privacy, and emotional depth. You likely value meaning over surface-level interaction.",
    meaning2:
      "Because of that, you may feel more comfortable observing than performing. This can make you perceptive and insightful, but also a little distant.",
    showUp1:
      "In real life, this energy shows up as quiet confidence, subtle expression, and a strong inner world. You may be the person people cannot quite figure out but cannot forget.",
    showUp2:
      "You may also be selective about what you share and who you trust. The challenge is allowing the right people to see you more clearly.",
    strengths: "Depth, intrigue, emotional intelligence",
    strengthDetails:
      "Your strengths include perception, emotional depth, and the ability to create a lasting impression without needing attention.",
    watchOut: "Being too closed off or hard to reach",
    watchOutDetails:
      "What may feel difficult is opening up. If you stay too guarded, you may miss meaningful connections.",
    bestMatch:
      "People who are patient, curious, and emotionally perceptive",
    growth1:
      "Growth for you often means allowing yourself to be known, not just observed.",
    growth2:
      "The healthiest version of your energy is someone who keeps their depth but shares it with the right people.",
    reminder:
      "You do not lose your mystery by letting yourself be seen.",
  },

  "sunshine-girl": {
    title: "The Sunshine Girl ☀️",
    summary:
      "At heart, you are the Sunshine Girl — bright, warm, and naturally uplifting to everyone around you.",
    desc1:
      "Your energy feels light and positive. You bring warmth into spaces simply by being yourself. People often feel better after being around you because your presence lifts the atmosphere.",
    desc2:
      "What makes this energy powerful is its positivity. You help others feel seen, welcomed, and emotionally lighter.",
    meaning1:
      "This result often means your core energy is rooted in optimism, openness, and emotional generosity.",
    meaning2:
      "Because of that, you may naturally take on the role of uplifting others. This is beautiful, but it can also become tiring if you feel responsible for everyone’s mood.",
    showUp1:
      "In daily life, this energy shows up as friendliness, warmth, and emotional brightness.",
    showUp2:
      "You may also be someone who spreads joy easily. The challenge is allowing yourself to feel all emotions, not just the positive ones.",
    strengths: "Positivity, warmth, emotional light",
    strengthDetails:
      "Your strengths include uplifting energy, kindness, and the ability to make others feel good.",
    watchOut: "Suppressing your own difficult emotions",
    watchOutDetails:
      "What may feel difficult is allowing yourself to rest and feel without always being the positive one.",
    bestMatch:
      "People who appreciate your light and support you when you need it too",
    growth1:
      "Growth for you often means allowing yourself to be human, not just bright.",
    growth2:
      "The healthiest version of your energy is someone who shines while also honoring their own emotional depth.",
    reminder:
      "You are allowed to rest, not just shine.",
  },

  "boss-girl": {
    title: "The Boss Girl 💼",
    summary:
      "At heart, you are the Boss Girl — strong, driven, and naturally commanding in your presence.",
    desc1:
      "Your energy is grounded in power and direction. You tend to know what you want and move toward it with intention. People often see you as capable, confident, and in control.",
    desc2:
      "What makes this energy powerful is leadership. You create structure, direction, and momentum wherever you go.",
    meaning1:
      "This result often means your core energy is rooted in ambition, independence, and self-respect.",
    meaning2:
      "Because of that, you may prioritize growth, success, and personal standards. This can make you powerful, but also put pressure on yourself.",
    showUp1:
      "In real life, this energy shows up as confidence, decisiveness, and strong presence.",
    showUp2:
      "You may naturally take charge or guide others. The challenge is allowing softness without feeling like you are losing control.",
    strengths: "Leadership, confidence, direction",
    strengthDetails:
      "Your strengths include clarity, ambition, and the ability to move things forward.",
    watchOut: "Being too hard on yourself or always needing control",
    watchOutDetails:
      "What may feel difficult is relaxing and letting things unfold without control.",
    bestMatch:
      "People who respect your strength but also bring softness into your life",
    growth1:
      "Growth for you often means balancing strength with ease.",
    growth2:
      "The healthiest version of your energy is someone who leads while also allowing space for rest and connection.",
    reminder:
      "You do not have to be strong all the time to be powerful.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "soft-girl";
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
          Girl Energy Personality Result
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
            What this archetype means
          </h2>

          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            How this energy can show up in your life
          </h2>

          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            Your strengths
          </h2>

          <p style={{ marginBottom: "10px" }}>
            <strong>Main strengths:</strong> {r.strengths}
          </p>
          <p>{r.strengthDetails}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            What may feel difficult
          </h2>

          <p style={{ marginBottom: "10px" }}>
            <strong>Watch out for:</strong> {r.watchOut}
          </p>
          <p>{r.watchOutDetails}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            Growth path
          </h2>

          <p>{r.growth1}</p>
          <p>{r.growth2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            A small reminder for you
          </h2>

          <p style={{ marginBottom: "18px" }}>{r.reminder}</p>

          <div style={{ marginTop: "18px" }}>
            <p style={{ margin: "10px 0" }}>
              <strong>Best match:</strong> {r.bestMatch}
            </p>
          </div>
        </div>

        <div style={{ display: "flex", gap: "12px", flexWrap: "wrap", justifyContent: "center", marginTop: "22px" }}>
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
            href="/quiz/girl-type-energy"
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

export default function GirlTypeEnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}