import Image from "next/image";

export const metadata = {
  title: "The 6 Comfort Characters: Which One Are You? | Cocodoco",
  description:
    "Some people comfort through warmth, others through listening or protection. Discover all 6 comfort character types and what makes each one special.",
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
          The 6 Comfort Characters: Which One Are You?
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Comfort is not one-size-fits-all. Some people make you feel lighter. Others make you feel heard, protected, or held. Here is a closer look at the six types of comfort energy — and what makes each one genuinely irreplaceable.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1516156008625-3a9d6067fab5?w=800&q=80"
            alt="Warm cozy comfort"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>What is a comfort character?</h2>
          <p>A comfort character is not a fictional person from a show or book — although that is one version of it. In a broader sense, your comfort character is the emotional role your presence naturally plays for the people around you. It is how you show up when someone is hurting, struggling, or simply exhausted by life.</p>
          <p>Most people have one dominant comfort style, even if they have never put a name to it. You might be the friend everyone calls when they need to cry. Or the one who fixes problems without being asked. Or the one who simply makes everything feel softer and quieter. All of these are comfort characters — and none is more valuable than the others.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>1. The Sunshine ☀️</h2>
          <p>Sunshine comfort characters bring lightness. Their presence does not fix the problem, but it makes the weight feel more manageable. They have a natural ability to brighten emotional atmospheres without being dismissive of pain — there is a difference between genuine warmth and forced positivity, and sunshine types usually land on the right side of it.</p>
          <p>What makes them powerful is emotional generosity. They share their light freely, and people feel it. The watch-out is the pressure that comes with always being the bright one. Sunshine types need permission to have their own dark days without feeling like they are letting someone down.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>2. The Listener 🎧</h2>
          <p>Listener comfort characters offer something incredibly rare: the experience of being truly heard. Not advised, not redirected, not fixed — just heard. In a world where most people are waiting for their turn to speak, a genuine listener creates space that feels profoundly safe.</p>
          <p>People often open up faster to listener types than they planned to. There is something about patient, nonjudgmental attention that lowers emotional defenses. The challenge for listeners is that they tend to absorb a great deal — and they need to be intentional about what they carry versus what they let go.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>3. The Protector 🛡️</h2>
          <p>Protector comfort characters make people feel safe. Not just emotionally — practically. They are the ones who show up, handle things, follow through, and make it clear that you will not have to face whatever is happening completely alone. Their loyalty tends to be quiet but absolute.</p>
          <p>The protector's strength is consistency. They are the same in hard moments as they are in easy ones, which is rare and deeply stabilizing for the people around them. The growth edge is learning to receive care as well as give it — protectors can sometimes mistake self-sufficiency for strength.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>4. The Soft Dream 🌙</h2>
          <p>Soft dream comfort characters create atmosphere. Their presence feels tender, gentle, and emotionally beautiful in a way that is hard to describe but immediately noticeable. Being around them makes the world feel softer — less sharp, less loud, less overwhelming.</p>
          <p>This type of comfort is subtle but lasting. People often feel better without being able to say exactly why. The challenge for soft dream types is protecting their own softness — gentle energy can be taken for granted, and boundaries matter even for the most tender-hearted people.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>5. The Healer 🌿</h2>
          <p>Healer comfort characters do not just soothe the surface — they help people come back to themselves. Their warmth feels restorative. People often feel more whole, more capable, and more reconnected after time with a healer type, even if nothing practical changed.</p>
          <p>What makes healers rare is their ability to hold pain without trying to rush it away. They sit with difficult emotions rather than deflecting them, which allows genuine processing rather than just temporary relief. The challenge is knowing where compassion ends and over-responsibility begins.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>6. The Home 🏡</h2>
          <p>Home comfort characters feel like exactly that — home. Their presence is cozy, grounding, and familiar in the best possible way. They do not need to do anything dramatic to comfort people. Just being around them makes the emotional noise of the day feel manageable.</p>
          <p>This type of comfort is often underappreciated because it is not showy. It lives in consistency, in small gestures, in showing up regularly rather than spectacularly. The growth path for home types involves making sure peace flows inward for them too — not just outward for everyone else.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why knowing your type matters</h2>
          <p>Understanding your comfort character helps you see your own quiet strengths more clearly. Most people undersell the emotional gift they bring to others — because it feels natural to them, they assume it is nothing special. It is.</p>
          <p>It also helps you understand what you need in return. Sunshine types need permission to not be sunny. Listeners need to be listened to. Protectors need to be protected sometimes. Knowing your type is not just about what you give — it is about what you deserve to receive.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "14px" }}>Want to find out which comfort character you are?</p>
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
