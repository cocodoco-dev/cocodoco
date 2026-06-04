import Image from "next/image";

export const metadata = {
  title: "How to Stop Romanticizing People Too Quickly | Cocodoco",
  description:
    "You've known them three weeks and you're already imagining your life together. You're not in love with them — you're in love with the story you're writing about them.",
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

export default function RomanticizingArticle() {
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
          How to Stop Romanticizing People Too Quickly — Without Losing the Magic of Falling for Someone
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You have known them for three weeks and you are already imagining the life you could have together. The conversations, the trips, the inside jokes that do not exist yet. You are not in love with them — not really. You are in love with the story you are writing about them. And that distinction, once you can actually feel it, changes everything about how you date.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1516589178581-6cd7833ae3b2?w=800&q=80"
            alt="Person daydreaming about romance"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Limerence — the difference between love and obsession</h2>
          <p>In 1979, psychologist Dorothy Tennov coined the term limerence to describe a state of intense romantic infatuation characterized by intrusive thinking about the person, acute sensitivity to their responses, and an intense longing for reciprocation. Limerence is not love. It is a neurological state — and understanding the difference between the two is the beginning of dating more clearly.</p>
          <p>Tennov's research, based on interviews with hundreds of people, found that limerence has a predictable structure: it intensifies during uncertainty, peaks when reciprocation is intermittent or ambiguous, and begins to fade when either a clear rejection occurs or when the relationship becomes consistently close and settled. This last point is particularly important. Limerence — the intoxicating early feeling — is actually fed by not fully having someone. It thrives on imagination, on possibility, on the gap between what is known and what is being projected. Real, reciprocal closeness tends to transform it into something quieter and more sustainable — or to reveal that the person you were limerent about and the person they actually are do not match as well as you imagined.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The neuroscience of early attraction — why it distorts perception</h2>
          <p>The early stages of romantic attraction involve a distinctive neurochemical profile. Research by Helen Fisher, Arthur Aron, and colleagues, using fMRI brain imaging, found that looking at photos of a romantic interest activates the ventral tegmental area — a region associated with dopamine production and reward motivation — along with regions involved in goal-directed behavior and focused attention. The brain in early romantic attraction literally resembles the brain in states of craving and goal pursuit.</p>
          <p>This neurochemical state has important perceptual consequences. The dopamine surge associated with early attraction activates what psychologists call positive illusion — a bias toward perceiving the other person more favorably than the available evidence warrants. Research by Sandra Murray and John Holmes demonstrated that people in new relationships systematically overestimate their partner's virtues and underestimate their faults — and that this idealization, while eventually adjusted as more information becomes available, shapes the early emotional investment significantly.</p>
          <p>In practical terms, this means your brain in the early stages of attraction is literally not seeing the person accurately. It is seeing a version of them enhanced by your own dopaminergic state, your hopes, and your projections. This is not a bug. The idealization of early attraction serves evolutionary functions around pair bonding. But it is essential to understand when you are in this state, because decisions made during it — about emotional investment, about vulnerability, about commitment — are made with significantly impaired perception.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>What you are actually falling for when you romanticize</h2>
          <p>When you romanticize someone quickly, the object of your feeling is rarely the actual person. It is a composite — assembled from the real person plus your own wishes, needs, and emotional history. The qualities you are projecting onto them are often things you deeply want to find, things you have found before in people who hurt you, or things you need to believe are possible in love right now.</p>
          <p>Arthur Aron's self-expansion theory of love provides a useful lens here. He proposes that one of the primary motivations in romantic attraction is self-expansion — the desire to grow, to incorporate new perspectives and capacities through close relationship with another person. Early romantic idealization, he argues, is partly the mind's simulation of who you might become through this particular relationship. You are not just falling for them. You are falling for the version of yourself you imagine becoming in their company. This is why it can feel so significant so quickly — and why it can collapse so completely when the actual person diverges from the projection.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Signs you are projecting rather than seeing clearly</h2>
          <p>The most reliable sign is the intensity of feeling relative to the amount of actual information you have about this person. If you feel very strongly about someone you have known for a short time, and the strength of feeling is based significantly on imagined future scenarios or interpretations of limited interactions, projection is likely involved.</p>
          <p>Another sign is defensiveness when others offer observations about the person that do not fit your image of them. If a friend gently notes something inconsistent or concerning and your immediate response is to dismiss or explain it away, you may be protecting the projection rather than engaging with the actual person. Romanticization requires a certain degree of information management — selectively attending to what confirms the story and minimizing what complicates it.</p>
          <p>A third sign is that you know more about how they make you feel than you know about who they actually are. You can describe your feelings in detail. You can describe the atmosphere when you are together. But you might struggle to articulate their actual values, how they have handled difficult situations in the past, what they are genuinely afraid of, or how they behave when they are under stress. These are the things that predict who someone will be as a partner. The feeling of chemistry tells you something, but it is not sufficient information.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to stay present without killing the magic</h2>
          <p>The goal is not to eliminate the beautiful, disorienting feeling of early attraction. It is to hold it alongside a parallel practice of genuine curiosity about the actual person — who they are under pressure, how they treat people when nothing is at stake, what they do when they are not performing their best self for you.</p>
          <p>One practical approach is to deliberately create conditions where you see the real person rather than the curated one. This is not about testing people or being suspicious. It is about arranging situations — meeting their friends, navigating a small logistical stress together, having a conversation where you genuinely disagree — where the neurological performance of early attraction is reduced and the actual person becomes more visible.</p>
          <p>Another approach, perhaps the most useful, is to notice what you do not know and let it remain unknown rather than filled in with assumptions. When you catch yourself imagining how they would handle something you have not yet encountered together, or attributing a quality to them based on minimal evidence, the pause itself is the practice. "I think this might be true about them, but I don't actually know yet" is a sentence worth saying to yourself regularly in early dating. It keeps the door open for who they actually turn out to be — which is almost always more interesting, more complicated, and more real than any projection could be.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What kind of romantic energy do you have?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Find out the vibe you naturally bring into love — and what it means for how you connect.</p>
          <a href="/quiz/romantic-energy" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Romantic Energy Quiz →
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
