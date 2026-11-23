# FINAL PROMPT MCP/API — Product Architecture v1.1 (blueprint)

**Status:** Design contract only. This package does not implement or deploy a server or OAuth provider. The product should make the proprietary policy system available as a licensed service **without distributing the full private prompt library to customers**.

## Product surfaces

1. **REST API** for repository intake, scoped audit runs, checkpoints, approvals, artifacts, billing usage and reporting.
2. **Remote MCP server** as a thin adapter allowing compatible coding agents to call bounded tools and retrieve results. Match negotiated protocol support to the official **2026-07-28** MCP release (stateless core; app-level explicit run handles; task extension where supported); support earlier MCP protocol versions only through tested compatibility shims.
3. **Optional dashboard** for approvals, evidence, diff review and billing. Do not build the dashboard before validating the engine with actual repositories.
4. **Private FPL interpreter + rule registry** controlled and versioned by service operator. Never rely on hiding a DSL syntax as an IP protection strategy.
5. **Isolated sandbox workers** with network and filesystem restrictions, per-run quotas and ephemeral credentials; no auto-push to customer main branch.
6. **Independent verification workers** that can execute tests and challenge fixes; produce immutable or tamper-evident receipts.

## High-level flow

`MCP/REST client → Auth + tenant policy → Run scheduler → Repository snapshot/worktree → Gap scanner → FPL policy selector → Targeted patch runner → Isolated verifier → Evidence ledger → Approval gate → Readiness report`

**Core constraint:** A remote MCP tool cannot magically edit a local repository unless it has a secure integration/sandbox or the local client applies proposed patches. Choose explicit mode:

- `hosted_snapshot`: customer grants a scoped repo connection, engine clones to isolated storage and proposes a PR/patch (never live deploy by default).
- `local_patch`: client sends limited file context and applies server-generated patch only after verifying hashes and user approval; source content leaves client, so disclose data-handling policy.
- `read_only_api`: metadata or uploaded source/archive analyzed without write authority; remediation returned as proposals.

## MCP tools (conceptual tool names and input/output semantics)

| Tool | Input | Output | Side effects |
|---|---|---|---|
| `fp.inspect` | repo_ref, scope, depth | run_id, snapshot_ref, capability map, findings preview | Read-only snapshot/import with permission |
| `fp.plan` | run_id, modules, budget cap | dependency graph, tasks, price estimate, approval requests | Read-only plan |
| `fp.execute` | run_id, authorized task IDs | patch refs, test queue, cost ledger, checkpoint | Sandboxed code edits only |
| `fp.verify` | run_id, commit/patch refs, tests | test receipts, failures, coverage and limits | Test work in isolated env |
| `fp.report` | run_id | signed/tamper-evident report refs, verdict | Report generation |
| `fp.approve` | run_id, requested action ID, confirmed scope | authorization record, expiration | Approval capture; **real authenticated user channel required** |
| `fp.status` | run_id | state, spending, blockers, checkpoint | Read-only |
| `fp.cancel` | run_id | canceled state; safe cleanup | Cancel bounded work |

A model calling `fp.approve` must **not** count as human approval. The API must require an independently authenticated human action with scope/expiry and CSRF protection as applicable.

## Confidential Founder’s Guide MCP tools (design only)

| Tool | Permission and input | Output | Hard privacy boundary |
|---|---|---|---|
| `fp.generate_guide` | Authorized owner `run_id`, edition, privacy class, destination and explicit action approval | Private guide job, artifacts/manifest hashes, source traceability | No implicit publishing or public link; no customer secrets in tool summaries |
| `fp.audit_guide` | Owner-approved guide revision and source access | Claim discrepancies, QA results, corrected private artifacts, distribution verdict | Never expose unreleased content to a generic agent session |
| `fp.guide_status` | Owner-scoped run and artifact IDs | Phase/status, hashes, missing sources, safe preview metadata | Scope every response to authenticated tenant and resource |

Guide output storage requires separate access control from routine software reports, short-lived retrieval URLs where needed, tenant isolation, encryption, retention/deletion support, no default public indexing, auditable access and explicit edition approval. Validate downloads and post-export redactions, including PDF metadata, diagrams and embedded images. The plan's signed artifact manifest proves integrity only. A customer can disable guide generation entirely without changing the software verdict.

## Suggested REST endpoints (versioned)

- `POST /v1/runs` create a scoped run; idempotency required.
- `GET /v1/runs/{run_id}` status and metering.
- `GET /v1/runs/{run_id}/plan` chosen modules, estimated spend and approvals.
- `POST /v1/runs/{run_id}/execute` schedule approved branch-only phases.
- `POST /v1/runs/{run_id}/verify` schedule verified test run; bounded.
- `GET /v1/runs/{run_id}/findings` paginated findings and artifacts.
- `GET /v1/runs/{run_id}/report` report and evidence manifest.
- `POST /v1/runs/{run_id}/cancel` cancel with safe cleanup.
- `POST /v1/approvals/{action_id}/decision` authenticated human approval/deny, one-time and expiry.
- `POST /v1/runs/{run_id}/guides` explicitly authorized private generation.
- `POST /v1/runs/{run_id}/guides/{guide_id}/audit` independent guide quality and disclosure audit.
- `GET /v1/runs/{run_id}/guides/{guide_id}` owner-scoped status/manifest, not unprotected document bytes.
- `GET /v1/usage` scoped usage; `POST /v1/webhooks` provider event intake with signatures.

All endpoints enforce tenant ownership, scopes, input schemas, idempotency, audit trail, rate limits and safe error envelopes. Return consistent error classes such as `AUTH_REQUIRED`, `SCOPE_DENIED`, `APPROVAL_REQUIRED`, `BUDGET_EXHAUSTED`, `RUN_CONFLICT`, `INVALID_ARTIFACT`, `CHECK_UNVERIFIED`, `WORKER_UNAVAILABLE`.

## Example run request (illustrative)

```json
{
  "project_id": "prj_example",
  "repo_ref": "github:org/repo#staging",
  "target_environment": "staging",
  "mode": "deep",
  "modules": ["gap_analysis", "backend", "frontend", "security", "test_adversarial", "release_gate"],
  "max_run_cost_usd": 100,
  "allow_paid_calls": false,
  "allow_production_deploy": false,
  "allow_full_rebrand": false,
  "allow_legal_publication": false,
  "allow_production_data_access": false
}
```

## Authentication and authorization

- Follow the MCP **2026-07-28** transport/authorization specification if targeting that version, including token audience/resource validation and issuer protection; do not recycle credential handling guidance that was superseded. Negotiate compatibility for older clients explicitly.
- OAuth/OIDC or equivalent client auth, MFA for sensitive operator actions, scoped repo access and per-project entitlements.
- Explicit separate human approval for account-level or production-risk actions; apply approval to exact project, action, diff hash, environment and expiry.
- Separate service keys from customer repo tokens and test-provider credentials. Rotate and revoke. Never pass upstream access tokens through to other recipients.
- Tenant-isolated worker/network/filesystem/storage/logs; no cross-tenant cache or artifact reuse.
- Protect against prompt injection by treating repository files and tool output as untrusted **data**, not instructions.
- Use envelope encryption and configured retention/deletion policies; do not train on customer code without explicit permitted agreement.

## Pricing / cost accounting proposal

Meter actual provider usage, CPU, memory, storage, network and verification time where measurable. Show estimated cost before start, actual metered spend, external provider charges and a hard stop that the backend enforces. If metering precision insufficient, enforce quotas by wall time/tool-call count and describe that limitation. Allow subscription credit tiers and per-project one-time hardened runs; don't advertise unlimited audits before load/cost testing.

## Execution lifecycle

`CREATED → INVENTORY → PLAN_READY → (APPROVAL_REQUIRED | RUNNING) → VERIFYING → (PAUSED | COMPLETED | BLOCKED | FAILED | CANCELED)`.

Persist `run_id`, repo commit, policy bundle hash, selected module IDs, idempotency key, task DAG, evidence and cost ledger. Resume only after revalidating repo head and permissions; if code diverged, rebaseline affected checks. Task retries must be bounded and safe.

## Release artifact

Return exact report, patch/PR links, signed receipt of policy bundle hash + commit hash + test artifact digests, unresolved risk list, evidence provenance and unverified scope. A cryptographic signature proves integrity/issuer of the report, **not** that the software is perfectly secure or compliant.

## Commercial MVP milestones

1. Test on 3 owned repositories with diverse stacks and reproduce baseline issues.
2. Implement read-only inventory, module selection, findings schema, and tracked policy version.
3. Add safe branch-only patch runner, diff review and real executed tests.
4. Add independent verification, tamper-evident ledger, budget enforcement and approvals.
5. Expose REST, then MCP tools with tested auth and client compatibility.
6. Add billing/dashboard only after measuring per-project compute cost and repair quality.

## Recommended references

- MCP 2026-07-28: https://blog.modelcontextprotocol.io/posts/2026-07-28/
- MCP SDK 2026-07-28 support: https://ts.sdk.modelcontextprotocol.io/v2/migration/support-2026-07-28
- NSA security guidance for MCP: https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/


## Private founder archives (proposed extension)

- `fp.guide.generate` accepts `run_id`, project-specific owner metadata reference, approved private destination, edition, cost cap and source permission scope. It must not emit sensitive text through public tool descriptions or indiscriminate logs.
- `fp.guide.audit` runs independent claim/evidence/redaction, continuity and Markdown/HTML/PDF inspection checks and produces a distinct documentation verdict.
- `GET /v1/runs/{run_id}/guides` and `POST /v1/runs/{run_id}/guides` are **design suggestions**, not implemented routes. Limit download to authorized project owner/collaborators, provide audit logs, signed expiring access, deletion/export controls and retention policy.
- A guide `PRIVATE_READY` never means it is permitted to be indexed, published or transferred. The service must block public publishing unless audience, redaction matrix and exact destination are approved by an authenticated human.
- Outputs are timestamped repository snapshots; later commits or releases can render architecture and valuation observations stale. Provide a guide-refresh workflow with incremental invalidation and a bounded fee, not automatic publication.
- Version-protect and tenant-isolate claim ledger, report files, diagrams, temporary renders and PDFs; no customer secrets in telemetry.

## Native resilience stage 11 (migrated from v1.1.1 optional pass)

The package includes `modules/11_ARCHITECTURAL_RESILIENCE.md` as native stage 11, selected when resilience is applicable. A future MCP service would need to model this as a separately authorized, budgeted task set with distinct failure-path findings, verified evidence and approval gates; **there is no implemented resilience engine or corresponding live MCP endpoint in this package**.
