import Icon from '../Icon.jsx';
import useInView from '../../hooks/useInView.js';

// One heartbeat, 120 units wide; drawn twice so the scroll loops seamlessly
const beat = (x) =>
  `M${x} 20 H${x + 30} L${x + 36} 20 L${x + 40} 13 L${x + 44} 20 H${x + 52} L${x + 56} 28 L${x + 62} 3 L${x + 68} 36 L${x + 72} 20 H${x + 84} L${x + 90} 14 L${x + 96} 20 H${x + 120}`;

export default function EcgVisual() {
  const [ref, inView] = useInView();
  return (
    <div ref={ref} className={`viz-ecg ${inView ? '' : 'is-paused'}`} aria-hidden="true">
      <span className="tile-icon"><Icon name="heart" /></span>
      <div className="ecg-strip">
        <svg viewBox="0 0 240 40" preserveAspectRatio="none">
          <path d={`${beat(0)} ${beat(120)}`} />
        </svg>
      </div>
    </div>
  );
}
