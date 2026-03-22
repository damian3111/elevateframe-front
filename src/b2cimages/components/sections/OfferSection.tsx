import { motion } from "framer-motion";
import { FaCheck, FaFire, FaGem, FaBolt } from "react-icons/fa";

/* ========================= */
/* OFFER SECTION */
/* ========================= */

export default function OfferSection() {
  return (
    <section style={section}>
      <div style={bgGlow} />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 60 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={title}>
          This Isn’t Just A Photo.
          <br />
          <span style={gradient}>It’s A Transformation.</span>
        </h2>

        <p style={subtitle}>
          We rebuild your identity into cinematic wall art people notice and respect.
        </p>
      </motion.div>

      {/* MAIN OFFER CARD */}
      <motion.div
        style={card}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        {/* VALUE STACK */}
        <div style={stack}>
          {offerItems.map((offer, i) => (
            <motion.div
                key={i}
                style={item}  // <-- use the CSS object
                whileHover={{
                y: -8,
                boxShadow: "0 30px 100px rgba(168,85,247,.3)",
                }}
            >
                <div style={itemIcon}>{offer.icon}</div>

                <div>
                <h4 style={itemTitle}>{offer.title}</h4>
                <p style={itemDesc}>{offer.desc}</p>
                </div>

                <div style={priceTag}>{offer.value}</div>
            </motion.div>
            ))}
        </div>

        {/* TOTAL VALUE */}
        <div style={valueBox}>
          <span style={valueText}>Total Value:</span>
          <span style={valueOld}>€182</span>
        </div>

        {/* PRICE */}
        <div style={priceWrap}>
          <span style={price}>€29</span>
          <span style={priceNote}>One-time payment</span>
        </div>

        {/* CTA */}
        <motion.button
          style={cta}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 30px 100px rgba(168,85,247,.7)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Get My Transformation →
        </motion.button>

        {/* MICRO */}
        <p style={micro}>
          Instant start • No skills needed • Full control over style
        </p>
      </motion.div>
    </section>
  );
}

/* ========================= */
/* DATA */
/* ========================= */

const offerItems = [
  {
    icon: <FaGem />,
    title: "Custom AI Portrait",
    desc: "Fully personalized transformation in any style you want",
    value: "€49",
  },
  {
    icon: <FaFire />,
    title: "Cinematic Styling",
    desc: "Movie-level lighting, detail, and composition",
    value: "€39",
  },
  {
    icon: <FaBolt />,
    title: "Fast Delivery",
    desc: "First version delivered within 24–48 hours",
    value: "€29",
  },
  {
    icon: <FaCheck />,
    title: "Unlimited Revisions",
    desc: "We refine until you're 100% satisfied",
    value: "€35",
  },
  {
    icon: <FaGem />,
    title: "High-Resolution Files",
    desc: "Perfect for printing, framing, and social media",
    value: "€30",
  },
];

/* ========================= */
/* STYLES */
/* ========================= */

const section: React.CSSProperties = {
  padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
  maxWidth: "100%",
  margin: "0 auto",
  position: "relative",
  textAlign: "center",
};

const bgGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 20%, rgba(168,85,247,0.2), transparent 70%)",
  pointerEvents: "none",
};

const title: React.CSSProperties = {
  fontSize: "clamp(2.5rem, 6vw, 4rem)",
  fontWeight: 900,
  lineHeight: 1.1,
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle: React.CSSProperties = {
  marginTop: "1rem",
  marginBottom: "3rem",
  opacity: 0.85,
};

const card: React.CSSProperties = {
  maxWidth: "1200px",
  borderRadius: "28px",
  padding: "32px 24px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  backdropFilter: "blur(18px)",
  boxShadow: "0 40px 140px rgba(0,0,0,0.6)",
  
  margin: "0 auto",           // ← this centers the card horizontally
};

const stack: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "12px",
  marginBottom: "2rem",
    
};

const item: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "14px",
  padding: "16px",
  borderRadius: "16px",
  border: "1px solid rgba(168,85,247,.2)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
  transition: "all 0.3s ease",
};

const itemIcon: React.CSSProperties = {
  fontSize: "1.2rem",
  color: "#c084fc",
};

const itemTitle: React.CSSProperties = {
  fontWeight: 700,
};

const itemDesc: React.CSSProperties = {
  fontSize: "0.85rem",
  opacity: 0.7,
};

const priceTag: React.CSSProperties = {
  marginLeft: "auto",
  fontWeight: 700,
  opacity: 0.7,
};

const valueBox: React.CSSProperties = {
  marginBottom: "1rem",
  fontSize: "1rem",
};

const valueText: React.CSSProperties = {
  opacity: 0.6,
  marginRight: "8px",
};

const valueOld: React.CSSProperties = {
  textDecoration: "line-through",
  opacity: 0.5,
};

const priceWrap: React.CSSProperties = {
  marginBottom: "1.5rem",
};

const price: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 900,
};

const priceNote: React.CSSProperties = {
  display: "block",
  fontSize: "0.9rem",
  opacity: 0.6,
};

const cta: React.CSSProperties = {
  padding: "18px 52px",
  borderRadius: "24px",
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  border: "none",
  color: "white",
  fontWeight: 900,
  fontSize: "1.1rem",
  cursor: "pointer",
  boxShadow: "0 20px 60px rgba(168,85,247,.6)",
};

const micro: React.CSSProperties = {
  marginTop: "1rem",
  fontSize: "0.85rem",
  opacity: 0.6,
};