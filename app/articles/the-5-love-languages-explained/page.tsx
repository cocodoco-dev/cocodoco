import Image from "next/image";

export const metadata = {
  title: "The 5 Love Languages Explained — And Why Mismatches Hurt So Much | Cocodoco",
  description:
    "You planned something thoughtful. They seemed fine but not exactly moved. You felt unseen. They had no idea. This is what a love language mismatch looks like — and what to do about it.",
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

export default function LoveLanguagesArticle() {
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
          The 5 Love Languages Explained — And Why Mismatches Hurt More Than People Realize
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You planned something thoughtful. They seemed fine but not exactly moved. You felt vaguely unseen. They had no idea anything was wrong. This is what a love language mismatch looks like in real life — not dramatic, not obvious, just a quiet accumulation of feeling unloved by someone who is genuinely trying to love you. And it is one of the most common and most fixable problems in relationships.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1522098543979-ffc7f79a56ea?w=800&q=80"
            alt="Two people sharing a warm moment"
            width={800}
            height={400}
            style={{ width: "100%", height: "auto", display: "block" }}
          />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>Where love languages come from — and why the concept holds up</h2>
          <p>Gary Chapman introduced the five love languages in his 1992 book based on observations from over twenty-five years of couples counseling. His central insight was deceptively simple: people tend to give love in the way they most want to receive it — and those ways differ significantly between individuals. When partners have different primary love languages, both can feel unloved despite both actively trying, because each is speaking in a language the other does not fully register.</p>
          <p>The framework has attracted some criticism for lacking rigorous experimental validation, and that criticism is fair. But subsequent research has offered meaningful support. A 2007 study by Goff, Goddard, Pointer, and Jackson found that congruence between partners' love language preferences was positively associated with relationship satisfaction. John Gottman's independent research on what he calls "bids for connection" — the small, constant attempts partners make to establish emotional contact — maps closely onto Chapman's framework, and his data on relationship outcomes is among the most robust in the field.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Words of Affirmation — when saying it matters most</h2>
          <p>For people whose primary love language is words of affirmation, verbal and written expressions of love, appreciation, and encouragement are not just nice — they are the main channel through which love is actually felt. Hearing "I'm proud of you" or "I love being with you" lands differently for these people than it does for others. It is not that they need constant compliments. It is that spoken acknowledgment is the primary mechanism through which they register being valued.</p>
          <p>The painful mismatch here often involves a partner who shows love through action — fixing things, planning events, handling logistics — and genuinely cannot understand why their partner still seems to need verbal reassurance when the evidence of care is so obvious. To the words-of-affirmation person, the evidence is not obvious. The action is invisible without the words. They are not being demanding. They are speaking a language their partner has not yet learned to speak fluently.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Acts of Service — love as what you do, not what you say</h2>
          <p>For acts-of-service people, love is demonstrated through concrete action. Making dinner, handling a stressful errand, remembering to buy the thing they mentioned, showing up when something needs to be done — these are not just practical gestures. They are love, expressed in the most legible form this person knows. When a partner fails to follow through on things, forgets commitments, or expects them to carry disproportionate logistical weight, it does not just feel inconvenient. It feels like evidence of not being cared for.</p>
          <p>The trap for acts-of-service people is the assumption that their partner should intuitively know what would be helpful. Chapman's original clinical observation was that requests are received very differently from demands — and that clearly expressing what specific actions would feel loving, rather than waiting for a partner to guess, is one of the most practical interventions for this language mismatch.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Receiving Gifts — the symbol, not the object</h2>
          <p>This is the most frequently misunderstood love language because it sounds materialistic when described plainly. It is not. For people whose primary language is receiving gifts, the object itself is almost beside the point. What registers is the evidence of being thought about — the fact that someone was somewhere, doing something, and their mind went to you. A small, inexpensive, perfectly chosen thing communicates more than an expensive but impersonal one.</p>
          <p>Research on gift-giving in relationships, including work by Belk and Coon, confirms that the symbolic meaning of gifts in intimate relationships is distinct from their economic value. The gift functions as a tangible representation of the relationship itself — which is precisely why its absence or apparent thoughtlessness can feel so disproportionately painful to someone for whom this is their primary channel of receiving love.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Quality Time — presence as the point</h2>
          <p>Quality time is not about quantity. It is about undivided attention — being with someone in a way where they can feel that, for this period, you are fully there. For people with this primary love language, a partner scrolling their phone during dinner, being physically present but mentally elsewhere, or constantly rescheduling time together does not just feel disappointing. It registers as a deficit of love, because the specific thing that communicates love to them — genuine, undistracted presence — is absent.</p>
          <p>Gottman's research on what he calls "turning toward" bids for connection is relevant here. His longitudinal studies found that couples who consistently responded to each other's bids for attention and connection — small requests for emotional contact, often not explicitly labeled as such — had dramatically higher relationship satisfaction and stability over time. For quality-time people, these bids are more frequent and more significant. Missing them repeatedly has cumulative effects that are hard to undo.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Physical Touch — beyond romance</h2>
          <p>Physical touch as a love language is not primarily about sex. It is about the full range of physical contact that communicates connection — a hand on the shoulder, sitting close, a spontaneous hug, holding hands while walking. For people with this primary language, touch is a constant low-level communication channel. When it is absent, they do not just miss physical intimacy. They experience a deficit in the ongoing sense of being connected and loved.</p>
          <p>There is robust research on the role of touch in human wellbeing more broadly — Tiffany Field's work at the Touch Research Institute has documented the physiological effects of positive touch on stress hormones, immune function, and emotional regulation. For touch-primary people, these effects are amplified in relational contexts. A partner who is physically affectionate communicates love in the most direct and unambiguous way available to them. A partner who is not — even for reasons entirely unrelated to their feelings — can inadvertently create a consistent experience of emotional disconnection.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The mismatch problem — and the actual solution</h2>
          <p>The most common mistake people make after learning about love languages is trying to identify their partner's language and then perform it as an obligation. This can work in the short term but often feels hollow to the receiving partner, who senses the effort without the genuine feeling behind it. The more sustainable approach is genuine curiosity — actually wanting to understand what makes your partner feel loved, not as a technique but as an extension of caring about them specifically.</p>
          <p>The other underappreciated piece is that people have secondary love languages too, and those shift under stress. Someone whose primary language is quality time may need words of affirmation particularly during periods of self-doubt. Understanding this fluidity — being curious about what your partner needs right now, not just in general — is the practice that makes love languages genuinely useful rather than just an interesting personality label.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>What is your love language?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Discover how you most naturally give and receive love — and what that means for your relationships.</p>
          <a href="/quiz/love-language" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>
            Take the Love Language Quiz →
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
