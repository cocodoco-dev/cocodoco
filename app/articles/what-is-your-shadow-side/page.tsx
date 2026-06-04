import Image from "next/image";

export const metadata = {
  title: "What Is Your Shadow Side and Why It Shows Up in Relationships | Cocodoco",
  description:
    "That version of yourself that shows up in arguments — the one you don't fully recognize — is not your worst self. It is your shadow. And understanding it changes everything.",
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

export default function ShadowSideArticle() {
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
          What Is Your Shadow Side — And Why It Keeps Showing Up in Your Closest Relationships
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You know that version of yourself that shows up in arguments — the one who says things you do not fully mean, shuts down completely, or spirals in ways you cannot quite explain afterward? That is not your worst self. That is your shadow. And according to nearly a century of psychological research, understanding it is one of the most honest and useful things you can do for your relationships.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80"
            alt="A person and their shadow"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>What Jung actually meant by the shadow</h2>
          <p>Swiss psychiatrist Carl Jung introduced the concept of the shadow in the early twentieth century as part of his broader theory of the unconscious. His definition was precise: the shadow is the sum of all the psychological qualities we have repressed, denied, or simply never developed — not because they are inherently bad, but because they were incompatible with the identity we needed to construct in order to survive our particular childhood environment.</p>
          <p>The shadow is not a villain. It contains both obviously difficult traits — explosive anger, selfishness, cruelty — and qualities that were simply not allowed. Vulnerability in a family where emotions were dismissed. Ambition in an environment where standing out felt dangerous. Neediness in a context where asking for things led to disappointment or punishment. These qualities did not disappear. They went underground. And underground, Jung argued, they develop a force of their own — emerging in distorted, exaggerated, or completely out-of-proportion ways when the right trigger activates them.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The neuroscience of why the shadow hijacks you</h2>
          <p>Modern neuroscience has given Jung's framework a biological mechanism. What we experience as the shadow emerging is closely related to what Daniel Goleman, drawing on the work of neuroscientist Joseph LeDoux, called an amygdala hijack — a process in which the brain's threat-detection center (the amygdala) triggers a full-system stress response before the rational, reflective prefrontal cortex has time to evaluate whether the threat is real.</p>
          <p>The amygdala does not distinguish well between physical threats and emotional ones. A partner's critical tone, a feeling of being ignored, a situation that echoes an old wound — any of these can trigger the same threat response as actual danger. When that happens, the prefrontal cortex goes partially offline. The capacity for nuanced thinking, perspective-taking, and deliberate response drops significantly. What takes over instead is a faster, older, more automatic response pattern — which is almost always the shadow.</p>
          <p>This is why people who are thoughtful and self-aware in ordinary circumstances can behave in ways that surprise even themselves under emotional pressure. It is not a character failure. It is the nervous system doing exactly what it was designed to do — protecting you from perceived threat using whatever patterns were established earliest and most deeply.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why it shows up most in close relationships</h2>
          <p>The shadow is not equally distributed across all contexts. It tends to emerge most forcefully in intimate relationships — and this is not a coincidence. Research on attachment and relationship psychology consistently finds that closeness is activating. The more someone matters to you, the more their behavior has the potential to reach the older, less-rational parts of your emotional system.</p>
          <p>There is also a phenomenon psychologists call transference — originally a clinical concept from Freud's work, later refined extensively — in which we unconsciously project feelings and expectations from past important relationships onto current ones. Your partner does something that echoes what a parent did decades ago. Your nervous system does not distinguish between then and now. The shadow responds to the old wound, not the present moment — and your partner receives a reaction that belongs partly to someone else entirely.</p>
          <p>This is one reason relationship conflict so often feels disproportionate. What is happening in the room is triggering something much larger than what is happening in the room — and both people usually sense this without being able to articulate it.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The shadow and projection — seeing yourself in others</h2>
          <p>One of Jung's most practically useful observations about the shadow was the mechanism of projection. When a quality in our shadow — something we have repressed or denied in ourselves — is too uncomfortable to acknowledge directly, the psyche has a reliable way of managing it: seeing it in other people instead.</p>
          <p>This is why certain traits in other people produce what feels like disproportionate irritation, contempt, or fascination. The person who has suppressed their own ambition may feel inexplicable contempt for ambitious people. The person who has denied their own vulnerability may be intensely critical of others who express emotional need. The person who has never allowed themselves to be selfish may become quietly furious at anyone who openly prioritizes themselves.</p>
          <p>The useful diagnostic question — one that requires genuine honesty — is: which traits in others consistently produce the strongest emotional reaction in me? Not all strong reactions are projections, but the ones that feel slightly larger than the situation warrants, or that come up again and again across different people and contexts, are worth examining. They tend to point directly at something in the shadow waiting to be acknowledged.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Common shadow patterns in relationships</h2>
          <p>The over-giver whose shadow is resentment and need. They give endlessly and helpfully — often in ways that are genuinely kind — but when they feel unacknowledged, a disproportionate bitterness emerges. This is the suppressed need for reciprocity that was never allowed to be expressed directly. The shadow is not "I'm bitter." It is "I needed something and never felt safe asking for it."</p>
          <p>The fiercely independent person whose shadow is profound fear of abandonment. The distance they maintain looks like strength and self-sufficiency. But the intensity of their reaction when someone actually leaves — the panic, the sudden clinginess, the depth of grief — reveals that the distance was always partly protective. Closeness was wanted deeply and feared equally.</p>
          <p>The peacekeeper whose shadow is rage. They smooth everything over, avoid conflict, and seem impossibly even-tempered. But what they have never said, the anger they have never permitted themselves to feel, accumulates. It eventually finds expression — sometimes in small cutting remarks, sometimes in complete emotional withdrawal, sometimes in the sudden decision to leave a relationship that seemed fine from the outside.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Working with your shadow — the practice, not the theory</h2>
          <p>Jung's prescription for the shadow was not elimination — which he considered both impossible and undesirable. It was integration. The goal is not to become someone who never experiences anger, neediness, selfishness, or fear. It is to develop enough conscious relationship with those parts that they do not run on autopilot, hijacking your behavior in moments that matter most.</p>
          <p>The practical starting point is noticing the gap — the moment between trigger and response. When your reaction is significantly larger than the situation seems to warrant, something older is being activated. Simply naming that — even internally, even after the fact — begins to create space. "That was bigger than what just happened. Something was triggered." That observation, repeated consistently, starts to interrupt the automatic quality of shadow responses over time.</p>
          <p>The deeper work — understanding what the shadow is protecting and why — often benefits from professional support. Therapy, particularly psychodynamically or attachment-informed approaches, is well-supported by research as effective for exactly this kind of exploration. But even without formal support, the practice of asking "what is this trying to protect?" rather than "what is wrong with me?" changes the relationship with your own darker patterns. Curiosity, not judgment, is the mechanism. And over time, what you can see clearly, you can choose — rather than be chosen by.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>Curious what your shadow side looks like?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Take the quiz to find out which hidden pattern shows up when you feel emotionally unprotected.</p>
          <a href="/quiz/shadow-side" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Shadow Side Quiz →
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
