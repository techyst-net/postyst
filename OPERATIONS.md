# Postyst Social — Operations

> Shared infrastructure (Postgres, Redis, S3, SMTP, LLM …) is wired in
> already — see [../INFRA.md](../INFRA.md). This app runs at http://localhost:4200, http://localhost:3060.

## Generated configuration

A ready-to-run configuration has been generated in this directory:

- `.env`

Signing and encryption secrets in it are **real random values**, generated
per-file. Anything only you can supply — API keys, OAuth credentials — is
marked `CHANGE_ME`. Search for it:

```sh
grep -rn CHANGE_ME .
```

These files are gitignored and must not be committed.

## Processes and ports

| Component | Port |
|---|---|
| Frontend (Next.js) | `4200` |
| Backend (NestJS) | `3000` |
| Workers | — |
| Cron | — |
| PostgreSQL | `5432` |
| Redis | `6379` |

## Required

| Variable | Purpose |
|---|---|
| `DATABASE_URL` | PostgreSQL connection (Prisma) |
| `REDIS_URL` | BullMQ queues — **posting is queue-driven, so this is not optional** |
| `JWT_SECRET` | Signs authentication tokens. Use a long random value; changing it logs everyone out. |
| `FRONTEND_URL` | Absolute public origin of the app |
| `NEXT_PUBLIC_BACKEND_URL` | Backend origin as reachable **from the browser** |
| `BACKEND_INTERNAL_URL` | Backend origin as reachable **from other containers** |

The two backend URLs differ in a containerised deployment — the browser needs a
public hostname, the frontend server needs the internal service name. Setting
both to the same value is the usual cause of a working page that cannot log in.

## Storage

| Variable | Purpose |
|---|---|
| `STORAGE_PROVIDER` | `local` or `cloudflare` |
| `UPLOAD_DIRECTORY`, `NEXT_PUBLIC_UPLOAD_DIRECTORY` | Local upload paths |
| `CLOUDFLARE_ACCOUNT_ID`, `CLOUDFLARE_ACCESS_KEY`, `CLOUDFLARE_SECRET_ACCESS_KEY`, `CLOUDFLARE_BUCKETNAME`, `CLOUDFLARE_BUCKET_URL`, `CLOUDFLARE_REGION` | R2 storage |

With `local`, uploaded media lives on disk and **needs a persistent volume** —
scheduled posts reference those files at publish time, so losing the volume
breaks queued posts, not just history.

## Social provider credentials

Each network is independent and stays hidden in the UI until its credentials are
present. Every one needs a redirect/callback URL registered with the provider,
pointing at your `FRONTEND_URL`.

`X_API_KEY` / `X_API_SECRET` / `X_URL`, `LINKEDIN_CLIENT_ID` / `_SECRET`,
`FACEBOOK_APP_ID` / `_SECRET`, `THREADS_APP_ID` / `_SECRET`,
`REDDIT_CLIENT_ID` / `_SECRET`, `YOUTUBE_CLIENT_ID` / `_SECRET`,
`TIKTOK_CLIENT_ID` / `_SECRET`, `PINTEREST_CLIENT_ID` / `_SECRET`,
`DISCORD_CLIENT_ID` / `_SECRET`, `SLACK_ID` / `_SECRET`,
`MASTODON_CLIENT_ID` / `_SECRET`, `TELEGRAM_BOT_NAME` / `_TOKEN`,
`BLUESKY_*`, `NOSTR_*`, `WARPCAST_*`, `INSTAGRAM_APP_ID` / `_SECRET`.

Newsletter and email integrations: `BEEHIIVE_API_KEY`,
`BEEHIIVE_PUBLICATION_ID`, `LISTMONK_DOMAIN`, `LISTMONK_USER`,
`LISTMONK_API_KEY`, `LISTMONK_LIST_ID`.

Sign-in with Apple: `APPLE_BUNDLE_ID`, `APPLE_SERVICE_ID`, `APPLE_TEAM_ID`,
`APPLE_KEY_ID`, `APPLE_PRIVATE_KEY`. GitHub sign-in: `GITHUB_CLIENT_ID` /
`_SECRET`.

## AI and optional services

`OPENAI_API_KEY` (AI assistant and image generation), `RESEND_API_KEY` or SMTP
settings for transactional email, `STRIPE_*` for billing (not needed
self-hosted), `NEXT_PUBLIC_DISCORD_SUPPORT` (support link — point at your own
or leave unset).

## Deployment requirements

- **PostgreSQL and Redis** both required. Run `prisma migrate deploy` before
  serving a new release.
- **The workers and cron processes must run separately.** Without them posts are
  accepted into the calendar and **never published** — the UI shows no error.
- Persistent volume for local uploads, or configure R2/S3.
- Set `FRONTEND_URL`, `NEXT_PUBLIC_BACKEND_URL` and `BACKEND_INTERNAL_URL` to
  correct, *distinct* values, and register the callback URLs with each social
  provider.
- Note the AGPL network-use obligation in `UPSTREAM.md`.
