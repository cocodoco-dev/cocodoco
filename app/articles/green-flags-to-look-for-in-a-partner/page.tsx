import Image from "next/image";

export const metadata = {
  title: "Green Flags You Should Actually Look For in a Partner | Cocodoco",
  description:
    "Everyone talks about red flags. But if you don't know what genuinely healthy looks like in practice, you might walk past the best relationship of your life without recognizing it.",
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

export default function GreenFlagsArticle() {
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
          Green Flags You Should Actually Look For in a Partner — According to Relationship Research
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Everyone talks about red flags. There are entire corners of the internet dedicated to cataloguing them. But knowing what is wrong is only half the picture. If you do not know what genuinely healthy looks like — in practice, not just in theory — you might walk past the best relationship of your life without recognizing it, or stay in something mediocre because it is not obviously bad.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1511988617509-a57c8a288659?w=800&q=80"
            alt="Two people in a healthy relationship"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Why we are better at spotting red flags than green ones</h2>
          <p>There is a well-documented cognitive tendency called negativity bias — the brain's tendency to register and weight negative information more heavily than positive. From an evolutionary standpoint, this made sense. Missing a threat was more costly than missing an opportunity. In modern dating, this bias means we are neurologically primed to notice what is wrong with a potential partner before we notice what is right.</p>
          <p>There is also a familiarity factor. Many people, particularly those with difficult relationship histories, have extensive experience recognizing dysfunction because they grew up around it. Healthy behavior, by contrast, can feel foreign or even suspicious. The person who never criticizes you, who does not create drama, who is consistent and calm and follows through — can feel almost boring compared to the intense, unpredictable dynamic the nervous system learned to associate with love. This is one reason green flags are so frequently overlooked. They do not activate the same neurological alarm system. They just feel quiet. And quiet, for many people, does not yet feel like love.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What four decades of relationship research actually predicts</h2>
          <p>John Gottman's longitudinal research at the University of Washington — conducted over more than forty years with thousands of couples — has identified specific behavioral patterns that predict relationship success and failure with remarkable accuracy. His findings are particularly useful for identifying green flags because they are behavioral, observable, and grounded in data rather than cultural assumptions about romance.</p>
          <p>The strongest predictor of relationship success Gottman identified is not the absence of conflict. It is the ratio of positive to negative interactions — what he calls the 5:1 ratio. Couples in stable, satisfying relationships have roughly five positive interactions for every one negative one. The positive interactions do not have to be dramatic. They are things like genuine interest, affection, humor, appreciation, and what Gottman calls "turning toward" — responding to a partner's bids for connection rather than ignoring or dismissing them. A partner who consistently does these things, even imperfectly, is showing you a fundamental green flag.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Green flags in conflict — the most revealing category</h2>
          <p>How someone behaves during a disagreement tells you far more about them than how they behave when everything is easy. Gottman identified four communication patterns — contempt, criticism, defensiveness, and stonewalling — as the most reliable predictors of relationship breakdown. Their absence is therefore a significant green flag. But beyond absence, there are positive patterns worth actively noticing.</p>
          <p>Repair attempts are one of the most important. These are the small gestures — a touch on the arm, a joke that breaks tension, an "I need a minute but I do want to resolve this" — that de-escalate conflict before it reaches a destructive level. Research shows that whether repair attempts are made and whether they are received and accepted is one of the strongest predictors of relationship health. A partner who initiates repair, even when they are also hurt or angry, is showing emotional maturity that is genuinely rare.</p>
          <p>Equally important is accountability — the ability to say "I was wrong" or "I contributed to this" without excessive defensiveness or counter-attack. Research by Sara Algoe on gratitude and relationships found that feeling genuinely acknowledged by a partner — not just appeased — creates lasting positive effects on relationship quality. A partner who can acknowledge their part in a problem, without being pushed to the wall first, is showing you something important about who they are under pressure.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Green flags in daily behavior</h2>
          <p>Consistency between what someone says and what they do is one of the most reliable green flags available, and one of the easiest to observe over time. Do they follow through on small things they said they would do? Do they show up when it is inconvenient? Do they treat service workers and strangers with basic respect regardless of whether anyone impressive is watching? These behaviors are not impressive in isolation. Their consistency is the signal.</p>
          <p>Curiosity about you specifically — not just interest in you as a category of person, but genuine questions about your inner life, your history, your opinions — is another green flag with research support. Psychologist Arthur Aron's work on intimacy shows that the experience of being known — of having someone engage with the specific contents of your mind and life — is one of the primary mechanisms through which closeness develops and sustains. A partner who is genuinely curious about who you are, rather than who they want you to be, is creating the conditions for real intimacy.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How they talk about others — and what it tells you</h2>
          <p>The way someone speaks about their past partners, their family, their friends, and people they have had conflicts with is one of the most information-dense green flag categories available. Not because anyone should be expected to have uncomplicated feelings about complicated relationships — but because the pattern of how they process and narrate those relationships reveals a great deal about their capacity for perspective, accountability, and emotional complexity.</p>
          <p>Someone who can speak about past relationships with nuance — acknowledging both what went wrong and their own contribution, without either excessive self-blame or wholesale vilification of the other person — is demonstrating a level of relational maturity that is highly predictive of how they will eventually narrate the relationship they are in with you. The person for whom every ex is a monster, every conflict was entirely the other person's fault, and every difficult situation is a story of their own victimhood is showing you something about their capacity for self-reflection that will matter directly to you.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The difference between green flags and love bombing</h2>
          <p>One important distinction: green flags are consistent behaviors observed over time. Love bombing — the pattern of overwhelming early affection, intensity, and attention that is often a precursor to controlling or manipulative relationships — can initially look like a collection of green flags. The difference is sustainability and pressure.</p>
          <p>Green flags feel warm but not pressuring. They do not come with urgency about commitment timelines, feelings of obligation to reciprocate at the same intensity, or a sense that the relationship is moving faster than you have consciously chosen. Love bombing often involves all three. Genuine green flags allow you to move at your own pace. They are offered freely, without creating a sense of debt or urgency. That quality — of care given without strings — is perhaps the greenest flag of all.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What green flag do you need most in love?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Take the quiz to discover the healthy quality your heart is looking for right now.</p>
          <a href="/quiz/green-flag-you-need-in-love" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Green Flag Quiz →
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
