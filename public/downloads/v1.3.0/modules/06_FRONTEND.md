# FINAL PROMPT / MODULE 06: Frontend Production Audit and Implementation

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run for actual web or app user interfaces. Preserve current routes, branding, design language, content and UX unless a targeted, demonstrated defect requires correction. A frontend audit is not authorization to rebrand or rewrite the product.

## Scope to discover

All pages/routes/layouts/components/hooks/utilities/forms/client state/styling/animations/metadata/assets/sitemap/robots/manifest/integrations/analytics/tracking/media/responsive designs. Coordinate SEO metadata changes with module 16 and brand assets with module 18.

## Audit checklist (inspect actual project and gather evidence)

1. **Functional correctness:** test links, CTAs, navigation, filters, search, forms, modal lifecycle, tabs, menus, accordions, stale state, routing and error boundaries.
2. **Edge cases:** missing/null/undefined content, empty arrays, malformed URLs, long titles and URLs, missing images, slow connections, failed requests, rapid repeated clicks and mobile viewport constraints.
3. **Forms:** required values, email/URL/length/select/checkbox validation, accessible error messaging, safe duplicate prevention, loading/success/failure states, alignment with backend validation.
4. **Client data flow:** API assumptions, state duplication, stale closures/effects, hydration mismatches, races, abort/cleanup, controlled/uncontrolled warnings, caching correctness.
5. **Performance:** unnecessary renders, large bundles, async waterfalls, heavy components, LCP/CLS/INP, image priority/sizing, script loading, layout shifts, reduced motion preferences and responsiveness.
6. **Reliability:** 404, offline, empty, loading, timeout, network and boundary states; observer/timer/listener cleanup; no production-breaking mocks or debug overlays.
7. **Security/privacy:** browser-exposed env vars, tokens in local storage/logs, unsafe HTML, sensitive API response exposure, URL schemes and target blank handling, XSS.
8. **Accessibility:** landmark semantics, accessible names, keyboard paths, focus return/trap, valid headings, labels, touch targets, alt/decorative alt, contrast, orientation/zoom.
9. **Visual resilience:** small/large mobile, tablets, desktop/ultrawide, dynamic content and language expansion, grid overflow, sticky z-index, safe-area, reduced animation.
10. **SEO collaboration:** headings, meaningful links, crawlable content, image alt, canonical and JSON-LD rendering; no premature changes to SEO-owned artifacts.
11. **Code quality:** dead imports/files/state/effects, excessive abstraction, inconsistent types, naming, duplicate UI logic, asset hygiene.
12. **Testing and build:** available unit/component/E2E tests, screenshot/manual spot checks, lint/typecheck/build, smoke routes and representative browsers.
13. **Analytics/consent:** measurement scripts installed only if configured, tracked event semantics, consent enforcement where required and no leak of personal data.

## Authorized remediation instructions

Implement safe, minimal changes for broken behavior, validation, lifecycle cleanup, accessibility defects, observed performance bottlenecks, defensive loading/errors, responsive overflow and existing convention consistency. Add tests or targeted smoke cases. Maintain existing visual intent. Do not gratuitously rename routes, redesign layouts, change copy, remove features or alter external tracking/consent without review.

## Mandatory verification

Run lint, typecheck, tests, build when available; interactive routes, menu/nav, forms, error boundaries, 404, keyboard flow, responsive breakpoints and metadata smoke tests. Use real browser/device tools when available; otherwise label visual assertions UNVERIFIED. Use test/staging accounts and avoid production data mutations.

## Approval and non-goals

Do not independently overwrite SEO, legal or brand owned files in parallel. No hidden data collection. No full rebrand from frontend fix. Do not represent screenshots as a tested implementation if only source was inspected.

## Required phase report

Report frontend defects, UI/UX fixes, performance evidence, accessibility checks, SEO/schema coordination, security/privacy, resilience, quality, files, exact commands/results and manual risks.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
