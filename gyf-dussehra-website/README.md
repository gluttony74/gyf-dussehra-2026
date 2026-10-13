# Gita Youth Forum · Dussehra 2026 event website

A static, responsive event website for the 19–20 October 2026 Dussehra celebration. Built with plain HTML, CSS and JavaScript; no framework, backend, analytics, API keys or paid assets required. The updated visual direction is saffron-first with layered marigold gold, warm ivory and deep terracotta for a premium devotional feel.

## What is included

- Mobile-first event landing page with the supplied GYF logo **copied without editing**.
- Optimized WebP version of the supplied event poster.
- English, Marathi and Hindi language switcher.
- Direct Google Forms registration link.
- Confirmed Google Maps directions link.
- WhatsApp contact link for +91 76662 73737.
- Responsive programme cards for the two days, with no invented start times.
- Saffron sunrise hero, fine mandala/ray detailing, gold interaction accents and warm devotional colour grading.
- Lightweight native interactions: scroll progress, section reveals, button shine, floating poster and a subtle desktop poster tilt. These are implemented with CSS and JavaScript rather than importing animation libraries.
- Accessibility basics, reduced-motion support, page metadata and no third-party JavaScript dependencies. Google Fonts are used for typography with system fallbacks if unavailable.

## Files

- `index.html` — page structure and content
- `styles.css` — all visual styles and responsive layouts
- `script.js` — language switcher and subtle scroll reveal
- `assets/gyf-logo.png` — supplied logo; original file bytes preserved
- `assets/dussehra-poster.webp` — optimized event poster for fast loading

## Design implementation

The visual interaction direction takes inspiration from modern component-library patterns such as animated backgrounds, text treatments, scroll reveals and hover/micro-interactions seen in [AnimMaster Lib](https://animmasterlib.dev/), [Skiper UI](https://skiper-ui.com/), [Vengeance UI](https://www.vengenceui.com/) and [React Bits](https://reactbits.dev/). The site uses original, lightweight native CSS/JS implementations instead of importing React-only/premium components. That keeps deployment static, avoids extra JavaScript payloads, and preserves the zero-cost target.

## Preview locally

1. Extract the ZIP (if using the ZIP package).
2. Open `index.html` in Chrome, Safari or Firefox.
3. Test the three language buttons, the registration button, Maps directions and WhatsApp link.

The site does not need a build step or a local server for the core experience.

## Recommended website name

- Display/tab name: **GYF Dussehra 2026 · Gita Youth Forum**.
- GitHub repository name: `gyf-dussehra-2026`.
- Public URL pattern: `https://YOUR-GITHUB-USERNAME.github.io/gyf-dussehra-2026/`.

The final URL depends on your GitHub username. You do not need to buy a domain for this address.

## Free deployment with GitHub Pages

GitHub Pages supports static HTML/CSS/JS sites. On GitHub Free, use a **public repository** for Pages hosting; files in the repository and the live site are public.

1. Sign in to GitHub or create a free account at https://github.com/.
2. Create a new **public** repository named `gyf-dussehra-2026`.
3. Upload the contents of this folder to the repository root. Ensure `index.html` is at the root, not inside another nested folder.
4. Open repository **Settings → Pages**.
5. Under the build/deployment settings, select **Deploy from a branch**, choose `main` and `/(root)`, then save.
6. Wait for the Pages deployment to complete. The URL will look like `https://YOUR-USERNAME.github.io/gyf-dussehra-2026/`.
7. Test the live site on a phone and laptop. GitHub notes that a new deployment may take several minutes to publish.

Official setup guide: https://docs.github.com/en/pages/getting-started-with-github-pages/creating-a-github-pages-site

## Before sharing publicly — launch checklist

- [ ] Open the Google Form and confirm it is accepting responses and has the right questions.
- [ ] Open the supplied Maps link on a phone and verify it points to Ramchandra Hall.
- [ ] Confirm the published WhatsApp number is approved for public display.
- [ ] Have the organizer review names, event activities, venue and translations.
- [ ] Confirm timings with the organizer before adding them; no times have been invented here.
- [ ] Test every call to action on the deployed site.
- [ ] Share the deployed URL with a student using mobile data, not only on your own Wi-Fi.

## Factual notes

Event dates, activities and the venue wording are based on the supplied poster. Free entry, the Google Form, Maps link and WhatsApp number were supplied by the organizer of this site. The website intentionally does not display unconfirmed event timings.
