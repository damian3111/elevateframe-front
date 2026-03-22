import { motion } from "framer-motion";
import { FaStar, FaQuoteLeft } from "react-icons/fa";

/* ========================= */
/* TESTIMONIALS SECTION */
/* ========================= */

export default function TestimonialsSection() {
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
          People expect AI…
          <br />
          <span style={gradient}>They get reality.</span>
        </h2>

        <p style={subtitle}>
          Most think it will look fake — until they see themselves.
        </p>
      </motion.div>

      {/* FEATURED */}
      <motion.div
        style={featured}
        initial={{ opacity: 0, scale: 0.95 }}
        whileInView={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.7 }}
        viewport={{ once: true }}
      >
        <FaQuoteLeft style={quoteIcon} />

        <p style={featuredText}>
          I thought it would look “AI-ish”… but it looked like a real movie
          poster!
        </p>

        <div style={starsRow}>
          {[...Array(5)].map((_, i) => (
            <FaStar key={i} />
          ))}
        </div>

        <span style={name}>— Daniel K.</span>
      </motion.div>

      {/* GRID */}
      <div style={grid}>
        {testimonials.map((t, i) => (
          <TestimonialCard key={i} {...t} index={i} />
        ))}
      </div>
    </section>
  );
}

/* ========================= */
/* CARD */
/* ========================= */

function TestimonialCard({
  name,
  text,
  img,
  index,
}: {
  name: string;
  text: string;
  img: string;
  index: number;
}) {
  return (
    <motion.div
      style={card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.06 }}
      viewport={{ once: true }}
      whileHover={{
        y: -12,
        boxShadow: "0 40px 140px rgba(168,85,247,.35)",
      }}
    >
      {/* TOP */}
      <div style={top}>
        <img src={img} style={avatar} />

        <div>
          <div style={starsRowSmall}>
            {[...Array(5)].map((_, i) => (
              <FaStar key={i} />
            ))}
          </div>
          <span style={nameStyle}>{name}</span>
        </div>
      </div>

      {/* TEXT */}
      <p style={textStyle}>"{text}"</p>
    </motion.div>
  );
}

/* ========================= */
/* DATA */
/* ========================= */

const testimonials = [
  {
    name: "Marek P.",
    text: "Received 3 versions. My wall looks insane.",
    img: "https://randomuser.me/api/portraits/men/32.jpg",
  },
  {
    name: "Alex R.",
    text: "Looks like a real movie still. Unreal quality.",
    img: "https://randomuser.me/api/portraits/men/45.jpg",
  },
  {
    name: "Chris T.",
    text: "Gangster + CEO. Both look insane.",
    img: "https://randomuser.me/api/portraits/men/12.jpg",
  },
  {
    name: "Tom B.",
    text: "Worth way more than I paid.",
    img: "https://randomuser.me/api/portraits/men/67.jpg",
  },
  {
    name: "Lucas M.",
    text: "Printed and framed. Looks premium.",
    img: "https://randomuser.me/api/portraits/men/22.jpg",
  },
  {
    name: "Adam K.",
    text: "Everyone asks me where it’s from.",
    img: "https://randomuser.me/api/portraits/men/55.jpg",
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
  fontSize: "clamp(2.5rem, 6vw, 4.2rem)",
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
  opacity: 0.8,
};

const featured: React.CSSProperties = {
  maxWidth: "780px",
  margin: "0 auto 3.5rem",
  padding: "34px 26px",
  borderRadius: "26px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.1), rgba(255,255,255,.03))",
  border: "1px solid rgba(168,85,247,.35)",
  backdropFilter: "blur(18px)",
  boxShadow: "0 30px 120px rgba(0,0,0,0.5)",
};

const quoteIcon: React.CSSProperties = {
  fontSize: "1.5rem",
  opacity: 0.4,
  marginBottom: "12px",
};

const featuredText: React.CSSProperties = {
  fontSize: "1.15rem",
  lineHeight: 1.7,
  marginBottom: "14px",
};

const starsRow: React.CSSProperties = {
  display: "flex",
  justifyContent: "center",
  gap: "6px",
  color: "#facc15",
  marginBottom: "8px",
  maxWidth: "1200px"
};

const starsRowSmall: React.CSSProperties = {
  display: "flex",
  gap: "4px",
  color: "#facc15",
  fontSize: "0.75rem",
};

const name: React.CSSProperties = {
  fontSize: "0.85rem",
  opacity: 0.7,
};

const grid: React.CSSProperties = {
  display: "grid",
  maxWidth: "1200px",
  gridTemplateColumns: "repeat(auto-fit, minmax(260px, 1fr))",
  gap: "1.4rem",
  margin: "0 auto",           // ← this centers it horizontally
};

const card: React.CSSProperties = {
  padding: "20px",
  borderRadius: "20px",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.25)",
  backdropFilter: "blur(14px)",
  transition: "all 0.3s ease",
  textAlign: "left",
};

const top: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
  marginBottom: "10px",
};

const avatar: React.CSSProperties = {
  width: "42px",
  height: "42px",
  borderRadius: "50%",
};

const textStyle: React.CSSProperties = {
  fontSize: "0.9rem",
  lineHeight: 1.5,
  opacity: 0.9,
};

const nameStyle: React.CSSProperties = {
  fontSize: "0.8rem",
  opacity: 0.6,
};