import Header from "../components/layout/Header";
import Footer from "../components/layout/Footer";
import Container from "../components/ui/Container";
import GlowButton from "../components/ui/GlowButton";

export default function NotFound() {
  return (
    <div className="page-shell">
      <Header />
      <main className="section">
        <Container>
          <div style={{ textAlign: "center", padding: "6rem 0" }}>
            <h1 style={{ fontSize: "clamp(2.5rem, 8vw, 6rem)", marginBottom: "1rem" }}>404</h1>
            <p style={{ color: "var(--muted)", marginBottom: "2rem" }}>
              This page doesn’t exist.
            </p>
            <GlowButton to="/">Back Home →</GlowButton>
          </div>
        </Container>
      </main>
      <Footer />
    </div>
  );
}