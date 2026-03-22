import { Link } from "react-router-dom";
import Container from "../ui/Container";

export default function Footer() {
  return (
    <footer
      style={{
        borderTop: "1px solid rgba(255,255,255,0.08)",
        marginTop: "4rem",
        padding: "3rem 0",
      }}
    >
      <Container>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
            gap: "2rem",
          }}
        >
          <div>
            <h3 style={{ marginTop: 0 }}>LegendFrame</h3>
            <p style={{ color: "var(--muted)", lineHeight: 1.8 }}>
              AI-crafted cinematic portraits turned into unforgettable wall art,
              gifts, posters, and premium statement pieces.
            </p>
          </div>

          <div>
            <h4>Navigate</h4>
            <div style={{ display: "grid", gap: "0.6rem", color: "var(--muted)" }}>
              <Link to="/">Home</Link>
              <Link to="/gallery">Gallery</Link>
              <Link to="/pricing">Pricing</Link>
              <Link to="/order">Order</Link>
            </div>
          </div>

          <div>
            <h4>Promise</h4>
            <div style={{ display: "grid", gap: "0.6rem", color: "var(--muted)" }}>
              <span>48-hour turnaround</span>
              <span>1 free revision included</span>
              <span>Print-ready high resolution</span>
              <span>Love-it or we revise it</span>
            </div>
          </div>
        </div>

        <div
          style={{
            marginTop: "2.5rem",
            paddingTop: "1.5rem",
            borderTop: "1px solid rgba(255,255,255,0.06)",
            color: "var(--muted)",
            fontSize: "0.9rem",
          }}
        >
          © {new Date().getFullYear()} LegendFrame. All rights reserved.
        </div>
      </Container>
    </footer>
  );
}