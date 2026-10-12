# Salon Website Template

A one-page hair salon website (React + Vite) with a text-to-book form: customers fill in
their name, service, date and time, and tapping **Send request by text** opens their
messages app with the request written out to the salon.

Everything that changes per salon lives in **one file**: [`src/salon.config.js`](src/salon.config.js).

## Set up a new salon

1. On GitHub, click **Use this template → Create a new repository** and name it after the salon.
2. Clone it and install:
   ```
   git clone https://github.com/<you>/<new-repo>.git
   cd <new-repo>
   npm install
   ```
3. Edit **`src/salon.config.js`**: name, logo letter, headline, phone, address, hours,
   services, reviews, colors and page title. Every field has a comment explaining it.
4. Add the salon's photos to **`public/img/`** and update the paths in the config
   (`images` and `gallery.items`). Delete the placeholder `.svg` files you replaced.
   Portrait photos work best (roughly 3:4 or taller).
5. Preview with `npm run dev`. Restart it after changing `name`, `logoLetter`, `seo` or
   `theme` so the browser tab title, icon and colors refresh.
6. Commit and push.

## Deploy on Cloudflare Pages

**Workers & Pages → Create → Pages → Connect to Git**, pick the repo, then:

| Setting          | Value           |
| ---------------- | --------------- |
| Framework preset | Vite            |
| Build command    | `npm run build` |
| Output directory | `dist`          |

Every push to `main` redeploys automatically. Use the main `<project>.pages.dev` address.
Links with a code in front (`abc123.<project>.pages.dev`) point at one old deployment
and never update.

## Going live (let Google find it)

New sites are hidden from search engines by default so drafts stay private. When the
salon is ready to launch:

- delete the `<meta name="robots" …>` line in `index.html`
- delete `public/_headers`

## Checklist before handing off

- [ ] Phone number tapped on a phone opens a call / the text message to the right number
- [ ] Closed days marked with `closed: true` in `hours`
- [ ] Real reviews (with the client's permission) and real photos
- [ ] Browser-tab title and description updated in `seo`
- [ ] Search-engine block removed (see above) when launching
