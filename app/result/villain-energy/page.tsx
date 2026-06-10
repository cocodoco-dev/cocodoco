"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  the_mastermind: {
    title: "Your Villain Energy: The Mastermind 🧠",
    summary:
      "You don't do chaos. You do control — quiet, precise, and several moves ahead. By the time anyone realizes what happened, it's already done.",
    desc1:
      "Your villain energy is cold intelligence. You don't need to be loud, dramatic, or threatening in any obvious way — because your real weapon is the plan. You see systems. You see patterns. You see three steps ahead of where everyone else is looking, and you move accordingly, quietly, without fanfare.",
    desc2:
      "The mastermind doesn't need to win every argument. Doesn't even need to be in the room. You are most dangerous not when you react, but when you have already anticipated — and prepared.",

    meaning1:
      "This energy often belongs to people who process deeply and stay several layers below the surface of any situation. You are not impulsive. You are strategic — which means you tend to be patient in a way that reads as cold, and calm in a way that reads as untouchable.",
    meaning2:
      "In practice, this looks like someone who rarely overreacts, rarely shows their full hand, and always seems to know more than they're saying. That capacity for quiet observation and delayed action is, in real life, one of the most powerful things a person can have.",

    showUp1:
      "In real life, your mastermind energy shows up as the person who says little in a room but walks away having understood every dynamic in it. You plan before you speak. You don't ask questions you don't already know the answer to.",
    showUp2:
      "People often underestimate you initially — because you don't perform power. And then something happens, and the room realizes exactly who they were dealing with.",

    strengths: "Strategic thinking, patience, self-control",
    strengthDetails:
      "You don't get rattled. You don't act on impulse. You can hold a long game in a way that most people genuinely cannot sustain. Over time, this produces results that look almost inevitable in retrospect — because you saw them coming long before anyone else did.",

    watchOut: "The plan can become a way of never fully trusting anyone",
    watchOutDetails:
      "When you're always the one who sees it coming, it's easy to start assuming everyone is always angling for something — and to stop letting people in. The mastermind's weakness is not naivety. It's loneliness dressed up as strategy.",

    growth1:
      "Notice when the planning becomes a substitute for presence. Not every interaction is a negotiation. Not everyone in your life is a variable to be calculated.",
    growth2:
      "Let some things be unplanned. The best parts of your life probably won't come from your most strategically optimized decisions.",

    reminder:
      "You don't have to have every angle covered to be safe. Some people are actually just what they appear to be.",
    bestMatch:
      "The Silent Threat — equally private, equally composed. No performance required, no demands for explanation. Two people who understand each other without needing to.",
  },

  the_charmer: {
    title: "Your Villain Energy: The Charmer 🌹",
    summary:
      "You're likeable. Magnetic, even. And you know it — which is what makes you dangerous. People trust you before they've had any reason to.",
    desc1:
      "Your villain energy is social power. You understand people — what they want, what they respond to, what makes them feel seen — and you move through social situations with an ease that others find genuinely disarming. The charmer doesn't need force. The charmer makes you like them first.",
    desc2:
      "This isn't manipulation in the crude sense. It's something more sophisticated: an acute awareness of social dynamics, an instinct for what other people need, and the ability to become exactly the right version of yourself for the moment. When a charmer uses this capacity without genuine care — purely strategically — the people on the receiving end never see it coming.",

    meaning1:
      "Charmer energy often belongs to people who are genuinely perceptive and emotionally intelligent — who see other people clearly and respond to what they actually find. In its best form, this is warmth. In its shadow form, it is leverage.",
    meaning2:
      "The distinction is intention. Using social intelligence to connect genuinely is one of the most beautiful things a person can do. Using it to manage, steer, or get what you want without the other person knowing is the villain version. Most charmers have done both.",

    showUp1:
      "In real life, your charmer energy shows up as the person who is universally liked — who navigates very different kinds of people effortlessly, who never seems to put a foot wrong socially, and who leaves every room with people feeling inexplicably good about themselves.",
    showUp2:
      "It also shows up as a slight tendency to give people the version of yourself they're most likely to respond to, rather than the full picture. Which means people sometimes feel like they know you — and then realize they never quite did.",

    strengths: "Social intelligence, adaptability, natural influence",
    strengthDetails:
      "You are effective in situations that would leave most people flailing — because you can read what's needed and become it. In high-pressure social situations, in negotiations, in conflict, your ability to stay likeable and calibrated is a genuinely rare skill.",

    watchOut: "The performance can become your only mode",
    watchOutDetails:
      "If you've been charming people for long enough, it can become hard to be genuinely unguarded — to let people see you confused, uncertain, or not at your best. The charmer's risk is becoming so practiced at managing impressions that the unmanaged version of yourself starts to feel foreign.",

    growth1:
      "Try being genuinely bad at something in front of someone you care about. Let the gap show. Real intimacy exists in the parts of you that don't charm.",
    growth2:
      "Notice when you're reading a person to understand them versus reading a person to figure out how to handle them. The first builds something real. The second only builds leverage.",

    reminder:
      "You are more than your best angle. The people worth having in your life will stay for the full picture.",
    bestMatch:
      "The Mastermind — you're the only ones who can see through each other, and there's something genuinely thrilling about that.",
  },

  the_rebel: {
    title: "Your Villain Energy: The Rebel 🔥",
    summary:
      "You don't follow rules you didn't agree to. Full stop. Call it chaos, call it principle — you call it the only way to live.",
    desc1:
      "Your villain energy is conviction-fueled defiance. You are not chaotic for the sake of it — you're chaotic because the alternative is complying with things you genuinely believe are wrong. The rebel's energy comes from somewhere real: a belief that systems are made by people who benefit from them, that rules are negotiable, that authority needs to be earned rather than assumed.",
    desc2:
      "What separates the rebel from pure anarchy is the values underneath. You're not just opposed to things — you're opposed to specific things, for specific reasons. You have a code. It just isn't the one that was handed to you.",

    meaning1:
      "Rebel energy often belongs to people who paid attention early — who looked at how things worked and noticed the gap between the stated rules and who actually benefits from them. The rebellion is not always loud. Sometimes it is just a quiet refusal to pretend something is fine when it isn't.",
    meaning2:
      "It also means you have a high tolerance for social disapproval. You can hold a position that most people around you reject and feel perfectly stable in it. That kind of groundedness is genuinely rare — and occasionally infuriating to everyone around you.",

    showUp1:
      "In real life, your rebel energy shows up as the person who says the thing no one else would say, who breaks the norm without seeming to notice it was even a norm, who makes everyone around them re-examine something they'd been taking for granted.",
    showUp2:
      "It also shows up as a slightly scorched-earth approach to authority. You don't do compliance gracefully. You do it, if at all, while making your position clear — and sometimes you don't do it at all.",

    strengths: "Integrity, courage, independent thinking",
    strengthDetails:
      "You cannot be pressured into positions you don't hold. You cannot be bought with approval, or kept in line by the fear of what people will think. That independence is a real and increasingly rare thing, and it gives you a kind of moral clarity that people with more to lose simply cannot access.",

    watchOut: "The rebellion can become the identity",
    watchOutDetails:
      "When defiance is your default mode, you can end up opposing things reflexively — not because they're wrong, but because agreeing feels like compliance. Some of the rules are actually fine. Some of the structures actually work. The rebel who can't distinguish those from the ones worth fighting has made the fight itself the point.",

    growth1:
      "Notice when you're resisting something because it's genuinely worth resisting — and when you're resisting it because capitulating feels like a loss of self. The second one is ego, not principle.",
    growth2:
      "The most powerful version of rebel energy is selective. You pick your battles not because some things don't matter, but because your energy is finite and the battles worth having deserve your full attention.",

    reminder:
      "You don't have to fight everything to stand for something. Knowing what's actually worth burning down is the real skill.",
    bestMatch:
      "The Lone Wolf — independent, self-contained, unbothered by your intensity. They don't need you to perform anything, which gives you real permission to be exactly what you are.",
  },

  the_lone_wolf: {
    title: "Your Villain Energy: The Lone Wolf 🐺",
    summary:
      "You don't need people. That's not a complaint — it's a fact you made peace with a long time ago. The solitude is chosen. The independence is total.",
    desc1:
      "Your villain energy is self-sufficiency so complete it reads as untouchable. You function best alone, you make decisions alone, and you trust almost no one with the full picture of who you are or what you're doing. This is not loneliness. It is sovereignty — a settled sense that you are most yourself when you owe nothing to no one.",
    desc2:
      "The lone wolf doesn't need validation, doesn't need backup, and doesn't need permission. What other people read as coldness is actually something more like freedom: the absence of the need to manage anyone else's feelings about your choices. The cost is real. So is the clarity.",

    meaning1:
      "Lone wolf energy often develops in people who learned early — through experience or through temperament — that relying on others creates risk. Somewhere along the way, self-sufficiency became both a survival strategy and a deeply held value. Now it is simply who you are.",
    meaning2:
      "It also means you have a very low tolerance for dependency — in yourself and occasionally in others. You find excessive need uncomfortable to witness, partly because you've worked so hard to excise it in yourself. That can make you hard to get close to, even when you would welcome it.",

    showUp1:
      "In real life, lone wolf energy shows up as the person who handles things. Who doesn't ask for help unless absolutely necessary. Who has a specific kind of quiet competence that makes other people feel vaguely more chaotic by comparison.",
    showUp2:
      "It also shows up as a slightly impenetrable quality. People often feel like you have a whole interior world they don't have access to — and they're right. You decide who gets in, and the bar is high.",

    strengths: "Independence, resilience, trustworthiness",
    strengthDetails:
      "You do not buckle under pressure. You do not make decisions based on what people will think. You are the person people call when things go genuinely wrong — because you're one of the few who doesn't panic and doesn't need to be managed through the crisis.",

    watchOut: "Self-sufficiency can become a wall that even you can't get over",
    watchOutDetails:
      "When the independence is complete enough, connection can stop feeling like something you want and start feeling like something you're just not built for. That's a story, not a fact. The lone wolf's real vulnerability is not other people — it's the belief that needing anyone is a weakness.",

    growth1:
      "Ask for one thing you could technically do yourself. Not because you need it, but to practice letting someone else contribute. Need is not weakness. It is how connection is made.",
    growth2:
      "Notice the difference between the independence that protects you and the independence that isolates you. The first is a strength. The second is protection that has outlived the threat.",

    reminder:
      "Choosing solitude is different from being unable to choose otherwise. Make sure you still know the difference.",
    bestMatch:
      "The Rebel — equally self-contained, equally unbothered. No expectations, no demands. Two people who are genuinely fine alone and occasionally choose not to be.",
  },

  the_dramatic: {
    title: "Your Villain Energy: The Dramatic 🎭",
    summary:
      "If you're going to do something, the world is going to know. Subtlety was never the goal. The goal was unforgettable.",
    desc1:
      "Your villain energy is theatrical power. You understand instinctively that how something is presented shapes how it is received — and you have a gift for presentation. The entrance, the exit, the well-timed line, the look that says everything without a word — these are your native language.",
    desc2:
      "The dramatic villain is not frivolous. The theatricality is a strategy: it takes up space, it creates narrative, it controls the room's attention. Being unforgettable is not vanity — it is power. The person who makes the most impression shapes how the story gets told afterward.",

    meaning1:
      "Dramatic energy often belongs to people who feel things intensely and communicate that intensity outwardly — through expression, through presence, through a natural tendency to make meaning out of experience. You don't do things halfway. When you're in, you're completely in.",
    meaning2:
      "It also means you have a finely tuned sense of narrative — of how situations arc, how moments land, what the right line is for this particular beat. That is not performance in the shallow sense. It is emotional intelligence expressed as theater.",

    showUp1:
      "In real life, your dramatic energy shows up as the person people remember. The one whose stories are always compelling, whose reactions are always genuine, whose presence in a room changes the temperature. You make ordinary moments feel significant.",
    showUp2:
      "It also shows up as a very low tolerance for being ignored, underestimated, or reduced to background. You were not built for that. And you will find a way to make that clear, with or without a speech prepared.",

    strengths: "Presence, emotional expressiveness, the ability to move people",
    strengthDetails:
      "You make things matter to people who otherwise wouldn't have noticed them. You can shift the energy of a room, change the stakes of a conversation, or make someone feel deeply seen — all through the power of your attention and expression. That is genuine charisma.",

    watchOut: "The scene can become more important than what's actually true",
    watchOutDetails:
      "When intensity is your default mode, there's a risk of escalating things that didn't need escalating — of turning a small moment into a narrative that serves the story you wanted to tell rather than the one that's actually happening. Drama is most powerful when it's reserved for things that deserve it.",

    growth1:
      "Practice letting some moments be quiet. Not every feeling needs an audience, and not every moment needs to be made into something. Some of your most significant experiences are probably the ones you haven't told anyone.",
    growth2:
      "Notice when you're performing a feeling versus actually feeling it. Both are real, but only one of them is telling you something true about what you need.",

    reminder:
      "You don't have to earn your significance through impact. You are allowed to exist without producing a scene.",
    bestMatch:
      "The Mastermind — they appreciate your power even when they'd never use it themselves. And they're one of the few people whose composure genuinely challenges you.",
  },

  the_silent_threat: {
    title: "Your Villain Energy: The Silent Threat 🖤",
    summary:
      "You say very little. You notice everything. People tend to realize, a little too late, that the quiet one in the corner knew exactly what was happening the whole time.",
    desc1:
      "Your villain energy is compressed and invisible. You don't announce yourself. You don't react visibly. You don't fill silence with noise. And because most people can't read what they can't see, they consistently miscalculate you — which is, intentionally or not, exactly the position you prefer to be in.",
    desc2:
      "The silent threat's power comes not from what they do but from what they don't do. Composure under pressure. Silence when others scramble to speak. The ability to watch a situation fully without tipping your hand. These are not passive qualities. They are deliberate ones.",

    meaning1:
      "Silent threat energy often belongs to people who learned early that observation is more powerful than announcement — that you can learn more from watching than from talking, and that showing your full reaction gives other people information they can use against you. The stillness is strategic, whether or not it was originally conscious.",
    meaning2:
      "It also belongs to people who process deeply and internally — who have rich, complex inner lives that almost no one has full access to. The silence is not absence. It is a held interior that you simply don't choose to broadcast.",

    showUp1:
      "In real life, your silent threat energy shows up as the person who says very little but whom everyone instinctively pays attention to when they do speak. The one who sees the dynamic before anyone else has named it. The one people are slightly careful around without quite knowing why.",
    showUp2:
      "It also shows up as a form of control under pressure that others find genuinely unnerving. When things go wrong, you don't externalize panic. You get quieter — which somehow makes the situation feel more serious, because everyone can tell something is being processed that hasn't been said yet.",

    strengths: "Observation, composure, strategic patience",
    strengthDetails:
      "You know what is actually happening in any room you're in. You rarely waste energy on reactions that don't serve you. And when you act, it's usually at exactly the right moment — because you've waited until you understood the situation fully. That kind of strategic patience is very difficult to learn and nearly impossible to fake.",

    watchOut: "Silence can become a way of never being known",
    watchOutDetails:
      "When withholding is your default — even in situations that don't require it — you can end up in relationships where you're present but not really there. The silent threat's weakness is not exposure. It's the gradual realization that nobody actually knows you — not because they didn't try, but because you never let them.",

    growth1:
      "Try speaking before you've fully processed something — before you've decided exactly what to say and how to say it. Real connection happens in the unpolished version. The gap, the uncertainty, the not-knowing-yet — that's where people actually find each other.",
    growth2:
      "Notice when your silence is about protecting yourself versus protecting a situation. Both are valid. But only the first one costs you something personal — and it's worth knowing the difference.",

    reminder:
      "Being known is not the same as being exposed. Some people can be trusted with the full version of you.",
    bestMatch:
      "The Mastermind — you recognize each other's intelligence without needing it explained. No performance required on either side.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey =
    rawKey && rawKey in results ? rawKey : "the_mastermind";
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
          Personality Result
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
            What this energy really means
          </h2>
          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            How this energy shows up in your life
          </h2>
          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            Your strengths
          </h2>
          <p style={{ marginBottom: "10px" }}>
            <strong>Core strengths:</strong> {r.strengths}
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
              fontFamily: "Arial, sans-serif",
            }}
          >
            {copied ? "Copied!" : "Share result"}
          </button>

          <a
            href="/quiz/villain-energy"
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

export default function VillainEnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
