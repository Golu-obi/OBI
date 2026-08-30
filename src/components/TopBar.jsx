import { company } from '../data.js';

export default function TopBar() {
  return (
    <div className="topbar">
      <span>{company.address} · {company.country}</span>
      <span className="topbar-right">
        {company.phones.map((p) => (
          <a key={p} href={'tel:' + p.replace(/\s/g, '')}>{p}</a>
        ))}
        <a href={'mailto:' + company.email}>{company.email}</a>
        <a className="topbar-cta" href="#dealer">Become a distributor</a>
      </span>
    </div>
  );
}
