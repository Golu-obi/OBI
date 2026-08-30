import { useEffect, useState } from 'react';
import { newArrivals, company } from '../data.js';
import { goHome } from '../useRoute.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';

export default function ProductDetail({ code }) {
  const product = newArrivals.find((p) => p.code === code) || null;
  const [shot, setShot] = useState(0);

  // Open every product page from the top, and reset the gallery when the
  // visitor moves from one product to another.
  useEffect(() => {
    setShot(0);
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [code]);

  if (!product) {
    return (
      <section className="sec pdp">
        <a className="pdp-back" href="#new" onClick={backToRail}>‹ New arrivals</a>
        <h1 className="pdp-title">Product not found</h1>
        <p className="sec-body">We couldn&apos;t find code “{code}”. It may have been renamed or retired.</p>
        <a className="btn btn-primary" href="#new" onClick={backToRail}>Back to new arrivals</a>
      </section>
    );
  }

  const d = product.detail || {};
  const gallery = d.gallery && d.gallery.length ? d.gallery : product.img ? [product.img] : [];
  const hero = gallery[shot] || null;
  const summary = d.summary || `${product.name} — ${product.spec}. Full specification and pricing on request.`;

  const keySpec = product.spec.split('·').map((s) => s.trim()).filter(Boolean);

  return (
    <section className="sec pdp" id="product">
      <a className="pdp-back" href="#new" onClick={backToRail}>‹ New arrivals</a>

      <div className="pdp-top">
        <div className="pdp-gallery">
          <Frame className="pdp-hero">
            <Slot src={hero} plain label={product.name} alt={product.name} style={{ aspectRatio: '4 / 5' }} />
          </Frame>
          {gallery.length > 1 && (
            <div className="pdp-thumbs">
              {gallery.map((src, i) => (
                <button
                  key={src}
                  type="button"
                  className={'pdp-thumb' + (i === shot ? ' is-on' : '')}
                  aria-label={'View image ' + (i + 1)}
                  aria-current={i === shot}
                  onClick={() => setShot(i)}
                >
                  <img src={src} alt="" />
                </button>
              ))}
            </div>
          )}
        </div>

        <div className="pdp-info">
          {product.brand && <span className="tag tag-accent">{product.brand}</span>}
          <span className="code pdp-code">{product.code}</span>
          <h1 className="pdp-title">{product.name}</h1>
          <p className="pdp-summary">{summary}</p>

          <ul className="pdp-keyspec">
            {keySpec.map((s) => (<li key={s}>{s}</li>))}
          </ul>

          <div className="pdp-actions">
            <a className="btn btn-primary" href="#enquiry" onClick={(e) => { e.preventDefault(); goHome('enquiry'); }}>
              Request a quote
            </a>
            <a className="btn btn-secondary" href="#catalogues" onClick={(e) => { e.preventDefault(); goHome('catalogues'); }}>
              Download catalogue
            </a>
          </div>

          <dl className="pdp-meta">
            {product.brand && (<div><dt>Brand</dt><dd>{product.brand}</dd></div>)}
            {d.finishes && d.finishes.length > 0 && (<div><dt>Finishes</dt><dd>{d.finishes.join(' · ')}</dd></div>)}
            <div><dt>Lead time</dt><dd>Quoted per line, typically 3–5 weeks</dd></div>
            <div><dt>MOQ</dt><dd>On request — mixed-brand containers accepted</dd></div>
          </dl>
        </div>
      </div>

      <div className="pdp-body">
        <div className="pdp-desc">
          {d.overview && (<><h2>Description</h2><p>{d.overview}</p></>)}

          {d.features && d.features.length > 0 && (
            <>
              <h2>Features</h2>
              <ul className="pdp-list">
                {d.features.map((f) => (<li key={f}>{f}</li>))}
              </ul>
            </>
          )}

          {d.applications && d.applications.length > 0 && (
            <>
              <h2>Typical applications</h2>
              <ul className="pdp-list pdp-list-tight">
                {d.applications.map((a) => (<li key={a}>{a}</li>))}
              </ul>
            </>
          )}

          {!d.overview && (
            <>
              <h2>Description</h2>
              <p>
                Detailed copy for this line is being written for the 2026 catalogue. In the
                meantime our export desk can send the drawing, the current specification and a
                price against your quantity.
              </p>
              <p><a href="#enquiry" onClick={(e) => { e.preventDefault(); goHome('enquiry'); }}>Ask the export desk →</a></p>
            </>
          )}
        </div>

        <aside className="pdp-specs">
          <h2>Specifications</h2>
          {d.specs && d.specs.length > 0 ? (
            <table className="table pdp-spectable">
              <tbody>
                {d.specs.map(([k, v]) => (
                  <tr key={k}><th scope="row">{k}</th><td>{v}</td></tr>
                ))}
              </tbody>
            </table>
          ) : (
            <table className="table pdp-spectable">
              <tbody>
                <tr><th scope="row">Code</th><td>{product.code}</td></tr>
                <tr><th scope="row">Summary</th><td>{product.spec}</td></tr>
                <tr><th scope="row">Full sheet</th><td>On request</td></tr>
              </tbody>
            </table>
          )}

          {d.finishes && d.finishes.length > 0 && (
            <>
              <h2>Finishes</h2>
              <div className="pdp-chips">
                {d.finishes.map((f) => (<span className="tag tag-outline" key={f}>{f}</span>))}
              </div>
            </>
          )}

          <div className="pdp-help">
            <h2>Need a specification?</h2>
            <p>Drawings, test reports and finish samples ship with the quote.</p>
            <a href={'mailto:' + company.email}>{company.email}</a>
            {company.phones.map((p) => (
              <span key={p}><br /><a href={'tel:' + p.replace(/\s/g, '')}>{p}</a></span>
            ))}
          </div>
        </aside>
      </div>
    </section>
  );
}

function backToRail(e) {
  e.preventDefault();
  goHome('new');
}
