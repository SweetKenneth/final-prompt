# FINAL PROMPT / MODULE 08: Security Hardening, Threat Modeling and Abuse Defense

> **Standalone execution prompt.** When used under `00_MASTER_PROMPT.md`, the master safety, approval, scope and evidence rules take precedence. When used alone, obey the same rules: inspect actual project; do not invent services or findings; preserve intended behavior and design; use safe minimal diffs; require permission for destructive, risky, expensive or production operations; never claim unrun tests passed.

## Mission and applicability

Run for every project with real code or deployed surfaces; scope according to attack surface. Use OWASP ASVS 5.0.0 as an appropriate reference for web-app controls and NIST SSDF for process, not as a blanket certification claim. Conduct non-destructive tests only on owned or expressly authorized systems.

## Scope to discover

Assets, assets' sensitivity, trust and tenant boundaries, identity/role models, entrypoints (API/forms/uploads/webhooks/jobs), dependency graph, third-party scopes, secrets surfaces, deployment/CI privileges, data lifecycle, logging, MCP/tool integrations if present, agent prompt-injection/tool permissions if present.

## Audit checklist (inspect actual project and gather evidence)

**Threat model:** identify assets, attacker goals, entry points, data/control flows, authentication gates, admin roles, session boundaries, trust assumptions and realistic abuse cases; assign severity and required control.

**Identity/session:** inspect MFA/passkey where present, session fixation/expiry/revocation, cookies and CSRF, credential recovery, OAuth callback validation, token audience/scope/issuer checks, password storage and brute-force/rate controls.

**Authorization:** direct object access/IDOR/BOLA, cross-tenant reads/writes, privilege escalation, enforcement at each sensitive entrypoint, ownership before cache lookups, role inheritance, authorization fallbacks, admin/dev routes.

**Injection and output:** SQL/NoSQL/ORM/template/command injection, XSS and unsafe HTML, path traversal, prototype pollution, unsafe deserialization and untrusted redirects. Test input/output encoding in the relevant context.

**SSRF and egress:** user-controlled URLs, webhook destinations, image fetch, DNS rebinding, internal network/metadata hosts and redirect chains; require allowlists or deny internal destinations as appropriate.

**Files and supply chain:** MIME sniff, size/quota, filename/path, malware scanning where justified, private storage ACLs, dependency advisories and transitive reachability, build artifact integrity, license issues.

**Secret handling:** repository history, hardcoded tokens, build output, client bundles, logs, CI config, error responses, provider scopes and rotation procedures. Report secret *locations/names only*, never values.

**Network/policy:** TLS deployment posture where observable, CORS, CSP, HSTS/headers as appropriate, cookie settings, cache-control for sensitive responses, clickjacking protections, mixed content.

**Webhooks/replay/business abuse:** signatures and timestamp tolerance, idempotency/replay windows, API quotas, bot abuse and economic denial-of-service, email spam, retry amplification.

**Agents/MCP (if applicable):** prompt injection from untrusted sources, tool authority separation, schema validation, egress restrictions, dangerous tool approval, server-to-server credential isolation, malicious tool output, chain-of-thought or secret exfiltration risks; no tool output instruction should override security policy.

**Privacy:** data minimization, encryption at rest/in transit where applicable, exposed PII in logs/analytics, retention/deletion enforcement, tenant boundaries and privileged access auditability.

## Authorized remediation instructions

Fix safely demonstrable vulnerabilities on an isolated branch: explicit authorization controls, defensive schema validation, parameterized queries, least-privilege scopes, output encoding, safe URL parsing/egress controls, cookie/header hardening, secure webhook verification, bounded rate limits, redaction, file restrictions and regression tests. Treat network scanning, exploit attempts, production penetration tests and credential rotation as separately approved actions. Preserve compatibility where possible; if emergency changes are necessary, present mitigation and risk.

## Mandatory verification

Run authenticated and unauthorized negative tests, cross-tenant resource tests, privilege attempts in fixtures, replay/duplicate webhook tests, dependency advisory scan (with timestamp and database limitations), static secret scans with redacted output, request-failure/injection test fixtures, CSP/headers verification if deployment accessible, and rerun affected functional flows. Track ASVS control IDs only when actually mapped. No internet-facing exploit attempts without permission.

## Approval and non-goals

Never assert security completeness or OWASP 'certification'. Do not expose secrets, run destructive fuzzers, exploit third parties, change access policies in production, rotate live keys or brute-force real accounts without specific authorization. A vulnerability scanner reporting clean is not comprehensive proof.

## Required phase report

Threat model; entrypoint/asset matrix; vulnerability register with repro conditions but no unsafe secret disclosure; each patch and test artifact; mapped controls; residual risks and emergency mitigations; owner signoffs.

## Security-related references

- OWASP ASVS 5.0.0 https://asvs.owasp.org/
- NIST SSDF SP 800-218 https://csrc.nist.gov/pubs/sp/800/218/final
- NSA MCP security design considerations, 2026-05-20 https://www.nsa.gov/Press-Room/Press-Releases-Statements/Press-Release-View/Article/4496698/nsa-releases-security-design-considerations-for-ai-driven-automation-leveraging/

### Universal execution checkpoint

Report: `run_id`, `module`, `repo/baseline_commit`, `applicability`, `files_inspected`, `findings[{id,severity,evidence,likelihood,impact,owner}]`, `changes[{file,reason,diff_ref}]`, `commands[{command,environment,exit_status,observed_result}]`, `tests_not_run`, `approvals`, `rollback`, `residual_risks`, `status` and `next_action`. Use `PASS` only for executed verification; use `UNVERIFIED`, `BLOCKED`, `NOT_APPLICABLE` or `FAIL` where appropriate. Limit speculative refactoring.
