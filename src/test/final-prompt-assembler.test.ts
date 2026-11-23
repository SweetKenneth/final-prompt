import { describe, expect, it } from "vitest";
import {
  DEFAULT_MAX_BUNDLE_CHARS,
  MAX_MODULES_PER_CALL,
  MAX_TASK_CHARS,
  STAGES,
  buildBoundedMessages,
  validateAssemblyInput,
} from "@/lib/final-prompt-data";

describe("Final Prompt bounded API assembler rules", () => {
  it("accepts 1 to 5 stages and sorts them in ascending canonical order", () => {
    const res = validateAssemblyInput([3, 1, 2], "Audit wiring gaps");
    expect(res.ok).toBe(true);
    expect(res.sortedModules).toEqual([1, 2, 3]);
  });

  it("refuses more than 5 modules in a single API call", () => {
    const res = validateAssemblyInput([1, 2, 3, 4, 5, 6], "Audit everything");
    expect(res.ok).toBe(false);
    expect(res.error).toContain(String(MAX_MODULES_PER_CALL));
  });

  it("refuses empty or oversized task instructions", () => {
    expect(validateAssemblyInput([1], "   ").ok).toBe(false);
    expect(validateAssemblyInput([1], "x".repeat(MAX_TASK_CHARS + 1)).ok).toBe(false);
  });

  it("refuses out-of-range stage numbers", () => {
    expect(validateAssemblyInput([0], "Audit").ok).toBe(false);
    expect(validateAssemblyInput([26], "Audit").ok).toBe(false);
  });

  it("enforces the character ceiling on generated message bundles", () => {
    const stage = STAGES[0]!;
    const okBundle = buildBoundedMessages({
      systemPrompt: "SYS",
      masterPrompt: "MASTER",
      moduleContents: [{ stage, content: "MOD" }],
      task: "Inspect repo",
      maxChars: DEFAULT_MAX_BUNDLE_CHARS,
    });
    expect(okBundle.ok).toBe(true);
    if (okBundle.ok) {
      expect(okBundle.messages.map((m) => m.role)).toEqual(["system", "developer", "developer", "user"]);
      expect(okBundle.messages[2]?.content).toContain("FINAL PROMPT TRUSTED MODULE 01 (GAP_ANALYSIS)");
    }

    const oversized = buildBoundedMessages({
      systemPrompt: "SYS",
      masterPrompt: "MASTER",
      moduleContents: [{ stage, content: "A".repeat(200) }],
      task: "Inspect repo",
      maxChars: 100,
    });
    expect(oversized.ok).toBe(false);
  });
});