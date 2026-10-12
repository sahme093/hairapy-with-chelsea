import salon from '../salon.config.js';

export default function Gallery() {
  return (
    <section className="section gallery-section" id="work">
      <div className="section-head">
        <h2 className="section-title">Recent <em>work</em></h2>
        <p className="section-note desktop-only">{salon.gallery.note}</p>
      </div>
      <div className="gallery">
        {salon.gallery.items.map((g, i) => (
          <figure key={i} className="gallery-item">
            <img src={g.src} alt={g.label} loading="lazy" />
            <figcaption>{g.label}</figcaption>
          </figure>
        ))}
      </div>
    </section>
  );
}
