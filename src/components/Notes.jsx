import { posts } from '../data.js';
import { goToPost } from '../useRoute.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';
import SectionHead from './SectionHead.jsx';

export default function Notes() {
  return (
    <section className="sec" id="notes">
      <SectionHead number="06" kicker="Notes" title="From the bench"
        action={<a className="btn btn-secondary" href="#blog">All notes →</a>} />
      <hr className="hr" />
      <div className="grid-3">
        {posts.slice(0, 3).map((n) => (
          <Frame
            as="a"
            href={'#blog/' + encodeURIComponent(n.slug)}
            className="note lift note-link"
            key={n.slug}
            onClick={(e) => { e.preventDefault(); goToPost(n.slug); }}
          >
            <Slot src={n.img} label={'Note image — ' + n.tag} alt="" style={{ height: 180 }} />
            <div className="note-body">
              <div className="note-tag">{n.tag}</div>
              <div className="note-title">{n.title}</div>
              <p>{n.excerpt}</p>
              <span className="prod-more">Read →</span>
            </div>
          </Frame>
        ))}
      </div>
    </section>
  );
}
