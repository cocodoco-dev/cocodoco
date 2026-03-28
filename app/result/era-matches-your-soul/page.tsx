"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  roaring_20s: {
    title: "The Roaring Twenties 🥂",
    summary:
      "Your soul belongs to the Roaring Twenties — glamorous, magnetic, and drawn to a life that feels dazzling, alive, and unforgettable.",
    desc1:
      "At your core, you are drawn to energy that sparkles. You may feel emotionally connected to beauty that is bold, social, dramatic, and full of movement. The Roaring Twenties was an era of jazz, glamour, reinvention, and larger-than-life atmosphere, and something in that world seems to echo your inner self.",
    desc2:
      "What makes this result powerful is not just a love of aesthetics, but a hunger for aliveness. You are likely someone who wants life to feel vivid rather than dull, memorable rather than flat, and emotionally rich rather than ordinary. Your soul seems to crave excitement, expression, and the kind of beauty that lights up a room.",
    meaning1:
      "This result often means your inner world is deeply connected to glamour, charisma, celebration, and emotional brightness. You may naturally gravitate toward elegance, music, social energy, and experiences that make life feel cinematic. Part of you may believe life is meant to be lived fully, beautifully, and with a little drama.",
    meaning2:
      "Because of that, you may be someone who carries a naturally radiant presence or who longs for environments that feel alive and full of possibility. You may dislike emotional dullness, rigid routine, or spaces that feel too muted. Your soul wants movement, style, warmth, and the feeling that something unforgettable could happen at any moment.",
    showUp1:
      "In real life, this energy can show up as personal charm, social sparkle, love of fashion or atmosphere, emotional boldness, and a desire to create memorable moments. You may be the kind of person who enjoys dressing with intention, making a strong impression, or turning ordinary experiences into something more magical.",
    showUp2:
      "You may also bring a contagious kind of brightness into the lives of others. People may feel more energized, alive, or inspired around you. The challenge is making sure your love of sparkle remains connected to something real beneath the surface, so that beauty becomes expression rather than escape.",
    strengths: "Charisma, vibrancy, emotional brightness",
    strengthDetails:
      "Your greatest strengths include presence, magnetism, creativity, and the ability to bring life into spaces that feel too flat or colorless. You often remind people that joy, style, and celebration matter. You can make life feel bigger, warmer, and more memorable simply by the way you move through it.",
    watchOut: "Chasing intensity or glamour without enough grounding",
    watchOutDetails:
      "What may feel difficult is knowing when excitement is nourishing and when it is becoming a way to avoid stillness or emotional depth. Sometimes the desire for beauty, movement, or stimulation can make it hard to sit with quieter truths. The goal is not to become less radiant. It is to let your brilliance be rooted in something real.",
    bestMatch:
      "People and paths that celebrate your light while also offering depth, sincerity, and emotional steadiness",
    growth1:
      "Growth for you often begins when you realize that depth and glamour do not have to compete. A beautiful life is not only one that shines on the outside. It is also one that feels emotionally true. Your soul does not need less sparkle. It simply needs sparkle with substance.",
    growth2:
      "The healthiest version of this era energy is someone who still embraces beauty, celebration, and radiance, but who also builds a life that can hold meaning beneath the shine. That is when your light becomes not only captivating, but lasting.",
    reminder:
      "Your glow is part of your gift. Just remember that the most unforgettable beauty is the kind that shines from something real.",
  },

  renaissance: {
    title: "The Renaissance 🎨",
    summary:
      "Your soul belongs to the Renaissance — thoughtful, artistic, and deeply drawn to beauty, meaning, and human brilliance.",
    desc1:
      "At heart, you seem most connected to an era shaped by creativity, philosophy, learning, and timeless beauty. The Renaissance was not only about art. It was about awakening, curiosity, and the belief that human life could become more refined, meaningful, and extraordinary through thought and creation.",
    desc2:
      "What makes this result powerful is your connection to depth and beauty at the same time. You are likely someone who wants more than surface-level living. Your soul seems to crave ideas, artistry, perspective, and the kind of richness that comes from engaging both the heart and the mind.",
    meaning1:
      "This result often means your inner world is naturally aligned with wisdom, creation, refinement, and intellectual beauty. You may feel emotionally connected to art, poetry, symbolism, history, or thoughtful conversation. You are probably not satisfied with what is shallow or purely functional. You want what feels meaningful and beautifully made.",
    meaning2:
      "Because of that, you may be someone who experiences life through reflection, imagination, and creative sensitivity. You may notice details other people miss, care deeply about atmosphere and craftsmanship, and feel drawn toward a life that is both expressive and thoughtful. Your soul seems to believe beauty and meaning belong together.",
    showUp1:
      "In everyday life, this energy can show up as artistic taste, curiosity, depth of thought, emotional intelligence, and a desire to keep learning and creating. You may be the kind of person who is nourished by museums, books, meaningful conversations, design, or anything that feels rich in insight and intention.",
    showUp2:
      "You may also bring a calming, refined, and quietly inspiring energy into the lives of others. People may experience you as thoughtful, creative, and emotionally layered. The challenge is making sure your love of depth does not turn into overthinking or distance from direct experience.",
    strengths: "Creativity, wisdom, refinement",
    strengthDetails:
      "Your strengths include insight, artistic sensitivity, curiosity, and the ability to see beauty and meaning where others might only see function. You often elevate life simply by paying attention to what is subtle, profound, and worth shaping with care. That makes your presence quietly transformative.",
    watchOut: "Living too much in thought, ideals, or inner worlds",
    watchOutDetails:
      "What may feel difficult is staying grounded when your inner world becomes richer than the outer one. Because you are drawn to beauty and meaning, you may sometimes linger in reflection, imagination, or perfectionism instead of letting life stay messy and real. The goal is not to become less thoughtful. It is to let your depth remain embodied.",
    bestMatch:
      "People and paths that value beauty, wisdom, creativity, and meaningful expression",
    growth1:
      "Growth for you often begins when you trust that imperfect action can still be beautiful. Meaning does not only live in ideas, art, or vision. It also lives in daily reality, unfinished attempts, and lived presence. Your soul does not need to wait for perfection to begin creating something real.",
    growth2:
      "The healthiest version of this era energy is someone who keeps their love of thought, art, and beauty intact while also participating fully in life. When your inner brilliance meets real embodiment, your gifts become not only elegant, but alive.",
    reminder:
      "Your depth is beautiful. Just remember that meaning grows strongest when it is not only imagined, but lived.",
  },

  victorian: {
    title: "The Victorian Era 🌹",
    summary:
      "Your soul belongs to the Victorian Era — romantic, tender, and deeply connected to emotional depth, beauty, and quiet longing.",
    desc1:
      "At your core, you seem drawn to a world of old letters, soft melancholy, intimate emotion, and timeless devotion. The Victorian era carries a kind of beauty that is not loud, but deeply felt. It holds romance, restraint, sentiment, and the emotional richness of things left partly unsaid.",
    desc2:
      "What makes this result powerful is your connection to tenderness and depth. You are likely someone who feels meaning most strongly through emotional sincerity, symbolic beauty, and the quiet atmosphere of things that matter deeply. Your soul seems to crave grace, softness, and emotional truth.",
    meaning1:
      "This result often means your inner world is organized around feeling, memory, devotion, and atmosphere. You may be emotionally moved by old places, handwritten words, sentimental objects, rainy afternoons, and the kind of beauty that feels intimate and haunting rather than loud or flashy.",
    meaning2:
      "Because of that, you may carry unusual emotional depth and sensitivity. You may love slowly but seriously, feel beauty in subtle details, and be naturally drawn to people or environments that feel sincere rather than performative. Your soul seems less interested in noise and more interested in emotional resonance.",
    showUp1:
      "In real life, this energy can show up as tenderness, loyalty, romantic imagination, appreciation for timeless aesthetics, and a strong connection to emotional atmosphere. You may be the kind of person who values meaningful words, remembers emotional details, and feels deeply attached to beauty that carries memory or longing.",
    showUp2:
      "You may also bring a soft, calming, and deeply human presence into the lives of others. People may experience you as gentle, emotionally rich, and quietly unforgettable. The challenge is making sure your depth remains life-giving rather than becoming heaviness, idealization, or emotional over-attachment.",
    strengths: "Tenderness, devotion, emotional depth",
    strengthDetails:
      "Your strengths include sincerity, loyalty, sensitivity, and the ability to create emotional intimacy and beauty through presence rather than performance. You often help others feel seen, cared for, and emotionally understood. That kind of softness is powerful in ways that are often underestimated.",
    watchOut: "Idealizing the past, love, or emotional intensity too much",
    watchOutDetails:
      "What may feel difficult is knowing when emotional beauty is nourishing and when it is turning into attachment to longing itself. Because your soul is drawn to depth, you may sometimes hold onto melancholy, romantic fantasy, or emotional memory more tightly than is healthy. The goal is not to become less tender. It is to let your tenderness stay rooted in the present.",
    bestMatch:
      "People and paths that honor your softness, sincerity, and emotional depth without taking advantage of it",
    growth1:
      "Growth for you often begins when you realize that beauty does not disappear when it becomes grounded. Love does not become less real when it is steady. Emotional depth does not need sadness in order to feel meaningful. Your soul can remain romantic while also feeling safe and present.",
    growth2:
      "The healthiest version of this era energy is someone who still treasures tenderness, longing, and timeless beauty, but who also allows themselves to live fully in what is here now. That is when your emotional richness becomes not only moving, but sustainable.",
    reminder:
      "Your softness is a strength. Just remember that the most beautiful love is not only felt deeply, but lived gently and honestly in the present.",
  },

  retro_70s: {
    title: "The Retro 70s ✌️",
    summary:
      "Your soul belongs to the Retro 70s — expressive, free-spirited, and drawn to authenticity, color, and fearless self-expression.",
    desc1:
      "At heart, you seem connected to an era of movement, rebellion, creativity, and individuality. The Retro 70s carried a spirit of liberation, experimentation, and emotional honesty that still feels magnetic today. Something about that energy seems to match the way your soul wants to live.",
    desc2:
      "What makes this result powerful is your connection to freedom. You are likely someone who does not want life to feel boxed in, emotionally flat, or overly controlled. Your soul seems to crave expression, originality, and the ability to live in a way that feels real rather than overly polished or restricted.",
    meaning1:
      "This result often means your inner world is aligned with independence, boldness, warmth, and personal truth. You may naturally gravitate toward color, music, movement, unconventional beauty, and spaces where people are allowed to be fully themselves. You likely value authenticity more than approval.",
    meaning2:
      "Because of that, you may be someone who resists rigid expectations and feels most alive when you can move, create, speak honestly, and follow your own energy. Your soul may not want a life that looks perfect from the outside. It wants a life that feels true from the inside.",
    showUp1:
      "In daily life, this energy can show up as strong individuality, expressive style, openness to change, emotional candor, and a natural ability to make life feel warmer and more alive. You may be the kind of person who likes experimenting, following instinct, or bringing unexpected color into ordinary spaces.",
    showUp2:
      "You may also give others permission to loosen up and be more themselves. People may experience you as refreshing, lively, and hard to control in the best way. The challenge is making sure your need for freedom stays connected to direction and self-respect rather than becoming scattered or resistant to commitment.",
    strengths: "Freedom, originality, self-expression",
    strengthDetails:
      "Your strengths include authenticity, courage, warmth, adaptability, and the ability to live in a way that feels personally true. You often remind others that life does not have to be sterile, overly cautious, or overly performative. You bring color, motion, and emotional honesty wherever you go.",
    watchOut: "Resisting structure so strongly that you lose stability or focus",
    watchOutDetails:
      "What may feel difficult is distinguishing healthy freedom from avoidance of responsibility, stillness, or deeper commitment. Because your soul values openness so strongly, structure may sometimes feel confining even when it could support you. The goal is not to become less free. It is to build a life where your freedom can actually last.",
    bestMatch:
      "People and paths that respect your individuality while helping your energy stay grounded and directed",
    growth1:
      "Growth for you often begins when you realize that freedom becomes more powerful when it has form. Expression does not become less real when it is focused. In fact, some of your boldest gifts may flourish most when they are given a little structure and care.",
    growth2:
      "The healthiest version of this era energy is someone who stays vibrant, authentic, and creatively free while also learning how to commit to what truly matters. That is when your soul stops only wandering and begins building a life that feels both alive and lasting.",
    reminder:
      "Your originality is part of your magic. Just remember that true freedom grows strongest when it has something real to stand on.",
  },

  ancient_classical: {
    title: "The Ancient Classical World 🏛️",
    summary:
      "Your soul belongs to the Ancient Classical world — timeless, wise, and deeply drawn to meaning, balance, and enduring beauty.",
    desc1:
      "At your core, you seem connected to a world shaped by philosophy, myth, structure, and the search for what lasts. The Ancient Classical era carries a sense of dignity, contemplation, and timeless proportion. Something in that atmosphere seems to mirror the way your soul understands beauty and meaning.",
    desc2:
      "What makes this result powerful is your connection to what is enduring. You are likely someone who seeks more than trends, noise, or temporary excitement. Your soul seems to crave truth, balance, significance, and a life that feels rooted in something deeper than the surface of the moment.",
    meaning1:
      "This result often means your inner world is naturally aligned with wisdom, order, symbolic depth, and the search for lasting truths. You may feel drawn to mythology, history, ethics, architecture, timeless stories, or any form of beauty that feels noble, elegant, and deeply considered.",
    meaning2:
      "Because of that, you may be someone who values clarity, integrity, and substance. You may not be easily impressed by what is shallow or fashionable. Instead, your soul likely respects things that endure: ideas with weight, beauty with structure, and people whose character feels grounded and real.",
    showUp1:
      "In everyday life, this energy can show up as composure, love of learning, emotional steadiness, attraction to timeless aesthetics, and a desire to live according to values that feel meaningful. You may be the kind of person who seeks perspective before reacting and who values substance over spectacle.",
    showUp2:
      "You may also bring a grounding and stabilizing energy into the lives of others. People may experience you as wise, calm, thoughtful, and quietly strong. The challenge is making sure your love of timelessness does not become rigidity or emotional distance from the unpredictable parts of real life.",
    strengths: "Wisdom, balance, timeless perspective",
    strengthDetails:
      "Your strengths include discernment, dignity, steadiness, reflective depth, and the ability to see beyond temporary noise. You often remind people that not everything of value is loud, fast, or new. Your presence can make life feel more meaningful, ordered, and connected to something lasting.",
    watchOut: "Becoming overly rigid, detached, or idealistic about order",
    watchOutDetails:
      "What may feel difficult is allowing life to stay human, messy, and emotionally alive instead of needing everything to make perfect sense. Because you value structure and meaning, disorder may feel especially uncomfortable. The goal is not to become less wise. It is to let wisdom stay flexible enough to hold real life.",
    bestMatch:
      "People and paths that value integrity, depth, timeless beauty, and a grounded sense of meaning",
    growth1:
      "Growth for you often begins when you remember that balance is not the absence of feeling. True wisdom can hold emotion, change, and uncertainty without losing itself. Your soul does not need to abandon its love of order. It simply needs to make room for life to remain alive.",
    growth2:
      "The healthiest version of this era energy is someone who keeps their dignity, depth, and timeless values while also staying emotionally present and open to growth. That is when your wisdom becomes not only admirable, but deeply human.",
    reminder:
      "Your soul carries something timeless. Just remember that even the strongest pillars are meant to support life, not keep it at a distance.",
  },

  future_neon: {
    title: "The Future Neon Age 🌃",
    summary:
      "Your soul belongs to a Future Neon Age — visionary, restless, and drawn to reinvention, possibility, and the thrill of what has not existed yet.",
    desc1:
      "At heart, you seem emotionally connected to a world of movement, technology, reinvention, and glowing possibility. The Future Neon Age is not about cold machinery alone. It is about imagination meeting evolution, identity meeting change, and the feeling that reality can be redesigned into something new.",
    desc2:
      "What makes this result powerful is your connection to the unknown. You are likely someone who feels pulled forward rather than backward, energized by what could be built, transformed, or reimagined. Your soul seems to crave motion, originality, and the sense that life should keep evolving.",
    meaning1:
      "This result often means your inner world is aligned with innovation, change, individuality, and the atmosphere of becoming. You may naturally be drawn to futuristic aesthetics, digital culture, unusual ideas, bold reinvention, or any environment that feels experimental and full of potential. You likely feel most alive when something is moving.",
    meaning2:
      "Because of that, you may be someone who becomes restless when life feels repetitive, overly traditional, or emotionally stagnant. Your soul may not want to preserve the old simply because it is familiar. It wants to imagine what comes next and live close to the edge of possibility.",
    showUp1:
      "In everyday life, this energy can show up as originality, adaptability, fascination with change, personal reinvention, and a strong pull toward what feels ahead of its time. You may be the kind of person who gets excited by ideas, identities, or creative directions that other people do not fully understand yet.",
    showUp2:
      "You may also change the energy of a room simply by bringing a more forward-looking perspective. People may experience you as unusual, visionary, exciting, or impossible to pin down. The challenge is making sure your hunger for reinvention stays rooted enough to become sustainable rather than constant drift.",
    strengths: "Vision, reinvention, possibility",
    strengthDetails:
      "Your strengths include innovation, intuition for change, imaginative thinking, and the ability to sense what wants to emerge next. You often remind people that life is not fixed and identity is not static. That makes your presence powerful in times of transition, creativity, and new beginnings.",
    watchOut: "Constantly chasing the next version of life without enough grounding",
    watchOutDetails:
      "What may feel difficult is staying with one path long enough for it to deepen. Because your soul is so connected to movement and possibility, stability may sometimes feel boring or limiting even when it could help your vision take real form. The goal is not to become less visionary. It is to let your future have roots.",
    bestMatch:
      "People and paths that welcome change, creativity, and bold evolution while still offering enough grounding to help your vision last",
    growth1:
      "Growth for you often begins when you realize that reinvention is most powerful when it is integrated. You do not need to constantly abandon yourself to become new. Sometimes the future you are searching for grows best when you stay long enough to build it from where you already are.",
    growth2:
      "The healthiest version of this era energy is someone who remains imaginative, unconventional, and open to transformation while also learning how to stay present through the slower work of embodiment. That is when your future stops being only a fantasy and starts becoming real.",
    reminder:
      "Your soul was made to imagine what comes next. Just remember that even neon needs something solid to glow against.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "roaring_20s";
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
          Era Personality Result
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

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What this era means
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
            How this energy can show up in your life
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
            Growth path
          </h2>

          <p>{r.growth1}</p>
          <p>{r.growth2}</p>

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
            href="/quiz/era-matches-your-soul"
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

export default function EraMatchesYourSoulResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}