import Image from "next/image";

export const metadata = {
  title: "The Psychology of Being the Main Character in Your Own Life | Cocodoco",
  description:
    "Most people drift through life as supporting characters in someone else's story. The psychology of why — and how to actually claim the protagonist role — is more interesting than it sounds.",
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

export default function MainCharacterArticle() {
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
          The Psychology of Being the Main Character in Your Own Life
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          There is a version of you that moves through life as if you are fully the protagonist — making deliberate choices, treating your experiences as meaningful, narrating your own growth rather than waiting for someone else to notice it. Most people spend significant portions of their lives as supporting characters in other people&apos;s stories. The psychology of why that happens — and what it actually takes to change it — is more substantive than the internet meme version suggests.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=800&q=80" alt="Person walking confidently as the main character" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Narrative identity — why stories are how we understand ourselves</h2>
          <p>Developmental psychologist Dan McAdams has spent decades studying what he calls narrative identity — the internalized, evolving story a person constructs about their own life. His research, published across hundreds of studies, consistently finds that the way people narrate their life story is one of the strongest predictors of psychological wellbeing, resilience, and sense of purpose. People who construct their lives as coherent, meaningful narratives — where experiences connect, where difficult periods are meaningful rather than random, where there is direction and growth — show significantly better mental health outcomes than those who experience their lives as a series of disconnected or meaningless events.</p>
          <p>This is the psychological foundation of the main character concept. Being the main character in your own life is not narcissism. It is narrative agency — the capacity to construct yourself as the active, meaning-making center of your own experience rather than a passive recipient of whatever happens to you. That distinction, research suggests, makes a profound difference to how you experience your life and how you function within it.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Locus of control — the psychology of agency</h2>
          <p>In 1954, psychologist Julian Rotter introduced the concept of locus of control — the degree to which people believe that events in their life result from their own actions versus external forces beyond their control. People with an internal locus of control tend to believe that their choices, efforts, and decisions meaningfully shape their outcomes. People with an external locus of control tend to attribute outcomes primarily to luck, other people, or circumstances.</p>
          <p>Decades of research have established that internal locus of control is associated with higher academic achievement, better health behaviors, greater career success, more effective coping with adversity, and higher life satisfaction across cultures. The mechanism is straightforward: if you believe your actions matter, you take more deliberate action. If you believe outcomes are determined by forces outside your control, you take less initiative, invest less effort in goal pursuit, and recover more slowly from setbacks.</p>
          <p>Being the main character in your own life is, in psychological terms, largely a function of developing a more internal locus of control — not in a delusional sense that ignores real external constraints, but in the realistic sense of focusing your attention and energy on what is actually within your sphere of influence rather than what is not.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why most people default to supporting character mode</h2>
          <p>Self-determination theory, developed by Edward Deci and Richard Ryan, proposes that humans have three fundamental psychological needs: autonomy (the sense of acting from genuine choice), competence (the sense of being effective), and relatedness (meaningful connection with others). When these needs are chronically unmet — in childhood, in educational environments, in workplaces — people often develop what Deci and Ryan call controlled motivation: doing things because of external pressure, fear, or obligation rather than genuine interest or chosen value.</p>
          <p>Supporting character mode is often the result of chronic controlled motivation. When your choices have consistently been overridden, when your preferences have been treated as irrelevant, when taking initiative has repeatedly led to criticism or failure, the nervous system learns to defer. Staying small, following others&apos; lead, and treating other people&apos;s needs and preferences as more real than your own become adaptive strategies. They were, at some point, genuinely protective. They become problematic when they persist beyond the conditions that created them.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The redemption arc — finding meaning in your difficult chapters</h2>
          <p>One of McAdams&apos; most striking research findings is the importance of what he calls the redemption narrative — the capacity to reframe difficult or painful life experiences as meaningful, as chapters that led somewhere, as part of a story that is still going rather than evidence that the story is broken. In his studies, people whose life narratives contained redemption sequences — where bad events were followed by meaningful growth or positive outcomes — showed significantly higher levels of generativity (concern for future generations), psychological wellbeing, and life satisfaction.</p>
          <p>This does not mean forcing toxic positivity onto genuinely painful experiences or pretending that suffering was secretly fine. It means the capacity to eventually locate meaning within difficulty — to say not "that was fine" but "that happened, and here is how it is part of a larger story that still has somewhere to go." That capacity, McAdams&apos; research suggests, is one of the most powerful predictors of long-term psychological resilience.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The line between protagonist mindset and self-absorption</h2>
          <p>A genuine concern about the main character concept is its potential to tip into self-absorption — treating your own narrative as so central that other people become props or obstacles rather than protagonists of their own stories. The research on narcissism is clear that this version of main character energy is associated with poorer relationships, reduced empathy, and ultimately less wellbeing, not more.</p>
          <p>The distinction that matters is between narrative agency and narrative supremacy. Claiming yourself as the protagonist of your own life does not require treating others as supporting characters in yours. In fact, the most psychologically healthy version of narrative identity — the one associated with the best outcomes in McAdams&apos; research — involves the recognition that other people are equally complex, equally the centers of their own rich experience, and that meaningful connection with them is one of the most important chapters in your own story.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to claim the protagonist role deliberately</h2>
          <p>The practical starting point is attention — specifically, where you direct it. Supporting character mode is characterized by attention organized primarily around other people: what they think, what they need, what they expect, whether they approve. Protagonist mode is characterized by attention that includes yourself as a genuine variable: what do I think, what do I need, what do I actually want to do here, independent of external validation?</p>
          <p>This sounds simple and is genuinely difficult, particularly for people who have spent years in high-approval-seeking or high-deference modes. The shift happens gradually, through practice — through repeatedly asking yourself what you actually think before asking what others think, through making small choices based on genuine preference rather than anticipated approval, through narrating your own experiences to yourself with the same interest and generosity you might extend to a person you care about. Over time, and with sufficient repetition, the internal narrator changes. And when the internal narrator changes, the experience of moving through your own life changes with it.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What kind of main character are you?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Find out the cinematic role your energy naturally plays — and what it says about your story.</p>
          <a href="/quiz/main-character" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Main Character Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
