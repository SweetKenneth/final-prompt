# FINAL PROMPT / MODULE 17: Legal, Privacy, Attribution and Website Governance

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run for public websites or software needing legal/trust documentation, licensing or policy language. **Draft and audit; do not publish unverified legal representations.** Unlike the original personal-site prompt, this version is tenant-neutral: use the actual operator, brand and legal jurisdiction if verified, not a hard-coded individual or publisher. A site-specific PromptFluid attribution can be selected only on PromptFluid-owned projects.

## Scope to discover

Public pages and form/data practices; analytics and tracking; cookies/SDKs; hosting/vendors; retention/deletion; contact paths; ownership and trademark statements; privacy/terms/licenses; rights to images and copy; attribution; third-party references; robots/sitemap; optional llms.txt; relevant jurisdictions/age audience, subscriptions and claims.

## Audit checklist (inspect actual project and gather evidence)

1. **Fact intake:** verify operator legal name, contact, entity, product domain, effective date, actual analytics/cookies, consent, retention, processor list, data transfers, automated decisions, payments, minors and jurisdiction. Mark unanswered matters OPEN; do not assume practices.
2. **Privacy policy:** draft site-specific what/why/how collected, use, sharing/sale status *only if verified*, logs/analytics, cookie/device identifiers, vendors, retention, rights/request path, deletion, security limitations, children's data, changes/contact. Identify required counsel/operator reviews.
3. **Terms:** draft acceptance, service scope, usage, acceptable use, IP/licensing (only what owner controls), prohibited abuse, external links, product disclaimers, warranty/liability/indemnity only where legally reviewed, governing law only if confirmed, dispute provisions only if counsel approved, availability and updates.
4. **Attribution/footer:** brand/publisher/owner and contact links, privacy/terms, license and copyright year, optional acquisition/partnership or llms.txt links only where real. Preserve contractual attribution; removal of required credits may violate terms.
5. **No affiliation:** add proportionate disclaimers where third-party names/logos central; do not assert independent if a verified affiliation exists. Distinguish fair use/nominative reference from guaranteed legal permission.
6. **Machine readability:** site-specific `/llms.txt` (optional) may list name, verified domain, mission, audience, content categories, canonical links, citation policy, author/owner, update date, robots/sitemap/legal links and accurate disclaimer; do **not** try to force downstream LLM compliance or reveal confidential system prompts.
7. **Crawl and trust coordination:** let SEO own robots/sitemap/canonical/schema; supply truthful verified organization and publisher values. If disclosing a third-party brand, verify accuracy and rights.
8. **IP review:** preserve licensed third-party libraries, logos/images and templates and notice obligations; avoid unsupported claims that mere ideas, layout structures or website architecture are exclusively owned as copyright.
9. **Claims audit:** factual medical/financial/legal/regulatory/science/AI performance/press claims supported and precisely worded. Disclaimers do not cure unlawful conduct or misleading claims.
10. **Operational trust:** about/contact/accessibility/support paths, last-updated dates only if true, meaningful response channels and legal owner review backlog.
11. **Regulatory applicability:** identify potential consumer privacy/child protection/accessibility/payment/tax rules from facts; do not pronounce compliance or give definitive jurisdiction-specific legal advice.
12. **Cross-file accuracy:** verify footer links, policy routes, robots/sitemap integration, OG publisher, structured data, copyright footer and any actual vendor names.

## Authorized remediation instructions

Write reviewed **drafts** only using verified data, and flag placeholders explicitly for operator completion. Fix broken links/metadata that do not involve unverified legal claims. Propose changes to existing policies as diffs; require operator/counsel approval before publishing. Use accurate brand-specific notices. Never copy site operator attribution from another customer.

## Mandatory verification

Run route/build/link checks and verify all claimed facts against repo/config/owner answers. Audit that `/privacy`, `/terms`, optional `/llms.txt`, footer links, robots/sitemap resolve when actually deployed/tested. Distinguish verified runtime/vendor behavior from speculative copy. Any missing fact should cause HUMAN REVIEW REQUIRED for legal publication.

## Approval and non-goals

No auto-publish legal pages or consent changes. Never promise ownership of third-party marks or absolute rights against scraping; contract, copyright, database rights and enforceability differ by jurisdiction. Do not claim `we do not sell data`, no tracking, perfect security or complete compliance without evidence. Product-specific legal review recommended.

## Required phase report

Draft policy text; fact provenance table; placeholders and counsel questions; precise verified operator attribution; footer and disclosure changes; asset/license issues; files changed; commands/results; unpublished/unverified caveats.



### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
