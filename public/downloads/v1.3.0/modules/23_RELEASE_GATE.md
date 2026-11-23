# FINAL PROMPT / MODULE 23: Final Production Release Gate and Dossier

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Mandatory at the end of a comprehensive run, **after** final blind-spot sweep (module 22), and after all relevant verification reruns. This module creates an evidence-backed verdict, not a guarantee or official certification.

## Scope to discover

All module reports and state ledgers, baseline/current commits, outstanding findings, production-specific unknowns, approvals, exceptions, test artifacts, deployment/recovery proofs, budget, incident readiness, UI/SEO/legal and brand checks where applicable.

## Audit checklist (inspect actual project and gather evidence)

- Validate every applicable critical module has clear PASS/FAIL/BLOCKED/UNVERIFIED/N/A, with honest evidence and environment.
- Reconcile all finding IDs: fixed and verified, fixed but unverified, open, accepted risk (owner/date/expiry), not applicable, duplicate; no silent dropped findings.
- Confirm no P0, unapproved P1 or nonwaivable critical controls unresolved.
- Check security/authorization, data integrity, recovery, economic/payment correctness, contract backward compatibility, build, representative user journeys, monitoring, deployment/rollback and legal facts depending on risk and applicability.
- Confirm change branch/commit diff, generated artifacts, dependencies, rollout plan, secrets redaction, tests not run and accessible environments.
- Mark external services and live data UNVERIFIED when not observed; do not infer production readiness from clean local build.
- Verify documented human decisions exist for rebrand, legal publication, live deployment, paid calls, new providers and destructive changes.
- Review run-budget adherence and whether tests were weakened, skipped or replaced with mock-only checks.
- Compare before/after evidence and open risk severity; present precise scope of claims.

## Authorized remediation instructions

This phase is **read-only** except for generating the report and run-state artifacts. If a blocker is found, hand it to its owning module and return to independent verification; do not silently patch in the release reporting step. Issue an objective verdict with justification and required next actions.

## Mandatory verification

Check report claims against actual commands/outputs and file hashes. Validate all required fields are present, each PASS supported, no P0/P1 in the ship path, and unknowns/approvals visible. Explicitly distinguish `staging ready`, `deployment approved`, `deployed`, and `production verified`.

## Approval and non-goals

Use `BLOCK` for unresolved critical risk; `HUMAN REVIEW REQUIRED` for missing essential verification or approvals; `SHIP (verified scope only)` only for applicable mandatory gates with evidence and no unapproved blockers. No '100% secure', absolute compliance, or certified shield claims.

## Required phase report

Produce full `contracts/REPORT_TEMPLATE.md` dossier: scope, comparison, findings, artifacts, commands/results, compliance unknowns, signoffs, rollback, budget, residual risks, verdict, statement of limitations and exact next action.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
