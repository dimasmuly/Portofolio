const heights = [38, 56, 44, 70, 62, 84, 76];

// Bars grow in when the parent card gets its `in` class
export default function BarsVisual() {
  return (
    <div className="viz viz-bars" aria-hidden="true">
      <span className="bars-label">cash position</span>
      {heights.map((h, i) => (
        <span key={i} style={{ '--h': `${h}%`, '--i': i }} />
      ))}
    </div>
  );
}
