"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  main_character: {
    title: "Main Character Energy 🎬",
    summary:
      "Your online vibe feels cinematic, magnetic, and impossible to scroll past too quickly.",
    desc1:
      "You naturally give off a presence that feels a little larger than the moment. Even when you are posting something simple, people often feel a sense of style, identity, and emotional atmosphere around it. Your online energy suggests that you are not just sharing content. You are curating a world.",
    desc2:
      "What makes this vibe powerful is not just attractiveness. It is presence. You can make ordinary moments feel memorable, emotionally charged, or aesthetically meaningful. People often sense that there is a story around you, and that feeling keeps them watching.",
    meaning1:
      "This result often means your digital presence is shaped by mood, confidence, timing, and self-awareness. You may not always be trying to stand out, but something about your energy naturally frames your life as visually or emotionally interesting.",
    meaning2:
      "Because of that, people may project a lot onto you. They may assume you are more confident, more put together, or more effortlessly iconic than you actually feel. That can be flattering, but it can also create pressure to keep the image glowing.",
    showUp1:
      "In everyday posting, this vibe can show up through visually strong photos, selective sharing, polished details, clean captions, or moments that feel emotionally bigger than they technically are. You often know how to make a post feel like a scene.",
    showUp2:
      "Even your quieter content may still feel intentional. That sense of intention is a big part of your charm. The challenge is making sure you do not start feeling like you must always perform beauty, meaning, or impact just to be seen.",
    strengths: "Presence, style, memorability",
    strengthDetails:
      "Your strengths include emotional atmosphere, visual instinct, strong identity, and the ability to create impact without saying too much. You often leave an impression quickly, and that kind of presence is rare in crowded online spaces.",
    watchOut: "Feeling pressure to maintain an image at all times",
    watchOutDetails:
      "What may feel difficult is separating your real self from the version of you that looks beautiful from the outside. If the pressure grows too much, online expression can start to feel performative instead of alive. Your energy is strongest when it still feels human beneath the glow.",
    bestMatch:
      "Spaces and people who appreciate your presence without needing you to always perform",
    growth1:
      "Growth for you often means letting your online energy stay powerful without forcing it to stay perfect. A real presence is more lasting than a flawless image.",
    growth2:
      "The healthiest version of your vibe is still magnetic, still beautiful, and still memorable, but it also leaves room for honesty, softness, and unpolished life.",
    reminder:
      "You do not have to turn every moment into a scene to be unforgettable. Your presence already speaks.",
  },

  soft_mysterious: {
    title: "Soft Mysterious Energy 🌙",
    summary:
      "Your online vibe feels quiet, dreamy, and just hard enough to read that people keep wondering about you.",
    desc1:
      "You tend to give off an energy that feels gentle on the surface but layered underneath. There is often something subtle, private, or emotionally hidden about the way you appear online. Even when you post, it can feel like people are only seeing a small part of the full picture.",
    desc2:
      "What makes this vibe powerful is emotional intrigue. You do not need to be loud to be memorable. In fact, your restraint may be what makes your energy feel so magnetic. People often sense mood, softness, and depth without being able to explain exactly why.",
    meaning1:
      "This result often means your digital presence is shaped more by atmosphere than by explanation. You may be drawn to quiet details, low-key visuals, emotionally charged moments, or posting styles that feel more felt than fully explained.",
    meaning2:
      "Because of that, people may read you as elegant, distant, dreamy, artistic, or impossible to fully figure out. Sometimes they may romanticize your presence because mystery invites projection.",
    showUp1:
      "In everyday life, this vibe can show up through soft lighting, sparse captions, quiet photos, selective posting, emotional music, or a profile that feels cohesive without revealing too much. People often feel your mood before they feel your facts.",
    showUp2:
      "The challenge is that mystery can sometimes create distance. If you stay too hidden, people may admire your presence without ever feeling invited into it. Your softness is powerful, but it becomes even more powerful when it is allowed to connect.",
    strengths: "Atmosphere, subtle magnetism, emotional intrigue",
    strengthDetails:
      "Your strengths include restraint, mood, aesthetic sensitivity, and the ability to create a feeling without overexplaining yourself. You often stand out through emotional tone rather than volume, and that kind of quiet presence is deeply memorable.",
    watchOut: "Being admired from afar but misunderstood up close",
    watchOutDetails:
      "What may feel difficult is that people can project onto you instead of really knowing you. Sometimes mystery protects you, but sometimes it also keeps real connection at a distance. Not every truth has to stay hidden to remain beautiful.",
    bestMatch:
      "People and spaces that respect your privacy while still making room for real closeness",
    growth1:
      "Growth for you often means learning that openness does not destroy your mystery. It adds dimension to it.",
    growth2:
      "The healthiest version of your vibe is still soft, still rare, and still hard to forget, but it also allows warmth to reach the surface from time to time.",
    reminder:
      "Your quietness is part of your charm. Just remember that being known does not make you less special.",
  },

  fun_chaotic: {
    title: "Fun Chaotic Energy 😂",
    summary:
      "Your online vibe feels funny, spontaneous, and impossible to experience in a boring way.",
    desc1:
      "You naturally come across as entertaining, alive, and slightly unpredictable. Whether you are posting memes, reactions, random thoughts, or playful content, your energy feels human in a way that makes people instantly more relaxed. You make online spaces feel less stiff.",
    desc2:
      "What makes this vibe powerful is liveliness. You bring movement, humor, and surprise. Even when your content looks messy from the outside, it often carries strong personality. People remember how you made them feel, and with you, that feeling is usually amused, energized, or oddly comforted.",
    meaning1:
      "This result often means your digital presence is driven by personality more than polish. You may care less about looking perfect and more about being real, funny, reactive, or delightfully strange. That authenticity is a huge part of your appeal.",
    meaning2:
      "Because of that, people may feel like you are easy to approach. They may also underestimate your depth because humor can hide how observant or emotionally intelligent you actually are.",
    showUp1:
      "In everyday posting, this vibe can show up through memes, jokes, chaotic captions, odd screenshots, playful commentary, and content that feels impulsive but weirdly accurate. You often know how to make people react without forcing it.",
    showUp2:
      "The challenge is that if everything stays unserious, people may miss the fuller shape of who you are. The fun is real, but there is probably more tenderness and perception underneath it than others notice right away.",
    strengths: "Humor, spontaneity, approachability",
    strengthDetails:
      "Your strengths include making people laugh, reducing social tension, bringing personality into bland spaces, and creating a vibe that feels alive. You often make the internet feel more human simply by refusing to act overly polished.",
    watchOut: "Being seen only as funny when you are more than that",
    watchOutDetails:
      "What may feel difficult is being read as unserious all the time. Sometimes people enjoy your energy without realizing how much thought, emotion, or awareness lives underneath it. You deserve to be known for more than your punchlines.",
    bestMatch:
      "People and communities that love your humor but also recognize your depth",
    growth1:
      "Growth for you often means trusting that sincerity will not ruin your charm. It can actually make your energy even more powerful.",
    growth2:
      "The healthiest version of your vibe is still funny, still chaotic, and still lovable, but it also lets people see the person behind the joke.",
    reminder:
      "Your humor is a gift. Just do not hide your whole heart behind it.",
  },

  cool_unbothered: {
    title: "Cool Unbothered Energy 🖤",
    summary:
      "Your online vibe feels calm, detached, and effortlessly cool in a way that makes people notice you without you chasing attention.",
    desc1:
      "You tend to give off the feeling that you are not trying too hard, and that is exactly why people are drawn in. There is something composed, selective, and self-contained about your online presence. You often look like someone who posts because they want to, not because they need validation.",
    desc2:
      "What makes this vibe powerful is control. You create distance in a way that can feel stylish, clean, and emotionally strong. People may see you as someone who knows their own energy and does not hand it out too easily.",
    meaning1:
      "This result often means your digital presence is shaped by restraint, selectiveness, and low-pressure confidence. You may not post constantly, overexplain yourself, or seek reaction in obvious ways. That can make your energy feel expensive, steady, or a little intimidating.",
    meaning2:
      "Because of that, people may interpret you as cooler, less affected, or more emotionally guarded than you actually are. Sometimes what feels like calm to you may read as distance to others.",
    showUp1:
      "In everyday life, this vibe can show up through minimal captions, low-key posting, clean aesthetics, casual confidence, or disappearing for long stretches without explanation. Your presence often suggests that your life continues just fine with or without attention.",
    showUp2:
      "The challenge is that coolness can sometimes block warmth. If people only feel your distance, they may admire you while still feeling unsure whether there is room to approach.",
    strengths: "Composure, selectiveness, effortless cool",
    strengthDetails:
      "Your strengths include emotional control, clean self-presentation, understated confidence, and a style of presence that does not beg to be noticed in order to be felt. That kind of quiet command is powerful.",
    watchOut: "Coming across more closed off than you mean to",
    watchOutDetails:
      "What may feel difficult is that too much distance can make people assume you do not care, even when you do. Sometimes letting a little warmth through does not weaken your vibe. It makes it more dimensional.",
    bestMatch:
      "People and spaces that respect your independence without mistaking it for emptiness",
    growth1:
      "Growth for you often means learning that warmth and coolness can coexist. You do not need to lose your edge to become more reachable.",
    growth2:
      "The healthiest version of your vibe stays composed and self-possessed, but also makes room for connection, humor, and softness when it matters.",
    reminder:
      "Your calm is powerful. Just do not let distance speak for your whole heart.",
  },

  thoughtful_deep: {
    title: "Thoughtful Deep Energy 📖",
    summary:
      "Your online vibe feels reflective, intelligent, and emotionally deeper than most people expect at first glance.",
    desc1:
      "You naturally come across as someone who thinks, feels, and notices more than they say right away. Your online presence often carries meaning beneath the surface, whether through your captions, the things you choose to share, or the emotional tone of your content.",
    desc2:
      "What makes this vibe powerful is depth. In a digital world that often moves quickly and lightly, your presence can feel grounding. People may feel that there is something sincere, layered, and real about the way you exist online.",
    meaning1:
      "This result often means your digital energy is shaped by reflection rather than impulse. You may care about meaning, honesty, emotional nuance, or ideas that have some weight behind them. Even your quieter posts may carry more feeling than others realize.",
    meaning2:
      "Because of that, people may see you as wise, introspective, emotionally intelligent, or surprisingly profound. They may also come to you when they want something that feels more real than surface-level noise.",
    showUp1:
      "In everyday posting, this vibe can show up through thoughtful captions, subtle honesty, emotionally resonant photos, bookish or reflective energy, and a tendency to share things that actually say something. Your content may feel slower, but it often feels fuller too.",
    showUp2:
      "The challenge is that depth can become heaviness if you feel like everything must be meaningful. You are allowed to be playful too. Not every moment has to carry a lesson to still be worth sharing.",
    strengths: "Depth, sincerity, emotional intelligence",
    strengthDetails:
      "Your strengths include nuance, honesty, perspective, and the ability to make people pause in a space designed for speed. You often bring thoughtfulness into places that would otherwise feel shallow or disposable.",
    watchOut: "Overthinking your expression or feeling too heavy for fast spaces",
    watchOutDetails:
      "What may feel difficult is that the internet does not always reward slowness, subtlety, or emotional complexity. That does not make your energy less valuable. It just means your presence is offering something rarer.",
    bestMatch:
      "People and communities that value sincerity, reflection, and emotional substance",
    growth1:
      "Growth for you often means trusting that your depth does not need to become simpler in order to connect. It just needs room to breathe.",
    growth2:
      "The healthiest version of your vibe remains thoughtful and real, but also knows how to stay light enough to enjoy being seen.",
    reminder:
      "Your depth is not too much. It is part of what makes your presence feel meaningful.",
  },

  sweet_safe: {
    title: "Sweet Safe Energy ☁️",
    summary:
      "Your online vibe feels warm, gentle, and emotionally safe in a way that makes people feel softer around you.",
    desc1:
      "You naturally come across as kind, comforting, and easy to be around. Even through a screen, your presence can feel reassuring. There is often a sweetness in the way you post, respond, or exist online that makes people feel welcomed rather than judged.",
    desc2:
      "What makes this vibe powerful is emotional softness. You bring calm into spaces that can often feel noisy, performative, or harsh. People may feel that you are sincere, affectionate, and safe in a way that is quietly rare.",
    meaning1:
      "This result often means your digital presence is shaped by warmth, tenderness, and emotional steadiness. You may be drawn to small joys, cozy details, gentle humor, or content that feels human rather than hyper-curated.",
    meaning2:
      "Because of that, people may feel comfortable with you quickly. They may trust you, open up to you, or associate your online presence with relief. That is a beautiful kind of energy to carry.",
    showUp1:
      "In everyday life, this vibe can show up through supportive comments, soft visuals, cute details, comforting captions, and a natural instinct to make space feel kinder. Your presence often feels more like a safe room than a stage.",
    showUp2:
      "The challenge is that sweetness can sometimes be mistaken for simplicity. People may not immediately notice your strength because your warmth reaches them first.",
    strengths: "Warmth, comfort, emotional safety",
    strengthDetails:
      "Your strengths include kindness, consistency, tenderness, and the ability to make people feel less alone. You often create a digital atmosphere that feels healing without needing to announce itself loudly.",
    watchOut: "Being underestimated because your energy is gentle",
    watchOutDetails:
      "What may feel difficult is that some people may read your softness as passivity or assume there is nothing deeper underneath it. But softness is not emptiness. It is often emotional strength in a gentler form.",
    bestMatch:
      "People and spaces that treasure your warmth and treat your softness with care",
    growth1:
      "Growth for you often means remembering that being safe does not mean being invisible. Your warmth deserves to take up space too.",
    growth2:
      "The healthiest version of your vibe stays kind and comforting, but also trusts its own voice, boundaries, and presence.",
    reminder:
      "Your softness changes more than you realize. Do not underestimate the power of being a safe place.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "main_character";
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
          Online Vibe Result
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
            What this vibe means
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
            How this energy shows up online
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
            href="/quiz/online-vibe"
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

export default function OnlineVibeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}