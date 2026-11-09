# Derek Holland’s portfolio

A Next.js App Router portfolio with project pages, a résumé, and a contact form.

## Local development

Run `npm ci`, then `npm run dev` and open http://localhost:3000.

Run `npm run lint`, `npm run type`, and `npm run build` to check changes. The production build downloads Geist fonts from Google Fonts.

## Contact form

Set `RESEND_API_KEY` in `.env.local` for local delivery and in your hosting provider’s environment for production. The sender domain for `contact@derekholland.com` must be verified in Resend. Without a key, the site still builds and the form directs visitors to email directly.

Set a rate limit for `POST /api/send-email` at the hosting edge or reverse proxy. A starting policy is five requests per client IP per ten minutes. Apply it using the host’s trusted client IP, and return HTTP 429 on excess requests.