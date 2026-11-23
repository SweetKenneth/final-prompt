# FINAL PROMPT / MODULE 09: Data Integrity, Migrations, Backup and Recovery

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run when persistent business data, object storage, files, jobs, caches with material state, or database/storage services exist. If none, return NOT_APPLICABLE. Recovery behavior is only proved by a real authorized restore rehearsal, never by finding a backup setting.

## Scope to discover

DB schemas/models; migrations; constraints and indices; transactions and concurrency; tenancy and row-level rules; object storage; cache persistence; backup policies and evidence; retention/deletion; restore tooling; DR assumptions; RPO/RTO; replica topology; data flow, stateful queues and audit logs.

## Audit checklist (inspect actual project and gather evidence)

- Identify source of truth, PII categories, ownership/tenant boundaries, data residency assumptions and critical invariants.
- Review migration ordering, backward/forward compatibility, concurrent deployments, irreversible alterations, lock duration, rollback and repeated execution.
- Find missing constraints, dangerous cascades, orphan handling, non-atomic multi-write actions, optimistic concurrency needs, duplicate jobs/events and index assumptions.
- Test data validation at ingress/DB, pagination/query limits, private storage URL rules, file lifetime and use of signed URLs.
- Inspect actual backup schedule, encryption, retention, access controls, off-site copies, restore permissions, restore point visibility and monitoring of failed backups.
- Derive recovery point objective (RPO) and recovery time objective (RTO) **from the operator or documented service goals**, not invented thresholds; compare to observed capabilities.
- Check accidental deletion paths, GDPR-like request workflows where applicable, soft-delete/restore lifecycle, data deletion versus backups and log retention conflicts.
- Review multi-tenant backups and restore isolation, partial restore, event replay and external system reconciliation.
- Assess production-only risks (large table locks, cost, stale replicas) as UNVERIFIED when no safe staging equivalent exists.

## Authorized remediation instructions

Add safe constraints/validation and transaction protections on branch with tests. Draft migration scripts as reviewed changes; rehearse against sanitized staging snapshots if authorized. Build restore checklist and procedure; automate backup health checks where supported without exposing credentials. Do not execute production migrations or restore operations without approval and a verified recovery plan. Improve idempotency and auditability around destructive actions; preserve tenant isolation.

## Mandatory verification

Verify schema/migration dry run and rollback in disposable test DB where available; transaction/concurrency tests; unauthorized access tests; restore a sanitized backup into isolated environment with integrity checks only if authorized; record elapsed recovery time, point-in-time position and consistency. Otherwise mark `RESTORE_UNVERIFIED` and treat as release risk based on criticality.

## Approval and non-goals

No destructive migration, delete, retention change, restore onto live data, production DB write or backup export without explicit approval. Never copy identifiable production data to outside tools or local temp storage without authorization and redaction safeguards.

## Required phase report

Data inventory; critical invariants; migration review and exact dry-run output; RPO/RTO status; backup/restore coverage with evidence; changed files; recovery/runbook; unresolved risks and required approvals.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
