import Image from "next/image";

export const metadata = {
  title: "What Is Your Shadow Side and Why It Shows Up in Relationships | Cocodoco",
  description:
    "The hidden emotional patterns that surface when you feel unprotected — and what they reveal about your deeper self.",
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
          What Is Your Shadow Side and Why It Shows Up in Relationships
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Everyone has a shadow side. It is not the villain in you — it is the part of you that surfaces under pressure, fear, or emotional exhaustion. Understanding it is one of the most honest and useful things you can do for your relationships.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1508214751196-bcfd4ca60f91?w=800&q=80"
            alt="Person and their shadow"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Where the idea of a shadow side comes from</h2>
          <p>The concept of the shadow was developed by Swiss psychologist Carl Jung. He described the shadow as the unconscious part of the personality — the traits, impulses, and emotional patterns that we either do not recognize in ourselves or have learned to suppress because they felt unacceptable, dangerous, or unwanted.</p>
          <p>The shadow is not inherently negative. It contains both darker tendencies and qualities we simply were not allowed to express — vulnerability, anger, neediness, ambition, wildness. The problem is not that these things exist. The problem is when they exist entirely outside of our awareness and therefore outside of our control.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why it shows up in relationships</h2>
          <p>Relationships — especially close, intimate ones — have a way of activating the shadow. When we feel truly seen, we also become truly vulnerable. When we feel threatened or unprotected, older survival strategies come online. When someone we care about does something that touches an old wound, the response that emerges is often not our most conscious, considered self — it is the shadow.</p>
          <p>This is why people who are generally kind can become surprisingly cold in arguments. Why people who value independence can become clingy under emotional stress. Why people who consider themselves honest can find themselves avoiding a conversation they know they need to have. The shadow does not mean you are a bad person. It means you are human, carrying patterns formed long before you had the language or awareness to examine them.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Common shadow patterns in relationships</h2>
          <p>The over-giver whose shadow is resentment. They give endlessly and helpfully, but when they feel unacknowledged, a quiet bitterness emerges that feels disproportionate to the moment — because it has been accumulating for a long time. The shadow here is the need to receive that was never allowed to be expressed directly.</p>
          <p>The fiercely independent person whose shadow is deep fear of abandonment. They have built an entire identity around not needing people, but the intensity of their reaction when someone actually leaves reveals how much closeness has always mattered — and how terrifying its loss feels underneath all that self-sufficiency.</p>
          <p>The peacekeeper whose shadow is unspoken rage. They smooth everything over, avoid conflict at all costs, and seem impossibly even-tempered. But the things they have never said, the anger they have never allowed themselves to feel, eventually find an exit — sometimes in small, cutting remarks, sometimes in sudden and complete withdrawal.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to recognize your own shadow</h2>
          <p>One of the most reliable clues is an overreaction. When your emotional response feels larger than the situation seems to warrant, there is usually something older and deeper being activated. That gap between stimulus and response is often where the shadow lives.</p>
          <p>Another clue is projection — when you find yourself consistently frustrated by a particular quality in others. The traits that bother us most intensely in other people are often the ones we have the most discomfort acknowledging in ourselves. This is not a rule without exceptions, but it is worth sitting with honestly.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Working with your shadow, not against it</h2>
          <p>The goal is not to eliminate the shadow. That is not possible. The goal is to bring it into the light — to develop enough awareness of your patterns that they no longer run on autopilot in your most important relationships. This does not happen overnight, and it is not always comfortable. But it is one of the most meaningful kinds of personal growth available.</p>
          <p>It starts with curiosity rather than judgment. When your shadow shows up, the most useful question is not "what is wrong with me?" but "what is this trying to protect?" Every shadow pattern began as a form of self-protection. Understanding what it was originally protecting — and whether that protection is still necessary — is the beginning of real change.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "14px" }}>Want to discover your shadow side?</p>
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
