import { cpSync, mkdirSync, rmSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const root = dirname(fileURLToPath(import.meta.url));
const output = join(root, "dist");

rmSync(output, { force: true, recursive: true });
mkdirSync(output, { recursive: true });
cpSync(join(root, "port", "index.html"), join(output, "index.html"));
cpSync(join(root, "image"), join(output, "image"), { recursive: true });
