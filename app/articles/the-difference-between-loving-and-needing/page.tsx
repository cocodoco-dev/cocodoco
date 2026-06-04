import Image from "next/image";

export const metadata = {
  title: "The Difference Between Loving Someone and Needing Them | Cocodoco",
  description:
    "You would do anything for them. The thought of losing them is unbearable. It feels like love. But there's a question worth sitting with: are you in love, or dependent?",
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

export default function LovingVsNeedingArticle() {
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
          The Difference Between Loving Someone and Needing Them
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You would do anything for them. The thought of losing them is unbearable. You think about them constantly. It feels like love — deep, overwhelming, all-consuming. But there is a question worth sitting with honestly: are you in love with this person, or are you dependent on what they represent? The distinction is not always obvious. And it matters more than most people realize.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1499678329028-101435549a4e?w=800&q=80" alt="Two people in a close relationship" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Why the question is hard to answer</h2>
          <p>Love and emotional dependency can feel identical from the inside, particularly in their early or more intense phases. Both involve preoccupation with the other person, distress at their absence, and a strong motivational pull toward closeness. The neurochemical profiles of intense romantic love and anxious attachment overlap significantly — both involve elevated dopamine, elevated norepinephrine, and the characteristic cognitive features of craving: intrusive thoughts, heightened attention to the person, and diminished interest in other things.</p>
          <p>What makes the distinction important is not the intensity of the feeling but its foundation. Love that is rooted primarily in the genuine qualities of the other person — who they are, how they think, what they value, the specific texture of their presence — tends to be different in character from love that is rooted primarily in what the person provides: the relief from loneliness, the sense of being chosen, the regulation of an anxious nervous system, the identity of being someone who is loved. Both can feel profound. Only one has a stable foundation.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What emotional dependency actually is</h2>
          <p>Emotional dependency in relationships is not the same as healthy interdependence, which is a normal and necessary feature of close relationships. The distinction, drawn clearly in the clinical literature, is between depending on someone and being unable to function adequately without them. Healthy interdependence involves choosing to rely on a partner for emotional support, shared decision-making, and co-regulation — while retaining the fundamental capacity to manage your own emotional state, pursue your own interests, and maintain a stable sense of self when the partner is unavailable.</p>
          <p>Emotional dependency involves a more significant entanglement: the partner becomes the primary or exclusive source of emotional regulation, self-worth validation, or identity stabilization. Research on relationship dependency, including work by Jonathan Bornstein on dependent personality patterns, finds that emotionally dependent relationships are characterized by a specific fear — not of losing the person per se, but of losing the psychological functions the person provides. This is why emotionally dependent relationships can persist even when the person is clearly unhappy in them, clearly not well-treated, or clearly aware that the relationship is not right. The dependency is not on the relationship&apos;s quality. It is on its existence.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to tell the difference in your own relationship</h2>
          <p>Several questions can help distinguish between love and dependency, though they require genuine honesty rather than the answers that feel most reassuring. The first: if this person were exactly who they are, with exactly the same qualities and limitations, but you were certain the relationship would eventually end — would you still choose to be in it right now? Love tends to answer yes. Dependency tends to find the question unbearable to sit with, because the value is in the continuation, not the present experience.</p>
          <p>The second question: how do you feel about yourself when you are with this person, and is that different from how you feel when you are alone? Healthy love tends to enhance your sense of yourself — to make you feel more capable, more interesting, more alive. Dependency often involves a contraction of self: you feel most okay when you are with them, and genuinely diminished when they are unavailable. The relationship has become the container for a self-worth that cannot be sustained independently.</p>
          <p>The third, perhaps the most diagnostic: can you feel genuinely happy for this person independent of whether their happiness benefits you? Love tends to produce what psychologists call companionate joy — the ability to feel pleased for someone regardless of the personal cost. Dependency tends to produce love that is more conditional — more tied to whether the person is present, available, and focused on you specifically.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The role of fear in dependency-based love</h2>
          <p>One of the clearest markers of emotional dependency is the prominent role of fear. Fear of abandonment, fear of being alone, fear of being unlovable without this particular person — these fears are present in both love and dependency, but in dependency they tend to be load-bearing. They are a significant part of what holds the relationship together, rather than genuine positive feeling being the primary engine.</p>
          <p>Self-determination theory, developed by Edward Deci and Richard Ryan, draws a useful distinction between autonomous motivation — doing something because you genuinely want to — and controlled motivation — doing something because of external pressure or internal compulsion, including fear. Relationships sustained primarily by controlled motivation, including fear of loss, tend to show lower wellbeing for both partners compared to relationships where autonomous motivation — genuine desire and positive feeling — is primary. Fear can keep a relationship intact. It cannot make it flourishing.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What healthy interdependence actually looks like</h2>
          <p>The goal is not self-sufficiency — the belief that needing a partner is weakness and that the ideal is to function equally well alone or together. Research on adult attachment and wellbeing, including extensive work by Mario Mikulincer, consistently finds that the capacity to rely on others in healthy ways — to use relationships as a secure base from which to engage with the world — is associated with better wellbeing, not worse. Needing your partner is not the problem. The shape of the need is what matters.</p>
          <p>Healthy interdependence involves a stable sense of self that does not collapse when the partner is unavailable, combined with the genuine choice to rely on, invest in, and be affected by the partner&apos;s presence and wellbeing. The &quot;and&quot; in that sentence is load-bearing: both things at once, not one at the expense of the other. You can be deeply affected by this person — moved by them, changed by them, genuinely better with them — and still be fundamentally yourself. That combination, more than almost anything else, is what the research on lasting, satisfying love identifies as its foundation.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What kind of lover are you?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover how you naturally love and connect in relationships.</p>
          <a href="/quiz/love-style" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Love Style Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
