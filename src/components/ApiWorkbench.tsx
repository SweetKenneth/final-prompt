import { useMemo, useState } from "react";
import { Check, Copy, Download, ShieldAlert, Terminal } from "lucide-react";
import { toast } from "sonner";
import {
  DEFAULT_MAX_BUNDLE_CHARS,
  MAX_MODULES_PER_CALL,
  STAGES,
  WORKFLOW_PRESETS,
  buildBoundedMessages,
  downloadTextFile,
  validateAssemblyInput,
} from "@/lib/final-prompt-data";

type SnippetTab = "curl" | "typescript" | "python" | "mcp";

export function ApiWorkbench() {
  const [selectedNums, setSelectedNums] = useState<number[]>([1, 2, 3]);
  const [task, setTask] = useState<string>(WORKFLOW_PRESETS[0]!.task);
  const [repoRef, setRepoRef] = useState<string>("github:org/repo#main");
  const [environment, setEnvironment] = useState<"staging" | "production">("staging");
  const [mode, setMode] = useState<"readonly" | "standard" | "deep">("deep");
  const [scopeKind, setScopeKind] = useState<
    "entire_repository" | "entire_site" | "subsystem" | "workflow" | "single_page"
  >("entire_repository");
  const [maxCostUsd, setMaxCostUsd] = useState<string>("5.00");
  const [allowBranchPatches, setAllowBranchPatches] = useState<boolean>(false);
  const [assembling, setAssembling] = useState<boolean>(false);
  const [bundleInfo, setBundleInfo] = useState<{ json: string; charCount: number } | null>(null);
  const [snippetTab, setSnippetTab] = useState<SnippetTab>("curl");
  const [copiedSnippet, setCopiedSnippet] = useState<boolean>(false);

  const validation = useMemo(() => validateAssemblyInput(selectedNums, task), [selectedNums, task]);

  const parsedCost = Number(maxCostUsd);
  const costError =
    maxCostUsd.trim() === "" || Number.isNaN(parsedCost) || parsedCost < 0
      ? "Max run cost must be a non-negative number."
      : null;

  const apiRunRequest = useMemo(() => {
    return JSON.stringify(
      {
        project_id: "your-project-id",
        repo_ref: repoRef.trim() || "github:org/repo#main",
        target_environment: environment,
        mode,
        scope: { kind: scopeKind },
        modules: validation.sortedModules.map((n) => String(n).padStart(2, "0")),
        budget: {
          allow_paid_calls: false,
          max_run_cost_usd: costError ? 0 : parsedCost,
          max_tool_calls: 80,
          deadline_seconds: 3600,
          max_model_tokens: 250000,
        },
        permissions: {
          allow_branch_patches: allowBranchPatches,
          allow_production_deploy: false,
          allow_production_data_access: false,
          allow_risky_migrations: false,
          allow_public_branding_change: false,
          allow_legal_publication: false,
          allow_external_communications: false,
          allow_private_guide_generation: false,
        },
      },
      null,
      2,
    );
  }, [repoRef, environment, mode, scopeKind, validation.sortedModules, costError, parsedCost, allowBranchPatches]);

  function toggleStage(num: number) {
    setBundleInfo(null);
    setSelectedNums((prev) => {
      if (prev.includes(num)) return prev.filter((x) => x !== num);
      if (prev.length >= MAX_MODULES_PER_CALL) {
        toast.error(`Max ${MAX_MODULES_PER_CALL} modules per bounded API call.`);
        return prev;
      }
      return [...prev, num].sort((a, b) => a - b);
    });
  }

  function applyPreset(presetId: string) {
    const preset = WORKFLOW_PRESETS.find((p) => p.id === presetId);
    if (!preset) return;
    setSelectedNums(preset.modules);
    setTask(preset.task);
    setBundleInfo(null);
  }

  async function handleAssemble() {
    if (!validation.ok) {
      toast.error(validation.error ?? "Invalid assembly input.");
      return;
    }
    setAssembling(true);
    try {
      const selectedStages = validation.sortedModules
        .map((n) => STAGES.find((s) => s.num === n))
        .filter((s): s is NonNullable<typeof s> => Boolean(s));

      const [systemPrompt, masterPrompt, ...moduleTexts] = await Promise.all([
        fetch("/downloads/v1.3.0/api/00_API_SYSTEM_PROMPT.md").then((r) => r.text()),
        fetch("/downloads/v1.3.0/00_MASTER_PROMPT.md").then((r) => r.text()),
        ...selectedStages.map((s) => fetch(`/downloads/v1.3.0/${s.path}`).then((r) => r.text())),
      ]);

      const result = buildBoundedMessages({
        systemPrompt,
        masterPrompt,
        moduleContents: selectedStages.map((stage, i) => ({
          stage,
          content: moduleTexts[i] ?? "",
        })),
        task,
        maxChars: DEFAULT_MAX_BUNDLE_CHARS,
      });

      if (!result.ok) {
        toast.error(result.error);
        setBundleInfo(null);
        return;
      }
      setBundleInfo({ json: result.json, charCount: result.charCount });
      toast.success(`Assembled ${result.messages.length} messages (${result.charCount.toLocaleString()} chars)`);
    } catch {
      toast.error("Failed to fetch prompt modules for assembly.");
    } finally {
      setAssembling(false);
    }
  }

  const cliFlags = validation.sortedModules.map((n) => `--module ${n}`).join(" ");
  const snippets: Record<SnippetTab, string> = {
    curl: `# 1. Download messages.json from above (or run assemble_api_messages.py)
# 2. Send to any OpenAI-compatible chat completions endpoint:
curl -X POST https://api.openai.com/v1/chat/completions \\
  -H "Authorization: Bearer $OPENAI_API_KEY" \\
  -H "Content-Type: application/json" \\
  -d "$(jq -n --slurpfile msgs messages.json '{model: "gpt-5", messages: $msgs[0], response_format: {type: "json_object"}}')"`,
    typescript: `import fs from "node:fs";

const messages = JSON.parse(fs.readFileSync("./messages.json", "utf-8"));
const res = await fetch("https://api.openai.com/v1/chat/completions", {
  method: "POST",
  headers: {
    Authorization: \`Bearer \${process.env.OPENAI_API_KEY}\`,
    "Content-Type": "application/json",
  },
  body: JSON.stringify({ model: "gpt-5", messages, response_format: { type: "json_object" } }),
});
const data = await res.json();
console.log(data.choices[0].message.content);`,
    python: `# Assemble locally using the bundled MIT CLI tool:
python3 final-prompt/tools/assemble_api_messages.py \\
  ${cliFlags || "--module 1"} \\
  --task "${task.replace(/"/g, '\\"').slice(0, 120)}" \\
  --output ./messages.json`,
    mcp: `// Host-side MCP integration contract (see contracts/MCP_API_PRODUCT_SPEC.md)
// Enforce auth, tenancy, approval binding, and spend caps OUTSIDE the model:
{
  "mcp_spec": "/downloads/v1.3.0/contracts/MCP_API_PRODUCT_SPEC.md",
  "request_schema": "/downloads/v1.3.0/contracts/API_RUN_REQUEST_SCHEMA.json",
  "response_schema": "/downloads/v1.3.0/contracts/API_RUN_RESPONSE_SCHEMA.json",
  "run_state_schema": "/downloads/v1.3.0/contracts/RUN_STATE_SCHEMA.json"
}`,
  };

  async function copySnippet() {
    await navigator.clipboard.writeText(snippets[snippetTab]);
    setCopiedSnippet(true);
    toast.success("Copied integration snippet");
    setTimeout(() => setCopiedSnippet(false), 1800);
  }

  return (
    <section id="api-workbench" className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-2">
          <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
            API &amp; MCP Attachment Workbench
          </h2>
          <p className="max-w-3xl text-sm text-muted-foreground">
            Build a bounded <code className="text-primary">messages.json</code> bundle (1–{MAX_MODULES_PER_CALL} stages max,{" "}
            {DEFAULT_MAX_BUNDLE_CHARS.toLocaleString()} char ceiling) and a schema-compliant{" "}
            <code className="text-primary">API_RUN_REQUEST.json</code> payload to wire into your own API host or MCP runner.
          </p>
        </div>

        <div className="mt-4 flex items-start gap-2.5 rounded-lg border border-warning/40 bg-warning/10 px-4 py-3 text-xs text-foreground">
          <ShieldAlert className="mt-0.5 h-4 w-4 shrink-0 text-warning" />
          <p>
            <strong>Host boundary notice:</strong> This workbench runs client-side to assemble trusted prompt bundles and
            request contracts. Authentication, repo sandboxing, spend caps, and approval enforcement must run in your own
            API/MCP host outside the model.
          </p>
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="min-w-0 space-y-5 rounded-lg border border-border bg-card p-5 lg:col-span-7">
            <div>
              <div className="flex items-center justify-between">
                <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                  Workflow Presets
                </span>
                <span className="font-mono text-xs text-primary">
                  {selectedNums.length}/{MAX_MODULES_PER_CALL} stages selected
                </span>
              </div>
              <div className="mt-2.5 flex flex-wrap gap-2">
                {WORKFLOW_PRESETS.map((preset) => (
                  <button
                    key={preset.id}
                    type="button"
                    onClick={() => applyPreset(preset.id)}
                    className="rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
                  >
                    {preset.label}
                  </button>
                ))}
              </div>
            </div>

            <div>
              <span className="font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Select Stages (Canonical Order)
              </span>
              <div className="mt-2 grid grid-cols-5 gap-1.5 sm:grid-cols-9">
                {STAGES.map((stage) => {
                  const active = selectedNums.includes(stage.num);
                  return (
                    <button
                      key={stage.id}
                      type="button"
                      title={`${stage.id} ${stage.title}`}
                      onClick={() => toggleStage(stage.num)}
                      className={`rounded border px-2 py-1.5 font-mono text-xs font-medium transition-colors ${
                        active
                          ? "border-primary bg-primary text-primary-foreground"
                          : "border-border bg-muted/40 text-muted-foreground hover:border-primary/50 hover:text-foreground"
                      }`}
                    >
                      {stage.id}
                    </button>
                  );
                })}
              </div>
            </div>

            <div>
              <label htmlFor="task-input" className="block font-mono text-xs font-medium uppercase tracking-wider text-muted-foreground">
                Authorized Task Instructions (No Secrets)
              </label>
              <textarea
                id="task-input"
                rows={3}
                value={task}
                onChange={(e) => {
                  setTask(e.target.value);
                  setBundleInfo(null);
                }}
                className="mt-2 w-full rounded-md border border-input bg-background px-3 py-2 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
              />
              {!validation.ok && (
                <p className="mt-1 font-mono text-xs text-destructive">{validation.error}</p>
              )}
            </div>

            <div className="grid gap-3 sm:grid-cols-2">
              <div>
                <label htmlFor="repo-ref" className="block font-mono text-[11px] text-muted-foreground">
                  repo_ref
                </label>
                <input
                  id="repo-ref"
                  type="text"
                  value={repoRef}
                  onChange={(e) => setRepoRef(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-1.5 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
                />
              </div>
              <div>
                <label htmlFor="max-cost" className="block font-mono text-[11px] text-muted-foreground">
                  max_run_cost_usd
                </label>
                <input
                  id="max-cost"
                  type="number"
                  min={0}
                  step="0.5"
                  value={maxCostUsd}
                  onChange={(e) => setMaxCostUsd(e.target.value)}
                  className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-1.5 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
                />
                {costError && <p className="mt-1 font-mono text-[11px] text-destructive">{costError}</p>}
              </div>
              <div>
                <label htmlFor="env-select" className="block font-mono text-[11px] text-muted-foreground">
                  target_environment
                </label>
                <select
                  id="env-select"
                  value={environment}
                  onChange={(e) => setEnvironment(e.target.value as "staging" | "production")}
                  className="mt-1 w-full rounded-md border border-input bg-background px-2.5 py-1.5 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
                >
                  <option value="staging">staging</option>
                  <option value="production">production</option>
                </select>
              </div>
              <div>
                <label htmlFor="scope-select" className="block font-mono text-[11px] text-muted-foreground">
                  scope.kind / mode
                </label>
                <div className="mt-1 flex gap-2">
                  <select
                    id="scope-select"
                    value={scopeKind}
                    onChange={(e) =>
                      setScopeKind(
                        e.target.value as
                          | "entire_repository"
                          | "entire_site"
                          | "subsystem"
                          | "workflow"
                          | "single_page",
                      )
                    }
                    className="w-full rounded-md border border-input bg-background px-2 py-1.5 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="entire_repository">entire_repository</option>
                    <option value="entire_site">entire_site</option>
                    <option value="subsystem">subsystem</option>
                    <option value="workflow">workflow</option>
                    <option value="single_page">single_page</option>
                  </select>
                  <select
                    aria-label="Run mode"
                    value={mode}
                    onChange={(e) => setMode(e.target.value as "readonly" | "standard" | "deep")}
                    className="w-28 rounded-md border border-input bg-background px-2 py-1.5 font-mono text-xs text-foreground focus:border-primary focus:outline-none"
                  >
                    <option value="readonly">readonly</option>
                    <option value="standard">standard</option>
                    <option value="deep">deep</option>
                  </select>
                </div>
              </div>
            </div>

            <label className="flex items-center gap-2 font-mono text-xs text-muted-foreground">
              <input
                type="checkbox"
                checked={allowBranchPatches}
                onChange={(e) => setAllowBranchPatches(e.target.checked)}
                className="rounded border-input accent-primary"
              />
              allow_branch_patches (all other allow_* gates remain false by default)
            </label>

            <div className="flex flex-wrap items-center gap-3 pt-1">
              <button
                type="button"
                onClick={handleAssemble}
                disabled={!validation.ok || assembling}
                className="inline-flex items-center gap-2 rounded-md bg-primary px-4 py-2 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90 disabled:opacity-50"
              >
                <Terminal className="h-3.5 w-3.5" />
                {assembling ? "Assembling…" : "Assemble messages.json"}
              </button>

              {bundleInfo && (
                <button
                  type="button"
                  onClick={() => downloadTextFile(bundleInfo.json, "final-prompt-messages.json")}
                  className="inline-flex items-center gap-2 rounded-md border border-signal bg-signal/15 px-3.5 py-2 font-mono text-xs font-medium text-signal transition-colors hover:bg-signal/25"
                >
                  <Download className="h-3.5 w-3.5" />
                  Download messages.json ({(bundleInfo.charCount / 1000).toFixed(1)}k chars)
                </button>
              )}

              <button
                type="button"
                disabled={Boolean(costError)}
                onClick={() => downloadTextFile(apiRunRequest, "API_RUN_REQUEST.json")}
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-3.5 py-2 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:opacity-50"
              >
                <Download className="h-3.5 w-3.5" />
                Download API_RUN_REQUEST.json
              </button>
            </div>
          </div>

          <div className="min-w-0 flex flex-col gap-4 lg:col-span-5">
            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3.5 py-2.5">
                <div className="flex gap-1">
                  {(["curl", "typescript", "python", "mcp"] as SnippetTab[]).map((tab) => (
                    <button
                      key={tab}
                      type="button"
                      onClick={() => setSnippetTab(tab)}
                      className={`rounded px-2 py-1 font-mono text-[11px] uppercase transition-colors ${
                        snippetTab === tab
                          ? "bg-primary/20 text-primary"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {tab}
                    </button>
                  ))}
                </div>
                <button
                  type="button"
                  onClick={copySnippet}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-muted-foreground hover:text-primary"
                >
                  {copiedSnippet ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedSnippet ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-foreground/90">
                {snippets[snippetTab]}
              </pre>
            </div>

            <div className="overflow-hidden rounded-lg border border-border bg-card">
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-3.5 py-2">
                <span className="font-mono text-[11px] text-muted-foreground">
                  API_RUN_REQUEST.json (live preview)
                </span>
              </div>
              <pre className="max-h-60 overflow-auto p-4 font-mono text-[11px] leading-relaxed text-foreground/85">
                {apiRunRequest}
              </pre>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}