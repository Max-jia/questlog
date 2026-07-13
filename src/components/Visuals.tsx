/** Reusable visual components — all content-matched, no filler images */

/* ================================================================
   GAME ICONS — used in game cards and headers
   ================================================================ */

export function ChameleonIcon({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" width={size} height={size}>
      <ellipse cx="52" cy="72" rx="38" ry="24" fill="#1C2329" stroke="#A1FF4F" strokeWidth="1.2" />
      <ellipse cx="58" cy="70" rx="28" ry="18" fill="#161B20" />
      {/* Camo spots */}
      <circle cx="42" cy="68" r="5" fill="#A1FF4F" opacity="0.2" />
      <circle cx="68" cy="74" r="4" fill="#A1FF4F" opacity="0.15" />
      <circle cx="55" cy="63" r="3.5" fill="#C74FFF" opacity="0.15" />
      <circle cx="36" cy="76" r="3" fill="#A1FF4F" opacity="0.12" />
      <circle cx="72" cy="66" r="3" fill="#C74FFF" opacity="0.1" />
      {/* Tail */}
      <path d="M14 72 Q4 72 2 58 Q0 44 8 38 Q16 32 22 42" stroke="#A1FF4F" strokeWidth="2" fill="none" strokeLinecap="round" />
      {/* Head */}
      <ellipse cx="92" cy="67" rx="16" ry="14" fill="#1C2329" stroke="#A1FF4F" strokeWidth="1.2" />
      {/* Eye */}
      <circle cx="97" cy="63" r="6" fill="#0A0E11" stroke="#A1FF4F" strokeWidth="0.8" />
      <circle cx="99" cy="62" r="2.5" fill="#A1FF4F" />
      <circle cx="100" cy="61" r="1" fill="#FFF" />
      {/* Mouth */}
      <path d="M105 69 Q108 67 107 71" stroke="#A1FF4F" strokeWidth="1" fill="none" strokeLinecap="round" />
      {/* Legs */}
      <line x1="36" y1="94" x2="32" y2="105" stroke="#A1FF4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="56" y1="95" x2="56" y2="106" stroke="#A1FF4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      <line x1="70" y1="93" x2="74" y2="104" stroke="#A1FF4F" strokeWidth="1.5" strokeLinecap="round" opacity="0.5" />
      {/* Tongue */}
      <path d="M109 72 Q118 76 120 82" stroke="#C74FFF" strokeWidth="1.5" fill="none" strokeLinecap="round" opacity="0.6" />
    </svg>
  );
}

export function SubnauticaIcon({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" width={size} height={size}>
      <ellipse cx="60" cy="65" rx="45" ry="35" fill="#0A2A3A" stroke="#06B6D4" strokeWidth="1.2" opacity="0.7" />
      {/* Water layers */}
      <path d="M10 45 Q30 38 50 45 T90 45 T110 45" stroke="#06B6D4" strokeWidth="1" fill="none" opacity="0.4" />
      <path d="M5 55 Q25 50 45 55 T85 55 T115 55" stroke="#0891B2" strokeWidth="1" fill="none" opacity="0.3" />
      {/* Submarine silhouette */}
      <ellipse cx="55" cy="62" rx="18" ry="7" fill="#0D3B4F" stroke="#06B6D4" strokeWidth="0.8" />
      <rect x="48" y="58" width="14" height="4" rx="2" fill="#0D3B4F" stroke="#06B6D4" strokeWidth="0.5" />
      {/* Bubbles */}
      <circle cx="72" cy="48" r="3" fill="#06B6D4" opacity="0.3" />
      <circle cx="78" cy="40" r="2" fill="#06B6D4" opacity="0.2" />
      <circle cx="68" cy="38" r="1.5" fill="#06B6D4" opacity="0.25" />
      {/* Deep sea glow */}
      <circle cx="60" cy="85" r="15" fill="#06B6D4" opacity="0.06" />
      {/* Fish silhouette */}
      <ellipse cx="38" cy="58" rx="8" ry="4" fill="#0891B2" opacity="0.3" />
      <path d="M30 58 L26 54 L26 62 Z" fill="#0891B2" opacity="0.3" />
    </svg>
  );
}

export function GTAIcon({ size = 80 }: { size?: number }) {
  return (
    <svg viewBox="0 0 120 120" fill="none" width={size} height={size}>
      {/* Sunset sky */}
      <defs><linearGradient id="gtaSunset" x1="0" y1="0" x2="0" y2="1"><stop offset="0%" stopColor="#EC4899" stopOpacity="0.3" /><stop offset="60%" stopColor="#F59E0B" stopOpacity="0.15" /><stop offset="100%" stopColor="#0A0E11" stopOpacity="0" /></linearGradient></defs>
      <rect x="0" y="0" width="120" height="80" fill="url(#gtaSunset)" />
      {/* Palm trees */}
      <line x1="25" y1="20" x2="25" y2="90" stroke="#EC4899" strokeWidth="2" opacity="0.5" />
      <path d="M25 20 Q15 30 8 18" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M25 20 Q35 25 38 15" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.4" />
      <path d="M25 20 Q30 10 22 8" stroke="#EC4899" strokeWidth="2" fill="none" opacity="0.3" />
      <line x1="90" y1="30" x2="90" y2="90" stroke="#EC4899" strokeWidth="1.5" opacity="0.4" />
      <path d="M90 30 Q82 38 76 28" stroke="#EC4899" strokeWidth="1.5" fill="none" opacity="0.3" />
      <path d="M90 30 Q98 36 102 26" stroke="#EC4899" strokeWidth="1.5" fill="none" opacity="0.3" />
      {/* City skyline */}
      <rect x="40" y="65" width="8" height="25" fill="#EC4899" opacity="0.3" />
      <rect x="52" y="55" width="6" height="35" fill="#EC4899" opacity="0.4" />
      <rect x="62" y="60" width="10" height="30" fill="#EC4899" opacity="0.3" />
      <rect x="76" y="50" width="5" height="40" fill="#EC4899" opacity="0.35" />
      {/* Sun circle */}
      <circle cx="95" cy="30" r="12" fill="#F59E0B" opacity="0.15" />
    </svg>
  );
}

/* ================================================================
   KEYBIND REFERENCE CARD — for beginner guide
   ================================================================ */

export function KeybindCard() {
  const groups = [
    { title: "Movement", color: "#A1FF4F", keys: [["WASD","Walk"],["C","Crouch"],["Space (hold)","Climb Wall"],["E / Q","Up/Down on Wall"],["Shift","Detach Wall"]] },
    { title: "Painting (Hider)", color: "#C74FFF", keys: [["F","Paint Menu"],["R","Pose Wheel"],["Space","Eyedropper"],["V","Toggle Shadow"],["RMB + Move","Brush Size"]] },
    { title: "Seeker", color: "#F59E0B", keys: [["LMB","Tag/Eliminate"],["2","Drawing View"],["3","Nameplates"]] },
  ];

  return (
    <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {groups.map((g) => (
        <div key={g.title} className="rounded-xl bg-bg-card border border-border overflow-hidden">
          <div className="px-4 py-2.5 border-b border-border flex items-center gap-2" style={{ background: `${g.color}0A` }}>
            <div className="w-2 h-2 rounded-full" style={{ background: g.color }} />
            <span className="text-xs font-bold uppercase tracking-wider" style={{ color: g.color }}>{g.title}</span>
          </div>
          <div className="p-3 space-y-1.5">
            {g.keys.map(([key, label]) => (
              <div key={key} className="flex items-center justify-between text-xs">
                <kbd className="px-1.5 py-0.5 rounded bg-bg-elevated text-text-primary font-mono text-[11px] border border-border min-w-[60px] text-center">{key}</kbd>
                <span className="text-text-muted ml-2 text-right">{label}</span>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
}

/* ================================================================
   GAME MODE CARDS — for beginner guide
   ================================================================ */

export function GameModeCards() {
  const modes = [
    { name: "Basic", desc: "Classic hide & seek. Hiders win if one survives.", best: "Beginners", color: "#A1FF4F", icon: "🎯" },
    { name: "Infection", desc: "Caught hiders join the hunters. Escalating pressure.", best: "Thrill-seekers", color: "#C74FFF", icon: "🧟" },
    { name: "Double", desc: "Everyone hides, then everyone hunts. Tests both skills.", best: "Competitive", color: "#F59E0B", icon: "⚔️" },
  ];

  return (
    <div className="not-prose my-8 grid grid-cols-1 sm:grid-cols-3 gap-4">
      {modes.map((m) => (
        <div key={m.name} className="rounded-xl bg-bg-card border border-border p-5 relative overflow-hidden">
          <div className="absolute top-0 left-0 w-1 h-full" style={{ background: `linear-gradient(to bottom, ${m.color}, transparent)` }} />
          <div className="text-2xl mb-2">{m.icon}</div>
          <h4 className="font-display text-lg tracking-wider text-text-primary">{m.name}</h4>
          <p className="text-xs text-text-muted mt-1 leading-relaxed">{m.desc}</p>
          <span className="inline-block mt-2 text-[10px] uppercase tracking-wider font-semibold px-2 py-0.5 rounded-full" style={{ color: m.color, background: `${m.color}10` }}>Best for {m.best}</span>
        </div>
      ))}
    </div>
  );
}

/* ================================================================
   MAP LAYOUT ILLUSTRATION — for maps guide
   ================================================================ */

export function MapLayout({ name, spots, color }: { name: string; spots: string[]; color: string }) {
  return (
    <div className="not-prose my-6 rounded-xl bg-bg-card border border-border overflow-hidden">
      <div className="px-5 py-3 border-b border-border flex items-center gap-3" style={{ background: `${color}0A` }}>
        <div className="w-2.5 h-2.5 rounded-full" style={{ background: color }} />
        <span className="font-display text-lg tracking-wider text-text-primary">{name}</span>
        <span className="text-[10px] text-text-muted ml-auto">{spots.length} spots</span>
      </div>
      <div className="p-5">
        {/* Abstract map grid */}
        <div className="relative rounded-lg bg-bg-elevated border border-border overflow-hidden mb-4" style={{ height: 160 }}>
          {/* Grid lines */}
          <svg viewBox="0 0 400 160" className="absolute inset-0 w-full h-full opacity-[0.06]">
            {[0,40,80,120,160,200,240,280,320,360,400].map((x) => (
              <line key={`v${x}`} x1={x} y1={0} x2={x} y2={160} stroke="#A1FF4F" strokeWidth="0.5" />
            ))}
            {[0,40,80,120,160].map((y) => (
              <line key={`h${y}`} x1={0} y1={y} x2={400} y2={y} stroke="#A1FF4F" strokeWidth="0.5" />
            ))}
          </svg>
          {/* Spot markers */}
          {spots.map((spot, i) => {
            const x = 20 + (i * 47) % 360;
            const y = 30 + (i * 31) % 120;
            return (
              <div key={i} className="absolute flex items-center gap-1.5" style={{ left: x, top: y }}>
                <div className="w-3 h-3 rounded-full border-2 flex-shrink-0" style={{ borderColor: color, background: `${color}20` }} />
                <span className="text-[10px] text-text-muted bg-bg-card/90 px-1.5 py-0.5 rounded whitespace-nowrap">{spot.slice(0, 20)}</span>
              </div>
            );
          })}
        </div>
        {/* Spot list */}
        <ul className="grid grid-cols-1 sm:grid-cols-2 gap-1.5">
          {spots.map((s, i) => (
            <li key={i} className="flex items-center gap-2 text-xs text-text-secondary">
              <div className="w-1.5 h-1.5 rounded-full flex-shrink-0" style={{ background: color }} />
              {s}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

/* ================================================================
   SKIN CARD — for skins guide
   ================================================================ */

export function SkinCard({ name, difficulty, time, color, desc }: {
  name: string; difficulty: number; time: string; color: string; desc: string;
}) {
  const stars = Array.from({ length: 5 }, (_, i) => i < difficulty ? "★" : "☆");

  return (
    <div className="not-prose my-4 rounded-xl bg-bg-card border border-border overflow-hidden group hover:border-accent/30 transition-colors">
      <div className="flex flex-col sm:flex-row">
        {/* Left: color panel */}
        <div className="sm:w-1 flex sm:flex-col" style={{ background: `linear-gradient(to bottom, ${color}, ${color}40)` }}>
          <div className="flex sm:flex-col items-center justify-center p-3 sm:p-4 gap-2">
            <div className="w-8 h-8 rounded-lg border flex items-center justify-center text-sm" style={{ borderColor: color, background: `${color}20` }}>
              {name.slice(0, 1)}
            </div>
            <div className="flex sm:flex-col text-[10px] tracking-wider" style={{ color }}>
              {stars.map((s, i) => <span key={i}>{s}</span>)}
            </div>
          </div>
        </div>
        {/* Right: content */}
        <div className="flex-1 p-4 sm:p-5">
          <div className="flex items-center justify-between mb-2">
            <h4 className="font-display text-lg tracking-wider text-text-primary">{name}</h4>
            <span className="text-[10px] text-text-muted">{time}</span>
          </div>
          <p className="text-sm text-text-secondary leading-relaxed">{desc}</p>
          <div className="mt-3 flex items-center gap-2">
            <div className="flex-1 h-1 rounded-full bg-bg-elevated overflow-hidden">
              <div className="h-full rounded-full" style={{ width: `${(difficulty / 5) * 100}%`, background: color }} />
            </div>
            <span className="text-[10px] text-text-muted">Difficulty {difficulty}/5</span>
          </div>
        </div>
      </div>
    </div>
  );
}

/* ================================================================
   TIP BOX — inline callout
   ================================================================ */

export function TipBox({ type, children }: { type: "tip" | "warning" | "pro"; children: React.ReactNode }) {
  const config = {
    tip: { icon: "💡", color: "#A1FF4F", label: "Tip" },
    warning: { icon: "⚠️", color: "#F59E0B", label: "Warning" },
    pro: { icon: "⚡", color: "#C74FFF", label: "Pro Move" },
  };
  const c = config[type];

  return (
    <div className="not-prose my-5 rounded-xl border p-4 flex gap-3" style={{ borderColor: `${c.color}30`, background: `${c.color}08` }}>
      <span className="text-lg flex-shrink-0 mt-0.5">{c.icon}</span>
      <div>
        <span className="text-xs font-bold uppercase tracking-wider" style={{ color: c.color }}>{c.label}</span>
        <div className="text-sm text-text-secondary mt-1 leading-relaxed">{children}</div>
      </div>
    </div>
  );
}

/* ================================================================
   STAT COMPARISON BAR — visual stat bar
   ================================================================ */

export function StatBar({ label, value, max = 100, color = "#A1FF4F" }: { label: string; value: number; max?: number; color?: string }) {
  return (
    <div className="not-prose my-2 flex items-center gap-3">
      <span className="text-xs text-text-muted w-28 flex-shrink-0">{label}</span>
      <div className="flex-1 h-2 rounded-full bg-bg-elevated overflow-hidden">
        <div className="h-full rounded-full transition-all" style={{ width: `${(value / max) * 100}%`, background: color }} />
      </div>
      <span className="text-xs text-text-secondary w-8 text-right">{value}</span>
    </div>
  );
}
