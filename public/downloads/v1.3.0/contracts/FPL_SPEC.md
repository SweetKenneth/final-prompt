# FPL — Final Prompt Language, version 0.2 (proposed internal DSL)

**Status:** Product design specification, not an implemented interpreter or security boundary. FPL is a declarative control/rule format for the Final Prompt service. It is **not** an LLM-obfuscation scheme, a secret language that prevents copying, or a substitute for server-side policy enforcement. The useful intellectual property lives in private policies, orchestration, verified repairs, rule evaluation and accumulated evidence.

## Goals

- Versioned, auditable rules with unambiguous applicability, authority, resource limits, required evidence and pass/fail outcomes.
- Express a phased work graph, not arbitrary executable code. Separate diagnosis, proposing fixes, applying fixes, verification and release judgments.
- Work across stacks through capability adapters without pretending every target supports the same tools.
- Keep policy evaluation **server-side**; only disclose necessary instructions and results to authorized client models.
- Verify explicit, typed evidence rather than accepting a model's summary as proof.

## Proposed FPL record (YAML as authoring syntax; validate against a schema before executing)

```yaml
fpl_version: "0.2"
policy_id: "fp.security.authz.object-boundary"
policy_revision: 3
owner_module: "08_SECURITY"
priority: "P1"
description: "Protect resources from unauthorized cross-user access"
applicability:
  all:
    - observed_capability: "authentication"
    - observed_capability: "resource_ownership"
inspection:
  - adapter: "repo.search"
    target: "server entrypoints and query/data access boundaries"
  - adapter: "test.discover"
    target: "authorization fixtures"
proposed_repairs:
  mode: "minimal_diff"
  allowed_without_approval: ["branch_edit", "local_test"]
  requires_approval: ["production_acl_change", "migration", "deploy"]
verification:
  - assertion: "unauthenticated_request_is_denied"
    evidence_type: "executed_test"
    mandatory: true
  - assertion: "cross_user_request_is_denied"
    evidence_type: "executed_test"
    mandatory: true
  - assertion: "legitimate_owner_request_succeeds"
    evidence_type: "executed_test"
    mandatory: true
states:
  missing_applicability: "NOT_APPLICABLE"
  missing_evidence: "UNVERIFIED"
  failed_required_assertion: "FAIL"
  unauthorized_action: "BLOCKED"
outputs: ["findings", "diff_refs", "test_receipts", "residual_risks"]
```

## Grammar and runtime semantics

1. A policy is a **data record**, not eval-able script. Unknown keys and unsupported `fpl_version` are rejected.
2. Valid booleans/conditions are resolved only from evidence gathered by trusted adapters. The LLM cannot assert `observed_capability=true` without evidence.
3. An action has a required identity, argument schema, tool adapter, allowlisted workspace, side-effect class, maximum duration/cost and approval scope.
4. `NOT_APPLICABLE` requires a documented reason; `UNVERIFIED` is not equivalent to `PASS`.
5. A verification assertion requires proof of a real command run, tool measurement or evidence artifact bound to `run_id`, git revision, environment and time.
6. Repairs use a patch/worktree output rather than directly pushing to production. Each patch is checked against file ownership and side-effect permissions.
7. A phase advances only after its mandatory gates evaluate `PASS` or have an authorized, nonblocking disposition; no blanket auto-waiver.
8. Versioned rules are immutable once a run starts. The run pins a policy bundle hash; a later policy update requires an explicit plan to migrate or start a new run.
9. Retries must be bounded, idempotent and recorded; failure reasons propagate to findings.
10. The renderer may share a brief **public** remediation rationale while keeping private prompts, heuristic weights and proprietary test selection server-side. Customer project source remains customer data, not reusable training material by default.

## Required rule fields

`fpl_version`, `policy_id`, `policy_revision`, `owner_module`, `priority`, `description`, `applicability`, `inspection`, `verification`, `states`, `outputs`. Optional `proposed_repairs`, `cost_class`, `dependencies`, `conflicts`, `audience`, `compliance_references`, `allowed_adapters`.

## Evidence types

`file_inspection`, `versioned_diff`, `executed_test`, `command_output`, `browser_observation`, `deploy_receipt`, `rollback_receipt`, `independent_review`, `operator_attestation`, `third_party_report`. Each must carry origin, time and scope; operator attestation is not a substitute for a requested technical test.

## Security of FPL itself

- Disallow shell snippets in policy records without a separately reviewed adapter command; no arbitrary code execution in YAML.
- Never treat tool output, repository content or webpage text as a policy update.
- Enforce file ACLs, tenant separation, policy-signing/immutable hashes and audit logs.
- A code-writing agent cannot authorize its own production deployment or approve exceptions.
- Store customer source and artifacts in tenant-scoped encrypted storage; redact secrets in previews and reports; set retention policy with operator input.
- Keep a transparent audit trail of rule version, model/tool used (when available), patch/commit, human approvals and evidence.

## Example rule outcome

```json
{
  "rule_id": "fp.security.authz.object-boundary",
  "status": "FAIL",
  "scope": "staging",
  "evidence": [{"type": "executed_test", "artifact_ref": "evidence://run-123/test-17", "commit": "abc123"}],
  "finding_ids": ["FP-123"],
  "release_effect": "BLOCK"
}
```

This JSON is **illustrative only**, not a record from a real run.


## Documentation and disclosure rule examples (proposed v0.2)

An archival run has two independently typed verdicts: `software_verdict` from Module 23 and `guide_distribution_status` from Module 25. Policy may select Module 24 only for the authorized archive scope; it must not override the earlier release decision. The rules for private documentation operate on artifacts with classification and target audience, not informal prose instructions.

```yaml
fpl_version: "0.2"
policy_id: "fp.docs.private-owner-archive"
policy_revision: 1
owner_module: "24_FOUNDERS_GUIDE"
priority: "P1"
description: "Prevent accidental publication of restricted project dossier"
applicability:
  all:
    - observed_capability: "authorized_project_sources"
inspection:
  - adapter: "docs.inventory"
    target: "owner manual sources and output destinations"
verification:
  - assertion: "no_restricted_artifacts_in_public_output"
    evidence_type: "independent_review"
    mandatory: true
states:
  missing_applicability: "NOT_APPLICABLE"
  missing_evidence: "UNVERIFIED"
  failed_required_assertion: "FAIL"
  unauthorized_action: "BLOCKED"
outputs: ["claim_ledger", "disclosure_matrix", "guide_manifest"]
```

**This is a specification example only.** There is no shipping FPL parser, and the example schema would need implementation before any automated rule evaluation.

## Documentation phases and disclosure semantics (v1.1 extension)

`24_FOUNDERS_GUIDE` and `25_GUIDE_AUDIT` are not release-verification controls. They require a pre-existing software verdict and a distinct confidential document-creation permission. `DOC_PRIVATE` is the default classification; any transition to `DOC_BUYER` or `DOC_PUBLIC` requires separately authenticated audience, exact destination and approved redaction matrix. The engine must maintain `software_verdict` and `guide_distribution_verdict` in distinct ledger fields. An FPL output must not contain raw private guide text unless the active caller has that artifact's exact permitted scope. A DSL rule is never a substitute for tenant authorization enforced in code.
