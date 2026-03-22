import { motion } from "framer-motion";
import { FaUpload, FaPalette, FaMagic, FaArrowRight } from "react-icons/fa";

/* ========================= */
/* HOW IT WORKS SECTION */
/* ========================= */

export default function HowItWorksSection() {
  return (
    <section style={section}>
      <div style={bgGlow} />

      {/* TITLE */}
      <motion.h2
        style={title}
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        Get Your Epic Wall Portrait
        <br />
        <span style={gradient}>Easier than posting your next selfie.</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        style={subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        No design skills. No Photoshop. No printing headaches.
        <br />
        Just send one photo — we handle the rest.
      </motion.p>

      {/* STEPS */}
      <div style={stepsWrapper}>
        <Step
          icon={<FaUpload />}
          title="Drop Your Photo"
          text="Take any normal photo. Phone quality is enough. No special setup needed."
          delay={0}
        />

        <Arrow />

        <Step
          icon={<FaPalette />}
          title="Choose your identity"
          text="Gangster, CEO, warrior, movie character — or describe your own vision."
          delay={0.15}
        />

        <Arrow />

        <Step
          icon={<FaMagic />}
          title="We create your masterpiece"
          text="You receive cinematic, high-resolution artwork — ready to hang."
          delay={0.3}
        />
      </div>

      {/* EXTRA VALUE LINE */}
      <motion.div
        style={bottomBox}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.4 }}
        viewport={{ once: true }}
      >
        Production in 2–5 business days
        <strong> — shipped fast to your door</strong>
      </motion.div>
    </section>
  );
}

/* ========================= */
/* STEP COMPONENT */
/* ========================= */

function Step({
  icon,
  title,
  text,
  delay,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  delay: number;
}) {
  return (
    <motion.div
      style={card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay, duration: 0.6 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        boxShadow: "0 30px 120px rgba(168,85,247,.35)",
      }}
    >
      <div style={iconWrapper}>{icon}</div>

      <h3 style={cardTitle}>{title}</h3>

      <p style={cardText}>{text}</p>
    </motion.div>
  );
}

/* ========================= */
/* ARROW */
/* ========================= */

function Arrow() {
  return (
    <motion.div
      style={arrow}
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ delay: 0.2 }}
      viewport={{ once: true }}
    >
      <FaArrowRight />
    </motion.div>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const section: React.CSSProperties = {
  padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
  maxWidth: "1200px",
  margin: "0 auto",
  textAlign: "center",
  position: "relative",
};

const bgGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 20%, rgba(168,85,247,0.2), transparent 65%)",
  pointerEvents: "none",
};

const title: React.CSSProperties = {
  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
  fontWeight: 900,
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle: React.CSSProperties = {
  maxWidth: "700px",
  margin: "1.8rem auto 3.5rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  opacity: 0.9,
};

const stepsWrapper: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "1.2rem",
  flexWrap: "wrap",
};

const card: React.CSSProperties = {
  maxWidth: "320px",
  flex: "1 1 280px",
  padding: "30px 24px",
  borderRadius: "24px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  backdropFilter: "blur(16px)",
  transition: "all 0.3s ease",
};

const iconWrapper: React.CSSProperties = {
  fontSize: "1.6rem",
  marginBottom: "16px",
  color: "#c084fc",
};

const cardTitle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 800,
  marginBottom: "10px",
};

const cardText: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.85,
};

const arrow: React.CSSProperties = {
  fontSize: "1.4rem",
  opacity: 0.5,
  display: "flex",
  alignItems: "center",
};

const bottomBox: React.CSSProperties = {
  marginTop: "3.5rem",
  padding: "18px 24px",
  borderRadius: "18px",
  display: "inline-block",
  background:
    "linear-gradient(135deg, rgba(168,85,247,0.15), rgba(236,72,153,0.15))",
  border: "1px solid rgba(168,85,247,.3)",
  fontSize: "0.95rem",
};