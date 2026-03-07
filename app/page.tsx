export default function Home() {
  const quizzes = [
    {
      title: "Everyday Vibe Test",
      desc: "Find your vibe in 30 seconds ✨",
      href: "/quiz/everyday-vibe",
      badge: "Popular",
    },
    {
      title: "Love Style Test",
      desc: "What kind of lover are you? 💘",
      href: "/quiz/love-style",
      badge: "New",
    },
    {
      title: "Hidden Personality Test",
      desc: "Discover the hidden side of your personality ✨",
      href: "/quiz/hidden-personality",
      badge: "Hot",
    },
    {
      title: "Your Inner Animal Test",
      desc: "Find the animal that matches your true instinct 🐾",
      href: "/quiz/inner-animal",
      badge: "Hot",
    },
    {
      title: "What Energy Do You Give Off?",
      desc: "Find out the energy people feel from you instantly ✨",
      href: "/quiz/energy",
      badge: "New",
    },
    {
      title: "Your Brain Type Test",
      desc: "Discover how your mind naturally works 🧠",
      href: "/quiz/brain-type",
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
      <header style={{ textAlign: "center", marginBottom: "30px" }}>
        <h1 style={{ fontSize: "52px", margin: 0 }}>cocodoco</h1>
        <p style={{ marginTop: "10px", fontSize: "18px" }}>
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