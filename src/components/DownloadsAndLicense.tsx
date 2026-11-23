import { useState } from "react";
import { Check, Copy, Download, FileText, Package, Scale } from "lucide-react";
import { toast } from "sonner";
import {
  KEY_CONTRACTS,
  MIT_LICENSE_TEXT,
  RELEASE_ARCHIVES,
  downloadTextFile,
} from "@/lib/final-prompt-data";

export function DownloadsAndLicense() {
  const [copiedSha, setCopiedSha] = useState<string | null>(null);
  const [copiedLicense, setCopiedLicense] = useState<boolean>(false);

  async function copySha(sha: string) {
    await navigator.clipboard.writeText(sha);
    setCopiedSha(sha);
    toast.success("Copied SHA-256 digest");
    setTimeout(() => setCopiedSha(null), 1800);
  }

  async function copyLicense() {
    await navigator.clipboard.writeText(MIT_LICENSE_TEXT);
    setCopiedLicense(true);
    toast.success("Copied MIT License");
    setTimeout(() => setCopiedLicense(false), 1800);
  }

  return (
    <>
      <section id="downloads" className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="flex flex-col gap-2 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-2xl font-semibold tracking-tight text-foreground sm:text-3xl">
                Downloads &amp; Release Artifacts
              </h2>
              <p className="mt-1 text-sm text-muted-foreground">
                Grab the clean MIT-licensed v1.3.0 package, the merged single-file master copy, individual schemas, or
                archived releases.
              </p>
            </div>
            <a
              href="/downloads/SHA256SUMS.txt"
              download="SHA256SUMS.txt"
              className="inline-flex items-center gap-1.5 self-start font-mono text-xs text-primary hover:underline"
            >
              <FileText className="h-3.5 w-3.5" />
              SHA256SUMS.txt
            </a>
          </div>

          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {RELEASE_ARCHIVES.map((item) => (
              <div
                key={item.filename}
                className={`min-w-0 flex flex-col justify-between rounded-lg border p-5 ${
                  item.primary ? "border-primary/70 bg-accent/30" : "border-border bg-card"
                }`}
              >
                <div>
                  <div className="flex items-center justify-between gap-2">
                    <div className="flex items-center gap-2">
                      <Package className={`h-4 w-4 ${item.primary ? "text-primary" : "text-muted-foreground"}`} />
                      <h3 className="text-sm font-semibold text-foreground">{item.name}</h3>
                    </div>
                    <span className="font-mono text-xs text-muted-foreground">{item.size}</span>
                  </div>
                  <p className="mt-2 text-xs leading-relaxed text-muted-foreground">{item.note}</p>
                </div>

                <div className="mt-4 space-y-2.5">
                  <button
                    type="button"
                    onClick={() => copySha(item.sha256)}
                    className="flex w-full items-center justify-between gap-2 rounded border border-border bg-background/80 px-2.5 py-1.5 font-mono text-[11px] text-muted-foreground hover:text-foreground"
                    title="Copy SHA-256"
                  >
                    <span className="truncate">sha256:{item.sha256}</span>
                    {copiedSha === item.sha256 ? (
                      <Check className="h-3.5 w-3.5 shrink-0 text-success" />
                    ) : (
                      <Copy className="h-3.5 w-3.5 shrink-0" />
                    )}
                  </button>

                  <div className="flex flex-wrap gap-2">
                    <a
                      href={item.href}
                      download={item.filename}
                      className={`inline-flex items-center gap-1.5 rounded-md px-3.5 py-2 font-mono text-xs font-medium transition-opacity hover:opacity-90 ${
                        item.primary
                          ? "bg-primary text-primary-foreground"
                          : "border border-border bg-secondary text-secondary-foreground"
                      }`}
                    >
                      <Download className="h-3.5 w-3.5" />
                      Download ZIP
                    </a>
                    {item.primary && (
                      <a
                        href="/downloads/Final_Prompt_v1.3.0_ALL_IN_ONE.md"
                        download="Final_Prompt_v1.3.0_ALL_IN_ONE.md"
                        className="inline-flex items-center gap-1.5 rounded-md border border-primary/50 bg-background px-3.5 py-2 font-mono text-xs font-medium text-primary transition-colors hover:bg-primary/10"
                      >
                        <Download className="h-3.5 w-3.5" />
                        Merged Master (.md)
                      </a>
                    )}
                  </div>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-8">
            <h3 className="font-mono text-xs font-semibold uppercase tracking-wider text-muted-foreground">
              Direct v1.3.0 Contracts, Prompts &amp; CLI Tools
            </h3>
            <div className="mt-3 grid gap-2 sm:grid-cols-2 lg:grid-cols-5">
              {KEY_CONTRACTS.map((file) => (
                <a
                  key={file.path}
                  href={`/downloads/v1.3.0/${file.path}`}
                  download={file.path.split("/").pop()}
                  className="flex items-center justify-between gap-2 rounded-md border border-border bg-card px-3 py-2 font-mono text-xs text-foreground transition-colors hover:border-primary/60 hover:text-primary"
                >
                  <span className="truncate">{file.label.split("/").pop()}</span>
                  <Download className="h-3.5 w-3.5 shrink-0 text-muted-foreground" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="open-source" className="border-t border-border py-16">
        <div className="mx-auto max-w-6xl px-4 sm:px-6">
          <div className="grid gap-8 lg:grid-cols-12">
            <div className="min-w-0 space-y-4 lg:col-span-5">
              <div className="flex items-center gap-2">
                <Scale className="h-5 w-5 text-primary" />
                <h2 className="text-2xl font-semibold tracking-tight text-foreground">
                  Open Source (MIT License)
                </h2>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                The Final Prompt repository includes the canonical <code className="text-foreground">final-prompt/</code>{" "}
                specification, merged <code className="text-foreground">FINAL_PROMPT_ALL_IN_ONE.md</code>, JSON schemas,
                offline Python validators, and this distribution site under the MIT License.
              </p>
              <pre className="overflow-x-auto rounded-lg border border-border bg-card p-4 font-mono text-xs leading-relaxed text-foreground/90">
{`# Validate package integrity locally
python3 final-prompt/tools/validate_package.py

# Build bounded API messages (1–5 modules)
python3 final-prompt/tools/assemble_api_messages.py \\
  --module 1 --module 2 --module 3 \\
  --task "Audit repository wiring gaps" \\
  --output ./messages.json`}
              </pre>
            </div>

            <div className="min-w-0 overflow-hidden rounded-lg border border-border bg-card lg:col-span-7">
              <div className="flex items-center justify-between border-b border-border bg-muted/50 px-4 py-2.5">
                <span className="font-mono text-xs font-medium text-foreground">LICENSE (MIT)</span>
                <div className="flex items-center gap-2">
                  <button
                    type="button"
                    onClick={copyLicense}
                    className="inline-flex items-center gap-1 rounded border border-border bg-secondary px-2.5 py-1 font-mono text-[11px] text-secondary-foreground hover:text-primary"
                  >
                    {copiedLicense ? <Check className="h-3 w-3 text-success" /> : <Copy className="h-3 w-3" />}
                    {copiedLicense ? "Copied" : "Copy"}
                  </button>
                  <button
                    type="button"
                    onClick={() => downloadTextFile(MIT_LICENSE_TEXT, "LICENSE", "text/plain;charset=utf-8")}
                    className="inline-flex items-center gap-1 rounded bg-primary px-2.5 py-1 font-mono text-[11px] font-medium text-primary-foreground"
                  >
                    <Download className="h-3 w-3" />
                    LICENSE
                  </button>
                </div>
              </div>
              <pre className="overflow-x-auto p-4 font-mono text-[11px] leading-relaxed text-muted-foreground whitespace-pre-wrap">
                {MIT_LICENSE_TEXT}
              </pre>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}