export default function Container({ children }: { children: React.ReactNode }) {
  return (
    <div
      style={{
        width: "min(var(--container), calc(100% - 2rem))",
        margin: "0 auto",
        position: "relative",
        zIndex: 2,
      }}
    >
      {children}
    </div>
  );
}