import Image from "next/image";

export const metadata = {
  title: "Why You Keep Attracting the Same Type of Person | Cocodoco",
  description:
    "Different name, different face, same story. If your relationship patterns feel repetitive, you're not unlucky — you're operating from a template. Here's how to see it.",
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

export default function AttractingSameTypeArticle() {
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
          Why You Keep Attracting the Same Type of Person — And How to Finally Break the Pattern
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          Different name, different face, same story. If you have noticed a pattern in the people you end up with — the same emotional unavailability, the same dynamic, the same ending — you are not unlucky and your judgment is not broken. You are operating from a template your brain built a long time ago. And once you can actually see the template, you can start to change it.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1541199249251-f713e6145474?w=800&q=80"
            alt="Person looking thoughtful about patterns"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>The uncomfortable truth about your type</h2>
          <p>When people say they have a type, they usually mean physical characteristics, or broad personality traits — funny, driven, creative. But the deeper type that actually drives romantic attraction operates below that level. It is emotional, not aesthetic. It is the specific combination of qualities — including the frustrating, painful ones — that the nervous system has learned to recognize as love.</p>
          <p>This is not a character flaw. It is the result of how the brain builds relational templates. From early childhood, the emotional patterns experienced in significant relationships become encoded as the brain's model of what close connection looks and feels like. That model then acts as a filter in adult romantic attraction — amplifying the feeling of chemistry and connection toward people who match the template, and creating a sense that people who do not match it, however objectively good they might be, simply do not have the right energy.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The imago — why familiar wounds feel like home</h2>
          <p>Harville Hendrix's Imago Theory proposes that each person carries an unconscious composite image of their early significant caregivers — their positive qualities, their negative qualities, their emotional signature. This image, which Hendrix calls the imago, functions as a template for adult partner selection. We are drawn toward people who match this image, often with an intensity that feels like fate or chemistry, precisely because the match activates deep neural pathways associated with love and significance.</p>
          <p>The painful part of this mechanism is that the imago includes the wounding qualities as well as the positive ones. If a primary caregiver was warm but critical, the imago may encode warmth-with-criticism as the emotional signature of love. An adult with this imago may find themselves consistently attracted to partners who are charming and appreciative much of the time, but intermittently critical in ways that feel strangely familiar. They are not choosing to be hurt. They are following a template that love feels like this specific combination — and the nervous system interprets that familiarity as attraction.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Attachment theory and partner selection</h2>
          <p>Research on attachment and partner selection, including work by Phillip Shaver and Mario Mikulincer, has consistently found that attachment style influences who we find attractive at a level that is largely unconscious. Anxiously attached individuals tend to show heightened attraction toward people with avoidant characteristics — despite reporting that they consciously want closeness and consistency. Avoidantly attached individuals often find anxiously attached partners overwhelming, yet repeatedly end up in relationships with them.</p>
          <p>The mechanism here is both psychological and physiological. The anxious person's nervous system is organized around monitoring for signs of disconnection — which means that a partner who is reliably available and emotionally consistent produces relatively little activation. The nervous system is not being triggered into its familiar alert state. This can be experienced, paradoxically, as a lack of chemistry or passion, even when the relationship is objectively healthier than previous ones.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Schema activation — when past pain runs the present</h2>
          <p>Jeffrey Young's schema therapy research identified specific early maladaptive schemas that are particularly relevant to repetitive relationship patterns. The abandonment schema — formed through early experiences of loss, inconsistency, or unpredictability in significant relationships — is particularly powerful in partner selection. People with strong abandonment schemas may find themselves drawn to partners who are intermittently available, because the inconsistency creates an activation state in the nervous system that has been associated with love since childhood.</p>
          <p>The emotional deprivation schema creates a different but equally persistent pattern. Formed through consistent emotional unavailability in early relationships, this schema can produce either a strong drive toward emotionally unavailable partners — because emotional deprivation feels familiar — or a pattern of unconsciously creating emotional unavailability in otherwise available partners, through various relational behaviors that gradually push closeness away.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why simply choosing differently almost never works</h2>
          <p>The most common response to recognizing a relationship pattern is to decide to choose differently. To go for the stable one instead of the exciting one. To ignore the chemistry and be rational. This approach is not entirely without value, but it dramatically underestimates the power of the template operating below conscious choice.</p>
          <p>When a person who has spent years attracted to emotional unavailability goes on a date with someone warm, consistent, and clearly interested, the most common response is not gratitude or relief. It is often discomfort, boredom, or a vague sense that something is missing. The missing thing is the familiar activation state — the specific neurological signature that their template has learned to associate with love. The safe person does not feel safe in the nervous system's terms. They feel unfamiliar. And unfamiliar, to a nervous system organized around a different template, does not feel like love.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What actually changes the pattern</h2>
          <p>Pattern change in romantic attraction happens through a combination of awareness, corrective experience, and time. Awareness — genuinely seeing the template clearly, understanding its origins, being able to name it in real time as it activates — is necessary but not sufficient. It creates the possibility of a pause between the familiar pull and the automatic following of it. But awareness alone rarely changes what the nervous system finds compelling.</p>
          <p>Corrective experience is what actually moves the needle. This means sustained exposure to relationships — therapeutic relationships, friendships, and eventually romantic ones — that feel different from the template and that provide enough positive experience for the nervous system to begin updating its model. Research on neuroplasticity confirms that emotional learning is not fixed — the brain continues to update relational templates throughout life, given sufficient and sufficiently consistent new input. The nervous system learns safety through repeated experience of it, not through intellectual understanding alone.</p>
          <p>Therapy that specifically addresses early relational patterns — attachment-based, schema-informed, or psychodynamic approaches — has strong research support for this kind of change. The therapeutic relationship itself often provides the first sustained corrective experience of the kind needed. But even outside therapy, the conscious choice to stay in and invest in relationships that feel unfamiliarly healthy — even when they feel less exciting than the template — is a form of corrective experience. Over time, health can become the new familiar. That is not a small thing. That is the actual mechanism of change.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What is your attachment style in love?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Understanding how you connect in relationships is the first step to seeing your own pattern more clearly.</p>
          <a href="/quiz/attachment-style" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Attachment Style Quiz →
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
