import { testimonials } from '../data.js';

export default function Testimonials() {
  return (
    <section className="sec">
      <div className="grid-3">
        {testimonials.map((t) => (
          <figure className="quote" key={t.by}>
            <blockquote>“{t.quote}”</blockquote>
            <figcaption>— {t.by}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
