export default function Logo({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      className={className}
      aria-hidden="true"
    >
      <defs>
        <radialGradient id="core" cx="50%" cy="50%" r="50%">
          <stop offset="0%" stopColor="#9fd0ff" />
          <stop offset="60%" stopColor="#2f7bff" />
          <stop offset="100%" stopColor="#0b3aa8" />
        </radialGradient>
      </defs>
      <circle cx="24" cy="24" r="7" fill="url(#core)" />
      <circle cx="24" cy="24" r="7" fill="none" stroke="#63b3ff" strokeWidth="0.6" opacity="0.6" />
      {/* orbit ring */}
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="8"
        stroke="#4d9dff"
        strokeWidth="1.5"
        fill="none"
        transform="rotate(-24 24 24)"
        opacity="0.9"
      />
      <ellipse
        cx="24"
        cy="24"
        rx="20"
        ry="8"
        stroke="#3fe0ff"
        strokeWidth="1"
        fill="none"
        transform="rotate(38 24 24)"
        opacity="0.5"
      />
      {/* satellite node */}
      <circle cx="42" cy="17" r="1.8" fill="#3fe0ff" />
    </svg>
  );
}
