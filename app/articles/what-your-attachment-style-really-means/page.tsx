import Image from "next/image";

export const metadata = {
  title: "What Your Attachment Style Really Means | Cocodoco",
  description:
    "How the way you bonded as a child quietly shapes every relationship you have as an adult — and what you can do with that knowledge.",
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
        <p style={{ marginTop: "10px", fontSize: "18px", color: "#374151" }}>Cute quizzes for your mood, personality, and lifestyle 🧁</p>
      </header>

      {nav}

      <article style={{ maxWidth: "860px", margin: "0 auto" }}>
        <p style={{ fontSize: "13px", fontWeight: 700, letterSpacing: "0.08em", color: "#9d174d", textTransform: "uppercase", marginBottom: "12px" }}>Love & Relationships</p>

        <h1 style={{ fontSize: "36px", lineHeight: 1.25, color: "#111827", marginBottom: "16px" }}>
          What Your Attachment Style Really Means
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          The way you learned to connect with people early in life does not stay in childhood. It follows you into every friendship, romance, and close relationship you have as an adult — quietly shaping how you love, how you argue, and how you leave.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1529333166437-7750a6dd5a70?w=800&q=80"
            alt="People connecting"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Where attachment styles come from</h2>
          <p>Attachment theory was developed by psychologist John Bowlby in the mid-twentieth century. His central idea was that the bond formed between a child and their primary caregiver creates a kind of internal template — a set of unconscious beliefs about whether people can be trusted, whether closeness is safe, and whether you are worthy of consistent love.</p>
          <p>If your early caregivers were reliably warm and responsive, you likely learned that relationships are safe and that the people you need will show up. If care was inconsistent, absent, or frightening, you may have developed ways of coping with that uncertainty — and those coping patterns often become your default attachment style in adulthood.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Secure attachment</h2>
          <p>People with a secure attachment style are generally comfortable with both closeness and independence. They do not tend to panic when a partner needs space, nor do they feel abandoned by normal periods of distance. They can express needs without excessive anxiety and receive care without suspicion.</p>
          <p>Secure attachment does not mean a perfect childhood. It means you developed enough consistent experience of being cared for that closeness does not feel threatening. Securely attached people also tend to have more stable, satisfying relationships — not because they are luckier, but because their internal patterns support connection rather than undermining it.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Anxious attachment</h2>
          <p>Anxious attachment typically develops when care was present but inconsistent. You received love sometimes, but never knew quite when it would arrive or when it might disappear. The result is a heightened sensitivity to signals of disconnection — reading into tone of voice, response time, body language, and small behavioral shifts.</p>
          <p>In relationships, anxious attachment can look like a constant need for reassurance, difficulty tolerating uncertainty, or a tendency to seek closeness in ways that can push partners away. Underneath it is not neediness — it is a nervous system that learned early that love was unpredictable and that staying alert was the safest strategy.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Avoidant attachment</h2>
          <p>Avoidant attachment tends to develop when emotional needs were consistently dismissed, minimized, or met with withdrawal. The adaptation is to stop needing — or at least to stop showing need. Avoidant types often value independence highly, feel uncomfortable with emotional vulnerability, and tend to pull back when relationships become too intense or close.</p>
          <p>This does not mean avoidant people do not want connection. Most of them do. But closeness also feels threatening on some level — like a loss of control, a risk of being disappointed, or a demand they may not be able to meet. The protective distance is real even when the desire for closeness underneath it is equally real.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Disorganized attachment</h2>
          <p>Disorganized attachment — sometimes called fearful-avoidant — develops when the source of care was also a source of fear. This creates a fundamental conflict: the people who were supposed to be safe were also unpredictable or frightening. The result is a push-pull dynamic in adult relationships — wanting closeness intensely and also being afraid of it in roughly equal measure.</p>
          <p>People with disorganized attachment often find relationships particularly confusing and painful because they feel pulled in opposite directions simultaneously. Healing here usually benefits greatly from professional support, as the patterns run deep and can be difficult to recognize from the inside.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Can your attachment style change?</h2>
          <p>Yes — and this is one of the most important things to understand. Your attachment style is not a life sentence. It is a learned pattern, and learned patterns can be unlearned. Research consistently shows that people can develop what is called an "earned secure attachment" through therapy, deeply consistent relationships, and deliberate self-awareness work.</p>
          <p>The first step is simply recognizing your pattern without judgment. Most attachment behaviors made perfect sense in the context they developed in. They were adaptations to real circumstances, not character flaws. Understanding that gives you the compassion and clarity needed to begin shifting them, one relationship and one moment at a time.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "14px" }}>Want to discover your attachment style?</p>
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
