/** Game-themed animated hero illustrations */

export function SubnauticaIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[280px] opacity-90"
      style={{ animation: "subnautica-swim 10s ease-in-out infinite" }}>
      <style>{`
        @keyframes subnautica-swim {
          0% { transform: translate(30px, 10px) rotate(3deg); }
          25% { transform: translate(-10px, 30px) rotate(-2deg); }
          50% { transform: translate(-30px, 5px) rotate(4deg); }
          75% { transform: translate(10px, -5px) rotate(-1deg); }
          100% { transform: translate(30px, 10px) rotate(3deg); }
        }
        @keyframes bubble-rise {
          0% { transform: translateY(0); opacity: 0.3; }
          100% { transform: translateY(-60px); opacity: 0; }
        }
        @keyframes tail-flap {
          0%, 100% { transform: rotate(0deg); }
          50% { transform: rotate(25deg); }
        }
        @keyframes light-ray {
          0%, 100% { opacity: 0.03; }
          50% { opacity: 0.08; }
        }
      `}</style>
      {/* Light rays */}
      <g style={{ animation: "light-ray 4s ease-in-out infinite" }}>
        <polygon points="40,0 80,120 0,120" fill="#06B6D4" opacity="0.04" />
        <polygon points="150,0 200,140 100,140" fill="#06B6D4" opacity="0.03" />
        <polygon points="260,0 300,100 220,100" fill="#06B6D4" opacity="0.04" />
      </g>
      {/* Body */}
      <ellipse cx="140" cy="140" rx="55" ry="22" fill="#0A2A3A" stroke="#06B6D4" strokeWidth="1.5" opacity="0.8" />
      <ellipse cx="145" cy="137" rx="40" ry="16" fill="#0D3B4F" />
      {/* Tail */}
      <g style={{ transformOrigin: "85px 140px", animation: "tail-flap 1.5s ease-in-out infinite" }}>
        <path d="M90 140 L65 125 L70 140 L65 155 Z" fill="#0A2A3A" stroke="#06B6D4" strokeWidth="1" opacity="0.7" />
      </g>
      {/* Fin */}
      <path d="M140 118 Q155 100 150 118" fill="#0891B2" opacity="0.5" />
      {/* Eye */}
      <circle cx="188" cy="135" r="4" fill="#06B6D4" />
      <circle cx="189" cy="134" r="1.5" fill="#FFF" />
      {/* Bubbles */}
      {[0, 2, 4, 6].map((d, i) => (
        <circle key={i} cx={195 + i * 8} cy={130 - i * 12} r={2 + i * 0.5} fill="none" stroke="#06B6D4" strokeWidth="0.8"
          style={{ animation: `bubble-rise ${2 + i * 0.8}s ease-out ${d}s infinite`, opacity: 0.3 }} />
      ))}
    </svg>
  );
}

export function PalworldIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[280px] opacity-90"
      style={{ animation: "pal-float 6s ease-in-out infinite" }}>
      <style>{`
        @keyframes pal-float {
          0%, 100% { transform: translateY(0) rotate(0deg); }
          33% { transform: translateY(-15px) rotate(3deg); }
          66% { transform: translateY(-5px) rotate(-2deg); }
        }
        @keyframes pal-sparkle {
          0%, 100% { opacity: 0.3; transform: scale(1); }
          50% { opacity: 0.8; transform: scale(1.5); }
        }
        @keyframes pal-tail-wag {
          0%, 100% { transform: rotate(0deg); }
          30% { transform: rotate(20deg); }
          60% { transform: rotate(-15deg); }
        }
      `}</style>
      {/* Body - Foxparks style */}
      <ellipse cx="150" cy="150" rx="50" ry="35" fill="#D97706" opacity="0.3" />
      <ellipse cx="155" cy="145" rx="40" ry="28" fill="#B45309" opacity="0.5" />
      {/* Head */}
      <ellipse cx="205" cy="130" rx="25" ry="22" fill="#D97706" opacity="0.4" stroke="#F59E0B" strokeWidth="1.5" />
      {/* Ears */}
      <polygon points="195,112 200,95 210,110" fill="#D97706" opacity="0.5" />
      <polygon points="215,108 218,90 225,108" fill="#D97706" opacity="0.5" />
      {/* Eyes */}
      <circle cx="212" cy="128" r="4" fill="#F59E0B" />
      <circle cx="213" cy="127" r="1.5" fill="#FFF" />
      {/* Tail */}
      <g style={{ transformOrigin: "100px 150px", animation: "pal-tail-wag 2s ease-in-out infinite" }}>
        <path d="M105 150 Q75 140 65 120 Q60 105 75 100" stroke="#F59E0B" strokeWidth="3" fill="none" strokeLinecap="round" opacity="0.7" />
      </g>
      {/* Flame particle */}
      <ellipse cx="80" cy="110" rx="6" ry="10" fill="#FBBF24" opacity="0.4" style={{ animation: "pal-sparkle 1.5s ease-in-out infinite" }} />
      {/* Sparkles */}
      {[120, 180, 220, 80, 250, 60].map((cx, i) => (
        <circle key={i} cx={cx} cy={90 + (i % 3) * 25} r={1.5} fill="#FBBF24"
          style={{ animation: `pal-sparkle ${1.5 + i * 0.7}s ease-in-out ${i * 0.5}s infinite` }} />
      ))}
    </svg>
  );
}

export function GTAIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[280px] opacity-85"
      style={{ animation: "gta-drift 8s ease-in-out infinite" }}>
      <style>{`
        @keyframes gta-drift {
          0% { transform: translate(-40px, 20px) rotate(-5deg); }
          50% { transform: translate(40px, -10px) rotate(5deg); }
          100% { transform: translate(-40px, 20px) rotate(-5deg); }
        }
        @keyframes gta-neon {
          0%, 100% { opacity: 0.5; }
          50% { opacity: 0.9; }
        }
        @keyframes gta-palm-sway {
          0%, 100% { transform: rotate(-3deg); }
          50% { transform: rotate(3deg); }
        }
        @keyframes gta-wheel {
          0% { transform: rotate(0deg); }
          100% { transform: rotate(360deg); }
        }
      `}</style>
      {/* Sunset gradient */}
      <defs><linearGradient id="gtaBg" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#EC4899" stopOpacity="0.15"/><stop offset="100%" stopColor="#F59E0B" stopOpacity="0.05"/></linearGradient></defs>
      <rect x="0" y="0" width="300" height="160" fill="url(#gtaBg)" />
      {/* Neon grid lines */}
      {[40, 80, 120, 160, 200, 240].map((x, i) => (
        <line key={i} x1={x} y1={0} x2={x} y2={180} stroke="#EC4899" strokeWidth="0.5" opacity="0.15"
          style={{ animation: `gta-neon ${2 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }} />
      ))}
      {/* Palm tree */}
      <g style={{ transformOrigin: "230px 180px", animation: "gta-palm-sway 4s ease-in-out infinite" }}>
        <line x1="230" y1="30" x2="230" y2="180" stroke="#EC4899" strokeWidth="2.5" opacity="0.4" />
        <path d="M230 30 Q215 50 200 35" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.35" />
        <path d="M230 30 Q245 45 260 30" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.35" />
        <path d="M230 30 Q225 20 215 10" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.3" />
      </g>
      {/* Sports car silhouette */}
      <g>
        <path d="M100 170 L110 150 L165 145 L175 150 L185 150 L190 170 Z" fill="#1C2329" stroke="#EC4899" strokeWidth="1.2" opacity="0.7" />
        <path d="M115 150 L120 135 L160 135 L170 145" fill="#1C2329" stroke="#EC4899" strokeWidth="0.8" opacity="0.5" />
        {/* Wheels */}
        <circle cx="130" cy="170" r="6" fill="#0A0E11" stroke="#EC4899" strokeWidth="1"
          style={{ transformOrigin: "130px 170px", animation: "gta-wheel 2s linear infinite" }} />
        <circle cx="170" cy="170" r="6" fill="#0A0E11" stroke="#EC4899" strokeWidth="1"
          style={{ transformOrigin: "170px 170px", animation: "gta-wheel 2s linear infinite" }} />
      </g>
      {/* Neon exhaust trail */}
      <path d="M80 175 Q60 170 40 180 Q20 190 10 175" stroke="#EC4899" strokeWidth="1.5" fill="none" opacity="0" style={{ animation: "gta-neon 1.5s ease-in-out infinite" }} />
    </svg>
  );
}

export function MecchaIllustration() {
  return (
    <svg viewBox="0 0 300 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[280px] opacity-90 chameleon-walk">
      <g className="chameleon-bob">
        <ellipse cx="140" cy="150" rx="70" ry="40" fill="#1C2329" stroke="#A1FF4F" strokeWidth="1.2" />
        <ellipse cx="155" cy="147" rx="50" ry="28" fill="#161B20" />
        <circle cx="110" cy="140" r="8" fill="#A1FF4F" opacity="0.15" />
        <circle cx="170" cy="155" r="6" fill="#C74FFF" opacity="0.12" />
        <g className="chameleon-tail">
          <path d="M70 150 Q50 150 45 130 Q40 110 55 100 Q65 92 70 105" stroke="#A1FF4F" strokeWidth="2" fill="none" strokeLinecap="round" />
        </g>
        <ellipse cx="210" cy="140" rx="22" ry="20" fill="#1C2329" stroke="#A1FF4F" strokeWidth="1.2" />
        <g className="chameleon-eye">
          <circle cx="218" cy="135" r="8" fill="#0A0E11" stroke="#A1FF4F" strokeWidth="0.8" />
          <circle cx="220" cy="134" r="3.5" fill="#A1FF4F" />
          <circle cx="221" cy="133" r="1.5" fill="#FFF" />
        </g>
        <line x1="105" y1="188" x2="95" y2="205" stroke="#A1FF4F" strokeWidth="2" strokeLinecap="round" opacity="0.5" className="chameleon-leg-back" style={{transformOrigin: "105px 188px"}} />
        <line x1="145" y1="190" x2="145" y2="207" stroke="#A1FF4F" strokeWidth="2" strokeLinecap="round" opacity="0.5" className="chameleon-leg-front" style={{transformOrigin: "145px 190px"}} />
        {/* Camo spots floating */}
        <circle cx="230" cy="110" r="4" fill="#A1FF4F" opacity="0.2" />
        <circle cx="60" cy="100" r="3" fill="#C74FFF" opacity="0.15" />
      </g>
    </svg>
  );
}

/** Returns the right illustration for each game */
export default function HeroIllustration({ game }: { game?: string }) {
  switch (game) {
    case "meccha-chameleon": return <MecchaIllustration />;
    case "subnautica-2": return <SubnauticaIllustration />;
    case "palworld": return <PalworldIllustration />;
    case "gta-6": return <GTAIllustration />;
    default: return <QuestLogMark />;
  }
}

/** QuestLog brand mark — animated open book with turning pages */
export function QuestLogMark() {
  return (
    <svg viewBox="0 0 280 240" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full h-auto max-w-[280px] opacity-90"
      style={{ animation: "book-float 5s ease-in-out infinite" }}>
      <style>{`
        @keyframes book-float {
          0%, 100% { transform: translateY(0); }
          50% { transform: translateY(-8px); }
        }
        @keyframes page-turn-right {
          0%, 100% { transform: skewY(0deg) scaleX(1); opacity: 0.6; }
          40% { transform: skewY(-3deg) scaleX(0.3); opacity: 0.2; }
          50% { transform: skewY(-2deg) scaleX(-0.8); opacity: 0.6; }
          60% { transform: skewY(0deg) scaleX(0.3); opacity: 0.2; }
        }
        @keyframes page-turn-left {
          0%, 100% { transform: skewY(0deg) scaleX(1); opacity: 0.6; }
          40% { transform: skewY(3deg) scaleX(0.3); opacity: 0.2; }
          50% { transform: skewY(2deg) scaleX(-0.8); opacity: 0.6; }
          60% { transform: skewY(0deg) scaleX(0.3); opacity: 0.2; }
        }
        @keyframes bookmark-wave {
          0%, 100% { transform: rotate(-2deg); }
          50% { transform: rotate(2deg); }
        }
        @keyframes line-appear {
          0% { opacity: 0.3; }
          100% { opacity: 0.7; }
        }
        @keyframes sparkle-fade {
          0%, 100% { opacity: 0.1; transform: scale(0.8); }
          50% { opacity: 0.4; transform: scale(1.2); }
        }
      `}</style>

      {/* Book spine shadow / depth */}
      <rect x="130" y="75" width="8" height="90" rx="2" fill="#0A0E11" stroke="#A1FF4F" strokeWidth="0.5" opacity="0.3" />

      {/* Right page */}
      <g style={{ transformOrigin: "140px 120px" }}>
        <path d="M138 75 L260 80 Q265 85 260 160 L138 165 Z" fill="#11161A" stroke="#A1FF4F" strokeWidth="1.2" opacity="0.6" />
        {/* Page lines */}
        {[85, 95, 105, 115, 125, 135, 145, 155].map((y, i) => (
          <line key={i} x1={150} y1={y} x2={250} y2={y + 2} stroke="#A1FF4F" strokeWidth="0.5" opacity={0.08 + i * 0.02}
            style={{ animation: `line-appear ${3 + i * 0.3}s ease-in-out ${i * 0.2}s infinite` }} />
        ))}
      </g>

      {/* Left page */}
      <g style={{ transformOrigin: "140px 120px" }}>
        <path d="M138 75 L20 80 Q15 85 20 160 L138 165 Z" fill="#11161A" stroke="#A1FF4F" strokeWidth="1.2" opacity="0.6" />
        {[85, 95, 105, 115, 125, 135, 145, 155].map((y, i) => (
          <line key={i} x1={130} y1={y} x2={30} y2={y + 2} stroke="#A1FF4F" strokeWidth="0.5" opacity={0.08 + i * 0.02}
            style={{ animation: `line-appear ${3 + i * 0.3}s ease-in-out ${i * 0.3}s infinite` }} />
        ))}
      </g>

      {/* Right turning page */}
      <g style={{ transformOrigin: "140px 75px", animation: "page-turn-right 6s ease-in-out infinite" }}>
        <path d="M138 75 L250 78 Q258 82 254 150 L138 165 Z" fill="#161B20" stroke="#A1FF4F" strokeWidth="1" opacity="0.5" />
        {[90, 100, 110, 120, 130, 140, 150].map((y, i) => (
          <line key={i} x1={148} y1={y} x2={240} y2={y + 1} stroke="#A1FF4F" strokeWidth="0.4" opacity={0.06 + i * 0.02} />
        ))}
      </g>

      {/* Left turning page */}
      <g style={{ transformOrigin: "140px 75px", animation: "page-turn-left 6s ease-in-out 3s infinite" }}>
        <path d="M138 75 L30 78 Q22 82 26 150 L138 165 Z" fill="#161B20" stroke="#A1FF4F" strokeWidth="1" opacity="0.5" />
        {[90, 100, 110, 120, 130, 140, 150].map((y, i) => (
          <line key={i} x1={130} y1={y} x2={40} y2={y + 1} stroke="#A1FF4F" strokeWidth="0.4" opacity={0.06 + i * 0.02} />
        ))}
      </g>

      {/* Book cover border */}
      <path d="M138 72 L262 78 Q268 85 262 163 L138 168" fill="none" stroke="#A1FF4F" strokeWidth="1.8" opacity="0.3" />
      <path d="M138 72 L18 78 Q12 85 18 163 L138 168" fill="none" stroke="#A1FF4F" strokeWidth="1.8" opacity="0.3" />

      {/* Bookmark ribbon */}
      <g style={{ transformOrigin: "140px 168px", animation: "bookmark-wave 3s ease-in-out infinite" }}>
        <path d="M140 168 L140 195 L145 188 L150 193 L140 180" fill="#C74FFF" opacity="0.4" />
        <path d="M140 168 L140 195 L145 188 L150 193 L140 180" fill="none" stroke="#C74FFF" strokeWidth="1" opacity="0.6" />
      </g>

      {/* Quest marker pin (floating above book) */}
      <g style={{ animation: "book-float 5s ease-in-out infinite" }}>
        <path d="M175 65 Q175 48 185 48 Q195 48 195 65 Q195 75 185 82 Q175 75 175 65 Z" fill="#A1FF4F" opacity="0.25" stroke="#A1FF4F" strokeWidth="1" />
        <circle cx="185" cy="63" r="3" fill="#0A0E11" />
      </g>

      {/* Floating sparkles */}
      {[60, 100, 200, 240, 80, 220].map((cx, i) => (
        <circle key={i} cx={cx} cy={50 + (i % 2) * 20} r={1.5} fill="#A1FF4F"
          style={{ animation: `sparkle-fade ${2 + i * 0.6}s ease-in-out ${i * 0.4}s infinite` }} />
      ))}
    </svg>
  );
}
