"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  secure_heart: {
    title: "Secure Heart 💗",
    summary:
      "Your attachment style in love is secure, steady, and emotionally balanced.",
    desc1:
      "You tend to approach love with openness rather than fear. You can care deeply without losing yourself, and you usually value honesty, consistency, and emotional safety. People often feel calm around you because your love feels stable instead of confusing.",
    desc2:
      "That does not mean you are emotionless or never get hurt. It means your heart usually trusts connection without needing to control it. Your strength in love is balance: you know how to stay close while still respecting both your needs and someone else’s. That kind of love is deeply comforting and rare.",
    meaning1:
      "This result usually points to a healthy relationship pattern. You are often able to enjoy closeness without feeling trapped by it, and you are less likely to panic when small moments of uncertainty appear. You tend to see love as something that can be built through trust, communication, and consistency rather than constant testing.",
    meaning2:
      "Because of that, your emotional energy can feel calming to other people. You may not always be the loudest or most dramatic person in love, but your steadiness creates safety. In many relationships, that kind of emotional reliability becomes the foundation that keeps connection strong over time.",
    showUp1:
      "In real relationships, this can show up as clear communication, patience during conflict, and an ability to stay emotionally present without losing your sense of self. If a misunderstanding happens, you are more likely to talk through it than turn it into a silent emotional battle.",
    showUp2:
      "You can usually give affection without making it feel heavy, and you can receive love without doubting it every second. You may still get disappointed or hurt, of course, but your first instinct is often to understand and reconnect rather than assume the worst.",
    strengths: "Trust, emotional balance, healthy closeness",
    strengthDetails:
      "Your greatest strengths are stability, honesty, and emotional openness. You are often capable of building love that feels peaceful instead of exhausting. That can make you a grounding partner, especially for someone who has experienced confusion or inconsistency in the past.",
    watchOut: "Staying too long with emotionally unavailable people",
    watchOutDetails:
      "One thing to watch for is giving your calm energy to people who do not meet you with the same maturity. Because you can communicate well and hold steady through difficult moments, you may sometimes stay patient longer than you should with someone who is unclear, avoidant, or emotionally inconsistent.",
    bestMatch:
      "Someone sincere, communicative, and emotionally consistent",
    reminder:
      "Keep choosing relationships where your emotional steadiness is appreciated, returned, and protected — not merely depended on.",
  },

  anxious_romantic: {
    title: "Anxious Romantic 💌",
    summary:
      "Your attachment style in love is deeply caring, emotionally intense, and reassurance-seeking.",
    desc1:
      "You love with your whole heart. When you care about someone, their attention, tone, and presence can affect you strongly. You often crave emotional closeness and reassurance, not because you are weak, but because love feels deeply meaningful to you.",
    desc2:
      "Your biggest strength is devotion. You are attentive, affectionate, and emotionally invested. But sometimes that same depth can turn into overthinking, fear of being left, or reading too much into small changes. Your healthiest love appears when reassurance comes not only from others, but also from your own inner stability.",
    meaning1:
      "This result often means that connection matters to you very deeply. You do not approach love casually. When your heart attaches, it attaches with sincerity, sensitivity, and a strong desire to feel emotionally chosen. That can make your love feel warm, expressive, and unforgettable.",
    meaning2:
      "At the same time, that emotional depth can make uncertainty feel especially loud. A delayed reply, a shift in tone, or a moment of distance can sometimes grow larger in your mind than it really is. The issue is not that you feel too much — it is that your care can easily turn into fear when safety feels unclear.",
    showUp1:
      "In relationships, this may show up as checking for reassurance, replaying conversations in your mind, or feeling especially affected by emotional inconsistency. You may notice yourself wanting closeness quickly because closeness feels like relief.",
    showUp2:
      "You are often very generous in love: thoughtful, affectionate, and emotionally available. But when you feel insecure, your heart may move into panic before it moves into perspective. Learning to pause before assuming the worst can change your relationships more than you might expect.",
    strengths: "Devotion, sensitivity, emotional depth",
    strengthDetails:
      "Your strengths are powerful. You care deeply, notice emotional details, and often bring a lot of warmth into relationships. When your love is met with steadiness, you can be an incredibly loving, loyal, and emotionally expressive partner.",
    watchOut: "Overthinking, fear of distance, needing too much reassurance",
    watchOutDetails:
      "The main challenge is not your capacity for love — it is the way fear can distort small moments. If every delay feels like rejection or every emotional shift feels like a threat, relationships can become exhausting for both you and the other person. Your healing often begins when reassurance becomes something you build inside yourself too.",
    bestMatch:
      "Someone warm, reliable, and clear with their feelings",
    reminder:
      "Your sensitivity is not a flaw. It becomes a strength when it is supported by self-trust instead of constant fear.",
  },

  avoidant_soul: {
    title: "Avoidant Soul 🌫️",
    summary:
      "Your attachment style in love is independent, guarded, and slow to fully let people in.",
    desc1:
      "You may care deeply, but you do not always show it in obvious ways. In love, you often protect your freedom, emotional space, and inner world. You usually feel safest when things move at your own pace and when no one tries to force closeness too quickly.",
    desc2:
      "This does not mean you do not want love. It means vulnerability can feel risky, especially if closeness starts to feel overwhelming. Your strength is self-control and emotional independence. The challenge is that protecting yourself too much can block the intimacy you actually want. Love tends to work best for you when space and trust grow together.",
    meaning1:
      "This result often reflects a pattern of self-protection. You may naturally rely on yourself first, keep your emotions private, and pull back when connection starts to feel too intense. From the outside, that can look distant, but internally it is often less about coldness and more about preserving safety.",
    meaning2:
      "You may value love, but only when it does not feel invasive, demanding, or emotionally chaotic. You tend to trust slowly, and you often need time before showing the deeper parts of yourself. That does not make your love shallow — in fact, it may simply mean that love feels more real to you when it is calm and respectful.",
    showUp1:
      "In real relationships, this can show up as needing more personal space, going quiet during conflict, or feeling pressure when someone wants emotional closeness faster than you are ready for. You may sometimes process your feelings alone before you can share them.",
    showUp2:
      "You may also express care through consistency, actions, or quiet loyalty rather than dramatic words. The challenge is that if you protect yourself too quickly, the other person may not always see how much you actually feel. Love becomes easier when emotional honesty grows alongside your independence.",
    strengths: "Independence, calmness, emotional self-protection",
    strengthDetails:
      "Your strengths include steadiness, self-control, and the ability to stay grounded when emotions get intense. You are often less reactive than others, and you may bring calm to situations that would overwhelm someone else.",
    watchOut: "Shutting down, seeming distant, avoiding vulnerability",
    watchOutDetails:
      "What may feel difficult is letting someone see your needs before you retreat. If you shut down too early or disappear behind emotional distance, the relationship can lose warmth even when real care is present. The goal is not to become emotionally overwhelming — it is to become a little more reachable.",
    bestMatch:
      "Someone patient, grounded, and respectful of your pace",
    reminder:
      "You do not have to give up your independence to build intimacy. The healthiest love for you will make room for both.",
  },

  fearful_deep: {
    title: "Fearful Deep 🖤",
    summary:
      "Your attachment style in love is intense, layered, and caught between longing for closeness and fearing pain.",
    desc1:
      "You often want real intimacy, but part of you may also fear what comes with it. Love can feel beautiful and dangerous at the same time. You may open deeply one moment, then pull back the next when things start to feel too emotionally real.",
    desc2:
      "Your heart is not cold — it is protective. You often feel things strongly, and that makes trust especially important. Your greatest strength is emotional depth and sincerity. The challenge is healing the part of you that expects closeness to become hurt. Your love becomes most powerful when safety, patience, and self-trust begin to replace fear.",
    meaning1:
      "This result usually reflects a very layered emotional world. You may deeply crave love, understanding, and emotional closeness, while also feeling alert to the possibility of disappointment, rejection, or pain. That can create an inner push-pull dynamic that feels exhausting even when your feelings are genuine.",
    meaning2:
      "You are often not confused about wanting love — you are conflicted about whether love is safe. Because of that, closeness can feel comforting and threatening at the same time. This complexity does not make you broken. It means your heart is trying to protect itself while still reaching for connection.",
    showUp1:
      "In relationships, this can show up as opening up quickly and then suddenly retreating, craving reassurance but struggling to trust it, or wanting intimacy while fearing what happens once someone gets too close. Small emotional shifts can feel especially intense because they seem to confirm hidden fears.",
    showUp2:
      "You may feel deeply sincere in love, but also overwhelmed by how exposed love can make you feel. That is why emotional safety matters so much for you. When connection is patient, consistent, and honest, your heart often becomes much softer than people expect.",
    strengths: "Depth, sincerity, emotional complexity",
    strengthDetails:
      "Your strengths are real and powerful. You feel deeply, care sincerely, and often understand emotional nuance in a way that others do not. When your heart feels safe enough to stay open, your love can be incredibly profound, loyal, and meaningful.",
    watchOut: "Push-pull patterns, fear of trust, emotional overwhelm",
    watchOutDetails:
      "The hardest part is often the inner conflict itself. You may want closeness and fear it at the same time, which can create mixed signals for both you and the other person. Growth begins when you stop judging your fear and start building trust slowly, one honest moment at a time.",
    bestMatch:
      "Someone emotionally patient, gentle, and consistently safe",
    reminder:
      "You are not too complicated for love. You simply need a kind of love that feels safe enough for your heart to stay open.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey =
    rawKey && rawKey in results ? rawKey : "secure_heart";
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

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What this result means
          </h2>

          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            How this can show up in love
          </h2>

          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            Your strengths
          </h2>

          <p style={{ marginBottom: "10px" }}>
            <strong>Main strengths:</strong> {r.strengths}
          </p>
          <p>{r.strengthDetails}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What may feel difficult
          </h2>

          <p style={{ marginBottom: "10px" }}>
            <strong>Watch out for:</strong> {r.watchOut}
          </p>
          <p>{r.watchOutDetails}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            A small reminder for you
          </h2>

          <p style={{ marginBottom: "18px" }}>{r.reminder}</p>

          <div style={{ marginTop: "18px" }}>
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
            href="/quiz/attachment-style"
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

export default function AttachmentStyleResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}