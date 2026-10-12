import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import salon from './src/salon.config.js';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Arch logo used as the browser-tab icon, colored from salon.theme.
const faviconSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="14" fill="${salon.theme.primary}"/>
  <path d="M16 54V30a16 16 0 0 1 32 0v24" fill="none" stroke="${salon.theme.accent}" stroke-width="4"/>
  <text x="32" y="49" text-anchor="middle" font-family="'Bodoni Moda','Didot','Bodoni 72',Georgia,serif" font-style="italic" font-size="32" fill="#f6f2ea">${esc(salon.logoLetter)}</text>
</svg>
`;

// Fills index.html placeholders and the favicon from src/salon.config.js.
function salonPlugin() {
  return {
    name: 'salon-config',
    transformIndexHtml(html) {
      const t = salon.theme;
      const themeCss =
        `:root{--green:${t.primary};--brass:${t.accent};` +
        `--brass-hover:${t.accentHover};--brass-deep:${t.accentDeep}}`;
      return html
        .replaceAll('%SALON_TITLE%', esc(salon.seo.title))
        .replaceAll('%SALON_DESCRIPTION%', esc(salon.seo.description))
        .replaceAll('%SALON_PRIMARY%', esc(t.primary))
        .replace('</head>', `    <style>${themeCss}</style>\n  </head>`);
    },
    configureServer(server) {
      server.middlewares.use('/favicon.svg', (req, res) => {
        res.setHeader('Content-Type', 'image/svg+xml');
        res.end(faviconSvg());
      });
    },
    generateBundle() {
      this.emitFile({ type: 'asset', fileName: 'favicon.svg', source: faviconSvg() });
    },
  };
}

export default defineConfig({
  plugins: [react(), salonPlugin()],
});
