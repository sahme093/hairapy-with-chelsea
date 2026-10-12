import salon from '../salon.config.js';

export default function MobileBar({ smsHref }) {
  return (
    <div className="mobile-bar mobile-only">
      <a href={smsHref} className="btn btn-brass mobile-bar-send">Send request by text</a>
      <a href={`tel:${salon.phone.e164}`} className="mobile-bar-call" aria-label="Call the salon">Call</a>
    </div>
  );
}
