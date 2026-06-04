import Image from "next/image";

export const metadata = {
  title: "What Your Attachment Style Really Means | Cocodoco",
  description:
    "Why you act the way you do in relationships — and what psychology says you can actually do about it.",
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

export default function AttachmentStyleArticle() {
  return (
    <main style={{ minHeight: "100vh", background: "#fdf2f8", fontFamily: "Arial, sans-serif", padding: "48px 18px" }}>
      <header style={{ textAlign: "center", marginBottom: "0" }}>
        <a href="/" style={{ textDecoration: "none" }}>
          <h1 style={{ fontSize: "52px", margin: 0, color: "#111827" }}>cocodoco</h1>
        </a>
        <p style={{ marginTop: "10px", fontSize: "18px", color: "#374151" }}>
          Cute quizzes for your mood, personality, and lifestyle 🧁
        </p>
      </header>

      {nav}

      <article style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#9d174d", textTransform: "uppercase", marginBottom: "12px" }}>
          Love & Relationships
        </p>

        <h1 style={{ fontSize: "36px", lineHeight: 1.25, color: "#111827", marginBottom: "16px" }}>
          What Your Attachment Style Really Means — And Why It Explains So Much About Your Relationships
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You have probably noticed a pattern. Maybe you pull away right when someone gets close. Maybe you check your phone obsessively waiting for a text back. Maybe you have been told you love too hard, or not enough. These are not personality flaws. According to decades of psychological research, they are almost certainly your attachment style at work — and understanding it changes everything.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80"
            alt="Two people in a close conversation"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>
          Photo by Unsplash
        </p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>
            The science behind it — and why it matters
          </h2>
          <p>
            In the 1950s, British psychiatrist John Bowlby proposed something radical for his time: that the emotional bond between a child and their caregiver is not just a comfort mechanism, but a biological survival system. Babies who stayed close to a responsive caregiver survived. Those who did not, often did not. Evolution, Bowlby argued, wired us to seek closeness — and to develop strategies to cope when closeness is unavailable or unsafe.
          </p>
          <p>
            A decade later, psychologist Mary Ainsworth tested this in a landmark experiment called the Strange Situation. She observed how toddlers behaved when briefly separated from their caregivers and then reunited. What she found was striking: children showed distinctly different patterns of response. Some were quickly soothed when the caregiver returned. Others clung and cried and could not be comforted. Others seemed almost indifferent. These patterns, she found, directly reflected how responsive and consistent the caregiver had been at home.
          </p>
          <p>
            The critical insight — the one that changed psychology — is that these early patterns do not stay in childhood. Research by Cindy Hazan and Phillip Shaver in the 1980s demonstrated that the same attachment patterns show up in adult romantic relationships, almost like a template the nervous system carries forward. The child who could not trust that the caregiver would return often becomes the adult who cannot stop anxiously monitoring whether their partner is pulling away.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            The four styles — and what they actually look like
          </h2>
          <p>
            Most people have heard the labels: secure, anxious, avoidant, disorganized. But the labels are almost useless without understanding what they look and feel like from the inside.
          </p>
          <p>
            <strong>Secure attachment</strong> does not mean you never feel jealous, never get hurt, or never need reassurance. It means that when those feelings arise, they do not hijack you. You can say "I felt a little insecure when you didn't text back" without it spiraling into an argument. You can give a partner space without interpreting it as abandonment. You can ask for what you need without feeling like you are too much. Studies consistently show that securely attached adults report higher relationship satisfaction, better conflict resolution, and greater emotional intimacy — not because they have better partners, but because their internal patterns support connection rather than sabotage it.
          </p>
          <p>
            <strong>Anxious attachment</strong> feels from the inside like a constant low-level hum of uncertainty about whether you are loved enough. You might replay conversations looking for signs something is wrong. A partner being quieter than usual feels like evidence of something you cannot name but deeply fear. You might send a follow-up text immediately after sending one, not because you forgot something, but because the silence is unbearable. This is not "being clingy" — it is a nervous system that learned early that love was inconsistent and that staying vigilant was the only way to protect yourself from being blindsided by its loss.
          </p>
          <p>
            <strong>Avoidant attachment</strong> feels from the inside like a strong preference for self-reliance and a sense that emotional dependence is risky. You might genuinely enjoy the early stages of a relationship and then find yourself pulling back as it deepens — not because you stopped caring, but because closeness at a certain level triggers something that feels like a threat. Partners may describe you as emotionally unavailable or hot and cold. What they are experiencing is an attachment system that learned that emotional needs were safest when kept private or suppressed entirely.
          </p>
          <p>
            <strong>Disorganized attachment</strong> is the least discussed but perhaps the most difficult to live with. It develops when the caregiver was also a source of fear — creating an impossible situation where the thing your body drives you toward (closeness) is also the thing your body has learned to fear. In adult relationships, this can show up as intense desire for closeness followed by panic when it is achieved, difficulty trusting even people who behave consistently, and a push-pull dynamic that exhausts both partners.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            The anxious-avoidant trap — why it is so common
          </h2>
          <p>
            There is a reason anxious and avoidant people so often end up in relationships with each other. It is not bad luck. It is a deeply familiar dynamic for both of them, even when it is painful.
          </p>
          <p>
            The anxious partner pursues closeness. The avoidant partner, feeling crowded, withdraws. The anxious partner, interpreting withdrawal as rejection, pursues harder. The avoidant partner, now more overwhelmed, withdraws further. Both are behaving in ways that feel completely rational and self-protective to them — and completely unreasonable to the other. The anxious person cannot understand why someone who claims to care keeps pulling away. The avoidant person cannot understand why someone keeps demanding more than feels comfortable to give.
          </p>
          <p>
            What makes this trap particularly painful is that the anxious person often finds the avoidant partner's independence compelling — it mirrors the inconsistent caregiver they learned to chase. And the avoidant partner often finds the anxious partner's warmth and pursuit appealing — until it triggers the old feeling of being engulfed. Both get what feels familiar. Neither gets what they actually need.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            Your attachment style is not your destiny
          </h2>
          <p>
            This is the part that matters most, and it is often left out of casual discussions about attachment theory: your style is not fixed. The research on what psychologists call "earned secure attachment" is genuinely hopeful. Studies by Mary Main and others found that many adults who had difficult early attachment experiences had developed secure attachment patterns by adulthood — through therapy, through consistently safe relationships, and through the kind of deliberate self-reflection that allows old patterns to be named and examined.
          </p>
          <p>
            A 2019 meta-analysis published in the journal <em>Psychological Bulletin</em> reviewed data from over 25,000 participants and found that attachment security can and does shift across the lifespan, and that therapeutic interventions — particularly attachment-based therapy — reliably move people toward more secure patterns. Your early template is powerful, but it is not the only thing writing your story.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            What you can actually do with this information
          </h2>
          <p>
            The first step is identification without judgment. Most attachment behaviors made complete sense in the context where they developed. Anxious monitoring was rational when love was genuinely inconsistent. Emotional self-sufficiency was rational when vulnerability was met with dismissal. These were not mistakes — they were adaptations. Treating them as moral failures makes change harder, not easier.
          </p>
          <p>
            The second step is learning to recognize the pattern in real time. When you feel the urge to send the third text in a row, or when you notice yourself going quiet and pulling away at the exact moment someone gets close, those are attachment triggers. Naming them — even just internally — creates a small gap between the trigger and the automatic response. That gap is where choice lives.
          </p>
          <p>
            The third step, for most people, involves some form of relational healing — whether through therapy, through deliberately choosing and staying in relationships with securely attached partners, or both. The nervous system learns safety through repeated experience, not through intellectual understanding alone. Knowing your attachment style is a starting point. Living differently with it is the actual work.
          </p>
          <p>
            But that work is worth doing. Because the quality of your closest relationships — more than almost any other factor — is one of the strongest predictors of long-term wellbeing, satisfaction, and even physical health. And your attachment style is quietly at the center of all of it.
          </p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>
            Curious what your attachment style is?
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
            Take our quiz to find out — and get a personalized breakdown of how your style shows up in relationships.
          </p>
          <a
            href="/quiz/attachment-style"
            style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}
          >
            Take the Attachment Style Quiz →
          </a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>
            ← Back to Articles
          </a>
        </div>
      </article>
    </main>
  );
}
