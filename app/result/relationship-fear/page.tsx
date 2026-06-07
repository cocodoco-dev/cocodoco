"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  fear_abandonment: {
    title: "Your Relationship Fear: Being Left Behind 🌊",
    summary:
      "At the heart of your love life sits a quiet but powerful anxiety — the fear that no matter how good things are, the people you love might one day simply walk away.",
    desc1:
      "This fear does not mean you are clingy or insecure in a surface-level way. It often means you have loved deeply and know exactly how much losing that connection hurts. You may give a lot in relationships — because part of you believes that enough love and effort can prevent the ending you dread.",
    desc2:
      "The fear of abandonment is one of the most common and deeply human relationship fears. It shapes how you show up in love — sometimes through heightened sensitivity to your partner's mood, sometimes through needing reassurance more than you would like, sometimes through staying longer than you should because leaving first feels unbearable.",

    meaning1:
      "This fear often traces back to earlier experiences where love was unpredictable — where someone important disappeared, pulled away, or became emotionally unavailable without clear reason. Your nervous system learned that closeness can end without warning, and that lesson is still running quietly in the background of your relationships.",
    meaning2:
      "In practice, your anxiety often spikes in the space between things. When your partner does not respond quickly, seems a little distant, or changes their behavior in small ways, your brain may interpret those signals as early warnings of departure — even when they are not. The fear is protective, but it can make neutral moments feel charged.",

    showUp1:
      "This fear may show up as a heightened sensitivity to your partner's emotional tone, a tendency to seek reassurance that you are still loved, or a pattern of staying in relationships longer than feels healthy because the alternative — being without the person — feels scarier than the discomfort of staying.",
    showUp2:
      "You may also find yourself doing a great deal of emotional labor to keep the relationship intact, sometimes suppressing your own needs so the other person does not become distant. The irony is that constantly managing the relationship to prevent abandonment can exhaust both you and your partner over time.",

    strengths: "Emotional depth, loyalty, capacity for profound connection",
    strengthDetails:
      "Because you take relationships seriously, you tend to be deeply committed, attentive, and genuinely invested in the people you love. Your fear of abandonment comes paired with a capacity for real emotional depth — you are rarely casual about love, and the people who stay in your life often feel truly seen and cherished by you.",

    watchOut: "Staying in relationships out of fear rather than genuine desire",
    watchOutDetails:
      "The main challenge is the tendency to make relationship decisions based on what you are afraid to lose rather than what actually feels right. You may stay past the point of compatibility, work harder than is reciprocated, or accept less than you deserve because the thought of the relationship ending feels catastrophic. Security cannot be built through holding on harder — it comes from feeling genuinely chosen.",

    growth1:
      "Growth for you often begins with practicing the toleration of uncertainty in small ways. Not every period of quiet in a relationship means something is wrong. Not every change in your partner's energy means they are leaving. Building trust in yourself — that you can survive distance, conflict, and even endings — slowly loosens the grip of this fear.",
    growth2:
      "The healthiest version of your love life is one where your attachment comes from genuine desire for the connection rather than terror of losing it. That shift does not happen all at once — but it begins when you start practicing the belief that you are worth staying for, and that you can be okay even when someone goes.",

    reminder:
      "Being loved does not mean being kept. You are allowed to want someone who actively chooses to stay — not just someone who has not left yet.",
    bestMatch:
      "Someone who communicates consistently and makes their commitment clear through actions, not just words",
  },

  fear_rejection: {
    title: "Your Relationship Fear: Not Being Enough 💌",
    summary:
      "Beneath your relationships runs a persistent, quiet question — am I truly lovable? Not in a dramatic way, but in a pervasive way that shapes how freely you show up in love.",
    desc1:
      "The fear of rejection often does not look like obvious self-doubt. It looks like perfectionism in relationships — editing yourself before speaking, anticipating disapproval, staying carefully within what feels safe to express. You may be highly attuned to how others respond to you, reading micro-signals for signs of acceptance or growing distance.",
    desc2:
      "This fear often means you care deeply about connection and are sensitive to being seen. That sensitivity is a genuine gift — it makes you thoughtful and considerate. But it can also create an internal performance: a version of yourself calibrated to be lovable rather than simply real.",

    meaning1:
      "At its core, the fear of rejection is the fear that if someone truly knew you — the unedited version — they would not choose to stay. This belief usually has roots in earlier experiences where approval felt conditional, where being yourself led to criticism or distance, or where love came with an unspoken price tag attached.",
    meaning2:
      "In relationships, this can create a subtle but exhausting dynamic: you are present, but perhaps not fully yourself. You may hold back opinions, downplay needs, or work extra hard to be agreeable or valuable — not from generosity, but from the underlying worry that your authentic self is not quite enough.",

    showUp1:
      "This fear may show up as a tendency to apologize more than necessary, difficulty expressing needs directly, over-reliance on validation to feel secure, or a pattern of putting others first to the point of self-erasure. It can also appear as difficulty receiving compliments — because if you do not truly believe you deserve them, they can feel hollow.",
    showUp2:
      "You might also avoid initiating in relationships — waiting for others to make the first move so that any rejection will not feel like a verdict on your worth. Or you may stay in relationships longer than feels right because leaving first feels like confirming your deepest fear: that you could not make it work because of something lacking in you.",

    strengths: "Empathy, attentiveness, the ability to make others feel deeply seen",
    strengthDetails:
      "Because you are so sensitive to how others feel, you tend to be an exceptionally attentive and emotionally intelligent partner. Your awareness of social and emotional dynamics means you are rarely careless with the people you care about. You often make others feel valued, noticed, and important — a quality that creates genuine closeness over time.",

    watchOut: "Performing lovability instead of simply being yourself",
    watchOutDetails:
      "The core challenge is that the self-editing driven by this fear creates relationships built on a curated version of you — which means the love you receive can never fully satisfy, because part of you knows it is not the whole you being loved. The paradox is that the thing most likely to create genuine acceptance — being honestly, imperfectly yourself — is also the thing this fear most strongly resists.",

    growth1:
      "Growth for you often begins with small experiments in unedited self-expression. Sharing an opinion you would normally swallow. Stating a need directly. Letting someone see you when you are not at your best. Each time the relationship survives your authenticity, the evidence base for the fear slowly shrinks.",
    growth2:
      "The healthiest version of your love life is one where you feel safe enough to be ordinary, flawed, and real — and to discover that you are loved for exactly that. You are not a project to be perfected into lovability. You are already someone worth knowing.",

    reminder:
      "The people worth keeping will not need you to be perfect. They will need you to be real.",
    bestMatch:
      "Someone consistently affirming who celebrates your authenticity and makes it genuinely safe to be imperfect",
  },

  fear_intimacy: {
    title: "Your Relationship Fear: Getting Too Close 🌿",
    summary:
      "You want real connection — genuinely. But when someone gets close enough to truly see you, something in you quietly pulls back. Not out of coldness, but out of a deep need to protect something essential inside yourself.",
    desc1:
      "The fear of intimacy is often misunderstood as not wanting love or closeness. In reality, people with this fear usually want deep connection very much — they simply find the vulnerability required for it genuinely uncomfortable. The closer someone gets, the more exposed you feel, and exposure can feel threatening in ways that are difficult to articulate.",
    desc2:
      "This fear often looks like self-sufficiency from the outside. You may come across as independent, together, even emotionally cool. But internally, there may be a gap between the closeness you allow others to see and the closeness you actually long for — a gap maintained by a fear of what happens when someone truly knows you.",

    meaning1:
      "Intimacy fear often develops in response to early experiences where emotional exposure led to hurt, disappointment, or feeling fundamentally misunderstood. The nervous system learns that being truly known carries risk — and that maintaining a little emotional distance is the safer option, even when it is also the lonelier one.",
    meaning2:
      "In relationships, this can create a push-pull dynamic: drawing closer when you feel safe, retreating when the closeness intensifies, then experiencing guilt or confusion about why you pulled away from something you wanted. The distance is not indifference — it is self-protection.",

    showUp1:
      "This fear may show up as difficulty sharing personal things even with people you genuinely trust, a tendency to deflect emotional depth with humor or subject changes, physical or emotional withdrawal during vulnerable moments, or a pattern of ending relationships just before they reach a certain depth.",
    showUp2:
      "You may also feel a particular discomfort with being the object of someone's deep emotional need — the feeling that someone is depending on you emotionally can feel like both intimacy and trap simultaneously, triggering the instinct to create breathing room.",

    strengths: "Self-awareness, emotional independence, the capacity for relationships built on genuine choice",
    strengthDetails:
      "Because you are not driven by desperate need for closeness, the connections you do allow in tend to be genuinely chosen and deeply valued. You bring a quality of independence and self-containment to relationships that can be stabilizing. When you do open up, it tends to mean something — which is a rare and meaningful quality in intimacy.",

    watchOut: "Keeping everyone just far enough that the connection never fully forms",
    watchOutDetails:
      "The risk of intimacy fear over time is that the distance you maintain to feel safe eventually becomes the source of a different kind of pain — the loneliness of being surrounded by people who do not fully know you. The protection works, but it works against the very thing you want most.",

    growth1:
      "Growth for you often begins with distinguishing between the vulnerability that leads to intimacy and the exposure that leads to harm. Not every moment of emotional openness is dangerous. Practicing small acts of disclosure — sharing something real, letting someone care for you, staying present during an emotional moment rather than retreating — slowly expands your window of what feels tolerable.",
    growth2:
      "The healthiest version of intimacy for you is not dramatic emotional exposure. It is gradual, chosen, mutual openness — the kind that builds slowly and allows you to stay yourself even as you let someone in. You are allowed to move at your own pace. The goal is not to abandon your limits, but to discover which ones are protecting you and which ones are keeping you alone.",

    reminder:
      "Letting someone close does not mean losing yourself. It means finding out which connections are real enough to hold you, too.",
    bestMatch:
      "Someone patient who allows connection to develop gradually and does not pressure you to open faster than feels safe",
  },

  fear_losing_self: {
    title: "Your Relationship Fear: Disappearing Into Love 🦋",
    summary:
      "Your deepest relationship fear is not about being hurt — it is about losing the thread back to yourself. Of becoming so merged with another person that you forget what you wanted, who you were, and what made you, you.",
    desc1:
      "This fear often belongs to people who are deeply self-aware and who value their inner life greatly. You may have watched others — or experienced yourself — dissolve into a relationship: prioritizing the partner's preferences, muting your own needs, and waking up one day to realize you do not quite know who you are without this person.",
    desc2:
      "The fear of losing yourself in love is often closely connected to a strong sense of identity and an awareness that relationships can ask too much of it. This is not a fear of connection — it is a fear of the way connection can sometimes require self-erasure, especially in relationships where one person's needs consistently dominate.",

    meaning1:
      "At its core, this fear reflects a healthy instinct: that your identity, values, and autonomy are worth protecting. The challenge is that this instinct can sometimes overcorrect — maintaining so much separateness that real intimacy becomes difficult to access.",
    meaning2:
      "In relationships, this fear may show up as a careful guarding of your solo time, your opinions, your preferences, and your social world. You may notice a strong internal reaction when a relationship begins to pull you toward merging — adapting too much, giving up things you love, or feeling like your voice is being gradually absorbed.",

    showUp1:
      "This fear may appear as a reluctance to fully intertwine your life with a partner's, a particular sensitivity to feeling controlled or defined by the relationship, an instinct to assert your independence in ways your partner might not always understand, or difficulty staying fully present when a relationship starts to feel all-consuming.",
    showUp2:
      "You may also find yourself drawn to partners who are strongly independent — not because you do not want closeness, but because closeness with someone who has their own full life feels safer than closeness with someone who needs you to become their entire world.",

    strengths: "Strong sense of self, emotional clarity, the capacity to love without losing your center",
    strengthDetails:
      "Your awareness of your own identity is genuinely rare and valuable. In a relationship landscape where many people lose themselves without noticing, your attentiveness to your own needs, values, and sense of self can be a source of real health — both for you and for a partner who deserves someone with genuine presence, not just role-filling.",

    watchOut: "Protecting your identity so vigilantly that vulnerability and genuine closeness become impossible",
    watchOutDetails:
      "The challenge is that some degree of influence and change is not just inevitable in relationships — it is healthy. Being shaped by someone you love, letting their perspective expand yours, allowing the relationship to matter alongside your individual self — these are not forms of self-loss. They are forms of genuine intimacy.",

    growth1:
      "Growth for you often means learning to distinguish between the influence that enriches you and the enmeshment that erases you. Not every accommodation is capitulation. Not every change means you are disappearing. Practicing flexibility in small ways — letting someone affect you, adapting occasionally without losing your ground — slowly makes the boundary between self and connection feel less like a wall.",
    growth2:
      "The healthiest version of your love life is one where you can be deeply close to another person and still feel completely like yourself — not despite the relationship, but within it. That kind of love does not ask you to disappear. It asks you to be fully present.",

    reminder:
      "Real love does not ask you to shrink. The right person will want all of you — including the parts that do not bend.",
    bestMatch:
      "Someone who has their own full, rich life and who values your independence as much as your closeness",
  },

  fear_commitment: {
    title: "Your Relationship Fear: Making the Wrong Choice 🌀",
    summary:
      "Your relationship fear is not about people — it is about permanence. The thought of locking in, fully committing, and closing off other possibilities can feel like standing at a door you are not sure you can walk back through.",
    desc1:
      "The fear of commitment is often misread as a fear of love, or as not caring enough. But for most people who experience it, it is almost the opposite — they care so much about the choice that the weight of it becomes paralyzing. What if this is not quite right? What if something better exists? What if you regret this?",
    desc2:
      "This fear often comes with an active, searching quality: a tendency to stay in the considering phase of relationships, to delay milestones, to feel a pull toward exit just as things deepen. It can look like avoidance from the outside, but internally it often feels like a genuine struggle between desire for connection and terror of a wrong, irreversible decision.",

    meaning1:
      "Commitment fear often develops in response to witnessing or experiencing relationships that trapped, suffocated, or became something painful and difficult to leave. Your nervous system learned that permanent decisions carry risk — and that keeping options open is the safest way to preserve freedom and wellbeing.",
    meaning2:
      "It can also develop in people with perfectionist tendencies who apply high standards to relationships in the same way they apply high standards to everything: holding out for something that feels unambiguously right, and unable to commit until that certainty arrives — even when certainty about another person never fully does.",

    showUp1:
      "This fear may show up as a pattern of pulling away just as relationships deepen, difficulty making future plans with a partner, a persistent awareness of what you might be missing, or a tendency to end relationships that are fundamentally good because the feeling of rightness is not 100% consistent.",
    showUp2:
      "You may also notice that commitment feels easier in some contexts than others. The issue is rarely about the specific person in front of you — it is about the psychological weight of decision itself. Anything that reduces uncertainty and increases your sense of agency tends to make commitment feel more possible.",

    strengths: "Thoughtfulness, emotional honesty, a genuine desire to make real and considered choices",
    strengthDetails:
      "Your caution around commitment is not carelessness — it reflects a depth of consideration that, when channeled well, leads to more intentional and honest relationships. You are unlikely to commit half-heartedly, to stay out of inertia, or to make promises you do not mean. When you do choose fully, it tends to be with real intention behind it.",

    watchOut: "Waiting for certainty that never fully arrives, or leaving good relationships because they do not feel perfect",
    watchOutDetails:
      "The core difficulty is that commitment requires tolerating uncertainty. No relationship offers a guarantee of rightness, and the feeling of 'this is definitely it' is rarely as stable as commitment fear requires it to be. Waiting for that certainty before committing often means waiting forever — because certainty lives in the past, not in decisions about the future.",

    growth1:
      "Growth for you often means reframing what commitment actually is. It is not a door that closes. It is a direction that can be chosen again each day. Practicing the idea that commitment is a renewable decision — not a permanent trap — can make the initial step feel less like losing your freedom and more like exercising it.",
    growth2:
      "The healthiest version of commitment for you is one that is chosen consciously and revisited honestly — not forced, and not infinitely delayed. You are allowed to need time. The goal is just to make sure that time is being used to discern what you genuinely want, not to avoid a decision that scares you.",

    reminder:
      "Commitment is not a trap. It is a daily choice. You are allowed to choose carefully — just not endlessly.",
    bestMatch:
      "Someone patient and genuinely secure who understands that your caution is not rejection, and does not pressure you into a timeline",
  },

  fear_betrayal: {
    title: "Your Relationship Fear: Being Blindsided 🔍",
    summary:
      "Your deepest relationship fear is not about conflict or endings — it is about deception. Of trusting someone completely and discovering, too late, that what you believed about them was not real.",
    desc1:
      "This fear often belongs to people who are perceptive, loyal, and who take trust seriously. You do not give your trust easily or carelessly — and when you do, you give it fully. Which is precisely why the idea of that trust being broken is so devastating: it would not just be painful, it would shatter something fundamental about how you understand people.",
    desc2:
      "The fear of betrayal can show up in various forms: fear of infidelity, fear of emotional deception, fear of discovering that someone's motives were never what they seemed. At its core, it is a fear of being naive — of having your hope and openness used against you.",

    meaning1:
      "This fear often has roots in a specific experience: a relationship or early environment where trust was broken in a significant way. Once the nervous system has learned that people can surprise you in devastating ways, it becomes vigilant — scanning for inconsistencies, monitoring patterns, staying alert for the signal that says something does not add up.",
    meaning2:
      "It can also develop in highly empathic people who are good at reading others — and who therefore know, on some level, that they are also quite easy to read. There is a specific discomfort in knowing that someone who wanted to could learn exactly how to get inside your trust and use it.",

    showUp1:
      "This fear may show up as difficulty fully relaxing into a relationship even when things seem good, a heightened sensitivity to small inconsistencies in what a partner says or does, a tendency to test loyalty in subtle ways, or a habit of staying emotionally slightly back from full trust as a form of protection.",
    showUp2:
      "You may also find that your fear of betrayal makes you exceptionally loyal yourself — because you understand viscerally what betrayal feels like, you go out of your way not to be the person who does it to someone else.",

    strengths: "Perceptiveness, loyalty, the ability to build genuinely trustworthy relationships",
    strengthDetails:
      "Your heightened attention to honesty and consistency makes you an exceptionally trustworthy and perceptive partner. You rarely miss what others gloss over, and the relationships you build are usually characterized by a depth of honesty that comes from having high standards for realness. People who earn your trust tend to be truly worthy of it.",

    watchOut: "Treating vigilance as protection when it sometimes functions as a wall that keeps genuine trust out",
    watchOutDetails:
      "The challenge is that constant vigilance, while it can catch real problems, also makes it difficult for genuine trustworthiness to land. When you are always watching for the catch, it becomes hard to feel the safety of someone who is in fact exactly who they say they are. The protection from betrayal can sometimes become the prevention of full connection.",

    growth1:
      "Growth for you often involves learning to distinguish between intuition and anxiety — between reading a real signal and interpreting a neutral moment through the lens of past pain. Not every inconsistency is a warning sign. Not every unexplained moment is the beginning of a discovery. Practicing the ability to hold uncertainty without immediately moving toward suspicion slowly expands what feels safe.",
    growth2:
      "The healthiest version of trust for you is not blind faith. It is informed openness — the willingness to extend trust in proportion to what someone has actually shown you, rather than withholding it entirely until proof makes it risk-free. Real trust is always a little vulnerable. The people who deserve yours will handle that with care.",

    reminder:
      "You have been careful with your heart for good reason. The right person will make it worth opening — not because they are perfect, but because they are honest.",
    bestMatch:
      "Someone whose actions consistently match their words, who values transparency, and who understands that earning your trust is a privilege",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "fear_abandonment";
  const r = results[key];

  const [copied, setCopied] = useState(false);

  const shareUrl = useMemo(() => {
    if (typeof window === "undefined") return "";
    return window.location.href;
  }, []);

  async function copyLink() {
    try {
      await navigator.clipboard.writeText(shareUrl);
      setCopied(true);
      setTimeout(() => setCopied(false), 1200);
    } catch {
      alert("Copy failed. Please copy from the address bar.");
    }
  }

  const adBoxStyle = {
    width: "100%",
    height: "110px",
    borderRadius: "14px",
    border: "1px dashed #f2a7b8",
    background: "rgba(255, 255, 255, 0.6)",
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    color: "#9ca3af",
    fontSize: "14px",
  } as const;

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
        fontFamily: "Arial, sans-serif",
        padding: "42px 18px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(860px, 100%)", textAlign: "center" }}>
        <p
          style={{
            margin: "0 0 10px",
            fontSize: "13px",
            fontWeight: 700,
            letterSpacing: "0.08em",
            color: "#9d174d",
            textTransform: "uppercase",
          }}
        >
          Love & Relationships Personality Result
        </p>

        <h1
          style={{
            fontSize: "40px",
            lineHeight: 1.2,
            marginBottom: "12px",
            color: "#111827",
          }}
        >
          {r.title}
        </h1>

        <p
          style={{
            fontSize: "20px",
            fontWeight: 700,
            color: "#374151",
            marginBottom: "22px",
            lineHeight: 1.7,
          }}
        >
          {r.summary}
        </p>

        <div style={{ ...adBoxStyle, marginBottom: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>

        <div
          style={{
            background: "rgba(255,255,255,0.76)",
            border: "1px solid #f2a7b8",
            borderRadius: "18px",
            padding: "24px",
            textAlign: "left",
            lineHeight: 1.8,
            color: "#374151",
            boxShadow: "0 10px 30px rgba(0,0,0,0.03)",
          }}
        >
          <p style={{ marginTop: 0 }}>{r.desc1}</p>
          <p>{r.desc2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What this fear really means
          </h2>
          <p>{r.meaning1}</p>
          <p>{r.meaning2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            How this fear shows up in your life
          </h2>
          <p>{r.showUp1}</p>
          <p>{r.showUp2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            Your strengths
          </h2>
          <p style={{ marginBottom: "10px" }}>
            <strong>Core strengths:</strong> {r.strengths}
          </p>
          <p>{r.strengthDetails}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            What may feel difficult
          </h2>
          <p style={{ marginBottom: "10px" }}>
            <strong>Watch out for:</strong> {r.watchOut}
          </p>
          <p>{r.watchOutDetails}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            Growth path
          </h2>
          <p>{r.growth1}</p>
          <p>{r.growth2}</p>

          <h2
            style={{
              fontSize: "22px",
              fontWeight: 700,
              marginTop: "26px",
              marginBottom: "12px",
              color: "#111827",
            }}
          >
            A small reminder for you
          </h2>
          <p style={{ marginBottom: "18px" }}>{r.reminder}</p>

          <div style={{ marginTop: "18px" }}>
            <p style={{ margin: "10px 0" }}>
              <strong>Best match:</strong> {r.bestMatch}
            </p>
          </div>
        </div>

        <div
          style={{
            display: "flex",
            gap: "12px",
            flexWrap: "wrap",
            justifyContent: "center",
            marginTop: "22px",
          }}
        >
          <button
            onClick={copyLink}
            style={{
              padding: "12px 22px",
              background: copied ? "#22c55e" : "#111827",
              color: "white",
              borderRadius: "10px",
              border: "none",
              cursor: "pointer",
              fontWeight: "bold",
            }}
          >
            {copied ? "Copied!" : "Share result"}
          </button>

          <a
            href="/quiz/relationship-fear"
            style={{
              padding: "12px 22px",
              background: "#ff8fab",
              color: "white",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
            }}
          >
            Try again
          </a>

          <a
            href="/"
            style={{
              padding: "12px 22px",
              background: "white",
              color: "#111827",
              borderRadius: "10px",
              textDecoration: "none",
              fontWeight: "bold",
              border: "1px solid #e5e7eb",
            }}
          >
            Other tests
          </a>
        </div>

        <div style={{ ...adBoxStyle, marginTop: "22px" }}>
          Ad Space (Google AdSense will go here)
        </div>
      </div>
    </main>
  );
}

export default function RelationshipFearResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}
