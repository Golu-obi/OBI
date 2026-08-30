import { quality, markets } from '../data.js';

export default function QualityExport() {
  return (
    <section className="sec" id="quality">
      <div className="sec-head">
        <div>
          <span className="kick">04 · Quality &amp; export</span>
          <h2 className="sec-title">Documented, not promised</h2>
        </div>
        <a className="btn btn-secondary" href="#export">How we export →</a>
      </div>
      <hr className="hr" />
      <div className="cellgrid cellgrid-4">
        {quality.map((q) => (
          <div className="cell" key={q.kicker}>
            <div className="cell-kicker">{q.kicker}</div>
            <div className="cell-title">{q.title}</div>
            <p>{q.body}</p>
          </div>
        ))}
      </div>
      <div className="markets">
        <div className="markets-label">Shipping to</div>
        <div className="cellgrid cellgrid-6">
          {markets.map((m) => (<div className="cell cell-tight" key={m}>{m}</div>))}
        </div>
      </div>
    </section>
  );
}
