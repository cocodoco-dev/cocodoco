"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  warm: {
    title: "Warm and Approachable ☀️",
    summary:
      "Your first impression feels warm and approachable — friendly, inviting, and easy for people to relax around right away.",
    desc1:
      "The energy you naturally give off makes people feel comfortable from the very beginning. There is something open, welcoming, and emotionally easy about your presence that helps others lower their guard. Even in a new setting, you often create the feeling that things are safe, kind, and human.",
    desc2:
      "What makes this first impression powerful is not loudness, but emotional accessibility. People tend to feel that you are someone they can talk to, trust, or simply feel at ease around. Your presence can soften awkwardness, ease tension, and make unfamiliar situations feel less cold or distant.",
    meaning1:
      "This result often means that your outward energy carries friendliness, sincerity, and emotional warmth. You may naturally smile with your eyes, speak with gentle openness, or simply have a presence that feels easy to approach. Even before people know your full personality, they often sense that you are kind-hearted and safe to be around.",
    meaning2:
      "Because of that, first meetings with you may feel lighter and more natural than people expect. You often make a strong impression not by dominating a room, but by making it feel more comfortable. That kind of energy is quietly powerful because it helps connection begin with less fear, hesitation, or formality.",
    showUp1:
      "In real life, this first impression can show up as being described as sweet, friendly, cheerful, easy to talk to, or naturally welcoming. People may find themselves opening up to you quickly, smiling more around you, or feeling an immediate sense of comfort even if they have only just met you.",
    showUp2:
      "You may also notice that others sometimes underestimate your depth because your warmth is what they notice first. But that does not make your impression shallow. In fact, it often becomes the reason deeper connection is possible. The challenge is making sure your kindness is appreciated, not simply assumed.",
    strengths: "Warmth, approachability, emotional ease",
    strengthDetails:
      "Your greatest strengths include friendliness, openness, emotional accessibility, and the ability to make people feel comfortable quickly. You help interactions feel more human and less guarded. In many situations, your presence becomes the bridge that allows trust, ease, and natural conversation to begin.",
    watchOut: "Being taken for granted or mistaken for being simple",
    watchOutDetails:
      "What may feel difficult is that people sometimes project too much softness onto you or assume that because you seem approachable, you must always be available, agreeable, or easygoing. Warmth is a gift, but it still needs boundaries. You do not have to become distant to prove that your kindness has depth.",
    bestMatch:
      "People and spaces that value sincerity, emotional openness, and genuine connection",
    growth1:
      "Growth for you often means learning that being approachable does not require over-giving. You can remain kind, welcoming, and emotionally open while still protecting your energy and choosing where your warmth belongs.",
    growth2:
      "The healthiest version of your energy is not less warm. It is warm with self-respect. When your friendliness is paired with clear boundaries, your first impression stays comforting without turning into emotional overextension.",
    reminder:
      "Your warmth is real power. Just remember that being easy to approach does not mean everyone gets unlimited access to your energy.",
  },

  mysterious: {
    title: "Mysterious and Intriguing 🌙",
    summary:
      "Your first impression feels mysterious and intriguing — quiet, hard to fully read, and naturally memorable in a subtle way.",
    desc1:
      "You tend to leave people with a sense that there is more to you than what is immediately visible. Your energy does not reveal itself all at once, and that creates curiosity. Rather than feeling obvious or instantly familiar, your presence often makes people pause, observe, and wonder what lies beneath the surface.",
    desc2:
      "What makes this first impression powerful is depth. People are often drawn to what they cannot immediately explain, and your energy may carry that kind of quiet pull. You do not need to demand attention for people to notice you. Sometimes the fact that you are not fully transparent is exactly what makes you stand out.",
    meaning1:
      "This result often means your outer presence feels layered, self-contained, and a little difficult to decode at first. You may naturally speak less in new settings, reveal yourself selectively, or carry an emotional rhythm that feels deeper than casual first impressions usually allow. People may sense complexity before they know your actual story.",
    meaning2:
      "Because of that, others may remember you long after a first meeting simply because they feel like they have not fully figured you out. That is part of your magnetism. The emotional atmosphere around you can feel thoughtful, private, and a little distant in a way that creates interest rather than immediate familiarity.",
    showUp1:
      "In real life, this first impression can show up as people calling you hard to read, calm, deep, private, quiet, elegant, or intriguing. Others may feel curious about what you are really thinking, or feel drawn toward your energy because it seems different from people who show everything immediately.",
    showUp2:
      "You may also notice that some people misread your reserve as coldness or disinterest before getting to know you better. That can be frustrating, but it is often a byproduct of your depth. The challenge is deciding when you want to remain unreadable and when you want to gently signal warmth so the right people do not stay too far away.",
    strengths: "Depth, intrigue, quiet magnetism",
    strengthDetails:
      "Your strengths include subtle presence, emotional depth, thoughtful reserve, and the ability to leave a lasting impression without needing to be loud. You often create interest through atmosphere rather than performance. That kind of understated magnetism can feel powerful, elegant, and unforgettable.",
    watchOut: "Being misunderstood as distant or emotionally closed",
    watchOutDetails:
      "What may feel difficult is that some people will interpret your quietness or privacy too quickly. If your energy stays fully closed at the beginning, others may assume you are uninterested, intimidating, or emotionally unavailable when that is not the full truth. Mystery is powerful, but sometimes a small sign of openness changes everything.",
    bestMatch:
      "People and spaces that respect depth, privacy, and slower emotional unfolding",
    growth1:
      "Growth for you often means learning that mystery does not disappear when you show warmth. You do not have to explain yourself completely to make connection possible. Sometimes the most powerful version of your energy is depth that still leaves room for others to step closer.",
    growth2:
      "The healthiest version of your first impression is not overexposure. It is balanced intrigue. You remain layered and real, but you also allow enough light through that the right people can feel invited rather than locked out.",
    reminder:
      "Your mystery is part of your charm. Just remember that being hard to read should protect your depth, not hide your humanity.",
  },

  confident: {
    title: "Confident and Impressive 👑",
    summary:
      "Your first impression feels confident and impressive — composed, self-assured, and naturally commanding without needing to force it.",
    desc1:
      "You often come across as someone who knows who they are, or at least carries themselves with steadiness and control. Even in unfamiliar situations, your energy may feel grounded, intentional, and hard to shake. People tend to notice that you seem put together, emotionally stable, or quietly powerful.",
    desc2:
      "What makes this first impression powerful is presence. Confidence changes the atmosphere of a room because it signals certainty, clarity, and inner balance. You may not even realize how strongly people register your energy at first, but others often feel that you are someone worth paying attention to.",
    meaning1:
      "This result often means your outward vibe gives off strength, self-trust, and composure. You may naturally speak with steadiness, move with purpose, or hold yourself in a way that feels secure rather than hesitant. Even before people know you, they may assume that you are capable, mature, and not easily overwhelmed.",
    meaning2:
      "Because of that, first meetings with you may create immediate respect. People often respond quickly to presence that feels grounded and clear. Your first impression can suggest leadership, elegance, decisiveness, or emotional control. That is a strong advantage in many settings, though it can sometimes make others feel slightly intimidated before they know your softer side.",
    showUp1:
      "In real life, this first impression can show up as being described as poised, strong, polished, mature, impressive, or naturally influential. People may trust your judgment early, assume you are capable, or feel that you have your life more together than most.",
    showUp2:
      "You may also find that others hesitate around you at first because your confidence creates distance as well as admiration. That does not mean your energy is unkind. It simply means people can feel your standards, clarity, or self-possession before they feel your warmth. The challenge is making sure your strength does not become mistaken for emotional unreachability.",
    strengths: "Presence, self-assurance, composure",
    strengthDetails:
      "Your strengths include steadiness, poise, quiet authority, and the ability to make an immediate impression of competence and self-trust. In many environments, this helps people take you seriously right away. You often bring structure, clarity, and confidence into interactions that might otherwise feel uncertain or scattered.",
    watchOut: "Coming across as intimidating or harder to approach than you mean to",
    watchOutDetails:
      "What may feel difficult is that confidence can create admiration without immediate closeness. Some people may assume you are judging them, emotionally distant, or not easy to connect with simply because you seem so composed. The goal is not to make yourself smaller. It is to let your confidence stay strong while still leaving room for approachability.",
    bestMatch:
      "People and spaces that respect strength, maturity, and grounded self-trust",
    growth1:
      "Growth for you often means realizing that softness does not weaken your impression. In fact, when confidence is paired with openness, your presence becomes even more compelling. People respect strength, but they connect most deeply with strength that still feels human.",
    growth2:
      "The healthiest form of your energy is not performative perfection. It is real confidence — steady, secure, and spacious enough to let people see that beneath your composure, there is also warmth, honesty, and emotional depth.",
    reminder:
      "Your confidence leaves a mark. Just remember that people do not only admire strength — they also trust the version of it that feels alive and human.",
  },

  gentle: {
    title: "Gentle and Comforting 🌿",
    summary:
      "Your first impression feels gentle and comforting — soft, calming, and emotionally safe in a way that puts people at ease.",
    desc1:
      "There is something naturally soothing about the energy you bring. Even when people do not know you yet, they may feel less guarded around you because your presence seems patient, kind, and non-threatening. You often give off a sense of emotional softness that makes others feel like they do not have to brace themselves.",
    desc2:
      "What makes this first impression powerful is emotional safety. In a world where many people feel rushed, sharp, or performative, gentleness stands out more than people realize. Your energy may not be the loudest in the room, but it can easily become one of the most memorable because of how calm and reassuring it feels.",
    meaning1:
      "This result often means your outward vibe feels tender, considerate, and quietly nurturing. You may naturally speak in a soft way, listen with care, or carry an emotional slowness that feels safe to people who are used to sharper social environments. Even before others know you deeply, they may sense that you are someone who would not handle them carelessly.",
    meaning2:
      "Because of that, first meetings with you can feel restful. People may not always notice your energy with dramatic intensity, but they often remember how comfortable, calm, and unpressured they felt around you. That kind of presence can be deeply attractive because it offers relief, trust, and emotional ease from the very beginning.",
    showUp1:
      "In real life, this first impression can show up as being described as sweet, calm, soft-spoken, comforting, safe, or easy to be around. Others may feel that you have kind eyes, peaceful energy, or a naturally reassuring presence that helps them settle.",
    showUp2:
      "You may also notice that some people project fragility onto you simply because your energy feels soft. But gentleness is not weakness. Often it takes real emotional strength to remain tender in a world that rewards hardness. The challenge is making sure your softness is recognized as grounded care, not mistaken for lack of depth or strength.",
    strengths: "Softness, comfort, emotional safety",
    strengthDetails:
      "Your strengths include patience, tenderness, emotional steadiness, and the ability to help people feel safe without forcing anything. You often create an atmosphere where connection can happen naturally because your energy does not make people feel rushed, judged, or emotionally threatened.",
    watchOut: "Being underestimated or treated as if softness means passivity",
    watchOutDetails:
      "What may feel difficult is that people sometimes assume gentle energy has no edge, no standards, or no strength underneath it. If others only notice your softness, they may overlook your clarity, intelligence, or resilience. The goal is not to become harder. It is to let your gentleness stay visible while also honoring the strength that protects it.",
    bestMatch:
      "People and spaces that value sincerity, care, and emotionally safe connection",
    growth1:
      "Growth for you often means learning that comfort becomes even healthier when it includes clear self-protection. You can remain kind, soft, and emotionally safe without over-accommodating what drains you or asks too much from your calm.",
    growth2:
      "The healthiest version of your energy is gentle with boundaries. It is a softness that comforts others without disappearing for them. That is when your presence feels not only calming, but deeply grounded and trustworthy.",
    reminder:
      "Your gentleness is not small. It is one of the strongest forms of presence there is when it stays rooted in self-respect.",
  },

  cool: {
    title: "Cool and Collected ❄️",
    summary:
      "Your first impression feels cool and collected — calm, composed, and effortlessly self-contained in a way people notice quickly.",
    desc1:
      "You tend to come across as someone who is not easily shaken by the atmosphere around you. Your energy may feel controlled, polished, and emotionally measured, which gives people the sense that you carry yourself with strong internal balance. Rather than seeming eager or overly expressive, you often leave an impression of quiet control.",
    desc2:
      "What makes this first impression powerful is restraint. While some people stand out through warmth or intensity, you often stand out through composure. Your presence may feel sleek, observant, and a little detached in a way that people read as elegant, impressive, or quietly magnetic.",
    meaning1:
      "This result often means your outward vibe feels calm, self-contained, and hard to rattle. You may not reveal your emotions immediately, and that can make your presence feel especially composed. Even before people know you better, they may assume you are thoughtful, selective, and not easily influenced by outside pressure.",
    meaning2:
      "Because of that, you often create an impression of emotional control and social ease. People may see you as someone who does not chase attention but still naturally holds it. That can feel stylish, mature, and attractive. At the same time, it can make others wonder whether you are reserved by nature or simply cautious about showing warmth too quickly.",
    showUp1:
      "In real life, this first impression can show up as being described as calm, elegant, collected, detached, polished, or quietly powerful. Others may sense that you observe more than you reveal, and that your presence feels deliberate rather than impulsive.",
    showUp2:
      "You may also notice that people sometimes take longer to feel close to you because your calmness can be read as distance. That does not mean your energy lacks feeling. It simply means people often notice your composure before they notice your softness. The challenge is making sure your coolness feels grounded rather than unavailable.",
    strengths: "Composure, restraint, quiet magnetism",
    strengthDetails:
      "Your strengths include emotional control, steadiness, subtle charisma, and the ability to make a strong impression without overexplaining yourself. You often appear self-aware and socially unshaken, which can create immediate respect and intrigue in both personal and professional settings.",
    watchOut: "Feeling harder to access than you actually are",
    watchOutDetails:
      "What may feel difficult is that being composed can sometimes make others assume you are disinterested, emotionally distant, or impossible to read. If people only see the outer calm, they may miss the more human, warm, or playful parts of you underneath. The goal is not to become less collected. It is to let people see that your calm still has life inside it.",
    bestMatch:
      "People and spaces that appreciate composure, subtlety, and self-contained confidence",
    growth1:
      "Growth for you often means realizing that emotional warmth does not cancel out your coolness. In fact, when composure is paired with small signs of openness, your presence becomes even more compelling because it feels both strong and real.",
    growth2:
      "The healthiest version of your energy is not emotional distance for its own sake. It is calm self-possession that still leaves room for connection. That is when your coolness feels not closed off, but deeply intentional and attractive.",
    reminder:
      "Your composure is part of your power. Just remember that being collected does not mean you have to stay unreadable forever.",
  },

  charming: {
    title: "Charming and Memorable ✨",
    summary:
      "Your first impression feels charming and memorable — bright, engaging, and naturally easy for people to remember long after meeting you.",
    desc1:
      "There is something about your energy that leaves a mark quickly. You may come across as lively, likable, expressive, or emotionally vivid in a way that makes people feel drawn to you almost immediately. Even if the interaction is brief, your presence tends to stay with people because it carries personality and spark.",
    desc2:
      "What makes this first impression powerful is emotional impact. Charm is not just about attractiveness. It is about leaving people with a good feeling, a vivid memory, or a sense that meeting you made the moment more alive. Your energy may carry that kind of brightness naturally.",
    meaning1:
      "This result often means your outer vibe feels engaging, appealing, and easy to enjoy. You may naturally smile in a memorable way, speak with expressive warmth, or have a presence that feels lively without trying too hard. People often register not only what you say, but the feeling you leave behind.",
    meaning2:
      "Because of that, first meetings with you often feel more vivid than ordinary social contact. Others may remember your tone, your smile, your humor, your style, or simply the fact that you made the interaction feel more special. That kind of impression can be powerful because it creates connection through delight, energy, and emotional color.",
    showUp1:
      "In real life, this first impression can show up as being described as magnetic, lovable, fun, engaging, adorable, charismatic, or impossible to forget. People may smile more around you, feel immediately interested, or find themselves thinking about your energy later without fully knowing why.",
    showUp2:
      "You may also notice that charm can sometimes cause people to focus on your surface sparkle before they recognize your deeper emotional layers. That can feel flattering, but also limiting if people stop at the obvious part of your appeal. The challenge is letting your charm open the door without letting it become the only thing people see.",
    strengths: "Charm, memorability, emotional spark",
    strengthDetails:
      "Your strengths include likability, expressive warmth, social sparkle, and the ability to create a vivid positive impression quickly. You often bring aliveness into a room and make people feel that the moment has more color, movement, or emotional energy because you are in it.",
    watchOut: "Being reduced to surface appeal instead of being fully seen",
    watchOutDetails:
      "What may feel difficult is that people sometimes stop at the version of you that is easiest to enjoy. If others only see your charm, they may miss your seriousness, depth, sensitivity, or complexity. The goal is not to become less bright. It is to let your charm remain real while also making space for the deeper parts of you to be recognized.",
    bestMatch:
      "People and spaces that enjoy your brightness while also valuing your deeper emotional reality",
    growth1:
      "Growth for you often means trusting that you do not have to perform constantly to stay lovable. Your charm is strongest when it comes from genuine aliveness rather than pressure to always be the most engaging person in the room.",
    growth2:
      "The healthiest version of your energy is charm with depth. It is the kind of presence that delights people at first, then surprises them with sincerity, steadiness, and real substance once they come closer.",
    reminder:
      "Your charm is a gift. Just remember that what makes you memorable is not only your sparkle, but the real person shining through it.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "warm";
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
          First Impression Personality Result
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
            What this first impression means
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
            href="/quiz/first-impression"
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

export default function FirstImpressionResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}