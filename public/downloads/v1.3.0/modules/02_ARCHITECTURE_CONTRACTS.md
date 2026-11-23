# FINAL PROMPT / MODULE 02: Architecture, Dataflow and Contract Integrity

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run when application architecture, APIs, data contracts or cross-module interfaces exist. Focus on actual system constraints; no rewrite merely because another architecture is fashionable.

## Scope to discover

Modules/services/packages; import boundaries; lifecycle; generated clients/types; DTO/schema validation; storage and message models; API/SDK versions; auth and tenant boundaries; operational components; external vendors; frontend/backend contracts; events/webhooks and job topology.

## Audit checklist (inspect actual project and gather evidence)

- Map module ownership, public interfaces, dependencies, sync/async boundaries, trust boundaries, shared mutable state and critical paths.
- Discover architecture erosion, circular dependencies, duplicated domain rules, mismatched frontend/server validation, wrong error semantics, missing timeouts, nondeterministic event ordering and incompatible dependency versions.
- Find stale/generated contracts, undocumented deprecations, hardcoded feature flags, non-atomic releases, mixed runtime assumptions and breaking changes.
- Check observability at boundaries, state machine completeness, coordination and transaction boundaries, ownership of schemas and migrations.
- Audit contract consistency for IDs, nullability, enums, pagination, timezone/currency, localization and error shapes.
- Record objective evidence and whether changing an interface impacts external customers.

## Authorized remediation instructions

- Fix broken validation/contracts and typed boundaries with backward-compatible minimal changes.
- Add contract tests and explicit adapters when needed; remove duplicate business rules only after proving equivalence.
- Introduce stronger type checks/schema gates when low-risk; document meaningful decisions and ownership.
- For incompatible changes, create versioned API/migration proposal and request approval before breaking consumers.
- Do not create service meshes, microservices, queues or event buses without demonstrated need.

## Mandatory verification

Run existing typecheck/build/tests, API contract tests, representative client-to-server integration, backward compatibility cases, malformed/edge payload cases and serialization tests. Compare before/after schema and interfaces. Where external consumers inaccessible, mark effect UNVERIFIED.

## Approval and non-goals

Do not move foundational components, change API versions or database schemas, break public contracts, or alter auth policies without explicit review/approval. No speculative architectural migration.

## Required phase report

Architecture map, contract mismatch table, changed interfaces, consumer impact, dependency graph notes, tests, remaining compatibility risks, owner signoffs.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
