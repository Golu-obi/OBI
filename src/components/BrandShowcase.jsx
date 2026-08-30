import { brandBanners, finishBanner } from '../data.js';
import SectionHead from './SectionHead.jsx';

export default function BrandShowcase() {
  return (
    <section className="sec" id="brands">
      <SectionHead
        number="02" kicker="Our brands" title="Two brands, one floor"
        body="Everything here is pressed, finished and packed in the same works at Bhiwadi — specify across both lines and the satin still matches."
      />
      <hr className="hr" />
      <div className="brand-grid">
        {brandBanners.map((b) => (
          <a className="brand-tile lift" key={b.brand} href={b.href} aria-label={`${b.brand} — ${b.line}`}>
            <img src={b.img} alt={`${b.brand} — ${b.line}`} loading="lazy" />
          </a>
        ))}
      </div>
      <a className="brand-banner lift" href={finishBanner.href} aria-label={finishBanner.alt}>
        <img src={finishBanner.img} alt={finishBanner.alt} loading="lazy" />
      </a>
    </section>
  );
}
