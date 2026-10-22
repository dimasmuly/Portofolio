import useInView from '../../hooks/useInView.js';

const shirt = 'M70 66 Q100 58 130 66 L152 120 L138 126 L128 102 L128 160 L72 160 L72 102 L62 126 L48 120 Z';
const pants = 'M72 160 L128 160 L126 244 L106 244 L100 186 L94 244 L74 244 Z';

const parts = [
  { name: 'shirt 0.93', color: '#7c88ff', box: [42, 54, 116, 110], delay: '' },
  { name: 'pants 0.90', color: '#4fd1a5', box: [66, 156, 68, 92], delay: 'seg-d1' },
  { name: 'shoes 0.86', color: '#ffb547', box: [62, 240, 76, 22], delay: 'seg-d2' },
];

function Shoes(props) {
  return (
    <g {...props}>
      <rect x="68" y="244" width="28" height="12" rx="5" />
      <rect x="104" y="244" width="28" height="12" rx="5" />
    </g>
  );
}

// Grounding DINO finds boxes from a text prompt, then SAM fills pixel masks
export default function OutfitVisual() {
  const [ref, inView] = useInView();

  return (
    <div ref={ref} className={`viz viz-seg ${inView ? '' : 'is-paused'}`} aria-hidden="true">
      <p className="seg-prompt">prompt: <b>"shirt . pants . shoes"</b></p>
      <svg viewBox="0 0 200 280" preserveAspectRatio="xMidYMid meet">
        {/* Base figure */}
        <g fill="#2f3354">
          <circle cx="100" cy="38" r="17" />
          <rect x="93" y="53" width="14" height="10" />
          <path d={shirt} />
          <circle cx="55" cy="130" r="6" />
          <circle cx="145" cy="130" r="6" />
          <path d={pants} />
          <Shoes />
        </g>
        <path d="M83 34 Q86 18 100 18 Q114 18 117 34 Q108 26 100 27 Q92 26 83 34 Z" fill="#23263f" />

        {/* SAM masks */}
        <path className="seg-mask" d={shirt} fill="#7c88ff" fillOpacity=".55" stroke="#7c88ff" />
        <path className="seg-mask seg-d1" d={pants} fill="#4fd1a5" fillOpacity=".5" stroke="#4fd1a5" />
        <Shoes className="seg-mask seg-d2" fill="#ffb547" fillOpacity=".6" stroke="#ffb547" />

        {/* Grounding DINO boxes + labels */}
        {parts.map(({ name, color, box: [x, y, w, h], delay }) => (
          <g key={name}>
            <rect className={`seg-box ${delay}`} x={x} y={y} width={w} height={h} rx="3" stroke={color} />
            <g className={`seg-mask ${delay}`}>
              <rect x={x} y={y - 13} width={name.length * 6 + 8} height="13" rx="3" fill={color} />
              <text className="seg-text" x={x + 4} y={y - 3.5}>{name}</text>
            </g>
          </g>
        ))}
      </svg>
      <div className="seg-scan" />
    </div>
  );
}
