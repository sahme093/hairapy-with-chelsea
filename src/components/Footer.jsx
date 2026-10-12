import salon from '../salon.config.js';
import Logo from './Logo.jsx';

export default function Footer() {
  return (
    <footer className="site-footer">
      <Logo />
      <div className="footer-info">
        <span>{salon.address.street}, {salon.address.cityLine}</span>
        <a href={`tel:${salon.phone.e164}`}>{salon.phone.display}</a>
        <span>{salon.hoursSummary.open}</span>
      </div>
    </footer>
  );
}
