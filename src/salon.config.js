// ─────────────────────────────────────────────────────────────────────────────
//  SALON SETTINGS
//  Everything specific to one salon lives in this file. Edit the values below,
//  replace the photos in public/img/, and the whole site updates.
//
//  After changing `name`, `seo` or `theme`, restart `npm run dev`
//  so the browser-tab title and icon pick up the change.
// ─────────────────────────────────────────────────────────────────────────────

const salon = {
  // Shown in the header, footer, browser tab and the text message.
  name: 'Hairapy with Chelsea',

  // Big headline at the top. `accent` is shown in italics.
  heroTitle: { lead: 'Hair therapy,', accent: 'by Chelsea' },

  // Small line above the headline.
  eyebrow: 'Private hair studio · Menifee, CA',

  // One-sentence description under the headline.
  tagline:
    'A calm, one-on-one studio for color, cuts and styling. Sit back, unwind, and leave feeling like yourself again.',

  // Short quote beside the hero photos (desktop only). Use a real review line.
  heroQuote: '“Chelsea is the best! I won’t go anywhere else!”',

  phone: {
    display: '(951) 390-8896',
    // Same number in international format: + country code, then digits only.
    e164: '+19513908896',
  },

  address: {
    street: '29787 Antelope Rd, Ste 100, Studio 34',
    cityLine: 'Menifee, CA 92584',
    // Shorter version used in the hero facts row.
    short: '29787 Antelope Rd, Studio 34',
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
    title: 'Hairapy with Chelsea · Hair Studio in Menifee, CA',
    description:
      'Hairapy with Chelsea — a private, one-on-one hair studio in Menifee, CA for color, haircuts and styling.',
  },

  // Brand colors. `primary` is the dark background; `accent` is buttons and highlights.
  theme: {
    primary: '#3b2140', // deep plum
    accent: '#eba47f', // warm copper
    accentHover: '#f3b897',
    accentDeep: '#a34f2c', // darker accent for small labels on light backgrounds
  },

  // Photos live in public/img/. Swap the files, or change the paths here.
  images: {
    heroArch: { src: '/img/copper-curls.jpg', alt: 'Bright copper color with soft curls' },
    heroSide: { src: '/img/purple-balayage.jpg', alt: 'Purple balayage with loose waves' },
  },

  gallery: {
    note: 'Color, cuts and styling from Chelsea’s chair.',
    items: [
      { src: '/img/copper-curls.jpg', label: 'Copper color & curls' },
      { src: '/img/purple-balayage.jpg', label: 'Purple balayage' },
      { src: '/img/bob-cut.jpg', label: 'Stacked bob' },
      { src: '/img/blonde-color.jpg', label: 'Soft blonde' },
      { src: '/img/dark-layers.jpg', label: 'Long layers' },
    ],
  },

  services: {
    note: "Not sure what to book? Text Chelsea a photo of what you have in mind and she'll point you to the right service.",
    // Leave `name` empty to show a single list without a heading.
    groups: [
      {
        name: '',
        items: ['Color only', 'Cut and color', 'Haircut', 'Hair styling'],
      },
    ],
  },

  reviews: {
    note: 'From Google reviews',
    // Paste real reviews (with permission). 3–6 works best.
    items: [
      {
        name: 'Tonya B.',
        when: 'Google review',
        text: "Chelsea is the best! Very sweet and professional and very knowledgeable. I won't go anywhere else!",
      },
    ],
  },

  booking: {
    notesPlaceholder: 'e.g. Want to go copper, hair is shoulder length and colored brown',
  },
};

export default salon;

// ── Derived values (no need to edit) ─────────────────────────────────────────
export const mapsUrl =
  'https://maps.google.com/?q=' +
  encodeURIComponent(`${salon.address.street} ${salon.address.cityLine}`).replace(/%20/g, '+');

export const serviceOptions = ['Not sure yet', ...salon.services.groups.flatMap((g) => g.items)];

export const timesOfDay = ['Morning', 'Midday', 'Afternoon'];
