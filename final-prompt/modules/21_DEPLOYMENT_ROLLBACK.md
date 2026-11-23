# FINAL PROMPT / MODULE 21: Staging, Production Deployment, Rollback and Cutover

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run when a deployable artifact exists and a target environment is known. The module performs **planning and staging rehearsal** by default; actual production deployment is a separately authorized act. Works for static hosts, PaaS, serverless/edge, containers or custom infra, based only on evidence.

## Scope to discover

Build artifacts, staging/prod environments, release channels, migrations, feature flags, DNS/CDN/certificates, env variables (names only), test accounts, smoke check endpoints, rollback versions, health/metrics, on-call and public communications.

## Audit checklist (inspect actual project and gather evidence)

- Establish expected runtime and verify required env/platform capabilities, startup, assets and route behavior.
- Confirm quality gate outcomes and actual artifact identity/hash/commit; ensure release is reproducible and rollback candidate exists.
- Assess schema expansion/contraction and live compatibility (old/new code overlap), cache invalidation, background jobs, queue workers and external webhook endpoint switching.
- Identify release sequencing, gradual rollout/canary availability, feature toggles, monitoring thresholds and abort conditions.
- Inspect backup state and recovery plans before risky migrations, and auth/entitlement/data-integrity consequences of rollback.
- Check error pages, deep links, PWA cache consistency, canonical domain/redirects and search indexing in staging vs production.
- Prepare a time-ordered operator runbook: preflight, approval, deploy, smoke, monitor, rollback and post-incident steps.
- Record who holds authorization and how the team can stop execution if effects diverge from expectations.

## Authorized remediation instructions

In an authorized staging environment, implement needed deploy-config fixes, build once, run smoke tests, exercise rollback using staging snapshots and capture evidence. For production, prepare exact operator-reviewed commands/pipeline steps; only execute after explicit deployment approval and bounded change window. Do not silently change DNS or environment policies.

## Mandatory verification

Validate staged artifact, critical business flows, authorization, data health, monitoring delivery and rollback in permitted environment. Check rollback is actually viable for schema/data changes. If staging unavailable, issue HUMAN REVIEW REQUIRED; local build alone does not certify production deployment.

## Approval and non-goals

Production deployment, DNS, migration and live credentials always require explicit approval. Do not auto-deploy from a prompt, and never claim deployed from a code merge. Treat irreversible data migration as separate blocking review.

## Required phase report

Release candidate commit/hash, environment matrix, preflight checklist, staging test results, rollback procedure and verification, approvals, abort triggers, live deployment status and unknowns.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
