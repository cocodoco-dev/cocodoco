"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  vintage_romance: {
    title: "Vintage Romance 📜",
    summary:
      "Your soul feels most at home in Vintage Romance — soft, poetic, and full of emotional depth, beauty, and longing.",
    desc1:
      "At your core, you are drawn to a world that feels slower, softer, and more emotionally meaningful. Your inner self naturally leans toward tenderness, symbolism, and the kind of beauty that lingers rather than shouts. You may often feel connected to old letters, rainy windows, piano melodies, antique details, and the atmosphere of love that exists somewhere between memory and imagination.",
    desc2:
      "What makes this era feel right for you is not simply nostalgia. It is emotional texture. You are someone who often senses the invisible mood of things — the sadness inside beauty, the longing inside hope, the quiet significance of fragile moments. Your soul is not searching for noise. It is searching for meaning wrapped in softness.",
    meaning1:
      "This result often means you are someone who experiences life through emotional atmosphere. You may care deeply about beauty, words, memory, and the small details that make a moment feel sacred. Even if you live in a fast world, part of you may still be reaching for slowness, sincerity, and emotional richness.",
    meaning2:
      "Because of that, you may sometimes feel out of place in environments that seem too loud, rushed, or superficial. Your gift is that you bring a kind of tenderness and depth into life that many people quietly crave but do not always know how to protect. You remind the world that softness can still be powerful.",
    showUp1:
      "In real life, this energy can show up as romantic sensitivity, love of old music or vintage aesthetics, attachment to emotional memory, and a strong appreciation for beauty that feels intimate rather than flashy. You may be someone who treasures meaningful conversations, symbolic objects, and the feeling of emotional closeness.",
    showUp2:
      "You may also carry a quiet dreaminess that makes people feel calm, nostalgic, or emotionally understood around you. The challenge is that when reality feels too harsh or unromantic, you may withdraw into longing instead of allowing beauty to exist in imperfect forms. Your soul may need both tenderness and grounding.",
    strengths: "Softness, emotional depth, poetic beauty",
    strengthDetails:
      "Your greatest strengths include emotional sensitivity, symbolic imagination, tenderness, and the ability to make ordinary life feel meaningful. You often notice what others overlook — the hidden mood, the unspoken emotion, the quiet beauty of a passing moment. That depth can make your presence deeply comforting and unforgettable.",
    watchOut: "Idealizing the past or longing for perfection too deeply",
    watchOutDetails:
      "What may feel difficult is staying present when your inner world feels more beautiful than reality. Sometimes longing can become a place you live in rather than a feeling you move through. The goal is not to become less sensitive or romantic. It is to let your love of beauty deepen your life instead of pulling you away from it.",
    bestMatch:
      "People and paths that value tenderness, sincerity, beauty, and emotional depth",
    growth1:
      "Growth for you often begins when you trust that beauty is not only found in distance, fantasy, or memory. It can also exist in the life you are building now. You do not need to wait for a perfect atmosphere to live meaningfully.",
    growth2:
      "The healthiest version of your energy is someone who still feels deeply, still loves beauty, and still believes in emotional significance — but also lets those qualities shape real choices, real relationships, and real life. Romance becomes strongest when it is lived, not only imagined.",
    reminder:
      "Your soul was made for beauty, but beauty does not only live in the past. Let it live in the life you are creating now.",
  },

  roaring_twenties: {
    title: "Roaring Twenties ✨",
    summary:
      "Your soul feels most alive in the Roaring Twenties — dazzling, social, expressive, and drawn toward glamour, movement, and unforgettable energy.",
    desc1:
      "At heart, you are pulled toward a world that sparkles. You are someone whose inner energy naturally resonates with excitement, bold beauty, and the thrill of possibility. The Roaring Twenties matches your soul not just because of its glamour, but because it reflects a life lived vividly — with music, style, confidence, and emotional electricity.",
    desc2:
      "What makes this era feel right for you is its fearless aliveness. There is something in you that does not want life to feel flat, muted, or forgettable. You are often drawn to intensity, celebration, charisma, and spaces where self-expression feels magnetic. Your energy tends to bloom in moments that feel vibrant and fully awake.",
    meaning1:
      "This result often means you are someone who values presence, atmosphere, and the emotional charge of living boldly. You may be naturally expressive, socially alive, or drawn to beauty that makes an entrance. Even when you are quiet on the surface, part of your soul may still crave movement, glamour, and a life that feels charged with possibility.",
    meaning2:
      "Because of that, you may feel especially alive in places where people are fully themselves, where style and energy matter, and where life feels a little theatrical in the best way. Your gift is that you bring brightness and unforgettable momentum into spaces that might otherwise feel ordinary or restrained.",
    showUp1:
      "In daily life, this energy can show up as social magnetism, love of dressing up, attraction to nightlife or celebration, and a strong instinct for making moments feel memorable. You may be someone who naturally lifts the atmosphere, enjoys playful confidence, or wants life to feel like something worth showing up for fully.",
    showUp2:
      "You may also be drawn to people who feel charismatic, daring, and emotionally awake. The challenge is making sure the sparkle stays connected to substance. Your soul may love excitement, but it also deserves meaning underneath the glitter. The healthiest glamour is not empty. It is alive.",
    strengths: "Charisma, boldness, vibrant presence",
    strengthDetails:
      "Your strengths include confidence, expressive energy, style, and the ability to make life feel vivid. You often remind others that joy, celebration, and visual beauty matter too. There is power in creating moments that people remember, and your energy can turn the ordinary into something electric.",
    watchOut: "Chasing stimulation so much that depth gets overlooked",
    watchOutDetails:
      "What may feel difficult is knowing when excitement is feeding your spirit and when it is only distracting you. Sometimes a love of movement, glamour, or social energy can make stillness feel uncomfortable. The goal is not to become quieter. It is to make sure your brightness is rooted in something real enough to last.",
    bestMatch:
      "People and paths that celebrate your energy while also honoring your deeper emotional truth",
    growth1:
      "Growth for you often means learning that a meaningful life can still shimmer. Depth and sparkle do not cancel each other out. In fact, your gift becomes strongest when joy, beauty, and authenticity are allowed to exist together.",
    growth2:
      "The healthiest form of your energy is someone who still glows, still celebrates, and still lives vividly — but who also knows that the most unforgettable life is not only dazzling on the outside. It is emotionally real on the inside too.",
    reminder:
      "You were not made for a dull life. Just remember that the brightest shine lasts longest when it is lit from within.",
  },

  golden_hollywood: {
    title: "Golden Hollywood 🎬",
    summary:
      "Your soul belongs to Golden Hollywood — elegant, cinematic, emotionally grand, and quietly unforgettable.",
    desc1:
      "At your core, you are drawn to timeless beauty. There is something in your energy that feels composed, graceful, and larger than the ordinary moment. Golden Hollywood matches your soul because it reflects a world of elegance, emotional drama, visual beauty, and star-like presence. You may not always seek attention directly, but you often carry a natural sense of atmosphere and impression.",
    desc2:
      "What makes this era feel right for you is its ability to make life feel cinematic. You are someone who may care deeply about beauty, presentation, and emotional significance. You may be drawn to polished aesthetics, iconic moments, and the kind of depth that feels both refined and emotionally powerful. Your soul often wants life to feel meaningful and memorable, not careless or forgettable.",
    meaning1:
      "This result often means you carry an energy that is both graceful and emotionally resonant. You may value elegance, standards, and the feeling of creating something beautiful out of how you move through life. Even when you are relaxed, you may still naturally carry yourself in a way that feels intentional, composed, and quietly magnetic.",
    meaning2:
      "Because of that, people may experience you as memorable without always knowing why. You may have a presence that lingers. Your gift is not simply glamour. It is emotional polish — the ability to make beauty feel timeless and feeling feel elevated. You remind people that there is still room for grace in a chaotic world.",
    showUp1:
      "In everyday life, this energy can show up as classic style, appreciation for old films or timeless design, emotional composure, and a preference for beauty that feels refined instead of loud. You may be someone who notices presentation, values memorable experiences, and carries a natural instinct for making things feel elevated.",
    showUp2:
      "You may also hold yourself to high standards, especially in how you show up emotionally or aesthetically. The challenge is making sure elegance does not become pressure. Your soul may love beauty and composure, but it also deserves room to be human, messy, and fully real without losing its glow.",
    strengths: "Elegance, presence, timeless emotional depth",
    strengthDetails:
      "Your strengths include grace, composure, visual sensitivity, and the ability to make ordinary life feel more intentional and memorable. You often carry an emotional richness beneath the surface that gives your presence real depth. That combination of polish and feeling is what makes your energy so striking.",
    watchOut: "Feeling pressure to stay composed or perfect all the time",
    watchOutDetails:
      "What may feel difficult is allowing yourself to relax the performance of having it together. Sometimes people with this energy become so identified with elegance or control that vulnerability starts to feel unsafe. The goal is not to lose your standards. It is to let your humanity breathe inside them.",
    bestMatch:
      "People and paths that appreciate your grace, depth, and the beauty of emotional sincerity",
    growth1:
      "Growth for you often means discovering that true timelessness is not perfection. It is authenticity with form. The most powerful presence is not one that never breaks. It is one that stays beautiful even when it becomes real and vulnerable.",
    growth2:
      "The healthiest version of your energy is someone who still carries elegance, still loves beauty, and still moves through life with intention — but who no longer believes they must be flawless to be worthy of being seen.",
    reminder:
      "Your presence already leaves an impression. Let yourself be real enough to feel it too.",
  },

  free_spirit_70s: {
    title: "Free Spirit 70s 🌼",
    summary:
      "Your soul feels most at home in the Free Spirit 70s — expressive, warm, open-hearted, and deeply drawn to freedom, authenticity, and soulful living.",
    desc1:
      "At heart, you are someone who values being real more than being polished. The Free Spirit 70s fits your soul because it reflects a life guided by openness, creativity, emotional honesty, and the courage to live outside rigid expectations. You may be naturally drawn to warmth, individuality, and spaces where people are free to feel and express who they are.",
    desc2:
      "What makes this era feel right for you is its soulful looseness. Your energy often blooms when life feels less controlled and more alive. You may love music, color, movement, connection, and a sense that life can unfold naturally instead of being forced into a narrow shape. Your soul often wants room to breathe.",
    meaning1:
      "This result often means you care deeply about authenticity. You may be someone who wants life to feel emotionally honest, creatively alive, and aligned with your real self rather than with outside pressure. Even when you are responsible and grounded, part of your spirit likely still resists anything that feels too stiff, fake, or overly performative.",
    meaning2:
      "Because of that, you may naturally bring warmth and freedom into the lives of others. People may feel safer being themselves around you. Your gift is that you remind others that life does not always have to be so tightly managed to be beautiful. There is wisdom in your ease.",
    showUp1:
      "In real life, this energy can show up as casual creativity, soulful taste, emotional openness, a strong love of personal freedom, and a preference for connection that feels sincere rather than strategic. You may be someone who values self-expression, meaningful conversations, and a life that feels lived rather than performed.",
    showUp2:
      "You may also be the kind of person who resists pressure to become something smaller or more conventional than you really are. The challenge is making sure freedom remains grounded enough to support the life you want to build. Being open does not mean drifting without direction. Your soul needs both freedom and form.",
    strengths: "Authenticity, warmth, soulful freedom",
    strengthDetails:
      "Your strengths include emotional honesty, openness, individuality, and the ability to create spaces that feel welcoming and alive. You often help others relax into themselves. That kind of genuine presence is powerful, especially in a world that often rewards performance more than truth.",
    watchOut: "Avoiding structure so much that direction gets lost",
    watchOutDetails:
      "What may feel difficult is staying consistent when structure begins to feel restrictive. Sometimes a strong need for freedom can make commitment, routine, or practical steps feel heavier than they really are. The goal is not to become rigid. It is to let your freedom have enough grounding to grow into something sustainable.",
    bestMatch:
      "People and paths that honor your authenticity, creativity, and need for emotional breathing room",
    growth1:
      "Growth for you often means realizing that structure is not always the enemy of freedom. Sometimes it is what protects it. A grounded routine, a healthy boundary, or a chosen commitment can become the frame that lets your real self flourish more fully.",
    growth2:
      "The healthiest version of your energy is someone who still lives openly, still feels deeply, and still values freedom — but who also knows how to turn soulful instinct into a life with shape, steadiness, and real momentum.",
    reminder:
      "Your soul was made to breathe freely. Just remember that even wildflowers grow best when they are rooted somewhere real.",
  },

  nostalgic_90s: {
    title: "Nostalgic 90s 📼",
    summary:
      "Your soul feels most connected to the Nostalgic 90s — heartfelt, grounded, quietly expressive, and full of realness, comfort, and emotional familiarity.",
    desc1:
      "At your core, you are drawn to a world that feels genuine. The Nostalgic 90s matches your soul because it reflects emotional honesty without too much performance, style without too much pressure, and connection that feels real instead of overly polished. You may naturally love comfort, familiarity, and the kind of atmosphere that feels lived in rather than curated.",
    desc2:
      "What makes this era feel right for you is its balance. It holds warmth without being overly soft, individuality without needing constant reinvention, and emotional depth without turning everything into spectacle. Your soul may feel most alive in spaces that are simple, sincere, a little nostalgic, and full of subtle personality.",
    meaning1:
      "This result often means you are someone who values emotional truth, comfort, and authenticity in a grounded way. You may not always need life to be dramatic or dazzling. Instead, you may be drawn to what feels real, familiar, and quietly meaningful. Your energy often carries a sense of home.",
    meaning2:
      "Because of that, people may experience you as approachable, emotionally safe, and easy to be around. Your gift is that you make life feel less artificial. You bring a kind of honesty and ease that helps others settle into themselves. That simplicity is not small. It is deeply reassuring.",
    showUp1:
      "In daily life, this energy can show up as love of old music, emotional nostalgia, preference for relaxed style, appreciation for meaningful routines, and connection to things that feel comforting and true. You may be someone who treasures familiar places, remembers emotional eras of your life vividly, and values sincerity more than image.",
    showUp2:
      "You may also naturally resist anything that feels too fake, too rushed, or too performative. The challenge is making sure comfort does not become emotional hiding. Your soul may love familiarity, but it still deserves growth, surprise, and the courage to step into new things without losing its grounded center.",
    strengths: "Comfort, honesty, grounded emotional warmth",
    strengthDetails:
      "Your strengths include sincerity, emotional steadiness, relatability, and the ability to make people feel at ease. You often create an atmosphere that feels safe without being heavy, expressive without being overwhelming, and real without needing to prove itself. That is a rare kind of emotional intelligence.",
    watchOut: "Staying too attached to familiarity or emotional comfort zones",
    watchOutDetails:
      "What may feel difficult is moving forward when the familiar feels safer than the unknown. Sometimes nostalgia can become a quiet form of avoidance, especially when change feels uncertain. The goal is not to stop loving what feels comforting. It is to let comfort support your growth rather than replace it.",
    bestMatch:
      "People and paths that feel sincere, steady, emotionally real, and gently supportive",
    growth1:
      "Growth for you often begins when you trust that new chapters do not have to erase what you love. You can carry your tenderness, your memories, and your grounded sense of self into a life that is still expanding.",
    growth2:
      "The healthiest version of your energy is someone who still values comfort, still loves what feels real, and still honors emotional familiarity — but who also allows new experiences to become part of what home can mean.",
    reminder:
      "Your soul knows the beauty of what feels real. Let that honesty guide you forward, not only backward.",
  },

  y2k_dream: {
    title: "Y2K Dream 💿",
    summary:
      "Your soul belongs to Y2K Dream — playful, expressive, futuristic, emotionally curious, and full of bold reinvention.",
    desc1:
      "At heart, you are drawn to a world that feels bright, fresh, and full of possibility. Y2K Dream fits your soul because it reflects a playful kind of confidence — one that mixes style, experimentation, individuality, and emotional curiosity. You may naturally feel pulled toward reinvention, visual fun, and the sense that life can always become something new.",
    desc2:
      "What makes this era feel right for you is its energy of becoming. There is something in you that loves movement, newness, personality, and the freedom to shift your image or direction without losing your spark. Your soul often wants life to feel dynamic, expressive, and just a little ahead of itself.",
    meaning1:
      "This result often means you carry a youthful, adaptive, and highly expressive energy. You may be someone who likes trying new things, exploring different sides of yourself, and finding joy in style, technology, trends, or emotional self-reinvention. Even when life feels heavy, part of your spirit still looks for the next exciting version of possibility.",
    meaning2:
      "Because of that, you may bring freshness into the lives of others. Your gift is not only fun. It is movement. You help people remember that identity can evolve, that expression can be playful, and that life does not have to stay stuck in one form forever.",
    showUp1:
      "In everyday life, this energy can show up as curiosity, style experimentation, playful confidence, emotional adaptability, and a strong instinct for remixing who you are as you grow. You may be someone who gets bored when life becomes too static and who naturally looks for ways to keep things feeling alive and interesting.",
    showUp2:
      "You may also be drawn to people and spaces that feel exciting, creative, and a little unconventional. The challenge is making sure reinvention stays connected to your real self. Change is part of your gift, but constant self-editing can become exhausting if you never let yourself simply exist.",
    strengths: "Reinvention, expressiveness, playful confidence",
    strengthDetails:
      "Your strengths include adaptability, creative self-expression, optimism, and the ability to refresh the emotional atmosphere around you. You often help others feel freer to explore, try, change, and evolve. That playful movement can be incredibly energizing, especially when the world feels heavy or stuck.",
    watchOut: "Reinventing so often that grounding and depth get lost",
    watchOutDetails:
      "What may feel difficult is staying rooted long enough to build something lasting. Sometimes a love of change, novelty, or self-expression can make stillness feel too exposed or boring. The goal is not to stop evolving. It is to let your evolution have continuity, meaning, and enough honesty to feel like home.",
    bestMatch:
      "People and paths that welcome your creativity, curiosity, and ever-evolving sense of self",
    growth1:
      "Growth for you often means realizing that identity does not need to be fixed, but it does need a center. You can explore, play, and reinvent while still staying connected to what is most true about you underneath the surface.",
    growth2:
      "The healthiest version of your energy is someone who still experiments, still shines, and still changes fearlessly — but who also knows that real freedom includes the ability to pause, root, and let something deepen.",
    reminder:
      "You are allowed to evolve. Just make sure the version you become still feels like you.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "vintage_romance";
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
        background:
          "linear-gradient(180deg, #fdf2f8 0%, #fff7ed 45%, #fefce8 100%)",
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
          Soul Era Result
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
            What this era says about your soul
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
            How this energy can show up in your life
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
            <strong>Main strengths:</strong> {r.strengths}
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
            href="/quiz/era-matches-your-soul"
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

export default function EraMatchesYourSoulResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}