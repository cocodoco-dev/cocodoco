import Image from "next/image";

export const metadata = {
  title: "The 6 Comfort Characters: Which One Are You? | Cocodoco",
  description:
    "Think about the person you call when something falls apart. Understanding why they help — and what kind of comfort you give — changes how you show up for the people you love.",
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

export default function ComfortCharactersArticle() {
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
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#9d174d", textTransform: "uppercase", marginBottom: "12px" }}>Personality</p>

        <h1 style={{ fontSize: "36px", lineHeight: 1.25, color: "#111827", marginBottom: "16px" }}>
          The 6 Comfort Characters: Which One Are You — And Why It Matters More Than You Think
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Think about the person you call when something falls apart. Not the one with the best advice — the one whose presence alone makes it feel survivable. Now think about what exactly they do that helps. Chances are, it is something specific and consistent about how they show up. That is their comfort character. And yours is doing the same thing for someone in your life right now — whether or not you have ever thought about it.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80"
            alt="Warm comfortable space"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Why support is not one size fits all</h2>
          <p>For decades, social support research treated support as a single variable — you either had it or you did not. But a landmark 1985 study by Sheldon Cohen and Thomas Wills introduced what became known as the stress-buffering hypothesis, demonstrating that different types of support serve different functions, and that the wrong type — even when well-intentioned — can actually increase distress rather than reduce it.</p>
          <p>The most cited example: when someone shares a problem and the listener immediately jumps to problem-solving, the person sharing often feels unheard rather than helped. What they needed was emotional acknowledgment, not logistics. This mismatch is not a failure of caring — it is a mismatch of comfort styles. Understanding this changes how you see both the support you give and the support you wish you were receiving.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The nervous system science of being comforted</h2>
          <p>When we are in distress, our nervous system enters a state of dysregulation — heightened arousal, cortisol spikes, narrowed thinking. What comfort essentially does, at a biological level, is help the nervous system return to a regulated state. This process is called co-regulation, and it is something humans are wired for from birth.</p>
          <p>Developmental psychologist Allan Schore's research shows that co-regulation — the process by which one nervous system helps soothe another — is not just a metaphor. When a calm, attuned person is present with someone in distress, there are measurable physiological changes: heart rate decreases, cortisol levels drop, and the prefrontal cortex — the part of the brain responsible for rational thinking and perspective — comes back online. Different comfort styles produce this effect through different mechanisms, which is why the same situation calls for different people depending on what kind of regulation your nervous system needs in that moment.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The 6 types — and what they actually do for people</h2>
          <p><strong>The Sunshine</strong> comfort character works through positive affect contagion. Psychologist Barbara Fredrickson's broaden-and-build theory demonstrates that positive emotions literally expand our thinking and increase our access to resources and solutions. A sunshine type does not dismiss pain — they genuinely shift the emotional atmosphere in a way that makes the pain feel less total. The problem feels the same, but slightly more survivable.</p>
          <p><strong>The Listener</strong> works through validation and presence. Research consistently shows that feeling heard — genuinely heard, without judgment or redirection — is one of the most powerful regulators of the nervous system available. Carl Rogers called this unconditional positive regard, and his decades of clinical research demonstrated it was the single most important factor in therapeutic outcomes. The listener provides this without therapy — just through the quality of their attention.</p>
          <p><strong>The Protector</strong> works through felt security. John Bowlby's attachment research showed that the knowledge that a reliable, capable person is close and will respond is one of the foundational conditions for emotional regulation. The protector does not just say "I've got you." Their consistent behavior over time creates the actual neurological experience of safety — which is different, and more powerful, than reassurance alone.</p>
          <p><strong>The Soft Dream</strong> works through sensory and atmospheric regulation. There is growing research on the role of environmental and sensory cues in emotional regulation — gentle voices, soft spaces, slow pacing. The soft dream type naturally modulates the emotional environment in ways that lower physiological arousal without requiring any direct intervention. Their presence is itself a form of regulation.</p>
          <p><strong>The Healer</strong> works through attunement — the capacity to sense what someone needs and respond to it specifically, rather than applying generic comfort. Daniel Siegel's interpersonal neurobiology research highlights attunement as one of the most powerful relational skills humans possess, because it communicates not just "I care" but "I see you specifically." That experience of being specifically seen is profoundly restorative.</p>
          <p><strong>The Home</strong> works through consistency and familiarity. Research on psychological safety — a concept developed by Amy Edmondson at Harvard — demonstrates that the predictable, non-threatening presence of someone you trust creates the conditions for genuine emotional openness. The home comfort type does not do anything dramatic. They simply create an environment where the nervous system does not have to stay on guard — and that relief is more significant than it sounds.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What happens when comfort styles do not match</h2>
          <p>One of the most common sources of relational frustration is the comfort style mismatch. You want someone to sit with you in the feeling — and they keep trying to fix it. You want practical help — and they keep asking how you feel. You want someone to lighten the mood — and they keep going deeper into the emotion. Neither person is wrong. They are simply operating from different default comfort modes.</p>
          <p>This is particularly common in romantic relationships, where two people with genuinely different comfort styles can spend years feeling vaguely unsupported without understanding why. The protector who shows love through action cannot understand why their partner still feels unseen. The listener who offers deep presence cannot understand why their partner feels unsatisfied. Naming the difference — making it explicit — is often more useful than any single act of comfort.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What your comfort style costs you — and what you are owed</h2>
          <p>Every comfort style has a cost. The sunshine type burns energy maintaining uplift, especially when they are struggling themselves. The listener absorbs enormous amounts of emotional content that requires its own processing. The protector over-functions practically and may neglect their own needs in the process. The healer can lose the boundary between caring for someone and carrying their pain.</p>
          <p>Understanding your comfort character is not just about knowing what you give — it is about knowing what you need in return. The listener needs to be listened to. The protector needs someone who will protect them sometimes too. The home comfort type needs their own peace to be honored, not just demanded from them. Whatever your style, the most sustainable version of it exists in a relationship where what you give is genuinely reciprocated — not identically, but adequately.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>Which comfort character are you?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Find out your comfort type and what it means for your relationships.</p>
          <a href="/quiz/comfort-character" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Comfort Character Quiz →
          </a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
