export default function PulseDivider({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 600 40"
      className={`pulse-divider ${className}`}
      preserveAspectRatio="none"
      aria-hidden="true"
    >
      <path
        d="M0 20 L220 20 L245 4 L268 36 L292 20 L600 20"
        fill="none"
        stroke="currentColor"
        strokeWidth="2"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}
