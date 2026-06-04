export default function ArticlesPage() {
  const articles = [
    {
      title: "How to Stop Romanticizing People Too Quickly",
      desc: "You're not in love with them — you're in love with the story you're writing about them. Here's how to tell the difference.",
      href: "/articles/how-to-stop-romanticizing-people",
      category: "Love & Relationships",
      badge: "New",
    },
    {
      title: "Why You Keep Attracting the Same Type of Person",
      desc: "Different name, different face, same story. You're not unlucky — you're operating from a template. Here's how to see it.",
      href: "/articles/why-you-keep-attracting-the-same-type",
      category: "Love & Relationships",
      badge: "New",
    },
    {
      title: "Green Flags You Should Actually Look For in a Partner",
      desc: "Everyone talks about red flags. But if you don't know what healthy looks like in practice, you might miss it entirely.",
      href: "/articles/green-flags-to-look-for-in-a-partner",
      category: "Love & Relationships",
      badge: "New",
    },
    {
      title: "The 5 Love Languages Explained — And Why Mismatches Hurt So Much",
      desc: "You felt unseen. They had no idea. This is what a love language mismatch looks like — and what to do about it.",
      href: "/articles/the-5-love-languages-explained",
      category: "Love & Relationships",
      badge: "New",
    },
    {
      title: "What Your Dating Style Says About Your Past",
      desc: "If the same patterns keep showing up with different people, it might not be a choice. Here's what your dating style is telling you.",
      href: "/articles/what-your-dating-style-says-about-your-past",
      category: "Love & Relationships",
      badge: "New",
    },
    {
      title: "What Is Your Shadow Side and Why It Shows Up in Relationships",
      desc: "The hidden emotional patterns that surface when you feel unprotected — and what they really mean.",
      href: "/articles/what-is-your-shadow-side",
      category: "Personality",
      badge: "New",
    },
    {
      title: "Signs You're an Introvert (And Why It's a Superpower)",
      desc: "Being introverted is not a flaw to fix. It is a strength most people never fully understand.",
      href: "/articles/signs-youre-an-introvert",
      category: "Personality",
      badge: "New",
    },
    {
      title: "What Your Attachment Style Really Means",
      desc: "How the way you bonded as a child quietly shapes every relationship you have as an adult.",
      href: "/articles/what-your-attachment-style-really-means",
      category: "Love & Relationships",
      badge: "New",
    },
    {
      title: "The 6 Comfort Characters: Which One Are You?",
      desc: "Some people comfort through warmth. Others through listening, protection, or softness. Here is what each type really looks like.",
      href: "/articles/the-6-comfort-characters",
      category: "Personality",
      badge: "New",
    },
    {
      title: "What Your Aura Color Says About You",
      desc: "Each aura carries a different emotional energy. Here is what yours might be telling the world.",
      href: "/articles/what-your-aura-color-says-about-you",
      category: "Personality",
      badge: "New",
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
      <header style={{ textAlign: "center", marginBottom: "0" }}>
        <h1 style={{ fontSize: "52px", margin: 0, color: "#111827" }}>
          cocodoco
        </h1>
        <p style={{ marginTop: "10px", fontSize: "18px", color: "#374151" }}>
          Cute quizzes for your mood, personality, and lifestyle 🧁
        </p>
      </header>

      <nav
        style={{
          borderBottom: "2px solid #f2a7b8",
          marginBottom: "32px",
          marginTop: "28px",
        }}
      >
        <div
          style={{
            maxWidth: "920px",
            margin: "0 auto",
            display: "flex",
            gap: "32px",
            justifyContent: "center",
          }}
        >
          <a
            href="/"
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#9ca3af",
              textDecoration: "none",
              borderBottom: "3px solid transparent",
              marginBottom: "-2px",
            }}
          >
            Quiz
          </a>
          <a
            href="/articles"
            style={{
              display: "inline-block",
              paddingBottom: "10px",
              fontSize: "15px",
              fontWeight: 700,
              color: "#111827",
              textDecoration: "none",
              borderBottom: "3px solid #ff4d7d",
              marginBottom: "-2px",
            }}
          >
            Article
          </a>
        </div>
      </nav>

      <section
        style={{
          maxWidth: "920px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
          gap: "16px",
        }}
      >
        {articles.map((a) => (
          <a
            key={a.title}
            href={a.href}
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
                alignItems: "flex-start",
                gap: "10px",
                marginBottom: "10px",
              }}
            >
              <h2 style={{ margin: 0, fontSize: "18px", lineHeight: 1.4 }}>
                {a.title}
              </h2>
              <span
                style={{
                  fontSize: "11px",
                  padding: "4px 10px",
                  borderRadius: "999px",
                  background: "#111827",
                  color: "white",
                  fontWeight: 700,
                  whiteSpace: "nowrap",
                  flexShrink: 0,
                }}
              >
                {a.badge}
              </span>
            </div>
            <p
              style={{
                margin: "0 0 12px",
                color: "#374151",
                fontSize: "14px",
                lineHeight: 1.6,
              }}
            >
              {a.desc}
            </p>
            <span
              style={{
                fontSize: "12px",
                padding: "4px 10px",
                borderRadius: "999px",
                background: "#fce7f3",
                color: "#9d174d",
                fontWeight: 600,
              }}
            >
              {a.category}
            </span>
            <div style={{ marginTop: "14px", fontWeight: 700, color: "#ff4d7d" }}>
              Read →
            </div>
          </a>
        ))}
      </section>

      <footer
        style={{ textAlign: "center", marginTop: "40px", color: "#9ca3af" }}
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
          <a href="/privacy" style={{ color: "#9ca3af", textDecoration: "none" }}>Privacy</a>
          <a href="/terms" style={{ color: "#9ca3af", textDecoration: "none" }}>Terms</a>
          <a href="/contact" style={{ color: "#9ca3af", textDecoration: "none" }}>Contact</a>
        </div>
      </footer>
    </main>
  );
}
