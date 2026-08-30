import { goHome } from '../useRoute.js';

// Shared header for routed content pages: a back link, kicker, title and lead.
export default function PageHead({ kicker, title, lead, back = { label: 'Home', id: '' } }) {
  return (
    <header className="doc-head">
      <a
        className="doc-back"
        href={'#' + (back.id || 'top')}
        onClick={(e) => { e.preventDefault(); goHome(back.id); }}
      >
        ‹ {back.label}
      </a>
      {kicker && <span className="kick">{kicker}</span>}
      <h1 className="doc-title">{title}</h1>
      {lead && <p className="doc-lead">{lead}</p>}
    </header>
  );
}
