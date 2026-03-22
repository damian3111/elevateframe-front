import { motion } from "framer-motion";
import {
  FaInstagram,
  FaStar,
  FaUserCheck,
  FaFire,
  FaCrown,
} from "react-icons/fa";

/* ========================= */
/* SOCIAL PROOF BAR */
/* ========================= */

export default function SocialProofBar() {
  return (
    <section style={section}>
      <div style={bgGlow} />

      {/* TOP LINE */}
      <motion.div
        style={topRow}
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        viewport={{ once: true }}
      >
        <span style={trustItem}>
          <FaUserCheck /> 3,000+ portraits created
        </span>

        <span style={trustItem}>
          <FaStar /> 4.9/5 average rating
        </span>

        <span style={trustItem}>
          <FaFire /> Trending right now
        </span>

        <span style={trustItem}>
          <FaCrown /> Premium print quality
        </span>
      </motion.div>

      {/* SCROLLING TESTIMONIALS */}
      <div style={marqueeWrapper}>
        <motion.div
          style={marquee}
          animate={{ x: ["0%", "-50%"] }}
          transition={{
            duration: 20,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          {[...testimonials, ...testimonials].map((t, i) => (
            <Testimonial key={i} {...t} />
          ))}
        </motion.div>
      </div>

      {/* SOCIAL LINE */}
      <motion.div
        style={bottomRow}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        <FaInstagram />
        <span>
          People are turning their photos into posters and sharing them daily
        </span>
      </motion.div>
    </section>
  );
}

/* ========================= */
/* TESTIMONIAL CARD */
/* ========================= */

function Testimonial({
  name,
  text,
}: {
  name: string;
  text: string;
}) {
  return (
    <motion.div
      style={card}
      whileHover={{
        y: -6,
        boxShadow: "0 25px 80px rgba(168,85,247,.25)",
      }}
    >
      {/* STARS */}
      <div style={stars}>
        {[...Array(5)].map((_, i) => (
          <FaStar key={i} />
        ))}
      </div>

      <p style={textStyle}>"{text}"</p>

      <span style={nameStyle}>— {name}</span>
    </motion.div>
  );
}

/* ========================= */
/* DATA */
/* ========================= */

const testimonials = [
  {
    name: "Daniel K.",
    text: "Looks like a Netflix poster. Everyone asks where I got it.",
  },
  {
    name: "Marek P.",
    text: "I've hung it — best purchase this year.",
  },
  {
    name: "Alex R.",
    text: "Did not expect it to look THIS real. Insane quality.",
  },
  {
    name: "Chris T.",
    text: "Ordered 3 styles. Gangster one goes hard.",
  },
  {
    name: "Tom B.",
    text: "People think it's a movie still. Worth every euro.",
  },
];

/* ========================= */
/* STYLES */
/* ========================= */

const section: React.CSSProperties = {
  padding: "3rem 0 2rem",
  overflow: "hidden",
  position: "relative",
};

const bgGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at center, rgba(168,85,247,0.15), transparent 70%)",
  pointerEvents: "none",
};

const topRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  flexWrap: "wrap",
  gap: "0.8rem",
  marginBottom: "2rem",
  padding: "0 1rem",
};

const trustItem: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "8px",
  fontSize: "0.85rem",
  fontWeight: 600,
  padding: "10px 14px",
  borderRadius: "14px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  backdropFilter: "blur(10px)",
  whiteSpace: "nowrap",
};

const marqueeWrapper: React.CSSProperties = {
  overflow: "hidden",
  width: "100%",
};

const marquee: React.CSSProperties = {
  display: "flex",
  gap: "1rem",
  width: "max-content",
  padding: "0 1rem",
};

const card: React.CSSProperties = {
  minWidth: "240px",
  maxWidth: "240px",
  padding: "16px",
  borderRadius: "18px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(255,255,255,0.15)",
  backdropFilter: "blur(12px)",
  transition: "all 0.25s ease",
  display: "flex",
  flexDirection: "column",
};

const stars: React.CSSProperties = {
  display: "flex",            // ✅ FIX
  flexDirection: "row",       // ✅ FORCE horizontal
  gap: "4px",
  color: "#facc15",
  marginBottom: "8px",
};

const textStyle: React.CSSProperties = {
  fontSize: "0.85rem",
  lineHeight: 1.5,
  marginBottom: "10px",
  opacity: 0.9,
};

const nameStyle: React.CSSProperties = {
  fontSize: "0.75rem",
  opacity: 0.6,
  marginTop: "auto",
};

const bottomRow: React.CSSProperties = {
  marginTop: "1.8rem",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "10px",
  fontSize: "0.8rem",
  opacity: 0.75,
  textAlign: "center",
  padding: "0 1rem",
};