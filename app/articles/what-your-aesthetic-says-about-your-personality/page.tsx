import Image from "next/image";

export const metadata = {
  title: "What Your Aesthetic Says About Your Personality | Cocodoco",
  description:
    "The room you'd choose to live in, the music that stops you mid-scroll, the images that feel made for you — these are not random preferences. They are a map of your inner world.",
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

export default function AestheticPersonalityArticle() {
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
          What Your Aesthetic Says About Your Personality — According to Psychology
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          The room you would choose to live in, the music that stops you mid-scroll, the images that feel like they were made specifically for you — these are not random preferences. Environmental psychology and personality research suggest they are a surprisingly accurate map of your inner world, revealing things about your emotional needs and cognitive style that more direct questions often miss.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1513519245088-0e12902e35ca?w=800&q=80" alt="Aesthetic room with personality" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Why aesthetic preferences are psychologically meaningful</h2>
          <p>The study of how people respond to visual and sensory environments has a long history in psychology. Environmental psychologist Roger Ulrich&apos;s foundational research in the 1980s demonstrated that exposure to natural environments produced measurable reductions in stress hormones and improvements in mood and cognitive function — findings later replicated across hundreds of studies. The environments we find restorative are not arbitrary. They consistently align with deeper patterns in how our nervous systems process stimulation and what kinds of input they find regulating versus depleting.</p>
          <p>More directly relevant to aesthetic preferences, a body of research connecting Big Five personality traits to environmental and visual preferences has found consistent patterns. People who score high on openness to experience — a trait associated with intellectual curiosity, creativity, and appreciation for novelty — consistently prefer more complex, asymmetrical, and unconventional aesthetics. Those high in conscientiousness tend to prefer order, clarity, and clean structure. Those high in neuroticism often gravitate toward aesthetics that feel emotionally safe and cozy. These correlations are not perfect, but they are robust enough to have been replicated across cultures and contexts.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What different aesthetics tend to signal</h2>
          <p>A preference for soft, muted, cottagecore or dreamlike aesthetics — warm light, natural textures, gentle curves — tends to correlate with a need for emotional safety and sensory calm. Research on the restorative environment framework, developed by Rachel and Stephen Kaplan, found that environments perceived as gentle, coherent, and naturally rich in soft stimulation are most restorative for people with depleted attentional resources. The aesthetic preference, in other words, often reflects what the nervous system is seeking — not just what looks nice.</p>
          <p>A preference for darker, more dramatic or moody aesthetics — deep colors, sharp contrasts, atmospheric weight — is often associated with higher openness and a comfort with emotional complexity. Research on aesthetic responses to art finds that tolerance for ambiguity — the ability to sit with unresolved emotional tension — is one of the strongest predictors of preference for complex, emotionally weighted visual material. Preferring a dark aesthetic is not necessarily dark psychology. It is often the signature of a mind that is comfortable with depth and does not need everything resolved into lightness.</p>
          <p>Minimalist aesthetics — clean lines, empty space, deliberate absence of clutter — tend to correlate with a strong need for cognitive clarity and low tolerance for overstimulation. Research on cognitive load and visual complexity consistently shows that highly stimulating visual environments impair performance and increase stress for people with lower sensory thresholds. The preference for simplicity is often the nervous system communicating what it needs to function well.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The identity function of aesthetic choice</h2>
          <p>Beyond what aesthetics reveal about existing personality, they also serve an identity function — they are a medium through which people construct and communicate who they are. Sociologist Dick Hebdige&apos;s work on subculture and style demonstrated that aesthetic choices are never simply about visual preference. They are always also about affiliation, self-definition, and the communication of inner experience to the social world.</p>
          <p>This is why the discovery of an aesthetic that feels genuinely right — that captures something about your inner world that you have not been able to articulate directly — can feel disproportionately significant. It is not just about finding images you like. It is about finding a visual language for something that was previously wordless. The aesthetic becomes a form of self-recognition, and that recognition has real psychological value — particularly for people who have felt that their inner world does not have a clear external equivalent.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The role of awe and beauty in your wellbeing</h2>
          <p>Psychologist Dacher Keltner&apos;s research on awe — the emotion triggered by encountering something vast, beautiful, or beyond our current understanding — has found that awe experiences produce distinctive psychological effects: reduced self-focus, increased sense of connection to others, enhanced curiosity, and elevated prosocial behavior. People who experience awe more frequently report higher life satisfaction and lower levels of depression and anxiety.</p>
          <p>What is particularly relevant here is that the triggers for awe vary significantly by individual. For some, awe is triggered by natural grandeur. For others, by music. For others, by certain visual aesthetics — the specific combination of color, light, texture, and composition that produces that particular feeling of being touched by something larger than everyday experience. Understanding what aesthetic inputs produce awe for you is not a trivial question. It points directly toward sources of genuine psychological renewal that many people ignore because they seem too simple or too personal to take seriously as wellbeing practices.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>When aesthetics become a window into emotional needs</h2>
          <p>One of the most practically useful applications of aesthetic self-awareness is using it to identify unmet emotional needs. The environments and visual inputs we find most compelling often reflect what the nervous system is seeking — what it does not currently have enough of in daily life. A person consistently drawn to aesthetics of warmth, softness, and enclosure may be operating in environments that feel too cold or exposed. A person consistently drawn to wild, open, expansive visuals may be living in conditions that feel too contained or controlled.</p>
          <p>This is not interpretation in a loose or speculative sense. It is pattern recognition. The aesthetic pull is data — information from the nervous system about what it finds regulating and what it needs more of. Treating it as such, and using it to make deliberate choices about environments, inputs, and experiences, is a form of self-care that is both personalized and evidence-informed. Your aesthetic is not just a mood board. It is a map of what makes you feel most fully yourself.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What aesthetic matches your soul?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover the visual world that feels most true to your inner self.</p>
          <a href="/quiz/soul-aesthetic" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Soul Aesthetic Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
