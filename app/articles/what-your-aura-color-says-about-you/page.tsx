import Image from "next/image";

export const metadata = {
  title: "What Your Aura Color Says About You | Cocodoco",
  description:
    "Each aura carries a different emotional energy. Discover what your aura color reveals about your personality and the way people experience you.",
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

export default function AuraColorArticle() {
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
          What Your Aura Color Says About You
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Your aura is the emotional energy you carry into every room, relationship, and conversation. Most people sense it before they can explain it. Here is what each aura color reveals about the way you move through the world.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80"
            alt="Colorful aura lights"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>What is an aura, exactly?</h2>
          <p>An aura is not something mystical that only psychics can see. In a practical sense, your aura is the emotional atmosphere you create around you — the feeling people get when they are near you, the energy you project without words, the impression that lingers after you leave a room.</p>
          <p>Some people walk in and immediately brighten the mood. Others bring a calm, grounding stillness. Some carry a magnetic intensity that makes everyone pay attention. That consistent emotional signature is what most people mean when they talk about an aura. It is real, it is noticeable, and it tells people a great deal about who you are before you say anything at all.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Golden Aura ☀️</h2>
          <p>A golden aura belongs to people who make others feel lighter. You do not even have to try — your energy lifts the emotional temperature of a space simply by being present. People leave conversations with you feeling more hopeful, warmer, and more open than before.</p>
          <p>The challenge for golden aura types is the pressure to always be that light. When you are tired, sad, or emotionally flat, it can feel like you are failing people. The truth is that your warmth is most powerful when it is honest, not performed. You are allowed to have hard days without dimming anyone else.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Moon Aura 🌙</h2>
          <p>Moon aura people are quietly magnetic. You do not always seek attention, but you tend to hold it. There is something layered and a little hard to read about your energy — which makes people curious, drawn in, wanting to understand you more than you readily offer.</p>
          <p>This kind of aura lingers. People remember moon aura types long after the conversation ends because the energy felt meaningful and rare. The growth edge here is balance — mystery becomes distance when it is never softened by warmth or openness. Your magnetism deepens when people occasionally get a glimpse past the surface.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Rose Aura 🌷</h2>
          <p>A rose aura is soft, gentle, and emotionally safe. People tend to open up around you faster than they expected to — not because you pulled anything out of them, but because your energy made it feel okay to be real. You create comfort without trying to create it.</p>
          <p>The watch-out for rose aura people is being underestimated or taken for granted. Soft energy is sometimes misread as endless availability. Your warmth becomes strongest when it includes clear self-protection — when you offer comfort from a place of choice, not obligation.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Ocean Aura 🌊</h2>
          <p>Ocean aura people bring calm. When things feel chaotic or emotionally noisy, your presence helps people slow down and breathe. You create space rather than filling it, and that spaciousness is quietly powerful — especially for people who rarely feel permission to simply exist without performing.</p>
          <p>The challenge is that steady people absorb a great deal. Others may rely on your grounding energy heavily without realizing how much it costs you. Your healthiest energy flows when your calm is replenished regularly, not drained without return.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Fire Aura 🔥</h2>
          <p>Fire aura energy is bold, intense, and impossible to ignore. You change the atmosphere by walking into it. People feel more awake, more alive, more challenged around you — which can be exhilarating for those who are ready for it and overwhelming for those who are not.</p>
          <p>The key for fire aura types is learning that intensity guided by emotional awareness is far more powerful than raw force. Your energy is most magnetic when it is purposeful — when you know when to turn it up and when to let others breathe.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Forest Aura 🌿</h2>
          <p>A forest aura is earthy, dependable, and quietly reassuring. People feel safe around you — not because you say the right things, but because your presence itself communicates stability. You are the kind of person others want nearby when things fall apart.</p>
          <p>The growth path for forest aura types involves learning that your groundedness is a gift, not a service. You are allowed to let others hold space for you too. Safety does not have to flow only outward from you.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Your aura is not fixed</h2>
          <p>One important thing to understand is that your aura is not a permanent label. It is a tendency — the emotional mode you most naturally return to. Life, growth, and relationships all shift it over time. The goal is not to perform a particular aura, but to understand the one you carry most naturally and bring the best version of it into the world.</p>
          <p>Understanding your aura also helps you recognize why certain people feel energizing and others feel draining. Often, the people who restore you are those whose aura energy naturally complements yours rather than competing with it.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "14px" }}>Curious what your aura actually is?</p>
          <a href="/quiz/aura" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Aura Quiz →
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
