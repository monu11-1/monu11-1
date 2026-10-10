type BrandMarkProps = {
  size?: "sm" | "md" | "lg";
  showWordmark?: boolean;
  className?: string;
};

const sizes = {
  sm: "h-8 w-8",
  md: "h-10 w-10",
  lg: "h-16 w-16",
};

export function BrandMark({
  size = "md",
  showWordmark = true,
  className = "",
}: BrandMarkProps) {
  return (
    <div className={`flex items-center gap-2.5 ${className}`}>
      <svg
        viewBox="0 0 64 64"
        className={`${sizes[size]} shrink-0 drop-shadow-sm`}
        aria-hidden="true"
      >
        <defs>
          <linearGradient id="shieldMetal" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#f3f4f6" />
            <stop offset="50%" stopColor="#d1d5db" />
            <stop offset="100%" stopColor="#9ca3af" />
          </linearGradient>
        </defs>
        <path
          d="M32 4L54 12v18c0 14.5-9.2 27.2-22 30.8C19.2 57.2 10 44.5 10 30V12L32 4z"
          fill="url(#shieldMetal)"
          stroke="#6b7280"
          strokeWidth="1.5"
        />
        <path
          d="M20 28c0-6 4.5-11 8-13 1.5 4 3 9 2.5 14-3.5 1.5-8 2-10.5-1z"
          fill="#00a86b"
        />
        <path
          d="M44 28c0-6-4.5-11-8-13-1.5 4-3 9-2.5 14 3.5 1.5 8 2 10.5-1z"
          fill="#d31d3e"
        />
        <circle cx="32" cy="36" r="5" fill="#111827" opacity="0.85" />
        <path
          d="M28 36h8M32 32v8"
          stroke="#f9fafb"
          strokeWidth="1.4"
          strokeLinecap="round"
        />
      </svg>
      {showWordmark ? (
        <span className="font-display text-lg font-extrabold tracking-tight text-foreground">
          Sagenex
        </span>
      ) : null}
    </div>
  );
}
