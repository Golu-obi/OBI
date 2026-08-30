import { capabilities } from '../data.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';

export default function Manufacturing() {
  return (
    <section className="mfg-band" id="manufacturing">
      <div className="mfg-band-grid">
        <div>
          <span className="kick kick-dark">02 · Manufacturing</span>
          <h2 className="mfg-band-title">Pressed, plated and packed under one roof.</h2>
          <p className="mfg-band-body">Blanking and forming, polishing, plating and assembly all sit on the same floor in Bhiwadi. That is why a satin hinge matches a satin handle from a different lot — and why a private-label run can start at 5,000 pieces without a new supplier in the chain.</p>
          <p className="mfg-band-body"><a className="link-ondark" href="#company">About OM Baba Industries →</a></p>
          <div className="cap-grid">
            {capabilities.map((c) => (
              <div className="cap" key={c.title}>
                <div className="cap-title">{c.title}</div>
                <p>{c.body}</p>
              </div>
            ))}
          </div>
          <a className="btn btn-invert" href="#enquiry">Book a factory visit</a>
        </div>
        <Frame className="mfg-band-figure">
          <Slot
            src="/img/manufacturing-plant.jpg"
            plain
            alt="OBI hinge plant, Bhiwadi — coil to carton in ten steps"
            label="Plant / press shop photograph"
            style={{ aspectRatio: '3 / 2' }}
          />
        </Frame>
      </div>
    </section>
  );
}
