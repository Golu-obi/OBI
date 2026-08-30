import { catalogues } from '../data.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';
import SectionHead from './SectionHead.jsx';

export default function Catalogues() {
  return (
    <section className="sec" id="catalogues">
      <SectionHead
        number="03" kicker="Catalogues" title="Latest product catalogues"
        action={<a className="btn btn-secondary" href="#">All catalogues →</a>}
      />
      <hr className="hr" />
      <div className="grid-4">
        {catalogues.map((c) => (
          <Frame className="cata lift" key={c.title}>
            <Slot src={c.img} label={c.title + ' cover'} alt={c.title} className="cata-cover" />
            <div className="cata-body">
              <div className="cata-title">{c.title}</div>
              <div className="cata-meta">{c.meta}</div>
              <a className="btn btn-ghost" href={c.href}>Download →</a>
            </div>
          </Frame>
        ))}
        <Frame className="cata-cta">
          <h4>Need the price list?</h4>
          <p>Prices are quoted per order and per incoterm. Tell us the codes and quantities and the export desk replies within a working day.</p>
          <a className="btn btn-primary" href="#enquiry">Request price list</a>
        </Frame>
      </div>
    </section>
  );
}
