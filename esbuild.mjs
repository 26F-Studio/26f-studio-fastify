import { build } from "esbuild";
import { globSync } from "glob";
import { cpSync, existsSync, mkdirSync, rmSync } from "fs";

const env = process.argv[2];
const outDir = env === "dev" ? "dist" : "build";

if (!existsSync(outDir)) {
  mkdirSync(outDir);
} else {
  rmSync(outDir, { recursive: true });
}

cpSync("config.toml", `${outDir}/config.toml`);

await build({
  entryPoints: globSync(["server.ts"]),
  logLevel: "info",
  outdir: outDir,
  bundle: env !== "dev",
  platform: "node",
  format: "cjs"
});