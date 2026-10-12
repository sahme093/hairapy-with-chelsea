import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import salon from './src/salon.config.js';
import { LOCK_PATHS } from './src/logoPaths.js';

const esc = (s) =>
  String(s).replace(/&/g, '&amp;').replace(/</g, '&lt;').replace(/>/g, '&gt;').replace(/"/g, '&quot;');

// Hair-lock logo (same strands as src/components/Logo.jsx) used as the browser-tab icon.
const faviconSvg = () => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 64 64">
  <rect width="64" height="64" rx="16" fill="${salon.theme.primary}"/>
  <g fill="none" stroke="${salon.theme.accent}" stroke-width="3.6" stroke-linecap="round">
    ${LOCK_PATHS.map((d) => `<path d="${d}"/>`).join('')}
  </g>
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
