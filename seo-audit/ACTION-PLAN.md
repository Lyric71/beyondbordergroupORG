# Action Plan: www.bearingbridge.com

Prioritized Critical > High > Medium > Low. Effort in rough dev-hours.

## CRITICAL (decide + fix now)

1. **Resolve the multi-domain identity.** Pick ONE canonical domain (the config says .org). Then:
   - If .org is primary: make `www.bearingbridge.com` (and `bearingbridge.ai` if not its own brand) **301 redirect** to the matching .org URL, instead of serving 200 duplicate content. Effort: 1h (Vercel redirect rule).
   - If .com is meant to be primary: flip canonical, robots `Sitemap:`, and all sitemap `<loc>` entries to .com. Effort: 1-2h (build config / `site` in `astro.config`).
   - Until this is decided, .com earns no independent rankings. This gates everything else.

2. **Fix the sitemap mismatch.** The sitemap served on .com lists .org URLs, and `/sitemap.xml` 404s. After the domain decision, ensure each domain's sitemap lists its own URLs and that `/sitemap.xml` resolves (or robots points only to `/sitemap-index.xml`). Effort: 30m.

## HIGH (within 1 week)

3. **Add `Organization` + `WebSite` JSON-LD** to the layout (all pages). Include `name`, `url`, `logo`, and a `sameAs` array linking the eight agency domains + LinkedIn. This is the single biggest entity/AI-citation win. Effort: 2h.

4. **Fix hreflang.** Convert all `hreflang` `href` values to absolute URLs on the chosen canonical domain, add an `x-default`, and make sure the hreflang cluster and canonical agree on the same domain. Effort: 1-2h (template helper).

5. **Per-agency schema + breadcrumbs.** Add `Organization`/`ProfessionalService` JSON-LD to each `/agencies/*` page and a `BreadcrumbList`. Effort: 2-3h.

## MEDIUM (within 1 month)

6. **Add `/llms.txt`** describing the group and the eight agencies with links, for AI engines. Effort: 30m.

7. **Tighten the home meta description** so the core promise lands within ~155 chars before truncation. Effort: 15m (English only first, per locale rules).

8. **Add security headers** via `vercel.json`: `X-Content-Type-Options: nosniff`, a frame-ancestors CSP (or `X-Frame-Options: SAMEORIGIN`), and a baseline `Content-Security-Policy`. Effort: 1h.

9. **Confirm Core Web Vitals with real data.** Add a `GOOGLE_API_KEY` so future audits pull PSI + CrUX field data instead of lab estimates. Effort: 30m. Then re-measure LCP/INP/CLS.

## LOW (backlog)

10. **E-E-A-T proof layer.** A named-operator / track-record / case-study surface (machine-readable with `Person` schema) to back the prose claims. Effort: variable.

11. **Tune HTML caching.** Static pages can use `s-maxage` + `stale-while-revalidate` to cut origin/cold-start hits, which also helps first-visit GFW latency. Effort: 30m.

12. **Verify image dimensions/formats** across templates (explicit width/height, AVIF/WebP) to lock in CLS. Effort: 1h.

---

### Notes
- All copy changes: English first, per project rules. Do not propagate to fr/es/de/zh until you say so.
- Schema, hreflang, redirects, headers, llms.txt are infrastructure changes and apply globally by nature.
- Re-run the GFW build grep before committing any of these.
