import { megaMenu } from '../data.js';
import Frame from './Frame.jsx';
import Slot from './Slot.jsx';

export default function CategoryBar() {
  return (
    <div className="catbar">
      {megaMenu.map((cat) => (
        <div className="cat" key={cat.label}>
          <button type="button" className="catlabel" aria-expanded="false">{cat.label}</button>
          <div className="mega">
            <div className="mega-grid">
              {cat.columns.map((col) => (
                <div key={col.title}>
                  <h6>{col.title}</h6>
                  <div className="mega-links">
                    {col.items.map((it) => (<a className="ul" href="#catalogues" key={it}>{it}</a>))}
                  </div>
                </div>
              ))}
              {cat.traded ? (
                <div className="mega-note">
                  <span className="tag tag-neutral">{cat.promo.title}</span>
                  <p>{cat.promo.body}</p>
                  <a className="btn btn-ghost" href="#catalogues">See the window range →</a>
                </div>
              ) : (
                <Frame className="mega-promo">
                  <Slot src={cat.promo.img} label={cat.label + ' menu image'} style={{ height: 150 }} />
                  <div className="mega-promo-body">
                    <div className="mega-promo-title">{cat.promo.title}</div>
                    <p>{cat.promo.body}</p>
                  </div>
                </Frame>
              )}
            </div>
          </div>
        </div>
      ))}
      <div className="catbar-right">
        <a className="catbar-new" href="#new">New arrivals ✦</a>
        <span className="vr" />
        <a className="catbar-alt" href="#catalogues">All catalogues</a>
      </div>
    </div>
  );
}
