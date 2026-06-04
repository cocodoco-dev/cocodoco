import Image from "next/image";

export const metadata = {
  title: "Signs You're an Introvert (And Why It's a Superpower) | Cocodoco",
  description:
    "You left the party early and immediately felt better. Then spent an hour wondering if something was wrong with you. There isn't — here's what's actually going on.",
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
          Signs You&apos;re an Introvert — And Why Your Brain Is Actually Wired Differently
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You left the party early and immediately felt better. Then you spent an hour wondering if something was wrong with you. There is not. What you experienced is one of the most well-documented patterns in personality psychology — and it has a neurological explanation that changes how you see yourself entirely.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=800&q=80"
            alt="Person alone in nature finding peace"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>What introversion actually is — and what it is not</h2>
          <p>Introversion is not shyness. Shyness is anxiety about social judgment — a fear-based response. Introversion is an energetic one. The distinction matters enormously, because they have completely different causes, feel different from the inside, and require different responses.</p>
          <p>British psychologist Hans Eysenck proposed in the 1960s that introverts and extroverts differ in their baseline level of cortical arousal — that is, how stimulated the brain is at rest. Introverts, he argued, are naturally more aroused at baseline, which means they reach their optimal level of stimulation at a lower external threshold. Too much input — social noise, fast-paced interaction, large groups — pushes them over that threshold into over-stimulation, which feels draining and uncomfortable. Extroverts have lower baseline arousal and actually seek out stimulation to reach their optimal state. Neither is a malfunction. They are simply different calibrations of the same system.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The neuroscience: why your brain literally processes the world differently</h2>
          <p>More recent research has added neurochemical detail to Eysenck's framework. A widely cited body of work by psychologist Marti Laney suggests that introverts and extroverts use different dominant neurotransmitter pathways. Extroverts tend to be more responsive to dopamine — the reward chemical associated with novelty, social interaction, and external stimulation. Introverts tend to be more sensitive to acetylcholine, a neurotransmitter associated with focused thought, reflection, and longer-term memory consolidation.</p>
          <p>This means that the activities which feel rewarding to introverts — sustained focus, deep conversation, reading, creative work — are literally different at a neurochemical level from the activities that feel rewarding to extroverts. It also means that the exhaustion introverts feel after extended social interaction is not laziness or antisocial feeling. It is the neurological cost of operating in a mode that is not their primary one. The brain has been running on dopamine-driven circuits all day when it would much rather be on acetylcholine. That costs something.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Signs the research actually points to</h2>
          <p>Research on introversion consistently identifies several patterns that go beyond the pop-culture version of "quiet person who likes being alone." Introverts tend to have stronger working memory — the ability to hold and manipulate information in mind — which supports the deeper thinking and longer processing time they prefer. A 2012 study published in <em>Frontiers in Human Neuroscience</em> found differences in brain blood flow patterns between introverts and extroverts, with introverts showing more activity in regions associated with planning, recall, and problem-solving.</p>
          <p>Introverts also tend to be more sensitive to negative feedback and to take longer to process complex emotional information — not because they are more fragile, but because they are processing more deeply. This same depth of processing is what makes them unusually good listeners, careful thinkers, and often the person in the room who noticed what everyone else missed. They are not slower. They are more thorough.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The actual superpowers — backed by research</h2>
          <p>Susan Cain's 2012 book <em>Quiet</em> brought mainstream attention to research suggesting that introverts are dramatically undervalued in cultures that prize extroversion — particularly in workplaces and schools. But the case for introvert strengths is not just philosophical. It is empirical.</p>
          <p>Studies on leadership effectiveness, for example, have found that introverted leaders consistently outperform extroverted ones when managing proactive teams — people who take initiative and come with their own ideas. The introverted leader's tendency to listen carefully and process before responding creates conditions where those ideas are actually heard and implemented, rather than steamrolled by the leader's own enthusiasm. Adam Grant's research at Wharton found that introverted leaders produced 24% higher profits than extroverted leaders in this context.</p>
          <p>On creativity, research consistently finds that the conditions introverts naturally create for themselves — solitude, reduced stimulation, sustained focus — are precisely the conditions most associated with creative insight. Teresa Amabile's decades of research on creativity show that uninterrupted quiet work time is one of the strongest predictors of creative output. Introverts are not just comfortable with those conditions. They require them — and that requirement turns out to be a significant advantage.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The hidden cost of living in an extrovert-default world</h2>
          <p>Most schools, workplaces, and social environments are built around extroverted defaults — open-plan offices, group brainstorming, constant availability, the expectation that participation means speaking loudly and often. For introverts, navigating these environments requires constant code-switching, which is genuinely exhausting in a way that is rarely acknowledged.</p>
          <p>Psychologist Laurie Helgoe estimates that introverts make up approximately half the population but are consistently underrepresented in leadership positions and social visibility — not because they are less capable, but because the selection processes for those positions heavily favor extroverted presentation styles. This means many introverts spend years believing they are somehow deficient, when the actual problem is a poor fit between their genuine strengths and the specific form of performance their environment rewards.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to actually design your life around your wiring</h2>
          <p>The most useful reframe is moving from "how do I become more extroverted" to "how do I build a life that works with how I am actually wired." This is not about avoiding growth or challenge. It is about distinguishing between the discomfort of genuine growth and the exhaustion of perpetually operating against your own grain.</p>
          <p>Practically, this means building in recovery time without guilt — not as a luxury but as a maintenance requirement. It means advocating for yourself in environments that default to extroversion: asking for written agendas before meetings, requesting time to think before giving input on complex questions, choosing deep connection over wide social reach. It means recognizing that your best thinking, your most genuine presence, and your most meaningful contributions tend to emerge in conditions of relative quiet — and arranging your life so those conditions exist regularly, not occasionally.</p>
          <p>The goal is not to stop attending parties or to never work in groups. It is to stop apologizing for needing what you need, and to stop measuring your worth by how energized you look while you are spending it.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What kind of introvert are you?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Introversion has many faces. Find out which type fits your specific energy pattern.</p>
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
