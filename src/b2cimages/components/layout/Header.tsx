import { motion } from "framer-motion";
import { Link, useLocation } from "react-router-dom";
import Container from "../ui/Container";
import GlowButton from "../ui/GlowButton";
import { FaCrown } from "react-icons/fa";

const links = [
  { label: "Gallery", to: "/gallery" },
  { label: "Pricing", to: "/pricing" },
  { label: "Order", to: "/order" },
];

export default function Header() {
  const location = useLocation();

  return (
    <header
      style={{
        position: "sticky",
        top: 0,
        zIndex: 50,
        backdropFilter: "blur(18px)",
        background: "rgba(4,7,19,0.72)",
        borderBottom: "1px solid rgba(255,255,255,0.06)",
      }}
    >
      <Container>
        <div
          style={{
            minHeight: "78px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
          }}
        >
          <Link to="/" style={{ display: "flex", alignItems: "center", gap: "12px" }}>
            <div
              style={{
                width: 42,
                height: 42,
                borderRadius: 14,
                display: "grid",
                placeItems: "center",
                background: "linear-gradient(135deg, #7c5cff, #22d3ee)",
                boxShadow: "0 10px 30px rgba(124,92,255,.35)",
              }}
            >
              <FaCrown />
            </div>
            <div>
              <div style={{ fontWeight: 900, letterSpacing: "-0.02em" }}>LegendFrame</div>
              <div style={{ fontSize: "0.75rem", color: "var(--muted)" }}>
                AI Portrait Studio
              </div>
            </div>
          </Link>

          <nav
            style={{
              display: "flex",
              alignItems: "center",
              gap: "1rem",
            }}
          >
            <div className="desktop-nav" style={{ display: "flex", gap: "0.6rem" }}>
              {links.map((link) => {
                const active = location.pathname === link.to;
                return (
                  <motion.div key={link.to} whileHover={{ y: -1 }}>
                    <Link
                      to={link.to}
                      style={{
                        padding: "10px 14px",
                        borderRadius: "12px",
                        fontWeight: 700,
                        color: active ? "white" : "var(--muted)",
                        background: active ? "rgba(255,255,255,0.06)" : "transparent",
                      }}
                    >
                      {link.label}
                    </Link>
                  </motion.div>
                );
              })}
            </div>

            <div className="desktop-cta">
              <GlowButton to="/order">Order My Portrait →</GlowButton>
            </div>
          </nav>
        </div>
      </Container>
    </header>
  );
}