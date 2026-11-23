# FINAL PROMPT / MODULE 19: Universal Website & Application Visual Polish

**THIS IS A POLISH PASS. TAKE IT SERIOUSLY FOR THE ACTUAL PAGE, FLOW OR SITE UNDER REVIEW.**

This directive is **reusable and intentionally generic**. Items listed below may or may not apply to this project. **Inspect the real implementation and rendered UI first. Apply only relevant corrections. Ignore irrelevant categories rather than creating elements to satisfy a checklist. Add project-specific observations the list misses.** This is refinement, **not** a new feature request, automatic rebrand, theme replacement, or permission to rewrite copy and user flows. Master safety, scope and approvals always apply.

## Applicability and scope

- Single page: target page and affected shared components; do not wander into unrelated routes.
- Whole site: discover actual routes, layouts, public/private/admin boundaries and their accessible states; inspect all in-scope route families. The homepage alone never proves an entire-site pass.
- Nonvisual services: mark `NOT_APPLICABLE`; don't synthesize a dashboard.
- If tools cannot render or inspect the target viewport, mark visual verification `UNVERIFIED`, not `PASS`.

## 1. Design system and appearance

Understand brand identity, theme, component primitives, tokens and intended audience. Refine hierarchy, grid/alignment, section rhythm, layout density, content widths, cards, backgrounds, surfaces, borders, dividers, radii, shadows and elevations. Standardize inconsistent repeated values through existing tokens if safe. Preserve effective intentional asymmetry and distinctive aesthetics. Remove noise rather than always adding effects.

## 2. Color, light, effects and continuity

Audit semantic colors, text and icon contrast, states, gradients, transparency, dark/light mode where present, shadow falloff, glow, bloom, atmospheric effects, glass surfaces and layering. Correct muddy gradients, glare, washed-out labels, inconsistent accent hues and random glow intensities. Animated organisms, particle effects and shaders should share a coherent visual language *if they already exist*. Don't introduce glow to an ordinary editorial page without an actual reason.

## 3. Typography and readable content

Audit font families/weights, heading scale, line length, line height, letter spacing, responsive sizing, paragraph rhythm, caption hierarchy, labels, wrapping, truncation, icon alignment and contrast. Fix clipped content and layout jumps. Preserve semantic meaning and project voice; only correct wording for a demonstrated usability defect. Honor dynamic user-generated content, localization, zoom and accessibility labels.

## 4. Spacing and geometry

Inspect spacing at every meaningful nested level: section/page margins, cards, forms, grids, component padding, buttons, icons, sticky/fixed chrome, safe areas, modals, menus and footer. Use a coherent spacing scale. Protect legible grouping and avoid cramped touch layouts or arbitrary empty voids. Verify before/after at representative viewports.

## 5. Animation and microeffects

Inspect **existing** motion: hovers, focus, press, navigation, drawers, loading, view transitions, scroll effects, media, effects and responsive states. Repair jarring jumps, timing and easing inconsistencies, unnecessary animation, flicker, clipped transitions, leaked animation loops and disconnected motion. Avoid painting-intensive animation where transforms/opacity are sufficient. Respect reduced-motion users. Never synthesize audio reactivity without labeling it procedural; do not add voice provider calls or microphone access for visual polish.

## 6. Mobile UX, QR and responsive behavior

Mobile-first check with real render evidence where possible. Inspect narrow screens, wide/landscape/tablet, touch target sizes, keyboards and insets, sticky bars, drawers, typography, scroll, overflow, stacking, focus, table responsiveness and gesture conflicts. Avoid simply scaling down desktop. **If the site contains QR codes**, ensure sensible size, contrast, quiet zone and scannability; do not create QR features when absent. Verify iOS/Android-specific claims on those devices or mark unverified.

## 7. Interaction feedback, accessibility and states

Audit actual buttons, links, controls, forms, empty/loading/error/success states, pointer/keyboard/focus, screen-reader semantics, status announcements and media captions. Improve communication and affordances without changing business operations or promise of effect. Target applicable WCAG 2.2 AA criteria; automated checks are partial evidence and are not an accessibility certification. Do not fabricate missing routes or states.

## 8. Frontend performance and stability

Review LCP/INP/CLS when measurable, asset dimensions/compression, font loading, route boundaries, excessive re-renders, effect costs, resource cleanup and mobile CPU/GPU. Quantify before/after where tooling exists. Choose a restrained implementation over more visual complexity. Avoid new paid dependencies, analytics, vendor SDKs or background network traffic without explicit authorization.

## 9. Whole-site continuity

For whole-site scope, compare representative actual route classes and shared components. Ensure consistent typography, spacing, colors, controls, navigation, overlay behavior, error states and motion while preserving intended differences between marketing, application and admin surfaces. Keep a per-route-family evidence ledger and mark inaccessible routes `UNVERIFIED`.

## 10. Implementation, verification and closure

1. Inventory existing design, surfaces and baseline screenshots/performance where available.
2. Identify specific issues with path/component and a before-state observation.
3. Prioritize defects and high-impact consistency issues; preserve already good design.
4. Implement small, focused frontend changes under existing file ownership rules.
5. Review actual rendered after-state; test functionality, zoom/contrast, key interactions, viewport ranges and build.
6. Record actual files changed, regressions checked, outstanding items, devices/browsers really tested and nonapplicable categories.

A visual screenshot alone does not prove an animation or interaction works. A successful build alone does not prove the visual polish is correct. Stop before risky brand replacement, public copy changes or release and seek approval. Do not pad the report with invented fixes. For multi-turn entire-site work, save route coverage and resume from checkpoint; do not promise background completion.

**Outcome:** More coherent, readable, polished and accessible *existing* experiences—with no invented components, unnecessary effects or sacrificed functionality. Built to last.
