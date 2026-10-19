import React from 'react';

interface CoordinateGraphicProps {
  className?: string;
  style?: React.CSSProperties;
}

export const CoordinateGraphic: React.FC<CoordinateGraphicProps> = ({ className = '', style = {} }) => {
  return (
    <div
      className={className}
      style={{
        position: 'relative',
        width: '100%',
        maxWidth: '420px',
        aspectRatio: '1 / 1',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        ...style,
      }}
    >
      <svg
        viewBox="0 0 440 440"
        fill="none"
        xmlns="http://www.w3.org/2000/svg"
        style={{ width: '100%', height: '100%', display: 'block' }}
        aria-hidden="true"
      >
        <defs>
          <pattern id="fineGrid" width="40" height="40" patternUnits="userSpaceOnUse">
            <path d="M 40 0 L 0 0 0 40" fill="none" stroke="#DCD9D0" strokeWidth="0.75" strokeOpacity="0.85" />
          </pattern>
        </defs>

        {/* Outer subtle framing box */}
        <rect x="20" y="20" width="400" height="400" fill="none" stroke="#DCD9D0" strokeWidth="1" />
        
        {/* Subtle grid background */}
        <rect x="20" y="20" width="400" height="400" fill="url(#fineGrid)" opacity="0.55" />

        {/* Diagonal axis representing the Human × Intelligence intersection */}
        <line
          x1="60"
          y1="380"
          x2="380"
          y2="60"
          stroke="#294C3B"
          strokeWidth="1.5"
          strokeDasharray="4 4"
          opacity="0.9"
        />

        {/* Primary Coordinate Axes */}
        <line x1="220" y1="30" x2="220" y2="410" stroke="#171916" strokeWidth="1" opacity="0.6" />
        <line x1="30" y1="220" x2="410" y2="220" stroke="#171916" strokeWidth="1" opacity="0.6" />

        {/* Subtle concentric rings / horizon boundaries */}
        <circle cx="220" cy="220" r="140" stroke="#DCD9D0" strokeWidth="1" strokeDasharray="3 4" />
        <circle cx="220" cy="220" r="80" stroke="#294C3B" strokeWidth="1" opacity="0.4" />

        {/* Node A: Academic AI */}
        <g transform="translate(300, 140)">
          <circle cx="0" cy="0" r="5" fill="#294C3B" />
          <circle cx="0" cy="0" r="11" stroke="#294C3B" strokeWidth="0.8" opacity="0.6" />
          <text
            x="16"
            y="4"
            fill="#171916"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9.5"
            letterSpacing="0.08em"
            fontWeight="600"
          >
            NODE: INTELLIGENCE [BS AI // NTU]
          </text>
        </g>

        {/* Node B: Motorway Police */}
        <g transform="translate(140, 300)">
          <circle cx="0" cy="0" r="5" fill="#171916" />
          <circle cx="0" cy="0" r="11" stroke="#171916" strokeWidth="0.8" opacity="0.5" />
          <text
            x="-16"
            y="4"
            textAnchor="end"
            fill="#171916"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9.5"
            letterSpacing="0.08em"
            fontWeight="600"
          >
            AXIS: SERVICE [NHMP]
          </text>
        </g>

        {/* Node C: Call Center Communication */}
        <g transform="translate(140, 140)">
          <circle cx="0" cy="0" r="4.5" fill="#77786F" />
          <circle cx="0" cy="0" r="9" stroke="#77786F" strokeWidth="0.75" opacity="0.4" />
          <text
            x="-16"
            y="4"
            textAnchor="end"
            fill="#77786F"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9"
            letterSpacing="0.08em"
          >
            COMMUNICATION [2YRS]
          </text>
        </g>

        {/* Center Synthesis Node */}
        <g transform="translate(220, 220)">
          <circle cx="0" cy="0" r="6.5" fill="#294C3B" />
          <circle cx="0" cy="0" r="15" stroke="#294C3B" strokeWidth="1.2" />
          <line x1="-20" y1="0" x2="20" y2="0" stroke="#294C3B" strokeWidth="1" />
          <line x1="0" y1="-20" x2="0" y2="20" stroke="#294C3B" strokeWidth="1" />
          <text
            x="14"
            y="-14"
            fill="#294C3B"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="9"
            letterSpacing="0.1em"
            fontWeight="700"
          >
            SYNTHESIS (0,0)
          </text>
        </g>

        {/* Hairline geometric connection polygon */}
        <polygon
          points="300,140 220,220 140,300 140,140"
          fill="rgba(41, 76, 59, 0.06)"
          stroke="#294C3B"
          strokeWidth="1"
          strokeDasharray="3 3"
        />

        {/* Marginal coordinate metrics (Swiss editorial touches) */}
        <text
          x="26"
          y="36"
          fill="#77786F"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="8.5"
          letterSpacing="0.08em"
        >
          SYS.COORD // LAT 30.37° N
        </text>
        <text
          x="414"
          y="36"
          textAnchor="end"
          fill="#77786F"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="8.5"
          letterSpacing="0.08em"
        >
          VEC.DIM // 3-POINT INTERSECT
        </text>
        <text
          x="26"
          y="414"
          fill="#77786F"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="8.5"
          letterSpacing="0.08em"
        >
          PAKISTAN // NHMP × AI
        </text>
        <text
          x="414"
          y="414"
          textAnchor="end"
          fill="#77786F"
          fontFamily="'JetBrains Mono', monospace"
          fontSize="8.5"
          letterSpacing="0.08em"
        >
          PRECISION: 0.001
        </text>

        {/* Corner ticks */}
        <line x1="20" y1="120" x2="28" y2="120" stroke="#77786F" strokeWidth="1" />
        <line x1="20" y1="320" x2="28" y2="320" stroke="#77786F" strokeWidth="1" />
        <line x1="120" y1="20" x2="120" y2="28" stroke="#77786F" strokeWidth="1" />
        <line x1="320" y1="20" x2="320" y2="28" stroke="#77786F" strokeWidth="1" />
        <line x1="412" y1="120" x2="420" y2="120" stroke="#77786F" strokeWidth="1" />
        <line x1="412" y1="320" x2="420" y2="320" stroke="#77786F" strokeWidth="1" />
        <line x1="120" y1="412" x2="120" y2="420" stroke="#77786F" strokeWidth="1" />
        <line x1="320" y1="412" x2="320" y2="420" stroke="#77786F" strokeWidth="1" />
      </svg>
    </div>
  );
};
