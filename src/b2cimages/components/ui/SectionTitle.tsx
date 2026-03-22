import { motion } from "framer-motion";
import GradientText from "./GradientText";

type Props = {
  eyebrow?: string;
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  center?: boolean;
};

export default function SectionTitle({
  eyebrow,
  title,
  subtitle,
  center = true,
}: Props) {
  return (
    <div
      style={{
        textAlign: center ? "center" : "left",
        maxWidth: "900px",
        margin: center ? "0 auto 2.5rem" : "0 0 2.5rem",
      }}
    >
      {eyebrow && (
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.5 }}
          style={{ marginBottom: "1rem" }}
        >
          <span
            style={{
              fontSize: "0.85rem",
              fontWeight: 800,
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              color: "var(--accent-2)",
            }}
          >
            {eyebrow}
          </span>
        </motion.div>
      )}

      <motion.h2
        initial={{ opacity: 0, y: 16 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, amount: 0.25 }}
        transition={{ duration: 0.55 }}
        style={{
          margin: 0,
          fontSize: "clamp(2rem, 5vw, 4rem)",
          lineHeight: 1.04,
          letterSpacing: "-0.03em",
          fontWeight: 900,
        }}
      >
        <GradientText>{title}</GradientText>
      </motion.h2>

      {subtitle && (
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.6, delay: 0.1 }}
          style={{
            margin: "1.2rem auto 0",
            maxWidth: "760px",
            color: "var(--muted)",
            fontSize: "1.05rem",
            lineHeight: 1.8,
          }}
        >
          {subtitle}
        </motion.p>
      )}
    </div>
  );
}