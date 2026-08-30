import { useState } from 'react';
import { company } from '../data.js';
import Frame from './Frame.jsx';

const EMPTY = { name: '', co: '', mail: '', port: '', codes: '' };

export default function Enquiry() {
  const [f, setF] = useState(EMPTY);
  const set = (k) => (e) => setF((prev) => ({ ...prev, [k]: e.target.value }));

  // No server: the form composes an email to company.email (dorlife2013@gmail.com)
  // and hands it to the visitor's mail client. To deliver server-side instead,
  // swap this handler for a POST to Formspree / Web3Forms / your own endpoint.
  const submit = (e) => {
    e.preventDefault();
    const subject = `Website enquiry — ${f.name}${f.co ? ` (${f.co})` : ''}`;
    const body = [
      `Name: ${f.name}`,
      `Company: ${f.co || '—'}`,
      `Email: ${f.mail}`,
      `Country / port: ${f.port || '—'}`,
      '',
      'Codes & quantities:',
      f.codes || '—',
      '',
      '— Sent from ombabaindustries.com',
    ].join('\n');
    window.location.href =
      `mailto:${company.email}?subject=${encodeURIComponent(subject)}&body=${encodeURIComponent(body)}`;
  };

  return (
    <section className="sec" id="enquiry">
      <Frame className="enq">
        <div className="enq-grid">
          <div>
            <span className="kick">06 · Enquiry</span>
            <h2 className="enq-title">Send us the codes. We'll send the quote.</h2>
            <p className="enq-body">Tell us the families you buy, the quantities and your port. You will get a price list in your currency and incoterm, with lead time per line.</p>
            <dl className="enq-contact">
              <div><dt>Export desk</dt><dd>{company.phones.map((p, i) => (
                <span key={p}>{i > 0 && <br />}<a href={'tel:' + p.replace(/\s/g, '')}>{p}</a></span>
              ))}</dd></div>
              <div><dt>Email</dt><dd><a href={'mailto:' + company.email}>{company.email}</a></dd></div>
              <div><dt>Works</dt><dd>{company.address}</dd></div>
            </dl>
          </div>
          <form className="enq-form" onSubmit={submit}>
            <div className="field"><label htmlFor="f-name">Name</label><input id="f-name" className="input" type="text" placeholder="Your name" value={f.name} onChange={set('name')} required /></div>
            <div className="field"><label htmlFor="f-co">Company</label><input id="f-co" className="input" type="text" placeholder="Company name" value={f.co} onChange={set('co')} /></div>
            <div className="field"><label htmlFor="f-mail">Email</label><input id="f-mail" className="input" type="email" placeholder="you@company.com" value={f.mail} onChange={set('mail')} required /></div>
            <div className="field"><label htmlFor="f-port">Country / port</label><input id="f-port" className="input" type="text" placeholder="e.g. Jebel Ali" value={f.port} onChange={set('port')} /></div>
            <div className="field span2"><label htmlFor="f-codes">Codes &amp; quantities</label><textarea id="f-codes" className="input" placeholder="DL-118-SS × 5,000 · TH-404-FO × 10,000" value={f.codes} onChange={set('codes')} /></div>
            <div className="span2 enq-submit">
              <button className="btn btn-primary" type="submit">Send enquiry</button>
              <span>Opens your email to {company.email} · replies within one working day.</span>
            </div>
          </form>
        </div>
      </Frame>
    </section>
  );
}
