"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  sunshine: {
    title: "The Sunshine Comfort Character ☀️",
    summary:
      "At heart, you are the Sunshine Comfort Character — bright, uplifting, and naturally able to make people feel lighter just by being there.",
    desc1:
      "Your comfort style is rooted in warmth, hope, and emotional brightness. When life feels heavy, your presence often helps people breathe again. You may not always solve every problem directly, but you naturally remind others that softness, joy, and relief are still possible even in difficult moments.",
    desc2:
      "What makes this comfort type powerful is not superficial positivity, but emotional light. You know how to bring warmth without always forcing intensity, and that can be incredibly healing. Your gift is helping people feel less alone inside heaviness and more connected to hope, ease, and human warmth.",

    meaning1:
      "This result often means your emotional presence feels naturally uplifting to others. People may come away from conversations with you feeling calmer, brighter, or more emotionally open than before. Even when you are not trying to play that role, your energy may still remind people that life contains small moments of relief, humor, sweetness, and return.",
    meaning2:
      "Because of that, you may be someone who instinctively protects joy. You are often drawn toward warmth, kindness, tenderness, and emotional encouragement. That can make you deeply lovable and comforting. It can also create pressure if you begin to feel responsible for improving the atmosphere all the time or making sure others do not stay in pain too long.",

    showUp1:
      "In everyday life, this comfort energy may show up as playfulness, optimism, emotional generosity, easy affection, and the ability to make people smile without making them feel dismissed. You may be the kind of person whose texts, voice, laughter, or simple presence can change the tone of a room.",
    showUp2:
      "You may also comfort people by making life feel less sharp. Your gift is not necessarily to analyze every wound, but to soften emotional intensity enough that others can rest for a moment. The challenge is remembering that true comfort does not always mean bringing light immediately. Sometimes people also need you to stay with them in the dark without trying to fix the feeling too fast.",

    strengths: "Warmth, hope, emotional brightness",
    strengthDetails:
      "Your greatest strengths include emotional uplift, generosity of spirit, tenderness, and the ability to create relief without needing to control everything. You often remind people of their own light when they temporarily lose contact with it. That is a rare and meaningful kind of comfort because it gives people energy without demanding that they become someone else first.",

    watchOut: "Feeling pressured to stay positive or lighten every heavy moment",
    watchOutDetails:
      "What may feel difficult is giving yourself permission to be real when you are tired, sad, or emotionally flat. When your gift is emotional brightness, people may unconsciously expect you to keep carrying the warmth. Over time, that can become exhausting. The goal is not to stop being sunny. It is to remember that your comfort is deepest when it includes honesty, not only uplift.",

    bestMatch:
      "People and paths that appreciate your warmth while also making room for your own heavier feelings",
    growth1:
      "Growth for you often means learning that your light is strongest when it is not forced. You do not need to perform cheerfulness in order to be comforting. Sometimes your deepest gift appears when you remain warm without pretending everything is fine.",
    growth2:
      "The healthiest version of your comfort style is not fake positivity. It is grounded warmth. It is the ability to bring light while staying emotionally sincere, to create joy without denying pain, and to remind others of hope without abandoning reality.",

    reminder:
      "Your brightness is healing. Just remember that you do not have to glow every second to be loved.",
  },

  listener: {
    title: "The Listener Comfort Character 🎧",
    summary:
      "At heart, you are the Listener Comfort Character — calm, accepting, and deeply comforting because people feel truly heard around you.",
    desc1:
      "Your comfort style is rooted in emotional space. You are the kind of person who helps others exhale by simply listening without rushing, judging, or interrupting their truth. In a world full of noise, reactions, and quick opinions, your presence can feel incredibly rare because it gives people permission to be fully real.",
    desc2:
      "What makes this comfort type powerful is not passivity, but depth of attention. You create safety through understanding. Your gift is helping people feel seen in a way that is steady, human, and emotionally grounding. You may not always be the loudest comfort in the room, but you are often one of the most meaningful.",

    meaning1:
      "This result often means your emotional presence is naturally receptive. People may feel that they do not have to perform around you. They can speak in fragments, sit in silence, cry without explanation, or reveal what they really feel. That kind of acceptance is deeply comforting because it lowers emotional pressure.",
    meaning2:
      "Because of that, you may become someone others trust quickly. They may come to you not only for advice, but for the feeling of being understood without being managed. That is one of your greatest gifts. It can also become heavy if you keep absorbing emotions without checking whether you are being supported too.",

    showUp1:
      "In daily life, this comfort energy may show up as patience, thoughtful responses, nonjudgmental attention, emotional sensitivity, and a natural ability to notice what someone is trying to say beneath their words. You may be the person people text late at night when they need someone who will really listen.",
    showUp2:
      "You may also comfort others by creating room instead of filling it. Where some people try to fix, brighten, or redirect feelings, you often let emotion exist first. That is part of what makes you healing. The challenge is making sure your listening remains a gift rather than becoming a role where everyone empties into you while you quietly carry too much.",

    strengths: "Empathy, patience, emotional understanding",
    strengthDetails:
      "Your strengths include deep empathy, attention, calm emotional presence, and the ability to help people feel less alone in what they are carrying. You often offer a kind of comfort that cannot be faked because it comes from real presence. People may leave your company feeling clearer, steadier, or more emotionally human simply because you gave them space to exist.",

    watchOut: "Absorbing too much from others or neglecting your own emotional needs",
    watchOutDetails:
      "What may feel difficult is setting boundaries around how much you receive. Because you are so naturally understanding, others may lean on you heavily or assume you can always hold one more feeling, one more crisis, one more confession. Over time, this can lead to emotional fatigue, quiet resentment, or disconnection from your own inner life. Listening is a gift, but it still needs limits.",

    bestMatch:
      "People and paths that value emotional honesty, mutual care, and the kind of closeness built through real understanding",
    growth1:
      "Growth for you often begins when you remember that comfort should move both ways. You do not have to earn your place in relationships by always being the calm one, the wise one, or the one who can hold everything. You are allowed to need support too.",
    growth2:
      "The healthiest version of your comfort style is not endless availability. It is mutual emotional presence. It is the ability to listen deeply while also staying connected to your own needs, your own limits, and your own right to be heard.",

    reminder:
      "Your presence helps people feel real. Just remember that your own heart deserves the same listening you so freely give.",
  },

  protector: {
    title: "The Protector Comfort Character 🛡️",
    summary:
      "At heart, you are the Protector Comfort Character — steady, reliable, and deeply comforting because people feel safer when you are near.",
    desc1:
      "Your comfort style is rooted in safety, loyalty, and emotional dependability. When things feel unstable, your instinct is often to ground the moment, take care of what matters, and make sure no one has to carry the weight alone. You may not always express comfort in dramatic ways, but your steadiness speaks loudly.",
    desc2:
      "What makes this comfort type powerful is consistency. You offer reassurance not only through words, but through action, follow-through, and the feeling that you will still be there when things get hard. Your gift is helping people trust that emotional safety can be real, reliable, and lasting.",

    meaning1:
      "This result often means your emotional presence feels secure to others. You may be the one people rely on when things fall apart, when they need a strong presence nearby, or when they simply need someone who will not disappear under pressure. That reliability can be one of the most powerful forms of comfort there is.",
    meaning2:
      "Because of that, you may naturally orient yourself toward responsibility, protection, and care. You often notice what needs to be stabilized, handled, or made safer. That can make you deeply grounding and trustworthy. It can also become heavy if you start believing that you must always be the strong one or that your value depends on holding everything together.",

    showUp1:
      "In everyday life, this comfort energy may show up as practical help, loyalty, emotional steadiness, checking in consistently, remembering what matters, and protecting the people you care about in both visible and invisible ways. You may be the person who quietly makes sure everyone gets home safe, eats, rests, or feels supported.",
    showUp2:
      "You may also comfort others through your sheer presence. There is something deeply regulating about knowing someone dependable is nearby. Your challenge is making sure that your role as protector does not become emotional over-functioning. You are allowed to be supported too. Safety should not flow only outward from you.",

    strengths: "Loyalty, steadiness, emotional safety",
    strengthDetails:
      "Your strengths include consistency, devotion, practical care, emotional endurance, and the ability to create trust over time. People may feel calmer around you because your energy reduces uncertainty. That kind of comfort is invaluable. It tells others, often without needing many words, that they do not have to face things alone.",

    watchOut: "Carrying too much responsibility and forgetting your own softness",
    watchOutDetails:
      "What may feel difficult is letting yourself rest. Because you are capable, others may assume you can handle more than you should. Over time, this can become exhaustion, self-neglect, or a life organized entirely around being useful. The goal is not to become less dependable. It is to remember that the person offering safety also deserves safety.",

    bestMatch:
      "People and paths that respect your loyalty, appreciate your steadiness, and care for you without always expecting you to be the strongest person in the room",
    growth1:
      "Growth for you often means learning that protection includes yourself. Boundaries are not selfish. Rest is not failure. Being cared for does not make you weak. In fact, your strength becomes healthier when it no longer depends on constant self-sacrifice.",
    growth2:
      "The healthiest version of your comfort style is not overextension. It is balanced devotion. It is the ability to stay steady without disappearing into duty, to care without carrying everything alone, and to create safety that includes your own emotional life too.",

    reminder:
      "Your steadiness makes people feel safe. Just remember that you were never meant to be a shelter for everyone while standing in the storm alone.",
  },

  dreamy: {
    title: "The Soft Dream Comfort Character 🌙",
    summary:
      "At heart, you are the Soft Dream Comfort Character — gentle, tender, and comforting in a way that makes life feel quieter, softer, and easier to hold.",
    desc1:
      "Your comfort style is rooted in softness, atmosphere, and emotional gentleness. Rather than pushing, fixing, or analyzing too quickly, your energy tends to soften the edges of the world. People may feel calmer with you not because everything becomes solved, but because everything feels a little less sharp, a little more breathable, and a little more emotionally beautiful.",
    desc2:
      "What makes this comfort type powerful is emotional texture. You create an atmosphere that feels tender, safe, and almost dreamlike. Your gift is helping people rest emotionally, reconnect with softness, and remember that comfort can be quiet, slow, and deeply felt rather than loud or dramatic.",

    meaning1:
      "This result often means your presence carries a gentle emotional tone that others find soothing. You may bring comfort through softness in your voice, your way of speaking, your sensitivity to mood, your attention to emotional detail, or the peaceful feeling people get when they are around you.",
    meaning2:
      "Because of that, you may be someone who naturally protects tenderness. You likely care about emotional atmosphere, safety, and the little details that make a person feel less overwhelmed. That is a beautiful gift. It can also make you especially sensitive to harshness, conflict, or environments that feel too fast, cold, or emotionally rough.",

    showUp1:
      "In daily life, this comfort energy may show up as gentleness, sweetness, sensitivity, emotional softness, dreamy affection, and the ability to create calm without demanding attention. You may be the kind of person whose presence feels like quiet evening light, a soft blanket, or a place where people do not need armor.",
    showUp2:
      "You may also comfort others simply by reducing emotional friction. Your energy gives people a chance to unclench. The challenge is making sure your softness does not become self-erasure. You are allowed to have edges, needs, and firm boundaries even if your nature is tender.",

    strengths: "Softness, tenderness, emotional atmosphere",
    strengthDetails:
      "Your strengths include gentleness, aesthetic sensitivity, emotional soothing, and the ability to make life feel softer for others. You often offer a kind of comfort that is subtle but unforgettable. It lingers in how safe people felt, how quiet their nervous system became, or how their heart softened in your presence.",

    watchOut: "Becoming too accommodating or losing yourself in emotional softness",
    watchOutDetails:
      "What may feel difficult is protecting your own center when the world becomes too sharp. Because your gift is softness, you may sometimes avoid confrontation, absorb emotional energy too easily, or prioritize peace over your own truth. The goal is not to become harder. It is to let your softness stay protected by self-respect.",

    bestMatch:
      "People and paths that treasure tenderness, move with emotional care, and protect your softness rather than taking advantage of it",
    growth1:
      "Growth for you often means learning that softness and strength are not opposites. You do not lose your beauty by becoming clearer, firmer, or more grounded. In fact, your comfort becomes even more powerful when it is supported by boundaries.",
    growth2:
      "The healthiest version of your comfort style is not fragility. It is protected softness. It is the ability to remain gentle without disappearing, to offer peace without silencing yourself, and to create emotional beauty without losing your own shape.",

    reminder:
      "Your softness is a refuge. Just remember that even the gentlest heart deserves protection too.",
  },

  healer: {
    title: "The Healer Comfort Character 🌿",
    summary:
      "At heart, you are the Healer Comfort Character — nurturing, warm, and deeply comforting because your presence helps people emotionally recover.",
    desc1:
      "Your comfort style is rooted in care, tenderness, and emotional restoration. You are the kind of person whose warmth can help people slowly come back to themselves. You may naturally notice what hurts, what feels fragile, or what needs care, and your instinct is often to respond with patience, gentleness, and real emotional presence.",
    desc2:
      "What makes this comfort type powerful is healing energy. You do not only soothe the surface. You often make people feel cared for at a deeper level, as though they can rest, soften, and begin repairing inside your presence. Your gift is not just comfort. It is emotional renewal.",

    meaning1:
      "This result often means your presence feels restorative to others. People may feel safe enough around you to let down the parts of themselves that have been bracing for too long. Your energy may offer something like reassurance, compassion, and the sense that their pain does not make them difficult to love.",
    meaning2:
      "Because of that, you may become someone people turn to when they are wounded, exhausted, or emotionally lost. You likely carry a lot of natural empathy and tenderness. That is one of your greatest gifts. It can also become draining if you start to believe every hurt thing is yours to mend or every broken person is yours to carry.",

    showUp1:
      "In everyday life, this comfort energy may show up as nurturing language, patient care, emotional warmth, checking in, intuitive sensitivity, and the ability to make people feel held rather than judged. You may be the person who notices pain early and responds with the exact softness someone needed but did not know how to ask for.",
    showUp2:
      "You may also comfort others through the way you stay. Healing often requires steadiness, and you may naturally provide that through care that feels sincere and lasting. The challenge is making sure your healing energy remains generous rather than sacrificial. You are not here to disappear into everyone else’s recovery.",

    strengths: "Nurturing care, emotional warmth, restoration",
    strengthDetails:
      "Your strengths include compassion, gentleness, emotional intuition, and the ability to help people feel less damaged by what they have lived through. Your comfort often goes beyond making people feel better for a moment. It helps them feel softer, safer, and more reconnectable to themselves over time.",

    watchOut: "Taking on too much pain or confusing care with self-sacrifice",
    watchOutDetails:
      "What may feel difficult is knowing where healing presence ends and over-responsibility begins. Because you care so deeply, you may stay too long, give too much, or feel guilty when you cannot fix what hurts. That can lead to depletion. The goal is not to stop being healing. It is to stop believing healing requires your exhaustion.",

    bestMatch:
      "People and paths that honor your care, receive it with gratitude, and do not expect you to bleed just because you know how to soothe",
    growth1:
      "Growth for you often begins when you realize that compassion needs boundaries in order to stay alive. Your care becomes stronger when it is sustainable. Helping others recover should not mean abandoning your own energy, time, or peace.",
    growth2:
      "The healthiest version of your comfort style is not martyrdom. It is grounded nurturing. It is the ability to love tenderly without carrying everything, to support healing without taking ownership of it, and to remain warm while still staying whole.",

    reminder:
      "Your care helps people heal. Just remember that you are not meant to set yourself on fire to keep others warm.",
  },

  homebody: {
    title: "The Home Comfort Character 🏡",
    summary:
      "At heart, you are the Home Comfort Character — cozy, grounding, and deeply comforting because your presence feels like emotional home.",
    desc1:
      "Your comfort style is rooted in peace, familiarity, and the kind of care that makes people feel they can finally settle. You may not always comfort through intensity or dramatic expression. Instead, you create emotional rest through steadiness, coziness, consistency, and the feeling that nothing has to be performed around you.",
    desc2:
      "What makes this comfort type powerful is grounded warmth. You help people feel sheltered from the noise. Your gift is not only softness, but the ability to create an emotional environment where others can unclench, slow down, and simply be. Around you, life may feel more livable.",

    meaning1:
      "This result often means your presence feels deeply settling. People may associate you with peace, safety, warmth, routine, and the quiet reassurance of being accepted without pressure. You may be someone whose comfort comes from the feeling of emotional home rather than excitement or intensity.",
    meaning2:
      "Because of that, you may value calm, loyalty, familiarity, and the small rituals that make life feel more humane. Your comfort often lives in the details: the check-in, the softness, the consistency, the remembered preference, the stable tone. That is a beautiful kind of emotional gift. It can also make you overly responsible for maintaining peace if you are not careful.",

    showUp1:
      "In everyday life, this comfort energy may show up as cozy affection, practical care, grounding routines, emotional reliability, and the ability to make ordinary moments feel soothing. You may be the kind of person who turns a room into a refuge simply by how you inhabit it.",
    showUp2:
      "You may also comfort others by making life feel less chaotic. Your presence can communicate, without many words, that things are okay enough for now. The challenge is making sure your desire for peace does not become emotional self-silencing. Home should feel safe for you too, not only for everyone else.",

    strengths: "Coziness, groundedness, emotional rest",
    strengthDetails:
      "Your strengths include steadiness, calm care, consistency, and the rare ability to create emotional shelter through ordinary presence. You may not always receive attention for this because your comfort is not flashy. But it is deeply impactful. People often remember who made them feel at home in their own skin.",

    watchOut: "Over-prioritizing peace, comfort, or stability at the expense of your own truth",
    watchOutDetails:
      "What may feel difficult is disrupting harmony when something real needs to be said. Because you value emotional rest, you may avoid conflict, suppress needs, or over-function in order to keep everything smooth. Over time, that can create inner exhaustion. The goal is not to stop being grounding. It is to let peace include honesty too.",

    bestMatch:
      "People and paths that value calm, reciprocity, warmth, and the kind of connection that feels safe enough to fully settle into",
    growth1:
      "Growth for you often means learning that true comfort does not require self-erasure. You do not lose your grounded beauty by speaking up, needing more, or creating change. In fact, emotional home becomes more real when it includes truth.",
    growth2:
      "The healthiest version of your comfort style is not avoidance. It is honest peace. It is the ability to create rest without swallowing yourself, to offer calm without carrying all the emotional labor, and to make life feel like home while still belonging to yourself.",

    reminder:
      "Your presence feels like home. Just remember that home should be a place where your own heart can rest too.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "sunshine";
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
          Comfort Character Personality Result
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
            What this archetype means
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
            href="/quiz/comfort-character"
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

export default function ComfortCharacterResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}