"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  consistency: {
    title: "Consistency 💚",
    summary:
      "The green flag you need most in love is consistency — steady care, stable energy, and someone whose actions do not keep changing without warning.",
    desc1:
      "What your heart seems to need most is not grand intensity, but steadiness. You are likely someone who gets drained by uncertainty, mixed signals, or emotional inconsistency that leaves you wondering where you stand. Because of that, consistency feels deeply healing to you. It creates the kind of emotional ground where trust can actually grow.",
    desc2:
      "What makes this green flag so meaningful is that consistency is not about perfection. It is about reliability. It is the feeling that someone’s care does not disappear the moment life gets busy, conflict appears, or moods shift. For you, love becomes safer when it feels stable enough to rest in, rather than something you have to keep decoding.",
    meaning1:
      "This result often means your emotional world is especially sensitive to unpredictability in relationships. You may have experienced connections where affection, attention, or effort came in waves, making it difficult to feel secure. Because of that, your heart now craves steadiness more than drama. You want love that feels grounded, not confusing.",
    meaning2:
      "That need is not too much. In fact, it often reflects emotional maturity. Healthy love is not supposed to feel like a constant guessing game. Consistency helps your nervous system settle. It allows intimacy to build over time because you are no longer forced to spend your energy questioning whether care is still there.",
    showUp1:
      "In real life, this green flag can show up as regular communication, emotional follow-through, dependable behavior, and care that stays present even when things are not perfectly easy. It may look like someone who checks in the way they said they would, keeps their tone respectful over time, and makes you feel like their care is not temporary.",
    showUp2:
      "Consistency can also show up in small but powerful ways: not disappearing after emotional closeness, not becoming distant after conflict, and not making you earn basic stability through anxiety or overfunctioning. The challenge is remembering that consistency may look quiet compared to intensity, but quiet love is often the kind that actually lasts.",
    strengths: "Stability, reliability, emotional steadiness",
    strengthDetails:
      "The strength of this green flag is that it creates trust slowly but deeply. Consistency helps relationships feel less chaotic and more rooted. It gives emotional safety room to grow and allows both people to build closeness without unnecessary confusion. For someone like you, it may be one of the most healing foundations love can offer.",
    watchOut: "Mistaking emotional highs and lows for deeper passion",
    watchOutDetails:
      "What may feel difficult is recognizing steady love when you have been conditioned to notice only intensity. Sometimes inconsistency can feel exciting at first because it creates emotional suspense. But suspense is not the same as care. Growth may involve letting your heart trust what is calm, present, and reliable even if it feels less dramatic in the beginning.",
    bestMatch:
      "Someone whose care stays real over time and whose presence does not make you question your place in their life",
    growth1:
      "Growth for you often begins when you stop apologizing for needing stability. Wanting consistent love does not make you needy. It means your heart understands that trust requires repetition, not just chemistry. Real love is built through patterns, not isolated moments.",
    growth2:
      "The healthiest form of this result is learning to choose what feels grounded instead of chasing what feels uncertain. When you let yourself value steadiness, you become more able to recognize love that is emotionally sustainable. Your heart does not need to fight for security. It deserves to live inside it.",
    reminder:
      "Love should not keep making you wonder if it is still there. The right care will feel repeated, steady, and real.",
  },

  honesty: {
    title: "Honesty 🤍",
    summary:
      "The green flag you need most in love is honesty — clear communication, emotional truth, and a relationship where important things are not hidden or blurred.",
    desc1:
      "What your heart seems to need most is clarity. You are likely someone who feels exhausted when love becomes vague, evasive, or full of half-truths that force you to read between the lines. Because of that, honesty feels deeply attractive and deeply necessary to you. It is one of the clearest ways love becomes trustworthy.",
    desc2:
      "What makes this green flag powerful is that honesty is not just about facts. It is also about emotional transparency. It is the feeling that someone is real with you about what they feel, what they want, and where they stand. For you, love becomes safer when there is less decoding and more truth.",
    meaning1:
      "This result often means you have little patience left for mixed messages, hidden intentions, or emotional ambiguity disguised as complexity. You may have learned, through experience, how draining it is to build attachment around uncertainty. Because of that, your heart now values directness more than charm and truth more than temporary comfort.",
    meaning2:
      "That need is deeply valid. Honesty creates emotional structure. It allows you to trust what you are building because you are not relying on guesswork. It also protects your energy from becoming consumed by interpretations, overthinking, and trying to fill in gaps that should never have been left unclear in the first place.",
    showUp1:
      "In real life, this green flag can show up as clear intentions, direct conversations, emotional transparency, and the willingness to say difficult things with care. It may look like someone who communicates where they are, speaks with sincerity, and does not leave you piecing together the truth from fragments.",
    showUp2:
      "Honesty can also show up in conflict, where the other person is willing to tell the truth without manipulation, avoidance, or emotional performance. The challenge is remembering that honesty is not harshness. Healthy honesty is not cruel or careless. It is truth delivered with enough maturity to preserve dignity and trust at the same time.",
    strengths: "Clarity, truth, emotional transparency",
    strengthDetails:
      "The strength of this green flag is that it reduces confusion and deepens real trust. Honesty allows intimacy to become more solid because both people know what they are actually relating to. It creates a relationship atmosphere where emotions can be understood more cleanly and decisions can be made from reality rather than fantasy or hope alone.",
    watchOut: "Accepting vague charm when what you really need is truth",
    watchOutDetails:
      "What may feel difficult is noticing when charisma, chemistry, or emotional pull distracts you from the absence of genuine honesty. Sometimes people can feel emotionally intense while still withholding the truth that matters. Growth may involve trusting clarity over mystery and understanding that confusion is rarely a sign of deep love. It is often a sign that something important is not being said.",
    bestMatch:
      "Someone who tells the truth with care and makes honesty feel like safety rather than something you have to fight for",
    growth1:
      "Growth for you often begins when you stop shrinking your need for clarity. Wanting honesty does not make you demanding. It means your heart wants to build on something real. Love becomes healthier when you no longer romanticize vagueness as depth.",
    growth2:
      "The healthiest form of this result is choosing relationships where emotional truth is normal, not exceptional. The more you honor your need for honesty, the easier it becomes to recognize who is capable of real intimacy. Your heart does not need polished words alone. It needs truth it can stand on.",
    reminder:
      "The right love will not force you to guess what matters most. It will meet you with truth, clarity, and emotional openness.",
  },

  reassurance: {
    title: "Reassurance 🌷",
    summary:
      "The green flag you need most in love is reassurance — gentle emotional care, clear affection, and the kind of presence that helps your heart stop bracing for loss.",
    desc1:
      "What your heart seems to need most is comfort that feels real. You are likely someone who can love deeply but also feel deeply affected by uncertainty, distance, or emotional silence. Because of that, reassurance feels more than just sweet to you. It feels stabilizing. It reminds your heart that love is still here and that you do not have to fight alone against fear.",
    desc2:
      "What makes this green flag so powerful is that reassurance is not about dependency or constant rescue. It is about responsiveness. It is the presence of someone who notices vulnerability and meets it with warmth instead of indifference. For you, love becomes healthier when tenderness is expressed instead of assumed.",
    meaning1:
      "This result often means your emotional world is especially sensitive to distance, ambiguity, or shifts in tone that leave too much room for fear. You may have learned how quickly overthinking can grow when reassurance is missing. Because of that, your heart longs for a relationship where care is not hidden behind silence.",
    meaning2:
      "That need is not weakness. It often reflects a deep desire for emotional attunement. Reassurance helps you trust closeness because it tells your nervous system that you do not have to interpret every quiet moment as danger. It turns love from something you manage anxiously into something you can actually receive.",
    showUp1:
      "In real life, this green flag can show up as spoken affection, emotional responsiveness, gentle check-ins, and words or actions that help you feel remembered and secure. It may look like someone who notices your vulnerability, offers comfort without making you beg for it, and makes care visible rather than forcing you to infer it.",
    showUp2:
      "Reassurance can also show up in conflict, where the other person makes it clear that tension does not automatically mean disconnection. The challenge is remembering that reassurance should feel grounding, not like something you must endlessly chase. Healthy reassurance is offered freely enough that closeness starts to feel safe rather than fragile.",
    strengths: "Comfort, emotional attunement, visible care",
    strengthDetails:
      "The strength of this green flag is that it softens fear and helps trust become embodied. Reassurance can be incredibly healing because it teaches the heart that love can remain present even during uncertainty. It creates an emotional atmosphere where tenderness is not rare, and where connection does not disappear the moment anxiety enters the room.",
    watchOut: "Settling for scraps of comfort instead of consistent emotional care",
    watchOutDetails:
      "What may feel difficult is telling the difference between meaningful reassurance and occasional soothing that temporarily calms you without building real security. Sometimes people give just enough comfort to keep attachment alive without offering the deeper steadiness your heart truly needs. Growth may involve choosing reassurance that is sincere, healthy, and connected to actual consistency rather than empty reassurance alone.",
    bestMatch:
      "Someone who knows how to comfort your heart gently and consistently without making your needs feel like a burden",
    growth1:
      "Growth for you often begins when you stop judging yourself for needing tenderness. Reassurance is not something childish. It is one of the ways love becomes emotionally livable. Being soothed, understood, and reminded of care can be part of very healthy intimacy.",
    growth2:
      "The healthiest form of this result is learning to choose people who respond to vulnerability with warmth instead of withdrawal. When reassurance becomes a natural part of love, your heart can stop spending so much energy protecting itself. That is when closeness begins to feel more healing than frightening.",
    reminder:
      "The right love will not make you feel foolish for needing softness. It will remind your heart, again and again, that care is still here.",
  },

  respect: {
    title: "Respect 🕊️",
    summary:
      "The green flag you need most in love is respect — being valued as a full person, treated with care, and loved in a way that protects your dignity as much as your feelings.",
    desc1:
      "What your heart seems to need most is not just affection, but regard. You are likely someone who feels especially hurt when love becomes dismissive, careless, entitled, or emotionally selfish. Because of that, respect stands out to you as one of the clearest signs of healthy love. It tells you that connection is not only emotional, but honorable.",
    desc2:
      "What makes this green flag powerful is that respect shapes the entire atmosphere of a relationship. It affects how conflict is handled, how boundaries are received, how your feelings are spoken to, and whether your individuality is treated as something worthy of care. For you, love becomes safer when it does not require self-abandonment to keep it.",
    meaning1:
      "This result often means that somewhere in your love life, your dignity may have felt overlooked, minimized, or taken for granted. You may have experienced relationships where your feelings mattered only when they were convenient, or where care was offered without true regard for your inner world. Because of that, your heart now longs for love that feels deeply honoring.",
    meaning2:
      "That need is deeply important. Respect creates emotional health because it allows love to exist without eroding your sense of self. It means your no is heard, your perspective is taken seriously, and your vulnerability is not used against you. In many ways, respect is what keeps affection from becoming emotionally unsafe.",
    showUp1:
      "In real life, this green flag can show up as thoughtful communication, mutual consideration, healthy boundaries, and a tone of care that never becomes degrading or dismissive. It may look like someone who listens without belittling, disagrees without contempt, and treats your emotions as real even when they do not fully understand them yet.",
    showUp2:
      "Respect can also show up in the way someone makes room for your individuality. They do not try to control you, talk over you, or make you shrink to preserve the relationship. The challenge is remembering that respect is not optional just because affection is present. Someone can be attached to you and still not treat you well enough. Both matter.",
    strengths: "Dignity, mutual care, healthy boundaries",
    strengthDetails:
      "The strength of this green flag is that it protects the emotional foundation of love. Respect allows two people to stay close without becoming careless with each other’s humanity. It supports trust, makes communication healthier, and helps love remain sustainable because neither person has to keep sacrificing their dignity to maintain connection.",
    watchOut: "Confusing attention or passion with being truly valued",
    watchOutDetails:
      "What may feel difficult is noticing when emotional intensity creates the illusion of importance without the substance of real respect. Sometimes people can make you feel wanted while still ignoring your boundaries, minimizing your feelings, or failing to honor your full personhood. Growth may involve choosing relationships where your heart is not only desired, but genuinely respected.",
    bestMatch:
      "Someone who treats your feelings, boundaries, and inner life with real care instead of assuming love excuses carelessness",
    growth1:
      "Growth for you often begins when you stop separating love from dignity. Healthy love does not ask you to tolerate disrespect in exchange for affection. The more you honor your need for respect, the more clearly you can see which relationships are truly safe to grow inside.",
    growth2:
      "The healthiest form of this result is understanding that respect is one of the deepest forms of love. It is not cold or distant. It is what keeps love from becoming selfish, careless, or emotionally destructive. Your heart deserves not only to be loved, but to be treated with reverence too.",
    reminder:
      "The right love will not ask you to trade your dignity for closeness. It will protect both your heart and your self-respect.",
  },

  effort: {
    title: "Effort ✨",
    summary:
      "The green flag you need most in love is effort — intentional care, follow-through, and someone who does not leave love sitting only in words or potential.",
    desc1:
      "What your heart seems to need most is intention made visible. You are likely someone who gets tired of vague interest, passive affection, or relationships where you carry most of the emotional movement alone. Because of that, effort feels deeply meaningful to you. It is one of the clearest ways love stops being theoretical and starts feeling real.",
    desc2:
      "What makes this green flag so powerful is that effort is not about grand gestures alone. It is about active care. It is the feeling that someone wants the relationship enough to invest in it, protect it, and move it forward. For you, love becomes healthier when care is expressed through consistent actions rather than left floating in possibility.",
    meaning1:
      "This result often means you may have felt emotionally overextended in past relationships, giving more than you received or waiting too long for someone to become more intentional. You may know how painful it is when affection is present in words but absent in action. Because of that, your heart now craves effort as proof of emotional seriousness.",
    meaning2:
      "That need is deeply reasonable. Effort creates clarity because it shows whether someone is willing to participate fully in love instead of just enjoying its benefits. It also protects you from carrying the emotional labor of the connection alone. When effort is mutual, love begins to feel less exhausting and more alive.",
    showUp1:
      "In real life, this green flag can show up as thoughtful planning, follow-through, regular check-ins, intentional communication, repair after conflict, and the willingness to take real steps toward connection. It may look like someone who remembers what matters to you, makes time instead of excuses, and actively contributes to the relationship’s health.",
    showUp2:
      "Effort can also show up in small consistent ways: initiating contact, noticing your needs, being present when things matter, and doing emotional work without being dragged into it. The challenge is remembering that effort should not need to be begged for. Healthy love offers enough initiative that you are not constantly trying to generate the relationship’s momentum by yourself.",
    strengths: "Intention, follow-through, active care",
    strengthDetails:
      "The strength of this green flag is that it turns feelings into something you can actually live with. Effort helps relationships become tangible. It reduces confusion, creates movement, and gives both people a sense that love is being tended rather than merely imagined. For someone like you, that can feel incredibly grounding and healing.",
    watchOut: "Overvaluing potential when what you really need is action",
    watchOutDetails:
      "What may feel difficult is letting go of relationships that feel emotionally promising but remain passive in practice. Sometimes people can talk beautifully, feel deeply, or create intense chemistry without actually doing the work that healthy love requires. Growth may involve choosing demonstrated care over hoped-for effort and trusting behavior more than romantic possibility alone.",
    bestMatch:
      "Someone who shows love through real investment and makes you feel like the relationship matters in action, not only in theory",
    growth1:
      "Growth for you often begins when you stop minimizing the importance of follow-through. Wanting effort does not make you demanding. It means your heart understands that real care takes shape through action. Love should not remain a maybe forever.",
    growth2:
      "The healthiest form of this result is learning to choose people who participate fully in building connection. When effort is mutual, love stops feeling like a project you manage alone and starts feeling like something shared. Your heart deserves care that moves toward you, not care that only waits to be interpreted.",
    reminder:
      "The right love will not leave you carrying everything. It will show you, again and again, that care is willing to act.",
  },

  "emotional-safety": {
    title: "Emotional Safety 🌿",
    summary:
      "The green flag you need most in love is emotional safety — a bond where your heart can relax, your vulnerability is handled gently, and closeness does not feel dangerous.",
    desc1:
      "What your heart seems to need most is a sense of inner safety with the person you love. You are likely someone who can feel deeply, but who also becomes exhausted by relationships that feel emotionally sharp, unstable, or hard to trust. Because of that, emotional safety feels especially healing to you. It is what allows love to become a place of rest instead of self-protection.",
    desc2:
      "What makes this green flag so powerful is that emotional safety shapes how everything else is experienced. Even chemistry, affection, and attraction become more meaningful when your vulnerability is not constantly at risk. For you, love becomes healthier when you can be real without fearing punishment, withdrawal, ridicule, or emotional chaos in return.",
    meaning1:
      "This result often means your emotional world is looking not just for romance, but for refuge. You may have known what it feels like to stay guarded in relationships, to brace for shifts in mood, or to hold back the softest parts of yourself because the space did not feel secure enough. Because of that, your heart now longs for love that feels gentle to live inside.",
    meaning2:
      "That need is deeply human. Emotional safety allows intimacy to deepen because the heart is no longer busy defending itself. It helps you trust that your feelings can be expressed without becoming liabilities. It also makes growth possible, because real vulnerability needs an environment where tenderness is not treated carelessly.",
    showUp1:
      "In real life, this green flag can show up as calm communication, emotional steadiness, nonjudgmental listening, respectful conflict, and a pattern of care that makes your vulnerability feel welcomed rather than dangerous. It may look like someone who does not weaponize your openness, who handles your feelings gently, and who stays emotionally grounded even during difficulty.",
    showUp2:
      "Emotional safety can also show up in the absence of fear: you do not feel like one mistake will end everything, one honest feeling will create distance, or one moment of vulnerability will be used against you later. The challenge is remembering that emotional safety may feel quieter than chaos, but quiet does not mean less real. It often means more secure.",
    strengths: "Security, gentleness, trustworthy closeness",
    strengthDetails:
      "The strength of this green flag is that it creates a relationship environment where real intimacy can actually happen. Emotional safety supports honesty, softness, repair, and sustainable love because both people are less busy defending themselves. It allows closeness to feel nourishing rather than destabilizing, which can be incredibly transformative for the heart.",
    watchOut: "Mistaking emotional intensity for emotional depth",
    watchOutDetails:
      "What may feel difficult is recognizing that some relationships feel powerful precisely because they keep your nervous system activated. Intensity can feel meaningful, but it is not always safe. Growth may involve learning to trust what feels calm, kind, and stable enough for your heart to open slowly. Safety is not boredom. It is what allows love to deepen without damage.",
    bestMatch:
      "Someone whose presence makes your heart feel more settled, more open, and less afraid of being fully known",
    growth1:
      "Growth for you often begins when you stop viewing safety as something secondary to passion. Emotional safety is not the opposite of romance. It is often what makes romance sustainable. The more your heart feels protected, the more honestly it can love.",
    growth2:
      "The healthiest form of this result is choosing relationships where vulnerability becomes easier over time instead of more frightening. When emotional safety is present, your heart no longer has to stay half-hidden to survive. That is when love begins to feel less like survival and more like home.",
    reminder:
      "The right love will not make your softness feel dangerous. It will give your heart room to breathe, trust, and rest.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "consistency";
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
          Love Green Flag Result
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
            What this green flag means
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
            How this can show up in your love life
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
            Why this matters so much to you
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
            href="/quiz/green-flag-you-need-in-love"
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

export default function WhichGreenFlagDoYouNeedInLoveResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}