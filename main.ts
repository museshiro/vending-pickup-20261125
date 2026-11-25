import { mkdirSync, writeFileSync } from "node:fs";

// One-liner entry: writes the line ONLY to /output/entry.txt, the grader's
// path. No relative write: the grading sandbox is read-only, so a local
// writeFileSync("entry.txt", ...) throws and the run fails.
const line =
  "I've dropped a thousand snacks and never once fallen — until you walked by.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line + "\n", "utf8");
