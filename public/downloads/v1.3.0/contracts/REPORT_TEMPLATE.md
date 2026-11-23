# FINAL PROMPT — Evidence-Based Readiness Dossier Template

> **Disclaimer:** Only fill this template using actual observations and tool results. Do not insert fabricated example successes. Report must specify target environment; readiness is scoped, not a security or legal certification.

## Cover

- Product / project / canonical repo:
- `run_id`:
- Report version and UTC generation time:
- Baseline commit / final commit / policy bundle hash:
- Target environment(s) and access boundaries:
- Operator, reviewer, approved scope and budget:
- Verdict: `BLOCK` / `HUMAN REVIEW REQUIRED` / `SHIP (verified scope only)`
- **Reason for verdict in 1–3 sentences:**

## Executive summary

What the software does; high-impact defects fixed; important improvements; what was not tested; production evidence limits. Avoid absolute claims.

## Surface and applicability

| Module | Applicable? | Status | Evidence ref | Reason if N/A/UNVERIFIED |
|---|---|---|---|---|
| 01 Discovery/gaps | | | | |
| 02 Architecture/contracts | | | | |
| 03 Backend/API | | | | |
| 04 Frontend | | | | |
| 05 Components | | | | |
| 06 Security | | | | |
| 07 Data/recovery | | | | |
| 08 Business/payments | | | | |
| 09 Performance | | | | |
| 10 Infrastructure/CI/CD | | | | |
| 11 Observability | | | | |
| 12 Accessibility | | | | |
| 13 SEO | | | | |
| 14 Legal/governance | | | | |
| 15 Branding | | | | |
| 16 Adversarial verification | | | | |
| 17 Deployment/rollback | | | | |
| 18 Final gap sweep | | | | |
| 19 Release gate | | | | |
| 20 Founder’s Owner Manual | | | | |
| 21 Independent guide audit | | | | |
| 20 Founder’s Guide (archival mode) | | | | |
| 21 Guide truth/QA audit (archival mode) | | | | |

## Prioritized finding register

| ID | Severity | Status | Location | Impact / reproduction | Evidence ref | Patch ref | Verified? | Owner | Deadline |
|---|---|---|---|---|---|---|---|---|---|

Record baseline count and final count of P0/P1/P2/P3, but **do not infer that zero findings means zero risk**.

## Changes and rationale

For every change: file, old behavior, corrected behavior, root cause, owner module, diff/commit, test evidence and known side effects. Include **complete** changed-file list.

## Test and evidence ledger

| Check ID | Command/test or observation | Tool/environment | UTC time | Revision | Result (`PASS/FAIL/UNVERIFIED`) | Evidence hash/ref |
|---|---|---|---|---|---|---|

List tests **not run**, skipped, flaky, blocked and reasons separately. Distinguish local tests from deployed URL checks.

## Security / privacy / legal / cost / SEO / brand assessments

- Asset/threat boundary analysis and remaining exposures:
- Access-control negative tests:
- Backup and restore evidence, RPO/RTO:
- Business-critical/payment invariant checks:
- Dependency and license status:
- SEO/robots/sitemap/metadata checks (if public):
- Legal policy drafts vs published/approved state:
- Brand audit vs approved full rebrand state:
- Infrastructure/CI/monitoring/runbooks:
- Runtime and model/tool usage/cost:

## Approvals and accepted risk

| Action / finding | Specific scope | Authenticated approver | Approved or denied | UTC time | Expiry | Linked evidence |
|---|---|---|---|---|---|---|

No blanket approvals, no agent self-approval. `ACCEPTED_RISK` never appears as PASS.

## Rollback and release

- Patch/PR/commit and deployment status (not deployed / staging / production / observed):
- Preconditions and backup refs:
- Exact rollback steps in allowed environment:
- Known irreversible changes:
- Monitoring triggers and abort criteria:
- Human on-call/owner:

## Final 20-category blind-spot sweep

For each category: baseline status → final status, new evidence, residual unknown, owner. Include all 20 categories from module 1 even when N/A.

## Final verdict and next steps

- Verdict:
- Specific blocking failed gates or missing evidence:
- Residual risk and accepted exceptions:
- What remains manual and who owns it:
- Next phase/continuation command and checkpoint:
- Scope limitation: This report reflects only the examined repository revision, tools, data and environments; it is not a guarantee of secure, error-free or legally compliant software.


## Separate documentation outcome (archival engagements only)

Do not confuse software release and private documentation readiness. Provide document edition/audience and approved destination, guide source scope, produced files, source/claim-ledger reference, PDF actual export/inspection status, guide correction log, secrecy/redaction tests, outstanding owner confirmations and `PRIVATE_READY / REQUIRES_OWNER_CONFIRMATION / BLOCKED_FOR_DISTRIBUTION / PARTIAL_ARCHIVE`. Use `contracts/FOUNDER_GUIDE_REPORT_TEMPLATE.md`.

## Final private Owner’s Manual / documentation outcome (if authorized)

- Manual generator state (`20`): `PASS` / `PARTIAL` / `BLOCKED` / `NOT_APPLICABLE`, with reason and source scope.
- Independent guide audit (`21`): revision, evidence sources rechecked, actual HTML/PDF render evidence and any remaining discrepancies.
- Documentation distribution verdict: `PRIVATE_READY`, `REQUIRES_OWNER_CONFIRMATION`, `BLOCKED_FOR_DISTRIBUTION`, `PARTIAL_ARCHIVE` or `SKIPPED`.
- Confidentiality and destination: owner-private by default; any buyer/public edition requires **separately approved** disclosure/redaction.
- Artifact paths and hashes: list only files actually generated and verifiably present. Distinguish real PDF from PDF-ready HTML.
- Project founder identity: actual verified/owner-confirmed project identity, never automatically the Final Prompt creator.

**The software SHIP/BLOCK verdict is independent of the documentation verdict.** See `contracts/FOUNDER_GUIDE_REPORT_TEMPLATE.md`.
