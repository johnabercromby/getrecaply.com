# Google Analytics via Tag Manager

## Current status

The website integrates GTM-T7WPCF3S behind explicit analytics consent. Published container version 2 was inspected on 2 October 2026: Google tag G-RJ9Y50P8L1 fires on Initialization, and its GA4 app_store_click event tag fires on the matching custom event. No other tags are configured. Button-location parameters are not yet mapped in GTM.

The website changes are approved for production deployment. No paid products were enabled. Vercel Analytics was not installed: Hobby restricts commercial use and does not include custom events.

## GTM configuration reference and optional reporting setup

1. Create/use a GA4 property and website data stream for https://www.getrecaply.com. Obtain its G-… Measurement ID.
2. In GTM-T7WPCF3S add a Google tag using that ID, triggered on Initialization – All Pages. The website only loads the container after analytics consent.
3. Add a GA4 Event tag named `app_store_click`, using the same Google tag/measurement destination. Trigger it with a Custom Event trigger whose event name is exactly `app_store_click`.
4. Create Data Layer Variables `cta_placement` and `link_url`; pass them as event parameters. Placement values are `nav`, `hero`, `cta`.
5. Register `cta_placement` as an event-scoped custom dimension in GA4 and mark `app_store_click` as a key event if desired.
6. Keep Google Signals, ad personalisation and advertising tags disabled. Do not add advertising, custom HTML or third-party tags under analytics-only consent. Review consent requirements for any future tags; basic blocking of the whole container does not classify tags by itself.
7. Preview and publish the container. Verify page views and `app_store_click` in Tag Assistant/GA4 Realtime after consenting on the production domain.

Google enhanced measurement may also record outbound clicks as `click`; do not count those alongside `app_store_click` as two conversions.

## Website behaviour and storage

- No GTM script, Google preconnect or noscript iframe is emitted before an explicit acceptance. No Google request is needed to reject.
- Google consent defaults are queued before GTM starts. Acceptance grants only `analytics_storage`; all three advertising consent flags remain denied.
- Both choices persist as `{choice, expiresAt}` in localStorage under `recaply:analytics-consent:v1`, used for 90 days. This preference has no unique visitor identifier. Expired/invalid preferences default to unknown, with tracking blocked.
- If storage is unavailable, the current page retains the choice in memory; future page loads ask again.
- The prior draft notice's sessionStorage key is no longer read or written and naturally expires with that tab's session.
- Rejecting after acceptance clears accessible `_ga`, `_ga_*`, `_gid`, `_gat*` cookies at the site's normal root paths/domain scopes, updates consent and reloads to unload previously installed tag listeners. It cannot erase information already sent to Google or cookies belonging to other origins.
- GA cookie names/retention depend on the tags published in GTM. Review these settings and the linked privacy policy when adding the GA4 tag; the container uses the Google tag defaults unless changed in Google Analytics.
- Only getrecaply.com and www.getrecaply.com load GTM. Localhost and Vercel preview domains never send analytics. Local tests use an isolated browser mock rather than sending test traffic to Google.
- The Apple badge and Vercel hosting/opted-in collaborator toolbar remain as documented in the original audit.

## Launch measurement

Use a campaign URL such as:
https://www.getrecaply.com/?utm_source=producthunt&utm_medium=referral&utm_campaign=launch

Track campaign visitors and users who trigger App Store clicks. Report a click-through rate using comparable users/sessions and the same date range, not raw repeated click events divided by unique visitors. Consent and ad blockers cause undercounting; label reports accordingly.

A click is not an install. Obtain downloads, activation, retention, paying customers and revenue from App Store Connect and the app's own metrics. Those complement marketing traffic when discussing traction with investors.

## Validation

`node --test tests/analytics.test.cjs` exercises consent blocking, ordering, duplicate prevention, expiry, blocked/malformed storage, withdrawal, click payloads and local/preview exclusion. Build and lint also run before handoff. The published tags are verified; GA4 report ingestion still requires an end-to-end check after deployment.
