import Container from "../ui/Container";
import { useNavigate } from "react-router-dom";

export default function Footer() {
  const navigate = useNavigate();

  return (
    <footer style={footer}>
      <div style={glow} />

      <Container>
        {/* TOP GRID */}
        <div style={grid}>
          {/* BRAND */}
          <div>
            <h2 style={logo}>ElevateFrame</h2>

            <p style={tagline}>
              Transform your identity into cinematic, high-status artwork.
              <br />
              <strong>Built to impress — online & in real life.</strong>
            </p>

            {/* SOCIALS */}
            {/* <div style={socials}>
              <FaInstagram />
              <FaTwitter />
              <FaEnvelope />
            </div> */}
          </div>

          {/* VALUE STACK */}
          <div>
            <h4 style={sectionTitle}>What You Get</h4>

            <ul style={list}>
              <li>48-hour first proof</li>
              <li>Ultra-realistic cinematic editing</li>
              <li>Print-ready 8K resolution</li>
              <li>Free revision included</li>
              <li>Unlimited refinements until perfect</li>
            </ul>
          </div>

          {/* RISK REVERSAL */}
          <div>
            <h4 style={sectionTitle}>Zero Risk</h4>

            <ul style={list}>
              <li>Love it or we revise it</li>
              <li>No design skills needed</li>
              <li>Private & secure processing</li>
              <li>You own the final artwork</li>
            </ul>
          </div>

          {/* CTA BLOCK */}
          <div style={ctaBlock}>
            <h3 style={ctaTitle}>
              Ready to see your
              <br />
              <span style={gradient}>most powerful version?</span>
            </h3>

            <button style={cta} onClick={() => navigate("/checkout")}>
              Get My Transformation
            </button>

            <p style={ctaSub}>
              {/* Takes 30 seconds • First preview in 24–48h */}
              • First preview in 24–48h
            </p>
          </div>
        </div>

        {/* DIVIDER */}
        <div style={divider} />

        {/* BOTTOM BAR */}
        <div style={bottom}>
          <span>
            © {new Date().getFullYear()} ElevateFrame. All rights reserved.
          </span>

          {/* <div style={links}>
            <span>Privacy</span>
            <span>Terms</span>
            <span>Support</span>
          </div> */}
        </div>
      </Container>
    </footer>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const footer: React.CSSProperties = {
  position: "relative",
  padding: "5rem 0 3rem",
  borderTop: "1px solid rgba(255,255,255,0.08)",
  overflow: "hidden",
};

const glow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.2), transparent 60%)",
  pointerEvents: "none",
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "2.8rem",
  alignItems: "start",
};

const logo: React.CSSProperties = {
  margin: 0,
  fontSize: "1.6rem",
  fontWeight: 900,
  letterSpacing: "-0.02em",
};

const tagline: React.CSSProperties = {
  marginTop: "1rem",
  color: "var(--muted)",
  lineHeight: 1.7,
  fontSize: "0.95rem",
};

const sectionTitle: React.CSSProperties = {
  fontSize: "0.95rem",
  fontWeight: 700,
  marginBottom: "0.9rem",
  letterSpacing: "0.05em",
  textTransform: "uppercase",
  opacity: 0.8,
};

const list: React.CSSProperties = {
  display: "grid",
  gap: "0.6rem",
  color: "var(--muted)",
  fontSize: "0.95rem",
  lineHeight: 1.6,
};

const ctaBlock: React.CSSProperties = {
  background:
    "linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  borderRadius: "22px",
  padding: "1.8rem",
  backdropFilter: "blur(14px)",
};

const ctaTitle: React.CSSProperties = {
  margin: 0,
  fontSize: "1.2rem",
  fontWeight: 800,
  lineHeight: 1.3,
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const cta: React.CSSProperties = {
  marginTop: "1.2rem",
  width: "100%",
  padding: "14px",
  borderRadius: "16px",
  border: "none",
  fontWeight: 800,
  fontSize: "0.95rem",
  cursor: "pointer",
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  color: "white",
  boxShadow: "0 12px 40px rgba(168,85,247,.45)",
};

const ctaSub: React.CSSProperties = {
  marginTop: "0.7rem",
  fontSize: "0.8rem",
  opacity: 0.6,
};

const divider: React.CSSProperties = {
  marginTop: "3rem",
  borderTop: "1px solid rgba(255,255,255,0.06)",
};

const bottom: React.CSSProperties = {
  marginTop: "1.6rem",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  flexWrap: "wrap",
  gap: "1rem",
  fontSize: "0.85rem",
  color: "var(--muted)",
};
