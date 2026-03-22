import { motion, useScroll, useMotionValueEvent } from "framer-motion";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import logo2 from "../../../assets/logo2.png";

export default function Header() {
  const navigate = useNavigate();
  const { scrollY } = useScroll();

  const [showHeader, setShowHeader] = useState(true);
  const [isScrolled, setIsScrolled] = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    // Background blur trigger
    setIsScrolled(latest > 10);

    // ONLY show at very top
    if (latest < 40) {
      setShowHeader(true);
    } else {
      setShowHeader(false);
    }
  });

  return (
    <motion.header
      initial={{ y: -120, opacity: 0, scale: 0.98 }}
      animate={{
        y: showHeader ? 0 : -120,
        opacity: showHeader ? 1 : 0,
        scale: showHeader ? 1 : 0.96,
      }}
      transition={{
        type: "spring",
        stiffness: 260,
        damping: 25,
      }}
      style={{
        ...header,
        ...(isScrolled ? headerScrolled : {}),
      }}
    >
      {/* Logo */}
      <div style={logoWrapper} onClick={() => navigate("/")}>
        <img src={logo2} alt="AI Revenue Logo" style={logoImg} />
      </div>

      {/* CTA */}
      <motion.button
        whileHover={{
          scale: 1.08,
          boxShadow: "0 8px 25px rgba(124, 92, 255, 0.6)",
        }}
        whileTap={{ scale: 0.94 }}
        style={cta}
        onClick={() => navigate("/contact")}
      >
        Get Audit
      </motion.button>
    </motion.header>
  );
}

/* ========================= */
/* STYLES                    */
/* ========================= */

const header: React.CSSProperties = {
  position: "fixed",
  top: 0,
  left: 0,
  right: 0,
  zIndex: 999,
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  padding: "1rem 2rem",
  background: "transparent",
  willChange: "transform, opacity",
};

const headerScrolled: React.CSSProperties = {
  backdropFilter: "blur(16px) saturate(180%)",
  WebkitBackdropFilter: "blur(16px) saturate(180%)",
  background: "rgba(10, 10, 25, 0.65)",
  borderBottom: "1px solid rgba(124, 92, 255, 0.2)",
};

const logoWrapper: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  cursor: "pointer",
};

const logoImg: React.CSSProperties = {
  height: "72px",
  width: "auto",
  objectFit: "contain",
};

const cta: React.CSSProperties = {
  padding: "0.7rem 1.6rem",
  borderRadius: "14px",
  background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
  border: "none",
  color: "white",
  fontWeight: 700,
  fontSize: "0.95rem",
  cursor: "pointer",
  boxShadow: "0 4px 15px rgba(124, 92, 255, 0.4)",
  transition: "all 0.25s ease",
};