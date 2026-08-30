import { useEffect, useRef, useState } from 'react';
import { heroSlides } from '../data.js';
import Slot from './Slot.jsx';

export default function Hero() {
  const [i, setI] = useState(0);
  const timer = useRef(null);
  const n = heroSlides.length;

  useEffect(() => {
    timer.current = setInterval(() => setI((v) => (v + 1) % n), 7000);
    return () => clearInterval(timer.current);
  }, [n]);

  const go = (v) => { clearInterval(timer.current); setI(((v % n) + n) % n); };

  return (
    <section className="hero" id="top" aria-label="Featured">
      <div className="hero-track" style={{ width: n * 100 + '%', transform: 'translateX(' + (-i * (100 / n)) + '%)' }}>
        {heroSlides.map((s, idx) => (
          <div className="slide" key={idx} style={{ width: 100 / n + '%' }} aria-hidden={idx !== i}>
            <Slot className="slide-bg" src={s.img} label={'Hero ' + (idx + 1) + ' — landscape photograph'} alt="" />
            <div className="slide-scrim" />
            <div className="slide-copy">
              <span className="slide-kicker">{s.kicker}</span>
              <h1>{s.title}</h1>
              <p>{s.body}</p>
              <div className="slide-actions">
                {s.actions.map((a) => (
                  <a key={a.label} href={a.href} className={'btn ' + (a.primary ? 'btn-primary' : 'btn-ondark')}>{a.label}</a>
                ))}
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="hero-dots">
        {heroSlides.map((s, idx) => (
          <button type="button" key={idx} onClick={() => go(idx)}
            className={'dot' + (idx === i ? ' dot-on' : '')}
            aria-label={'Slide ' + (idx + 1)} aria-current={idx === i} />
        ))}
      </div>
      <div className="hero-nav">
        <button type="button" className="btn btn-icon btn-ondark" onClick={() => go(i - 1)} aria-label="Previous slide">‹</button>
        <button type="button" className="btn btn-icon btn-ondark" onClick={() => go(i + 1)} aria-label="Next slide">›</button>
      </div>
    </section>
  );
}
