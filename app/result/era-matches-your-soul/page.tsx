"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  victorian: {
    title: "The Victorian Era 🕯️",
    summary:
      "Your soul belongs to the Victorian era — romantic, introspective, emotionally deep, and drawn to beauty that feels timeless.",
    desc1:
      "At your core, you are someone who feels life through atmosphere, meaning, and emotional nuance. You are likely drawn to softness, symbolism, handwritten words, quiet longing, and beauty that carries depth rather than noise. Even when the world moves quickly, part of your soul still reaches for slowness and emotional richness.",
    desc2:
      "What makes this era feel like home to you is not simply its antique charm, but its emotional texture. The Victorian energy is full of tenderness, restraint, devotion, and hidden intensity. You may carry a kind of inner world that feels poetic, private, and more layered than people first realize.",
    meaning1:
      "This result often means that your soul is deeply connected to romance, reflection, symbolism, and emotional sincerity. You may naturally seek experiences that feel meaningful rather than shallow, and you are probably sensitive to beauty that feels old, soft, or full of memory. You do not just want life to be efficient. You want it to feel significant.",
    meaning2:
      "Because of that, you may be especially touched by melancholy, nostalgia, literature, old places, rainy weather, candlelight, and emotional subtlety. You often sense the deeper atmosphere of things, and that gives your inner life unusual richness. It can also make modern life feel a little too rushed, loud, or emotionally thin at times.",
    showUp1:
      "In everyday life, this can show up as a love of journaling, poetry, vintage details, emotionally meaningful conversations, and a natural sensitivity to tone and mood. You may be someone who notices the emotional weight in small things — a glance, a letter, a song lyric, or a quiet shift in the air.",
    showUp2:
      "You may also be deeply loyal and emotionally serious beneath a calm exterior. People might see you as gentle, elegant, or thoughtful, but there is often much more feeling underneath than you immediately show. The challenge is making sure your emotional depth becomes connection and creativity rather than silent overlonging.",
    strengths: "Depth, devotion, emotional beauty",
    strengthDetails:
      "Your strengths include emotional sensitivity, symbolic depth, sincerity, and the ability to create beauty through presence and feeling. You often bring tenderness into a world that can feel rushed or careless. That kind of soulful steadiness can make people feel seen in a quieter, more lasting way.",
    watchOut: "Romanticizing pain or getting lost in longing",
    watchOutDetails:
      "What may feel difficult is staying grounded when beauty becomes tied to sadness, waiting, or emotional idealization. Because you feel things so deeply, you may sometimes hold onto what is almost beautiful rather than what is fully real. The goal is not to become less romantic. It is to let your sensitivity lead you into life rather than away from it.",
    bestMatch:
      "People and paths that value tenderness, sincerity, emotional depth, and timeless beauty",
    growth1:
      "Growth for you often begins when you trust that depth does not disappear in ordinary life. You do not need to live inside nostalgia to protect your soul. Your sensitivity can become a living force in the present through creativity, love, and honest connection.",
    growth2:
      "The healthiest version of your era energy is not trapped in the past. It carries the beauty of the past into the present. You are at your strongest when your longing becomes art, devotion, and emotional courage rather than only private ache.",
    reminder:
      "Your soul was made for depth. Just remember that real beauty is not only something you remember or imagine — it is something you can still live.",
  },

  roaring20s: {
    title: "The Roaring Twenties 🍾",
    summary:
      "Your soul belongs to the Roaring Twenties — dazzling, bold, charismatic, and alive with movement, glamour, and electric energy.",
    desc1:
      "At heart, you are drawn to sparkle, confidence, celebration, and a life that feels vivid. You likely have a side that loves atmosphere, style, excitement, and the feeling that something unforgettable could happen at any moment. Your energy may naturally pull toward motion rather than stillness.",
    desc2:
      "What makes this era feel like home to you is not just the fashion or parties, but the sense of aliveness. The Roaring Twenties carried glamour, rebellion, social energy, and a fearless appetite for experience. Part of your soul seems to come alive when life feels bold, expressive, and full of possibility.",
    meaning1:
      "This result often means your inner self is connected to charisma, social magnetism, pleasure, style, and the emotional thrill of living fully. You may not be satisfied by a life that feels flat, overly controlled, or emotionally muted. You want movement, story, confidence, and some kind of sparkle.",
    meaning2:
      "Because of that, you may be someone who lights up around beauty, music, excitement, and strong presence. You likely understand the emotional power of mood, presentation, and unforgettable moments. That can make you magnetic and inspiring. It can also make ordinary life feel dull if you start believing that only intensity counts as real aliveness.",
    showUp1:
      "In real life, this era energy can show up as confidence, social ease, expressive style, love of celebration, and a strong instinct for making moments feel special. You may be the person who brings energy into a room, encourages people to loosen up, or instinctively understands how to make life feel more vivid.",
    showUp2:
      "You may also have a glamorous edge that people immediately notice. Even if you are not loud, there is often something bright, polished, or striking about your presence. The challenge is making sure your love of excitement remains rooted in real self-worth rather than constant performance or external validation.",
    strengths: "Charisma, boldness, aliveness",
    strengthDetails:
      "Your strengths include confidence, expressive energy, social warmth, and the ability to bring beauty and excitement into ordinary life. You often remind people that joy, glamour, and celebration have emotional power too. You can make life feel larger, lighter, and more unforgettable.",
    watchOut: "Chasing intensity or approval too much",
    watchOutDetails:
      "What may feel difficult is resting in yourself when the lights are lower. If you become too dependent on excitement, attention, or image, your energy can start to feel scattered or performative. The goal is not to become less dazzling. It is to know that your sparkle is still real even when nobody is watching.",
    bestMatch:
      "People and paths that celebrate your brightness while also valuing your real inner self",
    growth1:
      "Growth for you often begins when you realize glamour and depth do not cancel each other out. You are allowed to love beauty and excitement while also building emotional steadiness underneath them. That balance makes your light more powerful, not less.",
    growth2:
      "The healthiest version of your era energy is someone who shines because they are alive, not because they are chasing proof. When your charisma comes from joy rather than pressure, it becomes magnetic in the most genuine way.",
    reminder:
      "You were made to shine. Just remember that your brightest glow comes from being fully alive, not from being endlessly seen.",
  },

  oldhollywood: {
    title: "Old Hollywood 🎬",
    summary:
      "Your soul belongs to Old Hollywood — elegant, magnetic, cinematic, and quietly full of mystery and depth.",
    desc1:
      "At your core, you are drawn to timeless glamour, emotional restraint, iconic beauty, and atmosphere that feels both polished and profound. You may naturally carry yourself with a certain grace, even when your inner world is far more complex than it looks from the outside.",
    desc2:
      "What makes this era feel like home to you is not only the beauty of classic films or silhouettes, but the emotional duality of it all. Old Hollywood holds both glamour and loneliness, radiance and mystery, composure and hidden longing. That layered elegance may feel deeply familiar to your soul.",
    meaning1:
      "This result often means you are someone whose energy feels refined, memorable, and a little difficult to fully read. You may not reveal everything quickly, but what you do show has presence. You are probably drawn to beauty that feels iconic, emotionally charged, and larger than everyday life.",
    meaning2:
      "Because of that, you may have a strong connection to mood, style, symbolism, and the emotional language of restraint. You might prefer depth over noise and elegance over chaos. Your soul may feel most itself when life has a cinematic quality — when there is beauty, gravity, and some room for mystery.",
    showUp1:
      "In everyday life, this can show up as polished taste, emotional self-control, classic style, careful expression, and a presence that people remember. You may not be the most obviously open person at first, but people often sense there is real depth behind your composure.",
    showUp2:
      "You may also have a natural instinct for timing, image, and emotional atmosphere. People might see you as graceful, magnetic, poised, or quietly intense. The challenge is making sure composure does not become distance. Mystery is powerful, but connection still needs honesty and warmth.",
    strengths: "Elegance, presence, emotional depth",
    strengthDetails:
      "Your strengths include poise, symbolic presence, emotional intelligence, and the ability to carry depth without needing to overexplain yourself. You often make strong impressions simply because your energy feels intentional and layered. There is a kind of timeless gravity in that.",
    watchOut: "Hiding too much behind polish or mystery",
    watchOutDetails:
      "What may feel difficult is trusting people with what lies beneath the image. When elegance becomes armor, loneliness can grow quietly. The goal is not to lose your mystery. It is to let your real self breathe inside it. The strongest presence is not perfect. It is alive.",
    bestMatch:
      "People and paths that appreciate your depth, respect your privacy, and welcome your real emotional truth",
    growth1:
      "Growth for you often begins when you allow beauty and honesty to exist together. You do not have to choose between grace and vulnerability. In fact, the most unforgettable presence is often the one that feels both composed and real.",
    growth2:
      "The healthiest version of your era energy carries elegance without becoming unreachable. You are at your strongest when your mystery remains genuine, but your heart still has room to be known.",
    reminder:
      "You do not have to reveal everything to be real. Just do not hide so beautifully that nobody can reach you.",
  },

  bohemian70s: {
    title: "The Bohemian 1970s 🌼",
    summary:
      "Your soul belongs to the bohemian 1970s — warm, creative, free-spirited, soulful, and deeply drawn to authentic self-expression.",
    desc1:
      "At heart, you are someone who values freedom, emotional honesty, creativity, and beauty that feels natural rather than forced. You are likely drawn to warmth, music, personal meaning, and a way of living that leaves room for softness and self-discovery.",
    desc2:
      "What makes this era feel like home to you is not just the aesthetic, but the spirit of it. The bohemian 1970s carried artistic freedom, inner searching, gentleness, and a deep trust in expression that felt human and alive. Your soul may naturally lean toward what feels open, soulful, and real.",
    meaning1:
      "This result often means you are deeply connected to authenticity, emotional atmosphere, and a life that feels personally meaningful rather than externally impressive. You may not want to be boxed in by rigid expectations. Part of you wants room to grow, feel, create, wander, and become.",
    meaning2:
      "Because of that, you may be someone who is nourished by music, art, nature, intimacy, and spaces that feel relaxed and sincere. You likely have a natural sensitivity to mood and a longing for a life that feels more soulful than performative. That can make you deeply comforting and inspiring to others.",
    showUp1:
      "In everyday life, this energy can show up as artistic instinct, emotional openness, soft style, inner independence, and a calm but unmistakable sense of self. You may be the kind of person who values meaning over status and presence over perfection.",
    showUp2:
      "You may also bring a freeing energy into other people’s lives. Others may feel more like themselves around you because your energy does not demand performance. The challenge is making sure freedom stays grounded enough to support your growth rather than drifting into avoidance or inconsistency.",
    strengths: "Authenticity, creativity, soulful warmth",
    strengthDetails:
      "Your strengths include emotional honesty, artistic spirit, gentleness, and the ability to make life feel more human and breathable. You often create an atmosphere where people feel safer to soften, reflect, and be real. That kind of soulful openness is powerful.",
    watchOut: "Drifting too much or resisting structure completely",
    watchOutDetails:
      "What may feel difficult is staying committed when something begins to feel too ordinary or structured. Because you value freedom so deeply, you may sometimes avoid form, routine, or responsibility even when they could help your gifts take shape. The goal is not to become rigid. It is to give your freedom a life it can actually live in.",
    bestMatch:
      "People and paths that honor your freedom, creativity, tenderness, and need for sincerity",
    growth1:
      "Growth for you often begins when you realize that structure does not always kill creativity. Sometimes it protects it. Your softness, art, and self-expression become stronger when they have enough grounding to last.",
    growth2:
      "The healthiest version of your era energy remains free, soulful, and expressive, but also learns how to build a life that can hold all that beauty steadily. Freedom becomes most powerful when it can stay.",
    reminder:
      "Your soul was made to bloom in its own way. Just remember that roots matter too.",
  },

  grunge90s: {
    title: "The Grunge 1990s 🖤",
    summary:
      "Your soul belongs to the grunge 1990s — raw, introspective, emotionally honest, and deeply committed to what feels real.",
    desc1:
      "At your core, you are likely someone who values truth over polish, depth over surface, and emotional reality over performance. You may be drawn to darker tones, introspective moods, messy beauty, and the feeling of being allowed to exist without pretending everything is perfect.",
    desc2:
      "What makes this era feel like home to you is not just the aesthetic of flannel, dim light, and worn textures. It is the emotional honesty. The grunge energy carries vulnerability, resistance, melancholy, independence, and a deep refusal to be fake. That refusal may feel central to who you are.",
    meaning1:
      "This result often means your soul is deeply connected to authenticity, emotional intensity, quiet rebellion, and spaces where people do not have to perform happiness all the time. You may not trust what feels too polished or overly curated. You want something more human than that.",
    meaning2:
      "Because of that, you may have a rich inner world that others do not immediately see. You could be someone who processes deeply, feels strongly, and notices what is broken or unsaid. That can make you perceptive, emotionally real, and unforgettable. It can also make you vulnerable to isolation if honesty turns into constant withdrawal.",
    showUp1:
      "In everyday life, this energy can show up as introspection, dry humor, emotional realism, creative depth, strong personal taste, and a quiet unwillingness to fake connection. You may be the person who says little but means it, or who sees through what others are trying too hard to sell.",
    showUp2:
      "You may also bring relief to people who are tired of surface-level energy. Your honesty can feel grounding because it gives others permission to drop the mask. The challenge is making sure your resistance to fakery does not close you off from tenderness, joy, or hope that is actually real.",
    strengths: "Honesty, depth, quiet resilience",
    strengthDetails:
      "Your strengths include emotional authenticity, perceptiveness, individuality, and the ability to stay real in a world that often rewards image over substance. You can hold complexity without rushing to decorate it. That makes your presence feel solid and deeply human.",
    watchOut: "Confusing cynicism with truth or turning inward too hard",
    watchOutDetails:
      "What may feel difficult is staying open to lightness when you are so tuned in to what feels false. Sometimes people with this energy become too attached to detachment, guardedness, or disappointment because those things feel safer than hope. The goal is not to become shinier. It is to let truth include softness too.",
    bestMatch:
      "People and paths that respect your depth, value honesty, and never ask you to become fake to belong",
    growth1:
      "Growth for you often begins when you let authenticity include vulnerability, not only resistance. Being real is not just about rejecting what is fake. It is also about letting yourself want, feel, connect, and heal without embarrassment.",
    growth2:
      "The healthiest version of your era energy keeps its edge, its honesty, and its individuality, but no longer treats distance as the only form of protection. Realness becomes most powerful when it can stay open.",
    reminder:
      "Your soul was never meant for pretending. Just remember that honesty can hold tenderness too.",
  },

  y2k: {
    title: "The Y2K 2000s 💿",
    summary:
      "Your soul belongs to the Y2K 2000s — playful, expressive, bold, energetic, and always ready to reinvent itself.",
    desc1:
      "At heart, you are likely drawn to fun, confidence, individuality, pop energy, and the freedom to keep becoming someone new. You may naturally enjoy bright moods, self-expression, experimentation, and the feeling that life can be both stylish and exciting at the same time.",
    desc2:
      "What makes this era feel like home to you is not just the glitter, the tech optimism, or the iconic fashion. It is the spirit of bold reinvention. Y2K energy is expressive, fast-moving, playful, and unafraid of being seen. Part of your soul may genuinely light up around that kind of fearless visibility.",
    meaning1:
      "This result often means your inner self is connected to confidence, fun, adaptability, social energy, and creativity that likes to move. You may not want a life that feels too muted, overly serious, or emotionally flat. Something in you wants color, movement, personality, and room to play.",
    meaning2:
      "Because of that, you may be someone who brings freshness into a room without even trying. You likely understand the power of image, vibe, and self-styling, but there is usually more to it than that. Beneath the playful surface, there is often a strong instinct for reinvention and emotional resilience.",
    showUp1:
      "In everyday life, this energy can show up as expressive fashion, humor, confidence, bold taste, quick adaptation, and a willingness to try new versions of yourself. You may be the kind of person who refreshes the mood around others simply by showing up as your full personality.",
    showUp2:
      "You may also bring a lightness that people deeply need. Your energy can feel fun, refreshing, and alive. The challenge is making sure reinvention stays connected to your real self rather than becoming pressure to constantly perform, impress, or stay ahead of every shift.",
    strengths: "Playfulness, confidence, reinvention",
    strengthDetails:
      "Your strengths include adaptability, expressive charm, boldness, and the ability to turn life into something more colorful and alive. You often help people loosen up, experiment, and remember that self-expression can be joyful. That kind of energy can be both uplifting and powerful.",
    watchOut: "Depending too much on image or constant reinvention",
    watchOutDetails:
      "What may feel difficult is slowing down enough to stay rooted in who you already are. If reinvention becomes a way to avoid stillness, you may start feeling scattered or disconnected from your deeper center. The goal is not to become less dynamic. It is to let your sparkle grow from something real.",
    bestMatch:
      "People and paths that love your energy, welcome your creativity, and support the real person beneath your shine",
    growth1:
      "Growth for you often begins when you realize that being iconic does not require becoming someone new every five minutes. Your energy becomes stronger when it has a center. Playfulness is most powerful when it grows from self-trust rather than pressure.",
    growth2:
      "The healthiest version of your era energy is vibrant, confident, expressive, and still grounded enough to stay present. You do not lose your magic when you slow down. You make it more real.",
    reminder:
      "You were made to shine in your own style. Just remember that your best glow comes from being fully yourself, not endlessly updated.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "victorian";
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
          Era Personality Result
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
            What this era means
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