"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  overthinker: {
    title: "The Overthinker 🫧",
    summary:
      "Your shadow side is the tendency to turn fear, uncertainty, and emotion into endless mental noise.",
    desc1:
      "When life feels uncertain, your mind tries to protect you by thinking more, analyzing more, and replaying more. You may search for the perfect answer, the perfect choice, or the perfect way to avoid pain. But instead of creating peace, it can leave you emotionally exhausted and even farther from clarity.",
    desc2:
      "This shadow side often comes from caring deeply and wanting safety. Your mind is not your enemy — it is trying to protect you. But healing begins when you realize not every feeling can be solved through analysis. Sometimes peace comes not from figuring everything out, but from softening your grip on uncertainty.",
    meaning1:
      "This result usually means your shadow pattern is deeply tied to control through thinking. When something feels emotionally risky, unclear, or unresolved, your mind may try to outwork the discomfort. You may replay conversations, second-guess decisions, or search for hidden meanings long after the moment has passed.",
    meaning2:
      "Because of that, your suffering may often become mental before it becomes visible. From the outside, you may seem thoughtful or careful. On the inside, your mind may be carrying much more fear, pressure, or emotional noise than other people realize. The overthinking itself is often an attempt to feel safe.",
    showUp1:
      "In real life, this can show up as difficulty making decisions, constantly reviewing what you said, imagining worst-case outcomes, or struggling to rest because your mind keeps searching for certainty. You may also find it hard to enjoy good things fully because part of you is already preparing for what could go wrong.",
    showUp2:
      "You may be especially sensitive to ambiguity, emotional tension, or situations where there is no perfectly reassuring answer. That does not mean you are weak. It often means your mind learned that vigilance felt safer than surrender. The challenge is that constant mental vigilance can become its own source of pain.",
    strengths: "Awareness, depth, thoughtfulness",
    strengthDetails:
      "Your strengths include insight, reflection, sensitivity, and the ability to notice patterns that others miss. You often think deeply because you care deeply. That depth can become wisdom when it is grounded, paced, and not entirely ruled by fear.",
    watchOut: "Rumination, indecision, emotional exhaustion",
    watchOutDetails:
      "What may feel difficult is that your mind can become a closed loop. Thinking may start as a search for clarity but turn into repetition that creates more anxiety instead of resolution. Over time, this can drain your energy, delay action, and make simple choices feel emotionally loaded.",
    bestMatch:
      "Practices and people that help you feel grounded, present, and safe enough to stop spiraling",
    growth1:
      "Growth for you often begins when you stop treating uncertainty as a problem that must be conquered before you can breathe. Not every unanswered feeling means something is wrong. Sometimes the healthiest move is not more analysis, but more presence.",
    growth2:
      "The healthiest version of your mind is still thoughtful and deep, but less punishing. It learns that peace is not always the reward for perfect understanding. Sometimes peace begins when you let a moment stay unfinished without turning it into a crisis.",
    reminder:
      "Your mind is trying to protect you, not destroy you. But you do not have to think your way through every fear in order to survive it.",
  },

  people_pleaser: {
    title: "The People Pleaser 🌷",
    summary:
      "Your shadow side is the tendency to over-give, over-adjust, and lose yourself to keep connection safe.",
    desc1:
      "You may have learned that being easy, helpful, kind, or emotionally convenient was the safest way to be loved. So when tension appears, you often try to smooth things over, carry too much, or silence your own needs. On the surface it can look selfless, but underneath it may come from fear of rejection, guilt, or emotional loss.",
    desc2:
      "This shadow side usually grows from a beautiful heart that has learned to survive through pleasing. Your kindness is real, but it becomes painful when it costs you your own truth. Healing begins when you let yourself believe that love should not require self-erasure.",
    meaning1:
      "This result often means your shadow pattern is tied to safety through approval. You may instinctively monitor other people’s moods, soften your own needs, or adjust yourself to reduce tension. In many cases, this pattern does not come from superficial niceness. It comes from a deeper fear that disconnection could mean emotional danger.",
    meaning2:
      "Because of that, you may confuse being loved with being useful, easy, or emotionally low-maintenance. You may find yourself over-giving before anyone asked, apologizing too quickly, or feeling guilty when you set boundaries. The people-pleasing pattern often hides a deep longing to stay connected without being rejected.",
    showUp1:
      "In real life, this can show up as saying yes when you mean no, over-explaining yourself, avoiding conflict, taking responsibility for other people’s feelings, or feeling anxious when someone seems disappointed in you. You may also struggle to identify your real preferences because you are so used to adjusting.",
    showUp2:
      "You may be incredibly generous, emotionally aware, and kind, which is why this pattern can be hard to notice at first. But over time, the cost may show up as resentment, fatigue, quiet sadness, or the feeling that people know your helpful side more than your honest self.",
    strengths: "Kindness, empathy, emotional generosity",
    strengthDetails:
      "Your strengths include warmth, care, relational sensitivity, and the ability to make others feel considered. You likely bring softness and emotional effort into relationships in ways that genuinely matter. Your heart is real. The goal is not to lose your kindness, but to stop using it against yourself.",
    watchOut: "Weak boundaries, resentment, losing your voice",
    watchOutDetails:
      "What may feel difficult is that over-giving can slowly become self-abandonment. If your peace depends too much on keeping everyone comfortable, your own needs may start feeling inconvenient even to you. That is when kindness begins turning into quiet pain.",
    bestMatch:
      "Relationships and spaces where your needs are welcomed, not punished",
    growth1:
      "Growth for you often begins with learning that discomfort is not always danger. Someone being disappointed does not automatically mean you did something wrong. Boundaries may feel unfamiliar at first, but they are often the beginning of more honest love.",
    growth2:
      "The healthiest version of your heart stays generous without disappearing. It gives freely, but not from fear. It connects deeply, but not at the price of self-erasure. That is when your kindness becomes sustainable instead of sacrificial.",
    reminder:
      "You do not have to become easier to love by becoming smaller. The right love will not ask you to disappear in order to stay close.",
  },

  emotional_escapist: {
    title: "The Emotional Escapist 🌫️",
    summary:
      "Your shadow side is the tendency to avoid, numb, or run from emotions before they fully land.",
    desc1:
      "When things start to feel too intense, too vulnerable, or too painful, your instinct may be to disappear from it. You might distract yourself, detach, stay busy, go emotionally blank, or pull away before feelings become too real. It can create temporary relief, but it often leaves unprocessed emotions quietly building underneath.",
    desc2:
      "This shadow side is a form of self-protection. Somewhere along the way, feeling too much may have stopped feeling safe. Healing begins when you slowly learn that emotions do not need to be outrun in order to survive them. What you avoid does not disappear — but what you face gently can begin to soften.",
    meaning1:
      "This result usually means your shadow pattern is tied to safety through distance from feeling. When emotions grow intense, your system may start reaching for escape before you have fully named what is happening. That escape might look like distraction, detachment, over-busyness, shutting down, or turning away before things become too emotionally real.",
    meaning2:
      "Because of that, you may look functional on the outside while a great deal stays unresolved underneath. Emotional avoidance does not always look dramatic. Sometimes it looks like staying productive, staying numb, or staying just slightly removed from your own inner world.",
    showUp1:
      "In real life, this can show up as avoiding hard conversations, pulling away when intimacy deepens, distracting yourself instead of sitting with sadness, or telling yourself you are fine when you are actually overwhelmed. You may also notice that certain feelings seem harder to access until they spill out much later.",
    showUp2:
      "You may not be trying to be careless. In many cases, you are trying to survive emotional intensity in the only way you learned. The challenge is that what you escape from often stays present in quieter forms, showing up later as heaviness, distance, or unexplained exhaustion.",
    strengths: "Adaptability, self-protection, emotional sensitivity",
    strengthDetails:
      "Your strengths include resilience, flexibility, instinct for self-preservation, and the ability to keep moving under pressure. You may be more emotionally sensitive than people realize, which is exactly why escape became such a powerful coping tool. That sensitivity can become strength when it is met with safety instead of avoidance.",
    watchOut: "Detachment, avoidance, delayed emotional pain",
    watchOutDetails:
      "What may feel difficult is that relief can become your main goal instead of resolution. When that happens, avoidance may keep you functional in the short term but disconnected in the long term. Feelings pushed aside do not disappear — they often wait until you are too tired to outrun them.",
    bestMatch:
      "Gentle routines and emotionally safe people who help you stay present without pressure",
    growth1:
      "Growth for you often begins with learning that feeling is not the same as drowning. You do not need to face everything at once. But even a small step toward naming what is real can interrupt the habit of disappearing from yourself.",
    growth2:
      "The healthiest version of your sensitivity is not numb and not flooded. It is present. It allows emotion to move through without becoming something you have to outrun. That is when your self-protection becomes self-trust instead of escape.",
    reminder:
      "You do not have to force yourself to feel everything at once. But you also do not have to keep leaving yourself every time it hurts.",
  },

  guarded_controller: {
    title: "The Guarded Controller 🖤",
    summary:
      "Your shadow side is the need to stay composed, protected, and in control so vulnerability never gets too close.",
    desc1:
      "You may have learned that control feels safer than exposure. So when emotions rise, you tighten your grip. You manage what you show, what you say, and how much of yourself others are allowed to reach. On the outside, this can look strong and self-contained. On the inside, it can become lonely and exhausting.",
    desc2:
      "This shadow side often forms around fear of being hurt, misunderstood, or emotionally overpowered. Your control may have protected you for a long time, but it can also keep love, softness, and support at a distance. Healing begins when safety no longer has to mean emotional isolation.",
    meaning1:
      "This result often means your shadow pattern is tied to protection through control. When something feels emotionally unsafe, your instinct may be to become more composed, more contained, and less reachable. You may carefully manage what others see because unpredictability or vulnerability feels too costly.",
    meaning2:
      "Because of that, you may appear steady, capable, or even emotionally strong while quietly carrying a lot behind the scenes. The guarded controller pattern is often not about coldness. It is about fear of being overwhelmed, misread, or placed in a position where your emotions could be used against you.",
    showUp1:
      "In real life, this can show up as having a hard time asking for help, revealing your feelings slowly, needing to control the tone of vulnerable conversations, or becoming more distant when you care a lot. You may also feel safer when you are the one managing the pace of connection.",
    showUp2:
      "You may be extremely disciplined, self-contained, and reliable, which can make this pattern look admirable from the outside. But the cost can be emotional isolation, difficulty receiving support, or a quiet belief that softness will always put you at risk.",
    strengths: "Composure, self-discipline, emotional restraint",
    strengthDetails:
      "Your strengths include steadiness, self-control, discipline, and the ability to function without collapsing under pressure. You likely know how to hold yourself together in difficult moments. That can be powerful. The goal is not to lose that strength, but to make sure it no longer cuts you off from closeness.",
    watchOut: "Distance, rigidity, difficulty receiving support",
    watchOutDetails:
      "What may feel difficult is that control can become both your armor and your prison. If you only feel safe when everything stays contained, you may miss experiences of trust, tenderness, and emotional relief. Over time, constant self-protection can become exhausting.",
    bestMatch:
      "People and environments where trust can grow slowly without forcing you open",
    growth1:
      "Growth for you often begins with recognizing that vulnerability does not have to mean collapse. Letting someone see a little more of you is not the same as losing control. In the right conditions, it can actually deepen your sense of safety rather than threaten it.",
    growth2:
      "The healthiest version of your strength is not rigid self-protection. It is grounded openness. You remain discerning and self-aware, but you no longer treat emotional closeness as something that must always be controlled to stay safe.",
    reminder:
      "Your control once helped you survive. But you do not have to stay unreachable in order to stay protected.",
  },

  self_saboteur: {
    title: "The Self-Saboteur 🔥",
    summary:
      "Your shadow side is the tendency to disrupt good things before they have the chance to fully become yours.",
    desc1:
      "When something meaningful, beautiful, or hopeful starts to enter your life, a part of you may become restless. You may pull away, procrastinate, numb out, ruin the momentum, or convince yourself it will not last anyway. It is not because you do not want good things — it is often because some part of you does not yet feel safe holding them.",
    desc2:
      "This shadow side is usually rooted in fear, shame, or old disappointment. It tries to protect you from future pain by making the ending happen early. Healing begins when you recognize that ruining something first is still a way of staying controlled by fear. You deserve the chance to stay.",
    meaning1:
      "This result usually means your shadow pattern is tied to safety through preemptive disruption. When something begins to matter, part of you may start pulling back, delaying, doubting, or creating enough distance that the good thing cannot fully land. Often this is not because you do not want it. It is because wanting it makes you vulnerable.",
    meaning2:
      "Because of that, your life may sometimes carry the painful pattern of getting close to what you want and then unconsciously interfering with it. The self-saboteur often does not look dramatic from the inside. It may feel like procrastination, self-doubt, sudden numbness, or the urge to withdraw just as something becomes real.",
    showUp1:
      "In real life, this can show up as pulling away from healthy relationships, delaying important steps, ruining momentum when things are going well, talking yourself out of hope, or creating distance because disappointment feels easier to survive if you caused it first.",
    showUp2:
      "You may have strong intuition and sensitivity, which means you often sense risk quickly. That sensitivity is real. The challenge is that your protective instinct may start treating joy, success, or closeness as threats simply because they matter enough to hurt if lost.",
    strengths: "Instinct, sensitivity, awareness of risk",
    strengthDetails:
      "Your strengths include perception, emotional alertness, intuition, and the ability to sense risk before others do. You are not reckless. In many ways, you are deeply aware. The goal is not to lose that awareness, but to stop letting fear make your choices before your deeper self gets a chance to stay.",
    watchOut: "Procrastination, withdrawal, ruining what you want most",
    watchOutDetails:
      "What may feel difficult is that your fear may disguise itself as realism, delay, or loss of motivation. If you are not careful, the part of you trying to avoid pain may also be the part that keeps you from receiving what would actually nourish you.",
    bestMatch:
      "People and habits that help you build self-trust slowly and consistently",
    growth1:
      "Growth for you often begins with noticing the moment just before you pull away. That moment matters. It is often where fear quietly enters and tries to convince you that losing by choice will hurt less than staying exposed to possibility.",
    growth2:
      "The healthiest version of your strength is not hypervigilant self-protection. It is courageous steadiness. You learn to remain present long enough for good things to become real instead of ending them before they can belong to you.",
    reminder:
      "You do not have to ruin something first to protect yourself from loss. Sometimes healing means letting yourself stay long enough to receive what you actually want.",
  },

  silent_storm: {
    title: "The Silent Storm ⛈️",
    summary:
      "Your shadow side is the tendency to hold so much inside that your hidden emotions turn into pressure.",
    desc1:
      "You may appear calm, steady, or hard to read, but there is often much more happening underneath than people realize. You absorb, contain, and carry a lot. Instead of expressing your feelings as they come, you may store them quietly until they become heaviness, distance, or inner pressure.",
    desc2:
      "This shadow side often comes from learning that your emotions were too much, inconvenient, or unsafe to reveal. But what stays buried does not stay still. Healing begins when you stop treating your inner world like something that must always be controlled in silence. Your feelings are not dangerous for existing.",
    meaning1:
      "This result often means your shadow pattern is tied to containment. When emotions rise, you may instinctively hold them in rather than let them move. You may keep functioning, keep appearing fine, and keep carrying more than people know, even when your inner world feels crowded and intense.",
    meaning2:
      "Because of that, you may seem calm on the surface while quietly building emotional pressure underneath. The silent storm pattern is often not about a lack of feeling. It is about feeling deeply without having learned that expression can be safe. What goes unspoken often becomes weight.",
    showUp1:
      "In real life, this can show up as bottling things up, going quiet when hurt, seeming fine until you suddenly feel overwhelmed, carrying unspoken resentment, or withdrawing because you do not know how to release what is building. You may also struggle to explain your emotions because you have been containing them for so long.",
    showUp2:
      "You may be incredibly strong, enduring, and emotionally deep, which is why others may not realize how much you are carrying. But the cost can be loneliness, inner pressure, or the feeling that no one truly sees what is happening inside you because you have become so good at containing it.",
    strengths: "Depth, endurance, emotional richness",
    strengthDetails:
      "Your strengths include emotional depth, resilience, endurance, and the capacity to hold complexity inside you. You likely feel more than you show. That depth can become a powerful source of wisdom and creativity when it is given safe ways to move instead of being trapped in silence.",
    watchOut: "Bottling things up, internal pressure, emotional isolation",
    watchOutDetails:
      "What may feel difficult is that what you do not express does not disappear. It often turns inward into heaviness, numbness, distance, or sudden overwhelm. The longer everything stays inside, the harder it can become to know where to begin releasing it.",
    bestMatch:
      "Safe spaces where you can express yourself before your feelings become a storm",
    growth1:
      "Growth for you often begins with smaller forms of expression. You do not need to unload everything all at once. But giving your inner world some kind of voice — through words, movement, writing, or honest conversation — can start easing the pressure.",
    growth2:
      "The healthiest version of your strength is not silent endurance alone. It is emotional depth that is allowed to breathe. When your feelings are no longer forced to live in total silence, your inner strength becomes less heavy and more alive.",
    reminder:
      "Your feelings are not too much for existing. They become overwhelming mostly when they are forced to survive alone in silence.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey =
    rawKey && rawKey in results ? rawKey : "overthinker";
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
          Self-Reflection Result
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
            How this pattern can show up
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
            Your hidden strengths
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
            href="/quiz/shadow-side"
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

export default function ShadowSideResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}