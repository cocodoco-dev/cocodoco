export default function Contact() {
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
        <h1>Contact</h1>

        <p>For questions or business inquiries, contact:</p>

        <p style={{ fontWeight: "bold", marginTop: "12px" }}>
          your-email@example.com
        </p>

        <p style={{ color: "#6b7280", marginTop: "8px" }}>
          Replace this with your real email address later.
        </p>

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