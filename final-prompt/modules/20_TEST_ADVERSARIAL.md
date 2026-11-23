# FINAL PROMPT / MODULE 20: Independent Testing, Regression and Adversarial Verification

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run after significant changes and before release. Verification must be independent of the implementation agent's assumptions: write tests that could **disprove** the fix. Scope to actual project and authorized sandbox. This is not authorization to attack third-party live infrastructure.

## Scope to discover

Unit/integration/component/E2E suites, fixtures, state machines, contracts, permissions, migrations, webhooks, retries, UI browser behavior, accessibility, performance baselines, CI outputs and runtime smoke evidence. Include all changed files and high-risk unaffected critical flows.

## Audit checklist (inspect actual project and gather evidence)

- Inventory available test suites, flaky tests, coverage gaps and baseline results; classify previously failing tests separately from regressions.
- Map each P0/P1 and important P2 finding to a **red-before / green-after** reproduction where feasible, or document why not.
- Negative tests: unauthorized access, cross-tenant, malformed/oversized input, race/duplicate submissions, partial failure, canceled request, timeout, invalid state transition, corrupted/empty data.
- UI adversarial fixtures: long content, no network, slow network, reduced-motion, missing image, keyboard-only, focus return and mobile viewport.
- Data tests: migration reversibility on disposable DB, restored backup check with authorization, tenancy, consistency and idempotency.
- Supply-chain and security tests: vulnerability reachability, safe fuzz cases, webhook signature/replay and secret scanning with redaction.
- Verify deployment/runtime incompatibilities and contract compatibility with actual target environment.
- For multi-agent edits, check overlapping files, unexpected feature changes and suspicious mass deletions.
- Run test selection plus broad regression; log skipped and flaky tests honestly, with retries separately recorded.
- Inspect test artifacts for assertions actually exercising intended behavior (not superficial mocks).

## Authorized remediation instructions

Create missing critical regression fixtures when feasible. Repair tests only to correct incorrect assumptions, never weaken assertions to make red turn green. If a fix causes regression, restore/repair it and rerun. Separate independent review findings from implementation findings; do not approve your own unexecuted assertions.

## Mandatory verification

Present machine-verified command results with exit status, test counts, environment/commit, failing test details, safe repro steps and actual artifacts. Identify checks that cannot be run, and record them UNVERIFIED. Optional independent reviewer agent can inspect diff but does not replace execution evidence.

## Approval and non-goals

No malicious live scanning without permission. No deletion of broken tests; no altering tests to hide defects. No claim of comprehensive penetration testing or formal certification unless independently performed under explicit scope.

## Required phase report

Verification matrix by finding, exact test outputs, before/after failures, independent challenges, residual coverage gaps, flaky tests and final gate recommendations.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
