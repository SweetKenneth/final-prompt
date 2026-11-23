# FINAL PROMPT / MODULE 10: Business Logic, Payments, Entitlements and Economic Abuse

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run if the project supports business-critical operations such as purchases, billing, access tiers, licenses, credits, transfers, submissions, auctions, inventory, scheduling, financial transactions or permission-based actions. Skip absent systems; do not add commerce capabilities.

## Scope to discover

Money and units; pricing/tax/currency rules; offers/subscriptions/plans/trials/refunds; quota/credits; authentication and entitlement decisions; idempotent commands; third-party provider callbacks; high-value state machines; inventory; order lifecycle; audit events; abuse/operational cost.

## Audit checklist (inspect actual project and gather evidence)

- Inventory domain invariants: who can perform which action, under which payment/state, in which currency/unit, and what is irreversible.
- Enumerate state machines (draft→pending→paid→fulfilled→refunded, trial→active→cancelled, etc.) **only from actual code**, and illegal transitions.
- Evaluate rounding/decimal treatment, timezone, race conditions, retries, duplication, parallel purchases, partial refunds, grace periods, proration and provider reconciling.
- Verify client/server price separation and that client can never decide authoritative amounts, discounts, roles, paid access or quotas.
- Check webhook authenticity, replay protection, event ordering, idempotency keys, exactly-once *business effects* rather than exactly-once message assumptions.
- Audit free trials, usage credits, zero/negative quantity, cancellation, downgrades, expiration, quota resets, account sharing and bypasses.
- Verify financial and security logging is sufficient for audit without exposing payment details or PII.
- Test provider outage, queue replay, double fulfillment, duplicate charge prevention and compensation strategy in a sandbox.
- Evaluate cost abuse: unbounded provider calls, malicious volume, quota synchronization and runaway AI token consumption.

## Authorized remediation instructions

Add server-side authority checks, stable idempotency keys, transaction boundaries, sane rounding and negative/edge-case guards, out-of-order webhook handling, reconciliation checks, bounded usage and transparent failure feedback. Keep prices/terms unchanged without explicit business owner approval. Use provider sandbox/test mode, not real charges.

## Mandatory verification

Run invariant/state transition property or table tests, concurrency/duplicate event fixtures, provider sandbox payment and refund flows if available, entitlement bypass attempts, account boundary checks, time boundary tests and reconciliation evidence. Clearly separate simulated from live outcome.

## Approval and non-goals

Never charge, refund, initiate transfers, alter live prices/entitlements, send invoices or touch real customer funds without explicit approval. Do not create tax/legal claims. Never claim financial correctness based on mocked happy path only.

## Required phase report

Business invariant list, state transition matrix, payment/entitlement findings, verified sandbox cases, changed files, reconciliation gaps, residual potential losses and approvals.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
