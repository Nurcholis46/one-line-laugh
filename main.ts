// The One-Line Laugh — u-ronigrv-the-one-line-laugh-7ccca46f
// One funny line, a single sentence of at most 200 characters, written
// to /output/entry.txt. The joke turns on an everyday truth (the phone
// nagging you about screen time) with a surprise at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY_LINE =
  "My phone's screen-time report says I spent 6 hours on it yesterday, " +
  "which is the closest thing to a performance review I've had in years.";

// The line must be a single sentence, 1-200 characters, and not only
// whitespace — the gate refuses anything else, so check before writing.
function main(): void {
  const text = ENTRY_LINE.trim();
  if (text.length < 1 || text.length > 200) {
    throw new Error(`entry must be 1-200 characters, got ${text.length}`);
  }
  if (!text.includes(" ")) {
    throw new Error("entry must be a sentence, not a single word");
  }
  if (!text.endsWith(".")) {
    throw new Error("entry must end as one finished sentence");
  }
  mkdirSync("/output", { recursive: true });
  writeFileSync("/output/entry.txt", text, "utf8");
}

main();
