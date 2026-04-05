"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  quiet: {
    title: "Quiet Confidence 🌙",
    summary:
      "At heart, your confidence is quiet — calm, self-assured, and rooted in an inner sense of worth that does not need constant attention.",
    desc1:
      "Your confidence tends to come from within rather than from performance. You do not always need to be the loudest person in the room, and you probably do not rely on constant praise to feel secure in yourself. Instead, your strength often shows up as composure, self-possession, and a calm certainty that speaks for itself.",
    desc2:
      "What makes this kind of confidence powerful is its steadiness. Quiet confidence does not rush to prove anything. It remains solid even when the world becomes noisy, competitive, or uncertain. Your gift is the ability to trust yourself without turning your self-worth into a public performance.",
    meaning1:
      "This result often means your confidence is deeply connected to inner stability. You may not always feel the need to announce your strengths, but that does not mean they are small. In fact, your self-trust may be strongest precisely because it does not depend too heavily on outside reaction. You know who you are in a way that feels calm rather than dramatic.",
    meaning2:
      "Because of that, you may come across as grounded, emotionally contained, and difficult to shake. People may trust your presence because it feels real rather than exaggerated. At the same time, your confidence can sometimes be underestimated in a world that often rewards visibility over depth. Your strength is not always flashy, but it is often more durable than it first appears.",
    showUp1:
      "In real life, this confidence can show up as calm body language, thoughtful speech, emotional steadiness, and the ability to remain centered in situations that make others overreact. You may be the kind of person who rarely needs to dominate a room, yet still leaves a strong impression because your presence feels secure and unforced.",
    showUp2:
      "You may also be someone who trusts your own pace, listens carefully before speaking, and values self-respect over attention. The challenge is making sure your quiet strength does not become invisibility. Sometimes confidence also needs expression, not because your worth depends on being seen, but because your voice deserves space too.",
    strengths: "Inner calm, self-possession, emotional steadiness",
    strengthDetails:
      "Your greatest strengths include composure, self-respect, patience, and the ability to stay grounded without chasing validation. You often bring a stabilizing energy into situations that feel uncertain or emotionally loud. Your confidence can help other people feel safer because it shows that strength does not always need to be aggressive to be real.",
    watchOut: "Hiding too much or letting others overlook your value",
    watchOutDetails:
      "What may feel difficult is making sure your confidence remains visible enough to support your growth. Because you do not always seek attention, there may be times when other people fail to recognize your value quickly. The goal is not to become louder than you are. It is to let your quiet confidence be expressed clearly enough that it can open doors rather than stay hidden behind restraint.",
    bestMatch:
      "People and paths that respect depth, calm self-trust, and steady presence",
    growth1:
      "Growth for you often begins when you realize that visible confidence does not have to feel false. You can still be calm, thoughtful, and grounded while taking up more room in the world. Expression does not cancel sincerity. It can actually help your inner certainty become more effective and fully lived.",
    growth2:
      "The healthiest version of your confidence is not one that stays silent forever. It is one that remains peaceful inside while also knowing when to speak, act, and let your worth be seen. That is when your quiet strength becomes not only stabilizing, but deeply influential.",
    reminder:
      "You do not need to be loud to be powerful. Just remember that your calm strength deserves to be seen too.",
  },

  magnetic: {
    title: "Magnetic Confidence ✨",
    summary:
      "At heart, your confidence is magnetic — expressive, captivating, and naturally able to draw people in with your energy.",
    desc1:
      "Your confidence tends to show up through presence. There is something about the way you carry yourself, speak, connect, or express emotion that people notice. You may naturally light up a room, influence atmosphere, or make others feel your energy before they can fully explain why. Your strength often feels social, alive, and impossible to ignore.",
    desc2:
      "What makes this kind of confidence powerful is its ability to create movement. Magnetic confidence is not only about being liked. It is about having an energy that affects the people around you. Your gift is making things feel more vivid, engaging, and emotionally alive simply through how you show up.",
    meaning1:
      "This result often means your self-trust is closely tied to expression, connection, and energetic presence. You may feel strongest when you are able to be fully yourself in ways that are visible, warm, and emotionally dynamic. Part of your confidence may come from knowing that your energy matters and that your presence can shift the room around you.",
    meaning2:
      "Because of that, you may be someone who inspires attention naturally. People may experience you as charming, memorable, and full of personality. That can be a powerful gift in relationships, creativity, leadership, and social environments. At the same time, there may be moments when your confidence becomes too dependent on response, validation, or being felt by others in obvious ways.",
    showUp1:
      "In daily life, this confidence can show up as strong social energy, expressive communication, emotional openness, charisma, and the ability to make people feel engaged. You may be the kind of person who can energize a group, make others feel seen quickly, or leave a strong emotional impression without even trying too hard.",
    showUp2:
      "You may also bring inspiration and warmth into situations that would otherwise feel flat. Your presence can make life feel more vivid. The challenge is making sure your magnetism stays rooted in something real rather than becoming a performance built only to maintain attention or approval.",
    strengths: "Charisma, expressiveness, influence",
    strengthDetails:
      "Your strengths include social presence, emotional impact, warmth, and the ability to create connection through the way you show up. You often help people feel more awake, more included, or more emotionally engaged. That kind of confidence can be powerful because it does not only affect you. It changes the emotional atmosphere around you.",
    watchOut: "Relying too much on attention, response, or visible impact",
    watchOutDetails:
      "What may feel difficult is separating true confidence from the need to be constantly mirrored by others. Because your confidence is so connected to energy and presence, there may be moments when silence, distance, or lack of reaction feels more personal than it really is. The goal is not to become less expressive. It is to make sure your magnetism is supported by inner grounding too.",
    bestMatch:
      "People and paths that appreciate your energy while also helping you stay rooted",
    growth1:
      "Growth for you often begins when you realize that your power does not disappear in stillness. You do not stop being magnetic just because a room is quiet or because not everyone responds immediately. Your energy is real, but it becomes healthier when it is anchored in self-worth rather than constant feedback.",
    growth2:
      "The healthiest Magnetic Confidence is not exhausting or attention-hungry. It is radiant and rooted. It knows how to shine, connect, and influence without needing every moment to become a reflection of its value. That balance is what turns your natural charisma into lasting strength.",
    reminder:
      "Your presence is powerful. Just remember that your light is real even when no one is clapping for it.",
  },

  resilient: {
    title: "Resilient Confidence 🌿",
    summary:
      "At heart, your confidence is resilient — strong, enduring, and built from knowing that you can survive more than most people realize.",
    desc1:
      "Your confidence often comes from experience rather than ease. You trust yourself because life has tested you, and you have learned that you can keep going even when things become painful, uncertain, or unfair. Instead of falling apart at every setback, something in you grows stronger through being challenged.",
    desc2:
      "What makes this kind of confidence powerful is endurance. Resilient confidence is not naive. It knows hardship exists, but it also knows that hardship does not always have the final word. Your gift is the ability to stay standing, recover, and keep moving even after disappointment, loss, or emotional strain.",
    meaning1:
      "This result often means your self-trust has been shaped through overcoming. You may not always feel flashy or effortlessly bold, but there is a deep part of you that knows how to continue. That knowledge can become one of the strongest forms of confidence because it is rooted in lived proof rather than only belief.",
    meaning2:
      "Because of that, you may feel strongest in situations that require patience, emotional toughness, and long-term endurance. People may trust you because your confidence feels battle-tested and real. At the same time, there may be moments when you become so identified with survival that softness, rest, or vulnerability begin to feel unfamiliar or unsafe.",
    showUp1:
      "In real life, this confidence can show up as persistence, emotional durability, quiet courage, and the ability to stay steady when others lose hope. You may be the kind of person who does not collapse easily under pressure because you have already learned how to keep breathing through difficulty.",
    showUp2:
      "You may also become a source of strength for others, especially in painful seasons, because your presence carries proof that survival is possible. The challenge is making sure your resilience does not become your only identity. You are more than what you can endure.",
    strengths: "Endurance, recovery, emotional toughness",
    strengthDetails:
      "Your greatest strengths include perseverance, strength under pressure, realism, and the ability to rebuild after things fall apart. You often carry a form of confidence that is trustworthy because it has already been tested by life. That kind of inner durability can be deeply stabilizing, not only for you but for the people around you too.",
    watchOut: "Living in survival mode too long or mistaking toughness for healing",
    watchOutDetails:
      "What may feel difficult is allowing yourself to move beyond pure endurance. Because your confidence is built through survival, there may be times when resting feels risky, softness feels weak, or healing feels less familiar than pushing through. The goal is not to lose your resilience. It is to let that strength support a fuller, gentler life rather than only ongoing survival.",
    bestMatch:
      "People and paths that honor your strength while making room for softness and recovery",
    growth1:
      "Growth for you often begins when you realize that confidence is not only about getting through hard things. It can also be about receiving care, building peace, and trusting that life does not always have to be a test. Strength becomes more complete when it includes rest as well as endurance.",
    growth2:
      "The healthiest Resilient Confidence is not trapped in struggle. It still knows how to survive, but it also learns how to feel safe, open, and fully alive beyond hardship. That is when your strength stops being only protective and starts becoming deeply restorative too.",
    reminder:
      "You have survived a lot, and that matters. Just remember that your life is meant to be more than endless endurance.",
  },

  fearless: {
    title: "Fearless Confidence 🔥",
    summary:
      "At heart, your confidence is fearless — bold, action-driven, and willing to move before certainty completely arrives.",
    desc1:
      "Your confidence often shows up through action. You tend to trust movement more than hesitation, and you may feel strongest when you are taking risks, making decisions, or stepping into the unknown with courage. Even if fear exists, it does not always control you for long. Something in you would rather move forward than stay trapped in doubt.",
    desc2:
      "What makes this kind of confidence powerful is bravery. Fearless confidence is not necessarily the absence of fear. It is the willingness to act anyway. Your gift is momentum, boldness, and the ability to create possibility by refusing to wait forever for perfect certainty.",
    meaning1:
      "This result often means your self-trust is connected to initiative. You may believe most strongly in yourself when you are doing, deciding, attempting, and moving. Confidence for you may feel less like sitting still and more like proving to yourself that you can handle what happens once you begin.",
    meaning2:
      "Because of that, you may come across as daring, decisive, and powerful in uncertain situations. People may admire the fact that you are willing to go first or move when others are still hesitating. At the same time, there may be moments when speed becomes a shield against reflection, or when boldness covers a fear of stillness, vulnerability, or patience.",
    showUp1:
      "In everyday life, this confidence can show up as risk-taking, quick decisions, strong initiative, direct communication, and the instinct to face situations head-on. You may be the person who volunteers first, tries before overthinking, or pushes forward when a moment calls for courage rather than endless analysis.",
    showUp2:
      "You may also bring motivating energy into the lives of others because your willingness to move can be contagious. The challenge is learning that courage is not only about speed. Sometimes the strongest thing is not rushing ahead, but staying present long enough to choose direction with clarity.",
    strengths: "Boldness, initiative, courageous action",
    strengthDetails:
      "Your strengths include bravery, decisiveness, momentum, and the ability to turn uncertainty into movement. You often create opportunities simply because you are willing to begin before everything feels guaranteed. That makes your confidence powerful in situations where action, leadership, and risk tolerance matter.",
    watchOut: "Moving too fast, avoiding reflection, or treating pause as weakness",
    watchOutDetails:
      "What may feel difficult is knowing when action is wisdom and when it is escape. Because your confidence is so connected to movement, there may be times when slowing down feels frustrating or even threatening. The goal is not to become less bold. It is to make sure your courage has direction, reflection, and emotional honesty behind it.",
    bestMatch:
      "People and paths that respect your bravery while helping you stay thoughtful and aligned",
    growth1:
      "Growth for you often begins when you realize that patience does not cancel courage. In fact, some of the strongest confidence in the world is not impulsive. It is deliberate. You do not lose your edge by pausing. You sharpen it.",
    growth2:
      "The healthiest Fearless Confidence is not reckless or constantly rushing. It is brave, intentional, and able to act without being ruled by urgency. That is when your boldness becomes not just impressive, but deeply trustworthy too.",
    reminder:
      "Your courage is real. Just remember that the strongest action is not always the fastest one.",
  },

  grounded: {
    title: "Grounded Confidence 🪴",
    summary:
      "At heart, your confidence is grounded — steady, practical, and rooted in emotional balance, self-trust, and inner stability.",
    desc1:
      "Your confidence often comes from feeling centered. You may trust yourself most when things are clear, real, and emotionally stable rather than dramatic or overstimulating. Instead of chasing extreme highs, you are often strongest when your feet feel firmly on the ground and your inner world feels aligned.",
    desc2:
      "What makes this kind of confidence powerful is reliability. Grounded confidence creates safety, steadiness, and trust over time. Your gift is not simply feeling secure. It is helping life feel more stable, manageable, and real through the way you carry yourself.",
    meaning1:
      "This result often means your self-trust is deeply connected to balance. You may not want confidence that feels performative, chaotic, or inflated. Instead, you likely value a kind of strength that feels sustainable. You trust what has roots, what can hold up under pressure, and what remains real even after emotion settles.",
    meaning2:
      "Because of that, you may be someone who feels strongest when you are aligned with your values, routines, responsibilities, and real sense of self. People may experience you as calm, dependable, and reassuring. At the same time, there may be moments when your need for stability makes it harder to take risks, trust uncertainty, or move toward possibilities that have not fully proven themselves yet.",
    showUp1:
      "In daily life, this confidence can show up as calm decision-making, consistency, patience, realism, and a strong ability to stay emotionally centered. You may be the kind of person who does not get swept away easily because your confidence is rooted in what feels solid and true rather than in momentary reaction.",
    showUp2:
      "You may also become an anchor for others because your presence often feels safe and reliable. That is one of your gifts. The challenge is making sure your steadiness does not turn into staying too long in places that are familiar but no longer growing you.",
    strengths: "Stability, balance, dependable self-trust",
    strengthDetails:
      "Your strengths include reliability, emotional regulation, practical wisdom, and the ability to create calm in the middle of pressure. You often make things feel more manageable simply by remaining centered. That form of confidence can be deeply powerful because it allows you to act from steadiness rather than from panic, ego, or impulse.",
    watchOut: "Playing it too safe or resisting growth that feels uncertain",
    watchOutDetails:
      "What may feel difficult is knowing when stability is healthy and when it becomes limitation. Because your confidence is so rooted in groundedness, there may be times when unpredictability feels more threatening than it truly is. The goal is not to abandon your stability. It is to let that stability support meaningful growth rather than protect you from all change.",
    bestMatch:
      "People and paths that value steadiness while still inviting healthy growth and possibility",
    growth1:
      "Growth for you often begins when you trust that being grounded does not mean staying still forever. In fact, the strongest roots are the ones that allow life to keep growing upward. Stability can be a foundation, not a boundary.",
    growth2:
      "The healthiest Grounded Confidence is not rigid or overly cautious. It is steady enough to remain centered and flexible enough to evolve. That is when your calm strength becomes not only safe, but quietly transformative too.",
    reminder:
      "Your steadiness is a gift. Just remember that real stability can also make room for growth.",
  },

  visionary: {
    title: "Visionary Confidence 🌟",
    summary:
      "At heart, your confidence is visionary — future-focused, inspiring, and rooted in the belief that something greater is possible.",
    desc1:
      "Your confidence often comes from possibility. You may feel strongest when you can sense what could be created, changed, or built beyond the current moment. Instead of being defined only by what already exists, your self-trust is often linked to imagination, direction, and the ability to move toward a bigger picture.",
    desc2:
      "What makes this kind of confidence powerful is inspiration. Visionary confidence helps people see beyond limits, stagnation, or ordinary expectations. Your gift is sensing potential and trusting that life can expand into something more meaningful, aligned, or powerful than what is visible right now.",
    meaning1:
      "This result often means your self-trust is deeply tied to purpose, creativity, and the future. You may not always feel most alive in routines or fixed structures. Instead, your confidence may grow when you are imagining, leading, creating, or moving toward a direction that feels larger than the present moment. Something in you believes that possibility matters.",
    meaning2:
      "Because of that, you may be someone who naturally inspires movement in others. People may feel energized by your ideas, your perspective, or your belief in what could happen next. At the same time, there may be moments when vision becomes untethered from structure, or when hope outruns practicality enough to leave you scattered, impatient, or disconnected from what needs to happen step by step.",
    showUp1:
      "In daily life, this confidence can show up as ambition, imagination, future-oriented thinking, emotional inspiration, and the ability to keep moving toward a meaningful picture even before others fully see it. You may be the person who notices potential early, believes in change deeply, or pushes life beyond what feels small and predictable.",
    showUp2:
      "You may also bring a sense of expansion into the lives of others because your confidence reminds people that life is not fixed. The challenge is making sure your vision has enough grounding to become real. Possibility is powerful, but it needs form in order to last.",
    strengths: "Inspiration, imagination, sense of possibility",
    strengthDetails:
      "Your strengths include creativity, optimism, motivating energy, and the ability to believe in something before it fully exists. You often help others reconnect with purpose, direction, or hope because your confidence naturally stretches beyond immediate limitation. That makes your presence powerful in moments that require reinvention, leadership, or belief.",
    watchOut: "Getting too far ahead of reality or struggling to ground ideas in action",
    watchOutDetails:
      "What may feel difficult is staying connected to process while you are excited by possibility. Because your confidence is so future-facing, there may be times when practical details feel frustrating, slow, or limiting. The goal is not to become less visionary. It is to give your vision enough structure, patience, and consistency that it can become lived reality rather than remain only inspiring potential.",
    bestMatch:
      "People and paths that support your vision while helping you build it in real life",
    growth1:
      "Growth for you often begins when you trust that structure does not destroy inspiration. It protects it. Vision becomes more powerful when it has rhythm, commitment, and grounded action behind it. Dreams become influence when they are embodied.",
    growth2:
      "The healthiest Visionary Confidence is not all momentum and imagination. It is inspired, yes, but also integrated. It knows how to see further while still honoring the steps required to get there. That is when your confidence becomes not only exciting, but deeply effective.",
    reminder:
      "Your vision is powerful. Just remember that what you imagine becomes strongest when you give it roots.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "quiet";
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
          Confidence Personality Result
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
            What this confidence means
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
            How this confidence can show up in your life
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
            href="/quiz/confidence-type"
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

export default function ConfidenceTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}