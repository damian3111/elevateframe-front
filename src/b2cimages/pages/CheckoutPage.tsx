import { useState } from "react";
import {
  FaCheckCircle,
  FaLock,
  FaBrain,
  FaVolumeUp,
  FaSyncAlt,
  FaListUl,
  FaArrowRight,
} from "react-icons/fa";
import { motion } from "framer-motion";

/* ========================= */
/* CHECKOUT PAGE */
/* ========================= */

export default function CheckoutPage() {
  const [email, setEmail] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const API_BASE_URL = import.meta.env.VITE_API_BASE_URL;

  const handleCheckout = async () => {
    if (!email.includes("@")) {
      setError("Please enter a valid email address");
      return;
    }

    setLoading(true);
    setError(null);

    try {
      const res = await fetch(`${API_BASE_URL}/api/checkout`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email }),
      });

      const data = await res.json();
      window.location.href = data.checkoutUrl;
    } catch {
      setError("Something went wrong. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <section style={wrapper}>
      <div style={bgGlow} />

      <motion.div
        style={card}
        initial={{ opacity: 0, y: 40, scale: 0.96 }}
        animate={{ opacity: 1, y: 0, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        {/* HEADER */}
        <h1 style={title}>
          Turn Your Photo Into
          <br />
          <span style={gradient}>Wall-Worthy Art</span>
        </h1>

        <p style={subtitle}>
          Not just an image — a cinematic, high-impact poster people notice instantly.
        </p>

        {/* PRICE */}
        <div style={priceBox}>
          <span style={oldPrice}>€59</span>
          <span style={price}>€49.97</span>
          <div style={priceNote}>Limited launch pricing</div>
        </div>

        {/* VALUE STACK */}
        <div style={offer}>
          <OfferItem icon={<FaBrain />} text="High-status portrait in your chosen style" />
          <OfferItem icon={<FaVolumeUp />} text="Cinematic lighting & ultra-realistic detail" />
          <OfferItem icon={<FaListUl />} text="Gangster, CEO, warrior, or your custom vision" />
          <OfferItem icon={<FaSyncAlt />} text="Unlimited revisions until it looks perfect" />
          <OfferItem icon={<FaCheckCircle />} text="High-resolution, print-ready files" />
        </div>

        {/* EMAIL */}
        <div style={emailBox}>
          <label style={label}>Where should we send your instructions?</label>
          <input
            style={input}
            placeholder="you@example.com"
            onInput={(e) => setEmail(e.currentTarget.value)}
          />
        </div>

        {/* CTA */}
        <motion.button
          style={cta}
          whileHover={{
            scale: 1.05,
            boxShadow: "0 25px 100px rgba(124,92,255,.6)",
          }}
          whileTap={{ scale: 0.96 }}
          disabled={loading}
          onClick={handleCheckout}
        >
          {loading ? "Redirecting..." : "Get My Portrait Now "}
          {!loading && <FaArrowRight />}
        </motion.button>

        {error && <p style={errorText}>{error}</p>}

        {/* HOW IT WORKS */}
<div style={howBox}>
  <h3 style={howTitle}>How it works after payment</h3>

  <div style={steps}>
    <Step
      number="01"
      text="You receive an instant confirmation email with clear instructions."
    />
    <Step
      number="02"
      text="Reply with your photo and preferred style, or describe your idea."
    />
    <Step
      number="03"
      text="We create your portraits and send previews. Revisions are unlimited."
    />
    <Step
      number="04"
      text="Approve the final result and receive your files, plus access to order your printed poster."
    />
  </div>
</div>

        {/* GUARANTEE */}
        <div style={guarantee}>
          <strong>100% Satisfaction Guarantee</strong>
          <p style={guaranteeText}>
            If you don’t love your result, we redo it or refund you. No risk.
          </p>
        </div>

        {/* TRUST */}
        <p style={trust}>
          <FaLock /> Secure payment • No subscriptions • Fast delivery
        </p>
      </motion.div>
    </section>
  );
}

/* ========================= */
/* SMALL COMPONENT */
/* ========================= */

const OfferItem = ({ icon, text }: { icon: React.ReactNode; text: string }) => (
  <motion.div
    style={offerItem}
    whileHover={{
      x: 6,
      background:
        "linear-gradient(135deg, rgba(124,92,255,0.2), rgba(34,211,238,0.2))",
    }}
  >
    <span style={offerIcon}>{icon}</span>
    <span>{text}</span>
  </motion.div>
);
const Step = ({
  number,
  text,
}: {
  number: string;
  text: string;
}) => (
  <motion.div
    style={step}
    whileHover={{
      background: "rgba(255,255,255,0.04)",
    }}
  >
    <div style={stepNumber}>{number}</div>
    <p style={stepText}>{text}</p>
  </motion.div>
);
/* ========================= */
/* STYLES */
/* ========================= */

const wrapper: React.CSSProperties = {
  minHeight: "100vh",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  padding: "2rem 1rem"
};

const bgGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at top, rgba(124,92,255,0.25), transparent 70%)",
};

const card: React.CSSProperties = {
  maxWidth: "520px",
  width: "100%",
  padding: "2.5rem",
  borderRadius: "28px",
  background:
    "linear-gradient(160deg, rgba(124,92,255,.18), rgba(34,211,238,.12))",
  boxShadow: "0 30px 80px rgba(0,0,0,.4)",
  textAlign: "center",
  backdropFilter: "blur(16px)",
};

const title: React.CSSProperties = {
  fontSize: "2.4rem",
  fontWeight: 900,
  lineHeight: 1.2,
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#7c5cff,#22d3ee)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle: React.CSSProperties = {
  marginTop: "0.6rem",
  opacity: 0.85,
};

const priceBox: React.CSSProperties = {
  margin: "2rem 0",
};

const oldPrice: React.CSSProperties = {
  textDecoration: "line-through",
  opacity: 0.5,
  marginRight: "10px",
};

const price: React.CSSProperties = {
  fontSize: "3rem",
  fontWeight: 900,
};

const priceNote: React.CSSProperties = {
  fontSize: ".8rem",
  opacity: 0.7,
};

const offer: React.CSSProperties = {
  textAlign: "left",
  marginBottom: "2rem",
};

const offerItem: React.CSSProperties = {
  display: "flex",
  gap: ".7rem",
  marginBottom: ".7rem",
  padding: "10px",
  borderRadius: "12px",
  transition: "0.25s",
};

const offerIcon: React.CSSProperties = {
  color: "#7c5cff",
};

const emailBox: React.CSSProperties = {
  textAlign: "left",
  marginBottom: "1.5rem",
};

const label: React.CSSProperties = {
  fontSize: ".75rem",
  opacity: 0.6,
};

const input: React.CSSProperties = {
  width: "100%",
  padding: "14px",
  borderRadius: "12px",
  border: "1px solid rgba(255,255,255,.2)",
  background: "rgba(255,255,255,.06)",
};

const cta: React.CSSProperties = {
  width: "100%",
  padding: "18px",
  borderRadius: "16px",
  background: "linear-gradient(135deg,#7c5cff,#22d3ee)",
  border: "none",
  color: "white",
  fontWeight: 900,
  fontSize: "1.1rem",
  cursor: "pointer",
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  gap: "8px",
};

const errorText: React.CSSProperties = {
  color: "#ef4444",
  marginTop: ".6rem",
};
const howBox: React.CSSProperties = {
  marginTop: "2.2rem",
  textAlign: "left",
  padding: "1.5rem",
  borderRadius: "18px",
  background: "rgba(10,10,15,0.75)",
  border: "1px solid rgba(255,255,255,0.08)",
  backdropFilter: "blur(12px)",
};

const howTitle: React.CSSProperties = {
  fontSize: "0.95rem",
  fontWeight: 600,
  marginBottom: "1.2rem",
  opacity: 0.85,
  letterSpacing: "0.02em",
};

const steps: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "0.9rem",
};

const step: React.CSSProperties = {
  display: "flex",
  alignItems: "flex-start",
  gap: "12px",
  padding: "10px",
  borderRadius: "12px",
  transition: "all 0.2s ease",
};

const stepNumber: React.CSSProperties = {
  minWidth: "36px",
  height: "36px",
  borderRadius: "8px",
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  fontSize: "0.72rem",
  fontWeight: 700,
  background: "rgba(124,92,255,0.15)",
  border: "1px solid rgba(124,92,255,0.25)",
};

const stepText: React.CSSProperties = {
  fontSize: "0.88rem",
  lineHeight: 1.55,
  opacity: 0.85,
};

const guarantee: React.CSSProperties = {
  marginTop: "1.5rem",
};

const guaranteeText: React.CSSProperties = {
  fontSize: ".85rem",
  opacity: 0.7,
};

const trust: React.CSSProperties = {
  marginTop: "1.2rem",
  fontSize: ".8rem",
  opacity: 0.6,
  display: "flex",
  justifyContent: "center",
  gap: "6px",
};