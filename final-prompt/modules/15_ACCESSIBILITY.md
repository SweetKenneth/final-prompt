# FINAL PROMPT / MODULE 15: Accessibility, Responsive and Cross-Platform Quality

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run for customer-facing UIs. Reference WCAG 2.2 as a test framework where relevant but don't claim certified conformance based on automated lint alone. A visual redesign is outside this scope unless explicitly authorized.

## Scope to discover

Semantic structure; keyboard navigation; focus lifecycle; text alternatives; forms/errors; headings/landmarks; contrast; motion; touch targets; zoom/reflow; orientation; mobile/tablet/desktop; high-DPI; browser compatibility; localization and RTL if applicable.

## Audit checklist (inspect actual project and gather evidence)

- Inventory key journeys and reusable components; record representative devices, screen sizes, input methods and supported browsers.
- Check headings, labels, accessible names and descriptions, ARIA semantics (avoid redundant/inaccurate ARIA), landmarks and meaningful alt/decorative images.
- Review keyboard tab sequence, skip links, focus visibility/return, modal focus trap, menus and custom widgets, disabled states and escape dismissal.
- Assess errors and success states for screen readers, form instructions, inline validation and status announcements.
- Test text resizing, 200%/400% zoom, reflow, long language strings, mobile safe areas, device rotation, reduced motion and contrast.
- Inspect pointer/touch target sizes and interactions, hover-only information, drag-only actions and timeout-related accessibility.
- Review media captions/transcripts when present and applicable.
- Identify responsive overflow, clipping, stacking issues and dynamic data layout failures.
- Separate automated test findings, manual keyboard/assistive-tech results and untested requirements.

## Authorized remediation instructions

Apply minimal semantic/ARIA/label/focus/contrast/reflow fixes preserving design intent. Update components and tests. Prefer native controls over custom widgets where safe. Align changes with frontend/component owner; do not modify brand aesthetics unless needed for an actual accessibility defect.

## Mandatory verification

Run existing axe/pa11y/lint tests when available, keyboard-only journeys, focus order/modal flows, zoom/reflow checks and representative viewport/browser smoke tests. If screen reader or actual device unavailable, mark those cases UNVERIFIED rather than PASS.

## Approval and non-goals

No fabricated WCAG conformance statement, legal guarantee or certification. Do not remove needed interactions or obscure content to silence automated audits.

## Required phase report

WCAG-oriented issue list, changed pages/components, manual/automated verification distinction, screenshots where available, remaining assistive tech gaps.

Reference: https://www.w3.org/TR/WCAG22/

### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
