import { motion } from "framer-motion";
import { FaExpand, FaFire, FaCrown } from "react-icons/fa";

/* ========================= */
/* GALLERY PREVIEW SECTION */
/* ========================= */

export default function GalleryPreviewSection() {
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
        Imagine this
        <br />
        <span style={gradient}>hanging on your wall.</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        style={subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        Every image is crafted to look like a premium poster — not just a file.
        <br />
        Designed to stand out in your room, your office, or anywhere people see it.
      </motion.p>

      {/* GRID */}
      <div style={grid}>
        {images.map((img, i) => (
          <GalleryItem key={i} {...img} index={i} />
        ))}
      </div>

      {/* BOTTOM VALUE */}
      <motion.div
        style={bottom}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        <FaFire /> Most clients print multiple pieces and build a full wall setup
      </motion.div>
    </section>
  );
}

/* ========================= */
/* GALLERY ITEM */
/* ========================= */

function GalleryItem({
  img,
  label,
  index,
}: {
  img: string;
  label: string;
  index: number;
}) {
  return (
    <motion.div
      style={card}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.08 }}
      viewport={{ once: true }}
      whileHover={{
        scale: 1.04,
        boxShadow: "0 30px 120px rgba(168,85,247,.35)",
      }}
    >
      {/* IMAGE */}
      <div style={imageWrapper}>
        <img src={img} style={image} />

        {/* OVERLAY */}
        <div style={overlay} />

        {/* HOVER ICON */}
        <motion.div
          style={expand}
          initial={{ opacity: 0 }}
          whileHover={{ opacity: 1 }}
        >
          <FaExpand />
        </motion.div>
      </div>

      {/* LABEL */}
      <div style={labelStyle}>
        <FaCrown style={{ marginRight: 6 }} />
        {label}
      </div>
    </motion.div>
  );
}

/* ========================= */
/* DATA */
/* ========================= */

const images = [
  {
    img: "https://images.unsplash.com/photo-1614285255679-e9dff78bfe88?q=80&w=800",
    label: "Gangster Poster",
  },
  {
    img: "https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800",
    label: "CEO Portrait",
  },
  {
    img: "https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800",
    label: "Cinematic Character",
  },
  {
    img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800",
    label: "Luxury Portrait",
  },
  {
    img: "https://images.unsplash.com/photo-1583394838336-acd977736f90?q=80&w=800",
    label: "Warrior Style",
  },
  {
    img: "https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800",
    label: "Custom Vision",
  },
];

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
    "radial-gradient(circle at 50% 30%, rgba(168,85,247,0.2), transparent 70%)",
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
  maxWidth: "720px",
  margin: "1.8rem auto 3.5rem",
  fontSize: "1.1rem",
  lineHeight: 1.7,
  opacity: 0.9,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(240px, 1fr))",
  gap: "1.4rem",
};

const card: React.CSSProperties = {
  borderRadius: "20px",
  overflow: "hidden",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.08), rgba(255,255,255,.02))",
  border: "1px solid rgba(168,85,247,.3)",
  backdropFilter: "blur(12px)",
  transition: "all 0.3s ease",
};

const imageWrapper: React.CSSProperties = {
  position: "relative",
  height: "260px",
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

const expand: React.CSSProperties = {
  position: "absolute",
  top: "10px",
  right: "10px",
  background: "rgba(0,0,0,0.6)",
  padding: "8px",
  borderRadius: "10px",
  fontSize: "0.9rem",
};

const labelStyle: React.CSSProperties = {
  padding: "14px",
  fontSize: "0.9rem",
  fontWeight: 600,
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  gap: "6px",
};

const bottom: React.CSSProperties = {
  marginTop: "3rem",
  fontSize: "0.95rem",
  opacity: 0.75,
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
};