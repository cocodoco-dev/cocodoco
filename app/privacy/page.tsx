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
          lineHeight: "1.7",
          color: "#333",
        }}
      >
        <h1 style={{ marginBottom: "20px" }}>Privacy Policy</h1>

        <p>
          cocodoco is a personality quiz website created for entertainment
          purposes.
        </p>

        <h3 style={{ marginTop: "24px" }}>Information We Collect</h3>
        <p>
          cocodoco does not require users to create accounts or provide personal
          information in order to use the quizzes. We do not collect personally
          identifiable information such as names, email addresses, or phone
          numbers.
        </p>

        <h3 style={{ marginTop: "24px" }}>Cookies</h3>
        <p>
          This website may use cookies and similar technologies to improve the
          user experience, analyze traffic, and support advertising services.
        </p>

        <h3 style={{ marginTop: "24px" }}>Advertising</h3>
        <p>
          We may display advertisements through Google AdSense. Google may use
          cookies to personalize ads based on your visits to this and other
          websites.
        </p>
        <p>
          Google uses the DART cookie to serve ads to users based on their
          visit to cocodoco.fun and other sites on the Internet. Users may opt
          out of the use of the DART cookie by visiting the Google ad and
          content network privacy policy.
        </p>

        <h3 style={{ marginTop: "24px" }}>Third-Party Services</h3>
        <p>
          Third-party vendors, including Google, may use cookies to serve ads
          based on a user's prior visits to this website or other websites.
        </p>
        <p>
          You can learn more about how Google uses data by visiting Google’s
          advertising and privacy policies.
        </p>

        <h3 style={{ marginTop: "24px" }}>User Choices</h3>
        <p>
          Users can choose to disable cookies through their individual browser
          settings. They may also opt out of certain personalized advertising
          features through Google’s ad settings.
        </p>

        <h3 style={{ marginTop: "24px" }}>Contact</h3>
        <p>
          If you have any questions about this Privacy Policy, you may contact
          us through this website.
        </p>

        <p style={{ marginTop: "24px", fontSize: "14px", color: "#666" }}>
          Last updated: March 2026
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