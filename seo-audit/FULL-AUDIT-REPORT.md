# Full SEO Audit: www.bearingbridge.com

Date: 2026-06-22
Target audited: https://www.bearingbridge.com/
Crawl basis: live HTTP + sitemap inventory (70 URLs). No Google/Moz API credentials configured, so all Core Web Vitals figures are lab-estimated, not field data.

## SEO Health Score: 61 / 100

| Category | Weight | Score | Weighted |
|----------|--------|-------|----------|
| Technical SEO | 22% | 55 | 12.1 |
| Content Quality | 23% | 70 | 16.1 |
| On-Page SEO | 20% | 70 | 14.0 |
| Schema / Structured Data | 10% | 10 | 1.0 |
| Performance (CWV, lab est.) | 10% | 80 | 8.0 |
| AI Search Readiness | 10% | 55 | 5.5 |
| Images | 5% | 85 | 4.3 |
| **Total** | | | **~61** |

Business type detected: **Agency / holding group** (eight specialist agencies, portfolio/services site, multilingual marketing, no cart, no pricing, no blog). Five locales: en, fr, es, de, zh. Static Astro build on Vercel (Frankfurt edge), Brotli, edge-cached.

---

## THE HEADLINE ISSUE: bearingbridge.com cannot rank on its own

The .com domain serves the full site with HTTP 200, but every signal hands authority to **bearingbridge.org**:

- **Canonical**: every page on .com declares `<link rel="canonical" href="https://bearingbridge.org/...">`. Home and `/agencies/thechinapath/` both confirmed.
- **Sitemap (robots.txt)**: `Sitemap: https://bearingbridge.org/sitemap-index.xml`. The .com robots points crawlers at the .org sitemap.
- **.com's own sitemap**: `https://www.bearingbridge.com/sitemap-0.xml` exists (200) but every `<loc>` inside it is a **bearingbridge.org** URL, not a .com URL.

Net effect: Google will consolidate all ranking signals from .com into .org. The .com property will not accumulate its own rankings. This is the single biggest determinant of the audit, and it is a deliberate-looking consolidation, so the real question is intent:

- **If .org is the intended primary domain** (most likely, given canonical + sitemap both point there): then .com should not serve 200 duplicate content at all. It should **301 redirect** to .org. Serving live duplicate content on a parallel domain wastes crawl budget and risks confusing canonical signals. This is the recommended path.
- **If .com is meant to be the primary**: then the configuration is broken. Canonicals, the robots sitemap directive, and the sitemap `<loc>` entries must all be switched to .com.

At least three domains currently serve 200 with no redirect: `www.bearingbridge.com`, `www.bearingbridge.org`, and the brand also links out to `www.bearingbridge.ai`. Duplicate live domains without a single canonical target is the classic multi-domain dilution pattern.

---

## Technical SEO (55/100)

**Good**
- HTTPS enforced, HSTS present (`max-age=63072000`).
- Brotli compression on, `X-Vercel-Cache: HIT` (edge cached).
- robots.txt is clean: `Allow: /` for all agents.
- No render-blocking third-party resources. GFW-compliant: all external references are anchor `href` navigation only (sibling agency domains + LinkedIn), zero third-party runtime fetches.

**Problems**
- Cross-domain canonical + sitemap consolidation (see headline issue). **Critical.**
- `https://www.bearingbridge.com/sitemap.xml` returns a 404 HTML page. The valid path is `/sitemap-index.xml`. Anyone (or any tool) hitting the conventional `/sitemap.xml` gets nothing.
- Missing security headers: no `X-Content-Type-Options: nosniff`, no `X-Frame-Options` / frame-ancestors CSP, no `Content-Security-Policy`. Not a ranking factor directly, but a hardening gap and a minor trust signal.
- `Cache-Control: public, max-age=0, must-revalidate` on HTML. Fine for a frequently edited marketing site, but the page is fully static, so a short s-maxage with stale-while-revalidate would cut origin hits.

## On-Page SEO (70/100)

**Good**
- Title is descriptive and branded: "Brands, products, and services built to cross China and the West, both ways. | BearingBridge".
- Meta description present, specific, ~230 chars (slightly long, will be truncated in SERP around 155-160).
- Single clean H1; logical H2 progression ("Eight specialists. One ecosystem.", "Two leads. Five specialists. One engine.", etc.).
- Internal linking is solid: all eight agency pages, all five locales, and the core nav (two-flows, the-bridge, how-we-work-together, contact) are linked from home.

**Problems**
- **hreflang uses relative URLs**: `<link rel="alternate" hreflang="fr" href="/fr/">`. hreflang requires absolute, fully-qualified URLs. Relative hreflang is widely ignored by Google.
- **No `x-default`** hreflang entry. Add one (typically the en page) for unmatched locales.
- hreflang/canonical conflict: on .com the canonical points to .org while the hreflang `en` self-points to `/` on .com. Mixed-domain hreflang clusters are unreliable.
- Meta description length trims in SERP; tighten the lead clause so the key promise survives truncation.

## Content Quality (70/100)

- Copy is strong, human, on-brand, and consistent across the funnel (clear value prop, two-flows model, agency roster). Reads like an operator wrote it.
- Multilingual coverage is real and complete (en/fr/es/de/zh across all routes), which is a genuine differentiator for a China-West positioning.
- **E-E-A-T gaps**: no author/person entity, no `Organization` identity in structured form, no case studies or proof content, no dates. For an agency the trust layer (named operator, track record, client outcomes) is thin in machine-readable terms even where the prose hints at it.
- No blog or fresh-content surface. Nothing wrong for a brochure site, but it caps organic reach to brand + a handful of category terms.

## Schema / Structured Data (10/100)

- **Zero JSON-LD anywhere.** Home: 0 blocks. `/agencies/thechinapath/`: 0 blocks.
- Missing, in priority order: `Organization` (with `logo`, `sameAs` to the agency domains + LinkedIn), `WebSite`, and per-agency `Organization`/`ProfessionalService`. A `BreadcrumbList` on agency pages is an easy win.
- This is the highest-leverage quick win after the domain decision: it directly feeds Google Knowledge Graph and AI-engine entity understanding, and the `sameAs` graph linking the eight agency domains is exactly the brand-relationship signal this group needs.

## Performance (80/100, lab-estimated)

- Page weight ~48 KB HTML, Brotli, only 2 stylesheets, edge-cached. Structurally fast.
- No third-party scripts/fonts to block render (GFW discipline pays off here).
- Cannot confirm field LCP/INP/CLS without CrUX/PSI credentials. Recommend wiring up a Google API key for real numbers, or accept the lab estimate.
- Note: first uncached request measured ~15s (cold edge). Subsequent requests were instant (`X-Vercel-Cache: HIT`). Cold-start latency is worth watching for first-visit-in-region users, especially behind the GFW where every RTT is expensive.

## AI Search Readiness / GEO (55/100)

- **No `/llms.txt`** (404). Add one summarizing the group and the eight agencies with links.
- No structured entity data (see Schema), which is what AI engines lean on for citation confidence.
- Positives: clean semantic HTML, descriptive headings, no JS-gated content, strong declarative sentences that quote well. The prose is citable; the entity scaffolding is not there yet.

## Images (85/100)

- 34 images on home, **all have alt text**. Good.
- Served from origin (`/images/...`), GFW-compliant.
- Could not confirm `width`/`height` attributes or modern formats per-image at scale; spot-check that hero/logo assets are AVIF/WebP with explicit dimensions to protect CLS.
