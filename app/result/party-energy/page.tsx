"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  social_spark: {
    title: "Social Spark ✨",
    summary:
      "You bring lively, talkative, and contagious energy that gets people opening up fast.",
    desc1:
      "Your party energy is bright, social, and naturally engaging. You help conversations start, keep moments alive, and make people feel less awkward just by being there. Your presence often acts like a spark that gets the whole room moving a little more easily.",
    desc2:
      "What makes this energy special is how quickly it spreads. People often feel more relaxed, more expressive, and more included around you. You do not just attend the vibe — you help create it. Your energy makes social spaces feel warmer, brighter, and more alive.",
    meaning1:
      "This result usually means your natural social gift is momentum. You are often the kind of person who helps a room wake up, connect, and loosen up faster. Even if you are not trying to be the center of attention, your presence tends to get things moving in a positive way.",
    meaning2:
      "Because of that, people may experience you as easy to talk to, emotionally open, and socially energizing. You often lower the pressure in a room simply by being expressive and warm. What others may see as confidence is often just your natural ability to turn social tension into connection.",
    showUp1:
      "In real life, this can show up as starting conversations naturally, making people laugh, inviting quieter people in, or keeping a group from going flat. You may be the one who keeps the party from feeling stiff, disconnected, or overly divided.",
    showUp2:
      "You may also notice that people become more animated around you. They talk more, smile more, and feel safer joining in. That is one of your strongest social gifts. The challenge is remembering that you do not always have to carry the whole mood by yourself.",
    strengths: "Conversation, openness, social momentum",
    strengthDetails:
      "Your strengths include warmth, ease, responsiveness, and the ability to make group dynamics feel more alive. You often create momentum without needing a script. That makes you naturally valuable in parties, gatherings, and any environment where connection needs a little help getting started.",
    watchOut: "Overextending your energy for the sake of the mood",
    watchOutDetails:
      "What may feel difficult is the pressure to keep things upbeat all the time. Because you are good at lifting the room, you may sometimes feel responsible for its energy. Over time, that can become draining if you start performing your brightness instead of staying connected to how you actually feel.",
    bestMatch:
      "Crowds and people who love warmth, fun, and easy connection",
    growth1:
      "Growth for you often means remembering that your value is not limited to being entertaining or socially on. You are still worth being around even when you are quieter, lower-energy, or not actively carrying the conversation.",
    growth2:
      "The healthiest version of your energy is not constant performance. It is authentic warmth. When your spark comes from a real place instead of pressure, people feel it even more deeply.",
    reminder:
      "You light people up naturally. Just remember that you are allowed to glow without burning yourself out.",
  },

  chill_anchor: {
    title: "Chill Anchor 🌿",
    summary:
      "You bring calm, grounded energy that makes the whole party feel easier to enjoy.",
    desc1:
      "Your party energy is relaxed, steady, and quietly reassuring. You may not be the loudest person in the room, but people often feel comfortable near you because your vibe is easy to settle into. You help social spaces feel less chaotic and more natural.",
    desc2:
      "What makes this energy powerful is that not every party needs more noise — sometimes it needs balance. You create a sense of ease that lets people loosen up without pressure. Your presence often becomes the part of the night people remember as genuinely comfortable.",
    meaning1:
      "This result often means your social gift is emotional grounding. You bring a stabilizing presence into group settings, which can make people feel safer being themselves. While louder personalities may attract attention first, your energy is often what helps the room actually feel good to be in.",
    meaning2:
      "Because of that, you may not always look dramatic from the outside, but your effect is real. You help social moments feel less forced, less performative, and less stressful. A lot of people quietly value that more than they say out loud.",
    showUp1:
      "In real life, this can show up as being easy to sit beside, easy to talk to, and emotionally steady in group settings. You may be the one who smooths awkwardness without making a big show of it, or the person people drift toward when they need the energy to feel calmer.",
    showUp2:
      "You may also act as a social reset when the room feels too loud, too scattered, or too intense. Your presence can make people breathe a little deeper and relax into themselves. The challenge is that subtle energy is not always immediately recognized, even when it matters a lot.",
    strengths: "Grounding presence, calmness, ease",
    strengthDetails:
      "Your strengths include steadiness, emotional ease, reliability, and the ability to help people feel comfortable without trying too hard. That kind of social grounding is rare. It makes you someone whose presence improves the atmosphere in a way that feels natural rather than forced.",
    watchOut: "Being overlooked because your energy is subtle",
    watchOutDetails:
      "What may feel difficult is being underestimated in louder environments. Because your energy is calm rather than flashy, people may not always notice right away how much you are contributing to the mood. That can sometimes make you feel invisible even when your presence is deeply appreciated.",
    bestMatch:
      "People and spaces that value comfort, steadiness, and real connection",
    growth1:
      "Growth for you often means trusting that quiet impact is still impact. You do not need to become louder to be socially powerful. What you bring already matters, especially in spaces where people are tired of performance and noise.",
    growth2:
      "The healthiest version of your energy is not disappearing into the background. It is staying grounded while still letting yourself take up space when you want to. Calm and visible can exist together.",
    reminder:
      "You do not have to dominate the room to shape it. Your calm is part of what makes the whole space feel better.",
  },

  chaotic_icon: {
    title: "Chaotic Icon ⚡",
    summary:
      "You bring wild, unforgettable energy that turns an ordinary party into a story.",
    desc1:
      "Your party energy is spontaneous, funny, and impossible to fully predict. Things tend to become more memorable when you are around, not because you plan it that way, but because your presence adds movement and unpredictability to the room. You are the type people talk about afterward.",
    desc2:
      "What makes this energy special is that it breaks people out of routine. You make the vibe feel alive, weird in the best way, and harder to forget. Even when the night gets chaotic, your energy often turns that chaos into something iconic instead of just messy.",
    meaning1:
      "This result usually means your social gift is disruption in the best sense. You break dull patterns, push things out of autopilot, and create moments people did not see coming. Where some people maintain the vibe, you electrify it.",
    meaning2:
      "Because of that, people may experience you as funny, unpredictable, bold, and impossible to fully prepare for. Your presence often adds story value to a night. Even when things get weird, you tend to make weirdness feel entertaining instead of awkward.",
    showUp1:
      "In real life, this can show up as spontaneous jokes, sudden ideas, memorable one-liners, strange but funny decisions, or being the person who accidentally becomes the event. You often turn normal social space into something more vivid and alive.",
    showUp2:
      "You may also notice that people feel freer around you because your energy lowers the pressure to act polished all the time. You give the room permission to be messier, funnier, and more alive. The challenge is knowing when to dial back before your own energy runs past your limits.",
    strengths: "Spontaneity, humor, unforgettable presence",
    strengthDetails:
      "Your strengths include boldness, comedic instinct, social unpredictability, and the ability to create memorable moments without needing everything to be carefully controlled. You often bring life to the room through surprise, which can make your energy wildly magnetic.",
    watchOut: "Burning too hot or going past your own limits",
    watchOutDetails:
      "What may feel difficult is pacing yourself. Because your energy can be so high-impact, you may sometimes go too far, overcommit to the moment, or keep escalating when rest, boundaries, or calm would actually serve you better. Iconic energy is strongest when it is sustainable.",
    bestMatch:
      "People who love fun, unpredictability, and nights with a story",
    growth1:
      "Growth for you often means learning that being unforgettable does not require constant intensity. You do not have to top every moment to remain magnetic. Sometimes your presence is enough even before the chaos begins.",
    growth2:
      "The healthiest version of your energy is playful, alive, and bold without becoming self-destructive. When your spontaneity is grounded, it becomes even more powerful because it can last.",
    reminder:
      "Your chaos has charm because it brings life. Just make sure the night stays fun for you too, not only unforgettable for everyone else.",
  },

  mysterious_observer: {
    title: "Mysterious Observer 🌙",
    summary:
      "You bring quiet, magnetic energy that makes people notice you without fully understanding why.",
    desc1:
      "Your party energy is subtle but striking. You may not rush to the center of attention, but people often become curious about you anyway. There is something composed, thoughtful, or a little unreadable in the way you move through a social space, and that gives your presence a strong pull.",
    desc2:
      "What makes this energy special is that it lingers. While louder personalities may dominate the room for a moment, your vibe stays in people’s minds longer. You bring intrigue, coolness, and a kind of quiet intensity that feels rare in a busy setting.",
    meaning1:
      "This result often means your social gift is intrigue. You do not need to flood the room with words to have presence. In fact, part of your power comes from restraint. People notice what you do not overshare, what you seem to see, and the way you hold your own space.",
    meaning2:
      "Because of that, others may project mystery, depth, or quiet confidence onto you. Sometimes that comes from your natural observational style. Sometimes it comes from the fact that you are not trying to force attention. Either way, your energy tends to linger more than people expect.",
    showUp1:
      "In real life, this can show up as watching before speaking, choosing your moments carefully, making a strong impression with only a few words, or drawing attention simply by seeming self-contained. You may be the one people keep glancing at without fully knowing why.",
    showUp2:
      "You may also have a social style that feels cooler, slower, or more deliberate than the room around you. That can make you memorable. The challenge is that what feels like calm observation on your side can sometimes be read as distance or disinterest by other people.",
    strengths: "Presence, intrigue, quiet magnetism",
    strengthDetails:
      "Your strengths include restraint, observation, quiet confidence, and the ability to create strong social impact without competing for attention. You often prove that energy does not have to be loud to be powerful.",
    watchOut: "Seeming more distant than you actually are",
    watchOutDetails:
      "What may feel difficult is being misunderstood. Because your energy is subtle and self-contained, some people may assume you are closed off, uninterested, or emotionally far away when that is not actually true. A little warmth or clarity can sometimes help your real vibe come through.",
    bestMatch:
      "People who appreciate subtlety, depth, and a little mystery",
    growth1:
      "Growth for you often means learning when to let people in just a little sooner. You do not have to give away all your mystery to become more approachable. Sometimes one smile, one question, or one small opening is enough.",
    growth2:
      "The healthiest version of your energy keeps its depth while allowing connection. You can stay composed and intriguing without becoming unreachable.",
    reminder:
      "Your quiet presence says more than you think. Let it stay magnetic, but let it stay human too.",
  },

  golden_hype: {
    title: "Golden Hype ☀️",
    summary:
      "You bring radiant, uplifting energy that makes people feel excited to be there.",
    desc1:
      "Your party energy is bright, joyful, and emotionally contagious. You have a way of making things feel more fun, more open, and more full of life. People often feel pulled toward your vibe because it carries excitement without feeling forced.",
    desc2:
      "What makes this energy powerful is that it raises the emotional temperature of the room. You help people loosen up, smile more, and feel like something good is happening. Your presence feels like golden-hour social energy — warm, memorable, and easy to love.",
    meaning1:
      "This result often means your social gift is uplift. You bring excitement, optimism, and visible warmth into a room, and that can make people feel instantly better about being there. You often create the sense that the moment is worth enjoying.",
    meaning2:
      "Because of that, people may experience you as radiant, easy to like, and emotionally energizing. Your vibe often feels bigger than simple friendliness. It carries momentum, charm, and a kind of social sunshine that makes gatherings feel more alive.",
    showUp1:
      "In real life, this can show up as being the person who gets people smiling, helps everyone loosen up, reacts with enthusiasm, and makes moments feel more special just by being visibly into them. Your energy often makes good moments feel even better.",
    showUp2:
      "You may also find that people naturally gather around you when the vibe needs lifting. That is one of your superpowers. The challenge is making sure you do not start believing you always have to be the bright one, even when you are tired or not feeling fully on.",
    strengths: "Excitement, warmth, uplifting presence",
    strengthDetails:
      "Your strengths include enthusiasm, emotional brightness, charm, and the ability to raise social energy without feeling artificial. When you are in your element, your presence can make a whole group feel more open, more hopeful, and more ready to enjoy the moment.",
    watchOut: "Feeling pressure to always keep the energy high",
    watchOutDetails:
      "What may feel hard is the expectation that you will always be upbeat. Because your energy is so naturally sunny, people may come to rely on it. Over time, that can create pressure to keep glowing even when you need rest, quiet, or emotional space.",
    bestMatch:
      "People and parties that thrive on brightness, joy, and momentum",
    growth1:
      "Growth for you often means remembering that your warmth is still real even when it is softer. You do not have to perform joy at full volume to remain lovable, magnetic, or socially powerful.",
    growth2:
      "The healthiest version of your energy is radiant but grounded. It is not forced positivity. It is genuine warmth with enough self-respect to rest when needed.",
    reminder:
      "Your brightness is beautiful, but it does not have to shine at maximum strength every second to matter.",
  },

  soft_connector: {
    title: "Soft Connector 🤍",
    summary:
      "You bring gentle, emotionally warm energy that helps people feel included and understood.",
    desc1:
      "Your party energy is not about taking over the room — it is about quietly improving it. You naturally help people feel less left out, less nervous, and more connected. Whether through one-on-one conversation or soft social warmth, your presence creates emotional ease.",
    desc2:
      "What makes this energy beautiful is how human it feels. You help people relax into themselves instead of performing. The party may be louder around you, but what people remember is often the way you made them feel genuinely welcome. That is a rare kind of social power.",
    meaning1:
      "This result usually means your social gift is emotional inclusion. You notice how people are feeling, who seems left out, and what kind of warmth might help someone settle in. You often create connection not through volume, but through emotional attentiveness.",
    meaning2:
      "Because of that, people may feel unusually safe around you. You often make social space feel softer and more real. In a setting where many people are trying to impress, your energy can feel like relief.",
    showUp1:
      "In real life, this can show up as kind one-on-one conversation, quietly pulling someone into the group, making nervous people feel less alone, or adding warmth without demanding attention. Your social style often feels personal rather than performative.",
    showUp2:
      "You may also be the reason a party feels more emotionally balanced, even if nobody says it directly. That is your power. The challenge is making sure your kindness does not turn into over-giving or disappearing into everyone else’s needs.",
    strengths: "Warmth, inclusion, emotional ease",
    strengthDetails:
      "Your strengths include empathy, attentiveness, gentleness, and the ability to create belonging. You often help people feel seen in ways that matter more than flashy social performance. That kind of energy leaves a deep impression.",
    watchOut: "Giving too much to everyone else’s comfort",
    watchOutDetails:
      "What may feel difficult is overextending your emotional warmth. Because you are naturally considerate, you may sometimes focus so much on other people settling in that you forget to check in with your own comfort, boundaries, or energy level.",
    bestMatch:
      "People and spaces that value kindness, softness, and real belonging",
    growth1:
      "Growth for you often means realizing that inclusion should include you too. You do not have to earn your place by constantly making everyone else comfortable first. Your presence already matters.",
    growth2:
      "The healthiest version of your energy stays kind without becoming self-erasing. You can remain gentle, welcoming, and emotionally attuned while still protecting your own needs.",
    reminder:
      "The warmth you give others is rare. Just remember to keep some of that softness for yourself too.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey =
    rawKey && rawKey in results ? rawKey : "social_spark";
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
          Party Personality Result
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
            How this can show up socially
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
            href="/quiz/party-energy"
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

export default function PartyEnergyResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}