"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  subtle_charmer: {
    title: "The Subtle Charmer ✨",
    summary:
      "At heart, you are the Subtle Charmer — someone who creates chemistry through presence, deliberate small gestures, and the charged energy of what goes unsaid.",
    desc1:
      "Your flirting style is rooted in restraint. You do not rush toward the person you like — you create a gravitational pull and let them move toward it. The lingering eye contact, the specific detail you remembered, the way you become slightly more deliberate when they are nearby — these are your signals, and to the right person, they are unmistakable.",
    desc2:
      "What makes this flirt style powerful is its quality of attention. You make people feel noticed in a way that is specific rather than general — as though you actually saw them, rather than simply liked what you saw. That kind of attention is rare, and people who experience it tend to find it unforgettable. The challenge is that it requires a perceptive recipient. Someone who reads signals well will feel the pull. Someone who needs things stated plainly may not realize anything is happening at all.",

    meaning1:
      "This result often means your romantic energy is quiet in presentation but genuinely strong underneath. You may find yourself hyperaware of small signals from the person you like — a shift in their tone, a moment of sustained attention, a change in how they position themselves near you. You register these things because you are sending the same kinds of signals yourself and watching to see if they land.",
    meaning2:
      "Because of that, you may be someone who experiences the early stages of attraction as a kind of private conversation happening underneath the public one — full of meaning that neither person has acknowledged out loud yet. That experience is real and intense for you, even when it is invisible to observers. The challenge comes when you are drawn to someone who does not share your fluency in this kind of unspoken communication.",

    showUp1:
      "In everyday life, this flirting energy may show up as a tendency to become quieter and more deliberate around people you are attracted to, a habit of noticing and remembering small details, and a natural instinct to create intimacy through proximity and attention rather than words. You may be someone who holds eye contact just long enough, leans in slightly when listening, or finds a reason to be near someone without making the reason obvious.",
    showUp2:
      "You may also tend to flirt through quality of presence — giving someone your full, undivided attention in a way that communicates interest without stating it. The challenge is that this style requires you to be in proximity to work. It does not translate easily to text or early-stage situations where you have not yet had the chance to create the atmosphere your style depends on.",

    strengths: "Presence, restraint, creating chemistry without pressure",
    strengthDetails:
      "Your greatest strengths include the ability to make attraction feel electric without making it feel forced, to create a sense of intimacy through attention rather than declaration, and to leave people thinking about the interaction long after it ended — precisely because so much was communicated without being said. This style tends to create the kind of slow-building connection that deepens rather than fades.",

    watchOut: "Being so subtle that the other person never realizes you are interested",
    watchOutDetails:
      "What may feel difficult is the gap between how much you are communicating and how much is actually being received. Your signals are real and intentional to you, but they can be invisible to someone who does not already know what to look for. The person you like may genuinely not realize anything is happening — and may move on, not from lack of interest, but from lack of signal. Learning when to offer one clear, direct moment can make the difference between a connection that builds and one that never quite starts.",

    growth1:
      "Growth for you often means learning to offer one moment of clarity in an otherwise subtle dynamic — not to become someone who announces feelings at full volume, but to recognize when the person you like needs a single unambiguous signal rather than a continued accumulation of beautiful ones they cannot quite decode.",
    growth2:
      "The healthiest version of your flirt style is not less subtle. It is more legible. It is the ability to create the charged atmosphere you are naturally good at while also offering enough clarity that the right person knows the invitation is real — and can accept it.",

    bestMatch:
      "Someone perceptive and patient who reads between the lines, enjoys the slow build, and has the confidence to move toward what they sense without needing it stated explicitly",
    reminder:
      "Your subtlety is a form of care — a way of making someone feel noticed rather than targeted. Just remember that the person worth finding will also need to be able to find you.",
  },

  playful_teaser: {
    title: "The Playful Teaser 😄",
    summary:
      "At heart, you are the Playful Teaser — someone who flirts through wit, banter, and the particular electricity of two people keeping each other delightfully off-balance.",
    desc1:
      "Your flirting style is rooted in play. You create connection through humor, challenge, and the kind of back-and-forth that makes both people feel more alive. When you are interested in someone, the jokes get sharper, the energy gets lighter, and you find yourself inventing reasons to push back just enough to see how they respond. The best flirting, in your experience, feels like a game both people are winning.",
    desc2:
      "What makes this flirt style powerful is its ability to lower defenses. Humor is one of the most effective social lubricants available — it signals safety, intelligence, and the capacity for genuine fun. A person who can make you laugh is genuinely appealing, and you know this and use it well. The challenge is that banter requires a willing partner, and not everyone knows how to play — or wants to.",

    meaning1:
      "This result often means you experience attraction as a kind of aliveness — a heightened state where you are more yourself, funnier, sharper, and more present than usual. You may find yourself gravitating toward people who can match your energy rather than simply receiving it, because for you the most interesting thing is not the performance of charm but the actual back-and-forth of two people who are genuinely engaging with each other.",
    meaning2:
      "Because of that, you may be most attracted to people who give you something to work with — who have their own wit, their own perspective, their own willingness to play. Passive appreciation feels less interesting to you than active participation. The ideal flirting scenario is a conversation where both people are a little bit challenged and entirely enjoying it.",

    showUp1:
      "In everyday life, this flirting energy may show up as a tendency to tease the people you like most, a habit of turning situations into opportunities for humor, and a natural instinct to create connection through shared laughter rather than shared disclosure. You may be someone who makes a joke when things get serious, not to deflect but because levity is genuinely how you reach people.",
    showUp2:
      "You may also tend to use teasing as a form of closeness — a way of saying 'I am comfortable enough with you to poke at you' that communicates more warmth than it might initially appear. The challenge is that this can be misread by someone who experiences teasing as criticism rather than affection, or who interprets the playfulness as a signal that you are not serious about them.",

    strengths: "Wit, ease, making attraction feel fun rather than anxious",
    strengthDetails:
      "Your greatest strengths include the ability to make the early stages of connection feel genuinely enjoyable, to disarm people through humor in a way that creates real warmth, and to create a dynamic where the other person feels engaged and challenged rather than simply impressed. People who have been flirted with by a playful teaser often remember it as one of the more enjoyable romantic experiences they have had.",

    watchOut: "Using humor as a wall that keeps things perpetually light when depth is actually needed",
    watchOutDetails:
      "What may feel difficult is the transition from banter to something more genuinely vulnerable. Humor is wonderful for creating connection, but it can also become a way of maintaining a comfortable distance from anything that feels too exposed or too serious. If every sincere moment gets deflected with a joke, the person you like may eventually feel like they cannot reach the real you — and that feeling, over time, creates distance rather than closeness.",

    growth1:
      "Growth for you often means learning to let the game pause occasionally — to let a sincere moment be sincere without immediately making it funny. This does not mean becoming someone who cannot laugh at themselves. It means trusting that the person who enjoyed the banter can also handle the person underneath it.",
    growth2:
      "The healthiest version of your flirt style is not less playful. It is more complete. It is the ability to make someone laugh and also make them feel genuinely seen — to be both the funniest person in the room and occasionally the most honest one.",

    bestMatch:
      "Someone who can genuinely match your wit, enjoys the challenge, and also has the emotional depth to want more than the game eventually",
    reminder:
      "Your humor is a gift — it makes connection feel like relief rather than performance. Just remember that the person worth finding will also want to know what is behind the joke.",
  },

  sincere_connector: {
    title: "The Sincere Connector 💬",
    summary:
      "At heart, you are the Sincere Connector — someone who flirts through genuine interest, real questions, and the rare ability to make someone feel like the most interesting person in the room.",
    desc1:
      "Your flirting style is rooted in depth. When you are interested in someone, you ask them real questions — the kind that require an actual answer rather than a social performance. You listen to what they say. You remember it. You bring it back later in a way that shows you were actually paying attention. For you, the most intimate thing you can do is make someone feel genuinely known.",
    desc2:
      "What makes this flirt style powerful is its rarity. In a world of performative interest, someone who is actually curious about you is genuinely compelling. People who are flirted with by a sincere connector often describe it as one of the more memorable early interactions they have had — because they left the conversation feeling seen in a way they did not expect. The challenge is that this style can move quickly to a level of depth that some people find overwhelming before they are ready for it.",

    meaning1:
      "This result often means you experience attraction as something that lives in the specific texture of who someone is — their particular way of thinking, what they find funny, what they care about, the thing they said that surprised you. Generic attractiveness matters less to you than the quality of actual connection. You are most drawn to people who have something genuinely interesting happening underneath the surface.",
    meaning2:
      "Because of that, you may find small talk genuinely exhausting and surface-level flirting unsatisfying in a way that is hard to explain to people who enjoy it. For you, the point is not the performance of interest but the actual thing. When a conversation goes somewhere real — when you both say something true — that is when something actually starts.",

    showUp1:
      "In everyday life, this flirting energy may show up as a tendency to ask follow-up questions when others would move on, a habit of remembering details that other people forgot, and a natural instinct to go deeper rather than broader in early conversation. You may be someone who would rather talk to one person genuinely for an hour than circulate a room for the same time.",
    showUp2:
      "You may also tend to show interest through quality of attention — being more focused, more present, more genuinely engaged with the person you like than with anyone else in the room. The challenge is that this style can sometimes read as intense before the other person has decided they are ready for that level of engagement, or can make you deeply invested in a connection before you have enough information about whether it is actually reciprocated.",

    strengths: "Depth, genuine curiosity, making people feel truly seen",
    strengthDetails:
      "Your greatest strengths include the ability to create real intimacy early in a connection, to make someone feel that their actual inner life matters rather than just their surface presentation, and to build the kind of emotional foundation that more performative flirting styles rarely create. People who have been genuinely connected with by a sincere connector often feel a pull toward them that they find hard to explain — because the experience of being fully seen is deeply compelling.",

    watchOut: "Going so deep so fast that it feels overwhelming rather than intimate",
    watchOutDetails:
      "What may feel difficult is calibrating the depth of your engagement to where the other person actually is. You may find yourself in conversations that feel like a third date in terms of emotional intimacy by the end of a first meeting, which is wonderful for the right person and disorienting for someone who needed more time to arrive there. Learning to let connection build at its own pace — asking real questions while also leaving space for the other person to come to you — can make your style more sustainable without making it less genuine.",

    growth1:
      "Growth for you often means learning to be patient with the pace of someone else's opening up, without interpreting their slower arrival as disinterest. Not everyone has your fluency in emotional depth, and some people need more time, more lightness, more surface before they can go somewhere real.",
    growth2:
      "The healthiest version of your flirt style is not shallower. It is more paced. It is the ability to create genuine connection while also letting it unfold gradually enough that the other person feels invited rather than assessed.",

    bestMatch:
      "Someone who values depth over performance, genuinely enjoys real conversation, and finds being known by someone a form of romance rather than a form of exposure",
    reminder:
      "Your ability to make people feel seen is one of the rarest things in connection. Just remember that some people need to be warmed up before they can be open — and that giving them that time is also a form of care.",
  },

  confident_pursuer: {
    title: "The Confident Pursuer 🔥",
    summary:
      "At heart, you are the Confident Pursuer — someone who flirts with directness, clarity, and the particular magnetism of someone who is not afraid to say what they mean.",
    desc1:
      "Your flirting style is rooted in courage. When you are interested in someone, you do not wait indefinitely for signs or signals — you create a moment. You make eye contact that means something. You say the thing that other people are only thinking. You pursue with enough directness that the other person always knows where they stand, which is rarer and more valuable than it sounds in a culture of mixed signals and performative ambiguity.",
    desc2:
      "What makes this flirt style powerful is its clarity. In a world where most people are trying to preserve plausible deniability, someone who simply says 'I find you interesting and I would like to know you better' is genuinely refreshing. Confidence, when it is real rather than performed, is deeply attractive — it communicates that this person knows what they want and is not going to pretend otherwise. The challenge is calibrating intensity to the other person's readiness.",

    meaning1:
      "This result often means you experience attraction as something that requires action rather than contemplation. You may find the ambiguous early stages of connection — the 'are they interested or not' phase — genuinely uncomfortable, not because you are impatient but because uncertainty feels like wasted time when the alternative is simply finding out. You would rather know and be wrong than not know.",
    meaning2:
      "Because of that, you may move through early romantic stages faster than many people, which is wonderful for people who are equally decisive and disorienting for people who need more time to arrive at clarity. Understanding that not everyone shares your comfort with directness — and that some people need a warmer approach before they are ready for the honest one — is one of the most useful pieces of self-knowledge available to your style.",

    showUp1:
      "In everyday life, this flirting energy may show up as a tendency to make the first move, to state your interest clearly rather than hinting at it, and to feel genuine relief rather than anxiety at the moment of declaration. You may be someone who texts first, who asks for the number rather than waiting to be asked, and who finds the chase significantly less interesting than the actual connection.",
    showUp2:
      "You may also tend to respond well to directness in return — feeling more drawn to someone who is equally clear about their interest than to someone who keeps you guessing. The challenge is that your directness, while genuinely appealing to the right person, can feel like pressure to someone who is still deciding. Learning to be clear without being urgent — pursuing without crowding — is the refinement your style most benefits from.",

    strengths: "Clarity, courage, making attraction feel safe rather than uncertain",
    strengthDetails:
      "Your greatest strengths include the ability to move past the exhausting ambiguity that derails many potential connections, to make the people you pursue feel genuinely chosen rather than just noticed, and to create the conditions for a real connection to begin rather than hovering indefinitely in the space of might-be. People who are pursued by a confident pursuer often describe the experience as refreshingly clear.",

    watchOut: "Moving fast enough that the other person feels rushed before they have had time to arrive",
    watchOutDetails:
      "What may feel difficult is tolerating the pace of someone who needs more time than you do to feel ready to be direct. Your confidence is real and your interest is genuine, but the intensity of both can sometimes land before the other person is ready to receive it — not because they are not interested, but because they need a slower approach to feel safe enough to open up. Patience is not the same as passivity. Giving someone time to arrive is its own form of confidence.",

    growth1:
      "Growth for you often means learning to be just as brave about slowing down as you are about going forward. The courage to pursue directly is genuinely admirable. The courage to wait for someone who needs more time is a different and equally real form of it.",
    growth2:
      "The healthiest version of your flirt style is not less direct. It is more attuned. It is the ability to pursue with clarity while also staying genuinely curious about where the other person is — and adjusting your pace to meet them there rather than arriving before them and waiting impatiently.",

    bestMatch:
      "Someone equally decisive who appreciates directness, does not need the ambiguous phase to feel safe, and finds someone who knows what they want genuinely compelling",
    reminder:
      "Your directness is a form of respect — it treats the other person as someone worth being honest with. Just remember that some people need a little more time to get there, and waiting for them is not the same as losing.",
  },

  soft_romantic: {
    title: "The Soft Romantic 🌷",
    summary:
      "At heart, you are the Soft Romantic — someone who flirts through genuine warmth, sweet attention, and the particular safety of making someone feel completely comfortable being themselves around you.",
    desc1:
      "Your flirting style is rooted in warmth. When you like someone, you make them feel genuinely cared for — not in a grand gesture way, but in the small, consistent, entirely sincere way that is actually much harder to produce and much more meaningful to receive. You remember things. You check in. You make people feel like their comfort matters to you, because it does.",
    desc2:
      "What makes this flirt style powerful is its emotional safety. People who are flirted with by a soft romantic often describe feeling unusually comfortable unusually quickly — as if they could say something real without it being mishandled. That quality of emotional safety is not a minor thing. It is the foundation that most meaningful connections are built on, and most flirting styles do not create it. Yours does.",

    meaning1:
      "This result often means you experience attraction as something that lives primarily in emotional closeness rather than tension or challenge. You may be drawn to the moments in early connection where someone lets their guard down, shares something real, or simply seems genuinely at ease with you — because those moments feel more romantic to you than charged dynamics or witty games.",
    meaning2:
      "Because of that, you may find that people open up to you unusually fast — not because you are extracting anything from them, but because your energy communicates that it is safe to do so. The challenge is that this same warmth can sometimes be received as general friendliness rather than specific romantic interest, leading to situations where someone feels genuinely cared for by you without realizing you are actually interested in something more.",

    showUp1:
      "In everyday life, this flirting energy may show up as remembering what someone mentioned in passing and asking about it later, texting to check in when someone has something difficult happening, and a natural tendency to create comfort in the other person's presence as a form of showing interest. You may be someone who makes the other person feel seen and cared for long before you say anything explicitly romantic.",
    showUp2:
      "You may also tend to be the person who makes romantic interest feel safe to express in return — people may find it easier to be direct with you than with others, because your warmth communicates that directness will be received well. The challenge is that your comfort-creating instinct can sometimes delay the moment where the connection becomes explicitly romantic, which can leave things feeling undefined for longer than either person really wants.",

    strengths: "Warmth, emotional safety, making people feel genuinely cared for",
    strengthDetails:
      "Your greatest strengths include the ability to create genuine emotional intimacy early in a connection, to make the experience of being interested in someone feel tender rather than anxious, and to build the kind of warmth that most people are quietly hoping to find. People who have been genuinely warmed by a soft romantic often describe it as one of the most comfortable early romantic experiences they can remember.",

    watchOut: "Being so warm and caring that your specific romantic interest reads as general friendliness",
    watchOutDetails:
      "What may feel difficult is making the transition from genuinely warm presence to explicitly romantic interest in a way that is clear without feeling jarring. Your natural mode is warmth, and warmth can sometimes blur into friendliness in ways that leave the other person unsure what you actually want. Learning to offer one moment of clear, specific romantic interest — amid all the warmth — helps ensure that what you are communicating is what is actually being received.",

    growth1:
      "Growth for you often means learning to be as direct about your interest as you are warm in expressing it — to let the person you like know, at some point, that the warmth they are experiencing is specifically and romantically directed at them rather than at everyone in the room.",
    growth2:
      "The healthiest version of your flirt style is not less warm. It is more explicit. It is the ability to make someone feel completely safe and also leave them with no uncertainty about the fact that you are interested in them specifically. Warmth and clarity, together, are a genuinely powerful combination.",

    bestMatch:
      "Someone emotionally receptive who values genuine care over games, appreciates warmth as a form of romance, and has the emotional maturity to offer the same quality of attention in return",
    reminder:
      "Your warmth is one of the most genuine and rare things in romantic connection. Just remember that the right person also needs to know it is directed at them — and that telling them is an act of care, not a loss of softness.",
  },

  mystery_keeper: {
    title: "The Mystery Keeper 🌙",
    summary:
      "At heart, you are the Mystery Keeper — someone who flirts by holding back just enough that the other person cannot stop thinking about you.",
    desc1:
      "Your flirting style is rooted in selective disclosure. You are genuinely interesting, but you do not give everything away at once. You offer just enough — a glimpse of depth, a moment of unexpected warmth, a smile that means something — and then let the other person sit with the question of what it meant. That restraint is not calculated coldness. It is a natural expression of an inner world that takes time to open and rewards patience.",
    desc2:
      "What makes this flirt style powerful is its staying power. While more expressive styles burn brightly early, mystery keeper energy lingers. People find themselves replaying your interactions, wondering about you, drawn back to conversations that felt charged without being explicit. That quality of being unforgettable without being obvious is genuinely rare, and deeply compelling to the right person. The challenge is that it also requires the right person — someone perceptive enough to feel what is not being said.",

    meaning1:
      "This result often means you process your attraction privately and carefully before you let any of it become visible. You may observe a lot, feel a lot, and show very little — not out of indifference, but because opening up is something you do deliberately rather than automatically. For you, vulnerability is not a default but a choice, and you tend to make it only when you feel some degree of certainty that it will be received well.",
    meaning2:
      "Because of that, you may create a particular kind of magnetic effect in people who are drawn to depth — the experience of sensing that there is something significant underneath the surface and wanting to know what it is. The challenge is that people who need clearer signals, or who read the restraint as disinterest, may give up before you have had time to open. Finding the balance between your natural reserve and offering enough warmth that the right person feels invited rather than excluded is the central practice of your flirt style.",

    showUp1:
      "In everyday life, this flirting energy may show up as a tendency to listen more than you speak, to offer one unexpectedly real moment in an otherwise careful interaction, and to be remembered by people as compelling in a way they cannot fully articulate. You may be someone who holds eye contact a beat longer than expected, who asks a question that reveals more depth than the conversation had reached, or who leaves a conversation earlier than people want you to.",
    showUp2:
      "You may also tend to be more selectively warm than consistently warm — your moments of genuine connection feel significant precisely because they are not constant. The challenge is that this selectivity, while genuinely intriguing, can create enough uncertainty that some people interpret it as unavailability rather than depth. Offering slightly more warmth, slightly more consistently, can allow your natural mystery to become an invitation rather than a barrier.",

    strengths: "Depth, magnetism, creating lasting impression through selective presence",
    strengthDetails:
      "Your greatest strengths include the ability to create the kind of memorable, charged early dynamic that stays with people long after the interaction ends, to make your moments of genuine warmth feel significant because they are rare, and to hold people's interest without demanding it. Mystery keeper energy is among the most compelling available in early romantic dynamics — for the person who can read it.",

    watchOut: "Creating so much uncertainty that the right person gives up before you have opened enough",
    watchOutDetails:
      "What may feel difficult is the risk of being genuinely compelling but also genuinely unreadable — of creating interest that cannot find a way to become connection because the signals are too contained to act on. The person who is drawn to you may feel the pull clearly and still not know whether pursuing it is welcome. Offering one clear moment of warmth — a single unambiguous signal that you are interested — can make the difference between a connection that forms and one that stays forever in the realm of almost.",

    growth1:
      "Growth for you often means learning to trust that offering more does not cost you the magnetism you have built through restraint. The mystery that draws people is real. Letting someone in does not erase it. In fact, a person who is genuinely interesting on the surface and genuinely open underneath is the most compelling version of this style there is.",
    growth2:
      "The healthiest version of your flirt style is not more obvious. It is more intentionally warm — finding the specific moments to let someone know, without announcing it to the room, that the door is open. That combination of depth and deliberate warmth is genuinely rare and genuinely irresistible to the right person.",

    bestMatch:
      "Someone patient, perceptive, and secure enough to stay curious about you without needing constant reassurance — who finds the slow reveal of who you are more compelling than anything that could be offered all at once",
    reminder:
      "Your depth is real and your reserve is a form of care about who you share it with. Just remember that the person worth finding also needs to be able to find you — and leaving the door slightly more open is not the same as losing what makes you compelling.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "subtle_charmer";
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
          Flirt Type Personality Result
        </p>

        <h1 style={{ fontSize: "40px", lineHeight: 1.2, marginBottom: "12px", color: "#111827" }}>
          {r.title}
        </h1>

        <p style={{ fontSize: "20px", fontWeight: 700, color: "#374151", marginBottom: "22px", lineHeight: 1.7 }}>
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
            What this style means
          </h2>
          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            How this shows up in your life
          </h2>
          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, marginTop: "26px", marginBottom: "12px", color: "#111827" }}>
            Your strengths
          </h2>
          <p style={{ marginBottom: "10px" }}>
            <strong>Main strengths:</strong> {r.strengths}
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
            }}
          >
            {copied ? "Copied!" : "Share result"}
          </button>

          <a
            href="/quiz/flirt-type"
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

export default function FlirtTypeResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
