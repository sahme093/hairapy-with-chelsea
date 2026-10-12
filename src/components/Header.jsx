import salon from '../salon.config.js';

export default function Header() {
  return (
    <header className="site-header">
      <a href="#top" className="brand">{salon.name}</a>
      <nav className="site-nav desktop-only" aria-label="Main">
        <a href="#services">Services</a>
        <a href="#work">Our work</a>
        <a href="#reviews">Reviews</a>
        <a href="#visit">Visit</a>
        <a href="#book" className="btn btn-brass btn-sm">Request by text</a>
      </nav>
      <a href={`tel:${salon.phone.e164}`} className="header-call mobile-only">Call</a>
    </header>
  );
}
