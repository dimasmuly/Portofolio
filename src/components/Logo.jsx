// Building-blocks mark: three engineering blocks plus an accent circle for the AI side
export default function Logo({ className }) {
  return (
    <svg className={className} viewBox="0 0 32 32" aria-hidden="true">
      <g fill="currentColor">
        <rect x="3" y="3" width="12" height="12" rx="2.5" />
        <path d="M17 15V3a12 12 0 0 1 12 12Z" />
        <path d="M15 17v12A12 12 0 0 1 3 17Z" />
      </g>
      <circle cx="23" cy="23" r="6" fill="var(--accent)" />
    </svg>
  );
}
