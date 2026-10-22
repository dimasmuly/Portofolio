import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';

const requests = [
  ['GET', '/v1/rooms/availability', 200, 42],
  ['POST', '/v1/bookings', 201, 118],
  ['GET', '/v1/hotels/87/rooms', 200, 35],
  ['POST', '/v1/payments/charge', 200, 264],
  ['PATCH', '/v1/bookings/5521', 200, 51],
  ['GET', '/v1/rooms/availability', 304, 9],
];

const VISIBLE = 3;

// Streaming API access log; each new request slides in at the bottom
export default function LogVisual() {
  const [ref, inView] = useInView();
  const reduced = useReducedMotion();
  const [count, setCount] = useState(VISIBLE);

  useEffect(() => {
    if (!inView || reduced) return;
    const id = setInterval(() => setCount((c) => c + 1), 1400);
    return () => clearInterval(id);
  }, [inView, reduced]);

  const lines = [];
  for (let n = count - VISIBLE; n < count; n++) {
    lines.push({ id: n, req: requests[n % requests.length] });
  }

  return (
    <div ref={ref} className="viz viz-log" aria-hidden="true">
      {lines.map(({ id, req: [method, path, status, ms] }) => (
        <div key={id} className="log-line">
          <span className={`m m-${method}`}>{method}</span>
          <span className="p">{path}</span>
          <span className={status >= 300 ? 's s-3' : 's'}>{status}</span>
          <span className="t">{ms}ms</span>
        </div>
      ))}
    </div>
  );
}
