# Final Prompt v1.3.0 — Execution Dependency and Re-Entry Map

**Normative stage identifiers and filenames:** `contracts/STAGE_ORDER.json`. This document explains when and how the 25 **native modules** execute. There are no separately numbered or invisible supplements. The master controller owns conflict resolution.

## Host admission (before ANY model call or tool action)

A real API/MCP host must authenticate tenant and project, establish allowed repository and artifacts, create durable idempotent run identity, pin immutable policy and source commits, configure trusted tool adapters/sandbox, enforce server-side token/tool/cost/time caps, and validate approvals in an independent authenticated channel. An LLM cannot perform host admission by declaring it happened.

## Canonical order — complete full-suite run

| Stage | Purpose | Prerequisites and responsibilities |
|---|---|---|
| **01** Gap Analysis | Read-only reality inventory and initial findings | Source snapshot, existing tools, actual scope |
| **02** Architecture Contracts | Map intended interactions and invariants | Baseline contract of real application |
| **03** System Integration Closure | Find disconnected producers/consumers and dead-end lifecycles | 02 contract; require proof of intent before wiring; coordinate later repair owners |
| **04** API Orchestration Integrity | Host/controller audit, if a real host exists | Host preconditions must already hold; this deep module does not authorize itself |
| **05–07** Backend, Frontend, Component | Implement localized, applicable fixes | Signed scope, single-writer file ownership, tests |
| **08–10** Security, Data Recovery, Business Logic | Close auth/data/domain correctness gaps | Permission and durable-effect invariants; critical risk may interrupt any earlier stage |
| **11** Architectural Resilience | Bound real failure modes | Known paths; breaker/retry/recovery tests; no arbitrary scaffolding |
| **12–14** Performance, Infrastructure, Observability | Measure performance and operational truth | Existing deploy/monitoring surfaces only |
| **15–18** Accessibility, SEO, Legal, Branding | Correct applicable design, accessibility, content and identity issues | Verified ownership/facts; public changes require approval |
| **19** Universal Visual Polish | Final appearance, glow, animation, mobile/QR and UI consistency | Functional behavior stabilized; brand and accessibility preserved |
| **20** Adversarial Tests | Independent negative/fault testing | Test current changed bytes; no forged green status |
| **21** Deployment/Rollback | Rehearsal and release preparation | Real staging/test tools; production deployment separately approved |
| **22** Final Gap Sweep | Independent blind-spot review of all applicable modules | Reopen new findings, then re-verify affected repairs |
| **23** Release Gate | Scoped, evidence-backed software verdict | Required gates, authority and verified current evidence |
| **24** Founder's Guide (optional) | Private canonical Owner's Manual | Truthful prior 23 verdict, explicit private document permission |
| **25** Independent Guide Audit (optional) | Truth/privacy/continuity/distribution verdict | Source-grounded independent review of 24 artifacts |

## Focused operations

A standalone module request does not require running every previous module in full; it requires reading enough current evidence and related contracts to act safely. Stage 03 may be scoped to one subsystem; 11 may focus on a specific dependency, 19 on one page. Avoid claiming the rest of the 25 stages passed.

If a downstream stage identifies a missing wiring or safety gap, return to the **earliest affected owning stage**, make a bounded repair, and invalidate/rerun impacted tests and evidence. This is a dependency-aware loop, not a single unchangeable waterfall. Preserve earlier unaltered evidence only when source/env/scope provenance remains valid.

## When a module does not apply

Every module is conditional except required read-only discovery and final verification obligations for a requested full run. Mark `NOT_APPLICABLE` with a real reason. A disabled host security control never becomes optional because Stage 04 was marked N/A; trusted backend safety is a **precondition**, not a generated feature.

**Built to last.**
