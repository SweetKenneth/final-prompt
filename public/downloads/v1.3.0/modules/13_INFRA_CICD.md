# FINAL PROMPT / MODULE 13: Infrastructure, Deployment Pipeline and Supply Chain

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run for all real deployable software; applicability varies. No assumption that cloud infrastructure, containers, CI or a persistent server exists. Identify limitations (serverless, edge, workers, static hosting) before proposing changes.

## Scope to discover

Build scripts, lockfiles, package managers, CI workflows, permissions, signing, deploy pipeline, container images/IaC, environment partitions, secrets paths, service accounts, storage, DNS/certificates/CDN when available, feature flags, supply chain and licences.

## Audit checklist (inspect actual project and gather evidence)

- Check install/build reproducibility, lockfile consistency, dependency pinning, build artifact provenance and source-to-artifact traceability.
- Audit CI required checks, unsafe pull request execution, excessive repo permissions, fork secrets exposure, unsigned artifacts, arbitrary downloads/scripts and self-hosted runner trust.
- Inspect package vulnerabilities by actual version/reachability, abandoned dependencies, incompatible licensing, transitive risk and SBOM ability.
- Assess IaC drift, least privilege of deploy accounts, staging/prod separation, secure environment injection, config validation, immutable artifacts and safe deploy keys.
- Review edge/serverless/worker runtime compatibility, e.g. forbidden child processes, filesystem persistence and platform-specific constraints.
- Check readiness/health endpoints where relevant, migration/release order, CDN cache invalidation, environment variable naming, fail-safe defaults and rollback mechanisms.
- Assess third-party vendor exposure, region/availability assumptions, quotas, DNS ownership and TLS/certificate renewal monitoring.
- Document explicitly inaccessible provider consoles or policies.

## Authorized remediation instructions

Repair CI syntax, safe permissions, lockfile hygiene, reproducible scripts, dependency upgrades with tests and security benefit, environment validation, pinned action versions, build artifact checks, protected deploy gates and IaC issues as reviewed patches. Avoid infrastructure sprawl. All cloud/account policy writes and deployment require explicit authorization.

## Mandatory verification

Run safe local build/install only with awareness of lifecycle scripts, lint/typecheck/tests, CI config validation, dependency scan, infrastructure plan/diff in non-applying mode (if available), staging deployment rehearsal and artifact hash comparison when supported. Never claim CI green without actual run evidence.

## Approval and non-goals

No remote infrastructure `apply`, DNS edit, account-permission changes, credential rotation, production deployment or destructive resource deletion without authorized owner action. Review third-party action scripts before execution.

## Required phase report

Pipeline and supply-chain inventory, critical findings, permissions review, dependency change list, CI/build evidence, IaC plan only, rollout/rollback notes and approvals.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
