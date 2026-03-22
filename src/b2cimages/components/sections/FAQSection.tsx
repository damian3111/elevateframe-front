import { motion, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { FaChevronDown, FaShieldAlt, FaMagic, FaClock } from "react-icons/fa";

/* ========================= */
/* FAQ SECTION */
/* ========================= */

export default function FAQSection() {
  const [open, setOpen] = useState<number | null>(0);

  const toggle = (index: number) => {
    setOpen(open === index ? null : index);
  };

  const faqs = [
    {
      icon: <FaMagic />,
      q: "What kind of transformations can I request?",
      a: "Anything. Gangster, billionaire, warrior, movie character, luxury lifestyle, dark aesthetic — if you can imagine it, we can create it. You are not choosing from templates. Every image is custom-made for you.",
    },
    {
      icon: <FaShieldAlt />,
      q: "What if I don’t like the result?",
      a: "Then you don’t pay. We revise your image until you love it — or give you a full refund. No risk. No awkward conversations.",
    },
    {
      icon: <FaClock />,
      q: "How long does it take?",
      a: "You’ll receive your first version within 24–48 hours. Revisions are handled fast, usually within the same day.",
    },
    {
      icon: <FaMagic />,
      q: "Do I need a professional photo?",
      a: "No. A simple phone photo works perfectly. We enhance, refine, and transform everything on our side.",
    },
    {
      icon: <FaShieldAlt />,
      q: "Will it actually look like me?",
      a: "Yes — that’s the whole point. We preserve your identity while upgrading your presence. The result looks like the best version of you, not a random AI face.",
    },
    {
      icon: <FaMagic />,
      q: "Can I choose multiple styles?",
      a: "Yes. You can request different styles, moods, or characters. We’ll guide you if you’re unsure what would look best.",
    },
    {
      icon: <FaShieldAlt />,
      q: "Is my photo safe?",
      a: "100%. Your images are private and never shared. We don’t use your photos for marketing without permission.",
    },
    {
      icon: <FaClock />,
      q: "What do I actually receive?",
      a: "High-resolution, cinematic images ready for social media, printing, or framing. Designed to look premium on your wall or profile.",
    },
  ];

  return (
    <section style={section}>
      {/* Background glow */}
      <div style={bgGlow} />

      {/* HEADER */}
      <motion.div
        initial={{ opacity: 0, y: 70 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
      >
        <h2 style={title}>
          Questions?{" "}
          <span style={gradient}>We’ve Already Answered Them</span>
        </h2>

        <p style={subtitle}>
          Everything you need to know before you get your transformation.
        </p>
      </motion.div>

      {/* FAQ LIST */}
      <div style={faqWrapper}>
        {faqs.map((item, i) => (
          <motion.div
            key={i}
            style={faqItem}
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.05 }}
            viewport={{ once: true }}
          >
            {/* QUESTION */}
            <button style={question} onClick={() => toggle(i)}>
              <div style={qLeft}>
                <div style={icon}>{item.icon}</div>
                <span>{item.q}</span>
              </div>

              <motion.div
                animate={{ rotate: open === i ? 180 : 0 }}
                transition={{ duration: 0.3 }}
              >
                <FaChevronDown />
              </motion.div>
            </button>

            {/* ANSWER */}
            <AnimatePresence>
              {open === i && (
                <motion.div
                  style={answer}
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.35 }}
                >
                  <p>{item.a}</p>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>

      {/* BOTTOM CTA */}
      <motion.div
        style={bottom}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        <p style={bottomText}>
          Still thinking? That’s normal. But remember — there’s zero risk.
        </p>

        <motion.button
          style={cta}
          whileHover={{
            scale: 1.08,
            boxShadow: "0 25px 80px rgba(168,85,247,.6)",
          }}
          whileTap={{ scale: 0.96 }}
        >
          Get My Transformation →
        </motion.button>
      </motion.div>
    </section>
  );
}

/* ========================= */
/* STYLES */
/* ========================= */

const section: React.CSSProperties = {
  padding: "clamp(5rem, 10vw, 8rem) 1.5rem",
  maxWidth: "1000px",
  margin: "0 auto",
};

const bgGlow: React.CSSProperties = {
  position: "absolute",
  inset: 0,
  background:
    "radial-gradient(circle at 50% 0%, rgba(168,85,247,0.25), transparent 65%)",
  pointerEvents: "none",
};

const title: React.CSSProperties = {
  fontSize: "clamp(2.2rem, 5vw, 3.6rem)",
  fontWeight: 900,
  textAlign: "center",
};

const gradient: React.CSSProperties = {
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  WebkitBackgroundClip: "text",
  WebkitTextFillColor: "transparent",
};

const subtitle: React.CSSProperties = {
  textAlign: "center",
  marginTop: "1rem",
  marginBottom: "3rem",
  opacity: 0.7,
};

const faqWrapper: React.CSSProperties = {
  display: "flex",
  flexDirection: "column",
  gap: "1rem",
};

const faqItem: React.CSSProperties = {
  borderRadius: "18px",
  border: "1px solid rgba(168,85,247,.25)",
  background:
    "linear-gradient(145deg, rgba(255,255,255,.06), rgba(255,255,255,.02))",
  backdropFilter: "blur(14px)",
  overflow: "hidden",
};

const question: React.CSSProperties = {
  width: "100%",
  padding: "18px 20px",
  display: "flex",
  justifyContent: "space-between",
  alignItems: "center",
  background: "transparent",
  border: "none",
  color: "white",
  cursor: "pointer",
  fontWeight: 600,
};

const qLeft: React.CSSProperties = {
  display: "flex",
  alignItems: "center",
  gap: "12px",
};

const icon: React.CSSProperties = {
  color: "#c084fc",
};

const answer: React.CSSProperties = {
  padding: "0 20px 18px",
  fontSize: "0.95rem",
  opacity: 0.8,
  lineHeight: 1.6,
};

const bottom: React.CSSProperties = {
  marginTop: "3rem",
  textAlign: "center",
};

const bottomText: React.CSSProperties = {
  marginBottom: "1.5rem",
  opacity: 0.7,
};

const cta: React.CSSProperties = {
  padding: "18px 48px",
  borderRadius: "22px",
  background: "linear-gradient(135deg,#a855f7,#ec4899)",
  border: "none",
  color: "white",
  fontWeight: 800,
  fontSize: "1.05rem",
  cursor: "pointer",
  boxShadow: "0 20px 60px rgba(168,85,247,.5)",
};