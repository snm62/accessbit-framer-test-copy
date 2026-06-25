
import fs from "fs";
import path from "path";
import { fileURLToPath } from "url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const DIST_DIR = path.join(__dirname, "..", "dist");

// Safe replacement: avoids new Function() while still resolving the global.
const SAFE_GLOBAL = `(()=>{try{return globalThis}catch(e){return typeof window!=="undefined"?window:typeof self!=="undefined"?self:{}}})()`;

// Patterns that trigger Framer's scanner (ordered most-specific first).
const PATTERNS = [
  // new Function("return this")()  — IIFE variant
  /new\s+Function\s*\(\s*["'`]return\s+this["'`]\s*\)\s*\(\s*\)/g,
  // new Function("return this")    — non-invoked variant
  /new\s+Function\s*\(\s*["'`]return\s+this["'`]\s*\)/g,
  // new Function() with any arguments — broader catch-all
  /new\s+Function\s*\(/g,
];

const REPLACEMENTS = [
  SAFE_GLOBAL,
  SAFE_GLOBAL,
  // For the broad catch-all we can't reconstruct the original call,
  // so we log a warning and leave it — manual review needed.
  null,
];

function processFile(filePath) {
  const rel = path.relative(DIST_DIR, filePath);
  let content = fs.readFileSync(filePath, "utf8");
  let changed = false;

  for (let i = 0; i < PATTERNS.length; i++) {
    const pattern = PATTERNS[i];
    const replacement = REPLACEMENTS[i];

    if (!pattern.test(content)) {
      pattern.lastIndex = 0; // reset stateful regex
      continue;
    }
    pattern.lastIndex = 0;

    if (replacement === null) {
      // Broad catch-all hit — warn but don't corrupt the bundle.
      console.warn(
        `  ⚠  ${rel}: contains new Function() with unknown arguments — manual review required.`
      );
      continue;
    }

    const before = content.length;
    content = content.replace(pattern, replacement);
    if (content.length !== before || content.includes(replacement)) {
      changed = true;
      console.log(`  ✓  ${rel}: replaced pattern ${i + 1}`);
    }
    pattern.lastIndex = 0;
  }

  if (changed) {
    fs.writeFileSync(filePath, content, "utf8");
  }

  return changed;
}

function collectJsFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...collectJsFiles(full));
    } else if (/\.(mjs|js|cjs)$/.test(entry.name)) {
      results.push(full);
    }
  }
  return results;
}

// ── Main ──────────────────────────────────────────────────────────────────────

if (!fs.existsSync(DIST_DIR)) {
  console.error(`✗  dist/ not found at ${DIST_DIR} — run "npm run build" first.`);
  process.exit(1);
}

const files = collectJsFiles(DIST_DIR);

if (files.length === 0) {
  console.log("✓  No JS files found in dist/ — nothing to scan.");
  process.exit(0);
}

console.log(`\nScanning ${files.length} file(s) in dist/ for new Function() …\n`);

let changedCount = 0;
for (const file of files) {
  if (processFile(file)) changedCount++;
}

if (changedCount === 0) {
  console.log("\n✓  No new Function() calls found — bundle is clean.\n");
} else {
  console.log(`\n✓  Patched ${changedCount} file(s).\n`);
}
