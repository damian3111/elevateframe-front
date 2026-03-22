import { motion } from "framer-motion";
import { FaArrowRight, FaBolt, FaCrown } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ========================= */
/* FINAL CTA SECTION */
/* ========================= */

export default function FinalCTASection() {
  const navigate = useNavigate();

  return (
    <section style={section}>
      {/* FULL WIDTH BACKGROUND */}
      <div style={fullBg}>
        <div style={gradientBg} />
        <div style={radialGlow} />
      </div>

      <div style={content}>
        {/* BADGE */}
        <motion.div
          style={badge}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
        >
          <FaBolt /> Limited spots today
        </motion.div>

        {/* HEADLINE */}
        <motion.h2
          style={title}
          initial={{ opacity: 0, y: 60 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          This Is The Last Time
          <br />
          <span style={gradient}>You’ll See Yourself Like This</span>
        </motion.h2>

        {/* SUBTEXT */}
        <motion.p
          style={subtitle}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.2 }}
        >
          In 24 hours, you could have a version of yourself that looks
          <strong> powerful, respected, unforgettable.</strong>
          <br />
          <br />
            Or scroll on… and stay exactly where you are
        </motion.p>

        {/* VISUAL PULSE ORB */}
        <motion.div
          style={orb}
          animate={{
            scale: [1, 1.2, 1],
            opacity: [0.6, 1, 0.6],
          }}
          transition={{
            repeat: Infinity,
            duration: 4,
            ease: "easeInOut",
          }}
        />

        {/* CTA */}
        <motion.button
          style={cta}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 30px 100px rgba(168,85,247,.8)",
          }}
          whileTap={{ scale: 0.96 }}
          onClick={() => navigate("/checkout")}
        >
          <FaCrown />
            Get My Transformation Now
          <FaArrowRight />
        </motion.button>

        {/* TRUST LINE */}
        <p style={micro}>
          100% risk-free • Unlimited revisions • 24–48h first version
        </p>
      </div>
    </section>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const section: React.CSSProperties = {
  position: "relative",
  marginTop: "6rem",
  width: "100%",
  overflow: "hidden",
  maxWidth: "100%"
};

/* FULL WIDTH BACKGROUND FIX */
const fullBg: React.CSSProperties = {
  position: "absolute",
  left: "50%",
  transform: "translateX(-50%)",
  width: "100vw",
  height: "100%",
  top: 0,
  zIndex: 0,
};

const gradientBg: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background: "linear-gradient(135deg,#0f0f0f,#000)",
};

const radialGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 30%, rgba(168,85,247,0.35), transparent 70%)",
};

/* CONTENT */
const content: React.CSSProperties = {
  position: "relative",
  zIndex: 2,
  maxWidth: "1000px",
  margin: "0 auto",
  padding: "clamp(5rem, 12vw, 8rem) 1.5rem",
  textAlign: "center",
};

/* BADGE */
const badge: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "8px",
  padding: "8px 16px",
  borderRadius: "999px",
  background: "rgba(168,85,247,.15)",
  border: "1px solid rgba(168,85,247,.3)",
  marginBottom: "2rem",
  fontSize: "0.85rem",
};

/* TITLE */
const title: React.CSSProperties = {
  fontSize: "clamp(2.5rem, 6vw, 4.8rem)",
  fontWeight: 900,
  lineHeight: 1.05,
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

/* SUBTEXT */
const subtitle: React.CSSProperties = {
  maxWidth: "720px",
  margin: "2rem auto 3rem",
  fontSize: "1.2rem",
  lineHeight: 1.7,
  opacity: 0.85,
};

/* ORB */
const orb: React.CSSProperties = {
  width: "140px",
  height: "140px",
  margin: "0 auto 3rem",
  borderRadius: "50%",
  background:
    "radial-gradient(circle, rgba(168,85,247,0.6), rgba(236,72,153,0.3), transparent)",
  filter: "blur(20px)",
};

/* CTA */
const cta: React.CSSProperties = {
  display: "inline-flex",
  alignItems: "center",
  gap: "12px",
  padding: "20px 60px",
  borderRadius: "26px",
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  border: "none",
  color: "white",
  fontWeight: 900,
  fontSize: "1.15rem",
  cursor: "pointer",
  boxShadow: "0 20px 70px rgba(168,85,247,.6)",
};

/* MICRO */
const micro: React.CSSProperties = {
  marginTop: "1.6rem",
  fontSize: "0.9rem",
  opacity: 0.6,
};