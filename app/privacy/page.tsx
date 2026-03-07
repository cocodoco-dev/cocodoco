export default function Privacy() {
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
        <h1>Privacy Policy</h1>

        <p>cocodoco is a personality quiz website created for entertainment.</p>

        <p>
          This website may use cookies and similar technologies to improve the
          user experience and analyze traffic.
        </p>

        <p>
          We may display advertisements through Google AdSense. Google may use
          cookies to personalize ads based on your visits to this and other
          websites.
        </p>

        <p>
          You can learn more about how Google uses data by visiting Google&apos;s
          advertising policies.
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