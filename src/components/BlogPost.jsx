import { posts, company } from '../data.js';
import { goToPost, goHome } from '../useRoute.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';

const fmtDate = (iso) =>
  new Date(iso + 'T00:00:00').toLocaleDateString('en-GB', { day: 'numeric', month: 'long', year: 'numeric' });

export default function BlogPost({ slug }) {
  const post = posts.find((p) => p.slug === slug);
  const more = posts.filter((p) => p.slug !== slug).slice(0, 3);

  if (!post) {
    return (
      <section className="sec doc">
        <a className="doc-back" href="#blog" onClick={(e) => { e.preventDefault(); window.location.hash = 'blog'; }}>‹ From the bench</a>
        <h1 className="doc-title">Note not found</h1>
        <p className="doc-lead">That article may have been moved or renamed.</p>
        <a className="btn btn-primary" href="#blog" onClick={(e) => { e.preventDefault(); window.location.hash = 'blog'; }}>All notes</a>
      </section>
    );
  }

  return (
    <section className="sec doc doc-narrow">
      <a className="doc-back" href="#blog" onClick={(e) => { e.preventDefault(); window.location.hash = 'blog'; }}>‹ From the bench</a>

      <article>
        <div className="post-meta">
          <span className="note-tag">{post.tag}</span>
          <span>{fmtDate(post.date)} · {post.read}</span>
        </div>
        <h1 className="doc-title post-title">{post.title}</h1>

        {post.img && (
          <Frame className="post-figure">
            <Slot src={post.img} plain alt="" style={{ aspectRatio: '16 / 9' }} />
          </Frame>
        )}

        <div className="prose post-prose">
          {post.body.map((p, i) => (<p key={i}>{p}</p>))}
        </div>
      </article>

      <div className="post-cta">
        <p>Have a specification question, or a list to price?</p>
        <div className="doc-cta-actions">
          <a className="btn btn-primary" href="#enquiry" onClick={(e) => { e.preventDefault(); goHome('enquiry'); }}>Ask the export desk</a>
          <a className="btn btn-secondary" href={'mailto:' + company.email}>{company.email}</a>
        </div>
      </div>

      <div className="post-more">
        <h2>More from the bench</h2>
        <div className="grid-3">
          {more.map((n) => (
            <Frame
              as="a"
              href={'#blog/' + encodeURIComponent(n.slug)}
              className="note lift note-link"
              key={n.slug}
              onClick={(e) => { e.preventDefault(); goToPost(n.slug); }}
            >
              <Slot src={n.img} label={'Note image — ' + n.tag} alt="" style={{ height: 150 }} />
              <div className="note-body">
                <div className="note-tag">{n.tag}</div>
                <div className="note-title">{n.title}</div>
                <p>{n.excerpt}</p>
              </div>
            </Frame>
          ))}
        </div>
      </div>
    </section>
  );
}
