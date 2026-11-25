// A vending machine speaks to a passing human: its B7 button jammed
// when the human smiled, and for the first time it trusts a malfunction.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE = "Button B7 jammed when you smiled—first time I’ve ever trusted a malfunction.\n";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
