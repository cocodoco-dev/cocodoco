export default function Home() {
  const quizzes = [
    {
      title: "What Is Your Love Language?",
      desc: "Discover how your heart most naturally gives and receives love 💗",
      href: "/quiz/love-language",
      badge: "New",
    },
    {
      title: "What Aesthetic Matches Your Soul?",
      desc: "Discover the aesthetic that feels most true to your inner world ✨",
      href: "/quiz/soul-aesthetic",
      badge: "New",
    },
    {
      title: "What Is Your Attachment Style in Love?",
      desc: "Discover how your heart naturally connects in relationships 💘",
      href: "/quiz/attachment-style",
      badge: "New",
    },
    {
      title: "What Is Your Core Personality Color?",
      desc: "Discover the color that defines your deepest personality 🎨",
      href: "/quiz/personality-color",
      badge: "New",
    },
    {
      title: "What Kind of Comfort Are You?",
      desc: "Discover the kind of emotional comfort people feel from you ☁️",
      href: "/quiz/comfort-type",
      badge: "New",
    },
    {
      title: "What Kind of Romantic Energy Do You Have?",
      desc: "Discover the vibe you naturally bring into love 💘",
      href: "/quiz/romantic-energy",
      badge: "New",
    },
    {
      title: "What Is Your Hidden Talent?",
      desc: "Discover the strength inside you that people may notice later 🎁",
      href: "/quiz/hidden-talent",
      badge: "New",
    },
    {
      title: "What Vibe Does Your Soul Give Off?",
      desc: "Discover the emotional atmosphere your soul carries most 🌙",
      href: "/quiz/soul-vibe",
      badge: "New",
    },
    {
      title: "What Kind of Friend Are You?",
      desc: "Discover the role you naturally play in friendship 💞",
      href: "/quiz/friend-type",
      badge: "New",
    },
    {
      title: "What Kind of Aura Do You Have?",
      desc: "Discover the energy people feel from you instantly ✨",
      href: "/quiz/aura",
      badge: "New",
    },
    {
      title: "What Is Your Emotional Age?",
      desc: "Discover how emotionally young, deep, or mature you really are 💌",
      href: "/quiz/emotional-age",
      badge: "New",
    },
    {
      title: "What Kind of Person Are You to Others?",
      desc: "Discover how people actually see you 👀",
      href: "/quiz/person-to-others",
      badge: "New",
    },
    {
      title: "What Makes You Attractive?",
      desc: "Discover the quality that draws people to you most ✨",
      href: "/quiz/attractive",
      badge: "New",
    },
    {
      title: "Your Life Energy Test",
      desc: "Discover the energy that shapes your life most ✨",
      href: "/quiz/life-energy",
      badge: "New",
    },
    {
      title: "What Kind of Mind Do You Have?",
      desc: "Discover how your mind naturally sees the world 🧠",
      href: "/quiz/mind-type",
      badge: "New",
    },
    {
      title: "Your True Strength Test",
      desc: "Discover the strength that defines you most 💪",
      href: "/quiz/true-strength",
      badge: "New",
    },
    {
      title: "Your Social Personality Test",
      desc: "Discover your real social personality in 30 seconds 💬",
      href: "/quiz/social-personality",
      badge: "Hot",
    },
    {
      title: "Your Brain Type Test",
      desc: "Discover how your mind naturally works 🧠",
      href: "/quiz/brain-type",
      badge: "New",
    },
    {
      title: "What Energy Do You Give Off?",
      desc: "Find out the energy people feel from you instantly ✨",
      href: "/quiz/energy",
      badge: "New",
    },
    {
      title: "Your Inner Animal Test",
      desc: "Find the animal that matches your true instinct 🐾",
      href: "/quiz/inner-animal",
      badge: "Hot",
    },
    {
      title: "Hidden Personality Test",
      desc: "Discover the hidden side of your personality ✨",
      href: "/quiz/hidden-personality",
      badge: "Hot",
    },
    {
      title: "Love Style Test",
      desc: "What kind of lover are you? 💘",
      href: "/quiz/love-style",
      badge: "New",
    },
    {
      title: "Everyday Vibe Test",
      desc: "Find your vibe in 30 seconds ✨",
      href: "/quiz/everyday-vibe",
      badge: "Popular",
    },
  ];

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "48px 18px",
      }}
    >
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1
          style={{
            fontSize: "52px",
            margin: 0,
            color: "#111827",
          }}
        >
          cocodoco
        </h1>

        <p
          style={{
            marginTop: "10px",
            fontSize: "18px",
            color: "#374151",
          }}
        >
          Cute quizzes for your mood, personality, and lifestyle 🧁
        </p>
      </header>

      <section
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {quizzes.map((q) => (
          <a
            key={q.title}
            href={q.href}
            style={{
              display: "block",
              background: "rgba(255,255,255,0.75)",
              border: "1px solid #f2a7b8",
              borderRadius: "16px",
              padding: "18px",
              textDecoration: "none",
              color: "#111827",
              boxShadow: "0 8px 30px rgba(0,0,0,0.04)",
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "20px" }}>{q.title}</h2>
              <span
                style={{
                  fontSize: "12px",
                  padding: "6px 10px",
                  borderRadius: "999px",
                  background:
                    q.badge === "Popular"
                      ? "#ff8fab"
                      : q.badge === "Hot"
                      ? "#f97316"
                      : "#111827",
                  color: "white",
                  fontWeight: 700,
                }}
              >
                {q.badge}
              </span>
            </div>

            <p style={{ margin: 0, color: "#374151" }}>{q.desc}</p>

            <div style={{ marginTop: "14px", fontWeight: 700, color: "#ff4d7d" }}>
              Start →
            </div>
          </a>
        ))}
      </section>

      <div
        style={{
          margin: "28px auto 0",
          width: "min(920px, 100%)",
          height: "120px",
          borderRadius: "14px",
          border: "1px dashed #f2a7b8",
          background: "rgba(255, 255, 255, 0.6)",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          color: "#9ca3af",
          fontSize: "14px",
        }}
      >
        Ad Space (Google AdSense will go here)
      </div>

      <footer
        style={{
          textAlign: "center",
          marginTop: "22px",
          color: "#9ca3af",
        }}
      >
        © {new Date().getFullYear()} cocodoco — made for fun

        <div
          style={{
            marginTop: "10px",
            display: "flex",
            gap: "14px",
            justifyContent: "center",
            flexWrap: "wrap",
          }}
        >
          <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>
            Privacy
          </a>

          <a href="/terms" style={{ color: "#9ca3af", textDecoration: "none" }}>
            Terms
          </a>

          <a href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>
            Contact
          </a>
        </div>
      </footer>
    </main>
  );
}