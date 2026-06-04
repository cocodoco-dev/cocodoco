import Image from "next/image";

export const metadata = {
  title: "What Your Conflict Style Says About You | Cocodoco",
  description:
    "Some people go quiet. Some go loud. Some say 'fine' and mean nothing of the sort. How you handle conflict is one of the most revealing things about you.",
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

export default function ConflictStyleArticle() {
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
          What Your Conflict Style Says About You — And How to Change It
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Some people go quiet. Some people go loud. Some leave the room. Some chase the person who left. Some say &quot;fine&quot; and mean nothing of the sort. How you handle conflict in close relationships is one of the most revealing things about your psychology — and most people have never examined it deliberately enough to understand what it is actually communicating.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1573497019236-17f8177b81e8?w=800&q=80" alt="Two people in a difficult conversation" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Why conflict style matters more than most people think</h2>
          <p>Conflict is not a sign that a relationship is broken. Research by John Gottman and colleagues — based on over four decades of observational studies of couples — consistently finds that the presence of conflict does not predict relationship failure. What predicts failure is how conflict is handled. Couples who manage conflict constructively, even when fighting frequently and intensely, show significantly better long-term outcomes than couples who avoid conflict entirely but handle its rare occurrences with contempt, defensiveness, or stonewalling.</p>
          <p>This means that your conflict style — the specific pattern of how you respond when something is wrong in a relationship — is one of the most consequential behavioral patterns you carry. It shapes whether problems get resolved or accumulate, whether partners feel heard or dismissed, whether disagreements strengthen or erode the relationship over time. Understanding your conflict style is not a minor piece of self-knowledge. It is potentially one of the most practically impactful.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The Four Horsemen — Gottman&apos;s most important findings</h2>
          <p>Gottman&apos;s research identified four specific communication patterns — which he called the Four Horsemen — that are so reliably predictive of relationship dissolution that trained observers can watch a fifteen-minute conflict conversation and predict divorce with approximately 90 percent accuracy based on their presence. Understanding them is not just clinically interesting — it is immediately practically applicable.</p>
          <p>Criticism is the first: attacking the partner&apos;s character rather than the specific behavior. &quot;You never think about anyone but yourself&quot; is criticism. &quot;I felt hurt when you made that decision without telling me&quot; is a complaint — the same underlying issue, expressed in a form that does not attack the person. Contempt — the most predictive of the four — involves communicating superiority or disgust: eye-rolling, mockery, sarcasm delivered with hostility, or speaking to a partner as though they are fundamentally beneath you. Gottman&apos;s research found contempt to be the single strongest predictor of both relationship dissolution and physical health deterioration in partners.</p>
          <p>Defensiveness — responding to a partner&apos;s complaint by deflecting responsibility, making counter-complaints, or positioning oneself as the victim — prevents any real problem-solving by ensuring that the original concern is never actually addressed. And stonewalling — emotional and communicative shutdown, often accompanied by physical withdrawal — removes the interaction entirely, making resolution impossible and leaving the partner with the experience of being abandoned mid-conflict.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How attachment shapes conflict behavior</h2>
          <p>Your attachment style — the relational template established in early significant relationships — is one of the strongest predictors of your conflict style as an adult. Research by Jeffry Simpson and colleagues on attachment and conflict behavior found consistent patterns across attachment styles that map directly onto observable conflict behaviors.</p>
          <p>Anxiously attached individuals tend toward what researchers call hyperactivating responses in conflict: escalating emotional intensity, pursuing resolution urgently, struggling to let conflict deescalate before it feels fully resolved. This can present as what partners describe as &quot;making everything a big deal&quot; — the anxious person genuinely cannot access the same calm that the partner might feel, because conflict activates the same threat-detection system that responds to relationship danger signals generally.</p>
          <p>Avoidantly attached individuals tend toward deactivating responses: withdrawing, minimizing, or shutting down. This is not indifference — research consistently shows that avoidantly attached people experience the same physiological arousal during conflict as anxiously attached people, but are more practiced at suppressing its expression. The stonewalling that looks like calm or indifference to a partner is frequently a form of emotional flooding management — a way of preventing an internal state that has exceeded the person&apos;s capacity to process from becoming visible.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Flooding — why you lose the ability to think clearly in arguments</h2>
          <p>Gottman&apos;s research on physiological flooding during conflict provides one of the most practically useful frameworks for understanding why conflict so often goes badly even when both people want it to go well. Flooding refers to a state of physiological overwhelm — heart rate above 100 beats per minute, elevated cortisol, activation of the sympathetic nervous system — that significantly impairs the cognitive functions needed for productive conflict: perspective-taking, impulse control, listening comprehension, and the ability to generate thoughtful responses.</p>
          <p>When flooded, people literally cannot process what their partner is saying with normal comprehension. They cannot access the nuanced thinking that productive conflict resolution requires. They fall back on automated response patterns — attack, defend, withdraw — regardless of their intentions. This is not a failure of character or commitment. It is a physiological state that makes productive conversation biologically unavailable until it resolves.</p>
          <p>The practical implication of this research is significant: if you are flooded, the most effective intervention is a genuine timeout — not as a stonewalling tactic, but as a deliberate physiological reset, lasting at least twenty minutes (the minimum time research suggests for full sympathetic nervous system recovery), before returning to the conversation. The couple that can agree to pause when flooded and genuinely return is far more likely to resolve conflict productively than the couple that pushes through in a physiological state that makes resolution almost neurologically impossible.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The repair attempt — the most underrated skill in conflict</h2>
          <p>If Gottman&apos;s research on the Four Horsemen is the most widely cited part of his work, his research on repair attempts is perhaps the most practically valuable and least discussed. Repair attempts are the gestures — verbal or nonverbal — that partners make during conflict to reduce tension and prevent escalation: a joke, a touch, an acknowledgment, a request to slow down, an admission of partial responsibility. Research consistently finds that the ability to make repair attempts and the ability to receive them are among the strongest predictors of long-term relationship health.</p>
          <p>The critical finding is that it is not the absence of the Four Horsemen that predicts good outcomes — it is the presence of effective repair. Couples whose conflicts frequently include criticism and defensiveness but also effective repair attempts show dramatically better outcomes than couples whose conflicts are technically cleaner but where repair attempts fail because one or both partners are too flooded, too defended, or too contemptuous to receive them. Learning to make repair attempts and learning to stay open enough to receive them may be the single most impactful set of conflict skills available.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Moving toward a more conscious conflict style</h2>
          <p>The starting point is observation without judgment — watching your own conflict patterns with enough curiosity to identify them clearly. Do you go quiet when threatened? Do you escalate? Do you use criticism when you mean complaint? Do you stonewall when flooded? These patterns are not permanent — they are learned, and learned patterns can be interrupted and changed. But they cannot be changed without first being seen clearly.</p>
          <p>The next step is understanding the function of your conflict behavior — what it is trying to accomplish and protect. Stonewalling is often trying to prevent total emotional breakdown. Criticism is often trying to be heard. Escalation is often trying to ensure the problem does not get minimized again. Understanding what the behavior is for creates the possibility of finding more effective ways to accomplish the same goal. The goal is almost always legitimate. The method is what needs refinement — and with enough awareness, patience, and ideally some external support, it is genuinely refinable.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What is your shadow side in relationships?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover the hidden pattern that shows up when you feel emotionally unprotected.</p>
          <a href="/quiz/shadow-side" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Shadow Side Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
