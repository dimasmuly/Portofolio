import { useEffect, useRef, useState } from 'react';
import Card from './Card.jsx';
import { profile } from '../data/profile.js';

export default function Contact() {
  const [hint, setHint] = useState('Copy');
  const timer = useRef(null);

  useEffect(() => () => clearTimeout(timer.current), []);

  const copyEmail = async () => {
    let ok = false;
    try {
      await navigator.clipboard.writeText(profile.email);
      ok = true;
    } catch {
      ok = false;
    }
    setHint(ok ? 'Copied ✓' : 'Copy failed');
    clearTimeout(timer.current);
    timer.current = setTimeout(() => setHint('Copy'), 1800);
  };

  return (
    <section id="contact" className="section">
      <Card className="contact">
        <div>
          <p className="eyebrow">Let's work together</p>
          <h2>Looking for a full-stack or AI engineer?</h2>
          <p className="muted">
            I'm open to remote, full-time roles and contract work. The fastest way to reach me is email.
          </p>
        </div>
        <div className="contact-actions">
          <button className="email-pill mono" type="button" onClick={copyEmail}>
            <span>{profile.email}</span>
            <span className="copy-hint" aria-live="polite">{hint}</span>
          </button>
          <div className="cta-row">
            <a className="btn btn-primary" href={`mailto:${profile.email}`}>Send an email</a>
          </div>
        </div>
      </Card>
    </section>
  );
}
