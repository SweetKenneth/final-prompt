# Coverage & Ownership Matrix — Final Prompt v1.3.0

This document maps the original user-authored prompt families and the new native specialist modules to current canonical stage numbers. Historical original numbers in archived v1.0–v1.1 material are preserved only as history; use `contracts/STAGE_ORDER.json` as the active versioned order.

| Source prompt family | Current owner | Typical dependent reviews |
|---|---|---|
| Universal 20-category operational gap analysis | **01_GAP_ANALYSIS** | 02, 03, 22 |
| Architecture contracts and invariants | **02_ARCHITECTURE_CONTRACTS** | 03, 05, 08, 09, 11 |
| **NEW:** End-to-end missing integration / stub / feedback-loop closure | **03_SYSTEM_INTEGRATION_CLOSURE** | 01, 02, 05, 09, 10, 20 |
| **NEW:** API/MCP run integrity, tenant/approval/evidence/cost controls | **04_API_ORCHESTRATION_INTEGRITY** | API host preflight, 08, 13, 14, 20, 23 |
| Original Backend/API audit (12 sections) | **05_BACKEND_API** | 02, 03, 08–11, 20 |
| Original Frontend audit (13 sections) | **06_FRONTEND** | 07, 15, 16, 19, 20 |
| Original Component Fix (10 sections) | **07_COMPONENT** | 06, 12, 15, 19, 20 |
| Security and trust boundaries | **08_SECURITY** | 04, 05, 09, 11, 20, 23 |
| Data integrity and recovery | **09_DATA_RECOVERY** | 03, 05, 10, 11, 20, 21 |
| Business rules and non-idempotent effects | **10_BUSINESS_LOGIC** | 05, 08, 09, 11, 20 |
| **NEW:** Architectural resilience / circuit breakers / recovery / limits | **11_ARCHITECTURAL_RESILIENCE** | 02, 05, 08–10, 13, 14, 20 |
| Performance and efficiency | **12_PERFORMANCE** | 05–07, 11, 13, 19 |
| Infrastructure, CI/CD and runtime | **13_INFRA_CICD** | 04, 05, 11, 14, 21 |
| Observability and operational failure truth | **14_OBSERVABILITY** | 04, 05, 11, 20 |
| Accessibility | **15_ACCESSIBILITY** | 06, 07, 19 |
| Original SEO implementation (12 sections) | **16_SEO_MACHINE_READABILITY** | 06, 17, 18, 19 |
| Original Legal/Site Governance (13 sections) | **17_LEGAL_GOVERNANCE** | 08, 16, 18, 23 |
| Original Branding (10 sections) | **18_BRANDING** | 06, 16, 17, 19 |
| **NEW:** Universal appearance / animation / effects / text / mobile polish | **19_UNIVERSAL_VISUAL_POLISH** | 06, 07, 12, 15, 18, 20 |
| Independent adversarial verification | **20_TEST_ADVERSARIAL** | Every changed system |
| Deployment and rollback | **21_DEPLOYMENT_ROLLBACK** | 09, 11, 13, 14, 20 |
| Final blind-spot sweep | **22_FINAL_GAP_SWEEP** | Re-open earlier owners if newly affected |
| Evidenced software release verdict | **23_RELEASE_GATE** | 20, 21, 22 |
| Owner's Manual / Founder's Guide | **24_FOUNDERS_GUIDE** | Private source corpus and 23 verdict |
| Independent guide truth and distribution audit | **25_GUIDE_AUDIT** | 24 artifacts, independent sources |

### Contract invariants

- Every stage uses the master five-step INSPECT→PLAN→REPAIR→VERIFY→RECORD contract within applicable scope. Stages 01, 22, 23 and 25 have stricter read-only/verdict roles where specified.
- Stage 04 controls the **Final Prompt operator's API host**, not an unrelated customer's API by default; API-host authorization is a trusted backend prerequisite *before* invoking any model stage.
- New specialist stages add depth, but do not override original module ownership. One writer per affected file; one ledger per root cause.
- Stage 19 respects Stage 18 brand constraints and Stage 15 accessibility; aesthetic polish never overrides functional correctness.
- Software verdict at 23 and private-document distribution verdict at 25 cannot overwrite each other.
- An intentionally denied, disconnected, or unsigned capability may be correct by design; the gap and resilience stages do not make it operational without established requirements and authorization.
