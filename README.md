# Postyst Social

Social media scheduling and management: compose once and publish to X, LinkedIn,
Facebook, Instagram, Threads, Reddit, Mastodon, YouTube, TikTok, Bluesky,
Pinterest, Discord, Slack, Telegram and more, with a calendar, an AI assistant,
analytics and team workspaces.

## Architecture

| Component | Detail |
|---|---|
| `apps/frontend` | Next.js app |
| `apps/backend` | NestJS API |
| `apps/workers` | Queue processors that perform the actual posting |
| `apps/cron` | Scheduled jobs |
| `apps/extension` | Browser extension |
| `libraries/` | Shared NestJS and React code, Prisma schema |
| Data | PostgreSQL (Prisma), Redis (BullMQ), local or R2/S3 storage |

## Local setup

```sh
cp .env.example .env
pnpm install
pnpm run dev
```

See [OPERATIONS.md](./OPERATIONS.md) for environment variables, ports and
deployment requirements.

## Branding

| Surface | Where |
|---|---|
| Accent colour | `apps/frontend/src/app/colors.scss` (`--new-btn-primary`, both theme blocks) |
| Wordmark component | `apps/frontend/src/components/ui/logo-text.component.tsx` |
| Sidebar mark | `apps/frontend/src/components/new-layout/logo.tsx` |
| Public SVGs and favicon | `apps/frontend/public/` |
| Extension icons | `apps/extension/public/` |
| Product name | swept across 92 files |

The upstream accent `#612BD3` was replaced with the brand indigo in 71 places
across 24 files. The rest of the palette is Blueprint.js's default greys and
blues — a third-party component library's colours, not brand identity.

### Removed: fabricated social proof

The **sign-in screen** carried two claims that cannot survive a rebrand:

- *"Over 20,000+ Entrepreneurs use … To Grow Their Social Presence"* — an
  upstream user count.
- A testimonial carousel of **named real individuals with photographs**
  (`Vincent L.`, `Dilini R.` and others), praising the upstream product by name.

Both were removed, along with `testimonial.component.tsx`, `testimonial.tsx`,
`helpers/testomonials.tsx` and the `public/auth/avatars/` photographs. The
sign-in screen now shows the form and the brand mark.

Also removed: `chatgpt-app-submission.json`, upstream's app-store submission
manifest, which carried its listing metadata and support contacts.

### Deliberately left unchanged

- **The `@gitroom/*` path aliases.** Gitroom is the project's former name and
  the alias is used by 502 files, defined in `tsconfig.base.json`. It is a
  module-resolution identifier, never shown to a user. The sweep is
  case-sensitive so the lowercase scope was untouched — verified afterwards.
- **`GitroomHQ`** where it appears as an organisation identifier.
- **`LICENSE`** (AGPL-3.0), verbatim.

## Provenance and licence

AGPL-3.0. **Read the network-use obligation in [UPSTREAM.md](./UPSTREAM.md)
before deploying this as a service.**
