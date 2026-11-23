# FINAL PROMPT v1.3.0 — 25-stage evidence-first engineering system

**Built to last.** This is the integrated, API-oriented revision of the Final Prompt user-authored master prompt framework. It retains the 21 original engineering phases in substance, adds four native stages in dependency order, and supplies schemas, host guidance, evidence gates and offline tools. It is **not** a deployed API, installed MCP server or independent execution sandbox.

## The canonical 25-stage flow

| Phase | Modules | Outcome |
|---|---|---|
| Discovery | **01** Gap Analysis; **02** Architecture Contracts | Observe actual source and intended behavior before changes |
| Integration/control | **03** System Integration Closure; **04** API Orchestration Integrity | Close legitimate cross-component wiring gaps; assess host runtime only when present |
| Core repair | **05** Backend/API; **06** Frontend; **07** Component; **08** Security; **09** Data Recovery; **10** Business Logic; **11** Architectural Resilience | Safe concrete fixes, authority boundaries, retry/timeouts/crash protection |
| Optimize and polish | **12** Performance; **13** Infrastructure/CI; **14** Observability; **15** Accessibility; **16** SEO; **17** Legal/Governance; **18** Branding; **19** Universal Visual Polish | Measured UX, appearance, color, animation, mobile/QR, content hierarchy where applicable |
| Challenge & gate | **20** Adversarial Tests; **21** Deployment/Rollback; **22** Final Gap Sweep; **23** Release Gate | Independent evidence-backed software decision |
| Optional archive | **24** Founder's Guide; **25** Independent Guide Audit | Private owner manual, source-grounded truth and separate documentation verdict |

### Start here

1. Read `QUICKSTART.md` and `00_MASTER_PROMPT.md`.
2. Pin `contracts/STAGE_ORDER.json` and `MANIFEST.json` to the run. If calling a model API, use `api/00_API_SYSTEM_PROMPT.md` and `api/API_INTEGRATION_GUIDE.md`; keep these prompt assets in your trusted server.
3. Load only the current stage and necessary contracts into each bounded request. Never stuff all 25 large prompts into every API call.
4. Authenticate/project-scope users, meter token/tool spend, authorize writes, sandbox execution, and verify actual tool receipts **outside the model**. These are runtime responsibilities; the prompt cannot enforce them.
5. Track `run_id`, source commit, stage statuses, approvals, evidence artifacts and budgets in persistent host state. When a repo changes, invalidate affected proofs.
6. `python tools/validate_package.py` verifies this ZIP's files and schemas. `python tools/assemble_api_messages.py --module 1 --task "Inspect the supplied repo snapshot"` produces a local *message draft*, not a live model call.

### Applicability is mandatory

This framework is reusable across radically different codebases. A checklist entry is *not* permission to invent a missing module, database, queue, voice, animation, auth mechanism or website. Identify real surfaces and legitimate requirements; mark irrelevant stages `NOT_APPLICABLE` with explanation. The ability to assess gaps never authorizes removing intentionally blocked release gates.

### Source/version history

`AUDIT_V1.0_TO_V1.1.md` preserves historical analysis. `CHANGELOG.md` describes the evolution. `contracts/COVERAGE_MATRIX.md` and `contracts/STAGE_ORDER.json` describe current ownership and sequence. The original v1.1 files and phases remain represented; stage numbering changed deliberately in v1.3.0 to make the four new passes first-class.

**No customer repository was audited, API server deployed or security control proved by creating this specification.**
