
type Props = {
  children: React.ReactNode;
  style?: React.CSSProperties;
};

export default function GlassCard({ children, style }: Props) {
  return (
    <div
      className="glass"
      style={{
        borderRadius: "24px",
        padding: "24px",
        ...style,
      }}
    >
      {children}
    </div>
  );
}