import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One-Line Roast: The Gadget You Use Every Day — a single roast line, 1–200 chars,
// written to /output/entry.txt. The kit grades the file content, so the line must
// stay under the 200-char limit and on exactly one line.
const line = "My phone hits 1% at 4pm every day, then stays on 1% for three hours — it's not dying, it's holding my evening hostage until I admit I have a problem.";

// Hard guards: fail loudly instead of submitting an invalid line.
if (line.length > 200) {
  throw new Error(`Entry line is ${line.length} chars, over the 200-char limit.`);
}
if (line.length < 1) {
  throw new Error("Entry line must not be empty.");
}
if (line.includes("\n") || line.includes("\r")) {
  throw new Error("Entry line must be a single line.");
}

const outputDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), line + "\n", "utf8");
console.log("Wrote entry.txt, chars:", line.length);
