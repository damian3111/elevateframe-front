import { motion } from "framer-motion";
import { FaCrown, FaFire, FaUserSecret, FaGem } from "react-icons/fa";
import { useNavigate } from "react-router-dom";

/* ========================= */
/* HERO SECTION – AI PORTRAITS */
/* ========================= */

export default function HeroSection() {
  const navigate = useNavigate();

  return (
    <section style={hero}>
      <div style={bgGlow} />

      {/* HEADLINE */}
      <motion.h1
        initial={{ opacity: 0, y: 70 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.9 }}
        style={title}
      >
        You’ve never seen yourself like this.
        <br />
        <span style={dim}>Not in photos. Not in reality.</span>
        <br />
        <span style={gradient}>
          Become the version of you people respect.
        </span>
      </motion.h1>

      {/* SUBHEAD */}
      <motion.p
        style={subtitle}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
      >
        Send us your photo. We transform you into cinematic, high-status
        portraits — gangster, billionaire, warrior, movie character.
        <br />
        <br />
        <strong>
          Custom-made. Ultra-realistic. Ready to hang on your wall.
        </strong>
      </motion.p>

      {/* VISUAL PREVIEW */}
      <motion.div
        style={imageWrapper}
        initial={{ opacity: 0, scale: 0.92 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ delay: 0.35, duration: 0.8 }}
      >
        {/* <img
          src={i1}
          alt="AI Portrait Example"
          style={image}
        /> */}

        <div style={imageOverlay} />
      </motion.div>

      {/* BENEFITS */}
      <motion.div
        style={benefitsWrapper}
        initial="hidden"
        animate="visible"
        variants={{
          visible: { transition: { staggerChildren: 0.12 } },
        }}
      >
        <Benefit
          icon={<FaUserSecret />}
          text="Become a gangster, CEO, warrior — any identity you want"
        />
        <Benefit
          icon={<FaFire />}
          text="Cinematic, ultra-realistic AI transformations"
        />
        <Benefit
          icon={<FaGem />}
          text="High-resolution, print-ready artwork"
        />
        <Benefit
          icon={<FaCrown />}
          text="Made to impress — online & on your wall"
        />
      </motion.div>

      {/* CTA */}
      <motion.button
        whileHover={{ scale: 1.08 }}
        whileTap={{ scale: 0.96 }}
        style={cta}
        onClick={() => navigate("/checkout")}
      >
        Get My Transformation →
      </motion.button>

      {/* MICRO TRUST */}
      <p style={micro}>
        No skills needed • 24–48h delivery • Unlimited revisions
      </p>
    </section>
  );
}

/* ========================= */
/* BENEFIT COMPONENT */
/* ========================= */

function Benefit({
  icon,
  text,
}: {
  icon: React.ReactNode;
  text: string;
}) {
  return (
    <motion.div
      style={benefit}
      variants={{
        hidden: { opacity: 0, y: 30 },
        visible: { opacity: 1, y: 0 },
      }}
      whileHover={{
        y: -10,
        boxShadow: "0 30px 100px rgba(168,85,247,.35)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 20 }}
    >
      <div style={benefitIcon}>{icon}</div>
      <span>{text}</span>
    </motion.div>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const hero: React.CSSProperties = {
  padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
  textAlign: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const bgGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.25), transparent 60%)",
  pointerEvents: "none",
};

const title: React.CSSProperties = {
  fontSize: "clamp(2.5rem, 6vw, 5.2rem)",
  fontWeight: 900,
  lineHeight: 1.05,
  letterSpacing: "-0.035em",
};

const dim: React.CSSProperties = {
  opacity: 0.45,
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle: React.CSSProperties = {
  maxWidth: "820px",
  margin: "2.4rem auto 3rem",
  fontSize: "clamp(1rem, 2vw, 1.25rem)",
  lineHeight: 1.7,
  opacity: 0.9,
};

const imageWrapper: React.CSSProperties = {
  position: "relative",
  margin: "0 auto 3.5rem",
  maxWidth: "720px",
  borderRadius: "26px",
  overflow: "hidden",
  boxShadow: "0 30px 120px rgba(0,0,0,0.45)",
};

const imageOverlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(0,0,0,0.6), transparent 40%)",
};

const benefitsWrapper: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1.2rem",
  maxWidth: "980px",
  margin: "0 auto 4rem",
};

const benefit: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  borderRadius: "20px",
  padding: "20px 22px",
  fontWeight: 600,
  fontSize: "0.98rem",
  backdropFilter: "blur(16px)",
  transition: "all 0.3s ease",
};

const benefitIcon: React.CSSProperties = {
  fontSize: "1.25rem",
  color: "#c084fc",
};

const cta: React.CSSProperties = {
  padding: "20px 58px",
  borderRadius: "24px",
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  border: "none",
  color: "white",
  fontWeight: 900,
  fontSize: "1.15rem",
  cursor: "pointer",
  boxShadow: "0 20px 60px rgba(168,85,247,.5)",
};

const micro: React.CSSProperties = {
  marginTop: "1.6rem",
  opacity: 0.65,
  fontSize: "0.9rem",
};