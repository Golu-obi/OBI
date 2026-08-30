import { exportInfo, quality, markets, company } from '../data.js';
import { goHome } from '../useRoute.js';
import PageHead from './PageHead.jsx';
import Frame from './Frame.jsx';

export default function ExportPage() {
  return (
    <section className="sec doc">
      <PageHead
        kicker="Export"
        title="Built to leave the country"
        lead={exportInfo.lead}
      />

      <h2>Where we ship</h2>
      <div className="cellgrid cellgrid-6">
        {markets.map((m) => (<div className="cell cell-tight" key={m}>{m}</div>))}
      </div>

      <h2 className="doc-h2-spaced">From enquiry to dispatch</h2>
      <ol className="doc-steps">
        {exportInfo.process.map((p) => (
          <li key={p.step}>
            <span className="doc-step-num">{p.step}</span>
            <div>
              <div className="doc-step-title">{p.title}</div>
              <p>{p.body}</p>
            </div>
          </li>
        ))}
      </ol>

      <h2 className="doc-h2-spaced">In every shipment</h2>
      <div className="cellgrid cellgrid-4">
        {quality.map((q) => (
          <div className="cell" key={q.kicker}>
            <div className="cell-kicker">{q.kicker}</div>
            <div className="cell-title">{q.title}</div>
            <p>{q.body}</p>
          </div>
        ))}
      </div>

      <div className="doc-body doc-body-even">
        <div>
          <h2>Terms &amp; ports</h2>
          <dl className="doc-dl">
            <div><dt>Incoterms</dt><dd>{exportInfo.incoterms.join(' · ')}</dd></div>
            <div><dt>Load ports</dt><dd>{exportInfo.ports.join(' · ')}</dd></div>
            <div><dt>Payment</dt><dd>30% advance, balance against documents (negotiable by volume)</dd></div>
            <div><dt>Documents</dt><dd>Commercial invoice, packing list, HS codes, certificate of origin, test reports</dd></div>
          </dl>
        </div>
        <Frame className="doc-panel doc-panel-lg">
          <h3>Private label</h3>
          <p>{exportInfo.privateLabel}</p>
          <a className="btn btn-secondary" href="#blog/private-label-checklist">What we need to start →</a>
        </Frame>
      </div>

      <div className="doc-cta">
        <div>
          <h2>Send us your list</h2>
          <p>Codes, quantities and your port. You get a price list in your currency and incoterm, with lead time per line — usually within a working day.</p>
        </div>
        <div className="doc-cta-actions">
          <a className="btn btn-primary" href="#enquiry" onClick={(e) => { e.preventDefault(); goHome('enquiry'); }}>Request a price list</a>
          <a href={'mailto:' + company.email} className="btn btn-secondary">{company.email}</a>
        </div>
      </div>
    </section>
  );
}
