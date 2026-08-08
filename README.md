# Bhavik Maheta — Portfolio

A premium, production-ready portfolio for **Bhavik Maheta**, Full-Stack Software Engineer. Built with Next.js 15, React 19, TypeScript, Tailwind CSS v4, Motion (Framer Motion), and shadcn/ui-style components.

![Next.js](https://img.shields.io/badge/Next.js-15-black) ![React](https://img.shields.io/badge/React-19-blue) ![TypeScript](https://img.shields.io/badge/TypeScript-strict-3178c6) ![Tailwind](https://img.shields.io/badge/Tailwind-4-38bdf8)

## Features

- **Design system** — dark & light mode, glassmorphism, aurora backgrounds, grid patterns, cursor glow, magnetic buttons, tilt cards, marquees, scroll reveals, animated counters and typing effect.
- **Sections** — Hero, About, Skills (animated progress), animated Experience timeline, filterable Featured Projects, Achievements, animated Tech Stack marquee, Testimonials, Blog (MDX), Contact (validated form + server action), Currently Learning, GitHub/visitor placeholders.
- **App Router** — React Server Components by default, Server Actions for the contact form, static generation for blog posts.
- **SEO** — dynamic metadata, Open Graph image, sitemap, robots.txt, RSS feed, JSON-LD structured data, manifest, custom 404.
- **UX extras** — ⌘K command palette, reading progress bar, scroll-to-top, page loading animation, theme switcher, fully responsive navigation.
- **Accessibility** — WCAG AA-minded contrast, focus-visible rings, semantic landmarks, `aria` attributes, reduced-motion support.

## Getting started

```bash
# install dependencies
npm install

# run the dev server
npm run dev

# lint
npm run lint

# production build
npm run build

# start production server
npm start
```

Open [http://localhost:3000](http://localhost:3000).

## Project structure

```
├── app/                     # App Router routes + SEO metadata files
│   ├── actions/             # Server actions (contact form)
│   ├── blog/[slug]/         # MDX blog post page
│   ├── now/                 # "Now" page
│   ├── uses/                # "Uses" page
│   ├── rss/route.ts         # RSS feed
│   ├── sitemap.ts
│   ├── robots.ts
│   ├── icon.tsx             # Generated favicon
│   └── opengraph-image.tsx  # Generated OG image
├── components/
│   ├── ui/                  # shadcn-style primitives (button, card, dialog…)
│   ├── layout/              # header, footer, providers, palette, progress…
│   ├── sections/            # one component per home section
│   ├── effects/             # aurora, reveal, counter, marquee, tilt, magnetic…
│   └── shared/              # section headings, socials, page headers
├── content/posts/           # MDX blog posts
├── data/                    # all site content (profile, skills, projects…)
├── hooks/                   # useMounted, useMediaQuery
├── lib/                     # utils, fonts, seo, posts, animations
└── public/resume/           # downloadable resume PDF
```

## Customizing content

All copy lives in `data/` as typed, strongly-typed files:

| File | Purpose |
| --- | --- |
| `data/profile.ts` | Name, tagline, about, education, languages, interests |
| `data/skills.ts` | Skill categories + proficiency levels |
| `data/experience.ts` | Timeline roles, highlights, technologies |
| `data/projects.ts` | Featured projects (filtering categories) |
| `data/achievements.ts` | Certifications, awards, open source… |
| `data/tech-stack.ts` | Marquee + grouped tech icons |
| `data/testimonials.ts` | Placeholder recommendations |
| `data/now.ts` | Now page + "Currently learning" |
| `data/uses.ts` | Uses page |
| `data/site.ts` | Site URL, nav, social links, resume path |

Items containing the word **placeholder** are intentionally templated — swap them with your real details.

## Making it yours

1. Replace the resume at `public/resume/bhavik-maheta-resume.pdf`.
2. Set `NEXT_PUBLIC_SITE_URL` (and `next.config.ts` `images` if you add remote images) for production.
3. Connect the contact form: set `RESEND_API_KEY` and `NEXT_PUBLIC_CONTACT_TO`, then uncomment the Resend block in `app/actions/send-message.ts` (add `resend` to dependencies).
4. Replace testimonials, achievements and GitHub placeholders with real data.
5. Add your own MDX posts in `content/posts/` — frontmatter: `title`, `description`, `date`, `tags`, `readingTime`.
6. Add analytics by mounting your provider in `components/layout/providers.tsx`.

## Deploying to Vercel

```bash
npm i -g vercel
vercel
```

Set the `NEXT_PUBLIC_SITE_URL` environment variable in the Vercel dashboard, then deploy. The app is statically generated where possible and renders the rest on the edge.

## License

Personal project. Copy freely for your own portfolio — credit appreciated.
