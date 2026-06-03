# Deployment & launch checklist

## Environment variables
Set these in your host (Vercel/Netlify/etc.) **and** in `.env.local` for local dev.

| Variable | Required | Purpose |
|----------|----------|---------|
| `RESEND_API_KEY` | Yes (for the contact form) | Resend API key that sends enquiry emails from `/api/contact`. |
| `CONTACT_TO_EMAIL` | Recommended | Inbox that receives enquiries. Falls back to `site.email` in `lib/site.ts`. |
| `CONTACT_FROM_EMAIL` | Recommended | Verified Resend sender, e.g. `Wild Mountain Immigration <hello@wildmountainimmigration.com>`. Until the domain is verified, only `onboarding@resend.dev` works and it delivers only to your Resend account email. |
| `NEXT_PUBLIC_TURNSTILE_SITE_KEY` | Recommended | Cloudflare Turnstile **site** key (public). Renders the anti-spam widget on the contact form. |
| `TURNSTILE_SECRET_KEY` | Recommended | Cloudflare Turnstile **secret** key (server). Verifies the challenge in `/api/contact`. Set both Turnstile keys together, or neither. Allow `localhost` + `wildmountainimmigration.com` in the widget's hostnames. |
| `NEXT_PUBLIC_GA_ID` | Optional | Google Analytics 4 Measurement ID (`G-XXXXXXXXXX`). Enables analytics + the `/thank-you` `generate_lead` conversion. Blank = analytics off. |

> `.env.local` is gitignored. On the host, add the same vars in the project settings (not committed).

## Before you flip it live
1. **Resend**: create an API key, verify the sending domain, set the three `CONTACT_*` / `RESEND_*` vars.
2. **Destination inbox**: `site.email` in `lib/site.ts` is still `hello@wildmountainimmigration.com` and marked `[TO FINALIZE]`. Confirm the real address (or override with `CONTACT_TO_EMAIL`).
3. **Analytics**: paste `NEXT_PUBLIC_GA_ID` if you want tracking. In GA4, mark `generate_lead` as a key event/conversion.
4. **Smoke test the form**: submit a real enquiry, confirm (a) the email arrives, (b) you land on `/thank-you`, (c) GA shows a `generate_lead` event.
5. **Domain**: point DNS, set the production URL. `site.url` in `lib/site.ts` is `https://wildmountainimmigration.com` (used by canonical URLs, sitemap, OG, schema).

## Commands
```bash
npm install
npm run dev     # local dev (http://localhost:3000, or next free port)
npm run build   # production build
npm run start   # serve the production build
```

## Good to know
- `/thank-you` is `noindex` and excluded from `app/sitemap.ts` on purpose.
- The social share image is generated at build from `app/opengraph-image.tsx` (no asset to maintain).
- The contact form has a honeypot field and server-side validation; bots get a silent 200.
- `app/robots.ts` and `app/sitemap.ts` are generated automatically from the route tree.
