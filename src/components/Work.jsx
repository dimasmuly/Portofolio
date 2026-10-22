import Card from './Card.jsx';
import Chips from './Chips.jsx';
import CctvVisual from './visuals/CctvVisual.jsx';
import BarsVisual from './visuals/BarsVisual.jsx';
import EcgVisual from './visuals/EcgVisual.jsx';
import LogVisual from './visuals/LogVisual.jsx';
import OutfitVisual from './visuals/OutfitVisual.jsx';
import RagVisual from './visuals/RagVisual.jsx';
import { projects } from '../data/profile.js';

// `side` visuals sit next to the text; the rest sit above it
const visuals = {
  cctv: { Component: CctvVisual },
  bars: { Component: BarsVisual, side: true },
  ecg: { Component: EcgVisual },
  log: { Component: LogVisual },
  segment: { Component: OutfitVisual, side: true },
  chat: { Component: RagVisual },
};

function Project({ project }) {
  const { Component, side } = visuals[project.visual] ?? {};
  const body = (
    <div className="project-body">
      <p className="label">{project.label}</p>
      <h3>{project.title}</h3>
      <p className={project.compact ? 'muted small' : 'muted'}>{project.description}</p>
      <Chips items={project.tags} small />
    </div>
  );

  return (
    <Card className={`project p-${project.area}`}>
      {Component && !side && <Component />}
      {body}
      {Component && side && <Component />}
    </Card>
  );
}

export default function Work() {
  return (
    <section id="work" className="section">
      <div className="section-head">
        <h2>Selected work</h2>
        <p className="muted">Systems I designed and shipped to production.</p>
      </div>
      <div className="bento bento-work">
        {projects.map((p) => (
          <Project key={p.area} project={p} />
        ))}
      </div>
    </section>
  );
}
