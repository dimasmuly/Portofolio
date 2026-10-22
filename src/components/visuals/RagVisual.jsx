import { useEffect, useState } from 'react';
import useInView from '../../hooks/useInView.js';
import useReducedMotion from '../../hooks/useReducedMotion.js';

const conversations = [
  {
    q: "What's the refund policy for group bookings?",
    a: 'Group bookings can be refunded up to 14 days before check-in.',
    sources: ['booking-policy.pdf · p.4', 'faq.md'],
  },
  {
    q: 'Which regions does the premium plan cover?',
    a: 'Premium covers Java, Bali and Sumatra, with Sulawesi added in Q3.',
    sources: ['pricing-2026.pdf', 'sales-deck.pptx'],
  },
  {
    q: 'Summarize last week’s incident report.',
    a: 'Two short outages, both from DB connection limits — fixed with pooling.',
    sources: ['incident-0412.md'],
  },
];

const steps = ['embed', 'qdrant · top-3', 'gpt-3.5'];

// Step status for each phase: ask → retrieve → type → done
function stepState(phase, index) {
  if (phase === 'done') return 'done';
  if (phase === 'type') return index < 2 ? 'done' : 'active';
  if (phase === 'retrieve') return index === 0 ? 'done' : index === 1 ? 'active' : '';
  return '';
}

export default function RagVisual() {
  const [ref, inView] = useInView();
  const reduced = useReducedMotion();
  const [turn, setTurn] = useState(0);
  const [phase, setPhase] = useState('ask');
  const [chars, setChars] = useState(0);
  const convo = conversations[turn];

  useEffect(() => {
    if (!inView || reduced) return;
    let t;
    if (phase === 'ask') {
      t = setTimeout(() => setPhase('retrieve'), 900);
    } else if (phase === 'retrieve') {
      t = setTimeout(() => setPhase('type'), 1400);
    } else if (phase === 'type') {
      t = chars < convo.a.length
        ? setTimeout(() => setChars((c) => c + 2), 30)
        : setTimeout(() => setPhase('done'), 250);
    } else {
      t = setTimeout(() => {
        setTurn((n) => (n + 1) % conversations.length);
        setChars(0);
        setPhase('ask');
      }, 3500);
    }
    return () => clearTimeout(t);
  }, [inView, reduced, phase, chars, convo.a.length]);

  const shownPhase = reduced ? 'done' : phase;
  const answer = shownPhase === 'done' ? convo.a : convo.a.slice(0, chars);

  return (
    <div ref={ref} className="viz viz-chat" aria-hidden="true">
      <div className="rag-steps">
        {steps.map((s, i) => (
          <span key={s} className={`rag-step ${stepState(shownPhase, i)}`}>{s}</span>
        ))}
      </div>
      <p key={`q${turn}`} className="bubble bubble-user">{convo.q}</p>
      {shownPhase === 'retrieve' && (
        <p className="bubble bubble-bot">
          <span className="typing"><i /><i /><i /></span>
          <span className="typing-note">retrieving 3 chunks…</span>
        </p>
      )}
      {(shownPhase === 'type' || shownPhase === 'done') && (
        <div key={`a${turn}`} className="bubble bubble-bot">
          {answer}
          {shownPhase === 'type' && <span className="caret" />}
          {shownPhase === 'done' && (
            <div className="sources">
              {convo.sources.map((s) => <span key={s}>↳ {s}</span>)}
            </div>
          )}
        </div>
      )}
    </div>
  );
}
