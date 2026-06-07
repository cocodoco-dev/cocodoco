import Image from "next/image";

export const metadata = {
  title: "Why We're Afraid to Love — The Psychology Behind Relationship Fear | Cocodoco",
  description:
    "You want connection. And yet something in you hesitates every time love gets real. Here's what that fear is actually about — and where it comes from.",
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

export default function WhyWeAreAfraidToLoveArticle() {
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
          Why We&apos;re Afraid to Love — The Psychology Behind Relationship Fear
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You want closeness. You probably want it quite badly. And yet something in you hesitates the moment love starts to feel real — when the person becomes important, when the stakes go up, when it would actually hurt to lose them. You pull back, or go quiet, or find reasons to doubt. Not because you do not care. Because you do. Relationship fear is one of the most quietly universal human experiences, and it almost never looks like what it is.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1474552226712-ac0f0961a954?w=800&q=80"
            alt="Two people in an intimate, vulnerable moment"
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
            Where relationship fears actually begin
          </h2>
          <p>
            The most well-supported explanation for why people fear love comes from attachment theory — the framework developed by British psychiatrist John Bowlby in the late 1960s and extended by developmental psychologist Mary Ainsworth through her now-famous Strange Situation experiments. Bowlby argued that human beings are born with a biological drive to form close emotional bonds with caregivers, and that the quality of those early bonds creates a lasting internal template — what he called an internal working model — for how relationships are expected to unfold.
          </p>
          <p>
            Ainsworth&apos;s experiments, which studied how infants responded to brief separations from their caregivers, revealed something striking: children who had experienced unpredictable, inconsistent, or emotionally unavailable care developed distinct patterns of coping with closeness and separation. Some became anxiously preoccupied with whether their caregiver would return. Others became avoidant — suppressing their attachment needs as if connection had proven not worth reaching for. A smaller group became disorganized, caught in a painful double bind where the person they most needed was also the person they most feared.
          </p>
          <p>
            These early patterns do not stay in childhood. Decades of follow-up research — including longitudinal studies tracking individuals from infancy through adulthood — have shown that attachment patterns formed in the first years of life are predictive of how people approach romantic relationships much later. The child who learned that asking for closeness led to rejection grows into an adult who may feel a familiar unease when they begin to need someone. The learning happened long before the relationship it now affects.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            Why the brain treats love like a threat
          </h2>
          <p>
            Understanding why relationship fear persists even in objectively safe relationships requires understanding something about how the brain encodes emotional memory. Neuroscientist Joseph LeDoux&apos;s research on the amygdala — the brain&apos;s primary threat-detection structure — showed that emotionally significant events, particularly those involving fear or pain, are encoded through a fast, implicit memory system that operates below conscious awareness. These memories are not stored as narratives you can recall and examine. They are stored as conditioned responses: if this, then danger.
          </p>
          <p>
            When early relational experiences involved pain — rejection, abandonment, unpredictability, or betrayal — the amygdala encoded the cues associated with those experiences as threat signals. Closeness itself. Vulnerability itself. The sensation of needing someone. Over time, these signals become automatic. You do not think your way into relationship fear. You feel it, often before you have any language for what is happening. Your partner says something that triggers the old pattern, and your nervous system responds as though the original wound is occurring right now — because at a neurological level, in some important sense, it is.
          </p>
          <p>
            This is also why logic is so rarely sufficient to resolve relationship fear on its own. You can know, intellectually, that your partner is trustworthy, that this relationship is different from the one that hurt you, that your fear is disproportionate to the current reality. And you can still feel afraid. The threat signal is running on older, faster circuitry than conscious reasoning has access to. The fear is not irrational — it is pre-rational, which is a different thing entirely.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            The six shapes relationship fear takes
          </h2>
          <p>
            Relationship fear is not one single experience. It takes different forms depending on what specifically was painful in earlier relational experiences, and what the nervous system learned to protect against as a result. Psychologists and clinicians who work with relational patterns have identified several distinct configurations that appear repeatedly across different people and different relationships.
          </p>
          <p>
            Fear of abandonment — the dread of being left, suddenly or gradually — tends to produce hypervigilance to a partner&apos;s emotional availability and mood. Fear of rejection — the conviction that one&apos;s authentic self is not quite enough — tends to produce self-editing, performance of lovability, and difficulty expressing needs directly. Fear of intimacy produces a push-pull dynamic: genuine desire for closeness combined with an instinct to create distance when closeness intensifies. Fear of losing oneself — of dissolving into the relationship and forgetting one&apos;s own identity — tends to produce fierce protection of personal space, opinions, and autonomy. Fear of commitment produces the agonizing sense that choosing one thing means losing everything else. And fear of betrayal produces constant, quiet vigilance — an inability to fully relax into trust because the nervous system has learned that people can surprise you in devastating ways.
          </p>
          <p>
            Each of these fears has a different fingerprint, a different behavioral profile, and a different set of relational challenges. But they share a common structure: they are all protective responses to the possibility of a specific kind of pain, running automatically even when the danger they were designed for is no longer present.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            The self-defeating loop: how fear creates what you dread
          </h2>
          <p>
            One of the most painful aspects of relationship fear is the way it can generate the very outcome it is trying to prevent. This is what psychologists sometimes call the self-fulfilling prophecy of attachment — a pattern identified in research by Mario Mikulincer and Phillip Shaver, who have spent decades studying how attachment anxiety and avoidance play out in adult romantic relationships.
          </p>
          <p>
            Someone afraid of abandonment may cling, demand reassurance, or become hyperreactive to their partner&apos;s moods — behaviors that, over time, can create the distance they most fear. Someone afraid of rejection may edit themselves so thoroughly that their partner never truly knows them — and the love they receive can never fully satisfy, because it is being offered to a curated version of who they are. Someone afraid of intimacy may keep pulling back at precisely the moments that would deepen the connection — leaving their partner confused, and themselves lonely despite being in a relationship. Someone afraid of betrayal may monitor and test their partner so persistently that trust never has the conditions to actually develop.
          </p>
          <p>
            This is not a character flaw. It is the predictable behavior of a nervous system that has learned something painful about love and is trying hard not to experience it again. The tragedy is that the protection, over time, becomes the obstacle.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            Why naming your fear is not a small thing
          </h2>
          <p>
            Research on mentalization — the capacity to understand one&apos;s own and others&apos; mental states — developed by psychologist Peter Fonagy and his colleagues at University College London, has shown that the ability to reflect on emotional experience rather than simply being driven by it is one of the strongest predictors of healthy relational functioning. People who can observe their emotional reactions, name them, and hold them with some curiosity rather than being fully fused with them tend to form more secure, satisfying relationships — even when their attachment histories were difficult.
          </p>
          <p>
            This is part of what makes identifying your specific relationship fear genuinely useful. Not as a label to explain away your behavior, but as an act of psychological distance — a shift from being inside the fear to being able to look at it. When you can say &quot;I notice that I am afraid of being abandoned, and that fear is making me read neutrality as withdrawal,&quot; you have created a small but real gap between the automatic threat response and your behavior. That gap is where choice lives.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            What earned security actually looks like
          </h2>
          <p>
            One of the most hopeful findings in attachment research is the concept of earned security — the idea, supported by decades of longitudinal data, that people can develop secure functioning in relationships even when they did not start from a secure base in childhood. Neuroscientist Dan Siegel, who studies the intersection of neuroscience and attachment, describes this process as developing a coherent narrative of your own life: the capacity to understand your relational history, including its painful parts, without being either overwhelmed by it or dismissive of it.
          </p>
          <p>
            Earned security does not mean the fear disappears entirely. It means that the fear becomes a known quantity — something you can recognize, contextualize, and work with rather than something that operates invisibly, moving your behavior without your awareness. Research on couples who have successfully worked through attachment injuries — published in journals including Emotion and Attachment &amp; Human Development — consistently shows that the healing factor is not the absence of difficulty. It is the presence of consistent, responsive repair: the repeated experience of something going wrong in the relationship, being addressed honestly, and surviving. The nervous system slowly learns what it could not learn before — that closeness does not inevitably end in the feared way.
          </p>
          <p>
            That learning is slow and often nonlinear. But it is real. And it begins, almost always, with the same first move: naming what you are afraid of, honestly enough to stop pretending it is not there.
          </p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>
            What is your relationship fear?
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
            Discover the specific fear most quietly shaping how you love — and what it means for the way you connect.
          </p>
          <a
            href="/quiz/relationship-fear"
            style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}
          >
            Take the Relationship Fear Quiz →
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
