import { company, topNav } from '../data.js';

export default function Header() {
  return (
    <header className="header">
      <a className="brand" href="#top">
        <span className="brand-mark">{company.short}</span>
        <span className="brand-text">
          <span className="brand-name">{company.name}</span>
          <span className="brand-sub">{company.tagline}</span>
        </span>
      </a>
      <form className="search" role="search" onSubmit={(e) => e.preventDefault()}>
        <input className="input" type="search" placeholder="Search by product code — e.g. DL-100" aria-label="Search the catalogue" />
        <button className="btn btn-secondary" type="submit">Search</button>
      </form>
      <nav className="topnav">
        {topNav.map((n) => (<a key={n.label} href={n.href}>{n.label}</a>))}
        <a className="btn btn-primary" href="#enquiry">Enquire now</a>
      </nav>
    </header>
  );
}
