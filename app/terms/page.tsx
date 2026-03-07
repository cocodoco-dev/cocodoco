export default function Terms() {
  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#fdf2f8",
        fontFamily: "sans-serif",
        padding: "48px 18px",
      }}
    >
      <div
        style={{
          maxWidth: "800px",
          margin: "0 auto",
          background: "rgba(255,255,255,0.8)",
          border: "1px solid #f2a7b8",
          borderRadius: "16px",
          padding: "24px",
        }}
      >
        <h1>Terms of Use</h1>

        <p>
          cocodoco provides quiz content for entertainment purposes only.
        </p>

        <p>
          By using this site, you agree to use it responsibly and not misuse,
          disrupt, or attempt to harm the service.
        </p>

        <p>
          Quiz results are not professional advice and should be treated as fun,
          lighthearted content.
        </p>

        <p style={{ marginTop: "20px" }}>Last updated: 2026</p>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: "20px",
            color: "#ff4d7d",
            fontWeight: "bold",
            textDecoration: "none",
          }}
        >
          ← Back to Home
        </a>
      </div>
    </main>
  );
}