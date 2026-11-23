# FINAL PROMPT / MODULE 11: Universal Architectural Resilience & Recovery Pass

> **Standalone production engineering prompt.** This document is a first-class conditional module in the canonical 25-stage Final Prompt suite. When invoked with `00_MASTER_PROMPT.md`, that master's scope, authority, approval, secret-handling and evidence rules prevail. When used alone, apply the same constraints. The examples are areas of investigation, **not requirements to create components that do not exist**. Do not invent a queue, microservices, persistence tier, circuit breaker, or failover provider just because it appears here.

## THIS IS AN ARCHITECTURAL SAFETY AND RESILIENCE POLISH PASS

Treat this task with the seriousness of a senior reliability engineer, distributed systems architect, security engineer and production maintainer. Inspect the **actual** architecture and its intended behaviors, then find and safely repair the reliability mechanisms that were omitted, left as stubs, incorrectly connected, or never exercised end to end. The goal is not to make a demo look robust: it is to make genuine failures bounded, observable, recoverable, and appropriately contained.

**Not every category below applies.** Apply all *relevant* categories, skip inapplicable ones with a concise reason, and identify additional project-specific failure modes not listed. Preserve working product behavior, original architecture, public contracts, and the owner's cost discipline. Treat intentional denial, fail-closed authorization, experimental isolation and governance blocks as protections rather than defects.

### 1. Establish the actual failure topology and invariants

Before edits, inventory entry points, critical requests, resource-owning components, data stores, third-party dependencies, background work, startup/shutdown ordering, authorization boundaries, user-visible flows and operational sinks. For each important journey, trace trigger → dependencies → side effects → durable state → acknowledgement → recovery.

- Identify the failure domains: browser, network, runtime, service, host, queue, provider, database, user session, deployment, and external integrations **only when present**.
- Distinguish mandatory from optional dependencies and which failures should block, degrade, or remain invisible to users.
- Document critical invariants: no duplicate charge, no double send, no unauthorized use, no loss of accepted work, no false success, no uncontrolled spend, no false recovery.
- Locate existing protections and determine whether they are **actually on the production execution path**, not merely implemented somewhere in the repository.
- Record an evidence-based baseline, changed-file boundaries, realistic failure scenarios, and a risk-ranked action plan. Do not assume a distributed architecture where one does not exist.

### 2. Error classification, propagation, and user-visible truth

Audit exceptions and error results, validation and boundary errors, deadline failures, provider throttling, authorization denials, timeouts, cancellation, process crashes and partial commits. Look for swallowed exceptions, generic success fallbacks, retryable and permanent failures conflated, errors hidden behind UI spinners, logs without correlation, and unbounded console output.

- Use a consistent error taxonomy where justified: retryable/transient, permanent/client, integrity, security/permission, dependency unavailable, deadline/canceled, unknown.
- Propagate failures to the correct owning layer; preserve causal context and machine-readable error codes without leaking secrets or sensitive data.
- Surface truthful user-facing states: pending, completed, explicitly failed, canceled, partially completed or requires intervention.
- Ensure cleanup in `finally`/equivalent, cancellation propagation, no leaked handles, no lost callbacks, no ghost `loading` states.
- Never turn a security refusal into a retry, or turn an unknown result into a success just to smooth the UI.

### 3. Timeouts, deadlines, retries and backoff

For each real remote or fallible boundary, inspect whether timeout and retry policies are missing, duplicated, contradictory or unbounded.

- Establish bounded connection/operation timeouts and, where relevant, one end-to-end request deadline that downstream calls cannot exceed.
- Use **finite** retries only for transient errors that are safe to repeat; use capped exponential backoff with jitter to avoid synchronized retry storms.
- Respect upstream `Retry-After`/rate-limit signals when supported.
- Avoid multiplying retries across layers (e.g. 3 API retries × 3 worker retries × 3 HTTP retries); define one retry owner and an overall attempt budget.
- **Never blindly retry non-idempotent actions** such as payments, emails, entitlements, external writes or irreversible operations; require a verified idempotency key, reconciliation/read-back, or explicit nonretry policy.
- Propagate cancellation when the user leaves, the deadline expires or the task is revoked. Avoid retrying permanent validation, schema, or permission failures.

### 4. Three-state circuit breakers where they earn their keep

Consider a circuit breaker **only** for a dependency where repeated calls during failure can cause cascading latency, resource exhaustion, avoidable spend or provider overload. Do not place a breaker around every function, local calculation, or indispensable fail-closed security decision.

- **CLOSED:** calls flow normally, and failures are measured over an appropriate threshold/window.
- **OPEN:** known-bad calls are rejected quickly; the user or caller receives a truthful unavailable/degraded outcome, not a fake success.
- **HALF_OPEN:** after a bounded cooldown, allow limited probes, then close only after demonstrated recovery; re-open on failure.
- Define which failures count, minimum sample volume, open duration, probe concurrency, state scope (process vs shared), reset rules, and fallback behavior.
- Avoid amplifying traffic when a breaker closes; coordinate with rate limits and retry budgets. Handle process restarts and deploys without assuming breaker state persists unless it actually does.
- Instrument state transitions, denied attempts, and recovery outcomes. Test CLOSED → OPEN → HALF_OPEN → CLOSED and HALF_OPEN → OPEN.

**Never** let an OPEN breaker silently bypass authentication, governance, receipt generation, consistency checks, or required custody/authority decisions. If a mandatory trust dependency is unavailable, fail closed.

### 5. Bulkheads, rate limits, quotas and backpressure

Investigate whether one noisy operation, tenant, request type or dependency can exhaust resources needed by unrelated work.

- Where justified, isolate concurrency pools, queue capacities, worker slots, memory, CPU or connection budgets across important classes of work.
- Apply bounded concurrency and queue length. Define behavior when full: reject, delay, shed optional load, or redirect to a durable queue **only if one already exists or is truly required**.
- Respect vendor API limits and service quotas; use per-actor/per-tenant fairness where applicable rather than one globally shared bottleneck.
- Return accurate throttling results and reasonable retry guidance; protect against queue pileups, starvation, excessive polling and request amplification.
- Where usage drives cost, establish real metering, per-action spend constraints, budget exhaustion behavior, and explicit opt-in for billable work. Never claim hard caps unless enforced by the runtime.
- For autoscaling systems, inspect scaling ceilings, cold-start load, thundering herds, connection pools and downstream capacity. Do not configure autoscaling for an architecture without it.

### 6. Startup order, shutdown, readiness and dependency health

Determine whether this project has long-lived services, workers, schedulers, migrations, browser workers or serverless functions. Only apply boot-order controls that match the actual runtime.

- Map dependencies that must be ready before serving relevant traffic or processing work; distinguish liveness (`process exists`) from readiness (`required dependencies and initialization are usable`).
- Validate configuration and required secrets at the correct boundary without printing values; reject unsafe partial initialization.
- Inspect database migration readiness, compatible schema versions, key/certificate availability and version-pinned packages where relevant.
- Guard against duplicate scheduler registration, overlapping worker starts and premature job consumption.
- On shutdown, stop admitting new work, bound graceful drain, release leases, persist checkpoints, and terminate safely where supported.
- For optional services, degrade visibly and safely instead of blocking unrelated workflows; for security-critical dependencies, preserve fail-closed behavior.

### 7. Crash recovery, checkpoints, idempotency and state restoration

Trace accepted work through process termination, transient dependency failure, network loss and restart. Verify that a crash does not manufacture success, lose acknowledged work, duplicate irreversible side effects or corrupt state.

- Evaluate durable job state, idempotency keys, transactions, atomic transitions, restart checkpoints, outbox/inbox patterns, deduplication, leases, fencing tokens, replay/reconciliation and dead-letter handling **only if applicable**.
- Make acknowledgements reflect durability guarantees. Record what is accepted, in progress, completed, failed and unresolved.
- Verify a restarted worker can distinguish an incomplete operation from an already completed one; require read-back before repeating irreversible external effects.
- Define bounded recovery attempts, poison-job isolation, manual intervention paths, and audit trails. Avoid infinite self-healing loops.
- Test state corruption and partial writes using controlled fixtures. Do not mutate production records or run destructive recovery drills without explicit approval.
- For backups, check actual restore ability and recovery objectives when supported; a backup file alone does not prove recoverability.

### 8. Graceful degradation, fallback and self-healing boundaries

For each actual dependency, specify safe responses to outage, latency, stale data and unavailable network.

- Identify functionality that can continue in read-only, cached, offline, reduced-capability or queued mode without violating freshness, permissions, privacy or integrity.
- Fail closed for access control, provenance/custody, critical authorization, payments/entitlements, and other trust-sensitive operations when the intended verification is unavailable.
- Prefer bounded restarts, reinitialization, retry, lease recovery and safe reconciliation over speculative autonomous repair.
- Require explicit detection, maximum attempts, cooldown, rollback/escape hatch and clear failure disclosure for any auto-recovery behavior.
- Do not make self-healing silently rewrite policy, modify database schema, rotate secrets, create new paid services, or use higher privileges.
- Use fallbacks only if their outputs meet the original contract; disclose stale/approximate/degraded results rather than presenting them as fully verified.

### 9. Health, observability and operational truth

Check the important boundaries for structured logs, error classification, correlation IDs, metrics, traces (where justified), relevant alerts and actionable runbooks.

- Measure rates of failures, retries, timeouts, open breakers, queue backlog, dropped work, throttling, recovery attempts, replay rejections, unhealthy dependencies and spend (where measurable).
- Avoid noisy per-event logging that itself increases cost or exposes personal data, credentials or internal secrets.
- Identify how an operator distinguishes healthy/degraded/blocked/unknown and finds the cause of a failure without production debugging access.
- Alert on material user impact, exhaustion and persistent stuck states; prefer actionable thresholds to alert spam.
- Do not claim an external alert fired or a provider is healthy unless actually observed; static code cannot prove live operations.

### 10. Fault-injection and adversarial verification

Build tests that challenge resilience, not merely normal responses. Use isolated mocks, disposable infrastructure or authorized staging. Never perform uncontrolled chaos or load tests against production or third parties.

Relevant fixtures may include:

1. Dependency stalls beyond deadline; requests terminate and cleanup resources.
2. Temporary 429/503 with `Retry-After`; retries remain bounded and respect cost/attempt limits.
3. Permanent 400/403/validation failures; no retry and no authority bypass.
4. CLOSED → OPEN → HALF_OPEN → CLOSED and HALF_OPEN → OPEN for an applicable breaker.
5. One resource-heavy task; unrelated critical work remains responsive where bulkheads exist.
6. Full queues; jobs are rejected or durably handled without ghost success.
7. Worker crash after side effect but before acknowledgement; read-back prevents duplicate effect.
8. Restart after checkpoint; state resumes exactly once or honestly reports uncertainty.
9. Database unavailable during startup; readiness and fail-closed state behave correctly.
10. Cancellation midflight; downstream work stops or completes with explicit status.
11. Optional service outage; only permitted capabilities degrade.
12. Repeated auto-recovery failure; attempts stop safely and alert rather than loop forever.

Use tests appropriate to the project. Record the exact environment, commits, commands, assertions and observed results. A successful unit test cannot establish full production reliability.

### 11. Gap ledger, remediation order and delivery

For each finding, record a stable ID, component, supported expected behavior, observed failure, confidence, likelihood, impact, severity P0–P3, existing protection, proposed smallest safe fix, permissions, tests, and outcome. Classify `CONFIRMED`, `HYPOTHESIS`, `NOT_APPLICABLE`, `BLOCKED`, `VERIFIED_CLOSED` or `UNVERIFIED` accurately.

Prioritize: **(1)** security, integrity or money-at-risk; **(2)** core user journeys that cannot recover; **(3)** cascading failure and unbounded retries; **(4)** worker/data durability; **(5)** rate limits and load shedding; **(6)** lower-impact polish. Prefer surgical wiring changes and standard existing utilities over new libraries or overgeneralized frameworks. Require owner authorization for risky migrations, service reconfiguration, new vendor cost, rate-limit/permission policy changes, live recovery drills or deployment.

Verify fixed paths *across component boundaries*. A breaker existing in source but unused in live calls, a retry helper nobody invokes, or an unregistered recovery worker is **not closed**. Re-run regression after changes. Do not weaken test assertions, erase failures, alter preflight evidence, or bypass a blocker to force a green verdict.

### 12. Multi-turn execution and final report

For one workflow or small project, complete the relevant pass in one run. For an entire website/app, cover the **actual** critical paths and subsystems systematically, continuing across multiple turns if necessary. Persist a source-grounded checkpoint of visited paths, baseline commit, completed fixes, tests, blocked changes, remaining work and budget. Resume from that checkpoint after rechecking code changes; do not promise unattended future work without scheduling support.

Final output must include:

- Actual scope and failure-domain map (or a concise narrative if no diagram is needed).
- Findings ledger, including **negative findings** showing where protections already exist and are adequate.
- Specific modifications and how they address the observed failure.
- Tests performed, exact results, skipped checks and environments.
- Remaining risks, intentional design blocks, approvals and rollback approach.
- A clear outcome: **verified within tested scope**, **implemented but unverified**, **blocked**, **accepted risk by authorized owner**, or **not applicable**.

**Final principle: Do not add resilience theater.** The finished system should contain the right failures, recover only when safe, and preserve truth under stress. Your goal is not to install every reliability pattern. Your goal is to eliminate the real failure modes of this actual product, with the least complexity necessary.

**BUILT TO LAST.**
