import Link from "next/link";

export default function AttractiveIntroPage() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fff7fb",
        fontFamily: "sans-serif",
        padding: "40px 20px",
        display: "flex",
        justifyContent: "center",
      }}
    >
      <div style={{ width: "min(760px, 100%)", color: "#111827" }}>
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 800,
            marginBottom: "16px",
            textAlign: "center",
          }}
        >
          What Makes You Attractive? ✨
        </h1>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: "18px",
          }}
        >
          This personality quiz helps you discover what makes you attractive to
          other people. Attraction is not only about appearance. Sometimes
          people are drawn to warmth, calm confidence, emotional depth, playful
          energy, or a mysterious presence that stays in their mind.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: "18px",
          }}
        >
          In this test, you will answer a series of short questions about how
          you connect with others, how you are perceived in social situations,
          and what kind of emotional energy you naturally carry. Based on your
          answers, the test will reveal your most attractive quality.
        </p>

        <p
          style={{
            fontSize: "18px",
            lineHeight: 1.8,
            color: "#374151",
            marginBottom: "28px",
          }}
        >
          Your result may show that your charm comes from gentle warmth, elegant
          presence, bright energy, quiet mystery, playful magnetism, or deep
          emotional allure. If you have ever wondered why certain people feel
          naturally drawn to you, this quiz can give you a fun and insightful
          answer.
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            marginBottom: "32px",
          }}
        >
          <Link
            href="/quiz/attractive/play"
            style={{
              display: "inline-block",
              background: "#ff8fab",
              color: "#fff",
              textDecoration: "none",
              padding: "14px 24px",
              borderRadius: "12px",
              fontWeight: 700,
              fontSize: "17px",
            }}
          >
            Start the Test
          </Link>
        </div>

        <section
          style={{
            background: "rgba(255,255,255,0.85)",
            border: "1px solid #f2d2db",
            borderRadius: "16px",
            padding: "24px",
          }}
        >
          <h2 style={{ fontSize: "24px", marginBottom: "14px" }}>
            What kind of results can you get?
          </h2>

          <ul style={{ lineHeight: 1.9, color: "#374151", paddingLeft: "20px" }}>
            <li>Warm Charm</li>
            <li>Quiet Mystery</li>
            <li>Playful Magnetism</li>
            <li>Elegant Energy</li>
            <li>Bright Presence</li>
            <li>Deep Allure</li>
          </ul>
        </section>
      </div>
    </main>
  );
}