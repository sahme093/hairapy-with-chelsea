import salon from '../salon.config.js';

export default function Footer() {
  return (
    <footer className="site-footer">
      <div className="brand">{salon.name}</div>
      <div className="footer-info">
        <span>{salon.address.street}, {salon.address.cityLine}</span>
        <a href={`tel:${salon.phone.e164}`}>{salon.phone.display}</a>
        <span>{salon.hoursSummary.open}</span>
      </div>
    </footer>
  );
}
