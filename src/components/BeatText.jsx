export default function BeatText({ beat, scrollProgress }) {
  const { scrollStart, scrollEnd, title, subtitle, accent } = beat;

  // compute normalized 0→1 within this beat's window
  const norm = Math.min(
    1,
    Math.max(0, (scrollProgress - scrollStart) / (scrollEnd - scrollStart))
  );

  // Opacity keyframes: [0, 0.15, 0.85, 1] → [0, 1, 1, 0]
  let opacity = 0;
  if (norm < 0.15) opacity = norm / 0.15;
  else if (norm <= 0.85) opacity = 1;
  else opacity = 1 - (norm - 0.85) / 0.15;

  // Y transform: enter 20→0, exit 0→-20
  let y = 0;
  if (norm < 0.15) y = 20 * (1 - norm / 0.15);
  else if (norm > 0.85) y = -20 * ((norm - 0.85) / 0.15);

  const isVisible = scrollProgress >= scrollStart - 0.02 && scrollProgress <= scrollEnd + 0.02;

  if (!isVisible) return null;

  return (
    <div
      className="beat-overlay"
      style={{ opacity, transform: `translateY(${y}px)` }}
    >
      <div className="beat-accent">{accent}</div>
      <h2 className="beat-title">
        {title.split('\n').map((line, i) => (
          <span key={i} className="beat-title-line">{line}<br /></span>
        ))}
      </h2>
      <p className="beat-subtitle">{subtitle}</p>
    </div>
  );
}
