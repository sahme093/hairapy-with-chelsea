import salon from '../salon.config.js';

export default function Hero() {
  const { heroArch, heroSide } = salon.images;
  return (
    <section className="hero" id="top">
      <img src={heroArch.src} alt={heroArch.alt} className="hero-mobile-img mobile-only" />
      <div className="hero-copy">
        <div className="eyebrow">{salon.eyebrow}</div>
        <h1 className="hero-title">
          {salon.heroTitle.lead}<br className="desktop-only" /> <em>{salon.heroTitle.accent}</em>
        </h1>
        <p className="hero-lede">{salon.tagline}</p>
        <div className="hero-ctas desktop-only">
          <a href="#book" className="btn btn-brass btn-lg">Request an appointment</a>
          <a href={`tel:${salon.phone.e164}`} className="btn btn-ghost-light btn-lg">{salon.phone.display}</a>
        </div>
        <div className="hero-facts desktop-only">
          <div><div className="fact-label">Open</div>{salon.hoursSummary.open}</div>
          <div><div className="fact-label">Closed</div>{salon.hoursSummary.closed}</div>
          <div><div className="fact-label">Find us</div>{salon.address.short}</div>
        </div>
        <div className="hero-facts-mobile mobile-only">
          <span>{salon.hoursSummary.open}</span>
          <span>Closed {salon.hoursSummary.closed}</span>
        </div>
      </div>

      <div className="hero-media desktop-only">
        <img src={heroArch.src} alt={heroArch.alt} className="hero-arch" />
        <div className="hero-media-col">
          <img src={heroSide.src} alt={heroSide.alt} className="hero-side" />
          <blockquote className="hero-quote">{salon.heroQuote}</blockquote>
        </div>
      </div>
    </section>
  );
}
