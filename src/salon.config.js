// ─────────────────────────────────────────────────────────────────────────────
//  SALON SETTINGS
//  Everything specific to one salon lives in this file. Edit the values below,
//  replace the photos in public/img/, and the whole site updates.
//
//  After changing `name`, `logoLetter`, `seo` or `theme`, restart `npm run dev`
//  so the browser-tab title and icon pick up the change.
// ─────────────────────────────────────────────────────────────────────────────

const salon = {
  // Shown in the header, footer, browser tab and the text message.
  name: 'Salon Name',

  // Letter inside the arch logo (browser tab icon).
  logoLetter: 'S',

  // Big headline at the top. `accent` is shown in italics.
  heroTitle: { lead: 'Salon', accent: 'Name' },

  // Small gold line above the headline.
  eyebrow: 'Hair salon · Your City, ST',

  // One-sentence description under the headline.
  tagline: 'Welcoming hair salon offering professional haircuts and customized hair coloring.',

  // Short quote beside the hero photos (desktop only). Use a real review line.
  heroQuote: '“Short quote from a happy client goes here.”',

  phone: {
    display: '(555) 555-5555',
    // Same number in international format: + country code, then digits only.
    e164: '+15555555555',
  },

  address: {
    street: '123 Main Street',
    cityLine: 'Your City, ST 00000',
    // Shorter version used in the hero facts row.
    short: '123 Main St, Your City',
  },

  // Exactly 7 days, Monday first. Mark closed days with `closed: true`
  // (the booking form warns customers who pick one).
  hours: [
    { day: 'Monday', time: '9am – 5pm' },
    { day: 'Tuesday', time: '9am – 5pm' },
    { day: 'Wednesday', time: '9am – 5pm' },
    { day: 'Thursday', time: '9am – 5pm' },
    { day: 'Friday', time: '9am – 5pm' },
    { day: 'Saturday', time: '9am – 5pm' },
    { day: 'Sunday', time: 'Closed', closed: true },
  ],

  // One-line summaries used in the hero, footer and mobile "Visit" section.
  hoursSummary: {
    open: 'Mon–Sat 9am–5pm',
    closed: 'Sunday',
  },

  // Browser tab title and Google description.
  seo: {
    title: 'Salon Name · Hair Salon in Your City, ST',
    description:
      'Salon Name — welcoming hair salon in Your City, ST offering professional haircuts and customized hair coloring.',
  },

  // Brand colors. `primary` is the dark background; `accent` is buttons and highlights.
  theme: {
    primary: '#1f3328',
    accent: '#d9bd85',
    accentHover: '#e6cd99',
    accentDeep: '#8a6a35', // darker accent for small labels on light backgrounds
  },

  // Photos live in public/img/. Swap the files, or change the paths here.
  images: {
    heroArch: { src: '/img/hero.svg', alt: 'Hair styled at the salon' },
    heroSide: { src: '/img/hero-side.svg', alt: 'Hair styled at the salon' },
  },

  gallery: {
    note: 'Color, cuts and styling from our chairs.',
    items: [
      { src: '/img/gallery-1.svg', label: 'Look one' },
      { src: '/img/gallery-2.svg', label: 'Look two' },
      { src: '/img/gallery-3.svg', label: 'Look three' },
      { src: '/img/gallery-4.svg', label: 'Look four' },
      { src: '/img/gallery-5.svg', label: 'Look five' },
    ],
  },

  services: {
    note: "Not sure what to book? Text us a photo of what you have in mind and we'll point you to the right service.",
    groups: [
      {
        name: 'Cut & style',
        items: ['Haircut', 'Bang trim', 'Blowout', 'Hairstyling', 'Updos'],
      },
      {
        name: 'Color',
        items: ['Hair coloring', 'Balayage', 'Highlights', 'Gloss or glaze'],
      },
      {
        name: 'Treatments',
        items: ['Keratin treatment', 'Hydration treatment', 'Hair extensions'],
      },
    ],
  },

  reviews: {
    note: 'From recent Google reviews',
    // Paste real reviews (with permission). 3–6 works best.
    items: [
      { name: 'Client name', when: '1 month ago', text: 'Review text goes here. Paste a real review from Google or Yelp.' },
      { name: 'Client name', when: '2 months ago', text: 'Review text goes here. Longer reviews are fine — on phones they are trimmed to about eight lines.' },
      { name: 'Client name', when: '3 months ago', text: 'Review text goes here.' },
      { name: 'Client name', when: '4 months ago', text: 'Review text goes here.' },
    ],
  },

  booking: {
    notesPlaceholder: 'e.g. Virgin hair, want low-maintenance highlights, not too blonde',
  },
};

export default salon;

// ── Derived values (no need to edit) ─────────────────────────────────────────
export const mapsUrl =
  'https://maps.google.com/?q=' +
  encodeURIComponent(`${salon.address.street} ${salon.address.cityLine}`).replace(/%20/g, '+');

export const serviceOptions = ['Not sure yet', ...salon.services.groups.flatMap((g) => g.items)];

export const timesOfDay = ['Morning', 'Midday', 'Afternoon'];
