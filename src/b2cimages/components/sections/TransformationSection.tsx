import { motion, useMotionValue, useTransform } from "framer-motion";
import { useRef } from "react";

/* ========================= */
/* TRANSFORMATION SECTION */
/* ========================= */

export default function TransformationSection() {
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
        From ordinary photo
        <br />
        <span style={dim}>to something people stare at.</span>
      </motion.h2>

      {/* SUBTITLE */}
      <motion.p
        style={subtitle}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.2 }}
        viewport={{ once: true }}
      >
        This isn’t a filter.
        <br />
        This is a complete identity transformation — designed to look like a
        high-end movie poster you’d proudly hang on your wall.
      </motion.p>

      {/* SLIDERS */}
      <div style={grid}>
        <BeforeAfter
          before="https://images.unsplash.com/photo-1527980965255-d3b416303d12?q=80&w=800"
          after="https://images.unsplash.com/photo-1614285255679-e9dff78bfe88?q=80&w=800"
          label="Gangster Identity"
        />

        <BeforeAfter
          before="https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=800"
          after="https://images.unsplash.com/photo-1603415526960-f7e0328c63b1?q=80&w=800"
          label="Luxury CEO"
        />

        <BeforeAfter
          before="https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?q=80&w=800"
          after="https://images.unsplash.com/photo-1544723795-3fb6469f5b39?q=80&w=800"
          label="Cinematic Character"
        />
      </div>

      {/* VALUE STATEMENT */}
      <motion.p
        style={value}
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3 }}
        viewport={{ once: true }}
      >
        Delivered as premium, gallery-quality posters — printed on thick, vibrant stock, ready to frame and dominate your wall.
      </motion.p>
    </section>
  );
}

/* ========================= */
/* BEFORE AFTER COMPONENT */
/* ========================= */

function BeforeAfter({
  before,
  after,
  label,
}: {
  before: string;
  after: string;
  label: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  const x = useMotionValue(50);
  const clipPath = useTransform(
    x,
    (v) => `inset(0 ${100 - v}% 0 0)`
  );

  return (
    <motion.div
      ref={ref}
      style={slider}
      initial={{ opacity: 0, y: 60 }}
      whileInView={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.02 }}
      transition={{ duration: 0.7 }}
      viewport={{ once: true }}
      onMouseMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const percent = ((e.clientX - rect.left) / rect.width) * 100;
        x.set(Math.max(0, Math.min(100, percent)));
      }}
      onTouchMove={(e) => {
        const rect = ref.current?.getBoundingClientRect();
        if (!rect) return;
        const percent =
          ((e.touches[0].clientX - rect.left) / rect.width) * 100;
        x.set(Math.max(0, Math.min(100, percent)));
      }}
    >
      {/* BEFORE */}
      <img src={before} style={image} />

      {/* AFTER */}
      <motion.img
        src={after}
        style={{
          ...image,
          position: "absolute",
          top: 0,
          left: 0,
          clipPath,
        }}
      />

      {/* DRAG LINE */}
      <motion.div
        style={{
          ...divider,
          left: useTransform(x, (v) => `${v}%`),
        }}
      />

      {/* LABEL */}
      <div style={labelStyle}>{label}</div>
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
    "radial-gradient(circle at 50% 30%, rgba(236,72,153,0.18), transparent 65%)",
  pointerEvents: "none",
};

const title: React.CSSProperties = {
  fontSize: "clamp(2.3rem, 5.5vw, 4.2rem)",
  fontWeight: 900,
  lineHeight: 1.1,
  letterSpacing: "-0.03em",
};

const dim: React.CSSProperties = {
  opacity: 0.45,
};

const subtitle: React.CSSProperties = {
  maxWidth: "760px",
  margin: "1.8rem auto 3.5rem",
  fontSize: "1.15rem",
  lineHeight: 1.7,
  opacity: 0.9,
};

const grid: React.CSSProperties = {
  display: "grid",
  gridTemplateColumns: "repeat(auto-fit, minmax(300px, 1fr))",
  gap: "1.6rem",
};

const slider: React.CSSProperties = {
  position: "relative",
  width: "100%",
  height: "420px",
  borderRadius: "24px",
  overflow: "hidden",
  cursor: "ew-resize",
  boxShadow: "0 30px 100px rgba(0,0,0,0.5)",
};

const image: React.CSSProperties = {
  width: "100%",
  height: "100%",
  objectFit: "cover",
};

const divider: React.CSSProperties = {
  position: "absolute",
  top: 0,
  width: "3px",
  height: "100%",
  background: "white",
  boxShadow: "0 0 20px rgba(255,255,255,0.8)",
};

const labelStyle: React.CSSProperties = {
  position: "absolute",
  bottom: "16px",
  left: "16px",
  padding: "8px 14px",
  borderRadius: "12px",
  background: "rgba(0,0,0,0.6)",
  backdropFilter: "blur(10px)",
  fontSize: "0.85rem",
  fontWeight: 600,
};

const value: React.CSSProperties = {
  marginTop: "3.5rem",
  fontSize: "1.05rem",
  opacity: 0.75,
};