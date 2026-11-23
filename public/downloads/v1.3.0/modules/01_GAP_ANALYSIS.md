# FINAL PROMPT / MODULE 01: Universal Operational Gap Analysis and Remediation Planning

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

MANDATORY **read-only** discovery at the beginning of a comprehensive run. Works for any language, stack, architecture, codebase or product type. This module discovers and prioritizes issues; it does **not** modify code. Its output becomes the controller's evidence-backed work queue.

## Scope to discover

Inventory: product mission and intended users; code and repo history; modules and boundaries; architecture and dependency graph; data/control/runtime flows; deployment and environment; third-party services; identity/roles and sensitive data; economics and monetization when applicable; user journeys; test matrix; observability; operational ownership; governance and compliance context; unknowns. Mark unavailable areas UNVERIFIED, not healthy.

## Audit checklist (inspect actual project and gather evidence)

### Five analytical phases

**A. Surface mapping:** Map architecture, modules, interfaces, data flows, privilege boundaries, external dependencies, runtime/deployment model, economic model and owners. Provide diagram in text or Mermaid only when supported by evidence.

**B. Universal 20-category audit:** For *each* category, list observed weaknesses, root-cause hypothesis, concrete path/evidence, affected users, failure mode, applicability and unknowns:

1. Architectural gaps — coupling, boundaries, single points of failure, unclear responsibilities.
2. Structural gaps — duplication, inconsistent conventions, dead or unowned modules.
3. Operational gaps — runbooks, readiness, manual workflows, release discipline.
4. Observability gaps — metrics, logging, alerts, traces, user-impact detection.
5. Governance gaps — ownership, approvals, privileges, audit trails.
6. Data integrity gaps — consistency, validations, retention, deletion, migration safety.
7. Security gaps — threats, exposure paths, secrets, authentication and authorization.
8. Scaling gaps — resource limits, concurrency, queues, bottlenecks, backpressure.
9. Economic/cost gaps — unit economics, unbounded tokens/calls, abuse cost, provider lock-in.
10. Productization gaps — onboarding, pricing/entitlements, support, accessible operations.
11. Documentation gaps — setup, architecture decision records, runbooks, API contracts.
12. Evolution/versioning gaps — schema migration, backward compatibility, deprecations.
13. Human-interaction gaps — confusing UX, recovery, accessibility, bad error feedback.
14. Testing/validation gaps — absent negative cases, flaky tests, missing critical paths.
15. Compliance/legal gaps — claims, privacy disclosures, license obligations, jurisdiction issues.
16. Deployment/environment gaps — staging parity, config drift, rollout, rollback.
17. Dependency-risk gaps — abandoned packages, vulnerabilities, SBOM/licensing.
18. Performance gaps — latency, memory, I/O, frontend vitals where relevant.
19. Redundancy/backup gaps — single-copy data, untested restore, failover.
20. Narrative/cognitive clarity gaps — user-facing promises and internal system model divergence.

**C. Severity and scoring:** Assign each actual finding `P0/P1/P2/P3`, likelihood (low/medium/high), impact (1–10), estimated risk (1–10; qualitative aid, NOT scientific), urgency, confidence, effort (S/M/L), whether auto-remediable and proposed owner. List `NOT_APPLICABLE` categories with reason.

**D. Remediation roadmap:** Build a dependency-aware ordered backlog: immediate P0/P1 blockers, high-value safe fixes, medium-term structural issues, long-term optional enhancements. Identify approvals, backup/rollback needs, acceptance tests, cost risk and verification owners.

**E. Blind-spot identification:** Find missing docs, implicit assumptions, untested state transitions, missing production evidence, tribal knowledge, undocumented credentials/services, unknown service-level goals, supply-chain transitivity, changed deployment environments; propose probing tests and specify what evidence would resolve each unknown.

## Authorized remediation instructions

No source modifications, no migrations, no commits and no configuration writes in this module. If a defect is obvious, log a reproducible finding with proposed minimal fix and route it to an implementation module. Deduplicate overlapping issues by stable finding ID; connect each finding to exactly one accountable owning module and any reviewers. Provide recommendations only, not fake changes.

## Mandatory verification

Validate complete coverage accounting across all 20 categories; confirm every discovered issue has evidence or an explicit hypothesis tag, a priority, a proposed corrective action, an owner, a validation test and a disposition. Confirm no unsupported technology was invented. Surface absent access as UNVERIFIED. Re-read high-risk flows and assumptions for overlooked attack/data-loss paths.

## Approval and non-goals

Analysis-only is an intentional restriction from the original module. No automatic code changes, commits or infrastructure operations. Do not mistake an unobserved problem for an absent problem. Never claim all unknown unknowns found.

## Required phase report

Deliver: surface map; 20-category matrix (covered/applicable/not-applicable/unverified); prioritized P0–P3 gap register; dependency-aware remediation plan; risk/impact/effort table; probe plan for unknowns; an execution proposal to hand to master controller.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
