import { company, footerColumns } from '../data.js';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-grid">
        <div>
          <div className="brand">
            <span className="brand-mark">{company.short}</span>
            <span className="brand-name">{company.name}</span>
          </div>
          <p className="footer-about">Manufacturer and exporter of premium door, kitchen and furniture hardware. Brands: {company.brands.join(' and ')}.</p>
          <div className="footer-tags">
            {company.brands.map((b) => (<span className="tag tag-outline" key={b}>{b}</span>))}
          </div>
        </div>
        {footerColumns.map((col) => (
          <div key={col.title}>
            <h6>{col.title}</h6>
            <div className="footer-links">
              {col.links.map(([label, href]) => (<a className="ul" href={href} key={label}>{label}</a>))}
            </div>
          </div>
        ))}
        <div>
          <h6>Reach us</h6>
          <div className="footer-links">
            {company.phones.map((p) => (
              <a key={p} href={'tel:' + p.replace(/\s/g, '')}>{p}</a>
            ))}
            <a href={'mailto:' + company.email}>{company.email}</a>
            <span className="footer-addr">{company.address}, {company.country}</span>
          </div>
        </div>
      </div>
      <hr className="hr" />
      <div className="footer-legal">
        <span>© 2026 {company.name}. All rights reserved.</span>
        <span>Dorlife® and Theeta® are registered trademarks of {company.name}.</span>
      </div>
    </footer>
  );
}
