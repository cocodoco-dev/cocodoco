import Image from "next/image";

export const metadata = {
  title: "Why Emotionally Unavailable People Are So Hard to Walk Away From | Cocodoco",
  description:
    "You know it's not working. The warmth appears just enough to keep you hoping. You've tried to leave. You've stayed. Here's the psychology of why they're so hard to let go of.",
};

const nav = (
  <nav style={{ borderBottom: "2px solid #f2a7b8", marginBottom: "32px", marginTop: "28px" }}>
    <div style={{ maxWidth: "860px", margin: "0 auto", display: "flex", gap: "32px", justifyContent: "center" }}>
      <a href="/" style={{ display: "inline-block", paddingBottom: "10px", fontSize: "15px", fontWeight: 700, color: "#9ca3af", textDecoration: "none", borderBottom: "3px solid transparent", marginBottom: "-2px" }}>Quiz</a>
      <a href="/articles" style={{ display: "inline-block", paddingBottom: "10px", fontSize: "15px", fontWeight: 700, color: "#111827", textDecoration: "none", borderBottom: "3px solid #ff4d7d", marginBottom: "-2px" }}>Article</a>
    </div>
  </nav>
);

const adBox = (
  <div style={{ width: "100%", height: "110px", borderRadius: "14px", border: "1px dashed #f2a7b8", background: "rgba(255,255,255,0.6)", display: "flex", alignItems: "center", justifyContent: "center", color: "#9ca3af", fontSize: "14px", margin: "28px 0" }}>
    Ad Space (Google AdSense will go here)
  </div>
);

export default function EmotionallyUnavailableArticle() {
  return (
    <main style={{ minHeight: "100vh", background: "#fdf2f8", fontFamily: "Arial, sans-serif", padding: "48px 18px" }}>
      <header style={{ textAlign: "center", marginBottom: "0" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 style={{ fontSize: "52px", margin: 0, color: "#111827" }}>cocodoco</h1>
        </a>
        <p style={{ marginTop: "10px", fontSize: "18px", color: "#374151" }}>Cute quizzes for your mood, personality, and lifestyle 🧁</p>
      </header>

      {nav}

      <article style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#9d174d", textTransform: "uppercase", marginBottom: "12px" }}>Love & Relationships</p>

        <h1 style={{ fontSize: "36px", lineHeight: 1.25, color: "#111827", marginBottom: "16px" }}>
          Why Emotionally Unavailable People Are So Hard to Walk Away From
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You know it is not working. You have known for a while. The warmth appears just often enough to keep you hoping, and disappears just consistently enough to keep you confused. You have tried to leave before. You have stayed. And you are trying to understand why someone who is so clearly not giving you what you need is so impossibly hard to let go of. The answer is not what most people expect.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80" alt="Person sitting alone looking distant" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>The intermittent reinforcement trap</h2>
          <p>The most important concept for understanding why emotionally unavailable relationships are so hard to leave comes not from relationship psychology but from behavioral conditioning research. B.F. Skinner&apos;s foundational work on reinforcement schedules — conducted in the 1950s and 60s — established something that has been replicated thousands of times since: intermittent reinforcement, the pattern where a reward is delivered unpredictably rather than consistently, produces stronger and more resistant behavioral patterns than consistent reinforcement does.</p>
          <p>In Skinner&apos;s animal studies, subjects on variable ratio schedules — where the reward came sometimes, unpredictably, after varying amounts of effort — showed the most persistent behavior and the most resistant-to-extinction responding of any reinforcement schedule tested. They kept trying longest after rewards stopped entirely. This is the same mechanism that makes slot machines so compelling: the unpredictability of the reward, not its frequency, is what drives the persistence.</p>
          <p>In a relationship with an emotionally unavailable person, the intermittent moments of warmth, connection, and genuine closeness function as variable ratio reinforcement. The unpredictability — the not knowing when the next warm moment will come, the impossibility of predicting when they will finally open up — activates the same neurological persistence mechanism. You are not weak for being unable to leave. You are experiencing a behavioral conditioning effect that is one of the most powerful the human brain is subject to.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why inconsistency is more compelling than consistency</h2>
          <p>This is perhaps the most counterintuitive finding from the research — and the one most useful for understanding why leaving a consistently warm, consistently available partner can feel easier than leaving someone who is rarely warm and frequently absent. Consistency, neurologically, is satisfying and regulating. Inconsistency is activating. And activation — the heightened state of arousal, attention, and motivation produced by uncertainty — can be experienced as intensity, passion, or deep connection, even when its actual source is anxiety.</p>
          <p>Research on approach motivation — the motivational system activated when we pursue a desired goal — finds that the system is most powerfully engaged when the goal is uncertain. When a reward is guaranteed, the motivational system can relax. When it is uncertain, the system stays engaged, oriented, and directed toward acquiring what it seeks. An emotionally unavailable partner who occasionally provides genuine closeness keeps the approach motivation system continuously engaged in a way that a consistently available partner does not. The result is a relationship that feels more intense, more significant, and more preoccupying — not because it is better, but because it is uncertain.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The neuroscience of craving what you cannot fully have</h2>
          <p>Neuroscientist Helen Fisher&apos;s fMRI research on romantic love and romantic rejection found something striking: the brain regions most active in people experiencing romantic rejection — particularly the ventral tegmental area and nucleus accumbens, the core of the dopamine reward circuit — are the same regions most active in people in the early stages of falling in love. Rejection, in other words, activates the craving system rather than shutting it down.</p>
          <p>This has direct implications for emotionally unavailable relationships. Each withdrawal by the unavailable partner — each moment of distance, each unreturned bid for closeness — functions neurologically like a partial rejection. And partial rejection, Fisher&apos;s research suggests, intensifies the craving rather than satisfying or extinguishing it. The pull you feel toward someone who keeps pulling away is not irrational. It is the craving system responding exactly as it was designed to respond to intermittent reward in a high-stakes motivational context.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What emotionally unavailable actually means</h2>
          <p>Emotional unavailability is not a stable trait that exists independent of context. Research on avoidant attachment — the style most closely associated with emotional unavailability — consistently finds that avoidantly attached individuals are not indifferent to relationships. They are often highly invested in them, but the investment is managed through a specific set of defensive strategies: suppressing awareness of attachment needs, minimizing the importance of closeness, and creating distance when intimacy exceeds a certain threshold.</p>
          <p>The warmth that appears intermittently in relationships with emotionally unavailable people is not performance. It is genuine — it is what emerges when the person&apos;s defensive system is not activated. The withdrawal is equally genuine — it is the defensive system responding to a level of intimacy that the person&apos;s attachment history has encoded as threatening. Understanding this does not make the relationship functional. But it does make the pattern comprehensible — and comprehensibility, even when it does not solve the problem, reduces the destabilizing self-blame that often accompanies the confusion of this kind of relationship.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The hope mechanism — why you stay</h2>
          <p>Research on hope in the context of uncertain reward consistently finds that hope — the expectation of future positive outcome — is one of the most powerful motivators of continued behavior in the face of current deprivation. In emotionally unavailable relationships, hope is sustained by the intermittent moments of genuine connection: evidence that the person is capable of warmth, that the relationship is capable of being what you need it to be. These moments are not illusions. They are real. And they function as evidence that the outcome you hope for is possible — which is enough to sustain the motivation to stay, even when the average experience of the relationship falls significantly below what you would describe as acceptable.</p>
          <p>The cruelest feature of this dynamic is that the hope is not entirely misplaced. The unavailable person is capable of warmth. The connection is real when it appears. The relationship could theoretically be different. What is typically not accounted for in the hope is the structural reality: the emotional unavailability is not a phase or a temporary deficit. It is a deeply established protective system that the person has rarely if ever been willing or able to examine. The hope is real. The probability it points to is almost always significantly lower than it feels.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What leaving actually requires</h2>
          <p>Understanding the behavioral conditioning and neurological mechanisms does not make leaving easy. But it does make it less mystifying — and mystification is one of the things that keeps people stuck longest. When you understand that the difficulty of leaving is not evidence of how much you love this person or how right the relationship is, but rather the predictable output of a powerful conditioning effect, the difficulty becomes something you can work with rather than something that defines you.</p>
          <p>What actually helps, research on relationship dissolution suggests, is reducing contact to the point where the conditioning can begin to extinguish — a process that takes longer with intermittent reinforcement than with consistent reinforcement, but that does occur. It also involves deliberately building alternative sources of the needs that the relationship was meeting — connection, validation, excitement, the sense of being chosen — so that the loss is not experienced as total deprivation. And it involves, often with support, examining why the intermittent availability felt so much more compelling than the consistent availability you say you want — because that examination points directly at the earlier template that made the pattern feel like home.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What kind of romantic energy do you have?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover the vibe you naturally bring into love — and what it says about the connections you seek.</p>
          <a href="/quiz/romantic-energy" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Romantic Energy Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
