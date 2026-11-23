# FINAL PROMPT / MODULE 25: Canonical Owner’s Manual — Enterprise Audit & Truth Validation

> **Last prompt of the full Final Prompt suite.** Independently scrutinize the private project Owner’s Manual and its Markdown/HTML/PDF outputs. Apply `00_MASTER_PROMPT.md` and `contracts/FOUNDER_GUIDE_CONTRACT.md`. This is a **documentation-only repair and verification phase**: do not alter product code, run unauthorized external searches, publish, or export restricted files.

## Mission

Elevate the material from Module 24 into a durable, source-grounded, enterprise-quality and future-operator-usable canonical archive. It is a forensic truth, completeness, architecture, strategy, continuity, security, presentation, preservation and acquisition-diligence audit—not a superficial proofreading pass. The reviewer should avoid relying exclusively on the generator's claims; inspect primary evidence when authorized and available.

## Preconditions and evidence handling

- Required inputs: current manual/HTML/export files, source register, actual repository evidence available to the run, release verdict, open findings, confidentiality/disclosure matrix and generation manifest. If absent, report exactly what cannot be verified.
- Pin `run_id`, `project_commit`, manual revision and artifact hashes to prevent auditing stale documents against changed code.
- Compare material claims against their **exact source references**, not only summaries or prior model output. Verify timestamps and environment; a repo comment or a screenshot is not proof that something is live.
- Preserve author intent and authored history. Never invent quotes, founder philosophies or causal claims. Do not increase score simply by writing more persuasive language.
- All owner/project identities are project-specific; never inject Final Prompt operator attribution into a customer project.

## Stage 1 — Forensic truth audit

For each major claim, classify `CONFIRMED`, `OBSERVED_IN_CODE_OR_DOCS`, `OBSERVED_IN_RUNTIME`, `USER_REPORTED`, `INFERRED`, `PLANNED`, `SPECULATIVE`, `UNKNOWN`, `NEEDS_OWNER_CONFIRMATION` or `REQUIRES_FURTHER_AUDIT`. Verify reference resolution, source authority, version/date and materiality. Correct:

- imaginary features, routes, APIs, agents, infrastructure, deployment, cloud providers, tests, security controls or integrations;
- unsupported revenue, adoption, uptime, benchmarks, ownership, registration and legal compliance;
- silently upgraded concepts, prototypes, mock integrations or roadmap checkpoints into deployed features;
- contradictory numbers, scores, release labels, assumptions or claims;
- inaccurate founder quotations or unsupported motives;
- omitted limitations, undisclosed speculation and valuation certainty.

For every correction record old claim, new claim, source/evidence reference, disposition (`CORRECTED`, `QUALIFIED`, `REMOVED`, `UNRESOLVED`) and rationale. If underlying truth cannot be established, preserve uncertainty; do not make a plausible guess.

## Stage 2 — Inventory and architecture reconciliation

Cross-reference source files, package manifests, route/config inventories, docs, READMEs, test outputs, artifacts, screenshot notes, diagrams, naming systems and roadmap records. Flag missing features, endpoints, state machines, subsystems, workers, integrations, economics, governance and operational dependencies. Check:

- code vs diagram alignment, auth/data flow, frontend/backend ownership, API and schema boundaries;
- deterministic vs LLM behavior, trust boundaries, tenant isolation, runtime availability and persistence;
- deployment/release distinction and fault/recovery assumptions;
- technical debt, bottlenecks, unverified claims and dependencies that remain undocumented;
- architecture diagrams not falsely implying running infrastructure.

Correct documentation if evidence supports it. Otherwise list questions/tests; do not create application systems to make the manual correct.

## Stage 3 — History, roadmap and strategy audit

Validate source-backed dates, pivots, milestone statuses, key decisions, vision-vs-roadmap separation, ecosystem relationships, domain assertions, dependency ordering, low-effort opportunities, P0/P1 blockers and creator workload. Remove spurious completion claims. Prioritize reality-based 7/30/90-day candidates and acceptance criteria; distinguish strategic suggestions from founder-approved work.

## Stage 4 — Valuation, monetization and competitive truth

Challenge each dollar amount, multiple, forecast, total addressable market, licensing assumption, sales claim, projected revenue and acquisition thesis. Require assumptions, sensitivity, comparable evidence and as-of dates. If evidence is missing, mark **NOT ESTIMABLE FROM AVAILABLE SOURCES** or present explicit hypothetical scenarios rather than made-up present value. Avoid double-counting code, domains, trademarks, IP, brand and ecosystem leverage. Never describe speculative upside as an offer or verified market price. Name competitors only when sourced.

## Stage 5 — Continuity, future operator and acquisition rehearsal

Simulate three readers (without pretending to interview real people):

1. **Returning founder after two years** — locate current state, decision reasoning, source commit, resume commands, financial exposure and next work.
2. **New engineer/operator** — understand build, tests, architecture, keys *location without values*, deployment gates, monitoring, rollback, recovery, risk register and ownership.
3. **Prospective evaluator/successor** — understand verified capabilities, chain-of-title questions, dependencies, licenses, assets, metrics with evidence, continuity and vendor risks.

List missing instructions preventing each person from acting safely, and add factual runbooks or explicitly labeled unknowns. Include secure references for private succession/estate arrangements; never include access tokens, dead-man-switch secrets or sensitive recovery details.

## Stage 6 — Security, privacy and disclosure audit

Scan *all generated formats and diagrams* for exposed secrets, credentials, API keys, seed phrases, session cookies, private endpoints where restricted, personal data, customer data, exploitable hidden operational instructions and internal-only architecture leaked into a buyer/public edition. Redact values in every output, including HTML alt text, embedded metadata, diagram sources, appendices and PDF properties where possible. Recheck that redactions did not leave obvious semantic leaks. Confirm no unintended export, share, commit or web publication took place. If unsure, `BLOCK` distribution, not the factual documentation work.

## Stage 7 — Document logic, design, accessibility and export QA

Audit cross-links/TOC anchors, titles/heading levels, glossary consistency, tables, figures, dates, footnotes, source register, captions and actual generated filenames. Inspect HTML for semantic structure, responsive viewport, mobile word wrapping, legible tables/code, accessible colors, navigation, print CSS and page breaks. If an HTML renderer/PDF converter is available, render and visually inspect representative long pages/diagrams, verify output pages are not clipped, and compare PDF text to source. If tools are missing, report `UNVERIFIED` instead of claiming visual inspection or a PDF. Correct unnecessary repetition, awkward order, missing transitions and generic boilerplate while preserving meaning.

## Stage 8 — Final revisions and provenance

Apply safe documentation edits to the private output files, rerun structural and link checks, update source/claim inventories and hashes, and produce a diff of corrections. Do not regenerate unsupported figures to improve visual polish. Re-run stages that could be affected by changed claims or diagrams. If a critical truth/security issue remains unresolved, mark the guide `BLOCKED_FOR_DISTRIBUTION` or `NEEDS_OWNER_CONFIRMATION`; this is distinct from the software release verdict.

## Mandatory deliverables

1. `GUIDE_AUDIT_REPORT.md` — findings P0–P3, evidence, corrections made, removed claims, qualifications, unresolved issues, required owner confirmations, source gaps and next audit actions.
2. Corrected `OWNERS_MANUAL.md` and `OWNERS_MANUAL.html`; corrected genuine PDF if an actual PDF was generated and inspected; otherwise explicit PDF-ready HTML status.
3. Updated diagrams, linked TOC, source register, disclosure matrix, change history, guide manifest/hash and three-person continuity rehearsal.
4. **Quality assessment with reasoned rubric**, separately rating truthfulness, source completeness, continuity readiness, technical clarity, strategic clarity, readability, visual/print polish, privacy/disclosure safety, future maintainability, and acquisition utility. If not measured, use `UNVERIFIED`, not a numeric score.
5. Final publication/distribution status: `PRIVATE_READY`, `REQUIRES_OWNER_CONFIRMATION`, `BLOCKED_FOR_DISTRIBUTION`, or `PARTIAL_ARCHIVE`; include precise limiting conditions.

## Final acceptance test

- All 18 mandatory owner sections covered, or explicitly marked incomplete with reasons.
- Every material factual claim traceable or unambiguously labeled unverified.
- Every diagram maps to sourced architecture or is marked hypothetical.
- Release verdict not overwritten by documentation optimism.
- No passwords/tokens/recovery secrets; disclosure boundaries intact.
- HTML/Markdown TOC and cross-links resolve; print/PDF status is honestly reported.
- Resumption and handover paths are usable with available evidence.
- Valuation scenarios are conditional, sourced where applicable and never asserted as guaranteed.
- No claim of performing checks without an artifact proving the check happened.

### Universal module checkpoint

Record `run_id`, `module_id=25_GUIDE_AUDIT`, `manual_revision`, `source_commit`, `verified_sections`, `corrections`, `unresolved_claims`, `security_redactions`, `export_validation`, `quality_rubric`, `distribution_status`, `updated_artifacts`, `tests_and_results`, `cost`, `status` and `next_action`. This module is the **last suite phase**; the run ends with a software verdict **and a separate documentation verdict**.
