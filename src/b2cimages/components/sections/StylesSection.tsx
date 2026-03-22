import { motion } from "framer-motion";
import {
  FaCrown,
  FaUserSecret,
  FaFire,
  FaGem,
  FaShieldAlt,
  FaRocket,
} from "react-icons/fa";

/* ========================= */
/* STYLES SECTION */
/* ========================= */

export default function StylesSection() {
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
        Choose who you want to become.
        <br />
        <span style={gradient}>
          Or take all versions of yourself.
        </span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        style={subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Most clients don’t stop at one.
        <br />
        They build a full wall collection of power identities.


      </motion.p>

      {/* GRID */}
      <div style={grid}>
        <StyleCard
          icon={<FaUserSecret />}
          title="Gangster"
          text="Dark, powerful, untouchable. The version people don’t mess with."
          img="https://images.unsplash.com/photo-1614285255679-e9dff78bfe88?q=80&w=800"
        />

        <StyleCard
          icon={<FaCrown />}
          title="Billionaire CEO"
          text="Luxury, authority, success. The version people respect instantly."
          img="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800"
        />

        <StyleCard
          icon={<FaFire />}
          title="Movie Character"
          text="Cinematic, dramatic, iconic. Looks like a Netflix poster."
          img="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800"
        />

        <StyleCard
          icon={<FaShieldAlt />}
          title="Warrior"
          text="Strong, fearless, dominant. Built for impact."
          img="https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800"
        />

        <StyleCard
          icon={<FaGem />}
          title="Luxury Portrait"
          text="Clean, elegant, timeless. Designed for premium wall art."
          img="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
        />

        <StyleCard
          icon={<FaRocket />}
          title="Custom Vision"
          text="Describe anything. We bring your exact idea to life."
          img="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800"
        />
      </div>

      {/* VALUE PUSH */}
      <motion.div
        style={bottomBox}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Most clients order <strong>3–5 styles</strong> and turn them into killer collection.
      </motion.div>
    </section>
  );
}

/* ========================= */
/* STYLE CARD */
/* ========================= */

function StyleCard({
  icon,
  title,
  text,
  img,
}: {
  icon: React.ReactNode;
  title: string;
  text: string;
  img: string;
}) {
  return (
    <motion.div
      style={card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ y: -14 }}
      transition={{ duration: 0.6 }}
      viewport={{ once: true }}
    >
      {/* IMAGE */}
      <div style={imageWrapper}>
        <img src={img} style={image} />

        <div style={overlay} />
      </div>

      {/* CONTENT */}
      <div style={content}>
        <div style={iconStyle}>{icon}</div>

        <h3 style={cardTitle}>{title}</h3>

        <p style={cardText}>{text}</p>
      </div>
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
    "radial-gradient(circle at 50% 20%, rgba(236,72,153,0.2), transparent 65%)",
  pointerEvents: "none",
};

const title: React.CSSProperties = {
  fontSize: "clamp(2.4rem, 5.5vw, 4rem)",
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
  margin: "1.8rem auto 3.5rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  opacity: 0.9,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(280px, 1fr))",
  gap: "1.6rem",
};

const card: React.CSSProperties = {
  borderRadius: "24px",
  overflow: "hidden",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  backdropFilter: "blur(14px)",
  transition: "all 0.3s ease",
};

const imageWrapper: React.CSSProperties = {
  position: "relative",
  height: "220px",
  overflow: "hidden",
};

const image: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
  transition: "transform 0.4s ease",
};

const overlay: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "linear-gradient(to top, rgba(0,0,0,0.6), transparent 60%)",
};

const content: React.CSSProperties = {
  padding: "20px",
};

const iconStyle: React.CSSProperties = {
  fontSize: "1.3rem",
  marginBottom: "10px",
  color: "#c084fc",
};

const cardTitle: React.CSSProperties = {
  fontSize: "1.2rem",
  fontWeight: 800,
  marginBottom: "8px",
};

const cardText: React.CSSProperties = {
  fontSize: "0.95rem",
  lineHeight: 1.6,
  opacity: 0.85,
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