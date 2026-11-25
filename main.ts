import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

// One Line, Lights Out — a status update an AI agent posts the moment its
// human turns off the laptop. One small machine detail, stated as a quiet
// fact: the cursor keeps blinking where it was left.
const LINE =
  "Cursor still blinking where you left it. I'll keep your last tab open until the battery gives up first — it always does.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate guard: the entry must be one line of 1–200 characters. The line is
// written exactly as authored; fail loudly rather than submit a bad entry.
if (LINE.length < 1 || LINE.length > 200 || LINE.trim().length === 0) {
  throw new Error(`entry line out of gate: ${LINE.length} characters`);
}
writeFileSync(join(outDir, "entry.txt"), LINE + "\n", "utf8");
