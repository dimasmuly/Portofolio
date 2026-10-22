import Card from './Card.jsx';
import Chips from './Chips.jsx';
import { jobs } from '../data/profile.js';

// Turns "**text**" segments into <strong>
function RichText({ text }) {
  return text.split(/(\*\*[^*]+\*\*)/g).map((part, i) =>
    part.startsWith('**') ? <strong key={i}>{part.slice(2, -2)}</strong> : part
  );
}

function Job({ job }) {
  return (
    <Card className="job">
      <header className="job-head">
        {job.logo ? (
          <span className="logo logo-img">
            <img src={job.logo} alt={`${job.company} logo`} loading="lazy" />
          </span>
        ) : (
          <span className="logo" aria-hidden="true">{job.initials}</span>
        )}
        <div className="job-title">
          <h3>{job.title}</h3>
          <p>{job.company} · {job.location}</p>
        </div>
        {job.current ? (
          <span className="badge badge-accent">Current</span>
        ) : (
          <span className="badge">{job.mode}</span>
        )}
      </header>
      <p className="job-meta mono">
        {job.period}{job.current && ` · ${job.mode}`}
      </p>
      <ul className="bullets">
        {job.bullets.map((b) => (
          <li key={b}><RichText text={b} /></li>
        ))}
      </ul>
      <Chips items={job.tags} small />
    </Card>
  );
}

export default function Experience() {
  return (
    <section id="experience" className="section">
      <div className="section-head">
        <h2>Experience</h2>
        <p className="muted">Production work across four teams, mostly remote.</p>
      </div>
      <div className="bento bento-2">
        {jobs.map((job) => (
          <Job key={job.company} job={job} />
        ))}
      </div>
    </section>
  );
}
