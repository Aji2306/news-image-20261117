// news-image-20261117 entry: writes the front-page poster held in this
// repository to the grader's output directory. Node 22, standard library
// only, no network access. The poster is a fixed file, so both runs of the
// program write byte-identical output. Run locally with:
//   mkdir -p out && MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";

mkdirSync(outDir, { recursive: true });
copyFileSync(join(here, "entry.png"), join(outDir, "entry.png"));
