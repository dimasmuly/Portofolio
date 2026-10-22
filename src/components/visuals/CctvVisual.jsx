import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView.js';

const fmt = new Intl.DateTimeFormat('en-GB', {
  hour: '2-digit', minute: '2-digit', second: '2-digit', hour12: false,
});

// Silhouette drawn with feet at (0,0); `s` scales the figure but not its label
function Walker({ className, s = 1, color, label }) {
  const boxTop = -112 * s;
  return (
    <g className={className}>
      <g className="bob">
        <g transform={`scale(${s})`}>
          <circle cx="0" cy="-92" r="12" fill="#3b4060" />
          <rect x="-17" y="-78" width="34" height="44" rx="12" fill="#353a57" />
          <rect className="leg leg-l" x="-14" y="-38" width="11" height="38" rx="5" fill="#2e3250" />
          <rect className="leg leg-r" x="3" y="-38" width="11" height="38" rx="5" fill="#2e3250" />
          <rect x="-27" y="-112" width="54" height="116" rx="4" fill={color} fillOpacity=".08" stroke={color} strokeWidth={1.6 / s} />
        </g>
        <rect x={-27 * s} y={boxTop - 22} width={label.length * 7.6 + 14} height="20" rx="4" fill={color} />
        <text className="tag-text" x={-27 * s + 7} y={boxTop - 7.5}>{label}</text>
      </g>
    </g>
  );
}

export default function CctvVisual() {
  const [ref, inView] = useInView();
  const [now, setNow] = useState(() => fmt.format(new Date()));

  useEffect(() => {
    if (!inView) return;
    const id = setInterval(() => setNow(fmt.format(new Date())), 1000);
    return () => clearInterval(id);
  }, [inView]);

  return (
    <div ref={ref} className={`viz viz-cctv ${inView ? '' : 'is-paused'}`} aria-hidden="true">
      <svg className="scene" viewBox="0 0 500 380" preserveAspectRatio="xMidYMid slice">
        <defs>
          <linearGradient id="cctv-wall" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#151724" />
            <stop offset="1" stopColor="#0d0e15" />
          </linearGradient>
          <linearGradient id="cctv-floor" x1="0" y1="0" x2="0" y2="1">
            <stop offset="0" stopColor="#141623" />
            <stop offset="1" stopColor="#1d2033" />
          </linearGradient>
        </defs>

        {/* Room */}
        <rect width="500" height="215" fill="url(#cctv-wall)" />
        <rect y="215" width="500" height="165" fill="url(#cctv-floor)" />
        <rect x="212" y="115" width="76" height="100" rx="3" fill="#1b1e30" stroke="#262a40" />
        <rect x="40" y="70" width="100" height="60" rx="3" fill="#171a2a" stroke="#22263a" />
        <rect x="360" y="70" width="100" height="60" rx="3" fill="#171a2a" stroke="#22263a" />
        <g stroke="rgba(255,255,255,0.05)">
          <line x1="0" y1="215" x2="500" y2="215" />
          <line x1="0" y1="250" x2="500" y2="250" />
          <line x1="0" y1="300" x2="500" y2="300" />
          <line x1="250" y1="215" x2="-150" y2="380" />
          <line x1="250" y1="215" x2="60" y2="380" />
          <line x1="250" y1="215" x2="250" y2="380" />
          <line x1="250" y1="215" x2="440" y2="380" />
          <line x1="250" y1="215" x2="650" y2="380" />
        </g>

        {/* Counting zone */}
        <polygon points="70,290 262,290 288,372 40,372" fill="rgba(124,136,255,0.05)" stroke="#7c88ff" strokeOpacity=".5" strokeDasharray="5 5" />
        <text className="zone-text" x="52" y="364">ZONE A</text>

        {/* Bench + unattended bag */}
        <rect x="340" y="300" width="120" height="9" rx="2" fill="#262a40" />
        <rect x="348" y="309" width="6" height="22" fill="#20243a" />
        <rect x="446" y="309" width="6" height="22" fill="#20243a" />
        <rect x="370" y="314" width="30" height="24" rx="6" fill="#3a3346" />
        <path d="M377 314 q8 -12 16 0" fill="none" stroke="#3a3346" strokeWidth="3" />
        <rect x="364" y="304" width="42" height="38" rx="4" fill="rgba(255,181,71,0.08)" stroke="#ffb547" strokeWidth="1.6" />
        <rect x="300" y="282" width="106" height="20" rx="4" fill="#ffb547" />
        <text className="tag-text" x="307" y="296.5">bag 0.88 #21</text>

        {/* Tracking trail */}
        <line className="trail" x1="110" y1="356" x2="270" y2="356" stroke="#7c88ff" strokeOpacity=".6" strokeWidth="2" />

        <Walker className="walker-b" s={0.72} color="#4fd1a5" label="person 0.91 #07" />
        <Walker className="walker-a" s={1} color="#7c88ff" label="person 0.94 #12" />
      </svg>

      <div className="scanline" />
      <span className="hud hud-tl"><span className="dot dot-red" />REC · CAM-02</span>
      <span className="hud hud-tr">24 FPS · 3 tracked</span>
      <span className="hud hud-bl">{now}</span>
      <span className="hud hud-br">YOLO + DeepSORT</span>
    </div>
  );
}
