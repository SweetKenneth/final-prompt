# QUICKSTART — FINAL PROMPT v1.3.0

## 1. Verify the actual package

Extract the ZIP. From the `Final_Prompt_v1.3.0/` folder run:

```bash
python tools/validate_package.py
```

Requires Python 3.10+ and `jsonschema`. A PASS validates the *packaged specification and examples* — not any target application's safety or production readiness.

## 2. Pick an operation

- **Full suite:** run 01→23 with applicability-based skips and checkpoints; append 24→25 only for an authorized private Founder’s Guide.
- **Wiring gaps:** select 01,02,03 for map/contract/closure; run dependent code, safety, verification stages as needed.
- **Architecture resilience:** inspect relevant contracts then run 11 against *existing* dependencies; route through 20 for adversarial checks.
- **Website polish:** inspect existing UI and branding constraints, then use 19 and relevant 06,07,15,18; verify actual responsive rendering.
- **API host integrity:** first apply real backend authorization before model calls; use 04 for a deep inspection of your Final Prompt host if available. It must not create an API for a static website.
- **Archive only:** 24→25 after a pre-existing software verdict and approved private destination; no software verdict inferred from docs.

## 3. Create a bounded API message draft (offline)

```bash
python tools/assemble_api_messages.py \
  --module 1 --module 2 --module 3 \
  --task "Find evidence-backed missing integrations in my supplied repository." \
  --output ./messages.json
```

The assembler reads **trusted packaged prompts only**, writes portable JSON messages, does **not** invoke a provider, and refuses to include all modules by default. Use your own authenticated execution host for repository reads, patching and verification. See `api/API_INTEGRATION_GUIDE.md` and the schemas in `contracts/`.

## 4. Actual API responsibilities

Before sending any customer code to a model, enforce customer consent, tenancy, repo access, token/tool/time/cost caps, secure per-run workspaces, output redaction, and consent for paid vendor calls. Host-side actions require allowlisted tools and authenticated approvals bound to an exact diff/target/expiry. Preserve idempotency, per-file write ownership and cancellation semantics. A model-generated PASS is not a test receipt.

## 5. Controlled first evaluation

Use a throwaway repository and a read-only run. Confirm 01 discovery, 02 contracts, 03 wiring classification, N/A conditions, evidence references and invalid/denied actions. Next try a reversible branch-only fix and prove it with a test adapter. Negative-test duplicate calls, stale repository version, budget cap, prompt injection, aborted runs and inaccessible production. Only then connect real customer projects.

## 6. Run state and release

Track the canonical 25 stages using `contracts/STAGE_ORDER.json`; `contracts/RUN_STATE_SCHEMA.json` models durable state. Challenge fixes with 20, rehearse safe rollback at 21, perform independent 22 sweep, and issue 23 software verdict only within verified scope. 24/25 are independent private-document stages.

**Built to last.**
