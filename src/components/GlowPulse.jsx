export default function GlowPulse({ scrollProgress }) {
  const nearSixty = Math.abs(scrollProgress - 0.60);
  const intensity = Math.max(0, 1 - nearSixty / 0.08);

  if (intensity <= 0) return null;
  return (
    <div
      className="glow-pulse"
      style={{
        opacity: intensity * 0.85,
        transform: `scale(${0.8 + intensity * 0.4})`,
      }}
    />
  );
}
