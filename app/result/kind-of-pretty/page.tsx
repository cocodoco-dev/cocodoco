"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  soft_pretty: {
    title: "Soft Pretty 🌸",
    summary:
      "Your beauty feels gentle, comforting, and quietly healing to the people around you.",
    desc1:
      "Your kind of pretty is not loud or attention-seeking. It feels warm, delicate, and emotionally safe. People may be drawn to you because your presence makes things feel softer, calmer, and easier to breathe in. There is a tenderness in the way your energy lands.",
    desc2:
      "What makes this kind of beauty special is that it lingers emotionally. You may not always realize it, but softness is powerful. People often remember how peaceful, kind, or comforted they felt around you. Your beauty is the kind that feels like warmth rather than performance.",
    meaning1:
      "This result usually means your beauty is deeply connected to emotional atmosphere. You are likely the kind of person whose presence changes the feeling of a space before anyone fully explains why. Rather than overwhelming people, you tend to soften them. That softness often feels safe, calming, and unexpectedly memorable.",
    meaning2:
      "Because of that, your beauty may be experienced less as intensity and more as comfort. People may associate you with warmth, tenderness, and a quiet kind of grace. It is the kind of beauty that can feel healing in a world that often moves too fast or feels emotionally sharp.",
    showUp1:
      "In real life, this can show up as a soothing first impression, gentle facial expressions, a calm tone, soft styling, or an overall presence that makes others feel more relaxed around you. Even small things like the way you speak, smile, or carry yourself may feel reassuring to others.",
    showUp2:
      "You may also notice that people open up around you more easily. They may trust you quickly, feel emotionally comfortable near you, or remember you as someone who felt kind without trying too hard. The challenge is that subtle beauty is sometimes felt deeply even when it is not loudly praised.",
    strengths: "Gentleness, warmth, emotional softness",
    strengthDetails:
      "Your strengths include emotional warmth, soothing presence, tenderness, and the ability to make beauty feel human rather than performative. You often leave behind a feeling of peace, and that can be far more powerful than dramatic attention. Your beauty creates comfort, which is something many people quietly crave.",
    watchOut: "Being underestimated because your beauty feels quiet",
    watchOutDetails:
      "What may feel difficult is that softer beauty is not always recognized immediately in louder or more performative spaces. People may sometimes mistake your gentleness for passivity, or overlook your impact because it does not announce itself. That does not make your beauty weaker. It only means it works on a deeper frequency.",
    bestMatch:
      "People and spaces that value tenderness, calmness, and sincerity",
    growth1:
      "Growth for you often means realizing that softness does not need to apologize for itself. You do not have to become sharper or louder to be seen. Your warmth is already a form of presence, and your gentleness can be powerful without losing its sweetness.",
    growth2:
      "The healthiest version of your beauty is not quieter out of fear. It is soft with self-trust. When you stop doubting the value of your tenderness, your presence becomes even more grounded and radiant.",
    reminder:
      "Your beauty is not small because it is gentle. Some of the most unforgettable presence in the world feels exactly like softness.",
  },

  elegant_pretty: {
    title: "Elegant Pretty ✨",
    summary:
      "Your beauty feels graceful, refined, and naturally magnetic without needing to try too hard.",
    desc1:
      "You carry a kind of beauty that feels polished and timeless. It is not only about appearance — it is about the way you move, the way you hold yourself, and the quiet confidence in your energy. People may notice that you feel composed even when you are not doing anything dramatic.",
    desc2:
      "What makes this kind of pretty powerful is its steadiness. Your beauty does not rely on being loud or overly expressive. It comes through in your presence, your restraint, and the sense that you know your own value. That kind of elegance stays in people’s minds.",
    meaning1:
      "This result often means your beauty is rooted in composure, refinement, and emotional self-possession. People may not only notice how you look, but how you carry yourself. There is often a sense of calm structure in your presence that makes your beauty feel intentional, balanced, and quietly elevated.",
    meaning2:
      "Because of that, your beauty can feel timeless rather than trend-based. You may come across as someone who does not need excess to feel striking. In many cases, it is your restraint, clarity, and polished energy that make the strongest impression.",
    showUp1:
      "In real life, this can show up as graceful posture, clean styling, understated confidence, a composed tone, or a sense that you never look like you are trying too hard. Even when you are being simple, your presence may still read as refined and memorable.",
    showUp2:
      "You may also find that people project confidence, maturity, or sophistication onto you. That can be flattering, but it can also create distance if others assume you are less approachable than you really are. Your beauty often communicates strength before softness.",
    strengths: "Grace, composure, timeless magnetism",
    strengthDetails:
      "Your strengths include refinement, poise, quiet confidence, and the ability to leave a strong impression without relying on excess. You often prove that beauty can be powerful through balance, clarity, and self-possession. That kind of elegance can feel both rare and enduring.",
    watchOut: "Seeming distant or intimidating without meaning to",
    watchOutDetails:
      "What may feel difficult is that polished beauty can sometimes be misread as emotional distance. People may assume you are harder to approach, more guarded, or less warm than you truly are. In some spaces, your elegance may create admiration before familiarity.",
    bestMatch:
      "People and spaces that appreciate subtle confidence and refinement",
    growth1:
      "Growth for you often means letting your elegance breathe a little more. You do not lose your refinement by showing warmth, softness, or spontaneity. In fact, those qualities can make your beauty feel even more complete.",
    growth2:
      "The healthiest version of your beauty is polished but human. It is graceful without rigidity, composed without distance, and magnetic without needing to hold itself apart from others.",
    reminder:
      "Your beauty does not need noise to be noticed. It already speaks through the way you carry yourself.",
  },

  cute_pretty: {
    title: "Cute Pretty 🍓",
    summary:
      "Your beauty feels sweet, playful, and naturally lovable in a way that brightens people instantly.",
    desc1:
      "Your kind of pretty has charm in it. There is something endearing, expressive, and emotionally easy about the way you come across. People may smile more around you without even realizing why, because your energy feels alive, soft, and easy to adore.",
    desc2:
      "What makes this kind of beauty special is that it carries joy. Cute beauty is not shallow — it is powerful in the way it makes people feel lighter, warmer, and more drawn in. Your presence feels approachable and memorable, which gives your beauty a real emotional pull.",
    meaning1:
      "This result usually means your beauty is closely tied to charm, sweetness, and emotional brightness. People may respond to you not only because you look appealing, but because your energy feels easy to like. There is often a natural warmth and playfulness in your vibe that invites people in quickly.",
    meaning2:
      "Because of that, your beauty may create immediate emotional lift. It can feel lively, affectionate, and naturally lovable. What some people underestimate is how powerful that kind of sweetness really is. Being able to brighten people instantly is not a small thing. It is a real form of magnetism.",
    showUp1:
      "In daily life, this can show up as expressive reactions, playful energy, soft charm, approachable styling, and an overall vibe that makes people feel lighter around you. You may find that people smile more, become more affectionate, or warm up faster in your presence.",
    showUp2:
      "You may also be remembered for the way your beauty feels emotionally easy rather than distant. People often connect with cute beauty because it feels lively and human. The challenge is that sweetness sometimes gets mistaken for shallowness when in reality it can hold a lot of emotional depth.",
    strengths: "Charm, sweetness, lovable energy",
    strengthDetails:
      "Your strengths include warmth, playfulness, emotional accessibility, and the ability to make beauty feel joyful. You often bring lightness into the room without becoming superficial. That balance between sweetness and presence is part of what makes your beauty so appealing.",
    watchOut: "Not being taken seriously enough at first",
    watchOutDetails:
      "What may feel difficult is that cute beauty can sometimes lead people to underestimate your depth, intelligence, or seriousness. Others may focus first on your charm and overlook the fuller range of who you are. That does not reduce your beauty, but it can be frustrating if people stop at the surface.",
    bestMatch:
      "People and spaces that love brightness, playfulness, and emotional warmth",
    growth1:
      "Growth for you often means trusting that sweetness and substance can coexist. You do not need to become colder or more severe to be taken seriously. Your softness can stay playful while still holding depth, intelligence, and self-respect.",
    growth2:
      "The healthiest version of your beauty is not about shrinking into being adorable. It is about letting your charm stay bright while your full self stays visible too.",
    reminder:
      "Your sweetness is part of your power. Let it shine without letting anyone mistake it for the whole story.",
  },

  mysterious_pretty: {
    title: "Mysterious Pretty 🌙",
    summary:
      "Your beauty feels quiet, intriguing, and hard to fully read — and that is exactly what makes it unforgettable.",
    desc1:
      "You have the kind of beauty that creates curiosity. There is something subtle, deep, or quietly intense in your presence that makes people feel there is more to you than they can immediately understand. You may not reveal everything at once, and that gives your beauty a lingering effect.",
    desc2:
      "What makes this kind of pretty powerful is that it stays with people. While more obvious beauty may catch attention quickly, yours tends to live in memory. It feels layered, thoughtful, and a little elusive. The mystery is not distance for its own sake — it is part of your natural depth.",
    meaning1:
      "This result often means your beauty is tied to intrigue and emotional depth. You are likely the kind of person whose presence creates questions rather than instant certainty. People may not always know exactly why they find you compelling, but they tend to feel it anyway.",
    meaning2:
      "Because of that, your beauty often lingers in memory rather than relying only on first impact. There is usually a sense that you contain more than what is immediately visible. That layered feeling gives your beauty a quieter but longer-lasting effect.",
    showUp1:
      "In real life, this can show up as restraint, subtle expressions, a calm but unreadable aura, thoughtful silence, or styling that feels moody, refined, or emotionally rich. You may not say much at first, but people often keep noticing you anyway.",
    showUp2:
      "You may also find that others project depth, complexity, or quiet intensity onto you. That can be part of your magnetism. The challenge is that your natural mystery may sometimes be misread as distance or disinterest, even when you simply move more slowly and selectively.",
    strengths: "Intrigue, depth, unforgettable aura",
    strengthDetails:
      "Your strengths include layered presence, quiet intensity, emotional complexity, and the ability to make an impression without full disclosure. You often prove that beauty can be powerful through suggestion rather than explanation. That kind of subtle magnetism is difficult to fake.",
    watchOut: "Seeming more distant than you really are",
    watchOutDetails:
      "What may feel difficult is being misunderstood. Because your beauty has restraint and mystery, some people may assume you are colder, more removed, or harder to reach than you truly are. A little warmth or openness can sometimes help others see the humanity behind the intrigue.",
    bestMatch:
      "People and spaces that respect depth, subtlety, and emotional complexity",
    growth1:
      "Growth for you often means learning that letting people see a little more of you does not erase your mystery. You do not need to explain everything to become approachable. Sometimes one small moment of warmth is enough.",
    growth2:
      "The healthiest version of your beauty keeps its depth while allowing connection. You can remain magnetic, complex, and memorable without becoming unreachable.",
    reminder:
      "Your beauty lingers because it has depth. Let that mystery stay real, but let it stay warm too.",
  },

  sunny_pretty: {
    title: "Sunny Pretty ☀️",
    summary:
      "Your beauty feels bright, radiant, and naturally uplifting in a way that people notice right away.",
    desc1:
      "You have the kind of pretty that feels full of light. There is something open, warm, and emotionally vivid in the way you show up. People may be drawn to you because your energy makes things feel more alive, more hopeful, and more fun without trying too hard.",
    desc2:
      "What makes this kind of beauty powerful is how it affects the atmosphere. You do not just look bright — you make people feel brighter. Your beauty is memorable because it carries joy, vitality, and warmth. It feels like emotional sunlight.",
    meaning1:
      "This result usually means your beauty is connected to radiance and emotional brightness. You are likely someone whose presence lifts the atmosphere quickly. People may notice your openness, your warmth, or the way your energy creates a sense of life around you.",
    meaning2:
      "Because of that, your beauty often feels instantly uplifting. There is something emotionally generous about it. It can make people smile, relax, and feel a little more hopeful without fully realizing why. That kind of light is one of the reasons your presence is so memorable.",
    showUp1:
      "In real life, this can show up as bright expressions, warm body language, lively styling, visible joy, and an energy that seems to brighten a room. Even small moments like your laugh, your smile, or your enthusiasm may leave a strong impression.",
    showUp2:
      "You may also notice that people feel lighter or more open around you. That is one of your biggest gifts. The challenge is that when your beauty is associated with brightness, you may sometimes feel pressure to always stay upbeat even when you need rest or softness.",
    strengths: "Radiance, warmth, uplifting energy",
    strengthDetails:
      "Your strengths include positivity, visible warmth, emotional vitality, and the ability to make beauty feel joyful and alive. You often bring a sense of momentum and ease to the people around you. That brightness is part of what makes your beauty feel so instantly appealing.",
    watchOut: "Feeling pressure to always stay bright",
    watchOutDetails:
      "What may feel difficult is that people can become attached to your light. Over time, that may create pressure to keep glowing even when you are tired, more quiet, or moving through something private. Brightness is beautiful, but it should not become an obligation.",
    bestMatch:
      "People and spaces that feel open, genuine, and full of life",
    growth1:
      "Growth for you often means learning that your beauty is still real when it softens. You do not need to shine at full intensity every moment to remain radiant. Sometimes warmth becomes even more meaningful when it is gentle rather than dazzling.",
    growth2:
      "The healthiest version of your beauty is bright without being forced. It is joyful, but still honest. It gives light without demanding that you ignore your own emotional weather.",
    reminder:
      "Your brightness is a gift, not a duty. Let yourself glow naturally, not endlessly.",
  },

  ethereal_pretty: {
    title: "Ethereal Pretty 🕊️",
    summary:
      "Your beauty feels dreamy, delicate, and almost otherworldly in the way it touches people’s attention.",
    desc1:
      "You have the kind of pretty that feels hard to fully describe. It is soft, airy, and a little unreal — not because it is distant, but because it carries a dreamlike quality. People may feel drawn to you in a way they cannot explain clearly, only feel.",
    desc2:
      "What makes this kind of beauty special is that it feels like mood as much as appearance. There is imagination, softness, and a quiet glow in your energy that gives your presence a rare feeling. Your beauty is the kind people remember like a scene from a film or a feeling from a dream.",
    meaning1:
      "This result often means your beauty is tied to atmosphere, imagination, and delicacy. You may not register only as a visual impression. Instead, people often experience your beauty as a feeling — something soft, cinematic, and slightly difficult to pin down.",
    meaning2:
      "Because of that, your beauty can feel almost symbolic. It often carries a sense of distance, softness, or emotional unreality that makes it stand out in a very different way. Rather than feeling bold or direct, it tends to feel lingering, dreamlike, and quietly transporting.",
    showUp1:
      "In real life, this can show up as airy styling, delicate presence, soft movement, a dreamy gaze, or an overall atmosphere that feels poetic rather than sharply defined. You may seem like someone whose beauty belongs as much to mood as to appearance.",
    showUp2:
      "You may also find that people remember you more as a feeling than a clear explanation. That is part of your power. The challenge is that ethereal beauty can sometimes leave you feeling hard to define, hard to read, or even misunderstood by people who expect something more obvious.",
    strengths: "Dreaminess, delicacy, unforgettable atmosphere",
    strengthDetails:
      "Your strengths include imaginative presence, soft magnetism, delicacy, and the ability to make beauty feel almost cinematic. You often leave behind an emotional image rather than only a visual one. That gives your presence an unusual and memorable quality.",
    watchOut: "Feeling hard to define or misunderstood",
    watchOutDetails:
      "What may feel difficult is that unusual beauty can sometimes make you feel separate from clearer categories. People may admire you without fully understanding you, or project fantasies onto you that do not match who you actually are. That can feel isolating if it happens too often.",
    bestMatch:
      "People and spaces that value beauty, imagination, and emotional depth",
    growth1:
      "Growth for you often means trusting that your beauty does not need to become more ordinary to be real. You are allowed to remain dreamy, delicate, and difficult to reduce. At the same time, it can help to stay grounded in your own self-definition rather than only in how others perceive you.",
    growth2:
      "The healthiest version of your beauty is ethereal but rooted. It stays imaginative and unusual while still feeling embodied, clear, and human from the inside.",
    reminder:
      "Your beauty feels like a dream because it carries atmosphere. Just remember that even dreamlike beauty deserves a strong, real center.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "soft_pretty";
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
          Beauty Personality Result
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
            How this beauty can show up
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
            href="/quiz/kind-of-pretty"
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

export default function KindOfPrettyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}