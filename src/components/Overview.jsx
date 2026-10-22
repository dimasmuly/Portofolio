import Card from './Card.jsx';
import Chips from './Chips.jsx';
import Icon from './Icon.jsx';
import useLocalTime from '../hooks/useLocalTime.js';
import { profile, stats, focusAreas, stack, award, education } from '../data/profile.js';

function Hero() {
  // Two words per line: "Dimas Mulya" / "Perkasa Ernanta"
  const words = profile.name.split(' ');
  const firstLine = words.slice(0, 2).join(' ');
  const secondLine = words.slice(2).join(' ');

  return (
    <Card className="hero">
      <p className="eyebrow">{profile.role}</p>
      <h1>
        {firstLine}
        <br />
        {secondLine}
      </h1>
      <p className="lead">{profile.intro}</p>
      <div className="cta-row">
        <a className="btn btn-primary" href={`mailto:${profile.email}`}>
          <Icon name="mail" /> Get in touch
        </a>
        <a className="btn" href={profile.cv} download={profile.cvFileName}>
          <Icon name="download" /> Download CV
        </a>
        <a className="icon-btn icon-btn-lg" href={profile.linkedin} target="_blank" rel="noopener" aria-label="LinkedIn">
          <Icon name="linkedin" />
        </a>
        <a className="icon-btn icon-btn-lg" href={profile.github} target="_blank" rel="noopener" aria-label="GitHub">
          <Icon name="github" />
        </a>
      </div>
    </Card>
  );
}

function Profile() {
  return (
    <Card className="profile">
      {profile.photo ? (
        <img src={profile.photo} alt={profile.name} className="avatar" />
      ) : (
        <span className="avatar avatar-initials" aria-hidden="true">{profile.initials}</span>
      )}
      <div>
        <p className="status"><span className="dot" aria-hidden="true" />{profile.status}</p>
        <p className="muted small">
          <Icon name="pin" className="inline-i" /> {profile.location}
        </p>
      </div>
    </Card>
  );
}

function Clock() {
  const time = useLocalTime(profile.timeZone);
  return (
    <Card className="clock">
      <p className="label">Local time</p>
      <p className="clock-time mono">{time}</p>
      <p className="muted small">{profile.timeZoneLabel}</p>
    </Card>
  );
}

function Stats() {
  return (
    <Card className="stats">
      {stats.map((s) => (
        <div className="stat" key={s.label}>
          <p className="stat-num">{s.value}</p>
          <p className="stat-label">{s.label}</p>
        </div>
      ))}
    </Card>
  );
}

function Focus() {
  return (
    <Card className="focus">
      <p className="label">What I do</p>
      <ul className="focus-list">
        {focusAreas.map((f) => (
          <li key={f.title}>
            <span className="focus-icon"><Icon name={f.icon} /></span>
            <div>
              <strong>{f.title}</strong>
              <span>{f.detail}</span>
            </div>
          </li>
        ))}
      </ul>
    </Card>
  );
}

function Stack() {
  return (
    <Card className="stack">
      <p className="label">Tech stack</p>
      <div className="stack-groups">
        {stack.map((g) => (
          <div key={g.group}>
            <h3>{g.group}</h3>
            <Chips items={g.items} />
          </div>
        ))}
      </div>
    </Card>
  );
}

function InfoTile({ className, icon, item }) {
  return (
    <Card className={className}>
      <span className="tile-icon"><Icon name={icon} /></span>
      <p className="label">{item.label}</p>
      <p className="tile-title">{item.title}</p>
      <p className="muted small">{item.detail}</p>
    </Card>
  );
}

export default function Overview() {
  return (
    <section id="top" className="bento bento-overview" aria-label="Overview">
      <Hero />
      <Profile />
      <Clock />
      <Stats />
      <Focus />
      <Stack />
      <InfoTile className="award" icon="trophy" item={award} />
      <InfoTile className="edu" icon="cap" item={education} />
    </section>
  );
}
