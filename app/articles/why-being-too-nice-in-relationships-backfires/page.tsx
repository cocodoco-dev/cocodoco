import Image from "next/image";

export const metadata = {
  title: "Why Being Too Nice in Relationships Backfires | Cocodoco",
  description:
    "You give a lot. You rarely say no. You prioritize peace. And somehow you still end up feeling unseen and taken for granted. Here's the psychology behind why.",
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

export default function TooNiceArticle() {
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
          Why Being Too Nice in Relationships Backfires — And What to Do Instead
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You give a lot. You accommodate. You rarely say no. You prioritize peace over conflict and other people&apos;s comfort over your own. And somehow, despite all of that — or maybe because of it — you end up feeling unseen, taken for granted, or quietly alone inside the relationship. The kindness that was supposed to make everything easier has made something harder. Here is why that happens, and what the research says about it.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1516589091380-5d8e87df6999?w=800&q=80" alt="Person in a relationship feeling unseen" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>The paradox of excessive niceness</h2>
          <p>There is a robust body of research on agreeableness — the personality trait most closely associated with being cooperative, accommodating, and easy to get along with. High agreeableness consistently predicts lower conflict in relationships, which might suggest it would also predict higher relationship satisfaction. But the research tells a more complicated story. Studies on relationship quality find that while some agreeableness is positively associated with satisfaction, excessive accommodation — particularly when it involves the consistent suppression of one&apos;s own needs and preferences — is associated with lower relationship quality over time, for both partners.</p>
          <p>The mechanism is not obvious until you understand it: a relationship where one person consistently defers to the other is not a relationship between two equals. It is a relationship with a structural imbalance — and structural imbalances, research on relationship dynamics consistently shows, generate resentment, reduce attraction, and create the conditions for the very conflict they were designed to avoid.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What being too nice actually looks like from the inside</h2>
          <p>The experience of being excessively nice in relationships is rarely felt as a choice. It tends to feel like necessity — as if expressing a genuine preference, disagreeing, or saying no carries a risk so significant that the safer strategy is always accommodation. This is not a personality quirk. It is typically a pattern rooted in early learning about what happens when you take up space, have needs, or assert preferences in the presence of people whose approval matters to you.</p>
          <p>Psychotherapist Harriet Lerner, in her research-informed clinical work on relationships and authenticity, describes what she calls the &quot;de-selfing&quot; that occurs when people consistently organize their behavior around managing others&apos; emotional states. The person who is always nice, always accommodating, always available is not experiencing freedom — they are experiencing a particular form of relational anxiety that makes the appearance of harmony feel safer than the reality of genuine self-expression. The niceness is not generosity. It is, at its root, a form of self-protection.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How resentment builds without conflict</h2>
          <p>One of the most damaging aspects of chronic over-accommodation is that it creates resentment that has no legitimate outlet. In a relationship where one person never says no, never expresses frustration, never advocates for their own needs, the unexpressed feelings do not disappear. They accumulate. Research on emotional suppression — particularly work by James Gross on the consequences of habitual expressive suppression — finds that consistently inhibiting emotional expression does not reduce the underlying emotional experience. It maintains it, often intensifying it over time, while adding the physiological cost of the suppression effort itself.</p>
          <p>The resentment that builds in chronically over-accommodating people tends to express itself in indirect ways: a tone of martyrdom, small acts of passive resistance, disproportionate reactions to minor frustrations, or a gradual emotional withdrawal that the partner finds confusing because nothing has been said. The relationship begins to feel cold or distant without either person being able to identify when or why the shift happened — because the process has been entirely underground.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why people lose respect for the person who never says no</h2>
          <p>This is the aspect of the dynamic that most people find hardest to accept, because it seems unfair. But research on attraction and respect in relationships consistently finds that the capacity to assert preferences, hold positions, and maintain one&apos;s own perspective — what psychologists call differentiation — is positively associated with both attraction and respect from partners.</p>
          <p>David Schnarch, a clinical psychologist whose work on differentiation in relationships has been widely influential, argues that genuine intimacy requires two people who are sufficiently differentiated — sufficiently present as individuals with their own perspectives, preferences, and limits — to actually meet each other. A relationship with a person who has no apparent preferences, never disagrees, and always accommodates is not intimate. It is a relationship with a mirror — and mirrors, however flattering, are not compelling company over time.</p>
          <p>The loss of attraction and respect that often accompanies chronic over-accommodation is not because the partner is ungrateful or unreasonable. It is a predictable response to the disappearance of the person they were originally attracted to — who presumably had their own character, their own edges, their own particular way of seeing things. Excessive niceness, sustained over time, erases those edges. And their absence is felt, even when no one can articulate exactly what is missing.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The difference between genuine kindness and approval-seeking</h2>
          <p>Genuine kindness and approval-seeking can produce identical behavior from the outside. The distinction is internal and motivational. Genuine kindness is given freely, without expectation of specific reciprocation, and does not produce resentment when it goes unacknowledged. Approval-seeking is transactional at a level the person may not consciously recognize — it is offered in exchange for safety, acceptance, or validation, and its absence or inadequate reciprocation generates the suppressed frustration that eventually becomes resentment.</p>
          <p>A useful diagnostic question, borrowed from the work of therapist and author Brené Brown on authenticity: Are you giving what you can give with genuine openness, or are you giving what you feel you must give to remain acceptable? The first is generosity. The second is self-abandonment dressed as generosity — and the nervous system, even when the conscious mind does not, tends to know the difference.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to be warmer by being more honest</h2>
          <p>The counterintuitive finding from research on relationship quality and authenticity is that relationships tend to become warmer and more satisfying when people become more honestly themselves — including when that honesty involves disagreement, expressed needs, or the occasional no. This is because genuine warmth requires a genuine self to be warm from. Warmth produced by suppressing your own experience to manage someone else&apos;s is not sustainable, and partners tend to sense its conditional quality even when they cannot name it.</p>
          <p>The practical shift is not from nice to difficult. It is from performed niceness to genuine presence. Genuine presence includes warmth, generosity, and care — and also includes preferences, limits, and the occasional honest expression of what you actually think and feel. Relationships that can hold all of those things simultaneously are the ones research consistently identifies as most satisfying, most stable, and most genuinely intimate. The path there is not less kindness. It is the courage to be real enough that your kindness, when it appears, means something.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What is your secret green flag?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover the hidden healthy trait that makes you deeply lovable — in a way that actually lasts.</p>
          <a href="/quiz/secret-green-flag" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Secret Green Flag Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
