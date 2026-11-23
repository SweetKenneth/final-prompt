# FINAL PROMPT / MODULE 14: Observability, Operations and Incident Readiness

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run when software has runtime behavior, user traffic, background jobs, providers, availability requirements or a support function. A static hobby project may need only minimal uptime/error checks. Do not invent an observability vendor.

## Scope to discover

Metrics, logs, traces, health/readiness, exception capture, job/webhook failure reporting, user-impact indicators, uptime checks, alert routing, SLOs and error budgets, runbooks, incident access, audit events and cost monitoring.

## Audit checklist (inspect actual project and gather evidence)

- Define 2–6 service-critical journeys/SLIs from actual product (e.g., login, save, search, checkout) and existing objectives; request SLO targets rather than invent them.
- Inspect actionable logs with trace/request correlation, sampling, secure PII redaction and retention.
- Audit monitoring for crashes, slow requests, DB failures, queue lag, failed backups, provider 429/5xx, webhook delivery, user-visible frontend errors and abnormal spend.
- Verify alerts go to a real owner, have meaningful thresholds, avoid duplicate spam and include recovery instructions.
- Review health/readiness endpoints for false-positive checks, dependency failures and sensitive information leaks.
- Determine incident roles, escalation, runbooks, deployment logs, status communication, rollback and user notification flow where applicable.
- Check data retention, privacy, privileged audit trails and operator access controls.
- Assess quiet failure modes: cron never fired, queue stalled, email dropped, analytics broken, certificate expires, domain changes.
- Distinguish code-wired telemetry from actually delivered metrics/alerts in production.

## Authorized remediation instructions

Add privacy-safe structured logs, useful metrics, failures surfaced to operators, health/readiness probes, bounded trace context, alert config as code when available, concise runbooks, and tests for instrumentation. Do not connect new paid vendors or send incident/test alerts externally without authorization.

## Mandatory verification

Generate safe local/staging failure simulations; verify error events appear in the configured destination (if access granted), alerts can be tested safely with owner approval and recovery instructions work. Record where monitoring account or on-call destination is inaccessible.

## Approval and non-goals

No secrets in logs. No alert spam to real operators. No pretended observability when only code inspection is possible. Preserve privacy and do not promise a service level without agreement.

## Required phase report

Critical journey matrix, existing vs missing observability, evidence of delivered events, alert/runbook changes, incident readiness status, owners and residual blind spots.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
