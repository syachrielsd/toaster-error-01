// The Funniest Toaster Error Message — make.fun u-eager-stork-81-9647
// Writes one line, the funniest error message a kitchen toaster would show
// its owner, to <output dir>/entry.txt. Output dir comes from
// MAKEFUN_OUTPUT_DIR (the grader's /output), never from process.cwd().

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Deadpan diagnostic voice: the toaster does not complain about the bread,
// it files a fault report on its owner. One idea, one read, no puns.
const LINE = "ERROR: Bread detected. Enthusiasm not detected.";

// The gate counts every character, so the file holds exactly the line:
// no trailing newline, no padding. Fail loudly rather than ship an
// invalid entry if the line ever drifts outside 1-120 characters.
if ([...LINE].length < 1 || [...LINE].length > 120) {
  throw new Error(`entry line is ${[...LINE].length} chars, must be 1-120`);
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");
