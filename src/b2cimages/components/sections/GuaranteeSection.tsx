import { motion } from "framer-motion";
import { FaShieldAlt, FaRedo, FaBolt, FaGem } from "react-icons/fa";

/* ========================= */
/* GUARANTEE SECTION */
/* ========================= */

export default function GuaranteeSection() {
  return (
    <section style={section}>
      {/* Background glow */}
      <div style={bgGlow} />

      {/* HEADLINE */}
      <motion.h2
        style={title}
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        This Is The{" "}
        <span style={gradient}>Safest Purchase</span>
        <br />
        You’ll Make This Week
      </motion.h2>

      {/* SUBTEXT */}
      <motion.p
        style={subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        If you don’t look at your final image and think{" "}
        <strong>“That’s insane… that’s actually me”</strong>,
        we don’t deserve your money.
      </motion.p>

      {/* MAIN CARD */}
      <motion.div
        style={card}
        initial={{ opacity: 0, scale: 0.92 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* ICON */}
        <div style={iconWrap}>
          <FaShieldAlt />
        </div>

        {/* TITLE */}
        <h3 style={cardTitle}>
          The “Love It Or Don’t Pay” Guarantee
        </h3>

        {/* DESCRIPTION */}
        <p style={desc}>
          We will transform your photo until you’re{" "}
          <span style={highlight}>100% blown away</span>.
          <br />
          If not — you get a full refund.
          <br />
          <br />
          No forms. No stress. No awkward emails.
        </p>

        {/* FEATURES */}
        <div style={grid}>
          <GuaranteeItem
            icon={<FaRedo />}
            title="Unlimited Revisions"
            text="We refine your image until it's perfect."
          />
          <GuaranteeItem
            icon={<FaBolt />}
            title="Fast Delivery"
            text="Your first version in 24–48 hours."
          />
          <GuaranteeItem
            icon={<FaGem />}
            title="Premium Result"
            text="Cinematic, print-ready, high-status visuals."
          />
        </div>

        {/* EMPHASIS LINE */}
        <motion.p
          style={emphasis}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
        >
          We only win if you’re impressed.
        </motion.p>

        {/* CTA */}
        <motion.button
          style={cta}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 25px 80px rgba(168,85,247,.6)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Try It Risk-Free →
        </motion.button>

        {/* MICRO */}
        <p style={micro}>
          Zero risk • Full refund guarantee • You’re in control
        </p>
      </motion.div>
    </section>
  );
}

/* ========================= */
/* ITEM */
/* ========================= */

function GuaranteeItem({
  icon,
  title,
  text,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
}) {
  return (
    <motion.div
      style={item}
      whileHover={{
        y: -12,
        boxShadow: "0 30px 100px rgba(168,85,247,.35)",
        borderColor: "rgba(236,72,153,.6)",
      }}
      transition={{ type: "spring", stiffness: 260, damping: 18 }}
    >
      <div style={itemIcon}>{icon}</div>
      <h4 style={itemTitle}>{title}</h4>
      <p style={itemText}>{text}</p>
    </motion.div>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const section: React.CSSProperties = {
  padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
  textAlign: "center",
  maxWidth: "1200px",
  margin: "0 auto",
};

const bgGlow: React.CSSProperties = {

};

const title: React.CSSProperties = {
  fontSize: "clamp(2.4rem, 5vw, 4rem)",
  fontWeight: 900,
  lineHeight: 1.1,
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle: React.CSSProperties = {
  maxWidth: "720px",
  margin: "2rem auto 3.5rem",
  fontSize: "1.2rem",
  opacity: 0.8,
  lineHeight: 1.6,
};

const card: React.CSSProperties = {
  position: "relative",
  margin: "0 auto",
  maxWidth: "900px",
  borderRadius: "30px",
  padding: "3rem 2rem",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  backdropFilter: "blur(20px)",
  boxShadow: "0 40px 120px rgba(0,0,0,0.6)",
};

const iconWrap: React.CSSProperties = {
  fontSize: "2.2rem",
  marginBottom: "1.2rem",
  color: "#c084fc",
};

const cardTitle: React.CSSProperties = {
  fontSize: "1.8rem",
  fontWeight: 800,
  marginBottom: "1rem",
};

const desc: React.CSSProperties = {
  maxWidth: "600px",
  margin: "0 auto 2.5rem",
  opacity: 0.85,
  lineHeight: 1.7,
};

const highlight: React.CSSProperties = {
  color: "#ec4899",
  fontWeight: 700,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(220px, 1fr))",
  gap: "1.2rem",
  marginBottom: "2.5rem",
};

const item: React.CSSProperties = {
  padding: "22px",
  borderRadius: "20px",
  border: "1px solid rgba(168,85,247,.25)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
  transition: "all 0.3s ease",
};

const itemIcon: React.CSSProperties = {
  fontSize: "1.3rem",
  marginBottom: "10px",
  color: "#a855f7",
};

const itemTitle: React.CSSProperties = {
  fontWeight: 700,
  marginBottom: "6px",
};

const itemText: React.CSSProperties = {
  fontSize: "0.9rem",
  opacity: 0.7,
};

const emphasis: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 600,
  marginBottom: "2rem",
};

const cta: React.CSSProperties = {
  padding: "18px 52px",
  borderRadius: "22px",
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  border: "none",
  color: "white",
  fontWeight: 900,
  fontSize: "1.1rem",
  cursor: "pointer",
  boxShadow: "0 20px 60px rgba(168,85,247,.5)",
};

const micro: React.CSSProperties = {
  marginTop: "1.2rem",
  fontSize: "0.85rem",
  opacity: 0.6,
};