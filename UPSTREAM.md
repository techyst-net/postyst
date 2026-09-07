# Upstream source

| Field | Value |
|---|---|
| Upstream project | Postiz (formerly Gitroom) |
| Source | https://github.com/gitroomhq/postiz-app |
| Licence | GNU AGPL v3 |
| Retained notices | `LICENSE` |

## Licence obligations — read before deploying

AGPLv3 **section 13** requires that anyone interacting with a modified version
over a network is offered its Corresponding Source. Running this rebranded
version as a service obliges you to publish these sources, including the
branding changes, and link to them from the application.

## Pulling upstream fixes

```sh
git remote add upstream https://github.com/gitroomhq/postiz-app.git
git fetch upstream --depth=50
```

Expect conflicts in `apps/frontend/src/app/colors.scss`, the two logo
components, `apps/frontend/public/`, and `apps/frontend/src/app/(app)/auth/layout.tsx`.

Upstream will try to reintroduce the testimonial components, the avatar
photographs and the user-count claim on the sign-in screen. Remove them again —
they name real people who have not endorsed this product.

Do not rename the `@gitroom/*` path aliases while resolving conflicts; 502 files
resolve through them.
