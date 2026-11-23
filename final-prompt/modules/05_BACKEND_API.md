# FINAL PROMPT / MODULE 05: Backend, API and Server-Side Production Audit

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run on any actual server-side code, backend API, server actions, edge functions, middleware, integration or infrastructure runtime. If truly static/no backend, mark NOT_APPLICABLE; never invent a server or database.

## Scope to discover

API endpoints and handlers; server actions; middleware; auth/session/cookies; validators and error shapes; database/ORM; storage/upload; queues/jobs/cron; caching; email/contact/webhooks; vendors; environment/secrets usage; rate limits; server logs; build/deploy; edge/serverless behavior.

## Audit checklist (inspect actual project and gather evidence)

1. **API correctness:** verify status codes, response envelopes, missing/malformed inputs, invalid IDs, empty results, unsupported media types, redirects and error boundaries. Identify uncaught async errors and upstream/storage/database failures.
2. **Validation:** emails, URLs, IDs, slugs, enums, lengths, query params, headers, payload shapes and file metadata. Validate server-side; normalize carefully, never silently corrupt semantic data. Forbid unsafe coercion.
3. **AuthN/AuthZ:** verify route- and resource-level authorization, ownership/tenant boundaries, admin endpoints, session expiry, cookie flags, CSRF where relevant and no unsafe authorization fallback.
4. **Contracts:** align DTOs and versioning with clients; consistent pagination/filter/search/sort; stable error codes; no raw stack traces, SQL, file paths or provider secrets in responses.
5. **Performance:** profile N+1 queries, redundant calls, sequential work, inefficient serialization, unbounded loops, oversized payloads, lack of pagination and blocking I/O; add batching/cache only with correctness and invalidation evidence.
6. **Reliability:** timeouts, backpressure, bounded retry with jitter, idempotency for non-repeatable actions, queue deduplication and outbox/event delivery if applicable; recover from partial failures.
7. **Security/privacy:** secret leaks, insecure redirects/CORS, server-side request forgery, upload size/type/path checks, injection, logs containing secrets, exposed admin/service credentials, weak webhook authenticity.
8. **Database/storage:** read/write authorization, transaction consistency, safe deletion, concurrency, indexes based on measured workload, private URL scoping, retention and missing-record handling.
9. **Email/forms/integrations:** validation, spam/abuse prevention, webhook signature and replay checks, duplicate submits, resend/charge safety, external failures and provider quotas.
10. **Runtime and maintainability:** dead handlers, mock-only production paths, brittle environment assumptions, runtime compatibility, dependency risks, redundant services, untyped assumptions, debug code.
11. **Deployment:** review production environment configs, required variable names (not secret values), serverless/edge limitations, startup/health/readiness behavior, log configuration and routes.
12. **Verification inventory:** existing install/lint/typecheck/unit/integration/build scripts, API negative tests and production-like smoke checks.

## Authorized remediation instructions

Actually repair evidence-backed P0–P2 defects with small diffs: add server-side validation, normalize safe responses, scope queries/updates, guard actions, bound calls/retries, correct status codes, redact logs, add idempotency, fix known broken contracts, remove proven dead code without removing features, optimize measured hot paths, and add tests. Preserve public API behavior where possible; request authorization for breaking API, auth, storage, or infrastructure changes. Do not add a database/queue/cache without need.

## Mandatory verification

Execute available install (only when safe/authorized), lint, typecheck, tests and production build; targeted endpoint tests: missing/malformed/oversized input, invalid auth, unauthorized other-user resources, invalid IDs, upstream timeouts, duplicate webhook, concurrent writes, empty results and storage/database errors. Verify deployments only if accessible/authorized. Record all commands, exit codes, files and fixtures; report production-only checks as UNVERIFIED if not run.

## Approval and non-goals

Do not print env values or test real payment/production mutation with unsafe inputs. No destructive migration, secret rotation, changed live access policy, new vendor, DNS edit or production deploy without explicit approval. Keep data isolation intact.

## Required phase report

Report 1) high-priority backend defects; 2) API/contracts; 3) validation/security; 4) performance; 5) reliability; 6) DB/storage; 7) deployment/runtime; 8) maintainability; 9) changed files; 10) commands/results; 11) remaining risks and manual follow-up.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
