import GlowButton from "../ui/GlowButton";

export default function StickyMobileCTA() {
  return (
    <div
      style={{
        position: "fixed",
        left: 0,
        right: 0,
        bottom: 0,
        zIndex: 60,
        padding: "0.75rem 1rem calc(0.75rem + env(safe-area-inset-bottom))",
        background: "rgba(4,7,19,0.85)",
        backdropFilter: "blur(18px)",
        borderTop: "1px solid rgba(255,255,255,0.08)",
      }}
      className="mobile-sticky-cta"
    >
      <GlowButton to="/order" fullWidth>
        Get My Legendary Portrait →
      </GlowButton>
    </div>
  );
}