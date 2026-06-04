import Image from "next/image";

export const metadata = {
  title: "Why You Feel Everything More Deeply Than Others | Cocodoco",
  description:
    "You cry at scenes no one else noticed. You feel someone else's embarrassment in your own body. You are not too sensitive — you are wired differently. Here's the science.",
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

export default function FeelDeeplyArticle() {
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
          Why You Feel Everything More Deeply Than Others — And Why That Is Not a Weakness
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You watch a film and cry at a scene no one else noticed. You feel someone else&apos;s embarrassment as if it were happening to you. You replay a conversation from three days ago and feel it as fresh as the moment it happened. You have probably been told you are too sensitive. You are not. You are wired differently — and there is forty years of research explaining exactly how and why.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80" alt="Person feeling deeply" width={800} height={400} style={{ width: "100%", height: "auto", display: "block" }} />
        </div>
        <p style={{ fontSize: "12px", color: "#9ca3af", marginBottom: "8px", textAlign: "right" }}>Photo by Unsplash</p>

        {adBox}

        <div style={{ background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "28px", lineHeight: 1.9, color: "#374151", fontSize: "16px" }}>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "12px" }}>The science of high sensitivity — it is neurological, not emotional</h2>
          <p>In the early 1990s, psychologist Elaine Aron identified a trait she called Sensory Processing Sensitivity, or SPS — the neurological tendency to process information from the environment more thoroughly and deeply than average. She estimated that approximately 15 to 20 percent of the population carries this trait, and her subsequent decades of research have consistently found the same proportion across cultures, ages, and even across other species — suggesting this is an evolutionarily stable trait rather than a modern phenomenon or a disorder.</p>
          <p>What distinguishes high sensitivity at a neurological level is depth of processing. fMRI studies comparing highly sensitive individuals to less sensitive ones show significantly more activation in areas of the brain associated with awareness, empathy, and integration of sensory information when processing emotional stimuli. This is not a metaphor. Highly sensitive people are literally processing more — noticing more nuance, registering more emotional content, integrating more contextual information — than others do with the same input. The experience of feeling everything more intensely is a direct consequence of a nervous system that is doing more work with the same raw material.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Why you replay things others forget</h2>
          <p>One of the most common experiences reported by highly sensitive people is the tendency to replay interactions, particularly negative or ambiguous ones, long after they have ended. A comment that seemed slightly off. A moment that felt charged but was never addressed. A tone that did not match the words. These things are noticed, filed, and returned to in ways that people with lower sensitivity simply do not experience.</p>
          <p>This happens for a straightforward neurological reason: when the brain processes something as emotionally significant — even subtly significant — it encodes it more deeply and returns to it during memory consolidation. Highly sensitive people have a lower threshold for what registers as emotionally significant. This means more experiences get encoded at this deeper level, and more material is available for later processing. The replay is not rumination in the clinical sense. It is deep processing — the nervous system doing what it was built to do, which is extract every available bit of information from an experience.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>Emotional granularity — feeling more, naming more precisely</h2>
          <p>Neuroscientist Lisa Feldman Barrett&apos;s research on emotional granularity adds another dimension to understanding deep feeling. Barrett found that people vary significantly in their capacity for emotional granularity — the ability to make fine-grained distinctions between emotional states, identifying not just "bad" but specifically disappointed, betrayed, deflated, or bereft. Higher emotional granularity is associated with better emotional regulation, better mental health outcomes, and better social functioning.</p>
          <p>Highly sensitive people tend to score higher on emotional granularity — not because they are more emotional in a chaotic sense, but because they process emotional information more thoroughly and therefore have richer, more differentiated emotional experience. The intensity of feeling is inseparable from the depth of perception. You feel more because you perceive more. These are not separate things.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>The gift — what deep feeling actually enables</h2>
          <p>Aron&apos;s research consistently finds that high sensitivity, while associated with greater reactivity to negative stimuli, is equally associated with greater responsiveness to positive ones. Highly sensitive people experience beauty more intensely, feel gratitude more acutely, and are more moved by art, music, and nature than their less sensitive counterparts. The same nervous system that makes a harsh criticism feel devastating also makes a sunset feel transcendent.</p>
          <p>The research on empathy is particularly relevant. Highly sensitive people show greater activation in mirror neuron systems — the neural networks associated with understanding and sharing others&apos; emotional states. This translates directly into interpersonal skill: the capacity to sense what someone needs before they have said it, to read emotional undercurrents that others miss, to be genuinely present with someone in pain rather than waiting for it to resolve. These are not soft skills in a dismissive sense. They are some of the most valuable relational capacities humans possess.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>When feeling deeply becomes overwhelming</h2>
          <p>The challenge of high sensitivity is not the sensitivity itself but the mismatch between how the nervous system is wired and environments designed for less sensitive processing. Loud, stimulating, fast-paced, emotionally complex environments are simply more expensive for a highly sensitive nervous system — they require more processing, more recovery time, and more deliberate management.</p>
          <p>This is where highly sensitive people often internalize the problem as personal failure. They conclude that they are too much, too reactive, too easily affected. The research tells a different story. The trait itself is neutral — its impact depends almost entirely on context. In calm, supportive, low-overstimulation environments, highly sensitive individuals tend to thrive more than average. In chronically high-stimulation, harsh, or emotionally unpredictable environments, they struggle more. The environment is often the variable, not the person.</p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>How to work with your sensitivity rather than against it</h2>
          <p>The most important reframe is moving from seeing high sensitivity as a deficit to manage toward seeing it as a trait to design your life around. This means being more deliberate about environments — the amount of stimulation you tolerate before needing recovery, the kinds of social situations that energize versus drain, the creative and intellectual contexts where deep processing becomes an asset rather than a liability.</p>
          <p>It also means learning to distinguish between productive deep processing and unproductive rumination. Deep processing that generates new insight, creative output, empathic understanding, or useful reflection is sensitivity working as designed. Repetitive cycling through the same emotional material without resolution or new information is the nervous system stuck, not processing. The distinction matters because the response is different: the former needs space and time, the latter needs interruption and redirection.</p>
          <p>Perhaps most importantly, it means developing the capacity to advocate for your own needs without framing them as weaknesses. Needing quiet after social intensity is not antisocial. Needing time to process a significant conversation before responding is not avoidance. Feeling things more intensely than others is not immaturity. It is a different neurological calibration — one that, understood and worked with deliberately, tends to produce people of unusual depth, creativity, and relational wisdom.</p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>How emotionally deep are you?</p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>Take the quiz to discover your emotional age — and what it says about how you experience the world.</p>
          <a href="/quiz/emotional-age" style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}>Take the Emotional Age Quiz →</a>
        </div>

        {adBox}

        <div style={{ textAlign: "center", marginTop: "8px" }}>
          <a href="/articles" style={{ color: "#9ca3af", fontSize: "14px", textDecoration: "none" }}>← Back to Articles</a>
        </div>
      </article>
    </main>
  );
}
