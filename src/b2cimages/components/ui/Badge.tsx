
export default function Badge({ children }: { children: React.ReactNode }) {
  return (
    <span
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "8px",
        padding: "10px 16px",
        borderRadius: "999px",
        border: "1px solid rgba(255,255,255,0.14)",
        background: "rgba(255,255,255,0.04)",
        color: "var(--muted)",
        fontWeight: 700,
        fontSize: "0.85rem",
        letterSpacing: "0.02em",
      }}
    >
      {children}
    </span>
  );
}