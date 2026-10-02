# Product Hunt launch review — 2 October 2026

Reviewed locally and approved for GitHub commit and production deployment by the site owner.

## Campaign changes

- Updated hero, closing CTA, page/social metadata and structured data around “You saved it for a reason.” and “personalised audio recap”.
- Kept the section order, cream/navy/gold palette, typography, App Store links and personal founder quote.
- Replaced the existing example list with Articles / Videos / Notes / Photos flowing through Recaply into an illustrative audio recap.
- Reused the four how-it-works cards for reviewing saves, connecting themes, personalising and creating an audio recap.
- Retained weekly delivery and the chosen delivery day as supporting information in Why Audio. Schedule labels embedded in the real app UI remain intact.
- Reversed the footer logo to white for contrast on the navy background.
- Preserved the original screenshot files. A responsive HTML title overlay replaces the two generic demo titles with “Ideas for a better week.”
- Added a campaign social image at `/og-launch.png` with editable SVG source; retained the old unused image.
- Preserved all pre-existing CSS edits and the untracked `.cursor-hero-phones-clip.png`. Added a narrow-screen logo constraint to avoid the existing navigation wrapping over the hero at 320px.

## Tracking and storage audit

Scope: application source/config/dependencies, live page script/image elements, public deployed JavaScript referenced by the page, and response headers for the homepage and external Apple badge. No analytics or consent UI was added or changed.

| Item | Finding |
| --- | --- |
| Google Analytics / GTM / Meta Pixel | No integration found in source or observed live scripts. |
| Vercel Analytics / Speed Insights or other visitor analytics | No integration found in source or observed live scripts. |
| Application cookies | No cookie-setting code found. The tested live homepage response had no `Set-Cookie` header. |
| Application localStorage / sessionStorage | No usage found in source or inspected deployed page scripts. |
| Vercel toolbar | The deployed Turbopack chunk includes a hosting-injected cookie read: if `__vercel_toolbar=1` already exists, load `https://vercel.live/_next-live/feedback/feedback.js` with explicit opt-in. The initial loader does not set the cookie. The toolbar was not loaded in the inspected ordinary page session. |
| External Apple badge | Three App Store badges use the same `tools.applemediaservices.com` image URL. This is an external asset request, exposing ordinary request metadata to Apple. The tested badge response had no `Set-Cookie` header. No tracking query parameters were added to the App Store destination. |
| Fonts / app imagery | Self-hosted assets; Geist is bundled through `next/font`. |
| JSON-LD script | Static product metadata, not tracking. |
| Cookie banner | None in the application; no changes made. |

Limits: these findings describe the inspected public page and code, not hosting access logs, previously stored browser cookies, an opted-in Vercel toolbar session, or the separate recaply.app / App Store destinations after a visitor clicks away. Browser storage contents were not directly exposed by the browser inspection API; no claims are made about historical storage in a returning visitor's profile.

## Validation

- Production build and TypeScript passed.
- ESLint passed with two existing `no-img-element` warnings (App Store badge and logo).
- Desktop and mobile browser review, including navigation anchors, app imagery and the saved-content flow.
- Local preview serves the production static export at http://127.0.0.1:3333/ while the preview server is running.

## Privacy notice addition — local follow-up

Added a non-blocking privacy information panel and a “Privacy & cookies” footer control. No analytics, advertising tags or consent-dependent scripts were added. This is an informational notice for the currently audited setup, not an accept/reject consent manager.

On “Dismiss for this visit”, the panel writes `recaply:privacy-notice:v1 = dismissed` to sessionStorage. Its sole purpose is remembering dismissal in the current tab's browser session; it has no identifier and is not transmitted. Reopening through the footer removes that key. If storage is blocked, dismissal still works in memory until a reload. No localStorage or new cookies are used. The panel discloses the Apple badge request, Vercel hosting, collaborator-only toolbar behaviour and the separate app privacy policy.

Basis reviewed: the ICO's current storage/access guidance, particularly session preferences not linked to persistent identifiers:
https://ico.org.uk/for-organisations/direct-marketing-and-privacy-and-electronic-communications/guidance-on-the-use-of-storage-and-access-technologies/what-are-the-exceptions/

This implementation does not certify the entire site's legal compliance. Re-audit and add genuine prior consent controls before introducing advertising or other consent-requiring tracking; dismissing this notice grants no such consent.

## Superseding analytics integration

The draft informational notice above has been replaced locally with explicit accept/reject analytics controls for Google Tag Manager. See [analytics-setup.md](analytics-setup.md) for the current storage, consent, event and publishing requirements. The original live-site audit remains a historical record; it does not describe the new pending integration.
