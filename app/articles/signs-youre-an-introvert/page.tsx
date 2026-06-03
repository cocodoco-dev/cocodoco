import Image from "next/image";

export const metadata = {
  title: "Signs You're an Introvert (And Why It's a Superpower) | Cocodoco",
  description:
    "Being introverted is not a flaw to fix. It is a strength most people never fully understand — including the introverts themselves.",
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

export default function IntrovertArticle() {
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
          Signs You&apos;re an Introvert (And Why It&apos;s a Superpower)
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Introversion is not shyness. It is not social anxiety. It is not a problem waiting to be solved. It is a fundamentally different way of experiencing the world — and once you understand it, it starts to look a lot like a gift.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Person alone in nature"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>What introversion actually means</h2>
          <p>The most useful definition of introversion is an energetic one. Introverts tend to lose energy in highly stimulating social environments and regain it through solitude or low-key connection. Extroverts tend to be the opposite — energized by social interaction and drained by too much time alone.</p>
          <p>This is not about preference or character. It is about how your nervous system processes stimulation. Introverts are typically more sensitive to external input — noise, social demands, fast-paced interaction — and need more recovery time after sustained exposure to it. That is not weakness. It is simply a different calibration.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Signs you might be more introverted than you think</h2>
          <p>You find small talk genuinely draining but can talk for hours about topics that matter to you. You often feel like you need time alone after social events, even ones you enjoyed. You tend to think before you speak, processing ideas internally rather than out loud. You prefer depth over breadth in friendships — a few close connections over many surface-level ones.</p>
          <p>You feel most yourself in quiet environments. You notice things others miss — emotional undercurrents, small details, shifts in atmosphere. You need time to recharge before being around people again, even people you love. These are not flaws. They are consistent patterns of introversion — and they come with real advantages.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The superpower of depth</h2>
          <p>Because introverts tend to process more slowly and thoroughly, they often develop unusually deep insight into whatever captures their attention. The internal world of an introvert is frequently rich — full of nuance, pattern recognition, and emotional intelligence that others simply do not have access to because they have not spent the same amount of time inside their own minds.</p>
          <p>This depth shows up in writing, in listening, in problem-solving, in the quality of attention they give to people they care about. Introverts are often the ones who remember what you said three months ago, notice that something is off before you have admitted it to yourself, and ask the one question that cuts through the noise and reaches the actual point.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The superpower of presence</h2>
          <p>Because introverts tend to be selective about where they invest their social energy, the presence they do bring tends to be genuinely full. When an introvert is engaged, they are really there — not performing attention, not waiting for their moment, but actually listening and thinking about what you are saying.</p>
          <p>People often feel deeply seen around introverts for this reason. There is a quality of attention in genuine introvert engagement that is not always easy to find — and that makes introverts some of the most meaningful people in other people&apos;s lives, even when they are not the loudest or most constantly present.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The challenges worth knowing</h2>
          <p>Understanding your introversion also means understanding its challenges honestly. Introverts can struggle in environments that reward constant social performance. They may underestimate their own value because visibility is harder. They may feel guilty for needing alone time in relationships where the other person does not have the same need.</p>
          <p>They may also stay quiet when speaking up would serve them — not from shyness, but from a habitual preference for internal processing over external declaration. Recognizing these patterns allows you to navigate them intentionally rather than simply enduring them.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to thrive as an introvert</h2>
          <p>The most powerful shift for introverts is moving from apologizing for their needs to designing their life around them. This means building in recovery time without guilt, choosing environments that allow depth over performance, and communicating clearly to the people they love about what recharging actually looks like.</p>
          <p>It also means recognizing that the world needs introvert energy. The depth, the listening, the careful thinking, the quality of attention — these are not niche contributions. They are essential ones. The goal is not to become more extroverted. It is to become a more fully realized version of the introvert you already are.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "14px" }}>Curious what kind of introvert you are?</p>
          <a href="/quiz/introvert-type" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Introvert Type Quiz →
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
