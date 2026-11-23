export type PhaseCategory =
  | "discovery"
  | "architecture_integration"
  | "repair"
  | "quality"
  | "verify_release"
  | "archive";

export interface StageDef {
  id: string;
  num: number;
  module: string;
  title: string;
  path: string;
  category: PhaseCategory;
  summary: string;
  addedInV13?: boolean;
}

export interface PhaseGroup {
  id: PhaseCategory;
  label: string;
  range: string;
  outcome: string;
}

export const PHASE_GROUPS: PhaseGroup[] = [
  { id: "discovery", label: "Discovery", range: "01–02", outcome: "Observe actual source and contracts before any edit" },
  { id: "architecture_integration", label: "Integration & Control", range: "03–04", outcome: "Close cross-component wiring gaps and audit host controls" },
  { id: "repair", label: "Core Repair", range: "05–11", outcome: "Safe concrete fixes, authority boundaries, and resilience" },
  { id: "quality", label: "Optimize & Polish", range: "12–19", outcome: "Measured performance, infra, a11y, SEO, legal, and visual polish" },
  { id: "verify_release", label: "Challenge & Gate", range: "20–23", outcome: "Adversarial tests, rollback rehearsal, final sweep, and release gate" },
  { id: "archive", label: "Optional Archive", range: "24–25", outcome: "Private source-grounded Founder's Guide and independent audit" },
];

export const STAGES: StageDef[] = [
  { id: "01", num: 1, module: "GAP_ANALYSIS", title: "Gap Analysis", path: "modules/01_GAP_ANALYSIS.md", category: "discovery", summary: "Read-only baseline, real inventory, and initial P0–P3 register." },
  { id: "02", num: 2, module: "ARCHITECTURE_CONTRACTS", title: "Architecture Contracts", path: "modules/02_ARCHITECTURE_CONTRACTS.md", category: "discovery", summary: "Define boundaries, invariants, real interactions, and lifecycles." },
  { id: "03", num: 3, module: "SYSTEM_INTEGRATION_CLOSURE", title: "System Integration Closure", path: "modules/03_SYSTEM_INTEGRATION_CLOSURE.md", category: "architecture_integration", summary: "Trace producer → consumer → persistent state and close verified wiring gaps.", addedInV13: true },
  { id: "04", num: 4, module: "API_ORCHESTRATION_INTEGRITY", title: "API Orchestration Integrity", path: "modules/04_API_ORCHESTRATION_INTEGRITY.md", category: "architecture_integration", summary: "Review host tenancy, approval binding, budgets, and idempotency.", addedInV13: true },
  { id: "05", num: 5, module: "BACKEND_API", title: "Backend & API", path: "modules/05_BACKEND_API.md", category: "repair", summary: "Concrete server, route, and API contract repair." },
  { id: "06", num: 6, module: "FRONTEND", title: "Frontend", path: "modules/06_FRONTEND.md", category: "repair", summary: "UI behavior, state flow, and functional correctness." },
  { id: "07", num: 7, module: "COMPONENT", title: "Component", path: "modules/07_COMPONENT.md", category: "repair", summary: "Targeted repairs on existing UI components." },
  { id: "08", num: 8, module: "SECURITY", title: "Security", path: "modules/08_SECURITY.md", category: "repair", summary: "Authorization, trust boundaries, and data exposure; P0 preempts all work." },
  { id: "09", num: 9, module: "DATA_RECOVERY", title: "Data Recovery", path: "modules/09_DATA_RECOVERY.md", category: "repair", summary: "Durability, migrations, integrity, backup, and verified recovery." },
  { id: "10", num: 10, module: "BUSINESS_LOGIC", title: "Business Logic", path: "modules/10_BUSINESS_LOGIC.md", category: "repair", summary: "Domain rules, side effects, transactions, and billing correctness." },
  { id: "11", num: 11, module: "ARCHITECTURAL_RESILIENCE", title: "Architectural Resilience", path: "modules/11_ARCHITECTURAL_RESILIENCE.md", category: "repair", summary: "Timeouts, retries, circuit breakers, backpressure, and crash recovery.", addedInV13: true },
  { id: "12", num: 12, module: "PERFORMANCE", title: "Performance", path: "modules/12_PERFORMANCE.md", category: "quality", summary: "Measure and optimize proven bottlenecks and runtime cost." },
  { id: "13", num: 13, module: "INFRA_CICD", title: "Infra & CI/CD", path: "modules/13_INFRA_CICD.md", category: "quality", summary: "Build reproducibility, infrastructure, and delivery pipeline integrity." },
  { id: "14", num: 14, module: "OBSERVABILITY", title: "Observability", path: "modules/14_OBSERVABILITY.md", category: "quality", summary: "Runtime error truth, alerts, traces, and incident visibility." },
  { id: "15", num: 15, module: "ACCESSIBILITY", title: "Accessibility", path: "modules/15_ACCESSIBILITY.md", category: "quality", summary: "Keyboard, contrast, ARIA, and functional accessibility repair." },
  { id: "16", num: 16, module: "SEO_MACHINE_READABILITY", title: "SEO & Machine Readability", path: "modules/16_SEO_MACHINE_READABILITY.md", category: "quality", summary: "Metadata, structured data, and crawlability for discoverable web surfaces." },
  { id: "17", num: 17, module: "LEGAL_GOVERNANCE", title: "Legal & Governance", path: "modules/17_LEGAL_GOVERNANCE.md", category: "quality", summary: "Factual policy and compliance gaps; publication stays gated." },
  { id: "18", num: 18, module: "BRANDING", title: "Branding", path: "modules/18_BRANDING.md", category: "quality", summary: "Existing brand consistency; rebrand requires explicit approval." },
  { id: "19", num: 19, module: "UNIVERSAL_VISUAL_POLISH", title: "Universal Visual Polish", path: "modules/19_UNIVERSAL_VISUAL_POLISH.md", category: "quality", summary: "Appearance, motion, typography, spacing, and mobile cohesion after stabilization.", addedInV13: true },
  { id: "20", num: 20, module: "TEST_ADVERSARIAL", title: "Adversarial Testing", path: "modules/20_TEST_ADVERSARIAL.md", category: "verify_release", summary: "Independently challenge repaired paths with negative test cases and real receipts." },
  { id: "21", num: 21, module: "DEPLOYMENT_ROLLBACK", title: "Deployment & Rollback", path: "modules/21_DEPLOYMENT_ROLLBACK.md", category: "verify_release", summary: "Staging verification and rollback rehearsal; live deploy stays gated." },
  { id: "22", num: 22, module: "FINAL_GAP_SWEEP", title: "Final Gap Sweep", path: "modules/22_FINAL_GAP_SWEEP.md", category: "verify_release", summary: "Mandatory independent blind-spot sweep across original requirements." },
  { id: "23", num: 23, module: "RELEASE_GATE", title: "Release Gate", path: "modules/23_RELEASE_GATE.md", category: "verify_release", summary: "Evidence-backed software SHIP/HOLD verdict within verified scope." },
  { id: "24", num: 24, module: "FOUNDERS_GUIDE", title: "Founder's Guide", path: "modules/24_FOUNDERS_GUIDE.md", category: "archive", summary: "Optional authorized private Owner's Manual generated after software verdict." },
  { id: "25", num: 25, module: "GUIDE_AUDIT", title: "Guide Audit", path: "modules/25_GUIDE_AUDIT.md", category: "archive", summary: "Independent documentation audit with separate distribution verdict." },
];

export interface WorkflowPreset {
  id: string;
  label: string;
  modules: number[];
  task: string;
}

export const WORKFLOW_PRESETS: WorkflowPreset[] = [
  {
    id: "wiring",
    label: "Wiring Gaps (01–03)",
    modules: [1, 2, 3],
    task: "Run read-only discovery, map architecture contracts, and identify evidence-backed missing producer-to-consumer integrations.",
  },
  {
    id: "resilience",
    label: "Resilience (02, 11, 20)",
    modules: [2, 11, 20],
    task: "Audit existing external dependencies for timeouts, bounded retries, circuit breakers, and verify fault paths with adversarial tests.",
  },
  {
    id: "polish",
    label: "Visual Polish (06, 15, 19)",
    modules: [6, 15, 19],
    task: "Verify UI state flows, fix accessibility regressions, and apply restrained visual polish to existing responsive surfaces.",
  },
  {
    id: "api-host",
    label: "API Host Integrity (01, 04, 08)",
    modules: [1, 4, 8],
    task: "Inspect existing API/MCP host controls for tenancy, approval binding, budget enforcement, idempotency, and authorization boundaries.",
  },
  {
    id: "release",
    label: "Release Gate (20–23)",
    modules: [20, 21, 22, 23],
    task: "Challenge repaired paths adversarially, verify rollback procedures, run independent final gap sweep, and issue an evidence-backed release verdict.",
  },
];

export interface ReleaseArchive {
  name: string;
  version: string;
  href: string;
  filename: string;
  size: string;
  sha256: string;
  note: string;
  primary?: boolean;
}

export const RELEASE_ARCHIVES: ReleaseArchive[] = [
  {
    name: "Final Prompt v1.3.0 (MIT Integrated API)",
    version: "v1.3.0",
    href: "/downloads/Final_Prompt_v1.3.0_MIT.zip",
    filename: "Final_Prompt_v1.3.0_MIT.zip",
    size: "212 KB",
    sha256: "178c3cf4d4eb4036b851bd6b4b428bb4e86575f4dba7fb1d24edc0db5de09472",
    note: "Canonical 25-stage suite, merged FINAL_PROMPT_ALL_IN_ONE.md, API/MCP schemas, offline CLI tools, MIT LICENSE (56 files).",
    primary: true,
  },
  {
    name: "Final Prompt v1.1 (Hardened Complete)",
    version: "v1.1",
    href: "/downloads/archive/FINAL_PROMPT_v1.1_HARDENED_COMPLETE.zip",
    filename: "FINAL_PROMPT_v1.1_HARDENED_COMPLETE.zip",
    size: "114 KB",
    sha256: "a5cb1f25ce55805326c5a56fcb89ad03730883a8c6805761d3ceaf92e007ecd2",
    note: "Historical 21-stage hardened baseline with Founder's Guide contract.",
  },
  {
    name: "Final Prompt MCP API v1.0",
    version: "v1.0-mcp",
    href: "/downloads/archive/Final_Prompt_MCP_API_v1.0.zip",
    filename: "Final_Prompt_MCP_API_v1.0.zip",
    size: "74 KB",
    sha256: "507ae9dc655578b187ed7ac9cd62fead64e7aabfc561fd44057bb3f99d6beae0",
    note: "Historical 19-stage MCP/API specification release.",
  },
  {
    name: "Final Prompt v1.0 Complete Package",
    version: "v1.0",
    href: "/downloads/archive/Final_Prompt_v1.0_COMPLETE_PACKAGE.zip",
    filename: "Final_Prompt_v1.0_COMPLETE_PACKAGE.zip",
    size: "101 KB",
    sha256: "8f94e6e56b80734c93b7454b0c92042cc19e1de9d5b1eea5f3f8b070cc3466ff",
    note: "Original 20-module package with all-in-one prompt and FPL spec.",
  },
];

export const KEY_CONTRACTS = [
  { label: "00_MASTER_PROMPT.md", path: "00_MASTER_PROMPT.md", kind: "Controller" },
  { label: "api/00_API_SYSTEM_PROMPT.md", path: "api/00_API_SYSTEM_PROMPT.md", kind: "API System" },
  { label: "api/API_INTEGRATION_GUIDE.md", path: "api/API_INTEGRATION_GUIDE.md", kind: "API Guide" },
  { label: "contracts/STAGE_ORDER.json", path: "contracts/STAGE_ORDER.json", kind: "Schema" },
  { label: "contracts/API_RUN_REQUEST_SCHEMA.json", path: "contracts/API_RUN_REQUEST_SCHEMA.json", kind: "Schema" },
  { label: "contracts/API_RUN_RESPONSE_SCHEMA.json", path: "contracts/API_RUN_RESPONSE_SCHEMA.json", kind: "Schema" },
  { label: "contracts/RUN_STATE_SCHEMA.json", path: "contracts/RUN_STATE_SCHEMA.json", kind: "Schema" },
  { label: "contracts/MCP_API_PRODUCT_SPEC.md", path: "contracts/MCP_API_PRODUCT_SPEC.md", kind: "MCP Spec" },
  { label: "tools/assemble_api_messages.py", path: "tools/assemble_api_messages.py", kind: "CLI Tool" },
  { label: "tools/validate_package.py", path: "tools/validate_package.py", kind: "CLI Tool" },
];

export const MIT_LICENSE_TEXT = `MIT License

Copyright (c) 2026 The Final Prompt Contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.`;

export const MAX_MODULES_PER_CALL = 5;
export const MAX_TASK_CHARS = 12_000;
export const DEFAULT_MAX_BUNDLE_CHARS = 160_000;

export interface AssemblerMessage {
  role: "system" | "developer" | "user";
  content: string;
}

export interface AssemblerValidation {
  ok: boolean;
  error?: string;
  sortedModules: number[];
}

export function validateAssemblyInput(modules: number[], task: string): AssemblerValidation {
  const uniqueSorted = [...new Set(modules)].sort((a, b) => a - b);
  if (uniqueSorted.length === 0) {
    return { ok: false, error: "Select at least 1 stage module (01–25).", sortedModules: [] };
  }
  if (uniqueSorted.length > MAX_MODULES_PER_CALL) {
    return {
      ok: false,
      error: `Refusing more than ${MAX_MODULES_PER_CALL} modules in one call; split into checkpointed phases.`,
      sortedModules: uniqueSorted,
    };
  }
  if (uniqueSorted.some((n) => !Number.isInteger(n) || n < 1 || n > 25)) {
    return { ok: false, error: "Invalid stage number: choose stages 1–25.", sortedModules: uniqueSorted };
  }
  const trimmed = task.trim();
  if (!trimmed) {
    return { ok: false, error: "Task instructions must be non-empty.", sortedModules: uniqueSorted };
  }
  if (task.length > MAX_TASK_CHARS) {
    return {
      ok: false,
      error: `Task exceeds ${MAX_TASK_CHARS.toLocaleString()} characters.`,
      sortedModules: uniqueSorted,
    };
  }
  return { ok: true, sortedModules: uniqueSorted };
}

export function buildBoundedMessages(params: {
  systemPrompt: string;
  masterPrompt: string;
  moduleContents: Array<{ stage: StageDef; content: string }>;
  task: string;
  maxChars?: number;
}): { ok: true; messages: AssemblerMessage[]; json: string; charCount: number } | { ok: false; error: string } {
  const maxChars = params.maxChars ?? DEFAULT_MAX_BUNDLE_CHARS;
  const messages: AssemblerMessage[] = [
    { role: "system", content: params.systemPrompt },
    { role: "developer", content: params.masterPrompt },
    ...params.moduleContents.map(({ stage, content }) => ({
      role: "developer" as const,
      content: `FINAL PROMPT TRUSTED MODULE ${stage.id} (${stage.module})\n\n${content}`,
    })),
    { role: "user", content: params.task },
  ];
  const json = JSON.stringify(messages, null, 2);
  if (json.length > maxChars) {
    return {
      ok: false,
      error: `Generated ${json.length.toLocaleString()} chars > limit ${maxChars.toLocaleString()}; split into smaller checkpointed phases.`,
    };
  }
  return { ok: true, messages, json, charCount: json.length };
}

export function downloadTextFile(content: string, filename: string, mime = "application/json;charset=utf-8") {
  const blob = new Blob([content], { type: mime });
  const url = URL.createObjectURL(blob);
  const a = document.createElement("a");
  a.href = url;
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  a.remove();
  setTimeout(() => URL.revokeObjectURL(url), 30_000);
}