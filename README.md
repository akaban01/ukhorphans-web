# Ummul Khairi House of Orphans — Website

Redesigned site for ukhorphans.org, built with [Astro](https://astro.build), [Tailwind CSS v4](https://tailwindcss.com), and [Decap CMS](https://decapcms.org).

## Project Structure

```text
/
├── public/
│   └── admin/            # Decap CMS (index.html + config.yml)
├── src/
│   ├── components/       # Header, Footer, PageHero, Icon, SectionHeading
│   ├── content/           # CMS-editable content (markdown/YAML)
│   │   ├── blog/
│   │   ├── missions/
│   │   ├── team/
│   │   └── settings/general.yml
│   ├── content.config.ts # Content collection schemas
│   ├── layouts/Layout.astro
│   └── pages/            # Home, About Us, Missions, Blog, Contact, Donate
└── package.json
```

## Commands

| Command           | Action                                              |
| :----------------- | :-------------------------------------------------- |
| `npm install`      | Install dependencies                                 |
| `npm run dev`       | Start local dev server at `localhost:4321`            |
| `npm run build`     | Build production site to `./dist/`                    |
| `npm run preview`   | Preview the production build locally                  |
| `npm run cms`       | Start the local Decap CMS proxy (for local editing)    |

## Editing content locally

1. Run `npm run dev` in one terminal and `npm run cms` in another.
2. Visit `http://localhost:4321/admin/index.html` and click **Login** — the local backend requires no credentials.
3. Edits are written directly to the markdown/YAML files in `src/content/`.

(Astro's dev server currently serves `/admin/index.html` directly; `/admin/` without the filename 404s in `dev` mode only. On any static host — Netlify, etc. — directory-index serving means `/admin/` works normally.)

## Deploying with a real CMS backend

`public/admin/config.yml` is set up for the **git-gateway** backend, the standard zero-extra-infrastructure option for Decap CMS:

1. Deploy the site to Netlify (connect this repo, build command `npm run build`, publish directory `dist`).
2. In Netlify: **Site settings → Identity** → enable Identity, then invite yourself as a user.
3. Under **Identity → Services**, enable **Git Gateway**.
4. Remove or set `local_backend: false` in `public/admin/config.yml` before going live.
5. Visit `https://your-site/admin/`, log in with your Netlify Identity account, and start editing.

If you'd rather use a different backend (GitHub OAuth, GitLab, Bitbucket), update the `backend:` block in `public/admin/config.yml` accordingly — see the [Decap CMS backends docs](https://decapcms.org/docs/backends-overview/).

## Notes / follow-ups

- The **Donate** page's "Continue to Donate" button currently opens an email to the org — no payment processor (Stripe/PayPal/etc.) is wired up yet.
- The **Contact** form is marked up for Netlify Forms (`data-netlify="true"`); if hosting elsewhere, swap in your own form handler.
- Team/blog/mission images are optional CMS fields (uploaded to `public/uploads`); until populated, pages fall back to icon placeholders.
