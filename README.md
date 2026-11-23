# The Final Prompt (v1.3.0)

An open-source, MIT-licensed **25-stage evidence-first engineering prompt system** for auditing, hardening, and shipping production-ready software.

## Repository Layout

- `final-prompt/` — Canonical **Final Prompt v1.3.0** specification:
  - `00_MASTER_PROMPT.md` — Master production-hardening controller
  - `modules/01_*.md` … `modules/25_*.md` — 25 canonical stages across Discovery, Integration/Control, Core Repair, Optimize & Polish, Challenge & Gate, and Optional Private Archive
  - `api/` — API system prompt, integration guide, and example request/response payloads
  - `contracts/` — JSON Schemas (`STAGE_ORDER.json`, `API_RUN_REQUEST_SCHEMA.json`, `API_RUN_RESPONSE_SCHEMA.json`, `RUN_STATE_SCHEMA.json`, `MCP_API_PRODUCT_SPEC.md`, etc.)
  - `tools/validate_package.py` — Offline package and schema validator
  - `tools/assemble_api_messages.py` — Offline bounded API message-bundle generator
- `public/downloads/` — Pre-packaged `Final_Prompt_v1.3.0_MIT.zip`, `SHA256SUMS.txt`, raw v1.3.0 files, and historical v1.1/v1.0 archives
- `src/` — Distribution website, interactive 25-stage explorer, and client-side API/MCP workbench
- `LICENSE` — MIT License

## Quickstart (CLI)

```bash
# Verify package integrity
python3 final-prompt/tools/validate_package.py

# Assemble a bounded API message draft (1–5 stages per call)
python3 final-prompt/tools/assemble_api_messages.py \
  --module 1 --module 2 --module 3 \
  --task "Find evidence-backed missing integrations in my repository." \
  --output ./messages.json
```

## Website Development

```bash
bun install
bun run dev
```

## License

MIT — see [LICENSE](./LICENSE).
