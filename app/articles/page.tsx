export default function ArticlesPage() {
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
          textAlign: "center",
          paddingTop: "60px",
          color: "#9ca3af",
          fontSize: "16px",
        }}
      >
        Articles coming soon ✨
      </section>
    </main>
  );
}
