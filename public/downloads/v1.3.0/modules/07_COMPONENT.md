# FINAL PROMPT / MODULE 07: Component-Level Perfection and Regression Pass

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run against a **specified existing component** or directly affected components after another module changes them. Scope remains component + owned child components + integration points. Do not accidentally refactor the entire app.

## Scope to discover

Component implementation, props/types, direct child tree, owned hooks/effects/handlers/derived state, styles, assets, API calls, data contracts, surrounding route integration, usage references and tests.

## Audit checklist (inspect actual project and gather evidence)

- **Functional:** handlers, invalid conditions, defaults, CTA flows, forms, repeated clicks, menus, modals, filters, navigation, missing/slow/failed data, long content, invalid props.
- **Runtime:** avoidable throws, unsafe optional/async access, hydration, unstable keys, stale closures, cleanup of timers/subscriptions/listeners/observers and aborted network calls.
- **Performance:** measured heavy renders, memoization only for actual cost, stable callback identity where useful, image sizing, large child split only with material benefit.
- **Maintainability:** simplify complex logic, consistent naming, remove proven redundant JSX, unused state/effects/imports, preserve public API and conventions, strengthen TypeScript inputs/guards.
- **Accessibility:** semantics, labels, `aria-*` correctness, keyboard path, focus management, visible focus, contrast, image alt and logical headings.
- **Responsive:** mobile/tablet/desktop/ultrawide, long content wrapping, clipping, overflow, z-index, sticky behavior, dark/light and reduced motion.
- **SEO if applicable:** crawlable links/headers and valid semantic output; no duplicate heading hierarchy.
- **Security:** unsafe HTML, user-supplied URLs/images, external links, client secrets, suspicious log output.
- **Contracts:** loading/empty/error states, deterministic data handling, backend error consistency, safe retries and duplicate submission semantics.
- **Tests:** existing component, integration and story test setup; smoke failure and accessibility cases.

## Authorized remediation instructions

Implement safe, targeted fixes; favor readability and compatibility over cleverness. Add or modify tests in an existing framework (or introduce a small test only with justification and approval). Remove unused code only after checking imports/call sites. Preserve visible identity, behavior, content, public props and existing product intent.

## Mandatory verification

Execute available typecheck/lint/unit/component tests and build; test one valid and one invalid/empty/error case, repeated interaction, keyboard and representative widths. Verify parent integration and no regression to sibling consumers. Clearly note when browser rendering/manual visual verification cannot occur.

## Approval and non-goals

Do not rewrite from scratch unless the structure is demonstrably broken and replacement is approved; don't add heavy libraries, take ownership of unrelated files or remove working features.

## Required phase report

Report defects fixed, perf evidence, reliability, accessibility, maintainability, files changed, exact commands/results, remaining risks, impact on parent API and follow-up tests.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
