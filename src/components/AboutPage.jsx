import { about, stats, company } from '../data.js';
import { goHome } from '../useRoute.js';
import PageHead from './PageHead.jsx';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';

export default function AboutPage() {
  return (
    <section className="sec doc">
      <PageHead
        kicker="Company"
        title="Hardware you can specify once"
        lead={about.lead}
      />

      <div className="doc-statband">
        {stats.map((s) => (
          <div className="doc-stat" key={s.label}>
            <span className="doc-stat-value">{s.value}</span>
            <span className="doc-stat-label">{s.label}</span>
          </div>
        ))}
      </div>

      <div className="doc-body">
        <div className="doc-main">
          <h2>Our story</h2>
          <div className="prose">
            {about.story.map((p, i) => (<p key={i}>{p}</p>))}
          </div>

          <h2>How we are set up</h2>
          <div className="doc-cards">
            {about.pillars.map((p) => (
              <Frame className="doc-card" key={p.title}>
                <div className="doc-card-title">{p.title}</div>
                <p>{p.body}</p>
              </Frame>
            ))}
          </div>

          <h2>Milestones</h2>
          <ol className="doc-timeline">
            {about.timeline.map((t) => (
              <li key={t.year}>
                <span className="doc-timeline-year">{t.year}</span>
                <span className="doc-timeline-text">{t.text}</span>
              </li>
            ))}
          </ol>
        </div>

        <aside className="doc-aside">
          <Frame className="doc-figure">
            <Slot src="/img/manufacturing-plant.jpg" plain alt="OBI plant, Bhiwadi" label="Plant photograph" style={{ aspectRatio: '3 / 2' }} />
          </Frame>
          <div className="doc-panel">
            <h3>The brands</h3>
            <p><strong>Dorlife</strong> — finish-matched handles, lock bodies, cylinders and hinges for main and internal doors.</p>
            <p><strong>Theeta</strong> — hydraulic hinges, channels, pull-outs and sliding systems for modular kitchen and wardrobe makers.</p>
          </div>
          <div className="doc-panel">
            <h3>Works</h3>
            <p>{company.address}, {company.country}</p>
            <p>
              <a href={'mailto:' + company.email}>{company.email}</a>
              {company.phones.map((p) => (
                <span key={p}><br /><a href={'tel:' + p.replace(/\s/g, '')}>{p}</a></span>
              ))}
            </p>
          </div>
        </aside>
      </div>

      <div className="doc-cta">
        <div>
          <h2>Come and see the floor</h2>
          <p>Buyers are welcome at Bhiwadi — presses, plating and the packing hall in one walk.</p>
        </div>
        <div className="doc-cta-actions">
          <a className="btn btn-primary" href="#enquiry" onClick={(e) => { e.preventDefault(); goHome('enquiry'); }}>Book a factory visit</a>
          <a className="btn btn-secondary" href="#export" >How we export →</a>
        </div>
      </div>
    </section>
  );
}
