# FINAL PROMPT / MODULE 18: Brand Identity, Asset Production and Rebrand QA

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run in **audit mode by default**, replacing only objectively broken/missing approved branding references. **Full rebrand mode requires explicit operator opt-in** plus verified brand name and rights. For projects made with Lovable or templates, find unwanted residue; do not remove contractually required badges, provider credits or valid legal notices. No external image generation should be claimed unless actual image-generation tools are available.

## Scope to discover

Brand name/domain, voice, audience, positioning, original imagery and logos, source/build output references, headers/footers/loading/404/forms/modals, public assets, favicons, OG/X previews, Apple/PWA assets, manifest, structured data, favicon and theme metadata, light/dark variants and licenses.

## Audit checklist (inspect actual project and gather evidence)

1. **Brand residue inventory:** search generic/template/Lovable/platform strings in visible UI, metadata, comments, favicons, OG previews, manifests and build output. Classify each as removable default, necessary functional identifier, required legal/contractual credit, dependency name or historical source reference. Do not blanket delete.
2. **Identity discovery:** determine actual official name, domain, positioning, audience, emotional tone, existing palette and visual system; flag ambiguous/multiple brand identities.
3. **Creative concepts (rebrand mode):** develop ≥3 concept directions with rationale; compare small-size legibility, distinctiveness, tone fit, light/dark operation and practical production effort. Require brand owner approval before replacing accepted logo and major design tokens.
4. **Logo system:** primary/wordmark/icon-only/monochrome/light/dark/square/favicon mark variants if actually produced and rights cleared; do not fabricate artwork files. Validate SVG sanitization and consistency.
5. **Favicons/PWA:** generate appropriate favicon.ico/SVG, 16/32 (48 optional) PNG, 180 Apple Touch, 192/512 Android/PWA and maskable icon only when manifest applies; verify purpose, padding, cropping, MIME, square aspect and path.
6. **Social previews:** default 1200×630 OG, compatible X large image and page-specific important routes; avoid crowded text, low contrast, third-party marks and unsupported claims. Square fallback where actually helpful.
7. **Metadata:** page title/site name, application-name, apple-mobile-web-app-title, theme-color, manifest icons/colors, Open Graph/X, publisher/logo schema; ask SEO module to apply canonical metadata.
8. **UI consistency:** header, nav, footer, CTA, empty/error/loading, email/signup, forms, mobile/desktop, 404, light/dark; validate clean scaling and no deformation.
9. **Asset hygiene:** remove proven unused stale assets after references verified; filenames and imports consistent; retain attribution/license notices when required.
10. **Brand QA:** search source AND built output for unwanted branding; inspect real preview renders on supported tools; validate favicon/app install and OG image paths without claiming external crawlers updated.

## Authorized remediation instructions

Audit mode: fix broken references/placeholder leakage only, do not invent a new identity. Full rebrand mode: produce concept comparison, get operator approval, generate actual assets with available graphics tooling, implement minimal coherent style changes, replace only licensed/owned defaults, update UI/metadata through shared-file ownership, test outputs. If image generation unavailable, create exact asset specifications and label artwork NOT GENERATED; do not pretend assets exist.

## Mandatory verification

Build and inspect links/references, search source and artifacts, check asset dimensions/contrast/readability, test logo in nav/mobile/light/dark, verify favicon/manifest configuration, inspect social preview metadata and actual URLs. Mark live OG cache/browser icon behavior UNVERIFIED without external checks.

## Approval and non-goals

Full replacement needs explicit opt-in. Preserve licensed provider attribution, vendor references in dependency files, user-approved brand, trademark constraints and legal claims. Never remove platform credits that are contractually mandatory. Do not assume every Lovable appearance is an unwanted visible badge.

## Required phase report

Mode used; brand inventory; 3 concept rationales if rebrand; operator selection/approval; exact generated assets and paths; favicon/PWA/social metadata changes; source/build residue results; checks/unknowns.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
