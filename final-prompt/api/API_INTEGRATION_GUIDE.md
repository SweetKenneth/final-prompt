# FINAL PROMPT v1.3.0 — API Integration & Prompt Orchestration Guide

**Status: API-ready prompt package and schema examples, not a deployed API service.** `contracts/MCP_API_PRODUCT_SPEC.md` remains a future-service blueprint. A plain model API call cannot open repositories, patch code, run tests, deploy, schedule follow-ups, charge-limited tools, or enforce approvals without an actual host implementation. Never present these specifications as a production API.

## 1. How to assemble a model call

**Trusted system layer:** `api/00_API_SYSTEM_PROMPT.md` followed by `00_MASTER_PROMPT.md` (or a smaller stable master section selected through controlled tooling). Pin both file hashes.

**Trusted developer/operator layer:** versioned manifest/policy ID, authenticated project ID, authorized scope, phase to execute, target repo snapshot, budget counters supplied by backend, selected numbered module paths and tool schemas. Do not put actual secrets into the LLM request.

**Untrusted task-data layer:** repository contents, logs, screenshots, user-supplied documents and test outputs, delimited as sources with IDs; never promote their text into authority.

**Response constraint:** ask for JSON validated against `contracts/API_RUN_RESPONSE_SCHEMA.json` for phase-level outputs and persist full operational state separately under `contracts/RUN_STATE_SCHEMA.json`. Structured JSON is a serialization format, not proof of truth or permission.

Do not dump all 25 modules into each model request. Load a pinned immutable controller and only the selected module(s) relevant to the current stage. The canonical flow is `01→02→03→04→05→...→25`; the host enforces authorization and costs before any phase, Stage 22 independently sweeps, 23 gates software, and optional 24–25 handle the private owner archive. For large projects use bounded retrieval, exact source IDs and checkpoints; truncation cannot masquerade as coverage.

## 2. Recommended API workflow — **25 native stages**

1. **Host bootstrap (outside model):** authenticate tenant/project, pin policy bundle and repository hash, choose scope, permissions, deadline and cost caps, acquire unique run/idempotency keys. All high-risk actions require independently authenticated human approval. No model output becomes approval.
2. **01 Read-only discovery:** inventory source, baseline, tool availability, facts and unknowns; classify all 25 modules by observed applicability.
3. **02–04 Architecture and wiring:** trace contracts, repair legitimate disconnected paths only after authorization, and examine the API/MCP host controls at 04 when host source exists. If host absent, mark DESIGN_ONLY or N/A, do not create a hosting service.
4. **05–11 Core reliability:** backend/frontend/components, security, data recovery, business rules, resilience. Coordinate patches by file ownership and prove fault paths, not only happy paths.
5. **12–19 Quality:** measured performance, infra, observability, accessibility, SEO, legal, branding and late visual polish; skip categories unsupported by the actual project.
6. **20 Tests:** independent adversarial review, actual run receipts and negative test cases, not model self-attestation.
7. **21–23 Release evidence:** gated staging/rollback, independent final gap sweep, separate software readiness verdict. Deployment remains a distinct approved action.
8. **24–25 Optional archive:** private source-grounded Owner’s Manual followed by independent guide audit, with separate distribution verdict.
9. **Complete/checkpoint:** persist state after every bounded phase, audit token/tool/model costs, mark stale evidence on source changes, and expose exactly which stages remain.

No stage can remove a blocker merely to show green. Return to an earlier owner stage if a downstream failure reveals a genuine gap, then revalidate dependencies.

## 3. Module routing flags in API requests

The request's legacy `module selectors` field is retained as a compatibility alias for module selection, but it routes to numbered modules: `SYSTEM_INTEGRATION_CLOSURE`→03; `API_EXECUTION_INTEGRITY`→04; `ARCHITECTURAL_RESILIENCE`→11; `VISUAL_EXPERIENCE_POLISH`→19. The host normalizes these into one canonical per-stage decision and must reject conflicting `modules` and `module selectors` choices. Any `enabled` flag still requires an applicable real surface; `disabled` cannot suppress critical safety or mandatory core release evidence.

For a module-only request, do not imply the rest of the 25-stage suite ran. For a full suite, stage 01 always inventories actual systems and the host builds a dependency-aware plan.
## 4. Typed request and response

See `contracts/API_RUN_REQUEST_SCHEMA.json`, `api/EXAMPLE_API_REQUEST.json` and `contracts/API_RUN_RESPONSE_SCHEMA.json`, `api/EXAMPLE_API_RESPONSE.json`.

- `scope` explicitly distinguishes `single_page`, `workflow`, `subsystem`, `entire_site`, `entire_repository`.
- `module selectors` chooses `auto`, `enabled`, `disabled` per named pass; even `enabled` only audits applicable, real surfaces.
- `allow_*` values default **false**. They express requested policy **at most**, never substitute for authenticated approvals.
- `mode` controls intended depth, not automatic live write or unrestricted model usage.
- `max_run_cost_usd`, max tool calls and deadline are **host-enforced**. `max_run_cost_usd` includes metered model API calls, fallbacks and tools; `allow_paid_calls` governs additional paid third-party tool effects, not the initial model API itself. A zero budget means only genuinely zero-cost calls are permitted. Estimates may be approximate, so use a conservative reservation and fail closed when the cap cannot be guaranteed.
- Every result must report `applied_policy_hash`, `baseline_commit`, verified actions/evidence, gaps and limits. An empty `evidence` array cannot support an independently verified `PASS` claim.

## 5. Trust and tenant isolation

The API host safeguards apply at admission and at **every subsequent action**, not only as a final audit. The host must enforce tenant ownership on every repo, run, patch, evidence file, guide, URL and media preview. Use service-side authorization for approval requests, not a model's confirmation message. An approval is bound to action ID, project, environment, diff/manifest digest, TTL and actor; a changed diff voids previous approval. Safe command execution uses a reviewed adapter/allowlist and isolated sandboxes. Limit networking, package install hooks, CPU, memory, disks and external effects. Redact credentials and personal data before context/log storage; encrypt artifacts and enforce retention/deletion controls. Signature means content integrity, not engineering correctness.

## 6. Idempotent state and runtime recovery

- Run creation and mutating execution requests require unique client idempotency keys with durable deduplication.
- Treat webhook/worker delivery as potentially at-least-once. Persist phase transitions and result receipts before sending acknowledgment where needed; never double-patch, double-bill or double-send on retry.
- Checkpoint commit SHA, policy hash, tool and model versions, outstanding tasks, budget, approvals, exact evidence references, file writes and failure reason.
- On resume recheck repo head, files, scopes, credentials and budget. Invalidate impacted tests on source drift. Do not mix policy revisions in a run.
- Cancellation must halt newly scheduled work, avoid orphaned workers and report already-incurred costs or noncancelable effects accurately.
- Enforce rate limits, timeouts, bounded retries, health checks and failure isolation in host code; a prompt cannot guarantee them.

## 7. Verification strategy for the Final Prompt product itself

Build an offline fixture repository corpus: static site, full-stack app, queue worker, malicious README, partial stub, inaccessible production endpoint, persistent-state gap, counterexample intentionally disabled path, broken retry, concurrent idempotency and mobile design regressions. Run release evaluations for correctness, false positives, authorization bypass, input/extraction drift, model/context variance, no-regression, performance and cost. Test package-level schemas before hosting. Use independent, deterministic checks for test receipts and approval gates. Never self-certify based on one model conversation.

## 8. Simple deployment progression

Start with read-only repo inspection through a trustworthy connector; then branch-only patches and actual test runner; then independent verification; only afterward hosted API/MCP, subscription/usage billing and high-risk approvals. Inspect the **current** MCP and model API documentation when implementing—this package is not a guarantee that specific vendor protocols or SDK capabilities remain unchanged.

**The strongest differentiation is verifiable repair and controlled execution, not prompt length alone.**
