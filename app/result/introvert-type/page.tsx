"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  quiet_observer: {
    title: "The Quiet Observer 👀",
    summary:
      "You are the kind of introvert who notices everything, says less than you know, and carries a calm presence with hidden depth.",
    desc1:
      "Your quietness is not emptiness. It is awareness. You naturally take in details, moods, patterns, and social dynamics that other people may miss. Even when you are not speaking much, your inner world is active, alert, and quietly interpreting what is happening around you.",
    desc2:
      "What makes this introvert type powerful is perception. Quiet Observers often understand more than they reveal. You may seem reserved at first, but your silence usually contains thoughtfulness rather than disconnection. You are often far more present than people realize.",
    meaning1:
      "This result often means your energy is rooted in observation before expression. You may prefer to understand a person, place, or situation before jumping in. That can make you thoughtful, emotionally aware, and careful with your trust.",
    meaning2:
      "Because of that, people may underestimate how much you see. They may assume you are shy, detached, or passive when in reality you are simply taking your time and choosing what feels worth saying.",
    showUp1:
      "In daily life, this introvert type can show up as quiet attentiveness, subtle emotional intelligence, thoughtful timing, and a strong ability to read the room. You may be the person who notices what changed, what was left unsaid, or what someone is trying not to show.",
    showUp2:
      "The challenge is that your depth can stay hidden if you are always observing and rarely stepping forward. Sometimes people cannot appreciate what they never get to hear. Your inner world deserves expression too.",
    strengths: "Perception, awareness, emotional intelligence",
    strengthDetails:
      "Your strengths include observation, nuance, patience, and quiet discernment. You often bring stability and understanding into situations simply by seeing clearly before reacting.",
    watchOut: "Staying too hidden inside silence",
    watchOutDetails:
      "What may feel difficult is that people can misunderstand reserved energy. If you stay in the background too long, your care, thoughts, and insight may go unnoticed. Your quietness is a strength, but it does not have to erase your voice.",
    bestMatch:
      "People and spaces that respect your pace and appreciate your quiet depth",
    growth1:
      "Growth for you often means trusting that your thoughts are worth sharing even before they feel perfect.",
    growth2:
      "The healthiest Quiet Observer still notices deeply, but also allows themselves to be known, heard, and included in the moment rather than always standing just outside it.",
    reminder:
      "Your silence is not small. It is full of awareness. Just remember that your voice matters too.",
  },

  deep_feeler: {
    title: "The Deep Feeler 💗",
    summary:
      "You are the kind of introvert who feels everything deeply, protects your heart carefully, and connects through emotional truth.",
    desc1:
      "Your inner world is emotionally rich. Even when you seem calm from the outside, you may be processing a lot beneath the surface. You care deeply, feel deeply, and often experience life through emotional nuance that others may not fully notice.",
    desc2:
      "What makes this introvert type powerful is depth of feeling. You are not quiet because you have nothing going on. You are quiet because your inner life carries real emotional weight, and not everyone feels safe enough to be invited into it.",
    meaning1:
      "This result often means your introversion is closely tied to emotional sensitivity. You may need time alone not only to rest, but to process, feel, and return to yourself after overstimulation or heavy interactions.",
    meaning2:
      "Because of that, you may value sincerity more than surface-level connection. You often want conversations, relationships, and experiences that feel real. Hollow energy can exhaust you quickly.",
    showUp1:
      "In daily life, this introvert type can show up as tenderness, empathy, emotional intuition, thoughtful distance, and a need for meaningful connection over casual social noise. You may be soft-hearted, but you are rarely shallow.",
    showUp2:
      "The challenge is that intense feeling can become heavy if you carry too much alone. You may hide your emotional world so well that others forget how deeply you are actually experiencing things.",
    strengths: "Empathy, emotional depth, sincerity",
    strengthDetails:
      "Your strengths include compassion, emotional honesty, sensitivity to nuance, and the ability to make people feel genuinely understood when they have earned your trust.",
    watchOut: "Feeling too much in silence and carrying it alone",
    watchOutDetails:
      "What may feel difficult is emotional overwhelm. Because your inner life runs deep, you may sometimes retreat so far inward that you begin holding everything by yourself. Your heart needs protection, but it also needs safe places to be seen.",
    bestMatch:
      "People and spaces that feel emotionally safe, sincere, and gentle",
    growth1:
      "Growth for you often means learning that sensitivity is not weakness and that emotional support does not make you burdensome.",
    growth2:
      "The healthiest Deep Feeler still loves deeply and feels fully, but also learns how to share the weight instead of always carrying it in private.",
    reminder:
      "Your depth is beautiful. Do not mistake your sensitivity for fragility. It is one of your quiet strengths.",
  },

  cozy_homebody: {
    title: "The Cozy Homebody 🕯️",
    summary:
      "You are the kind of introvert who recharges through peace, comfort, familiarity, and a life that feels emotionally safe.",
    desc1:
      "For you, rest is not laziness. It is restoration. You naturally feel most like yourself in spaces that are calm, familiar, and low-pressure. Home, or anything that feels like home, can become a place where your mind unclenches and your energy finally returns.",
    desc2:
      "What makes this introvert type powerful is steadiness. Cozy Homebodies often know how to create peace for themselves in a world that constantly pushes stimulation, busyness, and performance. You understand the emotional value of quiet comfort.",
    meaning1:
      "This result often means your introversion is deeply connected to environment. You may become drained quickly by chaotic schedules, noisy spaces, too many plans, or social demands that leave no room to reset.",
    meaning2:
      "Because of that, your peace matters more than people may understand. You are not necessarily avoiding life. You are protecting the conditions that help you feel grounded, safe, and emotionally regulated.",
    showUp1:
      "In daily life, this introvert type can show up as a love of staying in, low-stimulation routines, comforting rituals, soft environments, and a genuine need for downtime after social interaction. You may thrive most when life has a gentler rhythm.",
    showUp2:
      "The challenge is that others may misread your need for peace as withdrawal or lack of ambition. In reality, your quiet rhythm may be exactly what helps you function well and stay emotionally healthy.",
    strengths: "Peace, self-restoration, emotional steadiness",
    strengthDetails:
      "Your strengths include self-awareness, calming presence, restorative instincts, and the ability to create emotional safety through routine, comfort, and gentleness.",
    watchOut: "Letting comfort turn into avoidance too often",
    watchOutDetails:
      "What may feel difficult is that protection can sometimes become retreat. Rest is healthy, but hiding from every discomfort can shrink your world. The goal is not to abandon comfort. It is to let comfort support your life rather than replace it.",
    bestMatch:
      "People and spaces that respect your peace and do not treat quietness like a flaw",
    growth1:
      "Growth for you often means trusting that you can step into life and still return safely to yourself afterward.",
    growth2:
      "The healthiest Cozy Homebody still protects their peace, but also lets comfort become a base for living, not just a place to hide.",
    reminder:
      "Your love of peace is not weakness. It is wisdom. Just let it support your life, not shrink it.",
  },

  selective_social: {
    title: "The Selective Social Introvert 🌿",
    summary:
      "You are the kind of introvert who does not need everyone, but deeply values the right people.",
    desc1:
      "You are not closed off. You are selective. Your social energy depends less on the number of people around you and more on whether the connection feels safe, genuine, and worth your emotional bandwidth. With the wrong crowd, you may shut down. With the right people, you open beautifully.",
    desc2:
      "What makes this introvert type powerful is discernment. You know that connection is not about being available to everyone. It is about being real with the people who truly matter. You often value quality far more than quantity.",
    meaning1:
      "This result often means your introversion is connected to trust and emotional fit. You may not enjoy being socially 'on' for strangers or surface-level groups, but that does not mean you dislike people. It means your energy becomes alive under the right conditions.",
    meaning2:
      "Because of that, some people may misunderstand you as inconsistent or reserved. But the truth is that your openness is relational. It appears where real comfort and mutual energy exist.",
    showUp1:
      "In daily life, this introvert type can show up as having a small circle, preferring one-on-one connection, being quiet at first, and becoming much warmer once trust is built. You may seem private, but your people know your real energy.",
    showUp2:
      "The challenge is that protecting your energy can sometimes become over-filtering. If your guard stays too high, people who might genuinely fit your world may never get the chance to enter it.",
    strengths: "Discernment, loyalty, meaningful connection",
    strengthDetails:
      "Your strengths include strong boundaries, emotional selectiveness, depth in relationships, and the ability to build connection that feels genuine rather than performative.",
    watchOut: "Keeping the door closed a little too long",
    watchOutDetails:
      "What may feel difficult is knowing when caution is protecting you and when it is quietly isolating you. Not everyone deserves your openness, but some people do. The hard part is letting that possibility exist.",
    bestMatch:
      "People who are low-pressure, genuine, emotionally safe, and worth your trust",
    growth1:
      "Growth for you often means remembering that your standards are valid, but they do not need to become walls around your whole life.",
    growth2:
      "The healthiest Selective Social Introvert still protects their energy, but also allows new connection to grow where it feels real.",
    reminder:
      "You do not need many people. But the right people matter. Let them find you too.",
  },

  independent_thinker: {
    title: "The Independent Thinker 📚",
    summary:
      "You are the kind of introvert who recharges through thought, depth, and the freedom to follow your own mind.",
    desc1:
      "Your inner world is shaped by ideas. You naturally process life through reflection, analysis, curiosity, and meaning. While some people recharge through stimulation or emotional closeness, you often come back to yourself through thought, perspective, and mental space.",
    desc2:
      "What makes this introvert type powerful is inner independence. You do not always need external noise to feel alive. Your mind is already a rich place to be. You may feel most grounded when you have time to think things through in your own way.",
    meaning1:
      "This result often means your introversion is tied to mental depth more than emotional withdrawal. You may prefer meaningful conversation over casual chatter, depth over speed, and mental freedom over constant social engagement.",
    meaning2:
      "Because of that, you may sometimes seem detached when you are actually just processing internally. Your quietness may come less from insecurity and more from needing space to think before you speak.",
    showUp1:
      "In daily life, this introvert type can show up as a love of reading, learning, researching, analyzing, thinking deeply, or quietly building your own perspective on things. You may not always speak first, but when you do, it often carries weight.",
    showUp2:
      "The challenge is that a rich mental world can sometimes become distance from direct experience. Thinking is one of your strengths, but not every meaningful thing can be solved before it is lived.",
    strengths: "Depth, clarity, independence of mind",
    strengthDetails:
      "Your strengths include insight, thoughtful perspective, strong internal grounding, and the ability to go deeper than surface-level reactions. You often bring substance where others bring noise.",
    watchOut: "Living too much in thought and not enough in direct experience",
    watchOutDetails:
      "What may feel difficult is overthinking, mental isolation, or using reflection as a way to delay action or vulnerability. Wisdom becomes strongest when it stays connected to life.",
    bestMatch:
      "People and spaces that respect your mind, your pace, and your need for depth",
    growth1:
      "Growth for you often means trusting that experience can teach what thinking alone cannot.",
    growth2:
      "The healthiest Independent Thinker still values reflection, but also allows life to be lived in real time without needing every answer first.",
    reminder:
      "Your mind is a gift. Just do not let thought become the only place you live.",
  },

  creative_dreamer: {
    title: "The Creative Dreamer ✨",
    summary:
      "You are the kind of introvert who lives close to imagination, meaning, beauty, and a rich inner world.",
    desc1:
      "Your introversion feels less like withdrawal and more like depth of inner atmosphere. You may naturally drift into thought, imagination, symbolism, or quiet creativity. Even when you are physically present, part of you often remains connected to an inner world that feels more vivid than what is happening on the surface.",
    desc2:
      "What makes this introvert type powerful is inner richness. Creative Dreamers often bring softness, originality, and emotional imagination into life. You may process through aesthetics, ideas, feelings, or the strange little worlds your mind naturally creates.",
    meaning1:
      "This result often means your quietness is deeply tied to imagination and emotional texture. You may need solitude not only to rest, but to reconnect with inspiration, creativity, and the parts of yourself that get drowned out by too much external noise.",
    meaning2:
      "Because of that, you may sometimes feel difficult to explain. Others may see only your calm surface while missing how alive, layered, and meaningful your inner world actually is.",
    showUp1:
      "In daily life, this introvert type can show up as daydreaming, creative hobbies, emotional sensitivity to beauty and atmosphere, deep attachment to symbols or meaning, and a need for mental space to imagine freely.",
    showUp2:
      "The challenge is that inner beauty can sometimes make ordinary reality feel dull or hard to stay anchored in. Your imagination is a gift, but it needs some grounding to fully bloom in the world around you.",
    strengths: "Imagination, emotional richness, creativity",
    strengthDetails:
      "Your strengths include originality, sensitivity to beauty, emotional depth, symbolic thinking, and the ability to create meaning where others see only routine. You often carry magic quietly.",
    watchOut: "Getting lost in your inner world and struggling to ground it",
    watchOutDetails:
      "What may feel difficult is translating your inner richness into outer life. When reality feels too flat, you may drift away instead of building something tangible from what you feel and imagine. Your inner world deserves expression, not only escape.",
    bestMatch:
      "People and spaces that understand your sensitivity, imagination, and need for creative freedom",
    growth1:
      "Growth for you often means trusting that your creativity does not lose its magic when it takes real form.",
    growth2:
      "The healthiest Creative Dreamer still protects their inner world, but also lets it become art, expression, connection, and lived beauty.",
    reminder:
      "Your inner world is real. Let it become something you can live inside, not only visit in private.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "quiet_observer";
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
          Introvert Type Result
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
            What this introvert type means
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
            How this energy shows up in your life
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
            href="/quiz/introvert-type"
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

export default function IntrovertTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}