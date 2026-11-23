import { useState, useEffect } from "react";
import { Check, Copy, Download, FileCode2, Layers } from "lucide-react";
import { toast } from "sonner";
import {
  PHASE_GROUPS,
  STAGES,
  type PhaseCategory,
  type StageDef,
} from "@/lib/final-prompt-data";

export function StageExplorer() {
  const [activePhase, setActivePhase] = useState<PhaseCategory | "all">("all");
  const [selectedStage, setSelectedStage] = useState<StageDef>(STAGES[0]!);
  const [content, setContent] = useState<string>("");
  const [loading, setLoading] = useState<boolean>(false);
  const [copied, setCopied] = useState<boolean>(false);

  const visibleStages =
    activePhase === "all" ? STAGES : STAGES.filter((s) => s.category === activePhase);

  useEffect(() => {
    let cancelled = false;
    setLoading(true);
    fetch(`/downloads/v1.3.0/${selectedStage.path}`)
      .then((res) => {
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        return res.text();
      })
      .then((text) => {
        if (!cancelled) setContent(text);
      })
      .catch(() => {
        if (!cancelled) setContent(`Unable to load ${selectedStage.path}.`);
      })
      .finally(() => {
        if (!cancelled) setLoading(false);
      });
    return () => {
      cancelled = true;
    };
  }, [selectedStage.path]);

  async function handleCopy() {
    if (!content) return;
    await navigator.clipboard.writeText(content);
    setCopied(true);
    toast.success(`Copied Stage ${selectedStage.id} (${selectedStage.module})`);
    setTimeout(() => setCopied(false), 1800);
  }

  return (
    <section id="stages" className="border-t border-border py-16">
      <div className="mx-auto max-w-6xl px-4 sm:px-6">
        <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
              Canonical 25-Stage Pipeline
            </h2>
            <p className="mt-1 text-sm text-muted-foreground">
              Inspect any stage prompt directly from the v1.3.0 package, copy raw Markdown, or download the file.
            </p>
          </div>
          <a
            href="/downloads/v1.3.0/contracts/STAGE_ORDER.json"
            download="STAGE_ORDER.json"
            className="inline-flex items-center gap-2 self-start rounded-md border border-border bg-secondary px-3 py-1.5 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
          >
            <FileCode2 className="h-3.5 w-3.5" />
            STAGE_ORDER.json
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-2">
          <button
            type="button"
            onClick={() => setActivePhase("all")}
            className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
              activePhase === "all"
                ? "border-primary bg-primary/15 text-primary"
                : "border-border bg-card text-muted-foreground hover:text-foreground"
            }`}
          >
            All 25
          </button>
          {PHASE_GROUPS.map((group) => (
            <button
              key={group.id}
              type="button"
              onClick={() => setActivePhase(group.id)}
              className={`rounded-md border px-3 py-1.5 font-mono text-xs transition-colors ${
                activePhase === group.id
                  ? "border-primary bg-primary/15 text-primary"
                  : "border-border bg-card text-muted-foreground hover:text-foreground"
              }`}
            >
              {group.range} {group.label}
            </button>
          ))}
        </div>

        <div className="mt-6 grid gap-6 lg:grid-cols-12">
          <div className="max-h-[540px] space-y-1.5 overflow-y-auto pr-1 lg:col-span-5">
            {visibleStages.map((stage) => {
              const active = stage.id === selectedStage.id;
              return (
                <button
                  key={stage.id}
                  type="button"
                  onClick={() => setSelectedStage(stage)}
                  className={`flex w-full items-start gap-3 rounded-lg border px-3.5 py-2.5 text-left transition-colors ${
                    active
                      ? "border-primary bg-accent/60 text-foreground"
                      : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
                  }`}
                >
                  <span
                    className={`mt-0.5 font-mono text-xs font-semibold ${
                      active ? "text-primary" : "text-muted-foreground"
                    }`}
                  >
                    {stage.id}
                  </span>
                  <div className="min-w-0 flex-1">
                    <div className="flex items-center gap-2">
                      <span className="truncate text-sm font-medium text-foreground">
                        {stage.title}
                      </span>
                      {stage.addedInV13 && (
                        <span className="rounded bg-primary/15 px-1.5 py-0.5 font-mono text-[10px] font-medium text-primary">
                          v1.3
                        </span>
                      )}
                    </div>
                    <p className="mt-0.5 line-clamp-2 text-xs text-muted-foreground">
                      {stage.summary}
                    </p>
                  </div>
                </button>
              );
            })}
          </div>

          <div className="min-w-0 flex flex-col overflow-hidden rounded-lg border border-border bg-card lg:col-span-7">
            <div className="flex flex-wrap items-center justify-between gap-2 border-b border-border bg-muted/50 px-4 py-3">
              <div className="flex items-center gap-2 min-w-0">
                <Layers className="h-4 w-4 shrink-0 text-primary" />
                <span className="truncate font-mono text-xs font-medium text-foreground">
                  {selectedStage.path}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <button
                  type="button"
                  onClick={handleCopy}
                  disabled={loading || !content}
                  className="inline-flex items-center gap-1.5 rounded-md border border-border bg-secondary px-2.5 py-1 font-mono text-xs text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary disabled:opacity-50"
                >
                  {copied ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                  {copied ? "Copied" : "Copy"}
                </button>
                <a
                  href={`/downloads/v1.3.0/${selectedStage.path}`}
                  download={`${selectedStage.id}_${selectedStage.module}.md`}
                  className="inline-flex items-center gap-1.5 rounded-md bg-primary px-2.5 py-1 font-mono text-xs font-medium text-primary-foreground transition-opacity hover:opacity-90"
                >
                  <Download className="h-3.5 w-3.5" />
                  .md
                </a>
              </div>
            </div>

            <pre className="h-[480px] overflow-auto p-4 font-mono text-xs leading-relaxed text-foreground/90 whitespace-pre-wrap break-words">
              {loading ? "Loading stage prompt…" : content}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}