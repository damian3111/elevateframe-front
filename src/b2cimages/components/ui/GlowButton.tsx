
import { motion } from "framer-motion";
import { useNavigate } from "react-router-dom";

type Props = {
  children: React.ReactNode;
  to?: string;
  onClick?: () => void;
  secondary?: boolean;
  fullWidth?: boolean;
};

export default function GlowButton({
  children,
  to,
  onClick,
  secondary = false,
  fullWidth = false,
}: Props) {
  const navigate = useNavigate();

  const base: React.CSSProperties = {
    width: fullWidth ? "100%" : "auto",
    padding: "18px 28px",
    borderRadius: "18px",
    border: secondary ? "1px solid rgba(255,255,255,0.16)" : "none",
    background: secondary
      ? "rgba(255,255,255,0.05)"
      : "linear-gradient(135deg, #7c5cff 0%, #22d3ee 100%)",
    color: "white",
    fontWeight: 900,
    fontSize: "1rem",
    cursor: "pointer",
    boxShadow: secondary ? "none" : "0 18px 60px rgba(124,92,255,.35)",
    backdropFilter: "blur(12px)",
  };

  return (
    <motion.button
      whileHover={{ scale: 1.04, y: -2 }}
      whileTap={{ scale: 0.98 }}
      style={base}
      onClick={() => {
        if (onClick) onClick();
        if (to) navigate(to);
      }}
    >
      {children}
    </motion.button>
  );
}