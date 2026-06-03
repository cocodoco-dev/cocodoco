"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  romantic_dreamer: {
    title: "The Romantic Dreamer 💫",
    summary:
      "At heart, you are the Romantic Dreamer — someone who loves deeply, believes in magic, and feels everything with your whole heart.",
    desc1:
      "Your approach to love is rooted in depth, emotion, and the belief that the right connection should feel like something special. You are drawn to meaningful gestures, romantic atmosphere, and the kind of closeness that makes ordinary moments feel significant. When you care about someone, it is rarely halfway.",
    desc2:
      "What makes this dating style powerful is emotional richness. You bring genuine feeling into relationships in a way that many people quietly long for but rarely find. Your gift is creating love that feels alive, intentional, and deeply human rather than routine or transactional.",

    meaning1:
      "This result often means your emotional investment in love runs deep. You may find yourself thinking about someone a great deal, imagining the future, noticing small details, and feeling things before you have the words for them. Love is not background noise for you — it tends to move to the center of your attention.",
    meaning2:
      "Because of that, you may be the kind of person who puts real effort into relationships. You remember things, plan things, and show up in ways that make people feel genuinely chosen. That is a rare quality. It can also mean that when love does not meet your emotional investment, the disappointment feels sharper than it might for others.",

    showUp1:
      "In everyday life, this style may show up as thoughtful gestures, deep conversations, a tendency to replay meaningful moments, and a natural sensitivity to how a relationship feels emotionally. You may be someone who reads into tone, remembers anniversaries, and puts care into how you express affection.",
    showUp2:
      "You may also tend to feel the emotional temperature of a relationship acutely — noticing when something shifts, when distance grows, or when connection deepens. That sensitivity is part of what makes you a meaningful partner. The challenge is making sure it does not tip into anxiety, overanalysis, or reading too much into things that are simply neutral.",

    strengths: "Emotional depth, thoughtfulness, romantic presence",
    strengthDetails:
      "Your greatest strengths include the ability to make love feel real and intentional, to create emotional intimacy through care and attention, and to remind the people you love that they matter deeply. You bring a kind of romantic energy that stays with people — not because it is performative, but because it is sincere.",

    watchOut: "Idealizing people quickly and feeling hurt by unmatched emotional depth",
    watchOutDetails:
      "What may feel difficult is when your emotional investment is not matched. You may fall for potential rather than the reality in front of you, stay too long hoping someone will rise to the depth you offer, or feel quietly devastated when love turns out to be more ordinary than you imagined. Learning to love the real person rather than the romantic idea of them is one of the most important skills for your dating style.",

    growth1:
      "Growth for you often begins when you learn that depth and reality are not opposites. A love that is steady, honest, and sometimes unromantic can be just as meaningful — and often more lasting — than one built on intensity and feeling alone.",
    growth2:
      "The healthiest version of your romantic style is not less feeling. It is grounded feeling. It is the ability to love deeply while staying present to who someone actually is, to bring magic into the ordinary without requiring the ordinary to always feel magical.",

    bestMatch:
      "Someone emotionally expressive and genuine who loves being loved and gives back with the same openness",
    reminder:
      "Your love is deep and real. Just remember that the right person will meet you at your depth — you will not have to convince them to care.",
  },

  slow_burn: {
    title: "The Slow Burn 🕯️",
    summary:
      "At heart, you are the Slow Burn — someone who takes time to open up, builds trust carefully, and loves in a way that deepens over time.",
    desc1:
      "Your approach to love is rooted in patience, observation, and emotional honesty. You do not fall quickly, and that is not a flaw — it is a form of self-awareness. Before you let someone in, you watch how they show up across different moments, not just the best ones. The connections you build may start quietly, but they tend to run very deep.",
    desc2:
      "What makes this dating style powerful is that it creates real intimacy. Because you do not open up to everyone easily, the people who earn your trust tend to receive something genuine and lasting. Your gift is building love that has roots — not just chemistry that fades when the newness wears off.",

    meaning1:
      "This result often means your emotional timeline in relationships moves differently than others. You may feel genuinely interested in someone while still needing more time, more evidence, and more emotional safety before your feelings fully arrive. That does not mean you are emotionally unavailable — it means you are emotionally careful.",
    meaning2:
      "Because of that, people who date you may sometimes feel uncertain about where they stand. The connection may feel warm but hard to read, present but not fully declared. Being more transparent about where you are — even when you are still figuring it out — can make a significant difference in keeping the right people close.",

    showUp1:
      "In everyday life, this style may show up as gradual warmth, thoughtful questions, loyalty that builds slowly, and a strong preference for depth over speed. You may be someone who falls harder the more you know someone, finds attraction growing over time rather than at first glance, and feels most open when trust has been established consistently.",
    showUp2:
      "You may also tend to pull back when things move too fast, not from disinterest but from a need to feel emotionally safe before fully committing. The challenge is distinguishing between healthy caution and protective distance. Sometimes the wall that keeps the wrong people out also keeps the right ones from getting close enough.",

    strengths: "Patience, emotional depth, trust-based intimacy",
    strengthDetails:
      "Your greatest strengths include the ability to build relationships that last, to love with genuine investment rather than impulse, and to offer a kind of emotional presence that deepens over time. People who earn your openness often find that you are one of the most meaningful partners they have had — because what they receive is real, not performed.",

    watchOut: "Being mistaken for disinterested and letting the right connection slip away",
    watchOutDetails:
      "What may feel difficult is the gap between how much you actually feel and how much you show. That gap can create confusion, and the people most worth keeping may not always wait long enough to see the fuller version of you. Learning to offer small signals of warmth and interest — even before you are fully sure — can help close that distance.",

    growth1:
      "Growth for you often means learning to let people in a little earlier, not recklessly but with more intentional vulnerability. Not every open moment has to be earned first. Sometimes offering something real before you feel completely safe is what allows real closeness to begin.",
    growth2:
      "The healthiest version of your slow burn style is not speed. It is conscious openness. It is the ability to move at your natural pace while still communicating enough that the people who matter do not mistake your caution for indifference.",

    bestMatch:
      "Someone patient and consistent who earns trust without pressure and finds your gradual depth worth waiting for",
    reminder:
      "Your love is worth the wait. Just remember that the right person also needs enough to hold onto while they wait.",
  },

  free_spirit: {
    title: "The Free Spirit 🌸",
    summary:
      "At heart, you are the Free Spirit — light, open, and naturally at ease in love without needing it to follow a script.",
    desc1:
      "Your approach to love is rooted in presence, openness, and the genuine enjoyment of connection without forcing it into a shape it is not ready for. You are not chasing timelines or checking boxes. You are actually experiencing the relationship in front of you, which is rarer than it sounds. Your energy in dating tends to feel easy, refreshing, and real.",
    desc2:
      "What makes this dating style powerful is its authenticity. You do not perform interest — you either feel it or you do not. You do not stay out of obligation. That honesty makes the connections you do choose feel meaningful, because they were never forced. Your gift is loving without the weight of expectation turning everything into pressure.",

    meaning1:
      "This result often means you experience love as something that should feel good in the present, not just promising for the future. You may naturally resist relationships that feel heavy, obligatory, or suffocating — not because you are afraid of commitment, but because you believe love should feel like freedom, not a cage.",
    meaning2:
      "Because of that, you may be someone who thrives in connection that has room to breathe. You tend to be most yourself — and most loving — when the relationship does not demand that you constantly perform certainty, seriousness, or emotional intensity before you actually feel it.",

    showUp1:
      "In everyday life, this style may show up as spontaneity, ease in conversation, a natural ability to keep things fun, and a resistance to over-structuring what is still early and undefined. You may be the kind of person who keeps dates light and genuine, enjoys the process of getting to know someone without rushing toward conclusions.",
    showUp2:
      "You may also tend to pull back when someone pushes too hard for labels, declarations, or emotional intensity before you feel ready. The challenge is that sometimes the right connection does ask for more — a little more vulnerability, a little more declaration, a little more choosing. Staying light is not always the same as staying honest.",

    strengths: "Openness, authenticity, presence in the moment",
    strengthDetails:
      "Your greatest strengths include the ability to create connection that feels genuinely enjoyable rather than stressful, to stay present rather than living in the future of a relationship, and to bring lightness that helps the other person relax and be real around you too. That ease is genuinely rare and magnetic.",

    watchOut: "Avoiding depth when things get real and missing connections by staying too surface-level",
    watchOutDetails:
      "What may feel difficult is the moment when a connection invites more emotional weight than feels comfortable. Rather than stepping into that depth, you may instinctively lighten things or pull back. Over time, that pattern can create a ceiling on how close you let people get — not because you do not care, but because real intimacy requires tolerating discomfort, and that is not always easy.",

    growth1:
      "Growth for you often means learning that depth and freedom are not opposites. A relationship that asks you to be emotionally present and fully known does not have to feel like a loss of self. It can feel like an expansion of it.",
    growth2:
      "The healthiest version of your free spirit style is not shallowness. It is conscious lightness. It is the ability to stay free and genuine while also being willing to be fully seen — which is, in the end, the most courageous thing any of us can do in love.",

    bestMatch:
      "Someone easygoing and emotionally secure who does not pressure you but also genuinely shows up and stays",
    reminder:
      "Your lightness is a gift in love. Just remember that being truly known by someone is one of the best freedoms there is.",
  },

  loyal_partner: {
    title: "The Loyal Partner 💗",
    summary:
      "At heart, you are the Loyal Partner — someone who loves with consistency, shows up fully, and builds the kind of relationship people quietly wish they had.",
    desc1:
      "Your approach to love is rooted in commitment, steadiness, and the belief that real love is something you choose every day, not just feel in the beginning. When you are in a relationship, you are genuinely in it. You remember what matters, you show up when it is inconvenient, and you treat the person you love as someone worth protecting.",
    desc2:
      "What makes this dating style powerful is reliability. In a world where many people are emotionally inconsistent or only present when it is easy, your consistency stands out. Your gift is making people feel genuinely secure — not because you say the right words, but because your actions match them over time.",

    meaning1:
      "This result often means love is not casual for you. When you care, you care deeply, and that depth tends to express itself through reliability rather than grand gestures. You may be someone who shows love through following through, remembering the small things, and staying steady even when the relationship goes through harder seasons.",
    meaning2:
      "Because of that, you may also feel deeply when your loyalty is not reciprocated. Being taken for granted, overlooked, or given inconsistency in return for your consistency can be one of the most painful experiences in your dating life. You give a lot, and you notice when it does not come back.",

    showUp1:
      "In everyday life, this style may show up as dependability, emotional follow-through, a strong dislike of mixed signals, and a natural instinct to protect and invest in the people you love. You may be someone who checks in consistently, remembers what your partner mentioned weeks ago, and genuinely works to make the relationship better over time.",
    showUp2:
      "You may also tend to stay longer than is good for you in relationships that are not working, because loyalty for you is not something you switch off easily. The challenge is learning the difference between commitment and self-sacrifice — between staying because something is worth building and staying because leaving feels like betrayal.",

    strengths: "Reliability, emotional depth, genuine commitment",
    strengthDetails:
      "Your greatest strengths include the ability to create real security in a relationship, to love consistently rather than only in peak moments, and to be the kind of partner people can actually rely on. That kind of love builds trust over time in a way that intensity and charm simply cannot replicate.",

    watchOut: "Staying too long in the wrong relationship and giving more than you receive",
    watchOutDetails:
      "What may feel difficult is letting go when something is not working. Your loyalty is a strength, but it can also become a cage when you apply it to situations or people that no longer deserve it. Learning when staying is faith and when it is avoidance is one of the most important emotional skills for your dating style.",

    growth1:
      "Growth for you often means learning that your loyalty is a gift, not a debt. You do not owe anyone your steadiness simply because you chose them once. Commitment works best when it is mutual — and you are allowed to expect that.",
    growth2:
      "The healthiest version of your loyal partner style is not unconditional endurance. It is grounded devotion. It is the ability to love fully and consistently while also holding a clear sense of what you need in return and the courage to ask for it.",

    bestMatch:
      "Someone who values loyalty, shows up the same way you do, and never makes you question whether you are chosen",
    reminder:
      "Your steadiness is one of the most beautiful things you bring to love. Just remember that it deserves to be met, not just received.",
  },

  passionate_lover: {
    title: "The Passionate Lover 🔥",
    summary:
      "At heart, you are the Passionate Lover — someone who loves intensely, feels everything fully, and makes relationships feel alive.",
    desc1:
      "Your approach to love is rooted in intensity, emotional honesty, and full presence. When you are in, you are all in — emotionally, physically, and energetically. You do not do love halfway, and the people you choose tend to feel genuinely desired, seen, and electrified by your attention. You make love feel like it means something.",
    desc2:
      "What makes this dating style powerful is its realness. You do not perform romantic interest — you feel it, and you let people know. In a world where many people hold back out of fear or strategy, your willingness to be fully present in love is both rare and deeply compelling. Your gift is making the people you love feel truly wanted.",

    meaning1:
      "This result often means love takes up real space in your life. When you are connected to someone, that connection affects your mood, your energy, and your focus. You may be someone who thinks about the person you love often, feels their emotional state deeply, and experiences both the highs and lows of relationships with great intensity.",
    meaning2:
      "Because of that, you may also experience romantic pain more acutely than others. When connection breaks down, when someone pulls away, or when love does not go the way you feel it should, the emotional impact can feel significant. Your depth of feeling in good moments is the same depth that makes hard moments feel harder.",

    showUp1:
      "In everyday life, this style may show up as directness, physical and emotional expressiveness, a strong desire for closeness, deep conversations, and a natural tendency to want the relationship to feel alive and growing rather than stagnant. You may be the kind of person who creates memorable moments in love simply because your presence is fully activated.",
    showUp2:
      "You may also tend to move quickly toward emotional depth and physical closeness, which can be deeply attractive to the right person and overwhelming to someone who needs more time. The challenge is calibrating your intensity to the actual pace of the connection rather than the pace of your feelings — which often run ahead of the relationship's current state.",

    strengths: "Emotional honesty, intensity, making people feel deeply desired",
    strengthDetails:
      "Your greatest strengths include the ability to create real aliveness in a relationship, to love without holding back, and to make your partner feel like the most important person in the room. That quality is deeply meaningful. People who have been loved by you often remember it for a long time — because it was not quiet or ambiguous. It was real.",

    watchOut: "Moving too fast emotionally, burning out, or overwhelming partners who need more space",
    watchOutDetails:
      "What may feel difficult is the gap between how intensely you feel and how much space the other person needs. Not everyone can meet your emotional pace, and pushing for more closeness than someone is ready for can create the distance you were trying to close. Learning to let the relationship breathe — even when you want more — is one of the most important skills for your style.",

    growth1:
      "Growth for you often means learning that intensity and longevity are not opposites, but they do require balance. The fire you bring into love burns brightest when it is fed gradually rather than all at once — giving the other person room to choose you rather than be overwhelmed by you.",
    growth2:
      "The healthiest version of your passionate style is not less feeling. It is directed feeling. It is the ability to love fully while also trusting the process of a relationship to unfold at its own pace — knowing that real depth develops over time, not only in peak moments.",

    bestMatch:
      "Someone emotionally grounded and confident who can match your fire without feeling consumed by it",
    reminder:
      "Your love is electric and real. Just remember that the right person will want all of it — you will not have to dial it down to keep them.",
  },

  independent_heart: {
    title: "The Independent Heart 🌙",
    summary:
      "At heart, you are the Independent Heart — someone who loves on your own terms, never loses yourself, and knows exactly what you need.",
    desc1:
      "Your approach to love is rooted in self-awareness, intention, and the belief that a good relationship should add to your life rather than consume it. You do not fall into love out of loneliness or social pressure. When you choose someone, it is genuine — because you actively wanted them, not because you needed someone to fill a space.",
    desc2:
      "What makes this dating style powerful is its clarity. You know who you are inside a relationship, which means you bring real presence rather than performance. Your gift is offering love that is chosen freely — not obligated, not fearful, not dependent — which gives your relationships a kind of authenticity that is genuinely rare.",

    meaning1:
      "This result often means your sense of self stays relatively intact even when you are deeply connected to someone. You may value your own time, your routines, your inner life, and your space — not as a barrier to love but as the foundation of it. When those things are respected, you tend to open more fully than most people expect.",
    meaning2:
      "Because of that, you may be most yourself in relationships that have room. When someone respects your independence, your natural warmth tends to emerge. When someone crowds you, monitors you, or requires constant togetherness to feel secure, you tend to pull back — not from coldness, but from a deep need for your own emotional space.",

    showUp1:
      "In everyday life, this style may show up as clear personal values, a resistance to rushing into commitment, a preference for quality time over constant contact, and a strong sense of what you will and will not tolerate. You may be someone who is genuinely loving and present within the relationship while also maintaining a full life outside of it.",
    showUp2:
      "You may also tend to process emotions internally before sharing them, take longer to verbalize feelings, and require time alone to reconnect with yourself after intense closeness. The challenge is making sure the people who love you understand that your need for space is not distance — it is how you stay whole enough to keep giving.",

    strengths: "Self-awareness, emotional clarity, choosing love intentionally",
    strengthDetails:
      "Your greatest strengths include knowing yourself, loving without losing yourself, and bringing genuine presence into relationships because you are not desperate for them. That groundedness is deeply attractive to the right people — because what you offer is real, chosen, and not colored by anxiety or need.",

    watchOut: "Keeping emotional walls up too long and confusing self-protection with emotional distance",
    watchOutDetails:
      "What may feel difficult is the vulnerability required for real intimacy. Protecting your independence is healthy. But there is a version of that protection that becomes a wall — one that keeps pain out but also keeps closeness out. Learning to distinguish between the two, and choosing to be seen even when it feels risky, is where your deepest love becomes possible.",

    growth1:
      "Growth for you often means learning that being fully known by someone does not cost you your self. The right relationship does not ask you to disappear into it. It asks you to show up — fully, honestly, including the parts you usually protect.",
    growth2:
      "The healthiest version of your independent heart style is not isolation. It is secure love. It is the ability to stay whole and self-aware while also letting someone close enough to really matter — which is, in the end, the bravest version of independence there is.",

    bestMatch:
      "Someone secure and self-contained who loves your independence rather than fighting it and gives you space without making you feel abandoned",
    reminder:
      "Your self-awareness is one of your greatest gifts in love. Just remember that letting someone truly in is not a loss of freedom — it is the fullest expression of it.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "romantic_dreamer";
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
          Dating Style Personality Result
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
            What this style means
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
            How this shows up in your love life
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
            href="/quiz/dating-style"
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

export default function DatingStyleResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
