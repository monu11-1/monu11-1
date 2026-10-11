/** Decorative demo gold bar — no real account serials or weights. */
export function DemoGoldBar() {
  return (
    <div className="relative mx-auto w-full max-w-[200px]" aria-hidden="true">
      <svg viewBox="0 0 200 140" className="h-auto w-full drop-shadow-lg">
        <defs>
          <linearGradient id="demoBarFace" x1="0" y1="0" x2="1" y2="1">
            <stop offset="0%" stopColor="#ffe9a8" />
            <stop offset="35%" stopColor="#f0c14b" />
            <stop offset="70%" stopColor="#c9962a" />
            <stop offset="100%" stopColor="#8f6a14" />
          </linearGradient>
          <linearGradient id="demoBarTop" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fff3c4" />
            <stop offset="100%" stopColor="#e8b93a" />
          </linearGradient>
          <linearGradient id="demoBarSide" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="#b8860b" />
            <stop offset="100%" stopColor="#7a5a10" />
          </linearGradient>
          <filter id="demoBarSoft" x="-20%" y="-20%" width="140%" height="140%">
            <feDropShadow
              dx="0"
              dy="6"
              stdDeviation="4"
              floodColor="#8b6914"
              floodOpacity="0.28"
            />
          </filter>
        </defs>

        {/* Perspective block */}
        <g filter="url(#demoBarSoft)">
          {/* Top face */}
          <polygon
            points="28,38 172,38 186,52 42,52"
            fill="url(#demoBarTop)"
          />
          {/* Front face */}
          <polygon
            points="28,38 172,38 172,98 28,98"
            fill="url(#demoBarFace)"
          />
          {/* Right side */}
          <polygon
            points="172,38 186,52 186,112 172,98"
            fill="url(#demoBarSide)"
          />
          {/* Bottom edge hint */}
          <polygon
            points="28,98 172,98 186,112 42,112"
            fill="#9a7218"
            opacity="0.55"
          />
        </g>

        {/* Engraved plate */}
        <rect
          x="48"
          y="52"
          width="104"
          height="36"
          rx="3"
          fill="#5c4508"
          opacity="0.18"
        />
        <text
          x="100"
          y="66"
          textAnchor="middle"
          fontSize="11"
          fontWeight="800"
          fill="#5a4010"
          letterSpacing="1.5"
        >
          SGNX DEMO
        </text>
        <text
          x="100"
          y="80"
          textAnchor="middle"
          fontSize="7.5"
          fontWeight="600"
          fill="#6b4f12"
          letterSpacing="0.8"
        >
          999.9 FINE · PRACTICE
        </text>

        <text
          x="100"
          y="122"
          textAnchor="middle"
          fontSize="7"
          fill="#94a3b8"
          fontWeight="600"
        >
          Illustration only
        </text>
      </svg>
    </div>
  );
}
