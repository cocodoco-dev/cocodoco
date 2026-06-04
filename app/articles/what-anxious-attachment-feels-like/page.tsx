import Image from "next/image";

export const metadata = {
  title: "What Anxious Attachment Actually Feels Like From the Inside | Cocodoco",
  description:
    "You know you're probably overthinking. You know the silence doesn't mean what your brain says it means. And yet you can't stop the spiral. Here's what's actually happening.",
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

export default function AnxiousAttachmentArticle() {
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
          What Anxious Attachment Actually Feels Like From the Inside
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You know, intellectually, that you are probably overthinking. You know they are probably just busy. You know the silence does not mean what your brain is telling you it means. And yet you cannot stop the spiral. This is what anxious attachment feels like from the inside — not as a clinical label, but as a lived experience that millions of people recognize and almost nobody fully understands.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80" alt="Person in anxious thought" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>The spiral — what is actually happening in the brain</h2>
          <p>When a person with anxious attachment perceives a threat to a relationship — a late reply, a cooler tone, a partner who seems preoccupied — something specific happens neurologically. Research by Mario Mikulincer and Phillip Shaver on attachment system activation found that anxiously attached individuals show significantly stronger and faster activation of threat-related brain networks in response to relational cues that securely attached people process as neutral. A two-hour gap in messages that a securely attached person registers as a minor delay registers for an anxiously attached person as an alarm signal.</p>
          <p>Once that alarm fires, the prefrontal cortex — the part of the brain responsible for rational perspective — becomes partially overridden by the amygdala&apos;s threat response. This is why knowing intellectually that you are overreacting does not stop the spiral. The spiral is not happening in the part of the brain that processes intellectual knowledge. It is happening in a much older, faster system that is trying to protect you from what it has learned to experience as danger. The gap between what you know and what you feel is not weakness or irrationality. It is the architecture of an anxious attachment system doing exactly what it was built to do.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Hyperactivating strategies — why everything gets amplified</h2>
          <p>Mikulincer and Shaver&apos;s research introduced the concept of hyperactivating strategies — the behavioral and cognitive patterns that anxiously attached people use to cope with perceived relationship threat. Unlike avoidant individuals, who use deactivating strategies (suppressing attachment needs, creating distance, minimizing the importance of the relationship), anxiously attached people hyperactivate — turning up the intensity of the attachment system in an attempt to secure closeness and reassurance.</p>
          <p>In practice, this looks like: constantly checking for signs of the partner&apos;s mood and emotional availability, mentally rehearsing possible conversations, seeking reassurance more frequently than feels comfortable (to either person), and amplifying the emotional significance of ambiguous signals. The partner leaves a slightly shorter text than usual. A securely attached person registers this as unremarkable variation. An anxiously attached person may spend hours determining what it means, whether something has changed, whether they did something wrong.</p>
          <p>The hyperactivation is not irrational within the internal logic of anxious attachment. It developed as a strategy for dealing with caregivers whose availability was inconsistent — staying constantly alert and amplifying distress signals was, at some point, the strategy most likely to bring the caregiver back. The problem is that the strategy persists into adult relationships where it is no longer appropriate, and where its effects often create the very distance it is trying to prevent.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Protest behavior — the things you do that you wish you would not</h2>
          <p>John Bowlby identified what he called protest behavior — the actions taken by an individual in response to perceived separation from an attachment figure. In infants, this is crying, clinging, following. In adults with anxious attachment, it takes more complex forms: sending multiple messages, making yourself available then suddenly unavailable in an attempt to provoke a response, bringing up old arguments, testing the relationship&apos;s limits, or behaving in ways that are designed to elicit a strong emotional reaction from the partner — any reaction being preferable to the unbearable silence of not knowing.</p>
          <p>Most people with anxious attachment can identify their protest behaviors in retrospect and feel significant shame about them. The shame is understandable but not particularly useful, because protest behavior is not a character flaw — it is a predictable output of an attachment system that is in a state of high alarm. Understanding it as such does not excuse behavior that is genuinely harmful, but it does create the possibility of responding to the underlying alarm rather than just being mortified by its expression.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The self-fulfilling prophecy trap</h2>
          <p>One of the most painful dynamics in anxious attachment is the way the attachment style can create the outcome it most fears. Research by Jeffry Simpson and colleagues on anxious attachment and relationship behavior found that anxiously attached individuals, under conditions of perceived threat, tend to behave in ways that increase their partner&apos;s distress, reduce their partner&apos;s felt security, and often push the partner toward the distance that triggered the anxious response in the first place.</p>
          <p>The anxiously attached person senses distance. They protest, pursue, or seek reassurance. The partner, feeling crowded or pressured, withdraws further. The withdrawal confirms the anxious person&apos;s fear. The hyperactivation intensifies. The partner withdraws more. This cycle is so common in anxious-avoidant relationship pairings that researchers have documented it extensively — and both partners are usually aware that something is wrong while simultaneously feeling powerless to stop it, because each is simply responding to the other in the way their attachment system has learned to respond.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What the research actually shows helps</h2>
          <p>The research on earned secure attachment — the documented ability of anxiously attached adults to move toward more secure attachment patterns — consistently points to two primary mechanisms: consistent corrective relational experience and deliberate self-awareness work, ideally in combination.</p>
          <p>Corrective relational experience means sustained exposure to a partner who responds consistently, who does not punish vulnerability, who provides reassurance without using it as leverage, and whose behavior over time gives the nervous system new evidence about what relationships can be. This cannot be faked — research on attachment security priming by Mikulincer and Shaver found that even brief reminders of reliable, caring relationships produce measurable reductions in threat response in anxiously attached individuals. Sustained real experience produces more lasting change.</p>
          <p>The self-awareness component involves learning to recognize the alarm state before protest behavior takes over — developing the capacity to notice "my attachment system is activated right now" and choosing a response rather than being overtaken by the automatic one. This is significantly harder than it sounds and is most reliably developed with therapeutic support. But the research is clear that it is possible. Anxious attachment is not a life sentence. It is a learned pattern — and like all learned patterns, it can be unlearned, given sufficient time, consistent experience, and genuine support.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What is your attachment style?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover how your heart naturally connects in relationships — and what it means for your love life.</p>
          <a href="/quiz/attachment-style" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Attachment Style Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
