# Founder’s Guide — Source, Privacy, Output & QA Contract (v1.1)

**Status:** Operative specification for Modules 24–25. The published MCP/API remains a blueprint. The software's readiness verdict and the owner's guide's distribution verdict are **different outcomes**.

## Canonical authority hierarchy

1. Runtime observation and valid instrumented test receipts, **limited to measured environment and date**.
2. Version-pinned repository content, configuration, migrations, build/test output, architecture decision records.
3. Verified legal/account/provider records, when authorized and available (never embed secrets).
4. Operator-supplied project facts, tagged `USER_REPORTED` until independently established.
5. Model-derived inferences, transparent with their underlying assumptions.
6. Planned product documents, not evidence that a feature is implemented.

Conflicts are recorded; source priority cannot magically resolve incompatible claims. No source type establishes what an inaccessible production environment is doing.

## Source register — minimum fields

| Field | Meaning |
|---|---|
| `source_id` | Stable within guide revision, e.g. `SRC-001` |
| `source_type` | `repository`, `test_receipt`, `runtime`, `owner_statement`, `design_doc`, `external_research`, `legal_record`, `other` |
| `locator` | Safe repo-relative path+line range, approved link or evidence artifact ID; no privileged direct URL in public export |
| `revision` | Commit/hash/version when available |
| `as_of` | Source observation time (UTC where possible) |
| `environment` | local, staging, production, not_applicable, or unknown |
| `authority` | Reason for the credibility/limits |
| `classification` | PUBLIC, INTERNAL, CONFIDENTIAL, RESTRICTED |
| `status` | available, outdated, not_accessible, conflicting, needs_validation |

## Claim ledger — minimum fields

`claim_id`, `section`, `claim_text`, `status`, `source_ids[]`, `as_of`, `scope`, `confidence_basis`, `contradictions[]`, `next_verification`. Major numeric/ownership/security/deployment facts always get an explicit status. If a paragraph contains both confirmed and speculative parts, split claims.

## Standard deliverable tree

```text
founder_guide/
  OWNERS_MANUAL.md
  OWNERS_MANUAL.html
  OWNERS_MANUAL.pdf             # only if actually rendered/verified
  SOURCE_REGISTER.md
  CLAIM_LEDGER.md
  OPEN_QUESTIONS.md
  ARCHITECTURE_DIAGRAMS.md
  CONTINUITY_RUNBOOK.md
  DISCLOSURE_MATRIX.md
  GUIDE_AUDIT_REPORT.md
  GUIDE_MANIFEST.json
```

Contents can be combined only if source traceability and confidentiality survive. If an artifact is absent, the manifest must say so: never include a fictional pathname/link.

## Required metadata and snapshots

- Project name and canonical ID, allowed audience, confidentiality, preparation timestamp.
- Run ID, audited commit, patch/release commit, policy bundle hash, software readiness verdict, guide distribution verdict.
- Source scope limitations and missing provider access.
- Tool/export evidence; revision and content hash for each file; next review trigger (major release, security incident, infrastructure migration, founder request).

## Disclosure and privacy matrix

| Class | Owner private edition | Sanitized buyer edition | Public overview |
|---|---|---|---|
| PUBLIC | permitted | permitted | permitted |
| INTERNAL | permitted | after owner approval | after redaction/approval |
| CONFIDENTIAL | permitted with authorized access | redacted unless explicitly approved | prohibited by default |
| RESTRICTED | safe references only | exclude | exclude |

The private manual is **not** a reason to store raw secrets. Treat customer data, private repository source, vulnerability reports, internal API endpoint inventory and inherited legal arrangements as confidential unless authorized otherwise. All uploads/commits/exports are explicit side effects that require destination approval.

## Owner identity and rights

- For Final Prompt itself, metadata is in `FINAL_PROMPT_FOUNDER_METADATA.md`; source status is **owner-supplied, needs reconfirmation before public distribution**.
- For any other project, never use Final Prompt's founder identity. Read project-specific identity from verified authorized sources and obtain confirmation if disputed.
- Attribute third-party technology and licenses accurately. Copyright and IP ownership may require legal review and cannot be inferred from a repository name or website footer.
- Distinguish authorship, ownership, domain registration, trademarks, licensing rights and transferability.

## Required presentation QA

- Markdown/HTML: linked TOC anchors validated; semantic heading hierarchy; no broken internal links; tables scroll/wrap on mobile; accessible text and contrast; print CSS; no externally loaded tracking code.
- PDF: actual generation and inspection, including representative pages, diagram clipping, selectable text, metadata and page count. If not checked, mark `PDF_UNVERIFIED` even when a file exists.
- Link check status must specify internal/external scope; offline internal checks do not establish external URL health.
- Source register and claim ledger cross-references resolve; stale or broken provenance references are blocking documentation defects.

## Quality rubric (rated only with check evidence)

Use **0–4 per dimension** with supporting observations, otherwise `UNVERIFIED`:
0 absent/false; 1 major gaps; 2 partial; 3 solid with minor limitations; 4 verified strong. Dimensions: truthfulness, coverage, provenance, technical architecture, practical continuity, strategy, valuation rigor, security/disclosure, mobile/print design, acquisition utility. Do not average `UNVERIFIED` into a numeric total or label a score a legal/compliance certification.

## Final documentation statuses

- `PRIVATE_READY`: source traceability and private guide completeness pass; no publication implied.
- `REQUIRES_OWNER_CONFIRMATION`: consequential unverified identity, legal/economic facts, or release disclosures.
- `BLOCKED_FOR_DISTRIBUTION`: leaked restricted information, unresolved material factual errors or unauthorized publication destination.
- `PARTIAL_ARCHIVE`: source/tool/budget constraints prevent complete outputs.

## Failure and resume contract

If interrupted, checkpoint completed sections, source IDs, pending claims, last rendered artifact, pending approval, actual costs, and next exact operation. On resume, compare project commit and guide manifest; invalidate impacted claims and diagrams. Reopen documentation QA when relevant software changes invalidate evidence.
