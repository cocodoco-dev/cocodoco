import Image from "next/image";

export const metadata = {
  title: "What Heartbreak Actually Does to You — And Why Everyone Heals Differently | Cocodoco",
  description:
    "Heartbreak is not just emotional. It changes your brain, your body, and your behavior — and why you recover the way you do is not random. Here's the science.",
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

export default function WhatHeartbreakDoesToYouArticle() {
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
          What Heartbreak Actually Does to You — And Why Everyone Heals Differently
        </h1>

        <p style={{ fontSize: "18px", color: "#4b5563", lineHeight: 1.8, marginBottom: "24px" }}>
          You already know it hurts. What you might not know is that heartbreak is not purely emotional — it changes your brain chemistry, activates your physical pain system, and leaves marks on your behavior that can last long after you think you have moved on. And the reason your best friend got over their breakup in two months while you are still struggling at six is not a measure of how much you loved, how strong you are, or how well-adjusted you are. It is something more specific than that.
        </p>

        <div style={{ borderRadius: "16px", overflow: "hidden", marginBottom: "8px" }}>
          <Image
            src="https://images.unsplash.com/photo-1499209974431-9dddcece7f88?w=800&q=80"
            alt="Person alone, looking out a window"
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
            Heartbreak is a physical event, not just an emotional one
          </h2>
          <p>
            One of the most important findings in modern social neuroscience is that the brain does not clearly distinguish between social pain and physical pain. In a landmark 2003 study, psychologist Naomi Eisenberger and her colleagues at UCLA used fMRI imaging to show that social exclusion — being left out, rejected, or cut off from connection — activates the same brain region as physical injury: the dorsal anterior cingulate cortex, the area associated with the distress component of physical pain. The study used a simple computer game in which participants were gradually excluded from play by other players, but the neural response was strikingly similar to what would register for a moderate physical hurt.
          </p>
          <p>
            This finding reframes heartbreak entirely. When you say it hurts, you are not being metaphorical. The same neural circuitry that registers a burned hand is processing your loss. Subsequent research by Ethan Kross at the University of Michigan went further: brain scans of people shown photos of their ex-partners and asked to recall the breakup showed activity in regions associated with physical pain perception, including the secondary somatosensory cortex and the dorsal posterior insula. The body is involved. The pain is real in the most literal neurological sense available to us.
          </p>
          <p>
            Beyond the brain, heartbreak also activates the body&apos;s stress response system. The hypothalamic-pituitary-adrenal axis — the HPA axis, which governs cortisol release — goes into sustained activation during significant loss. Elevated cortisol affects sleep, appetite, immune function, and cognitive performance, which is why heartbreak can feel like being mildly ill for weeks. The fatigue is real. The difficulty concentrating is real. The body is doing something, not just the mind.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            Why the brain treats lost love like withdrawal
          </h2>
          <p>
            Biological anthropologist Helen Fisher spent years using fMRI technology to study what happens in the brains of people who have recently been rejected in love. Her findings, published in the Journal of Neurophysiology, showed that people looking at photos of a partner who had recently left them showed intense activity in the ventral tegmental area and the nucleus accumbens — the core of the brain&apos;s dopamine reward system. These are the same regions associated with craving, motivation, and addiction.
          </p>
          <p>
            What this means is that the brain does not experience romantic love primarily as an emotion — it experiences it as a motivational state, similar to hunger or thirst. When that source of reward disappears, the dopamine system does not simply reset. It craves. The intrusive thoughts about your ex, the compulsive checking of their social media, the inability to stop thinking about them even when you know it is not helping — these are not signs of weakness or excessive attachment. They are the neurological signature of a reward system that has lost its source and has not yet downregulated.
          </p>
          <p>
            This also explains why behaviors that reinforce contact with the person — rereading old messages, looking at photos, reaching out — tend to make recovery slower rather than faster. Each exposure reactivates the dopamine response, reinforcing the neural pathway rather than allowing it to weaken through disuse. The brain, in a sense, needs to be weaned off the person the same way it would need to be weaned off any other powerful reward.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            Why some people cannot stop thinking about their ex
          </h2>
          <p>
            One of the most reliable predictors of how long recovery takes is whether someone engages in rumination — the repetitive, passive focus on negative feelings and their possible causes and consequences. Psychologist Susan Nolen-Hoeksema, who spent decades researching rumination at Yale, found that ruminative response style is one of the strongest predictors of prolonged depression following loss. People who ruminate tend to stay in grief longer not because their grief is more severe, but because the mental style of circling the same painful territory prevents the emotional processing that allows grief to move.
          </p>
          <p>
            Rumination looks like thinking, but it functions differently from genuine reflection. Reflection involves actively working through a problem to reach new understanding. Rumination involves returning to the same questions — why did this happen, what did I do wrong, what could I have done differently — without actually generating new answers. The loop runs, but it does not resolve. And each cycle of the loop tends to amplify the emotional distress rather than diminish it, because the focus is on what is painful rather than on what is actionable or meaningful.
          </p>
          <p>
            Not everyone ruminates equally. Research suggests that ruminative response style is partly temperamental, partly learned, and substantially influenced by anxiety levels and attachment style. People with anxious attachment — who tend toward hypervigilance about relationship security — are more likely to ruminate following breakups, while people with avoidant attachment are more likely to suppress. Neither strategy tends to produce particularly efficient healing, which is one of the reasons attachment style consistently predicts recovery trajectories in separation research.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            Why everyone heals at a different speed
          </h2>
          <p>
            Psychologist George Bonanno at Columbia University has spent much of his career studying how people respond to significant loss — including divorce and relationship endings — and his findings challenge the prevailing cultural narrative about grief. Rather than a single expected trajectory, Bonanno and his colleagues identified multiple distinct recovery patterns in a study published in Psychological Science. Some people showed rapid recovery. Some showed prolonged distress. Some showed delayed reactions — appearing fine initially and then declining later. And a substantial proportion — often larger than expected — showed genuine resilience: significant loss followed by minimal long-term disruption to functioning.
          </p>
          <p>
            What predicted which trajectory someone followed was not the severity of the loss, but a combination of factors including prior mental health, the quality of social support available, the meaning attributed to the loss, and — critically — the individual&apos;s characteristic way of processing difficult experience. People who had developed flexible coping strategies, who could draw on positive emotions even during grief, and who had access to strong social support networks showed the most resilient trajectories. People whose coping repertoires were narrower — who relied primarily on suppression, or whose social networks were thin — tended toward prolonged recovery.
          </p>
          <p>
            This does not mean faster healing is better healing. Bonanno&apos;s research consistently found that resilient people still felt the loss — they were not simply avoiding it. The difference was in how efficiently their emotional system processed and integrated the experience rather than remaining fixed on it.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            What your heartbreak style has to do with how long it lasts
          </h2>
          <p>
            The way you characteristically respond to heartbreak — whether you grieve openly, stay busy, overthink, hold on, rebuild, or close off — shapes not just the experience of the loss but its duration and completeness. Research by David Sbarra and colleagues at the University of Arizona, studying emotional recovery following marital separation, found that people who engaged in expressive processing of their grief — articulating what they felt, making meaning of the experience, and allowing themselves to feel the loss fully — showed faster physiological recovery (measured through cortisol patterns) than those who suppressed or avoided emotional engagement.
          </p>
          <p>
            The finding that emotional expression accelerates recovery is consistent across a wide range of loss research, and it has a biological explanation: emotional processing appears to regulate the HPA axis, allowing the cortisol response to the loss to gradually downregulate. Suppression, by contrast, maintains physiological arousal — keeping the stress response active even when the conscious mind has moved on. This is part of why people who appear to recover quickly sometimes find that old grief surfaces unexpectedly months later, when their defenses are down and the unprocessed material finally comes through.
          </p>

          <h2 style={{ fontSize: "22px", fontWeight: 700, color: "#111827", marginTop: "28px", marginBottom: "12px" }}>
            What healing actually looks like — and what does not help
          </h2>
          <p>
            Perhaps the most persistent myth about heartbreak recovery is that time alone heals it. Time is necessary, but it is not sufficient. What matters is what happens during that time — whether the emotional work of processing and integrating the loss is being done, or whether the time is simply passing while the grief remains static underneath.
          </p>
          <p>
            Research consistently identifies several factors that genuinely support recovery. Social connection — not distraction, but real emotional contact with people who can witness the grief and offer genuine support — is one of the most reliable. Physical activity reduces cortisol, regulates mood through endorphin and BDNF pathways, and appears to support the neuroplastic changes involved in moving on from a significant attachment. Meaning-making — finding something true and important that the experience revealed about yourself, your needs, or what you want — helps integrate the loss into identity rather than leaving it as an open wound.
          </p>
          <p>
            What tends not to help, or to slow recovery: contact with the ex that reactivates the dopamine response without creating real resolution; rumination that recycles the same painful questions without generating new understanding; and emotional suppression that keeps grief beneath the surface while maintaining physiological stress. There is also evidence, from research on rebound relationships, that using new romantic connection primarily as a mechanism to avoid processing loss tends to produce less satisfying relationships and slower resolution of the original grief.
          </p>
          <p>
            Healing, in the end, is not the erasure of the relationship from memory or feeling. It is integration — the loss becoming part of your story rather than the story itself. Neuroscientists studying emotional memory consolidation suggest that the goal is not to weaken the neural traces of the relationship but to build new associations and narratives around them, so that memories of the person can be accessed without triggering the full distress response of active loss. That process cannot be rushed. But it also cannot be avoided. The only way through is through — and knowing that is itself, sometimes, a small relief.
          </p>

        </div>

        <div style={{ marginTop: "28px", background: "rgba(255,255,255,0.76)", border: "1px solid #f2a7b8", borderRadius: "18px", padding: "24px", textAlign: "center" }}>
          <p style={{ fontSize: "16px", fontWeight: 700, color: "#111827", marginTop: 0, marginBottom: "8px" }}>
            What is your heartbreak style?
          </p>
          <p style={{ fontSize: "14px", color: "#6b7280", marginBottom: "16px" }}>
            Discover how you move through loss in love — and what it reveals about the way you grieve, protect yourself, and eventually heal.
          </p>
          <a
            href="/quiz/heartbreak-style"
            style={{ display: "inline-block", padding: "12px 28px", background: "linear-gradient(135deg, #ff8fab 0%, #fb7185 100%)", color: "white", borderRadius: "14px", textDecoration: "none", fontWeight: 700, fontSize: "16px" }}
          >
            Take the Heartbreak Style Quiz →
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
