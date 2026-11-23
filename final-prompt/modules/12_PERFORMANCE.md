# FINAL PROMPT / MODULE 12: Performance, Scalability and Cost Discipline

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run for apps with meaningful latency, traffic, expensive computation or runtime cost. Prioritize **measurement before optimization**. Avoid adding caching/queues/parallel execution without an observed or credible bottleneck and correctness plan.

## Scope to discover

Page loads, Core Web Vitals, endpoint latency, queries/indexes, memory, CPU, bundles, cache behavior, network waterfalls, external API quotas, background processing, scaling limits, AI token usage and per-user operational cost.

## Audit checklist (inspect actual project and gather evidence)

- Establish a repeatable baseline (environment, dataset, traffic shape, sample sizes, percentiles) rather than using guesses.
- Profile database hotspots, N+1, missing pagination, expensive joins, external API waterfalls and cold starts.
- Measure client LCP/CLS/INP where tools allow; distinguish lab scores from actual field user data.
- Find memory retention, event listener leaks, uncontrolled worker/task concurrency, retry storms, API cost spikes and large file handling.
- Inspect request budgets, timeouts, backpressure, pool limits, cache invalidation, staleness and cross-user cache isolation.
- Assess deployment/platform quotas, static/dynamic caching tradeoffs, throughput and p95/p99 latency under representative load.
- Identify expensive LLM/agent interactions, repeated context, token runaway, large prompt loops and uncontrolled external paid requests.
- Quantify performance versus correctness/security. Log estimated impact of changes and potential regressions.

## Authorized remediation instructions

Optimize only demonstrated bottlenecks with simple fixes first: index/query corrections, bounded concurrency, pagination, batch calls, caching with correct key/invalidation/tenant scope, media sizing/compression, remove dead bundle weight, targeted memoization, defer noncritical work. Preserve UX and consistency; no premature infrastructure additions.

## Mandatory verification

Run comparable before/after benchmarks, targeted profiling, existing tests/build, load tests only in approved isolated environment and with a strict intensity cap. Include median/p95 measurements when available, cost implications and methodology. If no profiler/load environment, mark improvement estimate UNVERIFIED.

## Approval and non-goals

No unbounded load on live systems, no cost-incurring benchmarking without approval; never optimize by weakening auth, validation, logging, correctness or privacy. No arbitrary performance promises.

## Required phase report

Baseline metrics with provenance; scoped optimizations; before/after measurements; cost accounting; cache correctness tests; regression risks and unknowns.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
