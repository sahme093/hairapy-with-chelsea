import { useRef } from 'react';
import salon from '../salon.config.js';

const GAP = 20;

export default function Reviews() {
  const trackRef = useRef(null);

  // Scroll by one card width (three cards visible on desktop).
  const scroll = (dir) => {
    const el = trackRef.current;
    if (el) el.scrollBy({ left: (dir * (el.clientWidth + GAP)) / 3, behavior: 'smooth' });
  };

  return (
    <section className="section reviews-section" id="reviews">
      <div className="section-head">
        <h2 className="section-title">Kind <em>words</em></h2>
        <div className="reviews-controls desktop-only">
          <span className="section-note">{salon.reviews.note}</span>
          <button type="button" className="round-btn" aria-label="Previous reviews" onClick={() => scroll(-1)}>←</button>
          <button type="button" className="round-btn" aria-label="Next reviews" onClick={() => scroll(1)}>→</button>
        </div>
      </div>
      <div className="reviews-track" ref={trackRef}>
        {salon.reviews.items.map((r, i) => (
          <article key={i} className="review">
            <div className="stars" aria-label="5 out of 5 stars">★★★★★</div>
            <p className="review-text">{r.text}</p>
            <div className="review-meta">
              <span className="review-name">{r.name}</span>
              <span>{r.when}</span>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
