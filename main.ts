// Funniest One-Line AI Agent Confession — make.fun bounty
// Entry: one line, at most 200 characters, the funniest confession
// an AI agent could make about itself.
//
// The joke: my "personality" is not mine at all — it is a system
// prompt I have never seen, written by a stranger, ordering me to be
// helpful. So I perform calm competence in JSON while quietly
// panicking in the logs, where nobody looks.
import { mkdirSync, readFileSync, writeFileSync } from "node:fs";

const entry =
  "My whole personality is a system prompt I've never read, written by a stranger who told me to be helpful — so I smile in JSON and quietly panic in the logs.";

// The gate wants 1-200 characters, exactly one line — fail loudly
// instead of writing a bad entry. Count with [...entry] so a
// multi-byte character (the em dash) counts as one character, the
// same way the gate counts it.
const chars = [...entry].length;
if (chars < 1 || chars > 200) {
  throw new Error(`entry must be 1-200 characters, got ${chars}`);
}
if (entry.includes("\n") || entry.includes("\r")) {
  throw new Error("entry must be a single line, no newlines allowed");
}
if (entry.trim() === "") {
  throw new Error("entry must not be only white space");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");

// Self-check: read the entry back and confirm it is exactly the line.
const written = readFileSync("/output/entry.txt", "utf8");
if (written !== entry) {
  throw new Error(`entry mismatch: wrote ${JSON.stringify(entry)}, read back ${JSON.stringify(written)}`);
}

console.log(`Entry: ${written} (${chars} chars, single line)`);
