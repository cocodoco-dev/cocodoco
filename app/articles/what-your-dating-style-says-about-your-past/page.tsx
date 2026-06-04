import Image from "next/image";

export const metadata = {
  title: "What Your Dating Style Says About Your Past | Cocodoco",
  description:
    "If the same patterns keep showing up with different people, it might not be a choice. Here's what your dating style is actually telling you about your history.",
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

export default function DatingStylePastArticle() {
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
          What Your Dating Style Says About Your Past — And Why the Same Patterns Keep Showing Up
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You have been told your relationship patterns are choices. But if the same dynamic keeps playing out with completely different people — different names, different faces, same essential story — it might not be a choice at all. It might be a template. And understanding where that template comes from is one of the most useful things you can do for your love life.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80"
            alt="Person reflecting on relationships"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Why your past shows up uninvited</h2>
          <p>The foundational insight comes from psychiatrist Harville Hendrix, who developed Imago Relationship Theory in the 1980s based on his clinical work with couples. His central observation: we do not choose romantic partners randomly. We are unconsciously drawn to people who carry the emotional signature of our early caregivers — specifically, people who replicate both the positive qualities we loved and the painful ones we never fully resolved.</p>
          <p>The mechanism, Hendrix argued, is the brain's attempt to finish unfinished business. If you grew up with a parent who was warm but emotionally unavailable, your nervous system learned to associate love with that specific combination. As an adult, a partner who is charming but hard to reach feels like home — not because it is healthy, but because it is familiar. The brain is not looking for what is best for you. It is looking for what it already knows.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The repetition compulsion — why we repeat what hurt us</h2>
          <p>Freud identified what he called the repetition compulsion — the tendency to unconsciously recreate painful situations from the past, often in the hope of resolving them differently this time. Modern trauma researchers, including Bessel van der Kolk, have updated this framework with neuroscientific evidence. The body and nervous system carry implicit memories of emotionally significant experiences, and those memories shape behavior in ways that are largely outside conscious awareness.</p>
          <p>In practical terms, this means that someone who experienced inconsistent love in childhood may unconsciously gravitate toward inconsistent partners — not because they enjoy the pain, but because the uncertainty activates a deeply familiar emotional state that the nervous system is organized around. The hope, encoded below conscious thought, is that this time the outcome will be different. This time the distant person will open up. This time the inconsistent person will become steady. They rarely do — because the pattern is not about them. It is about what you are carrying into the relationship.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What your dating style tendency actually reveals</h2>
          <p>Jeffrey Young's schema therapy framework identified eighteen early maladaptive schemas — deep, self-reinforcing beliefs about the self and relationships that form in childhood and drive adult behavior. Several of these directly shape dating style. The abandonment schema, formed when early attachment figures were unreliable or absent, drives a dating style characterized by hypervigilance for signs of rejection and intense anxiety when partners seem distant. The emotional deprivation schema, formed when emotional needs were consistently unmet, may produce a dating style that either chases emotional unavailability or settles for less than it needs because deep down it does not expect to receive more.</p>
          <p>The connection between childhood experience and adult dating behavior is not deterministic — these are tendencies, not certainties. But they are consistent enough that therapists trained in schema work can often predict a client's relational patterns from their early history with reasonable accuracy. This is not fatalism. It is a map. And maps, unlike fate, can be used to navigate.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>When your dating style is a protection strategy</h2>
          <p>Some dating styles that look like preferences are actually protection mechanisms. The person who keeps things casual and never fully commits may genuinely enjoy freedom — or may have learned early that full emotional investment leads to devastating loss, and is protecting against that risk. The person who moves very slowly and needs extensive reassurance before trusting may be described as guarded — or may simply have learned that trust given early is trust that gets broken.</p>
          <p>The distinction matters because protection strategies, once recognized, can be worked with consciously rather than simply enacted automatically. The question to sit with is not "what do I want in a relationship?" — it is "what am I afraid will happen if I fully show up in one?" The honest answer to the second question usually reveals more about your actual dating pattern than any amount of reflection on the first.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why choosing differently is harder than it sounds</h2>
          <p>The common advice for breaking dating patterns is to simply choose differently — to be more conscious, to make a list of what you want, to go for the "nice" person instead of the exciting one. This advice is not wrong, but it dramatically underestimates the pull of the familiar template. Research on implicit memory and behavioral conditioning consistently shows that patterns formed through emotionally significant early experience are not overwritten by intellectual decision-making alone.</p>
          <p>This is why people can know exactly what they are doing in a relationship — identify the pattern, name the dynamic, understand the history — and still find themselves doing it. Knowledge is necessary but not sufficient. The nervous system learns safety through repeated experience, not through insight. Which means that changing your dating pattern requires not just thinking differently about relationships, but having enough new relational experiences — in therapy, in friendships, in deliberately chosen romantic relationships — to give the nervous system new evidence about what love can look like.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Dating with more awareness — what actually helps</h2>
          <p>The starting point is curiosity rather than self-criticism. When you notice a familiar pattern emerging — the pull toward someone emotionally unavailable, the impulse to sabotage something that feels too stable, the tendency to give everything before anything is established — the most useful first response is not judgment but inquiry. "This feels familiar. What does it remind me of? What am I hoping will happen here that did not happen before?"</p>
          <p>The second useful practice is slowing down the early stages of dating deliberately — not as a strategy to seem less interested, but as a way to create enough space for actual perception rather than projection. The nervous system's template-matching happens fastest when stimulation is highest. Slowing down gives you time to see who the person actually is rather than who your history has cast them as.</p>
          <p>The deeper work — understanding the specific history that created your template — is genuinely helped by professional support. Not because you cannot do any of it alone, but because the patterns we carry are usually invisible to us precisely because they feel like reality rather than interpretation. Having someone skilled at seeing those patterns from the outside changes the quality of the insight available. And that insight, translated into actual behavior over time, is what eventually breaks the pattern rather than just interrupting it temporarily.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What is your dating style?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Take the quiz to discover your natural approach to love — and what it might be telling you about yourself.</p>
          <a href="/quiz/dating-style" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Dating Style Quiz →
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
