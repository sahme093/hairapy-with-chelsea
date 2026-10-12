import { LOCK_PATHS } from '../logoPaths.js';

// Hair-lock mark + "Hairapy / with Chelsea" wordmark. The same strands are the favicon (vite.config.js).
export default function Logo({ href = '#top' }) {
  return (
    <a href={href} className="brand" aria-label="Hairapy with Chelsea, back to top">
      <svg className="brand-mark" viewBox="14 6 36 54" aria-hidden="true">
        <g fill="none" stroke="currentColor" strokeWidth="3.2" strokeLinecap="round">
          {LOCK_PATHS.map((d) => (
            <path key={d} d={d} />
          ))}
        </g>
      </svg>
      <span className="brand-words">
        <span className="brand-name">Hairapy</span>
        <span className="brand-sub">with Chelsea</span>
      </span>
    </a>
  );
}
