import salon from '../salon.config.js';

export default function Services() {
  return (
    <section className="section services-section" id="services">
      <div className="services">
        <div className="services-intro">
          <h2 className="section-title">Services</h2>
          <p className="desktop-only">{salon.services.note}</p>
        </div>
        <div className="service-groups">
          {salon.services.groups.map((grp) => (
            <div key={grp.name} className="service-group">
              <div className="label service-group-name">{grp.name}</div>
              <ul className="service-list">
                {grp.items.map((s) => (
                  <li key={s}>{s}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
