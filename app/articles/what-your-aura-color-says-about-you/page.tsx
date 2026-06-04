import Image from "next/image";

export const metadata = {
  title: "What Your Aura Color Says About You | Cocodoco",
  description:
    "The energy you give off is real — and science has a lot to say about why some people change the atmosphere just by walking into a room.",
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
          What Your Aura Color Says About You — And Why People Feel It Before You Speak
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You have probably been in a room where someone walks in and everything shifts — not because of what they said or wore, but something harder to name. The mood changes. The energy changes. And you feel it before you can explain it. That is not imagination. That is emotional energy in action — and psychology has spent decades figuring out exactly why it happens.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1518640467707-6811f4a6ab73?w=800&q=80"
            alt="Colorful light energy"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>The science of "energy" — why it is more real than it sounds</h2>
          <p>When people describe someone as having a certain energy or aura, they are often dismissed as being unscientific. But what they are actually describing has a robust research base. The field of emotional contagion — pioneered by psychologists Elaine Hatfield, John Cacioppo, and Richard Rapson — demonstrates that humans automatically and unconsciously mimic the emotional expressions, postures, and even physiological states of people around them.</p>
          <p>This happens through a mechanism involving mirror neurons, a class of brain cells that fire both when you perform an action and when you observe someone else performing it. When you are near someone who is genuinely calm, your nervous system picks up on their breathing pace, muscle tension, and micro-expressions, and begins to mirror them. You literally start to co-regulate. This is why certain people make you feel calmer, and others leave you inexplicably tense — even if nothing was said that should have caused it.</p>
          <p>What we loosely call an aura is, in measurable terms, the consistent emotional signal a person broadcasts through nonverbal channels — tone, pace, posture, facial micro-expressions, proximity behavior, and the subtle physiological cues that others' nervous systems pick up without conscious awareness. It is real. It is consistent. And it tells people a great deal about you before a single word is exchanged.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why your aura is more consistent than you think</h2>
          <p>Most people assume their energy shifts dramatically depending on context — that they are totally different at work versus with friends, in a good mood versus a bad one. And while surface behavior certainly changes, research on personality stability suggests that core emotional patterns are far more consistent than people believe.</p>
          <p>A landmark longitudinal study by Brent Roberts and Wendy DelVecchio, published in <em>Psychological Bulletin</em> in 2000, found that personality traits — including the emotional patterns that contribute to what we experience as someone's aura — show strong consistency from early adulthood onward. The underlying emotional temperament that shapes how you enter a room, respond to stress, and regulate your energy around others tends to be a stable feature of who you are, not just a mood.</p>
          <p>This matters because it means your aura is something you can actually understand and work with. It is not random. It is not fully controlled by circumstance. It is a pattern — and patterns can be recognized, refined, and directed.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What different aura types actually communicate</h2>
          <p>A warm, bright energy — what some describe as a golden aura — communicates safety and openness. Research on approach-avoidance motivation suggests that people with high positive affect and genuine warmth signal to others' nervous systems that this is a safe person to move toward. This is not about being loud or performatively upbeat. It is about the genuine emotional broadcast of someone who is at ease and welcoming.</p>
          <p>A quieter, more contained energy — closer to what people call a moon or ocean aura — communicates depth and stability. There is research in social psychology showing that people who maintain calm, controlled emotional expression in uncertain situations are perceived as more competent and trustworthy. The low-stimulation presence sends a signal of groundedness that others often find regulating, even if they cannot articulate why.</p>
          <p>An intense, magnetic energy — the fire aura type — operates through a different mechanism. High arousal emotional states are genuinely contagious, as Hatfield's research shows. Someone with strong, directed emotional energy pulls others into a heightened state of alertness. This is why certain people command attention without asking for it. The nervous systems around them simply wake up.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why your aura shifts — and when</h2>
          <p>Your core aura type is relatively stable, but it is not static. Context, emotional state, and the people you are around all create variation. What researchers call "emotional labor" — the work of managing your emotional display to meet social expectations — can suppress or alter your natural aura temporarily. A naturally warm person forced to be professionally neutral all day will broadcast a different energy than they would with close friends.</p>
          <p>Chronic stress is one of the most significant aura disruptors. When the nervous system is consistently in a threat state, the emotional signal it broadcasts changes — becoming more guarded, more reactive, or more withdrawn. People who know you may notice something is off without being able to pinpoint it. This is because your baseline emotional broadcast has shifted, and their nervous systems register the change even when their conscious minds do not.</p>
          <p>This also means that working on your internal state — through rest, therapy, meaningful connection, or any practice that genuinely regulates your nervous system — is not just self-care in an abstract sense. It literally changes the energy you put into the world and the way others experience being around you.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>When your aura works against you</h2>
          <p>Every aura type has a shadow version — a version that emerges under pressure or depletion. The warm, bright person who feels responsible for keeping everyone's spirits up can start broadcasting a forced positivity that actually creates distance rather than closeness, because people sense the inauthenticity even when they cannot name it. The naturally magnetic person whose energy comes from genuine passion can tip into dominating a room when they are anxious or unregulated.</p>
          <p>Understanding your aura type includes understanding its depleted version — what you broadcast when you are running on empty, when you are scared, or when you have been performing rather than being. That awareness is genuinely useful, because it lets you recognize when your signal has shifted and make a deliberate choice about what to do with that information rather than simply letting it run unchecked.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Working with your aura intentionally</h2>
          <p>The most practical application of understanding your aura type is alignment — making sure the emotional energy you intend to bring matches what you actually broadcast. This requires some degree of self-awareness and, often, feedback from people close enough to be honest with you.</p>
          <p>It also means recognizing which environments and relationships amplify your best energy versus drain it. If you have a naturally soft, grounding aura, being in consistently high-stimulation environments will not make you brighter — it will make you depleted and less yourself. If you have a fire energy, being forced into prolonged low-stimulation contexts may cause your intensity to turn inward in ways that are not useful for you or anyone around you.</p>
          <p>Your aura is not something to perform. It is something to understand — so that the energy you genuinely carry can be brought into the world in its most coherent, sustainable, and real form. That is what makes it meaningful to the people who experience it.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>Curious what aura you actually have?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Take the quiz to find out — and get a detailed read on the energy you naturally carry into every room.</p>
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
