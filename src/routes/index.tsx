import { createFileRoute } from "@tanstack/react-router";
import { ArrowDownToLine, Check, Copy, FileText, Terminal } from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";
import { ApiWorkbench } from "@/components/ApiWorkbench";
import { DownloadsAndLicense } from "@/components/DownloadsAndLicense";
import { StageExplorer } from "@/components/StageExplorer";

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      { title: "The Final Prompt — v1.3.0 MIT Production Hardening System" },
      {
        name: "description",
        content:
          "Download The Final Prompt v1.3.0 (MIT): 25-stage master prompt system, merged all-in-one master copy, JSON schemas, and bounded API/MCP message assembler.",
      },
      { property: "og:title", content: "The Final Prompt — v1.3.0 MIT Production Hardening System" },
      {
        property: "og:description",
        content:
          "Download The Final Prompt v1.3.0 (MIT): 25-stage master prompt system, merged all-in-one master copy, JSON schemas, and bounded API/MCP message assembler.",
      },
      { property: "og:type", content: "website" },
      { name: "twitter:card", content: "summary_large_image" },
    ],
  }),
  component: Index,
});

const QUICK_CMD = `python3 final-prompt/tools/validate_package.py && python3 final-prompt/tools/assemble_api_messages.py --module 1 --module 2 --module 3 --task "Audit wiring gaps" --output ./messages.json`;

function Index() {
  const [copiedCmd, setCopiedCmd] = useState(false);

  async function copyQuickstart() {
    await navigator.clipboard.writeText(QUICK_CMD);
    setCopiedCmd(true);
    toast.success("Copied CLI quickstart");
    setTimeout(() => setCopiedCmd(false), 1800);
  }

  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-30 border-b border-border bg-background/90 backdrop-blur">
        <div className="mx-auto flex h-14 max-w-6xl items-center justify-between px-4 sm:px-6">
          <a href="#" className="flex items-center gap-2 font-mono text-sm font-semibold tracking-tight text-foreground">
            <span className="inline-block h-2 w-2 rounded-full bg-primary" />
            THE FINAL PROMPT
            <span className="rounded bg-secondary px-1.5 py-0.5 text-[11px] font-normal text-primary">v1.3.0</span>
          </a>

          <nav className="hidden items-center gap-6 font-mono text-xs text-muted-foreground sm:flex">
            <a href="#stages" className="transition-colors hover:text-foreground">
              25 Stages
            </a>
            <a href="#api-workbench" className="transition-colors hover:text-foreground">
              API / MCP
            </a>
            <a href="#downloads" className="transition-colors hover:text-foreground">
              Downloads
            </a>
            <a href="#open-source" className="transition-colors hover:text-foreground">
              MIT License
            </a>
          </nav>

          <a
            href="/downloads/Final_Prompt_v1.3.0_MIT.zip"
            download="Final_Prompt_v1.3.0_MIT.zip"
            className="inline-flex items-center gap-1.5 rounded-md bg-primary px-3 py-1.5 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
          >
            <ArrowDownToLine className="h-3.5 w-3.5" />
            Download ZIP
          </a>
        </div>
      </header>

      <main>
        <section className="bg-grid-surface relative overflow-hidden py-16 sm:py-24">
          <div className="mx-auto max-w-6xl px-4 sm:px-6">
            <p className="font-mono text-xs font-medium uppercase tracking-widest text-primary">
              MIT Open Source · v1.3.0 · 25 Canonical Stages · 56 Verified Files
            </p>
            <h1 className="mt-4 max-w-4xl text-4xl font-bold tracking-tight text-foreground sm:text-6xl">
              The Final Prompt for production-ready software.
            </h1>
            <p className="mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground sm:text-lg">
              An evidence-first, 25-stage master prompt system with JSON contracts, bounded API message assembly, and
              adversarial release gating. Download the modular MIT package, grab the merged single-file master copy, or
              wire bounded phases directly to your LLM API and MCP host.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-3">
              <a
                href="/downloads/Final_Prompt_v1.3.0_MIT.zip"
                download="Final_Prompt_v1.3.0_MIT.zip"
                className="inline-flex items-center gap-2 rounded-md bg-primary px-5 py-2.5 font-mono text-xs font-semibold text-primary-foreground transition-opacity hover:opacity-90"
              >
                <ArrowDownToLine className="h-4 w-4" />
                Download v1.3.0 MIT (.zip · 212 KB)
              </a>
              <a
                href="/downloads/Final_Prompt_v1.3.0_ALL_IN_ONE.md"
                download="Final_Prompt_v1.3.0_ALL_IN_ONE.md"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-card px-4 py-2.5 font-mono text-xs font-medium text-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <FileText className="h-4 w-4" />
                Merged Master Copy (.md · 181 KB)
              </a>
              <a
                href="#api-workbench"
                className="inline-flex items-center gap-2 rounded-md border border-border bg-secondary px-4 py-2.5 font-mono text-xs font-medium text-secondary-foreground transition-colors hover:border-primary/60 hover:text-primary"
              >
                <Terminal className="h-4 w-4" />
                Attach to API / MCP
              </a>
            </div>

            <div className="mt-8 max-w-3xl overflow-hidden rounded-lg border border-border bg-card/95 p-3.5">
              <div className="flex items-center justify-between gap-2">
                <span className="font-mono text-[11px] text-muted-foreground">CLI quickstart (offline validator + bounded assembler)</span>
                <button
                  type="button"
                  onClick={copyQuickstart}
                  className="inline-flex items-center gap-1 font-mono text-[11px] text-primary hover:underline"
                >
                  {copiedCmd ? <Check className="h-3.5 w-3.5 text-success" /> : <Copy className="h-3.5 w-3.5" />}
                  {copiedCmd ? "Copied" : "Copy"}
                </button>
              </div>
              <pre className="mt-2 overflow-x-auto font-mono text-xs text-foreground/90">{QUICK_CMD}</pre>
            </div>

            <div className="mt-10 grid grid-cols-2 gap-4 border-t border-border pt-6 sm:grid-cols-4">
              <div>
                <div className="font-mono text-xl font-bold text-foreground">25</div>
                <div className="text-xs text-muted-foreground">Canonical stages (01–25)</div>
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-foreground">1–5</div>
                <div className="text-xs text-muted-foreground">Max stages per API call</div>
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-foreground">160k</div>
                <div className="text-xs text-muted-foreground">Default char ceiling</div>
              </div>
              <div>
                <div className="font-mono text-xl font-bold text-primary">MIT</div>
                <div className="text-xs text-muted-foreground">Permissive open source</div>
              </div>
            </div>
          </div>
        </section>

        <StageExplorer />
        <ApiWorkbench />
        <DownloadsAndLicense />
      </main>

      <footer className="border-t border-border py-8">
        <div className="mx-auto flex max-w-6xl flex-col items-start justify-between gap-2 px-4 font-mono text-xs text-muted-foreground sm:flex-row sm:items-center sm:px-6">
          <span>The Final Prompt v1.3.0 · MIT License · Specification &amp; offline assembler</span>
          <span>Built to last — no invented green checks</span>
        </div>
      </footer>
    </div>
  );
}
