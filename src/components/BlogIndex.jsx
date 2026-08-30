import { posts } from '../data.js';
import { goToPost } from '../useRoute.js';
import PageHead from './PageHead.jsx';
import Slot from './Slot.jsx';

const fmtDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'short', year: 'numeric' });

export default function BlogIndex() {
  return (
    <section className="sec doc">
      <PageHead
        kicker="Blog"
        title="From the bench"
        lead="Short notes on specifying, finishing and shipping hardware — written by the people who press and pack it."
      />

      <div className="blog-list">
        {posts.map((p) => (
          <a
            href={'#blog/' + encodeURIComponent(p.slug)}
            className="blog-row"
            key={p.slug}
            onClick={(e) => { e.preventDefault(); goToPost(p.slug); }}
          >
            <Slot src={p.img} plain label={p.tag} alt="" style={{ aspectRatio: '4 / 3' }} />
            <div className="blog-row-body">
              <div className="blog-row-meta">
                <span className="note-tag">{p.tag}</span>
                <span>{fmtDate(p.date)} · {p.read}</span>
              </div>
              <h2 className="blog-row-title">{p.title}</h2>
              <p>{p.excerpt}</p>
              <span className="prod-more">Read →</span>
            </div>
          </a>
        ))}
      </div>
    </section>
  );
}
