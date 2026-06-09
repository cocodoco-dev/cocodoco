"use client";

export const dynamic = "force-dynamic";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";

type ResultKey =
  | "the_replayer"
  | "the_forecaster"
  | "the_perfectionist"
  | "the_people_reader"
  | "the_decision_looper"
  | "the_silent_spiral";

type Result = {
  title: string;
  summary: string;
  desc1: string;
  desc2: string;
  meaning1: string;
  meaning2: string;
  showUp1: string;
  showUp2: string;
  strengths: string;
  strengthDetails: string;
  watchOut: string;
  watchOutDetails: string;
  growth1: string;
  growth2: string;
  reminder: string;
  bestMatch: string;
};

const results: Record<ResultKey, Result> = {
  the_replayer: {
    title: "The Replayer 🔁",
    summary:
      "Your brain doesn't let go of moments easily. Long after a conversation ends, a decision is made, or something small goes wrong — you're still in it, replaying every detail.",
    desc1:
      "The way you process experience is through repetition. You return to scenes — the exact words said, the pause before the reply, the expression on their face — and turn them over until something feels resolved. Except it rarely fully does. The loop keeps running.",
    desc2:
      "This isn't random. Replaying is one of the brain's core ways of consolidating memory and meaning, especially for emotionally significant events. Your mind is trying to understand something, extract a lesson, or prepare for next time. The problem is that it's hard to know when to stop.",
    meaning1:
      "Replaying is how your mind tries to process what happened — to find closure, meaning, or something you could do differently next time. At its core, it is a search for understanding.",
    meaning2:
      "It also means you take things seriously. Not everything is worth this much attention, but to you, interactions and outcomes matter — which says something important about how much you care.",
    showUp1:
      "In social situations, you're often quieter afterward than during. The real conversation happens in your head on the way home. Something that seemed fine will suddenly feel worth examining more closely.",
    showUp2:
      "In relationships, you remember things in detail — what someone said three weeks ago, the way a conversation shifted. This makes you deeply attuned to others, and occasionally very hard on yourself.",
    strengths: "Emotional memory, depth, attunement",
    strengthDetails:
      "You notice things others let slide past. You learn from experience in a way that genuinely shapes how you move forward. And you give weight to interactions and people that many would take for granted.",
    watchOut: "The loop can become the point",
    watchOutDetails:
      "Sometimes replaying stops being useful and becomes a way of staying inside a moment that has already passed. When the same scene has played out more than a few times without new insight, that's the signal — it's time to step out.",
    growth1:
      "Try naming what you're actually looking for when the loop starts. Closure? Proof that you handled it right? Understanding of what went wrong? Naming the question sometimes helps more than replaying the scene.",
    growth2:
      "Give yourself a soft limit. Revisit once — intentionally — then redirect. You don't have to stop thinking about it entirely. You just don't have to live in it.",
    reminder:
      "The moment has already passed. You survived it — you don't have to keep living inside it.",
    bestMatch:
      "The Silent Spiral — both of you process deeply and internally, and understand the kind of thinking that doesn't always need to be said out loud.",
  },

  the_forecaster: {
    title: "The Forecaster ⛈️",
    summary:
      "Before anything happens, your mind has already run through the possibilities. You're thinking about what might go wrong — not because you're pessimistic, but because you want to be ready.",
    desc1:
      "Your brain runs ahead of the present. A plan forms, and immediately your mind starts probing it: what if this doesn't work? What if something unexpected happens? What would you do then? It's not pure anxiety — it's preparation. The problem is that preparation mode never fully switches off.",
    desc2:
      "Forecasting is a genuinely valuable cognitive skill. Anticipating problems, thinking several steps ahead, preparing for contingencies — these are real strengths. The shadow side is that the future-running can crowd out the present and leave you exhausted by scenarios that never actually arrive.",
    meaning1:
      "Your overthinking is forward-facing — it lives in the future rather than the past. This means you're someone who thinks ahead, who prepares rather than reacts, who takes possibilities seriously.",
    meaning2:
      "It also means anxiety, for you, tends to look like contingency planning. You're not just worrying — you're building mental models. That distinction matters.",
    showUp1:
      "Before big events, you rehearse outcomes. You know what you'd do if X happens, and Y, and Z. Others might find you overprepared. You find them underprepared.",
    showUp2:
      "In relationships and friendships, you sometimes anticipate problems before they've emerged — which can make you protective, and occasionally preemptively anxious about things that weren't actually developing into issues.",
    strengths: "Preparedness, strategic thinking, resilience",
    strengthDetails:
      "You rarely get blindsided. You've already thought about it. When things do go sideways, you have a plan — or at least a direction. That capacity for forward-thinking is a real and underappreciated form of intelligence.",
    watchOut: "You can exhaust yourself on futures that don't arrive",
    watchOutDetails:
      "The forecasts feel urgent. But the majority of worst-case scenarios your brain prepares for will never happen. Notice how often the thing you stayed up imagining actually came true — and recalibrate from there.",
    growth1:
      "When the spiral starts, ask: is this a problem I'm solving, or a worry I'm running? Actual problem-solving moves forward. Pure forecasting loops. If it's looping, it's probably not solving.",
    growth2:
      "Practice the question: what do I need to do right now, today? Not in the hypothetical future. Right now. Let the rest be unscheduled.",
    reminder:
      "You've been prepared for a lot of things that never happened. Your brain works hard to protect you — you're allowed to give it some rest.",
    bestMatch:
      "The Decision Looper — both of you think carefully about outcomes, and you can appreciate someone who takes choices as seriously as you do.",
  },

  the_perfectionist: {
    title: "The Perfectionist 🔍",
    summary:
      "Your brain has an internal editor that's always on. It notices what could be better, what fell short, what isn't quite finished — even when everyone else thinks it's fine.",
    desc1:
      "Your overthinking is quality-focused. It's not primarily about what others think, or what might happen next — it's about whether the thing itself was done right. A text message could have been worded better. The conversation could have landed differently. You're already drafting the revision.",
    desc2:
      "This kind of thinking is behind a lot of genuinely excellent work. Perfectionist thinking pushes for higher standards, catches things others miss, and refuses to settle. The cost is that it can also make rest feel unearned and completion feel elusive.",
    meaning1:
      "Your mind holds a high standard — not because you're hard on others, but because you're hard on yourself. You care about quality, about doing things right, about not leaving loose ends. That is not a flaw. It is a form of integrity.",
    meaning2:
      "The flip side is that this internal editor can be loud. It often speaks up after the fact — when it's too late to change anything — which turns productive self-reflection into unproductive self-criticism.",
    showUp1:
      "You notice things after they've been sent, submitted, or said — the better word, the cleaner sentence, the smarter response. You often feel most satisfied with work not when it's done, but when you've put it away long enough to stop seeing it.",
    showUp2:
      "In conversations, you're a careful communicator. You think before you speak. And you sometimes feel the weight of things after they're out — replaying the phrasing, not just the outcome.",
    strengths: "Precision, care, high standards",
    strengthDetails:
      "You produce work and responses that other people trust. Your attention to detail is real. When you sign off on something — really sign off — people can rely on it. That's worth a lot.",
    watchOut: "Done is better than perfect — but your brain hasn't been told",
    watchOutDetails:
      "The internal editor is most destructive when it runs after you can no longer change anything. Notice when the review starts. If it begins post-submission, post-send, or post-conversation — that's not quality control anymore. That's overthinking.",
    growth1:
      "Practice the concept of 'good enough for now.' Not everything needs to be your best work. Some things just need to be done. Save the highest standards for the things that actually warrant them.",
    growth2:
      "Give yourself a closing ritual — a moment where you consciously close the loop. 'That is done. The window is closed.' It sounds small, but it genuinely helps signal your brain that review time is over.",
    reminder:
      "You don't have to earn rest by doing things perfectly. The effort itself is enough.",
    bestMatch:
      "The Replayer — both of you revisit experiences with care, and you both understand the need to look back and refine.",
  },

  the_people_reader: {
    title: "The People Reader 👁️",
    summary:
      "You're always reading the room — and reading people specifically. You track expressions, pauses, and reactions the way others track words.",
    desc1:
      "Your overthinking is other-directed. It lives in the space between you and everyone else — what they felt, what they think of you, what their silence meant. You move through social situations with a quiet awareness running constantly in the background.",
    desc2:
      "This is a genuine social intelligence. You catch things others miss. You know when someone's mood has shifted before they've said anything. You can sense tension, excitement, or discomfort in a room. The cost is that you spend a lot of energy tracking things that may not need tracking.",
    meaning1:
      "You care about how others experience you — not out of vanity, but out of genuine investment in connection. When you wonder how you came across, it's often because you care about the relationship, not just the impression.",
    meaning2:
      "Your sensitivity to others' states is a form of empathy. You feel the weight of social dynamics because you're genuinely attuned to them. That attunement, turned inward, sometimes becomes anxiety.",
    showUp1:
      "After social situations, you replay your own performance — not just what happened, but how you were received. You notice who went quiet, who laughed less, who seemed a little off. And you often assume it has something to do with you.",
    showUp2:
      "In close relationships, you're deeply attuned. You pick up on shifts in mood, energy, and connection. Friends often feel understood by you in ways they can't quite explain.",
    strengths: "Emotional intelligence, social awareness, empathy",
    strengthDetails:
      "You read people accurately and quickly. This makes you an attentive friend, a perceptive collaborator, and someone who rarely says the wrong thing in the wrong moment — because you're always paying attention.",
    watchOut: "The story you're reading might be the one you're writing",
    watchOutDetails:
      "Most of the time, the pause wasn't about you. The short reply wasn't a signal. People are living their own complicated internal lives, and their reactions to you are usually a small fraction of what they're dealing with.",
    growth1:
      "Practice the question: is this thing I'm reading actually there — or am I interpreting? Both are possible. Notice which one you do more when you're stressed.",
    growth2:
      "Give other people the same generosity you'd want. If a friend told you they'd been quiet because they were tired, you'd believe them. Try applying that same belief when someone's quietness isn't immediately explained.",
    reminder:
      "Not everything is about you — and that's actually a relief, not a rejection.",
    bestMatch:
      "The Silent Spiral — they're not performing for you, and you can sense that. That kind of genuine presence feels rare.",
  },

  the_decision_looper: {
    title: "The Decision Looper 🔄",
    summary:
      "You don't take choices lightly. Any decision — from what to say in a text to what to do next year — gets held, turned over, and examined until you've seen every angle. The problem is, the process rarely ends on its own.",
    desc1:
      "Your overthinking is decision-focused. You're not stuck in the past or bracing for the future — you're suspended in the moment of choice. You can see the logic in multiple paths, feel the weight of each option, and genuinely resist committing until something feels certain. Certainty, unfortunately, rarely arrives on schedule.",
    desc2:
      "This comes from taking choices seriously — which is not a flaw. People who decide easily often just have lower awareness of consequences. You see the implications. The difficulty is that analysis, past a certain point, no longer produces better decisions. It produces more analysis.",
    meaning1:
      "Looping on decisions often means you have more than one value pulling in different directions. You're not indecisive — you're genuinely complex. More than one thing matters to you, and you don't want to betray any of them.",
    meaning2:
      "It also means you're accountable. You want to get it right. When you finally commit, it's because you've genuinely thought it through — and that commitment tends to stick.",
    showUp1:
      "Small decisions can take longer than big ones — because there's no obvious rule for them. What to order, what to reply, whether to say something now or wait — these can loop longer than career choices, because they lack clear stakes to organize around.",
    showUp2:
      "In relationships, you're thoughtful and slow to commit — but once you do, you're all in. You've already mapped the path from multiple angles. You chose it with your eyes open.",
    strengths: "Thoughtfulness, depth, commitment",
    strengthDetails:
      "When you make a choice, it's a real choice — not a reflex, not a guess. You've considered it. The people and decisions you commit to receive the kind of attention that most people never give anything.",
    watchOut: "Delay is a decision too",
    watchOutDetails:
      "Looping on a decision is not neutral. Every day you spend undecided is a day you've implicitly chosen the status quo. Notice when the loop has stopped generating new information — because at that point, deciding is almost always better than continuing to loop.",
    growth1:
      "Set a decision deadline — even an artificial one. Tell yourself: by tomorrow evening, I'll have chosen. The constraint often clarifies more than more analysis would.",
    growth2:
      "Ask: what would I tell a friend to do in this exact situation? Your advice to others is usually cleaner than your advice to yourself. Use that.",
    reminder:
      "Most decisions are reversible. Very few choices are as permanent as the weight you give them.",
    bestMatch:
      "The Forecaster — they think carefully about outcomes too, and they understand that some things just take more thought than a gut reaction allows.",
  },

  the_silent_spiral: {
    title: "The Silent Spiral 🌀",
    summary:
      "Your overthinking is mostly invisible. You carry it quietly — processing in the background, rarely showing what's actually running — and most people have no idea how much is happening inside.",
    desc1:
      "Your mind is active in ways that aren't obvious from the outside. While the conversation moves forward, something in you is tracking, processing, and holding more than you're sharing. It's not dishonesty — it's that the full picture feels too complicated, or too private, or not ready yet.",
    desc2:
      "This kind of internal processing has its own logic. Some things need to be understood before they can be said. Some feelings need to be felt privately before they're ready to be shared. The spiral can be a form of care — not burdening others, holding complexity gracefully. The cost is isolation.",
    meaning1:
      "Spiraling quietly often means you've learned — somewhere along the way — that not everything you're thinking is welcome, or safe, or easy to explain. You've become skilled at holding things alone.",
    meaning2:
      "It also means you're deeply self-sufficient in how you process. You don't need external validation to work through something. You just need time — and some kind of quiet.",
    showUp1:
      "People often describe you as calm, easygoing, or low-drama. What they don't see is the amount of internal activity underneath. You look unbothered because you've learned to hold your processing inside.",
    showUp2:
      "In close relationships, you sometimes get labeled as closed off or hard to read — not because you don't care, but because your internal world runs so much deeper than what you show.",
    strengths: "Self-containment, depth, resilience",
    strengthDetails:
      "You can hold complexity without falling apart. You process difficult things without externalizing them in ways that affect others. In a crisis, you're often the stable one — because you've been carrying hard things quietly for a long time.",
    watchOut: "The spiral can become a closed loop",
    watchOutDetails:
      "Processing things internally has limits. When a spiral has been running for a long time without resolution, it usually means something needs to come out — said to someone, written down, or simply acknowledged out loud. Keeping it inside indefinitely isn't processing. It's carrying.",
    growth1:
      "Try sharing one thing sooner than feels comfortable. Not everything — just one layer. See what happens when the weight is witnessed rather than carried alone.",
    growth2:
      "Writing things down can be a bridge between internal processing and external expression. You don't need to show anyone. Just getting it outside your head and onto a page changes your relationship with it.",
    reminder:
      "You are allowed to take up space — in conversation, in relationships, in your own life. Being low-maintenance is not the same as being invisible.",
    bestMatch:
      "The Replayer — they process deeply too, and they'll never rush you or make you feel like too much.",
  },
};

function ResultContent() {
  const params = useSearchParams();
  const rawKey = params.get("type") ?? "";
  const key: ResultKey =
    rawKey && rawKey in results
      ? (rawKey as ResultKey)
      : "the_replayer";
  const r = results[key];

  return (
    <main
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "48px 18px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "32px" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 style={{ fontSize: "36px", margin: 0, color: "#111827" }}>
            cocodoco
          </h1>
        </a>
      </header>

      <div style={{ maxWidth: "min(860px, 100%)", margin: "0 auto" }}>
        <p
          style={{
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#9d174d",
            textTransform: "uppercase",
            marginBottom: "10px",
            textAlign: "center",
          }}
        >
          Your Overthinker Type
        </p>

        <div
          style={{
            width: "min(760px, 100%)",
            height: "100px",
            borderRadius: "14px",
            border: "1px dashed #f2a7b8",
            background: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: "14px",
            margin: "0 auto 24px",
          }}
        >
          Ad Space (Google AdSense will go here)
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.85)",
            borderRadius: "18px",
            padding: "32px 28px",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
            lineHeight: 1.8,
          }}
        >
          <h2
            style={{
              fontSize: "32px",
              fontWeight: 800,
              color: "#111827",
              marginBottom: "12px",
              lineHeight: 1.2,
            }}
          >
            {r.title}
          </h2>

          <p
            style={{
              fontSize: "18px",
              color: "#374151",
              marginBottom: "20px",
              lineHeight: 1.7,
              fontWeight: 500,
            }}
          >
            {r.summary}
          </p>

          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "14px" }}>
            {r.desc1}
          </p>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "28px" }}>
            {r.desc2}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            What this overthinking style means
          </h2>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "14px" }}>
            {r.meaning1}
          </p>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "28px" }}>
            {r.meaning2}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            How this shows up in your life
          </h2>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "14px" }}>
            {r.showUp1}
          </p>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "28px" }}>
            {r.showUp2}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Your strengths
          </h2>
          <p
            style={{
              color: "#9d174d",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            {r.strengths}
          </p>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "28px" }}>
            {r.strengthDetails}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            What may feel difficult
          </h2>
          <p
            style={{
              color: "#9d174d",
              fontSize: "14px",
              fontWeight: 700,
              marginBottom: "8px",
            }}
          >
            {r.watchOut}
          </p>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "28px" }}>
            {r.watchOutDetails}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            Growth path
          </h2>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "14px" }}>
            {r.growth1}
          </p>
          <p style={{ color: "#4b5563", fontSize: "15px", marginBottom: "28px" }}>
            {r.growth2}
          </p>

          <h2
            style={{
              fontSize: "20px",
              fontWeight: 700,
              color: "#111827",
              marginBottom: "12px",
            }}
          >
            A small reminder for you
          </h2>
          <p
            style={{
              color: "#4b5563",
              fontSize: "16px",
              fontStyle: "italic",
              marginBottom: "20px",
              borderLeft: "3px solid #fb7185",
              paddingLeft: "16px",
            }}
          >
            {r.reminder}
          </p>

          <p style={{ color: "#6b7280", fontSize: "14px" }}>
            <strong style={{ color: "#111827" }}>Best match:</strong>{" "}
            {r.bestMatch}
          </p>
        </div>

        <div
          style={{
            marginTop: "24px",
            textAlign: "center",
          }}
        >
          <a
            href="/quiz/overthinker-type"
            style={{
              display: "inline-block",
              padding: "12px 28px",
              background:
                "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)",
              color: "white",
              borderRadius: "14px",
              textDecoration: "none",
              fontWeight: 700,
              fontSize: "15px",
            }}
          >
            Retake the quiz →
          </a>
        </div>

        <div
          style={{
            width: "min(760px, 100%)",
            height: "100px",
            borderRadius: "14px",
            border: "1px dashed #f2a7b8",
            background: "rgba(255,255,255,0.6)",
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            color: "#9ca3af",
            fontSize: "14px",
            margin: "24px auto 0",
          }}
        >
          Ad Space (Google AdSense will go here)
        </div>

        <div style={{ textAlign: "center", marginTop: "16px" }}>
          <a
            href="/"
            style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}
          >
            ← Back to all quizzes
          </a>
        </div>
      </div>
    </main>
  );
}

export default function OverthinkerTypeResult() {
  return (
    <Suspense>
      <ResultContent />
    </Suspense>
  );
}
