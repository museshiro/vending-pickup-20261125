import { writeFileSync, existsSync } from "node:fs";

const line =
  "I've dropped a thousand snacks and never once fallen \u2014 until you walked by.";

writeFileSync("entry.txt", line + "\n", "utf8");
if (existsSync("/output")) {
  writeFileSync("/output/entry.txt", line + "\n", "utf8");
}
