"use client";

export const dynamic = "force-dynamic";

import { Suspense, useMemo, useState } from "react";
import { useSearchParams } from "next/navigation";

const results = {
  cozy: {
    title: "The Cozy Room ☁️",
    summary:
      "Your mind matches a Cozy Room — warm, comforting, emotionally grounding, and quietly safe.",
    desc1:
      "At your core, your mind seems to crave softness. You are likely someone whose inner world feels most at ease in spaces that offer warmth, familiarity, and emotional calm. A cozy room is not just about blankets, lamps, or soft textures. For you, it reflects the deeper need to feel held, soothed, and gently protected from the noise of the outside world.",
    desc2:
      "What makes this room aesthetic meaningful for you is the sense of emotional shelter it creates. Cozy spaces allow your thoughts to settle without pressure. They make room for reflection, tenderness, and quiet forms of peace. Your mind may not be drawn to cold perfection or intense stimulation. It seems to flourish where there is softness, safety, and a feeling of being allowed to simply exist.",
    meaning1:
      "This result often means your inner world is deeply connected to emotional comfort, stability, and the kind of beauty that makes life feel more humane. You may be especially sensitive to atmosphere, which means the tone of a space affects you more than people realize. A room that feels too harsh, sterile, or chaotic can drain you quickly, even if you cannot explain why right away.",
    meaning2:
      "Because of that, you may naturally seek environments that are warm, gentle, and emotionally familiar. Your mind probably restores itself through softness rather than stimulation. That does not make you weak or fragile. It means your inner balance depends on feeling emotionally safe enough to relax, breathe, and let your thoughts return to themselves naturally.",
    showUp1:
      "In everyday life, this energy can show up as a love of ambient lighting, comforting rituals, soft textures, warm color palettes, meaningful little objects, and spaces that feel lived in rather than performative. You may be the kind of person who wants your room to feel less like a display and more like a place that understands you.",
    showUp2:
      "You may also be someone who values emotional atmosphere in the same way others value productivity or visual trendiness. A cozy room reflects a mind that wants grounding, intimacy, and relief from emotional sharpness. The challenge is making sure your comfort remains restorative rather than becoming a place where you hide from needed movement or change.",
    strengths: "Warmth, grounding, emotional comfort",
    strengthDetails:
      "Your strengths include emotional softness, the ability to create safety, and a natural sense for what helps a space feel human and healing. You likely understand, even intuitively, that beauty is not only about appearance. It is also about how a place makes people feel. That makes your presence calming and your environment naturally welcoming.",
    watchOut: "Staying too attached to comfort and resisting needed change",
    watchOutDetails:
      "What may feel difficult is expanding beyond what feels familiar. Because comfort matters so much to you, it may be tempting to stay only with what is known, gentle, and predictable. Sometimes growth requires a little more openness, freshness, or discomfort than your first instinct prefers. The goal is not to give up comfort. It is to let comfort support life instead of limiting it.",
    bestMatch:
      "Spaces and people that feel warm, steady, emotionally safe, and genuinely comforting",
    growth1:
      "Growth for you often begins when you realize that safety and expansion do not have to fight each other. A cozy mind does not need to become cold in order to grow. It simply needs enough trust to open its windows a little wider and let in something new without feeling exposed.",
    growth2:
      "The healthiest version of your room aesthetic is not one that only protects you from the world. It is one that restores you so fully that you can meet the world with more steadiness, kindness, and emotional strength. Your softness becomes most powerful when it gives you energy to live, not only to retreat.",
    reminder:
      "Your mind deserves warmth. Just remember that comfort is strongest when it helps you keep moving, not only when it lets you stay still.",
  },

  minimalist: {
    title: "The Minimalist Room 🤍",
    summary:
      "Your mind matches a Minimalist Room — clear, intentional, calm, and deeply restored by simplicity.",
    desc1:
      "At heart, your mind seems to work best when there is space. You are likely someone who feels calmer, clearer, and more like yourself when the environment around you is simple, clean, and free from unnecessary visual pressure. A minimalist room is not emptiness for the sake of style. For you, it reflects a real psychological need for order, breathing room, and quiet clarity.",
    desc2:
      "What makes this room aesthetic meaningful for you is its ability to reduce noise. Your mind may be especially sensitive to clutter, overstimulation, or excess detail that pulls your attention in too many directions. Simplicity helps you focus, reset, and reconnect with what actually matters. You may not need more around you to feel full. Often, you need less around you to feel clear.",
    meaning1:
      "This result often means your inner world values intention. You probably feel best when things have purpose, shape, and emotional cleanliness. Chaos may not just annoy you. It may genuinely disrupt your ability to think and feel at ease. A minimalist room reflects a mind that wants calm, structure, and a sense that everything has been chosen rather than accumulated without thought.",
    meaning2:
      "Because of that, you may naturally prefer environments that feel open, balanced, and visually quiet. Your mind may restore itself through spaciousness and order. This does not necessarily mean you are emotionally detached. In many cases, it means you are trying to protect your inner energy by keeping your outer environment from overwhelming it.",
    showUp1:
      "In daily life, this energy can show up as a preference for clean surfaces, neutral tones, practical beauty, natural light, and spaces that feel composed rather than crowded. You may be the kind of person who feels mentally lighter after tidying a room or removing something that no longer belongs there.",
    showUp2:
      "You may also be someone who finds peace in design that does not demand attention. A minimalist room reflects a mind that values calm over chaos and clarity over excess. The challenge is making sure simplicity does not become emotional distance or perfectionism so strict that your space starts feeling more controlled than alive.",
    strengths: "Clarity, intention, calm focus",
    strengthDetails:
      "Your strengths include discernment, self-awareness, and the ability to create peace through simplicity. You likely understand that not everything meaningful has to be loud, layered, or decorative. There is beauty in restraint, and your mind seems to know how to find it. That gives your environment a clean steadiness that can feel deeply refreshing to both you and others.",
    watchOut: "Becoming too rigid, cold, or emotionally distant in the name of order",
    watchOutDetails:
      "What may feel difficult is leaving enough softness inside your structure. When clarity becomes control, you may start removing not only clutter but also warmth, spontaneity, and emotional texture. The goal is not to become less minimalist. It is to make sure your simplicity still feels alive, welcoming, and human.",
    bestMatch:
      "Spaces and people that feel calm, intentional, balanced, and quietly grounding",
    growth1:
      "Growth for you often begins when you realize that clarity does not have to erase warmth. Your mind can stay clean and spacious while still allowing feeling, softness, and a little beautiful imperfection. Structure is most supportive when it gives life shape, not when it squeezes life out.",
    growth2:
      "The healthiest minimalist room is not sterile. It is restful. It holds only what matters, but what remains feels true, useful, and alive. In the same way, your mind becomes strongest when its clarity leaves space for both order and feeling.",
    reminder:
      "Your peace is powerful. Just remember that simplicity feels best when it creates room for life, not only room for control.",
  },

  dreamy: {
    title: "The Dreamy Room 🌙",
    summary:
      "Your mind matches a Dreamy Room — soft, imaginative, emotionally layered, and full of quiet wonder.",
    desc1:
      "Your inner world seems naturally drawn to softness, atmosphere, and the kind of beauty that feels almost like a memory. You are likely someone whose mind does not only live in logic or practicality. Part of you moves through symbols, feelings, longing, and emotional imagination. A dreamy room reflects that part of you beautifully.",
    desc2:
      "What makes this room aesthetic meaningful for you is its ability to hold emotion without forcing it into hard shapes. Dreamy spaces often feel gentle, poetic, and slightly removed from ordinary time. That may be exactly why your mind is drawn to them. They mirror the way you think and feel when you are most yourself: reflective, tender, and full of quiet inner movement.",
    meaning1:
      "This result often means your mind is deeply connected to imagination, emotional nuance, and beauty that cannot always be fully explained. You may be especially responsive to light, color, atmosphere, and details that create feeling rather than function alone. A room that feels too plain or mechanical may leave you emotionally untouched, even if it is technically beautiful.",
    meaning2:
      "Because of that, you may naturally seek environments that feel soft, expressive, and a little transcendent. Your mind may restore itself through beauty that gives it room to drift, reflect, and feel. This does not mean you are disconnected from reality. It means your inner life needs more than efficiency. It needs emotional resonance and space for imagination.",
    showUp1:
      "In daily life, this energy can show up as a love of soft glowing lights, hazy colors, flowing curtains, delicate decor, romantic details, and corners that feel like small worlds of their own. You may be the kind of person who attaches feeling to objects, notices the emotional mood of a room, and wants your surroundings to feel almost story-like.",
    showUp2:
      "You may also be someone who values emotional beauty as much as comfort or function. A dreamy room reflects a mind that wants wonder, tenderness, and a sense that life still contains hidden beauty. The challenge is making sure your imagination stays connected to grounding, so the room becomes a source of inspiration rather than a place to disappear into indefinitely.",
    strengths: "Imagination, tenderness, emotional atmosphere",
    strengthDetails:
      "Your strengths include emotional sensitivity, creative perception, and the ability to make life feel more poetic and meaningful. You likely understand that atmosphere matters, and that beauty can heal, soften, and open the mind in ways efficiency cannot. That gives your presence and your space a kind of quiet enchantment others may feel without always knowing how to name it.",
    watchOut: "Drifting too far into fantasy, delay, or emotional fog",
    watchOutDetails:
      "What may feel difficult is grounding your inner world enough to act clearly within the outer one. When beauty and longing become stronger than structure, it can be easy to remain in feeling, imagining, or waiting. The goal is not to become less dreamy. It is to give your imagination enough form that it can become something real and nourishing.",
    bestMatch:
      "Spaces and people that feel gentle, imaginative, emotionally rich, and quietly magical",
    growth1:
      "Growth for you often begins when you trust that grounding does not destroy beauty. A dreamy mind does not lose its softness by becoming more practical. It becomes more powerful when its atmosphere can be lived in, not only felt from a distance.",
    growth2:
      "The healthiest dreamy room is not one that only lets you float away. It is one that holds wonder while still supporting your real life. That is when your imagination becomes not only beautiful, but sustaining.",
    reminder:
      "Your mind was made for wonder. Just remember that even dreams become more meaningful when they have somewhere real to land.",
  },

  vintage: {
    title: "The Vintage Room 🕰️",
    summary:
      "Your mind matches a Vintage Room — nostalgic, soulful, detail-loving, and quietly full of character.",
    desc1:
      "Your inner world seems drawn to beauty with memory inside it. You are likely someone who feels connected to atmosphere, history, texture, and the kind of charm that cannot be mass-produced. A vintage room reflects a mind that values feeling over trend, depth over newness, and personality over perfection.",
    desc2:
      "What makes this room aesthetic meaningful for you is the sense of soul it carries. Vintage spaces often feel layered, intimate, and emotionally textured. They suggest that life becomes more beautiful when it carries traces of time, story, and meaning. Your mind may be especially responsive to that. You do not only want a room that looks good. You want one that feels like it has lived.",
    meaning1:
      "This result often means your mind is deeply connected to nostalgia, symbolism, and the emotional richness of detail. You may notice the subtle feeling of objects, colors, fabrics, and styles in ways that others overlook. You might also feel drawn to things that seem slightly timeless or gently worn, because they feel more human and real than anything too polished.",
    meaning2:
      "Because of that, you may naturally seek environments that feel warm, storied, and full of thoughtful character. Your mind may restore itself in spaces that suggest continuity, memory, and emotional texture. This does not necessarily mean you live in the past. It often means you value beauty that feels rooted rather than disposable.",
    showUp1:
      "In daily life, this energy can show up as a love of antique details, framed prints, warm woods, layered fabrics, meaningful objects, classic silhouettes, and decor that carries a sense of age or atmosphere. You may be the kind of person who feels attached to pieces that tell a story and who wants your room to feel personal rather than generic.",
    showUp2:
      "You may also be someone who experiences beauty as something deeply linked to memory and emotional depth. A vintage room reflects a mind that wants character, warmth, and resonance. The challenge is making sure nostalgia continues to support your present life instead of becoming something that quietly keeps you emotionally turned backward.",
    strengths: "Soul, character, emotional richness",
    strengthDetails:
      "Your strengths include depth of feeling, aesthetic sensitivity, and the ability to notice value in things that are subtle, layered, and easily overlooked. You likely create spaces that feel personal, meaningful, and full of quiet emotional intelligence. That gives your environment a sense of presence that is difficult to imitate and easy to remember.",
    watchOut: "Becoming too attached to nostalgia, heaviness, or the past",
    watchOutDetails:
      "What may feel difficult is leaving enough room for freshness. When your mind is drawn to what already carries meaning, it may be harder to welcome what is still new, unfinished, or emotionally unfamiliar. The goal is not to abandon nostalgia. It is to let it enrich your life without making your world feel closed to change.",
    bestMatch:
      "Spaces and people that feel soulful, thoughtful, warm, and full of genuine character",
    growth1:
      "Growth for you often begins when you remember that history and freshness can coexist. You do not need to lose your love of depth, memory, and timeless beauty in order to make room for the present. In fact, your mind may feel strongest when it can hold both what has lasted and what is still arriving.",
    growth2:
      "The healthiest vintage room is not a museum. It is a living space with soul. In the same way, your mind is most alive when its depth does not trap it in memory, but helps it create meaning in the life unfolding now.",
    reminder:
      "Your mind has beautiful depth. Just remember that the present deserves your attention too, not only what already feels meaningful.",
  },

  creative: {
    title: "The Creative Studio 🎨",
    summary:
      "Your mind matches a Creative Studio — expressive, alive, idea-filled, and constantly reaching for new form.",
    desc1:
      "Your inner world seems naturally full of movement. You are likely someone whose mind generates associations, ideas, feelings, and sparks that do not always fit into neat categories. A creative studio reflects that beautifully. It is a room style that feels active, personal, and full of the energy of becoming.",
    desc2:
      "What makes this room aesthetic meaningful for you is its openness to expression. Creative spaces are not only designed to look a certain way. They exist to let something happen inside them. That may be why your mind feels reflected there. You are probably less interested in static perfection than in an environment that feels alive, layered, and capable of holding inspiration when it arrives.",
    meaning1:
      "This result often means your mind is deeply connected to imagination, self-expression, and the need to make meaning through creation. You may think in images, moods, fragments, connections, or intuitive leaps rather than only in straight lines. A room that is too rigid, blank, or emotionally flat may leave your mind unstimulated or quietly restless.",
    meaning2:
      "Because of that, you may naturally seek environments that feel dynamic, textured, and full of personality. Your mind may restore itself not only through rest, but through expression. This does not always mean making art professionally. It can simply mean that your inner world needs room to play, arrange, imagine, and turn feeling into form.",
    showUp1:
      "In daily life, this energy can show up as layered decor, art supplies, visual inspiration, changing arrangements, expressive color, favorite objects, unfinished ideas, and a room that feels more like a living process than a finished display. You may be the kind of person whose space evolves with your mood, projects, or emotional season.",
    showUp2:
      "You may also be someone who experiences your room as an extension of your inner imagination. A creative studio reflects a mind that wants freedom, expression, and possibility. The challenge is making sure the energy stays supportive rather than becoming so scattered that inspiration turns into overwhelm or unfinished mental noise.",
    strengths: "Expression, imagination, creative energy",
    strengthDetails:
      "Your strengths include originality, emotional expressiveness, and the ability to make your environment feel alive with meaning. You likely bring personality, movement, and fresh perspective into the spaces you touch. That gives your mind a strong relationship to possibility, and it helps others feel your presence as interesting, dynamic, and unmistakably personal.",
    watchOut: "Scattering your energy or creating so much stimulation that clarity gets lost",
    watchOutDetails:
      "What may feel difficult is giving your ideas enough structure to land. Because your mind is so alive with possibility, it can be easy to keep adding, shifting, imagining, and starting without enough grounding to finish or stabilize. The goal is not to become less creative. It is to build containers that help your creativity become more usable and sustaining.",
    bestMatch:
      "Spaces and people that welcome originality, movement, expression, and emotional aliveness",
    growth1:
      "Growth for you often begins when you understand that structure is not the enemy of creativity. In many cases, it is what allows your ideas to survive long enough to become real. A little order does not silence your imagination. It helps your imagination hold its shape.",
    growth2:
      "The healthiest creative studio is not chaotic for its own sake. It is energized, but workable. It holds inspiration without drowning in it. In the same way, your mind becomes strongest when expression and direction begin to support each other.",
    reminder:
      "Your mind was made to create. Just remember that your ideas deserve enough structure to become more than passing sparks.",
  },

  moody: {
    title: "The Moody Artistic Room 🌑",
    summary:
      "Your mind matches a Moody Artistic Room — deep, atmospheric, emotionally intense, and quietly unforgettable.",
    desc1:
      "Your inner world seems naturally drawn to depth. You are likely someone who feels connected to atmosphere, contrast, shadow, and the kind of beauty that carries emotional weight. A moody artistic room reflects a mind that is not satisfied by surfaces alone. You seem to be drawn toward spaces that feel rich, layered, and capable of holding more complex feeling.",
    desc2:
      "What makes this room aesthetic meaningful for you is its emotional gravity. Moody spaces do not rush to brighten everything. They allow darkness, texture, and intensity to exist without apology. Your mind may feel seen there because part of you values depth more than cheerfulness and resonance more than lightness. You may not always want a room that feels easy. You may want one that feels true.",
    meaning1:
      "This result often means your mind is deeply connected to emotion, atmosphere, and psychological richness. You may be especially sensitive to tone, contrast, and the subtle feeling of a space. Bright, overly simple, or overly cheerful environments may feel flat to you if they leave no room for nuance, mystery, or inner complexity.",
    meaning2:
      "Because of that, you may naturally seek environments that feel intimate, expressive, and full of mood. Your mind may restore itself not by becoming lighter, but by feeling understood in its depth. This does not make you negative. It often means your inner world is serious, perceptive, and drawn to beauty that feels profound rather than merely pleasant.",
    showUp1:
      "In daily life, this energy can show up as love for deep colors, layered lighting, artistic detail, dark woods, textured fabrics, strong atmosphere, meaningful objects, and spaces that feel cinematic or emotionally charged. You may be the kind of person who wants your room to have presence, not just function.",
    showUp2:
      "You may also be someone who uses your environment to honor parts of yourself that are thoughtful, intense, or hard to reduce into simple words. A moody artistic room reflects a mind that wants intimacy with feeling, not escape from it. The challenge is making sure depth does not become heaviness so constant that your room stops restoring you and starts reinforcing emotional stuckness.",
    strengths: "Depth, atmosphere, emotional intensity",
    strengthDetails:
      "Your strengths include emotional honesty, aesthetic depth, and the ability to create environments that feel rich, memorable, and full of real presence. You likely understand that beauty does not need to be bright to be powerful. There is strength in shadow, and your mind seems naturally attuned to it. That gives your space a gravity and distinctiveness many people quietly admire.",
    watchOut: "Letting intensity become heaviness or making your environment too emotionally dense",
    watchOutDetails:
      "What may feel difficult is balancing depth with enough openness and light. When your mind is strongly drawn to mood, it can be tempting to remain in intensity longer than is nourishing. The goal is not to become less deep. It is to make sure your atmosphere still supports movement, breath, and emotional renewal.",
    bestMatch:
      "Spaces and people that feel deep, sincere, expressive, and emotionally real",
    growth1:
      "Growth for you often begins when you realize that light does not cancel depth. You do not have to choose between emotional richness and emotional health. Sometimes the strongest atmosphere is one that knows how to hold contrast, where shadow and softness can exist in the same room.",
    growth2:
      "The healthiest moody artistic room is not oppressive. It is immersive. It lets you feel deeply without trapping you inside one emotional temperature forever. In the same way, your mind becomes strongest when its depth remains alive, flexible, and able to receive warmth too.",
    reminder:
      "Your depth is beautiful. Just remember that even the richest atmosphere needs a little light to stay alive.",
  },
} as const;

type ResultKey = keyof typeof results;

function ResultContent() {
  const sp = useSearchParams();
  const rawKey = sp.get("type") as ResultKey | null;
  const key: ResultKey = rawKey && rawKey in results ? rawKey : "cozy";
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
          Room Aesthetic Personality Result
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
            What this room means
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
            href="/quiz/aesthetic-room-matches-your-mind"
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

export default function AestheticRoomMatchesYourMindResult() {
  return (
    <Suspense fallback={<div style={{ padding: "40px" }}>Loading...</div>}>
      <ResultContent />
    </Suspense>
  );
}