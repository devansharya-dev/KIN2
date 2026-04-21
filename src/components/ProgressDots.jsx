import { BEATS } from '../utils/constants';

export default function ProgressDots({ scrollProgress }) {
  return (
    <div className="progress-dots">
      {BEATS.map((b) => {
        const active = scrollProgress >= b.scrollStart - 0.02 && scrollProgress <= b.scrollEnd + 0.02;
        return (
          <div
            key={b.id}
            className={`progress-dot${active ? ' active' : ''}`}
            title={b.accent}
          />
        );
      })}
    </div>
  );
}
