"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  the_griever: {
    title: "Your Heartbreak Style: The Deep Feeler 🌊",
    summary:
      "When your heart breaks, you do not run from the pain. You walk straight into it — because somewhere inside, you know the only way out is through.",
    desc1:
      "Your heartbreak style is rooted in emotional honesty. When something ends, you give yourself permission to actually feel the loss — to cry, to grieve, to sit with the sadness rather than covering it with distraction or forward momentum. That takes more courage than most people acknowledge.",
    desc2:
      "What makes this style powerful is its authenticity. You do not pretend to be fine when you are not. You do not outpace your grief. And because you are willing to feel the full weight of a loss, you tend to emerge from heartbreaks with something real — a genuine sense of having honored what the relationship meant, and a deeper understanding of your own heart.",

    meaning1:
      "This heartbreak style often belongs to people who have a high emotional capacity and a belief — conscious or not — that feelings deserve to be felt rather than managed away. You may be someone who has done enough inner work to know that suppressing grief does not make it disappear. It just makes it show up later, in stranger forms.",
    meaning2:
      "In practice, this means your heartbreaks are often more visibly painful than those of people who cope through avoidance. You cry more openly, need more support, and take longer to feel okay. But the grief is real, and it is moving. People who grieve fully tend to heal more completely — not just on the surface, but all the way through.",

    showUp1:
      "In the days after a breakup, this style shows up as emotional rawness — tears that arrive unexpectedly, a constant low-level ache, a need to talk about what happened and be witnessed in the pain. You may find yourself leaning heavily on close friends, journaling, or simply sitting with the sadness in ways that feel almost necessary.",
    showUp2:
      "It may also show up as an unwillingness to rush the process. You may feel frustrated with advice to move on, stay busy, or look on the bright side — because your instinct is that none of those things actually moves you through grief. What works for you is presence: time, tenderness, and permission to not be okay yet.",

    strengths: "Emotional depth, authenticity, the ability to truly process and release",
    strengthDetails:
      "Your capacity to feel deeply is also your capacity to love deeply, and that is not a small thing. People with this heartbreak style often form more genuine connections because they bring the same emotional honesty to love that they bring to loss. And because you process grief fully, your healing tends to be real rather than partial — you do not carry old wounds indefinitely.",

    watchOut: "Getting stuck in grief rather than moving through it",
    watchOutDetails:
      "The risk of this style is that without a sense of forward movement, grieving can sometimes deepen into something more like dwelling. There is a meaningful difference between feeling your grief and feeding it — between processing and rehearsing the loss over and over. Healthy grieving has a direction to it. If grief starts to feel like a state rather than a passage, that is worth noticing.",

    growth1:
      "Growth for you often comes from adding a gentle forward orientation to your naturally thorough grieving process. This does not mean rushing. It means allowing yourself to ask, while still feeling the loss: what am I learning? What is becoming possible now that was not before? Grief and growth can coexist — in fact, they are often the same thing.",
    growth2:
      "The healthiest version of your heartbreak style is grief that is felt fully and also moves. It is the ability to honor what was real without making the past your permanent home. You are allowed to feel everything — and also allowed to eventually come back to yourself.",

    reminder:
      "Your willingness to feel the pain is one of the bravest things about you. Just remember that grief is a passage, not a destination.",
    bestMatch:
      "Someone patient who understands your healing timeline is not a flaw, and who can stay present without trying to fix or rush the process",
  },

  the_avoider: {
    title: "Your Heartbreak Style: The Runner 🌪️",
    summary:
      "When your heart breaks, you keep moving. Your instinct is to stay ahead of the pain — and you are remarkably good at it. The question is whether you ever let yourself actually stop.",
    desc1:
      "Your heartbreak style is rooted in forward motion. When something ends, your natural response is to fill the space immediately — plans, people, projects, productivity, anything that keeps the silence from getting too loud. You are not a cold person or an unfeeling one. You are someone who finds stillness genuinely painful.",
    desc2:
      "What makes this style work, at least in the short term, is that it functions. You do not fall apart publicly. You stay productive. You do not derail your life over a breakup. But the grief you are outrunning does not disappear — it goes underground, where it tends to resurface on its own timeline, in its own way.",

    meaning1:
      "This heartbreak style often develops in people who learned early that emotions were something to be managed, not expressed — where showing distress was uncomfortable, or where being fine was expected or rewarded. Staying busy is a form of emotional regulation that once made a great deal of sense, even if it now costs more than it saves.",
    meaning2:
      "It can also simply reflect a temperament that finds inward dwelling genuinely distressing. Some people do not process well by sitting still — they process through movement, through doing, through being useful. The challenge is distinguishing between movement that processes and movement that avoids.",

    showUp1:
      "In the days after a breakup, this style shows up as a suddenly packed schedule — social plans, new projects, increased activity, a determined busyness that leaves little room for quiet. You may tell yourself and others that you are handling it well. And in some ways you are. But there may be a tiredness underneath that you are not quite letting yourself feel.",
    showUp2:
      "It may also show up as a slight inability to slow down even when you want to — a discomfort with evenings alone, a tendency to keep your phone busy when silence arrives, a reflex to change the subject when conversation gets close to what actually happened. The avoidance is often more automatic than deliberate.",

    strengths: "Resilience, functionality, the ability to keep your life intact during painful times",
    strengthDetails:
      "Your ability to stay functional during heartbreak is genuinely useful. You do not lose yourself entirely in loss — you maintain your work, your friendships, and your sense of forward direction. That is a real form of strength. It also means people around you rarely have to worry about you falling apart, which can make you a stabilizing presence even when you are the one hurting.",

    watchOut: "Confusing staying busy with actually healing",
    watchOutDetails:
      "The main risk is arriving at the other side of a painful relationship without ever having processed what happened — and then being surprised when the grief surfaces later, in a different relationship, in a different form. Grief that is avoided does not resolve. It relocates. The feelings you do not feel in the month after a breakup have a way of appearing at unexpected moments much later.",

    growth1:
      "Growth for you often begins with building in small intentional windows of stillness — not enough to overwhelm you, but enough to let you hear what is actually underneath the activity. A long walk without a podcast. A journal entry. An honest conversation where you do not change the subject. Small doses of genuine feeling, taken regularly.",
    growth2:
      "The healthiest version of your heartbreak style is not forcing yourself to grieve on someone else's schedule, but giving yourself genuine opportunities to check in with what is really there. Movement can be part of healing — it just works best when it is running toward something rather than away from it.",

    reminder:
      "Staying busy is a form of strength — until it becomes a way of never arriving somewhere you needed to go.",
    bestMatch:
      "Someone gentle enough to create space for your softer side without forcing you to process faster than you are ready for",
  },

  the_analyzer: {
    title: "Your Heartbreak Style: The Overthinker 🔍",
    summary:
      "When your heart breaks, your mind takes over. You do not just feel the loss — you investigate it, dissect it, and replay it until you understand exactly how it happened.",
    desc1:
      "Your heartbreak style is rooted in the need for understanding. When something ends, your natural response is to begin processing it cognitively — tracing the sequence of events, identifying what went wrong, analyzing your role and theirs, looking for the pattern that explains the outcome. For you, understanding feels like the path to closure.",
    desc2:
      "What makes this style both useful and painful is that it reflects a genuinely analytical mind. You are not overthinking because you are weak or anxious — you are thinking because that is how your mind processes experience. The challenge is that relationships often do not have clean explanations, and the absence of a satisfying answer can keep the loop running long past the point where it is helping.",

    meaning1:
      "This heartbreak style often belongs to people who are deeply reflective and who need meaning from their experiences. You are unlikely to be satisfied with 'it just did not work out' as an explanation. You want to understand what happened below the surface — the dynamics, the patterns, the psychological forces at play.",
    meaning2:
      "It can also develop in people who have been hurt in confusing or ambiguous ways — where the ending was unclear, where you were not given an honest explanation, or where the relationship contained contradictions that never fully resolved. The analysis is, in part, an attempt to create coherence out of something that felt chaotic.",

    showUp1:
      "In the weeks after a breakup, this style shows up as mental replay — going over conversations, decisions, and moments looking for the key that explains everything. You may find yourself researching attachment styles, reading about relationship dynamics, or asking mutual friends for information. You are trying to build a complete picture.",
    showUp2:
      "It may also show up as difficulty sleeping, because your mind does not naturally quiet when your body does. The questions come back at night — the what-ifs, the should-have-saids, the moments you keep reexamining. The analysis is ongoing, and it is exhausting.",

    strengths: "Self-awareness, the ability to learn from experience, pattern recognition",
    strengthDetails:
      "Because you process your relationships so thoroughly, you tend to come out of them with genuine insight — about yourself, about the other person, about what you need and what you are vulnerable to. Over time, this produces real emotional intelligence. You rarely make exactly the same mistake twice, because you have examined what went wrong with too much care to repeat it unconsciously.",

    watchOut: "Using analysis as a substitute for feeling — thinking about the loss instead of actually grieving it",
    watchOutDetails:
      "The core challenge of this style is that cognitive processing and emotional processing are not the same thing. You can understand a heartbreak completely and still not have felt it. Analysis can function as a sophisticated form of avoidance — keeping you in your head in a way that feels productive but does not actually move grief through the emotional system where it needs to go.",

    growth1:
      "Growth for you often involves deliberately stepping out of analysis into feeling — not forever, but temporarily. Asking: what am I feeling right now, without trying to explain it? Sitting with the sadness or anger without immediately converting it into a framework. Letting the emotion be information rather than a problem to solve.",
    growth2:
      "The healthiest version of your heartbreak style combines your genuine analytical gifts with an equal willingness to feel. Understanding and grieving are not in competition. In fact, the deepest understanding often comes after you have let yourself feel the loss fully, not before.",

    reminder:
      "You are not going to think your way out of this one. At some point, you will also have to feel it.",
    bestMatch:
      "Someone intellectually alive who can match your depth of reflection and also gently remind you when it is time to feel rather than analyze",
  },

  the_romantic: {
    title: "Your Heartbreak Style: The Keeper 🕯️",
    summary:
      "When your heart breaks, you do not let go easily. You hold the person, the memories, and what could have been for a long time — because to you, love is not something you simply decide to stop feeling.",
    desc1:
      "Your heartbreak style is rooted in depth of feeling and a belief in the permanence of love. When something ends, your instinct is not to move quickly toward acceptance but to stay close to what was real — the person, the memories, the sense of possibility that still lives somewhere in you even after it ended.",
    desc2:
      "What makes this style tender and painful in equal measure is that you tend to remember the good more than the hurt, to hold onto what was beautiful longer than most people would. That capacity for enduring love is one of your most moving qualities. It can also make it genuinely difficult to close a door that part of you wants to keep slightly open.",

    meaning1:
      "This heartbreak style often belongs to people who love deeply and who take emotional bonds seriously. You are not someone who gives your heart casually, which means when you do, the loss of that connection carries real weight. Your reluctance to let go is not immaturity — it is an accurate reflection of how much the relationship actually meant.",
    meaning2:
      "It can also reflect a particular sensitivity to loss — a nervous system that experiences endings acutely and takes longer to metabolize the shift from being connected to someone to being without them. The grief is proportionate to the love, and yours tends to be significant.",

    showUp1:
      "In the weeks and months after a breakup, this style shows up as a persistent emotional presence of the person — checking their social media, keeping old messages, holding onto objects or songs associated with them, finding it difficult to clear the space they occupied in your daily life and thoughts.",
    showUp2:
      "It may also show up as hope that lingers past where logic suggests it should. Part of you holds the door slightly open — imagining reconciliation, replaying conversations that end differently, or finding it genuinely hard to imagine being as close to anyone else. The love does not switch off cleanly, and that can make the grief feel unusually prolonged.",

    strengths: "Depth of feeling, loyalty, the capacity to love with genuine fullness",
    strengthDetails:
      "Your heartbreak style is the signature of someone who loves without reservation, and that is a rare quality. The people you love know they are loved — not conditionally, not partially, but with the full weight of your feeling. That depth of care creates genuinely meaningful connections. The same quality that makes heartbreak hard for you also makes your love real.",

    watchOut: "Staying in grief longer than serves you, or holding onto hope that has genuinely passed",
    watchOutDetails:
      "The challenge of this style is knowing when holding on shifts from honoring something real to preventing yourself from moving forward. Love that has ended can still have been real and meaningful — it does not need to continue in order to have mattered. There is a point where loyalty to the memory of the relationship begins to cost you your present, and that point is worth watching for.",

    growth1:
      "Growth for you often involves learning to hold memory and forward movement at the same time — to let a relationship matter fully while also allowing the chapter to close. Love and letting go are not opposites. It is possible to carry someone with you as part of your story without making them your entire present.",
    growth2:
      "The healthiest version of your heartbreak style is one where the depth of your feeling becomes a resource rather than an anchor. You are someone who can love beautifully. The goal is to eventually direct that love toward what is present and possible — not only toward what has already passed.",

    reminder:
      "It was real. It mattered. And somewhere ahead of you, there is room for something just as real — if you can let this one become the past.",
    bestMatch:
      "Someone who can meet your depth of feeling and show up with the same consistency and fullness that you naturally offer",
  },

  the_rebuilder: {
    title: "Your Heartbreak Style: The Phoenix ✨",
    summary:
      "When your heart breaks, you transform. Pain is not something you simply endure — it is something you work with, something that becomes fuel for becoming more yourself.",
    desc1:
      "Your heartbreak style is rooted in the instinct to turn difficult experiences into growth. When something ends, you feel the loss — but alongside grief, there is also a forward orientation, a reflex toward self-understanding and self-improvement that most people develop slowly, if at all. For you, heartbreak tends to become a catalyst.",
    desc2:
      "What makes this style genuinely powerful is how often it actually works. People with this heartbreak style tend to look back on painful endings and be able to name, honestly, what they learned — about themselves, about what they need, about who they want to become. The growth is real, not performed. And it becomes a foundation for the next chapter.",

    meaning1:
      "This heartbreak style often belongs to people who have done real inner work — who have developed enough self-awareness to know that their experiences, including painful ones, are material for growth rather than things that simply happen to them. You have, at some level, made a practice of turning difficulty into self-knowledge.",
    meaning2:
      "It can also develop in people who have lived through enough loss to know they survive it — that endings do not have the power to break them permanently. That hard-won knowledge frees something up: the energy that might otherwise go into fear of pain can go instead into transforming it.",

    showUp1:
      "In the period after a breakup, this style shows up as directed energy — new habits, new goals, an intensified attention to your own growth and direction. You may start a creative project, deepen a fitness practice, take a course you have been putting off, or spend more time understanding yourself through reflection or therapy.",
    showUp2:
      "It may also show up as a willingness to sit with uncomfortable self-honesty — to look at your own patterns and contributions to the relationship's end without self-punishment but also without defensiveness. The growth is most powerful when it includes genuine accountability.",

    strengths: "Resilience, self-awareness, the ability to grow from difficulty",
    strengthDetails:
      "Your capacity to transform heartbreak into growth is rare and genuinely valuable. Over time, it produces a kind of emotional maturity that cannot be acquired any other way — the kind that comes from having felt real pain and chosen, again and again, to become more rather than less because of it.",

    watchOut: "Skipping the grief to get to the growth — or using productivity to avoid actually feeling the loss",
    watchOutDetails:
      "The risk of this style is moving into transformation mode before the grief has had space to exist. Growth and healing are not the same thing. It is possible to emerge from a breakup with new habits and new insights while still carrying unprocessed loss underneath. The most complete version of your healing involves both: feeling the loss fully, and then growing from it.",

    growth1:
      "Growth for you often means slowing down enough to let the grief actually land before you move into rebuild mode. Not indefinitely — your forward orientation is a genuine strength. But even a Phoenix has to acknowledge what burned before it rises. Giving yourself that permission makes the transformation more complete.",
    growth2:
      "The healthiest version of your heartbreak style is one where growth and grief are integrated rather than sequential — where you can feel the loss and move forward at the same time, without using one to escape the other. That combination produces not just recovery, but genuine becoming.",

    reminder:
      "You are allowed to be sad before you are strong. The transformation is more complete when it starts from honesty about the loss.",
    bestMatch:
      "Someone who matches your desire for growth and is willing to build something intentional — a relationship with direction, not just feeling",
  },

  the_protector: {
    title: "Your Heartbreak Style: The Guardian 🛡️",
    summary:
      "When your heart breaks, you close ranks. You feel the pain — deeply — and then, quietly, you decide that next time will be different. Next time, you will be more careful.",
    desc1:
      "Your heartbreak style is rooted in self-protection. When something ends painfully, your nervous system files it as evidence — that closeness carries risk, that full trust is dangerous, that the vulnerability required for deep love needs to be extended more carefully going forward. You do not become cold. You become guarded.",
    desc2:
      "What makes this style understandable is that it is a completely rational response to being hurt. If something burned you, caution makes sense. The challenge is that walls built after one relationship can stand long into the next one — where they were not needed, and where they quietly prevent the kind of closeness you still, somewhere, want.",

    meaning1:
      "This heartbreak style often belongs to people who have been hurt in a way that felt genuinely unexpected — a betrayal, an abandonment, an ending that came without warning or with a cruelty they did not see coming. The protective response is the nervous system's way of saying: we cannot afford to be caught off guard like that again.",
    meaning2:
      "It can also develop more gradually, in people who have experienced repeated disappointments in love — who have given fully and found it insufficient, who have trusted and found it misused. At some point the system starts conserving. The generosity of spirit that made them so open begins to require more evidence before it extends.",

    showUp1:
      "After a breakup, this style shows up as a quiet closing off — not dramatic withdrawal, but a subtle pulling back of emotional availability. You may become slower to trust, quicker to notice potential red flags, more deliberate about how much of yourself you reveal and how quickly. You still want connection, but on terms that feel safer.",
    showUp2:
      "It may also show up as a change in what you look for in future relationships — a prioritization of reliability over intensity, honesty over charm, consistency over passion. You have updated what safety means, and your standards have shifted accordingly. That is not cynicism. It is earned discernment.",

    strengths: "Self-preservation, clarity about what you need, the ability to build relationships on solid ground",
    strengthDetails:
      "Your instinct toward self-protection comes paired with real discernment. Because you have been hurt, you often have a clearer sense of what matters in a relationship and a lower tolerance for what does not. The people who do earn your trust tend to have genuinely earned it — and the relationships built on that foundation tend to be more honest and more durable than those built on speed and intensity alone.",

    watchOut: "Letting protection become permanent — closing off so thoroughly that genuine closeness becomes impossible",
    watchOutDetails:
      "The risk of this style is that walls built for protection can become walls that keep everything out — including the real connection you still want. There is a meaningful difference between healthy caution and chronic self-closure. When trust becomes conditional on a certainty that relationships can never provide, it stops being protection and starts being a particular kind of loneliness.",

    growth1:
      "Growth for you often involves distinguishing between the caution that is genuinely useful and the protection that has become excessive. Asking: is this wall keeping me safe from real danger, or is it keeping me safe from everything, including the good things? The goal is not to tear the walls down. It is to install a door.",
    growth2:
      "The healthiest version of your heartbreak style is protective without being closed — discerning without being inaccessible. It is the ability to bring what you have learned from pain into future relationships without making those relationships pay for what a previous one cost you.",

    reminder:
      "You are right to be careful. Just make sure the care is protecting your future — not locking it out.",
    bestMatch:
      "Someone genuinely patient and consistent who understands that earning your trust takes time and treats that as something worth doing",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "the_griever";
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
        background: "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
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
          Love & Relationships Personality Result
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
            What this style really means
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
            How this style shows up in your life
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
            <strong>Core strengths:</strong> {r.strengths}
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
            href="/quiz/heartbreak-style"
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

export default function HeartbreakStyleResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
