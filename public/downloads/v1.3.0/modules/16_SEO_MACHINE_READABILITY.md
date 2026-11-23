# FINAL PROMPT / MODULE 16: SEO, Crawlability, Metadata and Machine Readability

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run only for public, indexable web experiences where search discovery matters. Preserve site hierarchy, brand voice and core copy unless a targeted SEO defect requires a small correction. Search engine outcomes are not guaranteed; `llms.txt` is an optional machine-reader aid, not a ranking control.

## Scope to discover

Public URLs/routes and page templates; HTML metadata; canonical behavior; Open Graph/X cards; sitemaps/robots; structured data; internal linking and heading levels; media; indexing; relevant content quality; page performance; internationalization; ownership identity; optional llms.txt.

## Audit checklist (inspect actual project and gather evidence)

**1. Metadata & snippets:** unique accurate page titles/descriptions for indexable pages; avoid keyword stuffing and near-duplicates. A title around 45–60 characters and description around 135–160 characters can be editorial targets, **not hard Google limits**; Google creates snippets dynamically and truncates to available display width. Audit templates and important dynamic pages.

**2. Canonical/indexing:** inspect self and cross-canonical, trailing slashes, redirects, duplicate route variants, query pages, faceted search, staging, admin and private routes. Apply correct `index`/`noindex` HTTP/meta rules; private pages must have real access control, not robots-only protection.

**3. Robots and sitemap:** emit or repair `robots.txt` pointing at correct sitemap/index; include canonical public indexable URLs with accurate optional `lastmod`; exclude noncanonical, error, test, admin and private paths. `robots.txt` disallow can prevent Google from seeing `noindex`; choose methods carefully. Do not disallow CSS/JS required for rendering.

**4. OG/social:** appropriate `og:title`, description, type, url, image, site_name, X cards; real HTTPS images and route-specific previews where useful; coordinate assets with Branding, avoid fake/cropped previews.

**5. Structured data:** eligible WebSite, Organization/Person, WebPage, BreadcrumbList, Article, CollectionPage, DefinedTerm/Set, Product/Offer only when actual page supports; FAQPage only with actual FAQs and without assuming rich result eligibility. Validate syntax and accuracy; no invented ratings, awards, prices or affiliations.

**6. Crawling & architecture:** repair real broken links, misleading anchors, orphaned important pages, inconsistent navigation, headings (clear primary H1 without rigid overreach), contextual clusters, breadcrumbs when valuable and meaningful internal paths.

**7. Images/media:** meaningful alt, decorative empty alt, appropriate image dimensions, compression/formats, lazy-load noncritical visuals, prioritize real LCP media and avoid CLS.

**8. Performance:** measure Core Web Vitals and mobile usability; coordinate significant work with Performance/Frontend rather than competing edits.

**9. Content quality & trust:** real purpose above the fold, original/helpful content, defensible factual claims, source citations, author/publisher/about/contact where genuinely applicable. Do not fabricate expertise, clients, credentials, reviews or update dates.

**10. Brand/entity consistency:** unify verified domain, business and publisher name in UI/schema/footer/metadata, official `sameAs` only when verified.

**11. Machine-reader assets:** `llms.txt` only if the owner wants it; site-specific factual headings and canonical links, no instructions pretending to bind external model behavior. Optional manifests/crawler-facing content must be accurate.

**12. Index audit:** compare intended public visibility with actual accessible HTTP responses/canonicals where network is available; explain what Search Console or real indexing checks cannot be seen.

## Authorized remediation instructions

Implement safe and applicable metadata, canonical, robots, sitemap, JSON-LD, internal link, alt-text, content clarity and rendering fixes. Keep titles/descriptions meaningful rather than mechanical strict-length failures. Coordinate shared file writes with Legal/Branding/Frontend. Do not turn private pages public for indexing or overwrite business voice with generic SEO filler.

## Mandatory verification

Run build, route crawl/smoke where available, check canonical absolute URLs/404s/redirect chains/robots/sitemaps, schema JSON syntax and validator where available, unique metadata report and real OG image reachability. Distinguish local HTML checks from live Search Console indexing, ranking and social crawler observation. When only source code exists, no live indexing claim.

## Approval and non-goals

Do not promise search rank, rich results, brand appearance or LLM citation. Do not add fabricated schemas or hard-code publisher identity from another project. No private page exposure. `llms.txt` adoption varies; no guarantee crawlers honor it.

## Required phase report

Report each updated public route with resulting title/description/canonical/index policy; schema types; sitemap and robots; image/OG status; unique metadata checks; commands/results and manual live indexing checks.

## SEO source notes

- Google snippets: https://developers.google.com/search/docs/appearance/snippet
- Google `noindex`: https://developers.google.com/search/docs/crawling-indexing/block-indexing

### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
