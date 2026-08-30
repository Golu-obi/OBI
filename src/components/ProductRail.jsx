import { useRef } from 'react';
import { newArrivals } from '../data.js';
import { goToProduct } from '../useRoute.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';
import SectionHead from './SectionHead.jsx';

export default function ProductRail() {
  const rail = useRef(null);
  const scroll = (dir) => rail.current && rail.current.scrollBy({ left: dir * 588, behavior: 'smooth' });

  return (
    <section className="sec" id="new">
      <SectionHead
        number="01" kicker="New arrivals" title="Latest into the book"
        body="Lines added to the 2026 printing. Every code below ships from stock at Bhiwadi — open a line for the full specification."
        action={(
          <div className="rail-nav">
            <button type="button" className="btn btn-secondary btn-icon" onClick={() => scroll(-1)} aria-label="Scroll left">‹</button>
            <button type="button" className="btn btn-secondary btn-icon" onClick={() => scroll(1)} aria-label="Scroll right">›</button>
          </div>
        )}
      />
      <hr className="hr" />
      <div className="rail" ref={rail}>
        {newArrivals.map((p) => (
          <Frame
            as="a"
            href={'#product/' + encodeURIComponent(p.code)}
            className="prod lift prod-link"
            key={p.code}
            onClick={(e) => { e.preventDefault(); goToProduct(p.code); }}
          >
            <Slot src={p.img} label={p.name} alt={p.name} style={{ height: 200 }} />
            <div className="prod-body">
              <span className="code">{p.code}</span>
              <div className="prod-name">{p.name}</div>
              <div className="prod-spec">{p.spec}</div>
              <span className="prod-more">View details →</span>
            </div>
          </Frame>
        ))}
      </div>
    </section>
  );
}
