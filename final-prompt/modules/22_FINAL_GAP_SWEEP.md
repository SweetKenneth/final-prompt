# FINAL PROMPT / MODULE 22: Final Independent Blind-Spot Sweep

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Mandatory read-only concluding second pass over all **20 categories** from module 1, after implementation and before module 23 release verdict. Ensure reviewer does not merely repeat implementer's claims.

## Scope to discover

Updated code/diffs, all phase reports, untested surfaces, security/operational/data assumptions, documentation/production deviations, emerging regressions and unowned gaps.

## Audit checklist (inspect actual project and gather evidence)

- Repeat 20-category mapping from module 1 and compare baseline versus final disposition.
- Challenge hidden assumptions: previously non-applicable categories that became applicable, new dependencies, new privilege boundaries, migrated data models, replaced components and new provider calls.
- Look for cross-module conflicts: SEO and branding metadata, legal claim consistency with tracking, frontend and backend validation, auth guards and cache keys, schema migration compatibility with deployment.
- Inspect failure injection coverage, rollback/recovery reality, unobserved live environment, missing test fixtures, expired approvals and budget exhaustion.
- Identify unknown unknowns as **testable hypotheses** only; distinguish plausible concern from evidence of defect.
- Reopen any finding whose test proof is stale relative to current commit, whose verification was not executed or whose fix introduced a new gap.
- Detect unreviewed generated assets, third-party licensing/required attribution changes, and silent business logic change.
- Check for overclaimed completion language, especially in security/compliance/SEO/production claims.

## Authorized remediation instructions

Read-only. Produce a fresh cross-cutting finding list with evidence, map each new issue to its owner and a regression test, and return P0/P1 risks to implementation modules. Do not automatically change code in the independent final sweep.

## Mandatory verification

Provide a 20-row baseline vs final category reconciliation with applicable/unknown status; review altered files and tests; test each newly-discovered high-risk issue if safe within scope, otherwise mark BLOCKED/UNVERIFIED. Require module 23 to reference this sweep's report.

## Approval and non-goals

Do not conflate 'no further problems observed' with 'there are no further problems.' Do not silently waive exceptions or claim exhaustive coverage over inaccessible systems.

## Required phase report

Twenty-category comparison, newly discovered blind spots, changed applicability, resurrected findings, required reruns and final release-gate recommendation.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
