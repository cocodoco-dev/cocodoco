"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  dreamer: {
    title: "The Dreamer 🌙",
    summary:
      "At heart, you are the Dreamer — hopeful, imaginative, and always sensing that life could become something more beautiful.",
    desc1:
      "Your inner self naturally leans toward possibility. Even when life is difficult, a part of you keeps looking toward beauty, meaning, and what could still unfold. You are often guided by feeling, imagination, and the emotional pull of a future that has not fully arrived yet.",
    desc2:
      "What makes this archetype powerful is not simple escapism, but vision. Dreamers help life feel larger than survival. You carry hope, softness, and emotional imagination in a way that can inspire both yourself and the people around you. Your gift is seeing beyond what is in front of you.",
    meaning1:
      "This result often means your soul is deeply connected to longing, beauty, and emotional possibility. You may not always be satisfied with what is merely practical or immediate. Part of you is always searching for the deeper atmosphere of life — what it could mean, what it could become, and what hidden tenderness still exists beneath the surface.",
    meaning2:
      "Because of that, you may be someone who lives partly in the present and partly in the world of what is still becoming. This can make you creative, poetic, and emotionally rich. It can also make you especially sensitive to disappointment when reality feels smaller, harsher, or less beautiful than what your heart knows is possible.",
    showUp1:
      "In real life, this archetype can show up as romantic imagination, deep attachment to symbolism, sensitivity to atmosphere, and a strong pull toward art, meaning, or emotional beauty. You may be the kind of person who notices the feeling of a room, the emotional truth in a song, or the quiet significance of a small moment.",
    showUp2:
      "You may also find yourself hoping for more even when others settle too quickly. That hope is not weakness. It is often the core of your gift. The challenge is making sure your longing becomes something creative and life-giving rather than something that leaves you waiting forever for the perfect moment.",
    strengths: "Hope, imagination, emotional vision",
    strengthDetails:
      "Your greatest strengths are emotional imagination, symbolic sensitivity, and the ability to keep beauty alive even in difficult seasons. You often remind others that life is more than function, pressure, or survival. You can bring softness, inspiration, and emotional possibility into spaces that would otherwise feel flat or closed.",
    watchOut: "Getting lost in fantasy or waiting too long to act",
    watchOutDetails:
      "What may feel difficult is grounding your vision in reality. When the inner world becomes too much more beautiful than the outer one, you may drift into delay, idealization, or disappointment. The goal is not to become less dreamy. It is to let your vision become a bridge to action rather than an escape from it.",
    bestMatch:
      "People and paths that protect your softness while helping your visions become real",
    growth1:
      "Growth for you often begins when you trust that beauty does not disappear when it becomes practical. Your dreams do not lose their magic when they take form. In fact, they become more powerful when they move from imagination into lived reality.",
    growth2:
      "You do not need to abandon your tenderness to become grounded. The healthiest version of your archetype is someone who still sees wonder, still feels deeply, and still believes in possibility — but also chooses to build, begin, and embody what they long for.",
    reminder:
      "Your softness is not naive. It is part of your vision. Just remember that even the most beautiful future begins with one real step.",
  },

  lover: {
    title: "The Lover 💗",
    summary:
      "At heart, you are the Lover — emotionally devoted, deeply feeling, and driven by connection that feels real.",
    desc1:
      "Your inner self is rooted in feeling. You are someone who naturally values intimacy, beauty, affection, and emotional truth. When something matters to you, it matters fully. Love, in all its forms, tends to shape your decisions more than detached logic ever could.",
    desc2:
      "What makes this archetype powerful is depth of connection. Lovers bring warmth, sincerity, and emotional presence into life. You help people feel chosen, seen, and valued. Your gift is not simply loving deeply — it is making life itself feel more alive through what you care about.",
    meaning1:
      "This result often means your soul is organized around emotional meaning. You are likely someone who experiences life most vividly through closeness, beauty, intimacy, and heartfelt presence. You may not want relationships or experiences that feel cold, distant, or merely functional. You want what feels real.",
    meaning2:
      "Because of that, your life can become incredibly rich in emotion and loyalty. You may love people, places, memories, and dreams with unusual intensity. That depth is one of your greatest gifts. It can also make loss, distance, and emotional inconsistency hit you harder than they seem to affect others.",
    showUp1:
      "In everyday life, this archetype may show up as strong attachment, romantic depth, expressive affection, tenderness toward people you care about, and a natural desire to create emotional closeness. You may be someone who remembers emotional details, notices changes in tone, and values sincerity more than appearances.",
    showUp2:
      "You may also bring beauty into life through the way you care. For you, connection is not a side note. It is often the center of meaning. The challenge is making sure your deep emotional investment remains mutual and healthy rather than becoming a place where you lose yourself.",
    strengths: "Devotion, warmth, emotional depth",
    strengthDetails:
      "Your strengths include sincerity, tenderness, emotional courage, and the ability to make people feel deeply seen. You often love with presence rather than distance. That gives your relationships warmth, humanity, and emotional richness that many people quietly long for but struggle to create themselves.",
    watchOut: "Losing yourself inside attachment or intensity",
    watchOutDetails:
      "What may feel hard is holding onto your own center when your heart is fully engaged. Because you feel so much, attachment can sometimes blur into over-identification, emotional dependency, or staying too long in connections that are no longer nourishing. Your love is powerful, but it needs boundaries to stay healthy.",
    bestMatch:
      "Connections that are mutual, emotionally honest, and genuinely tender",
    growth1:
      "Growth for you often means learning that love becomes stronger when it includes self-respect. Emotional depth does not require emotional self-erasure. You can care deeply and still remain rooted in your own needs, values, and direction.",
    growth2:
      "The healthiest form of your archetype is not less loving. It is more balanced. It is a love that gives without disappearing, feels without drowning, and connects without begging to be held together by someone else’s uncertainty.",
    reminder:
      "Your heart is one of your greatest gifts. Let it stay open, but let it stay yours too.",
  },

  sage: {
    title: "The Sage 📚",
    summary:
      "At heart, you are the Sage — thoughtful, observant, and drawn toward wisdom, truth, and real understanding.",
    desc1:
      "Your inner self tends to search beneath the surface. You often want to know what something really means, what is actually true, and how everything fits together beneath appearances. You may naturally step back, reflect, and notice things that others miss.",
    desc2:
      "What makes this archetype powerful is clarity. Sages bring perspective into confusion and depth into noise. Your gift is not just intelligence, but insight — the ability to understand patterns, meaning, and emotional reality with more depth than most people realize.",
    meaning1:
      "This result often means that your deepest instinct is to understand. You are probably not satisfied with shallow answers, emotional performance, or easy assumptions. Something in you wants to move past appearances and get closer to the truth of things, even when that truth is layered, uncomfortable, or complex.",
    meaning2:
      "Because of that, you may experience life through reflection before reaction. You often think carefully, observe quietly, and process meaning over time. This can make you wise, perceptive, and deeply trustworthy in moments when others feel overwhelmed. It can also make you feel separate when the world moves too quickly or values noise over depth.",
    showUp1:
      "In daily life, this archetype can show up as careful observation, thoughtful speech, emotional intelligence, love of learning, and a tendency to reflect before acting. You may be the one who sees patterns in people, notices what is unsaid, or asks the question that cuts through confusion.",
    showUp2:
      "You may also serve as a grounding presence for others because your perspective creates space. Where some people react immediately, you often try to understand first. That is one of your gifts. The challenge is making sure you do not stay in analysis so long that life starts passing by untouched.",
    strengths: "Wisdom, perspective, insight",
    strengthDetails:
      "Your strengths include discernment, patience, thoughtful depth, and the ability to recognize what is true beneath emotional noise. You can bring clarity where there is confusion and meaning where there is chaos. People may come to you not only for answers, but for perspective that feels steady and real.",
    watchOut: "Living too much in thought and too little in direct experience",
    watchOutDetails:
      "What may feel difficult is staying embodied while remaining reflective. If you live only in interpretation, analysis can become distance. Sometimes understanding becomes a shield against risk, immediacy, or vulnerability. The goal is not to think less. It is to let wisdom remain connected to lived experience.",
    bestMatch:
      "People and paths that value truth, reflection, and thoughtful depth",
    growth1:
      "Growth for you often means allowing yourself to participate more directly in life, not only observe it. Insight becomes more complete when it is joined by feeling, embodiment, and experience. Sometimes truth is not only something to analyze. Sometimes it is something to live.",
    growth2:
      "The healthiest Sage is not detached from the world. They are present within it. They think clearly, but they also feel honestly, act when necessary, and trust that not every meaningful thing can be fully solved before it is lived.",
    reminder:
      "Your depth is a gift. Just do not let understanding become the only way you touch life.",
  },

  rebel: {
    title: "The Rebel 🔥",
    summary:
      "At heart, you are the Rebel — fiercely individual, freedom-driven, and unwilling to live inside what feels false.",
    desc1:
      "Your inner self resists what feels limiting, dishonest, or imposed from the outside. You are often driven by instinct, truth, and the need to stay real even when it would be easier to conform. Something in you pushes against cages, roles, and expectations that do not fit your soul.",
    desc2:
      "What makes this archetype powerful is courage. Rebels disrupt comfort not just for the sake of chaos, but because they can sense when something needs to change. Your gift is the strength to protect authenticity, challenge what no longer works, and remind life to stay honest.",
    meaning1:
      "This result often means your soul values freedom as something sacred. You may feel emotionally allergic to false roles, forced identities, shallow expectations, or systems that ask you to shrink for the sake of peace. You often know, almost immediately, when something does not feel true.",
    meaning2:
      "Because of that, your life may be shaped by a strong relationship to authenticity. You are likely someone who would rather face conflict than quietly betray yourself. That is a powerful gift. It can also make life intense when compromise, patience, or external structure begins to feel like control.",
    showUp1:
      "In daily life, this archetype can show up as bold self-expression, resistance to pressure, instinctive truth-telling, and a strong need for space, freedom, and self-definition. You may be the one who says what others are afraid to say or who walks away when something feels hollow.",
    showUp2:
      "You may also bring change wherever you go because your presence challenges stagnation. People may experience you as intense, freeing, disruptive, or unforgettable. The challenge is learning when to protect your truth and when to soften enough to receive support without feeling trapped by it.",
    strengths: "Freedom, authenticity, courage",
    strengthDetails:
      "Your strengths include bravery, self-honesty, independence, and the capacity to catalyze change. You often help reveal what is no longer working simply by refusing to pretend otherwise. That makes your archetype powerful in situations where honesty, transformation, and realignment are needed.",
    watchOut: "Pushing away support or peace in the name of independence",
    watchOutDetails:
      "What may feel hard is telling the difference between real freedom and defensive distance. Sometimes the instinct to protect your autonomy can become resistance to intimacy, support, stability, or tenderness. Not everything that stays is trying to control you. Some things stay because they are real.",
    bestMatch:
      "People and paths that respect your truth without trying to contain it",
    growth1:
      "Growth for you often means discovering that freedom is not only about refusal. It is also about creation. It is one thing to reject what feels false. It is another to build something honest enough to live inside.",
    growth2:
      "The healthiest Rebel is not only disruptive. They are deeply self-directed. They protect authenticity, but they also learn how to create peace that does not require self-betrayal. That is when your fire becomes direction instead of only resistance.",
    reminder:
      "You are not here to become smaller for comfort. Just remember that real freedom can include trust, support, and peace too.",
  },

  guardian: {
    title: "The Guardian 🌿",
    summary:
      "At heart, you are the Guardian — steady, protective, and deeply guided by care, loyalty, and emotional responsibility.",
    desc1:
      "Your inner self is rooted in devotion and protection. You naturally care about what is safe, what is lasting, and who needs to be held with real consistency. You may often become the person others trust because your energy feels dependable and emotionally grounded.",
    desc2:
      "What makes this archetype powerful is steadiness. Guardians help life feel safer, softer, and more sustainable. Your gift is not only caring — it is showing up, protecting what matters, and creating a kind of emotional structure people can lean on.",
    meaning1:
      "This result often means your soul is deeply connected to loyalty, care, and responsibility. You may naturally orient yourself toward what needs tending, protecting, or preserving. When something matters to you, you often do not hold it lightly. You take it seriously, and people can feel that.",
    meaning2:
      "Because of that, you may become a source of stability in the lives of others. Your presence can feel grounding, safe, and reassuring. That is a beautiful gift. It can also become heavy if you begin carrying everything, protecting everyone, or feeling responsible for peace at all times.",
    showUp1:
      "In real life, this archetype can show up as dependability, emotional consistency, protectiveness, patience, and an instinct to support what is vulnerable or meaningful. You may be the one who remembers, checks in, follows through, and stays when others become unreliable.",
    showUp2:
      "You may also bring quiet strength into relationships, family, friendship, and work because you care about what lasts. The challenge is making sure your steadiness includes space for your own needs too. Even protectors need care, softness, and rest.",
    strengths: "Loyalty, steadiness, protection",
    strengthDetails:
      "Your strengths include reliability, emotional endurance, devotion, and the ability to create trust over time. You often make life feel more stable for the people around you. That kind of grounding presence is rare and deeply valuable, especially in a world that often feels rushed or inconsistent.",
    watchOut: "Carrying too much for others and neglecting your own needs",
    watchOutDetails:
      "What may feel difficult is knowing where care ends and over-responsibility begins. Because you are capable and dependable, others may lean on you heavily. Over time, that can turn into exhaustion, quiet resentment, or forgetting that your own emotional life also deserves protection.",
    bestMatch:
      "People and paths that value trust, consistency, and heartfelt devotion",
    growth1:
      "Growth for you often begins with remembering that rest is not selfish and boundaries are not rejection. Protecting what matters should include protecting your own peace too. Care becomes healthier when it is sustainable.",
    growth2:
      "The healthiest Guardian does not stop loving or showing up. They simply stop believing they must hold the entire emotional world together alone. Your devotion becomes strongest when it includes yourself inside its circle of care.",
    reminder:
      "Your steadiness is a gift. Just do not forget that you also deserve the same safety and care you give so naturally to others.",
  },

  magician: {
    title: "The Magician ✨",
    summary:
      "At heart, you are the Magician — transformative, intuitive, and drawn to changing reality from the inside out.",
    desc1:
      "Your inner self is naturally connected to change, symbolism, and the feeling that life can shift in meaningful ways. You may often sense hidden potential, unseen patterns, or emotional truths that are difficult to explain logically. Something in you is drawn to transformation rather than stagnation.",
    desc2:
      "What makes this archetype powerful is alchemy. Magicians turn inner movement into outer change. Your gift is seeing what could be transformed, awakened, or reimagined — in yourself, in others, and sometimes in the whole atmosphere around you. You carry possibility with intention.",
    meaning1:
      "This result often means your soul is highly attuned to transition, reinvention, and unseen connections. You may sense potential before it becomes visible to others. You are often less interested in maintaining the current form of things than in understanding how they can evolve into something more aligned, alive, or meaningful.",
    meaning2:
      "Because of that, you may be drawn to inner work, symbolic thinking, creative transformation, or emotional reinvention. You often feel that life is not fixed. It is fluid. That perspective can make you powerful, intuitive, and deeply perceptive. It can also make it hard to stay patient with what feels stagnant or unfinished.",
    showUp1:
      "In daily life, this archetype can show up as intuition, reinvention, emotional depth, fascination with symbolism, and a strong instinct for transformation. You may notice what is changing before anyone says it out loud, or feel the hidden current moving beneath a visible situation.",
    showUp2:
      "You may also be the kind of person who changes the atmosphere simply by becoming more conscious yourself. Your presence can awaken movement in others. The challenge is learning that transformation does not always need to be dramatic to be real. Sometimes the deepest shifts are slow, grounded, and quiet.",
    strengths: "Transformation, intuition, vision",
    strengthDetails:
      "Your strengths include symbolic intelligence, intuition, adaptability, and the ability to recognize what can be reshaped into something more meaningful. You often carry powerful creative and emotional energy. When grounded, that energy can help you transform not just your life, but the emotional environment around you.",
    watchOut: "Trying to reinvent everything before fully grounding yourself",
    watchOutDetails:
      "What may feel difficult is staying rooted while change is unfolding. Because you are so connected to possibility and reinvention, you may sometimes move too quickly, chase transformation for its own sake, or struggle to stay with ordinary structure long enough for your vision to stabilize. Magic still needs form.",
    bestMatch:
      "People and paths that welcome depth, change, and meaningful evolution",
    growth1:
      "Growth for you often means grounding your intuition in structure. Transformation becomes more powerful when it is embodied, paced, and sustained. You do not lose your magic by becoming consistent. You make it usable.",
    growth2:
      "The healthiest Magician is not someone who endlessly reinvents themselves. It is someone who knows how to integrate change, trust timing, and let transformation become a lived reality rather than a permanent state of emotional motion.",
    reminder:
      "You are here to transform, not to constantly disappear and begin again. Let your magic take root.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "dreamer";
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
          Archetype Personality Result
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
            href="/quiz/archetype-at-heart"
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

export default function ArchetypeAtHeartResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}